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
        <script
          type="text/javascript"
          id="sa-dynamic-optimization"
          data-uuid="30c4130f-316d-48cb-b424-e6f82719c0ef"
          src="data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vc2VvLmJ1c2luZXNzYmxkcnMuY29tL3NjcmlwdHMvZHluYW1pY19vcHRpbWl6YXRpb24uanMiO3NjcmlwdC5kYXRhc2V0LnV1aWQgPSAiMzBjNDEzMGYtMzE2ZC00OGNiLWI0MjQtZTZmODI3MTljMGVmIjtzY3JpcHQuaWQgPSAic2EtZHluYW1pYy1vcHRpbWl6YXRpb24tbG9hZGVyIjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7"
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
        {/* accessiBe Accessibility Widget */}
        <Script id="acsb-widget" strategy="afterInteractive">
          {`(function(){ var s = document.createElement('script'); var h = document.querySelector('head') || document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init(); }; h.appendChild(s); })();`}
        </Script>
      </body>
    </html>
  );
}
