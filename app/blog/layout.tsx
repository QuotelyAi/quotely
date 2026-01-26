import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Quotely Insurance Intelligence Platform',
  description: 'Stay updated with the latest insights on insurance technology, AI innovations, and industry trends from the Quotely blog.',
  openGraph: {
    title: 'Blog - Quotely Insurance Intelligence Platform',
    description: 'Insights, updates, and innovations in insurance technology.',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
