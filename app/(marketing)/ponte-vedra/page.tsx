import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import PonteVedraPage from "@/components/pages/ponte-vedra";

export const metadata: Metadata = {
  title: seoConfig.ponteVedra.title,
  description: seoConfig.ponteVedra.description,
  keywords: seoConfig.ponteVedra.keywords,
  openGraph: {
    title: seoConfig.ponteVedra.title,
    description: seoConfig.ponteVedra.description,
    images: seoConfig.ponteVedra.ogImage ? [seoConfig.ponteVedra.ogImage] : [],
  },
};

export default function Page() {
  return <PonteVedraPage />;
}
