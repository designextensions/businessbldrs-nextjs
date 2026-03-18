import type { Metadata } from "next";
import { Suspense } from "react";
import AdminLoginForm from "./login-form";

export const metadata: Metadata = {
  title: "Login | Admin",
};

export default function AdminLoginPage() {
  return (
    <Suspense>
      <AdminLoginForm />
    </Suspense>
  );
}
