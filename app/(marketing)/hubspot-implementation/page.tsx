import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import { hubspotFAQs } from "@/components/ui/service-faq-schema";
import HubspotImplementationPage from "@/components/pages/hubspot-implementation";

export const metadata: Metadata = {
  title: seoConfig.hubspot.title,
  description: seoConfig.hubspot.description,
  keywords: seoConfig.hubspot.keywords,
  openGraph: {
    title: seoConfig.hubspot.title,
    description: seoConfig.hubspot.description,
    images: seoConfig.hubspot.ogImage ? [seoConfig.hubspot.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/hubspot-implementation" },
};

const faqSchema = generateFAQSchema(hubspotFAQs);
const serviceSchema = generateServiceSchema({
  serviceName: "HubSpot Implementation",
  description: "Seamless HubSpot CRM setup for maximum impact. As Platinum HubSpot Partners, we provide expert CRM implementation, marketing automation, and ongoing support services.",
  slug: "hubspot-implementation",
  serviceType: "CRM Implementation",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <HubspotImplementationPage />
    </>
  );
}
