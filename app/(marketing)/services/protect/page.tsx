import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import ServicesProtectPage from "@/components/pages/services-protect";

export const metadata: Metadata = {
  title: "Hosting, Maintenance & Compliance",
  description: "Protect your digital investment with managed hosting, website maintenance, and ADA compliance services. 99.9% uptime guarantee from Business Builders.",
  keywords: "managed hosting, website maintenance, ada compliance, website security, wordpress support",
  openGraph: {
    images: [getOgImageUrl("Hosting, Maintenance & Compliance", "Managed hosting, website maintenance, and ADA compliance services.")],
    title: "Hosting, Maintenance & Compliance",
    description: "Protect your digital investment with managed hosting, website maintenance, and ADA compliance services. 99.9% uptime guarantee from Business Builders.",
  },
  alternates: { canonical: "https://businessbldrs.com/services/protect" },
};

export default function Page() {
  return <ServicesProtectPage />;
}
