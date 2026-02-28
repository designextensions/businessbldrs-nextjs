import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getTeamMembers, getAllTeamMembers, createTeamMember } from "@/lib/storage";

// GET - public, returns active members only (admin can pass ?all=true)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all");
    const members = all === "true" ? await getAllTeamMembers() : await getTeamMembers();
    return NextResponse.json(members);
  } catch (error) {
    console.error("Error fetching team members:", error);
    return NextResponse.json({ error: "Failed to fetch team members" }, { status: 500 });
  }
}

// POST - admin only
export async function POST(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const body = await request.json();
    const member = await createTeamMember(body);
    return NextResponse.json(member, { status: 201 });
  } catch (error) {
    console.error("Error creating team member:", error);
    return NextResponse.json({ error: "Failed to create team member" }, { status: 500 });
  }
}
