import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import { aiBlueprintFAQs } from "@/components/ui/service-faq-schema";
import AiBlueprintPage from "@/components/pages/ai-blueprint";

export const metadata: Metadata = {
  title: seoConfig.aiBlueprint.title,
  description: seoConfig.aiBlueprint.description,
  keywords: seoConfig.aiBlueprint.keywords,
  openGraph: {
    title: seoConfig.aiBlueprint.title,
    description: seoConfig.aiBlueprint.description,
    images: [getOgImageUrl(seoConfig.aiBlueprint.title, seoConfig.aiBlueprint.description)],
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
