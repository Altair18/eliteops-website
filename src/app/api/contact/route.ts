import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { join } from 'path';
import { existsSync } from 'fs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company = "", message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
      return NextResponse.json({ ok: false, error: "SMTP credentials not set" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
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
      return NextResponse.json({ ok: false, error: "Owner email not sent" }, { status: 500 });
    }

    // Send confirmation email to the person who submitted the form
    const confirmTextPlain = `Hi ${name},

Thank you for reaching out. This is a confirmation that we received your message:

${message}

We will get back to you as soon as possible.

— The Fivra Team`;

    // Prefer an absolute URL (set SITE_URL in env), otherwise embed the local public/logo.jpg as an attachment (cid)
    const siteUrl = process.env.SITE_URL?.replace(/\/$/, '') || '';
    const logoUrl = siteUrl ? `${siteUrl}/logo.jpg` : null;

    const confirmHtml = `
      <p>Hi ${name},</p>
      <p>Thank you for reaching out. This is a confirmation that we received your message:</p>
      <blockquote style="white-space:pre-wrap">${message}</blockquote>
      <p>We will get back to you as soon as possible.</p>
      <p>— The Fivra Team</p>
      ${logoUrl ? `<p><img src="${logoUrl}" alt="Fivra Logo" width="100"/></p>` : `<p><img src="cid:fivra_logo" alt="Fivra Logo" width="100"/></p>`}
    `;

  const attachments: { filename: string; path: string; cid?: string }[] = [];
    if (!logoUrl) {
      const logoPath = join(process.cwd(), 'public', 'logo.jpg');
      if (existsSync(logoPath)) {
        attachments.push({ filename: 'logo.jpg', path: logoPath, cid: 'fivra_logo' });
      }
    }

    const confirmInfo = await transporter.sendMail({
      from: `"Fivra Team" <${user}>`,
      replyTo: user,
      to: email,
      subject: `Thanks for contacting us, ${name}`,
      text: confirmTextPlain,
      html: confirmHtml,
      attachments: attachments.length ? attachments : undefined,
    });

    if (!confirmInfo.messageId) {
      // Owner email was sent but confirmation failed; log and still return success to user input
      console.error('Confirmation email failed to send', { owner: info, confirm: confirmInfo });
      // You can choose to return an error here; returning success but noting the warning.
      return NextResponse.json({ ok: true, warning: 'confirmation_not_sent' }, { status: 200 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: unknown) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false, error: (err as Error)?.message ?? "Unknown error" }, { status: 500 });
  }
}