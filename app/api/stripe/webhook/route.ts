// app/api/stripe/webhook/route.ts — TryQuotely (marketing)
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

let _stripe: Stripe | null = null;
function getStripe() {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-02-24.acacia',
      typescript: true,
    });
  }
  return _stripe;
}

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  const slackWebhookUrl = process.env.SLACK_SALES_WEBHOOK_URL;
  const stripe = getStripe();

  const signature = req.headers.get('stripe-signature');
  if (!signature) return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  if (!webhookSecret) {
    console.error('[tryquotely-webhook] STRIPE_WEBHOOK_SECRET not configured');
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'unknown';
    console.error('[tryquotely-webhook] signature verification failed:', msg);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // TryQuotely cares about ONE event: checkout completed, for sales visibility.
  // v3 handles the actual provisioning via its own webhook subscription.
  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true, handled: false });
  }

  try {
    const session = event.data.object as Stripe.Checkout.Session;
    await notifySlack(slackWebhookUrl, {
      email: session.customer_details?.email ?? 'unknown',
      amountTotal: session.amount_total ?? 0,
      currency: session.currency ?? 'usd',
      priceId: session.metadata?.priceId ?? 'unknown',
      productTier: session.metadata?.productTier ?? 'unknown',
      sessionId: session.id,
    });
    console.log('[tryquotely-webhook] checkout completed', session.id);
    return NextResponse.json({ received: true, handled: true });
  } catch (err) {
    // Log but return 200 — Slack failure shouldn't trigger Stripe retries.
    console.error('[tryquotely-webhook] handler error:', err);
    return NextResponse.json({ received: true, handled: false });
  }
}

async function notifySlack(slackWebhookUrl: string | undefined, payload: {
  email: string;
  amountTotal: number;
  currency: string;
  priceId: string;
  productTier: string;
  sessionId: string;
}): Promise<void> {
  if (!slackWebhookUrl) return; // Soft-fail if Slack not configured.
  const amount = (payload.amountTotal / 100).toFixed(2);
  const body = {
    text: `:moneybag: New TryQuotely checkout: ${payload.productTier} — $${amount} ${payload.currency.toUpperCase()} — ${payload.email} — session ${payload.sessionId}`,
  };
  await fetch(slackWebhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
