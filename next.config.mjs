import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Use export only for build, not for dev with LLM features
  ...(process.env.NODE_ENV === 'production' && !process.env.ENABLE_LLM 
    ? { output: 'export' } 
    : {}),
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/:path*',
      },
    ];
  },
};

export default withMDX(config);
