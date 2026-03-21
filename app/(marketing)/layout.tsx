export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main id="main-content" role="main" tabIndex={-1} className="outline-none">{children}</main>;
}
