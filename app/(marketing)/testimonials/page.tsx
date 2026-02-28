import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import TestimonialsPage from "@/components/pages/testimonials";

export const metadata: Metadata = {
  title: seoConfig.testimonials.title,
  description: seoConfig.testimonials.description,
  keywords: seoConfig.testimonials.keywords,
  openGraph: {
    title: seoConfig.testimonials.title,
    description: seoConfig.testimonials.description,
    images: seoConfig.testimonials.ogImage ? [seoConfig.testimonials.ogImage] : [],
  },
};

export default function Page() {
  return <TestimonialsPage />;
}
