import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "../../data/profile";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
}

export async function POST(request: Request) {
  const { name, email, message, company } = (await request.json()) as ContactPayload;

  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  if (
    !EMAIL_PATTERN.test(email) ||
    name.length > MAX_NAME_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY no está configurada");
    return NextResponse.json({ error: "El servicio de email no está configurado." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: profile.email,
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      text: `De: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend rechazó el envío", error);
      return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error("Error inesperado enviando el mensaje de contacto", error);
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 502 });
  }
}
