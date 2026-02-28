import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import MarketingPlanBuilderPage from "@/components/pages/marketing-plan-builder";

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

export default function Page() {
  return <MarketingPlanBuilderPage />;
}
