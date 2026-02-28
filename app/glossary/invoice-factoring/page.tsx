import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Invoice Factoring (Debtor Finance): Complete Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is invoice factoring? Learn how debtor finance works in Australia, types of factoring (recourse vs non-recourse, spot vs whole-ledger), costs and fees, Australian providers, pros and cons for freelancers, and better alternatives to get paid faster.',
  keywords: [
    'invoice factoring australia',
    'debtor finance for freelancers',
    'invoice financing small business',
    'sell unpaid invoices australia',
    'invoice factoring vs invoice financing',
    'spot factoring australia',
    'recourse vs non-recourse factoring',
    'invoice factoring fees',
    'debtor finance providers australia',
    'invoice factoring for small business',
    'cash flow solutions freelancers',
    'invoice factoring cost',
  ],
  alternates: { canonical: '/glossary/invoice-factoring' },
  openGraph: {
    title: 'Invoice Factoring (Debtor Finance): Complete Guide for Australian Freelancers — InvoiceFlow',
    description:
      'Everything you need to know about invoice factoring in Australia: how it works, types of factoring, costs, Australian providers, pros and cons for freelancers, and better alternatives to prevent late payments.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/invoice-factoring',
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
    { '@type': 'ListItem', position: 3, name: 'Invoice Factoring', item: `${BASE_URL}/glossary/invoice-factoring` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is invoice factoring and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Invoice factoring (also called debtor finance) is a financing arrangement where you sell your unpaid invoices to a third-party company called a factor at a discount in exchange for immediate cash. The process works like this: you complete work and invoice your client as normal, then sell that invoice to the factor who advances you 80-90% of the invoice value upfront (usually within 24-48 hours). The factor then takes over collection from your client. When your client pays the full invoice amount to the factor, you receive the remaining 10-20% minus the factor\'s fee (typically 1-5% of the invoice value per 30 days). Invoice factoring is not a loan — you are selling an asset (your receivable) rather than borrowing against it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between invoice factoring and invoice financing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The key difference is who collects the payment from your client. With invoice factoring, the factor takes over the collection process — your client pays the factor directly, and the factor manages the receivable. With invoice financing (also called invoice discounting), you retain control of collection — your client pays you directly, and the financing provider simply uses the invoice as collateral for a cash advance. Invoice financing is more discreet because your client may not know you are using a finance provider. Factoring tends to be more accessible for smaller businesses because the factor takes on the credit risk and collection responsibility, but it also means your client knows a third party is involved.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does invoice factoring cost in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Invoice factoring fees in Australia typically range from 1% to 5% of the invoice value per 30-day period, depending on the provider, your industry, invoice volume, and the creditworthiness of your clients. Additional fees may include a setup or establishment fee ($0-$500), monthly service or minimum usage fees ($0-$200/month), credit check fees for new debtors ($10-$50 per check), and early termination fees if you leave before your contract ends. As a worked example: on a $10,000 invoice with an 85% advance rate and a 3% factoring fee, you would receive $8,500 immediately, and when your client pays, you get the remaining $1,200 (the $1,500 holdback minus the $300 fee). Over a year, factoring a consistent $10,000/month in invoices at 3% would cost $3,600 in fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is invoice factoring suitable for freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Invoice factoring can work for freelancers, but it is often not the best solution for several reasons. Most factoring providers have minimum invoice sizes ($1,000-$10,000) and minimum monthly volumes that many freelancers do not meet. The fees (1-5% per invoice) can significantly eat into profit margins, especially on smaller invoices. Many providers also require whole-ledger factoring (all your invoices, not just selected ones) with 12-month contracts. For most freelancers, the root cause of cash flow problems is not a lack of financing — it is late-paying clients and poor invoicing habits. Better alternatives include setting shorter payment terms (Net 7-14 instead of Net 30), requiring deposits before starting work, sending invoices immediately upon completion, and using automated payment reminders. These cost nothing and solve the underlying problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best invoice factoring providers in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major invoice factoring and debtor finance providers in Australia include Octet (part of the Greensill group, focused on supply chain finance), Earlypay (ASX-listed, offers both factoring and invoice financing), OptiPay (formerly Scottish Pacific, one of the largest independent providers), Moula (online lender with invoice financing products), Prospa (popular with small businesses, offers invoice financing alongside business loans), FundTap (app-based single invoice financing, good for smaller businesses), and Butn (technology-focused, offers pay-now solutions). For freelancers, FundTap and Butn are the most accessible because they offer single-invoice financing without whole-ledger contracts. However, always compare the total cost including all fees before committing, and consider whether fixing your invoicing process might be a cheaper long-term solution.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-invoice-factoring', label: '1. What Is Invoice Factoring?' },
  { id: 'types-of-factoring', label: '2. Types of Invoice Factoring' },
  { id: 'how-much-does-it-cost', label: '3. How Much Does Invoice Factoring Cost?' },
  { id: 'pros-and-cons', label: '4. Pros and Cons for Freelancers' },
  { id: 'australian-providers', label: '5. Australian Invoice Factoring Providers' },
  { id: 'better-alternatives', label: '6. Better Alternatives: Preventing Late Payments' },
];

const relatedTools = [
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Interest Calculator',
    description: 'Calculate interest and penalties on overdue invoices so you know the true cost of late payments.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/emergency-fund-calculator',
    name: 'Cash Flow Forecast Calculator',
    description: 'Project your cash flow over 13 weeks and identify gaps before they become emergencies.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with clear payment terms and deposit requests to get paid faster.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/overdue-invoice-email-generator',
    name: 'Overdue Invoice Follow-Up Generator',
    description: 'Generate professional follow-up emails for overdue invoices at every escalation stage.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays, chase overdue invoices, and keep cash flowing without factoring.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'Everything you need to know about creating compliant invoices with clear terms that get paid on time.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Your Freelance Rates',
    description: 'How to calculate rates that account for payment delays, tax, super, and business costs.',
  },
];

export default function InvoiceFactoringGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Invoice Factoring</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Cash Flow &amp; Payments
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Invoice Factoring{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              (Debtor Finance) Explained
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Invoice factoring lets you sell unpaid invoices to a third party for immediate cash &mdash; but is it right for freelancers? This guide covers how debtor finance works in Australia, the different types, real costs, major providers, and why fixing your invoicing process might be a better (and free) alternative.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Australia-Focused 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">$26B</span>
              <div>
                <p className="text-white font-medium text-sm">Late Payments to AU SMEs</p>
                <p className="text-gray-400 text-sm">Total outstanding late payments owed to Australian small businesses at any given time</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">33d</span>
              <div>
                <p className="text-white font-medium text-sm">Average AU Payment Time</p>
                <p className="text-gray-400 text-sm">Average number of days Australian businesses take to pay an invoice</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">1-5%</span>
              <div>
                <p className="text-white font-medium text-sm">Typical Factoring Fee</p>
                <p className="text-gray-400 text-sm">Percentage of invoice value charged per 30 days by Australian factoring providers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">80-90%</span>
              <div>
                <p className="text-white font-medium text-sm">Typical Advance Rate</p>
                <p className="text-gray-400 text-sm">Percentage of invoice value you receive upfront when selling to a factor</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-violet-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Invoice Factoring? */}
        <section id="what-is-invoice-factoring">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Invoice Factoring?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Invoice factoring (also known as <strong className="text-white">debtor finance</strong> or <strong className="text-white">accounts receivable financing</strong>) is a financial transaction where you <strong className="text-white">sell your unpaid invoices to a third-party company (called a factor) at a discount</strong> in exchange for immediate cash. Instead of waiting 30, 60, or 90 days for your client to pay, you get most of the money within 24-48 hours.
            </p>
            <p className="text-gray-300 leading-relaxed">
              It is <strong className="text-white">not a loan</strong>. You are selling an asset &mdash; your accounts receivable &mdash; rather than borrowing money against it. This distinction matters because factoring does not create debt on your balance sheet, and approval is based on your clients&apos; creditworthiness, not yours.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">How Invoice Factoring Works &mdash; Step by Step</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">1</span>
                  <div>
                    <p className="text-white font-medium text-sm">You complete work and invoice your client</p>
                    <p className="text-gray-400 text-sm">Business as usual &mdash; deliver the project, send the invoice with your standard payment terms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">2</span>
                  <div>
                    <p className="text-white font-medium text-sm">You sell the invoice to the factor</p>
                    <p className="text-gray-400 text-sm">Submit the invoice to your factoring provider. They verify it and assess your client&apos;s credit.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">3</span>
                  <div>
                    <p className="text-white font-medium text-sm">You receive 80-90% of the invoice value upfront</p>
                    <p className="text-gray-400 text-sm">The factor advances you the majority of the invoice amount, typically within 24-48 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">4</span>
                  <div>
                    <p className="text-white font-medium text-sm">The factor collects payment from your client</p>
                    <p className="text-gray-400 text-sm">Your client pays the factor directly on the original due date (or whenever they pay).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">5</span>
                  <div>
                    <p className="text-white font-medium text-sm">You receive the remainder minus the factor&apos;s fee</p>
                    <p className="text-gray-400 text-sm">Once the client pays in full, the factor sends you the remaining 10-20% minus their service fee.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Factoring vs Financing vs Discounting</h3>
            <p className="text-gray-300 leading-relaxed">
              These terms are often used interchangeably, but there are important differences that affect how your business and clients experience the arrangement:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-2">Invoice Factoring</h4>
                <p className="text-gray-400 text-sm">The factor <strong className="text-gray-200">takes over collection</strong> from your client. Your client pays the factor directly. The factor manages the receivable and chases payment if needed. Your client knows a third party is involved.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-2">Invoice Financing</h4>
                <p className="text-gray-400 text-sm">You <strong className="text-gray-200">retain control of collection</strong>. The financing provider uses your invoice as collateral for a cash advance. Your client pays you directly and may not know financing is involved. More discreet but less hands-off.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-2">Invoice Discounting</h4>
                <p className="text-gray-400 text-sm">Similar to financing &mdash; you <strong className="text-gray-200">borrow against your entire receivables ledger</strong> rather than individual invoices. Typically used by larger businesses with consistent invoice volumes. Fully confidential to your clients.</p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Australian Context</p>
              <p className="text-gray-400 text-sm">
                Australian small businesses are collectively owed over <strong className="text-gray-200">$26 billion in late payments</strong> at any given time, with the average invoice taking 33 days to be paid. For freelancers who often wait 45-60+ days, the cash flow gap can be crippling. The debtor finance industry in Australia has grown significantly as a result, with dozens of providers now competing for business. However, most are designed for SMEs with $500K+ in annual revenue &mdash; freelancers fall below the typical minimum threshold.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Types of Invoice Factoring */}
        <section id="types-of-factoring">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Invoice Factoring</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not all invoice factoring is the same. The type you choose affects your <strong className="text-white">cost, risk, flexibility, and how much control you retain</strong>. Here are the main types available in Australia and how they compare.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Type</th>
                      <th className="text-left text-sm font-medium text-violet-400 px-6 py-4">How It Works</th>
                      <th className="text-left text-sm font-medium text-purple-400 px-6 py-4">Risk</th>
                      <th className="text-left text-sm font-medium text-gray-400 px-6 py-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Recourse Factoring</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">You must buy back the invoice if the client does not pay</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium">You bear risk</span></td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Lower fees, reliable clients</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Non-Recourse Factoring</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">The factor absorbs the loss if the client does not pay</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">Factor bears risk</span></td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Higher fees, uncertain clients</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Spot Factoring</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Factor individual invoices as needed, no ongoing contract</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium">Flexible</span></td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Freelancers, occasional gaps</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Whole-Ledger Factoring</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">All invoices go through the factor under a long-term contract</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-xs font-medium">Lock-in</span></td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Larger businesses, volume</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Selective Invoice Finance</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Choose which invoices to finance, retain collection control</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium">Flexible</span></td>
                      <td className="px-6 py-3 text-gray-400 text-sm">SMEs wanting control</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Confidential Factoring</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Factoring arrangement is hidden from your clients</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium">Premium cost</span></td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Protecting client relationships</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-violet-400 font-bold text-sm">vs</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Recourse vs Non-Recourse: The Key Difference</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  With <strong className="text-gray-200">recourse factoring</strong>, if your client fails to pay the invoice (goes bankrupt, disputes the work, or simply refuses), you are required to buy the invoice back from the factor or replace it with another invoice. The factor is protected; you are not. Recourse factoring is cheaper because the factor takes on less risk. With <strong className="text-gray-200">non-recourse factoring</strong>, the factor absorbs the loss if the client does not pay due to insolvency. However, non-recourse does not typically cover disputes or partial payments &mdash; only clear-cut insolvency events. Non-recourse factoring costs more (typically 0.5-1.5% higher) because the factor is pricing in credit risk.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Which Type Suits Freelancers Best?</h3>
                  <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">Recommended</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you do use factoring, <strong className="text-gray-200">spot factoring</strong> is the best fit for most freelancers. It lets you factor individual invoices as needed without committing to a long-term contract or minimum volumes. You only pay fees on the specific invoices you choose to factor, making it ideal for <strong className="text-gray-200">occasional cash flow gaps</strong> rather than an ongoing financing strategy. Selective invoice finance is a close second &mdash; it offers similar flexibility while letting you retain collection control so your clients may not know you are using finance.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Watch Out for Lock-In Contracts</p>
              <p className="text-gray-400 text-sm">
                Many factoring providers, especially those offering whole-ledger facilities, require <strong className="text-gray-200">12-24 month contracts with early termination fees</strong>. Before signing, understand the minimum commitment period, minimum monthly volume requirements, and what happens if you want to cancel. Spot factoring avoids these issues entirely.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: How Much Does Invoice Factoring Cost? */}
        <section id="how-much-does-it-cost">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How Much Does Invoice Factoring Cost?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Understanding the true cost of invoice factoring requires looking beyond the headline fee rate. Between the <strong className="text-white">factoring fee, advance rate holdback, and additional charges</strong>, the effective cost can be significantly higher than it first appears.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Typical Australian Factoring Fees</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-3">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Factoring fee (discount rate)</span>
                  <span className="text-violet-400 font-medium">1-5% per 30 days</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Advance rate (upfront payment)</span>
                  <span className="text-violet-400 font-medium">80-90% of invoice value</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Setup / establishment fee</span>
                  <span className="text-violet-400 font-medium">$0 &ndash; $500</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Monthly service / minimum fee</span>
                  <span className="text-violet-400 font-medium">$0 &ndash; $200/month</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Credit check fee (per debtor)</span>
                  <span className="text-violet-400 font-medium">$10 &ndash; $50</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Early termination fee</span>
                  <span className="text-violet-400 font-medium">1-3 months&apos; average fees</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-violet-500/30 p-6 mt-6">
              <h4 className="text-lg font-semibold text-white mb-3">Worked Example: $10,000 Invoice</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                You have a $10,000 invoice from a client on 30-day payment terms. You sell it to a factor with an 85% advance rate and a 3% factoring fee.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span><strong className="text-gray-200">Day 1:</strong> Factor advances you 85% = <strong className="text-violet-400">$8,500</strong> (within 24-48 hours)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span><strong className="text-gray-200">Holdback:</strong> $10,000 - $8,500 = <strong className="text-gray-200">$1,500</strong> held in reserve</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span><strong className="text-gray-200">Factoring fee:</strong> 3% of $10,000 = <strong className="text-red-400">$300</strong></span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span><strong className="text-gray-200">Day 30:</strong> Client pays factor $10,000. Factor sends you $1,500 - $300 = <strong className="text-violet-400">$1,200</strong></span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <span><strong className="text-gray-200">Total received:</strong> $8,500 + $1,200 = <strong className="text-white">$9,700</strong> (you paid <strong className="text-red-400">$300</strong> for 30 days of early access)</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3">Break-Even Analysis: When Does Factoring Make Sense?</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Factoring is worth it when the <strong className="text-gray-200">cost of not having cash exceeds the factoring fee</strong>. Consider factoring when:
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>You will miss a high-value opportunity without immediate cash (e.g., a larger project requiring upfront investment)</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>You would otherwise take on high-interest debt (credit card at 20%+ p.a.) to cover the gap</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>You can earn a supplier discount by paying early that exceeds the factoring cost</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <span>It does <strong className="text-gray-200">not</strong> make sense if you are factoring every invoice just to cover ongoing expenses &mdash; that means your pricing is too low or your costs are too high</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Hidden Annual Cost</p>
              <p className="text-gray-400 text-sm">
                A 3% fee per 30 days sounds small, but annualised it is <strong className="text-gray-200">36% per year</strong>. If you factor $10,000 per month for a year, you pay <strong className="text-gray-200">$3,600 in fees</strong>. For a freelancer earning $120,000 per year, that is 3% of your gross revenue going to a finance company. Compare that to a business line of credit at 8-12% p.a. or even a low-rate credit card at 13-15% p.a. Factoring is one of the most expensive forms of business finance available &mdash; the convenience comes at a steep price.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Pros and Cons for Freelancers */}
        <section id="pros-and-cons">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Pros and Cons for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Invoice factoring has legitimate use cases, but it is <strong className="text-white">not a silver bullet for cash flow problems</strong>. Here is an honest breakdown of the advantages and disadvantages for Australian freelancers.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {/* Pros */}
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <h4 className="text-emerald-400 font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Advantages
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-white text-sm font-medium">Immediate Cash Flow</p>
                    <p className="text-gray-400 text-xs">Get 80-90% of your invoice value within 24-48 hours instead of waiting 30-60 days. Eliminates the work-to-payment gap.</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Not a Loan</p>
                    <p className="text-gray-400 text-xs">Factoring is selling an asset, not borrowing. No debt on your balance sheet, no loan repayments, and it does not affect your credit score.</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Grows With Your Revenue</p>
                    <p className="text-gray-400 text-xs">Unlike a fixed credit limit, your factoring capacity increases as your invoicing volume grows. More invoices = more available funding.</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">No Credit Check on You</p>
                    <p className="text-gray-400 text-xs">Approval is based on your clients&apos; creditworthiness, not yours. Useful if your personal or business credit history is limited.</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Outsource Collections</p>
                    <p className="text-gray-400 text-xs">The factor handles chasing payment from your clients. No more awkward follow-up emails or phone calls about overdue invoices.</p>
                  </div>
                </div>
              </div>

              {/* Cons */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <h4 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Disadvantages
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-white text-sm font-medium">Expensive Compared to Alternatives</p>
                    <p className="text-gray-400 text-xs">At 1-5% per month (12-60% annualised), factoring is one of the costliest forms of finance. A business line of credit at 8-12% p.a. is far cheaper.</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Client Relationship Risk</p>
                    <p className="text-gray-400 text-xs">With full factoring, your client knows a third party is collecting. Some clients see this as a sign of financial distress, which can damage your professional reputation.</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Contract Lock-In and Minimums</p>
                    <p className="text-gray-400 text-xs">Many providers require 12-month contracts, minimum monthly volumes ($10K-$50K), and charge early termination fees. Not ideal for freelancers with variable income.</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Does Not Fix the Root Cause</p>
                    <p className="text-gray-400 text-xs">Factoring treats the symptom (no cash) not the disease (late-paying clients, poor invoicing habits, no deposits). You end up paying fees indefinitely instead of solving the problem.</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Minimum Invoice Thresholds</p>
                    <p className="text-gray-400 text-xs">Most providers require minimum invoice sizes ($1,000-$10,000) that exclude many freelance invoices. Some also reject invoices to individuals (B2C).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3">When to Consider Factoring vs Alternatives</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-violet-500/5 border border-violet-500/20 p-4">
                  <p className="text-violet-400 text-sm font-medium mb-2">Factoring Makes Sense When...</p>
                  <ul className="space-y-1 text-xs text-gray-400">
                    <li>You have large B2B invoices ($5K+) with long payment terms (Net 60+)</li>
                    <li>Your clients are creditworthy corporates who always pay but slowly</li>
                    <li>You need to fund rapid growth and cannot access traditional finance</li>
                    <li>You want to outsource collections completely</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-purple-500/5 border border-purple-500/20 p-4">
                  <p className="text-purple-400 text-sm font-medium mb-2">Alternatives Are Better When...</p>
                  <ul className="space-y-1 text-xs text-gray-400">
                    <li>Your invoices are under $5,000 (fees eat into margins too much)</li>
                    <li>Your clients would pay faster with better payment terms and reminders</li>
                    <li>You have not tried deposits, milestone billing, or shorter terms yet</li>
                    <li>A business line of credit or overdraft is available at a lower rate</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Honest Truth for Most Freelancers</p>
              <p className="text-gray-400 text-sm">
                For the majority of freelancers earning under $200,000 per year, invoice factoring is <strong className="text-gray-200">overkill and overpriced</strong>. The typical freelancer&apos;s cash flow problems are caused by invoicing too late, using Net 30 terms when Net 14 would work, not requiring deposits, and not following up on overdue invoices. These are all solvable with better invoicing practices at zero cost. Factoring should be a last resort, not a first instinct.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Australian Invoice Factoring Providers */}
        <section id="australian-providers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Australian Invoice Factoring Providers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              If you do decide to explore factoring, here are the <strong className="text-white">major providers operating in Australia</strong> as of 2025-26. Availability, rates, and terms vary &mdash; always get a direct quote and read the full contract before committing.
            </p>

            {/* Provider Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Provider</th>
                      <th className="text-left text-sm font-medium text-violet-400 px-6 py-4">Min Invoice</th>
                      <th className="text-left text-sm font-medium text-purple-400 px-6 py-4">Advance Rate</th>
                      <th className="text-left text-sm font-medium text-gray-400 px-6 py-4">Contract</th>
                      <th className="text-left text-sm font-medium text-gray-400 px-6 py-4">Freelancer Friendly?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Octet</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$10,000+</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Up to 90%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">12 months</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-xs font-medium">No</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Earlypay</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$5,000+</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Up to 85%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">12 months</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium">Limited</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">OptiPay</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$10,000+</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Up to 95%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">12 months</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-xs font-medium">No</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Moula</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$5,000+</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Up to 80%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Flexible</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium">Limited</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Prospa</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$5,000+</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Up to 80%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Flexible</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium">Limited</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">FundTap</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$1,000+</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Up to 90%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">No lock-in</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">Yes</span></td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Butn</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">$1,000+</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Up to 100%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">No lock-in</td>
                      <td className="px-6 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">Yes</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Best for Freelancers: FundTap and Butn</h3>
                  <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">Recommended</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">FundTap</strong> is an app-based platform that integrates with Xero and MYOB. You select individual invoices to fund, receive up to 90% within 24 hours, and pay a simple per-invoice fee with no lock-in contracts. It is designed for small businesses and works well for freelancers with $1,000+ invoices. <strong className="text-gray-200">Butn</strong> offers a similar model with up to 100% advance rates on some invoices and integrates with major accounting platforms. Both offer single-invoice financing without whole-ledger commitments, making them the most accessible options for freelancers in Australia.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Enterprise-Focused Providers</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">Octet, OptiPay (formerly Scottish Pacific), and Earlypay</strong> are designed for larger businesses with $500K+ in annual revenue and consistent monthly invoice volumes. They offer whole-ledger factoring with higher advance rates and potentially lower per-invoice fees due to volume, but require 12-month contracts, minimum monthly commitments, and are generally not practical for individual freelancers. If your business grows to the point where you are invoicing $50K+ per month consistently, these providers become viable.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Before You Sign Up</p>
              <p className="text-gray-400 text-sm">
                Always ask these questions before committing to a factoring provider: (1) What is the <strong className="text-gray-200">total fee including all charges</strong>, not just the headline rate? (2) Is there a <strong className="text-gray-200">minimum contract period</strong> or early termination fee? (3) Are there <strong className="text-gray-200">minimum monthly volume requirements</strong>? (4) Is it <strong className="text-gray-200">recourse or non-recourse</strong> &mdash; what happens if my client does not pay? (5) Will my <strong className="text-gray-200">clients be notified</strong> that a third party is involved? Get everything in writing before proceeding.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Better Alternatives: Preventing Late Payments with InvoiceFlow */}
        <section id="better-alternatives">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Better Alternatives: Preventing Late Payments with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Here is the uncomfortable truth about invoice factoring for freelancers: <strong className="text-white">most freelancers do not need factoring if they fix the root cause of their cash flow problems</strong>. The root cause is almost always late payments &mdash; and late payments are caused by poor invoicing habits, weak payment terms, and inconsistent follow-up. Fix those, and you eliminate the need for expensive third-party financing entirely.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Payment Terms Enforcement</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set Net 7 or Net 14 payment terms instead of Net 30. InvoiceFlow makes it easy to set default terms per client, automatically calculates due dates, and displays them prominently on every invoice. Shorter terms = faster payment = no need for factoring.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Automated Reminders</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow sends professional payment reminders automatically &mdash; before the due date, on the due date, and at escalating intervals after. Studies show automated reminders reduce late payments by up to 30%. No awkward conversations, no forgetting to follow up.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Deposit Invoicing</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Request 30-50% deposits before starting work with a single click. Deposit invoicing gives you immediate cash flow, confirms client commitment, and reduces your exposure to non-payment. It is standard practice in creative and technical industries &mdash; and it is free.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Milestone Billing</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Break large projects into milestones with payments at each stage (e.g. 30/40/30). InvoiceFlow tracks milestone invoices and payments throughout the project, ensuring you receive regular income instead of waiting until the end for one large, potentially late, payment.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM6 3v.75M17.25 3v.75M3 16.5V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v10.5m-18 0h18" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Late Payment Interest Calculator</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Include a late payment interest clause on every invoice. InvoiceFlow calculates accrued interest automatically when invoices go overdue. The mere presence of a penalty clause motivates clients to pay on time &mdash; most will pay before interest kicks in.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Overdue Management</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Overdue invoices are flagged immediately with clear visual indicators showing days past due, total overdue amount, and which clients are repeat offenders. Take action before small delays become cash flow crises &mdash; without paying a factor to do it for you.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Bottom Line: Prevention Over Cure</p>
              <p className="text-gray-400 text-sm">
                Invoice factoring costs 1-5% per invoice. Better invoicing practices cost <strong className="text-gray-200">nothing</strong>. If you are currently losing 3% of every invoice to a factoring company, that is $3,600 on $120,000 in annual revenue. Instead, use InvoiceFlow to send invoices immediately, set shorter payment terms, request deposits, and automate follow-ups. You will get paid faster, keep 100% of your invoice value, and solve the actual problem instead of paying someone else to work around it.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage cash flow and get paid faster without factoring.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-violet-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on getting paid, invoicing, and managing your freelance finances.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-violet-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Skip the Factoring Fees &mdash; Get Paid Faster for Free
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers eliminate late payments with automated reminders, deposit invoicing, and payment tracking &mdash; so you never need to pay a factor to access your own money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/late-payment-calculator">
              <Button variant="secondary">Calculate Late Payment Costs</Button>
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
