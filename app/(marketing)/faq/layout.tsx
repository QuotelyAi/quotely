import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Quotely Insurance Platform',
  description: 'Find answers to frequently asked questions about Quotely insurance quoting platform, pricing, features, security, and support.',
  openGraph: {
    title: 'FAQ - Quotely Insurance Platform',
    description: 'Find answers to frequently asked questions about Quotely.',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
