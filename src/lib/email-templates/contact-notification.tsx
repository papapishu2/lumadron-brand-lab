import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

const SITE_NAME = 'Lumadron'

interface ContactNotificationProps {
  name?: string
  email?: string
  company?: string
  phone?: string
  industry?: string
  message?: string
}

const ContactNotificationEmail = ({
  name,
  email,
  company,
  phone,
  industry,
  message,
}: ContactNotificationProps) => (
  <Html lang="es" dir="ltr">
    <Head />
    <Preview>Nueva consulta de {name || 'un visitante'} en {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nueva consulta del sitio</Heading>
        <Text style={text}>
          Recibiste una nueva consulta a través del formulario de contacto de {SITE_NAME}.
        </Text>
        <Hr style={hr} />
        <Section>
          <Text style={row}><strong>Nombre:</strong> {name || '—'}</Text>
          <Text style={row}><strong>Email:</strong> {email || '—'}</Text>
          <Text style={row}><strong>Empresa:</strong> {company || '—'}</Text>
          <Text style={row}><strong>Teléfono:</strong> {phone || '—'}</Text>
          <Text style={row}><strong>Industria:</strong> {industry || '—'}</Text>
        </Section>
        <Hr style={hr} />
        <Heading as="h2" style={h2}>Mensaje</Heading>
        <Text style={text}>{message || '—'}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) =>
    `Nueva consulta de ${data?.name || 'visitante'} — ${SITE_NAME}`,
  displayName: 'Notificación de contacto',
  to: 'drones@lumadron.com',
  previewData: {
    name: 'Juan Pérez',
    email: 'juan@ejemplo.com',
    company: 'AgroSur SA',
    phone: '+54 11 5555-5555',
    industry: 'Agricultura',
    message: 'Quisiera información sobre el DJI Agras T50 para 800 hectáreas.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#335685', margin: '0 0 16px' }
const h2 = { fontSize: '16px', fontWeight: 'bold', color: '#335685', margin: '16px 0 8px' }
const text = { fontSize: '14px', color: '#3a3a3a', lineHeight: '1.6', margin: '0 0 12px' }
const row = { fontSize: '14px', color: '#3a3a3a', margin: '4px 0' }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
