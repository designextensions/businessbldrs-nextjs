import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import BozardFordLincolnPage from "@/components/pages/case-studies/bozard-ford-lincoln";

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

export default function Page() {
  return <BozardFordLincolnPage />;
}
