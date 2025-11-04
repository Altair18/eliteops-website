import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { UserPayload } from "@/types/User";

// Extend NextRequest to include user property
export interface AuthenticatedRequest extends NextRequest {
  user: UserPayload;
}

// Type guard to check if request has user property
export function isAuthenticatedRequest(req: NextRequest): req is AuthenticatedRequest {
  return 'user' in req && req.user !== undefined;
}

export async function withAuth(req: NextRequest): Promise<NextResponse | null> {
  try {
    // Get the value from the frontEnd Cookie
    const token = req.cookies.get('authToken')?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized: No token provided" },
        { status: 401 }
      );
    }

    // Verifying the token value
    const decoded = jwt.verify(
      token,
      process.env.RANDOM_SECRET_KEY as string
    ) as UserPayload;
    
    // Attaching the token value to the req
    (req as AuthenticatedRequest).user = decoded;

    return null;
  } catch (error) {
    console.error('Error in withAuth:', error);

    // Type-safe error handling
    if (error instanceof jwt.TokenExpiredError) {
      return NextResponse.json(
        { message: "Unauthorized: Token expired" },
        { status: 401 }
      );
    }
    
    if (error instanceof jwt.JsonWebTokenError) {
      return NextResponse.json(
        { message: "Unauthorized: Invalid token" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }
}

export async function withAuthAdmin(req: NextRequest): Promise<NextResponse | null> {
  const authResponse = await withAuth(req);

  if (authResponse) return authResponse;

  // Type-safe access to user property
  if (!isAuthenticatedRequest(req)) {
    return NextResponse.json(
      { message: "Unauthorized: Authentication required" },
      { status: 401 }
    );
  }

  // const decoded = req.user;

  return null;
}