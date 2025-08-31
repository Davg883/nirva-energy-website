import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set turbopack root to resolve workspace warning
  turbopack: {
    root: __dirname,
  },
  
  // Enable static exports for better performance
  output: 'export',
  trailingSlash: true,
  
  // ESLint configuration
  eslint: {
    dirs: ['src'], // Only run ESLint on the 'src' directory during production builds
  },
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Compression and performance
  compress: true,
  
  // Disable x-powered-by header for security
  poweredByHeader: false,
  
  // Experimental features for better performance
  experimental: {
    // Disable optimizeCss as it requires critters module
    // optimizeCss: true,
  },
};

export default nextConfig;
