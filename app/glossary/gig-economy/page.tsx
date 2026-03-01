import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Gig Economy in Australia: Tax, ABN & Platform Rules — InvoiceFlow',
  description:
    'What is the gig economy in Australia? Learn about gig worker tax obligations, ABN requirements, GST rules for rideshare and delivery, platform-specific rules (Uber, DoorDash, Airtasker, Upwork), worker rights under the Closing Loopholes Act, and how to transition from gig work to freelancing. Updated for 2025-26.',
  keywords: [
    'gig economy australia',
    'gig economy tax obligations',
    'gig worker ABN australia',
    'freelance vs gig economy',
    'uber driver tax australia',
    'gig economy GST',
    'airtasker tax obligations',
    'rideshare GST australia',
    'gig worker rights australia',
    'closing loopholes act gig workers',
  ],
  alternates: { canonical: '/glossary/gig-economy' },
  openGraph: {
    title: 'Gig Economy in Australia: Tax, ABN & Platform Rules — InvoiceFlow',
    description:
      'The complete guide to the gig economy in Australia: ABN requirements, GST rules for rideshare and delivery, platform-specific tax obligations, worker rights under new legislation, and how InvoiceFlow helps gig workers manage compliance.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/gig-economy',
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
    { '@type': 'ListItem', position: 3, name: 'Gig Economy', item: `${BASE_URL}/glossary/gig-economy` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do gig workers need an ABN in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all gig workers in Australia need an Australian Business Number (ABN) to receive payments from platforms like Uber, DoorDash, Airtasker, and Upwork. Platforms treat gig workers as independent contractors, not employees, which means you must have an ABN to avoid 47% withholding on your payments. Registering for an ABN is free and can be done online at abr.gov.au in about 10 minutes. Without an ABN, platforms may refuse to onboard you or the paying entity must withhold tax at the top marginal rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Uber drivers need to register for GST in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all rideshare and taxi drivers in Australia must register for GST from their very first dollar of income, regardless of how much they earn. This has been the law since 1 August 2017 when the government extended the taxi travel GST rules to include rideshare services. This means Uber, Ola, DiDi, and all other rideshare drivers must charge 10% GST on every fare, lodge quarterly Business Activity Statements (BAS), and can claim input tax credits on business expenses like fuel, car maintenance, and phone bills. This is different from other gig work where GST registration is only required once turnover exceeds $75,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between gig work and freelancing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The key difference is the level of control and client relationship. Gig work is typically platform-mediated — a platform like Uber, DoorDash, or Airtasker connects you with customers, often sets or influences pricing, and manages the transaction. Freelancing involves working directly with clients, setting your own rates, negotiating scope, and building long-term relationships. Gig work generally has a lower barrier to entry but less control over pricing and client selection. Many workers start with gig platforms and transition to direct freelancing as they build skills, reputation, and a client base. From a tax perspective, both are treated as self-employment income in Australia.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tax do gig workers pay in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gig workers in Australia pay income tax on all earnings from gig work, as it is treated as assessable business income. Key obligations include: (1) registering for an ABN, (2) registering for GST if turnover exceeds $75,000 (or from the first dollar for rideshare/taxi drivers), (3) lodging quarterly BAS if GST-registered, (4) paying PAYG instalments quarterly once the ATO issues an instalment rate, (5) lodging an annual individual tax return with a business schedule, and (6) keeping records of all income and expenses for 5 years. Platforms report all payments to the ATO via the Taxable Payments Annual Report (TPAR), so all gig income is visible to the ATO.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are gig workers entitled to superannuation in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under current law, most gig workers are classified as independent contractors and are not entitled to employer-paid superannuation. However, the Closing Loopholes Act 2024 introduced new provisions for "employee-like" workers in the gig economy, giving the Fair Work Commission power to set minimum standards including potential superannuation obligations for platform workers. Additionally, if a gig worker is found to be in a contract "wholly or principally for the labour of the person," the engaging entity must pay the 12% superannuation guarantee. Gig workers should also make voluntary super contributions to protect their retirement savings, and can claim a tax deduction for these contributions.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-gig-economy', label: '1. What Is the Gig Economy?' },
  { id: 'gig-vs-freelancing', label: '2. Gig Economy vs Traditional Freelancing' },
  { id: 'tax-obligations', label: '3. Tax Obligations for Gig Workers' },
  { id: 'platform-rules', label: '4. Platform-Specific Rules' },
  { id: 'rights-protections', label: '5. Rights and Protections' },
  { id: 'invoiceflow-for-gig-workers', label: '6. InvoiceFlow for Gig Workers' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create ATO-compliant invoices for your direct clients with ABN, GST, and professional formatting.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on your gig earnings, work out inclusive and exclusive amounts, and check your BAS figures.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/abn-lookup',
    name: 'ABN Lookup',
    description: 'Verify your ABN details and check GST registration status before starting gig work.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/contractor-vs-employee-calculator',
    name: 'Contractor vs Employee Test',
    description: 'Check whether your gig arrangement is truly independent contracting or disguised employment.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/abn-guide',
    name: 'ABN Registration Guide',
    description: 'Step-by-step guide to registering for an ABN as a gig worker or freelancer in Australia.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, BAS, PAYG instalments, and everything gig workers need to know at tax time.',
  },
  {
    href: '/guides/superannuation-for-freelancers',
    name: 'Super Guide for Gig Workers',
    description: 'How to build your retirement savings as a gig worker when no one is paying super for you.',
  },
];

export default function GigEconomyPage() {
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
            <span className="text-white">Gig Economy</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Work &amp; Employment
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The Gig Economy{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              in Australia
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Over 1.1 million Australians now participate in the gig economy &mdash; driving for Uber, delivering for DoorDash, tasking on Airtasker, or freelancing on Upwork. Whether you&apos;re earning a side income or making it your full-time livelihood, understanding your tax obligations, ABN requirements, and legal rights is essential. Get it wrong and the ATO will find out &mdash; platforms report every dollar you earn.
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
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">1.1M</span>
              <div>
                <p className="text-white font-medium text-sm">Australian Gig Workers</p>
                <p className="text-gray-400 text-sm">Estimated number of Australians participating in the gig economy</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">ABN</span>
              <div>
                <p className="text-white font-medium text-sm">Required for All Gig Work</p>
                <p className="text-gray-400 text-sm">Every gig worker needs an ABN to receive platform payments without 47% withholding</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$0</span>
              <div>
                <p className="text-white font-medium text-sm">Rideshare GST Threshold</p>
                <p className="text-gray-400 text-sm">Uber/rideshare drivers must register for GST from their very first dollar</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">TPAR</span>
              <div>
                <p className="text-white font-medium text-sm">Platforms Report to the ATO</p>
                <p className="text-gray-400 text-sm">All platform payments are reported via Taxable Payments Annual Report</p>
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

        {/* Section 1: What Is the Gig Economy? */}
        <section id="what-is-gig-economy">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is the Gig Economy?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The gig economy refers to a <strong className="text-white">labour market characterised by short-term, flexible, on-demand work arrangements</strong> rather than permanent employment. Instead of traditional 9-to-5 jobs with a single employer, gig workers perform individual tasks, projects, or &quot;gigs&quot; for multiple clients or platforms, often with the freedom to choose when, where, and how much they work.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In Australia, the gig economy has grown rapidly over the past decade. An estimated <strong className="text-white">1.1 million Australians</strong> now participate in some form of gig work, according to research from the Victorian Government&apos;s Inquiry into the On-Demand Workforce and various ABS labour force surveys. This figure encompasses a wide spectrum of work &mdash; from driving a few hours on weekends for Uber to running a full-time freelance business on Upwork.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What distinguishes the modern gig economy from traditional contracting is the role of <strong className="text-white">digital platforms</strong> as intermediaries. These platforms connect workers with customers, facilitate payments, manage ratings and reviews, and in many cases influence pricing and work allocation. This platform-mediated model has created new categories of work that did not exist a decade ago.
            </p>

            {/* Platform Categories */}
            <h3 className="text-lg font-semibold text-white mt-8 mb-4">Types of Gig Work in Australia</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  Rideshare &amp; Transport
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Uber, Ola, DiDi</strong> &mdash; Passenger transport</li>
                  <li><strong className="text-gray-200">GST from dollar one</strong> &mdash; Special rideshare rule</li>
                  <li>Must hold valid driver&apos;s licence and vehicle accreditation</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  Food &amp; Goods Delivery
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">DoorDash, Uber Eats, Menulog</strong> &mdash; Food delivery</li>
                  <li><strong className="text-gray-200">Amazon Flex, Sendle</strong> &mdash; Parcel delivery</li>
                  <li>GST only required if turnover exceeds $75,000</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  Freelance Platforms
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Upwork, Fiverr, Freelancer</strong> &mdash; Professional services</li>
                  <li>International clients = GST-free export in most cases</li>
                  <li>Higher earning potential, portfolio-based reputation</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L12 4.37m-5.68 5.7h13.32M4.26 19.72l5.1-5.1m0 0L3.68 8.92m5.68 5.7H22.68" />
                  </svg>
                  Task-Based &amp; Services
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Airtasker</strong> &mdash; General tasks (cleaning, removals, handyman)</li>
                  <li><strong className="text-gray-200">HiPages</strong> &mdash; Trades and home services</li>
                  <li><strong className="text-gray-200">99designs</strong> &mdash; Creative and design work</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Key Point: You Are Self-Employed</p>
              <p className="text-gray-400 text-sm">
                Regardless of which platform you use, gig workers in Australia are treated as <strong className="text-gray-200">self-employed independent contractors</strong> for tax purposes. The platform is not your employer. You are running your own business, even if it does not feel like it. This means you are responsible for your own <Link href="/glossary/abn" className="text-amber-400 hover:text-amber-300 underline">ABN</Link>, tax returns, <Link href="/glossary/gst" className="text-amber-400 hover:text-amber-300 underline">GST</Link> (if applicable), <Link href="/glossary/superannuation" className="text-amber-400 hover:text-amber-300 underline">superannuation</Link>, and record keeping.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Gig Economy vs Traditional Freelancing */}
        <section id="gig-vs-freelancing">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Gig Economy vs Traditional Freelancing</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              While both gig work and freelancing fall under the umbrella of self-employment, they operate quite differently in practice. Understanding these differences helps you decide which model suits your goals &mdash; and many workers eventually <strong className="text-white">transition from gig platforms to direct freelancing</strong> as they build experience and reputation.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Factor</th>
                    <th className="text-left py-3 px-4 text-amber-400 font-medium">Gig Economy</th>
                    <th className="text-left py-3 px-4 text-emerald-400 font-medium">Traditional Freelancing</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Client Acquisition</td>
                    <td className="py-3 px-4">Platform-mediated &mdash; the app connects you with customers</td>
                    <td className="py-3 px-4">Direct &mdash; you find clients through networking, referrals, portfolio</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Pricing Control</td>
                    <td className="py-3 px-4">Set or heavily influenced by the platform (surge pricing, algorithms)</td>
                    <td className="py-3 px-4">You set your own rates and negotiate directly with clients</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Reputation System</td>
                    <td className="py-3 px-4">Star ratings and reviews on the platform</td>
                    <td className="py-3 px-4">Portfolio, case studies, testimonials, word-of-mouth</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Barrier to Entry</td>
                    <td className="py-3 px-4">Low &mdash; sign up, pass checks, start earning</td>
                    <td className="py-3 px-4">Higher &mdash; requires skills, portfolio, and client relationships</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Income Ceiling</td>
                    <td className="py-3 px-4">Limited by platform rates and available hours</td>
                    <td className="py-3 px-4">Higher &mdash; can charge premium rates for specialised skills</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Client Relationship</td>
                    <td className="py-3 px-4">Transactional, one-off, platform owns the relationship</td>
                    <td className="py-3 px-4">Long-term, direct, you own the relationship</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">Invoicing</td>
                    <td className="py-3 px-4">Platform handles payment &mdash; you receive a payout</td>
                    <td className="py-3 px-4">You issue invoices directly to clients</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">When Gig Work Transitions to Freelancing</h3>
            <p className="text-gray-300 leading-relaxed">
              Many gig workers naturally evolve into freelancers as they gain experience. An Airtasker cleaner starts getting repeat clients who want to book directly. A DoorDash driver with a van starts doing removals for local businesses. An Upwork developer builds relationships and takes clients off-platform. This transition is <strong className="text-white">one of the most powerful moves a gig worker can make</strong> &mdash; it removes the platform&apos;s commission (typically 10-20%), gives you pricing power, and builds a sustainable business with recurring revenue.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When you make this transition, you will need to start <strong className="text-white">issuing your own invoices</strong> to direct clients. This is where tools like <Link href="/tools" className="text-amber-400 hover:text-amber-300 underline">InvoiceFlow</Link> become essential &mdash; creating professional, ATO-compliant invoices that include your <Link href="/glossary/abn" className="text-amber-400 hover:text-amber-300 underline">ABN</Link>, proper <Link href="/glossary/gst" className="text-amber-400 hover:text-amber-300 underline">GST</Link> treatment, and clear payment terms.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">The Smart Transition Path</p>
              <p className="text-gray-400 text-sm">
                The ideal path is to use gig platforms as a <strong className="text-gray-200">launching pad, not a destination</strong>. Start on platforms to build skills and cash flow, then gradually shift to direct clients where you control the relationship, pricing, and revenue. Keep platform work as a fallback during quiet periods. Many successful <Link href="/for/sole-traders" className="text-amber-400 hover:text-amber-300 underline">sole traders</Link> maintain a mix of both, using platform income as a baseline while growing their direct client base.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Tax Obligations for Gig Workers */}
        <section id="tax-obligations">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Obligations for Gig Workers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Every gig worker in Australia has <strong className="text-white">the same tax obligations as any other self-employed person</strong>. The ATO does not treat gig income differently from other business income &mdash; it is all assessable and must be declared. Here are the key obligations you need to understand.
            </p>

            {/* ABN */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">ABN</span>
                <h3 className="text-lg font-semibold text-white">Australian Business Number</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                All gig workers need an <Link href="/glossary/abn" className="text-amber-400 hover:text-amber-300 underline">ABN</Link> to receive payments from platforms. Without an ABN, the platform (or any paying entity) must withhold <strong className="text-gray-200">47% of your payment</strong> under the no-ABN withholding rules. Registration is free at abr.gov.au and takes about 10 minutes. You will typically register as a <Link href="/for/sole-traders" className="text-amber-400 hover:text-amber-300 underline">sole trader</Link>.
              </p>
            </div>

            {/* GST */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">GST</span>
                <h3 className="text-lg font-semibold text-white">Goods and Services Tax</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The standard <Link href="/glossary/gst" className="text-amber-400 hover:text-amber-300 underline">GST</Link> registration threshold is <strong className="text-gray-200">$75,000 annual turnover</strong>. However, there is a critical exception for rideshare and taxi drivers.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-lg bg-gray-900/50 p-4 border border-red-500/10">
                  <p className="text-red-400 text-xs font-semibold mb-2">RIDESHARE / TAXI</p>
                  <p className="text-gray-400 text-sm">Must register for GST from the <strong className="text-gray-200">very first dollar</strong> of income. This rule has applied since 1 August 2017. No threshold &mdash; GST applies immediately regardless of turnover.</p>
                </div>
                <div className="rounded-lg bg-gray-900/50 p-4 border border-emerald-500/10">
                  <p className="text-emerald-400 text-xs font-semibold mb-2">ALL OTHER GIG WORK</p>
                  <p className="text-gray-400 text-sm">GST registration required only once annual turnover exceeds $75,000. This applies to food delivery, Airtasker, Upwork, and all non-transport gig work.</p>
                </div>
              </div>
            </div>

            {/* Income Tax */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">INCOME TAX</span>
                <h3 className="text-lg font-semibold text-white">All Gig Income Is Assessable</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every dollar you earn from gig work is <strong className="text-gray-200">assessable income</strong> and must be declared on your annual tax return. This includes cash, digital payments, tips, and bonuses. No tax is withheld from your platform payments &mdash; you receive the gross amount and must manage your own tax. The ATO recommends setting aside <strong className="text-gray-200">25-30% of your income</strong> for tax as a general rule, though your actual rate depends on your total taxable income from all sources.
              </p>
            </div>

            {/* Record Keeping */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">RECORDS</span>
                <h3 className="text-lg font-semibold text-white">5-Year Record Keeping</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                You must keep records of all income and expenses for <strong className="text-gray-200">5 years</strong> from the date you lodge your tax return. This includes platform payment summaries, receipts for business expenses (fuel, phone, equipment, maintenance), logbooks for vehicle use, and bank statements. Digital records are acceptable and encouraged.
              </p>
            </div>

            {/* BAS */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">BAS</span>
                <h3 className="text-lg font-semibold text-white">Business Activity Statement</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                If you are registered for GST, you must lodge a <Link href="/glossary/bas" className="text-amber-400 hover:text-amber-300 underline">BAS</Link> quarterly (or monthly if turnover exceeds $20M). Your BAS reports the GST you collected on services, the GST you paid on business expenses (input tax credits), and your PAYG instalment amount. Due dates are 28 days after the end of each quarter (28 October, 28 February, 28 April, 28 July).
              </p>
            </div>

            {/* TPAR Warning */}
            <div className="rounded-2xl bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                Key Trap: Platforms Report Everything via TPAR
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every major gig platform in Australia is required to lodge a <strong className="text-gray-200">Taxable Payments Annual Report (TPAR)</strong> with the ATO. This report details exactly how much they paid each worker during the financial year. The ATO uses this data to <strong className="text-gray-200">automatically cross-match</strong> against your tax return. If you declare $30,000 in gig income but the platforms reported $45,000, the ATO&apos;s data matching systems will flag the discrepancy immediately. There is no hiding gig income &mdash; every dollar is visible to the ATO.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                <strong className="text-gray-200">Bottom line:</strong> Declare everything. The ATO already knows what you earned. Understating your income will result in penalties, interest, and potentially prosecution for tax evasion.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Platform-Specific Rules */}
        <section id="platform-rules">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Platform-Specific Rules</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Different platforms create different tax obligations. The most critical distinction is between <strong className="text-white">rideshare/taxi services</strong> (which have mandatory GST from dollar one) and <strong className="text-white">all other gig work</strong> (which follows the standard $75,000 threshold). Here is a breakdown by platform type.
            </p>

            {/* Platform Comparison Table */}
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Platform</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Type</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">GST Rule</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">BAS Required?</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">TPAR?</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Uber (rideshare)</td>
                    <td className="py-3 px-4">Passenger transport</td>
                    <td className="py-3 px-4"><span className="text-red-400 font-medium">From $0 &mdash; always</span></td>
                    <td className="py-3 px-4">Yes, quarterly</td>
                    <td className="py-3 px-4">Yes</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Ola / DiDi</td>
                    <td className="py-3 px-4">Passenger transport</td>
                    <td className="py-3 px-4"><span className="text-red-400 font-medium">From $0 &mdash; always</span></td>
                    <td className="py-3 px-4">Yes, quarterly</td>
                    <td className="py-3 px-4">Yes</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Uber Eats / DoorDash</td>
                    <td className="py-3 px-4">Food delivery</td>
                    <td className="py-3 px-4"><span className="text-emerald-400 font-medium">Over $75K only</span></td>
                    <td className="py-3 px-4">Only if GST-registered</td>
                    <td className="py-3 px-4">Yes</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Airtasker</td>
                    <td className="py-3 px-4">Task-based services</td>
                    <td className="py-3 px-4"><span className="text-emerald-400 font-medium">Over $75K only</span></td>
                    <td className="py-3 px-4">Only if GST-registered</td>
                    <td className="py-3 px-4">Yes</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">Upwork / Fiverr</td>
                    <td className="py-3 px-4">Freelance services</td>
                    <td className="py-3 px-4"><span className="text-blue-400 font-medium">GST-free export*</span></td>
                    <td className="py-3 px-4">Only if GST-registered</td>
                    <td className="py-3 px-4">No (international)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">HiPages</td>
                    <td className="py-3 px-4">Trades &amp; services</td>
                    <td className="py-3 px-4"><span className="text-emerald-400 font-medium">Over $75K only</span></td>
                    <td className="py-3 px-4">Only if GST-registered</td>
                    <td className="py-3 px-4">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mt-2">* International freelance services are generally GST-free exports under s38-190 of the GST Act, provided the client is outside Australia and the work is not related to Australian real property.</p>

            {/* Uber/Rideshare Detail */}
            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Uber &amp; Rideshare: The GST-From-Dollar-One Rule</h3>
            <p className="text-gray-300 leading-relaxed">
              Since <strong className="text-white">1 August 2017</strong>, rideshare drivers have been subject to the same GST rules as taxi drivers. This means:
            </p>
            <ul className="space-y-2 text-gray-400 ml-4 mt-3">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>You must register for GST <strong className="text-white">before your first fare</strong>, regardless of expected income</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span><strong className="text-white">10% GST applies to every fare</strong> &mdash; 1/11th of each gross fare is GST</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>You must lodge <strong className="text-white">quarterly BAS</strong> and remit the net GST to the ATO</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>You <strong className="text-white">can claim input tax credits</strong> on business expenses: fuel, car servicing, phone, car washes, tolls, parking</span>
              </li>
            </ul>

            {/* Upwork/Fiverr Detail */}
            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Upwork &amp; Fiverr: International Income</h3>
            <p className="text-gray-300 leading-relaxed">
              If you work for international clients through platforms like Upwork or Fiverr, your services are generally treated as <strong className="text-white">GST-free exports</strong> under section 38-190 of the A New Tax System (Goods and Services Tax) Act 1999. This means you do not charge GST on these services, even if you are GST-registered. However, the income is still <strong className="text-white">fully assessable for income tax</strong> purposes. Note that Upwork and Fiverr are not required to lodge TPAR with the ATO (as they are international companies), but the income still flows through your Australian bank account and is visible to the ATO via bank data matching.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Mixed Platform Use: Watch Your GST Threshold</p>
              <p className="text-gray-400 text-sm">
                Many gig workers use multiple platforms simultaneously &mdash; driving Uber on weekends, doing Airtasker jobs during the week, and freelancing on Upwork in the evenings. Remember that the <strong className="text-gray-200">$75,000 GST threshold applies to your total turnover from all sources combined</strong>, not per platform. If your combined non-rideshare gig income from all platforms and direct clients exceeds $75,000, you must register for GST on all of it. Your rideshare income requires GST regardless.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Rights and Protections */}
        <section id="rights-protections">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Rights and Protections</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The legal landscape for gig workers in Australia has changed significantly in recent years. Historically, gig workers were classified as independent contractors with <strong className="text-white">minimal workplace protections</strong>. However, landmark legislation in 2023-2024 has introduced new rights and standards specifically for platform workers.
            </p>

            {/* Employee vs Contractor Misclassification */}
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Employee vs Contractor: The Classification Question</h3>
            <p className="text-gray-300 leading-relaxed">
              The fundamental legal question in the gig economy is whether platform workers are genuinely <strong className="text-white">independent contractors</strong> or whether they are <strong className="text-white">employees in disguise</strong>. This distinction matters enormously because employees are entitled to minimum wages, leave, superannuation, and unfair dismissal protections &mdash; none of which apply to contractors. For a detailed breakdown of the <Link href="/glossary/contractor-vs-employee" className="text-amber-400 hover:text-amber-300 underline">contractor vs employee</Link> distinction, see our dedicated glossary page.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Most gig platforms classify their workers as independent contractors. However, critics argue that the level of <strong className="text-white">control platforms exert</strong> over pricing, work allocation, performance monitoring, and deactivation more closely resembles an employment relationship. This debate has driven significant legislative reform.
            </p>

            {/* Closing Loopholes Act */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-900/20 to-orange-800/10 border border-amber-500/30 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                The Closing Loopholes Act (2024)
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The <strong className="text-gray-200">Fair Work Legislation Amendment (Closing Loopholes) Act 2024</strong> is the most significant reform affecting gig workers in Australian history. Key provisions include:
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-gray-200">&quot;Employee-like&quot; worker category</strong> &mdash; A new legal classification for gig workers who are not technically employees but share similar characteristics (low bargaining power, low pay relative to risk)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-gray-200">Minimum standards orders</strong> &mdash; The Fair Work Commission can set minimum pay rates, working conditions, and consultation requirements for employee-like platform workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-gray-200">Unfair deactivation protections</strong> &mdash; Gig workers can challenge being &quot;deactivated&quot; (effectively fired) by platforms without fair process</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-gray-200">Collective bargaining</strong> &mdash; Employee-like workers can collectively negotiate with platforms through registered organisations</span>
                </li>
              </ul>
            </div>

            {/* Superannuation */}
            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Superannuation for Gig Workers</h3>
            <p className="text-gray-300 leading-relaxed">
              Under current law, most gig workers are classified as independent contractors and <strong className="text-white">do not receive employer-paid <Link href="/glossary/superannuation" className="text-amber-400 hover:text-amber-300 underline">superannuation</Link></strong>. However, there are two important exceptions to be aware of:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 text-sm">Contract for Labour</h4>
                <p className="text-gray-400 text-sm">If a gig worker&apos;s contract is &quot;wholly or principally for the labour of the person&quot; (e.g., they are paid by the hour, cannot delegate, and use the client&apos;s tools), the engaging entity must pay the <strong className="text-gray-200">12% superannuation guarantee</strong> on top of payments.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3 text-sm">Closing Loopholes Act</h4>
                <p className="text-gray-400 text-sm">The Fair Work Commission may include <strong className="text-gray-200">superannuation obligations</strong> in minimum standards orders for employee-like platform workers. This could require platforms to contribute super for their workers in the future.</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4">
              Regardless of whether anyone is legally obligated to pay your super, <strong className="text-white">every gig worker should make voluntary super contributions</strong>. You can claim a full tax deduction for concessional contributions up to $30,000 per year, which effectively reduces your income tax. Without employer super, gig workers are at serious risk of reaching retirement with insufficient savings. See our <Link href="/glossary/superannuation" className="text-amber-400 hover:text-amber-300 underline">superannuation guide</Link> for more details.
            </p>

            {/* Fair Work Amendments */}
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">What This Means for You</p>
              <p className="text-gray-400 text-sm">
                The gig economy regulatory landscape is evolving rapidly. While these reforms provide important new protections, the <strong className="text-gray-200">tax obligations remain the same</strong> regardless of your classification. Whether you are treated as a contractor or an employee-like worker, you still need an ABN, must declare all income, and should manage your own super. The key difference is that you may now have access to <strong className="text-gray-200">minimum pay standards and unfair deactivation protections</strong> that did not exist before.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: InvoiceFlow for Gig Workers */}
        <section id="invoiceflow-for-gig-workers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">InvoiceFlow for Gig Workers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Many gig workers do not just rely on platforms &mdash; they also take on <strong className="text-white">direct client work</strong> alongside their platform income. An Airtasker handyman gets repeat clients who book directly. An Uber Eats driver picks up catering delivery contracts. An Upwork developer lands a retainer client. When you start working directly with clients, you need to issue <strong className="text-white">professional, ATO-compliant invoices</strong> &mdash; and that is exactly what InvoiceFlow is built for.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Professional Invoicing</p>
                  <p className="text-gray-400 text-sm">Create polished, ATO-compliant invoices for direct clients with your ABN, GST, payment terms, and business details pre-filled.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Track All Income</p>
                  <p className="text-gray-400 text-sm">Keep a single view of your total income across gig platforms and direct clients. Know your real numbers at tax time.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">GST Compliance</p>
                  <p className="text-gray-400 text-sm">Automatically calculate and display GST on invoices. Handle the complexity of mixed GST-registered and non-registered income.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">BAS Preparation</p>
                  <p className="text-gray-400 text-sm">Pull your invoicing data together for quarterly <Link href="/glossary/bas" className="text-amber-400 hover:text-amber-300">BAS</Link> lodgement. See your GST collected vs paid at a glance.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">From Platform to Professional</h3>
            <p className="text-gray-300 leading-relaxed">
              The moment you start sending invoices to direct clients, you are no longer just a gig worker &mdash; you are a <strong className="text-white">professional freelancer running a real business</strong>. Your invoices are your storefront. They signal to clients that you are legitimate, organised, and worth the premium you charge over platform rates. InvoiceFlow helps you make that transition seamlessly, with invoices that look like they came from a business ten times your size.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Real Scenario: The Airtasker to Direct Client Pipeline</p>
              <p className="text-gray-400 text-sm">
                Sarah does cleaning through Airtasker at $45/hour. Airtasker takes a 15-20% service fee. She builds rapport with repeat clients, who ask to book directly. She starts invoicing them at $55/hour through InvoiceFlow &mdash; they save money (no platform fee), she earns more, and she has professional invoices with her <Link href="/glossary/abn" className="text-amber-400 hover:text-amber-300 underline">ABN</Link> that make the relationship official. She keeps Airtasker for new client acquisition while growing her direct base. Within six months, 70% of her income is direct.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help gig workers manage tax, invoicing, and compliance.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on ABN, tax, and super for Australian gig workers and freelancers.</p>
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
            Level Up From Gig Worker to Freelancer
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian gig workers create professional invoices, track all income sources, and stay ATO-compliant &mdash; so you can build a real freelance business alongside your platform work. Start for free &mdash; no accountant required.
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
