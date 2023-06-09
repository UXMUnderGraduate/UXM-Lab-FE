/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    domains: ['picsum.photos', 'uxmlab.co.kr'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
