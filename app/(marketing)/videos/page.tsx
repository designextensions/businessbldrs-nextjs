import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getMarketingVideos } from "@/lib/storage";
import { seoConfig } from "@/lib/seo-config";
import VideosPage from "@/components/pages/videos";

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
  await queryClient.prefetchQuery({
    queryKey: ["/api/marketing-videos"],
    queryFn: getMarketingVideos,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <VideosPage />
    </HydrationBoundary>
  );
}
