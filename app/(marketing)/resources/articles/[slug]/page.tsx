import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getBlogArticles } from "@/lib/storage";
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

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["/api/blog-articles"],
    queryFn: getBlogArticles,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ArticlePage />
    </HydrationBoundary>
  );
}
