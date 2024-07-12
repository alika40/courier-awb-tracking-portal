/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img-c.udemycdn.com',
        port: '',
        pathname: '/course/480x270/**',
      },
    ],
  },
}

module.exports = nextConfig
