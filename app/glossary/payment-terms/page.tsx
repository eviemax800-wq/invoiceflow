import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Payment Terms: Complete Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What are payment terms? Learn about Net 30, Net 14, Due on Receipt, EOM, and more — plus how to set, enforce, and optimise payment terms on your invoices as an Australian freelancer. Includes late payment rights, interest calculations, and sample wording.',
  keywords: [
    'payment terms meaning',
    'net 30 meaning',
    'invoice payment terms australia',
    'payment terms for freelancers',
    'net 14 net 30 meaning',
    'due on receipt meaning',
    'late payment terms invoice',
    'standard payment terms australia',
  ],
  alternates: { canonical: '/glossary/payment-terms' },
  openGraph: {
    title: 'Payment Terms: Complete Guide for Australian Freelancers — InvoiceFlow',
    description:
      'Everything you need to know about payment terms for your freelance business: Net 30, Net 14, Due on Receipt, late payment rights in Australia, interest calculations, and how to write payment terms that actually get you paid.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/payment-terms',
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
    { '@type': 'ListItem', position: 3, name: 'Payment Terms', item: `${BASE_URL}/glossary/payment-terms` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are payment terms on an invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Payment terms are the conditions you set on an invoice that specify when and how a client must pay. They typically include the due date (e.g. Net 30 means payment is due within 30 days of the invoice date), accepted payment methods (bank transfer, credit card, PayPal), and any penalties for late payment or discounts for early payment. Clear payment terms set expectations upfront, reduce disputes, and give you legal standing to chase overdue invoices. Every invoice you send should include explicit payment terms — verbal agreements are difficult to enforce.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Net 30 mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Net 30 means the full invoice amount is due within 30 calendar days from the invoice date. "Net" refers to the total amount owed (after any discounts or adjustments), and "30" is the number of days the client has to pay. So if you issue an invoice on 1 March with Net 30 terms, payment is due by 31 March. Net 30 is the most common payment term used in Australian business. Variations include Net 7 (7 days), Net 14 (14 days), and Net 60 (60 days). Some businesses also use terms like "2/10 Net 30" which means a 2% discount if paid within 10 days, otherwise the full amount is due in 30 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common payment terms for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common payment terms used by Australian freelancers are Net 14 (payment due within 14 days) and Net 30 (payment due within 30 days). Net 14 is increasingly popular among freelancers because it improves cash flow without being overly aggressive. For new clients or one-off projects, many freelancers use "Due on Receipt" or require a 50% deposit upfront with the balance due on completion. For large projects, milestone-based payments (e.g. 30% upfront, 40% at midpoint, 30% on delivery) are common. The average payment time for Australian SMBs is approximately 34 days, so setting Net 14 terms often results in actual payment around 20-25 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I charge interest on late payments in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can charge interest on late payments in Australia, but only if your payment terms or contract explicitly state that interest will apply and specify the rate. There is no automatic right to charge interest — it must be agreed upon in advance. A common approach is to reference the ATO General Interest Charge (GIC) rate, which is currently around 11% per annum. You can set your own rate, but it must be reasonable — courts may not enforce an excessive rate. The interest clause should appear clearly on every invoice and ideally in your contract or terms of engagement. For example: "A late payment fee of 2% per month (24% p.a.) will apply to overdue amounts." Always send a formal reminder before applying interest charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I offer discounts for early payment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Early payment discounts (like "2/10 Net 30" — a 2% discount if paid within 10 days) can be effective for encouraging faster payment, but they are more common in B2B supply chain transactions than freelancing. For freelancers, the main consideration is whether the discount is worth the cash flow benefit. A 2% discount for being paid 20 days earlier is equivalent to an annualised rate of about 37%, which is expensive. Most freelancers are better off setting shorter payment terms (Net 7 or Net 14) rather than offering discounts. However, if you work with large corporate clients who have rigid Net 60 payment cycles, an early payment discount can be a strategic tool to get paid faster without renegotiating the entire contract.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-are-payment-terms', label: '1. What Are Payment Terms?' },
  { id: 'common-payment-terms', label: '2. Common Payment Terms Explained' },
  { id: 'choosing-payment-terms', label: '3. How to Choose the Right Payment Terms' },
  { id: 'late-payment-rights', label: '4. Late Payment: Your Rights in Australia' },
  { id: 'payment-terms-on-invoice', label: '5. Payment Terms on Your Invoice' },
  { id: 'payment-terms-invoiceflow', label: '6. Payment Terms and InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with clear payment terms, due dates, and bank details in seconds.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate interest and penalties on overdue invoices using Australian GIC rates.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/payment-terms-calculator',
    name: 'Payment Terms Calculator',
    description: 'Model different payment terms and see how they affect your cash flow and annual revenue.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM6 3v.75M17.25 3v.75M3 16.5V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v10.5m-18 0h18" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Set hourly and project rates that account for payment delays, tax, super, and business costs.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete beginner guide to invoicing in Australia — what to include, when to send, and how to follow up.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment times, automate follow-ups, and stop chasing overdue invoices.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'When to register for GST, how to calculate it, and how it interacts with your payment terms and invoices.',
  },
];

export default function PaymentTermsGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-sky-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Payment Terms</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Invoicing &amp; Payments
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Payment Terms{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Payment terms define when and how your clients pay you. This guide covers Net 30, Net 14, Due on Receipt, milestone billing, late payment rights in Australia, and the exact wording to put on your invoices &mdash; so you stop chasing payments and start getting paid on time.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">N30</span>
              <div>
                <p className="text-white font-medium text-sm">Most Common Term</p>
                <p className="text-gray-400 text-sm">Net 30 is the standard payment term in Australian business &mdash; due within 30 days</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">$26B</span>
              <div>
                <p className="text-white font-medium text-sm">Unpaid AU Invoices</p>
                <p className="text-gray-400 text-sm">Over $26 billion in invoices are outstanding across Australian small businesses at any time</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">~11%</span>
              <div>
                <p className="text-white font-medium text-sm">GIC Interest Rate</p>
                <p className="text-gray-400 text-sm">The ATO General Interest Charge rate &mdash; a benchmark for late payment penalties</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">34d</span>
              <div>
                <p className="text-white font-medium text-sm">AU SMB Average</p>
                <p className="text-gray-400 text-sm">The average payment time for Australian small and medium businesses is 34 days</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-sky-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Are Payment Terms? */}
        <section id="what-are-payment-terms">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Are Payment Terms?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Payment terms are the <strong className="text-white">conditions you set on an invoice that tell your client when to pay, how to pay, and what happens if they do not</strong>. They are the rules of engagement between you and your client when it comes to money. At their simplest, payment terms specify a due date. At their most complete, they cover payment methods, late fees, early payment discounts, deposit requirements, and dispute resolution procedures.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, payment terms are not just administrative details &mdash; they are <strong className="text-white">the single most important factor in how quickly you get paid</strong>. Research consistently shows that invoices with clear, explicit payment terms are paid significantly faster than invoices that simply say &quot;please pay promptly&quot; or have no terms at all. A study by Xero found that invoices with specific due dates are paid up to 8 days faster than those without.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Without clear payment terms, you have no agreed-upon deadline. The client can pay whenever they feel like it &mdash; and for many businesses, that means pushing your invoice to the bottom of the pile. Even worse, if a dispute arises and you need to pursue payment legally, <strong className="text-white">vague or missing payment terms weaken your position</strong>. Australian courts look for evidence of a clear agreement between parties, and well-documented payment terms on every invoice provide exactly that.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Payment terms should be established <strong className="text-white">before you start work</strong>, ideally in a written contract, engagement letter, or at minimum in your initial quote or proposal. Then they should be restated clearly on every invoice. This creates a paper trail that shows the client agreed to pay on your terms, which is critical if you ever need to escalate to a formal demand letter or Small Claims tribunal.
            </p>
            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Why This Matters for Freelancers</p>
              <p className="text-gray-400 text-sm">
                Unlike employees who receive a regular salary, freelancers only earn money when clients pay their invoices. If your average client takes 45 days to pay instead of 14, you are effectively <strong className="text-gray-200">lending your client a month of free work</strong>. On a $5,000 invoice, that one-month delay costs you real money in cash flow pressure, potential overdraft fees, and missed opportunities. Setting and enforcing the right payment terms is how you take control.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Common Payment Terms Explained */}
        <section id="common-payment-terms">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Payment Terms Explained</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There are a handful of standard payment terms used across Australian business. Each serves a different purpose and carries a different level of risk for you as the service provider. Here is every common term you will encounter, what it means, when to use it, and the trade-offs involved.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Term</th>
                      <th className="text-left text-sm font-medium text-sky-400 px-6 py-4">Meaning</th>
                      <th className="text-left text-sm font-medium text-blue-400 px-6 py-4">Typical Use Case</th>
                      <th className="text-left text-sm font-medium text-gray-400 px-6 py-4">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Due on Receipt</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Payment due immediately when the invoice is received</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">New clients, small one-off jobs, rush work</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">Very Low</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Net 7</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Full amount due within 7 calendar days of invoice date</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Small businesses, quick turnaround projects</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">Low</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Net 14</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Full amount due within 14 calendar days of invoice date</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Freelancers, SMB clients, ongoing retainers</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">Low</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Net 30</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Full amount due within 30 calendar days of invoice date</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Standard B2B, corporate clients, established relationships</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium">Medium</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Net 60</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Full amount due within 60 calendar days of invoice date</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Large corporates, government contracts</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-xs font-medium">High</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">EOM</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Payment due at end of month in which invoice is issued</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Ongoing suppliers, monthly billing cycles</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium">Medium</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">COD</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Cash on Delivery &mdash; payment at time of delivery</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Product delivery, physical goods, first-time clients</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">Very Low</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">50% Deposit</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Half upfront before work begins, balance on completion</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Large projects, new clients, custom/creative work</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">Low</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Milestone</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Payments tied to project milestones (e.g. 30/40/30)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Large/long projects, web builds, consulting engagements</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">Low</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Net Terms in Detail</h3>
            <p className="text-gray-300 leading-relaxed">
              The &quot;Net&quot; in Net 30 (or Net 7, Net 14, Net 60) means <strong className="text-white">the net amount &mdash; the total due after any adjustments</strong>. The number is the count of calendar days (not business days) from the invoice date. So &quot;Net 14&quot; on an invoice dated 1 March means payment is due by 15 March, regardless of weekends or public holidays. Some businesses use &quot;Net 30 EOM&quot; which means 30 days from the end of the month in which the invoice was issued &mdash; this can add up to an extra 30 days, so be careful with this variation.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Early Payment Discounts</h3>
            <p className="text-gray-300 leading-relaxed">
              You may see terms like <strong className="text-white">&quot;2/10 Net 30&quot;</strong> which means &quot;2% discount if paid within 10 days, otherwise the full amount is due in 30 days.&quot; While common in wholesale and manufacturing, this is less typical in freelancing. As a freelancer, offering a 2% discount to get paid 20 days earlier is equivalent to an annualised interest rate of roughly 37% &mdash; you are essentially paying a very high price for faster cash. In most cases, you are better off simply setting shorter payment terms (Net 7 or Net 14) rather than discounting your rate.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-sky-400 font-medium mb-2">Best for Cash Flow</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Due on Receipt &mdash; fastest payment, but can feel aggressive</li>
                  <li>50% deposit + balance on delivery &mdash; de-risks large projects</li>
                  <li>Net 7 &mdash; short and reasonable for small businesses</li>
                  <li>Milestone billing &mdash; steady income throughout long projects</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-blue-400 font-medium mb-2">Best for Client Relationships</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Net 14 &mdash; professional and freelancer-friendly standard</li>
                  <li>Net 30 &mdash; expected by corporates and larger businesses</li>
                  <li>EOM &mdash; aligns with monthly accounting cycles</li>
                  <li>Flexible milestones &mdash; shows trust and collaboration</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Pro Tip: Shorter Terms by Default</p>
              <p className="text-gray-400 text-sm">
                Start with <strong className="text-gray-200">Net 14 as your default</strong> and only extend to Net 30 if the client specifically requests it. You can always loosen terms as a negotiation tool, but it is much harder to tighten them later. Most small business clients will not push back on Net 14 &mdash; it only becomes an issue with large corporates that have rigid procurement cycles.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: How to Choose the Right Payment Terms */}
        <section id="choosing-payment-terms">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Choose the Right Payment Terms</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The right payment terms depend on your <strong className="text-white">client type, project size, cash flow needs, and industry norms</strong>. There is no single correct answer, but there are clear guidelines that help you make the right choice for each situation.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">By Client Type</h3>
            <div className="space-y-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <span className="text-sky-400 font-bold text-sm">1</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">New or Unknown Clients</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For first-time clients with no payment track record, use <strong className="text-gray-200">50% deposit upfront with the balance due on delivery</strong>, or at minimum Due on Receipt / Net 7. You have no data on whether this client pays reliably, and the risk of non-payment is highest with new relationships. A deposit also filters out clients who are not serious &mdash; if they refuse to pay 50% upfront, they may not pay at all. Never start significant work for a new client without some payment commitment.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <span className="text-sky-400 font-bold text-sm">2</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Established Small Business Clients</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For clients you have worked with before and who have a good payment history, <strong className="text-gray-200">Net 14</strong> is the freelancer-friendly standard. It gives the client enough time to process the invoice while keeping your cash flow tight. If a client consistently pays on time, you might extend to Net 30 as a gesture of trust. If they consistently pay late, tighten to Net 7 or require deposits for future work.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <span className="text-sky-400 font-bold text-sm">3</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Corporate and Enterprise Clients</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Large companies typically have <strong className="text-gray-200">rigid payment cycles &mdash; often Net 30 or Net 60</strong> &mdash; and they rarely negotiate. Their accounts payable departments process invoices in batches, and your invoice will follow their internal timeline regardless of your terms. If you work with corporates, build their payment timelines into your cash flow planning. Consider charging a <strong className="text-gray-200">15-20% premium</strong> for Net 60 clients to compensate for the extended financing you are providing. Some freelancers also negotiate a deposit or milestone structure even with corporates, especially for large projects.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">By Project Size</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-5">
                <h4 className="text-sky-400 font-semibold mb-3">Small Projects (Under $2,000)</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For small, quick-turnaround work, use <strong className="text-gray-200">Due on Receipt or Net 7</strong>. The project is small enough that the client should have no trouble paying quickly, and the short timeline protects your cash flow. Chasing a $500 invoice for 60 days is never worth it.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-5">
                <h4 className="text-blue-400 font-semibold mb-3">Large Projects (Over $5,000)</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For larger engagements, <strong className="text-gray-200">milestone billing is essential</strong>. Break the project into 3-5 milestones with payments at each stage. A common split is 30% upfront, 40% at the midpoint, and 30% on completion. This limits your exposure at any point and keeps cash flowing throughout the project.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Industry Benchmarks for Australia</h3>
            <p className="text-gray-300 leading-relaxed">
              According to data from Xero, MYOB, and the Australian Small Business and Family Enterprise Ombudsman (ASBFEO), here are the key benchmarks:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-3">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Average payment time (Australian SMBs)</span>
                  <span className="text-sky-400 font-medium">34 days</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Percentage of invoices paid late</span>
                  <span className="text-sky-400 font-medium">~55%</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Average days overdue (when late)</span>
                  <span className="text-sky-400 font-medium">23 days past terms</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Total outstanding invoices (AU small business)</span>
                  <span className="text-sky-400 font-medium">$26 billion</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Most common term set by freelancers</span>
                  <span className="text-sky-400 font-medium">Net 30</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Recommended term for freelancers</span>
                  <span className="text-sky-400 font-medium">Net 14</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4">
              The key insight here is that <strong className="text-white">the average payment time (34 days) already exceeds Net 30 terms</strong>. If you set Net 30 terms and your clients are average, you are getting paid around day 34. If you set Net 14 terms, you are likely getting paid around day 20-25. The shorter your stated terms, the shorter the actual payment time &mdash; even if clients pay slightly late.
            </p>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Cash Flow Reality Check</p>
              <p className="text-gray-400 text-sm">
                If you invoice $10,000 per month with Net 30 terms and clients pay on day 34 on average, you always have roughly <strong className="text-gray-200">$11,300 outstanding at any time</strong>. Switch to Net 14 and clients pay on day 20 &mdash; your outstanding balance drops to about $6,700. That is an extra <strong className="text-gray-200">$4,600 in your bank account</strong> at any point, just from changing the number on your invoice. No extra work. No new clients.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Late Payment: Your Rights in Australia */}
        <section id="late-payment-rights">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Late Payment: Your Rights in Australia</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Late payment is the single biggest cash flow challenge for Australian freelancers. With over <strong className="text-white">$26 billion in unpaid invoices</strong> outstanding across Australian small businesses at any given time, and roughly 55% of invoices paid late, this is not an edge case &mdash; it is the norm. Knowing your rights and having a clear escalation process is essential.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Interest on Overdue Invoices</h3>
            <p className="text-gray-300 leading-relaxed">
              You <strong className="text-white">can charge interest on late payments in Australia, but only if your terms explicitly state it</strong>. There is no automatic statutory right to charge interest on a commercial invoice the way there is in some European countries. You must include an interest clause in your payment terms (on the invoice and ideally in your contract) that specifies the rate and when it applies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A widely used benchmark is the <strong className="text-white">ATO General Interest Charge (GIC) rate</strong>, which is currently approximately 11% per annum (it is updated quarterly and is calculated as the 90-day bank bill rate + 7%). Many freelancers set their late payment interest at or around this rate. You can set a higher rate, but be aware that Australian courts may consider an excessively high rate to be a &quot;penalty&quot; rather than a genuine pre-estimate of loss, which could make it unenforceable.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-sky-500/30 p-6 mt-6">
              <h4 className="text-lg font-semibold text-white mb-3">Interest Calculation Example</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                A $5,000 invoice is 30 days overdue. Your payment terms state interest of 10% per annum on overdue amounts.
              </p>
              <div className="rounded-lg bg-gray-900/60 p-3 text-sm font-mono text-sky-300 mb-3">
                Interest = $5,000 x 10% / 365 x 30 days = $41.10
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                At 60 days overdue: <strong className="text-gray-200">$82.19</strong>. At 90 days: <strong className="text-gray-200">$123.29</strong>. The amount may seem small, but the <em>existence</em> of an interest clause is what motivates clients to pay. Most will pay before interest accrues rather than deal with the administrative headache.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Formal Demand Letters</h3>
            <p className="text-gray-300 leading-relaxed">
              If polite reminders and phone calls fail, the next step is a <strong className="text-white">formal letter of demand</strong>. This is a written notice that gives the client a final deadline (usually 7-14 days) to pay the outstanding amount, and states that you will pursue legal action if they do not. A letter of demand is not a legal requirement before filing a claim, but it demonstrates to a court that you made reasonable efforts to resolve the matter. Many clients pay immediately upon receiving one &mdash; the formal language and threat of legal action is often enough.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A letter of demand should include: your name and ABN, the client&apos;s name and address, the invoice number and amount, the original due date, the total amount now owing (including interest if applicable), a final payment deadline, and a clear statement of the consequences if payment is not received (e.g. &quot;We will commence proceedings in the [State] Civil and Administrative Tribunal without further notice&quot;).
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Small Claims and Tribunals</h3>
            <p className="text-gray-300 leading-relaxed">
              If the letter of demand fails, you can pursue the debt through your state or territory&apos;s <strong className="text-white">Small Claims or Civil and Administrative Tribunal</strong>. These are designed to be accessible without a lawyer, with relatively low filing fees.
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">State / Territory</th>
                    <th className="text-left text-sm font-medium text-sky-400 px-6 py-4">Tribunal</th>
                    <th className="text-left text-sm font-medium text-blue-400 px-6 py-4">Small Claims Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">NSW</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">NSW Civil and Administrative Tribunal (NCAT)</td>
                    <td className="px-6 py-3 text-sky-400 font-medium text-sm">$30,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">VIC</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Victorian Civil and Administrative Tribunal (VCAT)</td>
                    <td className="px-6 py-3 text-sky-400 font-medium text-sm">$15,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">QLD</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Queensland Civil and Administrative Tribunal (QCAT)</td>
                    <td className="px-6 py-3 text-sky-400 font-medium text-sm">$25,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">SA</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">South Australian Civil and Administrative Tribunal (SACAT)</td>
                    <td className="px-6 py-3 text-sky-400 font-medium text-sm">$12,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">WA</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Magistrates Court (Minor Cases)</td>
                    <td className="px-6 py-3 text-sky-400 font-medium text-sm">$10,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">TAS</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Magistrates Court (Minor Civil Claims)</td>
                    <td className="px-6 py-3 text-sky-400 font-medium text-sm">$5,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">ACT</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">ACT Civil and Administrative Tribunal (ACAT)</td>
                    <td className="px-6 py-3 text-sky-400 font-medium text-sm">$25,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm font-medium">NT</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Northern Territory Civil and Administrative Tribunal (NTCAT)</td>
                    <td className="px-6 py-3 text-sky-400 font-medium text-sm">$25,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">PPSA (Personal Property Securities Act)</h3>
            <p className="text-gray-300 leading-relaxed">
              The <strong className="text-white">Personal Property Securities Act 2009 (PPSA)</strong> is relevant if you supply goods or retain ownership of work product until payment is received. By registering your interest on the Personal Property Securities Register (PPSR), you can protect your position if a client becomes insolvent. This is more relevant for contractors who supply materials, but freelancers who license (rather than assign) intellectual property can also benefit. A PPSR registration costs around $6 per item and is worth considering for large invoices.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The Late Payment Escalation Ladder</h3>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">D+1</span>
                <div>
                  <p className="text-white font-medium text-sm">Friendly Reminder</p>
                  <p className="text-gray-400 text-sm">Send a polite email the day after the due date: &quot;Hi [Name], just a quick reminder that invoice #[X] for $[Y] was due yesterday. Happy to help if there are any questions.&quot;</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">D+7</span>
                <div>
                  <p className="text-white font-medium text-sm">Firm Follow-Up</p>
                  <p className="text-gray-400 text-sm">Second email with a firmer tone. Reference the original payment terms and attach the invoice again. &quot;This invoice is now 7 days overdue. Please arrange payment within 48 hours.&quot;</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">D+14</span>
                <div>
                  <p className="text-white font-medium text-sm">Phone Call + Written Notice</p>
                  <p className="text-gray-400 text-sm">Call the client directly. Follow up with an email summarising the conversation and confirming the new payment commitment. Mention that interest will begin accruing as per your terms.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">D+30</span>
                <div>
                  <p className="text-white font-medium text-sm">Formal Letter of Demand</p>
                  <p className="text-gray-400 text-sm">Send a formal letter of demand giving 7-14 days to pay. State the total amount including accrued interest. Clearly state that you will commence legal proceedings if payment is not received.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">D+45</span>
                <div>
                  <p className="text-white font-medium text-sm">Tribunal / Small Claims Filing</p>
                  <p className="text-gray-400 text-sm">File a claim with your state tribunal. Filing fees are typically $50-$200 and can be recovered from the debtor if you win. You do not need a lawyer for small claims.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Prevention Is Better Than Cure</p>
              <p className="text-gray-400 text-sm">
                The best way to deal with late payments is to <strong className="text-gray-200">prevent them</strong>. Use deposits for new clients, set short payment terms, send invoices immediately on completion, and follow up the moment an invoice is overdue. Automated reminders (which InvoiceFlow can handle) reduce late payments by up to 30% without any manual effort on your part.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Payment Terms on Your Invoice */}
        <section id="payment-terms-on-invoice">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Payment Terms on Your Invoice</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Knowing the theory of payment terms is one thing. Actually <strong className="text-white">writing them clearly on your invoices</strong> is what gets you paid. Here is exactly what to include, where to put it, and sample wording you can copy directly into your invoices.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">What to Include</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-semibold mb-3">Essential Elements</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Due date</strong> &mdash; both the terms (e.g. Net 14) and the actual calendar date</li>
                  <li><strong className="text-gray-200">Payment methods</strong> &mdash; bank transfer, PayID, credit card, etc.</li>
                  <li><strong className="text-gray-200">Bank details</strong> &mdash; BSB, account number, account name</li>
                  <li><strong className="text-gray-200">Reference</strong> &mdash; what to put in the payment description</li>
                  <li><strong className="text-gray-200">Currency</strong> &mdash; AUD (specify if any international clients)</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-semibold mb-3">Recommended Additions</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Late payment clause</strong> &mdash; interest rate and when it applies</li>
                  <li><strong className="text-gray-200">Early payment terms</strong> &mdash; if offering a discount (optional)</li>
                  <li><strong className="text-gray-200">Dispute process</strong> &mdash; how to raise a query within X days</li>
                  <li><strong className="text-gray-200">PayID or PayPal</strong> &mdash; additional fast payment options</li>
                  <li><strong className="text-gray-200">ABN and GST status</strong> &mdash; required on all Australian tax invoices</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Sample Payment Terms Wording</h3>
            <p className="text-gray-300 leading-relaxed">
              Copy and adapt these for your own invoices. The key is to be <strong className="text-white">specific, professional, and unambiguous</strong>.
            </p>

            {/* Sample Block 1 */}
            <div className="rounded-xl bg-gray-800/50 border border-sky-500/30 p-6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">Standard Net 14</span>
              </div>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                <p>PAYMENT TERMS: Net 14</p>
                <p className="mt-2">Payment is due within 14 days of the invoice date. Please transfer the total amount to:</p>
                <p className="mt-2">Bank: [Your Bank]<br />BSB: [XXX-XXX]<br />Account: [XXXXXXXX]<br />Account Name: [Your Name / Business Name]<br />Reference: Invoice #[NUMBER]</p>
                <p className="mt-2">A late payment fee of 1.5% per month (18% p.a.) will apply to amounts outstanding beyond the due date. If you have any queries regarding this invoice, please contact [email] within 7 days of receipt.</p>
              </div>
            </div>

            {/* Sample Block 2 */}
            <div className="rounded-xl bg-gray-800/50 border border-blue-500/30 p-6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">Deposit + Balance</span>
              </div>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                <p>PAYMENT TERMS: 50% Deposit + Balance on Completion</p>
                <p className="mt-2">A non-refundable deposit of 50% ($[AMOUNT]) is required before work commences. The remaining balance of $[AMOUNT] is due within 7 days of project delivery.</p>
                <p className="mt-2">Payment via bank transfer to:<br />BSB: [XXX-XXX] | Account: [XXXXXXXX]<br />Account Name: [Your Name]<br />Reference: Invoice #[NUMBER]</p>
                <p className="mt-2">Work will not commence until the deposit is received. Late payment on the balance will incur interest at 10% per annum, calculated daily on the outstanding amount.</p>
              </div>
            </div>

            {/* Sample Block 3 */}
            <div className="rounded-xl bg-gray-800/50 border border-sky-500/30 p-6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">Milestone Billing</span>
              </div>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                <p>PAYMENT TERMS: Milestone-Based</p>
                <p className="mt-2">This project is billed in three milestones:</p>
                <p className="mt-1">&bull; Milestone 1 (Project Kickoff): 30% &mdash; $[AMOUNT] &mdash; Due on signing</p>
                <p>&bull; Milestone 2 (First Draft / Midpoint): 40% &mdash; $[AMOUNT] &mdash; Due within 7 days of delivery</p>
                <p>&bull; Milestone 3 (Final Delivery): 30% &mdash; $[AMOUNT] &mdash; Due within 7 days of delivery</p>
                <p className="mt-2">Each milestone payment is due within 7 days of the milestone being delivered and approved. Work on the next milestone will not commence until the current milestone payment is received.</p>
                <p className="mt-2">Bank details: BSB [XXX-XXX] | Acc [XXXXXXXX] | Ref: INV-[NUMBER]</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Legal Language Tips</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">Do</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>State the exact due date (&quot;Due: 15 March 2026&quot;) in addition to the terms (&quot;Net 14&quot;)</li>
                  <li>Specify interest as a percentage per annum &mdash; courts prefer annual rates</li>
                  <li>Include your ABN on every invoice (legally required for tax invoices)</li>
                  <li>Use clear, plain English &mdash; avoid legal jargon the client may not understand</li>
                  <li>Reference the same terms in your contract or engagement letter</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Do Not</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Use vague terms like &quot;payment due promptly&quot; or &quot;ASAP&quot;</li>
                  <li>Set unreasonably high interest rates (e.g. 5% per week = 260% p.a.)</li>
                  <li>Threaten legal action on the invoice itself &mdash; save that for demand letters</li>
                  <li>Forget to include bank details &mdash; make it as easy as possible to pay</li>
                  <li>Change terms without notice &mdash; always agree on terms before starting work</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Make It Easy to Pay</p>
              <p className="text-gray-400 text-sm">
                The number one rule of getting paid faster: <strong className="text-gray-200">remove every possible barrier to payment</strong>. Include your bank details directly on the invoice. Offer multiple payment methods (bank transfer, PayID, credit card if possible). Include a clear reference for the client to use. The easier you make it to pay, the sooner the money arrives. Every extra step a client has to take adds days to your payment timeline.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Payment Terms and InvoiceFlow */}
        <section id="payment-terms-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Payment Terms and InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built to help Australian freelancers <strong className="text-white">set, enforce, and automate payment terms</strong> without the manual overhead. Here is how it handles every aspect of the payment terms lifecycle:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Payment Terms Templates</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set up your preferred payment terms once and apply them to every invoice automatically. Choose from presets (Net 7, Net 14, Net 30, Due on Receipt, custom) or create your own. Different clients can have different default terms &mdash; Net 14 for your SMB clients, Net 30 for your corporate retainers. The terms, due date, bank details, and late payment clause are all populated automatically.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automatic Payment Reminders</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow sends automated, polite reminders at configurable intervals: 3 days before the due date (a gentle nudge), on the due date itself, and at 1, 7, 14, and 30 days overdue with escalating tone. Each reminder includes the invoice, payment details, and outstanding amount. Clients report that automated reminders reduce late payments by up to 30% &mdash; and you never have to send an awkward follow-up email again.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Payment Tracking Dashboard</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See every outstanding invoice at a glance: which are on time, which are approaching their due date, and which are overdue. The dashboard shows your <strong className="text-gray-200">average days to payment by client</strong>, helping you identify which clients consistently pay late so you can adjust terms accordingly. You can also see your total outstanding amount, ageing breakdown (0-14 days, 15-30 days, 30-60 days, 60+ days), and projected cash flow based on due dates.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Late Fee Calculation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When an invoice becomes overdue and your terms include a late payment clause, InvoiceFlow automatically calculates the accrued interest and includes it in reminder emails. If you need to escalate to a formal demand letter, the calculated interest amount is ready to include. This removes the awkwardness of manually calculating and adding interest &mdash; the system handles it objectively based on the terms both parties agreed to.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The Bottom Line</p>
              <p className="text-gray-400 text-sm">
                Good payment terms are only effective if they are <strong className="text-gray-200">consistently applied and actively enforced</strong>. InvoiceFlow automates the enforcement so you can focus on the work. Set your terms once, and the system handles the rest &mdash; from populating the due date on every invoice to sending escalating reminders to calculating late fees. You get paid faster without burning client relationships.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you set and enforce payment terms.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-sky-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-sky-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on invoicing, payments, and freelancing in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-sky-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-sky-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-sky-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Set Payment Terms That Get You Paid
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop chasing invoices. InvoiceFlow lets you set clear payment terms, automate reminders, and track every dollar &mdash; so you get paid faster without the awkward follow-ups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/late-payment-calculator">
              <Button variant="secondary">Calculate Late Payment Interest</Button>
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
