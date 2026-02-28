import type { Metadata } from "next";
import { db } from "@/lib/db";
import { teamMembers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import TeamMemberPage from "@/components/pages/team-member";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = await db.query.teamMembers.findFirst({
    where: eq(teamMembers.slug, slug),
  });

  if (!member) {
    return { title: "Team Member Not Found" };
  }

  const title = `${member.name} — ${member.title}`;
  const description = member.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: member.image ? [member.image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: member.image ? [member.image] : [],
    },
  };
}

export default function Page() {
  return <TeamMemberPage />;
}
