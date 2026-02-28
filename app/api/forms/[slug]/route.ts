import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getFormBySlug, updateForm, deleteForm } from "@/lib/storage";

// GET - public (fetch active form by slug)
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const form = await getFormBySlug(slug);
    if (!form) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }
    return NextResponse.json(form);
  } catch (error) {
    console.error("Error fetching form:", error);
    return NextResponse.json({ error: "Failed to fetch form" }, { status: 500 });
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
    const existing = await getFormBySlug(slug);
    if (!existing) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }
    const body = await request.json();
    const form = await updateForm(existing.id, body);
    return NextResponse.json(form);
  } catch (error) {
    console.error("Error updating form:", error);
    return NextResponse.json({ error: "Failed to update form" }, { status: 500 });
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
    const existing = await getFormBySlug(slug);
    if (!existing) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }
    await deleteForm(existing.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting form:", error);
    return NextResponse.json({ error: "Failed to delete form" }, { status: 500 });
  }
}
