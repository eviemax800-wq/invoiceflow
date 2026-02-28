import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Tax File Number (TFN): Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
  description:
    'What is a TFN? Learn how the 9-digit Tax File Number works for freelancers and sole traders in Australia — how to apply, when to quote it, TFN vs ABN, privacy rules, and what happens if you don\'t provide one (47% withholding). Updated for 2025-26.',
  keywords: [
    'what is TFN',
    'tax file number freelancer',
    'TFN for sole trader',
    'do I need a TFN',
    'TFN vs ABN',
    'how to get a TFN',
    'tax file number australia',
    'TFN application',
    'TFN privacy',
    'lost TFN',
    'TFN withholding rate',
    'tax file number declaration',
  ],
  alternates: { canonical: '/glossary/tfn' },
  openGraph: {
    title: 'Tax File Number (TFN): Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about the Tax File Number: 9-digit identifier, TFN vs ABN, how to apply for free, when to quote it, 47% withholding penalty, and privacy protections.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/tfn',
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
    { '@type': 'ListItem', position: 3, name: 'Tax File Number (TFN)', item: `${BASE_URL}/glossary/tfn` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a TFN the same as an ABN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, a TFN (Tax File Number) and an ABN (Australian Business Number) are different. A TFN is a unique 9-digit number issued to individuals by the ATO for personal tax purposes — you use it on your tax return, bank accounts, and super funds. An ABN is an 11-digit number issued to businesses for trading purposes — you use it on invoices, for GST registration, and on your BAS. As a freelancer, you need both: your TFN for your individual tax return and your ABN for your business invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I don\'t provide my TFN to my bank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you don\'t provide your TFN to your bank, the bank is required to withhold tax on any interest earned at the highest marginal tax rate, which is currently 47% (including the Medicare levy). This is known as "TFN withholding tax." For example, if you earn $500 in interest, the bank would withhold $235 instead of the amount based on your actual marginal rate (which could be as low as 0% if you\'re under the tax-free threshold). You can provide your TFN to the bank at any time to stop future withholding, but recovering the over-withheld amount requires lodging a tax return.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use my TFN on invoices instead of an ABN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, you should never put your TFN on an invoice. Invoices require an ABN (Australian Business Number), not a TFN. Your TFN is a private identifier for personal tax purposes and should only be shared with your employer, the ATO, your bank, your super fund, or a registered tax agent. If you don\'t have an ABN and issue an invoice without one, the payer is required to withhold 47% of the payment under the "no ABN withholding" rules. If you\'re freelancing, you need to register for an ABN (free through the ABR) to use on your invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find my lost TFN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you\'ve lost or forgotten your TFN, there are several ways to find it: 1) Log into your myGov account linked to the ATO — your TFN is displayed in your ATO profile. 2) Check previous tax returns, notices of assessment, or payment summaries. 3) Check your superannuation fund statements, which usually show your TFN. 4) Call the ATO on 13 28 61 (individual enquiries line) — they can verify your identity and provide your TFN. You will never be issued a new TFN; you keep the same one for life, so it\'s always recoverable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a new TFN if I become a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, you do not need a new TFN when you become a freelancer or sole trader. Your TFN is issued to you once and stays the same for your entire life, regardless of whether you\'re an employee, freelancer, sole trader, or not working at all. What you DO need when you start freelancing is an ABN (Australian Business Number), which is separate from your TFN. Your ABN is used on invoices and for GST purposes, while your TFN continues to be used on your individual tax return. You can apply for an ABN for free through the Australian Business Register (ABR).',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-tfn', label: '1. What Is a Tax File Number?' },
  { id: 'tfn-vs-abn', label: '2. TFN vs ABN: What\u2019s the Difference?' },
  { id: 'how-to-get-tfn', label: '3. How to Get a TFN' },
  { id: 'when-to-quote-tfn', label: '4. When You Need to Quote Your TFN' },
  { id: 'tfn-privacy', label: '5. TFN and Privacy' },
  { id: 'tfn-for-freelancers', label: '6. TFN for Freelancers & Sole Traders' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax liability as a freelancer or sole trader.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/abn-lookup',
    name: 'ABN Lookup',
    description: 'Verify any Australian Business Number and check GST registration status.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly or daily rate factoring in tax and super.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/payg-installment-calculator',
    name: 'PAYG Installment Calculator',
    description: 'Calculate your quarterly PAYG installment amounts for the ATO.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, PAYG, and everything else you need to know as a sole trader.',
  },
  {
    href: '/guides/abn-guide',
    name: 'ABN Guide',
    description: 'How to register, use, and manage your Australian Business Number as a freelancer.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide',
    description: 'End of financial year checklist, deadlines, and last-minute tax tips for freelancers.',
  },
];

export default function TFNGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Tax File Number (TFN)</span>
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
            Tax File Number{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Your TFN is a unique 9-digit identifier issued by the ATO that follows you for life. As a freelancer or sole trader, you need it for your tax return, bank accounts, and super &mdash; but it&apos;s not the same as your ABN. Here&apos;s everything you need to know about getting, using, and protecting your Tax File Number.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
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
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 p-8">
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">9</span>
              <div>
                <p className="text-white font-medium text-sm">Digits in a TFN</p>
                <p className="text-gray-400 text-sm">Your unique 9-digit tax identifier, issued by the ATO</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">47%</span>
              <div>
                <p className="text-white font-medium text-sm">Tax Withheld Without TFN</p>
                <p className="text-gray-400 text-sm">Highest marginal rate applied if you don&apos;t provide your TFN</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">1</span>
              <div>
                <p className="text-white font-medium text-sm">TFN Per Lifetime</p>
                <p className="text-gray-400 text-sm">You get one TFN and it never changes, regardless of your circumstances</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">Free</span>
              <div>
                <p className="text-white font-medium text-sm">No Cost to Apply</p>
                <p className="text-gray-400 text-sm">Applying for a TFN through the ATO is completely free</p>
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

        {/* Section 1: What Is a Tax File Number? */}
        <section id="what-is-tfn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Tax File Number?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A Tax File Number (TFN) is a <strong className="text-white">unique 9-digit identifier</strong> issued by the Australian Taxation Office (ATO) to individuals and organisations for tax purposes. Think of it as Australia&apos;s equivalent of a social security number for tax &mdash; it&apos;s how the ATO tracks your income, tax obligations, and government benefits across your entire life.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every Australian who earns income needs a TFN. It&apos;s used across a wide range of financial interactions: lodging your <strong className="text-white">tax return</strong>, opening <strong className="text-white">bank accounts</strong> (so the bank can report interest to the ATO), joining a <strong className="text-white">super fund</strong>, making <strong className="text-white">investments</strong> (shares, managed funds, property trusts), and starting a new job (via the tax file number declaration form).
            </p>
            <p className="text-gray-300 leading-relaxed">
              It&apos;s important to understand that a TFN is <strong className="text-white">not the same as an ABN</strong>. Your TFN is a personal identifier for you as an individual taxpayer. An ABN (Australian Business Number) is an 11-digit number issued to businesses and sole traders for trading and GST purposes. As a freelancer, you need both &mdash; your TFN for your personal tax affairs and your ABN for your business invoicing.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Your TFN is issued once and <strong className="text-white">never changes</strong>. Whether you move interstate, change your name, switch careers, or go from employee to freelancer and back again, your TFN stays the same. It follows you from your first part-time job as a teenager all the way through to retirement.
            </p>
            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                Your TFN is for <strong className="text-gray-200">personal tax identification</strong>. Your ABN is for <strong className="text-gray-200">business identification</strong>. You quote your TFN on your tax return, to your bank, and to your super fund. You quote your ABN on your invoices, for GST registration, and on your BAS. Never put your TFN on an invoice &mdash; that&apos;s what your ABN is for.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: TFN vs ABN */}
        <section id="tfn-vs-abn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">TFN vs ABN: What&apos;s the Difference?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              One of the most common points of confusion for new freelancers is the difference between a TFN and an ABN. They&apos;re both issued by government agencies, they&apos;re both numbers you need to keep track of, and they&apos;re both related to tax. But they serve <strong className="text-white">completely different purposes</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Your <strong className="text-white">TFN is personal</strong> &mdash; it identifies you as an individual taxpayer. It&apos;s issued by the ATO and used for anything related to your personal tax obligations. Your <strong className="text-white">ABN is for business</strong> &mdash; it identifies your business entity (even if that entity is just you as a sole trader). It&apos;s issued by the Australian Business Register (ABR) and used for anything related to trading.
            </p>
            <p className="text-gray-300 leading-relaxed">
              As a freelancer or sole trader, <strong className="text-white">you need both</strong>. Your TFN goes on your individual tax return. Your ABN goes on your invoices. You cannot substitute one for the other.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4"></th>
                    <th className="text-left text-sm font-medium text-indigo-400 px-6 py-4">TFN</th>
                    <th className="text-left text-sm font-medium text-violet-400 px-6 py-4">ABN</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-400 text-sm font-medium">Digits</td>
                    <td className="px-6 py-3 text-white text-sm">9 digits</td>
                    <td className="px-6 py-3 text-white text-sm">11 digits</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-400 text-sm font-medium">Issued by</td>
                    <td className="px-6 py-3 text-white text-sm">ATO</td>
                    <td className="px-6 py-3 text-white text-sm">Australian Business Register</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-400 text-sm font-medium">Issued to</td>
                    <td className="px-6 py-3 text-white text-sm">Individuals</td>
                    <td className="px-6 py-3 text-white text-sm">Businesses &amp; sole traders</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-400 text-sm font-medium">Purpose</td>
                    <td className="px-6 py-3 text-white text-sm">Personal tax identification</td>
                    <td className="px-6 py-3 text-white text-sm">Business trading &amp; GST</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-400 text-sm font-medium">Used on</td>
                    <td className="px-6 py-3 text-white text-sm">Tax returns, bank accounts, super</td>
                    <td className="px-6 py-3 text-white text-sm">Invoices, BAS, contracts</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-400 text-sm font-medium">Who needs it</td>
                    <td className="px-6 py-3 text-white text-sm">Everyone who earns income</td>
                    <td className="px-6 py-3 text-white text-sm">Anyone running a business</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-400 text-sm font-medium">Cost</td>
                    <td className="px-6 py-3 text-white text-sm">Free</td>
                    <td className="px-6 py-3 text-white text-sm">Free</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-400 text-sm font-medium">Lifetime?</td>
                    <td className="px-6 py-3 text-white text-sm">Yes &mdash; never changes</td>
                    <td className="px-6 py-3 text-white text-sm">Can be cancelled and re-registered</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">Freelancer Tip</p>
              <p className="text-gray-400 text-sm">
                When a new client asks for your &quot;tax details,&quot; they almost always mean your <strong className="text-gray-200">ABN</strong> (to put on their records and avoid withholding 47% of your payment). They should <strong className="text-gray-200">not</strong> need your TFN unless they&apos;re treating you as an employee. If a client specifically asks for your TFN, question whether the arrangement is actually employment rather than contracting.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: How to Get a TFN */}
        <section id="how-to-get-tfn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Get a TFN</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Applying for a TFN is free and straightforward. Most Australians will already have one from their first job or from their parents applying on their behalf. But if you don&apos;t have one yet, or you&apos;re new to Australia, here are the ways to apply.
            </p>

            <div className="space-y-4 mt-6">
              {/* Method 1 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <span className="text-indigo-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Online via myGov (Fastest)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Australian residents with valid proof of identity can apply online through the <strong className="text-gray-200">ATO&apos;s online TFN application</strong> (linked from ato.gov.au). You&apos;ll need to verify your identity using your passport, birth certificate, or other accepted documents. This is the fastest method &mdash; most applications are processed within <strong className="text-gray-200">10 business days</strong>, though it can take up to 28 days.
                </p>
              </div>

              {/* Method 2 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <span className="text-indigo-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">By Phone</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  You can call the ATO on <strong className="text-gray-200">13 28 61</strong> to request a TFN application form be sent to you. The ATO will also guide you through any identity verification requirements. This method takes longer due to postal delivery and processing times.
                </p>
              </div>

              {/* Method 3 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <span className="text-indigo-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Through a Registered Tax Agent</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A registered tax agent can apply for a TFN on your behalf. This can be useful if you have complex identity verification requirements or if you&apos;re also setting up other tax registrations (ABN, GST) at the same time.
                </p>
              </div>

              {/* Method 4 */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <span className="text-indigo-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Non-Residents</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you&apos;re a non-resident (e.g., working in Australia on a visa), you can apply using the <strong className="text-gray-200">NAT 1589 form</strong> (Tax file number &mdash; application or enquiry for individuals). This form can be submitted at an Australia Post office with your identity documents. Processing takes <strong className="text-gray-200">up to 28 days</strong>.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">Lost Your TFN?</p>
              <p className="text-gray-400 text-sm">
                You only ever get <strong className="text-gray-200">one TFN for life</strong> &mdash; it doesn&apos;t change and you won&apos;t be issued a new one. If you&apos;ve lost or forgotten your TFN, you can find it by: logging into <strong className="text-gray-200">myGov</strong> (linked to the ATO), checking previous tax returns or notices of assessment, calling the ATO on <strong className="text-gray-200">13 28 61</strong>, or checking your super fund statements which usually display your TFN.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: When You Need to Quote Your TFN */}
        <section id="when-to-quote-tfn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When You Need to Quote Your TFN</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There are several situations where you&apos;ll be asked to provide your TFN. Providing it is technically optional in most cases &mdash; but <strong className="text-white">not providing it comes with severe financial penalties</strong> in the form of withholding tax at the highest marginal rate.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Starting Employment</p>
                    <p className="text-gray-400 text-sm mt-1">When you start a new job, you complete a <strong className="text-gray-200">Tax File Number Declaration</strong> form. Your employer uses your TFN to withhold the correct amount of PAYG tax from your wages.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Opening a Bank Account</p>
                    <p className="text-gray-400 text-sm mt-1">Banks use your TFN to report interest income to the ATO. Without it, interest is taxed at <strong className="text-gray-200">47%</strong> instead of your actual marginal rate.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Joining a Super Fund</p>
                    <p className="text-gray-400 text-sm mt-1">Your super fund needs your TFN to accept contributions, consolidate accounts, and report to the ATO. Without it, your contributions may be taxed at a higher rate.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Making Investments</p>
                    <p className="text-gray-400 text-sm mt-1">Share registries, managed funds, and other investment platforms require your TFN to correctly report dividends, distributions, and capital gains to the ATO.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Lodging Your Tax Return</p>
                    <p className="text-gray-400 text-sm mt-1">Your TFN is the primary identifier on your individual tax return. Without it, you simply cannot lodge.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">What Happens If You DON&apos;T Provide Your TFN?</p>
              <p className="text-gray-400 text-sm">
                If you don&apos;t quote your TFN to your employer, bank, super fund, or investment manager, they are legally required to withhold tax at the <strong className="text-gray-200">highest marginal rate of 47%</strong> (including Medicare levy). This means nearly half of your income, interest, or investment earnings is withheld &mdash; regardless of your actual tax bracket. You can recover the excess when you lodge your tax return, but your cash flow takes a significant hit in the meantime.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: TFN and Privacy */}
        <section id="tfn-privacy">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">TFN and Privacy</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Your TFN is one of your most sensitive pieces of personal information. It is specifically protected under the <strong className="text-white">Privacy Act 1988</strong> and the <strong className="text-white">Tax File Number Guidelines</strong>, which impose strict rules on who can collect, use, store, and disclose your TFN.
            </p>
            <p className="text-gray-300 leading-relaxed">
              It is a <strong className="text-white">criminal offence</strong> to misuse someone&apos;s TFN. This includes unauthorised collection, use, or disclosure. Penalties can include fines and imprisonment. Employers and financial institutions who request your TFN are required to handle it securely and can only use it for authorised purposes (such as reporting to the ATO).
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Who You SHOULD Provide Your TFN To</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Safe to Provide
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>The Australian Taxation Office (ATO)</li>
                  <li>Your employer (via Tax File Number Declaration)</li>
                  <li>Your bank or financial institution</li>
                  <li>Your superannuation fund</li>
                  <li>Your registered tax agent</li>
                  <li>Centrelink / Services Australia</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  NEVER Provide To
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Clients who hire you as a contractor (give ABN instead)</li>
                  <li>Anyone requesting it via email or SMS</li>
                  <li>Unverified phone callers claiming to be from the ATO</li>
                  <li>Social media, online forms, or unsecured websites</li>
                  <li>Anyone who doesn&apos;t have a legal reason to collect it</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Scam Warning</p>
              <p className="text-gray-400 text-sm">
                The ATO will <strong className="text-gray-200">never</strong> ask for your TFN via email, SMS, or social media. They will never threaten you with arrest over the phone or demand immediate payment via gift cards or cryptocurrency. If someone contacts you claiming to be from the ATO and asks for your TFN, it is a scam. Hang up and call the ATO directly on <strong className="text-gray-200">1800 008 540</strong> (scam reporting line) to report it.
              </p>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">Privacy Tip for Freelancers</p>
              <p className="text-gray-400 text-sm">
                Never share your TFN via email, even with your accountant. Use a secure client portal or provide it in person. If you must send it electronically, split it across two separate messages via different channels (e.g., half by email, half by phone). Store your TFN securely &mdash; not in a plaintext note on your phone or in an unsecured spreadsheet.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: TFN for Freelancers & Sole Traders */}
        <section id="tfn-for-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">TFN for Freelancers &amp; Sole Traders</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              As a freelancer or sole trader, your TFN and ABN play <strong className="text-white">distinct roles in your tax life</strong>. Understanding which number goes where is essential for staying compliant and avoiding unnecessary withholding tax.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Your <strong className="text-white">TFN goes on your individual tax return</strong>. Even though you run a business as a sole trader, your business income flows through to your personal tax return. The ATO identifies your return using your TFN, not your ABN. All your business income, deductions, and tax payable are assessed under your personal TFN.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Your <strong className="text-white">ABN goes on your invoices</strong>. When you bill a client, your invoice must include your ABN (and your name, address, date, description of services, and amount). If you issue an invoice without an ABN, the client is legally required to withhold 47% of the payment and remit it to the ATO under the &quot;no ABN withholding&quot; rules.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Quick Reference: Where Each Number Goes</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm text-indigo-400 font-medium">Use Your TFN For</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Your individual tax return</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Bank accounts (to avoid 47% withholding on interest)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Super fund contributions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Investment accounts (shares, managed funds)</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-violet-400 font-medium">Use Your ABN For</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Invoices to clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Business Activity Statements (BAS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>GST registration and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Contracts and business registrations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Contractor vs Employee Red Flag</p>
              <p className="text-gray-400 text-sm">
                If a client asks you for your <strong className="text-gray-200">TFN instead of your ABN</strong>, they may be treating you as an employee rather than a contractor. This has significant implications: they&apos;d need to withhold PAYG tax, pay superannuation guarantee (11.5%), and provide employee entitlements. If you believe you&apos;re genuinely a contractor, provide your ABN and clarify the arrangement. Check the ATO&apos;s Employee/Contractor Decision Tool if you&apos;re unsure about your classification.
              </p>
            </div>

            <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/20 p-5 mt-6">
              <p className="text-indigo-400 font-medium mb-2">Keep Both Numbers Handy</p>
              <p className="text-gray-400 text-sm">
                As a freelancer, you&apos;ll regularly need both your TFN and ABN. Keep your ABN easily accessible (it goes on every invoice). Keep your TFN stored securely but retrievable for tax time, bank account openings, and super fund interactions. Your TFN goes on your individual tax return. Your BAS uses your ABN. Both are essential &mdash; neither replaces the other.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free calculators to help you manage your tax and business finances.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, ABN, and end of financial year planning for freelancers.</p>
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
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tax Sorted. Business Growing.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers create professional invoices with the right ABN details, estimate tax, and stay on top of compliance &mdash; so you can focus on the work, not the paperwork.
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
