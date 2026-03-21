import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getMarketingVideos } from "@/lib/storage";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import VideosPage from "@/components/pages/videos";

export const metadata: Metadata = {
  title: seoConfig.videos.title,
  description: seoConfig.videos.description,
  keywords: seoConfig.videos.keywords,
  openGraph: {
    title: seoConfig.videos.title,
    description: seoConfig.videos.description,
    images: [getOgImageUrl(seoConfig.videos.title, seoConfig.videos.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/videos" },
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
