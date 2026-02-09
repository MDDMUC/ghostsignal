export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

