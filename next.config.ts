import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mascale-web',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
