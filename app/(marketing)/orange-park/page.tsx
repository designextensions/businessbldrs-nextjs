import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import OrangeParkPage from "@/components/pages/orange-park";

export const metadata: Metadata = {
  title: seoConfig.orangePark.title,
  description: seoConfig.orangePark.description,
  keywords: seoConfig.orangePark.keywords,
  openGraph: {
    title: seoConfig.orangePark.title,
    description: seoConfig.orangePark.description,
    images: seoConfig.orangePark.ogImage ? [seoConfig.orangePark.ogImage] : [],
  },
};

export default function Page() {
  return <OrangeParkPage />;
}
