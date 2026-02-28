import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Sole Trader: What It Means in Australia & How to Become One — InvoiceFlow',
  description:
    'What is a sole trader in Australia? Learn how to become one, tax obligations, ABN & GST requirements, pros and cons vs company and partnership structures. ATO-accurate guide for 2025-26.',
  keywords: [
    'what is a sole trader australia',
    'sole trader vs company',
    'sole trader tax obligations',
    'how to become a sole trader',
    'sole trader ABN',
    'sole trader GST registration',
    'sole trader vs partnership',
    'sole trader tax rate australia',
    'sole trader unlimited liability',
    'sole trader business structure',
    'sole trader BAS',
    'sole trader PAYG',
  ],
  alternates: { canonical: '/glossary/sole-trader' },
  openGraph: {
    title: 'Sole Trader: What It Means in Australia & How to Become One — InvoiceFlow',
    description:
      'Everything you need to know about operating as a sole trader in Australia — setup, tax obligations, ABN, GST, and when to consider switching to a company. ATO-accurate for 2025-26.',
  },
};

const BASE_URL = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${BASE_URL}/glossary` },
    { '@type': 'ListItem', position: 3, name: 'Sole Trader', item: `${BASE_URL}/glossary/sole-trader` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a sole trader and a company in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sole trader is the simplest business structure — you and the business are the same legal entity, meaning you have unlimited personal liability for business debts. A company (Pty Ltd) is a separate legal entity with limited liability, but it costs more to set up ($576 ASIC fee), requires annual reporting, and has more complex tax obligations. Sole traders pay tax at individual rates (up to 45%), while companies pay a flat 25% tax rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to register for GST as a sole trader?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must register for GST once your annual turnover reaches $75,000 (or $150,000 for non-profit organisations). Below that threshold, GST registration is optional but can be beneficial if you want to claim GST credits on business purchases. Once registered, you must lodge Business Activity Statements (BAS) and charge 10% GST on your taxable sales.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a sole trader employ staff in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, sole traders can employ staff. If you hire employees, you must register for PAYG withholding, withhold tax from their wages, pay superannuation guarantee (currently 11.5% for 2025-26), and comply with Fair Work obligations including minimum wages, leave entitlements, and workplace health and safety requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much tax does a sole trader pay in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sole traders are taxed at individual income tax rates. For 2025-26, the tax-free threshold is $18,200. After that: $18,201-$45,000 is taxed at 16%, $45,001-$135,000 at 30%, $135,001-$190,000 at 37%, and $190,001+ at 45%. You also pay the 2% Medicare levy on your taxable income. Business income and any employment income are combined in your individual tax return.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to set up as a sole trader in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Setting up as a sole trader is fast — you can get your ABN in as little as 10 minutes by applying online at abr.gov.au. If you want to trade under a business name (different from your personal name), registering a business name through ASIC costs $44 for 1 year or $102 for 3 years. You can start operating immediately after receiving your ABN.',
      },
    },
  ],
};

const sections = [
  { id: 'what-is-sole-trader', title: 'What Is a Sole Trader?' },
  { id: 'sole-trader-vs-other', title: 'Sole Trader vs Other Structures' },
  { id: 'how-to-set-up', title: 'How to Set Up as a Sole Trader' },
  { id: 'tax-obligations', title: 'Tax Obligations' },
  { id: 'pros-and-cons', title: 'Pros and Cons' },
  { id: 'when-to-consider-company', title: 'When to Consider a Company Instead' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    title: 'Invoice Generator',
    description: 'Create professional, ATO-compliant invoices for your sole trader business.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/abn-lookup',
    title: 'ABN Lookup Tool',
    description: 'Verify any Australian Business Number against the official ABR register.',
    icon: (
      <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    title: 'Tax Estimator',
    description: 'Estimate your sole trader income tax using the latest ATO rates for 2025-26.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    title: 'GST Calculator',
    description: 'Calculate GST-inclusive and exclusive amounts for your invoices instantly.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/abn-guide',
    title: 'The Complete ABN Guide',
    description: 'Everything you need to know about getting, using, and managing your ABN as a sole trader.',
  },
  {
    href: '/guides/gst-for-freelancers',
    title: 'GST for Freelancers',
    description: 'When to register, how to charge GST, and how to lodge your BAS on time.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    title: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, quarterly instalments, and super for sole traders.',
  },
];

export default function SoleTraderGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-green-500/10 to-emerald-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Sole Trader</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Structure
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Sole Trader{' '}
            <span className="bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
              Explained for Australians
            </span>
          </h1>

          {/* One-line summary */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            The simplest and most popular business structure in Australia. Over 2.47 million Australians operate as sole traders &mdash; here&apos;s everything you need to know.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>2025-26 FY</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-lime-500/5 border border-lime-500/20 p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">
                <strong className="text-white">An individual running a business</strong> &mdash; the simplest structure with no legal separation between you and your business. You are the business.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">
                <strong className="text-white">Taxed at individual rates</strong> &mdash; you use your personal TFN to lodge one tax return covering both business and personal income. Tax-free threshold is $18,200.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">
                <strong className="text-white">Must get an ABN to invoice</strong> &mdash; without it, clients are legally required to withhold 47% of your payment for tax.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">
                <strong className="text-white">Unlimited personal liability</strong> &mdash; the key trade-off. Your personal assets (home, car, savings) are on the line for business debts.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Table of Contents</h2>
          <nav className="grid sm:grid-cols-2 gap-2">
            {sections.map((section, i) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-700/40 transition-colors group"
              >
                <span className="w-7 h-7 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-sm font-medium text-lime-400 flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                  {section.title}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

        {/* Section 1: What Is a Sole Trader? */}
        <section id="what-is-sole-trader">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-sm font-bold text-lime-400">
              1
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Sole Trader?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A <strong className="text-white">sole trader</strong> is an individual who owns and operates a business on their own. It is the <strong className="text-white">simplest and most common business structure</strong> in Australia, with approximately 2.47 million sole traders registered according to Australian Bureau of Statistics data.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The defining characteristic of a sole trader is that <strong className="text-white">there is no legal separation between you and your business</strong>. Unlike a company (Pty Ltd), which is its own legal entity, a sole trader IS the business. You use your individual Tax File Number (TFN) to lodge your tax return, and all business income and expenses are reported on your personal tax return &mdash; there is no separate business tax return.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This structure is popular among <strong className="text-white">freelancers, contractors, consultants, tradespeople, and small service providers</strong> because it&apos;s cheap to set up, easy to manage, and gives you complete control over your business decisions. You don&apos;t need to register with ASIC (unless you want a business name different from your own), and there are fewer ongoing compliance requirements compared to a company or trust.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-3">Key Characteristics of a Sole Trader</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'You and the business are one legal entity',
                  'You use your individual TFN for tax returns',
                  'You have full control over all business decisions',
                  'You keep all profits (after tax)',
                  'You bear unlimited personal liability',
                  'You can employ staff if needed',
                  'Simple setup — just need an ABN',
                  'Fewer regulatory requirements than a company',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Despite the name, being a &ldquo;sole&rdquo; trader <strong className="text-white">does not mean you have to work alone</strong>. Sole traders can and do employ staff. The &ldquo;sole&rdquo; refers to the ownership structure &mdash; there is one owner (you). A graphic designer who hires an assistant, a plumber with two apprentices, and a consultant who subcontracts work are all potentially sole traders.
            </p>
          </div>
        </section>

        {/* Section 2: Sole Trader vs Other Structures */}
        <section id="sole-trader-vs-other">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-sm font-bold text-lime-400">
              2
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Sole Trader vs Other Structures</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Choosing the right business structure is one of the most important decisions you&apos;ll make. Here&apos;s how a sole trader compares to the other main structures in Australia: <strong className="text-white">company (Pty Ltd)</strong> and <strong className="text-white">partnership</strong>.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6 overflow-x-auto">
              <h3 className="text-lg font-semibold text-white mb-4">Side-by-Side Comparison</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-lg bg-gray-900/50 p-4 border-t-2 border-lime-400">
                  <h4 className="text-sm font-semibold text-lime-400 mb-3">Sole Trader</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>&bull; <strong className="text-gray-200">Setup cost:</strong> Free (ABN only)</li>
                    <li>&bull; <strong className="text-gray-200">Legal entity:</strong> Not separate from owner</li>
                    <li>&bull; <strong className="text-gray-200">Liability:</strong> Unlimited personal</li>
                    <li>&bull; <strong className="text-gray-200">Tax rate:</strong> Individual rates (0&ndash;45%)</li>
                    <li>&bull; <strong className="text-gray-200">Tax return:</strong> Personal tax return</li>
                    <li>&bull; <strong className="text-gray-200">Compliance:</strong> Minimal</li>
                    <li>&bull; <strong className="text-gray-200">Control:</strong> Full control</li>
                    <li>&bull; <strong className="text-gray-200">Profit sharing:</strong> All to owner</li>
                    <li>&bull; <strong className="text-gray-200">ASIC reporting:</strong> Not required</li>
                    <li>&bull; <strong className="text-gray-200">Best for:</strong> Freelancers, contractors, early-stage businesses</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-t-2 border-blue-400">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Company (Pty Ltd)</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>&bull; <strong className="text-gray-200">Setup cost:</strong> $576 ASIC fee + legal costs</li>
                    <li>&bull; <strong className="text-gray-200">Legal entity:</strong> Separate entity</li>
                    <li>&bull; <strong className="text-gray-200">Liability:</strong> Limited to company assets</li>
                    <li>&bull; <strong className="text-gray-200">Tax rate:</strong> Flat 25% (base rate)</li>
                    <li>&bull; <strong className="text-gray-200">Tax return:</strong> Separate company return</li>
                    <li>&bull; <strong className="text-gray-200">Compliance:</strong> Significant (ASIC, annual review)</li>
                    <li>&bull; <strong className="text-gray-200">Control:</strong> Director(s) manage</li>
                    <li>&bull; <strong className="text-gray-200">Profit sharing:</strong> Dividends to shareholders</li>
                    <li>&bull; <strong className="text-gray-200">ASIC reporting:</strong> Annual review statement</li>
                    <li>&bull; <strong className="text-gray-200">Best for:</strong> Higher-risk, higher-revenue businesses</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border-t-2 border-violet-400">
                  <h4 className="text-sm font-semibold text-violet-400 mb-3">Partnership</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>&bull; <strong className="text-gray-200">Setup cost:</strong> Free (ABN) + partnership agreement</li>
                    <li>&bull; <strong className="text-gray-200">Legal entity:</strong> Not separate from partners</li>
                    <li>&bull; <strong className="text-gray-200">Liability:</strong> Joint and several (unlimited)</li>
                    <li>&bull; <strong className="text-gray-200">Tax rate:</strong> Individual rates per partner</li>
                    <li>&bull; <strong className="text-gray-200">Tax return:</strong> Partnership + personal returns</li>
                    <li>&bull; <strong className="text-gray-200">Compliance:</strong> Moderate</li>
                    <li>&bull; <strong className="text-gray-200">Control:</strong> Shared between partners</li>
                    <li>&bull; <strong className="text-gray-200">Profit sharing:</strong> Split per agreement</li>
                    <li>&bull; <strong className="text-gray-200">ASIC reporting:</strong> Not required</li>
                    <li>&bull; <strong className="text-gray-200">Best for:</strong> Two or more co-owners</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <h4 className="text-amber-400 font-semibold mb-1">Liability Is the Key Differentiator</h4>
                  <p className="text-sm text-gray-300">
                    The most significant difference between a sole trader and a company is <strong className="text-white">liability</strong>. As a sole trader, if your business is sued or cannot pay its debts, your personal assets &mdash; including your home, car, and savings &mdash; can be used to cover the shortfall. A company provides a &ldquo;corporate veil&rdquo; that generally protects personal assets.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              For most freelancers and contractors starting out, a sole trader structure is the <strong className="text-white">right choice</strong>. It costs nothing to set up, the compliance burden is minimal, and you can always transition to a company later when your revenue and risk profile justify the additional cost and complexity.
            </p>
          </div>
        </section>

        {/* Section 3: How to Set Up as a Sole Trader */}
        <section id="how-to-set-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-sm font-bold text-lime-400">
              3
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Set Up as a Sole Trader</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Setting up as a sole trader is one of the <strong className="text-white">fastest and cheapest</strong> ways to start a business in Australia. You can be operational in under an hour. Here&apos;s the step-by-step process:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Step-by-Step Setup Guide</h3>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Apply for an ABN (Free, ~10 minutes)',
                    desc: 'Go to abr.gov.au and apply for your Australian Business Number. This is mandatory — you cannot legally invoice without one. You\'ll need your TFN, full name, date of birth, and business activity description. Most applications are approved instantly.',
                  },
                  {
                    step: '2',
                    title: 'Register a business name (Optional, $44/year)',
                    desc: 'If you want to trade under a name other than your own legal name, register a business name through ASIC. It costs $44 for 1 year or $102 for 3 years. For example, if your name is Sarah Chen but you want to operate as "Chen Creative Studio", you need to register that name. Trading under your own name (e.g., "Sarah Chen") is free — no registration needed.',
                  },
                  {
                    step: '3',
                    title: 'Open a dedicated business bank account',
                    desc: 'While not legally required, a separate bank account makes bookkeeping dramatically easier. It cleanly separates business transactions from personal ones, simplifies BAS lodgement, and looks more professional on invoices. Most banks offer free business accounts for sole traders.',
                  },
                  {
                    step: '4',
                    title: 'Register for GST (If turnover exceeds $75K)',
                    desc: 'If your annual turnover is $75,000 or more, you must register for GST. You can register voluntarily below this threshold through the ABR. Once registered, you charge 10% GST on taxable sales, lodge BAS (usually quarterly), and can claim GST credits on business purchases.',
                  },
                  {
                    step: '5',
                    title: 'Get appropriate insurance',
                    desc: 'Consider professional indemnity insurance (essential for consultants and service providers), public liability insurance (if clients visit your premises or you visit theirs), and income protection insurance (no sick leave as a sole trader). Some industries require specific insurance by law.',
                  },
                  {
                    step: '6',
                    title: 'Set up record-keeping',
                    desc: 'The ATO requires you to keep records for 5 years. Use accounting software (Xero, MYOB, or QuickBooks) or at minimum a spreadsheet to track income, expenses, and GST. Keep all receipts — digital copies are fine. InvoiceFlow handles invoicing records automatically.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-sm font-bold text-lime-400 flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-lime-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-lime-400 font-semibold mb-1">Total Cost to Start</h4>
                  <p className="text-sm text-gray-300">
                    If you trade under your own name: <strong className="text-white">$0</strong>. The ABN is free. If you register a business name: <strong className="text-white">$44&ndash;$102</strong> (1&ndash;3 years). Compare this to setting up a company, which starts at $576 for the ASIC registration alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Tax Obligations */}
        <section id="tax-obligations">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-sm font-bold text-lime-400">
              4
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Obligations</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              As a sole trader, your business income is <strong className="text-white">taxed at individual income tax rates</strong> &mdash; there is no separate company tax rate. Your business income and any employment income are combined on your personal tax return. Understanding your tax obligations is critical to avoiding penalties and maximising deductions.
            </p>

            {/* Income Tax Rates */}
            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">2025-26 Income Tax Rates (Resident)</h3>
              <div className="space-y-3">
                {[
                  { bracket: '$0 – $18,200', rate: '0%', desc: 'Tax-free threshold' },
                  { bracket: '$18,201 – $45,000', rate: '16%', desc: '16c for each $1 over $18,200' },
                  { bracket: '$45,001 – $135,000', rate: '30%', desc: '$4,288 plus 30c for each $1 over $45,000' },
                  { bracket: '$135,001 – $190,000', rate: '37%', desc: '$31,288 plus 37c for each $1 over $135,000' },
                  { bracket: '$190,001+', rate: '45%', desc: '$51,638 plus 45c for each $1 over $190,000' },
                ].map((item) => (
                  <div key={item.bracket} className="flex items-center gap-4 p-3 rounded-lg bg-gray-900/50">
                    <div className="w-36 flex-shrink-0">
                      <span className="text-sm font-mono text-lime-400">{item.bracket}</span>
                    </div>
                    <div className="w-16 flex-shrink-0">
                      <span className="text-sm font-bold text-white">{item.rate}</span>
                    </div>
                    <span className="text-sm text-gray-400">{item.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Plus the <strong className="text-gray-200">2% Medicare levy</strong> on your total taxable income. Higher-income earners may also pay the Medicare levy surcharge (1&ndash;1.5%) if they don&apos;t hold private health insurance.
              </p>
            </div>

            {/* GST */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">GST (Goods and Services Tax)</h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-300">
                  You <strong className="text-white">must register for GST</strong> once your annual turnover reaches <strong className="text-white">$75,000</strong>. Once registered:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Charge 10% GST on taxable sales',
                    'Lodge BAS (usually quarterly)',
                    'Claim GST credits on business purchases',
                    'Keep tax invoices for 5 years',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BAS & PAYG */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">BAS, PAYG Instalments &amp; Super</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-1">Business Activity Statement (BAS)</h4>
                  <p className="text-sm text-gray-400">
                    If you&apos;re GST-registered, you must lodge a BAS &mdash; usually <strong className="text-gray-200">quarterly</strong> (October, February, April, July). Your BAS reports GST collected on sales, GST paid on purchases, and PAYG withholding (if you have employees). Due dates are typically the 28th of the month following the end of the quarter.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">PAYG Instalments</h4>
                  <p className="text-sm text-gray-400">
                    The ATO may require you to pay <strong className="text-gray-200">PAYG instalments</strong> &mdash; pre-payments of your expected income tax, paid quarterly. This prevents a large tax bill at the end of the financial year. The ATO calculates the instalment amount based on your last tax return, or you can choose to estimate your own amount.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Superannuation</h4>
                  <p className="text-sm text-gray-400">
                    As a sole trader, you are <strong className="text-gray-200">not legally required to pay super for yourself</strong>. However, it&apos;s strongly recommended for your retirement savings. Contributions are tax-deductible up to $30,000 per year (concessional cap). If you employ staff, you must pay the super guarantee &mdash; currently <strong className="text-gray-200">11.5% for 2025-26</strong> &mdash; on their ordinary time earnings.
                  </p>
                </div>
              </div>
            </div>

            {/* Record keeping reminder */}
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <h4 className="text-amber-400 font-semibold mb-1">5-Year Record-Keeping Obligation</h4>
                  <p className="text-sm text-gray-300">
                    The ATO requires sole traders to keep all business records &mdash; invoices, receipts, bank statements, contracts, BAS lodgements &mdash; for <strong className="text-white">at least 5 years</strong>. Digital records are acceptable, but they must be readable and accessible. Failing to keep proper records can result in penalties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Pros and Cons */}
        <section id="pros-and-cons">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-sm font-bold text-lime-400">
              5
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Pros and Cons</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Like every business structure, the sole trader model has distinct advantages and disadvantages. Understanding these trade-offs will help you decide whether it&apos;s the right fit for your situation.
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              {/* Pros */}
              <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-6">
                <h3 className="text-lg font-semibold text-lime-400 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Advantages
                </h3>
                <div className="space-y-3">
                  {[
                    { title: 'Cheapest to set up', desc: '$0 if you trade under your own name. Just an ABN.' },
                    { title: 'Full control', desc: 'You make all the decisions — no board, no shareholders, no partners to consult.' },
                    { title: 'Simple tax', desc: 'One tax return combining personal and business income. No company tax return needed.' },
                    { title: 'Tax-free threshold', desc: 'You benefit from the $18,200 tax-free threshold that companies don\'t get.' },
                    { title: 'Minimal compliance', desc: 'No ASIC annual review, no director obligations, no shareholder meetings.' },
                    { title: 'Easy to close', desc: 'Simply cancel your ABN and lodge your final tax return. No winding-up process.' },
                    { title: 'Privacy', desc: 'No public company register entry. Less information publicly available about your business.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-lime-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <div>
                        <span className="text-sm text-white font-medium">{item.title}</span>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cons */}
              <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Disadvantages
                </h3>
                <div className="space-y-3">
                  {[
                    { title: 'Unlimited personal liability', desc: 'Your home, car, and savings are at risk if the business incurs debts or gets sued.' },
                    { title: 'Higher tax at higher income', desc: 'At $190K+, you pay 45% marginal tax. Companies only pay a flat 25%.' },
                    { title: 'No income splitting', desc: 'Can\'t distribute profits to family members in lower tax brackets (companies/trusts can).' },
                    { title: 'Harder to raise capital', desc: 'You can\'t sell equity. Banks may be more cautious lending to sole traders vs companies.' },
                    { title: 'Limited growth perception', desc: 'Some corporate clients prefer dealing with a Pty Ltd for perceived professionalism.' },
                    { title: 'No sick leave or annual leave', desc: 'If you don\'t work, you don\'t earn. No employer-funded leave entitlements.' },
                    { title: 'Business tied to you', desc: 'Harder to sell the business or bring in partners. The business ends when you do.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      <div>
                        <span className="text-sm text-white font-medium">{item.title}</span>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: When to Consider a Company Instead */}
        <section id="when-to-consider-company">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-sm font-bold text-lime-400">
              6
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When to Consider a Company Instead</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Many successful businesses start as sole traders and transition to a company structure as they grow. There&apos;s no magic number, but here are the key <strong className="text-white">signals that it might be time to incorporate</strong>:
            </p>
            <div className="space-y-4 my-6">
              {[
                {
                  title: 'Your taxable income consistently exceeds $135,000',
                  desc: 'At this level, your marginal rate is 37% (heading to 45% at $190K). The company tax rate is a flat 25%. Keeping profits in the company and paying yourself a salary/dividend can be significantly more tax-efficient. Talk to your accountant about modelling the actual savings.',
                },
                {
                  title: 'Your business carries significant liability risk',
                  desc: 'If you provide professional advice, handle client data, work on-site, or sell products, the risk of being sued grows with your business. A company structure creates a "corporate veil" between business liabilities and your personal assets. This doesn\'t replace insurance, but it adds an important layer of protection.',
                },
                {
                  title: 'You want to bring in partners or investors',
                  desc: 'Sole traders can\'t sell equity. If you want to bring on a co-founder, sell shares, or attract investors, you need a company structure. This is essential for any business seeking venture capital or angel investment.',
                },
                {
                  title: 'You want to retain profits in the business',
                  desc: 'As a sole trader, all business profit is taxed at your personal rate in the year it\'s earned, whether you withdraw it or not. A company can retain profits and pay 25% company tax, reinvesting the rest without triggering higher personal tax rates.',
                },
                {
                  title: 'You\'re hiring a team and want to separate personal risk',
                  desc: 'While sole traders can employ staff, having employees increases your liability exposure (workplace injuries, unfair dismissal claims, wage disputes). Operating through a company provides an extra layer of protection for your personal assets.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/40 border border-gray-700/40 p-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-6 my-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-lime-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <div>
                  <h4 className="text-lime-400 font-semibold mb-1">Don&apos;t Rush to Incorporate</h4>
                  <p className="text-sm text-gray-300">
                    Many accountants recommend <strong className="text-white">staying as a sole trader until you have a clear, specific reason to change</strong>. A company adds $576+/year in ASIC fees, requires separate tax returns (costing $1,000&ndash;$3,000+/year in accounting fees), and has strict director obligations. If you&apos;re earning under $100K with low liability risk, a sole trader structure is almost certainly fine. Transition when the numbers make sense, not because it &ldquo;sounds more professional.&rdquo;
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">The transition process:</strong> When the time comes, your accountant can help you &ldquo;roll over&rdquo; your sole trader business into a company. This involves registering a new company with ASIC, getting a new ABN and TFN for the company, transferring assets and contracts, and notifying clients, banks, and suppliers. It&apos;s a straightforward process that typically takes 2&ndash;4 weeks.
            </p>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage your sole trader business</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-lime-500/40 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-lime-400 transition-colors">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-lime-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth resources for Australian sole traders</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-green-500/40 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-green-400 transition-colors">
                {guide.title}
              </h3>
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
          {(faqSchema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }>).map((faq, i) => (
            <details key={i} className="group rounded-xl bg-gray-800/40 border border-gray-700/40">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-lime-400 transition-colors">
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

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Sole Trader? Start Invoicing Like a Pro.
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          InvoiceFlow automatically includes your ABN, calculates GST, generates ATO-compliant tax invoices, and tracks payments &mdash; so you can focus on running your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button>Start Free &mdash; No Card Required</Button>
          </Link>
          <Link href="/tools/invoice-generator">
            <Button variant="secondary">Try Invoice Generator</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
