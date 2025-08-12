/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.builder.io'],
  },
  experimental: {
    allowedDevOrigins: [
      '096b16e9f63f4739851414c821ab0783-cf0a4c49a0904ad8be1cb6739.fly.dev',
      '096b16e9f63f4739851414c821ab0783-cf0a4c49a0904ad8be1cb6739.projects.builder.codes'
    ],
  },
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
