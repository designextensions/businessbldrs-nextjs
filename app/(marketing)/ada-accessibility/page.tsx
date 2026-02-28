import type { Metadata } from "next";
import AdaAccessibilityPage from "@/components/pages/ada-accessibility";

export const metadata: Metadata = {
  title: "ADA Compliance for Websites - Make Your Site Accessible | Business Builders",
  description: "ADA website compliance & accessibility services in Florida. Make your website accessible to all users and reduce legal risk. Plans from $79/month.",
  keywords: "ADA compliance, website accessibility, ADA compliant websites, accessibility toolbar, legal compliance, disability access",
  openGraph: {
    title: "ADA Compliance for Websites - Make Your Site Accessible | Business Builders",
    description: "ADA website compliance & accessibility services in Florida. Make your website accessible to all users and reduce legal risk. Plans from $79/month.",
    images: ["/service-website.jpg"],
  },
};

export default function Page() {
  return <AdaAccessibilityPage />;
}
