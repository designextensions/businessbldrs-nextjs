import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getTeamMemberBySlug, updateTeamMember, deleteTeamMember } from "@/lib/storage";

// GET - public
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const member = await getTeamMemberBySlug(slug);
    if (!member) {
      return NextResponse.json({ error: "Team member not found" }, { status: 404 });
    }
    return NextResponse.json(member);
  } catch (error) {
    console.error("Error fetching team member:", error);
    return NextResponse.json({ error: "Failed to fetch team member" }, { status: 500 });
  }
}

// PUT - admin only (update by slug)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const { slug } = await params;
    const existing = await getTeamMemberBySlug(slug);
    if (!existing) {
      return NextResponse.json({ error: "Team member not found" }, { status: 404 });
    }
    const body = await request.json();
    const member = await updateTeamMember(existing.id, body);
    return NextResponse.json(member);
  } catch (error) {
    console.error("Error updating team member:", error);
    return NextResponse.json({ error: "Failed to update team member" }, { status: 500 });
  }
}

// DELETE - admin only (delete by slug)
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const { slug } = await params;
    const existing = await getTeamMemberBySlug(slug);
    if (!existing) {
      return NextResponse.json({ error: "Team member not found" }, { status: 404 });
    }
    await deleteTeamMember(existing.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting team member:", error);
    return NextResponse.json({ error: "Failed to delete team member" }, { status: 500 });
  }
}
