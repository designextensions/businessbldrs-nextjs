import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import DaytonaBeachPage from "@/components/pages/daytona-beach";

export const metadata: Metadata = {
  title: seoConfig.daytonaBeach.title,
  description: seoConfig.daytonaBeach.description,
  keywords: seoConfig.daytonaBeach.keywords,
  openGraph: {
    title: seoConfig.daytonaBeach.title,
    description: seoConfig.daytonaBeach.description,
    images: [getOgImageUrl(seoConfig.daytonaBeach.title, seoConfig.daytonaBeach.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/daytona-beach" },
};

export default function Page() {
  return <DaytonaBeachPage />;
}
