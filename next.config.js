/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: 'media.licdn.com',
        pathname: '/dms/image/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
};

module.exports = nextConfig;
