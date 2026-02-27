import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Features — InvoiceFlow | AI Invoice Management for Australian Freelancers',
  description:
    'Gmail invoice auto-detection, AI field extraction, GST compliance, CSV & QuickBooks export, vendor categorization, and 100+ free business tools. Built for Australian freelancers.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'InvoiceFlow Features — AI-Powered Invoice Management',
    description:
      'Auto-detect invoices from Gmail, extract fields with AI, calculate GST, and export to CSV or QuickBooks. Free tier available.',
  },
};

const coreFeatures = [
  {
    title: 'Gmail Invoice Detection',
    description:
      'Connect your Gmail and InvoiceFlow automatically finds invoices in your inbox. No manual uploads, no forwarding — it just works.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'AI Field Extraction',
    description:
      'AI reads each invoice and extracts vendor name, amount, date, ABN, and GST — with over 95% accuracy. Review and approve in seconds.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-400',
  },
  {
    title: 'GST Compliance',
    description:
      'Automatically calculates GST on every invoice. Tracks your $75K threshold, flags missing ABNs, and keeps you ATO-ready year-round.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-400',
  },
  {
    title: 'Vendor Categorisation',
    description:
      'AI groups invoices by vendor and expense category. See spending patterns, identify your biggest costs, and track recurring expenses effortlessly.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-400',
  },
  {
    title: 'CSV & QuickBooks Export',
    description:
      'Export your invoices to CSV for spreadsheets or QuickBooks-compatible format for your accountant. One click, all data, properly formatted.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    color: 'from-rose-500 to-red-400',
  },
  {
    title: 'Smart Dashboard',
    description:
      'See all your invoices in one place with real-time totals, overdue alerts, and monthly trends. Filter by vendor, date, status, or category.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    color: 'from-sky-500 to-blue-400',
  },
];

const freeTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup' },
  { name: 'Tax Estimator', href: '/tools/tax-estimator' },
  { name: 'Super Calculator', href: '/tools/super-calculator' },
  { name: 'Contract Generator', href: '/tools/contract-generator' },
  { name: 'Privacy Policy Generator', href: '/tools/privacy-policy-generator' },
];

const comparisonPoints = [
  { feature: 'Gmail auto-detection', invoiceflow: true, xero: false, freshbooks: false },
  { feature: 'AI field extraction', invoiceflow: true, xero: false, freshbooks: false },
  { feature: 'Free tier', invoiceflow: true, xero: false, freshbooks: true },
  { feature: 'GST-native (Australia)', invoiceflow: true, xero: true, freshbooks: false },
  { feature: 'No invoice cap (Pro)', invoiceflow: true, xero: false, freshbooks: true },
  { feature: '100+ free tools', invoiceflow: true, xero: false, freshbooks: false },
  { feature: 'QuickBooks export', invoiceflow: true, xero: false, freshbooks: false },
  { feature: 'Monthly price (Pro)', invoiceflow: '$19', xero: '$35', freshbooks: '$24' },
];

const featuresSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'InvoiceFlow Features',
  description: 'AI-powered invoice management features for Australian freelancers. Gmail detection, AI extraction, GST compliance, CSV export.',
  url: 'https://invoiceflow-teal.vercel.app/features',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://invoiceflow-teal.vercel.app/features' },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow detect invoices from Gmail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow connects to your Gmail via secure OAuth and scans for invoice-related emails. AI identifies invoices based on content patterns, attachments, and sender history — no manual forwarding needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What fields does the AI extract from invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow AI extracts vendor name, invoice number, date, due date, total amount, GST amount, ABN, and expense category. Fields are pre-filled for your review and can be edited before saving.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow compliant with Australian GST requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow is built specifically for Australian freelancers and small businesses. It calculates 10% GST automatically, tracks your $75,000 registration threshold, validates ABNs, and formats exports for BAS lodgement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I export invoices to my accountant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow exports to CSV (for spreadsheets) and QuickBooks-compatible format (Premium plan). Your accountant gets clean, categorised data ready for tax time. No more shoe-boxing receipts.',
      },
    },
  ],
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen page-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <span className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</span>
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/tools" className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:inline">
              Free Tools
            </Link>
            <Link href="/pricing" className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:inline">
              Pricing
            </Link>
            <Link href="/compare" className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:inline">
              Compare
            </Link>
            <Link href="/signup">
              <Button>Get Started Free</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Built for Australian freelancers
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white heading-font leading-tight max-w-4xl mx-auto">
            Everything you need to
            <span className="gradient-text"> manage invoices</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-6">
            From Gmail detection to GST compliance, InvoiceFlow handles the entire invoice
            lifecycle so you can focus on the work that pays.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/signup">
              <Button size="lg">Start Free — 5 Invoices/Mo</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary" size="lg">See Plans</Button>
            </Link>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white heading-font text-center mb-4">
            Core Features
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">
            Every feature designed to save you time and keep you compliant with Australian tax requirements.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-teal-500/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white heading-font text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Connect Gmail', desc: 'One-click OAuth. No passwords shared.' },
              { step: '2', title: 'AI Scans Inbox', desc: 'Finds invoices automatically.' },
              { step: '3', title: 'Review & Approve', desc: 'AI-extracted fields, you confirm.' },
              { step: '4', title: 'Export', desc: 'CSV, QuickBooks, or dashboard.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white heading-font text-center mb-4">
            InvoiceFlow vs The Rest
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">
            See why Australian freelancers are switching from overpriced accounting software.
          </p>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 py-3 px-4">Feature</th>
                  <th className="text-center text-teal-400 font-semibold py-3 px-4">InvoiceFlow</th>
                  <th className="text-center text-slate-400 py-3 px-4">Xero</th>
                  <th className="text-center text-slate-400 py-3 px-4">FreshBooks</th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5">
                    <td className="text-slate-300 py-3 px-4">{row.feature}</td>
                    <td className="text-center py-3 px-4">
                      {typeof row.invoiceflow === 'boolean' ? (
                        row.invoiceflow ? (
                          <span className="text-emerald-400">&#10003;</span>
                        ) : (
                          <span className="text-slate-600">&#10007;</span>
                        )
                      ) : (
                        <span className="text-teal-400 font-semibold">{row.invoiceflow}</span>
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {typeof row.xero === 'boolean' ? (
                        row.xero ? (
                          <span className="text-emerald-400">&#10003;</span>
                        ) : (
                          <span className="text-slate-600">&#10007;</span>
                        )
                      ) : (
                        <span className="text-slate-300">{row.xero}</span>
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {typeof row.freshbooks === 'boolean' ? (
                        row.freshbooks ? (
                          <span className="text-emerald-400">&#10003;</span>
                        ) : (
                          <span className="text-slate-600">&#10007;</span>
                        )
                      ) : (
                        <span className="text-slate-300">{row.freshbooks}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link href="/compare" className="text-teal-400 hover:text-teal-300 text-sm transition-colors">
              See detailed competitor comparisons &rarr;
            </Link>
          </div>
        </section>

        {/* Free Tools Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white heading-font text-center mb-4">
            100+ Free Business Tools
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-8">
            Even without an account, you get access to Australia&apos;s largest collection of free
            freelancer business tools.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {freeTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-200 hover:bg-white/10 hover:border-teal-500/30 transition-all text-center"
              >
                {tool.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/tools" className="text-teal-400 hover:text-teal-300 text-sm transition-colors">
              Browse all 100+ free tools &rarr;
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white heading-font text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="rounded-xl bg-white/5 border border-white/10 p-6">
                <h3 className="text-white font-semibold mb-2">{faq.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 p-12">
            <h2 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to stop sorting invoices?
            </h2>
            <p className="text-slate-400 mb-8">
              Start free with 5 invoices per month. No credit card required.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/signup">
                <Button size="lg">Start Free</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">See Pricing</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <Link href="/features" className="hover:text-slate-300 transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-slate-300 transition-colors">Pricing</Link>
            <Link href="/compare" className="hover:text-slate-300 transition-colors">Compare</Link>
            <Link href="/tools" className="hover:text-slate-300 transition-colors">Free Tools</Link>
            <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
