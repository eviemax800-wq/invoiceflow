import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Bad Debt: How to Write Off, Recover & Prevent Unpaid Invoices in Australia — InvoiceFlow',
  description:
    'What is a bad debt? Learn how to write off bad debts for tax in Australia, claim GST adjustments, recover unpaid invoices, and prevent bad debts as a freelancer or sole trader. ATO rules explained for 2025-26.',
  keywords: [
    'bad debt write off australia',
    'bad debt tax deduction',
    'writing off bad debt ATO',
    'bad debt recovery australia',
    'unpaid invoice write off',
    'bad debt GST adjustment',
    'bad debt deduction sole trader',
    'overdue invoice bad debt',
    'bad debt provision freelancer',
    'writing off invoices australia',
    'bad debt collection',
    'ATO bad debt rules',
  ],
  alternates: { canonical: '/glossary/bad-debt' },
  openGraph: {
    title: 'Bad Debt: How to Write Off, Recover & Prevent Unpaid Invoices in Australia — InvoiceFlow',
    description:
      'Everything you need to know about bad debts: definition, ATO write-off rules, GST adjustments, debt recovery options, prevention strategies, and how to manage bad debts as a freelancer in Australia.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/bad-debt',
    type: 'article',
  },
};

const BASE_URL = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${BASE_URL}/glossary` },
    { '@type': 'ListItem', position: 3, name: 'Bad Debt', item: `${BASE_URL}/glossary/bad-debt` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I claim a tax deduction for bad debts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you previously included the income in your tax return and the debt is genuinely unrecoverable, you can claim a deduction in the year you write it off. The deduction is claimed under Section 25-35 of the Income Tax Assessment Act 1997. You must be able to demonstrate that you took reasonable steps to recover the debt and that it is genuinely bad — not merely overdue. If you use cash-basis accounting (common for sole traders), you can only claim a deduction if you have already reported the income.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before an unpaid invoice becomes a bad debt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no fixed timeframe set by the ATO. A debt becomes "bad" when you have evidence it is unrecoverable — for example, the client has gone bankrupt, the company has been deregistered, the client has disappeared and cannot be contacted, or you have exhausted all reasonable recovery options. In practice, most businesses assess debts for write-off at the 90-180 day mark, but the key factor is evidence of unrecoverability, not simply how many days the invoice has been overdue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim GST back on a bad debt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you are GST-registered and have already remitted GST on the invoice. You can claim a GST adjustment equal to 1/11th of the bad debt amount, provided the debt is written off within 12 months of the payment becoming overdue. Report the adjustment on your BAS under label 1C (Other GST-free sales / Adjustments). For example, if you write off a $5,500 (inc. GST) invoice, you can claim a $500 GST adjustment on your next BAS.',
      },
    },
    {
      '@type': 'Question',
      name: 'What evidence do I need for a bad debt write-off?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need documentation showing: (1) the original invoice and proof it was sent to the client, (2) evidence of recovery attempts — emails, letters of demand, phone call records, debt collector engagement, (3) evidence the debtor cannot pay — bankruptcy notice, company deregistration from ASIC, returned mail, disconnected phone numbers, or a debt collector report confirming the debt is unrecoverable. The ATO expects you to have taken "reasonable steps" to recover the debt before claiming a deduction. Keep all documentation for at least 5 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use a debt collector or write off the debt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the size of the debt and the likelihood of recovery. Debt collection agencies typically charge 10-30% of the recovered amount as commission. For debts under $500-$1,000, the cost of recovery often exceeds the benefit — writing off and claiming a tax deduction may be more practical. For larger debts ($2,000+), engaging a debt collector or pursuing the matter through small claims (NCAT in NSW, VCAT in Victoria, QCAT in Queensland) is usually worth the effort. Always compare the cost of recovery against the potential return before deciding.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-bad-debt', label: '1. What Is a Bad Debt?' },
  { id: 'how-to-write-off', label: '2. How to Write Off a Bad Debt (ATO Rules)' },
  { id: 'gst-adjustments', label: '3. Bad Debt and GST Adjustments' },
  { id: 'recovering-bad-debts', label: '4. Recovering Bad Debts Before Writing Off' },
  { id: 'preventing-bad-debts', label: '5. Preventing Bad Debts' },
  { id: 'invoiceflow-bad-debt', label: '6. Managing Bad Debts with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate interest and penalties on overdue invoices under Australian law before deciding to write off.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/overdue-invoice-follow-up-generator',
    name: 'Overdue Invoice Follow-Up Generator',
    description: 'Generate professional follow-up emails for overdue invoices at every escalation stage.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    href: '/tools/letter-of-demand-generator',
    name: 'Letter of Demand Generator',
    description: 'Create a formal letter of demand for unpaid invoices — the critical step before debt recovery.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/debt-recovery-cost-calculator',
    name: 'Debt Recovery Cost Calculator',
    description: 'Compare the cost of debt recovery vs writing off — find out which option saves you more money.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays and prevent invoices from becoming bad debts.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete beginner guide to creating invoices, setting terms, and managing payments correctly.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'Understanding GST obligations including bad debt adjustments, BAS reporting, and input tax credits.',
  },
];

export default function BadDebtGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-red-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Bad Debt</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Cash Flow &amp; Payments
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Bad Debt:{' '}
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              Write Off, Recover &amp; Prevent Unpaid Invoices
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A bad debt is money owed to you that you reasonably believe will never be collected. Whether a client has gone bankrupt, disappeared, or simply refuses to pay &mdash; knowing how to write off, recover, and prevent bad debts is essential for every freelancer and small business owner in Australia.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">$26B</span>
              <div>
                <p className="text-white font-medium text-sm">Annual Unpaid Invoices</p>
                <p className="text-gray-400 text-sm">Australian small businesses are collectively owed $26B in unpaid invoices</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">3-5%</span>
              <div>
                <p className="text-white font-medium text-sm">Average Bad Debt Rate</p>
                <p className="text-gray-400 text-sm">Percentage of revenue freelancers typically lose to bad debts each year</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">1/11</span>
              <div>
                <p className="text-white font-medium text-sm">GST Adjustment</p>
                <p className="text-gray-400 text-sm">GST-registered businesses can claim 1/11th of a bad debt as a GST adjustment</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">12mo</span>
              <div>
                <p className="text-white font-medium text-sm">GST Claim Window</p>
                <p className="text-gray-400 text-sm">Bad debt GST adjustment must be claimed within 12 months of overdue date</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Table of Contents</h2>
          <nav className="grid sm:grid-cols-2 gap-2">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-red-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

        {/* Section 1: What Is a Bad Debt? */}
        <section id="what-is-bad-debt">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Bad Debt?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A bad debt is an <strong className="text-white">amount owed to you that you reasonably believe will never be collected</strong>. It&apos;s the invoice you sent, the work you delivered, and the payment that never came &mdash; and at some point, you have to accept that it never will. In accounting terms, a bad debt is a receivable that has been deemed unrecoverable and must be written off from your books.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers and small business owners, bad debts are an unfortunate reality of doing business. Not every client will pay. The Australian Small Business and Family Enterprise Ombudsman estimates that <strong className="text-white">$26 billion in unpaid invoices</strong> are owed to small businesses at any given time, and the average freelancer loses approximately <strong className="text-white">3-5% of their annual revenue</strong> to debts that are never collected.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A debt typically becomes &quot;bad&quot; when one or more of the following situations occurs:
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Client goes bankrupt or insolvent</p>
                  <p className="text-gray-400 text-sm">The client&apos;s company has been placed into administration, liquidation, or deregistered from ASIC. There are no assets to distribute to creditors.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Client disappears or cannot be contacted</p>
                  <p className="text-gray-400 text-sm">Emails bounce, phone numbers are disconnected, registered address is vacant. The client has effectively vanished with no forwarding details.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.694 0-1.294.497-1.394 1.184a27.11 27.11 0 00-.16 1.542m13.5 2.544c0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96.417-.814.7-1.7.811-2.64.067-.563.209-1.116.411-1.64L15.4 8.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Client refuses to pay</p>
                  <p className="text-gray-400 text-sm">The client explicitly refuses payment, often citing dissatisfaction with work that was delivered to brief. Without a strong contract, recovery becomes difficult.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Dispute is unresolvable</p>
                  <p className="text-gray-400 text-sm">A genuine dispute over scope, quality, or deliverables has reached a stalemate. Neither mediation nor negotiation has resolved the matter.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Cost of recovery exceeds the debt</p>
                  <p className="text-gray-400 text-sm">Legal fees, debt collector commissions, and your time investment would cost more than the outstanding amount. It&apos;s simply not economically rational to pursue it.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Bad Debt vs Doubtful Debt</p>
              <p className="text-gray-400 text-sm">
                A <strong className="text-gray-200">bad debt</strong> is one you have determined is unrecoverable &mdash; it&apos;s written off from your books and claimed as a deduction. A <strong className="text-gray-200">doubtful debt</strong> is one you suspect may not be paid but haven&apos;t yet confirmed as unrecoverable. Larger businesses create a &quot;provision for doubtful debts&quot; (an estimate of expected bad debts), but most freelancers deal with bad debts on a case-by-case basis when they become genuinely unrecoverable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: How to Write Off a Bad Debt (ATO Rules) */}
        <section id="how-to-write-off">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Write Off a Bad Debt (ATO Rules)</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Writing off a bad debt in Australia is governed by <strong className="text-white">Section 25-35 of the Income Tax Assessment Act 1997</strong>. The rules are straightforward but there are specific requirements you must meet to claim a legitimate deduction. Getting this wrong can trigger an ATO audit, so follow the process carefully.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Requirements for a Bad Debt Deduction</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Previously included as assessable income</p>
                    <p className="text-gray-400 text-sm">The amount must have been included in your assessable income in the current or a previous income year. If you use cash-basis accounting and never received the payment, you may not have declared the income &mdash; in which case, there is no deduction to claim because you never reported the revenue.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">The debt must be actually bad</p>
                    <p className="text-gray-400 text-sm">An overdue invoice is not automatically a bad debt. The ATO requires evidence that the debt is <strong className="text-gray-200">genuinely unrecoverable</strong> &mdash; not just slow to be paid. You need to demonstrate that you have taken reasonable steps to recover the money and have concluded it cannot be collected.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Reasonable recovery steps documented</p>
                    <p className="text-gray-400 text-sm">You must have taken and documented reasonable steps to recover the debt. This includes sending reminders, making phone calls, issuing a formal letter of demand, and potentially engaging a debt collector. The ATO expects a genuine effort, not a token one.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Step-by-Step Write-Off Process</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/50">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Take reasonable recovery steps</p>
                    <p className="text-gray-400 text-sm">Send at least 2-3 follow-up reminders, make a phone call, and send a formal letter of demand. Document every attempt with dates, method, and outcome. If the debt is large enough, engage a debt collection agency.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/50">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Determine the debt is genuinely unrecoverable</p>
                    <p className="text-gray-400 text-sm">Gather evidence: bankruptcy notice, ASIC deregistration, returned mail, debt collector&apos;s report, or documentation of exhausted recovery options. The determination must be honest and defensible.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/50">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Write off in your records</p>
                    <p className="text-gray-400 text-sm">Formally record the write-off in your accounting system or records. The debt should be removed from accounts receivable and recorded as a bad debt expense. Keep the original invoice and all correspondence filed for at least 5 years.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/50">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Claim the deduction in your tax return</p>
                    <p className="text-gray-400 text-sm">Claim the bad debt deduction in the financial year you determine the debt is bad &mdash; not the year the invoice was originally issued. Include it as an &quot;other deduction&quot; in your tax return. Your tax agent can help ensure it&apos;s reported correctly.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Timing Is Critical</p>
              <p className="text-gray-400 text-sm">
                You claim the bad debt deduction in the <strong className="text-gray-200">financial year you determine the debt is bad</strong>, not the year the invoice was issued. For example, if you invoiced a client in October 2024 and determined the debt was unrecoverable in February 2026, you would claim the deduction in your 2025-26 tax return. Do not backdate write-offs &mdash; the ATO requires you to claim in the correct income year.
              </p>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-4">
              <p className="text-rose-400 font-medium mb-2">Cash vs Accruals Basis &mdash; Important Distinction</p>
              <p className="text-gray-400 text-sm">
                If you use <strong className="text-gray-200">cash-basis accounting</strong> (common for sole traders and freelancers under $10M turnover), you only report income when you actually receive payment. If the client never paid, you never reported the income &mdash; so there is <strong className="text-gray-200">no bad debt deduction to claim</strong> because you never declared the revenue. The bad debt deduction under Section 25-35 only applies when you have previously included the amount as assessable income, which happens automatically under <strong className="text-gray-200">accruals-basis accounting</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Bad Debt and GST Adjustments */}
        <section id="gst-adjustments">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Bad Debt and GST Adjustments</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              If you are <strong className="text-white">GST-registered</strong> and have already remitted GST on an invoice that becomes a bad debt, you are entitled to claim back the GST component. This is known as a <strong className="text-white">bad debt GST adjustment</strong> and is separate from the income tax deduction for the bad debt itself.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When you issue a tax invoice that includes GST, you report that GST on your BAS and remit it to the ATO &mdash; even before the client has paid you. If the client then fails to pay, you have effectively paid GST on income you never received. The bad debt adjustment allows you to recover that GST.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">How the GST Adjustment Works</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-red-400 font-bold flex-shrink-0 w-28">Adjustment amount</span>
                  <span className="text-gray-400">1/11th of the bad debt amount (the GST component)</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-red-400 font-bold flex-shrink-0 w-28">Time limit</span>
                  <span className="text-gray-400">Must be written off within 12 months of the payment becoming overdue</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-red-400 font-bold flex-shrink-0 w-28">Where to report</span>
                  <span className="text-gray-400">BAS label 1C (Other GST-free sales / Adjustments)</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-red-400 font-bold flex-shrink-0 w-28">Requirement</span>
                  <span className="text-gray-400">You must have previously remitted the GST on the original invoice</span>
                </div>
              </div>
            </div>

            {/* Worked Example */}
            <div className="rounded-2xl bg-gradient-to-br from-red-500/5 to-rose-500/5 border border-red-500/20 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                </svg>
                Worked Example
              </h4>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  You are a GST-registered freelance web developer. You completed a website build for a client and issued a tax invoice for <strong className="text-white">$5,500 (including $500 GST)</strong>. You reported the $500 GST on your BAS and remitted it to the ATO. The client never paid and has since gone into liquidation.
                </p>
                <div className="rounded-xl bg-gray-900/50 border border-gray-700/50 overflow-hidden">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-700/50">
                      <tr className="bg-gray-800/30">
                        <td className="px-5 py-3 text-gray-300 text-sm font-medium">Invoice amount (inc. GST)</td>
                        <td className="px-5 py-3 text-white text-sm font-bold text-right">$5,500.00</td>
                      </tr>
                      <tr className="bg-gray-800/30">
                        <td className="px-5 py-3 text-gray-300 text-sm font-medium">GST component (1/11th)</td>
                        <td className="px-5 py-3 text-white text-sm font-bold text-right">$500.00</td>
                      </tr>
                      <tr className="bg-gray-800/30">
                        <td className="px-5 py-3 text-gray-300 text-sm font-medium">Income component (ex. GST)</td>
                        <td className="px-5 py-3 text-white text-sm font-bold text-right">$5,000.00</td>
                      </tr>
                      <tr className="bg-red-500/5">
                        <td className="px-5 py-3 text-red-400 text-sm font-medium">Bad debt income deduction</td>
                        <td className="px-5 py-3 text-red-400 text-sm font-bold text-right">$5,000.00</td>
                      </tr>
                      <tr className="bg-red-500/5">
                        <td className="px-5 py-3 text-red-400 text-sm font-medium">GST adjustment (BAS label 1C)</td>
                        <td className="px-5 py-3 text-red-400 text-sm font-bold text-right">$500.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-400 text-sm">
                  In this example, you claim a <strong className="text-gray-200">$5,000 bad debt deduction</strong> in your income tax return for the financial year the debt was written off, plus a <strong className="text-gray-200">$500 GST adjustment</strong> on your next BAS. The total recovery through the tax system is the tax benefit on $5,000 (at your marginal tax rate) plus the full $500 GST refund.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">12-Month Window</p>
              <p className="text-gray-400 text-sm">
                The GST adjustment must be claimed <strong className="text-gray-200">within 12 months</strong> of the payment becoming overdue. If you miss this window, you lose the ability to claim the GST back. This is a common mistake &mdash; freelancers often wait too long hoping the client will eventually pay, and by the time they write off the debt, the 12-month GST window has closed. Track your overdue invoices carefully and make timely decisions about write-offs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Recovering Bad Debts Before Writing Off */}
        <section id="recovering-bad-debts">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Recovering Bad Debts Before Writing Off</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Before writing off a debt, you should exhaust <strong className="text-white">reasonable recovery options</strong>. Not only does this maximise your chance of getting paid, but it also provides the documentation the ATO requires if you do eventually claim a bad debt deduction. The key is a structured escalation process &mdash; start friendly, get progressively firmer.
            </p>

            {/* Escalation Timeline */}
            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">7d</span>
                  </div>
                  <h4 className="text-white font-semibold">7 Days Overdue &mdash; Friendly Reminder</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Send a polite email reminder. Most late payments at this stage are simply forgotten or stuck in an approval queue. Keep the tone light: &quot;Just a friendly reminder that invoice #1234 was due on [date]. Could you let me know when payment is expected?&quot; Attach a copy of the original invoice for convenience. <strong className="text-gray-200">Over 60% of overdue invoices get paid after the first reminder.</strong>
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-yellow-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                    <span className="text-yellow-400 font-bold text-sm">14d</span>
                  </div>
                  <h4 className="text-white font-semibold">14 Days Overdue &mdash; Phone Call</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If the email reminder didn&apos;t work, pick up the phone. A direct conversation is much harder to ignore than an email. Ask for a specific commitment: &quot;When exactly can I expect payment?&quot; Get a date and write it down. If they cite cash flow issues, negotiate a payment plan &mdash; partial payment is better than no payment. Document the call: date, time, who you spoke to, and what was agreed.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-orange-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <span className="text-orange-400 font-bold text-sm">30d</span>
                  </div>
                  <h4 className="text-white font-semibold">30 Days Overdue &mdash; Formal Letter of Demand</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A letter of demand is a formal written notice that payment is required within a specified timeframe (usually 14 days from the date of the letter). It should include the invoice details, the total amount owing (including any accrued interest), and a clear statement that failure to pay will result in further action. A letter of demand is not a legal document in itself, but it is an essential step before legal proceedings and demonstrates to the ATO that you took reasonable recovery steps.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  You can use our <Link href="/tools/letter-of-demand-generator" className="text-red-400 hover:text-red-300 underline underline-offset-2">Letter of Demand Generator</Link> to create a professional, legally-structured letter in minutes.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">60d</span>
                  </div>
                  <h4 className="text-white font-semibold">60 Days Overdue &mdash; Debt Collector or Small Claims</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  At this stage, you have two main options: engage a <strong className="text-gray-200">debt collection agency</strong> or file a claim in a <strong className="text-gray-200">small claims tribunal</strong>. Debt collectors typically charge 10-30% commission on recovered amounts and handle the entire process for you. Small claims tribunals are a lower-cost option for disputes within their jurisdiction limits.
                </p>
                <div className="mt-4 rounded-lg bg-gray-900/50 p-4">
                  <p className="text-gray-300 text-sm font-medium mb-2">Small Claims Thresholds by State</p>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>NSW (NCAT)</span>
                      <span className="text-white font-medium">Up to $100,000</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>VIC (VCAT)</span>
                      <span className="text-white font-medium">Up to $15,000 (small claims track)</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>QLD (QCAT)</span>
                      <span className="text-white font-medium">Up to $75,000</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>SA (SACAT)</span>
                      <span className="text-white font-medium">Up to $12,000 (minor civil)</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>WA (Magistrates Court)</span>
                      <span className="text-white font-medium">Up to $75,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-600/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600/10 flex items-center justify-center">
                    <span className="text-red-500 font-bold text-sm">90d+</span>
                  </div>
                  <h4 className="text-white font-semibold">90+ Days Overdue &mdash; Write-Off Consideration</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If the debt collector has failed to recover the money, the client has gone bankrupt, or the cost of further pursuit exceeds the debt amount, it&apos;s time to seriously consider writing off the debt. At this point, you should have substantial documentation of your recovery attempts &mdash; emails, call logs, letters of demand, and any debt collector reports. This documentation becomes your evidence for claiming the ATO deduction.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">When Recovery Costs More Than the Debt</p>
              <p className="text-gray-400 text-sm">
                A common rule of thumb: if a debt collector charges 25% commission and the outstanding invoice is $800, you&apos;d pay $200 in commission to recover $600 net. Add in your time spent managing the process, and the real cost may exceed the benefit. For debts <strong className="text-gray-200">under $500-$1,000</strong>, it is often more cost-effective to write off the debt, claim the tax deduction, and invest your energy in paying clients. For debts over $2,000, recovery is almost always worth attempting.
              </p>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-4">
              <p className="text-rose-400 font-medium mb-2">Mediation as an Alternative</p>
              <p className="text-gray-400 text-sm">
                Before escalating to debt collectors or tribunals, consider <strong className="text-gray-200">mediation</strong>. Community justice centres in most states offer free or low-cost mediation services for business disputes. Mediation is faster, cheaper, and less adversarial than legal action. It works particularly well when the non-payment stems from a genuine dispute about scope or quality rather than an unwillingness to pay. In many cases, mediation resolves the matter within a single session.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Preventing Bad Debts */}
        <section id="preventing-bad-debts">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Preventing Bad Debts</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The best bad debt is one that <strong className="text-white">never happens</strong>. While you can&apos;t eliminate the risk entirely, you can dramatically reduce it by implementing these eight prevention strategies. Research shows that freelancers who collect deposits upfront have <strong className="text-white">60% fewer bad debts</strong> than those who invoice after delivery.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-xs">1</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Credit Checks Before Large Projects</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For projects worth $5,000 or more, run a basic credit check on the client or their company. ASIC company searches cost $9 and reveal the company&apos;s financial health, director history, and whether they have any outstanding debts or legal actions. Services like CreditorWatch and Dun &amp; Bradstreet offer detailed credit reports. A few dollars spent on due diligence can save you thousands in bad debts.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-xs">2</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Upfront Deposits (30-50%)</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Request a <strong className="text-gray-200">30-50% deposit</strong> before starting work on any project. This immediately reduces your bad debt exposure by half, provides working capital during the project, and confirms the client is financially committed. If a client refuses to pay a deposit, that&apos;s a red flag &mdash; they may be equally reluctant to pay the final invoice.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-xs">3</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Milestone Payments</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For larger projects, break payments into milestones tied to deliverables. A typical structure: 30% deposit, 30% at midpoint, 40% on completion. If the client stops paying at any milestone, you stop work &mdash; limiting your exposure to a fraction of the total project value rather than the entire amount.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-xs">4</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Clear Payment Terms in Contract</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every engagement should have a written contract that specifies: payment amount, due dates, accepted payment methods, late payment interest rate, and consequences of non-payment. A clear contract gives you legal standing if you need to pursue debt recovery. Verbal agreements are almost impossible to enforce.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-xs">5</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Invoice Promptly</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Send your invoice the <strong className="text-gray-200">same day</strong> you complete the work &mdash; or even before, if using milestone billing. Every day you delay invoicing is a day the client forgets about the project, a day their budget allocation might shift, and a day closer to cash flow problems. Prompt invoicing sets a professional tone and starts the payment clock immediately.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-xs">6</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Follow Up Immediately on Overdue Invoices</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The longer an invoice stays unpaid, the less likely it is to be collected. Research shows that the <strong className="text-gray-200">probability of collection drops significantly after 90 days</strong>. Send a reminder the day an invoice becomes overdue, not a week later. Early follow-up signals professionalism and prevents small delays from becoming bad debts.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-xs">7</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Stop Work on Overdue Accounts</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If a client has an overdue invoice, do not start new work for them until the outstanding payment is resolved. Continuing to work for a client who has not paid is the fastest way to turn a small bad debt into a large one. Include a &quot;stop work&quot; clause in your contract so both parties understand the consequence of late payment.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-xs">8</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Late Payment Interest Clause</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Include a late payment interest clause in your contract and on your invoices. The ATO&apos;s General Interest Charge (GIC) rate is approximately <strong className="text-gray-200">11.36% per annum</strong> (as of 2025-26), which is a reasonable benchmark. Even if you never enforce it, a stated interest charge motivates clients to prioritise your invoice and provides additional legal standing if you pursue recovery.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">The Numbers Don&apos;t Lie</p>
              <p className="text-gray-400 text-sm">
                Freelancers who collect deposits have <strong className="text-gray-200">60% fewer bad debts</strong> than those who invoice entirely on completion. Those who use automated reminders get paid an average of <strong className="text-gray-200">8-12 days faster</strong>. And those with clear contracts have a <strong className="text-gray-200">significantly higher success rate</strong> in debt recovery when they do need to escalate. Prevention is always cheaper than recovery.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Managing Bad Debts with InvoiceFlow */}
        <section id="invoiceflow-bad-debt">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Managing Bad Debts with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow gives you the <strong className="text-white">early warning system and automation tools</strong> to catch problem invoices before they become bad debts &mdash; and the reporting features to handle write-offs efficiently when they do happen. Every feature is designed with the freelancer&apos;s workflow in mind.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Aging Reports (30/60/90 Day)</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Visual aging reports that group your outstanding invoices by how long they&apos;ve been unpaid: current, 30 days, 60 days, and 90+ days overdue. Instantly see which invoices are at risk of becoming bad debts and where to focus your recovery efforts. Colour-coded from green to red so problem invoices are impossible to miss.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Automated Payment Reminders</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set up automatic payment reminders at intervals you choose &mdash; before the due date as a courtesy, on the due date, and at escalating intervals after. Professional, consistent reminder emails are sent without you lifting a finger. Removes the awkwardness of manual follow-ups and ensures no overdue invoice slips through the cracks.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Overdue Alerts</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Receive instant notifications when an invoice becomes overdue. InvoiceFlow tracks every invoice from the moment it&apos;s sent and alerts you the second a payment deadline is missed. Early notification means early action &mdash; and early action is the single biggest factor in preventing overdue invoices from becoming bad debts.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Payment Tracking</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track partial payments, payment plans, and full settlements against each invoice. When a client makes a part-payment, InvoiceFlow updates the outstanding balance automatically and continues reminding for the remaining amount. Complete audit trail of all payment activity for each invoice.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Deposit Invoicing</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Create deposit invoices alongside project invoices with a single click. InvoiceFlow links the deposit to the final invoice automatically, so you always know how much of a project has been paid upfront and how much remains. Deposits are the single most effective bad debt prevention tool available.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                  <h4 className="text-white font-semibold text-sm">Bad Debt Reporting for Tax</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When an invoice is written off as a bad debt, InvoiceFlow generates a summary report with all the details your accountant needs: original invoice date and amount, payment history, recovery attempt timeline, write-off date, and GST adjustment calculations. Makes tax time significantly easier and ensures you claim every deduction you&apos;re entitled to.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Prevention Over Recovery</p>
              <p className="text-gray-400 text-sm">
                InvoiceFlow is designed around the principle that <strong className="text-gray-200">preventing bad debts is always better than recovering them</strong>. Automated reminders, deposit invoicing, overdue alerts, and aging reports work together to catch payment problems early &mdash; before a slow-paying client becomes a non-paying one. For the debts that do go bad, the reporting tools ensure you get the maximum tax benefit from an unfortunate situation.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you recover overdue invoices, calculate penalties, and manage bad debts.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-red-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-red-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-red-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Use tool
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Guides</h2>
        <p className="text-gray-400 text-center mb-8">In-depth guides on getting paid, preventing late payments, and understanding GST obligations.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-red-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-red-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read guide
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {(faqSchema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { text: string } }>).map((faq, i) => (
            <details key={i} className="group rounded-xl bg-gray-800/40 border border-gray-700/40">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-red-400 transition-colors">
                {faq.name}
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture />
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Bad Debts Before They Start
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow tracks every invoice from send to payment, sends automatic reminders, flags overdue accounts, and gives you aging reports so you can catch problem invoices early. Prevent bad debts with proactive invoicing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/late-payment-calculator">
              <Button variant="secondary">Try the Late Payment Calculator</Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Free plan includes 5 invoices per month. No credit card required.
          </p>
        </div>
      </section>
    </div>
  );
}
