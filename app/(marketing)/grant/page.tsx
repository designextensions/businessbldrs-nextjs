import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema } from "@/lib/structured-data";
import GrantPage from "@/components/pages/grant";

export const metadata: Metadata = {
  title: "Nonprofit Marketing Grant | $50,000 Package",
  description: "Apply for Business Builders' annual $50,000 nonprofit marketing grant. Free brand kit, website redesign, messaging strategy, hosting, and social media for 501(c)(3) organizations and churches.",
  keywords: "nonprofit marketing grant, free marketing for nonprofits, church marketing grant, 501c3 marketing grant, nonprofit website redesign, free nonprofit branding",
  openGraph: {
    images: [getOgImageUrl("Nonprofit Marketing Grant | $50,000 Package", "Apply for Business Builders' annual $50,000 nonprofit marketing grant. Free brand kit, website redesign, messaging strategy, hosting, and social media for 501(c)(3) organizations and churches.")],
    title: "Nonprofit Marketing Grant | $50,000 Package",
    description: "Apply for Business Builders' annual $50,000 nonprofit marketing grant. Free brand kit, website redesign, messaging strategy, hosting, and social media for 501(c)(3) organizations and churches.",
  },
  alternates: { canonical: "https://businessbldrs.com/grant" },
};

const grantFAQs = [
  {
    question: "Who is eligible to apply for the grant?",
    answer: "Any registered 501(c)(3) nonprofit organization or church is eligible to apply. Your organization must have been active for at least one year and be in good standing. We welcome applications from organizations of all sizes and mission areas.",
  },
  {
    question: "When is the application deadline?",
    answer: "The deadline for the 2026 grant is March 14, 2026. All applications must be received by that date to be considered. We announce the winner shortly after the deadline closes.",
  },
  {
    question: "How is the grant recipient selected?",
    answer: "Our team reviews all applications based on several factors: the clarity and impact of the organization's mission, the potential for marketing to amplify their reach, their current marketing needs, and how effectively the grant package could transform their outreach efforts.",
  },
  {
    question: "What are the obligations of the grant recipient?",
    answer: "The grant recipient agrees to collaborate with our team throughout the project, provide timely feedback and content, and allow us to feature the project as a case study. There is no financial obligation — the entire $50,000 package is provided at no cost.",
  },
  {
    question: "Can we apply again if we aren't selected?",
    answer: "Absolutely. Organizations that are not selected are encouraged to reapply in subsequent years. We keep all applications on file and your previous submission can strengthen a future application as your organization grows.",
  },
  {
    question: "What if we only need some of the services?",
    answer: "The grant package is designed as a comprehensive marketing transformation. However, we work closely with each recipient to customize the deliverables to their specific needs. If certain elements aren't relevant, we can adjust the scope to maximize impact.",
  },
];

const faqSchema = generateFAQSchema(grantFAQs);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GrantPage />
    </>
  );
}
