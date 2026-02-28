import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import MarketingStrategyConsultingPage from "@/components/pages/marketing-strategy-consulting";

export const metadata: Metadata = {
  title: seoConfig.services.title,
  description: seoConfig.services.description,
  keywords: seoConfig.services.keywords,
  openGraph: {
    title: seoConfig.services.title,
    description: seoConfig.services.description,
    images: seoConfig.services.ogImage ? [seoConfig.services.ogImage] : [],
  },
};

export default function Page() {
  return <MarketingStrategyConsultingPage />;
}
