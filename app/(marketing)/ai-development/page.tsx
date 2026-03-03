import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import { aiDevelopmentFAQs } from "@/components/ui/service-faq-schema";
import AiDevelopmentPage from "@/components/pages/ai-development";

export const metadata: Metadata = {
  title: seoConfig.appDevelopment.title,
  description: seoConfig.appDevelopment.description,
  keywords: seoConfig.appDevelopment.keywords,
  openGraph: {
    title: seoConfig.appDevelopment.title,
    description: seoConfig.appDevelopment.description,
    images: seoConfig.appDevelopment.ogImage ? [seoConfig.appDevelopment.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/ai-development" },
};

const faqSchema = generateFAQSchema(aiDevelopmentFAQs);
const serviceSchema = generateServiceSchema({
  serviceName: "AI Development & Workflows",
  description: "Custom AI development and workflow automation services. We build the AI tools — chatbots, automations, search, dashboards — that turn your strategy into real business results.",
  slug: "ai-development",
  serviceType: "AI Development",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <AiDevelopmentPage />
    </>
  );
}
