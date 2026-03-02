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
    <html lang="en">
      <head>
        {/* Structured Data - static JSON-LD strings, no user input */}
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
      <body>
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
      </body>
    </html>
  );
}
