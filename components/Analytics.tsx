'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function Analytics() {
  useEffect(() => {
    // SearchAtlas Dynamic Optimization
    const script = document.createElement('script');
    script.setAttribute('nowprocket', '');
    script.setAttribute('nitro-exclude', '');
    script.src = 'https://dashboard.searchatlas.com/scripts/dynamic_optimization.js';
    script.dataset.uuid = 'babc2d78-a7bf-4a1f-a666-721d755dceee';
    script.id = 'sa-dynamic-optimization-loader';
    document.head.appendChild(script);

  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-28RBK32B5C"
        strategy="afterInteractive"
      />
      
      {/* Schema.org Structured Data for Insurance Platform */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Quotely',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description: 'AI-powered insurance quoting platform that generates quotes 60% faster than traditional platforms',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '0',
                priceCurrency: 'USD',
                referenceQuantity: {
                  '@type': 'QuantitativeValue',
                  value: '1',
                  unitCode: 'MON'
                }
              }
            },
            publisher: {
              '@type': 'Organization',
              name: 'Try Quotely',
              url: 'https://tryquotely.com',
              logo: 'https://tryquotely.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-918-395-6335',
                contactType: 'sales',
                email: 'sales@tryquotely.com',
                areaServed: 'US',
                availableLanguage: 'English'
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '6010 S. 66th E. Ave, Ste B',
                addressLocality: 'Tulsa',
                addressRegion: 'OK',
                postalCode: '74145',
                addressCountry: 'US'
              }
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '127',
              bestRating: '5',
              worstRating: '1'
            }
          })
        }}
      />

      {/* Local Business Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://tryquotely.com/#business',
            name: 'Try Quotely',
            image: 'https://tryquotely.com/images/quotely-office.jpg',
            url: 'https://tryquotely.com',
            telephone: '(918) 395-6335',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '6010 S. 66th E. Ave, Ste B',
              addressLocality: 'Tulsa',
              addressRegion: 'OK',
              postalCode: '74145',
              addressCountry: 'US'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 36.0755,
              longitude: -95.9242
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '10:00',
                closes: '14:00'
              }
            ],
            sameAs: [
              'https://facebook.com/TryQuotely/',
              'https://x.com/TryQuotely',
              'https://youtube.com/@TryQuotely',
              'https://tiktok.com/@tryquotely',
              'https://linkedin.com/company/tryquotely'
            ]
          })
        }}
      />
    </>
  );
}

