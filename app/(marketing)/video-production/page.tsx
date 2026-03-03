import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import { videoProductionFAQs } from "@/components/ui/service-faq-schema";
import VideoProductionPage from "@/components/pages/video-production";

export const metadata: Metadata = {
  title: seoConfig.videoProduction.title,
  description: seoConfig.videoProduction.description,
  keywords: seoConfig.videoProduction.keywords,
  openGraph: {
    title: seoConfig.videoProduction.title,
    description: seoConfig.videoProduction.description,
    images: seoConfig.videoProduction.ogImage ? [seoConfig.videoProduction.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/video-production" },
};

const faqSchema = generateFAQSchema(videoProductionFAQs);
const serviceSchema = generateServiceSchema({
  serviceName: "Video Production",
  description: "Professional video production services that produce results. From Standard to Hollywood packages starting at $5,500. Increase conversions by up to 80% with video marketing.",
  slug: "video-production",
  serviceType: "Content Marketing",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <VideoProductionPage />
    </>
  );
}
