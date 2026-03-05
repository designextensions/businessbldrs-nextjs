import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import PromotionsPage from "@/components/pages/promotions";

export const metadata: Metadata = {
  title: "Promotions — Grants & Giveaways",
  description:
    "Explore active promotions, grants, and giveaways from Business Builders. Apply for our $50,000 nonprofit marketing grant, $25,000 small business grant, or win free tickets to the Future Focused Leaders Summit.",
  openGraph: {
    images: [getOgImageUrl("Promotions — Grants & Giveaways", "Explore active promotions, grants, and giveaways from Business Builders. Apply for our $50,000 nonprofit marketing grant, $25,000 small business grant, or win free tickets to the Future Focused Leaders Summit.")],
    title: "Promotions — Grants & Giveaways | Business Builders",
    description:
      "Explore active promotions, grants, and giveaways from Business Builders.",
  },
  alternates: { canonical: "https://businessbldrs.com/promotions" },
};

export default function Page() {
  return <PromotionsPage />;
}
