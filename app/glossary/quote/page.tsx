import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Quote vs Invoice: What\'s the Difference? Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is a quote? Learn the difference between quotes, estimates, invoices, and proposals. How to write professional quotes as an Australian freelancer, when to use them, how long they\'re valid, and converting quotes to invoices.',
  keywords: [
    'quote vs invoice difference',
    'quotation template australia',
    'how to write a quote freelancer',
    'quote vs estimate',
    'freelance quote template',
    'business quotation example',
    'quote to invoice workflow',
    'how long is a quote valid',
  ],
  alternates: { canonical: '/glossary/quote' },
  openGraph: {
    title: 'Quote vs Invoice: What\'s the Difference? Guide for Australian Freelancers — InvoiceFlow',
    description:
      'What is a quote? Learn the difference between quotes, estimates, invoices, and proposals. How to write professional quotes as an Australian freelancer, when to use them, how long they\'re valid, and converting quotes to invoices.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/quote',
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
    { '@type': 'ListItem', position: 3, name: 'Quote', item: `${BASE_URL}/glossary/quote` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a quote in business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A quote (or quotation) is a formal document that states the fixed price you will charge for a specific scope of work. Unlike an estimate (which is approximate), a quote is a firm commitment \u2014 once the client accepts it, you are legally obligated to deliver the work at the quoted price. Quotes typically include a detailed breakdown of services, the total price (including GST if registered), a validity period (e.g., "valid for 30 days"), and terms and conditions. For Australian freelancers, quotes serve as pre-sale documents that set expectations before work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\u2019s the difference between a quote and an invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A quote is sent BEFORE work begins and states the proposed price. An invoice is sent AFTER work is completed (or at agreed milestones) and requests payment. A quote asks "do you want me to do this work for this price?" while an invoice says "I\u2019ve done the work, please pay." Quotes can be accepted or rejected. Invoices are payment demands for work already delivered. In practice, a quote becomes the basis for the invoice \u2014 when the client accepts the quote, you do the work, then send an invoice for the agreed amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should a quote be valid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Australian business quotes are valid for 14-30 days. This gives the client time to decide while protecting you from price changes (materials, exchange rates, your availability). For projects where costs may fluctuate (e.g., involving imported materials or subcontractors), a shorter validity of 7-14 days is appropriate. Always state the validity period clearly on the quote: "This quote is valid for 30 days from the date of issue. After this date, prices may be subject to change." Without a stated validity, a quote may be considered open indefinitely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a quote legally binding in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A quote becomes a legally binding contract when the client accepts it (in writing, verbally, or by conduct such as asking you to proceed). Under Australian Consumer Law, a business that provides a quote must honour the quoted price for the stated validity period, provided the scope hasn\u2019t changed. However, if the actual work differs from what was quoted (scope changes, additional requirements), you can issue a revised quote. This is why a clear, detailed scope description is critical \u2014 it protects both you and the client from misunderstandings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I include GST in my quotes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are GST-registered (required once turnover exceeds $75,000), you should show both the ex-GST and GST-inclusive amounts on your quote. This is not legally required at the quote stage (the GST Act requirements apply to tax invoices, not quotes), but it prevents surprises for the client and demonstrates professionalism. A clear format is: "Subtotal: $5,000 + GST: $500 = Total: $5,500 (inc. GST)." If you\u2019re NOT GST-registered, state "Not registered for GST" to avoid confusion.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-a-quote', label: '1. What Is a Quote?' },
  { id: 'quote-vs-invoice-vs-estimate', label: '2. Quote vs Invoice vs Estimate vs Proposal' },
  { id: 'what-to-include', label: '3. What to Include in a Professional Quote' },
  { id: 'writing-quotes-that-win', label: '4. Writing Quotes That Win Work' },
  { id: 'validity-revisions-acceptance', label: '5. Quote Validity, Revisions, and Acceptance' },
  { id: 'quote-to-invoice-workflow', label: '6. Quote-to-Invoice Workflow with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Convert accepted quotes into professional invoices with one click.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate profitable rates for your quotes using 2025-26 tax data.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST-inclusive and GST-exclusive amounts for your quotes.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM6 3v.75M17.25 3v.75M3 16.5V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v10.5m-18 0h18" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Ensure your quoted prices deliver healthy profit margins.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete guide from quoting to invoicing to getting paid in Australia.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'How to handle GST on quotes, invoices, and tax reporting.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'Build a pricing structure that wins quotes and delivers profit.',
  },
];

export default function QuoteGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Quote</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Quoting &amp; Pricing
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Quote / Quotation{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Guide for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A quote is your first handshake with a client &mdash; it sets the price, the scope, and the expectations before any work begins. This guide covers what a quote is, how it differs from an estimate, invoice, and proposal, what to include, how to write quotes that win work, validity periods, and the complete quote-to-invoice workflow for Australian freelancers.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>AU Law Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">30d</span>
              <div>
                <p className="text-white font-medium text-sm">Standard Validity</p>
                <p className="text-gray-400 text-sm">Most business quotes are valid for 14&ndash;30 days from the date of issue</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">50%</span>
              <div>
                <p className="text-white font-medium text-sm">Win Rate Boost</p>
                <p className="text-gray-400 text-sm">Quotes sent within 24 hours win over 50% more work than delayed responses</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">Fix</span>
              <div>
                <p className="text-white font-medium text-sm">Fixed Price Commitment</p>
                <p className="text-gray-400 text-sm">Unlike estimates, an accepted quote is legally binding at the stated price</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">GST</span>
              <div>
                <p className="text-white font-medium text-sm">Show Both Amounts</p>
                <p className="text-gray-400 text-sm">If GST-registered, show ex-GST and inc-GST amounts to avoid client surprises</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-amber-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is a Quote? */}
        <section id="what-is-a-quote">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Quote?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A quote (also called a quotation) is a <strong className="text-white">formal document that states the fixed price you will charge a client for a specific scope of work</strong>. It is sent before any work begins and serves as a binding price commitment once the client accepts it. Think of it as a promise: &quot;I will do exactly this work, for exactly this price, within this timeframe.&quot;
            </p>
            <p className="text-gray-300 leading-relaxed">
              The purpose of a quote goes beyond simply listing a number. A well-crafted quote <strong className="text-white">sets expectations, defines boundaries, and builds trust</strong>. It tells the client precisely what they are getting, what is excluded, how much it costs, and how long the price stands. Without a clear quote, both you and the client are guessing &mdash; and guessing leads to scope creep, disputes, and unpaid work.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Here is the shift most freelancers miss: <strong className="text-white">a quote is a sales document, not just a price list</strong>. The client is comparing your quote against competitors. Your quote should demonstrate that you understand their problem, that you have a clear plan to solve it, and that your price reflects the value they will receive &mdash; not just the hours you will spend. The psychology matters: a quote that leads with &quot;here is what you get&quot; outperforms one that leads with &quot;here is what it costs&quot; every single time.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When should you provide a formal quote versus simply invoicing? The general rule is: <strong className="text-white">if the total exceeds $500, or if the scope is anything beyond straightforward, send a quote first</strong>. For a quick one-hour consultation or a small, clearly-defined task, you can often skip straight to invoicing after completion. But for projects with any complexity &mdash; multiple deliverables, phased work, or anything requiring back-and-forth &mdash; a quote protects both parties and professionalises the engagement.
            </p>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Key Principle</p>
              <p className="text-gray-400 text-sm">
                A good quote demonstrates <strong className="text-gray-200">value, not just cost</strong>. It answers the client&apos;s real question: &quot;What am I getting for my money, and why should I choose you?&quot; If your quote is just a number on a page, you are competing on price alone &mdash; and there will always be someone cheaper. If your quote shows understanding, expertise, and a clear plan, you are competing on trust and quality.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Quote vs Invoice vs Estimate vs Proposal */}
        <section id="quote-vs-invoice-vs-estimate">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Quote vs Invoice vs Estimate vs Proposal</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              These four documents are often confused, but they serve very different purposes and carry different legal weight. Understanding the distinction is critical &mdash; especially the difference between a <strong className="text-white">quote</strong> (fixed price, binding on acceptance) and an <strong className="text-white">estimate</strong> (approximate price, not binding). Getting this wrong can cost you money or land you in a dispute.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-5 py-4">Document</th>
                      <th className="text-left text-sm font-medium text-amber-400 px-5 py-4">When Sent</th>
                      <th className="text-left text-sm font-medium text-orange-400 px-5 py-4">Purpose</th>
                      <th className="text-left text-sm font-medium text-gray-400 px-5 py-4">Binding?</th>
                      <th className="text-left text-sm font-medium text-gray-400 px-5 py-4">Price Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-3 text-white text-sm font-medium whitespace-nowrap">Quote</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Before work</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Fixed price commitment for defined scope</td>
                      <td className="px-5 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium">Yes, on acceptance</span></td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Fixed</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-3 text-white text-sm font-medium whitespace-nowrap">Estimate</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Before work</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Approximate price indication</td>
                      <td className="px-5 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-gray-500/10 text-gray-400 text-xs font-medium">No</span></td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Approximate</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-3 text-white text-sm font-medium whitespace-nowrap">Invoice</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">After work</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Payment request for completed work</td>
                      <td className="px-5 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">Yes (debt)</span></td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Fixed (actual)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-3 text-white text-sm font-medium whitespace-nowrap">Proposal</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Before work</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Sales pitch with approach, timeline, and pricing</td>
                      <td className="px-5 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-gray-500/10 text-gray-400 text-xs font-medium">Not until signed</span></td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Varies</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-3 text-white text-sm font-medium whitespace-nowrap">Purchase Order</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Before work</td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Buyer&apos;s formal authorisation to proceed</td>
                      <td className="px-5 py-3 text-sm"><span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium">Yes, on acceptance</span></td>
                      <td className="px-5 py-3 text-gray-400 text-sm">Fixed (per quote)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The Typical Workflow</h3>
            <p className="text-gray-300 leading-relaxed">
              In a full professional engagement, these documents follow a logical sequence. Not every project requires all of them, but understanding the flow helps you know which document to use when:
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-4 text-sm">
              <span className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 font-medium">Proposal</span>
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              <span className="px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 font-medium">Quote</span>
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              <span className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 font-medium">Acceptance</span>
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              <span className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 font-medium">Work</span>
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              <span className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 font-medium">Invoice</span>
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              <span className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 font-medium">Payment</span>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Common Confusion: Quote vs Estimate</h3>
            <p className="text-gray-300 leading-relaxed">
              This is the most dangerous confusion in freelancing. Many clients (and some freelancers) use &quot;quote&quot; and &quot;estimate&quot; interchangeably, but they carry <strong className="text-white">very different legal weight</strong>. An estimate is an educated guess &mdash; the final price may be higher or lower. A quote is a firm commitment &mdash; you must deliver at the stated price. If a client asks for an &quot;estimate&quot; but you send a document labelled &quot;Quote,&quot; you have locked yourself into that price. Conversely, if you send an &quot;Estimate&quot; and the client expects a fixed price, disputes follow. Always be deliberate about which document you are sending and label it clearly.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Use a Quote When...</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>The scope of work is clearly defined and unlikely to change</li>
                  <li>You can accurately predict the time and resources required</li>
                  <li>The client needs price certainty before committing</li>
                  <li>You are competing against other providers on price</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-orange-500/20 p-5">
                <h4 className="text-orange-400 font-medium mb-2">Use an Estimate When...</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>The scope is vague or still being defined</li>
                  <li>Variables outside your control affect the final cost</li>
                  <li>You are providing a ballpark figure for budgeting purposes</li>
                  <li>Discovery work is needed before you can quote accurately</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Pro Tip: The Discovery Quote</p>
              <p className="text-gray-400 text-sm">
                If a client wants a quote but the scope is too vague to price accurately, offer a <strong className="text-gray-200">paid discovery session</strong>. Quote a fixed price for 2&ndash;4 hours of discovery work where you assess the requirements, then provide a detailed quote for the full project based on what you learn. This protects you from underquoting and shows the client you are thorough. Many freelancers charge $300&ndash;$800 for discovery, which is credited toward the project if the client proceeds.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: What to Include in a Professional Quote */}
        <section id="what-to-include">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What to Include in a Professional Quote</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A professional quote is more than a price on a piece of paper. It is a <strong className="text-white">structured document that protects both you and the client</strong> by clearly defining what is included, what is not, and the terms under which you will deliver. Missing any of these elements creates ambiguity &mdash; and ambiguity is where disputes are born.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Essential Elements</h3>
            <div className="space-y-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Your Business Details</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li><strong className="text-gray-200">Business or trading name</strong></li>
                      <li><strong className="text-gray-200">ABN</strong> (Australian Business Number)</li>
                      <li><strong className="text-gray-200">Contact details</strong> (email, phone, address)</li>
                      <li><strong className="text-gray-200">Logo</strong> (for professional presentation)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Client Details</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li><strong className="text-gray-200">Client name or business name</strong></li>
                      <li><strong className="text-gray-200">Contact person</strong> (if a company)</li>
                      <li><strong className="text-gray-200">Email and address</strong></li>
                      <li><strong className="text-gray-200">Their ABN</strong> (optional but professional)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-white font-semibold mb-3">Quote Identification</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Quote number</strong> &mdash; unique sequential identifier (e.g. QTE-001, QTE-002)</li>
                  <li><strong className="text-gray-200">Date of issue</strong> &mdash; when the quote was created</li>
                  <li><strong className="text-gray-200">Validity period</strong> &mdash; &quot;Valid for 30 days from date of issue&quot;</li>
                </ul>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <h4 className="text-amber-400 font-semibold mb-3">Scope of Work (Most Important Section)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Detailed description</strong> of what you WILL do &mdash; be specific, not vague</li>
                  <li><strong className="text-gray-200">Deliverables</strong> &mdash; exactly what the client will receive (files, documents, assets)</li>
                  <li><strong className="text-gray-200">Timeline</strong> &mdash; estimated delivery date or project duration</li>
                  <li><strong className="text-gray-200">Revision rounds</strong> &mdash; how many rounds of feedback are included</li>
                </ul>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-orange-500/20 p-6">
                <h4 className="text-orange-400 font-semibold mb-3">Exclusions (Critical for Avoiding Scope Creep)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">What you will NOT do</strong> &mdash; list explicitly to prevent assumptions</li>
                  <li><strong className="text-gray-200">Additional revision rounds</strong> &mdash; specify the per-round cost beyond included rounds</li>
                  <li><strong className="text-gray-200">Out-of-scope items</strong> &mdash; e.g. &quot;Content writing is not included; client to provide all copy&quot;</li>
                  <li><strong className="text-gray-200">Third-party costs</strong> &mdash; hosting, licences, stock images, etc. are not included unless stated</li>
                </ul>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-white font-semibold mb-3">Pricing and Payment</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Itemised line items</strong> &mdash; break the total into components (not just a lump sum)</li>
                  <li><strong className="text-gray-200">GST treatment</strong> &mdash; show ex-GST and inc-GST, or state &quot;Not registered for GST&quot;</li>
                  <li><strong className="text-gray-200">Payment terms</strong> &mdash; deposit required? Payment on completion? Milestones?</li>
                  <li><strong className="text-gray-200">Accepted payment methods</strong> &mdash; bank transfer, PayID, credit card</li>
                </ul>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h4 className="text-white font-semibold mb-3">Terms, Conditions, and Acceptance</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">IP ownership</strong> &mdash; who owns the work product on completion?</li>
                  <li><strong className="text-gray-200">Cancellation policy</strong> &mdash; what happens if the project is cancelled mid-way?</li>
                  <li><strong className="text-gray-200">Acceptance method</strong> &mdash; &quot;Sign and return this quote&quot; or &quot;Reply confirming acceptance&quot;</li>
                  <li><strong className="text-gray-200">Signature line</strong> &mdash; space for client name, signature, and date</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Sample Quote Structure</h3>
            <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">Professional Quote Template</span>
              </div>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                <p>[YOUR BUSINESS NAME] &mdash; ABN: XX XXX XXX XXX</p>
                <p className="mt-2">QUOTE #QTE-042 &nbsp;&nbsp;|&nbsp;&nbsp; Date: 1 March 2026 &nbsp;&nbsp;|&nbsp;&nbsp; Valid: 30 days</p>
                <p className="mt-2">Prepared for: [Client Name] &mdash; [Client Business]</p>
                <p className="mt-3 text-amber-400">--- SCOPE OF WORK ---</p>
                <p className="mt-1">Website redesign for [Client Business], including:</p>
                <p>&bull; Homepage design and build (1 page)</p>
                <p>&bull; About page design and build (1 page)</p>
                <p>&bull; Services page with 4 service cards</p>
                <p>&bull; Contact page with working form</p>
                <p>&bull; Mobile responsive across all pages</p>
                <p>&bull; 2 rounds of design revisions included</p>
                <p className="mt-3 text-orange-400">--- EXCLUSIONS ---</p>
                <p className="mt-1">&bull; Content/copywriting (client to provide)</p>
                <p>&bull; Photography/stock images</p>
                <p>&bull; Hosting and domain fees</p>
                <p>&bull; Ongoing maintenance (quoted separately)</p>
                <p className="mt-3 text-amber-400">--- PRICING ---</p>
                <p className="mt-1">Design &amp; Development: &nbsp;&nbsp;&nbsp; $4,200.00</p>
                <p>Project Management: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $800.00</p>
                <p className="border-t border-gray-700 mt-2 pt-2">Subtotal: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5,000.00</p>
                <p>GST (10%): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $500.00</p>
                <p className="text-white font-bold">TOTAL (inc. GST): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5,500.00</p>
                <p className="mt-3 text-amber-400">--- PAYMENT TERMS ---</p>
                <p className="mt-1">50% deposit ($2,750) due on acceptance</p>
                <p>50% balance ($2,750) due on project completion</p>
                <p className="mt-3 text-amber-400">--- ACCEPTANCE ---</p>
                <p className="mt-1">To accept, reply to this email or sign below.</p>
                <p className="mt-2">Name: _______________ Signature: _______________ Date: ___</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Common Mistakes</h3>
            <div className="grid sm:grid-cols-3 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Too Vague on Scope</h4>
                <p className="text-gray-400 text-sm">&quot;Website design&quot; means nothing. Specify pages, features, revisions, and deliverables. Vague scope invites scope creep.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Missing Validity</h4>
                <p className="text-gray-400 text-sm">Without a validity period, a client could accept a 6-month-old quote and hold you to outdated pricing. Always state &quot;Valid for X days.&quot;</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">No Exclusions</h4>
                <p className="text-gray-400 text-sm">If you do not explicitly state what is excluded, the client will assume everything is included. Exclusions are your best defence against scope creep.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Writing Quotes That Win Work */}
        <section id="writing-quotes-that-win">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Writing Quotes That Win Work</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Sending a quote is not just administrative &mdash; it is <strong className="text-white">one of the most important sales moments in your freelance business</strong>. The client has expressed interest and asked for a price. What you send back determines whether you win the job or lose it to a competitor. Here are the strategies that consistently win more work.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Lead With Value, Not Price</h3>
            <p className="text-gray-300 leading-relaxed">
              Start your quote with a brief summary of <strong className="text-white">what the client will get and why it matters to them</strong> &mdash; not with the price. A quote that begins with &quot;Investment: $5,000&quot; puts the client in cost-evaluation mode immediately. A quote that begins with &quot;We will design and build a conversion-focused website that showcases your services and generates leads from day one&quot; frames the price as an investment in results. The price should appear after the client understands the value.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Use Itemised Line Items</h3>
            <p className="text-gray-300 leading-relaxed">
              Break your total into visible line items. A $5,000 lump sum feels arbitrary. But when a client sees <strong className="text-white">Discovery ($500) + Design ($1,800) + Development ($2,000) + Testing &amp; QA ($400) + Project Management ($300) = $5,000</strong>, they understand where their money goes. Line items justify the total and make it harder for clients to say &quot;that seems too expensive&quot; because they can see the work involved.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Include a Brief &quot;Approach&quot; Section</h3>
            <p className="text-gray-300 leading-relaxed">
              Before listing the price, include 2&ndash;3 sentences about <strong className="text-white">how you plan to approach the project</strong>. This shows the client you have thought about their specific situation, not just pasted a template. For example: &quot;Based on our conversation, the key goal is increasing online bookings. We will focus the homepage on a clear booking CTA, with social proof and a streamlined 3-step booking flow.&quot; This builds confidence that you understand the problem.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Offer 2&ndash;3 Pricing Tiers</h3>
            <p className="text-gray-300 leading-relaxed">
              The <strong className="text-white">&quot;decoy effect&quot;</strong> is one of the most powerful pricing strategies. Instead of a single price, offer three tiers:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-400 font-semibold mb-2">Good</h4>
                <p className="text-gray-400 text-sm">The basics &mdash; what they need, nothing more. Serves as an anchor showing the minimum viable scope.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-5">
                <h4 className="text-amber-400 font-semibold mb-2">Better (Target)</h4>
                <p className="text-gray-400 text-sm">The recommended option &mdash; includes everything they need plus extras that deliver clear value. This is the tier you want them to choose.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-400 font-semibold mb-2">Best</h4>
                <p className="text-gray-400 text-sm">The premium option &mdash; everything, plus strategic extras. Makes the &quot;Better&quot; tier look like a great deal by comparison.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Respond Quickly</h3>
            <p className="text-gray-300 leading-relaxed">
              Speed matters more than most freelancers realise. Research consistently shows that <strong className="text-white">quotes sent within 24 hours of the initial enquiry win over 50% more work</strong> than quotes sent after 48+ hours. The client is most engaged when they first reach out. Every day you delay, their urgency fades and competitors respond. Set a personal rule: every quote goes out within 24 hours. If you need more information, respond within an hour acknowledging the request and asking your clarifying questions.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Follow Up (Most Freelancers Do Not)</h3>
            <p className="text-gray-300 leading-relaxed">
              A shocking number of freelancers send a quote and then wait passively for a response. <strong className="text-white">If you have not heard back within 3&ndash;5 days, follow up</strong>. A simple message: &quot;Hi [Name], just checking in on the quote I sent through on [date]. Happy to jump on a quick call if you have any questions or want to discuss the scope.&quot; This single habit can increase your quote acceptance rate by 20&ndash;30%.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Australian Freelance Pricing Guide</h3>
            <p className="text-gray-300 leading-relaxed">
              To help you benchmark your quotes, here are typical price ranges for common Australian freelance services in 2025&ndash;26:
            </p>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Service</th>
                    <th className="text-left text-sm font-medium text-amber-400 px-6 py-4">Typical Range (AUD)</th>
                    <th className="text-left text-sm font-medium text-orange-400 px-6 py-4">Pricing Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white text-sm font-medium">Website Design &amp; Build</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">$3,000 &ndash; $15,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Per project</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white text-sm font-medium">Logo &amp; Branding</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">$500 &ndash; $5,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Per project</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white text-sm font-medium">Copywriting</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">$200 &ndash; $800</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Per page</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white text-sm font-medium">Photography</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">$800 &ndash; $3,000</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Per day</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white text-sm font-medium">Consulting</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">$150 &ndash; $500</td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Per hour</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">The Confidence Rule</p>
              <p className="text-gray-400 text-sm">
                Never apologise for your price. If you write &quot;I know this might seem expensive, but...&quot; you have already undermined your own value. <strong className="text-gray-200">State your price with confidence and let the scope justify it.</strong> If a client thinks you are too expensive, they are either not the right client or your quote did not communicate enough value. The fix is better positioning, not a lower price.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Quote Validity, Revisions, and Acceptance */}
        <section id="validity-revisions-acceptance">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Quote Validity, Revisions, and Acceptance</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A quote is not a forever document. It has a <strong className="text-white">lifecycle: creation, validity period, acceptance (or expiry), and potential revision</strong>. Understanding this lifecycle protects you from being locked into outdated pricing and gives you a framework for handling the common scenarios that arise.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Validity Periods</h3>
            <p className="text-gray-300 leading-relaxed">
              Every quote should include a clear validity period. The standard in Australian business is <strong className="text-white">14&ndash;30 days</strong>. This exists to protect you: your costs (time, materials, subcontractors) may change, your availability may shift, and market conditions evolve. Without a stated validity, the client could theoretically accept a quote from six months ago and hold you to the price.
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">7d</span>
                <div>
                  <p className="text-white font-medium text-sm">Short Validity (7&ndash;14 days)</p>
                  <p className="text-gray-400 text-sm">Use when costs are volatile &mdash; imported materials, fluctuating subcontractor rates, or high-demand periods where your availability may change quickly.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">30d</span>
                <div>
                  <p className="text-white font-medium text-sm">Standard Validity (30 days)</p>
                  <p className="text-gray-400 text-sm">The most common choice. Gives the client enough time to review, compare options, and get internal approval while protecting you from significant cost changes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">60d</span>
                <div>
                  <p className="text-white font-medium text-sm">Extended Validity (60+ days)</p>
                  <p className="text-gray-400 text-sm">Only use for large corporate clients with slow procurement cycles. Build a margin buffer into the price to account for potential cost increases during the extended period.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Revised Quotes</h3>
            <p className="text-gray-300 leading-relaxed">
              When the scope changes &mdash; and it often does &mdash; <strong className="text-white">always issue a new, numbered revised quote rather than amending verbally or via email</strong>. Verbal agreements about price changes are almost impossible to enforce if a dispute arises. A revised quote creates a clear paper trail: &quot;Quote #QTE-042-R1 supersedes Quote #QTE-042 and reflects the following scope changes...&quot; The client accepts the new quote, and both parties are aligned.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Common triggers for revised quotes include: the client adds new requirements, the discovery process reveals unexpected complexity, the timeline changes significantly (rush jobs should cost more), or external factors change your costs (supplier price increases, exchange rate shifts).
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Acceptance Methods</h3>
            <p className="text-gray-300 leading-relaxed">
              A quote becomes a binding agreement when the client <strong className="text-white">accepts it</strong>. Acceptance can occur in several ways:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Formal Acceptance</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Signed quote</strong> &mdash; client signs and returns the document</li>
                  <li><strong className="text-gray-200">Written confirmation</strong> &mdash; email stating &quot;I accept this quote&quot;</li>
                  <li><strong className="text-gray-200">Purchase order</strong> &mdash; client issues a PO referencing the quote number</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-orange-400 font-medium mb-2">Implied Acceptance</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Payment of deposit</strong> &mdash; paying the deposit signals acceptance</li>
                  <li><strong className="text-gray-200">Instructing to proceed</strong> &mdash; &quot;Go ahead&quot; or &quot;Let&apos;s start&quot;</li>
                  <li><strong className="text-gray-200">Conduct</strong> &mdash; acting as if the quote is accepted (providing materials, etc.)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">What Happens After Acceptance?</h3>
            <p className="text-gray-300 leading-relaxed">
              Once a client accepts your quote, it becomes a <strong className="text-white">legally binding contract</strong>. You are obligated to deliver the scope of work at the quoted price, and the client is obligated to pay. This is why the scope description in your quote must be precise &mdash; it defines the boundaries of your obligation. Any work outside the quoted scope requires a revised quote and fresh acceptance.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Withdrawing a Quote</h3>
            <p className="text-gray-300 leading-relaxed">
              Can you withdraw a quote after sending it? <strong className="text-white">Yes, provided the client has not yet accepted it.</strong> Before acceptance, a quote is an offer that you can withdraw at any time. Simply notify the client in writing: &quot;I am writing to withdraw Quote #QTE-042 dated [date]. This quote is no longer valid.&quot; After acceptance, however, you are in contract territory &mdash; withdrawing at that point may expose you to a breach of contract claim.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Expired Quotes</h3>
            <p className="text-gray-300 leading-relaxed">
              When a quote passes its validity date without acceptance, you have <strong className="text-white">no obligation to honour the original price</strong>. If the client comes back after expiry, you can either reissue the same quote with a new validity period (if pricing has not changed) or issue a revised quote at current rates. It is good practice to proactively reach out a few days before expiry: &quot;Hi [Name], just a heads up that the quote I sent will expire on [date]. Would you like me to extend it, or shall we discuss any changes?&quot;
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Always Get Written Acceptance</p>
              <p className="text-gray-400 text-sm">
                While verbal and implied acceptance are legally valid, they are <strong className="text-gray-200">much harder to prove in a dispute</strong>. Make it your standard practice to get written acceptance &mdash; even a simple email reply saying &quot;Accepted, please proceed&quot; creates a clear record. InvoiceFlow includes a digital acceptance feature where clients can accept quotes with a single click, timestamped and recorded.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Quote-to-Invoice Workflow with InvoiceFlow */}
        <section id="quote-to-invoice-workflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Quote-to-Invoice Workflow with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The quote-to-invoice pipeline is the backbone of freelance revenue. InvoiceFlow is designed to make this workflow <strong className="text-white">seamless, professional, and trackable</strong> from the moment you create a quote to the moment you receive payment.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Create Professional Quotes from Templates</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Start from pre-built templates tailored to common freelance services &mdash; web design, copywriting, consulting, photography, and more. Each template includes best-practice scope descriptions, exclusion sections, and pricing structures. Customise with your branding, ABN, and default terms, then save as your own reusable templates. Creating a polished quote takes under 5 minutes.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Client Acceptance Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Send quotes directly to clients via email with a one-click acceptance button. Track in real time whether the quote has been viewed, is pending, has been accepted, or was declined. Get instant notifications when a client accepts so you can start work immediately. No more wondering whether the client received your quote or is still reviewing it.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">One-Click Quote-to-Invoice Conversion</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When a client accepts a quote, convert it to an invoice with a single click. All the details &mdash; client information, line items, pricing, GST, payment terms &mdash; transfer automatically. No re-typing, no copy-paste errors. The invoice references the original quote number for a clear audit trail. For milestone projects, generate multiple invoices from a single quote, one per milestone.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automatic Quote Numbering</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow automatically assigns sequential quote numbers (QTE-001, QTE-002, etc.) so your records are always organised. Revised quotes are tracked with revision suffixes (QTE-042-R1, QTE-042-R2). You can customise the prefix and starting number to match your existing system. Every quote is archived and searchable for easy retrieval.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Quote Analytics</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track your quoting performance with built-in analytics: <strong className="text-gray-200">acceptance rate</strong> (what percentage of your quotes are accepted?), <strong className="text-gray-200">average quote value</strong> (are you quoting higher or lower over time?), <strong className="text-gray-200">time to accept</strong> (how long do clients take to decide?), and <strong className="text-gray-200">conversion value</strong> (total revenue from accepted quotes). Use these insights to refine your pricing, improve your quote quality, and identify which types of work have the highest win rate.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Follow-Up Reminders for Unanswered Quotes</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If a client has not responded to your quote within your configured timeframe (default: 5 days), InvoiceFlow sends a polite automated follow-up on your behalf. A second follow-up goes out before the quote expires. You can customise the timing and wording, or trigger manual follow-ups from the dashboard. Never lose a deal because a quote got buried in someone&apos;s inbox.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">The Full Lifecycle</p>
              <p className="text-gray-400 text-sm">
                InvoiceFlow manages the entire journey: <strong className="text-gray-200">Create quote &rarr; Send to client &rarr; Track views &rarr; Follow up automatically &rarr; Record acceptance &rarr; Convert to invoice &rarr; Send invoice &rarr; Track payment &rarr; Send reminders &rarr; Record payment</strong>. Every step is tracked, every document is linked, and your records are always complete. No more spreadsheets, no more manual follow-ups, no more lost quotes.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you quote, price, and invoice with confidence.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-amber-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-amber-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on quoting, invoicing, and freelancing in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-amber-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-amber-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            From Quote to Paid &mdash; In Minutes
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow streamlines the entire quote-to-invoice-to-payment workflow. Create professional quotes, track acceptance, convert to invoices with one click, and get paid faster &mdash; all from one dashboard built for Australian freelancers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/rate-calculator">
              <Button variant="secondary">Calculate Your Rates</Button>
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
