import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Registered Business Name: Complete Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is a registered business name? Learn the difference between a business name and ABN, how to register with ASIC ($39/yr), requirements, renewal, and when freelancers need one. Australia-focused guide.',
  keywords: [
    'register business name australia',
    'business name registration ASIC',
    'business name vs ABN',
    'how to register a business name',
    'business name cost australia',
    'do I need a business name',
    'ASIC business name registration',
    'sole trader business name',
    'business name vs company name',
    'freelancer business name australia',
    'business name renewal ASIC',
    'trading name vs business name',
  ],
  alternates: { canonical: '/glossary/registered-business-name' },
  openGraph: {
    title: 'Registered Business Name: Complete Guide for Australian Freelancers — InvoiceFlow',
    description:
      'Everything you need to know about registering a business name in Australia: ASIC registration, costs ($39/yr), ABN requirements, renewal, and when freelancers actually need one.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/registered-business-name',
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
    { '@type': 'ListItem', position: 3, name: 'Registered Business Name', item: `${BASE_URL}/glossary/registered-business-name` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to register a business name in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Registering a business name with ASIC costs $39 for 1 year or $92 for 3 years (as of 2025-26). The 3-year option saves you $25 compared to renewing annually. You must also have an ABN before you can register a business name — ABN registration is free through the Australian Business Register. If you let your registration lapse, someone else can register the same name.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a business name and an ABN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An ABN (Australian Business Number) is an 11-digit identifier issued by the ATO that identifies your business to the government for tax purposes. A registered business name is a trading name registered with ASIC that allows you to operate under a name other than your personal name. You need an ABN before you can register a business name. If you trade under your own personal name (e.g. "Jane Smith"), you do not need to register a business name. But if you want to trade as "Smith Creative Studio" or any name that is not your personal name, you must register it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to register a business name as a sole trader?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if you want to trade under a name that is different from your personal legal name. If Jane Smith invoices clients as "Jane Smith", no business name registration is needed — just an ABN. But if Jane wants to operate as "Pixel Perfect Design" or "JS Creative Services", she must register that name with ASIC. Many freelancers start without a business name and register one later when they want to build a brand separate from their personal identity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a business name and a company name?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A business name is a trading name that any business structure (sole trader, partnership, company, or trust) can register to trade under. It does not create a separate legal entity. A company name (ending in Pty Ltd) is created when you incorporate a company with ASIC — it creates a separate legal entity with its own ABN, tax obligations, and limited liability. A company can also register additional business names to trade under. Registration costs differ significantly: a business name costs $39/yr, while incorporating a company costs $576 plus ongoing annual review fees ($310/yr for a small proprietary company).',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I do not renew my business name registration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ASIC sends renewal notices 2 months before your business name expires. If you do not renew by the due date, you enter a 2-month late renewal period during which you can still renew (with a late fee). After the late renewal period expires, your business name is deregistered and becomes available for anyone else to register. You would then be trading under a name you no longer have legal rights to use, which could create legal issues and brand confusion. Set a calendar reminder and consider the 3-year registration option ($92) to reduce renewal frequency.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-business-name', label: '1. What Is a Registered Business Name?' },
  { id: 'business-name-vs-abn', label: '2. Business Name vs ABN vs Company Name' },
  { id: 'do-you-need-one', label: '3. Do Freelancers Need One?' },
  { id: 'how-to-register', label: '4. How to Register (Step by Step)' },
  { id: 'rules-and-requirements', label: '5. Rules, Renewal & Requirements' },
  { id: 'invoiceflow-business-name', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/abn-lookup',
    name: 'ABN Lookup',
    description: 'Verify any Australian Business Number instantly — check if a client or supplier has a valid, active ABN.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with your registered business name, ABN, and GST details in under 30 seconds.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/business-registration-checklist',
    name: 'Business Registration Checklist',
    description: 'Get a personalised setup checklist for starting your freelance business in Australia — ABN, business name, GST, and more.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/privacy-policy-generator',
    name: 'Privacy Policy Generator',
    description: 'Generate an Australian Privacy Act compliant privacy policy for your registered business — free and instant.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/abn-guide',
    name: 'ABN Guide for Freelancers',
    description: 'Everything about getting and using an ABN as a freelancer — the prerequisite for registering a business name.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'How to create compliant invoices that display your registered business name, ABN, and GST details correctly.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Freelancer Tax Guide',
    description: 'Complete guide to tax obligations for Australian freelancers — including business structure implications.',
  },
];

export default function RegisteredBusinessNameGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Registered Business Name</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Structure
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Registered Business Name{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A registered business name lets you trade under a name that is not your personal legal name. This guide covers what it is, when you need one, how to register with ASIC, costs, renewal, and how it differs from an ABN and company name &mdash; with an Australian focus.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Australia-Focused 2025-26</span>
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
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 p-8">
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$39</span>
              <div>
                <p className="text-white font-medium text-sm">1-Year Registration: $39</p>
                <p className="text-gray-400 text-sm">ASIC fee to register a business name for 12 months (or $92 for 3 years)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">ABN</span>
              <div>
                <p className="text-white font-medium text-sm">ABN Required First</p>
                <p className="text-gray-400 text-sm">You must have an active ABN before you can register a business name</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">2.4M</span>
              <div>
                <p className="text-white font-medium text-sm">2.4M+ Active Business Names</p>
                <p className="text-gray-400 text-sm">Over 2.4 million business names registered with ASIC across Australia</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">!</span>
              <div>
                <p className="text-white font-medium text-sm">Only If Not Your Personal Name</p>
                <p className="text-gray-400 text-sm">You only need to register if trading under a name other than your full legal name</p>
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
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm py-1">
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

        {/* Section 1 */}
        <section id="what-is-business-name">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Registered Business Name?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A registered business name is a <strong className="text-white">trading name officially registered with the Australian Securities and Investments Commission (ASIC)</strong> that allows you to operate your business under a name other than your personal legal name. It is sometimes called a &ldquo;trading name&rdquo; or &ldquo;trading as&rdquo; name.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In Australia, if you want to trade as anything other than your exact personal name &mdash; for example, &ldquo;Pixel Studio&rdquo; instead of &ldquo;Sarah Thompson&rdquo; &mdash; <strong className="text-white">you are legally required to register that name with ASIC</strong>. This applies to sole traders, partnerships, companies, and trusts. The Business Names Registration Act 2011 governs this requirement at the federal level.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Registering a business name does <strong className="text-white">not</strong> create a separate legal entity (that requires company incorporation), does not give you an ABN (you need one first), and does not give you a trademark (that is a separate IP Australia process). It simply gives you the legal right to trade under that name in Australia.
            </p>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Common Misconception</p>
              <p className="text-gray-400 text-sm">
                Many new freelancers think registering a business name gives them legal protection of that name or creates a formal business structure. It does neither. A registered business name only gives you the right to trade under that name. For name protection, you need a <strong className="text-gray-200">trademark</strong> (registered with IP Australia). For legal separation, you need to <Link href="/glossary/pty-ltd" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">incorporate a company</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="business-name-vs-abn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Business Name vs ABN vs Company Name</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              These three are frequently confused but serve completely different purposes. Here is how they compare:
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Aspect</th>
                    <th className="text-left text-sm font-medium text-emerald-400 px-6 py-4">Business Name</th>
                    <th className="text-left text-sm font-medium text-teal-400 px-6 py-4">ABN</th>
                    <th className="text-left text-sm font-medium text-cyan-400 px-6 py-4">Company Name (Pty Ltd)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { aspect: 'What it is', bn: 'A trading name', abn: 'An 11-digit tax identifier', cn: 'A separate legal entity' },
                    { aspect: 'Registered with', bn: 'ASIC', abn: 'ATO (via ABR)', cn: 'ASIC' },
                    { aspect: 'Cost', bn: '$39/yr or $92/3yr', abn: 'Free', cn: '$576 + $310/yr' },
                    { aspect: 'Creates legal entity?', bn: 'No', abn: 'No', cn: 'Yes' },
                    { aspect: 'Provides liability protection?', bn: 'No', abn: 'No', cn: 'Yes (limited)' },
                    { aspect: 'Required for all businesses?', bn: 'Only if not using personal name', abn: 'Yes (to avoid 47% withholding)', cn: 'No — optional structure' },
                    { aspect: 'Prerequisite', bn: 'Must have ABN first', abn: 'None', cn: 'None (gets own ABN)' },
                    { aspect: 'Renewal', bn: 'Every 1 or 3 years', abn: 'No renewal needed', cn: 'Annual review ($310/yr)' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">{row.aspect}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.bn}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.abn}</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">{row.cn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Also Worth Knowing: Trademark</p>
              <p className="text-gray-400 text-sm">
                A <strong className="text-gray-200">trademark</strong> (registered with IP Australia, from $250) protects your brand name, logo, or slogan across Australia for 10 years. A registered business name does NOT protect your name &mdash; someone in another state could register the same business name, and someone anywhere could register it as a trademark and potentially force you to stop using it. If your brand name is important to your business, consider trademark registration in addition to business name registration.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="do-you-need-one">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Do Freelancers Need One?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Not always.</strong> Whether you need a registered business name depends on one simple question: are you trading under your personal legal name, or under a different name?
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">You DON&rsquo;T Need to Register If...</h4>
                <ul className="space-y-2">
                  {[
                    'You trade under your exact personal name (e.g. "Sarah Thompson")',
                    'You add a description to your name (e.g. "Sarah Thompson Photography" — check ASIC rules)',
                    'You are a company trading under your registered company name',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3">You MUST Register If...</h4>
                <ul className="space-y-2">
                  {[
                    'You trade under any name that is not your personal name (e.g. "Pixel Studio")',
                    'You use an abbreviation or variation (e.g. "S. Thompson Design")',
                    'You want a branded business identity separate from yourself',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <h3 className="text-xl font-bold text-white">Reasons to Register (Even If Optional)</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Professional Brand', desc: 'A business name like "Elevate Creative" sounds more established than "John Smith" on an invoice.' },
                  { title: 'Marketing Flexibility', desc: 'You can create a brand, website, and social media presence around a memorable name rather than your personal name.' },
                  { title: 'Privacy', desc: 'Clients see your business name on invoices and contracts rather than your full personal name.' },
                  { title: 'Scalability', desc: 'If you plan to hire contractors or grow into a team, a business name makes the transition smoother.' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                    <h4 className="text-white font-semibold text-sm mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="how-to-register">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Register (Step by Step)</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Registering a business name in Australia is straightforward and can be done entirely online in about 15 minutes.
            </p>

            <div className="space-y-4 mt-6">
              {[
                { step: '1', title: 'Get an ABN (if you don\'t have one)', desc: 'You must have an active ABN before registering a business name. Apply for free at abr.gov.au — instant for most sole traders. See our ABN guide for details.', link: '/guides/abn-guide', linkText: 'Read ABN guide' },
                { step: '2', title: 'Check name availability', desc: 'Search the ASIC business name register at asic.gov.au to check if your desired name is available. The name cannot be identical or nearly identical to an existing registered business name or company name. Also search IP Australia\'s trademark register to avoid potential conflicts.' },
                { step: '3', title: 'Register online via ASIC', desc: 'Go to asic.gov.au and select "Register a business name." You will need your ABN, the business name you want, your personal details, and a payment method. Choose 1 year ($39) or 3 years ($92).' },
                { step: '4', title: 'Receive confirmation', desc: 'ASIC will email your Certificate of Registration. Your business name will appear on the public register. You can now legally trade under that name across all of Australia.' },
                { step: '5', title: 'Update your business materials', desc: 'Add your registered business name to your invoices, website, contracts, email signatures, and all client-facing materials. Your ABN should always appear alongside your business name on invoices and official documents.' },
              ].map((item) => (
                <div key={item.step} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <span className="text-emerald-400 font-bold text-sm">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  {item.link && (
                    <Link href={item.link} className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm mt-2 underline underline-offset-2">
                      {item.linkText}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Pro Tip: Choose the 3-Year Option</p>
              <p className="text-gray-400 text-sm">
                The 3-year registration ($92) saves you <strong className="text-gray-200">$25 compared to renewing annually</strong> ($39 &times; 3 = $117). It also reduces the risk of accidentally letting your name lapse due to a missed renewal. For most freelancers, the 3-year option is the smarter choice.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="rules-and-requirements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Rules, Renewal &amp; Requirements</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Once registered, there are ongoing obligations you must meet to keep your business name active and compliant.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Display Requirements</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  You must display your registered business name on all <strong className="text-gray-200">public-facing documents and communications</strong>. This includes:
                </p>
                <ul className="space-y-2">
                  {[
                    'Invoices and receipts',
                    'Contracts and agreements',
                    'Your website and email signatures',
                    'Business cards and marketing materials',
                    'Your physical business location (if applicable)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Renewal Timeline</h3>
                <div className="space-y-3">
                  {[
                    { time: '2 months before expiry', action: 'ASIC sends renewal notice via email', color: 'text-emerald-400' },
                    { time: 'Before expiry date', action: 'Renew online at ASIC ($39/1yr or $92/3yr)', color: 'text-emerald-400' },
                    { time: 'After expiry date', action: '2-month late renewal period (with late fee)', color: 'text-yellow-400' },
                    { time: '2 months after expiry', action: 'Name deregistered — anyone can take it', color: 'text-red-400' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                      <span className={`flex-shrink-0 ${item.color} text-sm font-semibold min-w-[160px]`}>{item.time}</span>
                      <span className="text-gray-400 text-sm">{item.action}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Name Restrictions</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">ASIC will reject business name applications that are:</p>
                <ul className="space-y-2">
                  {[
                    'Identical or nearly identical to an existing registered name',
                    'Identical to a company name registered with ASIC',
                    'Offensive or contrary to public interest',
                    'Suggesting government affiliation (e.g. containing "Royal", "Government")',
                    'Containing restricted words without approval (e.g. "Bank", "Trust", "University")',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Keep Your Details Current</p>
              <p className="text-gray-400 text-sm">
                You must update ASIC within 28 days of any changes to your address, contact details, or ABN holder details. Failure to keep your details current can result in penalties. Updates can be made free of charge through your ASIC online account.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="invoiceflow-business-name">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Once you have registered your business name, InvoiceFlow makes it easy to use it consistently and professionally across all your client interactions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Business Name on Every Invoice', desc: 'Set up your registered business name once in InvoiceFlow and it appears automatically on every invoice, quote, and receipt — ensuring consistent, professional branding.' },
                { title: 'ABN Display Compliance', desc: 'InvoiceFlow ensures your ABN is always displayed alongside your business name on invoices, keeping you compliant with ATO requirements.' },
                { title: 'Professional Invoice Templates', desc: 'Choose from premium templates that showcase your business name prominently — making your one-person freelance operation look as professional as a large studio.' },
                { title: 'GST-Compliant Tax Invoices', desc: 'If you are registered for GST, InvoiceFlow generates tax invoices that meet all ATO requirements — including your business name, ABN, GST amount, and the words "Tax Invoice".' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  { label: 'ABN', href: '/glossary/abn' },
                  { label: 'ACN', href: '/glossary/acn' },
                  { label: 'Sole Trader', href: '/glossary/sole-trader' },
                  { label: 'Pty Ltd', href: '/glossary/pty-ltd' },
                  { label: 'Business Structure', href: '/glossary/business-structure' },
                  { label: 'Tax Invoice', href: '/glossary/tax-invoice' },
                  { label: 'TFN', href: '/glossary/tfn' },
                ].map((term) => (
                  <Link key={term.href} href={term.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors">
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
        <p className="text-gray-400 text-center mb-8">Free tools to help with business registration and setup in Australia.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">{tool.icon}</div>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides for setting up and running your freelance business in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-emerald-500/40 transition-all duration-300">
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
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Put Your Business Name on Professional Invoices
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow makes it easy to create ATO-compliant invoices that showcase your registered business name, ABN, and GST details &mdash; all in under 30 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/invoice-generator">
              <Button variant="secondary">Try the Invoice Generator</Button>
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
