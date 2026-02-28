import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import GainesvillePage from "@/components/pages/gainesville";

export const metadata: Metadata = {
  title: seoConfig.gainesville.title,
  description: seoConfig.gainesville.description,
  keywords: seoConfig.gainesville.keywords,
  openGraph: {
    title: seoConfig.gainesville.title,
    description: seoConfig.gainesville.description,
    images: seoConfig.gainesville.ogImage ? [seoConfig.gainesville.ogImage] : [],
  },
};

export default function Page() {
  return <GainesvillePage />;
}
