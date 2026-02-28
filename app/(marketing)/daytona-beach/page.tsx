import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import DaytonaBeachPage from "@/components/pages/daytona-beach";

export const metadata: Metadata = {
  title: seoConfig.daytonaBeach.title,
  description: seoConfig.daytonaBeach.description,
  keywords: seoConfig.daytonaBeach.keywords,
  openGraph: {
    title: seoConfig.daytonaBeach.title,
    description: seoConfig.daytonaBeach.description,
    images: seoConfig.daytonaBeach.ogImage ? [seoConfig.daytonaBeach.ogImage] : [],
  },
};

export default function Page() {
  return <DaytonaBeachPage />;
}
