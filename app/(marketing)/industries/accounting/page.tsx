import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import AccountingPage from "@/components/pages/industries/accounting";

export const metadata: Metadata = {
  title: "Accounting Firm Marketing",
  description: "Accounting firm marketing agency helping CPAs and bookkeepers grow beyond referrals. StoryBrand Certified. Clear messaging, websites, and digital strategy.",
  keywords: "accounting firm marketing, CPA marketing agency, accountant marketing, bookkeeper marketing, storybrand accounting, accounting digital marketing, CPA firm growth",
  openGraph: {
    title: "Accounting Firm Marketing",
    description: "Accounting firm marketing agency helping CPAs and bookkeepers grow beyond referrals. StoryBrand Certified. Clear messaging, websites, and digital strategy.",
    images: [getOgImageUrl("Accounting Firm Marketing", "Accounting firm marketing agency helping CPAs and bookkeepers grow beyond referrals.")],
  },
  alternates: { canonical: "https://businessbldrs.com/industries/accounting" },
};

const faqSchema = generateFAQSchema([
  {
    question: "How much does marketing cost for an accounting firm?",
    answer: "Marketing costs for accounting firms vary based on your growth goals and competitive market. We offer flexible packages from foundational website and SEO setups to full-service marketing partnerships. During your free consultation, we'll assess your situation and recommend a plan that delivers the best return on investment.",
  },
  {
    question: "How can our accounting firm get more clients?",
    answer: "Getting more clients starts with being found online and clearly communicating your value. We build a system that includes a high-converting website, local SEO to appear in searches, content marketing to demonstrate expertise, and targeted strategies to attract your ideal client profile beyond just referrals.",
  },
  {
    question: "How does StoryBrand work for CPA firms?",
    answer: "StoryBrand positions your client as the hero and your firm as the trusted guide. Instead of listing services and credentials, we lead with the problems your clients face — tax stress, financial uncertainty, growth challenges — and show how your firm provides the clear path to resolution. This approach builds trust and drives more inquiries.",
  },
  {
    question: "Does SEO work for accounting firms?",
    answer: "Yes, SEO is highly effective for accounting firms. When business owners and individuals search for accounting services, they turn to Google. By ranking for terms like 'CPA near me' or 'small business accountant,' you capture prospects who are actively looking for help. We've helped firms significantly increase their organic visibility and client inquiries.",
  },
  {
    question: "What kind of content marketing works for accountants?",
    answer: "Content marketing for accountants works best when it addresses common client questions and demonstrates expertise. Blog posts about tax planning tips, financial best practices, industry-specific guides, and timely updates on tax law changes position your firm as a thought leader and drive organic traffic to your website.",
  },
  {
    question: "How can we differentiate our accounting firm from competitors?",
    answer: "Differentiation starts with your messaging. We help you identify what truly makes your firm unique — whether it's your specialization, your approach, your team, or your client experience — and communicate that clearly across your website, marketing materials, and online presence so prospects understand why they should choose you.",
  },
]);
const serviceSchema = generateServiceSchema({
  serviceName: "Accounting Firm Marketing Services",
  description: "StoryBrand Certified accounting firm marketing agency helping CPAs, bookkeepers, and financial services firms grow beyond referrals through clear messaging, websites, and digital marketing strategies.",
  slug: "industries/accounting",
  serviceType: "Accounting Marketing",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <AccountingPage />
    </>
  );
}
