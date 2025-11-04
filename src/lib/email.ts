// lib/email.ts
import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

export type EmailServiceConfig = {
  senderEmail?: string;        // e.g. process.env.SENDER_EMAIL
  senderName?: string;         // optional display name
  clientId?: string;           // GOOGLE_CLIENT_ID
  clientSecret?: string;       // GOOGLE_CLIENT_SECRET
  refreshToken?: string;       // GOOGLE_REFRESH_TOKEN
};

export class EmailService {
  private senderEmail: string;
  private senderName?: string;
  private clientId: string;
  private clientSecret: string;
  private refreshToken: string;

  constructor(config: EmailServiceConfig = {}) {
    // prefer provided values; otherwise fallback to env
    this.senderEmail = config.senderEmail ?? process.env.SENDER_EMAIL!;
    this.senderName = config.senderName ?? process.env.SENDER_NAME;
    this.clientId = config.clientId ?? process.env.GOOGLE_CLIENT_ID!;
    this.clientSecret = config.clientSecret ?? process.env.GOOGLE_CLIENT_SECRET!;
    this.refreshToken = config.refreshToken ?? process.env.GOOGLE_REFRESH_TOKEN!;

    if (!this.senderEmail || !this.clientId || !this.clientSecret || !this.refreshToken) {
      throw new Error(
        "EmailService: Missing configuration. Make sure SENDER_EMAIL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET and GOOGLE_REFRESH_TOKEN are set."
      );
    }
  }

  private async createTransport() {
    const oauth2Client = new OAuth2(
      this.clientId,
      this.clientSecret,
      "https://developers.google.com/oauthplayground"
    );
  
    oauth2Client.setCredentials({
      refresh_token: this.refreshToken,
    });
  
    const accessTokenResponse = await oauth2Client.getAccessToken();
    
    // Handle the response more explicitly
    let accessToken: string | null | undefined;
    
    if (typeof accessTokenResponse === 'string') {
      accessToken = accessTokenResponse;
    } else if (accessTokenResponse && typeof accessTokenResponse === 'object') {
      // accessTokenResponse could be { token: string } or { res: Response, token: string }
      accessToken = accessTokenResponse.token;
    }
  
    if (!accessToken) {
      throw new Error("Failed to obtain access token from Google OAuth2.");
    }
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: this.senderEmail,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
        refreshToken: this.refreshToken,
        accessToken,
      },
    });
  
    return transporter;
  }

  /**
   * Sends an email.
   * @param to Receiver email (string or comma-separated)
   * @param subject Email subject
   * @param html HTML body
   * @param text optional plain text fallback
   */
  public async sendMail({
    to,
    subject,
    html,
    text,
  }: {
    to: string;
    subject: string;
    html: string;
    text?: string;
  }) {
    const transporter = await this.createTransport();

    const from = this.senderName
      ? `"${this.senderName}" <${this.senderEmail}>`
      : this.senderEmail;

    const message = {
      from,
      to,
      subject,
      text: text ?? undefined,
      html,
    };

    const info = await transporter.sendMail(message);
    return info; // nodemailer response
  }
}
