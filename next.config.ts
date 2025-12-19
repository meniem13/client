import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://serverrr-git-main-meniem13s-projects.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
