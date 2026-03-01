import type { Metadata } from "next";
import ConstructionPage from "@/components/pages/industries/construction";

export const metadata: Metadata = {
  title: "Construction Marketing Agency | StoryBrand Certified | Business Builders",
  description: "StoryBrand Certified construction marketing agency helping contractors and builders generate consistent leads. 320% ROI for Hines. Full-service contractor marketing including websites, SEO, and video.",
  keywords: "construction marketing agency, contractor marketing, construction company marketing, builder marketing, storybrand construction, construction digital marketing",
  openGraph: {
    title: "Construction Marketing Agency | StoryBrand Certified | Business Builders",
    description: "StoryBrand Certified construction marketing agency helping contractors and builders generate consistent leads. 320% ROI for Hines.",
    images: ["/service-strategy.jpg"],
  },
};

export default function Page() {
  return <ConstructionPage />;
}
