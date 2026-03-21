import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema } from "@/lib/structured-data";
import MaccsupportPage from "@/components/pages/maccsupport";

export const metadata: Metadata = {
  title: seoConfig.maccsupport.title,
  description: seoConfig.maccsupport.description,
  keywords: seoConfig.maccsupport.keywords,
  openGraph: {
    title: seoConfig.maccsupport.title,
    description: seoConfig.maccsupport.description,
    images: [getOgImageUrl(seoConfig.maccsupport.title, seoConfig.maccsupport.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/maccsupport" },
};

const faqSchema = generateFAQSchema([
  {
    question: "What if my site is down?",
    answer: "Please contact \"urgent@businessbldrs.com\" immediately. IF YOUR WEBSITE IS DOWN OR HACKED — please email urgent@businessbldrs.com so that our team can work to resolve the issue ASAP."
  },
  {
    question: "When should I expect a response to my requests?",
    answer: "Our normal office hours are from 9 am – 5 pm EST, Monday – Friday. We aim to respond to your support request within 24 hrs, and if the request is submitted after 4 pm EST, it will be responded to the following business day."
  },
  {
    question: "How does billing/project approval work?",
    answer: "For projects requiring billable hours, Business Builders will provide an estimate in advance of the work and your approval will be required before the project begins."
  },
  {
    question: "Who will invoice us?",
    answer: "Work completed by Business Builders will be billed through MACC and be included as an item on your monthly invoice from MACC."
  },
  {
    question: "What types of support requests do you handle?",
    answer: "We handle a wide range of website technical needs including content updates, functionality issues, security concerns, performance optimization, plugin updates, and general maintenance. If you're unsure whether we can help, just ask!"
  },
  {
    question: "Do you provide emergency support?",
    answer: "Yes! For urgent issues like website downtime or security breaches, contact urgent@businessbldrs.com immediately. We prioritize emergency requests and work to resolve critical issues as quickly as possible."
  },
  {
    question: "Can you help with website updates and content changes?",
    answer: "Absolutely! We can help with content updates, adding new pages, updating images, modifying layouts, and making other changes to keep your website current and effective."
  },
  {
    question: "What if I need help outside of business hours?",
    answer: "While our standard support hours are 9 AM - 5 PM EST, Monday - Friday, you can still submit support requests through this form anytime. For true emergencies (site down/hacked), email urgent@businessbldrs.com even outside business hours."
  }
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <MaccsupportPage />
    </>
  );
}
