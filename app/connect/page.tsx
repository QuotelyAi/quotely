'use client';

import { useState } from 'react';
import Link from 'next/link';

const PRICE_CONNECT = process.env.NEXT_PUBLIC_STRIPE_CONNECT_PRICE_ID ?? '';
const PRICE_TOKEN_50 = process.env.NEXT_PUBLIC_STRIPE_TOKEN_50_PRICE_ID ?? '';
const PRICE_TOKEN_200 = process.env.NEXT_PUBLIC_STRIPE_TOKEN_200_PRICE_ID ?? '';
const PRICE_TOKEN_500 = process.env.NEXT_PUBLIC_STRIPE_TOKEN_500_PRICE_ID ?? '';
const PRICE_TOKEN_1000 = process.env.NEXT_PUBLIC_STRIPE_TOKEN_1000_PRICE_ID ?? '';

interface TokenPack {
  tokens: number;
  price: number;
  perToken: number;
  priceId: string;
  bestValue?: boolean;
}

const tokenPacks: TokenPack[] = [
  { tokens: 50, price: 85, perToken: 1.70, priceId: PRICE_TOKEN_50 },
  { tokens: 200, price: 340, perToken: 1.70, priceId: PRICE_TOKEN_200 },
  { tokens: 500, price: 650, perToken: 1.30, priceId: PRICE_TOKEN_500, bestValue: true },
  { tokens: 1000, price: 1200, perToken: 1.20, priceId: PRICE_TOKEN_1000 },
];

interface ComparisonRow {
  feature: string;
  connect: boolean | string;
  starter: boolean | string;
  professional: boolean | string;
}

const comparisonRows: ComparisonRow[] = [
  { feature: 'QUAD AI', connect: true, starter: true, professional: true },
  { feature: 'TurboRater Auto Quotes', connect: '100/mo included', starter: 'Unlimited*', professional: 'Unlimited*' },
  { feature: 'Quote Overage', connect: '$2.50/quote', starter: 'Token-based', professional: 'Token-based' },
  { feature: 'Per-agent pricing', connect: true, starter: false, professional: false },
  { feature: 'Add-on token packs', connect: true, starter: false, professional: false },
  { feature: 'Momentum AMP AMS', connect: 'BYO (optional)', starter: 'Provisioned', professional: 'Provisioned' },
  { feature: 'Gail AI Voice', connect: 'BYO attach (optional)', starter: 'Provisioned', professional: 'Provisioned' },
  { feature: 'CRM', connect: false, starter: true, professional: true },
  { feature: 'IVANS', connect: false, starter: true, professional: true },
  { feature: 'API + Credential Vault', connect: false, starter: true, professional: true },
];

const faqs = [
  {
    q: "What's a Quotely token?",
    a: "Tokens power QUAD AI tasks — lead scoring, email drafts, coverage summaries, and more. TurboRater auto quotes are not token-billed; they draw from your 100/mo included allowance. Token packs are separate add-on subscriptions that run alongside your Connect base plan.",
  },
  {
    q: "Can I use my own AMS or CRM?",
    a: "Connect runs fully standalone — no AMS or CRM required. The only supported integrations are Momentum AMP by NowCerts (bidirectional sync) and Gail AI by Nothing Technologies (phone system attach). If you need a Quotely-provisioned AMS, CRM, and managed Gail + Momentum, see the Starter plan.",
  },
  {
    q: "What happens when I exceed 100 quotes?",
    a: "Each additional TurboRater auto quote is billed at $2.50. Overages appear on your next invoice. There are no hard limits — quoting never stops mid-month.",
  },
  {
    q: "Is there a contract or minimum term?",
    a: "No. Quotely Connect is month-to-month. Cancel anytime from your billing dashboard. Token pack subscriptions cancel independently from your base plan.",
  },
  {
    q: "How does upgrading to Starter work?",
    a: "The Starter plan ($999/mo) includes everything in Connect plus a Quotely-provisioned Momentum AMP AMS, CRM, and Gail Voice — all managed and supported by Quotely. Contact us to upgrade; your Connect subscription is credited pro-rated for the remainder of the billing period.",
  },
  {
    q: "How many agents can I add?",
    a: "Quotely Connect is priced at $299 per agent per month. Add or remove agents at any time — billing adjusts on your next cycle.",
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-green-500 font-bold text-lg">&#10003;</span>;
  if (value === false) return <span className="text-gray-600">—</span>;
  return <span className="text-sm text-gray-300">{value}</span>;
}

export default function ConnectPricingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function startCheckout(priceId: string) {
    if (!priceId || loading) return;
    setLoading(priceId);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId,
          mode: 'subscription',
          successUrl: `${window.location.origin}/connect/success`,
          cancelUrl: window.location.href,
        }),
      });
      const { url } = await res.json();
      window.location.href = url;
    } catch {
      setLoading(null);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950">

      {/* ── Hero ── */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wide">Now Available</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Quotely Connect
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Full QUAD AI + TurboRater auto quoting for independent agents.
            No AMS required. No setup fees. $299/agent/month.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {[
              '100 auto quotes/mo included',
              '200+ carriers via TurboRater',
              'No integrations required',
              'SOC 2 compliant',
              'Month-to-month',
            ].map((signal) => (
              <span key={signal} className="flex items-center gap-1.5">
                <span className="text-yellow-500 font-bold">&#10003;</span>
                {signal}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">Who it&apos;s for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Independent Agents',
                desc: 'You want best-in-class auto quoting without being locked into a full platform. Bring your own tools — plug in QUAD AI.',
              },
              {
                title: 'Momentum AMP Users',
                desc: 'Already on NowCerts? Connect syncs bidirectionally with Momentum AMP — no data re-entry, no context switching.',
              },
              {
                title: 'Growing Agencies',
                desc: 'Add agents at $299/head. Token packs scale with volume. Upgrade to Starter when you\'re ready for provisioned Gail + AMS.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-800 bg-gray-900 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main plan card ── */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl border border-yellow-500 bg-gray-900 p-10">
            <div className="absolute -top-3.5 left-8">
              <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-gray-900 uppercase tracking-wide">
                Quotely Connect
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl font-bold text-white">$299</span>
              <span className="text-gray-400 text-sm">/agent/month</span>
            </div>
            <p className="text-sm text-gray-500 mb-8">+ $2.50/quote after 100 auto quotes/mo</p>

            <ul className="space-y-3 mb-8">
              {[
                'QUAD AI — lead scoring, email drafts, coverage summaries',
                'TurboRater auto quotes — 100/mo included',
                '200+ carriers, 50 states + DC',
                'Fully standalone — no AMS or CRM required',
                'Month-to-month, cancel anytime',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <span className="text-yellow-500 font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Integration callout */}
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 mb-8">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Optional BYO Integrations
              </p>
              <div className="space-y-2.5">
                {[
                  { name: 'Momentum AMP by NowCerts', detail: 'Bidirectional AMS sync' },
                  { name: 'Gail AI by Nothing Technologies', detail: 'AI phone system attach' },
                ].map(({ name, detail }) => (
                  <div key={name} className="flex items-center justify-between gap-4">
                    <span className="text-sm text-gray-300">{name}</span>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{detail}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-3">
                These are the only supported integrations. Bring your own credentials.
              </p>
            </div>

            <button
              onClick={() => startCheckout(PRICE_CONNECT)}
              disabled={!!loading}
              className="w-full py-4 rounded-xl bg-yellow-500 text-gray-900 font-bold text-base hover:bg-yellow-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading === PRICE_CONNECT ? 'Redirecting…' : 'Get Started — $299/agent/mo'}
            </button>

            <p className="text-xs text-gray-600 text-center mt-4">
              Need Gail + Momentum provisioned by Quotely?{' '}
              <Link href="/pricing" className="text-yellow-500 hover:underline">
                See Starter at $999/mo →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Token packs ── */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Add-On Token Packs</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Tokens power QUAD AI tasks. Subscribe to a pack alongside your Connect plan — they stack, cancel independently.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tokenPacks.map(({ tokens, price, perToken, priceId, bestValue }) => (
              <div
                key={tokens}
                className={`relative rounded-2xl border p-7 flex flex-col ${
                  bestValue ? 'border-yellow-500 bg-gray-900' : 'border-gray-800 bg-gray-900'
                }`}
              >
                {bestValue && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-gray-900 whitespace-nowrap">
                      Best Value
                    </span>
                  </div>
                )}
                <div className="text-3xl font-bold text-white">{tokens.toLocaleString()}</div>
                <div className="text-sm text-gray-500 mb-4">tokens/month</div>
                <div className="text-2xl font-bold text-white">${price.toLocaleString()}</div>
                <div className="text-xs text-gray-500 mb-6">/month &middot; ${perToken.toFixed(2)}/token</div>
                <button
                  onClick={() => startCheckout(priceId)}
                  disabled={!!loading}
                  className={`mt-auto py-2.5 rounded-lg text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                    bestValue
                      ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
                      : 'border border-gray-700 text-white hover:border-yellow-500 hover:text-yellow-400'
                  }`}
                >
                  {loading === priceId ? 'Redirecting…' : 'Add Pack'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 text-sm">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left font-semibold text-white w-2/5">Feature</th>
                  <th className="px-5 py-4 text-center font-semibold text-yellow-500">
                    Connect
                    <br />
                    <span className="font-normal text-gray-400 text-xs">$299/agent/mo</span>
                  </th>
                  <th className="px-5 py-4 text-center font-semibold text-white">
                    Starter
                    <br />
                    <span className="font-normal text-gray-400 text-xs">$999/mo</span>
                  </th>
                  <th className="px-5 py-4 text-center font-semibold text-white">
                    Professional
                    <br />
                    <span className="font-normal text-gray-400 text-xs">from $1,799/mo</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(({ feature, connect, starter, professional }, i) => (
                  <tr key={i} className="border-t border-gray-800">
                    <td className="px-6 py-4 text-gray-300">{feature}</td>
                    <td className="px-5 py-4 text-center bg-yellow-500/5">
                      <CellValue value={connect} />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <CellValue value={starter} />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <CellValue value={professional} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-4 text-center">
            * Token-based quoting. 50 States + DC &middot; 200+ carriers via TurboRater by Zywave.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="rounded-xl border border-gray-800 bg-gray-900 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-white">{q}</span>
                  <span className="text-yellow-500 text-xl ml-4 flex-shrink-0 select-none">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-4 text-sm text-gray-400 leading-relaxed border-t border-gray-800">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to quote faster?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Start with one agent. Scale when you&apos;re ready. No contracts, no minimums.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => startCheckout(PRICE_CONNECT)}
              disabled={!!loading}
              className="px-8 py-4 rounded-xl bg-yellow-500 text-gray-900 font-bold text-base hover:bg-yellow-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading === PRICE_CONNECT ? 'Redirecting…' : 'Get Quotely Connect'}
            </button>
            <Link
              href="/demo-request"
              className="px-8 py-4 rounded-xl border border-gray-700 text-white font-semibold text-base hover:border-yellow-500 hover:text-yellow-400 transition-colors"
            >
              Talk to Sales
            </Link>
          </div>
          <p className="text-xs text-gray-600 mt-6">
            Questions?{' '}
            <a
              href="mailto:support@tryquotely.com"
              className="text-gray-500 hover:text-gray-300 underline"
            >
              support@tryquotely.com
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}
