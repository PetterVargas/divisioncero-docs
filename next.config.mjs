import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Only enable export for static deployment builds
  ...(process.env.STATIC_EXPORT === 'true' 
    ? { 
        output: 'export',
        trailingSlash: true,
        images: { unoptimized: true }
      } 
    : {}),
  // Only enable rewrites when not doing static export
  ...(process.env.STATIC_EXPORT !== 'true'
    ? {
        async rewrites() {
          return [
            {
              source: '/docs/:path*.mdx',
              destination: '/llms.mdx/:path*',
            },
          ];
        },
      }
    : {}),
};

export default withMDX(config);
