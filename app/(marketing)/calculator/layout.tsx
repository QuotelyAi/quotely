import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ROI Calculator - Quotely Insurance Platform',
  description: 'Calculate your potential ROI with Quotely. See how much additional revenue our insurance quoting platform can generate for your agency.',
  openGraph: {
    title: 'ROI Calculator - Quotely Insurance Platform',
    description: 'Calculate your potential ROI with Quotely insurance platform.',
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
