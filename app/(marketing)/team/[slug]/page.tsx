import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import TeamMemberPage from "@/components/pages/team-member";

export const metadata: Metadata = {
  title: seoConfig.team.title,
  description: seoConfig.team.description,
  keywords: seoConfig.team.keywords,
  openGraph: {
    title: seoConfig.team.title,
    description: seoConfig.team.description,
    images: seoConfig.team.ogImage ? [seoConfig.team.ogImage] : [],
  },
};

export default function Page() {
  return <TeamMemberPage />;
}
