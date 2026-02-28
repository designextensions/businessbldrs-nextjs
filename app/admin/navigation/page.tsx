import type { Metadata } from "next";
import NavigationManagementPage from "@/components/pages/admin/navigation-management";

export const metadata: Metadata = {
  title: "Navigation Management | Admin",
};

export default function Page() {
  return <NavigationManagementPage />;
}
