import type { Metadata } from "next";
import ManufacturingPage from "@/components/pages/industries/manufacturing";

export const metadata: Metadata = {
  title: "Manufacturing Marketing Agency | StoryBrand Certified | Business Builders",
  description: "StoryBrand Certified manufacturing marketing agency helping industrial companies generate qualified leads. 450% more leads for Rulon International. Full-service B2B manufacturing marketing including websites, SEO, and video.",
  keywords: "manufacturing marketing agency, industrial marketing, B2B manufacturing marketing, factory marketing, storybrand manufacturing, industrial digital marketing",
  openGraph: {
    title: "Manufacturing Marketing Agency | StoryBrand Certified | Business Builders",
    description: "StoryBrand Certified manufacturing marketing agency helping industrial companies generate qualified leads. 450% more leads for Rulon International.",
    images: ["/service-branding.jpg"],
  },
};

export default function Page() {
  return <ManufacturingPage />;
}
