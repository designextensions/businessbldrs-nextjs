interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: any;
  pageType?: 'website' | 'article' | 'profile';
}

export default function SEOHead({
  title = "Business Builders - Marketing Agency | Business Growth Experts",
  description = "Business growth experts helping companies create the right plan, produce the right content, and promote to the right audience. Get your free marketing quote today.",
  keywords = "marketing agency, business growth, digital marketing, website design, SEO, social media marketing, St Augustine Florida",
  ogImage = "/og-image.jpg",
  canonicalUrl,
  structuredData,
  pageType = 'website'
}: SEOHeadProps) {
  // Route-level metadata is managed in App Router page files.
  // This component now only outputs optional page-specific JSON-LD.
  void title;
  void description;
  void keywords;
  void ogImage;
  void canonicalUrl;
  void pageType;

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
