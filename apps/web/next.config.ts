import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    // Work around occasional Turbopack persistence issues on Windows
    // (e.g. SST write failures / corrupted task DB under `.next/`).
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;

