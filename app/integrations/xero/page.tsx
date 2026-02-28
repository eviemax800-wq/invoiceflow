import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Export to Xero — Seamless Accounting Integration — InvoiceFlow',
  description:
    'Export your invoices, payments, and GST data from InvoiceFlow to Xero with one click. Built for Australian freelancers who want simple invoicing without giving up their accountant\'s favourite platform.',
  keywords: [
    'xero invoicing integration',
    'export invoices to xero',
    'xero invoice import',
    'invoicing software with xero export',
    'xero alternative with export',
    'xero csv export invoices',
    'xero integration australia',
    'invoicing app xero compatible',
  ],
  alternates: { canonical: '/integrations/xero' },
  openGraph: {
    title: 'Export to Xero — Seamless Accounting Integration — InvoiceFlow',
    description:
      'Invoice simply with InvoiceFlow, export seamlessly to Xero. One-click CSV and API export with GST data, payment matching, and chart of accounts mapping. Built for Australian freelancers.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Integrations', item: 'https://invoiceflow-teal.vercel.app/integrations' },
    { '@type': 'ListItem', position: 3, name: 'Xero Export', item: 'https://invoiceflow-teal.vercel.app/integrations/xero' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does the InvoiceFlow to Xero export work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers two export methods. The CSV export generates a Xero-compatible CSV file that you can import directly into Xero via their invoice import tool — no technical knowledge required. The API integration connects your InvoiceFlow and Xero accounts directly, allowing one-click syncing of invoices, contacts, and payment data. Both methods include full GST breakdowns with G1/G3 categorisation for BAS reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What data is included in the Xero export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The export includes all invoice details: invoice number, date, due date, client name, contact details, line items with descriptions and amounts, GST amounts and categories (G1 for taxable sales, G3 for GST-free exports), payment status (paid, unpaid, overdue), payment dates, and chart of accounts mapping. Your accountant gets everything they need to reconcile without chasing you for missing details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does InvoiceFlow replace Xero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — and that\'s the point. InvoiceFlow handles the invoicing side (creating, sending, tracking, and chasing invoices) with a simple interface built specifically for freelancers. Xero handles the accounting side (bookkeeping, BAS lodgement, financial reporting, payroll). Think of it as best of both worlds: you get InvoiceFlow\'s clean invoicing UX for your daily work, and your accountant gets the Xero data they need for compliance and reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Xero sync real-time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With the API integration, you can sync on-demand with a single click or set up automatic daily syncing. New invoices, payment updates, and contact changes are pushed to Xero within minutes of the sync trigger. CSV exports are generated on-demand whenever you need them — most freelancers export monthly before their accountant does the BAS, or quarterly if they\'re on quarterly reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my accountant use the Xero export directly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. The export is designed with accountants in mind. You can generate a Xero-compatible export report and share it directly with your accountant or bookkeeper via email or a shareable link. The report includes all the data they need for BAS preparation: total sales, GST collected, GST-free exports, and payment reconciliation. Many accountants prefer this because it arrives pre-categorised and ready to import, saving them manual data entry time.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Xero is powerful but overkill for just sending invoices',
    solution: 'InvoiceFlow for invoicing, Xero for accounting — the best of both worlds',
  },
  {
    problem: 'Double-entry when you invoice in one tool and reconcile in another',
    solution: 'One-click export sends invoices, payments, and GST data to Xero',
  },
  {
    problem: 'Your accountant insists on Xero but you hate the invoicing UX',
    solution: 'Keep your accountant happy with Xero exports while using an interface you love',
  },
  {
    problem: 'Paying $35/month for Xero when you really only need invoicing',
    solution: 'Start free with InvoiceFlow, export to your accountant\'s Xero when needed',
  },
];

const capabilities = [
  {
    title: 'One-Click Export',
    description: 'Export to Xero via CSV or direct API integration. No technical setup required — connect once and sync with a single click whenever you need to.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
  },
  {
    title: 'GST Data Included',
    description: 'Every export includes BAS-ready GST breakdowns with G1 (taxable sales) and G3 (GST-free exports) categorisation. Your accountant will thank you.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Contact Sync',
    description: 'Client details flow from InvoiceFlow to Xero automatically. Names, ABNs, email addresses, and payment terms — no re-entering contact info.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Payment Matching',
    description: 'Paid, unpaid, and overdue statuses sync to Xero so your books always reflect reality. No more chasing your accountant to mark invoices as paid.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Chart of Accounts',
    description: 'Map InvoiceFlow line items to your Xero chart of accounts codes. Revenue goes exactly where your accountant expects it — no manual reclassification.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    title: 'Accountant Access',
    description: 'Share export reports directly with your accountant or bookkeeper via email or a shareable link. They get pre-categorised, import-ready data every time.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
];

const comparisonRows = [
  { feature: 'Simple invoicing UX', invoiceflowXero: true, xeroOnly: false, myobXero: false, freshbooksXero: true },
  { feature: 'Xero-compatible export', invoiceflowXero: true, xeroOnly: true, myobXero: false, freshbooksXero: true },
  { feature: 'Free invoicing tier', invoiceflowXero: true, xeroOnly: false, myobXero: false, freshbooksXero: false },
  { feature: 'GST compliance', invoiceflowXero: true, xeroOnly: true, myobXero: true, freshbooksXero: false },
  { feature: '100+ free tools', invoiceflowXero: true, xeroOnly: false, myobXero: false, freshbooksXero: false },
  { feature: 'AI-powered features', invoiceflowXero: true, xeroOnly: false, myobXero: false, freshbooksXero: false },
];

const keyNumbers = [
  { value: '78%', label: 'AU small businesses use Xero', description: 'The dominant accounting platform in Australia — and InvoiceFlow works with it' },
  { value: '$35/mo', label: 'Xero\'s cost', description: 'Saved by using InvoiceFlow for invoicing and only exporting to Xero' },
  { value: '30s', label: 'Export time', description: 'From InvoiceFlow to a Xero-ready file — one click, half a minute' },
  { value: '100%', label: 'GST data accuracy', description: 'G1 and G3 categories included in every export for BAS compliance' },
];

const personaPages = [
  { name: 'Accountants', href: '/for/accountants', desc: 'Recommend InvoiceFlow to clients and receive clean Xero-ready exports' },
  { name: 'Sole Traders', href: '/for/sole-traders', desc: 'Simple invoicing that syncs with your accountant\'s Xero' },
  { name: 'Contractors', href: '/for/contractors', desc: 'Invoice on-site, export to Xero for your bookkeeper to reconcile' },
  { name: 'Consultants', href: '/for/consultants', desc: 'Professional invoicing with seamless Xero accounting integration' },
  { name: 'Lawyers', href: '/for/lawyers', desc: 'Trust account invoicing that exports cleanly to Xero for compliance' },
  { name: 'IT Consultants', href: '/for/it-consultants', desc: 'Tech-forward invoicing with the Xero integration your accountant demands' },
];

const relatedTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Add, remove, or extract GST from any amount instantly' },
  { name: 'BAS Preparation Checklist', href: '/tools/bas-preparation', desc: 'Step-by-step BAS prep guide for Australian freelancers' },
  { name: 'Tax Deduction Finder', href: '/tools/tax-deduction-finder', desc: 'Find every deduction you\'re entitled to claim' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create GST-compliant invoices in seconds' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Find your ideal hourly rate with tax built in' },
  { name: 'PAYG Calculator', href: '/tools/payg-calculator', desc: 'Calculate PAYG withholding and instalment amounts' },
];

export default function XeroIntegrationPage() {
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
        <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 mb-8">
          Xero Export
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Invoice simply, export to{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            Xero seamlessly
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Use InvoiceFlow&apos;s clean, simple invoicing interface for your daily work — then export everything to
          Xero for your accountant with one click. Best of both worlds: an invoicing tool you actually enjoy
          using, and the accounting platform your bookkeeper already knows.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — Export to Xero</Button>
          </Link>
          <Link href="/tools/gst-calculator">
            <Button variant="secondary" size="lg">Try the GST Calculator</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Free tier: 5 invoices/month, Xero export included on all plans
        </p>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          You shouldn&apos;t need a full accounting suite just to send invoices
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Xero is brilliant for accounting. But for freelancers who just need to create, send, and track invoices? It&apos;s like driving a semi-trailer to the corner shop. Here&apos;s a better way.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-emerald-500/20 transition-colors"
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
                    <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-emerald-300 font-semibold">{item.solution}</p>
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
          Everything your accountant needs, nothing you don&apos;t
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          InvoiceFlow&apos;s Xero export is designed for Australian freelancers and their accountants. Every detail your bookkeeper expects is included — GST categories, payment status, account codes, and more.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-emerald-500/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-emerald-400 to-green-400 p-3 text-white shrink-0">
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
          The Xero integration by the numbers
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Why Australian freelancers are choosing InvoiceFlow for invoicing and keeping Xero for accounting.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyNumbers.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center hover:border-emerald-500/20 transition-colors"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="font-semibold text-white text-sm mb-1">{stat.label}</p>
              <p className="text-xs text-slate-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Competitor Comparison Table */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          How InvoiceFlow + Xero compares
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need to choose between simple invoicing and proper accounting. InvoiceFlow + Xero gives you both — at a fraction of the cost.
        </p>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
                  <th className="p-4 text-center">
                    <span className="text-emerald-400 font-bold">InvoiceFlow + Xero</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Free / $19</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">Xero Only</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$35/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">MYOB + Xero</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$25 + $35/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">FreshBooks + Xero</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$24 + $35/mo</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    <td className="p-4 text-slate-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.invoiceflowXero ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.xeroOnly ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.myobXero ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.freshbooksXero ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
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
          Who uses InvoiceFlow with Xero?
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          If your accountant uses Xero (and in Australia, there&apos;s a 78% chance they do), InvoiceFlow&apos;s export keeps everyone happy.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaPages.map((persona) => (
            <Link
              key={persona.href}
              href={persona.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
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
          Free accounting and invoicing tools
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
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
          Start free. Upgrade when you grow. Xero export is available on every plan — because your accountant shouldn&apos;t be a premium feature.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-lg font-bold text-white mb-1">Free</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$0</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Perfect for freelancers who invoice occasionally and need Xero-compatible exports.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                5 invoices per month
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Xero CSV export
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                GST compliance built in
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.05] p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400 to-green-400 px-3 py-0.5 text-xs font-bold text-slate-900">
              Most Popular
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Pro</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$19</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Unlimited invoicing with Xero API integration and automatic syncing.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited invoices
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Xero API integration
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Chart of accounts mapping
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Payment reminders
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
            <p className="text-sm text-slate-400 mb-6">Multi-business invoicing with advanced Xero integration and accountant access.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Everything in Pro
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Multiple business profiles
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Accountant sharing portal
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Automatic daily Xero sync
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
          Xero integration FAQ
        </h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors list-none flex justify-between items-center">
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
          Simple invoicing that{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            works with Xero
          </span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join Australian freelancers who use InvoiceFlow for beautiful, simple invoicing and export seamlessly to Xero for accounting. Your accountant will love you for it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — Xero Export Included</Button>
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
