/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  experimental: {
    optimizeCss: false,
  },
  // Compression
  compress: true,
  // Reduce bundle size
  swcMinify: true,
  // Optimize for production
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
