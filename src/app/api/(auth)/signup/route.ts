import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { EmailService } from "@/lib/email"
import { generateWelcomeEmail } from "@/lib/email-template"

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const user = await prisma.user.create({
      data: { 
        name, 
        email, 
        password: hashedPassword,
        emailVerified: false,
        image: null,
    },
    })

    // Send welcome email
    try {
      const emailService = new EmailService()
      const subject = "🎉 Welcome to Fivra!"
      const htmlContent = generateWelcomeEmail(name, user.id)

      await emailService.sendMail({
        to: email,
        subject,
        html: htmlContent,
      })

      console.log(`✅ Welcome email sent to ${email}`)
    } catch (emailError) {
      console.error("⚠️ Failed to send welcome email:", emailError)
    }

    return NextResponse.json({ message: "created successfully", status: 200 })
  } catch (error) {
    console.error("❌ Server error:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
