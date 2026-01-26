export default function SEOHead() {
  return (
    <>
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Try Quotely" />
      <meta name="copyright" content="Try Quotely 2023-2025" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="US-OK" />
      <meta name="geo.placename" content="Tulsa" />
      <meta name="geo.position" content="36.0755;-95.9242" />
      <meta name="ICBM" content="36.0755, -95.9242" />
      
      {/* Open Graph Additional */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Quotely" />
      <meta property="og:email" content="sales@tryquotely.com" />
      <meta property="og:phone_number" content="+19183956335" />
      <meta property="og:locality" content="Tulsa" />
      <meta property="og:region" content="OK" />
      <meta property="og:postal_code" content="74145" />
      <meta property="og:country_name" content="USA" />
      
      {/* Twitter Additional */}
      <meta name="twitter:site" content="@TryQuotely" />
      <meta name="twitter:creator" content="@TryQuotely" />
      <meta name="twitter:domain" content="tryquotely.com" />
      
      {/* Apple Specific */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Quotely" />
      
      {/* Microsoft Specific */}
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://dashboard.searchatlas.com" />
      <link rel="preload" as="font" type="font/woff2" href="/fonts/inter.woff2" crossOrigin="anonymous" />
    </>
  )
}