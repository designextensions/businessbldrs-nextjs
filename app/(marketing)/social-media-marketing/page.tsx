import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import SocialMediaMarketingPage from "@/components/pages/social-media-marketing";

export const metadata: Metadata = {
  title: seoConfig.socialMedia.title,
  description: seoConfig.socialMedia.description,
  keywords: seoConfig.socialMedia.keywords,
  openGraph: {
    title: seoConfig.socialMedia.title,
    description: seoConfig.socialMedia.description,
    images: seoConfig.socialMedia.ogImage ? [seoConfig.socialMedia.ogImage] : [],
  },
};

export default function Page() {
  return <SocialMediaMarketingPage />;
}
