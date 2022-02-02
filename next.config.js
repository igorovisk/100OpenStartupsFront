module.exports = {
  reactStrictMode: true,
  env: {
    API: process.env.API,
  },
  images: {
    domains: [process.env.IMAGE_DOMAIN],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 640],
  },
  publicRuntimeConfig: {
    API: process.env.API,
  },
  async redirects() {
    return []
  },
}
