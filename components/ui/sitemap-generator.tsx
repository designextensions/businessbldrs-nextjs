import { useEffect } from 'react';

interface SitemapItem {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateSitemap() {
  const baseUrl = 'https://businessbldrs.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemapItems: SitemapItem[] = [
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/portfolio`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/team`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/request-quote`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.7
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapItems.map(item => `  <url>
    <loc>${item.url}</loc>
    ${item.lastmod ? `    <lastmod>${item.lastmod}</lastmod>` : ''}
    ${item.changefreq ? `    <changefreq>${item.changefreq}</changefreq>` : ''}
    ${item.priority ? `    <priority>${item.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// Component that adds sitemap link to head
export default function SitemapMeta() {
  useEffect(() => {
    // Add sitemap link to head
    let sitemapLink = document.querySelector('link[rel="sitemap"]') as HTMLLinkElement;
    if (!sitemapLink) {
      sitemapLink = document.createElement('link');
      sitemapLink.rel = 'sitemap';
      sitemapLink.type = 'application/xml';
      sitemapLink.href = '/sitemap.xml';
      document.head.appendChild(sitemapLink);
    }

    // Add robots.txt meta reference
    let robotsLink = document.querySelector('link[rel="robots"]') as HTMLLinkElement;
    if (!robotsLink) {
      robotsLink = document.createElement('link');
      robotsLink.rel = 'robots';
      robotsLink.href = '/robots.txt';
      document.head.appendChild(robotsLink);
    }
  }, []);

  return null;
}