import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import CostCalculatorPage from "@/components/pages/cost-calculator";

export const metadata: Metadata = {
  title: seoConfig.requestQuote.title,
  description: seoConfig.requestQuote.description,
  keywords: seoConfig.requestQuote.keywords,
  openGraph: {
    title: seoConfig.requestQuote.title,
    description: seoConfig.requestQuote.description,
    images: seoConfig.requestQuote.ogImage ? [seoConfig.requestQuote.ogImage] : [],
  },
};

export default function Page() {
  return <CostCalculatorPage />;
}
