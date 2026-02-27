import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact InvoiceFlow — Get in Touch',
  description:
    'Contact the InvoiceFlow team for support, feature requests, or partnership enquiries. We respond within 24 hours. Based in Melbourne, Australia.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact InvoiceFlow — Get in Touch',
    description:
      'Have a question about InvoiceFlow? Contact our Melbourne-based team for support, feature requests, or partnership enquiries.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
