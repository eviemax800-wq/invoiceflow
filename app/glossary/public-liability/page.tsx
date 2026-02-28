import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Public Liability Insurance: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
  description:
    'What is public liability insurance? Learn about PLI costs ($200-$800/yr), what it covers, who needs it, and how Australian freelancers and sole traders can get the right cover. Includes cost comparison table and PI vs PLI breakdown.',
  keywords: [
    'public liability insurance freelancer australia',
    'public liability insurance sole trader',
    'PLI cost australia',
    'do freelancers need public liability insurance',
    'public liability insurance quote',
    'public liability vs professional indemnity',
    'public liability insurance online',
    'freelancer insurance australia',
    'public liability cover amount',
    'PLI tax deductible australia',
    'public liability insurance $10m',
    'public liability insurance $20m',
  ],
  alternates: { canonical: '/glossary/public-liability' },
  openGraph: {
    title: 'Public Liability Insurance: Complete Guide for Australian Freelancers & Sole Traders — InvoiceFlow',
    description:
      'Everything self-employed Australians need to know about public liability insurance: typical costs $200-$800/yr, what it covers, who needs it, PLI vs PI comparison, and how to choose the right cover amount.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/public-liability',
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
    { '@type': 'ListItem', position: 3, name: 'Public Liability Insurance', item: `${BASE_URL}/glossary/public-liability` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do freelancers need public liability insurance in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Public liability insurance is not legally mandatory for all freelancers in Australia, but it is highly recommended — and in many cases effectively required. Freelancers who visit client sites, interact with the public, or work at events should carry PLI. Many client contracts, commercial leases, and government tenders require proof of public liability cover (typically $10M or $20M) before you can start work. Trades such as electricians, plumbers, and builders are legally required to hold PLI in most states. Even if your profession does not legally mandate it, a single claim for bodily injury or property damage could bankrupt an uninsured sole trader.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does public liability insurance cost for freelancers in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Public liability insurance typically costs Australian freelancers between $200 and $800 per year, depending on your profession, revenue, cover amount, and claims history. Low-risk freelancers like graphic designers or copywriters who rarely visit client sites may pay as little as $200-$350 per year for $10M cover. Higher-risk professions like personal trainers, event photographers, or consultants who regularly work on client premises typically pay $400-$800 per year. Trades and construction professionals pay more due to higher risk. The premium is 100% tax deductible as a business expense.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between public liability and professional indemnity insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Public liability insurance covers claims for bodily injury or property damage caused by your business activities — for example, a client trips over your equipment, you accidentally damage their office furniture, or someone is injured at an event you are working. Professional indemnity (PI) insurance covers claims arising from errors, omissions, or negligence in your professional advice or work — for example, a coding error causes a client financial loss, or incorrect financial advice leads to damages. PLI covers physical harm and property damage; PI covers pure economic loss from professional mistakes. Most freelancers who provide professional services AND visit client sites need both.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much public liability cover do I need as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Australian freelancers should carry a minimum of $10 million in public liability cover, which is the standard amount requested by most commercial clients and contracts. Government contracts and large corporate clients often require $20 million. Commercial leases for office or co-working space typically require $10M to $20M. The cost difference between $10M and $20M cover is usually only $50-$150 per year, so many freelancers opt for $20M to meet the broadest range of client requirements. Cover amounts of $5M are available but may limit which contracts you can accept.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim public liability insurance as a tax deduction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, public liability insurance premiums are 100% tax deductible as a business expense for Australian sole traders and freelancers. You claim the deduction in your individual tax return under business expenses. If you are registered for GST, you can also claim the GST component as an input tax credit on your BAS. Keep your premium notice, certificate of currency, and payment receipt as evidence for ATO audit purposes. At a marginal tax rate of 32.5%, a $500 PLI premium effectively costs you only $337.50 after the tax deduction.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-public-liability', label: '1. What Is Public Liability Insurance?' },
  { id: 'do-freelancers-need-pli', label: '2. Do Freelancers Need PLI?' },
  { id: 'what-does-pli-cover', label: '3. What Does PLI Cover?' },
  { id: 'how-much-does-pli-cost', label: '4. How Much Does PLI Cost?' },
  { id: 'pli-vs-pi', label: '5. Public Liability vs Professional Indemnity' },
  { id: 'pli-with-invoiceflow', label: '6. Managing PLI with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/freelance-contract-generator',
    name: 'Contract Generator',
    description: 'Create contracts with insurance requirement clauses for your clients.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/client-red-flag-checker',
    name: 'Client Red Flag Checker',
    description: 'Identify clients who require PLI before you start work.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
  },
  {
    href: '/tools/client-onboarding-checklist',
    name: 'Client Onboarding Checklist',
    description: 'Ensure insurance certificates are collected during onboarding.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-business-scorecard',
    name: 'Business Scorecard',
    description: 'Assess your overall business protection including insurance coverage.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Professional invoicing practices that complement your insurance documentation.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'Factor insurance costs into your pricing to protect profitability.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'How to attach certificates of currency and insurance details to invoices.',
  },
];

export default function PublicLiabilityGlossaryPage() {
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
            <span className="text-white">Public Liability Insurance</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Protection
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Public Liability Insurance{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Public liability insurance protects freelancers and sole traders against claims for bodily injury or property damage caused by your business activities. This guide covers what it is, who needs it, how much it costs in Australia, and how it differs from professional indemnity insurance.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Cost Comparison Table</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$200</span>
              <div>
                <p className="text-white font-medium text-sm">Starting From</p>
                <p className="text-gray-400 text-sm">Low-risk freelancers can get $10M PLI cover from around $200 per year</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$10M</span>
              <div>
                <p className="text-white font-medium text-sm">Standard Cover</p>
                <p className="text-gray-400 text-sm">Most commercial clients and contracts require minimum $10M public liability cover</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">100%</span>
              <div>
                <p className="text-white font-medium text-sm">Tax Deductible</p>
                <p className="text-gray-400 text-sm">PLI premiums are fully deductible as a business expense for sole traders and freelancers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-orange-400 text-xs font-bold">PLI</span>
              <div>
                <p className="text-white font-medium text-sm">Not the Same as PI</p>
                <p className="text-gray-400 text-sm">PLI covers physical harm and property damage &mdash; PI covers errors in professional work</p>
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

        {/* Section 1: What Is Public Liability Insurance? */}
        <section id="what-is-public-liability">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Public Liability Insurance?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Public liability insurance (PLI) is a type of business insurance that covers you against <strong className="text-white">claims made by third parties for bodily injury or property damage</strong> caused by your business activities. If someone is hurt, or their property is damaged, as a result of something you did (or failed to do) while conducting your business, PLI covers the legal costs, compensation payouts, and settlement amounts.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In Australia, public liability insurance is one of the most common types of business insurance. It is designed to protect you from the financial consequences of accidents that happen <strong className="text-white">in connection with your work</strong> &mdash; whether at a client&apos;s office, a co-working space, an event venue, or even in your own home office if a client visits. The &quot;public&quot; in public liability refers to any third party: clients, their employees, visitors, bystanders, or members of the general public.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">What PLI Covers at a Glance</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Third-Party Bodily Injury</h4>
                <p className="text-gray-400 text-sm">Someone is physically injured as a result of your business activities. A client trips over your equipment cable, a visitor slips on a wet floor at your premises, or a bystander is hurt at an event you are working.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-orange-400 font-medium mb-2">Third-Party Property Damage</h4>
                <p className="text-gray-400 text-sm">You accidentally damage someone else&apos;s property while working. You spill coffee on a client&apos;s laptop, your equipment scratches their floor, or you accidentally break a piece of furniture during a photoshoot.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Legal Defence Costs</h4>
                <p className="text-gray-400 text-sm">If a claim goes to court, PLI covers your legal fees, solicitor costs, and court expenses &mdash; even if the claim is ultimately found to be without merit. Legal defence alone can cost $50,000 to $200,000 or more.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-orange-400 font-medium mb-2">Compensation and Settlements</h4>
                <p className="text-gray-400 text-sm">If you are found liable, PLI pays the compensation awarded to the injured party or the cost of repairing/replacing damaged property, up to your cover limit.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">How PLI Differs from Other Insurance Types</h3>
            <p className="text-gray-300 leading-relaxed">
              Public liability is often confused with other types of business insurance. Here is the key distinction: <strong className="text-white">PLI covers physical harm and property damage caused by your business activities.</strong> It does not cover errors in your professional advice (that is professional indemnity), injuries to your own employees (that is workers&apos; compensation), or damage to your own equipment (that is business property insurance). Each insurance type covers a different category of risk.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Australian Context</p>
              <p className="text-gray-400 text-sm">
                In Australia, public liability insurance is regulated at the state level, and the rules vary slightly between states and territories. However, the core product is consistent nationally. PLI policies in Australia are typically offered with cover limits of <strong className="text-gray-200">$5 million, $10 million, or $20 million</strong> &mdash; with $10M and $20M being the most common requirements for commercial contracts. The Australian Financial Complaints Authority (AFCA) handles disputes between policyholders and insurers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Do Freelancers Need Public Liability Insurance? */}
        <section id="do-freelancers-need-pli">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Do Freelancers Need Public Liability Insurance?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The short answer: <strong className="text-white">if there is any chance your work could cause physical injury or property damage to a third party, you need PLI.</strong> For some freelancers it is legally mandatory. For many others, it is effectively required by clients, contracts, or leases. And for almost everyone, it is a sensible business protection at $200&ndash;$800 per year.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Professions That MUST Have PLI</h3>
            <p className="text-gray-300 leading-relaxed">
              Certain professions and situations make public liability insurance non-negotiable:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3">Legally Required</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Tradies and builders</strong> &mdash; electricians, plumbers, carpenters, and other licensed trades are required by state building regulations</li>
                  <li><strong className="text-gray-200">Personal trainers and fitness instructors</strong> &mdash; required by Fitness Australia registration and most gym/venue agreements</li>
                  <li><strong className="text-gray-200">Events professionals</strong> &mdash; venue hire agreements almost universally require PLI</li>
                  <li><strong className="text-gray-200">Childcare and education providers</strong> &mdash; required under state licensing regulations</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-orange-500/20 p-5">
                <h4 className="text-orange-400 font-semibold mb-3">Effectively Required</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Photographers at events</strong> &mdash; venue and client contracts require PLI as a condition of working on-site</li>
                  <li><strong className="text-gray-200">Consultants visiting client offices</strong> &mdash; most enterprise and government clients require PLI for anyone entering their premises</li>
                  <li><strong className="text-gray-200">Freelancers with a commercial lease</strong> &mdash; landlords require $10M&ndash;$20M PLI as a lease condition</li>
                  <li><strong className="text-gray-200">Government contract holders</strong> &mdash; almost all government tenders require proof of PLI</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">When PLI Is Recommended but Optional</h3>
            <p className="text-gray-300 leading-relaxed">
              Even if your profession does not legally mandate PLI, you should still seriously consider it if you:
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mt-3">
              <li>Visit client offices, even occasionally &mdash; you could trip, damage equipment, or cause an accident</li>
              <li>Have clients or suppliers visit your home office or studio</li>
              <li>Work at markets, pop-up events, or public spaces</li>
              <li>Use equipment that could injure someone or damage property (cameras, lighting, tools)</li>
              <li>Want to pitch for corporate or government contracts in the future</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">When You Might Not Need PLI</h3>
            <p className="text-gray-300 leading-relaxed">
              A small number of freelancers may reasonably operate without PLI &mdash; specifically those who <strong className="text-white">work exclusively from home, never visit client premises, never have visitors, and provide purely digital services</strong> with no physical interaction. A remote copywriter or a software developer who never meets clients in person has very low PLI risk. However, even in these cases, a $200/year policy provides peace of mind, and clients increasingly ask for certificates of currency as standard practice.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Client Contracts That Require PLI</p>
              <p className="text-gray-400 text-sm">
                Many freelancers discover they need PLI when they land a larger client. <strong className="text-gray-200">Corporate procurement departments, government agencies, and property managers</strong> routinely require proof of public liability insurance (a &quot;certificate of currency&quot;) before you can start work or access their premises. If you do not have PLI, you cannot accept these contracts. Getting covered takes 24&ndash;48 hours through most online insurers, so do not wait until you need it urgently.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: What Does Public Liability Insurance Cover? */}
        <section id="what-does-pli-cover">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Does Public Liability Insurance Cover?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Public liability insurance covers a broad range of scenarios where your business activities cause physical harm to a person or damage to their property. Here are the most common claims for Australian freelancers and sole traders:
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Common Claim Scenarios</h3>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Slip-and-Fall at Client Premises</p>
                  <p className="text-gray-400 text-sm">A client or visitor trips over your laptop bag, equipment cable, or other belongings at a client&apos;s office. Medical bills and potential lost income claims can easily reach $50,000&ndash;$200,000.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Damage to Client Property</p>
                  <p className="text-gray-400 text-sm">You accidentally damage a client&apos;s property while working on-site &mdash; spilling liquid on their server equipment, scratching expensive flooring with your gear, or knocking over a display. This is the most common PLI claim for contractors in Australia.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Product-Related Injuries</p>
                  <p className="text-gray-400 text-sm">If you sell physical products (prints, handmade goods, merchandise), PLI covers claims where your product causes injury &mdash; for example, a faulty product causes harm, or packaging materials injure a customer.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Advertising Injury</p>
                  <p className="text-gray-400 text-sm">Some PLI policies include cover for advertising injury &mdash; claims arising from defamation, invasion of privacy, or copyright infringement in your advertising or marketing materials. Check your policy wording for this inclusion.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">What PLI Does NOT Cover</h3>
            <p className="text-gray-300 leading-relaxed">
              Understanding exclusions is just as important as understanding coverage. PLI does not protect you in these situations:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Professional Advice Errors</h4>
                <p className="text-gray-400 text-sm">If your professional advice, design, code, or work product causes a client financial loss, that is a <strong className="text-gray-200">professional indemnity (PI)</strong> claim, not a PLI claim. PLI only covers physical harm and property damage.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Intentional Acts</h4>
                <p className="text-gray-400 text-sm">PLI does not cover deliberate damage or injury. If you intentionally damage someone&apos;s property or harm someone, the insurer will deny the claim. Insurance only covers accidental or negligent acts.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Employee Injuries</h4>
                <p className="text-gray-400 text-sm">Injuries to your own employees are covered by <strong className="text-gray-200">workers&apos; compensation (WorkCover)</strong>, not PLI. PLI only covers third parties &mdash; people who are not your employees.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Pre-Existing Damage</h4>
                <p className="text-gray-400 text-sm">PLI does not cover damage that existed before you arrived or started work. If a client claims you damaged something that was already broken, photos and documentation from before you started protect you.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Your Own Property</h4>
                <p className="text-gray-400 text-sm">If your own equipment, tools, or property is damaged, PLI does not cover it. You need <strong className="text-gray-200">business property or contents insurance</strong> for your own assets.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Motor Vehicle Accidents</h4>
                <p className="text-gray-400 text-sm">Incidents involving motor vehicles (including damage caused while driving to a client site) are excluded from PLI. These are covered by your <strong className="text-gray-200">motor vehicle insurance and CTP</strong>.</p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Claims-Made vs Occurrence-Based Policies</p>
              <p className="text-gray-400 text-sm">
                Most Australian PLI policies are <strong className="text-gray-200">occurrence-based</strong>, meaning they cover incidents that occur during the policy period, regardless of when the claim is made. This is different from professional indemnity insurance, which is typically claims-made (covering claims made during the policy period). With an occurrence-based PLI policy, if someone is injured in June 2026 but does not lodge a claim until December 2027, you are covered as long as you had an active policy in June 2026.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: How Much Does Public Liability Insurance Cost? */}
        <section id="how-much-does-pli-cost">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How Much Does Public Liability Insurance Cost?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Public liability insurance is one of the most affordable business insurance products available in Australia. Most freelancers and sole traders pay between <strong className="text-white">$200 and $800 per year</strong> &mdash; less than $2.20 per day for $10M in cover. The exact cost depends on several factors.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Factors That Affect Your Premium</h3>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">Industry and Risk Level</p>
                  <p className="text-gray-400 text-sm">Higher-risk professions (trades, fitness, events) pay more than lower-risk professions (IT, writing, design). Insurers classify industries by risk category based on historical claim data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">Annual Revenue</p>
                  <p className="text-gray-400 text-sm">Higher revenue generally means more business activity and more exposure, so premiums increase with turnover. A freelancer earning $80,000 will pay less than one earning $300,000.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">Cover Amount</p>
                  <p className="text-gray-400 text-sm">Standard cover amounts are $5M, $10M, and $20M. The jump from $10M to $20M typically adds only $50&ndash;$150/year &mdash; well worth the extra cover for meeting client requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">4</span>
                <div>
                  <p className="text-white font-medium text-sm">Claims History</p>
                  <p className="text-gray-400 text-sm">A clean claims history keeps your premiums low. Previous claims can increase your premium or, in some cases, lead to exclusions on your policy for certain types of work.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Typical PLI Costs by Profession (Australia, 2025&ndash;26)</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Profession</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Risk Level</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">$10M Cover</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">$20M Cover</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white">Graphic Designer / Copywriter</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4 text-gray-300">$200&ndash;$350</td>
                      <td className="py-3 px-4 text-gray-300">$280&ndash;$450</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Web Developer / IT Consultant</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4 text-gray-300">$220&ndash;$380</td>
                      <td className="py-3 px-4 text-gray-300">$300&ndash;$480</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Photographer / Videographer</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">Medium</span></td>
                      <td className="py-3 px-4 text-gray-300">$300&ndash;$500</td>
                      <td className="py-3 px-4 text-gray-300">$380&ndash;$600</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Business Consultant / Coach</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">Medium</span></td>
                      <td className="py-3 px-4 text-gray-300">$280&ndash;$480</td>
                      <td className="py-3 px-4 text-gray-300">$360&ndash;$580</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Personal Trainer / Fitness Instructor</td>
                      <td className="py-3 px-4"><span className="text-orange-400 text-xs font-medium bg-orange-500/10 px-2 py-0.5 rounded-full">Medium-High</span></td>
                      <td className="py-3 px-4 text-gray-300">$400&ndash;$650</td>
                      <td className="py-3 px-4 text-gray-300">$500&ndash;$750</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Event Planner / Coordinator</td>
                      <td className="py-3 px-4"><span className="text-orange-400 text-xs font-medium bg-orange-500/10 px-2 py-0.5 rounded-full">Medium-High</span></td>
                      <td className="py-3 px-4 text-gray-300">$380&ndash;$600</td>
                      <td className="py-3 px-4 text-gray-300">$480&ndash;$720</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Electrician / Plumber</td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">High</span></td>
                      <td className="py-3 px-4 text-gray-300">$500&ndash;$800</td>
                      <td className="py-3 px-4 text-gray-300">$600&ndash;$950</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Builder / Carpenter</td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">High</span></td>
                      <td className="py-3 px-4 text-gray-300">$550&ndash;$900</td>
                      <td className="py-3 px-4 text-gray-300">$650&ndash;$1,100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Indicative pricing based on Australian market rates for 2025&ndash;26. Actual premiums vary by insurer, revenue, location, and claims history. All prices exclude GST.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Common Cover Amounts</h3>
            <p className="text-gray-300 leading-relaxed">
              Most clients specify a minimum cover amount in their contracts. Here is what to expect:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-medium mb-2">$5 Million</h4>
                <p className="text-gray-400 text-sm">Entry-level cover. Suitable for very low-risk freelancers with no client-facing interaction. Some clients may accept $5M, but it limits which contracts you can take.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-5">
                <h4 className="text-amber-400 font-medium mb-2">$10 Million</h4>
                <p className="text-gray-400 text-sm">The standard. Most commercial clients, landlords, and contracts require at least $10M. This is the most popular cover level for Australian freelancers and sole traders.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-orange-500/30 p-5">
                <h4 className="text-orange-400 font-medium mb-2">$20 Million</h4>
                <p className="text-gray-400 text-sm">Premium cover. Required by government contracts, large corporates, and many commercial leases. The cost difference from $10M is minimal &mdash; typically $50&ndash;$150/year extra. Many freelancers choose $20M to avoid any limitations.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Where to Get PLI Quotes (Australia)</h3>
            <p className="text-gray-300 leading-relaxed">
              You can get public liability insurance quotes online in minutes from these Australian providers:
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mt-3">
              <li><strong className="text-gray-200">BizCover</strong> &mdash; compares multiple insurers in one quote, popular with freelancers and sole traders</li>
              <li><strong className="text-gray-200">iSelect Business</strong> &mdash; comparison service with access to major insurers</li>
              <li><strong className="text-gray-200">Compare the Market</strong> &mdash; side-by-side comparison of PLI policies from Australian insurers</li>
              <li><strong className="text-gray-200">Aon</strong> &mdash; major broker with industry-specific policies for professionals and trades</li>
              <li><strong className="text-gray-200">Your industry association</strong> &mdash; many professional associations offer group-rate PLI to members at discounted premiums</li>
            </ul>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Bundle Discount</p>
              <p className="text-gray-400 text-sm">
                Most insurers offer a <strong className="text-gray-200">10&ndash;20% discount when you bundle public liability with professional indemnity insurance</strong>. Since many freelancers need both, bundling can save $50&ndash;$150 per year. Some providers call this a &quot;Business Pack&quot; or &quot;Combined Liability&quot; policy. Always ask about bundle pricing when getting quotes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Public Liability vs Professional Indemnity Insurance */}
        <section id="pli-vs-pi">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Public Liability vs Professional Indemnity Insurance</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Public liability and professional indemnity are the two most common insurance types for Australian freelancers, and they are frequently confused. They cover <strong className="text-white">completely different risks</strong> and are not interchangeable. Here is a detailed comparison:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Feature</th>
                      <th className="text-left text-amber-400 font-medium py-3 px-4">Public Liability (PLI)</th>
                      <th className="text-left text-blue-400 font-medium py-3 px-4">Professional Indemnity (PI)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">What It Covers</td>
                      <td className="py-3 px-4 text-gray-400">Bodily injury and property damage to third parties</td>
                      <td className="py-3 px-4 text-gray-400">Financial loss caused by professional errors, omissions, or negligence</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Type of Harm</td>
                      <td className="py-3 px-4 text-gray-400">Physical harm and tangible property damage</td>
                      <td className="py-3 px-4 text-gray-400">Pure economic loss (financial damage)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Typical Claim Example</td>
                      <td className="py-3 px-4 text-gray-400">Client trips over your equipment and breaks their wrist</td>
                      <td className="py-3 px-4 text-gray-400">Your code has a bug that causes the client to lose $50,000 in sales</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Another Example</td>
                      <td className="py-3 px-4 text-gray-400">You spill coffee on a client&apos;s $5,000 laptop</td>
                      <td className="py-3 px-4 text-gray-400">Your design fails to meet building codes and must be redone at client expense</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Who Needs It Most</td>
                      <td className="py-3 px-4 text-gray-400">Tradies, personal trainers, photographers, event workers, anyone on client sites</td>
                      <td className="py-3 px-4 text-gray-400">Consultants, designers, developers, accountants, anyone providing professional advice</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Typical Cost (Freelancer)</td>
                      <td className="py-3 px-4 text-gray-400">$200&ndash;$800/year</td>
                      <td className="py-3 px-4 text-gray-400">$300&ndash;$700/year</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Standard Cover Amounts</td>
                      <td className="py-3 px-4 text-gray-400">$5M, $10M, $20M</td>
                      <td className="py-3 px-4 text-gray-400">$1M, $2M, $5M</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Policy Type</td>
                      <td className="py-3 px-4 text-gray-400">Usually occurrence-based</td>
                      <td className="py-3 px-4 text-gray-400">Usually claims-made</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Legally Mandatory For</td>
                      <td className="py-3 px-4 text-gray-400">Licensed trades, some fitness professionals, childcare</td>
                      <td className="py-3 px-4 text-gray-400">Financial advisers, lawyers, accountants, architects, engineers</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300 font-medium">Tax Deductible?</td>
                      <td className="py-3 px-4 text-gray-400">Yes &mdash; 100%</td>
                      <td className="py-3 px-4 text-gray-400">Yes &mdash; 100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Do You Need Both?</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Many freelancers need both PLI and PI insurance.</strong> If you provide professional services (advice, design, code, consulting) AND you visit client sites, attend meetings in person, or work at events, you have both types of risk exposure. A web developer who visits client offices needs PI for coding errors and PLI in case they damage office equipment. A business consultant needs PI for incorrect advice and PLI for accidental injury at client premises.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-3">PLI Only Is Usually Enough If You...</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Work in trades (electrical, plumbing, building)</li>
                  <li>Provide physical services (cleaning, gardening, removals)</li>
                  <li>Work at events without providing professional advice</li>
                  <li>Sell physical products at markets</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-5">
                <h4 className="text-blue-400 font-semibold mb-3">You Likely Need Both If You...</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Provide professional advice AND visit client sites</li>
                  <li>Work as a consultant, designer, or developer who attends meetings</li>
                  <li>Photograph events (PLI for venue + PI for work quality)</li>
                  <li>Run workshops or training sessions</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Key Insight</p>
              <p className="text-gray-400 text-sm">
                The easiest way to decide: <strong className="text-gray-200">PLI covers your body (what you physically do), PI covers your brain (what you professionally advise).</strong> If your work involves both physical presence at client sites and professional expertise, you need both policies. The combined cost of a PLI + PI bundle is typically <strong className="text-gray-200">$500&ndash;$1,200/year</strong> for most freelancers &mdash; a small price for comprehensive protection. See our <Link href="/glossary/professional-indemnity" className="text-amber-400 hover:text-amber-300 underline">complete PI insurance guide</Link> for detailed information on professional indemnity cover.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Managing PLI with InvoiceFlow */}
        <section id="pli-with-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Managing PLI with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow helps Australian freelancers stay on top of their insurance requirements and present a <strong className="text-white">professional, fully-covered business</strong> to every client. Here is how it supports your PLI management:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.5a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Track Insurance Requirements Per Client</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Different clients have different insurance requirements. Government clients might require $20M PLI, while a small business client may not require any. InvoiceFlow lets you <strong className="text-gray-200">record each client&apos;s insurance requirements</strong> in their profile &mdash; cover type, minimum amount, certificate of currency deadline, and renewal dates. When you onboard a new client, you can instantly see whether your current coverage meets their requirements.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Insurance Expiry Reminders</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Never let your insurance lapse. InvoiceFlow sends you <strong className="text-gray-200">automatic reminders 30 days, 14 days, and 7 days before your PLI policy expires</strong>. A lapsed policy means you are completely unprotected &mdash; and if a client discovers your insurance has expired, it could breach your contract and cost you the relationship. InvoiceFlow also tracks when your certificate of currency needs updating with each client.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Attach Certificates to Invoices</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Some clients require a current certificate of currency with every invoice or at the start of every project. InvoiceFlow lets you <strong className="text-gray-200">upload your certificate of currency and automatically attach it to invoices</strong> for clients who require it. This saves you manually finding and forwarding the document every time and presents a polished, professional image to your clients.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Professional Documentation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow helps you maintain a <strong className="text-gray-200">complete insurance documentation trail</strong>. Store policy documents, certificates of currency, claims correspondence, and renewal confirmations in your secure dashboard. When a client asks for proof of insurance, you can share your certificate in seconds &mdash; not hours. This level of organisation distinguishes professional freelancers from the rest.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Insurance Cost Tracking as a Business Expense</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track your PLI premiums as a business expense in InvoiceFlow&apos;s expense tracking. The platform categorises it correctly for your BAS and tax return, ensuring you claim the <strong className="text-gray-200">full tax deduction and GST input credit</strong>. No more forgetting to claim insurance as a deduction or scrambling to find receipts at tax time.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">The Professional Edge</p>
              <p className="text-gray-400 text-sm">
                Clients notice when a freelancer has their insurance documentation organised and readily available. It signals that you are a <strong className="text-gray-200">serious professional who manages risk properly</strong> &mdash; not a hobbyist hoping nothing goes wrong. In competitive pitches and tender processes, being able to immediately provide a certificate of currency can be the difference between winning and losing the contract.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage insurance and protect your business.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on protecting your freelance business.</p>
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
            Protect Your Business. Stay Professionally Covered.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps freelancers track insurance requirements, manage certificates of currency, and present professional documentation to every client &mdash; so you never miss a renewal or lose a contract.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/client-onboarding-checklist">
              <Button variant="secondary">Client Onboarding Checklist</Button>
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
