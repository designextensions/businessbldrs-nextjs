import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import HostingPage from "@/components/pages/hosting";

export const metadata: Metadata = {
  title: "Managed Website Hosting",
  description: "Managed website hosting with 99.9% uptime, nightly backups, SSL security, and expert support. We handle everything so you can focus on business.",
  keywords: "managed website hosting, web hosting services, secure hosting, WordPress hosting, website hosting St Augustine, fast website hosting, SSL hosting",
  openGraph: {
    title: "Managed Website Hosting",
    description: "Managed website hosting with 99.9% uptime, nightly backups, SSL security, and expert support. We handle everything so you can focus on business.",
    images: [getOgImageUrl("Managed Website Hosting", "Managed website hosting with 99.9% uptime, nightly backups, SSL security, and expert support.")],
  },
  alternates: { canonical: "https://businessbldrs.com/hosting" },
};

export default function Page() {
  return <HostingPage />;
}
