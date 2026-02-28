import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "businessbldrs.com" },
      { protocol: "https", hostname: "**.businessbldrs.com" },
    ],
  },
  redirects: async () => [
    // Case Study redirects (old WordPress URLs → new case study pages)
    { source: '/aligned-case-study', destination: '/portfolio', permanent: true },
    { source: '/bozard-ford-lincoln', destination: '/case-studies/bozard-ford-lincoln', permanent: true },
    { source: '/rulon-case-study', destination: '/case-studies/rulon-international', permanent: true },
    { source: '/antonio-carlo', destination: '/portfolio', permanent: true },
    { source: '/all-pro-dad', destination: '/case-studies/all-pro-dad', permanent: true },
    { source: '/hines', destination: '/case-studies/hines', permanent: true },
    { source: '/breakwater-construction', destination: '/case-studies/breakwater-construction', permanent: true },

    // Portfolio redirects
    { source: '/portfolio/aligned', destination: '/portfolio', permanent: true },
    { source: '/portfolio/bozard-ford-lincoln', destination: '/case-studies/bozard-ford-lincoln', permanent: true },
    { source: '/portfolio/rulon-international', destination: '/case-studies/rulon-international', permanent: true },
    { source: '/portfolio/antonio-carlo', destination: '/portfolio', permanent: true },
    { source: '/portfolio/all-pro-dad', destination: '/case-studies/all-pro-dad', permanent: true },
    { source: '/portfolio/hines', destination: '/case-studies/hines', permanent: true },

    // Category page redirects
    { source: '/category/:slug*', destination: '/resources/articles', permanent: true },
    { source: '/tag/:slug*', destination: '/resources/articles', permanent: true },
    { source: '/author/:slug*', destination: '/team', permanent: true },

    // Event redirects
    { source: '/webinar', destination: '/events', permanent: true },
    { source: '/webinars', destination: '/events', permanent: true },
    { source: '/events/storybrand-workshop', destination: '/events', permanent: true },
    { source: '/events/marketing-workshop', destination: '/events', permanent: true },
    { source: '/events/hubspot-training', destination: '/events', permanent: true },
    { source: '/events/business-growth', destination: '/events', permanent: true },

    // Service page redirects
    { source: '/web-design', destination: '/website-design', permanent: true },
    { source: '/website', destination: '/website-design', permanent: true },
    { source: '/websites', destination: '/website-design', permanent: true },
    { source: '/website-packages', destination: '/website-design', permanent: true },
    { source: '/seo', destination: '/seo-services', permanent: true },
    { source: '/search-engine-optimization', destination: '/seo-services', permanent: true },
    { source: '/seo-maintenance-package', destination: '/seo-services', permanent: true },
    { source: '/social-media', destination: '/social-media-marketing', permanent: true },
    { source: '/digital-marketing', destination: '/marketing-services', permanent: true },
    { source: '/video', destination: '/video-production', permanent: true },
    { source: '/videos-page', destination: '/videos', permanent: true },
    { source: '/branding', destination: '/branding-logos', permanent: true },
    { source: '/logos', destination: '/branding-logos', permanent: true },
    { source: '/logo-design', destination: '/branding-logos', permanent: true },
    { source: '/hubspot', destination: '/hubspot-implementation', permanent: true },
    { source: '/hubspot-agency-online-marketing', destination: '/hubspot-implementation', permanent: true },
    { source: '/storybrand', destination: '/storybrand-messaging', permanent: true },
    { source: '/story-brand', destination: '/storybrand-messaging', permanent: true },
    { source: '/blueprint', destination: '/storybrand-messaging', permanent: true },
    { source: '/marketing-strategy', destination: '/marketing-strategy-consulting', permanent: true },
    { source: '/affordable-website-maintenance', destination: '/maintenance', permanent: true },
    { source: '/monthly-website-maintenance-packages', destination: '/maintenance', permanent: true },

    // Contact/Quote redirects
    { source: '/contact', destination: '/request-quote', permanent: true },
    { source: '/contact-us', destination: '/request-quote', permanent: true },
    { source: '/get-quote', destination: '/request-quote', permanent: true },
    { source: '/quote', destination: '/request-quote', permanent: true },

    // About/Team redirects
    { source: '/about-us', destination: '/about', permanent: true },
    { source: '/our-team', destination: '/team', permanent: true },
    { source: '/meet-the-team', destination: '/team', permanent: true },

    // Blog/Resources redirects
    { source: '/blog', destination: '/resources/articles', permanent: true },
    { source: '/news', destination: '/resources/articles', permanent: true },
    { source: '/insights', destination: '/resources/articles', permanent: true },
    { source: '/articles', destination: '/resources/articles', permanent: true },

    // Old WordPress blog post redirects
    { source: '/the-benefits-of-integrating-the-storybrand-framework-into-your-website-design', destination: '/storybrand-messaging', permanent: true },
    { source: '/the-most-important-web-design-trend-for-2013-and-beyond', destination: '/resources/articles', permanent: true },
    { source: '/design-inspiration-for-your-next-website', destination: '/resources/articles', permanent: true },
    { source: '/7-new-web-design-trends-for-2020', destination: '/resources/articles', permanent: true },

    // Duplicate article redirects (-2 suffix)
    { source: '/resources/articles/business-tip-if-you-build-it-they-will-come-or-will-they-2', destination: '/resources/articles/business-tip-if-you-build-it-they-will-come-or-will-they', permanent: true },
    { source: '/resources/articles/editing-your-own-website-pros-cons-2', destination: '/resources/articles/editing-your-own-website-pros-cons', permanent: true },
    { source: '/resources/articles/hourly-billing-the-treadmill-2', destination: '/resources/articles/hourly-billing-the-treadmill', permanent: true },
    { source: '/resources/articles/how-to-use-storybrand-to-fix-your-messaging-2', destination: '/resources/articles/how-to-use-storybrand-to-fix-your-messaging', permanent: true },
    { source: '/resources/articles/its-not-personal-its-business-or-is-it-2', destination: '/resources/articles/its-not-personal-its-business-or-is-it', permanent: true },
    { source: '/resources/articles/networking-internet-marketing-instant-gratification-2', destination: '/resources/articles/networking-internet-marketing-instant-gratification', permanent: true },
    { source: '/resources/articles/skitch-free-awesome-screen-capture-and-notation-2', destination: '/resources/articles/skitch-free-awesome-screen-capture-and-notation', permanent: true },
    { source: '/resources/articles/the-biggest-misconception-about-changes-to-googles-algorithm-2', destination: '/resources/articles/the-biggest-misconception-about-changes-to-googles-algorithm', permanent: true },
    { source: '/resources/articles/the-mobile-internet-its-here-to-stay-mobile-web-design-2', destination: '/resources/articles/the-mobile-internet-its-here-to-stay-mobile-web-design', permanent: true },
    { source: '/resources/articles/what-do-your-websites-photos-say-about-your-business-2', destination: '/resources/articles/what-do-your-websites-photos-say-about-your-business', permanent: true },
  ],
};

export default nextConfig;
