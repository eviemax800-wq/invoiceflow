import type { Metadata } from 'next';
import Link from 'next/link';
import { tools, CATEGORY_META, CATEGORY_SLUGS } from './tools-data';

export const metadata: Metadata = {
  title: 'Free Business Tools for Freelancers | InvoiceFlow',
  description:
    'Free tools for Australian freelancers and small businesses. 44 calculators and generators including GST, invoices, rates, tax, super, billable hours, break-even analysis, markup, revenue planning, payment reminders, payment terms, retainer pricing, project profitability, business health score, scope of work generator, meeting cost calculator, contract clause generator, ATO tax calendar, WFH deduction calculator, proposal generator, pricing comparison, client lifetime value, invoice aging report, budget planner, net income calculator, depreciation calculator, timesheet calculator, vehicle expense calculator, payment plan calculator, client concentration risk analyser, recurring revenue calculator, savings goal calculator, expense report generator, project ROI calculator, and more. No signup required.',
  openGraph: {
    title: 'Free Business Tools for Freelancers | InvoiceFlow',
    description:
      'Free tools for Australian freelancers. GST calculator, invoice templates, and more.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools',
  },
};

export default function ToolsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://invoiceflow-teal.vercel.app';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free Business Tools for Freelancers',
    description: 'Free calculators and generators for Australian freelancers and small businesses.',
    url: `${siteUrl}/tools`,
    inLanguage: 'en-AU',
    numberOfItems: tools.length,
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
          <div className="flex gap-3">
            <Link
              href="/pricing"
              className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              Pricing
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {tools.length} free tools — no signup required
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white heading-font mb-4">
            Free <span className="gradient-text">Business Tools</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Essential calculators and generators for Australian freelancers and small businesses.
            No account needed.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <span className="text-sm px-4 py-2 rounded-full bg-teal-400/20 text-teal-400 border border-teal-400/30">
            All Tools
          </span>
          {CATEGORY_SLUGS.map((slug) => (
            <Link
              key={slug}
              href={`/tools/category/${slug}`}
              className="text-sm px-4 py-2 rounded-full glass text-slate-400 hover:text-white border border-white/5 hover:border-white/20 transition-all"
            >
              {CATEGORY_META[slug].heading}
            </Link>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {tools.map((tool) => (
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
                  <p className="text-sm text-slate-400 mt-2">{tool.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 text-center glass rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-white heading-font mb-4">
            Ready to <span className="gradient-text">automate</span> your invoicing?
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            These free tools are just the start. InvoiceFlow automates invoice creation, GST
            calculations, payment tracking, and BAS prep — all with AI.
          </p>
          <Link
            href="/signup"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Start Free — 5 Invoices/Month
          </Link>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20 py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne.</p>
          <div className="flex gap-6">
            <Link href="/compare" className="hover:text-white transition-colors">
              Compare
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
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
