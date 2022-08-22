/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.themoviedb.org', 's.gravatar.com'],
  },
};

module.exports = nextConfig;
