import type { Metadata } from 'next'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import { Header, Footer } from '@/components/layout'
import { organizationSchema, websiteSchema, softwareApplicationSchema, localBusinessSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Quotely - AI-Powered Insurance Quoting Platform | 60% Faster Quotes',
  description: 'Revolutionary AI-powered insurance quoting platform. Generate accurate quotes 60% faster than Applied Rater and EZLynx. SOC 2 compliant, 50+ carrier integrations. Request demo today.',
  keywords: 'insurance quoting software, insurance platform, AI insurance quotes, faster than Applied Rater, insurance agency software, quote management, carrier integration, white-label insurance platform',
  authors: [{ name: 'Try Quotely' }],
  creator: 'Try Quotely',
  publisher: 'Try Quotely',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tryquotely.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Quotely - 60% Faster Insurance Quotes with AI',
    description: 'Revolutionary AI-powered insurance quoting platform. Generate accurate quotes 60% faster than traditional platforms.',
    url: 'https://tryquotely.com',
    siteName: 'Quotely',
    images: [
      {
        url: 'https://tryquotely.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Quotely - AI Insurance Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quotely - 60% Faster Insurance Quotes',
    description: 'AI-powered insurance quoting platform. 60% faster than Applied Rater.',
    site: '@TryQuotely',
    creator: '@TryQuotely',
    images: ['https://tryquotely.com/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5TFZCD7G'} />
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://dashboard.searchatlas.com" />
      </head>
      <body className="bg-gray-950 text-white min-h-screen flex flex-col">
        {/* JSON-LD Structured Data for E-E-A-T and SEO */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Analytics />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}