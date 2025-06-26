/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
    
    // Fix for webpack issues with React Server Components
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-server-dom-webpack/client': false,
      }
    }
    
    return config
  },
}

module.exports = nextConfig 