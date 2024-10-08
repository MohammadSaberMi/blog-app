/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
