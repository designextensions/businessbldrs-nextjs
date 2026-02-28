import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function GET() {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(null, { status: 401 });
    }

    return NextResponse.json({
      id: session.user.email,
      email: session.user.email,
      name: session.user.name,
      isAdmin: !!(session as any).isAdmin,
    });
  } catch (error) {
    console.error("User session check failed:", error);
    return NextResponse.json(null, { status: 401 });
  }
}
