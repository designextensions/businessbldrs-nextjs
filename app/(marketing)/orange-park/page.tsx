import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import OrangeParkPage from "@/components/pages/orange-park";

export const metadata: Metadata = {
  title: seoConfig.orangePark.title,
  description: seoConfig.orangePark.description,
  keywords: seoConfig.orangePark.keywords,
  openGraph: {
    title: seoConfig.orangePark.title,
    description: seoConfig.orangePark.description,
    images: [getOgImageUrl(seoConfig.orangePark.title, seoConfig.orangePark.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/orange-park" },
};

export default function Page() {
  return <OrangeParkPage />;
}
