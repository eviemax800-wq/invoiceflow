// Temporarily disabled Sentry to debug build issues
// import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Disable static optimization - all pages are dynamic
  experimental: {
    isrMemoryCacheSize: 0,
  },
  
  // PWA support
  headers: async () => [
    {
      source: '/manifest.json',
      headers: [
        {
          key: 'Content-Type',
          value: 'application/manifest+json',
        },
      ],
    },
  ],
};

export default nextConfig;
