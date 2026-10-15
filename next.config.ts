import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // COEP/COOP only for the Vite SPA sub-path (wa-sqlite OPFS requirement).
        // The SSR landing page at /tools/erd-forge has NO COEP — Analytics works there.
        source: '/tools/erd-forge/app/:path*',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect bare /tools/erd-forge/app to the index.html
      {
        source: '/tools/erd-forge/app',
        destination: '/tools/erd-forge/app/index.html',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
