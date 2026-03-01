import type { Metadata } from "next";
import ServicesProtectPage from "@/components/pages/services-protect";

export const metadata: Metadata = {
  title: "Website Hosting, Maintenance & Compliance | Business Builders",
  description: "Protect your digital investment with managed hosting, website maintenance, and ADA compliance services. 99.9% uptime guarantee.",
  keywords: "managed hosting, website maintenance, ada compliance, website security, wordpress support",
  openGraph: {
    title: "Website Hosting, Maintenance & Compliance | Business Builders",
    description: "Protect your digital investment with managed hosting, website maintenance, and ADA compliance services. 99.9% uptime guarantee.",
  },
};

export default function Page() {
  return <ServicesProtectPage />;
}
