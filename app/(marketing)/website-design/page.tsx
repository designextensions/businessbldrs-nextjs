import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import { websiteDesignFAQs } from "@/components/ui/service-faq-schema";
import WebsiteDesignPage from "@/components/pages/website-design";

export const metadata: Metadata = {
  title: seoConfig.websiteDesign.title,
  description: seoConfig.websiteDesign.description,
  keywords: seoConfig.websiteDesign.keywords,
  openGraph: {
    title: seoConfig.websiteDesign.title,
    description: seoConfig.websiteDesign.description,
    images: seoConfig.websiteDesign.ogImage ? [seoConfig.websiteDesign.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/website-design" },
};

const faqSchema = generateFAQSchema(websiteDesignFAQs);
const serviceSchema = generateServiceSchema({
  serviceName: "Website Design & Development",
  description: "Professional website design services and custom web development with responsive design, SEO optimization, and conversion-focused layouts.",
  slug: "website-design",
  serviceType: "Web Design",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <WebsiteDesignPage />
    </>
  );
}
