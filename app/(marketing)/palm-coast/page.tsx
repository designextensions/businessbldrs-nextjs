import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import PalmCoastPage from "@/components/pages/palm-coast";

export const metadata: Metadata = {
  title: seoConfig.palmCoast.title,
  description: seoConfig.palmCoast.description,
  keywords: seoConfig.palmCoast.keywords,
  openGraph: {
    title: seoConfig.palmCoast.title,
    description: seoConfig.palmCoast.description,
    images: [getOgImageUrl(seoConfig.palmCoast.title, seoConfig.palmCoast.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/palm-coast" },
};

export default function Page() {
  return <PalmCoastPage />;
}
