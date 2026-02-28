import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Export Invoices to Google Sheets — InvoiceFlow',
  description:
    'Export invoices, payments, and client data to Google Sheets automatically. Custom reports, pivot tables, and real-time sync. Built for Australian freelancers and sole traders.',
  alternates: { canonical: '/integrations/google-sheets' },
  keywords: [
    'export invoices google sheets',
    'google sheets invoice tracking',
    'invoice spreadsheet integration',
    'google sheets invoicing template',
    'export invoice data spreadsheet australia',
    'freelance income tracking google sheets',
    'invoice reporting google sheets',
  ],
  openGraph: {
    title: 'Export Invoices to Google Sheets — InvoiceFlow',
    description:
      'Export invoices, payments, and client data to Google Sheets automatically. Custom reports, pivot tables, and real-time sync. Built for Australian freelancers and sole traders.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Integrations', item: 'https://invoiceflow-teal.vercel.app/integrations' },
    { '@type': 'ListItem', position: 3, name: 'Google Sheets', item: 'https://invoiceflow-teal.vercel.app/integrations/google-sheets' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What invoice data can I export to Google Sheets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every field — invoice number, client name, ABN, amounts (ex-GST, GST, total), payment status, due date, date paid, payment method, line items, notes. Data is structured for easy pivot tables and reporting. Export all invoices or filter by date range, client, or status.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does InvoiceFlow sync to Google Sheets in real time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On Pro and Premium plans, InvoiceFlow pushes updates to your connected Google Sheet automatically when invoices are created, sent, paid, or overdue. Free tier supports manual CSV export that imports into Google Sheets in one click. Both options maintain consistent column formatting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I build custom reports in Google Sheets from InvoiceFlow data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The structured export format is designed for Google Sheets pivot tables, charts, and formulas. Common reports include monthly revenue by client, quarterly GST summaries for BAS, payment aging analysis, and cash flow projections. Template spreadsheets with pre-built formulas are included.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Google Sheets export help with BAS and tax time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The export includes pre-calculated GST columns (ex-GST amount, GST amount, total) and date fields that align with BAS quarters. Your accountant or BAS agent can filter by quarter, check GST totals, and reconcile against your Activity Statement in minutes instead of hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data secure when exporting to Google Sheets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow uses Google\'s OAuth 2.0 for authentication — we never see your Google password. Data is encrypted in transit via TLS 1.3. You choose exactly which Google Sheet to connect, and can revoke access at any time from your Google Account settings. Export permissions are read/write to a single nominated spreadsheet only.',
      },
    },
  ],
};

const painPoints = [
  { pain: 'Manually copying invoice totals into a spreadsheet every week', fix: 'One-click export pushes every invoice field to Google Sheets automatically' },
  { pain: 'No way to create custom reports from your invoicing data', fix: 'Full data export designed for pivot tables, charts, and custom formulas' },
  { pain: 'Spending hours preparing BAS and tax summaries from scattered records', fix: 'Pre-calculated GST columns and quarterly filters — BAS prep in minutes, not hours' },
  { pain: 'Client asking for a payment history report and having to dig through emails', fix: 'Filter by client in Google Sheets and share a professional payment summary instantly' },
];

const capabilities = [
  {
    title: 'One-Click Export',
    desc: 'Export all invoices to a nominated Google Sheet with one click. Structured columns, consistent formatting, ready for pivot tables.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Sync (Pro)',
    desc: 'Automatic push updates. When an invoice is created, sent, paid, or goes overdue — your Google Sheet updates instantly.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: 'Pre-Built Templates',
    desc: 'Template spreadsheets with revenue dashboards, GST summaries, client payment histories, and cash flow projections. Import and customise.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'BAS-Ready Columns',
    desc: 'Every export includes ex-GST, GST amount, and total columns aligned with ATO BAS quarters. Your accountant will thank you.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'Custom Filters',
    desc: 'Export all invoices or filter by date range, client, status (paid, unpaid, overdue), or amount. Get exactly the data you need.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
  },
  {
    title: 'Shareable Reports',
    desc: 'Share your Google Sheet with your accountant, bookkeeper, or business partner. Read-only or edit permissions. Real-time collaboration built in.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
];

const keyStats = [
  { value: '2B+', label: 'Google Sheets users worldwide' },
  { value: '1 click', label: 'Export all invoices to your spreadsheet' },
  { value: '< 30 sec', label: 'Average export time for 500+ invoices' },
  { value: '100%', label: 'GST-ready column formatting for ATO compliance' },
];

const comparisonFeatures = [
  { feature: 'One-click export', invoiceflow: true, xero: true, freshbooks: true, myob: false },
  { feature: 'Real-time sync', invoiceflow: true, xero: true, freshbooks: 'Manual only', myob: false },
  { feature: 'Pre-built templates', invoiceflow: true, xero: false, freshbooks: false, myob: false },
  { feature: 'BAS-ready columns', invoiceflow: true, xero: true, freshbooks: false, myob: 'Partial' },
  { feature: 'Free tier', invoiceflow: true, xero: false, freshbooks: false, myob: false },
  { feature: 'Custom filters', invoiceflow: true, xero: true, freshbooks: true, myob: false },
];

const personaLinks = [
  { name: 'Accountants', href: '/for/accountants', desc: 'Export client invoices to Sheets for reconciliation' },
  { name: 'Consultants', href: '/for/consultants', desc: 'Track retainer billing and revenue in spreadsheets' },
  { name: 'Sole Traders', href: '/for/sole-traders', desc: 'Simple BAS prep with GST-ready exports' },
  { name: 'Freelancers', href: '/for/freelancers', desc: 'Custom income reports and cash flow tracking' },
  { name: 'Coaches', href: '/for/coaches', desc: 'Session revenue tracking and package billing analysis' },
  { name: 'IT Consultants', href: '/for/it-consultants', desc: 'Time billing summaries and project profitability' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create invoices then export to Sheets' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST amounts for your spreadsheet' },
  { name: 'Profit & Loss Generator', href: '/tools/profit-loss-generator', desc: 'Generate P&L statements from invoice data' },
  { name: 'Annual Revenue Report', href: '/tools/annual-revenue-report', desc: 'Build annual reports from exported data' },
  { name: 'Payment Tracking', href: '/features/payment-tracking', desc: 'Track payment status before exporting' },
  { name: 'Expense Tracking', href: '/features/expense-tracking', desc: 'Complete income and expense picture' },
];

export default function GoogleSheetsIntegrationPage() {
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
        <div className="inline-block rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-1.5 text-sm font-medium text-lime-400 mb-8">
          Google Sheets Integration
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Export your invoices to{' '}
          <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
            Google Sheets
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Push every invoice, payment, and client record into a Google Sheet with one click. Build custom reports, pivot tables, and BAS summaries — all from your real invoicing data. No more manual spreadsheet entry.
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
        <h2 className="text-3xl font-bold text-center mb-4">The reporting problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Most freelancers have invoicing data locked inside their tool with no easy way to analyse it. When BAS is due or a client asks for a payment summary, it turns into hours of manual work.
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
                <span className="text-lime-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-lime-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Everything you need to export and report</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          InvoiceFlow connects directly with Google Sheets via OAuth. Your data, your spreadsheet, your reports.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.title} className="rounded-2xl border border-lime-500/30 bg-lime-500/10 p-6 hover:bg-lime-500/[0.15] transition-colors">
              <div className="inline-flex items-center justify-center rounded-xl bg-lime-500/10 p-3 text-lime-400 mb-4">
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
        <h2 className="text-3xl font-bold text-center mb-4">Google Sheets by the numbers</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Google Sheets is the world&apos;s most accessible spreadsheet tool. When you export your invoices there, you unlock unlimited reporting power with zero learning curve.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyStats.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">How InvoiceFlow + Sheets compares</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Every major invoicing tool offers some export functionality. The difference is format quality, templates, and what you pay for the platform.
        </p>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-5 border-b border-white/5 bg-white/[0.03]">
            <div className="py-4 px-4 text-sm font-medium text-slate-400">Feature</div>
            <div className="py-4 px-4 text-sm font-medium text-lime-400">InvoiceFlow + Sheets</div>
            <div className="py-4 px-4 text-sm font-medium text-slate-400">Xero + Sheets</div>
            <div className="py-4 px-4 text-sm font-medium text-slate-400">FreshBooks + Sheets</div>
            <div className="py-4 px-4 text-sm font-medium text-slate-400">MYOB + Sheets</div>
          </div>
          {/* Table rows */}
          {comparisonFeatures.map((row, i) => (
            <div key={i} className="grid grid-cols-5 border-b border-white/5 last:border-0">
              <div className="py-3 px-4 text-sm text-slate-400">{row.feature}</div>
              <div className="py-3 px-4 text-sm font-medium text-lime-300 bg-lime-500/5">
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
            </div>
          ))}
          {/* Platform cost row */}
          <div className="grid grid-cols-5 bg-white/[0.03] border-t border-white/10">
            <div className="py-4 px-4 text-sm font-medium text-white">Platform cost</div>
            <div className="py-4 px-4 text-sm font-bold text-lime-400 bg-lime-500/5">From $0/mo</div>
            <div className="py-4 px-4 text-sm text-slate-400">From $35/mo</div>
            <div className="py-4 px-4 text-sm text-slate-400">From $24/mo</div>
            <div className="py-4 px-4 text-sm text-slate-400">From $34/mo</div>
          </div>
        </div>
      </section>

      {/* Persona Links */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Google Sheets exports for every profession</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Whether you need BAS summaries, client revenue reports, or cash flow projections — exporting to Sheets gives you full control over your data.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaLinks.map((persona) => (
            <Link
              key={persona.name}
              href={persona.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-lime-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-lime-400 transition-colors mb-1">
                {persona.name}
              </h3>
              <p className="text-xs text-slate-500">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools to pair with your exports</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-lime-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-lime-400 transition-colors">{tool.name}</h3>
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
        <h2 className="text-3xl font-bold mb-4">Simple pricing — Google Sheets export included on every plan</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free with manual exports. Upgrade for real-time sync and unlimited invoices.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, manual CSV export, basic tracking, BAS-ready columns</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-lime-500/30 bg-lime-500/5 p-6 ring-1 ring-lime-500/20">
            <div className="text-xs text-lime-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, real-time sync, pre-built templates, custom filters</p>
            <Link href="/signup"><Button size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Premium</h3>
            <div className="text-3xl font-bold text-white mb-3">$39<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Multi-business, API access, white-label invoices, priority support</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Google Sheets integration FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-lime-400 transition-colors list-none flex justify-between items-center">
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
          Stop copying data manually,{' '}
          <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
            start exporting to Sheets
          </span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Every hour you spend copying invoice totals into a spreadsheet is an hour you could be billing. Connect InvoiceFlow to Google Sheets and let your data flow automatically.
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
