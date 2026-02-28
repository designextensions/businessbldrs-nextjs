import { useEffect } from 'react';

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
  ogImage = "/social-share-home.png",
  canonicalUrl,
  structuredData,
  pageType = 'website'
}: SEOHeadProps) {

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update canonical URL
    const updateCanonical = (url: string) => {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = url;
    };

    // Update structured data
    const updateStructuredData = (data: any) => {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (script) {
        script.textContent = JSON.stringify(data);
      } else {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      }
    };

    // Add performance optimization preload hints
    const addPreloadHints = () => {
      // Preconnect to performance-critical origins with priorities
      const criticalOrigins = [
        { url: 'https://businessbldrs.com', crossOrigin: false },
        { url: 'https://images.unsplash.com', crossOrigin: true }
      ];
      
      const analyticsOrigins = [
        { url: 'https://www.googletagmanager.com', crossOrigin: true },
        { url: 'https://www.google-analytics.com', crossOrigin: true },
        { url: 'https://connect.facebook.net', crossOrigin: true }
      ];

      // Preconnect to critical origins immediately
      criticalOrigins.forEach(({ url, crossOrigin }) => {
        if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
          const preconnect = document.createElement('link');
          preconnect.rel = 'preconnect';
          preconnect.href = url;
          if (crossOrigin) preconnect.crossOrigin = 'anonymous';
          document.head.appendChild(preconnect);
        }
      });

      // DNS prefetch for analytics (lower priority)
      setTimeout(() => {
        analyticsOrigins.forEach(({ url }) => {
          if (!document.querySelector(`link[rel="dns-prefetch"][href="${url}"]`)) {
            const dnsPrefetch = document.createElement('link');
            dnsPrefetch.rel = 'dns-prefetch';
            dnsPrefetch.href = url;
            document.head.appendChild(dnsPrefetch);
          }
        });
      }, 1000);
      
      // Add DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'https://businessbldrs.com',
        'https://www.facebook.com',
        'https://www.linkedin.com'
      ];
      dnsPrefetchDomains.forEach(domain => {
        if (!document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`)) {
          const dnsPrefetch = document.createElement('link');
          dnsPrefetch.rel = 'dns-prefetch';
          dnsPrefetch.href = domain;
          document.head.appendChild(dnsPrefetch);
        }
      });
    };

    // Add SearchAtlas Dynamic Optimization Script
    const addSearchAtlasScript = () => {
      // Check if script is already added to prevent duplicates
      if (!document.querySelector('#sa-dynamic-optimization')) {
        try {
          const script = document.createElement('script');
          script.setAttribute('nowprocket', '');
          script.setAttribute('nitro-exclude', '');
          script.type = 'text/javascript';
          script.id = 'sa-dynamic-optimization';
          script.dataset.uuid = '30c4130f-316d-48cb-b424-e6f82719c0ef';
          script.src = 'data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vZGFzaGJvYXJkLnNlYXJjaGF0bGFzLmNvbS9zY3JpcHRzL2R5bmFtaWNfb3B0aW1pemF0aW9uLmpzIjtzY3JpcHQuZGF0YXNldC51dWlkID0gIjMwYzQxMzBmLTMxNmQtNDhjYi1iNDI0LWU2ZjgyNzE5YzBlZiI7c2NyaXB0LmlkID0gInNhLWR5bmFtaWMtb3B0aW1pemF0aW9uLWxvYWRlciI7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOw==';
          script.onerror = () => {
            console.warn('SearchAtlas dynamic optimization script failed to load');
          };
          document.head.appendChild(script);
        } catch (e) {
          console.warn('SearchAtlas script injection error:', e);
        }
      }
    };

    // Add SearchAtlas script
    addSearchAtlasScript();

    // Add performance optimization preload hints
    addPreloadHints();

    // Update all meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Additional SEO meta tags
    updateMetaTag('author', 'Business Builders Marketing Agency');
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1');
    updateMetaTag('bingbot', 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1');
    updateMetaTag('language', 'EN');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');
    updateMetaTag('revisit-after', '7 days');
    
    // Geographic and local business tags
    updateMetaTag('geo.region', 'US-FL');
    updateMetaTag('geo.placename', 'St. Augustine, Florida');
    updateMetaTag('geo.position', '29.9012;-81.3124');
    updateMetaTag('ICBM', '29.9012, -81.3124');
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', title, true);
    updateMetaTag('og:type', pageType, true);
    updateMetaTag('og:site_name', 'Business Builders', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    // Article-specific Open Graph tags (for blog posts)
    if (pageType === 'article') {
      updateMetaTag('article:publisher', 'https://www.facebook.com/businessbldrs', true);
      updateMetaTag('article:author', 'Business Builders', true);
    }
    
    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', title);
    updateMetaTag('twitter:site', '@businessbldrs');
    updateMetaTag('twitter:creator', '@businessbldrs');

    // Update canonical URL if provided
    if (canonicalUrl) {
      updateCanonical(canonicalUrl);
      updateMetaTag('og:url', canonicalUrl, true);
      updateMetaTag('twitter:url', canonicalUrl, true);
    }

    // Update structured data if provided
    if (structuredData) {
      updateStructuredData(structuredData);
    }

  }, [title, description, keywords, ogImage, canonicalUrl, structuredData, pageType]);

  return null; // This component doesn't render anything
}