import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
};

export default nextConfig;
