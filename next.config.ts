import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/houston-handyman",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
