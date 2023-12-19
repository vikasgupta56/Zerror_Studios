/**@type {import('next').NextConfig}*/
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.SITE_URL,
  },
  images: {
    domains: [
      "localhost",
      "zerrorstudios.s3.ap-south-1.amazonaws.com",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zerrorstudios.s3.ap-south-1.amazonaws.com',
        port: 'localhost:3000',
        pathname: '/public',
      },
    ],
  },
};

module.exports = nextConfig;