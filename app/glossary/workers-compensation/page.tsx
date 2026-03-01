import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Workers Compensation: Complete Guide for Australian Sole Traders & Freelancers — InvoiceFlow',
  description:
    'Do sole traders need workers compensation in Australia? Learn about WorkCover obligations, state-by-state requirements, premium rates (1-5% of wages), deemed worker provisions, and contractor vs employee classification for freelancers.',
  keywords: [
    'workers compensation sole trader australia',
    'WorkCover freelancer',
    'do sole traders need workers compensation',
    'workers compensation insurance australia',
    'WorkCover premium rates',
    'contractor workers compensation obligations',
    'deemed worker provisions australia',
    'WorkCover Victoria freelancer',
    'workers comp small business australia',
    'WorkCover Queensland sole trader',
    'workers compensation penalties australia',
    'sham contracting workers compensation',
  ],
  alternates: { canonical: '/glossary/workers-compensation' },
  openGraph: {
    title: 'Workers Compensation: Complete Guide for Australian Sole Traders & Freelancers — InvoiceFlow',
    description:
      'Everything self-employed Australians need to know about workers compensation: WorkCover obligations, state-by-state requirements, premium rates 1-5% of wages, deemed worker provisions, and contractor vs employee classification.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/workers-compensation',
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
    { '@type': 'ListItem', position: 3, name: 'Workers Compensation', item: `${BASE_URL}/glossary/workers-compensation` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do sole traders need workers compensation insurance in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you work alone with no employees, you are generally NOT required to have workers compensation in any Australian state or territory. However, if you hire even one employee (including casual or part-time), you MUST register for WorkCover immediately. Some states also deem certain contractors as employees for WorkCover purposes, particularly Victoria which has the broadest deemed worker provisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I hire someone without workers compensation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Operating with employees and without WorkCover is a criminal offence in all Australian states. Penalties include fines of $100,000+ for individuals and $500,000+ for companies, plus you become personally liable for ALL medical expenses, lost wages, rehabilitation costs, and any compensation payable. Register before the employee\'s first day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need workers comp if I use subcontractors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your state and the nature of the arrangement. Victoria has the broadest "deemed worker" provisions — many subcontractors are automatically treated as your workers for WorkCover purposes. In other states, genuine independent contractors with their own ABN, insurance, and equipment are generally not your workers. Always get legal advice if unsure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does workers compensation cost for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Premiums are calculated as a percentage of your total wages bill, with the rate depending on your industry. Low-risk industries (IT, professional services) pay 0.5-1.5% of wages. Medium-risk (creative, education) pay 1-2.5%. High-risk (construction, trades) pay 3-5%. A business paying $80,000 in wages in IT would pay approximately $400-$1,200 per year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim workers compensation insurance as a tax deduction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Workers compensation insurance premiums are 100% tax deductible as a business expense for Australian businesses. If you are registered for GST, the GST component on the premium is claimable as an input tax credit on your BAS. Keep your premium notices and payment receipts for ATO audit purposes.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-workers-compensation', label: '1. What Is Workers Compensation?' },
  { id: 'do-sole-traders-need-workers-comp', label: '2. Do Sole Traders and Freelancers Need Workers Comp?' },
  { id: 'state-by-state-requirements', label: '3. State-by-State Workers Compensation Requirements' },
  { id: 'workers-comp-for-freelancers-who-hire', label: '4. Workers Comp for Freelancers Who Hire' },
  { id: 'contractor-vs-employee', label: '5. Contractor vs Employee: The WorkCover Implications' },
  { id: 'managing-workers-comp-with-invoiceflow', label: '6. Managing Workers Comp with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/freelance-contract-generator',
    name: 'Contract Generator',
    description: 'Create contracts with contractor classification clauses and ABN verification.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/client-red-flag-checker',
    name: 'Client Red Flag Checker',
    description: 'Identify contractor classification risks before engaging workers.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
  },
  {
    href: '/tools/client-onboarding-checklist',
    name: 'Business Registration Checklist',
    description: 'Ensure WorkCover registration is completed before your first hire.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-business-scorecard',
    name: 'Benefits Cost Calculator',
    description: 'Calculate total employment costs including WorkCover premiums.',
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Understand how workers compensation premiums fit into your overall tax obligations.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'Factor employment costs including WorkCover into your pricing strategy.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Professional invoicing practices that keep your cash flow healthy for insurance costs.',
  },
];

export default function WorkersCompensationGlossaryPage() {
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
            <span className="text-white">Workers Compensation</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Protection
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Workers Compensation{' '}
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              for Australian Sole Traders
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Workers compensation (WorkCover) is a compulsory insurance scheme covering workplace injuries for employees. This guide explains who needs it, state-by-state requirements, premium rates, deemed worker provisions, and what happens when freelancers start hiring &mdash; including the critical contractor vs employee distinction.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>13 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>State-by-State Comparison Table</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">0</span>
              <div>
                <p className="text-white font-medium text-sm">No WorkCover Required</p>
                <p className="text-gray-400 text-sm">If you work alone with zero employees, you are NOT required to have workers compensation in most states</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">1+</span>
              <div>
                <p className="text-white font-medium text-sm">Mandatory With Employees</p>
                <p className="text-gray-400 text-sm">Hire even one employee (including casual or part-time) and WorkCover is MANDATORY in all states</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">1-5%</span>
              <div>
                <p className="text-white font-medium text-sm">Premium Rates</p>
                <p className="text-gray-400 text-sm">Typical premium rates as a percentage of wages, depending on your industry risk classification</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">$100K+</span>
              <div>
                <p className="text-white font-medium text-sm">Non-Compliance Penalties</p>
                <p className="text-gray-400 text-sm">Penalties for operating without workers compensation when required &mdash; plus personal liability for ALL costs</p>
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

        {/* Section 1: What Is Workers Compensation? */}
        <section id="what-is-workers-compensation">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Workers Compensation?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Workers compensation is a <strong className="text-white">compulsory insurance scheme that covers workplace injuries and illnesses for employees</strong>. In Australia, it is managed by state and territory authorities &mdash; commonly known as WorkCover in most jurisdictions. The scheme provides a safety net for workers who are injured or become ill as a direct result of their employment.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Workers compensation covers <strong className="text-white">medical expenses, lost wages, rehabilitation costs, and lump sum payments for permanent impairment</strong>. It operates on a no-fault basis in most states, meaning the worker does not need to prove their employer was negligent &mdash; only that the injury or illness arose out of, or in the course of, their employment.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The critical distinction for freelancers and sole traders: workers compensation covers <strong className="text-white">employees, not business owners</strong>. If you are a sole trader working by yourself, you are not an employee of your own business. This is the foundation of whether you need WorkCover or not.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">What Workers Compensation Covers</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Medical Expenses</h4>
                <p className="text-gray-400 text-sm">Hospital stays, surgery, GP visits, physiotherapy, medication, and all reasonable medical treatment related to the workplace injury or illness. No out-of-pocket cost to the worker.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-400 font-medium mb-2">Lost Wages</h4>
                <p className="text-gray-400 text-sm">Weekly payments to replace income while the worker is unable to work due to their injury. Typically 95% of pre-injury earnings for the first 13 weeks, then stepping down over time.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Rehabilitation</h4>
                <p className="text-gray-400 text-sm">Return-to-work programs, occupational therapy, workplace modifications, retraining, and other support to help the injured worker get back to employment as soon as possible.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-400 font-medium mb-2">Lump Sum Payments</h4>
                <p className="text-gray-400 text-sm">Compensation for permanent impairment resulting from a workplace injury. The amount depends on the degree of impairment and varies by state scheme. Can range from thousands to hundreds of thousands of dollars.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">State and Territory Schemes</h3>
            <p className="text-gray-300 leading-relaxed">
              Each Australian state and territory operates its own workers compensation scheme with its own authority, legislation, and premium rates. While the core principles are consistent, the details &mdash; including who qualifies as a &quot;worker,&quot; premium calculation methods, and deemed worker provisions &mdash; vary significantly between jurisdictions.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4 text-center">
                <p className="text-red-400 font-semibold text-sm">NSW</p>
                <p className="text-gray-400 text-xs mt-1">icare</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4 text-center">
                <p className="text-red-400 font-semibold text-sm">VIC</p>
                <p className="text-gray-400 text-xs mt-1">WorkSafe Victoria</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4 text-center">
                <p className="text-red-400 font-semibold text-sm">QLD</p>
                <p className="text-gray-400 text-xs mt-1">WorkCover Queensland</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4 text-center">
                <p className="text-red-400 font-semibold text-sm">SA</p>
                <p className="text-gray-400 text-xs mt-1">ReturnToWorkSA</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4 text-center">
                <p className="text-red-400 font-semibold text-sm">WA</p>
                <p className="text-gray-400 text-xs mt-1">WorkCover WA</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4 text-center">
                <p className="text-red-400 font-semibold text-sm">TAS</p>
                <p className="text-gray-400 text-xs mt-1">WorkCover Tasmania</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4 text-center">
                <p className="text-red-400 font-semibold text-sm">NT</p>
                <p className="text-gray-400 text-xs mt-1">NT WorkSafe</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4 text-center">
                <p className="text-red-400 font-semibold text-sm">ACT</p>
                <p className="text-gray-400 text-xs mt-1">Office of Industrial Relations</p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Australian Context</p>
              <p className="text-gray-400 text-sm">
                Unlike many countries where workers compensation is a single federal system, Australia&apos;s scheme is <strong className="text-gray-200">state-based</strong>. This means you must comply with the rules of the state or territory where the work is performed &mdash; not where your business is registered. If you have employees working in multiple states, you may need WorkCover registrations in each state. The only federal scheme (Comcare) applies to Commonwealth government employees and certain national employers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Do Sole Traders and Freelancers Need Workers Comp? */}
        <section id="do-sole-traders-need-workers-comp">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Do Sole Traders and Freelancers Need Workers Comp?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              This is the critical question for most freelancers and sole traders. The general rule: <strong className="text-white">if you work alone with no employees, you are NOT required to have workers compensation insurance in most Australian states.</strong> However, there are important exceptions and nuances you must understand.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The Core Rule: No Employees = No WorkCover Required</h3>
            <p className="text-gray-300 leading-relaxed">
              Workers compensation exists to protect <strong className="text-white">employees</strong>. As a sole trader, you are the business owner &mdash; not an employee. You cannot be your own employee, and therefore you do not fall within the scope of compulsory workers compensation schemes. This applies whether you are a freelance designer, a consultant, a contractor, or any other type of self-employed worker operating without staff.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The Exceptions You Must Know</h3>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-red-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">You Hire ANY Employees</p>
                  <p className="text-gray-400 text-sm">The moment you hire even one employee &mdash; including casual, part-time, or temporary workers &mdash; you MUST have WorkCover insurance. This includes apprentices, interns (if paid), and family members you employ. No exceptions. Registration must happen BEFORE the employee starts work.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-red-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">You Engage Subcontractors (Some States)</p>
                  <p className="text-gray-400 text-sm">In Queensland and Victoria particularly, engaging subcontractors can trigger workers compensation obligations. If the subcontractor is &quot;deemed&quot; to be your worker under state legislation, you are responsible for their WorkCover &mdash; even if they have their own ABN and consider themselves independent. Victoria has the broadest deemed worker provisions in Australia.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-red-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">Industry Registration Requirements</p>
                  <p className="text-gray-400 text-sm">Some industry registrations and licences require you to hold personal accident insurance that is similar to (but not the same as) workers compensation. This includes certain construction licences, trades registrations, and professional memberships. Check your specific industry requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-red-500/20">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">4</span>
                <div>
                  <p className="text-white font-medium text-sm">Client Contract Requirements</p>
                  <p className="text-gray-400 text-sm">Some clients &mdash; especially government agencies and large corporations &mdash; require you to hold personal accident cover or equivalent insurance even as a sole trader with no employees. This is a contractual requirement, not a legal one, but failing to comply means you cannot accept the work.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Optional Personal Accident Insurance for Sole Traders</h3>
            <p className="text-gray-300 leading-relaxed">
              While you may not be <em>required</em> to have workers compensation, many sole traders choose to take out <strong className="text-white">personal accident and illness insurance</strong> to protect their income if they are injured and cannot work. This is NOT workers compensation &mdash; it is a separate insurance product that covers you as the business owner.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5 mt-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-400 font-semibold text-sm">Personal Accident Insurance for Sole Traders</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><strong className="text-gray-200">Cost:</strong> Typically $300&ndash;$800 per year depending on your occupation and cover level</li>
                <li><strong className="text-gray-200">Covers:</strong> Income replacement if you are injured and cannot work (accident or illness)</li>
                <li><strong className="text-gray-200">Benefit:</strong> Weekly payments of up to 85% of your pre-injury income for a specified period</li>
                <li><strong className="text-gray-200">Tax:</strong> Premiums are 100% tax deductible as a business expense</li>
                <li><strong className="text-gray-200">Note:</strong> This is income protection, not WorkCover &mdash; it does not cover employees</li>
              </ul>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">The Bottom Line for Sole Traders</p>
              <p className="text-gray-400 text-sm">
                If you truly work alone with no employees and no subcontractors, <strong className="text-gray-200">you do not need workers compensation insurance</strong>. But the moment you engage anyone to do work for your business &mdash; even a casual worker for a single day &mdash; you must register for WorkCover. The penalties for getting this wrong are severe: fines of $100,000+ for individuals and personal liability for all injury costs. When in doubt, get legal advice before engaging workers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: State-by-State Workers Compensation Requirements */}
        <section id="state-by-state-requirements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">State-by-State Workers Compensation Requirements</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Each Australian state and territory has its own workers compensation scheme with different authorities, premium rates, and &mdash; critically for freelancers &mdash; different <strong className="text-white">deemed worker provisions</strong> that can catch out sole traders who engage subcontractors. Here is a comprehensive comparison:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">State/Territory</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Authority</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Avg. Premium Rate</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Deemed Worker Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">NSW</td>
                      <td className="py-3 px-4 text-gray-400">icare</td>
                      <td className="py-3 px-4 text-gray-300">~1.4% of wages</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">Medium</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">VIC</td>
                      <td className="py-3 px-4 text-gray-400">WorkSafe Victoria</td>
                      <td className="py-3 px-4 text-gray-300">~1.0% of wages</td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">High</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">QLD</td>
                      <td className="py-3 px-4 text-gray-400">WorkCover Queensland</td>
                      <td className="py-3 px-4 text-gray-300">~1.2% of wages</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">Medium</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">SA</td>
                      <td className="py-3 px-4 text-gray-400">ReturnToWorkSA</td>
                      <td className="py-3 px-4 text-gray-300">~1.1% of wages</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">WA</td>
                      <td className="py-3 px-4 text-gray-400">WorkCover WA</td>
                      <td className="py-3 px-4 text-gray-300">~1.5% of wages</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">TAS</td>
                      <td className="py-3 px-4 text-gray-400">WorkCover Tasmania</td>
                      <td className="py-3 px-4 text-gray-300">~1.3% of wages</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">NT</td>
                      <td className="py-3 px-4 text-gray-400">NT WorkSafe</td>
                      <td className="py-3 px-4 text-gray-300">~1.4% of wages</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">ACT</td>
                      <td className="py-3 px-4 text-gray-400">Office of Industrial Relations</td>
                      <td className="py-3 px-4 text-gray-300">~1.2% of wages</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Average premium rates are indicative and vary by industry, claims history, and payroll size. Rates current as at 2025&ndash;26 financial year. Actual rates are industry-specific.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Key State Differences for Freelancers</h3>
            <div className="space-y-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-2">Victoria &mdash; Highest Risk for Freelancers</h4>
                <p className="text-gray-400 text-sm">Victoria has the <strong className="text-gray-200">broadest &quot;deemed worker&quot; provisions</strong> in Australia. Under WorkSafe Victoria, many contractors and subcontractors are automatically treated as workers of the person who engages them &mdash; even if they have their own ABN, invoice for their work, and consider themselves independent. If you engage subcontractors in Victoria, you should get specific legal advice on whether they are deemed workers for WorkCover purposes. Getting this wrong means you are liable for all injury costs plus penalties.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-2">NSW &mdash; Deemed Worker Provisions Apply</h4>
                <p className="text-gray-400 text-sm">NSW has deemed worker provisions under the <strong className="text-gray-200">Workplace Injury Management and Workers Compensation Act 1998</strong>. Contractors can be deemed workers if they work primarily for one principal, do not subcontract the work to others, and do not employ others. The icare scheme manages all policies, but employers choose from licensed insurers.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-2">Queensland &mdash; Contractor Provisions</h4>
                <p className="text-gray-400 text-sm">WorkCover Queensland includes provisions for certain contractors. The scheme uses a <strong className="text-gray-200">multi-factor test</strong> to determine if a contractor is actually a worker for WorkCover purposes. Key factors include control over how work is performed, provision of tools and equipment, and financial risk.</p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Critical Warning: Victoria&apos;s Deemed Worker Provisions</p>
              <p className="text-gray-400 text-sm">
                If you are a freelancer in Victoria who engages <em>any</em> subcontractors, <strong className="text-gray-200">do not assume they are independent contractors for WorkCover purposes</strong>. Victoria&apos;s legislation deems many contractors as workers, and the test focuses on the substance of the relationship rather than the contractual label. A contractor who works primarily for you, uses your tools, follows your direction, and does not independently market their services to the public may be deemed your worker &mdash; making you liable for their WorkCover. Always seek legal advice specific to your situation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Workers Comp for Freelancers Who Hire */}
        <section id="workers-comp-for-freelancers-who-hire">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Workers Comp for Freelancers Who Hire</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The transition from solo freelancer to employer is one of the most significant legal steps in your business journey. The moment you hire your first employee &mdash; whether full-time, part-time, or casual &mdash; you must <strong className="text-white">register for workers compensation BEFORE the employee starts work</strong>. There is no grace period, no exemption for small employers, and no threshold number of employees that triggers the requirement. One employee = mandatory WorkCover.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">How Premiums Are Calculated</h3>
            <p className="text-gray-300 leading-relaxed">
              Workers compensation premiums are calculated as a <strong className="text-white">percentage of your total wages bill</strong>, with the rate determined by your industry classification. The formula is straightforward:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5 mt-3">
              <p className="text-white font-mono text-center text-lg mb-3">Premium = Industry Rate &times; Total Wages</p>
              <p className="text-gray-400 text-sm text-center">For example: 1.2% rate &times; $80,000 wages = $960 annual premium</p>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4">
              The industry rate varies significantly based on the risk profile of your industry. Insurers use standardised industry classification codes, and each code has a base rate that reflects the historical claims experience for that industry.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Premium Rates by Industry</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Industry</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Risk Level</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Typical Rate</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">$80K Wages Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white">IT / Professional Services</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4 text-gray-300">0.5&ndash;1.2%</td>
                      <td className="py-3 px-4 text-gray-300">$400&ndash;$960</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Creative / Design</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                      <td className="py-3 px-4 text-gray-300">0.8&ndash;1.5%</td>
                      <td className="py-3 px-4 text-gray-300">$640&ndash;$1,200</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Personal Training / Fitness</td>
                      <td className="py-3 px-4"><span className="text-amber-400 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full">Medium</span></td>
                      <td className="py-3 px-4 text-gray-300">2&ndash;3%</td>
                      <td className="py-3 px-4 text-gray-300">$1,600&ndash;$2,400</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Cleaning</td>
                      <td className="py-3 px-4"><span className="text-orange-400 text-xs font-medium bg-orange-500/10 px-2 py-0.5 rounded-full">Medium-High</span></td>
                      <td className="py-3 px-4 text-gray-300">2.5&ndash;4%</td>
                      <td className="py-3 px-4 text-gray-300">$2,000&ndash;$3,200</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Construction / Trades</td>
                      <td className="py-3 px-4"><span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-0.5 rounded-full">High</span></td>
                      <td className="py-3 px-4 text-gray-300">3&ndash;5%</td>
                      <td className="py-3 px-4 text-gray-300">$2,400&ndash;$4,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Rates are indicative and vary by state, insurer, claims history, and specific industry sub-classification. All premiums are 100% tax deductible.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Penalties for Non-Compliance</h3>
            <p className="text-gray-300 leading-relaxed">
              Operating with employees and without workers compensation insurance is a <strong className="text-white">criminal offence in all Australian states and territories</strong>. The consequences are severe and can be business-ending:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-medium mb-2">Financial Penalties</h4>
                <p className="text-gray-400 text-sm">Fines of <strong className="text-gray-200">$100,000+ for individuals</strong> and <strong className="text-gray-200">$500,000+ for companies</strong> for operating without workers compensation insurance. Penalties vary by state but are universally severe. Repeat offenders face even higher penalties and potential imprisonment.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-medium mb-2">Personal Liability</h4>
                <p className="text-gray-400 text-sm">If an uninsured employee is injured, you become <strong className="text-gray-200">personally liable for ALL costs</strong>: medical expenses, surgery, rehabilitation, lost wages, lump sum compensation, and any common law damages. A single serious workplace injury can easily cost $500,000 to $2,000,000 or more. This liability cannot be discharged through bankruptcy.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-medium mb-2">Criminal Prosecution</h4>
                <p className="text-gray-400 text-sm">In addition to fines, employers who fail to insure can face criminal prosecution. Company directors may be personally prosecuted. In some states, imprisonment is a potential penalty for serious or repeat offenders.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-medium mb-2">Retrospective Premiums</h4>
                <p className="text-gray-400 text-sm">WorkCover authorities can demand payment of <strong className="text-gray-200">retrospective premiums</strong> for the entire period you employed workers without insurance, plus interest and penalties. This is calculated on the wages paid during the uninsured period at the applicable industry rate, often with a loading for non-compliance.</p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Register BEFORE Day One</p>
              <p className="text-gray-400 text-sm">
                The single most important rule: <strong className="text-gray-200">register for WorkCover BEFORE your employee&apos;s first day of work</strong>. Not during the first week. Not when you &quot;get around to it.&quot; Before they start. Most state schemes allow online registration that can be completed in 15&ndash;30 minutes. There is no excuse for delaying this &mdash; the financial and legal consequences of operating without cover, even for a single day, can be catastrophic.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Contractor vs Employee: The WorkCover Implications */}
        <section id="contractor-vs-employee">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Contractor vs Employee: The WorkCover Implications</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The classification of a worker as either a contractor or an employee has <strong className="text-white">enormous implications for workers compensation</strong>. If you engage someone as a &quot;contractor&quot; but the ATO or WorkCover authority deems them to actually be an employee, <strong className="text-white">YOU are liable for their workers compensation retroactively</strong> &mdash; including any claims, premiums, and penalties for the entire period of the engagement.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The ATO Multi-Factor Test</h3>
            <p className="text-gray-300 leading-relaxed">
              The ATO and WorkCover authorities use a multi-factor test to determine whether a worker is genuinely a contractor or actually an employee. No single factor is decisive &mdash; the overall relationship is assessed. Key factors include:
            </p>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Control Over How Work Is Done</p>
                  <p className="text-gray-400 text-sm">Does the worker decide how, when, and where to do the work? Contractors have control over their methods. Employees are directed by the employer. If you dictate the hours, methods, and procedures, the worker is likely an employee.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.648-3.012A3 3 0 013 9.372V7.5a3 3 0 013-3h12a3 3 0 013 3v1.872a3 3 0 01-2.772 2.786l-5.648 3.012m0 0l5.648 3.012A3 3 0 0121 16.628V18.5a3 3 0 01-3 3H6a3 3 0 01-3-3v-1.872a3 3 0 012.772-2.786l5.648-3.012z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Tools and Equipment</p>
                  <p className="text-gray-400 text-sm">Does the worker provide their own tools, equipment, and materials? Genuine contractors use their own. If you provide the tools, software, equipment, and workspace, it points towards an employment relationship.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Financial Risk and Reward</p>
                  <p className="text-gray-400 text-sm">Does the worker bear genuine financial risk? Contractors can make a profit or loss on each job, quote fixed prices, and bear the cost of rectifying defective work. Employees receive a fixed hourly or salaried rate with no financial risk.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Ability to Subcontract or Delegate</p>
                  <p className="text-gray-400 text-sm">Can the worker delegate the work to someone else or subcontract it? Genuine contractors can substitute another person to do the work. Employees must perform the work personally.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Independence and Multiple Clients</p>
                  <p className="text-gray-400 text-sm">Does the worker serve multiple clients and market their services to the public? Genuine contractors have their own business identity, advertise their services, and work for multiple clients. Working exclusively for one principal is a strong indicator of employment.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Protecting Yourself When Engaging Subcontractors</h3>
            <p className="text-gray-300 leading-relaxed">
              If you engage subcontractors in your freelance business, take these steps to protect yourself from unexpected WorkCover liability:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Verify Their ABN</h4>
                <p className="text-gray-400 text-sm">Always verify the subcontractor&apos;s ABN on the Australian Business Register (ABR). An active ABN registered for GST is one indicator of a genuine independent business. Keep a record of the ABN verification.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Written Contract</h4>
                <p className="text-gray-400 text-sm">Have a proper written contract that clearly defines the relationship as one of principal and independent contractor. Specify deliverables, not hours. Allow the contractor to subcontract. Include their obligation to maintain their own insurances.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Verify Their Insurance</h4>
                <p className="text-gray-400 text-sm">Request a copy of the subcontractor&apos;s own insurance certificates &mdash; public liability, professional indemnity, and (if they have employees) workers compensation. This demonstrates they are running an independent business.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Maintain the Distinction</h4>
                <p className="text-gray-400 text-sm">Do not treat contractors like employees. Do not set their hours, provide their equipment, give them a company email, or include them in staff meetings. The substance of the relationship matters more than the contractual label.</p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Sham Contracting: Penalties Up to $469,500</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">&quot;Sham contracting&quot;</strong> occurs when an employer deliberately disguises an employment relationship as a contractor arrangement to avoid paying employee entitlements (including WorkCover premiums, superannuation, leave, and minimum wages). Under the Fair Work Act, penalties for sham contracting are up to <strong className="text-gray-200">$469,500 per contravention for companies and $93,900 for individuals</strong>. These penalties are in addition to any WorkCover penalties, back-pay orders, and superannuation guarantee charges. If you are unsure whether a worker is genuinely a contractor, seek legal advice before engaging them. See our <Link href="/glossary/contractor-vs-employee" className="text-red-400 hover:text-red-300 underline">contractor vs employee glossary page</Link> for a detailed breakdown of the classification tests.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Managing Workers Comp with InvoiceFlow */}
        <section id="managing-workers-comp-with-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Managing Workers Comp with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow helps Australian freelancers and sole traders manage the administrative side of workers compensation compliance &mdash; from tracking subcontractor details to <strong className="text-white">maintaining the documentation that protects you</strong> in a classification dispute.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Track Subcontractor Details and ABN Verification</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Maintain a <strong className="text-gray-200">complete record of every subcontractor you engage</strong>, including their ABN, insurance certificates, contract details, and verification dates. InvoiceFlow stores this information in one central location so you can demonstrate the independence of your contractor relationships if ever questioned by WorkCover or the ATO.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Contractor vs Employee Classification Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Keep records that support the contractor classification of your subcontractors: <strong className="text-gray-200">written contracts, ABN verifications, evidence of multiple clients, and proof they use their own equipment</strong>. In a WorkCover audit or ATO review, having this documentation readily available can be the difference between a clean result and a costly reclassification with retrospective premiums and penalties.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Insurance Premium Expense Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Workers compensation premiums are <strong className="text-gray-200">100% tax deductible as a business expense</strong>. InvoiceFlow tracks your insurance premium payments, categorises them correctly for your BAS and tax return, and ensures you claim the full deduction and any applicable GST input credit. No more forgetting to claim or losing receipts at tax time.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Client Documentation Showing Contractor Status</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When clients engage you as a contractor, InvoiceFlow helps you <strong className="text-gray-200">maintain documentation that supports your independent contractor status</strong>. Generate professional invoices (not timesheets), track multiple clients (demonstrating you are not dependent on one principal), and keep records of your own business expenses and equipment &mdash; all of which support the contractor classification in case of a WorkCover or ATO review.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">BAS-Ready Categorisation of Insurance Costs</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow automatically categorises your workers compensation and insurance expenses in a <strong className="text-gray-200">BAS-ready format</strong>. When your BAS is due, your insurance costs are already separated, GST components identified, and deductions calculated. This saves you time and reduces the risk of errors in your BAS lodgement.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Documentation Is Your Best Defence</p>
              <p className="text-gray-400 text-sm">
                In workers compensation disputes, <strong className="text-gray-200">the business with the best documentation wins</strong>. Whether you are defending a contractor classification, proving you had insurance in place, or claiming tax deductions for premiums, having organised, accessible records is critical. InvoiceFlow centralises all of this documentation so you are never caught without proof when you need it most.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage contractors and protect your business.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on protecting your freelance business.</p>
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
            Stay Compliant. Protect Your Business.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps freelancers track subcontractor details, maintain contractor classification records, and manage insurance documentation &mdash; so you are always prepared for a WorkCover audit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/freelance-contract-generator">
              <Button variant="secondary">Generate a Contractor Agreement</Button>
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
