import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import MaintenancePage from "@/components/pages/maintenance";

export const metadata: Metadata = {
  title: seoConfig.maintenance.title,
  description: seoConfig.maintenance.description,
  keywords: seoConfig.maintenance.keywords,
  openGraph: {
    title: seoConfig.maintenance.title,
    description: seoConfig.maintenance.description,
    images: [getOgImageUrl(seoConfig.maintenance.title, seoConfig.maintenance.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/maintenance" },
};

export default function Page() {
  return <MaintenancePage />;
}
