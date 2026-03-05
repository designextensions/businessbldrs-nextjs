import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import MarketingPlanBuilderPage from "@/components/pages/marketing-plan-builder";

export const metadata: Metadata = {
  title: seoConfig.resources.title,
  description: seoConfig.resources.description,
  keywords: seoConfig.resources.keywords,
  openGraph: {
    title: seoConfig.resources.title,
    description: seoConfig.resources.description,
    images: [getOgImageUrl(seoConfig.resources.title, seoConfig.resources.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/marketing-plan-builder" },
};

export default function Page() {
  return <MarketingPlanBuilderPage />;
}
