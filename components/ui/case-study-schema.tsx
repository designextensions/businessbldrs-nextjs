interface CaseStudySchemaProps {
  title: string;
  description: string;
  clientName: string;
  image?: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
}

export default function CaseStudySchema({
  title,
  description,
  clientName,
  image,
  slug,
  datePublished = "2024-01-01",
  dateModified,
}: CaseStudySchemaProps) {
  const baseUrl = "https://businessbldrs.com";
  const pageUrl = `${baseUrl}/case-studies/${slug}`;
  const logoUrl = `${baseUrl}/logo.png`;
  const imageUrl = image || `${baseUrl}/og-image.png`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Organization",
      "name": "Business Builders",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Business Builders",
      "logo": {
        "@type": "ImageObject",
        "url": logoUrl
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "about": {
      "@type": "Organization",
      "name": clientName
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portfolio",
        "item": `${baseUrl}/portfolio`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": pageUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c')
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c')
        }}
      />
    </>
  );
}
