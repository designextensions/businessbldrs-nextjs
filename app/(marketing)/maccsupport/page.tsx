import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import MaccsupportPage from "@/components/pages/maccsupport";

export const metadata: Metadata = {
  title: seoConfig.about.title,
  description: seoConfig.about.description,
  keywords: seoConfig.about.keywords,
  openGraph: {
    title: seoConfig.about.title,
    description: seoConfig.about.description,
    images: seoConfig.about.ogImage ? [seoConfig.about.ogImage] : [],
  },
};

export default function Page() {
  return <MaccsupportPage />;
}
