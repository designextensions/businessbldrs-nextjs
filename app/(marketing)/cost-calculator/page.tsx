import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import CostCalculatorPage from "@/components/pages/cost-calculator";

export const metadata: Metadata = {
  title: seoConfig.costCalculator.title,
  description: seoConfig.costCalculator.description,
  keywords: seoConfig.costCalculator.keywords,
  openGraph: {
    title: seoConfig.costCalculator.title,
    description: seoConfig.costCalculator.description,
    images: [getOgImageUrl(seoConfig.costCalculator.title, seoConfig.costCalculator.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/cost-calculator" },
};

export default function Page() {
  return <CostCalculatorPage />;
}
