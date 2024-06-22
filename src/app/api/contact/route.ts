import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

type SendEmailType = {
  name: string
  email: string
  message: string
}

async function sendEmail({ name, email, message }: SendEmailType) {
  const resend = new Resend(process.env.EMAIL_TOKEN)
  const send = await resend.emails.send({
    from: 'contato@thomazot.com.br',
    to: 'thomazot@gmail.com',
    subject: `[thomazot][contact]: ${name}`,
    html: `
      <p>Title: ${name}<p>
      <p>E-mail: ${email}<p>
      <p>Message: ${message}<p>
    `
  })
  return send
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  const data: SendEmailType = {
    name,
    email,
    message
  }

  try {
    const send = await sendEmail(data)
    if (!!send.error) {
      return NextResponse.json(
        { message: 'error', error: send.error },
        { status: 403 }
      )
    }
    return NextResponse.json({ message: 'success' })
  } catch (error) {
    return NextResponse.json({ message: 'error', error }, { status: 403 })
  }
}
