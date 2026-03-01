import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Withholding Tax Australia: PAYG, No-ABN 47% Rule & Rates 2025-26 — InvoiceFlow',
  description:
    'What is withholding tax in Australia? Learn about PAYG withholding for contractors, the 47% no-ABN rule, withholding tax rates for 2025-26, voluntary agreements, and how to avoid unnecessary withholding on your freelance income.',
  keywords: [
    'withholding tax australia',
    'PAYG withholding contractor',
    'no ABN withholding 47%',
    'withholding tax rates 2025-26',
    'no ABN withholding rule',
    'withholding tax freelancer australia',
    'PAYG withholding voluntary agreement',
    'foreign resident withholding tax',
  ],
  alternates: { canonical: '/glossary/withholding-tax' },
  openGraph: {
    title: 'Withholding Tax Australia: PAYG, No-ABN 47% Rule & Rates 2025-26 — InvoiceFlow',
    description:
      'Complete guide to withholding tax in Australia for freelancers and contractors. Covers PAYG withholding, the 47% no-ABN rule, voluntary agreements, foreign resident rates, and how InvoiceFlow helps you stay compliant.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/withholding-tax',
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
    { '@type': 'ListItem', position: 3, name: 'Withholding Tax', item: `${BASE_URL}/glossary/withholding-tax` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens if I don\'t quote my ABN on an invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you do not quote a valid Australian Business Number (ABN) on your invoice, the payer is legally required to withhold 47% of the payment amount and remit it to the ATO. This 47% rate is the top marginal tax rate (45%) plus the Medicare levy (2%). The withheld amount is not lost — it is credited to you when you lodge your tax return — but you will be out of pocket until then. Always include your ABN on every invoice to avoid this withholding.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between PAYG withholding and PAYG instalments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PAYG withholding is tax deducted from payments by the payer before the recipient receives them — for example, an employer withholding tax from wages, or a business withholding 47% from a contractor who has not quoted an ABN. PAYG instalments are quarterly pre-payments of your own expected income tax that self-employed people pay directly to the ATO. With withholding, someone else deducts the tax. With instalments, you calculate and pay the tax yourself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there exceptions to the 47% no-ABN withholding rule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, there are several exceptions. Payers do not need to withhold if the total payment does not exceed $75 (excluding GST), if the payment is wholly of a domestic or private nature (e.g. paying a babysitter or gardener for personal services), if the supply is made by an individual as a private recreational pursuit or hobby, or if the payment is for a supply of goods only (not services). These exceptions are outlined in Section 12-190 of Schedule 1 of the Taxation Administration Act 1953.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a voluntary withholding agreement for contractors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A voluntary agreement is a written arrangement between a contractor and a payer where the contractor opts to have PAYG withholding deducted from their payments. The contractor and payer agree on a withholding rate (based on ATO tax tables), and the payer withholds and remits that amount each pay cycle. This is useful for contractors who want regular tax deductions similar to an employee, helping them avoid a large PAYG instalment bill at year-end. The agreement can be terminated by either party with written notice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much withholding tax do foreign residents pay in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foreign resident withholding tax rates in Australia vary by income type. For unfranked dividends, the rate is 30% (or lower under a tax treaty). For interest payments, the rate is 10%. For royalties, the rate is 30% (or lower under a tax treaty). For employment income, foreign residents have no tax-free threshold and pay tax from the first dollar earned, starting at 30% for the first $135,000. These rates can be reduced under Double Taxation Agreements (DTAs) that Australia has with many countries.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-withholding-tax', label: '1. What Is Withholding Tax?' },
  { id: 'types-of-withholding', label: '2. Types of Withholding in Australia' },
  { id: 'no-abn-withholding', label: '3. No-ABN Withholding Deep Dive' },
  { id: 'payg-withholding-contractors', label: '4. PAYG Withholding for Contractors' },
  { id: 'withholding-rates-2025-26', label: '5. Withholding Tax Rates 2025-26' },
  { id: 'invoiceflow-integration', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax, Medicare levy, and take-home pay as an Australian sole trader.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/payg-calculator',
    name: 'PAYG Calculator',
    description: 'Calculate your quarterly PAYG instalment amounts and stay ahead of ATO deadlines.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    href: '/tools/abn-lookup',
    name: 'ABN Lookup',
    description: 'Verify any Australian Business Number instantly and check GST registration status.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create ATO-compliant tax invoices with your ABN displayed correctly every time.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
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
    description: 'When to register for GST, how to charge it, and how to lodge your BAS correctly.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'End of financial year checklist, lodgement deadlines, and last-minute tax planning tips.',
  },
];

export default function WithholdingTaxGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Withholding Tax</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Withholding Tax{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              in Australia
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Withholding tax is money deducted from payments <em>before</em> you receive them. For freelancers, the biggest risk is the 47% no-ABN rule &mdash; but there are several other types of withholding every Australian contractor should understand. This guide covers all of them, with ATO-accurate rates for 2025-26.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">47%</span>
              <div>
                <p className="text-white font-medium text-sm">No-ABN Withholding</p>
                <p className="text-gray-400 text-sm">Payers must withhold 47% if you do not quote a valid ABN on your invoice</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">PAYG</span>
              <div>
                <p className="text-white font-medium text-sm">PAYG Withholding</p>
                <p className="text-gray-400 text-sm">Tax withheld from wages and contractor payments based on ATO tax tables</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">VOL</span>
              <div>
                <p className="text-white font-medium text-sm">Voluntary Agreements</p>
                <p className="text-gray-400 text-sm">Contractors can opt into PAYG withholding to spread their tax payments evenly</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">10-30%</span>
              <div>
                <p className="text-white font-medium text-sm">Foreign Resident Rates</p>
                <p className="text-gray-400 text-sm">Interest (10%), dividends (30%), and royalties (30%) for non-residents</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-indigo-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Withholding Tax? */}
        <section id="what-is-withholding-tax">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Withholding Tax?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Withholding tax is a <strong className="text-white">tax deducted from a payment at the source</strong> &mdash; before the money reaches the recipient. Instead of you receiving the full amount and then paying tax on it later, the payer takes out a portion and sends it directly to the Australian Taxation Office (ATO) on your behalf. The withheld amount is then credited against your final tax liability when you lodge your return.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For most Australians, the most familiar form of withholding is <strong className="text-white">PAYG withholding from wages</strong>. When you work as an employee, your employer withholds tax from every payslip based on ATO tax tables and remits it to the ATO. By the time you receive your pay, the tax has already been handled. You barely notice it because it happens automatically.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers and contractors, withholding tax works differently. Typically, <strong className="text-white">your clients pay your invoices in full</strong> &mdash; no tax is withheld. You are responsible for setting aside money for tax and paying it yourself through the <Link href="/glossary/payg" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">PAYG instalment system</Link>. However, there are specific situations where withholding <em>does</em> apply to contractor payments, and getting caught out by these rules can have a serious impact on your cash flow.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The two main withholding scenarios that affect Australian freelancers are:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-5">
                <h4 className="text-indigo-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  No-ABN Withholding (47%)
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Applies when you do not quote your <Link href="/glossary/abn" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">ABN</Link> on an invoice</li>
                  <li>Payer must withhold 47% of the gross payment</li>
                  <li>45% top marginal rate + 2% Medicare levy</li>
                  <li>You can recover the excess when you lodge your tax return</li>
                  <li>Easily avoided &mdash; always include your ABN</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-5">
                <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                  PAYG Withholding (Voluntary)
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Contractor voluntarily opts into <Link href="/glossary/payg" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">PAYG</Link> withholding</li>
                  <li>Written agreement between contractor and payer</li>
                  <li>Withholding rate based on ATO tax tables</li>
                  <li>Spreads tax payments evenly throughout the year</li>
                  <li>Avoids large quarterly instalment bills</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">Key Distinction</p>
              <p className="text-gray-400 text-sm">
                Withholding tax is <strong className="text-gray-200">not an additional tax</strong>. It is simply a mechanism for collecting tax earlier &mdash; at the point of payment rather than at the end of the financial year. The amount withheld is always credited against your final <Link href="/glossary/income-tax" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">income tax</Link> liability. If too much was withheld, you receive a refund. If too little, you pay the difference.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Types of Withholding in Australia */}
        <section id="types-of-withholding">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Withholding in Australia</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Australia&apos;s withholding tax system covers several different types of payments. Understanding which type applies to your situation is essential for managing your cash flow and staying compliant. Here is a comprehensive comparison of the four main withholding categories that affect freelancers and contractors.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Type</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Rate</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">When It Applies</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Who Withholds</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">PAYG Withholding</td>
                      <td className="px-6 py-4 text-indigo-400 font-medium">Tax tables</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Wages, salary, director fees</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Employer / payer</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">No-ABN Withholding</td>
                      <td className="px-6 py-4 text-red-400 font-medium">47%</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Supplier does not quote ABN</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Business paying the invoice</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Voluntary Agreement</td>
                      <td className="px-6 py-4 text-indigo-400 font-medium">Tax tables</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Contractor opts in via written agreement</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Engaging business</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Foreign Resident</td>
                      <td className="px-6 py-4 text-indigo-400 font-medium">10&ndash;30%</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Payments to non-residents (interest, dividends, royalties)</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">Australian payer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">PAYG Withholding</h3>
            <p className="text-gray-300 leading-relaxed">
              This is the standard withholding from employment income. Employers use <strong className="text-white">ATO tax tables</strong> to calculate the correct amount to withhold from each pay cycle based on the employee&apos;s earnings and <Link href="/glossary/tfn" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">TFN declaration</Link>. The withheld amounts are remitted to the ATO and credited against the employee&apos;s annual tax liability. This system ensures employees pay tax progressively throughout the year rather than facing a lump-sum bill.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">No-ABN Withholding</h3>
            <p className="text-gray-300 leading-relaxed">
              Under <strong className="text-white">Section 12-190 of Schedule 1 of the Taxation Administration Act 1953</strong>, if a supplier does not quote an <Link href="/glossary/abn" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">ABN</Link>, the payer must withhold 47% from the payment. This is the top marginal tax rate (45%) plus the Medicare levy (2%). The purpose is to deter businesses and individuals from operating in the &quot;cash economy&quot; without proper business registration.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Voluntary Agreements</h3>
            <p className="text-gray-300 leading-relaxed">
              A contractor can enter into a <strong className="text-white">voluntary agreement</strong> with a payer to have PAYG withholding deducted from their payments. This is a written arrangement where both parties agree on a withholding rate. It is particularly useful for contractors who work predominantly for one client and want the convenience of having tax deducted regularly, similar to an employee.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Foreign Resident Withholding</h3>
            <p className="text-gray-300 leading-relaxed">
              When Australian businesses make certain payments to foreign residents (non-residents for tax purposes), they must withhold tax at prescribed rates. This applies to <strong className="text-white">unfranked dividends (30%), interest (10%), and royalties (30%)</strong>. These rates may be reduced under Australia&apos;s Double Taxation Agreements (DTAs) with other countries.
            </p>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">No-TFN Withholding</p>
              <p className="text-gray-400 text-sm">
                There is also a <strong className="text-gray-200">no-TFN withholding</strong> rule. If you do not provide your <Link href="/glossary/tfn" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">Tax File Number</Link> to your employer or financial institution, they must withhold at the top marginal rate of <strong className="text-gray-200">47%</strong>. For investment income (interest, dividends), the financial institution withholds from your returns until you provide your TFN. Always provide your TFN to employers and banks to avoid this.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: No-ABN Withholding Deep Dive */}
        <section id="no-abn-withholding">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">No-ABN Withholding Deep Dive</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The 47% no-ABN withholding rule is the <strong className="text-white">single most important withholding provision</strong> for Australian freelancers to understand. It can have a devastating impact on your cash flow if you are caught unaware. Let&apos;s break it down completely.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">When Does the 47% Apply?</h3>
            <p className="text-gray-300 leading-relaxed">
              The rule is straightforward: if an entity (business, government body, or other organisation) makes a payment to you for goods or services and you <strong className="text-white">do not quote your ABN</strong> on the invoice or in writing before the payment is made, the payer is <strong className="text-white">legally obligated</strong> to withhold 47% of the gross payment amount. They must then remit this amount to the ATO and report it on their activity statement.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The payer does not have discretion here &mdash; it is a mandatory obligation. If they fail to withhold when required, <em>they</em> can face penalties from the ATO, not you. This is why many businesses will refuse to process payment until they have your ABN on file.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Exceptions to the 47% Rule</h3>
            <p className="text-gray-300 leading-relaxed">
              The ATO recognises that not every payment scenario warrants the 47% withholding. The following exceptions apply under Section 12-190 of Schedule 1 of the TAA 1953:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-indigo-400 font-medium mb-3">Under $75 Threshold</h4>
                <p className="text-gray-400 text-sm">
                  If the total payment (excluding any GST) <strong className="text-gray-200">does not exceed $75</strong>, the payer is not required to withhold. This covers small, incidental transactions where the administrative burden of withholding would outweigh the tax collected.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-indigo-400 font-medium mb-3">Domestic / Private Nature</h4>
                <p className="text-gray-400 text-sm">
                  No withholding is required if the payment is <strong className="text-gray-200">wholly of a domestic or private nature</strong> for the payer. For example, paying a babysitter, a gardener for your home, or a personal tutor. The key is that the payer is not acting in a business capacity.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-indigo-400 font-medium mb-3">Hobby or Recreation</h4>
                <p className="text-gray-400 text-sm">
                  If the supplier is providing goods or services as a <strong className="text-gray-200">private recreational pursuit or hobby</strong> (not as a business), the withholding rule does not apply. The supplier must genuinely be operating as a hobbyist, not running an unregistered business.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-indigo-400 font-medium mb-3">Goods Only (No Services)</h4>
                <p className="text-gray-400 text-sm">
                  The no-ABN withholding rule applies to payments for <strong className="text-gray-200">supplies that include services</strong>. If the payment is purely for goods (physical products with no service component), the payer is not required to withhold. However, mixed supplies that include both goods and services are still caught.
                </p>
              </div>
            </div>

            {/* Worked Example */}
            <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-900/10 to-blue-900/10 p-6 mt-8">
              <h4 className="text-white font-semibold mb-4">Worked Example: $10,000 Invoice Without ABN</h4>
              <p className="text-gray-400 text-sm mb-4">
                Sarah is a freelance graphic designer. She sends a $10,000 invoice to a client but <strong className="text-gray-200">forgets to include her ABN</strong>. Here is what happens:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-indigo-400 font-bold text-xs">1</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">Invoice amount:</span> <span className="text-indigo-400 font-medium">$10,000</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-indigo-400 font-bold text-xs">2</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">No-ABN withholding (47%):</span> $10,000 &times; 47% = <span className="text-red-400 font-medium">$4,700 withheld</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-indigo-400 font-bold text-xs">3</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">Sarah receives:</span> $10,000 &minus; $4,700 = <span className="text-indigo-400 font-medium">$5,300</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-indigo-400 font-bold text-xs">4</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">Client remits $4,700 to the ATO</span> and reports it on their activity statement
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-indigo-500/20">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Invoice Amount</p>
                    <p className="text-white font-bold text-lg">$10,000</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Amount Withheld</p>
                    <p className="text-red-400 font-bold text-lg">$4,700</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Amount Received</p>
                    <p className="text-indigo-400 font-bold text-lg">$5,300</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  <strong className="text-white">The impact:</strong> Sarah only receives 53% of her invoice. If her actual tax rate is around 30%, she has effectively overpaid by $1,700 and given the ATO an interest-free loan until she lodges her tax return and receives a refund &mdash; which could be months away.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">How to Recover Withheld Amounts</h3>
            <p className="text-gray-300 leading-relaxed">
              If you have had 47% withheld due to not quoting your ABN, the withheld amount is <strong className="text-white">not lost</strong>. When you lodge your annual tax return, you declare the withheld amounts as credits against your tax liability. The payer will issue you a <strong className="text-white">PAYG payment summary</strong> showing how much was withheld. If the amount withheld exceeds your actual tax liability, the ATO will refund the difference. However, this can take several months &mdash; which is why prevention (always quoting your ABN) is far better than recovery.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Payer Obligations</h3>
            <p className="text-gray-300 leading-relaxed">
              If you are a business that pays freelancers or contractors, you have specific obligations when an ABN is not quoted:
            </p>
            <ul className="space-y-2 text-gray-300 mt-3">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">&bull;</span>
                <span>Withhold 47% from the gross payment amount before paying the supplier</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">&bull;</span>
                <span>Report the withheld amount on your BAS in the &quot;amounts withheld from payments where no ABN is quoted&quot; label</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">&bull;</span>
                <span>Provide the supplier with a PAYG payment summary showing the amount withheld</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">&bull;</span>
                <span>Lodge an annual PAYG withholding report with the ATO</span>
              </li>
            </ul>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Do Not Confuse ABN with TFN</p>
              <p className="text-gray-400 text-sm">
                Your <Link href="/glossary/abn" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">ABN</Link> (Australian Business Number) is your business registration number &mdash; it goes on invoices and business dealings. Your <Link href="/glossary/tfn" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">TFN</Link> (Tax File Number) is your personal tax identifier &mdash; it goes to employers, banks, and super funds. <strong className="text-gray-200">Never put your TFN on invoices.</strong> The no-ABN withholding rule specifically requires an ABN, not a TFN. Providing your TFN instead of your ABN does not satisfy the requirement and withholding will still apply.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: PAYG Withholding for Contractors */}
        <section id="payg-withholding-contractors">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">PAYG Withholding for Contractors</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              While freelancers typically receive their full invoice amount and manage tax themselves through <Link href="/glossary/payg" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">PAYG instalments</Link>, there are situations where PAYG withholding applies to contractor payments. Understanding these scenarios helps you plan your cash flow and choose the arrangement that works best for your situation.
            </p>

            {/* Voluntary Agreements */}
            <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">VOLUNTARY</span>
                <h3 className="text-lg font-semibold text-white">Voluntary Agreements</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  A voluntary agreement is a <strong className="text-gray-200">written arrangement between a contractor and a payer</strong> where the contractor opts to have PAYG withholding deducted from their payments. The ATO provides a standard form for this purpose. Both parties sign the agreement and keep a copy. The payer then withholds tax from each payment at the agreed rate (based on ATO tax tables) and remits it to the ATO, just as they would for an employee.
                </p>
                <h4 className="text-white font-medium mt-4 mb-2">When a voluntary agreement makes sense:</h4>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div className="rounded-lg bg-gray-900/50 p-4 border border-indigo-500/20">
                    <p className="text-indigo-400 font-medium mb-2">Regular Income From One Client</p>
                    <p className="text-gray-400 text-sm">
                      If you work primarily for one client on an ongoing basis, a voluntary agreement gives you the <strong className="text-gray-200">predictability of regular tax deductions</strong>. You know exactly how much you will receive after tax each pay cycle, making budgeting easier.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-4 border border-blue-500/20">
                    <p className="text-blue-400 font-medium mb-2">Avoiding PAYG Instalment Surprises</p>
                    <p className="text-gray-400 text-sm">
                      For contractors who struggle with the discipline of setting aside tax money, a voluntary agreement <strong className="text-gray-200">removes the temptation to spend</strong> what should be tax savings. The tax is handled before you receive payment, so there is no instalment bill to worry about.
                    </p>
                  </div>
                </div>
                <h4 className="text-white font-medium mt-4 mb-2">Key details:</h4>
                <ul className="space-y-1.5 text-sm text-gray-400 mt-2">
                  <li>&bull; Either party can terminate the agreement with <strong className="text-gray-200">written notice</strong></li>
                  <li>&bull; The agreement does not change your status &mdash; you remain a contractor, not an employee</li>
                  <li>&bull; You can still claim all your business deductions at tax time</li>
                  <li>&bull; The ATO provides the agreement form on their website (search for &quot;voluntary agreement PAYG withholding&quot;)</li>
                  <li>&bull; The withholding rate should be based on your expected annual income using ATO tax tables</li>
                </ul>
              </div>
            </div>

            {/* Labour Hire */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">MANDATORY</span>
                <h3 className="text-lg font-semibold text-white">Labour Hire Arrangements</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  Unlike voluntary agreements, withholding under labour hire arrangements is <strong className="text-gray-200">mandatory</strong>. If you work through a labour hire firm or staffing agency, the agency is required to withhold PAYG from your payments, even though you are technically a contractor. This applies when:
                </p>
                <ul className="space-y-1.5 mt-2">
                  <li>&bull; A labour hire firm arranges for you to perform work for a client</li>
                  <li>&bull; The labour hire firm pays you for that work</li>
                  <li>&bull; The arrangement is one of &quot;labour hire&quot; as defined by the ATO</li>
                </ul>
                <p className="mt-3">
                  The withholding rate is determined by the ATO tax tables, similar to employee withholding. The labour hire firm is responsible for withholding, reporting, and remitting the amounts to the ATO. They must also provide you with a PAYG payment summary at the end of the financial year.
                </p>
              </div>
            </div>

            {/* Comparison: Voluntary vs No Agreement */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Feature</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">No Agreement (Standard)</th>
                      <th className="text-left text-sm font-medium text-indigo-400 px-6 py-4">Voluntary Agreement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Tax deducted at source</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">No &mdash; you receive gross amount</td>
                      <td className="px-6 py-4 text-indigo-400 text-sm">Yes &mdash; tax withheld each payment</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">PAYG instalments</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">Yes &mdash; quarterly payments to ATO</td>
                      <td className="px-6 py-4 text-indigo-400 text-sm">May not be needed (tax already withheld)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Cash flow control</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">You manage tax savings yourself</td>
                      <td className="px-6 py-4 text-indigo-400 text-sm">Automatic &mdash; handled by payer</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Year-end tax bill risk</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">Higher &mdash; if you underpay instalments</td>
                      <td className="px-6 py-4 text-indigo-400 text-sm">Lower &mdash; tax withheld throughout the year</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Flexibility</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">Full control over timing and amounts</td>
                      <td className="px-6 py-4 text-indigo-400 text-sm">Less flexible &mdash; fixed rate per payment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">Contractor Status Is Unchanged</p>
              <p className="text-gray-400 text-sm">
                Entering a voluntary agreement <strong className="text-gray-200">does not make you an employee</strong>. Your status as an independent contractor is unaffected. You still do not receive leave entitlements, <Link href="/glossary/superannuation" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">superannuation</Link>, or other employee benefits. The only change is how your tax is collected &mdash; at the source rather than through quarterly instalments. You can still claim all business deductions on your tax return. See <Link href="/glossary/contractor-vs-employee" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">Contractor vs Employee</Link> for the full distinction.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Withholding Tax Rates 2025-26 */}
        <section id="withholding-rates-2025-26">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Withholding Tax Rates 2025-26</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Here is a comprehensive summary of the key withholding tax rates that apply in Australia for the 2025-26 financial year. These rates cover the main scenarios you are likely to encounter as a freelancer, contractor, or business making payments.
            </p>

            {/* Key Withholding Rates Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Scenario</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Rate</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">No ABN quoted</td>
                      <td className="px-6 py-4 text-red-400 font-bold">47%</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">S12-190, Sch 1, TAA 1953</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">No TFN provided (employment)</td>
                      <td className="px-6 py-4 text-red-400 font-bold">47%</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">S12-140, Sch 1, TAA 1953</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">No TFN provided (investment income)</td>
                      <td className="px-6 py-4 text-red-400 font-bold">47%</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">ITAA 1936, Division 3B</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Regular PAYG withholding (wages)</td>
                      <td className="px-6 py-4 text-indigo-400 font-medium">Per ATO tax tables</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">S12-35, Sch 1, TAA 1953</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Voluntary agreement (contractor)</td>
                      <td className="px-6 py-4 text-indigo-400 font-medium">Per ATO tax tables</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">S12-55, Sch 1, TAA 1953</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Foreign resident &mdash; unfranked dividends</td>
                      <td className="px-6 py-4 text-indigo-400 font-medium">30%</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">Div 11A, ITAA 1936 (or DTA rate)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Foreign resident &mdash; interest</td>
                      <td className="px-6 py-4 text-indigo-400 font-medium">10%</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">Div 11A, ITAA 1936 (or DTA rate)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">Foreign resident &mdash; royalties</td>
                      <td className="px-6 py-4 text-indigo-400 font-medium">30%</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">Div 11A, ITAA 1936 (or DTA rate)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Resident Individual Tax Rates 2025-26</h3>
            <p className="text-gray-300 leading-relaxed">
              For reference, the following are the standard <Link href="/glossary/income-tax" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">income tax</Link> rates for Australian residents, which form the basis for PAYG withholding calculations via the ATO tax tables:
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Taxable Income</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tax on This Income</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$0 &ndash; $18,200</td>
                    <td className="px-6 py-4 text-indigo-400 font-medium">Nil</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$18,201 &ndash; $45,000</td>
                    <td className="px-6 py-4 text-indigo-400 font-medium">16c for each $1 over $18,200</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$45,001 &ndash; $135,000</td>
                    <td className="px-6 py-4 text-indigo-400 font-medium">$4,288 plus 30c for each $1 over $45,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$135,001 &ndash; $190,000</td>
                    <td className="px-6 py-4 text-indigo-400 font-medium">$31,288 plus 37c for each $1 over $135,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$190,001+</td>
                    <td className="px-6 py-4 text-indigo-400 font-medium">$51,638 plus 45c for each $1 over $190,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4">
              On top of these rates, the <strong className="text-white">2% Medicare levy</strong> applies to your total taxable income (with low-income thresholds). The combined top marginal rate of 45% income tax + 2% Medicare levy = 47% &mdash; which is why the no-ABN and no-TFN withholding rates are set at 47%.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Foreign Resident Tax Rates (No Tax-Free Threshold)</h3>
            <p className="text-gray-300 leading-relaxed">
              Foreign residents for tax purposes do not receive the $18,200 tax-free threshold. Their employment income is taxed from the first dollar at <strong className="text-white">30% up to $135,000</strong>, then 37% to $190,000, and 45% above $190,000. They also do not pay the Medicare levy (they are not eligible for Medicare). However, withholding on passive income (dividends, interest, royalties) is at the flat rates shown in the table above, or at reduced rates under applicable Double Taxation Agreements.
            </p>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">Double Taxation Agreements (DTAs)</p>
              <p className="text-gray-400 text-sm">
                Australia has <strong className="text-gray-200">DTAs with over 40 countries</strong> that can reduce foreign resident withholding tax rates. For example, the Australia-US DTA reduces the dividend withholding rate from 30% to 15% (or 5% for certain substantial holdings), and the interest withholding rate from 10% to 0% in some cases. If you are a foreign resident receiving Australian-sourced income, check whether a DTA applies to your country of residence.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: InvoiceFlow Integration */}
        <section id="invoiceflow-integration">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The best way to deal with withholding tax is to <strong className="text-white">avoid unnecessary withholding in the first place</strong>. InvoiceFlow is designed to help Australian freelancers and contractors stay compliant and keep more of their money in their pocket. Here is how InvoiceFlow addresses each withholding risk.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">ABN Always Displayed</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every invoice you create with InvoiceFlow <strong className="text-gray-200">automatically includes your ABN</strong> in the correct position. You set it once in your profile and it appears on every invoice, credit note, and quote you send. This eliminates the risk of accidentally triggering the 47% no-ABN withholding rule.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Tax Invoice Compliance</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow generates invoices that meet all ATO requirements for valid <Link href="/glossary/tax-invoice" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30">tax invoices</Link> &mdash; your ABN, GST amounts, business name, date, description of services, and payment terms. Compliant invoices mean your clients have no reason to withhold.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Payment Tracking</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track which invoices have been paid and which are outstanding. InvoiceFlow&apos;s dashboard gives you a <strong className="text-gray-200">real-time view of your income</strong>, making it easy to estimate your quarterly PAYG instalment amounts and plan for tax payments. No more scrambling at BAS time.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-indigo-500/20 p-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Withholding Amount Tracking</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If any of your payments have had withholding applied, InvoiceFlow helps you <strong className="text-gray-200">track the amounts withheld</strong> so you can claim them as credits on your tax return. Every dollar of withholding is recorded and easy to find when you or your accountant prepare your return.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">Prevention Over Recovery</p>
              <p className="text-gray-400 text-sm">
                While you can always recover withheld amounts through your tax return, <strong className="text-gray-200">prevention is far better than recovery</strong>. Every dollar unnecessarily withheld is money you cannot use in your business for months. By using InvoiceFlow to ensure your ABN is always quoted and your invoices are fully compliant, you keep your full cash flow intact and avoid the hassle of chasing credits at tax time.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you stay on top of withholding tax and compliance.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-indigo-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-indigo-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, withholding, and freelancing in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-indigo-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-indigo-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Lose 47% to Withholding Again
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow ensures your ABN is on every invoice, your tax invoices are fully ATO-compliant, and your payment tracking is always up to date. Stop worrying about withholding tax and focus on your work.
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
