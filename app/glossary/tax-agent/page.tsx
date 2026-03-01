import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Tax Agent: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
  description:
    'Do you need a tax agent as a freelancer in Australia? Learn the difference between a tax agent, BAS agent, and accountant, TPB registration requirements, when DIY is fine vs when to get help, how to choose the right agent, and how much it costs. Updated for 2025-26.',
  keywords: [
    'do I need a tax agent australia',
    'registered tax agent vs accountant',
    'tax agent freelancer australia',
    'BAS agent vs tax agent',
    'tax practitioner board',
    'TPB registered tax agent',
    'tax agent fees australia',
    'sole trader tax agent australia',
  ],
  alternates: { canonical: '/glossary/tax-agent' },
  openGraph: {
    title: 'Tax Agent: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about tax agents: the difference between tax agents, BAS agents, and accountants, TPB registration, when to DIY vs get help, how to choose the right agent, and how to work with one effectively.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/tax-agent',
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
    { '@type': 'ListItem', position: 3, name: 'Tax Agent', item: `${BASE_URL}/glossary/tax-agent` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a tax agent as a freelancer in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always — it depends on the complexity of your tax situation. If you have a single ABN, straightforward freelance income, basic deductions, and you are comfortable using the ATO\'s myTax online tool, you can lodge your own tax return for free. However, you should seriously consider a registered tax agent if: it is your first year in business, you have multiple income streams (freelance plus employment plus investments), you are registered for GST, you have rental properties, capital gains events, overseas income, or you are unsure about which deductions you can claim. Tax agent fees ($200–$600 for a sole trader return) are fully tax-deductible, and a good agent will typically find $2,000–$5,000 in additional legitimate deductions — more than covering their fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a tax agent and an accountant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The terms are often used interchangeably, but they are legally distinct. A tax agent is a person or firm registered with the Tax Practitioners Board (TPB) to provide tax agent services — which includes preparing and lodging tax returns and BAS on behalf of clients, as well as providing tax advice for a fee. An accountant is a broader term for someone who works in accounting. Not all accountants are registered tax agents. To legally prepare and lodge a tax return on someone else\'s behalf for a fee, you must be a registered tax agent on the TPB register. When choosing someone to help with your tax, always verify they appear on the TPB public register at tpb.gov.au. A registered accountant who is also a tax agent can do everything — prepare financial statements, provide business advice, AND lodge your tax return.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a tax agent and a BAS agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are registered with the Tax Practitioners Board (TPB), but their authorisations differ. A registered tax agent can prepare and lodge income tax returns, provide tax advice, prepare and lodge BAS, and represent clients before the ATO for all tax matters. A registered BAS agent can only prepare and lodge Business Activity Statements (BAS), PAYG withholding returns, and Instalment Activity Statements (IAS). A BAS agent cannot prepare your income tax return or provide income tax advice. Many bookkeepers are registered BAS agents but not tax agents. If you need someone to handle both your BAS and your annual income tax return, you need a registered tax agent — not just a BAS agent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does using a tax agent extend my lodgement deadline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you self-lodge your tax return via myTax, the deadline is 31 October each year. However, if you are registered with a tax agent before 31 October, your lodgement deadline is typically extended to 15 May the following year — and in some cases even later, depending on your tax agent\'s schedule. For example, for the 2025-26 financial year ending 30 June 2026, self-lodgers must lodge by 31 October 2026, while clients registered with a tax agent before that date may have until 15 May 2027 or beyond. Important caveat: if you have an outstanding lodgement from a prior year, you may lose the extended deadline and revert to 31 October. Contact your tax agent early to confirm your specific deadline.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a tax agent cost for a sole trader return in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tax agent fees for a sole trader income tax return in Australia typically range from $200 to $600, depending on the complexity of your return, your location, and the agent\'s experience level. A straightforward sole trader return with basic deductions and a single ABN might cost $200–$350. Returns with GST, multiple income sources, rental properties, capital gains events, or complex deductions typically cost $400–$600 or more. Accounting firms in capital cities tend to charge at the higher end; suburban and regional accountants and online tax agents are often cheaper. The good news: tax agent fees are fully tax-deductible as a business expense — but you claim the fee in the income year you pay it, which is usually the year after the return being prepared.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-tax-agent', label: '1. What Is a Tax Agent?' },
  { id: 'types-of-practitioners', label: '2. Types of Tax Practitioners' },
  { id: 'do-freelancers-need', label: '3. Do Freelancers Need a Tax Agent?' },
  { id: 'choosing-right-agent', label: '4. Choosing the Right Tax Agent' },
  { id: 'working-with-agent', label: '5. Working With Your Tax Agent' },
  { id: 'invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax, Medicare levy, and take-home pay before you lodge your return.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on any amount instantly — add or remove GST with a single click.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.616 4.5 4.667V19.5a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5V4.667c0-1.051-.807-1.967-1.907-2.095A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/bas-calculator',
    name: 'BAS Calculator',
    description: 'Calculate your BAS liability — GST collected vs GST paid — before lodging with the ATO.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
  },
  {
    href: '/tools/payg-calculator',
    name: 'PAYG Calculator',
    description: 'Calculate your PAYG instalment obligations and avoid a surprise tax bill at the end of the year.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
    name: 'GST for Freelancers',
    description: 'When you must register for GST, how to charge it, how to claim credits, and how to lodge your BAS.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'End of financial year checklist, lodgement deadlines, and last-minute tax planning tips.',
  },
];

export default function TaxAgentGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Tax Agent</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tax Agent{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A registered tax agent is authorised by the Tax Practitioners Board to lodge tax returns and provide tax advice on your behalf. This guide explains the difference between tax agents, BAS agents, and accountants &mdash; when you need one, how to choose the right one, and how to work with them to minimise your tax bill and your fees.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">$400</span>
              <div>
                <p className="text-white font-medium text-sm">Typical Sole Trader Fee</p>
                <p className="text-gray-400 text-sm">$200&ndash;$600 for a sole trader tax return, depending on complexity and location</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">TPB</span>
              <div>
                <p className="text-white font-medium text-sm">TPB Registration Required</p>
                <p className="text-gray-400 text-sm">Only Tax Practitioners Board registered agents can legally lodge returns on your behalf for a fee</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">Oct</span>
              <div>
                <p className="text-white font-medium text-sm">Extended Oct 31 Deadline</p>
                <p className="text-gray-400 text-sm">Register with a tax agent by Oct 31 to get extended lodgement deadline to May 15 the following year</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">Yes</span>
              <div>
                <p className="text-white font-medium text-sm">Tax Agent Fees Are Deductible</p>
                <p className="text-gray-400 text-sm">Tax agent fees are fully deductible as a business expense in the year you pay them</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-violet-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is a Tax Agent? */}
        <section id="what-is-tax-agent">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Tax Agent?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A <strong className="text-white">tax agent</strong> is a person or firm registered with the <strong className="text-white">Tax Practitioners Board (TPB)</strong> &mdash; the Australian government body that regulates tax practitioners &mdash; to provide tax agent services for a fee. This registration gives them the legal authority to prepare and lodge <Link href="/glossary/tax-return" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">tax returns</Link> on your behalf, provide tax advice, represent you before the ATO, and apply for lodgement extensions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              It is illegal for anyone to charge a fee for preparing or lodging a tax return without being registered with the TPB. This protects taxpayers from unqualified operators. Always verify your tax agent&apos;s registration at <strong className="text-white">tpb.gov.au</strong> before engaging them.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">What a Registered Tax Agent Can Do</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-semibold mb-3">Tax Services</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Prepare and lodge individual and business income tax returns</li>
                  <li>Prepare and lodge Business Activity Statements (BAS)</li>
                  <li>Apply for lodgement deferrals and extensions</li>
                  <li>Represent you in ATO audits and disputes</li>
                  <li>Apply for private rulings on your behalf</li>
                  <li>Provide advice on income tax law</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-purple-500/20 p-5">
                <h4 className="text-purple-400 font-semibold mb-3">Business Advice</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Advise on business structure (sole trader vs company)</li>
                  <li>Recommend tax-minimisation strategies (legal)</li>
                  <li>Assist with PAYG instalment variations</li>
                  <li>Help with superannuation planning and deductions</li>
                  <li>Guide asset purchase timing for depreciation</li>
                  <li>Advise on GST registration and obligations</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">TPB Registration Requirements</h3>
            <p className="text-gray-300 leading-relaxed">
              To become a registered tax agent with the TPB, an individual must hold a relevant <strong className="text-white">tertiary qualification</strong> (typically a degree in accounting, commerce, or law), complete a <strong className="text-white">professional tax law course</strong>, and have a minimum of <strong className="text-white">1,400 hours of relevant experience</strong> supervised by a senior registered tax agent. They must also be a <strong className="text-white">fit and proper person</strong> (no criminal history involving dishonesty) and maintain <strong className="text-white">professional indemnity insurance</strong>. These requirements ensure that anyone who lodges your tax return has genuine professional qualifications and accountability.
            </p>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">Tax Agent vs Accountant &mdash; The Key Distinction</p>
              <p className="text-gray-400 text-sm">
                &quot;Accountant&quot; is not a protected title in Australia &mdash; anyone can call themselves an accountant. &quot;Registered tax agent&quot; IS a protected title regulated by law. Many accountants are also registered tax agents, but not all. When someone prepares your tax return for payment, they <strong className="text-gray-200">must</strong> be on the TPB register. Check before you pay.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Related Glossary Terms</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                { href: '/glossary/bas', label: 'BAS' },
                { href: '/glossary/gst', label: 'GST' },
                { href: '/glossary/income-tax', label: 'Income Tax' },
                { href: '/glossary/payg', label: 'PAYG' },
                { href: '/glossary/superannuation', label: 'Superannuation' },
                { href: '/glossary/tax-deduction', label: 'Tax Deduction' },
                { href: '/glossary/tax-return', label: 'Tax Return' },
                { href: '/glossary/bookkeeping', label: 'Bookkeeping' },
              ].map((term) => (
                <Link
                  key={term.href}
                  href={term.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm hover:bg-violet-500/20 transition-colors"
                >
                  {term.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Types of Tax Practitioners */}
        <section id="types-of-practitioners">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Tax Practitioners</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The TPB registers three types of tax practitioners, each with different scopes of authority. Understanding which type you need prevents you from engaging someone who legally cannot help you &mdash; or paying for services you do not need.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left px-5 py-4 text-gray-400 font-medium w-1/4">Feature</th>
                      <th className="text-left px-5 py-4 text-violet-400 font-semibold w-1/4">Tax Agent</th>
                      <th className="text-left px-5 py-4 text-purple-400 font-semibold w-1/4">BAS Agent</th>
                      <th className="text-left px-5 py-4 text-indigo-400 font-semibold w-1/4">Tax (Financial) Adviser</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="px-5 py-4 text-gray-400 font-medium">Prepare &amp; lodge income tax returns</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 text-violet-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-gray-400 font-medium">Prepare &amp; lodge BAS / IAS</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 text-violet-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-gray-400 font-medium">Provide income tax advice</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 text-violet-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold">~</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-gray-400 font-medium">Strategic tax planning</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 text-violet-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-gray-400 font-medium">Represent in ATO audits</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 text-violet-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-xs text-gray-500">BAS only</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-gray-400 font-medium">TPB registration required</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 text-violet-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-gray-400 font-medium">Typical fees (annual)</td>
                      <td className="px-5 py-4 text-violet-300 text-xs">$200&ndash;$600+ (return)</td>
                      <td className="px-5 py-4 text-purple-300 text-xs">$100&ndash;$300/quarter (BAS)</td>
                      <td className="px-5 py-4 text-indigo-300 text-xs">$300&ndash;$800+ (strategy)</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-gray-400 font-medium">Who typically does this</td>
                      <td className="px-5 py-4 text-gray-300 text-xs">Accountants with TPB registration</td>
                      <td className="px-5 py-4 text-gray-300 text-xs">Bookkeepers with TPB registration</td>
                      <td className="px-5 py-4 text-gray-300 text-xs">Financial planners with tax endorsement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 bg-gray-900/50 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">~ = limited authority (tax-related financial planning advice only, not income tax return lodgement)</p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Practical Difference for Freelancers</p>
              <p className="text-gray-400 text-sm">
                For most freelancers, you need a <strong className="text-gray-200">registered tax agent</strong>. If you only need help with quarterly <Link href="/glossary/bas" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">BAS lodgements</Link> and you handle your own tax return, a BAS agent (often a bookkeeper) is more affordable. If you want strategic tax planning around super contributions, asset purchases, or business structure, some tax agents specialise in this &mdash; or you may need a tax financial adviser as well.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Do Freelancers Need a Tax Agent? */}
        <section id="do-freelancers-need">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Do Freelancers Need a Tax Agent?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The honest answer: it depends on your situation. The ATO&apos;s free myTax tool handles straightforward returns well. But the more complex your freelance business, the more a tax agent pays for itself &mdash; sometimes several times over.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {/* DIY is fine */}
              <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-green-400 font-semibold">DIY Is Fine If&hellip;</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Simple freelance income from a single ABN
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    No employees or contractors to manage
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Not registered for <Link href="/glossary/gst" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">GST</Link> (earning under $75,000)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Standard deductions (home office, equipment, software)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    No investment properties, shares, or crypto
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    You have good records and are comfortable with numbers
                  </li>
                </ul>
              </div>

              {/* Get a tax agent */}
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <h3 className="text-violet-400 font-semibold">Get a Tax Agent If&hellip;</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    It is your first year in business (start right)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Multiple income streams (freelance + employment + investments)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    You are registered for <Link href="/glossary/gst" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">GST</Link> and lodge BAS quarterly
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Complex deductions (vehicles, home office, travel, equipment)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Rental properties, capital gains events, or crypto
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    You operate through a company or trust structure
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Overseas clients or foreign income sources
                  </li>
                </ul>
              </div>
            </div>

            {/* Cost-benefit */}
            <h3 className="text-lg font-semibold text-white mt-8 mb-3">The Cost-Benefit Analysis</h3>
            <p className="text-gray-300 leading-relaxed">
              The question is not &quot;can I afford a tax agent?&quot; but &quot;can I afford not to have one?&quot; Here is the realistic maths for a mid-level freelancer earning $80,000 per year:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-violet-400 mb-1">$400</p>
                  <p className="text-sm text-gray-400">Typical sole trader tax agent fee (fully deductible)</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white mb-1">$2,000&ndash;$5,000</p>
                  <p className="text-sm text-gray-400">Average additional <Link href="/glossary/tax-deduction" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">deductions</Link> identified by a good tax agent</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400 mb-1">$660&ndash;$1,650</p>
                  <p className="text-sm text-gray-400">Tax saved on those deductions (at 33% effective rate)</p>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-gray-700/50">
                <p className="text-gray-400 text-sm text-center">
                  Net benefit after agent fee: <strong className="text-white">$260&ndash;$1,250</strong> better off &mdash; plus peace of mind, extended deadlines, audit protection, and professional advice.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-6">
              <p className="text-violet-400 font-medium mb-2">The First-Year Rule</p>
              <p className="text-gray-400 text-sm">
                If this is your first year freelancing, use a registered tax agent regardless of complexity. A good agent will set up your return structure correctly from day one, ensure your <Link href="/glossary/bas" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">BAS</Link> obligations are understood, advise on <Link href="/glossary/payg" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">PAYG</Link> instalment thresholds, and identify deductions you did not know you could claim. The cost of getting it right in year one is far less than the cost of unravelling errors across multiple years.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Choosing the Right Tax Agent */}
        <section id="choosing-right-agent">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Choosing the Right Tax Agent</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not all tax agents are equal. An agent who specialises in company structures and large businesses may be the wrong choice for a freelancer earning $60,000 from a single ABN. Here is how to find the right fit.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Step 1: Verify TPB Registration</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
              <p className="text-gray-300 text-sm leading-relaxed">
                Before engaging anyone, look them up on the <strong className="text-white">TPB public register</strong> at tpb.gov.au. Search by name or business name. The register shows their registration type (tax agent, BAS agent, or tax financial adviser), their registration status (active or not), and any conditions on their registration. If they are not on the register, they cannot legally lodge your tax return for a fee. This is non-negotiable.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Step 2: Questions to Ask Before Engaging</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-medium mb-3">About Their Experience</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&ldquo;Do you work with many freelancers and sole traders?&rdquo;</li>
                  <li>&ldquo;Are you familiar with my industry?&rdquo;</li>
                  <li>&ldquo;How many sole trader returns do you lodge annually?&rdquo;</li>
                  <li>&ldquo;Do you have experience with GST-registered freelancers?&rdquo;</li>
                  <li>&ldquo;Can you provide a reference from a sole trader client?&rdquo;</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-medium mb-3">About Their Process</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&ldquo;What information do you need from me?&rdquo;</li>
                  <li>&ldquo;How do you communicate &mdash; email, portal, in person?&rdquo;</li>
                  <li>&ldquo;What are your typical turnaround times?&rdquo;</li>
                  <li>&ldquo;What happens if I get audited?&rdquo;</li>
                  <li>&ldquo;Can I reach you with questions throughout the year?&rdquo;</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-medium mb-3">About Pricing</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&ldquo;What is your fee for a sole trader return?&rdquo;</li>
                  <li>&ldquo;Is that fixed or does it vary?&rdquo;</li>
                  <li>&ldquo;Are there additional charges for BAS, queries, or extras?&rdquo;</li>
                  <li>&ldquo;Do you charge extra if my records are disorganised?&rdquo;</li>
                  <li>&ldquo;Can I see a sample engagement letter?&rdquo;</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-medium mb-3">About Technology</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&ldquo;Do you integrate with Xero or accounting software?&rdquo;</li>
                  <li>&ldquo;Do you have a client portal for document sharing?&rdquo;</li>
                  <li>&ldquo;Are you set up to work remotely?&rdquo;</li>
                  <li>&ldquo;How do you handle electronic document signing?&rdquo;</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Red Flags to Watch For</h3>
            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-6 mt-4">
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                  <div><strong className="text-red-400">Upfront percentage fees</strong> &mdash; &ldquo;I charge 10% of your refund.&rdquo; This is a red flag and often indicates an aggressive, refund-maximising approach that can get you in trouble with the ATO. Reputable agents charge fixed or hourly fees.</div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                  <div><strong className="text-red-400">Guaranteed refund promises</strong> &mdash; No legitimate tax agent can guarantee a specific refund. The outcome depends entirely on your income and deductions. Anyone promising a refund before reviewing your records is being deceptive.</div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                  <div><strong className="text-red-400">Not on the TPB register</strong> &mdash; Non-negotiable. If they are not registered, walk away. You remain legally responsible for your tax return even if an unregistered person prepares it incorrectly.</div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                  <div><strong className="text-red-400">Encourages claiming questionable deductions</strong> &mdash; If they suggest claiming expenses you are not actually entitled to, they are exposing you to ATO penalties and potential prosecution. You &mdash; not your agent &mdash; are ultimately liable for the accuracy of your tax return.</div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                  <div><strong className="text-red-400">Slow or no communication</strong> &mdash; If they are hard to reach before you sign up, they will be harder to reach when you have a tax problem. Response times matter, especially around lodgement deadlines.</div>
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Sole Trader Specialist vs Generalist</h3>
            <p className="text-gray-300 leading-relaxed">
              A tax agent who works primarily with large companies or complex structures may not be the best fit for a freelancer. Look for agents who specifically mention sole traders, freelancers, or small businesses on their website. They will be familiar with the common deductions in your situation, the Taxable Payments Annual Reporting (TPAR) system, and the ATO&apos;s particular scrutiny areas for self-employed individuals.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Online tax agents (such as Etax, H&amp;R Block Online, and similar services) can be a cost-effective option for straightforward returns. Traditional accounting firms provide more personalised advice but cost more. The right choice depends on your complexity &mdash; if you need strategic advice beyond just lodging a return, a boutique firm specialising in freelancers and creatives is usually worth the premium.
            </p>
          </div>
        </section>

        {/* Section 5: Working With Your Tax Agent */}
        <section id="working-with-agent">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Working With Your Tax Agent</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Getting maximum value from your tax agent is not just about finding a good one &mdash; it is about how you work with them. Organised clients pay less in fees and get better advice.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">What to Prepare for Your Tax Agent</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-violet-400 font-medium mb-3">Income Records</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Full year income summary from your invoicing software
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Bank statements for all business accounts (July&ndash;June)
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Prior year&apos;s Notice of Assessment
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      PAYG instalment amounts paid during the year
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Interest and dividend statements from banks and brokers
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-violet-400 font-medium mb-3">Expense Records</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Expense summary by category (or export from accounting software)
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Vehicle logbook (if using logbook method)
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Home office hours diary or timesheet records
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Asset register (any equipment purchased during year)
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Superannuation contribution statements and Notice of Intent form
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Key Lodgement Timing</h3>
            <div className="overflow-x-auto rounded-xl bg-gray-800/50 border border-gray-700/50 mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="text-left px-5 py-4 text-gray-400 font-medium">Milestone</th>
                    <th className="text-left px-5 py-4 text-gray-400 font-medium">Date</th>
                    <th className="text-left px-5 py-4 text-gray-400 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/30 text-gray-400">
                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-300">ATO pre-fill data available</td>
                    <td className="px-5 py-4 text-violet-400">Mid-August</td>
                    <td className="px-5 py-4">Wait for this before lodging to avoid errors</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-300">Self-lodge deadline (myTax)</td>
                    <td className="px-5 py-4 text-violet-400">31 October</td>
                    <td className="px-5 py-4">Failure to lodge penalty applies if late</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-300">Register with tax agent by</td>
                    <td className="px-5 py-4 text-violet-400">31 October</td>
                    <td className="px-5 py-4">Must be registered to qualify for extended deadline</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-300">Tax agent lodgement deadline</td>
                    <td className="px-5 py-4 text-violet-400">15 May (next year)</td>
                    <td className="px-5 py-4">Some agents can extend further; confirm with yours</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-300">Claim last year&apos;s agent fee</td>
                    <td className="px-5 py-4 text-violet-400">In this year&apos;s return</td>
                    <td className="px-5 py-4">Deductible in the year paid, not the year it relates to</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Tax Agent Fees Are Deductible</h3>
            <p className="text-gray-300 leading-relaxed">
              This is one of the most overlooked deductions: the fee you pay your tax agent is fully <Link href="/glossary/tax-deduction" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">tax-deductible</Link> as a business expense. But &mdash; importantly &mdash; you claim the deduction in the <strong className="text-white">year you pay the fee</strong>, not the year the return relates to. So if you pay $400 to your accountant in August 2026 for preparing your 2025-26 tax return, you claim that $400 as a deduction in your 2026-27 return. Keep the invoice from your agent as your record.
            </p>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-5 mt-4">
              <p className="text-violet-400 font-medium mb-2">Year-Round Relationship, Not Just Annual</p>
              <p className="text-gray-400 text-sm">
                The most successful freelancers treat their tax agent as a year-round resource, not just a once-a-year lodgement service. Call them before making a significant asset purchase to optimise the timing and method of depreciation. Ask before restructuring your business. Consult them before you take on employees or contractors. A 15-minute phone call with your agent can save thousands in tax &mdash; and most agents include a reasonable amount of year-round advice in their annual fee or charge a modest hourly rate for queries.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Whether you lodge your own return via myTax or work with a registered tax agent, InvoiceFlow keeps your records organised year-round so that tax time is fast, accurate, and as inexpensive as possible. Organised clients pay their agents less &mdash; because agents charge for their time, and time spent untangling records is time you pay for.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  BAS-Ready Reports
                </h4>
                <p className="text-gray-400 text-sm">
                  InvoiceFlow automatically tracks <Link href="/glossary/gst" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">GST</Link> collected and paid on every transaction. Generating a BAS report takes seconds &mdash; hand it directly to your BAS agent or use it to self-lodge. No spreadsheet required.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                  Expense Categorisation
                </h4>
                <p className="text-gray-400 text-sm">
                  Expenses are tagged with ATO-recognised categories as you enter them. At year end, your <Link href="/glossary/tax-deduction" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">deductions</Link> are already sorted &mdash; your agent can enter them directly into your return without spending billable time reorganising a shoebox of receipts.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  Income Summaries
                </h4>
                <p className="text-gray-400 text-sm">
                  Generate a full financial year income summary showing total invoiced amounts, GST collected, payment status, and client breakdown. This is the primary document your tax agent needs to prepare your return.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  Export to Your Agent
                </h4>
                <p className="text-gray-400 text-sm">
                  Export a clean, formatted data package your tax agent can use directly &mdash; income summary, expense breakdown by category, and GST totals. Less time for them means lower fees for you.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  Year-Round Record Keeping
                </h4>
                <p className="text-gray-400 text-sm">
                  Capture receipts and log expenses throughout the year rather than scrambling at tax time. Organised records mean your agent spends time on strategy and advice &mdash; not data entry.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-violet-500/20 p-5">
                <h4 className="text-violet-400 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                  </svg>
                  Tax Estimator Integration
                </h4>
                <p className="text-gray-400 text-sm">
                  Estimate your annual tax liability any time during the year so you can set aside the right amount and avoid a surprise bill &mdash; reducing the chance of a stressful conversation with your agent about unpaid tax.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-6 mt-6">
              <p className="text-violet-400 font-medium mb-2">The Compounding Effect</p>
              <p className="text-gray-400 text-sm">
                Clients who use InvoiceFlow throughout the year report spending 60&ndash;80% less time on tax preparation. More importantly, their tax agents spend less billable time on their returns &mdash; which means lower fees, fewer back-and-forth queries, and faster lodgement. The savings on accountant fees over 3&ndash;5 years typically far exceed the cost of the software. And organised <Link href="/glossary/bookkeeping" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">bookkeeping</Link> makes your agent more effective at identifying the deductions that really matter.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you estimate your tax and prepare your records before meeting with your agent.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-violet-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, GST, and managing your finances as an Australian freelancer.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-violet-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Give Your Tax Agent Less Work &mdash; Pay Lower Fees
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow keeps your income, expenses, and GST organised year-round so your tax agent can focus on strategy, not data entry. Better records mean lower fees and better advice.
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
