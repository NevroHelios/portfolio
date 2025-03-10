/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't need output: 'export' for Vercel
  // basePath should only be used for GitHub Pages, not Vercel
  basePath: process.env.GITHUB_PAGES === 'true' ? '/infinai' : '',
  images: {
    unoptimized: process.env.GITHUB_PAGES === 'true',
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },

};

module.exports = nextConfig;