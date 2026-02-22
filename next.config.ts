import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    const suburbs = ["alberton", "meyersdal", "brackenhurst", "new-redruth", "randhart", "alberante"];
    return suburbs.map((slug) => ({
      source: `/movers-in-${slug}`,
      destination: `/movers-in/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
