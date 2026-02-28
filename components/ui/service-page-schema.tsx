interface ServicePageSchemaProps {
  serviceName: string;
  description: string;
  slug: string;
  serviceType: string;
  image?: string;
}

export default function ServicePageSchema({
  serviceName,
  description,
  slug,
  serviceType,
  image,
}: ServicePageSchemaProps) {
  const baseUrl = "https://businessbldrs.com";
  const pageUrl = `${baseUrl}/${slug}`;
  const logoUrl = `${baseUrl}/logo.png`;
  const imageUrl = image || `${baseUrl}/og-image.png`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Business Builders",
      "url": baseUrl,
      "logo": logoUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "701 Market St Ste 101",
        "addressLocality": "St. Augustine",
        "addressRegion": "FL",
        "postalCode": "32095",
        "addressCountry": "US"
      },
      "telephone": "+1-877-378-6101"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": serviceType,
    "image": imageUrl,
    "url": pageUrl
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c')
      }}
    />
  );
}
