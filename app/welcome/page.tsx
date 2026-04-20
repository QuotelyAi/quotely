// app/welcome/page.tsx
import { Suspense } from 'react';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

async function WelcomeContent({ sessionId }: { sessionId: string | undefined }) {
  if (!sessionId) {
    return <p className="text-red-600">Missing session reference. If you just completed a purchase, check your email — your account is being set up.</p>;
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-02-24.acacia',
    typescript: true,
  });

  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return <p className="text-red-600">We couldn't verify your session. Check your email for next steps, or contact support@tryquotely.com.</p>;
  }

  if (session.payment_status !== 'paid') {
    return <p>Payment processing… this page will update shortly.</p>;
  }

  const email = session.customer_details?.email ?? 'your email';
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Welcome to Quotely Connect</h1>
      <p>Your subscription is active. We've sent a login link to <strong>{email}</strong>.</p>
      <p className="text-sm text-gray-600">Your Quotely workspace is being provisioned — this usually takes under 60 seconds. Check your email to complete setup.</p>
      <p className="text-sm text-gray-500">Didn't get an email? Check spam, then contact support@tryquotely.com.</p>
    </div>
  );
}

export default async function WelcomePage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Suspense fallback={<p>Loading…</p>}>
        <WelcomeContent sessionId={searchParams.session_id} />
      </Suspense>
    </main>
  );
}
