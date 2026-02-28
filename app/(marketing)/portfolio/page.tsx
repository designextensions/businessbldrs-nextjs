import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getPortfolioItems } from "@/lib/storage";
import { seoConfig } from "@/lib/seo-config";
import PortfolioPage from "@/components/pages/portfolio";

export const metadata: Metadata = {
  title: seoConfig.portfolio.title,
  description: seoConfig.portfolio.description,
  keywords: seoConfig.portfolio.keywords,
  openGraph: {
    title: seoConfig.portfolio.title,
    description: seoConfig.portfolio.description,
    images: seoConfig.portfolio.ogImage ? [seoConfig.portfolio.ogImage] : [],
  },
};

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["/api/portfolio"],
    queryFn: getPortfolioItems,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PortfolioPage />
    </HydrationBoundary>
  );
}
