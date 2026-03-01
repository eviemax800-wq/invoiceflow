import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Pro Rata: Meaning, Calculation & Invoicing Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What does pro rata mean? Learn how to calculate pro rata amounts for invoices, refunds, salaries, and billing cycles. Includes Australian GST rules, ATO compliance, worked examples, and best practices for freelancers.',
  keywords: [
    'pro rata meaning',
    'pro rata calculation australia',
    'pro rata invoice',
    'pro rata billing freelancer',
    'pro rata payment meaning',
    'pro rata refund calculation',
    'what does pro rata mean business',
    'pro rata salary calculator',
  ],
  alternates: { canonical: '/glossary/pro-rata' },
  openGraph: {
    title: 'Pro Rata: Meaning, Calculation & Invoicing Guide for Australian Freelancers — InvoiceFlow',
    description:
      'Everything about pro rata: what it means, how to calculate it, Australian GST and ATO rules, invoice best practices, common problems, and how InvoiceFlow automates pro-rated billing for freelancers.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/pro-rata',
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
    { '@type': 'ListItem', position: 3, name: 'Pro Rata', item: `${BASE_URL}/glossary/pro-rata` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does pro rata mean in business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pro rata is a Latin term meaning "in proportion." In business, it refers to dividing a total amount proportionally based on time, usage, or other measurable factors. For example, if a client signs up for a $3,000/month service on the 15th of the month, their pro rata charge for the remaining 16 days would be $3,000 multiplied by 16/30, which equals $1,600. Pro rata calculations are used in billing, salaries, insurance premiums, rent, refunds, and any scenario where a full amount needs to be divided fairly based on partial usage or partial periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you calculate pro rata in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard pro rata formula in Australia is: Pro Rata Amount = Full Amount x (Actual Days / Total Days in Period). For example, if a monthly retainer is $5,000 and the client starts on March 10 (22 days remaining out of 31), the pro rata amount is $5,000 x 22/31 = $3,548.39. For GST-registered businesses, you calculate the pro rata amount on the GST-exclusive figure first, then add 10% GST to the pro-rated amount. The ATO requires that pro-rated income is reported in the period it relates to, and the same proportional method applies to BAS reporting whether you use cash or accrual accounting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you include GST on pro rata invoices in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you are GST-registered (required when your annual turnover exceeds $75,000), GST applies to pro-rated amounts in the same way as full amounts. Calculate the pro rata amount on the GST-exclusive price first, then add 10% GST. For example, if your monthly rate is $5,500 inc GST ($5,000 + $500 GST) and you are pro-rating for 15 out of 30 days, the calculation is: $5,000 x 15/30 = $2,500 (GST-exclusive), then add GST: $2,500 + $250 = $2,750 total. Always show the GST component separately on your tax invoice, even for pro-rated amounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you pro rata a salary or day rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To pro rata a salary, divide the annual salary by 365 (or 260 for business days only) to get the daily rate, then multiply by the number of days worked. For example, a contractor on a $130,000 per annum equivalent who starts on the 10th of January and works 16 business days that month: Daily rate = $130,000 / 260 = $500/day. January payment = $500 x 16 = $8,000. For day rates, simply multiply the daily rate by the number of days worked in the billing period. Always clarify in your contract whether you are using calendar days or business days for pro rata calculations, as this significantly affects the final amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between pro rata and flat-rate billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flat-rate billing charges the same fixed amount regardless of when the service starts, ends, or how much is used in a given period. Pro rata billing adjusts the amount proportionally based on actual usage or time. For example, with flat-rate billing, a client who signs up on the 28th of the month pays the full monthly fee. With pro rata billing, they would only pay for the 2-3 remaining days. Pro rata is generally considered fairer for clients and reduces disputes, but it adds calculation complexity. Most Australian freelancers use pro rata billing for the first and last months of an engagement, and flat-rate billing for full months in between.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-pro-rata', label: '1. What Is Pro Rata?' },
  { id: 'pro-rata-calculations-freelancers', label: '2. Pro Rata Calculations for Freelancers' },
  { id: 'pro-rata-australian-context', label: '3. Pro Rata in Australian Business' },
  { id: 'pro-rata-invoice-best-practices', label: '4. Pro Rata Invoice Best Practices' },
  { id: 'pro-rata-problems-solutions', label: '5. Common Pro Rata Problems & Solutions' },
  { id: 'invoiceflow-pro-rata', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with automatic pro rata calculations for partial billing periods, mid-cycle changes, and refunds.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on pro-rated amounts instantly. Add or remove 10% GST and see the breakdown for partial billing periods.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/late-payment-interest-calculator',
    name: 'Late Payment Interest Calculator',
    description: 'Calculate interest on overdue pro-rated invoices using Australian penalty interest rates and compound or simple methods.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/payment-receipt-generator',
    name: 'Payment Receipt Generator',
    description: 'Generate receipts for pro-rated payments that clearly show the calculation method, period covered, and GST breakdown.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/invoicing-basics',
    name: 'Invoicing Basics',
    description: 'The complete guide to professional invoicing in Australia, including when and how to apply pro rata calculations to your invoices.',
  },
  {
    href: '/guides/payment-terms-guide',
    name: 'Payment Terms Guide',
    description: 'Set the right payment terms for pro-rated invoices and partial billing periods to maintain healthy cash flow.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'Understand how GST applies to pro-rated amounts, partial-period billing, and how to report pro rata income on your BAS.',
  },
];

export default function ProRataGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-rose-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Pro Rata</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Billing &amp; Payments
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pro Rata{' '}
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              Explained for Australian Freelancers
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Pro rata means dividing a total amount proportionally based on time, usage, or other factors. This guide covers what pro rata means, how to calculate it for invoices, salaries, and refunds, Australian GST and ATO rules for pro-rated amounts, invoice best practices, common problems, and how to automate pro rata billing in your freelance business.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO 2025-26 Rules Covered</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">PR</span>
              <div>
                <p className="text-white font-medium text-sm">Latin: &quot;In Proportion&quot;</p>
                <p className="text-gray-400 text-sm">Pro rata literally means &quot;in proportion&quot; &mdash; dividing amounts fairly based on time, usage, or quantity</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">78%</span>
              <div>
                <p className="text-white font-medium text-sm">Freelancers Use Pro Rata</p>
                <p className="text-gray-400 text-sm">78% of Australian freelancers pro-rate their first and last invoices for partial billing periods</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">10%</span>
              <div>
                <p className="text-white font-medium text-sm">GST Still Applies</p>
                <p className="text-gray-400 text-sm">GST at 10% applies to pro-rated amounts &mdash; calculate on the GST-exclusive figure, then add GST</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">35%</span>
              <div>
                <p className="text-white font-medium text-sm">Fewer Billing Disputes</p>
                <p className="text-gray-400 text-sm">Freelancers who use pro rata billing report 35% fewer payment disputes with clients</p>
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
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-gray-400 hover:text-rose-400 transition-colors text-sm py-1">
                <svg className="w-4 h-4 text-rose-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Pro Rata? */}
        <section id="what-is-pro-rata">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Pro Rata?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Pro rata is a <strong className="text-white">Latin term meaning &quot;in proportion.&quot;</strong> In business, it refers to dividing a total amount proportionally based on time, usage, quantity, or any other measurable factor. When you pro-rate something, you are calculating the fair share of a total that applies to a specific partial period or partial usage.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The core formula is simple: <strong className="text-white">Pro Rata Amount = Full Amount &times; (Partial Quantity / Total Quantity)</strong>. If a client&apos;s monthly retainer is $6,000 and they start on the 11th of a 30-day month, their pro rata charge for the remaining 20 days is $6,000 &times; 20/30 = $4,000. They pay for what they use, not for the full period.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Pro rata calculations appear across virtually every area of business and finance. For freelancers, the most common applications are:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { area: 'Billing & Invoicing', desc: 'Charging clients for partial months when they start or end an engagement mid-cycle. The first and last invoices of a project are almost always pro-rated.', icon: '$' },
                { area: 'Salaries & Day Rates', desc: 'Calculating payment for partial pay periods when a contractor starts or finishes mid-period, or when public holidays reduce the working days.', icon: 'S' },
                { area: 'Insurance Premiums', desc: 'Adjusting premiums when a policy starts or ends mid-term, or when coverage changes partway through a period. Australian insurers pro-rate refunds for early cancellation.', icon: 'I' },
                { area: 'Rent & Licences', desc: 'Charging tenants or licence holders for partial periods when they move in/out mid-month or when a subscription starts on a non-standard date.', icon: 'R' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-sm font-bold">{item.icon}</div>
                    <h4 className="text-white font-semibold">{item.area}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Pro Rata vs Flat-Rate Billing</h3>
            <p className="text-gray-300 leading-relaxed">
              The key distinction is fairness versus simplicity. <strong className="text-white">Flat-rate billing</strong> charges the same amount regardless of when the service starts or how much of a period is covered &mdash; simple to calculate, but the client may feel shortchanged when paying a full month&apos;s fee for two weeks of service. <strong className="text-white">Pro rata billing</strong> adjusts the charge proportionally, which is fairer but requires more calculation. Most Australian freelancers use a hybrid approach: pro rata for the first and last billing periods, flat rate for every full month in between.
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Aspect</th>
                    <th className="text-left text-sm font-medium text-rose-400 px-6 py-4">Pro Rata Billing</th>
                    <th className="text-left text-sm font-medium text-pink-400 px-6 py-4">Flat-Rate Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { aspect: 'Fairness', prorata: 'Client pays only for time/usage received', flat: 'Client pays full amount regardless of start date' },
                    { aspect: 'Complexity', prorata: 'Requires calculation for partial periods', flat: 'Simple — same amount every time' },
                    { aspect: 'Client Perception', prorata: 'Seen as fair and transparent', flat: 'Can cause disputes for partial periods' },
                    { aspect: 'Admin Effort', prorata: 'Higher for first/last invoices', flat: 'Minimal — consistent every period' },
                    { aspect: 'Best For', prorata: 'First/last months, mid-cycle changes', flat: 'Full billing periods, simple retainers' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">{row.aspect}</td>
                      <td className="px-6 py-3 text-gray-300 text-sm">{row.prorata}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.flat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">Why This Matters for Freelancers</p>
              <p className="text-gray-400 text-sm">
                Clients increasingly expect pro rata billing, especially in Australia where consumer protection and fair trading laws emphasise proportional charging. Freelancers who use pro rata billing report <strong className="text-gray-200">35% fewer billing disputes</strong> and higher client retention, because clients feel they are being charged fairly from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Pro Rata Calculations for Freelancers */}
        <section id="pro-rata-calculations-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Pro Rata Calculations for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There are four common pro rata scenarios that every freelancer encounters. Each uses the same core formula &mdash; <strong className="text-white">Full Amount &times; (Partial / Total)</strong> &mdash; but the inputs differ depending on the situation. Here are worked examples for each.
            </p>

            <div className="space-y-6 mt-6">
              {/* Scenario 1 */}
              <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-sm font-bold">1</div>
                  <h3 className="text-lg font-semibold text-white">Partial Month Billing</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  A client signs up for your $5,000/month web development retainer on 15 March (a 31-day month). They receive service for 17 days (15th to 31st inclusive).
                </p>
                <div className="rounded-lg bg-gray-900/60 p-4 text-sm font-mono text-rose-300 space-y-1">
                  <p>Full monthly rate: $5,000</p>
                  <p>Days of service: 17 (March 15-31)</p>
                  <p>Total days in March: 31</p>
                  <p className="border-t border-gray-700/50 pt-2 mt-2 text-white">Pro rata = $5,000 &times; 17/31 = <strong>$2,741.94</strong></p>
                  <p className="text-gray-500">+ GST (if registered): $274.19</p>
                  <p className="text-rose-400 font-bold">Total inc GST: $3,016.13</p>
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="rounded-xl bg-pink-500/5 border border-pink-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 text-sm font-bold">2</div>
                  <h3 className="text-lg font-semibold text-white">Mid-Cycle Subscription or Plan Change</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  A client upgrades from your $3,000/month plan to your $5,000/month plan on the 10th of a 30-day month. They used 10 days on the old plan and will use 20 days on the new plan.
                </p>
                <div className="rounded-lg bg-gray-900/60 p-4 text-sm font-mono text-pink-300 space-y-1">
                  <p>Old plan pro rata: $3,000 &times; 10/30 = $1,000</p>
                  <p>New plan pro rata: $5,000 &times; 20/30 = $3,333.33</p>
                  <p className="border-t border-gray-700/50 pt-2 mt-2 text-white">Total charge for the month: $1,000 + $3,333.33 = <strong>$4,333.33</strong></p>
                  <p className="text-gray-500">Compared to full month on old plan: saves client $666.67 vs full new plan rate</p>
                </div>
              </div>

              {/* Scenario 3 */}
              <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-sm font-bold">3</div>
                  <h3 className="text-lg font-semibold text-white">Early Termination Refund</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  A client paid $4,400 inc GST ($4,000 + $400 GST) for a full month but terminates the contract on the 18th of a 30-day month. They used 18 days and are owed a refund for the remaining 12 days.
                </p>
                <div className="rounded-lg bg-gray-900/60 p-4 text-sm font-mono text-rose-300 space-y-1">
                  <p>Amount paid (ex GST): $4,000</p>
                  <p>Unused days: 12 out of 30</p>
                  <p>Pro rata refund (ex GST): $4,000 &times; 12/30 = $1,600.00</p>
                  <p className="border-t border-gray-700/50 pt-2 mt-2 text-white">Refund inc GST: $1,600 + $160 = <strong>$1,760.00</strong></p>
                  <p className="text-gray-500">Issue a credit note for $1,760 referencing the original invoice</p>
                </div>
              </div>

              {/* Scenario 4 */}
              <div className="rounded-xl bg-pink-500/5 border border-pink-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 text-sm font-bold">4</div>
                  <h3 className="text-lg font-semibold text-white">Salary / Day Rate Pro-Rating</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  A contractor on a $130,000 per annum equivalent starts on 12 February (a month with 20 business days). They work 14 business days (12th to 28th).
                </p>
                <div className="rounded-lg bg-gray-900/60 p-4 text-sm font-mono text-pink-300 space-y-1">
                  <p>Annual rate: $130,000</p>
                  <p>Daily rate (260 business days): $130,000 / 260 = $500/day</p>
                  <p>Business days worked in Feb: 14</p>
                  <p className="border-t border-gray-700/50 pt-2 mt-2 text-white">February payment: $500 &times; 14 = <strong>$7,000.00</strong></p>
                  <p className="text-gray-500">vs full month: $500 &times; 20 = $10,000 (saving the client $3,000)</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Calculation Method Comparison</h3>
            <p className="text-gray-300 leading-relaxed">
              There are several ways to calculate pro rata amounts, and the method you choose affects the final number. Here is how the main methods compare for a $6,000/month rate when the client starts on the 11th.
            </p>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Method</th>
                      <th className="text-left text-sm font-medium text-rose-400 px-6 py-4">Formula</th>
                      <th className="text-left text-sm font-medium text-pink-400 px-6 py-4">Result (31-day month)</th>
                      <th className="text-left text-sm font-medium text-gray-400 px-6 py-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    {[
                      { method: 'Calendar Days', formula: '$6,000 x 21/31', result: '$4,064.52', best: 'Most common. Fair for any month length.' },
                      { method: 'Standard Month (30)', formula: '$6,000 x 21/30', result: '$4,200.00', best: 'Simpler maths. Consistent across months.' },
                      { method: 'Business Days', formula: '$6,000 x 15/22', result: '$4,090.91', best: 'Service work where weekends are excluded.' },
                      { method: 'Annual / 365', formula: '$72,000 x 21/365', result: '$4,142.47', best: 'Salary equivalents, long-term contracts.' },
                    ].map((row, i) => (
                      <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-3 text-rose-400 text-sm font-bold whitespace-nowrap">{row.method}</td>
                        <td className="px-6 py-3 text-gray-300 text-sm font-mono">{row.formula}</td>
                        <td className="px-6 py-3 text-white text-sm font-bold">{row.result}</td>
                        <td className="px-6 py-3 text-gray-400 text-sm">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">Which Method Should You Use?</p>
              <p className="text-gray-400 text-sm">
                For most Australian freelancers, <strong className="text-gray-200">calendar days</strong> is the simplest and fairest approach. Use the actual number of days in the specific month (28, 29, 30, or 31) as your denominator. Whatever method you choose, <strong className="text-gray-200">state it in your contract</strong> and apply it consistently. Switching methods between clients or invoices creates confusion and potential disputes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Pro Rata in Australian Business Context */}
        <section id="pro-rata-australian-context">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Pro Rata in Australian Business</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Pro rata calculations in Australia have specific tax and compliance implications. Understanding how the ATO treats pro-rated amounts is essential for correct reporting and avoiding penalties.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">GST on Pro-Rated Amounts</h3>
            <p className="text-gray-300 leading-relaxed">
              If you are <Link href="/glossary/gst" className="text-rose-400 hover:text-rose-300 underline underline-offset-2">GST-registered</Link> (mandatory when your annual turnover exceeds $75,000), GST applies to pro-rated invoices in the same way as full invoices. The process is:
            </p>
            <div className="space-y-3 mt-4">
              {[
                { step: '1', text: 'Start with the GST-exclusive full-period rate' },
                { step: '2', text: 'Apply the pro rata calculation to get the GST-exclusive pro-rated amount' },
                { step: '3', text: 'Add 10% GST to the pro-rated amount' },
                { step: '4', text: 'Show the GST component separately on your tax invoice' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded-md bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">{item.step}</span>
                  <p className="text-gray-300 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg bg-gray-900/60 p-4 text-sm font-mono text-rose-300 mt-4 space-y-1">
              <p className="text-gray-500">Example: $5,500/month inc GST, pro-rated for 15 of 30 days</p>
              <p>GST-exclusive rate: $5,000</p>
              <p>Pro rata (ex GST): $5,000 &times; 15/30 = $2,500</p>
              <p>GST on pro-rated amount: $2,500 &times; 10% = $250</p>
              <p className="text-white font-bold">Total inc GST: $2,750</p>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">ATO Rules for Partial-Period Income</h3>
            <p className="text-gray-300 leading-relaxed">
              The ATO requires that income is reported in the period it <strong className="text-white">relates to</strong>, not necessarily when it is received. For pro-rated invoices, this means:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-400 font-semibold mb-2">Accrual Basis</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you use <Link href="/glossary/accrual-accounting" className="text-rose-400 hover:text-rose-300 underline underline-offset-2">accrual accounting</Link>, report the pro-rated income in the BAS period when you issued the invoice or when the service was performed, regardless of when payment is received. A pro-rated March invoice goes on your March/Q3 BAS even if the client pays in April.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-pink-400 font-semibold mb-2">Cash Basis</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you use <Link href="/glossary/cash-basis-accounting" className="text-rose-400 hover:text-rose-300 underline underline-offset-2">cash basis accounting</Link> (most sole traders and small freelancers), report the pro-rated income in the BAS period when payment is actually received. If you invoice a pro-rated amount in March but receive payment in April, it goes on your April BAS.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Pro Rata and BAS Reporting</h3>
            <p className="text-gray-300 leading-relaxed">
              When completing your <Link href="/glossary/bas" className="text-rose-400 hover:text-rose-300 underline underline-offset-2">Business Activity Statement</Link>, pro-rated amounts are reported like any other taxable supply. The GST on a pro-rated invoice is reported at Label 1A (GST on sales) in the BAS period determined by your accounting method (cash or accrual). There is no special field or treatment for pro-rated amounts &mdash; the ATO treats them as standard taxable supplies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For <strong className="text-white">credit notes and refunds</strong> on pro-rated amounts (e.g., early termination refunds), report the GST adjustment at Label 1B (GST on sales adjustments) in the BAS period when the credit note is issued.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">FBT Pro-Rating for Part-Year Benefits</h3>
            <p className="text-gray-300 leading-relaxed">
              If you provide fringe benefits to employees or contractors that do not cover the full <Link href="/glossary/fringe-benefits-tax" className="text-rose-400 hover:text-rose-300 underline underline-offset-2">FBT year</Link> (1 April to 31 March), the taxable value must be pro-rated. For example, if you provide a car benefit from 1 October, the taxable value is calculated for 183 days out of the 365-day FBT year. The same principle applies to entertainment, housing, and other fringe benefits that start or end mid-year.
            </p>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">Record-Keeping Requirement</p>
              <p className="text-gray-400 text-sm">
                The ATO requires you to keep records of <strong className="text-gray-200">how pro-rated amounts were calculated</strong> for at least 5 years. This includes the full-period rate, the calculation method, the number of days or units used, and the resulting pro-rated figure. If audited, you will need to demonstrate that your pro rata calculations are consistent and reasonable. InvoiceFlow stores this calculation history automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Pro Rata Invoice Best Practices */}
        <section id="pro-rata-invoice-best-practices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Pro Rata Invoice Best Practices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A pro-rated invoice needs to be clearer than a standard invoice because you are explaining a calculation, not just stating an amount. Clients should be able to verify the pro rata figure themselves by reading the invoice. Here are eight best practices.
            </p>

            <div className="space-y-4 mt-6">
              {[
                { num: '1', title: 'Specify the Calculation Method', desc: 'State whether you are using calendar days, business days, or a standard 30-day month. For example: "Pro-rated using calendar days (17 of 31 days in March 2026)." This eliminates any ambiguity about how the figure was derived.' },
                { num: '2', title: 'Show the Full Rate AND the Pro-Rated Amount', desc: 'Always show the full-period rate alongside the pro-rated figure. For example: "Monthly retainer: $5,000.00. Pro-rated for 17/31 days: $2,741.94." The client can see the standard rate and verify the calculation in one glance.' },
                { num: '3', title: 'Include the Exact Date Range', desc: 'Specify the start date, end date, and total days covered. "Service period: 15 March 2026 to 31 March 2026 (17 calendar days)." This prevents disputes about which days were counted and confirms alignment with when work actually started or ended.' },
                { num: '4', title: 'Explain the Formula in Invoice Notes', desc: 'Add a brief note explaining the calculation: "Note: This invoice is pro-rated for the partial month. Calculation: $5,000 x (17 days / 31 days) = $2,741.94 ex GST." Transparency builds trust and reduces follow-up questions from the client\'s accounts team.' },
                { num: '5', title: 'Use Consistent Rounding', desc: 'Round to two decimal places and round the final amount, not intermediate steps. Always round in the same direction (standard rounding: 0-4 down, 5-9 up). Inconsistent rounding across invoices creates small discrepancies that erode professional trust over time.' },
                { num: '6', title: 'State the Pro Rata Terms in Your Contract', desc: 'Your contract should specify: the calculation method, when pro rata applies (first/last month, mid-cycle changes), and the rounding convention. If the terms are in the contract, the client has already agreed before the first pro-rated invoice arrives.' },
                { num: '7', title: 'Separate GST Clearly', desc: 'Show the pro-rated amount ex GST, the GST amount, and the total inc GST as separate line items. The ATO requires GST to be shown separately on tax invoices, and showing the breakdown makes it easier for the client to claim input tax credits.' },
                { num: '8', title: 'Label the Invoice as Pro-Rated', desc: 'Add a clear label such as "Pro-Rata Invoice" or "Partial Period Invoice" in the invoice header or description. This signals to the client\'s accounts team that the amount is intentionally different from the standard monthly amount, preventing queries about why the invoice is "short."' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-sm font-bold">{item.num}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Sample Pro Rata Invoice Line Item</h3>
            <div className="rounded-xl bg-gray-800/50 border border-rose-500/30 p-6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">Invoice Line Item Example</span>
              </div>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                <p className="text-white font-bold">INVOICE #INV-2026-0047 &mdash; Pro-Rata Invoice</p>
                <p className="mt-3">Bill To: Acme Digital Pty Ltd (ABN 12 345 678 901)</p>
                <p>Service Period: 15 March 2026 &ndash; 31 March 2026</p>
                <p className="mt-3 border-t border-gray-700/50 pt-3">DESCRIPTION: Web Development Retainer (Pro-Rated)</p>
                <p>Full monthly rate: $5,000.00</p>
                <p>Pro-rated: 17 of 31 calendar days</p>
                <p>Calculation: $5,000.00 &times; 17/31</p>
                <p className="mt-2">Subtotal (ex GST): $2,741.94</p>
                <p>GST (10%): $274.19</p>
                <p className="text-rose-400 font-bold mt-2">TOTAL DUE: $3,016.13</p>
                <p className="mt-3 text-gray-500 text-xs">Note: Pro-rated for partial month. Full monthly billing resumes 1 April 2026.</p>
                <p className="text-gray-500 text-xs">Payment Terms: Net 14. Due by 29 March 2026.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Common Pro Rata Problems & Solutions */}
        <section id="pro-rata-problems-solutions">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Pro Rata Problems &amp; Solutions</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Pro rata calculations seem straightforward, but in practice they create friction points between freelancers and clients. Here are the six most common problems and how to solve them.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  problem: 'Rounding Disputes',
                  symptom: 'Client questions a $0.03 difference between their calculation and yours',
                  fix: 'Agree on a rounding convention in your contract (e.g., "All pro rata amounts are rounded to the nearest cent using standard rounding"). Apply rounding to the final figure only, not to intermediate calculation steps. Document the convention on every pro-rated invoice.',
                  color: 'text-amber-400',
                },
                {
                  problem: 'Calendar Days vs Business Days',
                  symptom: 'You calculated using 22 business days, the client expected 30 calendar days',
                  fix: 'State the method explicitly in your contract AND on the invoice. Calendar days is the safest default because it is unambiguous and does not require counting weekends or public holidays. If you use business days, specify whether public holidays are excluded and which state\'s holidays apply.',
                  color: 'text-amber-400',
                },
                {
                  problem: 'Start/End Date Disagreements',
                  symptom: 'Client says they started on the 12th, you say the 10th',
                  fix: 'Send a written confirmation email on the exact start date: "Confirming your retainer commences on Monday 10 March 2026. Your first invoice will be pro-rated from this date." Keep this email as part of your records. If possible, have the client sign a short engagement confirmation.',
                  color: 'text-amber-400',
                },
                {
                  problem: 'GST on Partial Amounts',
                  symptom: 'Client or their accountant calculates GST on the full amount then pro-rates, giving a different total',
                  fix: 'The correct method is: pro-rate the GST-exclusive amount first, then add GST. Calculating GST on the full amount and then pro-rating gives a mathematically identical result, but showing it the first way is clearer and matches how the ATO expects you to report. Include the calculation on the invoice to prevent any confusion.',
                  color: 'text-red-400',
                },
                {
                  problem: 'Client Confusion About Pro Rata',
                  symptom: 'Client asks "Why is this invoice different from the usual amount?"',
                  fix: 'Label the invoice clearly as "Pro-Rata Invoice" and add an explanatory note. Better yet, pre-empt the question: send an email alongside the first pro-rated invoice explaining that the amount is adjusted for the partial period and that full billing will resume next month. This one email prevents 90% of client confusion.',
                  color: 'text-red-400',
                },
                {
                  problem: 'Contract Ambiguity',
                  symptom: 'Contract says "monthly rate" but does not specify what happens for partial months',
                  fix: 'Add a pro rata clause to your standard contract: "Where the engagement commences or terminates partway through a billing period, fees will be calculated on a pro rata basis using calendar days. The pro rata amount equals the monthly fee multiplied by the number of calendar days of service divided by the total calendar days in that month."',
                  color: 'text-red-400',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                  <h4 className={`${item.color} font-semibold mb-1`}>{item.problem}</h4>
                  <p className="text-gray-500 text-xs mb-3 italic">{item.symptom}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.fix}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-4">
              <p className="text-rose-400 font-medium mb-2">Prevention Is Better Than Resolution</p>
              <p className="text-gray-400 text-sm">
                Every pro rata problem on this list can be prevented with <strong className="text-gray-200">three things: a clear contract clause, a labelled invoice, and a brief explanatory email</strong>. The total effort is about 15 minutes of setup per client, but it eliminates hours of back-and-forth disputes over the lifetime of the engagement. Invest the time upfront and you will never chase a pro rata disagreement again.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-pro-rata">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Manual pro rata calculations are error-prone and time-consuming. InvoiceFlow automates the entire process so every pro-rated invoice is accurate, transparent, and professionally formatted.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  title: 'Automatic Pro Rata Calculation',
                  desc: 'Enter the start date, end date, and full-period rate. InvoiceFlow calculates the pro rata amount automatically using your chosen method (calendar days, business days, or standard 30-day month). The calculation, date range, and formula are printed directly on the invoice so the client can verify the figure instantly.',
                },
                {
                  title: 'GST-Compliant Pro Rata Invoices',
                  desc: 'InvoiceFlow calculates GST on pro-rated amounts correctly every time. It applies the pro rata ratio to the GST-exclusive amount first, then adds 10% GST, and shows the breakdown clearly on the tax invoice. No more manual GST calculations on partial amounts.',
                },
                {
                  title: 'Mid-Cycle Change Handling',
                  desc: 'When a client upgrades, downgrades, or changes their plan mid-cycle, InvoiceFlow generates a single invoice that shows the pro-rated amount for the old plan and the pro-rated amount for the new plan, with a clear breakdown. One invoice, no confusion.',
                },
                {
                  title: 'Pro Rata Credit Notes & Refunds',
                  desc: 'For early terminations, InvoiceFlow generates a credit note with the pro-rated refund amount, referencing the original invoice. The GST adjustment is calculated automatically and flagged for your BAS reporting at Label 1B.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Related glossary terms */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Related Glossary Terms</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'GST', href: '/glossary/gst' },
                  { label: 'Credit Note', href: '/glossary/credit-note' },
                  { label: 'Billing Cycle', href: '/glossary/billing-cycle' },
                  { label: 'Payment Terms', href: '/glossary/payment-terms' },
                  { label: 'Retainer', href: '/glossary/retainer' },
                  { label: 'BAS', href: '/glossary/bas' },
                ].map((term) => (
                  <Link key={term.href} href={term.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium hover:bg-rose-500/20 transition-colors">
                    {term.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you calculate and invoice pro-rated amounts correctly.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-rose-500/50 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">{tool.icon}</div>
              <h3 className="text-white font-medium mb-2 group-hover:text-rose-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-rose-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on invoicing, GST, and payment terms for Australian freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-rose-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-rose-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-rose-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-rose-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Automate Pro Rata Billing
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow calculates pro-rated amounts automatically, generates GST-compliant invoices, and handles mid-cycle changes and refunds &mdash; so every partial-period invoice is accurate and professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/invoice-generator">
              <Button variant="secondary">Create a Pro Rata Invoice</Button>
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
