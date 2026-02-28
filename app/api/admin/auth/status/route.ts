import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function GET() {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json({
        authenticated: false,
        isAdmin: false,
      });
    }

    const isAdmin = !!(session as any).isAdmin;

    return NextResponse.json({
      authenticated: true,
      isAdmin,
      email: session.user.email,
      name: session.user.name,
    });
  } catch (error) {
    console.error("Auth status check failed:", error);
    return NextResponse.json({
      authenticated: false,
      isAdmin: false,
    });
  }
}
