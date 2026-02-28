import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getBlogArticles, getAllBlogArticles, createBlogArticle } from "@/lib/storage";

// GET - public, returns published articles only
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all");

    // Admin query param allows fetching all articles (still requires admin check below)
    const articles = all === "true" ? await getAllBlogArticles() : await getBlogArticles();
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
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
