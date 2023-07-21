/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
};

module.exports = {
  basePath: '/home',
  experimental: {
    nextScriptWorkers: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig
