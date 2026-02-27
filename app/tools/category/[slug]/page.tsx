import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { tools, CATEGORY_META, CATEGORY_SLUGS } from '../../tools-data';
import EmailCapture from '../../components/EmailCapture';

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = CATEGORY_META[slug];
  if (!meta) return { title: 'Category Not Found' };

  return {
    title: `${meta.title} | InvoiceFlow`,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
    },
    alternates: {
      canonical: `/tools/category/${slug}`,
    },
  };
}

export default async function ToolCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = CATEGORY_META[slug];
  if (!meta) notFound();

  const categoryTools = tools.filter((t) => t.category === meta.category);
  const siteUrl =
    process.env.NEXT_PUBLIC_APP_URL || 'https://invoiceflow-teal.vercel.app';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: meta.title,
    description: meta.description,
    url: `${siteUrl}/tools/category/${slug}`,
    inLanguage: 'en-AU',
    numberOfItems: categoryTools.length,
    isPartOf: { '@type': 'WebSite', name: 'InvoiceFlow', url: siteUrl },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: categoryTools.length,
      itemListElement: categoryTools.map((tool, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: tool.title,
        url: `${siteUrl}${tool.href}`,
        description: tool.description,
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Free Tools', item: `${siteUrl}/tools` },
      { '@type': 'ListItem', position: 3, name: meta.heading, item: `${siteUrl}/tools/category/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen page-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">
              InvoiceFlow
            </h1>
          </Link>
          <div className="flex gap-3">
            <Link
              href="/tools"
              className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              All Tools
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link href="/tools" className="hover:text-white transition-colors">
            Tools
          </Link>
          <span>/</span>
          <span className="text-slate-200">{meta.heading}</span>
        </div>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {categoryTools.length} free{' '}
            {categoryTools.length === 1 ? 'tool' : 'tools'} — no signup
            required
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 heading-font">
            <span className="gradient-text">{meta.heading}</span> Tools
          </h2>
          <p className="text-xl text-slate-300">{meta.description}</p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2 mb-10">
          <Link
            href="/tools"
            className="text-sm px-4 py-2 rounded-full glass text-slate-400 hover:text-white border border-white/5 hover:border-white/20 transition-all"
          >
            All Tools
          </Link>
          {CATEGORY_SLUGS.map((s) => (
            <Link
              key={s}
              href={`/tools/category/${s}`}
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

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {categoryTools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="block glass rounded-2xl p-6 hover:bg-white/[0.08] hover:border-teal-500/30 border border-transparent transition-all h-full group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white text-xl font-bold shrink-0 group-hover:scale-110 transition-transform`}
                >
                  {tool.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white heading-font">
                      {tool.title}
                    </h3>
                    {tool.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-400">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400 mt-2">
                    {tool.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Related Categories */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-white heading-font mb-6">
            More Free Tools
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORY_SLUGS.filter((s) => s !== slug).map((s) => {
              const catMeta = CATEGORY_META[s];
              const count = tools.filter(
                (t) => t.category === catMeta.category
              ).length;
              return (
                <Link
                  key={s}
                  href={`/tools/category/${s}`}
                  className="glass rounded-xl p-5 border border-white/5 hover:border-teal-400/20 transition-all group"
                >
                  <h4 className="font-bold text-white heading-font group-hover:text-teal-400 transition-colors">
                    {catMeta.heading}
                  </h4>
                  <p className="text-sm text-slate-400 mt-1">
                    {count} free {count === 1 ? 'tool' : 'tools'}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <EmailCapture />

        {/* CTA */}
        <section className="mt-16 text-center glass rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-white heading-font mb-4">
            Ready to <span className="gradient-text">automate</span> your
            invoicing?
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            These free tools are just the start. InvoiceFlow automates invoice
            creation, GST calculations, payment tracking, and BAS prep — all
            with AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
            <Link
              href="/tools"
              className="inline-block px-6 py-3 rounded-lg glass text-white font-semibold hover:bg-white/10 transition-colors border border-white/10"
            >
              View All {tools.length} Tools
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20 py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne.
          </p>
          <div className="flex gap-6">
            <Link
              href="/compare"
              className="hover:text-white transition-colors"
            >
              Compare
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
