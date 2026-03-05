import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import SWSPage from "@/components/pages/sws";

export const metadata: Metadata = {
  title: seoConfig.sws.title,
  description: seoConfig.sws.description,
  keywords: seoConfig.sws.keywords,
  openGraph: {
    title: seoConfig.sws.title,
    description: seoConfig.sws.description,
    images: seoConfig.sws.ogImage ? [seoConfig.sws.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/sws" },
};

export default function Page() {
  return <SWSPage />;
}
