import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Sync Invoices to MYOB — InvoiceFlow',
  description:
    'Export and sync your invoices to MYOB AccountRight and MYOB Business. GST-compliant data transfer, chart of accounts mapping, BAS-ready. Built for Australian freelancers.',
  keywords: [
    'MYOB invoicing integration',
    'export invoices to MYOB',
    'MYOB invoice sync',
    'MYOB alternative invoicing',
    'MYOB AccountRight integration',
    'MYOB Business invoice export',
    'sync invoices MYOB australia',
  ],
  alternates: { canonical: '/integrations/myob' },
  openGraph: {
    title: 'Sync Invoices to MYOB — InvoiceFlow',
    description:
      'Export and sync your invoices to MYOB AccountRight and MYOB Business. GST-compliant data transfer, chart of accounts mapping, BAS-ready. Built for Australian freelancers.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Integrations', item: 'https://invoiceflow-teal.vercel.app/integrations' },
    { '@type': 'ListItem', position: 3, name: 'MYOB', item: 'https://invoiceflow-teal.vercel.app/integrations/myob' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which MYOB products does InvoiceFlow work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "InvoiceFlow integrates with MYOB Business (cloud) and MYOB AccountRight (desktop + cloud). Invoice data, client records, and payment information are synced using MYOB's official API. Both subscription and one-time payment models are supported.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow sync invoices to MYOB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "InvoiceFlow exports invoice data in MYOB-compatible format including invoice number, client details, ABN, line items with tax codes, GST amounts, payment status, and dates. On Pro and Premium plans, data syncs automatically via MYOB's API. Free plan supports AIF and CSV export for manual import.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does the MYOB integration handle GST correctly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. InvoiceFlow uses Australian GST tax codes (GST, FRE, INP, N-T) that map directly to MYOB's tax code system. Every invoice includes the correct tax treatment per line item. When synced to MYOB, your BAS worksheet auto-populates with the correct GST collected and GST paid figures.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I keep using MYOB for accounting and InvoiceFlow for invoicing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely — this is the recommended setup. InvoiceFlow handles the invoicing (creation, sending, payment collection, reminders, tracking) while MYOB handles the accounting (chart of accounts, profit & loss, balance sheet, BAS lodgement). The integration bridges both systems so you get the best of each without double-entry.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the MYOB integration cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The MYOB integration is included on Pro ($19/month) and Premium ($39/month) plans at no extra cost. MYOB itself charges separately for their accounting software — MYOB Business starts at $34/month. Combined, you get professional invoicing and full accounting for $53/month, compared to MYOB's built-in invoicing which is limited and costs $34/month on its own.",
      },
    },
  ],
};

const painPoints = [
  { pain: "MYOB's built-in invoicing is clunky and hasn't been updated in years", fix: 'Modern invoicing with InvoiceFlow, automatic sync to MYOB for accounting' },
  { pain: 'Manually entering invoices into MYOB after creating them elsewhere', fix: 'One-click export or automatic sync — no double-entry, no copy-pasting' },
  { pain: 'GST codes getting mixed up when importing invoice data into MYOB', fix: 'Correct ATO tax codes (GST, FRE, INP, N-T) mapped automatically to MYOB' },
  { pain: 'Paying $34+/mo for MYOB when you mostly just need better invoicing', fix: 'InvoiceFlow from $0/mo for invoicing, add MYOB only if you need full accounting' },
];

const capabilities = [
  {
    title: 'Automatic Sync',
    desc: 'Invoice data flows from InvoiceFlow to MYOB automatically. Create an invoice, and it appears in MYOB within seconds.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: 'GST Tax Code Mapping',
    desc: "Australian GST codes (GST, FRE, INP, N-T) map directly to MYOB's tax system. BAS worksheet populates correctly every time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'Chart of Accounts',
    desc: 'InvoiceFlow maps revenue to your MYOB chart of accounts. Income categories, payment accounts, and client records stay organised.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    title: 'AIF Export',
    desc: "Export invoices in MYOB's native AIF format for AccountRight desktop users. One-click import, no data transformation needed.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    title: 'Client Sync',
    desc: 'Client records (name, ABN, address, payment terms) sync between InvoiceFlow and MYOB. Update once, reflected everywhere.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Payment Reconciliation',
    desc: 'When clients pay through InvoiceFlow (Stripe, PayPal, bank transfer), the payment is recorded in MYOB automatically.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const keyStats = [
  { value: '1.2M+', label: 'Australian businesses use MYOB' },
  { value: '$34/mo', label: 'MYOB Business starting price' },
  { value: '30+ years', label: 'MYOB has been in Australia since 1991' },
  { value: '4 tax codes', label: 'GST, FRE, INP, N-T mapped automatically' },
];

const comparisonFeatures = [
  { feature: 'Modern invoice editor', invoiceflow: true, myob: false, xero: true, freshbooks: true },
  { feature: 'One-click payments', invoiceflow: true, myob: false, xero: 'Add-on', freshbooks: true },
  { feature: 'Automatic GST codes', invoiceflow: true, myob: true, xero: true, freshbooks: 'Partial' },
  { feature: 'AI features', invoiceflow: true, myob: false, xero: false, freshbooks: false },
  { feature: 'Free invoicing tier', invoiceflow: true, myob: false, xero: false, freshbooks: false },
  { feature: 'BAS auto-populate', invoiceflow: true, myob: true, xero: true, freshbooks: false },
];

const personaLinks = [
  { name: 'Sole Traders', href: '/for/sole-traders', desc: 'Simple invoicing synced to MYOB for tax time' },
  { name: 'Tradies', href: '/for/tradies', desc: 'Job invoicing with automatic MYOB accounting sync' },
  { name: 'Accountants', href: '/for/accountants', desc: 'Client invoices flowing directly into MYOB' },
  { name: 'Allied Health', href: '/for/allied-health', desc: 'NDIS and Medicare invoicing with MYOB export' },
  { name: 'Cleaners', href: '/for/cleaners', desc: 'Recurring invoicing synced to MYOB for BAS' },
  { name: 'Real Estate Agents', href: '/for/real-estate-agents', desc: 'Commission invoicing with MYOB accounting' },
];

const relatedTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST amounts for MYOB sync' },
  { name: 'BAS Preparation Checklist', href: '/tools/bas-preparation-checklist', desc: 'Prepare your BAS with MYOB-synced data' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create invoices that sync to MYOB' },
  { name: 'Tax Deduction Finder', href: '/tools/tax-deduction-finder', desc: 'Find deductions to record in MYOB' },
  { name: 'PAYG Calculator', href: '/tools/payg-calculator', desc: 'Calculate PAYG installments for BAS' },
  { name: 'Invoice Numbering System', href: '/tools/invoice-numbering-system', desc: 'Set up MYOB-compatible invoice numbers' },
];

export default function MYOBIntegrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            InvoiceFlow
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/tools" className="hover:text-white transition-colors">Free Tools</Link>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
          </div>
          <Link href="/signup">
            <Button size="sm">Start Free</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400 mb-8">
          MYOB Integration
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Sync your invoices to{' '}
          <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            MYOB
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Create beautiful invoices in InvoiceFlow and sync them straight to MYOB. GST codes mapped automatically, chart of accounts linked, BAS worksheet ready. No double-entry, no data errors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/invoice-generator">
            <Button variant="secondary" size="lg">Try the Invoice Generator</Button>
          </Link>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The MYOB invoicing problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          MYOB is great accounting software, but its invoicing features haven&apos;t kept up. Most freelancers end up creating invoices elsewhere and manually re-entering them into MYOB. That stops now.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-red-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <p className="text-sm text-slate-400">{item.pain}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-purple-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Everything you need for MYOB integration</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          InvoiceFlow connects with MYOB Business and AccountRight. Invoice in InvoiceFlow, account in MYOB — the best of both worlds.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.title} className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-6 hover:bg-purple-500/[0.15] transition-colors">
              <div className="inline-flex items-center justify-center rounded-xl bg-purple-500/10 p-3 text-purple-400 mb-4">
                {cap.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{cap.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">MYOB by the numbers</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          MYOB has been Australia&apos;s go-to accounting software for over 30 years. InvoiceFlow gives you modern invoicing that plugs right into it.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyStats.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">How InvoiceFlow + MYOB compares</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Use InvoiceFlow for invoicing and MYOB for accounting. Together they outperform any single platform.
        </p>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-5 border-b border-white/5 bg-white/[0.03]">
            <div className="py-4 px-4 text-sm font-medium text-slate-400">Feature</div>
            <div className="py-4 px-4 text-sm font-medium text-purple-400">InvoiceFlow + MYOB</div>
            <div className="py-4 px-4 text-sm font-medium text-slate-400">MYOB Alone</div>
            <div className="py-4 px-4 text-sm font-medium text-slate-400">Xero</div>
            <div className="py-4 px-4 text-sm font-medium text-slate-400">FreshBooks</div>
          </div>
          {/* Table rows */}
          {comparisonFeatures.map((row, i) => (
            <div key={i} className="grid grid-cols-5 border-b border-white/5 last:border-0">
              <div className="py-3 px-4 text-sm text-slate-400">{row.feature}</div>
              <div className="py-3 px-4 text-sm font-medium text-purple-300 bg-purple-500/5">
                {typeof row.invoiceflow === 'boolean' ? (
                  row.invoiceflow ? (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                ) : (
                  row.invoiceflow
                )}
              </div>
              <div className="py-3 px-4 text-sm text-slate-400">
                {typeof row.myob === 'boolean' ? (
                  row.myob ? (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                ) : (
                  row.myob
                )}
              </div>
              <div className="py-3 px-4 text-sm text-slate-400">
                {typeof row.xero === 'boolean' ? (
                  row.xero ? (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                ) : (
                  row.xero
                )}
              </div>
              <div className="py-3 px-4 text-sm text-slate-400">
                {typeof row.freshbooks === 'boolean' ? (
                  row.freshbooks ? (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                ) : (
                  row.freshbooks
                )}
              </div>
            </div>
          ))}
          {/* Platform cost row */}
          <div className="grid grid-cols-5 bg-white/[0.03] border-t border-white/10">
            <div className="py-4 px-4 text-sm font-medium text-white">Platform cost</div>
            <div className="py-4 px-4 text-sm font-bold text-purple-400 bg-purple-500/5">From $19/mo + MYOB</div>
            <div className="py-4 px-4 text-sm text-slate-400">$34/mo</div>
            <div className="py-4 px-4 text-sm text-slate-400">From $35/mo</div>
            <div className="py-4 px-4 text-sm text-slate-400">From $24/mo</div>
          </div>
        </div>
      </section>

      {/* Persona Links */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">MYOB sync for every profession</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          No matter what you do, if your accountant uses MYOB, InvoiceFlow makes sure your invoices get there cleanly and correctly.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaLinks.map((persona) => (
            <Link
              key={persona.name}
              href={persona.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-purple-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors mb-1">
                {persona.name}
              </h3>
              <p className="text-xs text-slate-500">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for MYOB users</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-purple-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <section className="mx-auto max-w-2xl px-6 py-12">
        <EmailCapture />
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple pricing — MYOB sync included on paid plans</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free with CSV and AIF export. Upgrade for automatic API sync to MYOB Business and AccountRight.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, AIF + CSV export to MYOB, manual import, basic tracking</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6 ring-1 ring-purple-500/20">
            <div className="text-xs text-purple-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, automatic MYOB sync, GST mapping, payment reconciliation</p>
            <Link href="/signup"><Button size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Premium</h3>
            <div className="text-3xl font-bold text-white mb-3">$39<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Multi-business, API access, white-label invoices, priority support, advanced MYOB mapping</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">MYOB integration FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-purple-400 transition-colors list-none flex justify-between items-center">
                {faq.name}
                <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Stop double-entering invoices,{' '}
          <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            start syncing to MYOB
          </span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Every invoice you manually type into MYOB is time you could spend on billable work. Connect InvoiceFlow and let your data flow automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup"><Button size="lg">Start Free — 5 Invoices/Month</Button></Link>
          <Link href="/features" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
            View all features &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne, Australia.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
