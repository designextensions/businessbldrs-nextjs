import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import AiDevelopmentPage from "@/components/pages/ai-development";

export const metadata: Metadata = {
  title: seoConfig.appDevelopment.title,
  description: seoConfig.appDevelopment.description,
  keywords: seoConfig.appDevelopment.keywords,
  openGraph: {
    title: seoConfig.appDevelopment.title,
    description: seoConfig.appDevelopment.description,
    images: seoConfig.appDevelopment.ogImage ? [seoConfig.appDevelopment.ogImage] : [],
  },
};

export default function Page() {
  return <AiDevelopmentPage />;
}
