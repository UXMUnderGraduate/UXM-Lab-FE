/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    domains: ['picsum.photos', 'uxm.mju.ac.kr'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
