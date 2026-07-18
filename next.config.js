/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 85, 90, 100],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
