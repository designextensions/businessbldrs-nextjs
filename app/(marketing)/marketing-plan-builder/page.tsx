import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import MarketingPlanBuilderPage from "@/components/pages/marketing-plan-builder";

export const metadata: Metadata = {
  title: seoConfig.marketingPlanBuilder.title,
  description: seoConfig.marketingPlanBuilder.description,
  keywords: seoConfig.marketingPlanBuilder.keywords,
  openGraph: {
    title: seoConfig.marketingPlanBuilder.title,
    description: seoConfig.marketingPlanBuilder.description,
    images: [getOgImageUrl(seoConfig.marketingPlanBuilder.title, seoConfig.marketingPlanBuilder.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/marketing-plan-builder" },
};

export default function Page() {
  return <MarketingPlanBuilderPage />;
}
