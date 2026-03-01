import type { Metadata } from "next";
import EducationPage from "@/components/pages/industries/education";

export const metadata: Metadata = {
  title: "Education Marketing Agency | StoryBrand Certified | Business Builders",
  description: "StoryBrand Certified education marketing agency helping schools, universities, and educational institutions increase enrollment through clear messaging, websites, and digital marketing strategies.",
  keywords: "education marketing agency, school marketing, university marketing, private school marketing, storybrand education, education digital marketing, enrollment marketing",
  openGraph: {
    title: "Education Marketing Agency | StoryBrand Certified | Business Builders",
    description: "StoryBrand Certified education marketing agency helping schools, universities, and educational institutions increase enrollment through clear messaging, websites, and digital marketing strategies.",
    images: ["/service-marketing.jpg"],
  },
};

export default function Page() {
  return <EducationPage />;
}
