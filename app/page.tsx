// NOTE: This root page.tsx was previously the default Next.js template.
// The real homepage is in app/(marketing)/page.tsx and components/pages/home.tsx.
//
// In Next.js App Router, app/page.tsx and app/(marketing)/page.tsx both resolve
// to the same "/" route. The root page.tsx takes precedence over the route group.
// This file delegates to the same HomePage component used by the marketing group,
// along with matching SEO metadata, so both route definitions are consistent.

import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import HomePage from "@/components/pages/home";

export const metadata: Metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
  keywords: seoConfig.home.keywords,
  openGraph: {
    title: seoConfig.home.title,
    description: seoConfig.home.description,
    images: seoConfig.home.ogImage ? [seoConfig.home.ogImage] : [],
  },
};

export default function Page() {
  return <HomePage />;
}
