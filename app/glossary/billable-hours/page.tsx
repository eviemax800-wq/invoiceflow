import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Billable Hours: How to Track, Calculate & Maximise Your Freelancer Income — InvoiceFlow',
  description:
    'What are billable hours? Learn how to track billable vs non-billable hours, calculate your billable rate ($100-$250/hr AU), use billing increments, and avoid common time tracking mistakes. Includes rate calculator and AU freelancer rate comparison.',
  keywords: [
    'billable hours meaning',
    'how to track billable hours freelancer',
    'billable vs non-billable hours',
    'billable hours rate calculator',
    'freelancer time tracking australia',
    'billable hours calculator',
    'how many billable hours per week freelancer',
    'billable rate calculator australia',
    'freelancer hourly rate australia',
    'time tracking best practices freelancer',
    'billing increments freelancer',
    'ATO record keeping time tracking',
  ],
  alternates: { canonical: '/glossary/billable-hours' },
  openGraph: {
    title: 'Billable Hours: How to Track, Calculate & Maximise Your Freelancer Income — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about billable hours: tracking methods, rate calculation formula, billable vs non-billable breakdown, billing increments, and common mistakes that cost you money.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/billable-hours',
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
    { '@type': 'ListItem', position: 3, name: 'Billable Hours', item: `${BASE_URL}/glossary/billable-hours` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What counts as billable hours for freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Billable hours include time spent directly on client work that can be invoiced. This covers design, development, writing, consulting, client meetings, approved revisions, client-specific research, and agreed travel time. Non-billable time includes admin, marketing, invoicing, bookkeeping, networking, professional development, and pitching for new work. The key distinction is whether the time is directly attributable to a specific client project and covered by your agreement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many billable hours should a freelancer aim for per week?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A realistic target for a full-time freelancer is 25 to 30 billable hours per week. The remaining 10 to 15 hours go to admin, marketing, invoicing, and business development. This gives a billable utilisation rate of 60 to 70 percent, which is considered healthy for solo freelancers. Pushing for higher utilisation consistently risks burnout and leaves no time for business growth activities like marketing and networking. If you are billing more than 35 hours per week, you are likely neglecting parts of your business or heading for burnout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I charge for client meetings and phone calls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Client meetings, calls, and email correspondence about a project are billable unless you specifically exclude them in your agreement. Many freelancers include the first 30-minute discovery call free as a sales tool, then bill for all subsequent meetings and calls at their standard rate. The key is to set expectations upfront in your contract or statement of work. If a client expects unlimited free meetings, it can erode your effective hourly rate significantly. State your meeting policy clearly before starting work.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle minimum billing increments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard practice for most freelancers is 15-minute billing increments. A 5-minute phone call is billed as 15 minutes, and a 20-minute task is billed as 30 minutes. Legal and accounting professionals typically use 6-minute increments (one-tenth of an hour) for more granular billing. Some creative freelancers use 30-minute increments for simplicity. Whichever increment you choose, state it clearly in your contract so clients are not surprised. Consistent use of billing increments is standard professional practice and clients expect it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is travel time billable for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Travel to a client regular place of business is generally billable if agreed in your contract. Many freelancers charge travel at 50 percent of their normal rate or include a flat travel fee per visit. Some freelancers include travel within a certain radius (e.g. 20km) as free and charge for anything beyond. The ATO allows 85 cents per kilometre for vehicle travel as a tax deduction for the 2025-26 financial year. Always document travel time and kilometres for both billing and tax purposes. State your travel billing policy in your contract before starting work.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-are-billable-hours', label: '1. What Are Billable Hours?' },
  { id: 'billable-vs-non-billable', label: '2. Billable vs Non-Billable Hours' },
  { id: 'calculate-billable-rate', label: '3. How to Calculate Your Billable Rate' },
  { id: 'time-tracking-best-practices', label: '4. Time Tracking Best Practices' },
  { id: 'common-mistakes', label: '5. Common Billable Hours Mistakes' },
  { id: 'tracking-with-invoiceflow', label: '6. Tracking Billable Hours with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly rate based on income goals, expenses, and billable hours.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices from your tracked billable hours in seconds.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-business-scorecard',
    name: 'Business Scorecard',
    description: 'Assess your billable utilisation rate and overall freelance business health.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/work-capacity-planner',
    name: 'Work Capacity Planner',
    description: 'Plan your weekly capacity and optimise your billable vs non-billable time split.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'Factor billable hours, expenses, and profit margins into your pricing strategy.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Turn tracked billable hours into paid invoices with professional invoicing practices.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'How to create time-based invoices with detailed hour breakdowns for clients.',
  },
];

export default function BillableHoursGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-sky-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Billable Hours</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Pricing &amp; Billing
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Billable Hours:{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              The Complete Guide for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Billable hours are the time you spend directly on client work that can be invoiced. This guide covers how to track them accurately, calculate your ideal billable rate, avoid common mistakes that cost you money, and maximise your earning potential as an Australian freelancer.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Rate Calculator Included</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">60%</span>
              <div>
                <p className="text-white font-medium text-sm">Typical Billable Utilisation</p>
                <p className="text-gray-400 text-sm">Freelancers typically bill 60&ndash;70% of their working hours &mdash; the rest is overhead</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">33%</span>
              <div>
                <p className="text-white font-medium text-sm">Average Non-Billable Time</p>
                <p className="text-gray-400 text-sm">Admin, marketing, invoicing, and business development consume a third of your week</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">15m</span>
              <div>
                <p className="text-white font-medium text-sm">Standard Billing Increment</p>
                <p className="text-gray-400 text-sm">15-minute increments are standard for most freelancers &mdash; 6-minute for legal and accounting</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">5yr</span>
              <div>
                <p className="text-white font-medium text-sm">ATO Record-Keeping Requirement</p>
                <p className="text-gray-400 text-sm">The ATO requires you to keep time records for 5 years for tax and audit purposes</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-sky-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Are Billable Hours? */}
        <section id="what-are-billable-hours">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Are Billable Hours?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Billable hours are the hours you spend <strong className="text-white">directly on client work that can be invoiced</strong>. They represent the core revenue-generating activity of any freelance or consulting business. When you sit down to design a website, write code, draft copy, consult with a client, or revise deliverables &mdash; that time is billable. It is the work your client is paying you to do.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The distinction matters because not everything you do as a freelancer earns money directly. <strong className="text-white">Non-billable time</strong> includes all the essential business activities that keep your freelance operation running but cannot be charged to a specific client: admin, bookkeeping, marketing, invoicing, professional development, networking, and chasing late payments. These tasks are necessary, but they do not generate direct revenue.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The 60&ndash;70% Rule</h3>
            <p className="text-gray-300 leading-relaxed">
              Here is the reality most freelancers learn the hard way: <strong className="text-white">you will not bill 40 hours a week.</strong> The widely accepted benchmark is that freelancers can realistically bill 60&ndash;70% of their total working hours. The rest is overhead. If you work a 40-hour week, expect to bill 24&ndash;28 hours. The remaining 12&ndash;16 hours go to running your business.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This is not a failure of productivity &mdash; it is the reality of being self-employed. Unlike employees who have entire departments handling admin, HR, marketing, and finance, you do all of that yourself. Understanding this ratio is critical because it directly affects how you calculate your hourly rate. If you price yourself based on billing 40 hours a week, you will earn 30&ndash;40% less than you planned.
            </p>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Why This Matters for Pricing</p>
              <p className="text-gray-400 text-sm">
                If you want to earn $120,000 per year and you assume you can bill 40 hours per week for 48 weeks, you would set your rate at $62.50/hr. But if you can only realistically bill 25 hours per week, you actually need to charge <strong className="text-gray-200">$100/hr</strong> to hit the same income target. Getting this calculation wrong is the number one reason freelancers feel underpaid.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Billable vs Non-Billable Hours */}
        <section id="billable-vs-non-billable">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Billable vs Non-Billable Hours</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Understanding the distinction between billable and non-billable time is fundamental to running a profitable freelance business. Research by FreshBooks found that the <strong className="text-white">average freelancer spends 33% of their time on non-billable work</strong> &mdash; that is one-third of your week generating zero direct revenue. Here is a clear breakdown of what falls into each category:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-6">
                <h4 className="text-sky-400 font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Billable Hours
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-gray-200">Client meetings and calls</strong> &mdash; scheduled meetings, status updates, presentations, feedback sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-gray-200">Design, development, and writing</strong> &mdash; the core deliverable work your client is paying for</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-gray-200">Revisions within scope</strong> &mdash; changes and iterations covered by your agreement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-gray-200">Client-specific research</strong> &mdash; research directly required for a project (competitor analysis, technical research)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-gray-200">Travel to client site</strong> &mdash; if agreed in your contract as billable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-gray-200">Testing and quality assurance</strong> &mdash; reviewing and testing your own deliverables</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-500/20 p-6">
                <h4 className="text-gray-400 font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Non-Billable Hours
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-gray-200">Admin and bookkeeping</strong> &mdash; filing, organising, expense tracking, tax preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-gray-200">Marketing and social media</strong> &mdash; content creation, website updates, SEO, advertising</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-gray-200">Networking and events</strong> &mdash; industry meetups, conferences, LinkedIn engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-gray-200">Professional development</strong> &mdash; courses, certifications, learning new tools and skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-gray-200">Invoicing and payment chasing</strong> &mdash; creating invoices, sending reminders, reconciling payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-gray-200">Proposals and pitching</strong> &mdash; writing proposals, quoting, scoping new projects</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The Hidden Cost of Non-Billable Work</p>
              <p className="text-gray-400 text-sm">
                If you charge $100/hr and work 40 hours per week but only bill 25 of those hours, you earn $2,500/week &mdash; not $4,000. That means <strong className="text-gray-200">every hour of non-billable work effectively costs you $100 in lost revenue</strong>. This is why automating admin tasks (invoicing, bookkeeping, scheduling) has such a high return on investment. Saving 3 hours per week on admin equals $15,600 per year in additional billable capacity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: How to Calculate Your Billable Rate */}
        <section id="calculate-billable-rate">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Calculate Your Billable Rate</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Your billable rate is not just a number you feel comfortable with &mdash; it should be a <strong className="text-white">calculated figure based on your income goals, realistic billable hours, and business costs</strong>. Here is the formula and a worked example for Australian freelancers:
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The Basic Formula</h3>
            <div className="rounded-xl bg-gray-800/50 border border-sky-500/30 p-6 mt-3">
              <p className="text-sky-400 font-mono text-lg text-center mb-4">
                Target Annual Income &divide; Annual Billable Hours = Hourly Rate
              </p>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">1</span>
                  <div>
                    <p className="text-white font-medium">Set Your Income Target</p>
                    <p>Decide what you want to take home after tax. Example: <strong className="text-gray-200">$120,000</strong></p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">2</span>
                  <div>
                    <p className="text-white font-medium">Calculate Annual Billable Hours</p>
                    <p>48 working weeks &times; 25 billable hrs/week = <strong className="text-gray-200">1,200 billable hours per year</strong></p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">3</span>
                  <div>
                    <p className="text-white font-medium">Basic Hourly Rate</p>
                    <p>$120,000 &divide; 1,200 hours = <strong className="text-gray-200">$100/hr</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The Adjusted Formula (for Australian Freelancers)</h3>
            <p className="text-gray-300 leading-relaxed">
              The basic formula does not account for the additional costs of being self-employed in Australia. You need to factor in superannuation, business expenses, insurance, and other overheads:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-sky-500/30 p-6 mt-3">
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Target income</span>
                  <span className="text-white font-medium">$120,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Super (11.5% of income)</span>
                  <span className="text-white font-medium">$13,800</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Business expenses (software, insurance, equipment)</span>
                  <span className="text-white font-medium">$8,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-sky-500/10 border border-sky-500/20">
                  <span className="text-sky-400 font-medium">= Total required revenue</span>
                  <span className="text-sky-400 font-bold">$141,800</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">&divide; Annual billable hours</span>
                  <span className="text-white font-medium">1,200 hours</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-sky-500/10 border border-sky-500/20">
                  <span className="text-sky-400 font-medium">= Adjusted hourly rate</span>
                  <span className="text-sky-400 font-bold text-lg">~$118/hr</span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Australian Freelancer Rates by Profession (2025&ndash;26)</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Profession</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Typical Hourly Rate</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Experience Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white">Web Developer</td>
                      <td className="py-3 px-4 text-gray-300">$100&ndash;$180/hr</td>
                      <td className="py-3 px-4"><span className="text-sky-400 text-xs font-medium bg-sky-500/10 px-2 py-0.5 rounded-full">Mid&ndash;Senior</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Graphic / UI Designer</td>
                      <td className="py-3 px-4 text-gray-300">$80&ndash;$150/hr</td>
                      <td className="py-3 px-4"><span className="text-sky-400 text-xs font-medium bg-sky-500/10 px-2 py-0.5 rounded-full">Mid&ndash;Senior</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Copywriter / Content Writer</td>
                      <td className="py-3 px-4 text-gray-300">$80&ndash;$140/hr</td>
                      <td className="py-3 px-4"><span className="text-sky-400 text-xs font-medium bg-sky-500/10 px-2 py-0.5 rounded-full">Mid&ndash;Senior</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Business / Management Consultant</td>
                      <td className="py-3 px-4 text-gray-300">$120&ndash;$250/hr</td>
                      <td className="py-3 px-4"><span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-0.5 rounded-full">Senior&ndash;Expert</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Photographer / Videographer</td>
                      <td className="py-3 px-4 text-gray-300">$80&ndash;$200/hr</td>
                      <td className="py-3 px-4"><span className="text-sky-400 text-xs font-medium bg-sky-500/10 px-2 py-0.5 rounded-full">Mid&ndash;Senior</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Accountant / Bookkeeper</td>
                      <td className="py-3 px-4 text-gray-300">$100&ndash;$200/hr</td>
                      <td className="py-3 px-4"><span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-0.5 rounded-full">Senior&ndash;Expert</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Indicative rates based on Australian market data for 2025&ndash;26. Actual rates vary by specialisation, location, client type, and demand. GST is charged on top for GST-registered freelancers.</p>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Super Is Not Optional</p>
              <p className="text-gray-400 text-sm">
                As a sole trader in Australia, you are not legally required to pay yourself superannuation &mdash; but you absolutely should. The current super guarantee rate is <strong className="text-gray-200">11.5% (2025&ndash;26 financial year)</strong>. If you do not factor super into your rate, you are effectively paying yourself 11.5% less than an equivalent employee &mdash; and missing out on decades of compound growth. Treat super as a non-negotiable business cost in your rate calculation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Time Tracking Best Practices */}
        <section id="time-tracking-best-practices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Time Tracking Best Practices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Accurate time tracking is the foundation of fair billing and profitable freelancing. Here are the practices that separate professionals from amateurs:
            </p>

            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Start the Timer When You Start Working</p>
                  <p className="text-gray-400 text-sm">Not after you finish. Not at the end of the day. Start tracking the moment you begin working on a client task. Retrospective time logging is inaccurate &mdash; studies show that people underestimate time spent by 10&ndash;25% when logging from memory.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Track in Real-Time, Not From Memory</p>
                  <p className="text-gray-400 text-sm">Use a timer app or built-in time tracker. Real-time tracking is always more accurate than end-of-day or end-of-week logging. If you must log manually, do it immediately after finishing each task &mdash; not hours later.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Use Consistent Billing Increments</p>
                  <p className="text-gray-400 text-sm">Standard practice is <strong className="text-gray-200">15-minute increments</strong> for most freelancers. Legal and accounting professionals use <strong className="text-gray-200">6-minute increments</strong> (one-tenth of an hour). Pick one and stick with it. A 5-minute call bills as 15 minutes. A 20-minute task bills as 30 minutes. State your increment in your contract.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Record What You Did, Not Just How Long</p>
                  <p className="text-gray-400 text-sm">Good time entries include a brief description: &quot;Homepage hero section &mdash; responsive layout and animations (2.5 hrs)&quot;, not just &quot;Website work (2.5 hrs)&quot;. Detailed descriptions help with invoicing, client disputes, project estimation, and your own productivity analysis.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Separate by Project and Client</p>
                  <p className="text-gray-400 text-sm">Never lump multiple clients into one time entry. Track each project separately so you can generate accurate per-client invoices, analyse profitability by client, and identify which projects are worth your time.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Review Weekly for Accuracy</p>
                  <p className="text-gray-400 text-sm">Set a weekly review habit (Friday afternoon works well). Check for missed entries, correct any errors, and ensure your hours align with what you actually delivered. Catching mistakes weekly is far easier than fixing them monthly.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Common Time Tracking Methods</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-sky-400 font-medium mb-2">Manual Timesheet</h4>
                <p className="text-gray-400 text-sm">Spreadsheet or paper log. Simple but prone to error and forgetting. Best for freelancers with one or two clients and predictable schedules.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-sky-400 font-medium mb-2">Timer App</h4>
                <p className="text-gray-400 text-sm">Dedicated time tracking apps with start/stop timers. Accurate and easy. Best for freelancers who work on multiple projects and need real-time tracking.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-sky-400 font-medium mb-2">Project Management Tool</h4>
                <p className="text-gray-400 text-sm">Built-in time tracking within project management platforms. Good for teams and complex projects where time needs to be linked to specific tasks.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-sky-400 font-medium mb-2">Automated Tracking</h4>
                <p className="text-gray-400 text-sm">Software that runs in the background and tracks which apps and files you work on. Most accurate but requires review and categorisation. Best for developers and designers.</p>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">ATO Record-Keeping: 5 Years</p>
              <p className="text-gray-400 text-sm">
                The ATO requires Australian sole traders and freelancers to <strong className="text-gray-200">keep business records for at least 5 years</strong> from when you prepared or obtained them, or from when you completed the transactions or acts they relate to (whichever is later). This includes time records, invoices, and receipts. Digital records are accepted &mdash; use cloud-based tools to ensure your records are backed up and accessible if the ATO comes knocking.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Billable Hours Mistakes */}
        <section id="common-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Billable Hours Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Most freelancers leave money on the table through poor time tracking habits. Here are the seven most common mistakes &mdash; and how to fix them:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">1</span>
                  <h3 className="text-lg font-semibold text-white">Not Tracking Non-Billable Time</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  You cannot optimise what you do not measure. If you only track billable hours, you have no idea how much time you spend on admin, marketing, or invoicing. Track everything &mdash; billable and non-billable &mdash; for at least one month. Most freelancers are shocked to discover how much time they spend on non-revenue work. Once you see the numbers, you can make informed decisions about what to automate, delegate, or eliminate.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">2</span>
                  <h3 className="text-lg font-semibold text-white">Rounding Down</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Freelancers consistently undercharge by an estimated <strong className="text-gray-200">15% on average</strong> due to rounding down, not billing for small tasks, and giving away time for free. A 10-minute email response is billable. A 7-minute phone call rounds up to your billing increment (15 minutes). If you would not do the work for free, do not give it away for free. Your billing increment exists for a reason &mdash; use it consistently.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">3</span>
                  <h3 className="text-lg font-semibold text-white">Not Billing for Scope Changes</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When a client asks for &quot;just one more small change&quot; that was not in the original scope, that is additional billable work. Scope creep is the silent profit killer for freelancers. Have a clear change request process in your contract: any work outside the original brief is quoted and approved separately before you start. Track the additional hours and invoice them.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">4</span>
                  <h3 className="text-lg font-semibold text-white">Forgetting Travel Time</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you travel to a client&apos;s office for a meeting, that travel time has a real cost. Many freelancers absorb 1&ndash;2 hours of travel per meeting without billing for it. At $100/hr, that is $200 of free work per client visit. Either bill travel at your full rate, at 50% of your rate, or include a flat travel fee. Whatever you choose, define it in your contract before starting work.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">5</span>
                  <h3 className="text-lg font-semibold text-white">Not Accounting for Communication Time</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Emails, Slack messages, phone calls, and text messages about a client project are billable work. A client who sends 15 emails per day can consume 1&ndash;2 hours of your time just in communication &mdash; time that is rarely tracked or invoiced. Start your timer when you read or respond to client messages. If communication becomes excessive, raise it with the client and suggest consolidating questions into scheduled calls.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">6</span>
                  <h3 className="text-lg font-semibold text-white">Using Project Rates Without Tracking Hours</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Even if you charge flat project rates, you should still track your hours internally. Without tracking, you cannot calculate your <strong className="text-gray-200">effective hourly rate</strong> &mdash; the actual amount you earn per hour after all the work is done. A $5,000 project that takes 30 hours pays $167/hr. The same project that takes 60 hours because of scope creep pays only $83/hr. You need this data to price future projects accurately and identify unprofitable clients.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">7</span>
                  <h3 className="text-lg font-semibold text-white">Not Raising Rates Annually</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Inflation, increased experience, and growing demand for your skills all justify annual rate increases. If you charged $100/hr three years ago and still charge $100/hr today, you are effectively taking a pay cut every year. Review your rates annually. Increase by at least the inflation rate (3&ndash;4% in Australia), and more if your skills and reputation have grown. Give existing clients 30&ndash;60 days notice of rate changes.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The Cost of These Mistakes</p>
              <p className="text-gray-400 text-sm">
                Collectively, these mistakes can cost a freelancer <strong className="text-gray-200">$15,000&ndash;$30,000 per year</strong> in lost revenue. That is an extra holiday, a significant super contribution, or a deposit on an investment property. Fixing your time tracking habits is one of the highest-ROI activities you can do as a freelancer &mdash; it costs nothing but attention.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Tracking Billable Hours with InvoiceFlow */}
        <section id="tracking-with-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tracking Billable Hours with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built for Australian freelancers who want to <strong className="text-white">track time accurately and turn hours into invoices</strong> without juggling multiple tools. Here is how it solves the billable hours problem:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">One-Click Timer</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Start tracking with a single click. Select your client and project, hit start, and InvoiceFlow records every second. <strong className="text-gray-200">No separate timer app required.</strong> Switch between projects instantly. The timer runs in the background so you can focus on your work, not on tracking it. Stop the timer when you are done and InvoiceFlow automatically rounds to your preferred billing increment.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Project-Based Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Organise time entries by client and project. See exactly how many hours you have spent on each project, compare against quotes or estimates, and identify which projects are profitable. <strong className="text-gray-200">Project-level insights</strong> help you make better quoting decisions for future work and spot unprofitable clients before they drain your time.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automatic Invoice Generation from Tracked Hours</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Select a date range, choose a client, and InvoiceFlow <strong className="text-gray-200">generates a professional invoice from your tracked hours automatically</strong>. Each time entry becomes a line item with description, hours, rate, and amount. No manual data entry, no copy-pasting from spreadsheets, no formatting headaches. The invoice is ready to review and send in seconds.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Weekly and Monthly Reports</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See your billable hours at a glance with <strong className="text-gray-200">weekly and monthly breakdowns</strong>. Track your utilisation rate over time, identify trends, and spot weeks where non-billable work crept too high. Reports show billable vs non-billable hours, revenue by client, and hours by project &mdash; giving you the data to make smarter business decisions.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Client-Level Insights</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See how much time and revenue each client generates. Identify your most profitable clients (high rate, low communication overhead) and your least profitable ones (low rate, high admin burden). <strong className="text-gray-200">Client-level analytics</strong> help you decide which relationships to grow, which to renegotiate, and which to phase out.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Billable vs Non-Billable Ratio Dashboard</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track your billable utilisation rate in real-time with a dedicated dashboard widget. See your <strong className="text-gray-200">billable-to-non-billable ratio</strong> for the current week, month, and quarter. Set a target utilisation rate and get alerts when you are falling below it. This is the single most important metric for freelance profitability &mdash; and InvoiceFlow puts it front and centre.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">From Tracking to Invoice in 30 Seconds</p>
              <p className="text-gray-400 text-sm">
                The biggest friction point for freelancers is the gap between tracking time and getting paid. InvoiceFlow <strong className="text-gray-200">eliminates that gap entirely</strong>. Track your hours as you work, then generate a detailed, professional invoice with one click. Your time entries become line items, your rate is applied automatically, GST is calculated, and the invoice is ready to send. No spreadsheets. No manual entry. No excuses for delayed invoicing.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you track time and maximise your billable hours.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-sky-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-sky-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on pricing, invoicing, and getting paid.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-sky-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-sky-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-sky-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Losing Money. Start Tracking Every Billable Hour.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow gives Australian freelancers a built-in time tracker, one-click invoice generation from tracked hours, and real-time utilisation insights &mdash; so you bill for every minute of work you deliver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/rate-calculator">
              <Button variant="secondary">Calculate Your Rate</Button>
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
