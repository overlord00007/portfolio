/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  // Keep the app static so it can deploy to Netlify, Vercel, or GitHub Pages.
  output: 'export',
  trailingSlash: true,
  // Only add the repo subpath when we explicitly target GitHub Pages.
  basePath: isGitHubPages ? '/portfolio' : '',
  assetPrefix: isGitHubPages ? '/portfolio/' : '',
  images: {
    unoptimized: true,
  },
  compress: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
