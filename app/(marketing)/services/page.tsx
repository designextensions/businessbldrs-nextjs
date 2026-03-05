import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import ServicesPage from "@/components/pages/services";

export const metadata: Metadata = {
  title: seoConfig.services.title,
  description: seoConfig.services.description,
  keywords: seoConfig.services.keywords,
  openGraph: {
    title: seoConfig.services.title,
    description: seoConfig.services.description,
    images: [getOgImageUrl(seoConfig.services.title, seoConfig.services.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/services" },
};

export default function Page() {
  return <ServicesPage />;
}
