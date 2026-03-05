import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import TestimonialsPage from "@/components/pages/testimonials";

export const metadata: Metadata = {
  title: seoConfig.testimonials.title,
  description: seoConfig.testimonials.description,
  keywords: seoConfig.testimonials.keywords,
  openGraph: {
    title: seoConfig.testimonials.title,
    description: seoConfig.testimonials.description,
    images: [getOgImageUrl(seoConfig.testimonials.title, seoConfig.testimonials.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/testimonials" },
};

export default function Page() {
  return <TestimonialsPage />;
}
