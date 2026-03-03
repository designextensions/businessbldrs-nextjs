import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import { seoServicesFAQs } from "@/components/ui/service-faq-schema";
import SeoServicesPage from "@/components/pages/seo-services";

export const metadata: Metadata = {
  title: seoConfig.seoServices.title,
  description: seoConfig.seoServices.description,
  keywords: seoConfig.seoServices.keywords,
  openGraph: {
    title: seoConfig.seoServices.title,
    description: seoConfig.seoServices.description,
    images: seoConfig.seoServices.ogImage ? [seoConfig.seoServices.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/seo-services" },
};

const faqSchema = generateFAQSchema(seoServicesFAQs);
const serviceSchema = generateServiceSchema({
  serviceName: "SEO Services",
  description: "Search engine optimization services to improve rankings and drive organic traffic. Expert SEO specialists providing keyword research, on-page optimization, and technical SEO audits.",
  slug: "seo-services",
  serviceType: "SEO",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SeoServicesPage />
    </>
  );
}
