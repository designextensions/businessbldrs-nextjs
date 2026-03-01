import type { Metadata } from "next";
import HealthcarePage from "@/components/pages/industries/healthcare";

export const metadata: Metadata = {
  title: "Healthcare Marketing Agency | StoryBrand Certified | Business Builders",
  description: "StoryBrand Certified healthcare marketing agency helping medical practices, doctors, and health organizations grow their patient base through clear messaging, websites, and HIPAA-aware digital marketing.",
  keywords: "healthcare marketing agency, medical practice marketing, doctor marketing, hospital marketing, storybrand healthcare, healthcare digital marketing, patient acquisition",
  openGraph: {
    title: "Healthcare Marketing Agency | StoryBrand Certified | Business Builders",
    description: "StoryBrand Certified healthcare marketing agency helping medical practices, doctors, and health organizations grow their patient base through clear messaging, websites, and HIPAA-aware digital marketing.",
    images: ["/service-strategy.jpg"],
  },
};

export default function Page() {
  return <HealthcarePage />;
}
