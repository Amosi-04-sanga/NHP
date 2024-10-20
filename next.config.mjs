/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable specific eslint rules
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable typescript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
