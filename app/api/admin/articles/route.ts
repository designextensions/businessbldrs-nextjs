import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getAllBlogArticles, createBlogArticle } from "@/lib/storage";

// GET - admin only, returns all articles (published + drafts)
export async function GET() {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const articles = await getAllBlogArticles();
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching admin articles:", error);
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 });
  }
}

// POST - admin only
export async function POST(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const body = await request.json();
    const article = await createBlogArticle(body);
    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error("Error creating article:", error);
    return NextResponse.json({ error: "Failed to create article" }, { status: 500 });
  }
}
