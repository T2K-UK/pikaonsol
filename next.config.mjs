/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/pikaonsol",
    output: 'export',  // enables static exports
    reactStrictMode: true,
    images: {
      unoptimized: true,  // Disable the Image Optimization API
    },
  };
  
  export default nextConfig;