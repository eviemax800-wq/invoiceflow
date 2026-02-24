import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';
import { blogPosts } from '../../posts';

const CATEGORY_META: Record<string, { title: string; description: string; heading: string }> = {
  invoicing: {
    title: 'Invoicing Guides for Australian Freelancers',
    description: 'Expert invoicing guides for Australian freelancers. Learn how to create tax invoices, set payment terms, send professional invoices, and get paid faster.',
    heading: 'Invoicing',
  },
  tax: {
    title: 'Tax Guides for Australian Freelancers',
    description: 'Essential tax guides for Australian freelancers. GST registration, BAS reporting, tax deductions, superannuation, PAYG instalments, and ATO compliance.',
    heading: 'Tax',
  },
  business: {
    title: 'Business Guides for Australian Freelancers',
    description: 'Business guides for Australian freelancers. Contracts, business structures, scaling, subcontracting, insurance, and building a sustainable freelance business.',
    heading: 'Business',
  },
  'getting-started': {
    title: 'Getting Started as a Freelancer in Australia',
    description: 'Everything you need to start freelancing in Australia. ABN registration, first invoice, pricing, finding clients, and setting up your freelance business.',
    heading: 'Getting Started',
  },
  'getting-paid': {
    title: 'Getting Paid as a Freelancer in Australia',
    description: 'Guides on getting paid reliably as an Australian freelancer. Late payment fees, overdue invoices, client disputes, payment methods, and legal options.',
    heading: 'Getting Paid',
  },
  growth: {
    title: 'Freelance Growth & Marketing Guides for Australians',
    description: 'Grow your freelance business in Australia. Networking, digital marketing, repeat clients, niching down, personal branding, and scaling strategies.',
    heading: 'Growth',
  },
  pricing: {
    title: 'Pricing Guides for Australian Freelancers',
    description: 'Set the right prices for your freelance services. Rate negotiation, raising rates, retainer agreements, and pricing models for Australian freelancers.',
    heading: 'Pricing',
  },
  'profession-guides': {
    title: 'Invoicing Guides by Profession — Australian Freelancers',
    description: 'Profession-specific invoicing guides for Australian freelancers. Find your profession and learn industry-specific pricing, billing, GST rules, and invoice templates.',
    heading: 'Profession Guides',
  },
};

const SLUG_TO_CATEGORY: Record<string, string> = {
  invoicing: 'Invoicing',
  tax: 'Tax',
  business: 'Business',
  'getting-started': 'Getting Started',
  'getting-paid': 'Getting Paid',
  growth: 'Growth',
  pricing: 'Pricing',
  'profession-guides': 'Profession Guides',
};

const validSlugs = Object.keys(CATEGORY_META);

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = CATEGORY_META[slug];
  if (!meta) return { title: 'Category Not Found' };

  return {
    title: `${meta.title} | InvoiceFlow Blog`,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = CATEGORY_META[slug];
  const categoryName = SLUG_TO_CATEGORY[slug];
  if (!meta || !categoryName) notFound();

  const categoryPosts = Object.values(blogPosts)
    .filter((p) => p.category === categoryName)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invoiceflow-teal.vercel.app';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: meta.title,
    description: meta.description,
    url: `${siteUrl}/blog/category/${slug}`,
    inLanguage: 'en-AU',
    numberOfItems: categoryPosts.length,
    isPartOf: { '@type': 'WebSite', name: 'InvoiceFlow', url: siteUrl },
  };

  return (
    <div className="min-h-screen page-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </Link>
          <div className="flex gap-4">
            <Link href="/blog">
              <Button variant="ghost">Blog</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started Free</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span>/</span>
          <span className="text-slate-200">{meta.heading}</span>
        </div>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            {categoryPosts.length} {categoryPosts.length === 1 ? 'article' : 'articles'}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="gradient-text">{meta.heading}</span> Guides
          </h2>
          <p className="text-xl text-slate-300">{meta.description}</p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {validSlugs.map((s) => (
            <Link
              key={s}
              href={`/blog/category/${s}`}
              className={`text-sm px-4 py-2 rounded-full transition-all ${
                s === slug
                  ? 'bg-teal-400/20 text-teal-400 border border-teal-400/30'
                  : 'glass text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {CATEGORY_META[s].heading}
            </Link>
          ))}
        </div>

        {/* Articles */}
        <div className="space-y-6">
          {categoryPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="glass rounded-2xl p-6 border border-white/5 hover:border-teal-400/20 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-teal-400 px-2 py-1 rounded-full bg-teal-400/10">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 heading-font group-hover:text-teal-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="glass rounded-3xl p-8 text-center mt-16">
          <h3 className="text-2xl font-bold text-white heading-font mb-3">Start Invoicing Smarter</h3>
          <p className="text-slate-400 mb-6">AI-powered invoicing for Australian freelancers. Free to start.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg">Get Started Free</Button>
            </Link>
            <Link href="/tools">
              <Button variant="secondary" size="lg">Free Tools</Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <span>&copy; 2026 InvoiceFlow. All rights reserved.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/compare" className="hover:text-white">Compare</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
