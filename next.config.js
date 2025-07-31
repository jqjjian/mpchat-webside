/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 确保静态资源路径正确
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // 禁用服务端功能，因为Cloudflare Pages是静态托管
  experimental: {
    // 如果需要的话可以启用
  }
}

module.exports = nextConfig
