import type { MetadataRoute } from "next";

function getSiteUrl() {
  // Keep this self-contained during the rebuild.
  // In production, set NEXT_PUBLIC_SITE_URL to your canonical origin.
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export default function robots(): MetadataRoute.Robots {
  const url = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${url}/sitemap.xml`,
  };
}

