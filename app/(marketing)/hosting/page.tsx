import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import HostingPage from "@/components/pages/hosting";

export const metadata: Metadata = {
  title: "Managed Website Hosting - Fast, Secure & Reliable | Business Builders",
  description: "Managed website hosting with 99.9% uptime, nightly backups, SSL security, and expert support. Stop worrying about your server — we handle everything. Plans from $50/month.",
  keywords: "managed website hosting, web hosting services, secure hosting, WordPress hosting, website hosting St Augustine, fast website hosting, SSL hosting",
  openGraph: {
    title: "Managed Website Hosting - Fast, Secure & Reliable | Business Builders",
    description: "Managed website hosting with 99.9% uptime, nightly backups, SSL security, and expert support. Stop worrying about your server — we handle everything. Plans from $50/month.",
    images: [getOgImageUrl("Managed Website Hosting - Fast, Secure & Reliable | Business Builders", "Managed website hosting with 99.9% uptime, nightly backups, SSL security, and expert support. Stop worrying about your server — we handle everything. Plans from $50/month.")],
  },
  alternates: { canonical: "https://businessbldrs.com/hosting" },
};

export default function Page() {
  return <HostingPage />;
}
