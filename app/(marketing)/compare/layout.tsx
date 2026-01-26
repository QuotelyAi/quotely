import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare Plans - Quotely Insurance Platform',
  description: 'Compare Quotely pricing plans and features. Find the perfect plan for your insurance agency with our detailed feature comparison.',
  openGraph: {
    title: 'Compare Plans - Quotely Insurance Platform',
    description: 'Compare Quotely pricing plans and features for your insurance agency.',
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
