// Each page component in the (marketing) group is self-contained and already
// renders its own <Navigation /> and <MegaFooter /> internally.
// This layout simply renders children without adding duplicate chrome.

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
