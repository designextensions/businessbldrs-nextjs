import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
      // Allow AI crawlers
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
    sitemap: "https://businessbldrs.com/sitemap.xml",
  };
}
