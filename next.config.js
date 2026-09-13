/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  agentRules: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  async rewrites() {
    // Browsers probe /favicon.ico directly regardless of the <link rel="icon">
    // tag Next.js injects for the generated app/icon.tsx route.
    return [{ source: "/favicon.ico", destination: "/icon" }];
  },
};

module.exports = nextConfig;
