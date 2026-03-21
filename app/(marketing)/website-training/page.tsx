import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import WebsiteTrainingPage from "@/components/pages/website-training";

export const metadata: Metadata = {
  title: seoConfig.websiteTraining.title,
  description: seoConfig.websiteTraining.description,
  keywords: seoConfig.websiteTraining.keywords,
  openGraph: {
    title: seoConfig.websiteTraining.title,
    description: seoConfig.websiteTraining.description,
    images: [getOgImageUrl(seoConfig.websiteTraining.title, seoConfig.websiteTraining.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/website-training" },
};

export default function Page() {
  return <WebsiteTrainingPage />;
}
