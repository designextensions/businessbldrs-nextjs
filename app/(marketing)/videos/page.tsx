import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getMarketingVideos } from "@/lib/storage";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import VideosPage from "@/components/pages/videos";

export const metadata: Metadata = {
  title: seoConfig.resources.title,
  description: seoConfig.resources.description,
  keywords: seoConfig.resources.keywords,
  openGraph: {
    title: seoConfig.resources.title,
    description: seoConfig.resources.description,
    images: [getOgImageUrl(seoConfig.resources.title, seoConfig.resources.description)],
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
