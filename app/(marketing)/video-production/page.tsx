import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import VideoProductionPage from "@/components/pages/video-production";

export const metadata: Metadata = {
  title: seoConfig.videoProduction.title,
  description: seoConfig.videoProduction.description,
  keywords: seoConfig.videoProduction.keywords,
  openGraph: {
    title: seoConfig.videoProduction.title,
    description: seoConfig.videoProduction.description,
    images: seoConfig.videoProduction.ogImage ? [seoConfig.videoProduction.ogImage] : [],
  },
};

export default function Page() {
  return <VideoProductionPage />;
}
