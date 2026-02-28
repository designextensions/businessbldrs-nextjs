"use client";

// In Next.js, team member meta tags are handled by generateMetadata() in
// app/(marketing)/team/[slug]/page.tsx.
// This stub is kept for import compatibility.

import type { TeamMember } from "@/lib/db/schema";

interface TeamMemberSEOProps {
  member: TeamMember;
}

export default function TeamMemberSEO(_props: TeamMemberSEOProps) {
  return null;
}
