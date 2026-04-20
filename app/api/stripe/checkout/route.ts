// app/api/stripe/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
  typescript: true,
});

// Allowlist of price IDs this endpoint will accept.
// Prevents a malicious caller from passing an arbitrary priceId.
// Pulled from env so sandbox/live swap is a deploy config change, not a code change.
const ALLOWED_PRICE_IDS = new Set<string>(
  [
    process.env.STRIPE_PRICE_CONNECT,
    process.env.STRIPE_PRICE_TOKENS_50,
    process.env.STRIPE_PRICE_TOKENS_200,
    process.env.STRIPE_PRICE_TOKENS_500,
    process.env.STRIPE_PRICE_TOKENS_1000,
  ].filter((id): id is string => Boolean(id)),
);

type CheckoutRequestBody = {
  priceId: string;
  quantity?: number; // For Connect: number of agent seats. Ignored for token packs.
  customerEmail?: string;
};

function isValidBody(body: unknown): body is CheckoutRequestBody {
  if (typeof body !== 'object' || body === null) return false;
  const b = body as Record<string, unknown>;
  if (typeof b.priceId !== 'string' || b.priceId.length === 0) return false;
  if (b.quantity !== undefined && (typeof b.quantity !== 'number' || b.quantity < 1 || b.quantity > 100)) return false;
  if (b.customerEmail !== undefined && typeof b.customerEmail !== 'string') return false;
  return true;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!isValidBody(body)) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { priceId, quantity = 1, customerEmail } = body;

  if (!ALLOWED_PRICE_IDS.has(priceId)) {
    console.error('[checkout] rejected unknown priceId:', priceId);
    return NextResponse.json({ error: 'Unknown price' }, { status: 400 });
  }

  const origin =
    req.headers.get('origin') ??
    req.headers.get('referer')?.replace(/\/[^/]*$/, '') ??
    'https://tryquotely.com';

  // Only Connect supports quantity (per-agent seats). Token packs are fixed quantity 1.
  const isConnect = priceId === process.env.STRIPE_PRICE_CONNECT;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: isConnect ? quantity : 1,
          ...(isConnect && { adjustable_quantity: { enabled: true, minimum: 1, maximum: 100 } }),
        },
      ],
      success_url: `${origin}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/connect?checkout=cancelled`,
      customer_email: customerEmail,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      // Metadata survives on the subscription + session and shows up in webhooks.
      // Keep it small and non-PII.
      metadata: {
        source: 'tryquotely_connect',
        priceId,
        productTier: isConnect ? 'connect' : 'tokens',
      },
      subscription_data: {
        metadata: {
          source: 'tryquotely_connect',
          priceId,
        },
      },
    });

    if (!session.url) {
      console.error('[checkout] session created but url is null', session.id);
      return NextResponse.json({ error: 'Checkout URL missing' }, { status: 500 });
    }

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'unknown error';
    console.error('[checkout] stripe error:', msg);
    // Don't leak Stripe error details to the client.
    return NextResponse.json({ error: 'Unable to create checkout session' }, { status: 500 });
  }
}
