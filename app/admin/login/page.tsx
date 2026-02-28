import type { Metadata } from "next";
import AdminLoginForm from "./login-form";

export const metadata: Metadata = {
  title: "Login | Admin",
};

export default function AdminLoginPage() {
  return <AdminLoginForm />;
}
