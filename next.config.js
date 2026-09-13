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
  async redirects() {
    // Force a single canonical host (builidea.com) — anyone landing on the
    // Vercel-assigned domain or the www subdomain gets sent to the real one.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "buildyouridea-seven.vercel.app" }],
        destination: "https://builidea.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.builidea.com" }],
        destination: "https://builidea.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
