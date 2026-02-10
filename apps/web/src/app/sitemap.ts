import type { MetadataRoute } from "next";

function getSiteUrl() {
  // Keep this self-contained during the rebuild.
  // In production, set NEXT_PUBLIC_SITE_URL to your canonical origin.
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();
  const now = new Date();

  // During rebuild we only expose the homepage.
  return [
    {
      url,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ];
}
