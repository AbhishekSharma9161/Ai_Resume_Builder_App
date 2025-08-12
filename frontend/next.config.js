/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['cdn.builder.io'],
  },
  // Remove rewrites for static export
  // async rewrites() {
  //   const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `${apiUrl}/api/:path*`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
