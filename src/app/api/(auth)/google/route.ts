import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { OAuth2Client } from "google-auth-library"
import { EmailService } from "@/lib/email"
import { generateWelcomeEmail } from "@/lib/email-template"
import { UserPayload } from "@/types/User"

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

export async function POST(req: Request) {
  try {
    const { token } = await req.json()

    if (!token) {
      return NextResponse.json(
        { error: "Token is required." },
        { status: 400 }
      )
    }

    // Verify Google ID token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()
    if (!payload || !payload.email || !payload.name) {
      return NextResponse.json(
        { error: "Invalid Google token or missing user info." },
        { status: 400 }
      )
    }

    const { email, name } = payload

    // Check if user already exists
    let user = await prisma.user.findUnique({ where: { email } })

    // Create user if not found
    if (!user) {
      user = await prisma.user.create({
        data: {
          name,
          email,
          emailVerified: true,
          password: "", // No password for Google-auth users
        },
      })

      // Send welcome email
      try {
        const emailService = new EmailService()
        const html = generateWelcomeEmail(name)
        await emailService.sendMail({
          to: email,
          subject: "🎉 Welcome to AdmitPath!",
          html,
        })
        console.log(`✅ Welcome email sent to ${email}`)
      } catch (emailError) {
        console.error("⚠️ Failed to send welcome email:", emailError)
      }
    }

    // Generate JWT
    const jwtToken = jwt.sign(user as UserPayload,
      process.env.RANDOM_SECRET_KEY!,
      { expiresIn: "1h", algorithm: "HS256" }
    )

    // Return token
    const response = NextResponse.json({
      message: "Login successful",
      token: jwtToken,
    })

    response.cookies.set("authToken", jwtToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 3600000,
    })

    return response
  } catch (error) {
    console.error("❌ Google login error:", error)
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    )
  }
}
