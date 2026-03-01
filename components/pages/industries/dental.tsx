"use client";

import IndustryPageTemplate from "@/components/pages/industry-page-template";
import { Calendar, CreditCard, Globe } from "lucide-react";

export default function DentalPage() {
  return (
    <IndustryPageTemplate
      industry="Dental"
      slug="dental"
      heroHeadline="FILL YOUR"
      heroHighlight="APPOINTMENT BOOK"
      heroDescription="Your dental practice deserves more than a trickle of new patients from insurance lists. You've built a great practice with excellent care, but your marketing isn't bringing in the steady flow of new patients you need to grow."
      heroTagline="StoryBrand Certified. Helping dental practices grow for 26+ years."
      heroImage="/service-marketing.jpg"
      heroImageAlt="Dental marketing agency services"
      stats={[
        { number: "26+", label: "Years marketing experience" },
        { number: "500+", label: "Projects delivered" },
        { number: "StoryBrand", label: "Certified Agency" },
        { number: "100%", label: "Patient-focused strategies" },
      ]}
      painPoints={[
        {
          icon: Calendar,
          title: "Empty Chairs",
          description: "You have great reviews and a talented team, but your new patient flow is inconsistent. Some months are packed, others leave you staring at empty chairs.",
        },
        {
          icon: CreditCard,
          title: "Insurance Dependence",
          description: "You're relying on insurance directories to bring in patients instead of building your own brand that attracts the right patients willing to pay for quality care.",
        },
        {
          icon: Globe,
          title: "Cookie-Cutter Website",
          description: "Your website looks like every other dental practice in town — stock photos of smiling families and generic messaging that doesn't set you apart from the competition.",
        },
      ]}
      problemHeadline="DENTAL MARKETING SHOULDN'T BE AN AFTERTHOUGHT"
      problemDescription="Most dental practices have great clinical skills but generic marketing. When every dentist says 'gentle, caring dentistry,' patients can't tell you apart. You need a message that resonates."
      guideCredentials={[
        "StoryBrand Certified Agency",
        "Experience with dental practices",
        "Full-service website, SEO, and video",
        "26+ years of marketing experience",
        "Patient acquisition focused strategies",
      ]}
      portfolioTitles={["Bartram Dental", "Bartram Dental Assisting School"]}
      faqs={[
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
      ]}
      ctaHeadline="READY TO FILL YOUR SCHEDULE?"
      ctaDescription="Let's build a marketing strategy that brings new patients through your doors every week."
      seo={{
        title: "Dental Marketing Agency | StoryBrand Certified | Business Builders",
        description: "StoryBrand Certified dental marketing agency with 26+ years of experience. We help dental practices attract new patients through strategic messaging, websites, SEO, and video production.",
        keywords: "dental marketing agency, dentist marketing, dental practice marketing, dental SEO, storybrand dental, dental digital marketing, new patient marketing dentist",
      }}
    />
  );
}
