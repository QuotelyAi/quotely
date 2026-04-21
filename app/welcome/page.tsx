// app/welcome/page.tsx
export const dynamic = 'force-dynamic';

export default function WelcomePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">Welcome to Quotely</h1>
        <p className="text-gray-300">Your account is being set up. You&apos;ll receive a login link at the email you provided shortly.</p>
        <p className="text-sm text-gray-500">Didn&apos;t get an email? Check spam, then contact <a href="mailto:support@tryquotely.com" className="text-yellow-500 hover:underline">support@tryquotely.com</a>.</p>
      </div>
    </main>
  );
}
