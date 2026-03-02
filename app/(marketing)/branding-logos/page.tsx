import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import BrandingLogosPage from "@/components/pages/branding-logos";

export const metadata: Metadata = {
  title: seoConfig.branding.title,
  description: seoConfig.branding.description,
  keywords: seoConfig.branding.keywords,
  openGraph: {
    title: seoConfig.branding.title,
    description: seoConfig.branding.description,
    images: seoConfig.branding.ogImage ? [seoConfig.branding.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/branding-logos" },
};

export default function Page() {
  return <BrandingLogosPage />;
}
