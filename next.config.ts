///import type { NextConfig } from 'next'

//const nextConfig: NextConfig = {
/* config options here */
//}

//export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ESLint 경고 무시하고 빌드 가능
  },
  typescript: {
    ignoreBuildErrors: true, // TypeScript 에러 무시하고 빌드 가능
  },
}

module.exports = nextConfig
