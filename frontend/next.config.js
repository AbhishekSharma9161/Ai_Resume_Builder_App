/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.builder.io'],
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
  experimental: {
    isrMemoryCacheSize: 0,
  },
  onError: async (err) => {
    if (err.code === 'NEXT_STATIC_GEN_TIMEOUT') {
      // ignore timeout error during build
    }
  },
};

module.exports = nextConfig;
