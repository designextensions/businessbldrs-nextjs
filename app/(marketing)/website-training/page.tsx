import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import WebsiteTrainingPage from "@/components/pages/website-training";

export const metadata: Metadata = {
  title: seoConfig.resources.title,
  description: seoConfig.resources.description,
  keywords: seoConfig.resources.keywords,
  openGraph: {
    title: seoConfig.resources.title,
    description: seoConfig.resources.description,
    images: [getOgImageUrl(seoConfig.resources.title, seoConfig.resources.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/website-training" },
};

export default function Page() {
  return <WebsiteTrainingPage />;
}
