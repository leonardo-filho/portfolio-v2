import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
  },
  async redirects() {
    return ["leonardo-filho.vercel.app", "www.leonardofilho.com.br"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://leonardofilho.com.br/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
