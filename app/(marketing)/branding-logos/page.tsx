import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import { brandingFAQs } from "@/components/ui/service-faq-schema";
import BrandingLogosPage from "@/components/pages/branding-logos";

export const metadata: Metadata = {
  title: seoConfig.branding.title,
  description: seoConfig.branding.description,
  keywords: seoConfig.branding.keywords,
  openGraph: {
    title: seoConfig.branding.title,
    description: seoConfig.branding.description,
    images: [getOgImageUrl(seoConfig.branding.title, seoConfig.branding.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/branding-logos" },
};

const faqSchema = generateFAQSchema(brandingFAQs);
const serviceSchema = generateServiceSchema({
  serviceName: "Brand Development & Logo Design",
  description: "Logo design, brand strategy, and visual identity creation. Build a brand that turns heads and is instantly recognizable to your customers.",
  slug: "branding-logos",
  serviceType: "Branding",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BrandingLogosPage />
    </>
  );
}
