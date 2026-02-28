import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getMarketingVideos, getBlogArticles } from "@/lib/storage";
import { seoConfig } from "@/lib/seo-config";
import ResourcesPage from "@/components/pages/resources";

export const metadata: Metadata = {
  title: seoConfig.resources.title,
  description: seoConfig.resources.description,
  keywords: seoConfig.resources.keywords,
  openGraph: {
    title: seoConfig.resources.title,
    description: seoConfig.resources.description,
    images: seoConfig.resources.ogImage ? [seoConfig.resources.ogImage] : [],
  },
};

export default async function Page() {
  const queryClient = getQueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["/api/marketing-videos"],
      queryFn: getMarketingVideos,
    }),
    queryClient.prefetchQuery({
      queryKey: ["/api/blog-articles/featured"],
      queryFn: getBlogArticles,
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ResourcesPage />
    </HydrationBoundary>
  );
}
