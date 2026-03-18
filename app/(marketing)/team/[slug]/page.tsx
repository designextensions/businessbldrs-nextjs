import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getTeamMemberBySlug } from "@/lib/storage";
import { db } from "@/lib/db";
import { teamMembers } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import TeamMemberPage from "@/components/pages/team-member";
import { notFound } from "next/navigation";
import { getOgImageUrl } from "@/lib/og-utils";

export const dynamicParams = true;

async function getActiveTeamMemberBySlug(slug: string) {
  return db.query.teamMembers.findFirst({
    where: and(
      eq(teamMembers.slug, slug),
      eq(teamMembers.isActive, true),
    ),
  });
}

async function getActiveTeamMemberSlugs() {
  return db
    .select({ slug: teamMembers.slug })
    .from(teamMembers)
    .where(eq(teamMembers.isActive, true));
}

export async function generateStaticParams() {
  const members = await getActiveTeamMemberSlugs();
  return members.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = await getActiveTeamMemberBySlug(slug);

  if (!member) {
    return {
      title: "Team Member Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${member.name} — ${member.title}`;
  const description = member.description;

  return {
    title,
    description,
    alternates: { canonical: `https://businessbldrs.com/team/${slug}` },
    openGraph: {
      title,
      description,
      images: member.image ? [member.image] : [getOgImageUrl(title, description || "")],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: member.image ? [member.image] : [getOgImageUrl(title, description || "")],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = await getActiveTeamMemberBySlug(slug);
  if (!member) {
    notFound();
  }

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['/api/team', slug],
    queryFn: () => getTeamMemberBySlug(slug),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TeamMemberPage />
    </HydrationBoundary>
  );
}
