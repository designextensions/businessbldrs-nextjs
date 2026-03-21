import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import AdaAccessibilityPage from "@/components/pages/ada-accessibility";

export const metadata: Metadata = {
  title: "ADA Website Compliance",
  description: "ADA website compliance and accessibility services in Florida. Make your website accessible to all users and reduce legal risk. Plans from $79/month.",
  keywords: "ADA compliance, website accessibility, ADA compliant websites, accessibility toolbar, legal compliance, disability access",
  openGraph: {
    title: "ADA Website Compliance",
    description: "ADA website compliance and accessibility services in Florida. Make your website accessible to all users and reduce legal risk. Plans from $79/month.",
    images: [getOgImageUrl("ADA Website Compliance", "ADA website compliance and accessibility services in Florida.")],
  },
  alternates: { canonical: "https://businessbldrs.com/ada-accessibility" },
};

export default function Page() {
  return <AdaAccessibilityPage />;
}
