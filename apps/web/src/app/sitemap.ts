import type { MetadataRoute } from "next";

import { navLinks } from "@/content/site";
import { getSiteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();
  const now = new Date();

  const pages = navLinks
    .map((link) => link.href)
    .filter((href) => href.startsWith("/"))
    .map((href) => ({
      url: `${url}${href === "/" ? "" : href}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: href === "/" ? 1 : 0.7,
    }));

  return pages;
}
