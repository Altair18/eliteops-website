import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company = "", message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
      return NextResponse.json({ ok: false, error: "SMTP credentials not set" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true", // true for 465
      auth: { user, pass },
    });

    const text = `Name: ${name}
        Email: ${email}
        Company: ${company}
        Message:
        ${message}
        `;

    const info = await transporter.sendMail({
      from: `"Website contact" <${user}>`,
      replyTo: email,
      to: user,
      subject: `Contact form: ${name}`,
      text,
    });

    if (!info.messageId) {
      return NextResponse.json({ ok: false, error: "Email not sent" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: unknown) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false, error: (err as Error)?.message ?? "Unknown error" }, { status: 500 });
  }
}