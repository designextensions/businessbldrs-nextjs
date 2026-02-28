import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import PalmCoastPage from "@/components/pages/palm-coast";

export const metadata: Metadata = {
  title: seoConfig.palmCoast.title,
  description: seoConfig.palmCoast.description,
  keywords: seoConfig.palmCoast.keywords,
  openGraph: {
    title: seoConfig.palmCoast.title,
    description: seoConfig.palmCoast.description,
    images: seoConfig.palmCoast.ogImage ? [seoConfig.palmCoast.ogImage] : [],
  },
};

export default function Page() {
  return <PalmCoastPage />;
}
