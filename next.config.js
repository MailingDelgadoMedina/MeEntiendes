/** @type {import('next').NextConfig} */
const nextConfig = {
  

  reactStrictMode: true,
  swcMinify: true,
    images: {
    domains: ['https:/tailwindui.com'],
  },
  experimental: {
    // urlImports: ['https://assets5.lottiefiles.com'],
  
  },

}

module.exports = nextConfig;

