import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import AppDevelopmentPage from "@/components/pages/app-development";

export const metadata: Metadata = {
  title: seoConfig.appDevelopment.title,
  description: seoConfig.appDevelopment.description,
  keywords: seoConfig.appDevelopment.keywords,
  openGraph: {
    title: seoConfig.appDevelopment.title,
    description: seoConfig.appDevelopment.description,
    images: seoConfig.appDevelopment.ogImage ? [seoConfig.appDevelopment.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/app-development" },
};

export default function Page() {
  return <AppDevelopmentPage />;
}
