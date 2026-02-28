import type { Metadata } from "next";
import EditArticlePage from "@/components/pages/edit-article";

export const metadata: Metadata = {
  title: "Edit Article | Admin",
};

export default function Page() {
  return <EditArticlePage />;
}
