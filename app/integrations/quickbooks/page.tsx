import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Sync Invoices to QuickBooks Online — InvoiceFlow',
  description:
    'Export invoices to QuickBooks Online automatically. GST-compliant sync, chart of accounts mapping, payment reconciliation. Built for Australian freelancers and sole traders.',
  keywords: [
    'QuickBooks invoicing integration',
    'export invoices to QuickBooks',
    'QuickBooks Online invoice sync',
    'QuickBooks alternative invoicing australia',
    'QuickBooks invoice export',
    'sync invoicing QuickBooks australia',
    'QuickBooks Online integration freelancer',
  ],
  alternates: { canonical: '/integrations/quickbooks' },
  openGraph: {
    title: 'Sync Invoices to QuickBooks Online — InvoiceFlow',
    description:
      'Export invoices to QuickBooks Online automatically. GST-compliant sync, chart of accounts mapping, payment reconciliation. Built for Australian freelancers and sole traders.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Integrations', item: 'https://invoiceflow-teal.vercel.app/integrations' },
    { '@type': 'ListItem', position: 3, name: 'QuickBooks', item: 'https://invoiceflow-teal.vercel.app/integrations/quickbooks' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does InvoiceFlow work with QuickBooks Online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow integrates with QuickBooks Online (QBO) via Intuit\'s official API. Invoice data, client records, payment status, and GST amounts sync automatically on Pro and Premium plans. Free plan supports CSV export compatible with QBO import.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why use InvoiceFlow instead of QuickBooks\' built-in invoicing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QuickBooks\' invoicing is designed as an add-on to accounting software, not as a standalone invoicing tool. InvoiceFlow offers a modern mobile-friendly editor, AI-powered features, one-click Stripe/PayPal payments, and a free tier — all things QuickBooks charges $35+/month for. Use InvoiceFlow for invoicing and QuickBooks for accounting to get the best of both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the QuickBooks integration handle Australian GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow uses Australian GST rates and tax codes that map directly to QuickBooks\' Australian edition. Line items are tagged with the correct tax treatment (GST, GST-Free, Input Taxed, No Tax). QBO\'s GST Centre and BAS report reflect your InvoiceFlow data accurately.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does payment reconciliation work between InvoiceFlow and QuickBooks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a client pays an invoice through InvoiceFlow (via Stripe, PayPal, or bank transfer), the payment is automatically recorded in QuickBooks against the correct invoice. This eliminates manual payment entry and ensures your QuickBooks receivables ledger is always current.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is QuickBooks Online\'s reputation in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QuickBooks Online holds approximately 5% of the Australian market (compared to Xero at 78% and MYOB at 15%). It has a 1.1 out of 5 rating on Trustpilot AU as of 2026, with common complaints about support quality and feature limitations. However, it remains a viable accounting platform, and InvoiceFlow\'s integration ensures your invoicing experience is premium regardless of your accounting backend.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'QuickBooks\' invoice editor feels like a 2010 web form',
    solution: 'Modern dark-themed editor with AI assistance and mobile-first design',
  },
  {
    problem: 'Paying $35/mo for QuickBooks when you primarily need invoicing',
    solution: 'InvoiceFlow from $0/mo for invoicing, keep QuickBooks only for accounting',
  },
  {
    problem: 'Limited payment options on QuickBooks invoices in Australia',
    solution: 'One-click Stripe (1.75% + 30c) and PayPal payments on every invoice',
  },
  {
    problem: 'No free tier — QuickBooks charges from day one',
    solution: 'Start free with 5 invoices/month, upgrade only when you grow',
  },
];

const capabilities = [
  {
    title: 'Automatic Invoice Sync',
    description: 'Invoices created in InvoiceFlow appear in QuickBooks Online automatically. No CSV imports, no copy-pasting, no double-entry.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: 'GST Compliance',
    description: 'Australian GST tax codes sync correctly to QBO\'s Australian edition. BAS reports and GST Centre reflect your invoice data accurately.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Payment Recording',
    description: 'Stripe, PayPal, and bank transfer payments recorded in QBO automatically. Receivables ledger stays current without manual entry.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Client Records',
    description: 'Client name, ABN, address, email, and payment terms sync between InvoiceFlow and QuickBooks. Single source of truth.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Chart of Accounts',
    description: 'Revenue maps to your QBO chart of accounts. Income categories and payment accounts stay organised and audit-ready.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    title: 'Modern Invoice Editor',
    description: 'Replace QBO\'s basic editor with InvoiceFlow\'s modern, AI-powered, mobile-friendly invoice builder. Professional invoices in seconds.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
];

const comparisonRows = [
  { feature: 'Modern invoice editor', invoiceflowQbo: true, qboOnly: false, xero: true, myob: false },
  { feature: 'One-click payments', invoiceflowQbo: true, qboOnly: 'Limited', xero: 'Add-on', myob: false },
  { feature: 'AI features', invoiceflowQbo: true, qboOnly: false, xero: false, myob: false },
  { feature: 'Free invoicing tier', invoiceflowQbo: true, qboOnly: false, xero: false, myob: false },
  { feature: 'Australian GST', invoiceflowQbo: true, qboOnly: true, xero: true, myob: true },
  { feature: 'Mobile app', invoiceflowQbo: true, qboOnly: true, xero: true, myob: true },
];

const keyNumbers = [
  { value: '5%', label: 'QuickBooks Online market share in Australia' },
  { value: '$35/mo', label: 'QuickBooks Online Simple Start price in AU' },
  { value: '1.1/5', label: 'QuickBooks Trustpilot AU rating (2026)' },
  { value: '$0', label: 'InvoiceFlow invoicing starting price' },
];

const personaPages = [
  { name: 'Freelancers', href: '/for/freelancers', desc: 'Modern invoicing with QuickBooks accounting' },
  { name: 'Consultants', href: '/for/consultants', desc: 'Retainer billing synced to QuickBooks' },
  { name: 'Sole Traders', href: '/for/sole-traders', desc: 'Simple invoicing with QBO for tax time' },
  { name: 'Web Developers', href: '/for/web-developers', desc: 'Project invoicing with QuickBooks backend' },
  { name: 'Writers', href: '/for/writers', desc: 'Article billing synced to QuickBooks' },
  { name: 'Graphic Designers', href: '/for/graphic-designers', desc: 'Project billing with QBO accounting' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create invoices that sync to QuickBooks' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST for QuickBooks-synced invoices' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Set rates for QuickBooks billing' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify ABNs before invoicing in QuickBooks' },
  { name: 'Payment Tracking', href: '/features/payment-tracking', desc: 'Track payments synced to QuickBooks' },
  { name: 'AI-Powered Features', href: '/features/ai-powered', desc: 'AI invoice creation for QuickBooks users' },
];

export default function QuickBooksIntegrationPage() {
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
            <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>
          </div>
          <Link href="/signup">
            <Button size="sm">Start Free</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400 mb-8">
          QuickBooks Online Integration
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Sync invoices to{' '}
          <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
            QuickBooks Online
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Create professional invoices in InvoiceFlow&apos;s modern editor and sync them to QuickBooks Online
          automatically. GST-compliant, payment reconciliation included, and a free tier that QuickBooks
          doesn&apos;t offer. Built for Australian freelancers and sole traders.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — Sync to QuickBooks</Button>
          </Link>
          <Link href="/tools/invoice-generator">
            <Button variant="secondary" size="lg">Try the Invoice Generator</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Free tier: 5 invoices/month, CSV export included. API sync on Pro and Premium.
        </p>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          QuickBooks for accounting. InvoiceFlow for invoicing.
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          QuickBooks Online is an accounting platform with invoicing bolted on. InvoiceFlow is an invoicing platform
          that syncs to your accounting. Here&apos;s why the difference matters.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-red-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-2 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-rose-300 font-semibold">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Everything syncs. Nothing falls through the cracks.
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          InvoiceFlow&apos;s QuickBooks integration handles invoices, payments, GST, and client records — so you
          never have to enter the same data twice.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-red-500/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-red-400 to-rose-400 p-3 text-white shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{cap.title}</h3>
                  <p className="text-sm text-slate-400">{cap.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          QuickBooks in Australia — the numbers
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          QuickBooks has a small but real footprint in Australia. If you&apos;re using it, InvoiceFlow makes your
          invoicing experience dramatically better.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyNumbers.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center hover:border-red-500/20 transition-colors"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Competitor Comparison Table */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          How InvoiceFlow + QuickBooks compares
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Get the best invoicing experience paired with your existing QuickBooks accounting — or see how the
          alternatives stack up.
        </p>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
                  <th className="p-4 text-center">
                    <span className="text-red-400 font-bold">InvoiceFlow + QBO</span>
                    <span className="block text-xs text-slate-500 mt-0.5">From $19/mo + QBO</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">QBO Alone</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$35/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">Xero</span>
                    <span className="block text-xs text-slate-500 mt-0.5">From $35/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">MYOB</span>
                    <span className="block text-xs text-slate-500 mt-0.5">From $34/mo</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    <td className="p-4 text-slate-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.invoiceflowQbo === true ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : typeof row.invoiceflowQbo === 'string' ? (
                        <span className="text-slate-400 text-xs">{row.invoiceflowQbo}</span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.qboOnly === true ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : typeof row.qboOnly === 'string' ? (
                        <span className="text-slate-400 text-xs">{row.qboOnly}</span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.xero === true ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : typeof row.xero === 'string' ? (
                        <span className="text-slate-400 text-xs">{row.xero}</span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.myob === true ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : typeof row.myob === 'string' ? (
                        <span className="text-slate-400 text-xs">{row.myob}</span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Persona Pages */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Who uses InvoiceFlow with QuickBooks?
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Whether you chose QuickBooks or inherited it from your accountant, InvoiceFlow gives you
          a premium invoicing experience on top.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaPages.map((persona) => (
            <Link
              key={persona.href}
              href={persona.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-red-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors mb-1">
                {persona.name}
              </h3>
              <p className="text-xs text-slate-500">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free invoicing and business tools
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-red-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-red-400 hover:text-red-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <div className="mx-auto max-w-6xl px-6">
        <EmailCapture />
      </div>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Start free. Upgrade when you grow. QuickBooks CSV export on every plan, API sync on Pro and Premium.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-lg font-bold text-white mb-1">Free</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$0</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Perfect for freelancers starting out. QuickBooks-compatible CSV export included.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                5 invoices per month
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                QuickBooks CSV export
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                GST compliance built in
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                100+ free business tools
              </li>
            </ul>
            <Link href="/signup">
              <Button variant="secondary" size="md" className="w-full">Start Free</Button>
            </Link>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-red-500/30 bg-red-500/[0.05] p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-red-400 to-rose-400 px-3 py-0.5 text-xs font-bold text-white">
              Most Popular
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Pro</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$19</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Unlimited invoicing with QuickBooks API integration and automatic syncing.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited invoices
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                QuickBooks API integration
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Chart of accounts mapping
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Payment reconciliation
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                BAS-ready GST exports
              </li>
            </ul>
            <Link href="/signup">
              <Button size="md" className="w-full">Start Pro — 14-Day Trial</Button>
            </Link>
          </div>

          {/* Premium */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-lg font-bold text-white mb-1">Premium</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$39</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Multi-business invoicing with advanced QuickBooks sync and priority support.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Everything in Pro
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Multiple business profiles
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Automatic daily QBO sync
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Client record sync
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
            </ul>
            <Link href="/signup">
              <Button variant="secondary" size="md" className="w-full">Start Premium</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          QuickBooks integration FAQ
        </h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-red-400 transition-colors list-none flex justify-between items-center">
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
          Premium invoicing that{' '}
          <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
            syncs to QuickBooks
          </span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Stop fighting QuickBooks&apos; invoice editor. Create professional invoices in InvoiceFlow and let
          everything sync to QBO automatically. Start free, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — QuickBooks Sync Included</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="secondary" size="lg">View Pricing</Button>
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
