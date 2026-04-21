/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  transpilePackages: ['framer-motion'],
  trailingSlash: true,
  // Turbopack configuration (if needed)
  experimental: {
    turbo: {
      resolveAlias: {
        '@/lib/supabase/client': './src/lib/supabase/client.ts',
      },
    },
  },
};
module.exports = nextConfig;
