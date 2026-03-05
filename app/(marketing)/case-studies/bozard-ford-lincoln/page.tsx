import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import BozardFordLincolnPage from "@/components/pages/case-studies/bozard-ford-lincoln";

export const metadata: Metadata = {
  title: seoConfig.portfolio.title,
  description: seoConfig.portfolio.description,
  keywords: seoConfig.portfolio.keywords,
  openGraph: {
    title: seoConfig.portfolio.title,
    description: seoConfig.portfolio.description,
    images: [getOgImageUrl(seoConfig.portfolio.title, seoConfig.portfolio.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/case-studies/bozard-ford-lincoln" },
};

export default function Page() {
  return <BozardFordLincolnPage />;
}
