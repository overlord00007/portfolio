/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  // Required for GitHub Pages: repo is /portfolio, not root domain
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  images: {
    unoptimized: true,
  },
  // Compression
  compress: true,
  // Reduce bundle size
  swcMinify: true,
  // Optimize for production
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
