import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true, 
  },

  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
};

export default nextConfig;
