import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <MegaFooter />
    </>
  );
}
