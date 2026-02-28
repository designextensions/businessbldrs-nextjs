import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getTeamMembers } from "@/lib/storage";
import { seoConfig } from "@/lib/seo-config";
import TeamPage from "@/components/pages/team";

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

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['/api/team'],
    queryFn: getTeamMembers,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TeamPage />
    </HydrationBoundary>
  );
}
