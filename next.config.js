/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader:"akamai",
    path:"",
  },
  basePath:"/gh-pages",
  assetPrefix:"/gh-pages",
}

module.exports = nextConfig
