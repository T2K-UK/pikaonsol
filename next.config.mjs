/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',  // enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Disable the Image Optimization API
  },
  webpack: (config, { isServer }) => {
    // Custom Webpack configuration (without custom CSS loaders)
    return config;
  },
};

export default nextConfig;
