import type { Metadata } from "next";
import { db } from "@/lib/db";
import { blogArticles } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import ArticlePage from "@/components/pages/article";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await db.query.blogArticles.findFirst({
    where: eq(blogArticles.slug, slug),
  });

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [],
    },
  };
}

export default function Page() {
  return <ArticlePage />;
}
