import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import AutomotivePage from "@/components/pages/industries/automotive";

export const metadata: Metadata = {
  title: "Automotive Marketing Agency | StoryBrand Certified",
  description: "StoryBrand Certified automotive marketing agency helping car dealerships generate more leads and sell more vehicles. 285% more leads for Bozard Ford Lincoln. Full-service auto dealer digital marketing.",
  keywords: "automotive marketing agency, car dealership marketing, auto dealer digital marketing, automotive SEO, storybrand automotive, vehicle sales marketing",
  openGraph: {
    title: "Automotive Marketing Agency | StoryBrand Certified",
    description: "StoryBrand Certified automotive marketing agency helping car dealerships generate more leads and sell more vehicles. 285% more leads for Bozard Ford Lincoln.",
    images: [getOgImageUrl("Automotive Marketing Agency | StoryBrand Certified", "StoryBrand Certified automotive marketing agency helping car dealerships generate more leads and sell more vehicles. 285% more leads for Bozard Ford Lincoln. Full-service auto dealer digital marketing.")],
  },
  alternates: { canonical: "https://businessbldrs.com/industries/automotive" },
};

const faqSchema = generateFAQSchema([
  {
    question: "How much does automotive marketing cost?",
    answer: "Automotive marketing investment varies based on your dealership's goals, market size, and competitive landscape. We offer customized plans that typically range from $3,000 to $15,000+ per month, depending on the scope of services. We'll work with you to create a plan that fits your budget and delivers measurable ROI.",
  },
  {
    question: "How long does it take to see results from automotive marketing?",
    answer: "Most dealerships start seeing increased traffic and leads within the first 60-90 days. SEO results build over 3-6 months, while paid advertising and social media campaigns can generate leads almost immediately. We set clear expectations and provide monthly reporting so you always know how your investment is performing.",
  },
  {
    question: "What marketing services do you offer for car dealerships?",
    answer: "We provide a full suite of marketing services for automotive businesses including website design, SEO, paid search advertising, social media marketing, video production, email marketing, and StoryBrand messaging. Everything is tailored specifically for the automotive industry to drive showroom traffic and vehicle sales.",
  },
  {
    question: "How does StoryBrand work for the auto industry?",
    answer: "StoryBrand helps your dealership position the customer as the hero and your dealership as the guide. Instead of leading with inventory and prices, we craft a message that speaks to what car buyers actually want — a trusted dealer who makes the buying experience simple and stress-free. This approach has proven to dramatically increase engagement and leads.",
  },
  {
    question: "How do you measure ROI for automotive marketing?",
    answer: "We track everything from website traffic and lead form submissions to phone calls, chat conversations, and showroom visits. Using tools like Google Analytics, HubSpot, and call tracking, we provide transparent monthly reports that show exactly how your marketing investment is performing and where every dollar is going.",
  },
  {
    question: "Do you work with independent dealers or just large dealerships?",
    answer: "We work with dealerships of all sizes, from independent used car dealers to multi-location franchise groups. Our strategies are scalable and customized to fit your specific market, budget, and growth goals. Every dealership deserves marketing that actually works, regardless of size.",
  },
]);
const serviceSchema = generateServiceSchema({
  serviceName: "Automotive Marketing Services",
  description: "StoryBrand Certified automotive marketing agency helping car dealerships generate more leads and sell more vehicles. 285% more leads for Bozard Ford Lincoln. Full-service auto dealer digital marketing.",
  slug: "industries/automotive",
  serviceType: "Automotive Marketing",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <AutomotivePage />
    </>
  );
}
