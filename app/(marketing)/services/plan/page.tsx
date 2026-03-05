import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import ServicesPlanPage from "@/components/pages/services-plan";

export const metadata: Metadata = {
  title: "Strategic Planning Services | Business Builders",
  description: "Start with the right strategy. StoryBrand messaging, marketing blueprints, and AI strategy planning to set the foundation for your business growth.",
  keywords: "marketing strategy, storybrand agency, marketing blueprint, ai strategy, business planning",
  openGraph: {
    images: [getOgImageUrl("Strategic Planning Services | Business Builders", "Start with the right strategy. StoryBrand messaging, marketing blueprints, and AI strategy planning to set the foundation for your business growth.")],
    title: "Strategic Planning Services | Business Builders",
    description: "Start with the right strategy. StoryBrand messaging, marketing blueprints, and AI strategy planning to set the foundation for your business growth.",
  },
  alternates: { canonical: "https://businessbldrs.com/services/plan" },
};

export default function Page() {
  return <ServicesPlanPage />;
}
