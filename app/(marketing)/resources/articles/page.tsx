import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getBlogArticles } from "@/lib/storage";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import ArticlesPage from "@/components/pages/articles";

export const metadata: Metadata = {
  title: seoConfig.articles.title,
  description: seoConfig.articles.description,
  keywords: seoConfig.articles.keywords,
  openGraph: {
    title: seoConfig.articles.title,
    description: seoConfig.articles.description,
    images: [getOgImageUrl(seoConfig.articles.title, seoConfig.articles.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/resources/articles" },
};

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["/api/articles"],
    queryFn: getBlogArticles,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ArticlesPage />
    </HydrationBoundary>
  );
}
