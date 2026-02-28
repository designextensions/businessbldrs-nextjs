import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getForms, getAllForms, createForm } from "@/lib/storage";

// GET - public, returns active forms (admin can pass ?all=true)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all");
    const formList = all === "true" ? await getAllForms() : await getForms();
    return NextResponse.json(formList);
  } catch (error) {
    console.error("Error fetching forms:", error);
    return NextResponse.json({ error: "Failed to fetch forms" }, { status: 500 });
  }
}

// POST - admin only
export async function POST(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const body = await request.json();
    const form = await createForm(body);
    return NextResponse.json(form, { status: 201 });
  } catch (error) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: "Failed to create form" }, { status: 500 });
  }
}
