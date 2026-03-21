import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import ManufacturingPage from "@/components/pages/industries/manufacturing";

export const metadata: Metadata = {
  title: "Manufacturing Marketing Agency",
  description: "Manufacturing marketing agency helping industrial companies generate qualified leads. StoryBrand Certified. 450% more leads for Rulon International.",
  keywords: "manufacturing marketing agency, industrial marketing, B2B manufacturing marketing, factory marketing, storybrand manufacturing, industrial digital marketing",
  openGraph: {
    title: "Manufacturing Marketing Agency",
    description: "Manufacturing marketing agency helping industrial companies generate qualified leads. StoryBrand Certified. 450% more leads for Rulon International.",
    images: [getOgImageUrl("Manufacturing Marketing Agency", "Manufacturing marketing agency helping industrial companies generate qualified leads.")],
  },
  alternates: { canonical: "https://businessbldrs.com/industries/manufacturing" },
};

const faqSchema = generateFAQSchema([
  {
    question: "How much does manufacturing marketing cost?",
    answer: "Manufacturing marketing investment varies based on your goals, target markets, and competitive landscape. Our plans typically range from $4,000 to $15,000+ per month and can include website redesign, SEO, content marketing, paid advertising, and video production. We create a custom strategy that aligns with your budget and growth objectives.",
  },
  {
    question: "How is B2B manufacturing marketing different from B2C?",
    answer: "B2B manufacturing marketing focuses on longer sales cycles, multiple decision-makers, and technical audiences. Content needs to educate and build trust over time. We create strategies that speak to engineers, purchasing managers, and C-suite executives with the right message at the right stage of the buying process.",
  },
  {
    question: "How important is SEO for manufacturers?",
    answer: "SEO is essential for manufacturers. Over 70% of B2B buyers start their research with a Google search. If your company doesn't appear when purchasing managers search for your products or solutions, you're losing business to competitors who do. We specialize in technical SEO and content strategies that rank for industry-specific terms.",
  },
  {
    question: "Should we invest in digital marketing or keep focusing on trade shows?",
    answer: "The most successful manufacturers do both, but digital marketing provides a consistent lead generation engine that works 24/7, not just a few days a year. Digital marketing also lets you nurture leads before and after trade shows, maximizing your ROI from every event. We help you build an integrated strategy that leverages both channels.",
  },
  {
    question: "How do we reach purchasing managers and engineers online?",
    answer: "We use a combination of SEO, targeted content marketing, LinkedIn advertising, and email nurturing to reach technical buyers where they research. By creating valuable content that addresses their specific challenges and questions, we position your company as the trusted expert in your space.",
  },
  {
    question: "Can you help rebrand a legacy manufacturing company?",
    answer: "Absolutely. We've helped legacy manufacturers like Rulon International completely transform their brand for the modern market. From logo and visual identity to messaging and website, we help established companies maintain their heritage while presenting a fresh, professional image that resonates with today's buyers.",
  },
]);
const serviceSchema = generateServiceSchema({
  serviceName: "Manufacturing Marketing Services",
  description: "StoryBrand Certified manufacturing marketing agency helping industrial companies generate qualified leads. 450% more leads for Rulon International. Full-service B2B manufacturing marketing including websites, SEO, and video.",
  slug: "industries/manufacturing",
  serviceType: "Manufacturing Marketing",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ManufacturingPage />
    </>
  );
}
