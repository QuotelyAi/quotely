import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import { OrganizationSchema, WebsiteSchema, ServiceSchema } from '../components/SchemaMarkup';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Quotely | Insurance Quote Comparison Platform for Agents</title>
        <meta name="description" content="Generate insurance quotes in seconds. Compare rates from 50+ carriers, manage clients, and close more deals with Quotely's powerful platform for insurance agents." />
        <meta name="keywords" content="insurance quotes, insurance agents, quote comparison, auto insurance, home insurance, life insurance, commercial insurance" />
        <link rel="canonical" href="https://quotely.info" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quotely.info" />
        <meta property="og:title" content="Quotely | Insurance Quote Comparison Platform" />
        <meta property="og:description" content="Generate insurance quotes in seconds. Compare rates from 50+ carriers and close more deals." />
        <meta property="og:image" content="https://quotely.info/og-image.png" />
        <meta property="og:site_name" content="Quotely" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quotely | Insurance Quote Comparison Platform" />
        <meta name="twitter:description" content="Generate insurance quotes in seconds. Compare rates from 50+ carriers and close more deals." />
        <meta name="twitter:image" content="https://quotely.info/og-image.png" />
      </Helmet>

      {/* Schema Markup */}
      <OrganizationSchema />
      <WebsiteSchema />
      <ServiceSchema
        name="Insurance Quote Comparison"
        description="Compare insurance quotes from multiple carriers instantly. Find the best rates for auto, home, life, and commercial insurance."
      />

      <Navbar />
      <main role="main">
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer showTryQuotelyLink={true} />
    </>
  );
}
