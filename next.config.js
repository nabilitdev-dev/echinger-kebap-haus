/** @type {import('next').NextConfig} */

// Wird im GitHub-Actions-Workflow auf 'true' gesetzt.
// Lokal (npm run dev / Vercel) bleibt basePath leer.
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'echinger-kebap-haus';

const nextConfig = {
  reactStrictMode: true,
  // Statischer Export für GitHub Pages (erzeugt den Ordner /out)
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  images: {
    // GitHub Pages hat keinen Server für die Bildoptimierung
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
