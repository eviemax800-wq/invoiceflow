import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Deposit Invoice: Complete Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is a deposit invoice? Learn how deposits work for Australian freelancers — how much to charge, GST treatment, non-refundable clauses, deposit invoice templates, and how to protect your freelance income with upfront payments.',
  keywords: [
    'deposit invoice australia',
    'upfront payment freelancer',
    'deposit vs advance payment',
    'how much deposit to charge freelancer',
    'deposit invoice template',
    'retainer deposit meaning',
    'non-refundable deposit australia',
    'deposit percentage freelancer',
  ],
  alternates: { canonical: '/glossary/deposit' },
  openGraph: {
    title: 'Deposit Invoice: Complete Guide for Australian Freelancers — InvoiceFlow',
    description:
      'Everything freelancers need to know about deposits: how much to charge, GST treatment under ATO rules, non-refundable clauses, deposit invoice templates, and how to protect your freelance income with upfront payments.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/deposit',
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
    { '@type': 'ListItem', position: 3, name: 'Deposit', item: `${BASE_URL}/glossary/deposit` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much deposit should a freelancer charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Australian freelancers charge between 20% and 50% of the total project value as a deposit. The exact amount depends on your industry, project size, and client relationship. For new clients, 40-50% is recommended to reduce risk. For established clients with a good payment history, 20-30% is common. Some industries like consulting and copywriting routinely charge 50% upfront, while construction typically charges 10-20%. The key principle is that the deposit should be large enough to cover your initial costs and demonstrate the client\'s commitment, but not so large that it creates a barrier to engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a deposit and an advance payment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A deposit is a partial upfront payment that secures the client\'s commitment to a project and is typically non-refundable if the client cancels. An advance payment is a broader term for any payment made before work is completed and may or may not be refundable. A retainer is a recurring payment for ongoing availability or services, while a progress payment is made during the project as milestones are completed. In Australian law, the distinction matters: non-refundable deposits are treated as consideration for the freelancer reserving their time, while advance payments may need to be returned if work is not performed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to charge GST on deposits in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you are registered for GST (mandatory when your annual turnover reaches $75,000), you must account for GST on deposits. Under cash accounting, GST is payable in the BAS period when you receive the deposit. Under accrual accounting, GST is payable in the period when you issue the deposit invoice, regardless of when payment is received. The deposit invoice must include all standard tax invoice requirements: your ABN, the words "Tax Invoice", the GST amount, and the total including GST. For a $5,000 deposit, you would charge $5,500 including $500 GST.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a client get their deposit back after work has started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your contract terms. If your agreement includes a non-refundable deposit clause, the client is generally not entitled to a refund once the deposit is paid — this is standard practice in Australian freelancing. However, under Australian Consumer Law, if the services are not provided at all, or are substantially different from what was agreed, the client may be entitled to a refund regardless of the contract terms. Best practice is to include a clear non-refundable clause in your contract stating that the deposit covers your reservation of time and initial project setup, and that work commences upon receipt of the deposit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should a deposit invoice include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professional deposit invoice should include eight essential elements: (1) the words "Deposit Invoice" or "Tax Invoice — Deposit" clearly at the top, (2) your business name, ABN, and contact details, (3) the client\'s name and business details, (4) a unique invoice number, (5) the deposit amount as a percentage of the total project fee (e.g., "Deposit — 30% of $10,000 total"), (6) GST amount and total including GST, (7) payment terms including due date and bank details, and (8) a reference to the project or proposal the deposit relates to. If the deposit is non-refundable, state this clearly on the invoice.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-a-deposit', label: '1. What Is a Deposit?' },
  { id: 'deposit-amounts-industry-standards', label: '2. Deposit Amounts & Industry Standards' },
  { id: 'deposit-invoicing-gst-australia', label: '3. Deposit Invoicing & GST in Australia' },
  { id: 'creating-professional-deposit-invoices', label: '4. Creating Professional Deposit Invoices' },
  { id: 'common-deposit-problems-solutions', label: '5. Common Deposit Problems & Solutions' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional deposit invoices with GST calculations and non-refundable clauses built in.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/payment-calculator',
    name: 'Payment Calculator',
    description: 'Calculate deposit amounts, GST splits, and remaining balances for any project fee.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Set your hourly or project rate so you can calculate accurate deposit amounts.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/late-fee-calculator',
    name: 'Late Fee Calculator',
    description: 'Calculate late fees when deposit payments are overdue under Australian regulations.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays and protect your cash flow as an Australian freelancer.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'Freelancer Tax Guide',
    description: 'When to register for GST, how to charge it on deposit invoices, and BAS lodgement tips.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete guide to professional invoicing, including deposit and progress billing best practices.',
  },
];

export default function DepositGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Deposit</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Billing &amp; Payments
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Deposit Invoices{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A deposit is the single most effective tool a freelancer has to protect against non-payment, no-shows, and scope blowouts. This guide covers how much to charge, GST treatment under ATO rules, how to create professional deposit invoices, non-refundable clauses, and the contract terms that keep you protected from day one.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO 2025-26 Rules Covered</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">20-50%</span>
              <div>
                <p className="text-white font-medium text-sm">Standard Deposit Range</p>
                <p className="text-gray-400 text-sm">Most Australian freelancers charge between 20% and 50% of the total project value upfront before work begins</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">GST</span>
              <div>
                <p className="text-white font-medium text-sm">GST Applies on Receipt</p>
                <p className="text-gray-400 text-sm">Under cash accounting, GST on deposits is payable in the BAS period when you receive the payment</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">72%</span>
              <div>
                <p className="text-white font-medium text-sm">Fewer Payment Issues</p>
                <p className="text-gray-400 text-sm">Freelancers who charge deposits report 72% fewer late or non-payment issues compared to those who invoice only on completion</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">N/R</span>
              <div>
                <p className="text-white font-medium text-sm">Non-Refundable Is Standard</p>
                <p className="text-gray-400 text-sm">Most freelance deposits in Australia are non-refundable once paid, covering your reservation of time and project setup costs</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-emerald-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is a Deposit? */}
        <section id="what-is-a-deposit">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Deposit?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A <strong className="text-white">deposit</strong> (sometimes called an <strong className="text-white">upfront payment</strong> or <strong className="text-white">booking fee</strong>) is a <strong className="text-white">partial payment made by the client before work begins on a project or service</strong>. It serves as a financial commitment that secures the freelancer&apos;s time, covers initial project costs, and demonstrates the client&apos;s genuine intention to proceed. In the Australian freelancing context, deposits are standard practice across nearly every industry &mdash; from web development and graphic design to consulting, photography, and copywriting.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The purpose of a deposit goes beyond simply receiving money early. A deposit acts as a <strong className="text-white">filter for serious clients</strong>. Clients who are willing to pay upfront are far more likely to be committed to the project, responsive during the process, and timely with remaining payments. Clients who resist paying any deposit at all are statistically more likely to cause payment issues, scope creep, or project abandonment. For freelancers, requiring a deposit is not about trust &mdash; it is about professional business practice.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Deposits serve three critical functions for freelancers. First, they <strong className="text-white">protect against no-shows and cancellations</strong> &mdash; if a client backs out after you have reserved your schedule for their project, the deposit compensates you for the lost opportunity cost. Second, they <strong className="text-white">cover your initial costs</strong> &mdash; research, project setup, purchasing resources, subcontractor coordination, and the administrative work required to kick off a project. Third, they <strong className="text-white">improve your cash flow</strong> &mdash; rather than working for weeks or months before receiving any payment, you start the project with money already in your account.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Deposit vs Advance Payment vs Retainer vs Progress Payment</h3>
            <p className="text-gray-300 leading-relaxed">
              These terms are often confused, but they have distinct meanings that matter for contracts, GST treatment, and client expectations.
            </p>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Term</th>
                      <th className="text-left text-sm font-medium text-emerald-400 px-6 py-4">Definition</th>
                      <th className="text-left text-sm font-medium text-green-400 px-6 py-4">Refundable?</th>
                      <th className="text-left text-sm font-medium text-gray-400 px-6 py-4">When Paid</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Deposit</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Partial upfront payment securing commitment to a project</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Usually non-refundable</td>
                      <td className="px-6 py-3 text-sm text-emerald-400 font-medium">Before work starts</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Advance Payment</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Any payment made before work is completed or delivered</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">May be refundable</td>
                      <td className="px-6 py-3 text-sm text-emerald-400 font-medium">Before or during work</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Retainer</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Recurring fee for ongoing availability or reserved capacity</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Depends on agreement</td>
                      <td className="px-6 py-3 text-sm text-emerald-400 font-medium">Monthly (recurring)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Progress Payment</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Payment tied to a specific deliverable or milestone being completed</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Not applicable (earned)</td>
                      <td className="px-6 py-3 text-sm text-emerald-400 font-medium">At milestone completion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Why Every Freelancer Should Charge Deposits</p>
              <p className="text-gray-400 text-sm">
                Freelancers who charge deposits report <strong className="text-gray-200">72% fewer late payment and non-payment issues</strong> than those who invoice only upon completion. The deposit creates mutual accountability: the client has invested money and is motivated to participate actively, while the freelancer has been compensated for their initial effort and can commit fully to the project. If you are not currently charging deposits, this single change will have the biggest positive impact on your freelance business.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Deposit Amounts & Industry Standards */}
        <section id="deposit-amounts-industry-standards">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Deposit Amounts &amp; Industry Standards</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There is no universal rule for deposit amounts, but <strong className="text-white">20% to 50% of the total project value</strong> is the widely accepted range for Australian freelancers. The exact percentage depends on your industry, project size, client relationship, and risk tolerance. Charging too little defeats the purpose of the deposit; charging too much can deter clients from signing.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Deposit Percentages by Industry</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Industry / Profession</th>
                      <th className="text-left text-sm font-medium text-emerald-400 px-6 py-4">Typical Deposit %</th>
                      <th className="text-left text-sm font-medium text-green-400 px-6 py-4">Why This Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Web Design &amp; Development</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">30&ndash;50%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">High initial effort (wireframes, setup, architecture). Projects often span 4&ndash;12 weeks.</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Photography &amp; Videography</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">25&ndash;50%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Covers equipment prep, location scouting, scheduling. Non-refundable to prevent last-minute cancellations.</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Consulting &amp; Strategy</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">50%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Knowledge-based work delivers value immediately. High opportunity cost of reserving time.</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Construction &amp; Trades</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">10&ndash;20%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Regulated by state laws in some cases. Progress payments cover material costs throughout.</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Writing &amp; Copywriting</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">50%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Research-heavy upfront. First draft represents majority of effort. Balance on delivery.</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Graphic Design &amp; Branding</td>
                      <td className="px-6 py-3 text-emerald-400 text-sm font-medium">30&ndash;50%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Concept development is the highest-value phase. Revisions follow after initial concepts.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Factors That Affect Your Deposit Percentage</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">Increase Your Deposit When...</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">New client relationship</strong> &mdash; no payment track record, charge 40&ndash;50%</li>
                  <li><strong className="text-gray-200">Large or complex project</strong> &mdash; higher initial setup costs to cover</li>
                  <li><strong className="text-gray-200">Long project timeline</strong> &mdash; more risk of cancellation or scope change over time</li>
                  <li><strong className="text-gray-200">Custom or specialised work</strong> &mdash; deliverables cannot be reused if client cancels</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-green-400 font-medium mb-2">Lower Deposit May Work When...</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Established client</strong> &mdash; proven payment history over multiple projects</li>
                  <li><strong className="text-gray-200">Corporate or government client</strong> &mdash; procurement processes may limit upfront payments</li>
                  <li><strong className="text-gray-200">Short project (under 1 week)</strong> &mdash; lower risk of non-payment</li>
                  <li><strong className="text-gray-200">Milestone billing in place</strong> &mdash; regular progress payments reduce your exposure</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">When to Charge 100% Upfront</h3>
            <p className="text-gray-300 leading-relaxed">
              Charging the full project fee upfront is appropriate in specific situations. <strong className="text-white">Small projects under $1,000&ndash;$2,000</strong> often do not justify the overhead of multiple invoices &mdash; a single upfront payment simplifies the process for both parties. <strong className="text-white">Rush or priority work</strong> where you are rearranging your schedule warrants full upfront payment as compensation for the disruption. <strong className="text-white">Digital products and templates</strong> (such as website templates, logo packages, or stock photography) are commonly sold on a 100% upfront basis because the deliverable is immediate. And for <strong className="text-white">clients with a history of late payment</strong>, requiring full upfront payment is a reasonable protective measure.
            </p>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The Golden Rule</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Never do more than one milestone&apos;s worth of work ahead of payment.</strong> If you charge a 30% deposit and then complete 60% of the project before invoicing the next payment, you have 30% of unbilled work at risk. Structure your deposit and subsequent payments so you are always working with money already received, not money you hope to collect later.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Deposit Invoicing & GST in Australia */}
        <section id="deposit-invoicing-gst-australia">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Deposit Invoicing &amp; GST in Australia</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Getting the GST treatment of deposits right is critical for Australian freelancers. The ATO has clear rules, and mistakes can lead to incorrect BAS lodgements, penalties, or cash flow surprises. Here is exactly how deposits work under the Australian tax system for the 2025&ndash;26 financial year.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">GST on Deposits: Cash vs Accrual Accounting</h3>
            <p className="text-gray-300 leading-relaxed">
              The timing of when you report GST on deposits depends on your accounting method:
            </p>
            <div className="space-y-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">$</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Cash Accounting (Most Freelancers)</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  GST is payable in the <strong className="text-gray-200">BAS period when you actually receive the deposit</strong>, regardless of when you issued the invoice. If you invoice a $5,500 deposit (including $500 GST) on 15 June but receive payment on 3 July, the GST is reported in your July&ndash;September BAS quarter (Q1 of the new financial year), not the April&ndash;June quarter. This is the most common method for freelancers with turnover under $10 million, and it provides better cash flow alignment because you only remit GST after you have been paid.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">A</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Accrual Accounting</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  GST is payable in the <strong className="text-gray-200">BAS period when you issue the deposit invoice</strong>, regardless of when payment is received. This means you may need to pay GST to the ATO before the client has actually paid you. Accrual accounting is mandatory for businesses with turnover over $10 million, but some freelancers choose it if their accountant recommends it for their specific situation.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">ATO Rules: Deposits vs Progress Payments</h3>
            <p className="text-gray-300 leading-relaxed">
              The ATO treats deposits and progress payments identically for GST purposes &mdash; both are <strong className="text-white">taxable supplies and must include GST if you are GST-registered</strong>. The key requirement is that you issue a valid tax invoice for the deposit, and the deposit is reported as income in the BAS period according to your accounting method. There is no special exemption or deferral for deposits.
            </p>
            <p className="text-gray-300 leading-relaxed">
              However, the <strong className="text-white">distinction matters for refunds</strong>. If you refund a deposit (e.g., the project is cancelled and your contract allows a refund), you can claim back the GST you already remitted by issuing a credit note and adjusting your next BAS. You must keep records of the original invoice, the credit note, and the refund payment.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Recording Deposits on Your BAS</h3>
            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/30 p-6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">BAS Reporting</span>
              </div>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                <p>DEPOSIT INVOICE EXAMPLE</p>
                <p className="mt-2">Project: Website redesign for Client Pty Ltd</p>
                <p>Total project fee: $10,000 (ex GST)</p>
                <p>Deposit: 30% = $3,000 (ex GST)</p>
                <p className="mt-2">DEPOSIT TAX INVOICE:</p>
                <p>  Subtotal: $3,000.00</p>
                <p>  GST (10%): $300.00</p>
                <p>  Total inc GST: $3,300.00</p>
                <p className="mt-2">BAS REPORTING (Cash Accounting):</p>
                <p>  Label 1A (GST on sales): Include $300 in the period you RECEIVE payment</p>
                <p>  Label G1 (Total sales): Include $3,300 in the same period</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Refundable vs Non-Refundable Deposits</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">Non-Refundable Deposit</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The standard for most freelance work. GST is charged and reported immediately. If the client cancels, you keep the deposit and the GST has already been correctly reported. No credit note is needed. Your contract should state: &quot;The deposit is non-refundable and compensates the freelancer for reservation of time and initial project setup.&quot;
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-5">
                <h4 className="text-green-400 font-medium mb-2">Refundable Deposit</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Less common for freelancers, but used in some industries (e.g., event hire, security deposits). GST is still charged and reported when received. If you later refund the deposit, issue a credit note for the full amount including GST, and adjust your BAS in the period the refund occurs. The client&apos;s input tax credit is also reversed.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Trust Account Rules</h3>
            <p className="text-gray-300 leading-relaxed">
              Certain industries in Australia are required to hold deposits in a trust account rather than their general business account. This primarily applies to <strong className="text-white">real estate agents, solicitors, and building contractors</strong> (in some states, for domestic building work over certain thresholds). Most freelancers are not subject to trust account requirements, but if you operate in a regulated industry, check your state&apos;s specific rules. In Victoria, for example, domestic building contracts over $10,000 require deposits to be held in a trust account until work commences.
            </p>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Important: GST Registration Threshold</p>
              <p className="text-gray-400 text-sm">
                You only need to charge GST on deposits (and all invoices) if you are <strong className="text-gray-200">registered for GST</strong>. GST registration is mandatory when your annual turnover reaches $75,000. Below that threshold, registration is optional. If you are not GST-registered, your deposit invoices should not include GST, and you issue a regular invoice (not a &quot;tax invoice&quot;). Once you register, you must charge GST on all invoices going forward, including deposits.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Creating Professional Deposit Invoices */}
        <section id="creating-professional-deposit-invoices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Creating Professional Deposit Invoices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A professional deposit invoice does more than request payment &mdash; it sets the tone for the entire client relationship. It communicates that you run a legitimate business, that you understand Australian tax requirements, and that the project terms are clear from day one. Here are the eight essential elements every deposit invoice must include.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">8 Essential Elements of a Deposit Invoice</h3>
            <div className="space-y-4 mt-4">
              {[
                {
                  num: '1',
                  title: 'Clear "Deposit Invoice" or "Tax Invoice — Deposit" Label',
                  detail: 'Mark the invoice type prominently at the top. This distinguishes it from your final invoice and helps the client\'s accounts team process it correctly. If you are GST-registered, the words "Tax Invoice" must appear on the document — this is an ATO requirement.',
                },
                {
                  num: '2',
                  title: 'Your Business Details',
                  detail: 'Your registered business name (or trading name), ABN, contact address, phone number, and email. If you operate as a sole trader, your legal name is required. For Pty Ltd companies, use the registered company name and ACN.',
                },
                {
                  num: '3',
                  title: 'Client Details',
                  detail: 'The client\'s business name (or individual name), their ABN if applicable, and billing address. Verify these details before issuing — incorrect client details can cause payment delays, especially with corporate clients whose AP systems match invoice details against their records.',
                },
                {
                  num: '4',
                  title: 'Unique Invoice Number',
                  detail: 'A sequential, unique identifier for the invoice (e.g., INV-2026-0042 or DEP-0015). The ATO requires tax invoices to have a unique identifier. Using a prefix like "DEP" for deposit invoices makes your records easier to reconcile.',
                },
                {
                  num: '5',
                  title: 'Deposit Amount with Project Reference',
                  detail: 'Show the deposit as a percentage of the total project fee. For example: "Deposit — 30% of $10,000 total project fee: $3,000." This gives the client full visibility of the total commitment and how the deposit fits within it.',
                },
                {
                  num: '6',
                  title: 'GST Amount and Total Including GST',
                  detail: 'If GST-registered, show the subtotal (ex GST), the GST amount, and the total (inc GST) as separate line items. For a $3,000 deposit: subtotal $3,000 + GST $300 = total $3,300. If not GST-registered, show the total only and do not reference GST.',
                },
                {
                  num: '7',
                  title: 'Payment Terms and Bank Details',
                  detail: 'Specify when the deposit is due (e.g., "Due upon receipt" or "Due within 7 days"), and provide your bank details: BSB, account number, account name, and reference to use. Including PayID or a payment link reduces friction and speeds up payment.',
                },
                {
                  num: '8',
                  title: 'Project or Proposal Reference',
                  detail: 'Link the deposit invoice to the specific project by referencing the proposal number, project name, or contract date. This creates an audit trail and prevents confusion when a client has multiple projects with you.',
                },
              ].map((item) => (
                <div key={item.num} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <span className="text-emerald-400 font-bold text-sm">{item.num}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Sample Deposit Invoice Layout</h3>
            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/30 p-6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Annotated Template</span>
              </div>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                <p className="text-emerald-400">TAX INVOICE &mdash; DEPOSIT</p>
                <p className="mt-2">From: Jane Smith Design (ABN: 12 345 678 901)</p>
                <p>123 Collins Street, Melbourne VIC 3000</p>
                <p>jane@janesmithdesign.com.au | 0412 345 678</p>
                <p className="mt-2">To: Acme Corp Pty Ltd (ABN: 98 765 432 109)</p>
                <p>456 Bourke Street, Melbourne VIC 3000</p>
                <p className="mt-2">Invoice No: DEP-2026-0015</p>
                <p>Date: 2 March 2026</p>
                <p>Due: Upon receipt</p>
                <p>Project Ref: Website Redesign (Proposal #P-2026-008)</p>
                <p className="mt-3 border-t border-gray-700 pt-3">DESCRIPTION</p>
                <p>Deposit &mdash; 30% of $10,000 total project fee</p>
                <p>Website redesign including 5 pages, responsive design,</p>
                <p>contact form, and CMS integration.</p>
                <p className="mt-3 border-t border-gray-700 pt-3">Subtotal (ex GST):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$3,000.00</p>
                <p>GST (10%):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$300.00</p>
                <p className="text-emerald-400 font-bold">TOTAL (inc GST):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$3,300.00</p>
                <p className="mt-3 border-t border-gray-700 pt-3">PAYMENT DETAILS</p>
                <p>Account Name: Jane Smith Design</p>
                <p>BSB: 063-123 | Account: 1234 5678</p>
                <p>Reference: DEP-2026-0015</p>
                <p className="mt-3 border-t border-gray-700 pt-3 text-gray-500 text-xs">This deposit is non-refundable. Work commences upon receipt of</p>
                <p className="text-gray-500 text-xs">deposit. Remaining balance of $7,700 (inc GST) due per milestone</p>
                <p className="text-gray-500 text-xs">schedule in Proposal #P-2026-008.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Contract Clauses That Protect You</h3>
            <p className="text-gray-300 leading-relaxed">
              Your deposit terms should be documented in your contract or proposal, not just on the invoice. Include these protective clauses:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">Non-Refundable Clause</h4>
                <p className="text-gray-400 text-sm italic">
                  &quot;A non-refundable deposit of [X]% of the total project fee is required before work commences. This deposit compensates the freelancer for reserving their schedule and initial project setup, and is non-refundable in the event of client cancellation.&quot;
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">Work Commencement Clause</h4>
                <p className="text-gray-400 text-sm italic">
                  &quot;Work on the project will not commence until the deposit has been received in full. The project timeline begins on the date of deposit receipt, not the date of contract signing or proposal acceptance.&quot;
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">Balance Due Date Clause</h4>
                <p className="text-gray-400 text-sm italic">
                  &quot;The remaining balance of [$ amount] (inc GST) is due according to the milestone schedule outlined in this agreement. Final payment is due within 7 days of project completion and client sign-off.&quot;
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">Late Deposit Clause</h4>
                <p className="text-gray-400 text-sm italic">
                  &quot;If the deposit is not received within 14 days of invoice date, the project start date will be adjusted accordingly, and the freelancer reserves the right to reallocate the reserved schedule to other clients.&quot;
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Pro Tip: Send the Invoice with Your Proposal</p>
              <p className="text-gray-400 text-sm">
                Attach the deposit invoice to your proposal or quote. When the client accepts the proposal, they already have the invoice in hand and can pay immediately. This <strong className="text-gray-200">reduces the gap between acceptance and payment by an average of 5&ndash;7 days</strong> compared to sending the invoice separately after acceptance. The faster the deposit arrives, the faster you can start work.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Deposit Problems & Solutions */}
        <section id="common-deposit-problems-solutions">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Deposit Problems &amp; Solutions</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Even with clear terms, deposit issues arise. Here are the six most common problems and practical solutions for each.
            </p>

            <div className="space-y-6 mt-6">
              {[
                {
                  title: 'Client Refuses to Pay a Deposit',
                  problem: 'The client says "We never pay deposits" or "We only pay on completion." They may question your trustworthiness or claim their company policy does not allow upfront payments.',
                  resolution: 'Explain that a deposit is standard industry practice and protects both parties. Frame it as risk reduction for the client: "The deposit ensures I can dedicate your booked dates exclusively to your project. Without it, I cannot hold the schedule." If the client still refuses, this is a red flag. Consider whether the project is worth the risk. For corporate clients with genuine procurement restrictions, offer a compromise: a smaller deposit (20%) with a purchase order, or net-7 payment terms on the deposit invoice.',
                },
                {
                  title: 'Client Wants Deposit Back After Work Starts',
                  problem: 'After paying the deposit and you have begun work, the client changes their mind about the project and demands a full refund of the deposit.',
                  resolution: 'Reference your non-refundable clause. Respond professionally: "As outlined in our agreement, the deposit is non-refundable and covers the reservation of my schedule and the project setup work already completed. I have attached a summary of the work completed to date." If you have done minimal work, consider offering a partial goodwill refund (minus a cancellation fee) to maintain the relationship — but this is a business decision, not an obligation. Under Australian Consumer Law, if you have started providing the service, the deposit is generally not refundable.',
                },
                {
                  title: 'GST Confusion on Deposits',
                  problem: 'You or your client are unsure whether GST applies to the deposit, how to report it on BAS, or how it interacts with the final invoice.',
                  resolution: 'If you are GST-registered, GST applies to every taxable supply — including deposits. The deposit invoice must be a valid tax invoice with GST shown separately. Your final invoice should show the remaining balance only (total project fee minus the deposit already paid), with GST calculated on the remaining amount. The client claims input tax credits on each invoice as they pay them. If in doubt, consult your accountant or use InvoiceFlow which handles the calculations automatically.',
                },
                {
                  title: 'Deposit vs Final Invoice Reconciliation Errors',
                  problem: 'The total of your deposit invoice plus your final invoice does not match the originally quoted project fee. This causes confusion, payment disputes, and accounting headaches.',
                  resolution: 'Always reference the total project fee on both invoices. On the deposit invoice: "Deposit — 30% of $10,000 total project fee: $3,000." On the final invoice: "Balance — 70% of $10,000 total project fee: $7,000. Less deposit received (Invoice DEP-2026-0015): $3,000 paid." Show GST on each invoice independently — do not try to calculate GST across invoices. Each invoice is a standalone tax document.',
                },
                {
                  title: 'Late Deposit Payments Delaying Project Start',
                  problem: 'The client has agreed to the project and the deposit invoice has been sent, but payment takes weeks to arrive. Meanwhile, you have tentatively blocked out your schedule.',
                  resolution: 'Include a "schedule hold" expiry in your proposal: "Your project start date of [DATE] is held for 14 days from the date of this proposal. If the deposit is not received within this period, the start date will be subject to my next available booking." Follow up with a polite reminder at 7 days. If the client consistently delays, this is a signal of how they will handle future payments — factor that into your decision to proceed.',
                },
                {
                  title: 'Unclear Deposit Terms in Contract',
                  problem: 'The deposit was agreed verbally or via a casual email, but there is no formal documentation of the amount, refund policy, or how it applies to the total project fee. This leads to disputes when the project wraps up.',
                  resolution: 'Always document deposit terms in writing before issuing the invoice. At minimum, send an email that states: the deposit amount and percentage, that it is non-refundable, that work commences upon receipt, and how the balance will be invoiced. Better yet, use a formal proposal or contract template that includes all deposit terms. Have the client confirm acceptance in writing (a reply email with "Agreed" or "Approved" is sufficient under Australian contract law).',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-400">{i + 1}</span>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{item.problem}</p>
                  <div className="rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-3">
                    <p className="text-sm text-emerald-300"><strong>Resolution:</strong> {item.resolution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow takes the friction out of deposit invoicing. From generating GST-compliant deposit invoices to automatically reconciling deposits against final invoices, here is how it streamlines the entire process for Australian freelancers.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  title: 'One-Click Deposit Invoices',
                  desc: 'Enter the total project fee and deposit percentage, and InvoiceFlow generates a complete deposit tax invoice with GST calculations, your ABN, bank details, and a non-refundable clause — ready to send in seconds. No manual calculations, no missing fields, no ATO compliance gaps.',
                  icon: (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  ),
                },
                {
                  title: 'Automatic Deposit-to-Balance Reconciliation',
                  desc: 'When you create the final invoice for a project, InvoiceFlow automatically deducts the deposit already received and shows the remaining balance. The client sees exactly what was paid and what is due — no manual reconciliation, no discrepancies, no disputes.',
                  icon: (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  ),
                },
                {
                  title: 'Payment Tracking and Reminders',
                  desc: 'Track deposit payment status in real time. InvoiceFlow sends automated reminders when a deposit invoice is overdue — polite, professional emails that you do not have to write yourself. Know instantly which clients have paid their deposit and which are still outstanding.',
                  icon: (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  ),
                },
                {
                  title: 'GST-Ready BAS Reports',
                  desc: 'InvoiceFlow tracks GST on every deposit invoice and generates BAS-ready reports each quarter. See your total GST collected (including deposits), GST paid on business expenses, and net GST payable — saving hours of manual calculation and reducing the risk of BAS errors.',
                  icon: (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                    </svg>
                  ),
                },
              ].map((feature, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    {feature.icon}
                    <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The Bottom Line</p>
              <p className="text-gray-400 text-sm">
                Deposit invoicing should take <strong className="text-gray-200">less than 60 seconds</strong>, not 15 minutes of formatting, calculating GST, and writing payment terms from scratch. InvoiceFlow handles the compliance, calculations, and follow-up automatically &mdash; so you send professional deposit invoices faster, get paid sooner, and spend your time on client work instead of admin.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to create deposit invoices, calculate payments, and manage your freelance billing.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-emerald-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on payments, GST, and freelance invoicing in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-green-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-green-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-green-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-emerald-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Send Professional Deposit Invoices in Seconds
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop formatting deposit invoices from scratch. InvoiceFlow generates GST-compliant deposit invoices, tracks payments, sends reminders, and reconciles deposits against final invoices &mdash; so you get paid upfront and stay protected from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/invoice-generator">
              <Button variant="secondary">Try the Invoice Generator</Button>
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
