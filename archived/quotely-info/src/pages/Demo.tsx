import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Demo() {
  return (
    <>
      <Helmet>
        <title>Demo | See Quotely in Action | Insurance Quote Platform</title>
        <meta name="description" content="Watch a demo of Quotely's insurance quote platform. See how agents generate quotes in seconds, compare carriers, and close more deals." />
        <link rel="canonical" href="https://quotely.info/demo" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-[#030712]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                PRODUCT DEMO
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                See Quotely in Action
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Watch how insurance agents are generating quotes 60% faster, comparing rates from 50+ carriers,
                and closing more deals with our powerful platform.
              </p>
            </div>

            {/* Video Placeholder / Demo Area */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative aspect-video bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-cyan-500/30 cursor-pointer hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-lg">Interactive demo coming soon</p>
                    <p className="text-gray-500 text-sm mt-2">Try the platform now with a free trial</p>
                  </div>
                </div>

                {/* Decorative grid */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxZTI5M2IiIGZpbGwtb3BhY2l0eT0iMC4wMyIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik02MCAwdjYwSDBWMGg2MHpNMSAxdjU4aDU4VjFIMXoiIGZpbGw9IiMxZTI5M2IiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://quotely-production-nw3et.ondigitalocean.app/auth/login"
                className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
              >
                Start Your Free Trial
              </a>
              <p className="text-gray-500 text-sm mt-4">No credit card required • 14-day free trial</p>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What You'll Get with Quotely
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title="Instant Quotes"
                description="Generate accurate insurance quotes in under 30 seconds. No more manual calculations."
              />
              <FeatureCard
                icon={
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
                title="50+ Carriers"
                description="Compare rates from top insurance carriers side-by-side in one dashboard."
              />
              <FeatureCard
                icon={
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Close More Deals"
                description="Agents using Quotely close 40% more policies with better rates for clients."
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to transform your insurance business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of agents already using Quotely to save time and close more deals.
            </p>
            <a
              href="https://quotely-production-nw3et.ondigitalocean.app/auth/login"
              className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            >
              Get Started Free
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
      <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
