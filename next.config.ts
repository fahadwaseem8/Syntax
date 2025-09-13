import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Syntax",      // 👈 required for project pages
  assetPrefix: "/Syntax/",  // 👈 ensures assets load correctly
  trailingSlash: true,      // 👈 recommended for static exports
  env: {
    NEXT_PUBLIC_RAPIDAPI_KEY: process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    NEXT_PUBLIC_RAPIDAPI_HOST: process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
    NEXT_PUBLIC_RAPIDAPI_URL: process.env.NEXT_PUBLIC_RAPIDAPI_URL,
  },
};

export default nextConfig;
