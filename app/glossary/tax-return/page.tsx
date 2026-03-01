import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Tax Return: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
  description:
    'How to lodge your tax return as a freelancer in Australia. Learn due dates (Oct 31 self-lodge, May 15 via agent), deductions, what to report, common mistakes, and step-by-step lodgement guide. Updated for 2025-26.',
  keywords: [
    'tax return freelancer australia',
    'sole trader tax return',
    'how to lodge tax return australia',
    'individual tax return 2025-26',
    'freelance tax return guide',
    'myTax lodge tax return',
    'tax return due date australia',
    'freelancer tax deductions australia',
  ],
  alternates: { canonical: '/glossary/tax-return' },
  openGraph: {
    title: 'Tax Return: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about lodging a tax return: due dates, what to report, deductions, step-by-step lodgement, common mistakes, and how to maximise your refund.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/tax-return',
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
    { '@type': 'ListItem', position: 3, name: 'Tax Return', item: `${BASE_URL}/glossary/tax-return` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is the tax return due for freelancers in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you lodge your own tax return (self-lodge via myTax), the deadline is 31 October each year. If you use a registered tax agent and are registered with them by 31 October, you typically get an extended deadline of up to 15 May the following year. For example, for the 2025-26 financial year (ending 30 June 2026), self-lodgers must lodge by 31 October 2026, while those using a tax agent may have until 15 May 2027. If you have an outstanding tax return from a prior year, you may lose access to the tax agent extension and revert to the 31 October deadline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do sole traders lodge a separate business tax return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Sole traders do not lodge a separate business tax return. As a sole trader, you lodge an individual tax return and include a Business and Professional Items Schedule (also known as the business schedule) as part of it. This schedule reports your ABN, industry code, business income, and business expenses by category. Your business income and expenses flow directly into your individual tax return, and you pay tax at individual tax rates on your taxable income. Only companies (Pty Ltd) lodge a separate company tax return.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I lodge my tax return late?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you lodge your tax return after the deadline without a valid reason, the ATO can issue a Failure to Lodge (FTL) penalty. The penalty is calculated at one penalty unit ($313 as of 2025-26) for each 28-day period or part thereof that the return is overdue, up to a maximum of five penalty units ($1,565). The penalty is applied per outstanding return, so if you have multiple years overdue, each return attracts its own penalty. In addition to the FTL penalty, if you owe tax, the ATO will charge the General Interest Charge (GIC) on the outstanding amount from the original due date. The GIC rate is updated quarterly and is currently around 11% per annum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I lodge my own tax return or do I need an accountant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can lodge your own tax return for free using the ATO\'s myTax online tool, which is available through your myGov account. myTax includes pre-fill data from employers, banks, health funds, and government agencies, making it easier to complete. However, if your freelance situation is complex (multiple income sources, large deductions, first year of freelancing, overseas income, or capital gains), a registered tax agent can ensure accuracy and often identifies deductions you might miss. Tax agent fees range from $150 to $400 for a sole trader return and are fully tax-deductible as a business expense. A good rule of thumb is to consider a tax agent once your freelance income exceeds $50,000 per year.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get a tax refund in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you lodge your tax return electronically (via myTax or through a tax agent using Standard Business Reporting), the ATO typically processes refunds within 14 business days. Paper returns take significantly longer, usually 6 to 8 weeks. The 14-day timeframe starts from when the ATO receives your return, not when you submit it to your tax agent. If the ATO needs to review your return or request additional information, the processing time can be longer. Refunds are paid directly into the bank account you nominate in your return. If you owe a tax debt from a prior year, the ATO may offset your refund against that debt before paying the remainder.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-tax-return', label: '1. What Is a Tax Return?' },
  { id: 'what-to-report', label: '2. What Freelancers Need to Report' },
  { id: 'deductions', label: '3. Deductions Every Freelancer Should Claim' },
  { id: 'step-by-step', label: '4. Step-by-Step: Lodging Your Tax Return' },
  { id: 'common-mistakes', label: '5. Common Tax Return Mistakes' },
  { id: 'invoiceflow-simplifies', label: '6. How InvoiceFlow Simplifies Tax Time' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax, Medicare levy, and take-home pay before you lodge your return.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Discover every tax deduction you can claim as an Australian freelancer or sole trader.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/eofy-tax-checklist',
    name: 'EOFY Tax Checklist Generator',
    description: 'Generate a personalised end-of-financial-year checklist for your freelance business.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Prepare your Business Activity Statement with confidence using our step-by-step checklist.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'The complete guide to income tax, deductions, BAS, and everything else for Australian sole traders.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'End of financial year checklist, lodgement deadlines, and last-minute tax planning tips.',
  },
  {
    href: '/guides/superannuation-for-freelancers',
    name: 'Superannuation for Freelancers',
    description: 'How to pay yourself super, claim the tax deduction, and build retirement savings as a sole trader.',
  },
];

export default function TaxReturnGlossaryPage() {
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
            <span className="text-white">Tax Return</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tax Return{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Your annual tax return is where everything comes together &mdash; income, deductions, PAYG instalments, and your final tax bill or refund. This guide walks you through what to report, how to claim every deduction, the step-by-step lodgement process, and the costly mistakes freelancers make every year.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">Oct 31</span>
              <div>
                <p className="text-white font-medium text-sm">Due Date (Self-Lodge)</p>
                <p className="text-gray-400 text-sm">31 October if lodging yourself, or 15 May next year via a registered tax agent</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$2.6K</span>
              <div>
                <p className="text-white font-medium text-sm">Average Refund</p>
                <p className="text-gray-400 text-sm">Average tax refund for Australian individuals &mdash; freelancers with good records often get more</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$313</span>
              <div>
                <p className="text-white font-medium text-sm">FTL Penalty</p>
                <p className="text-gray-400 text-sm">Failure to Lodge penalty per 28-day period overdue, up to 5x ($1,565 max)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$18.2K</span>
              <div>
                <p className="text-white font-medium text-sm">Tax-Free Threshold</p>
                <p className="text-gray-400 text-sm">First $18,200 of taxable income is completely tax-free for Australian residents</p>
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

        {/* Section 1: What Is a Tax Return? */}
        <section id="what-is-tax-return">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Tax Return?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A tax return is your <strong className="text-white">annual declaration of income, deductions, and tax payable to the Australian Taxation Office (ATO)</strong>. It covers the financial year from 1 July to 30 June, and it is the mechanism by which the ATO determines whether you owe additional tax or are entitled to a refund. Every Australian who earns above the tax-free threshold of $18,200 must lodge a tax return.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers and sole traders, the tax return calculates your <strong className="text-white">total tax liability</strong> for the year &mdash; that is, the income tax and Medicare levy you owe based on your taxable income (total income minus deductions). It then subtracts any <strong className="text-white">PAYG instalments you have already paid</strong> throughout the year. If your PAYG instalments exceed your total tax liability, you receive a refund. If they fall short, you owe the difference.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Due Dates</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  Self-Lodge (myTax)
                </h4>
                <p className="text-white text-2xl font-bold mb-2">31 October</p>
                <p className="text-gray-400 text-sm">Lodge via the ATO&apos;s free myTax online tool through your myGov account. No cost. Pre-fill data available from mid-August.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-5">
                <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  Via Tax Agent
                </h4>
                <p className="text-white text-2xl font-bold mb-2">15 May (next year)</p>
                <p className="text-gray-400 text-sm">Must be registered with your agent by 31 October to qualify. Costs $150&ndash;$400 for a sole trader return. Fee is tax-deductible.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Sole Traders: No Separate Business Return</h3>
            <p className="text-gray-300 leading-relaxed">
              A common point of confusion: as a sole trader, you <strong className="text-white">do not lodge a separate business tax return</strong>. You lodge an <strong className="text-white">individual tax return</strong> with a Business and Professional Items Schedule attached. This schedule reports your ABN, industry code, business income, and expenses by category. Your business profit flows directly into your personal taxable income and is taxed at individual tax rates. Only companies (Pty Ltd entities) lodge a separate company tax return.
            </p>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">myTax vs Tax Agent</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">myTax</strong> is the ATO&apos;s free online lodgement tool. It is straightforward for simple returns and includes pre-fill data. A <strong className="text-gray-200">registered tax agent</strong> costs $150&ndash;$400 but can identify missed deductions, ensure accuracy, manage complex situations, and represent you in audits. If your freelance income exceeds $50,000&ndash;$60,000 or you have multiple income sources, a tax agent will typically save you more than their fee.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: What Freelancers Need to Report */}
        <section id="what-to-report">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Freelancers Need to Report</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO requires you to report <strong className="text-white">all income from all sources</strong>, not just your freelance earnings. This includes income the ATO already knows about through its data matching programs, as well as income only you know about. Getting this wrong &mdash; whether intentionally or accidentally &mdash; is one of the most common reasons the ATO initiates audits.
            </p>

            {/* Income Items */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">INCOME</span>
                <h3 className="text-lg font-semibold text-white">All Income Sources</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-emerald-400 font-medium text-sm mb-2">Business Income</p>
                  <ul className="space-y-1.5 text-sm text-gray-400">
                    <li>All invoiced freelance income</li>
                    <li>Income not yet invoiced but earned (accruals basis)</li>
                    <li>Cash payments and barter arrangements</li>
                    <li>Cryptocurrency received as payment</li>
                    <li>Platform income (Upwork, Fiverr, Airtasker, etc.)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-emerald-400 font-medium text-sm mb-2">Other Income</p>
                  <ul className="space-y-1.5 text-sm text-gray-400">
                    <li>Bank interest and term deposit interest</li>
                    <li>Dividends from shares</li>
                    <li>Capital gains from selling assets</li>
                    <li>Government payments (JobSeeker, etc.)</li>
                    <li>Rental income from investment properties</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Schedule Items */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">BUSINESS SCHEDULE</span>
                <h3 className="text-lg font-semibold text-white">Business &amp; Professional Items</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  Your business schedule requires the following information for each business activity:
                </p>
                <ul className="space-y-1.5 ml-4">
                  <li><strong className="text-gray-200">ABN</strong> &mdash; your Australian Business Number</li>
                  <li><strong className="text-gray-200">Industry code</strong> &mdash; the ANZSIC code that best matches your freelance activity</li>
                  <li><strong className="text-gray-200">Total business income</strong> &mdash; all revenue from your freelance activity</li>
                  <li><strong className="text-gray-200">Expenses by category</strong> &mdash; motor vehicle, travel, rent, depreciation, home office, etc.</li>
                  <li><strong className="text-gray-200">Net business income or loss</strong> &mdash; income minus expenses, which flows into your individual return</li>
                </ul>
              </div>
            </div>

            {/* ATO Pre-fill & Data Matching */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full">ATO DATA</span>
                <h3 className="text-lg font-semibold text-white">What the ATO Already Knows</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  The ATO receives data from thousands of third parties and pre-fills much of your tax return automatically. This data is typically available from <strong className="text-gray-200">mid-August</strong> each year. Pre-fill data includes:
                </p>
                <div className="grid sm:grid-cols-2 gap-2 mt-3">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Employer income (PAYG summaries)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Bank and term deposit interest
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Private health insurance details
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Government payments
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Share dividends
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Super fund contributions
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">ATO Data Matching &mdash; They Will Catch Omissions</p>
              <p className="text-gray-400 text-sm">
                The ATO cross-references your tax return with data from banks, clients, platforms, share registries, crypto exchanges, and property transactions. They also match <strong className="text-gray-200">Taxable Payments Annual Reports (TPAR)</strong> from businesses that pay contractors. If a client reports paying you $50,000 but you only declare $30,000, the ATO will flag the discrepancy. <strong className="text-gray-200">Report ALL income</strong> &mdash; including cash, crypto, and informal work.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Deductions Every Freelancer Should Claim */}
        <section id="deductions">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Deductions Every Freelancer Should Claim</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Deductions reduce your taxable income, which directly reduces your tax bill. In the 30% marginal bracket, every $1,000 in deductions saves you $320 (including Medicare levy). Most freelancers leave <strong className="text-white">$1,000&ndash;$3,000 in missed deductions</strong> on the table every year simply because they do not track or claim everything they are entitled to.
            </p>

            {/* The Golden Rule */}
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-4">
              <p className="text-emerald-400 font-medium mb-2">The Three Golden Rules for Deductions</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><strong className="text-gray-200">1. Directly related to earning income</strong> &mdash; the expense must have a clear connection to your freelance business</li>
                <li><strong className="text-gray-200">2. You must have records</strong> &mdash; receipts, invoices, bank statements, or diary entries for every claim</li>
                <li><strong className="text-gray-200">3. Not private in nature</strong> &mdash; personal expenses cannot be claimed, even if they have a minor business benefit</li>
              </ul>
            </div>

            {/* Home Office */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">HOME OFFICE</span>
                <h3 className="text-lg font-semibold text-white">Home Office Expenses</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-3">
                <div className="rounded-lg bg-gray-900/50 p-4 border border-emerald-500/20">
                  <p className="text-emerald-400 font-medium mb-2">Fixed Rate Method: 67c per hour</p>
                  <p className="text-gray-400 text-sm">
                    Claim <strong className="text-gray-200">67 cents per hour</strong> you work from home. Covers electricity, gas, phone, internet, stationery, and computer consumables. Must keep a record of hours worked from home. Can still claim depreciation on office furniture and equipment separately.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border border-green-500/20">
                  <p className="text-green-400 font-medium mb-2">Actual Cost Method</p>
                  <p className="text-gray-400 text-sm">
                    Calculate and claim the <strong className="text-gray-200">actual business portion</strong> of rent, electricity, internet, phone, and depreciation. Requires more record-keeping but can yield higher deductions, especially if you have a dedicated home office with high running costs.
                  </p>
                </div>
              </div>
            </div>

            {/* Vehicle */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">VEHICLE</span>
                <h3 className="text-lg font-semibold text-white">Vehicle Expenses</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-3">
                <div className="rounded-lg bg-gray-900/50 p-4 border border-gray-700/30">
                  <p className="text-emerald-400 font-medium mb-2">Cents per Km: 85c/km</p>
                  <p className="text-gray-400 text-sm">
                    Claim <strong className="text-gray-200">85 cents per business kilometre</strong>, capped at 5,000 km/year (max $4,250). Simple record-keeping &mdash; just log your business trips. Covers all vehicle costs.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border border-gray-700/30">
                  <p className="text-green-400 font-medium mb-2">Logbook Method</p>
                  <p className="text-gray-400 text-sm">
                    Maintain a <strong className="text-gray-200">12-week logbook</strong> to establish your business-use percentage, then claim that percentage of all actual costs. No km cap. Must keep a valid logbook for each 5-year period.
                  </p>
                </div>
              </div>
            </div>

            {/* Equipment */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">EQUIPMENT</span>
                <h3 className="text-lg font-semibold text-white">Equipment &amp; Depreciation</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  The <strong className="text-gray-200">$20,000 instant asset write-off</strong> means most freelancer equipment (laptops, monitors, cameras, desks, chairs) can be deducted in full in the year of purchase. Items under $300 used predominantly for business can always be claimed immediately. Items costing $20,000 or more must be depreciated over their effective life.
                </p>
              </div>
            </div>

            {/* Other Deductions Grid */}
            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Other Common Deductions</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-3">Professional Development</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Courses, workshops, and conferences</li>
                  <li>Books, journals, online subscriptions</li>
                  <li>Industry certifications</li>
                  <li>Must relate to your current work</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-3">Insurance</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Professional indemnity insurance</li>
                  <li>Public liability insurance</li>
                  <li>Income protection premiums</li>
                  <li>Business contents insurance</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-3">Software &amp; Subscriptions</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Adobe, Figma, Slack, Notion, etc.</li>
                  <li>Cloud storage and hosting</li>
                  <li>Accounting software (Xero, MYOB)</li>
                  <li>Business phone and internet (% used)</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-3">Professional Fees &amp; Super</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Accountant and tax agent fees</li>
                  <li>Legal fees (business-related)</li>
                  <li>Super contributions ($30K cap, deductible)</li>
                  <li>Marketing, advertising, domain names</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">5-Year Record Keeping Rule</p>
              <p className="text-gray-400 text-sm">
                You must keep receipts, invoices, and records for <strong className="text-gray-200">every deduction you claim for a minimum of five years</strong> from the date you lodge your tax return. Digital copies are acceptable &mdash; photograph receipts and store them in accounting software or a cloud folder. Without records, the ATO can disallow your deductions and apply penalties.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Step-by-Step Lodging */}
        <section id="step-by-step">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Step-by-Step: Lodging Your Tax Return</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Whether you use myTax or a tax agent, the process follows the same fundamental steps. Here is the 7-step process for lodging your freelancer tax return:
            </p>

            <div className="space-y-4 mt-6">
              {/* Step 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Gather Your Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Collect all income records (invoices, bank statements, platform earnings reports), expense receipts, PAYG instalment notices, PAYG payment summaries from any employment, private health insurance statements, and super contribution records. If you use accounting software like Xero or MYOB, run your Profit &amp; Loss report for the financial year. If you are claiming a super deduction, ensure you have lodged your &quot;Notice of intent to claim&quot; form with your fund.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Wait for Pre-Fill Data (Mid-August)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The ATO&apos;s pre-fill data from employers, banks, health funds, and government agencies is typically available from <strong className="text-gray-200">mid-August</strong>. Lodging too early means you may miss pre-fill data, leading to errors or omissions. If you lodge before all data is available, you are still responsible for reporting the correct amounts &mdash; you cannot blame missing pre-fill data for an incorrect return.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Report All Income</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enter all business income in the Business and Professional Items Schedule. Add any other income sources: employment income, bank interest, dividends, capital gains, rental income, and government payments. Cross-check against the ATO&apos;s pre-fill data but also add any income they may not know about (cash payments, crypto, informal work). <strong className="text-gray-200">When in doubt, include it.</strong>
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Claim All Deductions</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enter your business deductions in the schedule by category: motor vehicle, travel, rent, depreciation, home office, repairs, and other expenses. Enter personal deductions separately (super contributions, income protection insurance, accounting fees from the prior year). Use the deduction checklist in Section 3 to ensure you have not missed anything. Every legitimate deduction reduces your taxable income.
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Report PAYG Instalments Paid</h3>
                  <span className="text-xs text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">Critical</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This is where many freelancers overpay tax. If you have been making <strong className="text-gray-200">PAYG instalment payments</strong> throughout the year (quarterly payments to the ATO based on your expected tax), these must be reported as credits on your return. Your PAYG instalments are subtracted from your total tax liability. If you forget to include them, your assessment will show you owing the full tax amount <em>again</em>, even though you have already paid quarterly. Check your ATO activity statements or myGov account for your total PAYG instalments paid.
                </p>
              </div>

              {/* Step 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Review and Lodge</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Before lodging, review every section carefully. Check that income figures match your accounting records, deductions are accurately categorised, PAYG instalments are included, and your bank details are correct for any refund. myTax will show you an estimated tax outcome before you submit. If you are using a tax agent, they will send you a summary to approve before lodging.
                </p>
              </div>

              {/* Step 7 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">7</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Pay or Receive Your Refund</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  After lodging, the ATO issues a Notice of Assessment (NOA). If you are due a refund, electronic lodgements typically receive payment within <strong className="text-gray-200">14 business days</strong>. If you owe tax, the due date is shown on your NOA &mdash; usually 21 days from the date of assessment. If you cannot pay in full, contact the ATO to arrange a payment plan before the due date to avoid the General Interest Charge (GIC).
                </p>
              </div>
            </div>

            {/* When to use a tax agent */}
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">When to Use a Tax Agent</p>
              <p className="text-gray-400 text-sm">
                Consider using a registered tax agent if: it is your <strong className="text-gray-200">first year freelancing</strong> (they will set up your return correctly from the start), you have <strong className="text-gray-200">multiple income sources</strong> (employment + freelance + investments), you earned <strong className="text-gray-200">foreign income</strong>, you have <strong className="text-gray-200">capital gains or losses</strong> to report, or your deductions exceed <strong className="text-gray-200">$10,000</strong>. A tax agent&apos;s fee ($150&ndash;$400) is tax-deductible in the following year.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Tax Return Mistakes */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Tax Return Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              These are the mistakes the ATO sees every year from freelancers. Some cost you money directly. Others trigger audits that cost you time, stress, and potential penalties. Avoid all of them.
            </p>

            <div className="space-y-4 mt-6">
              {/* Mistake 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">1</span>
                  <h4 className="text-white font-semibold">Forgetting to Include All Income Sources</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  The number one audit trigger. The ATO receives data from banks, platforms, share registries, and clients who lodge TPAR reports. If they know about income you did not declare, they <strong className="text-gray-200">will</strong> contact you. This includes cash payments, crypto, Airbnb, Uber, and overseas income.
                </p>
              </div>

              {/* Mistake 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">2</span>
                  <h4 className="text-white font-semibold">Claiming Personal Expenses as Business</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Claiming your entire phone bill when only 40% is business use. Claiming home internet at 100% when you have a family. Claiming meals and entertainment that are not directly client-related. The ATO uses sophisticated analytics to compare your deduction patterns against similar taxpayers.
                </p>
              </div>

              {/* Mistake 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">3</span>
                  <h4 className="text-white font-semibold">Not Keeping Receipts (5-Year Rule)</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  You claimed it. Great. Now prove it. If the ATO audits you and you cannot produce the receipt, invoice, or bank statement for a deduction, it will be disallowed and you will owe back-tax plus penalties. Records must be kept for <strong className="text-gray-200">five years</strong> from the date you lodge the return.
                </p>
              </div>

              {/* Mistake 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">4</span>
                  <h4 className="text-white font-semibold">Missing the October 31 Deadline</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  The Failure to Lodge (FTL) penalty is <strong className="text-gray-200">$313 per 28-day period</strong> (or part thereof) that the return is overdue, up to a maximum of 5 penalty units ($1,565). Each outstanding return attracts its own penalty. If you owe tax, the General Interest Charge (~11% p.a.) also accrues from the original due date.
                </p>
              </div>

              {/* Mistake 5 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">5</span>
                  <h4 className="text-white font-semibold">Not Reporting PAYG Instalments Paid</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  If you have been paying quarterly PAYG instalments and forget to report them as credits, you will effectively <strong className="text-gray-200">pay tax twice</strong> on the same income. The ATO should eventually reconcile this, but it can take months and cause unnecessary cash flow stress. Always check your total PAYG instalments paid via your myGov account.
                </p>
              </div>

              {/* Mistake 6 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">6</span>
                  <h4 className="text-white font-semibold">Claiming Home Office Without Records</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  The fixed rate method (67c/hr) requires you to keep a record of your <strong className="text-gray-200">actual hours worked from home</strong> &mdash; not an estimate. A timesheet, calendar, or diary entry is required. The actual cost method requires bills and a reasonable apportionment calculation. &quot;I work from home most of the time&quot; is not sufficient documentation.
                </p>
              </div>

              {/* Mistake 7 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">7</span>
                  <h4 className="text-white font-semibold">Forgetting to Carry Forward Losses</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  If your freelance business made a loss in a prior year (expenses exceeded income), that loss can be <strong className="text-gray-200">carried forward</strong> and offset against future income. Many freelancers forget about prior-year losses and miss out on reducing their tax in profitable years. Losses do not expire &mdash; they carry forward indefinitely until used.
                </p>
              </div>

              {/* Mistake 8 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">8</span>
                  <h4 className="text-white font-semibold">Not Reporting Foreign Income</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  If you have overseas clients who pay you in foreign currency, that income is still assessable in Australia. Convert it to AUD at the exchange rate on the date you received it (or use an average rate for the year). Australia taxes its residents on <strong className="text-gray-200">worldwide income</strong>, not just Australian-sourced income.
                </p>
              </div>

              {/* Mistake 9 */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">9</span>
                  <h4 className="text-white font-semibold">Mixing GST-Inclusive and GST-Exclusive Amounts</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  If you are registered for GST, your income and expenses in the tax return should be reported <strong className="text-gray-200">GST-exclusive</strong>. If you are not registered for GST, report GST-inclusive amounts (because you cannot claim back the GST). Mixing these up inflates or deflates your reported figures and causes discrepancies with your BAS lodgements.
                </p>
              </div>
            </div>

            {/* ATO Audit Triggers */}
            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">ATO Audit Triggers for Freelancers</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><strong className="text-gray-200">Large deductions relative to income</strong> &mdash; if deductions seem disproportionate to your income level</li>
                <li><strong className="text-gray-200">Sudden income drops</strong> &mdash; your income drops significantly without an obvious reason</li>
                <li><strong className="text-gray-200">Lifestyle inconsistent with reported income</strong> &mdash; expensive purchases, travel, or assets that do not match your declared earnings</li>
                <li><strong className="text-gray-200">Data matching discrepancies</strong> &mdash; income reported by third parties does not match your return</li>
                <li><strong className="text-gray-200">Consistently late lodgements</strong> &mdash; a pattern of late lodging signals disorganisation the ATO wants to investigate</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Simplifies Tax Time */}
        <section id="invoiceflow-simplifies">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Simplifies Tax Time</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is designed specifically for Australian freelancers, which means it handles the tax complexities that generic tools miss. Here is how it makes your annual tax return faster, easier, and more accurate:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  Income Summary Reports
                </h4>
                <p className="text-gray-400 text-sm">
                  Instantly generate a financial year income summary showing total invoiced amounts, payment dates, client breakdown, and GST collected &mdash; ready to transfer directly into your tax return.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                  Expense Categorisation
                </h4>
                <p className="text-gray-400 text-sm">
                  Automatically categorise expenses by ATO-recognised categories (motor vehicle, home office, depreciation, etc.) so they map directly to the business schedule fields in your tax return.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  GST-Ready BAS Data
                </h4>
                <p className="text-gray-400 text-sm">
                  GST collected and GST paid are tracked automatically across all invoices and expenses, making quarterly BAS lodgements a 5-minute task instead of a weekend of spreadsheets.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  Deduction Tracking
                </h4>
                <p className="text-gray-400 text-sm">
                  Track business expenses throughout the year with receipt capture and automatic categorisation, so at tax time your deductions are already organised and substantiated.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  Export to Tax Agent
                </h4>
                <p className="text-gray-400 text-sm">
                  Export a clean, formatted summary of your income, expenses, and GST data that your tax agent can use directly &mdash; saving them time and saving you money on their fees.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  Year-End Reconciliation
                </h4>
                <p className="text-gray-400 text-sm">
                  Reconcile your invoices against bank deposits, identify outstanding payments, and generate a complete financial year summary with one click &mdash; no more manual spreadsheet matching.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you prepare and optimise your tax return.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, deductions, and freelancing in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-emerald-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
            Make Tax Time Your Easiest Day of the Year
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow tracks your income, categorises expenses, and generates tax-ready reports throughout the year &mdash; so when October rolls around, your tax return practically lodges itself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/tax-estimator">
              <Button variant="secondary">Try the Tax Estimator</Button>
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
