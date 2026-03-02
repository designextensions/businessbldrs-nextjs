import { MetadataRoute } from "next";
import { db } from "@/lib/db";
import { blogArticles, teamMembers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

const BASE_URL = "https://businessbldrs.com";

const CORE_UPDATED = new Date("2026-02-15");
const SERVICE_UPDATED = new Date("2026-01-20");
const RESOURCE_UPDATED = new Date("2026-02-01");
const CASE_STUDY_UPDATED = new Date("2025-06-01");
const GEO_UPDATED = new Date("2026-01-10");
const LEGAL_UPDATED = new Date("2025-03-01");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: CORE_UPDATED, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: CORE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/team`, lastModified: CORE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/testimonials`, lastModified: CORE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/website-design`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/storybrand-agency`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/storybrand-messaging`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/storybrand-framework`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/branding-logos`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/video-production`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/marketing-services`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/seo-services`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/social-media-marketing`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/app-development`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/hubspot-implementation`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/marketing-strategy-consulting`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ai-blueprint`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ai-development`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ministry-blueprint`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources`, lastModified: RESOURCE_UPDATED, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/resources/articles`, lastModified: RESOURCE_UPDATED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/videos`, lastModified: RESOURCE_UPDATED, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/downloads`, lastModified: RESOURCE_UPDATED, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/tools`, lastModified: RESOURCE_UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/free-seo-audit`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/marketing-plan-builder`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/website-training`, lastModified: RESOURCE_UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/schedule-call`, lastModified: CORE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/portfolio`, lastModified: CORE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/case-studies/bozard-ford-lincoln`, lastModified: CASE_STUDY_UPDATED, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies/all-pro-dad`, lastModified: CASE_STUDY_UPDATED, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies/hines`, lastModified: CASE_STUDY_UPDATED, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies/rulon-international`, lastModified: CASE_STUDY_UPDATED, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies/breakwater-construction`, lastModified: CASE_STUDY_UPDATED, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/events`, lastModified: RESOURCE_UPDATED, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/request-quote`, lastModified: CORE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/cost-calculator`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/marketing-audit`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms-and-conditions`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/maintenance`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/hosting`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ada-accessibility`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/st-augustine`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/jacksonville`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/palm-coast`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ponte-vedra`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/orange-park`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/gainesville`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/daytona-beach`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/plan`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/produce`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/promote`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/protect`, lastModified: SERVICE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/industries/automotive`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/industries/construction`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/industries/manufacturing`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/industries/education`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/industries/healthcare`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/industries/accounting`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/industries/dental`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/industries/consumer-goods`, lastModified: GEO_UPDATED, changeFrequency: "monthly", priority: 0.7 },
  ];

  let articlePages: MetadataRoute.Sitemap = [];
  try {
    const articles = await db.select({
      slug: blogArticles.slug,
      updatedAt: blogArticles.updatedAt,
    }).from(blogArticles).where(eq(blogArticles.isPublished, true));

    articlePages = articles.map((article) => ({
      url: `${BASE_URL}/resources/articles/${article.slug}`,
      lastModified: article.updatedAt ?? RESOURCE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
  }

  let teamPages: MetadataRoute.Sitemap = [];
  try {
    const members = await db.select({
      slug: teamMembers.slug,
      updatedAt: teamMembers.updatedAt,
    }).from(teamMembers).where(eq(teamMembers.isActive, true));

    teamPages = members.map((member) => ({
      url: `${BASE_URL}/team/${member.slug}`,
      lastModified: member.updatedAt ?? CORE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
  }

  return [...staticPages, ...articlePages, ...teamPages];
}
