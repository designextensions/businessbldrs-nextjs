import type { Metadata } from "next";
import AutomotivePage from "@/components/pages/industries/automotive";

export const metadata: Metadata = {
  title: "Automotive Marketing Agency | StoryBrand Certified | Business Builders",
  description: "StoryBrand Certified automotive marketing agency helping car dealerships generate more leads and sell more vehicles. 285% more leads for Bozard Ford Lincoln. Full-service auto dealer digital marketing.",
  keywords: "automotive marketing agency, car dealership marketing, auto dealer digital marketing, automotive SEO, storybrand automotive, vehicle sales marketing",
  openGraph: {
    title: "Automotive Marketing Agency | StoryBrand Certified | Business Builders",
    description: "StoryBrand Certified automotive marketing agency helping car dealerships generate more leads and sell more vehicles. 285% more leads for Bozard Ford Lincoln.",
    images: ["/service-video-new.jpg"],
  },
};

export default function Page() {
  return <AutomotivePage />;
}
