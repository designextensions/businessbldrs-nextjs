export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateServiceSchema(opts: {
  serviceName: string;
  description: string;
  slug: string;
  serviceType: string;
  image?: string;
}) {
  const baseUrl = "https://businessbldrs.com";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": opts.serviceName,
    "description": opts.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Business Builders",
      "url": baseUrl,
      "logo": `${baseUrl}/logo-full.png`,
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
    "serviceType": opts.serviceType,
    "image": opts.image || `${baseUrl}/og-image.png`,
    "url": `${baseUrl}/${opts.slug}`
  };
}
