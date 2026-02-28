import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Input Tax Credits (GST Credits): Complete Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What are input tax credits in Australia? Learn how to claim GST credits on business purchases, calculate your 1B amount for BAS, and reduce the net GST you owe the ATO. Updated guide for freelancers and sole traders.',
  keywords: [
    'what are input tax credits australia',
    'GST credits for freelancers',
    'claiming GST credits sole trader',
    'input tax credits BAS',
    'input tax credits australia',
    'GST credits on purchases',
    'BAS label 1B',
    'how to claim GST back',
    'GST on business expenses',
    'input taxed supplies',
    'GST credit calculation',
    'freelancer GST credits',
  ],
  alternates: { canonical: '/glossary/input-tax-credits' },
  openGraph: {
    title: 'Input Tax Credits (GST Credits): Complete Guide for Australian Freelancers — InvoiceFlow',
    description:
      'Everything freelancers need to know about claiming input tax credits: what you can and cannot claim, how to calculate GST credits, BAS reporting at label 1B, and common mistakes to avoid.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/input-tax-credits',
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
    { '@type': 'ListItem', position: 3, name: 'Input Tax Credits', item: `${BASE_URL}/glossary/input-tax-credits` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are input tax credits in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Input tax credits (also called GST credits) are the GST included in the price of your business purchases and expenses that you can claim back from the ATO. When you buy something for your business that includes GST, you can offset that GST against the GST you collected from clients. The difference is the net GST you owe. For example, if you collected $5,000 in GST from clients and paid $1,500 in GST on business expenses, you only owe the ATO $3,500. You must be registered for GST and hold valid tax invoices to claim input tax credits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim GST credits if I earn under $75,000?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can only claim input tax credits if you are registered for GST. While registration is mandatory once your turnover reaches $75,000, you can voluntarily register below this threshold. If you voluntarily register, you can claim GST credits on all your business purchases, but you must also charge GST on your sales and lodge quarterly BAS returns. Voluntary registration makes sense if you have significant business expenses with GST, or if your clients are GST-registered businesses who can claim back the GST you charge them.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between GST-free and input-taxed supplies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GST-free supplies (like basic food, health services, and exports) have no GST charged on them, but the supplier can still claim input tax credits on their business costs related to making those supplies. Input-taxed supplies (like residential rent, bank fees, and some financial services) also have no GST charged, but the supplier cannot claim input tax credits on costs related to those supplies. As a buyer, this distinction matters because you cannot claim a GST credit on something that was not subject to GST in the first place — whether it is GST-free or input-taxed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I have to claim an input tax credit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You have four years from the due date of the BAS for the tax period in which you were entitled to claim the credit. For example, if you bought office supplies in October 2025 (Q2), your BAS for that quarter is due 28 February 2026, so you have until 28 February 2030 to claim the credit. If you missed claiming a GST credit on a past BAS, you can include it on a future BAS within the four-year window, or you can request a revision of the earlier BAS through the ATO.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a tax invoice to claim input tax credits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for purchases of $82.50 or more (including GST), you must hold a valid tax invoice from the supplier to claim an input tax credit. The tax invoice must include the supplier\'s ABN, the words "Tax Invoice", the date, a description of the items, the GST amount (or a statement that the total includes GST), and the total price. For purchases under $82.50, you do not need a tax invoice but should still keep a receipt as evidence. You must retain tax invoices for five years from the date you lodge the BAS that includes the claim.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-are-input-tax-credits', label: '1. What Are Input Tax Credits?' },
  { id: 'who-can-claim', label: '2. Who Can Claim Input Tax Credits?' },
  { id: 'how-to-calculate', label: '3. How to Calculate Input Tax Credits' },
  { id: 'can-and-cannot-claim', label: '4. What You CAN and CANNOT Claim' },
  { id: 'reporting-on-bas', label: '5. Reporting Input Tax Credits on Your BAS' },
  { id: 'tracking-with-invoiceflow', label: '6. Tracking Input Tax Credits with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Add or remove GST from any amount instantly and extract the GST credit component.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Step-by-step checklist to lodge your BAS on time, including input tax credit verification.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Discover all the tax deductions and GST credits you can claim as an Australian freelancer.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-and-loss-generator',
    name: 'Profit & Loss Generator',
    description: 'Generate a profit and loss statement that separates GST components from your income and expenses.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'The complete guide to GST registration, BAS lodgement, tax invoices, and claiming credits.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, PAYG, super, and everything else you need to know as a sole trader.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'End of financial year checklist — reconcile your GST credits, maximise deductions, and lodge on time.',
  },
];

export default function InputTaxCreditsGlossaryPage() {
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
            <span className="text-white">Input Tax Credits</span>
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
            Input Tax Credits{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              (GST Credits)
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Input tax credits let you claim back the GST you pay on business purchases and expenses. If you&apos;re GST-registered, every dollar of GST on a legitimate business expense reduces the net GST you owe the ATO &mdash; potentially saving you thousands each year.
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">1/11</span>
              <div>
                <p className="text-white font-medium text-sm">GST Fraction</p>
                <p className="text-gray-400 text-sm">GST component of any price = total &divide; 11</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">1B</span>
              <div>
                <p className="text-white font-medium text-sm">BAS Label</p>
                <p className="text-gray-400 text-sm">Report your total input tax credits at label 1B on your BAS</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">4yr</span>
              <div>
                <p className="text-white font-medium text-sm">Claim Window</p>
                <p className="text-gray-400 text-sm">You have 4 years to claim a missed input tax credit</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">$75K</span>
              <div>
                <p className="text-white font-medium text-sm">GST Threshold</p>
                <p className="text-gray-400 text-sm">Must be GST-registered to claim &mdash; mandatory at $75K turnover</p>
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

        {/* Section 1: What Are Input Tax Credits? */}
        <section id="what-are-input-tax-credits">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Are Input Tax Credits?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Input tax credits (ITCs) &mdash; also called <strong className="text-white">GST credits</strong> &mdash; are the GST included in the price of business purchases and expenses that you can <strong className="text-white">claim back from the ATO</strong>. Every time you buy something for your business that includes GST, the GST portion is an input tax credit you can recover.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The concept is straightforward. As a GST-registered freelancer, you collect GST from your clients on every invoice. But you also <strong className="text-white">pay GST on the things you buy</strong> for your business &mdash; software subscriptions, office supplies, equipment, professional development, and more. Input tax credits ensure you are not taxed twice: you only remit the <em>net</em> difference to the ATO.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The formula is simple:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/30 p-6">
              <div className="text-center">
                <div className="text-sm font-mono space-y-2">
                  <p className="text-gray-400">GST collected from clients (label 1A)</p>
                  <p className="text-emerald-400 font-bold text-lg">&minus;</p>
                  <p className="text-gray-400">GST paid on business expenses (label 1B)</p>
                  <p className="text-emerald-400 font-bold text-lg">=</p>
                  <p className="text-white font-bold text-lg">Net GST you owe the ATO</p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Only <strong className="text-white">GST-registered businesses</strong> can claim input tax credits. If you are not registered for GST, you cannot recover the GST you pay on purchases &mdash; it is simply an additional cost of doing business. To claim, you must hold a <strong className="text-white">valid tax invoice</strong> from the supplier for any purchase of $82.50 or more (including GST).
            </p>
            <p className="text-gray-300 leading-relaxed">
              To extract the GST component from any GST-inclusive price, use the <strong className="text-white">1/11th rule</strong>: divide the total price by 11. For example, a $330 software subscription includes $30 of GST ($330 &divide; 11 = $30). That $30 is your input tax credit.
            </p>
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Quick Example</p>
              <p className="text-gray-400 text-sm">
                You invoice a client <strong className="text-gray-200">$5,500 (including $500 GST)</strong>. During the same quarter, you spend $1,100 on Adobe Creative Cloud, Figma, and hosting &mdash; which includes <strong className="text-gray-200">$100 of GST</strong>. You owe the ATO $500 &minus; $100 = <strong className="text-gray-200">$400 net GST</strong>. The $100 you paid on those subscriptions is your input tax credit.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Who Can Claim Input Tax Credits? */}
        <section id="who-can-claim">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Who Can Claim Input Tax Credits?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not everyone can claim input tax credits. The ATO has specific requirements that must <em>all</em> be met before you can include a GST credit on your BAS:
            </p>

            <ul className="space-y-3 ml-1">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">You must be <strong className="text-white">registered for GST</strong> (mandatory at $75,000 turnover, optional below)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">The purchase must be <strong className="text-white">for business use</strong> (not private or personal)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">You must hold a <strong className="text-white">valid tax invoice</strong> (for purchases of $82.50 or more inc. GST)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">The credit must be <strong className="text-white">claimed within 4 years</strong> of the BAS due date for the relevant period</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">The supply must be a <strong className="text-white">taxable supply</strong> (not GST-free or input-taxed)</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Mixed-Use Assets: The Business Portion Rule</h3>
            <p className="text-gray-300 leading-relaxed">
              If you use an item for <strong className="text-white">both business and personal purposes</strong>, you can only claim the GST credit on the business portion. The ATO expects you to make a reasonable estimate of your business-use percentage and apply it consistently.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-2">Example: Laptop (70% Business)</h4>
                <div className="text-sm space-y-1">
                  <p className="text-gray-400">Purchase price: <span className="text-white">$2,200 (inc GST)</span></p>
                  <p className="text-gray-400">GST component: <span className="text-white">$200</span></p>
                  <p className="text-gray-400">Business use: <span className="text-white">70%</span></p>
                  <p className="text-gray-400 border-t border-gray-700 pt-1 mt-2">Claimable credit: <span className="text-emerald-400 font-bold">$140</span></p>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-5">
                <h4 className="text-green-400 font-semibold mb-2">Example: Phone Plan (50% Business)</h4>
                <div className="text-sm space-y-1">
                  <p className="text-gray-400">Monthly plan: <span className="text-white">$110 (inc GST)</span></p>
                  <p className="text-gray-400">GST component: <span className="text-white">$10/month</span></p>
                  <p className="text-gray-400">Business use: <span className="text-white">50%</span></p>
                  <p className="text-gray-400 border-t border-gray-700 pt-1 mt-2">Claimable credit: <span className="text-green-400 font-bold">$5/month ($15/quarter)</span></p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Tax Invoice Requirements</p>
              <p className="text-gray-400 text-sm">
                A valid tax invoice must include: the supplier&apos;s <strong className="text-gray-200">ABN</strong>, the words <strong className="text-gray-200">&quot;Tax Invoice&quot;</strong>, the <strong className="text-gray-200">date of issue</strong>, a <strong className="text-gray-200">description</strong> of the goods or services, the <strong className="text-gray-200">GST amount</strong> (or a statement that the total includes GST), and the <strong className="text-gray-200">total price</strong>. For invoices over $1,000 (inc. GST), the buyer&apos;s identity and ABN must also be shown. Without a valid tax invoice, you cannot claim the input tax credit.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: How to Calculate Input Tax Credits */}
        <section id="how-to-calculate">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Calculate Input Tax Credits</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Calculating input tax credits is straightforward once you understand the 1/11th rule. Let&apos;s walk through a <strong className="text-white">complete worked example</strong> for a freelance designer.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/30 p-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Worked Example: Freelance Designer &mdash; Q2 (Oct&ndash;Dec)</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-emerald-400 font-medium text-sm mb-2">Income (GST Collected)</p>
                  <div className="text-sm space-y-1">
                    <p className="text-gray-400">Total invoiced to clients: <span className="text-white">$33,000 (inc. GST)</span></p>
                    <p className="text-gray-400">GST collected (1A): <span className="text-white">$33,000 &divide; 11 = <strong className="text-emerald-400">$3,000</strong></span></p>
                  </div>
                </div>
                <div>
                  <p className="text-green-400 font-medium text-sm mb-2">Business Expenses (GST Paid)</p>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between text-gray-400">
                      <span>Adobe Creative Cloud ($79.99/mo x 3)</span>
                      <span className="text-white">$240 inc GST &rarr; <span className="text-green-400">$21.82</span></span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Figma Professional ($22/mo x 3)</span>
                      <span className="text-white">$66 inc GST &rarr; <span className="text-green-400">$6.00</span></span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>New monitor</span>
                      <span className="text-white">$880 inc GST &rarr; <span className="text-green-400">$80.00</span></span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Internet (80% business)</span>
                      <span className="text-white">$297 inc GST &rarr; <span className="text-green-400">$21.60</span></span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Phone plan (50% business)</span>
                      <span className="text-white">$330 inc GST &rarr; <span className="text-green-400">$15.00</span></span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Office supplies</span>
                      <span className="text-white">$165 inc GST &rarr; <span className="text-green-400">$15.00</span></span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Accountant fees</span>
                      <span className="text-white">$550 inc GST &rarr; <span className="text-green-400">$50.00</span></span>
                    </div>
                    <div className="flex justify-between border-t border-gray-700 pt-2 mt-2">
                      <span className="text-white font-medium">Total GST on purchases (1B)</span>
                      <span className="text-emerald-400 font-bold">$209.42</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">GST collected (1A):</span>
                    <span className="text-white">$3,000.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">GST on purchases (1B):</span>
                    <span className="text-white">&minus; $209.42</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-gray-700 pt-2 mt-2">
                    <span className="text-white font-bold">Net GST payable to ATO:</span>
                    <span className="text-emerald-400 font-bold text-lg">$2,790.58</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Full-Year Overview</h3>
            <p className="text-gray-300 leading-relaxed">
              Here is a broader example showing how input tax credits accumulate over a full financial year for a freelancer earning $120,000 (including GST):
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="text-sm space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Annual income (inc. GST)</span>
                  <span className="text-white">$120,000</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>GST collected (1A): $120,000 &divide; 11</span>
                  <span className="text-white font-medium">$10,909</span>
                </div>
                <div className="flex justify-between text-gray-400 border-t border-gray-700 pt-2 mt-2">
                  <span>Annual business expenses (inc. GST)</span>
                  <span className="text-white">$30,000</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>GST paid on expenses (1B): $30,000 &divide; 11</span>
                  <span className="text-white font-medium">$2,727</span>
                </div>
                <div className="flex justify-between border-t border-gray-700 pt-2 mt-2">
                  <span className="text-white font-bold">Net GST payable: $10,909 &minus; $2,727</span>
                  <span className="text-emerald-400 font-bold text-lg">$8,182</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Without claiming input tax credits, you would owe $10,909. That is <strong className="text-gray-300">$2,727 you save</strong> by properly tracking and claiming your GST credits.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Common Expense Categories and Typical GST Credits</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Expense Category</th>
                    <th className="text-left text-sm font-medium text-emerald-400 px-6 py-4">Typical Quarterly Cost</th>
                    <th className="text-left text-sm font-medium text-green-400 px-6 py-4">GST Credit (&divide; 11)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Software subscriptions</td>
                    <td className="px-6 py-3 text-white text-sm">$500&ndash;$1,500</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$45&ndash;$136</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Office supplies</td>
                    <td className="px-6 py-3 text-white text-sm">$100&ndash;$400</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$9&ndash;$36</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Phone &amp; internet</td>
                    <td className="px-6 py-3 text-white text-sm">$300&ndash;$600</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$27&ndash;$55</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Equipment purchases</td>
                    <td className="px-6 py-3 text-white text-sm">$0&ndash;$5,000+</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$0&ndash;$455+</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Professional development</td>
                    <td className="px-6 py-3 text-white text-sm">$200&ndash;$2,000</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$18&ndash;$182</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Business travel</td>
                    <td className="px-6 py-3 text-white text-sm">$0&ndash;$3,000</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$0&ndash;$273</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Motor vehicle (business portion)</td>
                    <td className="px-6 py-3 text-white text-sm">$300&ndash;$1,500</td>
                    <td className="px-6 py-3 text-emerald-400 font-medium text-sm">$27&ndash;$136</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: What You CAN and CANNOT Claim */}
        <section id="can-and-cannot-claim">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What You CAN and CANNOT Claim GST Credits On</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              This is where many freelancers trip up. Not every business expense includes claimable GST. Some supplies are <strong className="text-white">GST-free</strong> (no GST was charged, so there is nothing to claim), and others are <strong className="text-white">input-taxed</strong> (the supplier cannot charge GST, and you cannot claim a credit). Here is a comprehensive reference table:
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Expense</th>
                    <th className="text-center text-sm font-medium text-gray-300 px-6 py-4">GST Credit?</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Software subscriptions (Adobe, Figma, Slack)</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-emerald-400 font-bold">YES</span>
                    </td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Full credit if 100% business use</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Office furniture (desk, chair, shelving)</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-emerald-400 font-bold">YES</span>
                    </td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Business portion only for home office</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Computer equipment (laptop, monitor, peripherals)</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-emerald-400 font-bold">YES</span>
                    </td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Apportion if mixed personal/business use</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Client entertainment (meals, events)</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-emerald-400 font-bold">YES</span>
                    </td>
                    <td className="px-6 py-3 text-gray-400 text-sm">GST claimable but not income tax deductible (FBT rules apply)</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Insurance premiums (PI, public liability)</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-emerald-400 font-bold">YES</span>
                    </td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Most business insurance includes GST</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Accounting &amp; legal fees</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-emerald-400 font-bold">YES</span>
                    </td>
                    <td className="px-6 py-3 text-gray-400 text-sm">If the accountant/lawyer is GST-registered</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Bank fees &amp; merchant fees</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-red-400 font-bold">NO</span>
                    </td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Input-taxed financial supply &mdash; no GST is charged</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Residential rent (home office)</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-red-400 font-bold">NO</span>
                    </td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Input-taxed supply &mdash; residential rent is GST-free</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Government fees &amp; fines</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-red-400 font-bold">NO</span>
                    </td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Government charges are generally GST-free</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Donations &amp; gifts</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-red-400 font-bold">NO</span>
                    </td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Not a business purchase &mdash; no GST on donations</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Second-hand goods from private seller</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-red-400 font-bold">NO</span>
                    </td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Private sellers are not GST-registered &mdash; no tax invoice</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Salary &amp; wages (if you employ staff)</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-red-400 font-bold">NO</span>
                    </td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Not a taxable supply &mdash; wages do not include GST</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-gray-300 text-sm">Interest &amp; loan repayments</td>
                    <td className="px-6 py-3 text-center">
                      <span className="text-red-400 font-bold">NO</span>
                    </td>
                    <td className="px-6 py-3 text-gray-400 text-sm">Input-taxed financial supply &mdash; no GST on interest</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <h4 className="text-red-400 font-semibold mb-2">Common Traps</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold flex-shrink-0">1.</span>
                  <span><strong className="text-gray-200">Claiming GST on bank fees:</strong> This is one of the most common mistakes. Bank fees, interest, and merchant processing fees are input-taxed financial supplies &mdash; they do not include GST, so there is no credit to claim.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold flex-shrink-0">2.</span>
                  <span><strong className="text-gray-200">Claiming GST on overseas purchases:</strong> Services purchased from overseas suppliers (like many SaaS products billed in USD) may not include Australian GST. Check whether the supplier has an Australian GST registration. Since 2017, many large overseas digital providers do charge GST on sales to Australian businesses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold flex-shrink-0">3.</span>
                  <span><strong className="text-gray-200">Claiming the full amount on mixed-use items:</strong> If you use your phone 50% for business, you can only claim 50% of the GST. Claiming 100% on a mixed-use asset is a red flag for ATO audits.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Reporting Input Tax Credits on Your BAS */}
        <section id="reporting-on-bas">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Reporting Input Tax Credits on Your BAS</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              When you lodge your Business Activity Statement (BAS), you report your input tax credits at <strong className="text-white">label 1B</strong>. This is the total GST you paid on business purchases during the reporting period. The ATO then calculates your net GST position: 1A (GST on sales) minus 1B (GST on purchases).
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Two Reporting Methods</h3>
            <p className="text-gray-300 leading-relaxed">
              The ATO offers two methods for reporting GST on your BAS. Most freelancers use the simpler accounts method:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">Accounts Method (Simpler)</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Uses labels <strong className="text-gray-200">1A and 1B</strong> only. You report the total GST on sales (1A) and total GST on purchases (1B). The ATO calculates the rest.
                </p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li><strong className="text-gray-200">1A:</strong> GST on sales</li>
                  <li><strong className="text-gray-200">1B:</strong> GST on purchases (your input tax credits)</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">Recommended for most freelancers and sole traders</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-5">
                <h4 className="text-green-400 font-semibold mb-3">Calculation Method (Detailed)</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Uses labels <strong className="text-gray-200">G1 through G11</strong>. You report total sales, export sales, GST-free sales, capital purchases, and non-capital purchases separately.
                </p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li><strong className="text-gray-200">G10:</strong> Capital purchases</li>
                  <li><strong className="text-gray-200">G11:</strong> Non-capital purchases</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">Required if turnover exceeds $10 million or if you choose this method</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Cash vs Accrual Accounting</h3>
            <p className="text-gray-300 leading-relaxed">
              The timing of when you claim your input tax credits depends on your <strong className="text-white">accounting method</strong>:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-2">Cash Basis</h4>
                <p className="text-sm text-gray-400">
                  You claim the GST credit in the period you <strong className="text-gray-200">actually pay</strong> for the purchase. If you receive an invoice in December but pay it in January, the credit goes on your January quarter BAS. Most freelancers under $10 million turnover can use cash basis.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-2">Accruals Basis</h4>
                <p className="text-sm text-gray-400">
                  You claim the GST credit in the period you <strong className="text-gray-200">receive the invoice</strong>, regardless of when you pay. If you receive an invoice in December, the credit goes on your December quarter BAS even if you pay in January.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Common BAS Mistakes with Input Tax Credits</h3>
            <div className="space-y-3 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <span className="text-red-400">1.</span> Claiming GST on GST-Free Items
                </h4>
                <p className="text-sm text-gray-400">
                  Some purchases do not include GST &mdash; basic food, some medical supplies, exports. Check the supplier&apos;s invoice carefully. If it does not show a GST component, there is no credit to claim. Claiming GST that was never charged will trigger an ATO discrepancy.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <span className="text-red-400">2.</span> Claiming Without a Valid Tax Invoice
                </h4>
                <p className="text-sm text-gray-400">
                  For purchases of $82.50 or more (including GST), you <strong className="text-gray-200">must</strong> hold a valid tax invoice to claim the credit. An email receipt or bank statement is not sufficient. If audited and you cannot produce the tax invoice, the ATO will disallow the credit and you will owe the GST plus potential penalties.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <span className="text-red-400">3.</span> Claiming Personal Expenses
                </h4>
                <p className="text-sm text-gray-400">
                  Input tax credits are only available for <strong className="text-gray-200">business purchases</strong>. Claiming GST on groceries, personal clothing, entertainment, or other non-business expenses is fraud. The ATO uses data matching to cross-reference your claims against industry benchmarks &mdash; unusual patterns trigger audits.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <span className="text-red-400">4.</span> Double-Counting Credits
                </h4>
                <p className="text-sm text-gray-400">
                  Make sure you do not claim the same input tax credit twice &mdash; once on the BAS and again as part of a revised BAS or GST adjustment. Keep a clear record of which credits have been claimed on which BAS period to avoid duplication.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">ATO Audit Risk</p>
              <p className="text-gray-400 text-sm">
                Input tax credits are <strong className="text-gray-200">one of the most commonly audited areas</strong> on BAS returns. The ATO uses automated data matching and benchmarking to flag returns where claimed credits seem disproportionate to income or industry norms. Keep meticulous records, hold valid tax invoices for every claim, and do not over-claim on mixed-use assets. If you are ever unsure, ask your accountant before lodging.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Tracking Input Tax Credits with InvoiceFlow */}
        <section id="tracking-with-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tracking Input Tax Credits with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Manually tracking GST on every business expense is tedious and error-prone. InvoiceFlow automates the entire process, so you never miss a credit and your BAS is always accurate.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automatic GST Component Extraction</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When you log an expense in InvoiceFlow, the GST component is <strong className="text-gray-200">automatically extracted using the 1/11th rule</strong>. Enter $550 for a software purchase, and InvoiceFlow instantly calculates the $50 GST credit. No mental arithmetic, no spreadsheet formulas &mdash; just accurate GST tracking on every expense.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">BAS-Ready Reporting</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  At the end of each quarter, InvoiceFlow generates a <strong className="text-gray-200">BAS summary showing your 1A and 1B totals</strong>. You can see exactly how much GST you collected from clients, how much GST you paid on expenses, and the net amount you owe. Copy the numbers straight into your BAS &mdash; or hand the report to your accountant.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Receipt Storage for Tax Invoices</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Snap a photo or upload a PDF of every tax invoice and receipt. InvoiceFlow stores them securely and <strong className="text-gray-200">links each receipt to the corresponding expense</strong>. If the ATO ever asks for proof of an input tax credit, you have the tax invoice ready in seconds &mdash; not buried in a shoebox or lost email thread.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Business vs Personal Expense Separation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tag expenses as business, personal, or mixed-use with a <strong className="text-gray-200">custom business-use percentage</strong>. InvoiceFlow automatically calculates the claimable GST credit based on your split. Your phone bill at 50% business? InvoiceFlow claims exactly half the GST. Your laptop at 80% business? InvoiceFlow claims 80%. No manual calculations needed.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Quarterly BAS Summary</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every quarter, InvoiceFlow produces a <strong className="text-gray-200">complete GST breakdown</strong>: total GST collected on invoices vs total GST paid on expenses, with a clear net position. The summary includes a line-by-line list of every input tax credit claimed, making it easy to review, verify, and hand to your accountant. You will never overpay the ATO again.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you calculate and track your GST credits.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on GST, tax, and compliance for Australian freelancers.</p>
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
            Never Miss a GST Credit Again
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow automatically extracts GST from every expense, tracks your input tax credits, and generates BAS-ready reports. Stop leaving money on the table &mdash; claim every credit you are entitled to.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/gst-calculator">
              <Button variant="secondary">Try the GST Calculator</Button>
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
