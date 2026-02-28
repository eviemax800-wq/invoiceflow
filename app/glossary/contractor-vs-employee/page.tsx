import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Contractor vs Employee: Key Differences in Australia — InvoiceFlow',
  description:
    'What is the difference between a contractor and an employee in Australia? Learn the ATO multi-factor test, sham contracting penalties ($469,500 per contravention), tax obligations, super rules, and a practical checklist for freelancers. Updated for 2025-26.',
  keywords: [
    'contractor vs employee australia',
    'independent contractor test ATO',
    'sham contracting australia',
    'contractor or employee test',
    'employee vs contractor rights australia',
    'ABN contractor employee difference',
    'contractor vs employee tax australia',
    'subcontractor vs employee',
  ],
  alternates: { canonical: '/glossary/contractor-vs-employee' },
  openGraph: {
    title: 'Contractor vs Employee: Key Differences in Australia — InvoiceFlow',
    description:
      'The complete guide to contractor vs employee classification in Australia: ATO multi-factor test, sham contracting penalties, tax and super obligations, and a practical checklist for freelancers.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/contractor-vs-employee',
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
    { '@type': 'ListItem', position: 3, name: 'Contractor vs Employee', item: `${BASE_URL}/glossary/contractor-vs-employee` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a contractor and an employee in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The key difference is the degree of control and independence. An employee works under the direction and control of an employer, receives regular wages with tax withheld, and is entitled to leave, superannuation, and other benefits. A contractor operates their own business, controls how and when work is done, invoices for completed work, manages their own tax and super, bears commercial risk, and can delegate or subcontract tasks. The ATO uses a multi-factor test examining control, tools, financial risk, hours, payment method, delegation rights, and the intention of both parties to determine the correct classification.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is sham contracting and what are the penalties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sham contracting occurs when a business misrepresents an employment relationship as an independent contracting arrangement to avoid paying employee entitlements such as super, leave, and WorkCover. Under sections 357-359 of the Fair Work Act 2009, sham contracting is illegal. Penalties can reach $93,900 per contravention for an individual and $469,500 per contravention for a company (2025-26 penalty units). The worker is also entitled to back-payment of all entitlements they should have received as an employee, including superannuation with interest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do contractors need an ABN to invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, contractors in Australia need an Australian Business Number (ABN) to issue valid tax invoices. If a contractor does not provide their ABN on an invoice, the paying business is legally required to withhold 47% of the payment amount (the top marginal tax rate plus Medicare levy) and remit it to the ATO under the "no ABN withholding" rules. Getting an ABN is free and can be done online at abr.gov.au in about 10 minutes. It is one of the first steps any new contractor should take.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who pays superannuation for contractors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally, contractors are responsible for paying their own superannuation. However, under the Superannuation Guarantee (Administration) Act 1992, a business must pay the 11.5% super guarantee for a contractor if the contract is "wholly or principally for the labour of the person." This typically applies when the contractor is paid by the hour or day (not for a result), must perform the work personally, uses the client\'s tools, and works under the client\'s direction. True independent contractors who deliver a defined result using their own tools and methods must fund their own super contributions voluntarily.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the ATO determine if someone is a contractor or employee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO uses a multi-factor test that examines the totality of the working relationship, not just what the contract says. The seven key factors are: (1) Control over work — does the business direct how, when, and where work is done? (2) Delegation — can the worker subcontract or delegate tasks? (3) Basis of payment — is payment for hours/time or for a completed result? (4) Tools and equipment — does the worker supply their own? (5) Hours of work — does the worker set their own schedule? (6) Risk and liability — does the worker bear financial risk for defective work? (7) Intention of parties — what did both sides intend the relationship to be? No single factor is decisive; the ATO looks at the overall picture. The High Court of Australia confirmed this approach in its landmark 2022 decisions in CFMMEU v Personnel Contracting and ZG Operations v Jamsek.',
      },
    },
  ],
};

const tocItems = [
  { id: 'why-it-matters', label: '1. Contractor vs Employee: Why It Matters' },
  { id: 'ato-multi-factor-test', label: '2. The ATO\'s Multi-Factor Test' },
  { id: 'key-differences', label: '3. Key Differences at a Glance' },
  { id: 'sham-contracting', label: '4. Sham Contracting — Risks and Penalties' },
  { id: 'tax-and-super', label: '5. Tax and Super Obligations' },
  { id: 'checklist', label: '6. Getting It Right: Checklist for Freelancers' },
];

const relatedTools = [
  {
    href: '/tools/contractor-vs-employee-calculator',
    name: 'Contractor vs Employee Calculator',
    description: 'Answer a few questions to see whether a working arrangement is more likely contractor or employee.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-contract-generator',
    name: 'Contract Generator',
    description: 'Generate a professional contractor agreement that clearly defines the working relationship.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create ATO-compliant invoices with your ABN, GST, and proper contractor payment terms.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/super-calculator',
    name: 'Super Calculator',
    description: 'Calculate super obligations, tax savings, and projected retirement balance for contractors.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/abn-guide',
    name: 'ABN Guide',
    description: 'How to register for an ABN, when you need one, and how to use it on invoices as a contractor.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Income tax, deductions, BAS, PAYG instalments, and everything contractors need to know at tax time.',
  },
  {
    href: '/guides/superannuation-for-freelancers',
    name: 'Super Guide for Freelancers',
    description: 'How to pay yourself super as a contractor, contribution caps, tax benefits, and SG obligations.',
  },
];

export default function ContractorVsEmployeePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-red-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Contractor vs Employee</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Employment &amp; Classification
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Contractor vs Employee{' '}
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              in Australia
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Getting the contractor-vs-employee distinction wrong can cost you tens of thousands of dollars in penalties, back-pay, and lost entitlements. With over 1 million independent contractors operating in Australia, this is one of the most critical classifications in employment and tax law &mdash; and one of the most commonly misunderstood.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">7</span>
              <div>
                <p className="text-white font-medium text-sm">ATO Test Factors</p>
                <p className="text-gray-400 text-sm">The ATO examines 7 key factors to determine contractor vs employee status</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">$469K</span>
              <div>
                <p className="text-white font-medium text-sm">Max Penalty Per Contravention</p>
                <p className="text-gray-400 text-sm">Maximum sham contracting fine for a company under the Fair Work Act</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">11.5%</span>
              <div>
                <p className="text-white font-medium text-sm">SG Rate 2024-25</p>
                <p className="text-gray-400 text-sm">Super guarantee rate employers must pay, rising to 12% from 1 July 2025</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">47%</span>
              <div>
                <p className="text-white font-medium text-sm">No-ABN Withholding Rate</p>
                <p className="text-gray-400 text-sm">Tax withheld if a contractor fails to quote their ABN on an invoice</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-red-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: Why It Matters */}
        <section id="why-it-matters">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Contractor vs Employee: Why It Matters</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The distinction between a contractor and an employee is <strong className="text-white">one of the most consequential classifications in Australian employment and tax law</strong>. It determines who pays tax, who receives superannuation, who is entitled to leave and other benefits, who bears the risk of the work, and who is protected under workplace health and safety legislation. Getting it wrong &mdash; whether intentionally or through ignorance &mdash; can result in severe financial penalties, back-payment of entitlements, and even prosecution.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Under the <strong className="text-white">Fair Work Act 2009</strong>, employees are entitled to a comprehensive set of minimum conditions including the National Employment Standards (NES): annual leave, personal/carer&apos;s leave, public holidays, notice of termination, redundancy pay, and access to unfair dismissal protections. Contractors receive <strong className="text-white">none of these entitlements</strong>. They are governed instead by the terms of their contract and the <strong className="text-white">Independent Contractors Act 2006</strong>, which provides limited protections against unfair contract terms.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The ABS Labour Force Survey estimates that there are approximately <strong className="text-white">1.1 million independent contractors</strong> in Australia, representing around 8-9% of the total workforce. Many more workers sit in a grey zone where the correct classification is genuinely unclear. The rise of the gig economy, remote work, and platform-based services has made this distinction even more complex and contested.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, understanding this distinction is not just academic &mdash; it directly impacts your <strong className="text-white">tax obligations, super arrangements, insurance requirements, and legal rights</strong>. If you are classified as an employee but treated as a contractor, you may be missing out on significant entitlements. Conversely, if you are a genuine contractor, you need to manage your own tax, super, and insurance proactively.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  Consequences of Getting It Wrong
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Back-payment of all employee entitlements (leave, super, overtime)</li>
                  <li>Sham contracting fines up to $469,500 per contravention</li>
                  <li>Superannuation Guarantee Charge (SGC) with interest and penalties</li>
                  <li>WorkCover/workers&apos; compensation liability for injuries</li>
                  <li>PAYG withholding obligations and ATO penalties</li>
                  <li>Unfair dismissal claims from incorrectly classified workers</li>
                  <li>Reputational damage and Fair Work Ombudsman investigation</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Benefits of Correct Classification
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Clear tax obligations &mdash; no surprises at tax time</li>
                  <li>Proper super arrangements protecting your retirement</li>
                  <li>Correct insurance coverage for your situation</li>
                  <li>Legal protection under the right legislation</li>
                  <li>No risk of retrospective penalties or back-payments</li>
                  <li>Clean, professional relationships with clients</li>
                  <li>Peace of mind in case of ATO audit</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">High Court Shift: The Contract Is King (2022)</p>
              <p className="text-gray-400 text-sm">
                In two landmark 2022 decisions &mdash; <strong className="text-gray-200">CFMMEU v Personnel Contracting</strong> and <strong className="text-gray-200">ZG Operations v Jamsek</strong> &mdash; the High Court of Australia clarified that the <strong className="text-gray-200">terms of the written contract</strong> are the primary reference point for determining whether a worker is an employee or contractor, provided the contract is not a sham. This shifted focus from the &quot;practical reality&quot; of the relationship (how work was actually performed) back to the legal terms agreed between the parties. However, the ATO and Fair Work still examine the totality of the relationship, and sham contracting provisions remain fully enforceable where the contract does not reflect the true nature of the arrangement.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The ATO's Multi-Factor Test */}
        <section id="ato-multi-factor-test">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The ATO&apos;s Multi-Factor Test</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO does not use a single, definitive test to determine whether a worker is a contractor or an employee. Instead, it applies a <strong className="text-white">multi-factor test</strong> that examines seven key indicators of the working relationship. No single factor is decisive &mdash; the ATO looks at the <strong className="text-white">totality of the arrangement</strong> to determine the true nature of the relationship. Here is each factor explained, with what typically indicates employee vs contractor status.
            </p>

            {/* Factor Cards */}
            <div className="grid gap-4 mt-6">

              {/* Factor 1: Control */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">FACTOR 1</span>
                  <h3 className="text-lg font-semibold text-white">Control Over Work</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  This is often considered the most important factor. It examines the degree to which the business controls <strong className="text-gray-200">how</strong>, <strong className="text-gray-200">when</strong>, and <strong className="text-gray-200">where</strong> the work is performed.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-red-500/10">
                    <p className="text-red-400 text-xs font-semibold mb-2">EMPLOYEE</p>
                    <p className="text-gray-400 text-sm">The business directs how work is done, sets methods and procedures, supervises performance, and can change what the worker does at any time.</p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-emerald-500/10">
                    <p className="text-emerald-400 text-xs font-semibold mb-2">CONTRACTOR</p>
                    <p className="text-gray-400 text-sm">The worker determines how the work is completed. The client specifies the desired result, but the contractor decides the methods, processes, and approach.</p>
                  </div>
                </div>
              </div>

              {/* Factor 2: Delegation */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">FACTOR 2</span>
                  <h3 className="text-lg font-semibold text-white">Delegation &amp; Subcontracting</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Can the worker send someone else to do the work in their place? The ability to delegate or subcontract is a strong indicator of a contracting arrangement.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-red-500/10">
                    <p className="text-red-400 text-xs font-semibold mb-2">EMPLOYEE</p>
                    <p className="text-gray-400 text-sm">Must perform the work personally. Cannot send a substitute or hire their own helpers without the employer&apos;s express permission.</p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-emerald-500/10">
                    <p className="text-emerald-400 text-xs font-semibold mb-2">CONTRACTOR</p>
                    <p className="text-gray-400 text-sm">Free to delegate, subcontract, or hire employees to complete the work. The client contracts for a result, not for the individual&apos;s personal labour.</p>
                  </div>
                </div>
              </div>

              {/* Factor 3: Basis of Payment */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">FACTOR 3</span>
                  <h3 className="text-lg font-semibold text-white">Basis of Payment</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  How is the worker paid? The payment structure reveals a great deal about whether the relationship is one of employment or independent contracting.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-red-500/10">
                    <p className="text-red-400 text-xs font-semibold mb-2">EMPLOYEE</p>
                    <p className="text-gray-400 text-sm">Paid a regular wage or salary (hourly, weekly, fortnightly). Payment is for time worked, not for a specific result. Receives payslips with tax withheld.</p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-emerald-500/10">
                    <p className="text-emerald-400 text-xs font-semibold mb-2">CONTRACTOR</p>
                    <p className="text-gray-400 text-sm">Paid per project, per deliverable, or on a quoted fixed price. Submits invoices for completed work. No tax withheld &mdash; manages own PAYG instalments.</p>
                  </div>
                </div>
              </div>

              {/* Factor 4: Tools & Equipment */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">FACTOR 4</span>
                  <h3 className="text-lg font-semibold text-white">Tools &amp; Equipment</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Who provides the tools, equipment, software, and materials needed to complete the work? This is a practical indicator of who bears the cost of doing business.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-red-500/10">
                    <p className="text-red-400 text-xs font-semibold mb-2">EMPLOYEE</p>
                    <p className="text-gray-400 text-sm">The employer provides all necessary tools, equipment, software licences, materials, and workspace. The worker brings little more than their personal skills.</p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-emerald-500/10">
                    <p className="text-emerald-400 text-xs font-semibold mb-2">CONTRACTOR</p>
                    <p className="text-gray-400 text-sm">Provides their own tools, equipment, software, and materials at their own expense. May have significant capital investment in business assets.</p>
                  </div>
                </div>
              </div>

              {/* Factor 5: Hours of Work */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">FACTOR 5</span>
                  <h3 className="text-lg font-semibold text-white">Hours of Work</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Who determines when work is performed? The degree of flexibility over working hours is a strong signal of the true nature of the arrangement.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-red-500/10">
                    <p className="text-red-400 text-xs font-semibold mb-2">EMPLOYEE</p>
                    <p className="text-gray-400 text-sm">Works set hours determined by the employer (e.g., 9am-5pm, Monday to Friday). Must seek approval for changes to their schedule. May be required to work overtime.</p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-emerald-500/10">
                    <p className="text-emerald-400 text-xs font-semibold mb-2">CONTRACTOR</p>
                    <p className="text-gray-400 text-sm">Sets their own hours and schedule. May work nights, weekends, or irregular hours at their own discretion. Only bound by deadlines, not by a fixed schedule.</p>
                  </div>
                </div>
              </div>

              {/* Factor 6: Risk & Liability */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">FACTOR 6</span>
                  <h3 className="text-lg font-semibold text-white">Risk &amp; Liability</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Who bears the financial risk if something goes wrong? Commercial risk is a key differentiator between employment and genuine contracting arrangements.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-red-500/10">
                    <p className="text-red-400 text-xs font-semibold mb-2">EMPLOYEE</p>
                    <p className="text-gray-400 text-sm">Bears no financial risk. Gets paid regardless of the business outcome. The employer bears the cost of defective work, rework, and warranty claims. Covered by WorkCover.</p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-emerald-500/10">
                    <p className="text-emerald-400 text-xs font-semibold mb-2">CONTRACTOR</p>
                    <p className="text-gray-400 text-sm">Bears commercial risk for their own work. Must rectify defective work at their own expense. Carries their own insurance (PI, public liability). Can make a profit or a loss on any given project.</p>
                  </div>
                </div>
              </div>

              {/* Factor 7: Intention of Parties */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">FACTOR 7</span>
                  <h3 className="text-lg font-semibold text-white">Intention of the Parties</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  What did both parties intend the relationship to be? While not conclusive on its own, the documented intention adds weight to the overall assessment.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-red-500/10">
                    <p className="text-red-400 text-xs font-semibold mb-2">EMPLOYEE</p>
                    <p className="text-gray-400 text-sm">The arrangement looks and feels like employment. The worker is integrated into the business, has a company email, appears on the org chart, and is treated as part of the team.</p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-3 border border-emerald-500/10">
                    <p className="text-emerald-400 text-xs font-semibold mb-2">CONTRACTOR</p>
                    <p className="text-gray-400 text-sm">Both parties signed a written contractor agreement. The contractor has their own ABN, invoices for work, is not on the payroll, and operates independently of the client&apos;s internal team structure.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">No Single Factor Is Decisive</p>
              <p className="text-gray-400 text-sm">
                The ATO looks at the <strong className="text-gray-200">overall picture</strong>, not any single indicator. A worker could have their own ABN and submit invoices (contractor indicators) but still be classified as an employee if the other factors &mdash; control, tools, hours, risk &mdash; point toward employment. The label the parties give the relationship is less important than the <strong className="text-gray-200">substance of how it actually works in practice</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Key Differences at a Glance */}
        <section id="key-differences">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Key Differences at a Glance</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              This comprehensive comparison table summarises the key practical differences between employees and contractors across 14 categories. Use it as a quick reference to understand how each classification affects tax, super, leave, insurance, and day-to-day operations.
            </p>

            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 min-w-[160px]">Category</th>
                      <th className="text-left text-sm font-medium text-red-400 px-6 py-4 min-w-[200px]">Employee</th>
                      <th className="text-left text-sm font-medium text-emerald-400 px-6 py-4 min-w-[200px]">Contractor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Income Tax</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Employer withholds PAYG from each pay</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Manages own tax; lodges BAS and pays PAYG instalments quarterly</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Superannuation</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Employer pays 11.5% SG (12% from 1 July 2025)</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Pays own super voluntarily (unless contract is &quot;wholly or principally for labour&quot;)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Annual Leave</td>
                      <td className="px-6 py-4 text-sm text-gray-400">4 weeks paid annual leave per year (NES)</td>
                      <td className="px-6 py-4 text-sm text-gray-400">No paid leave; must fund own time off by building it into rates</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Sick / Personal Leave</td>
                      <td className="px-6 py-4 text-sm text-gray-400">10 days paid personal/carer&apos;s leave per year</td>
                      <td className="px-6 py-4 text-sm text-gray-400">No paid sick leave; no income when unable to work (unless income protection insured)</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">WorkCover</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Covered by employer&apos;s workers&apos; compensation insurance</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Must arrange own personal accident and illness insurance</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">GST</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Not applicable; employees do not charge GST</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Must register for GST if turnover exceeds $75K; charges 10% GST on invoices</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">ABN</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Not required; uses TFN for tax purposes</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Required; must quote ABN on invoices or 47% is withheld</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Invoicing</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Receives payslips from employer; no invoicing</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Submits invoices for work completed; sets own payment terms</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Payment Structure</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Regular salary/wages (hourly, weekly, fortnightly)</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Per project, milestone, or quoted price; irregular payment schedule</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Direction / Control</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Employer directs how, when, and where work is done</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Controls own methods; client specifies the result, not the process</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Tools &amp; Equipment</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Provided by employer at employer&apos;s expense</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Provides own tools, software, and equipment at own cost</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Insurance</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Covered by employer&apos;s insurance policies</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Must carry own PI, public liability, and other business insurance</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Termination</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Notice period required; unfair dismissal protections apply</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Contract terms govern; no unfair dismissal protection; may have early termination clauses</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium text-sm">Tax Deductions</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Limited work-related deductions (uniforms, travel, WFH)</td>
                      <td className="px-6 py-4 text-sm text-gray-400">Full business deductions: equipment, software, home office, travel, insurance, super, marketing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Key Takeaway</p>
              <p className="text-gray-400 text-sm">
                Contractors have <strong className="text-gray-200">more flexibility and more deductions</strong>, but they also bear <strong className="text-gray-200">more risk and more administrative burden</strong>. There is no safety net of paid leave, employer super, or workers&apos; compensation. The trade-off is freedom and potentially higher income &mdash; but only if you manage your obligations correctly and price your services to account for the benefits you&apos;re forgoing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Sham Contracting */}
        <section id="sham-contracting">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Sham Contracting &mdash; Risks and Penalties</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Sham contracting</strong> occurs when a business deliberately misrepresents what is actually an employment relationship as an independent contracting arrangement. The purpose is typically to avoid paying employee entitlements &mdash; superannuation, leave, workers&apos; compensation, and other benefits &mdash; thereby reducing labour costs at the worker&apos;s expense.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Under <strong className="text-white">sections 357-359 of the Fair Work Act 2009</strong>, sham contracting is illegal in Australia. There are three specific prohibitions:
            </p>

            <div className="space-y-3 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-white font-semibold mb-2">Section 357 &mdash; Misrepresenting Employment</h4>
                <p className="text-gray-400 text-sm">An employer must not represent to an employee that their contract of employment is a contract for services (i.e., an independent contracting arrangement). This applies even if the employer genuinely believes the arrangement is one of independent contracting, unless they can prove they did not know and were not reckless about whether the contract was actually one of employment.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-white font-semibold mb-2">Section 358 &mdash; Dismissal to Re-Engage as Contractor</h4>
                <p className="text-gray-400 text-sm">An employer must not dismiss or threaten to dismiss an employee in order to re-engage them as an independent contractor to perform the same (or substantially the same) work. This prevents businesses from converting existing employees into contractors to cut costs.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-white font-semibold mb-2">Section 359 &mdash; Misrepresentation to Avoid Obligations</h4>
                <p className="text-gray-400 text-sm">An employer must not make a false statement to an employee about the nature of their employment relationship in order to persuade or influence them to enter into a contract for services instead of an employment contract.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 p-6 mt-6">
              <h4 className="text-red-400 font-bold mb-4">Penalties for Sham Contracting (2025-26)</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-900/50 p-4 border border-red-500/10">
                  <p className="text-red-400 text-2xl font-bold mb-1">$93,900</p>
                  <p className="text-gray-400 text-sm">Maximum penalty per contravention for an <strong className="text-gray-200">individual</strong></p>
                </div>
                <div className="rounded-xl bg-gray-900/50 p-4 border border-red-500/10">
                  <p className="text-red-400 text-2xl font-bold mb-1">$469,500</p>
                  <p className="text-gray-400 text-sm">Maximum penalty per contravention for a <strong className="text-gray-200">company</strong> (body corporate)</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                These penalties are <strong className="text-gray-200">per contravention</strong>, meaning a business with multiple sham-contracted workers could face penalties running into the millions. The Fair Work Ombudsman (FWO) actively investigates sham contracting, and penalties are in addition to back-payment of all employee entitlements the worker should have received.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Recent Case Law</h3>
            <div className="space-y-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-sm flex-shrink-0 mt-0.5">CASE</span>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Fair Work Ombudsman v Quest South Perth Holdings (2015)</p>
                    <p className="text-gray-400 text-sm">Quest was found to have engaged in sham contracting by engaging housekeepers as independent contractors when they were in substance employees. The company was required to back-pay entitlements and was penalised. This case highlighted that the practical reality of the arrangement, not just the contract label, determines the true relationship.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-sm flex-shrink-0 mt-0.5">CASE</span>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">CFMMEU v Personnel Contracting (2022) &mdash; High Court</p>
                    <p className="text-gray-400 text-sm">The High Court found that a backpacker supplied by a labour hire company was an employee, not an independent contractor. The court emphasised the terms of the contract as the starting point, but noted that where those terms grant the principal comprehensive control over the worker, the relationship is one of employment regardless of the &quot;contractor&quot; label.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-sm flex-shrink-0 mt-0.5">CASE</span>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">FWO v Hu (2024) &mdash; Federal Circuit Court</p>
                    <p className="text-gray-400 text-sm">A restaurant operator was penalised over $100,000 for engaging kitchen staff as independent contractors when they were employees in substance. The workers had no ABN, no insurance, used the employer&apos;s equipment, worked set rosters, and had no ability to delegate. This case demonstrated that the FWO continues to actively pursue sham contracting in industries where it is prevalent.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">How to Protect Yourself as a Contractor</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Always have a <strong className="text-gray-200">written contractor agreement</strong> that clearly defines the relationship</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Keep records of <strong className="text-gray-200">how you control your own work</strong> &mdash; your methods, your schedule, your tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Work for <strong className="text-gray-200">multiple clients</strong> &mdash; sole-client dependency looks like employment</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>If in doubt, use the ATO&apos;s free <strong className="text-gray-200">Employee/Contractor Decision Tool</strong> at ato.gov.au</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Seek professional advice if a client wants to convert you from employee to contractor</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Tax and Super Obligations */}
        <section id="tax-and-super">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax and Super Obligations</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              One of the biggest practical differences between employees and contractors is <strong className="text-white">who manages tax and super</strong>. Employees have most of this handled for them by their employer. Contractors must take full responsibility for their own tax and super compliance. Here is a side-by-side breakdown.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {/* Employee Tax */}
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6">
                <h4 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  Employee Tax Obligations
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold text-xs flex-shrink-0 mt-1">PAYG</span>
                    <span>Employer withholds PAYG tax from each pay and remits it to the ATO. The employee sees net pay after tax on their payslip.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold text-xs flex-shrink-0 mt-1">SUPER</span>
                    <span>Employer pays super guarantee of 11.5% (rising to 12% from 1 July 2025) on top of ordinary time earnings into the employee&apos;s nominated super fund.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold text-xs flex-shrink-0 mt-1">RETURN</span>
                    <span>Lodges an individual tax return annually. Income and tax withheld are pre-filled from employer&apos;s Single Touch Payroll (STP) data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold text-xs flex-shrink-0 mt-1">GST</span>
                    <span>Not applicable. Employees are not registered for GST and do not charge it.</span>
                  </li>
                </ul>
              </div>

              {/* Contractor Tax */}
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6">
                <h4 className="text-emerald-400 font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  Contractor Tax Obligations
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold text-xs flex-shrink-0 mt-1">PAYG</span>
                    <span>No tax withheld from payments. Must pay <strong className="text-gray-200">PAYG instalments quarterly</strong> based on estimated annual income. Can be calculated using the instalment rate method or the instalment amount method.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold text-xs flex-shrink-0 mt-1">SUPER</span>
                    <span>Pays own super voluntarily. Can claim a full tax deduction for concessional contributions up to $30,000/year. Must lodge a &quot;Notice of Intent to Claim&quot; form with their super fund.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold text-xs flex-shrink-0 mt-1">BAS</span>
                    <span>Lodges a Business Activity Statement (BAS) quarterly (or monthly if turnover exceeds $20M). Reports GST collected and paid, and PAYG instalment amounts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold text-xs flex-shrink-0 mt-1">GST</span>
                    <span>Must register for GST if annual turnover exceeds $75,000. Charges 10% GST on invoices, claims input tax credits on business expenses, and remits the net GST to the ATO via BAS.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* No-ABN Withholding Rule */}
            <div className="rounded-2xl bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 p-6 mt-6">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                The 47% No-ABN Withholding Rule
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                If a contractor does not quote their ABN on an invoice, the paying business is legally required to <strong className="text-gray-200">withhold 47% of the total payment</strong> (the top marginal tax rate of 45% plus the 2% Medicare levy) and remit it to the ATO. This rule exists to prevent workers from avoiding tax obligations by operating without an ABN. The withheld amount is credited against the contractor&apos;s tax liability when they lodge their tax return, but it means significantly reduced cash flow in the meantime.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                <strong className="text-gray-200">Bottom line:</strong> Always ensure your ABN is prominently displayed on every invoice. It takes 10 minutes to register for one at abr.gov.au, and it is completely free. There is no reason for any legitimate contractor to operate without an ABN.
              </p>
            </div>

            {/* Super for Contractor Payments */}
            <h3 className="text-lg font-semibold text-white mt-8 mb-3">When Must a Client Pay Your Super?</h3>
            <p className="text-gray-300 leading-relaxed">
              Under the <strong className="text-white">Superannuation Guarantee (Administration) Act 1992</strong>, a business must pay the super guarantee for a contractor if the contract is <strong className="text-white">&quot;wholly or principally for the labour of the person.&quot;</strong> The SG rate is 11.5% for 2024-25 (rising to 12% from 1 July 2025). This typically applies when:
            </p>
            <ul className="space-y-2 text-gray-400 ml-4 mt-3">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>The contractor is paid for their <strong className="text-white">time</strong> (hourly or daily rate), not for a specific result</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>The contractor must <strong className="text-white">perform the work personally</strong> (cannot delegate or subcontract)</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>The contractor uses the <strong className="text-white">client&apos;s tools and equipment</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>The contractor works under the <strong className="text-white">client&apos;s direction</strong> on-site</span>
              </li>
            </ul>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Practical Example</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="text-sm text-gray-400">
                  <p className="text-red-400 font-medium text-xs mb-2">SG APPLIES</p>
                  <p>A freelance developer is hired at $120/hour to work on-site at a client&apos;s office, using the client&apos;s laptop, working 9-5 Monday to Friday, and cannot subcontract the work. The client must pay 11.5% super on top of the hourly rate.</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="text-emerald-400 font-medium text-xs mb-2">SG DOES NOT APPLY</p>
                  <p>A freelance designer quotes $8,000 to redesign a website. They work from home, use their own Figma and Adobe licences, set their own hours, and deliver final files by an agreed deadline. No super obligation for the client.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Checklist for Freelancers */}
        <section id="checklist">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Getting It Right: Checklist for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              If you want to ensure your working arrangements are clearly those of an independent contractor &mdash; not an employee &mdash; use this practical checklist. The more items you can tick, the stronger your position as a genuine contractor in the eyes of the ATO and Fair Work.
            </p>

            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">1. Have a Written Contractor Agreement</p>
                  <p className="text-gray-400 text-sm mt-1">Every engagement should have a signed contract that explicitly defines the relationship as one of independent contracting. The contract should specify the scope of work, deliverables, payment terms, IP ownership, confidentiality, and termination clauses. It should clearly state that the contractor is responsible for their own tax, super, and insurance.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">2. Register and Use Your Own ABN</p>
                  <p className="text-gray-400 text-sm mt-1">An ABN is a fundamental identifier of a business entity. Register at abr.gov.au (free, takes 10 minutes) and quote your ABN on every invoice. Without it, clients must withhold 47% of your payment. Your ABN confirms you are operating as a business, not as an employee.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">3. Invoice for All Work</p>
                  <p className="text-gray-400 text-sm mt-1">Submit professional invoices for every payment, not timesheets. Your invoices should include your ABN, the client&apos;s details, a description of the work or deliverable, the agreed price, GST if applicable, and your payment terms. Using invoicing software like InvoiceFlow ensures ATO compliance and a professional presentation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">4. Use Your Own Tools and Equipment</p>
                  <p className="text-gray-400 text-sm mt-1">Provide your own laptop, software licences, phone, and other tools needed to complete the work. Using the client&apos;s equipment is a strong indicator of employment. If you need access to a client&apos;s system (e.g., their codebase or CMS), that is acceptable, but the tools you use to do the work should be your own.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">5. Set Your Own Hours and Work Location</p>
                  <p className="text-gray-400 text-sm mt-1">Choose when and where you work. If the client dictates that you must be at their office from 9am to 5pm every day, this looks like employment. Working from your own home office or co-working space, at hours that suit you, is a key contractor indicator. Meet deadlines, but control your own schedule.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">6. Work for Multiple Clients</p>
                  <p className="text-gray-400 text-sm mt-1">Having multiple clients is one of the strongest indicators that you are genuinely running a business, not disguised employment. If 100% of your income comes from a single client, the ATO is more likely to question the arrangement. Even having two or three clients significantly strengthens your contractor classification.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">7. Carry Your Own Business Insurance</p>
                  <p className="text-gray-400 text-sm mt-1">Maintain professional indemnity insurance, public liability insurance, and any other cover relevant to your profession. This demonstrates that you are operating as an independent business entity that bears its own commercial risk, not an employee sheltered by the employer&apos;s insurance.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">8. Manage Your Own Superannuation</p>
                  <p className="text-gray-400 text-sm mt-1">As a genuine contractor, you are responsible for your own retirement savings. Make voluntary super contributions, claim the tax deduction, and build your retirement fund independently. Aiming for 10-15% of your income mirrors the employer SG rate and ensures you are not falling behind.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">9. Maintain the Right to Delegate</p>
                  <p className="text-gray-400 text-sm mt-1">Your contract should allow you to subcontract or delegate work to others. Even if you rarely exercise this right, having it in your agreement demonstrates that the client is contracting for a result, not for your personal labour. This is one of the most powerful indicators of a genuine contracting arrangement.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">10. Keep Detailed Records</p>
                  <p className="text-gray-400 text-sm mt-1">Maintain records of all contracts, invoices, correspondence, scope documents, and deliverable sign-offs. In the event of an ATO audit or a dispute about your classification, these records provide evidence of the true nature of the relationship. Good record-keeping is your best defence.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">When in Doubt</p>
              <p className="text-gray-400 text-sm">
                If you are uncertain about your classification, use the ATO&apos;s free <strong className="text-gray-200">Employee/Contractor Decision Tool</strong> at ato.gov.au. It walks you through the key factors and provides a non-binding indication of the likely classification. For legally binding advice, consult an employment lawyer or tax accountant who specialises in contractor arrangements. The cost of a one-hour consultation ($300-$500) is trivial compared to the potential penalties and back-payments if you get it wrong.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you operate as a compliant, professional contractor.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-red-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-red-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-red-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on ABN registration, tax, and super for Australian contractors.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-red-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-red-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-red-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Operate Like a Pro Contractor
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian contractors create compliant invoices, track income, and manage tax obligations &mdash; so you can focus on delivering great work instead of worrying about classification risks. Start for free &mdash; no accountant required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/contractor-vs-employee-calculator">
              <Button variant="secondary">Try the Classification Tool</Button>
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
