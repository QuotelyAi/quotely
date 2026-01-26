/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tryquotely.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          }
        ]
      }
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/get-started',
        destination: '/demo-request',
        permanent: true,
      },
      {
        source: '/contact-sales',
        destination: '/demo-request',
        permanent: true,
      },
      {
        source: '/request-demo',
        destination: '/demo-request',
        permanent: true,
      },
      {
        source: '/demo',
        destination: '/demo-request',
        permanent: true,
      },
      {
        source: '/schedule-demo',
        destination: '/demo-request',
        permanent: true,
      },
      {
        source: '/products',
        destination: '/products/ams',
        permanent: false,
      },
      {
        source: '/features',
        destination: '/products/ams',
        permanent: false,
      },
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
      {
        source: '/api-docs',
        destination: '/api',
        permanent: true,
      },
      {
        source: '/docs',
        destination: '/documentation',
        permanent: true,
      },
    ]
  },
  
  // Performance optimization
  experimental: {
    optimizeCss: true,
  }
}

module.exports = nextConfig