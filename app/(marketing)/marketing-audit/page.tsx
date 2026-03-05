import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import MarketingAudit from "@/components/pages/marketing-audit";

export const metadata: Metadata = {
  title: "Free Marketing Audit | Business Builders",
  description:
    "Take our free 2-minute marketing audit and get a personalized scorecard showing where your business stands across Plan, Produce, Promote, and Protect.",
  keywords:
    "free marketing audit, marketing scorecard, marketing assessment, business marketing evaluation, StoryBrand",
  openGraph: {
    images: [getOgImageUrl("Free Marketing Audit | Business Builders", "Take our free 2-minute marketing audit and get a personalized scorecard showing where your business stands across Plan, Produce, Promote, and Protect.")],
    title: "Free Marketing Audit | Business Builders",
    description:
      "Answer 5 quick questions and get a personalized marketing scorecard with actionable recommendations.",
    url: "https://businessbldrs.com/marketing-audit",
    type: "website",
  },
  alternates: { canonical: "https://businessbldrs.com/marketing-audit" },
};

export default function MarketingAuditPage() {
  return <MarketingAudit />;
}
