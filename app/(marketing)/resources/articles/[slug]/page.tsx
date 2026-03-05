import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getBlogArticles } from "@/lib/storage";
import { db } from "@/lib/db";
import { blogArticles } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import ArticlePage from "@/components/pages/article";
import { notFound } from "next/navigation";
import { getOgImageUrl } from "@/lib/og-utils";

export const dynamicParams = false;

async function getPublishedArticleBySlug(slug: string) {
  return db.query.blogArticles.findFirst({
    where: and(
      eq(blogArticles.slug, slug),
      eq(blogArticles.isPublished, true),
    ),
  });
}

async function getPublishedArticleSlugs() {
  return db
    .select({ slug: blogArticles.slug })
    .from(blogArticles)
    .where(eq(blogArticles.isPublished, true));
}

export async function generateStaticParams() {
  const articles = await getPublishedArticleSlugs();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `https://businessbldrs.com/resources/articles/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [getOgImageUrl(article.title, article.excerpt || "")],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);
  if (!article) {
    notFound();
  }

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
