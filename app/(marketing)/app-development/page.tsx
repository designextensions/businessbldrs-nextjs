import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import AppDevelopmentPage from "@/components/pages/app-development";

export const metadata: Metadata = {
  title: seoConfig.appDevelopment.title,
  description: seoConfig.appDevelopment.description,
  keywords: seoConfig.appDevelopment.keywords,
  openGraph: {
    title: seoConfig.appDevelopment.title,
    description: seoConfig.appDevelopment.description,
    images: seoConfig.appDevelopment.ogImage ? [seoConfig.appDevelopment.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/app-development" },
};

const faqSchema = generateFAQSchema([
  {
    question: "What types of apps and software do you build?",
    answer: "We build a wide range of custom solutions including WordPress websites, native iOS and Android mobile apps, web applications, custom integrations, and enterprise software. Each solution is tailored to your specific business needs and designed to streamline your processes, improve productivity, and scale with your growth."
  },
  {
    question: "How long does custom app development take?",
    answer: "Development timelines vary based on project complexity. A WordPress website typically takes 6-12 weeks, while custom web applications and mobile apps can take 3-6 months. We start every project with a discovery phase to define scope, then provide a detailed timeline and milestones so you know exactly what to expect."
  },
  {
    question: "How much does custom app development cost?",
    answer: "Costs depend on the type and complexity of the project. WordPress websites start around $7,500, while custom web applications and mobile apps are scoped individually based on features and requirements. Schedule a free 15-minute discovery call to discuss your project, and we will provide a custom quote with transparent pricing."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer comprehensive hosting and maintenance services to keep your website or application fast, secure, and up to date. Our support includes regular updates, security monitoring, performance optimization, and feature enhancements so you can focus on running your business."
  }
]);
const serviceSchema = generateServiceSchema({
  serviceName: "Custom App Development",
  description: "Custom software and app development services including WordPress websites, iOS and Android apps, web applications, and hosting and maintenance.",
  slug: "app-development",
  serviceType: "Software Development",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <AppDevelopmentPage />
    </>
  );
}
