import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import CostCalculatorPage from "@/components/pages/cost-calculator";

export const metadata: Metadata = {
  title: seoConfig.requestQuote.title,
  description: seoConfig.requestQuote.description,
  keywords: seoConfig.requestQuote.keywords,
  openGraph: {
    title: seoConfig.requestQuote.title,
    description: seoConfig.requestQuote.description,
    images: [getOgImageUrl(seoConfig.requestQuote.title, seoConfig.requestQuote.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/cost-calculator" },
};

export default function Page() {
  return <CostCalculatorPage />;
}
