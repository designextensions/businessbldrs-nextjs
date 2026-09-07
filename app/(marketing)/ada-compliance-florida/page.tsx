import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import AdaComplianceFloridaPage from "@/components/pages/ada-compliance-florida";

const title = "ADA Website Compliance in Florida";
const description = "Florida is one of the top states for ADA website lawsuits. Business Builders in St. Augustine makes Florida business websites WCAG 2.1 AA compliant and monitors them monthly. Plans from $79/month.";

export const metadata: Metadata = {
  title,
  description,
  keywords: "ada website compliance florida, florida ada website lawsuit, wcag compliance florida, website accessibility florida, ada compliant website jacksonville, ada compliance st augustine",
  openGraph: {
    title,
    description,
    images: [getOgImageUrl(title, "Florida ADA website compliance, monitoring, and litigation support.")],
  },
  alternates: { canonical: "https://businessbldrs.com/ada-compliance-florida" },
};

export default function Page() {
  return <AdaComplianceFloridaPage />;
}
