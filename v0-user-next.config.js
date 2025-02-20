/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/panda-token",
  assetPrefix: "/panda-token",
}

module.exports = nextConfig

