import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import { aiBlueprintFAQs } from "@/components/ui/service-faq-schema";
import AiBlueprintPage from "@/components/pages/ai-blueprint";

export const metadata: Metadata = {
  title: seoConfig.resources.title,
  description: seoConfig.resources.description,
  keywords: seoConfig.resources.keywords,
  openGraph: {
    title: seoConfig.resources.title,
    description: seoConfig.resources.description,
    images: seoConfig.resources.ogImage ? [seoConfig.resources.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/ai-blueprint" },
};

const faqSchema = generateFAQSchema(aiBlueprintFAQs);
const serviceSchema = generateServiceSchema({
  serviceName: "AI Blueprint",
  description: "Custom AI strategy and planning service. We help businesses strategize AI adoption, design custom workflows, and build implementation roadmaps for smarter, more efficient operations.",
  slug: "ai-blueprint",
  serviceType: "AI Consulting",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <AiBlueprintPage />
    </>
  );
}
