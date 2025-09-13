import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_RAPIDAPI_KEY: process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    NEXT_PUBLIC_RAPIDAPI_HOST: process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
    NEXT_PUBLIC_RAPIDAPI_URL: process.env.NEXT_PUBLIC_RAPIDAPI_URL,
  },
};

export default nextConfig;
