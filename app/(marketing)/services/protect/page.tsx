import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import ServicesProtectPage from "@/components/pages/services-protect";

export const metadata: Metadata = {
  title: "Website Hosting, Maintenance & Compliance | Business Builders",
  description: "Protect your digital investment with managed hosting, website maintenance, and ADA compliance services. 99.9% uptime guarantee.",
  keywords: "managed hosting, website maintenance, ada compliance, website security, wordpress support",
  openGraph: {
    images: [getOgImageUrl("Website Hosting, Maintenance & Compliance | Business Builders", "Protect your digital investment with managed hosting, website maintenance, and ADA compliance services. 99.9% uptime guarantee.")],
    title: "Website Hosting, Maintenance & Compliance | Business Builders",
    description: "Protect your digital investment with managed hosting, website maintenance, and ADA compliance services. 99.9% uptime guarantee.",
  },
  alternates: { canonical: "https://businessbldrs.com/services/protect" },
};

export default function Page() {
  return <ServicesProtectPage />;
}
