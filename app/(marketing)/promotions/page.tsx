import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import PromotionsPage from "@/components/pages/promotions";

export const metadata: Metadata = {
  title: "Promotions & Giveaways",
  description:
    "Explore active promotions, grants, and giveaways from Business Builders. Apply for our $50,000 nonprofit grant or $25,000 small business grant.",
  openGraph: {
    images: [getOgImageUrl("Promotions & Giveaways", "Explore active promotions, grants, and giveaways from Business Builders.")],
    title: "Promotions & Giveaways",
    description:
      "Explore active promotions, grants, and giveaways from Business Builders.",
  },
  alternates: { canonical: "https://businessbldrs.com/promotions" },
};

export default function Page() {
  return <PromotionsPage />;
}
