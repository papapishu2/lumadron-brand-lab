import * as React from 'react'
import { render } from '@react-email/components'
import { createClient } from '@supabase/supabase-js'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { TEMPLATES } from '@/lib/email-templates/registry'

const SITE_NAME = 'Lumadron'
const SENDER_DOMAIN = 'notify.lumadron.com'
const FROM_DOMAIN = 'lumadron.com'

const ContactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(254),
  company: z.string().max(200).optional().default(''),
  phone: z.string().max(50).optional().default(''),
  industry: z.string().max(100).optional().default(''),
  message: z.string().min(1).max(5000),
})

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('')
}

async function enqueueTemplate(
  supabase: ReturnType<typeof createClient>,
  templateName: string,
  recipient: string,
  data: Record<string, any>,
  idempotencyKey: string,
) {
  const template = TEMPLATES[templateName]
  if (!template) throw new Error(`Template ${templateName} not found`)

  const normalized = recipient.toLowerCase()
  const messageId = crypto.randomUUID()

  // Suppression check
  const { data: suppressed } = await supabase
    .from('suppressed_emails')
    .select('id')
    .eq('email', normalized)
    .maybeSingle()
  if (suppressed) return { skipped: true, reason: 'suppressed' }

  // Get or create unsubscribe token
  let unsubscribeToken: string
  const { data: existing } = await supabase
    .from('email_unsubscribe_tokens')
    .select('token, used_at')
    .eq('email', normalized)
    .maybeSingle()
  if (existing && !existing.used_at) {
    unsubscribeToken = existing.token as string
  } else {
    unsubscribeToken = generateToken()
    await supabase
      .from('email_unsubscribe_tokens')
      .upsert(
        { token: unsubscribeToken, email: normalized },
        { onConflict: 'email', ignoreDuplicates: true },
      )
    const { data: stored } = await supabase
      .from('email_unsubscribe_tokens')
      .select('token')
      .eq('email', normalized)
      .maybeSingle()
    if (stored) unsubscribeToken = stored.token as string
  }

  const element = React.createElement(template.component, data)
  const html = await render(element)
  const text = await render(element, { plainText: true })
  const subject =
    typeof template.subject === 'function' ? template.subject(data) : template.subject

  await supabase.from('email_send_log').insert({
    message_id: messageId,
    template_name: templateName,
    recipient_email: recipient,
    status: 'pending',
  })

  const { error } = await supabase.rpc('enqueue_email', {
    queue_name: 'transactional_emails',
    payload: {
      message_id: messageId,
      to: recipient,
      from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
      sender_domain: SENDER_DOMAIN,
      subject,
      html,
      text,
      purpose: 'transactional',
      label: templateName,
      idempotency_key: idempotencyKey,
      unsubscribe_token: unsubscribeToken,
      queued_at: new Date().toISOString(),
    },
  })
  if (error) throw error
  return { queued: true }
}

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = process.env.SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        if (!supabaseUrl || !serviceKey) {
          return Response.json({ error: 'Server configuration error' }, { status: 500 })
        }

        let parsed
        try {
          const body = await request.json()
          parsed = ContactSchema.parse(body)
        } catch (err) {
          return Response.json(
            { error: 'Datos inválidos', details: err instanceof Error ? err.message : String(err) },
            { status: 400 },
          )
        }

        const supabase = createClient(supabaseUrl, serviceKey)
        const submissionId = crypto.randomUUID()

        try {
          // Notification to Lumadron team (template has fixed `to: drones@lumadron.com`)
          await enqueueTemplate(
            supabase,
            'contact-notification',
            'drones@lumadron.com',
            parsed,
            `contact-notify-${submissionId}`,
          )
          // Confirmation to the visitor
          await enqueueTemplate(
            supabase,
            'contact-confirmation',
            parsed.email,
            { name: parsed.name },
            `contact-confirm-${submissionId}`,
          )
        } catch (err) {
          console.error('Failed to enqueue contact emails', err)
          return Response.json(
            { error: 'No se pudo enviar el mensaje. Probá de nuevo en unos minutos.' },
            { status: 500 },
          )
        }

        return Response.json({ success: true })
      },
    },
  },
})
