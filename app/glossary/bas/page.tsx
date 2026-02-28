import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'BAS (Business Activity Statement): Complete Guide for Freelancers — InvoiceFlow',
  description:
    'What is a BAS in Australia? Learn how to lodge your Business Activity Statement, BAS due dates, what to include, and common mistakes freelancers make. Free guide with ATO-accurate information.',
  keywords: [
    'what is BAS australia',
    'BAS for freelancers',
    'how to lodge BAS',
    'business activity statement',
    'BAS due dates',
    'BAS quarterly',
    'BAS GST reporting',
    'BAS PAYG instalments',
    'lodge BAS online',
    'BAS for sole traders',
    'BAS penalties late lodgement',
    'simpler BAS',
  ],
  alternates: { canonical: '/glossary/bas' },
  openGraph: {
    title: 'BAS (Business Activity Statement): Complete Guide for Freelancers — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about Business Activity Statements. Due dates, what to include, how to lodge, and common mistakes to avoid.',
  },
};

const BASE_URL = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${BASE_URL}/glossary` },
    { '@type': 'ListItem', position: 3, name: 'BAS', item: `${BASE_URL}/glossary/bas` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a BAS (Business Activity Statement)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Business Activity Statement (BAS) is a form submitted to the Australian Taxation Office (ATO) to report and pay several tax obligations, including GST collected and paid, PAYG income tax instalments, PAYG withholding, and other taxes. Most freelancers and sole traders lodge their BAS quarterly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do I need to lodge my BAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most small businesses and freelancers lodge BAS quarterly. The four quarters are July-September (due 28 October), October-December (due 28 February), January-March (due 28 April), and April-June (due 28 July). Businesses with turnover over $20 million must lodge monthly. You may also choose to lodge monthly voluntarily.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I lodge my BAS late?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO charges a Failure to Lodge (FTL) penalty of $313 for each 28-day period your BAS is overdue, up to a maximum of 5 periods ($1,565 total). Additionally, if you owe money and pay late, the General Interest Charge (GIC) applies to the outstanding amount from the due date until payment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I lodge my BAS myself or do I need an accountant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can absolutely lodge your BAS yourself through the ATO\'s online services via myGov. Many freelancers with simple tax affairs do this successfully. However, using a registered BAS agent or tax agent gives you an extra 4 weeks to lodge and can help you avoid costly mistakes. Accounting software like Xero or MYOB can also pre-fill your BAS.',
      },
    },
    {
      '@type': 'Question',
      name: 'What information is included in a BAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A BAS typically includes: GST collected on sales (label G1), GST paid on purchases (label G11), PAYG income tax instalments (labels T1-T4), PAYG withholding for employees or contractors without an ABN (labels W1-W5), and the net amount you owe or are owed. If you use Simpler BAS reporting, you only need to report total sales (G1), GST on sales (1A), and GST on purchases (1B).',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-bas', label: '1. What Is a BAS?' },
  { id: 'who-needs-to-lodge', label: '2. Who Needs to Lodge?' },
  { id: 'whats-included', label: '3. What\'s Included in a BAS' },
  { id: 'due-dates', label: '4. BAS Due Dates' },
  { id: 'how-to-lodge', label: '5. How to Lodge Your BAS' },
  { id: 'common-mistakes', label: '6. Common BAS Mistakes' },
  { id: 'tips-for-freelancers', label: '7. BAS Tips for Freelancers' },
];

const relatedTools = [
  {
    href: '/tools/bas-preparation-checklist',
    name: 'BAS Preparation Checklist',
    description: 'Step-by-step checklist to prepare your quarterly BAS with confidence.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Instantly calculate GST-inclusive and GST-exclusive amounts for your BAS.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/payg-instalment-calculator',
    name: 'PAYG Instalment Calculator',
    description: 'Estimate your quarterly PAYG instalment amount for accurate BAS reporting.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/financial-year-planner',
    name: 'Financial Year Planner',
    description: 'Plan your entire financial year with key BAS dates and tax deadlines.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'Complete guide to GST registration, collection, and reporting for Australian freelancers.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Everything you need to know about income tax, deductions, and lodgement as a freelancer.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide',
    description: 'End of financial year checklist, deadlines, and last-minute tax tips for sole traders.',
  },
];

export default function BASGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">BAS</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            BAS{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              (Business Activity Statement)
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            The quarterly form every GST-registered Australian freelancer submits to the ATO, reporting GST collected, GST credits claimed, and PAYG instalments owed.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
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
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Quarterly Reporting</p>
                <p className="text-sm text-gray-400">Lodged every 3 months for most small businesses and freelancers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">GST + PAYG</p>
                <p className="text-sm text-gray-400">Reports GST collected, GST credits, and PAYG income tax instalments</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Due 28 Days After Quarter</p>
                <p className="text-sm text-gray-400">Must be lodged and paid within 28 days of each quarter ending</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Lodge via myGov or BAS Agent</p>
                <p className="text-sm text-gray-400">Self-lodge online or get extra time through a registered agent</p>
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

        {/* Section 1: What Is a BAS? */}
        <section id="what-is-bas">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a BAS?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A <strong className="text-white">Business Activity Statement (BAS)</strong> is a form submitted to the Australian Taxation Office (ATO) that reports your business&apos;s tax obligations for a given period. Think of it as a quarterly tax check-in where you tell the ATO how much GST you&apos;ve collected from customers, how much GST you&apos;ve paid on business expenses, and how much income tax you need to pre-pay through PAYG instalments.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The BAS was introduced in 2000 alongside the GST system. It consolidates multiple tax obligations into a single form, making it the primary way the ATO tracks your business&apos;s tax activity throughout the financial year. Rather than waiting until the end of the year to settle everything, the BAS system ensures taxes are reported and paid regularly.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For most freelancers and sole traders, the BAS is lodged <strong className="text-white">quarterly</strong> &mdash; four times per financial year. Each BAS covers a three-month period, and you have 28 days after the quarter ends to lodge and pay. If you use a registered BAS agent or tax agent, you typically get an additional four weeks to lodge.
            </p>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                Even if you owe nothing &mdash; or the ATO owes you a refund &mdash; you must still lodge your BAS on time. A nil BAS is still a required lodgement. Failing to lodge attracts penalties regardless of whether money is owed.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Who Needs to Lodge? */}
        <section id="who-needs-to-lodge">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Who Needs to Lodge a BAS?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not every business or freelancer needs to lodge a BAS. Your obligation depends on which tax registrations you hold with the ATO. Here are the three main triggers:
            </p>
            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">GST-Registered Businesses</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you&apos;re registered for GST &mdash; which is mandatory once your annual turnover hits $75,000 (or $150,000 for non-profits) &mdash; you must lodge a BAS. This is the most common trigger for freelancers. Your BAS will report GST collected on sales and GST credits claimed on business purchases. Even if you voluntarily registered for GST below the threshold, you&apos;re still required to lodge.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">PAYG Withholding</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you withhold tax from payments to employees or contractors who haven&apos;t provided an ABN, you need to report this on your BAS. Most solo freelancers won&apos;t have PAYG withholding obligations unless they hire subcontractors or employees.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">PAYG Instalments</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The ATO may notify you to pay income tax in quarterly instalments based on your previous year&apos;s taxable income. This is different from PAYG withholding &mdash; it&apos;s essentially pre-paying your own income tax. Once the ATO enters you into the PAYG instalment system, it becomes part of your BAS reporting.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Freelancer Tip</p>
              <p className="text-gray-400 text-sm">
                If you&apos;re earning under $75,000 and haven&apos;t voluntarily registered for GST, you may not need to lodge a BAS at all. However, once the ATO puts you on PAYG instalments (usually after your first tax return shows business income), you&apos;ll start receiving BAS obligations even without GST registration.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: What's Included in a BAS */}
        <section id="whats-included">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What&apos;s Included in a BAS</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Your BAS contains several labelled fields that correspond to different tax obligations. The exact fields on your BAS depend on which taxes you&apos;re registered for. Here&apos;s a breakdown of the most common labels freelancers encounter:
            </p>

            {/* BAS Labels Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Label</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Description</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 hidden sm:table-cell">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-amber-400 font-medium">G1</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Total sales (including GST-free sales)</td>
                    <td className="px-6 py-4 text-sm text-gray-500 hidden sm:table-cell">GST</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-amber-400 font-medium">1A</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">GST collected on sales</td>
                    <td className="px-6 py-4 text-sm text-gray-500 hidden sm:table-cell">GST</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-amber-400 font-medium">G11</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Non-capital purchases (business expenses)</td>
                    <td className="px-6 py-4 text-sm text-gray-500 hidden sm:table-cell">GST</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-amber-400 font-medium">1B</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">GST credits claimed on purchases</td>
                    <td className="px-6 py-4 text-sm text-gray-500 hidden sm:table-cell">GST</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-amber-400 font-medium">T1&ndash;T4</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">PAYG income tax instalment amount or rate</td>
                    <td className="px-6 py-4 text-sm text-gray-500 hidden sm:table-cell">PAYG Instalment</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-amber-400 font-medium">W1&ndash;W5</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">PAYG withholding from employees/contractors</td>
                    <td className="px-6 py-4 text-sm text-gray-500 hidden sm:table-cell">PAYG Withholding</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed mt-6">
              The <strong className="text-white">net amount</strong> at the bottom of your BAS tells you whether you owe the ATO or they owe you. It&apos;s calculated as: GST collected minus GST credits, plus PAYG instalments, plus any PAYG withholding. If the result is positive, you pay the ATO. If negative, you receive a refund.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Simpler BAS</p>
              <p className="text-gray-400 text-sm">
                Since 2017, the ATO offers <strong className="text-gray-200">Simpler BAS reporting</strong> for businesses with turnover under $10 million. Instead of reporting all the G-labels, you only need three fields: <strong className="text-gray-200">G1</strong> (total sales), <strong className="text-gray-200">1A</strong> (GST on sales), and <strong className="text-gray-200">1B</strong> (GST on purchases). Most freelancers automatically qualify and should use Simpler BAS &mdash; it significantly reduces paperwork.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: BAS Due Dates */}
        <section id="due-dates">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">BAS Due Dates</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Quarterly BAS due dates follow a consistent pattern. Each quarter&apos;s BAS is due 28 days after the quarter ends. Here are the exact dates for the 2025-26 financial year:
            </p>

            {/* Due Dates Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">Q1</span>
                  <span className="text-white font-medium">July &ndash; September 2025</span>
                </div>
                <p className="text-2xl font-bold text-white mb-1">28 October 2025</p>
                <p className="text-sm text-gray-500">BAS agent deadline: 25 November 2025</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">Q2</span>
                  <span className="text-white font-medium">October &ndash; December 2025</span>
                </div>
                <p className="text-2xl font-bold text-white mb-1">28 February 2026</p>
                <p className="text-sm text-gray-500">BAS agent deadline: 28 March 2026</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">Q3</span>
                  <span className="text-white font-medium">January &ndash; March 2026</span>
                </div>
                <p className="text-2xl font-bold text-white mb-1">28 April 2026</p>
                <p className="text-sm text-gray-500">BAS agent deadline: 26 May 2026</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">Q4</span>
                  <span className="text-white font-medium">April &ndash; June 2026</span>
                </div>
                <p className="text-2xl font-bold text-white mb-1">28 July 2026</p>
                <p className="text-sm text-gray-500">BAS agent deadline: 25 August 2026</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-6">
              If the due date falls on a weekend or public holiday, the deadline moves to the next business day. Using a registered <strong className="text-white">BAS agent</strong> or tax agent typically gives you an <strong className="text-white">extra four weeks</strong> to lodge &mdash; one of the biggest advantages of professional assistance.
            </p>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Late Lodgement Penalties</p>
              <p className="text-gray-400 text-sm">
                The ATO charges a <strong className="text-gray-200">Failure to Lodge (FTL) penalty of $313</strong> for each 28-day period (or part thereof) that your BAS is overdue. This accumulates up to a maximum of <strong className="text-gray-200">five periods ($1,565)</strong>. On top of that, if you owe money, the <strong className="text-gray-200">General Interest Charge (GIC)</strong> applies to the outstanding amount from the original due date until you pay &mdash; currently around 11.36% per annum.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: How to Lodge */}
        <section id="how-to-lodge">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Lodge Your BAS</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There are several ways to lodge your BAS, ranging from completely DIY to fully managed by a professional. Choose the method that matches your comfort level and complexity of your tax affairs:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">myGov Online Portal</h3>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Free</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Log in to your myGov account, navigate to ATO services, and select &quot;Lodge BAS.&quot; The ATO pre-fills some fields based on data they already have. This is the most popular method for solo freelancers with straightforward tax affairs. You can view, lodge, and pay all in one place.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Registered BAS Agent</h3>
                  <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">Recommended</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A registered BAS agent is a qualified professional authorised by the Tax Practitioners Board to prepare and lodge BAS on your behalf. They can provide advice on GST and PAYG obligations, and you get an <strong className="text-gray-200">extended lodgement deadline</strong> (typically 4 extra weeks). Costs range from $100&ndash;$300 per quarter for simple BAS lodgements.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Accounting Software</h3>
                  <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">Automated</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Software like Xero, MYOB, and QuickBooks can generate your BAS automatically from your transaction data and lodge it directly with the ATO via Standard Business Reporting (SBR). This is the most efficient method if you keep your books up to date throughout the quarter. The software calculates GST, pre-fills all labels, and lets you review before submission.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Paper Form</h3>
                  <span className="text-xs text-gray-400 bg-gray-500/10 px-2 py-0.5 rounded-full">Legacy</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The ATO still accepts paper BAS forms mailed to their processing centre. However, this method is slow, error-prone, and you don&apos;t get immediate confirmation. The ATO is actively encouraging electronic lodgement, and paper lodgements don&apos;t receive the same processing priority. Only use this as a last resort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Common BAS Mistakes */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common BAS Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              BAS errors can trigger ATO audits, penalties, and unnecessary stress. Here are the mistakes freelancers make most often &mdash; and how to avoid them:
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-4 rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Claiming Personal Expenses as Business</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    One of the fastest ways to attract an ATO audit is claiming GST credits on personal purchases. That new laptop you bought? Only claim the business-use portion. That dinner? Only deductible if it&apos;s genuinely for business entertainment. The ATO uses data matching to flag suspicious claims, and &quot;I didn&apos;t know&quot; is not a valid defence. If an expense is mixed-use, calculate and claim only the business percentage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Using the Wrong GST Accounting Method</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    There are two GST accounting methods: <strong className="text-gray-200">cash basis</strong> (report GST when money is received/paid) and <strong className="text-gray-200">accruals basis</strong> (report GST when invoices are issued/received). Most freelancers use cash basis because it&apos;s simpler and you only pay GST once you&apos;ve actually been paid. Mixing these methods up means your BAS figures won&apos;t match your bank transactions, creating a reconciliation nightmare.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Missing Deadlines</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    It sounds obvious, but late lodgement is the single most common BAS mistake. Life gets busy, the deadline sneaks up, and suddenly you&apos;re facing a $313 penalty. Set calendar reminders at least two weeks before each due date. Better yet, use a BAS agent who gives you an extra four weeks, or set up automated lodgement through your accounting software.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Not Reconciling Before Lodging</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Submitting your BAS without reconciling your accounts is like submitting an exam without checking your answers. Make sure your bank balance, accounting software, and BAS figures all line up. Common discrepancies include forgotten transactions, duplicated entries, and bank fees that weren&apos;t categorised. A 30-minute reconciliation can save you hours of ATO correspondence later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: BAS Tips for Freelancers */}
        <section id="tips-for-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">7</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">BAS Tips for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              BAS doesn&apos;t have to be painful. These practical tips will help you stay on top of your obligations and avoid end-of-quarter panic:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">Set Aside 30%</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  As soon as you get paid, transfer 30% of every payment to a separate savings account for tax. This covers both GST (roughly 9.09% of your GST-inclusive income) and income tax. When BAS time comes, the money is already there and you won&apos;t have to scramble. Some freelancers even set up automatic transfers to make this completely hands-off.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">Reconcile Monthly</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Don&apos;t wait until the last week of the quarter to reconcile three months of transactions. Spend 30 minutes at the end of each month matching your bank statements to your accounting records. This way, when BAS time arrives, you only need to reconcile the final month and can lodge with confidence. Monthly reconciliation also helps you catch errors early.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">Use Accounting Software</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Cloud accounting software like Xero, MYOB, or QuickBooks connects to your bank account, automatically categorises transactions, calculates GST, and generates your BAS with a few clicks. The investment ($25&ndash;$60/month) pays for itself in time saved and errors avoided. Most can lodge directly to the ATO via SBR without you ever logging into myGov.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">Keep ALL Receipts</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The ATO requires you to keep records for five years. Every business expense you claim on your BAS needs a valid tax invoice or receipt to back it up. Use a receipt-scanning app to digitise paper receipts immediately &mdash; faded thermal receipts are the number one documentation failure in ATO audits. No receipt means no claim, no matter how legitimate the expense.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you prepare and lodge your BAS with confidence.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on the topics covered in your BAS.</p>
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
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            Stop Dreading BAS Season
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow tracks your GST automatically, categorises expenses, and generates BAS-ready reports so you can lodge in minutes instead of hours. Start for free &mdash; no accounting degree required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/bas-preparation-checklist">
              <Button variant="secondary">Try the BAS Checklist</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
