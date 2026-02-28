// In Next.js, meta tags and structured data are handled server-side via
// generateMetadata() per page. This component is a no-op stub kept for
// import compatibility with page components that reference it.

interface PageSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: any;
}

export default function PageSEO(_props: PageSEOProps) {
  return null;
}
