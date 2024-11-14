import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['https://demo-project-v1-47rx92gk5-milanpatel41234s-projects.vercel.app'],
  },
};

export default nextConfig;
