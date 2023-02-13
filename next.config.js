/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains : ["www.linkpicture.com","cdn.sanity.io"]
  }
}

module.exports = nextConfig
