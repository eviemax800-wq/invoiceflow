import type { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Blog — InvoiceFlow | Invoicing Tips for Australian Freelancers',
  description: 'Expert guides on invoicing, GST, ABN, and getting paid faster as an Australian freelancer. Free templates, calculators, and practical advice.',
  openGraph: {
    title: 'InvoiceFlow Blog — Invoicing Tips for Australian Freelancers',
    description: 'Expert guides on invoicing, GST, ABN, and getting paid faster as an Australian freelancer.',
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
