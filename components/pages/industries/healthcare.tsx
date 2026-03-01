"use client";

import IndustryPageTemplate from "@/components/pages/industry-page-template";
import { Users, Shield, Globe } from "lucide-react";

export default function HealthcarePage() {
  return (
    <IndustryPageTemplate
      industry="Healthcare"
      slug="healthcare"
      heroHeadline="GROW YOUR"
      heroHighlight="PATIENT BASE"
      heroDescription="Healthcare providers are struggling to attract new patients in a competitive market. Without a clear marketing strategy, potential patients choose competitors who are easier to find and understand online."
      heroTagline="StoryBrand Certified. Helping healthcare practices grow for 26+ years."
      heroImage="/service-strategy.jpg"
      heroImageAlt="Healthcare marketing strategy for medical practices"
      stats={[
        { number: "26+", label: "Years marketing experience" },
        { number: "500+", label: "Projects delivered" },
        { number: "StoryBrand", label: "Certified Agency" },
        { number: "HIPAA", label: "Compliant marketing practices" },
      ]}
      painPoints={[
        {
          icon: Users,
          title: "Patient Acquisition",
          description: "New patients are choosing your competitors because they can't find you online or don't understand what makes your practice different. Your expertise isn't translating into new appointments.",
        },
        {
          icon: Shield,
          title: "Regulatory Complexity",
          description: "Marketing in healthcare requires compliance awareness. You need a partner who understands the nuances of HIPAA and can create effective marketing that stays within regulatory guidelines.",
        },
        {
          icon: Globe,
          title: "Outdated Online Presence",
          description: "Your website doesn't reflect the quality of care you provide. Patients judge your practice by your online presence, and an outdated site sends the wrong message about your capabilities.",
        },
      ]}
      problemHeadline="HEALTHCARE MARKETING REQUIRES A SPECIALIST"
      problemDescription="Most healthcare marketing feels clinical and impersonal. Patients want to feel understood and cared for before they ever walk through your doors. Your marketing should reflect the experience you provide."
      guideCredentials={[
        "StoryBrand Certified Agency",
        "Experience with medical practices and health organizations",
        "HIPAA-aware marketing practices",
        "26+ years of marketing experience",
        "Full-service website, SEO, and content marketing",
      ]}
      portfolioTitles={["Midtown Occupational Health Services", "Main Street Medical Supply", "ARC Patient Timeline", "Morcare", "National Association for Neonatal Therapists"]}
      faqs={[
        {
          question: "How much does healthcare marketing cost?",
          answer: "Healthcare marketing costs depend on your practice size, goals, and competitive landscape. We offer scalable solutions from foundational website and SEO packages to comprehensive marketing partnerships. We'll create a custom plan during your free consultation that fits your budget and growth objectives.",
        },
        {
          question: "How do we handle HIPAA compliance in marketing?",
          answer: "We follow HIPAA-aware marketing practices in everything we create. This includes ensuring patient testimonials have proper consent, avoiding protected health information in all marketing materials, and implementing secure forms and communication channels on your website.",
        },
        {
          question: "How can we attract more patients to our practice?",
          answer: "Attracting more patients starts with being found online and communicating trust. We optimize your Google Business Profile, build a website that converts visitors into appointments, implement local SEO strategies, and create content that positions you as the trusted authority in your specialty.",
        },
        {
          question: "Does SEO really work for doctors and medical practices?",
          answer: "Yes, SEO is one of the most effective long-term strategies for healthcare practices. Most patients search online for healthcare providers. By ranking for terms like 'best [specialty] near me,' you capture patients actively looking for care. We've helped practices significantly increase organic traffic and new patient inquiries.",
        },
        {
          question: "Should healthcare providers use social media?",
          answer: "Social media is an excellent tool for healthcare providers to build trust, educate patients, and humanize their practice. Sharing health tips, behind-the-scenes content, team introductions, and patient success stories helps prospective patients feel comfortable choosing your practice.",
        },
        {
          question: "How does StoryBrand work for medical practices?",
          answer: "StoryBrand positions your patient as the hero of the story and your practice as the trusted guide. Instead of leading with credentials and equipment, we lead with empathy for the patient's problem and a clear plan to help. This approach builds trust faster and drives more appointment bookings.",
        },
      ]}
      ctaHeadline="READY TO GROW YOUR PRACTICE?"
      ctaDescription="Let's build a marketing strategy that attracts the right patients and grows your healthcare business."
      seo={{
        title: "Healthcare Marketing Agency | StoryBrand Certified | Business Builders",
        description: "StoryBrand Certified healthcare marketing agency helping medical practices, doctors, and health organizations grow their patient base through clear messaging, websites, and HIPAA-aware digital marketing.",
        keywords: "healthcare marketing agency, medical practice marketing, doctor marketing, hospital marketing, storybrand healthcare, healthcare digital marketing, patient acquisition",
      }}
    />
  );
}
