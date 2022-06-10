/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader:"akamai",
    path:"",
  },
  basePath:"/tree/gh-pages",
  assetPrefix:"/tree/gh-pages",
}

module.exports = nextConfig
