import type { Metadata } from "next";
import CreateArticlePage from "@/components/pages/create-article";

export const metadata: Metadata = {
  title: "Create Article | Admin",
};

export default function Page() {
  return <CreateArticlePage />;
}
