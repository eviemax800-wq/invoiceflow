import type { Metadata } from 'next';
import BlogContent from './BlogContent';
import { blogPosts } from './posts';

export const metadata: Metadata = {
  title: 'Blog — InvoiceFlow | Invoicing Tips for Australian Freelancers',
  description: 'Expert guides on invoicing, GST, ABN, and getting paid faster as an Australian freelancer. Free templates, calculators, and practical advice.',
  openGraph: {
    title: 'InvoiceFlow Blog — Invoicing Tips for Australian Freelancers',
    description: 'Expert guides on invoicing, GST, ABN, and getting paid faster as an Australian freelancer.',
  },
};

export default function BlogPage() {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invoiceflow-teal.vercel.app';
  const totalArticles = Object.keys(blogPosts).length;

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'InvoiceFlow Blog — Invoicing Tips for Australian Freelancers',
    description: 'Expert guides on invoicing, GST, ABN, and getting paid faster as an Australian freelancer.',
    url: `${siteUrl}/blog`,
    inLanguage: 'en-AU',
    numberOfItems: totalArticles,
    isPartOf: { '@type': 'WebSite', name: 'InvoiceFlow', url: siteUrl },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <BlogContent />
    </>
  );
}
