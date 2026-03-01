import type { Metadata } from "next";
import DentalPage from "@/components/pages/industries/dental";

export const metadata: Metadata = {
  title: "Dental Marketing Agency | StoryBrand Certified | Business Builders",
  description: "StoryBrand Certified dental marketing agency with 26+ years of experience. We help dental practices attract new patients through strategic messaging, websites, SEO, and video production.",
  keywords: "dental marketing agency, dentist marketing, dental practice marketing, dental SEO, storybrand dental, dental digital marketing, new patient marketing dentist",
  openGraph: {
    title: "Dental Marketing Agency | StoryBrand Certified | Business Builders",
    description: "StoryBrand Certified dental marketing agency with 26+ years of experience. We help dental practices attract new patients through strategic messaging, websites, SEO, and video production.",
    images: ["/service-marketing.jpg"],
  },
};

export default function Page() {
  return <DentalPage />;
}
