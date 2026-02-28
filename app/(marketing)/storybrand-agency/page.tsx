import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import StorybrandAgencyPage from "@/components/pages/storybrand-agency";

export const metadata: Metadata = {
  title: seoConfig.storybrand.title,
  description: seoConfig.storybrand.description,
  keywords: seoConfig.storybrand.keywords,
  openGraph: {
    title: seoConfig.storybrand.title,
    description: seoConfig.storybrand.description,
    images: seoConfig.storybrand.ogImage ? [seoConfig.storybrand.ogImage] : [],
  },
};

export default function Page() {
  return <StorybrandAgencyPage />;
}
