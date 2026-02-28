import type { Metadata } from "next";
import AdminPage from "@/components/pages/admin";

export const metadata: Metadata = {
  title: "Dashboard | Admin",
};

export default function Page() {
  return <AdminPage />;
}
