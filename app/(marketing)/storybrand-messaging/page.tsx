import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import StorybrandMessagingPage from "@/components/pages/storybrand-messaging";

export const metadata: Metadata = {
  title: seoConfig.storybrandMessaging.title,
  description: seoConfig.storybrandMessaging.description,
  keywords: seoConfig.storybrandMessaging.keywords,
  openGraph: {
    title: seoConfig.storybrandMessaging.title,
    description: seoConfig.storybrandMessaging.description,
    images: [getOgImageUrl(seoConfig.storybrandMessaging.title, seoConfig.storybrandMessaging.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/storybrand-messaging" },
};

const faqSchema = generateFAQSchema([
  {
    question: "What is the StoryBrand framework?",
    answer: "The StoryBrand framework is a proven marketing methodology developed by Donald Miller that helps businesses clarify their messaging by positioning the customer as the hero and your business as the guide. It uses a 7-part storytelling structure to create clear, compelling messaging that resonates with your target audience and drives them to take action."
  },
  {
    question: "How is a Marketing Blueprint different from a regular marketing plan?",
    answer: "A Marketing Blueprint goes beyond a traditional marketing plan by starting with your core messaging using the StoryBrand BrandScript. It includes a clear one-liner, website wireframe with homepage copy, a 12-month marketing plan, lead-generating assets, and email nurturing campaigns. Everything is built on a foundation of crystal-clear messaging that speaks directly to your customers."
  },
  {
    question: "How long does the StoryBrand Blueprint process take?",
    answer: "The process starts with a strategic consultation that ranges from 1 hour for the Messaging Blueprint to two full days for the Premier Blueprint. After the consultation, deliverables are typically completed within 2-4 weeks depending on the package selected. The Marketing and Premier Blueprints include implementation planning for a full 12-month marketing strategy."
  },
  {
    question: "Do I need to be familiar with StoryBrand before starting?",
    answer: "No prior knowledge of StoryBrand is needed. Our certified StoryBrand guides walk you through the entire framework during the consultation. We handle all the strategy and copywriting, translating your business expertise into clear, customer-focused messaging that drives results."
  }
]);
const serviceSchema = generateServiceSchema({
  serviceName: "StoryBrand Messaging Blueprint",
  description: "Strategic marketing blueprint using the proven StoryBrand framework to clarify your message, create effective marketing plans, and acquire more customers. Packages from $1,950.",
  slug: "storybrand-messaging",
  serviceType: "Marketing Consulting",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <StorybrandMessagingPage />
    </>
  );
}
