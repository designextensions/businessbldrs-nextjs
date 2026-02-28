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
  },
  twitter: {
    card: "summary_large_image",
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
