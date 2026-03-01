import type { Metadata } from "next";
import ServicesPlanPage from "@/components/pages/services-plan";

export const metadata: Metadata = {
  title: "Strategic Planning Services | Business Builders",
  description: "Start with the right strategy. StoryBrand messaging, marketing blueprints, and AI strategy planning to set the foundation for your business growth.",
  keywords: "marketing strategy, storybrand agency, marketing blueprint, ai strategy, business planning",
  openGraph: {
    title: "Strategic Planning Services | Business Builders",
    description: "Start with the right strategy. StoryBrand messaging, marketing blueprints, and AI strategy planning to set the foundation for your business growth.",
  },
};

export default function Page() {
  return <ServicesPlanPage />;
}
