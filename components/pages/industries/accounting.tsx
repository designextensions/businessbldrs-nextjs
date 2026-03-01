"use client";

import IndustryPageTemplate from "@/components/pages/industry-page-template";
import { Users, ShoppingCart, Globe } from "lucide-react";

export default function AccountingPage() {
  return (
    <IndustryPageTemplate
      industry="Accounting"
      slug="accounting"
      heroHeadline="GROW YOUR"
      heroHighlight="ACCOUNTING FIRM"
      heroDescription="Most accounting firms rely solely on referrals and struggle to differentiate themselves in a crowded market. Without a proactive marketing strategy, growth stalls and you remain invisible to the clients who need you most."
      heroTagline="StoryBrand Certified. Helping accounting firms grow beyond referrals."
      heroImage="/service-website.jpg"
      heroImageAlt="Accounting firm marketing strategy for CPAs and bookkeepers"
      stats={[
        { number: "26+", label: "Years marketing experience" },
        { number: "500+", label: "Projects delivered" },
        { number: "StoryBrand", label: "Certified Agency" },
        { number: "100%", label: "Growth-focused strategies" },
      ]}
      painPoints={[
        {
          icon: Users,
          title: "Referral Dependence",
          description: "Your growth is limited to who your current clients happen to know. Referrals are unpredictable and unscalable, leaving your firm vulnerable to stagnation during slow periods.",
        },
        {
          icon: ShoppingCart,
          title: "Commodity Perception",
          description: "Clients think all CPAs and accounting firms are the same. When prospects can't see what makes you different, they default to choosing the cheapest option instead of the best fit.",
        },
        {
          icon: Globe,
          title: "No Online Presence",
          description: "Potential clients searching for accounting services can't find you online or see your expertise. Without a professional website and digital presence, you're invisible to the clients who need you most.",
        },
      ]}
      problemHeadline="ACCOUNTING FIRMS THAT DON'T MARKET DON'T GROW"
      problemDescription="Referrals are great, but they're not a growth strategy. Most accounting firms look identical online and fail to communicate why they're different. That's why growth stalls."
      guideCredentials={[
        "StoryBrand Certified Agency",
        "Experience with CPA firms and financial services",
        "Full-service website and SEO",
        "26+ years of marketing experience",
        "Content marketing for thought leadership",
      ]}
      portfolioTitles={["Level Accounting", "Strategis CPAs", "DuckettLadd"]}
      faqs={[
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
      ]}
      ctaHeadline="READY TO GROW YOUR FIRM?"
      ctaDescription="Let's build a marketing strategy that brings in new clients and grows your accounting practice."
      seo={{
        title: "Accounting Firm Marketing Agency | StoryBrand Certified | Business Builders",
        description: "StoryBrand Certified accounting firm marketing agency helping CPAs, bookkeepers, and financial services firms grow beyond referrals through clear messaging, websites, and digital marketing strategies.",
        keywords: "accounting firm marketing, CPA marketing agency, accountant marketing, bookkeeper marketing, storybrand accounting, accounting digital marketing, CPA firm growth",
      }}
    />
  );
}
