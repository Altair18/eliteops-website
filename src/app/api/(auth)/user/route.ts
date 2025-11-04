import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import {prisma as prismadb} from "@/lib/prisma";
import { AuthenticatedRequest, withAuth} from "@/app/api/middleware/middleware";
import { UserPayload } from "@/types/User";

export const GET = async (req: NextRequest) => { // Make GET async
  try {
    const authResponse = await withAuth(req); // Await the result of withAuth
    if (authResponse) return authResponse;
    const decoded: UserPayload = (req as AuthenticatedRequest).user;

    if (!decoded) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const user = await prismadb.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        emailVerified: true,
        image: true,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const newAccessToken = jwt.sign(
      { id: user.id, 
        email: user.email,
        name: user.name,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        emailVerified: user.emailVerified,
        image: user.image,
      },
      process.env.RANDOM_SECRET_KEY as string,
      { expiresIn: "1h", algorithm: "HS256" }
    );

    const response = NextResponse.json({ user });

    response.cookies.set('authToken', newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 3600000,
    });

    return response;

  } catch (error) {
    console.error("Error in /api/user/user.ts:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
