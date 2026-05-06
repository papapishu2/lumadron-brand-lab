import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

const SITE_NAME = 'Lumadron'

interface ContactConfirmationProps {
  name?: string
}

const ContactConfirmationEmail = ({ name }: ContactConfirmationProps) => (
  <Html lang="es" dir="ltr">
    <Head />
    <Preview>Recibimos tu consulta en {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `¡Gracias, ${name}!` : '¡Gracias por contactarnos!'}
        </Heading>
        <Text style={text}>
          Recibimos tu consulta y nuestro equipo te va a responder en menos de 24 horas hábiles.
        </Text>
        <Text style={text}>
          Mientras tanto, podés escribirnos directamente a{' '}
          <a href="mailto:drones@lumadron.com" style={link}>drones@lumadron.com</a>.
        </Text>
        <Text style={footer}>Equipo {SITE_NAME}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'Recibimos tu consulta — Lumadron',
  displayName: 'Confirmación de contacto',
  previewData: { name: 'Juan' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#335685', margin: '0 0 16px' }
const text = { fontSize: '14px', color: '#3a3a3a', lineHeight: '1.6', margin: '0 0 16px' }
const link = { color: '#fa4301', textDecoration: 'underline' }
const footer = { fontSize: '12px', color: '#999999', margin: '32px 0 0' }
