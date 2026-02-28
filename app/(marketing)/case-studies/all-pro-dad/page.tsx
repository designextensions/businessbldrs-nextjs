import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import AllProDadPage from "@/components/pages/case-studies/all-pro-dad";

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
  return <AllProDadPage />;
}
