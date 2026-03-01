import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Record Keeping for Freelancers: ATO Requirements & How Long to Keep Records — InvoiceFlow',
  description:
    'Complete guide to ATO record keeping requirements for Australian freelancers and sole traders. Covers what records to keep, the 5-year retention rule, digital records, penalties for non-compliance, and how InvoiceFlow keeps you organised and ATO-ready.',
  keywords: [
    'ATO record keeping requirements',
    'how long to keep business records australia',
    'record keeping for freelancers',
    'sole trader records ATO',
    'business records australia',
    'ATO 5 year record keeping rule',
    'digital records ATO',
    'record keeping sole trader australia',
  ],
  alternates: { canonical: '/glossary/record-keeping' },
  openGraph: {
    title: 'Record Keeping for Freelancers: ATO Requirements & How Long to Keep Records — InvoiceFlow',
    description:
      'What records must Australian freelancers keep, and for how long? This guide covers the ATO 5-year rule, income and expense records, GST records, digital record requirements, penalties for non-compliance, and how InvoiceFlow automates your record keeping.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/record-keeping',
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
    { '@type': 'ListItem', position: 3, name: 'Record Keeping', item: `${BASE_URL}/glossary/record-keeping` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long do I need to keep business records in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO requires most business records to be kept for at least 5 years from the date you prepared or obtained the record, or the date you completed the transaction (whichever is later). This applies to income records, expense records, GST records, asset records, and tax returns. If you are involved in a dispute with the ATO or there is a fraud investigation, you may need to keep records longer. For capital gains tax (CGT) assets such as property, you must keep records for 5 years from the date you sell the asset.',
      },
    },
    {
      '@type': 'Question',
      name: 'What records do I need to keep as a sole trader in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As an Australian sole trader, the ATO requires you to keep records of: all income you receive (invoices issued, payment receipts, bank statements), all business expenses (receipts, tax invoices received, credit card statements), GST records if you are registered for GST (tax invoices issued and received, BAS lodgements), asset records (purchase and sale documents, depreciation schedules), and records of any wages or contractor payments you make. You must also keep records sufficient to prepare your annual income tax return and any BAS lodgements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the ATO accept digital records?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the ATO accepts digital records. If you store records digitally, they must be in a format that is readable and usable — the ATO must be able to access and read your records if they request them. You can scan paper receipts and store them digitally, but you must ensure the digital copy is a true and accurate reproduction of the original. There is no requirement to keep original paper records once you have a legible digital copy, provided the digital version is accessible and readable. Cloud storage and accounting software are both acceptable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the penalty for not keeping proper business records?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Failure to keep adequate records is a strict liability offence under section 8C of the Taxation Administration Act 1953. The ATO can issue a Failure to Lodge (FTL) penalty of $313 for each 28-day period (or part period) that you fail to comply with a notice to produce records, up to a maximum of 5 penalty units ($1,565). Beyond financial penalties, poor records can also result in the ATO disallowing deductions you cannot substantiate, which increases your taxable income and the tax you owe. In serious cases, record-keeping failures can lead to prosecution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to keep receipts for small purchases under $82.50?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For purchases under $82.50 (including GST), the ATO does not require you to hold a tax invoice to claim a GST credit — a simpler document such as a cash register docket is sufficient for GST purposes. However, you should still keep some record of the expense (such as a bank statement or cash register receipt) to substantiate your income tax deduction claim. For expense claims involving travel, vehicle use, or home office costs, specific substantiation rules apply regardless of the amount. As a general best practice, keep all receipts — digital receipt capture apps make this easy.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-record-keeping', label: '1. What Is Record Keeping?' },
  { id: 'ato-record-keeping-requirements', label: '2. ATO Record Keeping Requirements' },
  { id: 'essential-records-freelancers', label: '3. Essential Records for Freelancers' },
  { id: 'record-keeping-methods', label: '4. Record Keeping Methods' },
  { id: 'common-record-keeping-mistakes', label: '5. Common Record Keeping Mistakes' },
  { id: 'invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create ATO-compliant tax invoices that automatically form part of your income records.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on any amount — helps you reconcile GST records before lodging your BAS.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-calculator',
    name: 'BAS Calculator',
    description: 'Calculate your Business Activity Statement amounts with your GST records already organised.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    href: '/tools/business-expense-tracker',
    name: 'Expense Tracker',
    description: 'Track and categorise business expenses so your records are always BAS and tax-ready.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
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
    href: '/guides/gst-for-freelancers',
    name: 'GST Guide for Freelancers',
    description: 'When to register for GST, how to charge it, and how to keep proper GST records for your BAS.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'End of financial year checklist — organise your records, claim every deduction, and lodge on time.',
  },
];

export default function RecordKeepingGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Record Keeping</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Record Keeping{' '}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            The ATO requires Australian freelancers and sole traders to keep detailed financial records for at least 5 years. Poor record keeping can mean lost deductions, penalties, and a stressful tax season. This guide covers exactly what records you need, how long to keep them, and how to build a system that runs itself.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">5yr</span>
              <div>
                <p className="text-white font-medium text-sm">5-Year Retention Rule</p>
                <p className="text-gray-400 text-sm">Most business records must be kept for at least 5 years from the date of the transaction or preparation</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">$313</span>
              <div>
                <p className="text-white font-medium text-sm">FTL Penalty Per Period</p>
                <p className="text-gray-400 text-sm">Failure to keep adequate records can result in a $313 Failure to Lodge penalty per 28-day period</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">OK</span>
              <div>
                <p className="text-white font-medium text-sm">Digital Records Accepted</p>
                <p className="text-gray-400 text-sm">The ATO accepts digital records — scanned receipts, cloud storage, and accounting software all qualify</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">$82</span>
              <div>
                <p className="text-white font-medium text-sm">$82.50 Receipt Threshold</p>
                <p className="text-gray-400 text-sm">Purchases under $82.50 (incl. GST) do not require a full tax invoice for GST credits — a simpler docket suffices</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-teal-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Record Keeping? */}
        <section id="what-is-record-keeping">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Record Keeping?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Record keeping is the practice of <strong className="text-white">systematically storing financial and business documents</strong> so you can accurately report your income and expenses, substantiate deductions, and comply with ATO requirements. For Australian freelancers and sole traders, good record keeping is not optional &mdash; it is a legal requirement under the <em>Income Tax Assessment Act 1997</em> and the <em>Taxation Administration Act 1953</em>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              At its core, record keeping answers three fundamental questions the ATO might ask about your business:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5 text-center">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-teal-400 font-semibold text-sm mb-1">How much did you earn?</p>
                <p className="text-gray-400 text-xs">Income records prove what revenue came into your business</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5 text-center">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
                <p className="text-teal-400 font-semibold text-sm mb-1">What did you spend?</p>
                <p className="text-gray-400 text-xs">Expense records substantiate every deduction you claim</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-5 text-center">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <p className="text-teal-400 font-semibold text-sm mb-1">Are you GST compliant?</p>
                <p className="text-gray-400 text-xs">GST records verify you collected and remitted the right amount</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-6">
              Beyond legal compliance, good record keeping has a direct financial benefit: <strong className="text-white">every dollar of business expenses you can substantiate is a dollar that reduces your taxable income</strong>. Freelancers who keep thorough records consistently claim more deductions than those who rely on estimates or reconstructed records. Poor record keeping is literally leaving money on the table.
            </p>

            <p className="text-gray-300 leading-relaxed">
              The ATO uses several mechanisms to check that your records are accurate: data matching with banks and payment platforms, third-party reporting from clients and marketplaces, and random audits. If you are audited, the burden of proof is on you to show that your income and expense claims are correct. Without adequate records, the ATO can disallow deductions and assess additional tax with penalties and interest. See also: <Link href="/glossary/bookkeeping" className="text-teal-400 hover:text-teal-300 underline decoration-teal-500/30">bookkeeping</Link>, which is the ongoing process that makes record keeping manageable.
            </p>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">Record Keeping vs Bookkeeping</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Record keeping</strong> is the broader legal requirement to retain financial documents. <strong className="text-gray-200"><Link href="/glossary/bookkeeping" className="text-teal-400 hover:text-teal-300 underline decoration-teal-500/30">Bookkeeping</Link></strong> is the active process of recording, categorising, and reconciling financial transactions. You can have records (a shoebox of receipts) without bookkeeping — but good bookkeeping automatically creates good records. Most sole traders benefit enormously from combining both: a bookkeeping system that generates the records the ATO requires.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: ATO Record Keeping Requirements */}
        <section id="ato-record-keeping-requirements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">ATO Record Keeping Requirements</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO&apos;s record keeping obligations for sole traders and small businesses are set out primarily in <strong className="text-white">Division 900 of the Income Tax Assessment Act 1997</strong> and the <strong className="text-white">Taxation Administration Act 1953</strong>. Here is what you need to know.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">The 5-Year Retention Rule</h3>
            <p className="text-gray-300 leading-relaxed">
              The foundational rule is simple: <strong className="text-white">keep most records for at least 5 years</strong>. Specifically, you must retain records for 5 years from:
            </p>
            <ul className="space-y-2 text-gray-300 mt-3">
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-1">&bull;</span>
                <span>The date you prepared or obtained the record, or</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-1">&bull;</span>
                <span>The date you completed the transaction (whichever is later)</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              For <Link href="/glossary/depreciation" className="text-teal-400 hover:text-teal-300 underline decoration-teal-500/30">depreciating assets</Link>, you must keep records for <strong className="text-white">5 years after you dispose of the asset</strong> (not from when you bought it). For capital gains tax (CGT) assets such as property or shares, records must be kept for <strong className="text-white">5 years from the date of sale</strong>, which could be decades after purchase.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-4">What Records Must You Keep?</h3>

            {/* Records Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Record Category</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Examples</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Income records</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Invoices issued, payment receipts, bank statements</td>
                      <td className="px-6 py-4 text-teal-400 font-medium">5 years</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Expense records</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Receipts, invoices received, credit card statements</td>
                      <td className="px-6 py-4 text-teal-400 font-medium">5 years</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">GST records</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Tax invoices, BAS lodgements, credit adjustment notes</td>
                      <td className="px-6 py-4 text-teal-400 font-medium">5 years</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Asset records</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Purchase docs, depreciation schedules, disposal records</td>
                      <td className="px-6 py-4 text-teal-400 font-medium">5 years after disposal</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Employee/contractor records</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Payslips, super contributions, TFN declarations</td>
                      <td className="px-6 py-4 text-teal-400 font-medium">5 years</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Tax returns &amp; notices</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Annual income tax returns, ATO notices of assessment</td>
                      <td className="px-6 py-4 text-teal-400 font-medium">5 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Penalties for Non-Compliance</h3>
            <p className="text-gray-300 leading-relaxed">
              Failing to maintain adequate records is a <strong className="text-white">strict liability offence</strong> under section 8C of the Taxation Administration Act 1953. The ATO takes this seriously. Consequences include:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 text-sm">Failure to Lodge (FTL) Penalty</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If the ATO issues a notice requiring you to produce records and you fail to comply, you face a <strong className="text-gray-200">$313 FTL penalty per 28-day period</strong> (or part period), up to a maximum of 5 penalty units ($1,565). This penalty accrues automatically.
                </p>
              </div>
              <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 text-sm">Disallowed Deductions</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you cannot substantiate a deduction with adequate records, the ATO <strong className="text-gray-200">can disallow it entirely</strong>. This increases your assessable income, the tax you owe, and may trigger general interest charge (GIC) on the shortfall.
                </p>
              </div>
              <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 text-sm">Shortfall Penalties</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Where poor records result in an understatement of income or overstatement of deductions, the ATO may apply <strong className="text-gray-200">shortfall penalties of 25% to 75%</strong> of the tax shortfall (depending on whether the failure was careless, reckless, or intentional).
                </p>
              </div>
              <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 text-sm">Criminal Prosecution</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  In serious cases involving deliberate destruction of records or fraud, <strong className="text-gray-200">criminal prosecution</strong> is possible. Section 8C offences can result in fines and, in extreme cases, imprisonment. This applies to intentional destruction, not accidental loss.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">ATO Data Matching</p>
              <p className="text-gray-400 text-sm">
                The ATO runs an extensive <strong className="text-gray-200">data matching program</strong> that cross-references information from banks, payment platforms (including PayPal, Stripe, and Square), ride-share companies, short-term rental platforms, and online marketplaces. If your reported income does not match what the ATO has received from third parties, you may be contacted for explanation. Good records make this straightforward to resolve.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Essential Records for Freelancers */}
        <section id="essential-records-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Essential Records for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              As a freelancer or sole trader, your record keeping obligations cover four main categories. Here is a detailed breakdown of what you need to capture in each.
            </p>

            {/* Income Records */}
            <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg">Income Records</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">These prove what revenue came into your business and that you have reported all income correctly.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { item: 'Invoices issued to clients', note: 'Must include your ABN, date, description, amount' },
                  { item: 'Payment receipts', note: 'Confirmation that clients paid each invoice' },
                  { item: 'Bank statements', note: 'Shows all deposits — cross-reference with invoices' },
                  { item: 'PayPal / Stripe records', note: 'Platform transaction history for online payments' },
                  { item: 'Cash income records', note: 'Cash register records or cash receipt books' },
                  { item: 'Marketplace earnings', note: 'Upwork, Fiverr, 99designs, Freelancer.com statements' },
                ].map(({ item, note }) => (
                  <div key={item} className="flex items-start gap-3 rounded-lg bg-gray-800/40 p-3">
                    <svg className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-white text-sm font-medium">{item}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expense Records */}
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg">Expense Records</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">These substantiate every deduction you claim on your tax return. Without a receipt, the ATO can disallow the deduction.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { item: 'Tax invoices received', note: 'Required for GST credits on purchases over $82.50' },
                  { item: 'Cash register receipts', note: 'For smaller purchases under $82.50 excl. GST' },
                  { item: 'Credit card statements', note: 'Backs up all card-based business purchases' },
                  { item: 'Software subscription invoices', note: 'Adobe, Microsoft 365, Xero, project tools' },
                  { item: 'Vehicle log book', note: 'Required for car expense claims — 12 continuous weeks' },
                  { item: 'Home office records', note: 'Floor plan, utility bills, calculations for work area' },
                  { item: 'Professional development', note: 'Courses, conferences, memberships, subscriptions' },
                  { item: 'Equipment purchases', note: 'Computer, camera, desk — triggers depreciation records' },
                ].map(({ item, note }) => (
                  <div key={item} className="flex items-start gap-3 rounded-lg bg-gray-800/40 p-3">
                    <svg className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-white text-sm font-medium">{item}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GST Records */}
            <div className="rounded-2xl border border-teal-500/20 bg-gray-800/30 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">GST Records</h3>
                  <span className="text-xs text-gray-500">Required if you are registered for GST</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">If your turnover exceeds $75,000 and you are <Link href="/glossary/gst" className="text-teal-400 hover:text-teal-300 underline decoration-teal-500/30">GST</Link>-registered, you must keep records to support every <Link href="/glossary/bas" className="text-teal-400 hover:text-teal-300 underline decoration-teal-500/30">BAS</Link> lodgement.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { item: 'Tax invoices issued', note: 'Must show GST separately for amounts over $1,000' },
                  { item: 'Tax invoices received', note: 'Required to claim GST input tax credits' },
                  { item: 'BAS lodgements', note: 'Copies of every BAS you have submitted to the ATO' },
                  { item: 'Credit/debit adjustment notes', note: 'When you or a supplier adjusts a GST amount' },
                  { item: 'GST payment records', note: 'Proof of GST payments made to the ATO' },
                  { item: 'Accounts receivable/payable', note: 'Supports the accruals basis BAS if applicable' },
                ].map(({ item, note }) => (
                  <div key={item} className="flex items-start gap-3 rounded-lg bg-gray-800/40 p-3">
                    <svg className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-white text-sm font-medium">{item}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Asset & Super Records */}
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-2xl border border-gray-700/50 bg-gray-800/30 p-6">
                <h3 className="text-white font-bold text-base mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                  Asset Records
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">&bull;</span> Purchase invoices for equipment</li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">&bull;</span> <Link href="/glossary/depreciation" className="text-teal-400 hover:text-teal-300 underline decoration-teal-500/30">Depreciation</Link> schedules</li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">&bull;</span> Sale or disposal documents</li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">&bull;</span> Insurance documents for assets</li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">&bull;</span> Repair and maintenance invoices</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-700/50 bg-gray-800/30 p-6">
                <h3 className="text-white font-bold text-base mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  Employee &amp; Contractor Records
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">&bull;</span> Payslips issued to employees</li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">&bull;</span> <Link href="/glossary/superannuation" className="text-teal-400 hover:text-teal-300 underline decoration-teal-500/30">Superannuation</Link> contribution records</li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">&bull;</span> TFN declarations from employees</li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">&bull;</span> Invoices from subcontractors</li>
                  <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">&bull;</span> PAYG withholding remittance advice</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">What Counts as a Valid Record?</p>
              <p className="text-gray-400 text-sm">
                The ATO requires records to be in <strong className="text-gray-200">English, or readily accessible and translatable into English</strong>. Records must be accurate, legible, and accessible for inspection if requested. For <Link href="/glossary/tax-invoice" className="text-teal-400 hover:text-teal-300 underline decoration-teal-500/30">tax invoices</Link> over $1,000, they must contain: ABN, date, description of supply, total price, and the GST amount (or a statement that GST is included). Invoices below $1,000 have slightly reduced requirements — but your ABN and basic details must still be present.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Record Keeping Methods */}
        <section id="record-keeping-methods">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Record Keeping Methods</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              How you store your records matters as much as what you store. The ATO is technology-neutral &mdash; it accepts both paper and digital records, provided they are accurate, legible, and accessible. The right method for you depends on your volume of transactions, your budget, and your appetite for administration.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Digital vs Paper Records</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Digital records are now the standard</strong> for most Australian freelancers. The ATO explicitly states that digital copies of paper records are acceptable, provided the digital version is a true and accurate reproduction of the original. You are not required to keep the original paper once you have a legible digital copy &mdash; though some advisors recommend keeping originals for high-value items during any potential audit period.
            </p>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mb-6">
              <p className="text-teal-400 font-medium mb-2">ATO Digital Record Requirements</p>
              <p className="text-gray-400 text-sm">
                Digital records must be: (1) stored in a format the ATO can access and read, (2) accurate and complete representations of the original transaction, (3) backed up to protect against data loss, (4) accessible for the full 5-year retention period — meaning you cannot store them in software you plan to cancel. If your accounting software subscription lapses, export your records first.
              </p>
            </div>

            {/* Comparison Table: Methods */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-5 py-4">Method</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-5 py-4">Best For</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-5 py-4">Pros</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-5 py-4">Cons</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-4 text-white font-medium text-sm">Paper / folders</td>
                      <td className="px-5 py-4 text-gray-400 text-sm">Very low volume (&lt;20 invoices/year)</td>
                      <td className="px-5 py-4 text-gray-400 text-sm">No cost, no tech required</td>
                      <td className="px-5 py-4 text-gray-400 text-sm">Risk of loss/damage, hard to search, no backup</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-4 text-white font-medium text-sm">Spreadsheets + cloud storage</td>
                      <td className="px-5 py-4 text-gray-400 text-sm">Solo freelancers, low volume</td>
                      <td className="px-5 py-4 text-gray-400 text-sm">Low cost, flexible, Google Drive / iCloud backup</td>
                      <td className="px-5 py-4 text-gray-400 text-sm">Manual entry, error-prone, no GST automation</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-4 text-white font-medium text-sm">Accounting software (Xero, MYOB, QuickBooks)</td>
                      <td className="px-5 py-4 text-gray-400 text-sm">Growing businesses, GST-registered</td>
                      <td className="px-5 py-4 text-gray-400 text-sm">Bank feeds, GST automation, BAS-ready reports, ATO-compliant</td>
                      <td className="px-5 py-4 text-gray-400 text-sm">Monthly subscription cost ($25&ndash;$80/mo)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-5 py-4 text-teal-400 font-medium text-sm">InvoiceFlow</td>
                      <td className="px-5 py-4 text-gray-400 text-sm">Freelancers who invoice clients</td>
                      <td className="px-5 py-4 text-gray-400 text-sm">ATO-compliant invoices, automatic records, expense tracking, free plan</td>
                      <td className="px-5 py-4 text-gray-400 text-sm">Focused on invoicing &mdash; pair with expense tracking for full coverage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Backup Strategies</h3>
            <p className="text-gray-300 leading-relaxed">
              The ATO does not accept &quot;my computer crashed&quot; as a reason for failing to produce records. A robust backup strategy is essential:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-teal-400 font-medium mb-2 text-sm">The 3-2-1 Rule</h4>
                <p className="text-gray-400 text-sm">Keep <strong className="text-gray-200">3 copies</strong> of your data, on <strong className="text-gray-200">2 different media</strong>, with <strong className="text-gray-200">1 stored offsite</strong> (e.g. cloud). For most freelancers: local copy + cloud sync (Google Drive or Dropbox) + accounting software cloud backup.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-teal-400 font-medium mb-2 text-sm">Receipt Capture Apps</h4>
                <p className="text-gray-400 text-sm">Apps like <strong className="text-gray-200">Hubdoc, Dext (Receipt Bank), or AutoEntry</strong> let you photograph receipts the moment you receive them. They extract data automatically and sync to your accounting software. Eliminates lost receipts almost entirely.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-teal-400 font-medium mb-2 text-sm">Cloud Storage</h4>
                <p className="text-gray-400 text-sm"><strong className="text-gray-200">Google Drive, iCloud, or Dropbox</strong> provide automatic backup and version history. Create a folder structure by financial year, then by category (Income / Expenses / GST / Assets). Ensure access for the full 5-year retention period.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Common Record Keeping Mistakes */}
        <section id="common-record-keeping-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Record Keeping Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              These are the most common record keeping failures the ATO sees from sole traders and freelancers. Each one can cost you money &mdash; either through disallowed deductions, penalties, or hours of scrambled reconstruction at tax time.
            </p>

            <div className="space-y-3 mt-6">
              {[
                {
                  num: '01',
                  title: 'Mixing Personal and Business Accounts',
                  body: 'Using the same bank account and card for personal and business expenses is the single most common record keeping mistake. It makes it nearly impossible to accurately separate business expenses, creates a risk of claiming personal expenses as business deductions (a red flag for the ATO), and makes reconciliation a nightmare. Open a dedicated business bank account and card — many banks offer free or low-cost business accounts for sole traders.',
                },
                {
                  num: '02',
                  title: 'No Backup System',
                  body: 'Keeping records only on your local computer is a serious risk. Hard drives fail, laptops are stolen, and floods happen. If your records are not backed up to at least one offsite location (cloud storage counts), you could face an ATO audit with no records to produce. Set up automatic cloud backup today — Google Drive and iCloud are free for reasonable storage amounts.',
                },
                {
                  num: '03',
                  title: 'Discarding Records Too Early',
                  body: 'Many freelancers delete or discard records after 2-3 years, not realising the 5-year rule applies. For assets, the 5 years runs from the date of disposal — not purchase — so an asset bought in 2018 and sold in 2025 requires records to be kept until 2030. Check your retention schedule carefully before deleting anything.',
                },
                {
                  num: '04',
                  title: 'No Vehicle Log Book',
                  body: 'If you claim vehicle expenses using the logbook method, you must keep a log book covering at least 12 consecutive weeks. The log must record every work-related trip, the odometer reading at the start and end, and the purpose. Many freelancers claim vehicle expenses without a log book, which means the ATO may disallow the claim entirely or limit it to the cents-per-kilometre method (max 5,000 km per year).',
                },
                {
                  num: '05',
                  title: 'Not Capturing Receipts Immediately',
                  body: 'Paper receipts fade. Digital receipts get buried in email. If you do not capture receipts at the point of purchase, you will lose them. Use a receipt capture app (Hubdoc, Dext, or even a dedicated email folder for eReceipts) to capture every receipt the moment you receive it. The ATO accepts photographed receipts provided they are legible and accurate.',
                },
                {
                  num: '06',
                  title: 'Ignoring Bank Feeds',
                  body: 'If you use accounting software, failing to connect and reconcile your bank feeds regularly means your records drift out of date. Unreconciled transactions accumulate and become harder to categorise retrospectively. Set a weekly or fortnightly reconciliation habit — it takes 10 minutes per week but saves hours at BAS and tax time.',
                },
                {
                  num: '07',
                  title: 'Not Keeping BAS Records Separately',
                  body: 'Your BAS lodgements and the records that support them must be kept for 5 years. Many freelancers keep invoices and receipts but fail to retain copies of their BAS submissions and the ATO payment confirmation. These are essential if the ATO queries a past lodgement. Download and save each BAS from ATO Online Services or your accounting software immediately after lodging.',
                },
                {
                  num: '08',
                  title: 'Not Reconciling Monthly',
                  body: 'Monthly reconciliation — comparing your bank statements to your recorded income and expenses — is the bedrock of good record keeping. It catches errors, duplicate entries, and missing records before they compound into a year-end disaster. Freelancers who reconcile monthly spend a fraction of the time at tax time compared to those who reconcile annually.',
                },
              ].map(({ num, title, body }) => (
                <div key={num} className="flex items-start gap-4 rounded-xl bg-gray-800/40 border border-gray-700/40 p-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">{num}</span>
                  <div>
                    <p className="text-white font-semibold mb-1">{title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">The Cost of Poor Records</p>
              <p className="text-gray-400 text-sm">
                A freelancer earning $100,000 per year who cannot substantiate $15,000 in legitimate deductions will pay approximately <strong className="text-gray-200">$4,500 extra in income tax</strong> at the 30% marginal rate — plus any penalties. That is the real cost of a shoebox approach to record keeping. A cloud-based system costing $30 per month pays for itself many times over.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built specifically for Australian freelancers and sole traders, which means record keeping compliance is baked in &mdash; not bolted on. Here is how InvoiceFlow addresses each of the key record keeping requirements.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  ),
                  title: 'Automatic Invoice Records',
                  body: 'Every invoice you create in InvoiceFlow is automatically stored in your account. Each invoice includes your ABN, date, client details, line items, GST, and totals — meeting every ATO requirement for a valid tax invoice. Your income records are built as you work.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  ),
                  title: 'Expense Tracking',
                  body: 'Log business expenses directly in InvoiceFlow and categorise them by type. Attach digital copies of receipts and invoices to each expense entry. Your expense records are organised, searchable, and ready for your accountant or for a potential ATO audit.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                    </svg>
                  ),
                  title: 'GST Calculations &amp; BAS-Ready Reports',
                  body: 'InvoiceFlow automatically calculates GST on every invoice and tracks GST paid on expenses. At BAS time, your GST summary report gives you the numbers you need: total GST collected (1A) and total GST credits (1B). No manual calculation, no spreadsheet errors.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  ),
                  title: 'Digital Backup &amp; Cloud Storage',
                  body: 'InvoiceFlow stores all your data in the cloud, automatically backed up. You never have to worry about a crashed hard drive wiping out 5 years of records. Your data is accessible from any device, at any time, for as long as you need it.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                  title: 'ATO-Compliant Format',
                  body: 'Every record in InvoiceFlow is generated in an ATO-compliant format. Tax invoices include all required fields. GST is calculated correctly. Reports are formatted in a way that makes sense to accountants and the ATO alike. If you are ever audited, your InvoiceFlow export is your evidence package.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                  ),
                  title: 'Income &amp; Profit Reports',
                  body: 'View your income by client, by month, or by financial year. See your profit margin after expenses. Track outstanding invoices and cash flow. These reports make it simple to complete your tax return and give your accountant everything they need, without a frantic search through folders at EOFY.',
                },
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl bg-gray-800/50 border border-teal-500/20 p-6">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2" dangerouslySetInnerHTML={{ __html: feature.title }} />
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.body}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5 mt-6">
              <p className="text-teal-400 font-medium mb-2">Your Records Are Always Ready</p>
              <p className="text-gray-400 text-sm">
                The biggest benefit of using InvoiceFlow for record keeping is that <strong className="text-gray-200">your records are a by-product of your normal workflow</strong>. You send an invoice — it is recorded. You log an expense — it is stored with the receipt. You run a GST report — the BAS numbers are ready. There is no separate &quot;record keeping task&quot; because the records are created automatically as you work. When the ATO asks for records, you export and send, rather than scrambling to reconstruct.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you stay on top of your record keeping obligations.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-teal-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-teal-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, compliance, and running a freelance business in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-teal-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-teal-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-teal-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-teal-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Your Records, Always Ready
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop scrambling at tax time. InvoiceFlow automatically creates ATO-compliant records as you invoice and track expenses &mdash; so when the ATO asks, your records are ready to go. Free to start, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools">
              <Button variant="secondary">Explore Free Tools</Button>
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
