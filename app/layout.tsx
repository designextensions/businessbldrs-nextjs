import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { organizationSchema, localBusinessSchema } from "@/lib/seo-config";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Business Builders | Marketing Agency",
    template: "%s | Business Builders",
  },
  description:
    "St. Augustine full-service marketing agency since 1999. HubSpot Platinum Partner & StoryBrand Certified. Web design, SEO, social media, branding & video.",
  metadataBase: new URL("https://businessbldrs.com"),
  openGraph: {
    siteName: "Business Builders",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Business Builders Marketing Agency - Clear Message. Proven Strategy. Real Growth.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = JSON.stringify(organizationSchema);
  const bizSchema = JSON.stringify(localBusinessSchema);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: orgSchema }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: bizSchema }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
        {/* HubSpot Forms SDK - static vendor URL */}
        <Script
          id="hs-forms-loader"
          src="//js.hsforms.net/forms/embed/v2.js"
          strategy="lazyOnload"
        />
        {/* HubSpot Tracking - static vendor URL */}
        <Script
          id="hs-script-loader"
          src="//js.hs-scripts.com/485253.js"
          strategy="lazyOnload"
        />
        {/* SEO Dynamic Optimization - static vendor URL */}
        <Script
          id="sa-dynamic-optimization"
          strategy="lazyOnload"
          data-uuid="30c4130f-316d-48cb-b424-e6f82719c0ef"
        >
          {`var s=document.createElement("script");s.setAttribute("nowprocket","");s.setAttribute("nitro-exclude","");s.src="https://seo.businessbldrs.com/scripts/dynamic_optimization.js";s.dataset.uuid="30c4130f-316d-48cb-b424-e6f82719c0ef";s.id="sa-dynamic-optimization-loader";document.head.appendChild(s);`}
        </Script>
        {/* accessiBe Accessibility Widget - disabled: license expired, causes hydration errors */}
        {/* Re-enable with valid license: <Script id="acsb-widget" strategy="lazyOnload">{`(function(){ var s = document.createElement('script'); s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init(); }; document.head.appendChild(s); })();`}</Script> */}
      </body>
    </html>
  );
}
