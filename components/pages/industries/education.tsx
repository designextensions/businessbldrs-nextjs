"use client";

import IndustryPageTemplate from "@/components/pages/industry-page-template";
import { TrendingDown, MessageSquare, DollarSign } from "lucide-react";

export default function EducationPage() {
  return (
    <IndustryPageTemplate
      industry="Education"
      slug="education"
      heroHeadline="INCREASE YOUR"
      heroHighlight="ENROLLMENT"
      heroDescription="Schools and educational institutions are struggling to reach prospective students in an increasingly competitive landscape. Without a clear marketing strategy, your message gets lost and enrollment declines."
      heroTagline="StoryBrand Certified. 26+ years helping education organizations grow."
      heroImage="/service-marketing.jpg"
      heroImageAlt="Education marketing strategy for schools and universities"
      stats={[
        { number: "26+", label: "Years marketing experience" },
        { number: "500+", label: "Projects delivered" },
        { number: "StoryBrand", label: "Certified Agency" },
        { number: "100%", label: "Enrollment-focused strategies" },
      ]}
      painPoints={[
        {
          icon: TrendingDown,
          title: "Declining Enrollment",
          description: "Schools are competing for fewer students than ever before. Without a strong marketing presence, prospective families choose competitors who communicate more clearly.",
        },
        {
          icon: MessageSquare,
          title: "Unclear Messaging",
          description: "Parents and students don't understand what makes your school different. Your website and materials sound like every other institution, making it impossible to stand out.",
        },
        {
          icon: DollarSign,
          title: "Limited Budget",
          description: "You're doing more with less and likely don't have a dedicated marketing team. Every dollar needs to count, but you're not sure where to invest for the best return.",
        },
      ]}
      problemHeadline="EDUCATION MARKETING NEEDS CLARITY"
      problemDescription="Most schools and educational institutions sound the same. Parents and students can't tell you apart from other options. Without a clear, compelling message, enrollment suffers."
      guideCredentials={[
        "StoryBrand Certified Agency",
        "Worked with schools and education organizations",
        "Full-service website, video, and marketing",
        "26+ years of marketing experience",
        "Enrollment-focused marketing strategies",
      ]}
      portfolioTitles={["Citizens High School", "Impact Early Education", "National Career Academy Coalition", "Bozard University"]}
      faqs={[
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
      ]}
      ctaHeadline="READY TO GROW ENROLLMENT?"
      ctaDescription="Let's build a marketing strategy that fills classrooms and grows your educational institution."
      seo={{
        title: "Education Marketing Agency | StoryBrand Certified | Business Builders",
        description: "StoryBrand Certified education marketing agency helping schools, universities, and educational institutions increase enrollment through clear messaging, websites, and digital marketing strategies.",
        keywords: "education marketing agency, school marketing, university marketing, private school marketing, storybrand education, education digital marketing, enrollment marketing",
      }}
    />
  );
}
