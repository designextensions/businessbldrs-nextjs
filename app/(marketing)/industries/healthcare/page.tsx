import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import HealthcarePage from "@/components/pages/industries/healthcare";

export const metadata: Metadata = {
  title: "Healthcare Marketing Agency | StoryBrand Certified",
  description: "StoryBrand Certified healthcare marketing agency helping medical practices, doctors, and health organizations grow their patient base through clear messaging, websites, and HIPAA-aware digital marketing.",
  keywords: "healthcare marketing agency, medical practice marketing, doctor marketing, hospital marketing, storybrand healthcare, healthcare digital marketing, patient acquisition",
  openGraph: {
    title: "Healthcare Marketing Agency | StoryBrand Certified",
    description: "StoryBrand Certified healthcare marketing agency helping medical practices, doctors, and health organizations grow their patient base through clear messaging, websites, and HIPAA-aware digital marketing.",
    images: [getOgImageUrl("Healthcare Marketing Agency | StoryBrand Certified", "StoryBrand Certified healthcare marketing agency helping medical practices, doctors, and health organizations grow their patient base through clear messaging, websites, and HIPAA-aware digital marketing.")],
  },
  alternates: { canonical: "https://businessbldrs.com/industries/healthcare" },
};

const faqSchema = generateFAQSchema([
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
]);
const serviceSchema = generateServiceSchema({
  serviceName: "Healthcare Marketing Services",
  description: "StoryBrand Certified healthcare marketing agency helping medical practices, doctors, and health organizations grow their patient base through clear messaging, websites, and HIPAA-aware digital marketing.",
  slug: "industries/healthcare",
  serviceType: "Healthcare Marketing",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <HealthcarePage />
    </>
  );
}
