import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import HubspotImplementationPage from "@/components/pages/hubspot-implementation";

export const metadata: Metadata = {
  title: seoConfig.hubspot.title,
  description: seoConfig.hubspot.description,
  keywords: seoConfig.hubspot.keywords,
  openGraph: {
    title: seoConfig.hubspot.title,
    description: seoConfig.hubspot.description,
    images: seoConfig.hubspot.ogImage ? [seoConfig.hubspot.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/hubspot-implementation" },
};

export default function Page() {
  return <HubspotImplementationPage />;
}
