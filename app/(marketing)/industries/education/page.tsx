import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import EducationPage from "@/components/pages/industries/education";

export const metadata: Metadata = {
  title: "Education Marketing Agency",
  description: "Education marketing agency helping schools and universities increase enrollment. StoryBrand Certified. Clear messaging, websites, and digital strategy.",
  keywords: "education marketing agency, school marketing, university marketing, private school marketing, storybrand education, education digital marketing, enrollment marketing",
  openGraph: {
    title: "Education Marketing Agency",
    description: "Education marketing agency helping schools and universities increase enrollment. StoryBrand Certified. Clear messaging, websites, and digital strategy.",
    images: [getOgImageUrl("Education Marketing Agency", "Education marketing agency helping schools and universities increase enrollment.")],
  },
  alternates: { canonical: "https://businessbldrs.com/industries/education" },
};

const faqSchema = generateFAQSchema([
  {
    question: "How much does education marketing cost?",
    answer: "Education marketing costs vary based on scope and goals. We offer flexible packages starting from strategy-only engagements to full-service marketing partnerships. During our free consultation, we'll discuss your enrollment goals, budget, and create a custom plan that maximizes your investment.",
  },
  {
    question: "How can we increase enrollment at our school?",
    answer: "Increasing enrollment starts with a clear message that resonates with parents and students. We use the StoryBrand framework to clarify your messaging, then build a marketing system that includes a high-converting website, SEO, social media, and targeted advertising to reach prospective families at the right time.",
  },
  {
    question: "What is StoryBrand and how does it help schools?",
    answer: "StoryBrand is a proven messaging framework that positions your student as the hero and your school as the guide. It eliminates confusing messaging and replaces it with clear, compelling communication that drives enrollment. Schools using StoryBrand see higher engagement and more inquiries.",
  },
  {
    question: "What digital marketing strategies work best for private schools?",
    answer: "Private schools benefit most from a combination of SEO, targeted social media advertising, email nurturing campaigns, and a website optimized for conversions. We also recommend video marketing to showcase campus culture, testimonials from current families, and virtual tour experiences.",
  },
  {
    question: "Should our school be using social media for marketing?",
    answer: "Absolutely. Social media is where parents and prospective students research schools. Platforms like Facebook, Instagram, and even LinkedIn (for higher education) allow you to showcase your culture, share success stories, and engage with your community in a way that builds trust and drives enrollment inquiries.",
  },
  {
    question: "How do we market online learning programs effectively?",
    answer: "Marketing online programs requires a different approach than traditional education marketing. We focus on SEO to capture search intent, landing pages optimized for conversions, targeted advertising to reach adult learners, and email sequences that nurture prospects through the decision-making process.",
  },
]);
const serviceSchema = generateServiceSchema({
  serviceName: "Education Marketing Services",
  description: "StoryBrand Certified education marketing agency helping schools, universities, and educational institutions increase enrollment through clear messaging, websites, and digital marketing strategies.",
  slug: "industries/education",
  serviceType: "Education Marketing",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <EducationPage />
    </>
  );
}
