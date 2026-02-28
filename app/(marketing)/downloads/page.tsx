import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getDownloadableResources } from "@/lib/storage";
import { seoConfig } from "@/lib/seo-config";
import DownloadsPage from "@/components/pages/downloads";

export const metadata: Metadata = {
  title: seoConfig.downloads.title,
  description: seoConfig.downloads.description,
  keywords: seoConfig.downloads.keywords,
  openGraph: {
    title: seoConfig.downloads.title,
    description: seoConfig.downloads.description,
    images: seoConfig.downloads.ogImage ? [seoConfig.downloads.ogImage] : [],
  },
};

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["/api/downloadable-resources"],
    queryFn: getDownloadableResources,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DownloadsPage />
    </HydrationBoundary>
  );
}
