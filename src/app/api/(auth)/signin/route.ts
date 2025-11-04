import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserPayload } from "@/types/User";

export async function POST(req: Request){
    try{
        const { email, password } = await req.json()

        if ( !email || !password) {
          return NextResponse.json({ error: "Missing fields" }, { status: 400 })
        }

        const existingUser = await prisma.user.findUnique({ where: { email } })
        
        if (!existingUser) {
          return NextResponse.json({ error: "User does not exist" }, { status: 400 })
        }

        if(!existingUser.emailVerified){
          return NextResponse.json({ error: "Email not verified" }, { status: 400 })
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password)

        if (!passwordMatch) {
          return NextResponse.json({ error: "Invalid password" }, { status: 400 })
        }

        const token = jwt.sign(existingUser as UserPayload,
            process.env.RANDOM_SECRET_KEY as string,
            { expiresIn: "1h", algorithm: "HS256"}
        )

        const response = NextResponse.json({message: "Login successful", token: token});
        
        response.cookies.set('authToken', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 3600000,
          })
        return response;
    }
    catch(error){
        console.log(error);
        return NextResponse.json({error: "Something went wrong!"}, {status: 500});
    }
}