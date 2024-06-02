/** @type {import('next').NextConfig} */


const isProd = process.env.NODE_ENV = 'production'



const nextConfig = {
    basePath: isProd ? "/pikaonsol" : '',
    output: 'export',  // enables static exports
    reactStrictMode: true,
    images: {
      unoptimized: true,  // Disable the Image Optimization API
    },
  };
  
  export default nextConfig;