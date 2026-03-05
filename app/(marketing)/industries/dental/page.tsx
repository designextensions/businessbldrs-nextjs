import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import DentalPage from "@/components/pages/industries/dental";

export const metadata: Metadata = {
  title: "Dental Marketing Agency | StoryBrand Certified",
  description: "StoryBrand Certified dental marketing agency with 26+ years of experience. We help dental practices attract new patients through strategic messaging, websites, SEO, and video production.",
  keywords: "dental marketing agency, dentist marketing, dental practice marketing, dental SEO, storybrand dental, dental digital marketing, new patient marketing dentist",
  openGraph: {
    title: "Dental Marketing Agency | StoryBrand Certified",
    description: "StoryBrand Certified dental marketing agency with 26+ years of experience. We help dental practices attract new patients through strategic messaging, websites, SEO, and video production.",
    images: [getOgImageUrl("Dental Marketing Agency | StoryBrand Certified", "StoryBrand Certified dental marketing agency with 26+ years of experience. We help dental practices attract new patients through strategic messaging, websites, SEO, and video production.")],
  },
  alternates: { canonical: "https://businessbldrs.com/industries/dental" },
};

const faqSchema = generateFAQSchema([
  {
    question: "How much does dental marketing cost?",
    answer: "Dental marketing budgets vary based on your goals and market. Most dental practices invest between $2,000–$8,000 per month for a comprehensive marketing strategy including website, SEO, and advertising. We create custom plans based on your specific needs and growth goals.",
  },
  {
    question: "How can I get more new patients for my dental practice?",
    answer: "Getting more patients starts with a clear message that differentiates your practice. We use the StoryBrand framework to position your practice as the obvious choice, then drive traffic through SEO, Google Ads, social media, and a high-converting website designed to turn visitors into booked appointments.",
  },
  {
    question: "What is StoryBrand and how does it help dentists?",
    answer: "StoryBrand is a proven messaging framework that positions your patient as the hero and your practice as the guide. Instead of talking about yourself, you speak directly to your patients' needs and fears. This approach dramatically increases engagement and conversions for dental practices.",
  },
  {
    question: "How important is SEO for dental practices?",
    answer: "SEO is critical for dental practices because most patients search online for a dentist near them. Ranking on the first page of Google for terms like 'dentist near me' or 'family dentist [your city]' can be the difference between a full schedule and empty chairs. We optimize your website, Google Business Profile, and content strategy for maximum visibility.",
  },
  {
    question: "Should my dental practice be on social media?",
    answer: "Yes, but strategically. Social media helps build trust and stay top-of-mind with your community. We focus on platforms where your patients actually spend time, creating content that showcases your team's personality, patient transformations, and educational content that positions you as an expert.",
  },
  {
    question: "How do I make my dental practice stand out from competitors?",
    answer: "Standing out starts with your story. We help you identify what makes your practice truly unique — whether it's your approach to patient care, your technology, or your team culture — and craft a compelling brand message around it. Combined with professional design and strategic marketing, you'll become the obvious choice in your market.",
  },
]);
const serviceSchema = generateServiceSchema({
  serviceName: "Dental Marketing Services",
  description: "StoryBrand Certified dental marketing agency with 26+ years of experience. We help dental practices attract new patients through strategic messaging, websites, SEO, and video production.",
  slug: "industries/dental",
  serviceType: "Dental Marketing",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <DentalPage />
    </>
  );
}
