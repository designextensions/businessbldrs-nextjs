import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import DownloadsPage from "@/components/pages/downloads";

export const metadata: Metadata = {
  title: seoConfig.downloads.title,
  description: seoConfig.downloads.description,
  keywords: seoConfig.downloads.keywords,
  openGraph: {
    title: seoConfig.downloads.title,
    description: seoConfig.downloads.description,
    images: seoConfig.downloads.ogImage ? [seoConfig.downloads.ogImage] : [],
  },
};

export default function Page() {
  return <DownloadsPage />;
}
