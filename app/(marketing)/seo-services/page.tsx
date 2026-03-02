import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import SeoServicesPage from "@/components/pages/seo-services";

export const metadata: Metadata = {
  title: seoConfig.seoServices.title,
  description: seoConfig.seoServices.description,
  keywords: seoConfig.seoServices.keywords,
  openGraph: {
    title: seoConfig.seoServices.title,
    description: seoConfig.seoServices.description,
    images: seoConfig.seoServices.ogImage ? [seoConfig.seoServices.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/seo-services" },
};

export default function Page() {
  return <SeoServicesPage />;
}
