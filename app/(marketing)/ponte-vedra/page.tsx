import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import PonteVedraPage from "@/components/pages/ponte-vedra";

export const metadata: Metadata = {
  title: seoConfig.ponteVedra.title,
  description: seoConfig.ponteVedra.description,
  keywords: seoConfig.ponteVedra.keywords,
  openGraph: {
    title: seoConfig.ponteVedra.title,
    description: seoConfig.ponteVedra.description,
    images: [getOgImageUrl(seoConfig.ponteVedra.title, seoConfig.ponteVedra.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/ponte-vedra" },
};

export default function Page() {
  return <PonteVedraPage />;
}
