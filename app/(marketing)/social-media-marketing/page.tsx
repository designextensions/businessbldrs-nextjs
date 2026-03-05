import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import { socialMediaFAQs } from "@/components/ui/service-faq-schema";
import SocialMediaMarketingPage from "@/components/pages/social-media-marketing";

export const metadata: Metadata = {
  title: seoConfig.socialMedia.title,
  description: seoConfig.socialMedia.description,
  keywords: seoConfig.socialMedia.keywords,
  openGraph: {
    title: seoConfig.socialMedia.title,
    description: seoConfig.socialMedia.description,
    images: [getOgImageUrl(seoConfig.socialMedia.title, seoConfig.socialMedia.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/social-media-marketing" },
};

const faqSchema = generateFAQSchema(socialMediaFAQs);
const serviceSchema = generateServiceSchema({
  serviceName: "Social Media Marketing",
  description: "Social media marketing services to enhance visibility and engagement across social channels. Expert social media management, content creation, and advertising campaigns.",
  slug: "social-media-marketing",
  serviceType: "Social Media Marketing",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SocialMediaMarketingPage />
    </>
  );
}
