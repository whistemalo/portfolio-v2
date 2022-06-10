/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader:"akamai",
    path:"/portfolio-v2/assets",
  },
  basePath:"/portfolio-v2",
  assetPrefix:"/portfolio-v2",
}

module.exports = nextConfig
