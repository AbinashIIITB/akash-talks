import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization for faster loading
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    // Use modern formats for smaller file sizes
    formats: ["image/avif", "image/webp"],
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Minimize layout shift with long cache
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  // Experimental optimizations
  experimental: {
    optimizeCss: true,
  },
  // Enable compression
  compress: true,
  // Production optimizations
  poweredByHeader: false,
};

export default nextConfig;

