import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { EmailService } from "@/lib/email"
import { generateAccountActivatedEmail } from "@/lib/email-template"

export async function POST(req: Request){
    try{
        const {token} = await req.json();

        if(!token){
            return NextResponse.json({error: "No token provided"})
        }

        const existingUser = await prisma.user.findUnique({
            where: {id:token}
        })

        if(!existingUser){
            return NextResponse.json({ error: "User does not exist" }, { status: 400 })
        }

        await prisma.user.update({
            where: {id: token},
            data:{
                emailVerified: true
            }
        })
        
    // Send welcome email
        try {
            const emailService = new EmailService()
            const subject = "Your Fivra Account is Now Active!"
            const htmlContent = generateAccountActivatedEmail(existingUser.name || "User")
    
            await emailService.sendMail({
            to: existingUser.email,
            subject,
            html: htmlContent,
            })
    
            console.log(`✅ Welcome email sent to ${existingUser.email}`)
        } catch (emailError) {
            console.error("⚠️ Failed to send welcome email:", emailError)
        }
        return NextResponse.json({message: "Email verified successfully"});
    }
    catch(err){
        console.log(err);
        return NextResponse.json({error: "Something went wrong"})
    }
}