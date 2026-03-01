import type { Metadata } from "next";
import AccountingPage from "@/components/pages/industries/accounting";

export const metadata: Metadata = {
  title: "Accounting Firm Marketing Agency | StoryBrand Certified | Business Builders",
  description: "StoryBrand Certified accounting firm marketing agency helping CPAs, bookkeepers, and financial services firms grow beyond referrals through clear messaging, websites, and digital marketing strategies.",
  keywords: "accounting firm marketing, CPA marketing agency, accountant marketing, bookkeeper marketing, storybrand accounting, accounting digital marketing, CPA firm growth",
  openGraph: {
    title: "Accounting Firm Marketing Agency | StoryBrand Certified | Business Builders",
    description: "StoryBrand Certified accounting firm marketing agency helping CPAs, bookkeepers, and financial services firms grow beyond referrals through clear messaging, websites, and digital marketing strategies.",
    images: ["/service-website.jpg"],
  },
};

export default function Page() {
  return <AccountingPage />;
}
