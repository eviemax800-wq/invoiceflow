import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Overhead Costs for Freelancers: How to Calculate, Reduce & Price Around Them — InvoiceFlow',
  description:
    'What is overhead? Learn how to calculate your overhead rate, understand fixed vs variable overhead, reduce overhead costs without sacrificing quality, and price your freelance services to cover every indirect expense. Australian-focused with ATO 2025-26 rules.',
  keywords: [
    'overhead costs freelancer',
    'overhead rate calculation',
    'what is overhead in business',
    'overhead expenses meaning',
    'overhead cost examples',
    'freelance overhead percentage',
    'overhead vs direct costs',
    'reducing overhead costs small business',
  ],
  alternates: { canonical: '/glossary/overhead' },
  openGraph: {
    title: 'Overhead Costs for Freelancers: How to Calculate, Reduce & Price Around Them — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about overhead costs: definition, types (fixed, variable, semi-variable), overhead rate calculation, reduction strategies, and how to price your services so overhead never eats your profit.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/overhead',
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
    { '@type': 'ListItem', position: 3, name: 'Overhead', item: `${BASE_URL}/glossary/overhead` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a good overhead percentage for a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A healthy overhead percentage for freelancers typically falls between 15% and 30% of gross revenue. Service-based freelancers with minimal equipment needs (writers, consultants, virtual assistants) tend to sit at the lower end around 15 to 20 percent. Creative freelancers who need specialised software and hardware (designers, videographers, photographers) usually run 20 to 30 percent. If your overhead exceeds 35 percent, you should audit your expenses for unnecessary costs or consider whether your pricing is too low. The key is to track your overhead consistently so you can spot creep early and adjust before it erodes your profit margin.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between overhead costs and direct costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Direct costs are expenses you can attribute to a specific client project — materials purchased for a job, subcontractor fees for that project, stock photography licensed for a particular design, or printing costs for a client deliverable. Overhead costs are indirect expenses that support your entire business but cannot be tied to any single project — rent, insurance, software subscriptions, internet, accounting fees, professional development, and marketing. The distinction matters because direct costs should be charged to the client (either as line items or built into your project price), while overhead must be spread across all your work through your hourly rate or project pricing formula.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate my overhead rate per hour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To calculate your overhead rate per hour: (1) List all your annual overhead costs — rent, insurance, software, internet, phone, professional development, marketing, accounting fees, equipment depreciation, and any other indirect business expenses. (2) Total them up for the year. (3) Divide by your annual billable hours (not total working hours). For example, if your total annual overhead is $18,600 and you bill 1,200 hours per year (about 25 hours per week for 48 weeks), your overhead rate is $15.50 per hour. This means every billable hour must cover at least $15.50 in overhead before you earn a single dollar of profit. Add this to your desired hourly earnings and tax obligations to set your minimum viable rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim overhead costs as tax deductions in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most overhead costs are tax-deductible for Australian sole traders and freelancers. The ATO allows deductions for business-related expenses including home office costs (67 cents per hour fixed rate or actual cost method), internet and phone (business-use percentage), software subscriptions used for work, professional indemnity and public liability insurance, accounting and tax agent fees, professional development courses, marketing and advertising costs, and equipment depreciation. Items under $300 used predominantly for business can be claimed immediately. Items under $20,000 qualify for the instant asset write-off. You must keep records for 5 years and the expense must have a direct connection (nexus) to earning your assessable income.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I reduce my overhead costs without hurting my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eight proven strategies to reduce freelancer overhead: (1) Work from home instead of renting an office or co-working space — saves $3,000 to $6,000 per year. (2) Switch to annual billing for software subscriptions to save 15 to 20 percent versus monthly plans. (3) Use open-source alternatives where possible — LibreOffice instead of Microsoft 365, GIMP instead of Photoshop for basic editing. (4) Bundle your insurance policies with one provider for multi-policy discounts of 10 to 15 percent. (5) Maximise tax deductions to reduce the effective cost of every overhead item. (6) Renegotiate or cancel underused subscriptions — audit every recurring charge quarterly. (7) Automate admin tasks with tools like InvoiceFlow to reduce non-billable time spent on invoicing and bookkeeping. (8) Make strategic equipment purchases at end of financial year to maximise instant asset write-off claims.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-overhead', label: '1. What Is Overhead?' },
  { id: 'types-of-overhead', label: '2. Types of Overhead' },
  { id: 'calculating-overhead-rate', label: '3. Calculating Your Overhead Rate' },
  { id: 'reducing-overhead', label: '4. Reducing Overhead Without Sacrificing Quality' },
  { id: 'overhead-pricing-strategy', label: '5. Overhead & Pricing Strategy' },
  { id: 'invoiceflow-overhead', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly rate factoring in overhead, tax, super, and profit goals.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'See your real profit margins after accounting for all overhead and direct costs.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Discover which of your overhead costs are tax-deductible under ATO rules.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'Estimate your tax bill after deducting all overhead expenses from your assessable income.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'Build overhead, tax, super, and profit margins into your pricing formula.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'The complete guide to deducting overhead costs and reducing your taxable income.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'End-of-year checklist to maximise overhead deductions before 30 June.',
  },
];

export default function OverheadGlossaryPage() {
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
            <span className="text-white">Overhead</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Business Finance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Overhead Costs:{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              The Hidden Expense Freelancers Underestimate
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Overhead costs are the indirect expenses that keep your freelance business running &mdash; but that you cannot bill to any single client. Most freelancers underestimate them by 40% or more, leading to underpriced services and razor-thin margins. This guide covers what overhead is, how to calculate your overhead rate, the different types, and how to reduce overhead without sacrificing the quality that wins you clients.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>13 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO 2025-26 Rules Covered</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">22%</span>
              <div>
                <p className="text-white font-medium text-sm">Average Freelancer Overhead</p>
                <p className="text-gray-400 text-sm">Typical overhead as a percentage of gross revenue for Australian freelancers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$15</span>
              <div>
                <p className="text-white font-medium text-sm">Per-Hour Overhead Cost</p>
                <p className="text-gray-400 text-sm">Average hourly overhead for a freelancer with $18,600/yr in indirect costs</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">40%</span>
              <div>
                <p className="text-white font-medium text-sm">Underestimation Rate</p>
                <p className="text-gray-400 text-sm">Most freelancers underestimate their true overhead by 40% or more</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-orange-400 text-xs font-bold">$20K</span>
              <div>
                <p className="text-white font-medium text-sm">Instant Asset Write-Off</p>
                <p className="text-gray-400 text-sm">ATO threshold for immediately deducting equipment purchases in 2025-26</p>
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

        {/* Section 1: What Is Overhead? */}
        <section id="what-is-overhead">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Overhead?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Overhead refers to the <strong className="text-white">indirect costs of running your business that are not directly tied to a specific project or client</strong>. These are the expenses you incur whether you have one client or ten &mdash; the cost of keeping your freelance operation alive and functional. Your rent does not go away when you finish a project. Your software subscriptions keep billing. Your insurance premiums are due regardless of your workload.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The distinction between overhead and direct costs is fundamental to running a profitable freelance business. <strong className="text-white">Direct costs</strong> can be attributed to a specific client or project &mdash; stock photography purchased for a design project, subcontractor fees on a particular website build, or printing costs for a client presentation. <strong className="text-white">Overhead costs</strong> support your entire business and must be spread across all your work through your pricing.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Why Overhead Matters for Freelancers</h3>
            <p className="text-gray-300 leading-relaxed">
              Most freelancers dramatically underestimate their overhead. They set their hourly rate by thinking about what they want to earn per hour, then forget that a significant portion of that rate must cover indirect costs before they see any profit. The result? They end up earning far less than they expected &mdash; and cannot figure out why.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Consider this: if you charge <strong className="text-white">$100 per hour</strong> and your overhead works out to $15.50 per hour, you are actually earning $84.50 per hour before tax. After <Link href="/glossary/income-tax" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">income tax</Link> and <Link href="/glossary/superannuation" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">superannuation</Link>, your real take-home could be closer to $55 per hour. That is a 45% gap between what you charge and what you keep. Understanding overhead is the first step to closing that gap.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Common Overhead Categories</h3>
            <p className="text-gray-300 leading-relaxed">
              Every freelance business has overhead, even if it feels minimal. Here are the categories most freelancers encounter:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <h4 className="text-amber-400 font-medium text-sm mb-2">Office &amp; Workspace</h4>
                <p className="text-gray-400 text-sm">Home office costs, co-working memberships, rent, electricity, heating and cooling. Even a dedicated room in your home has a cost the ATO lets you claim.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <h4 className="text-amber-400 font-medium text-sm mb-2">Software Subscriptions</h4>
                <p className="text-gray-400 text-sm">Adobe Creative Cloud, Figma, accounting software, project management tools, cloud storage, domain names, and hosting. These add up fast &mdash; $200&ndash;$500/month is common.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <h4 className="text-amber-400 font-medium text-sm mb-2">Insurance</h4>
                <p className="text-gray-400 text-sm"><Link href="/glossary/professional-indemnity" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">Professional indemnity</Link>, <Link href="/glossary/public-liability" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">public liability</Link>, income protection, and <Link href="/glossary/business-insurance" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">business insurance</Link>. Non-negotiable for serious freelancers.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <h4 className="text-amber-400 font-medium text-sm mb-2">Professional Development</h4>
                <p className="text-gray-400 text-sm">Courses, certifications, conferences, books, and industry memberships. Staying current is a business cost, not a personal luxury.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <h4 className="text-amber-400 font-medium text-sm mb-2">Marketing &amp; Advertising</h4>
                <p className="text-gray-400 text-sm">Website hosting, SEO tools, social media management, paid advertising, portfolio platform subscriptions, and business cards.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <h4 className="text-amber-400 font-medium text-sm mb-2">Accounting &amp; Legal</h4>
                <p className="text-gray-400 text-sm">Tax agent fees, <Link href="/glossary/bookkeeping" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">bookkeeping</Link> services, legal advice, contract templates, and <Link href="/glossary/bas" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">BAS</Link> lodgement assistance.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <h4 className="text-amber-400 font-medium text-sm mb-2">Equipment Depreciation</h4>
                <p className="text-gray-400 text-sm">Laptops, monitors, cameras, phones, and furniture lose value over time. <Link href="/glossary/depreciation" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">Depreciation</Link> is a real cost even if you do not see cash leaving your account.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <h4 className="text-amber-400 font-medium text-sm mb-2">Communications</h4>
                <p className="text-gray-400 text-sm">Internet plan, mobile phone plan, VoIP services, and video conferencing subscriptions (Zoom, Teams). Business-use percentage is deductible.</p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Overhead vs Direct Costs: Quick Reference</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-3">
                <div>
                  <p className="text-gray-200 font-medium text-sm mb-2">Overhead (Indirect Costs)</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>Rent / home office costs</li>
                    <li>Software subscriptions</li>
                    <li>Insurance premiums</li>
                    <li>Internet and phone plans</li>
                    <li>Accounting and legal fees</li>
                    <li>Marketing and advertising</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-200 font-medium text-sm mb-2">Direct Costs (Project-Specific)</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>Stock photos for a design project</li>
                    <li>Subcontractor fees for a specific job</li>
                    <li>Printing costs for client deliverables</li>
                    <li>Materials purchased for a project</li>
                    <li>Travel to a client site (project-specific)</li>
                    <li>Licensed fonts or assets for one client</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Types of Overhead */}
        <section id="types-of-overhead">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Overhead</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not all overhead costs behave the same way. Understanding the three types helps you forecast your expenses, plan for quiet months, and make smarter decisions about which costs to cut when revenue dips.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">F</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Fixed Overhead</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Fixed overhead costs <strong className="text-gray-200">remain the same regardless of how much work you do</strong>. Whether you bill 10 hours or 40 hours in a week, these costs do not change. They are predictable and easy to budget for, but they also represent your baseline cost of being in business &mdash; the minimum you must earn just to break even.
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-amber-400">&bull;</span> Office rent or co-working membership</div>
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-amber-400">&bull;</span> Software subscriptions (annual plans)</div>
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-amber-400">&bull;</span> Insurance premiums</div>
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-amber-400">&bull;</span> Domain name renewals</div>
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-amber-400">&bull;</span> Accounting retainer fees</div>
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-amber-400">&bull;</span> Professional association memberships</div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-orange-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <span className="text-orange-400 font-bold text-sm">V</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Variable Overhead</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Variable overhead costs <strong className="text-gray-200">fluctuate with your level of business activity</strong>. When you are busy, these costs rise. When work slows down, they decrease. This makes them harder to predict but easier to control &mdash; you can scale them back quickly during quiet periods.
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-orange-400">&bull;</span> Marketing and advertising spend</div>
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-orange-400">&bull;</span> Travel costs (client meetings)</div>
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-orange-400">&bull;</span> Office supplies and stationery</div>
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-orange-400">&bull;</span> Electricity (usage-based portion)</div>
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-orange-400">&bull;</span> Networking and event costs</div>
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-orange-400">&bull;</span> Cloud usage charges (pay-per-use)</div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-600/30 flex items-center justify-center">
                    <span className="text-gray-300 font-bold text-sm">S</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Semi-Variable Overhead</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Semi-variable overhead has <strong className="text-gray-200">a fixed base component plus a variable element</strong> that changes with usage. These costs have a minimum floor but can increase when activity picks up. Understanding them helps you budget accurately by accounting for both the baseline and the potential upside.
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-gray-400">&bull;</span> Internet (base plan + overage charges)</div>
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-gray-400">&bull;</span> Phone plan (base + excess data/calls)</div>
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-gray-400">&bull;</span> Cloud storage (base tier + extra GB)</div>
                  <div className="text-sm text-gray-400 flex items-center gap-2"><span className="text-gray-400">&bull;</span> Vehicle costs (registration + fuel usage)</div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <h3 className="text-lg font-semibold text-white mt-8">Overhead Comparison Table</h3>
            <p className="text-gray-300 leading-relaxed">
              The following table categorises common freelancer overhead costs by type, with typical annual costs for an Australian-based freelancer:
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="py-3 pr-4 text-gray-400 font-medium">Expense</th>
                    <th className="py-3 pr-4 text-gray-400 font-medium">Type</th>
                    <th className="py-3 pr-4 text-gray-400 font-medium">Typical Annual Cost</th>
                    <th className="py-3 text-gray-400 font-medium">Tax Deductible?</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Home office (fixed rate method)</td>
                    <td className="py-3 pr-4"><span className="text-amber-400 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/10">Fixed</span></td>
                    <td className="py-3 pr-4">$1,072&ndash;$1,608</td>
                    <td className="py-3 text-green-400">Yes &mdash; 67c/hr</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Co-working membership</td>
                    <td className="py-3 pr-4"><span className="text-amber-400 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/10">Fixed</span></td>
                    <td className="py-3 pr-4">$3,000&ndash;$6,000</td>
                    <td className="py-3 text-green-400">Yes &mdash; 100%</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Software subscriptions</td>
                    <td className="py-3 pr-4"><span className="text-amber-400 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/10">Fixed</span></td>
                    <td className="py-3 pr-4">$2,400&ndash;$6,000</td>
                    <td className="py-3 text-green-400">Yes &mdash; 100% if business-only</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Professional indemnity insurance</td>
                    <td className="py-3 pr-4"><span className="text-amber-400 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/10">Fixed</span></td>
                    <td className="py-3 pr-4">$400&ndash;$1,200</td>
                    <td className="py-3 text-green-400">Yes &mdash; 100%</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Public liability insurance</td>
                    <td className="py-3 pr-4"><span className="text-amber-400 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/10">Fixed</span></td>
                    <td className="py-3 pr-4">$300&ndash;$800</td>
                    <td className="py-3 text-green-400">Yes &mdash; 100%</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Accounting / tax agent fees</td>
                    <td className="py-3 pr-4"><span className="text-amber-400 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/10">Fixed</span></td>
                    <td className="py-3 pr-4">$800&ndash;$2,500</td>
                    <td className="py-3 text-green-400">Yes &mdash; 100%</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Internet plan</td>
                    <td className="py-3 pr-4"><span className="text-gray-400 text-xs font-medium px-2 py-0.5 rounded-full bg-gray-500/10">Semi-variable</span></td>
                    <td className="py-3 pr-4">$960&ndash;$1,440</td>
                    <td className="py-3 text-green-400">Yes &mdash; business % only</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Mobile phone plan</td>
                    <td className="py-3 pr-4"><span className="text-gray-400 text-xs font-medium px-2 py-0.5 rounded-full bg-gray-500/10">Semi-variable</span></td>
                    <td className="py-3 pr-4">$600&ndash;$1,200</td>
                    <td className="py-3 text-green-400">Yes &mdash; business % only</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Marketing and advertising</td>
                    <td className="py-3 pr-4"><span className="text-orange-400 text-xs font-medium px-2 py-0.5 rounded-full bg-orange-500/10">Variable</span></td>
                    <td className="py-3 pr-4">$500&ndash;$5,000</td>
                    <td className="py-3 text-green-400">Yes &mdash; 100%</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Professional development</td>
                    <td className="py-3 pr-4"><span className="text-orange-400 text-xs font-medium px-2 py-0.5 rounded-full bg-orange-500/10">Variable</span></td>
                    <td className="py-3 pr-4">$500&ndash;$3,000</td>
                    <td className="py-3 text-green-400">Yes &mdash; if work-related</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Equipment depreciation</td>
                    <td className="py-3 pr-4"><span className="text-amber-400 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/10">Fixed</span></td>
                    <td className="py-3 pr-4">$800&ndash;$3,000</td>
                    <td className="py-3 text-green-400">Yes &mdash; <Link href="/glossary/instant-asset-write-off" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">write-off</Link> or depreciate</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Travel (non-project)</td>
                    <td className="py-3 pr-4"><span className="text-orange-400 text-xs font-medium px-2 py-0.5 rounded-full bg-orange-500/10">Variable</span></td>
                    <td className="py-3 pr-4">$300&ndash;$2,000</td>
                    <td className="py-3 text-green-400">Yes &mdash; 85c/km or logbook</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">ATO Tax Deductibility</p>
              <p className="text-gray-400 text-sm">
                The vast majority of overhead costs are tax-deductible for Australian sole traders and freelancers. The ATO requires a direct nexus between the expense and your business activity. For mixed-use items (phone, internet, home office), you can only claim the business-use percentage. Items under $300 used predominantly for business can be claimed immediately. Items costing less than $20,000 qualify for the <Link href="/glossary/instant-asset-write-off" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">instant asset write-off</Link>. For <Link href="/glossary/work-from-home-deductions" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">work-from-home deductions</Link>, you can use the 67 cents per hour fixed rate method or the actual cost method &mdash; whichever gives you a higher claim.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Calculating Your Overhead Rate */}
        <section id="calculating-overhead-rate">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Calculating Your Overhead Rate</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Your overhead rate tells you <strong className="text-white">how much each billable hour must cover in indirect costs</strong> before you earn any profit. It is one of the most important numbers in your freelance business &mdash; and one most freelancers have never calculated.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Step-by-Step Guide</h3>
            <div className="space-y-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">1</span>
                  </div>
                  <h4 className="text-white font-semibold">List All Your Annual Overhead Costs</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Go through your bank statements and credit card bills for the past 12 months. Identify every recurring business expense that is not tied to a specific client project. Include software subscriptions, insurance, internet, phone, home office costs, accounting fees, marketing spend, professional development, equipment depreciation, and any other indirect costs. Be thorough &mdash; the items you forget are the ones that silently erode your margins.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">2</span>
                  </div>
                  <h4 className="text-white font-semibold">Determine Your Annual Billable Hours</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This is not your total working hours &mdash; it is the hours you can realistically bill to clients. Most full-time freelancers bill <Link href="/glossary/billable-hours" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">25&ndash;30 hours per week</Link> (the rest goes to admin, marketing, and business development). Multiply by the number of weeks you work per year (typically 46&ndash;48, allowing for holidays and sick days). A realistic figure for most full-time freelancers is 1,150&ndash;1,440 billable hours per year.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">3</span>
                  </div>
                  <h4 className="text-white font-semibold">Calculate: Overhead Rate = Total Overhead / Billable Hours</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Divide your total annual overhead by your annual billable hours. The result is the dollar amount each billable hour must contribute to covering your indirect costs. This number must be added to your desired hourly earnings (plus tax and super) to determine your minimum viable rate.
                </p>
              </div>
            </div>

            {/* Worked Example */}
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-900/10 to-orange-900/10 p-6 mt-8">
              <h4 className="text-white font-semibold mb-4">Worked Example: Freelance Designer</h4>
              <p className="text-gray-400 text-sm mb-4">
                Sarah is a freelance graphic designer based in Melbourne. Here is her annual overhead breakdown:
              </p>
              <div className="space-y-2 text-sm text-gray-400 mb-6">
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Home office (67c/hr x 1,600 hrs)</span><span className="text-white font-medium">$1,072</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Adobe Creative Cloud</span><span className="text-white font-medium">$900</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Figma (Professional plan)</span><span className="text-white font-medium">$216</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Accounting software (Xero)</span><span className="text-white font-medium">$468</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Project management (Notion)</span><span className="text-white font-medium">$120</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Cloud storage (Google Workspace)</span><span className="text-white font-medium">$172</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Professional indemnity insurance</span><span className="text-white font-medium">$650</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Public liability insurance</span><span className="text-white font-medium">$420</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Internet (business portion: 60%)</span><span className="text-white font-medium">$720</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Mobile phone (business portion: 70%)</span><span className="text-white font-medium">$588</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Tax agent / accountant fees</span><span className="text-white font-medium">$1,200</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Domain names and hosting</span><span className="text-white font-medium">$250</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Professional development (courses)</span><span className="text-white font-medium">$800</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Marketing (portfolio site, SEO tools)</span><span className="text-white font-medium">$600</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Equipment depreciation (MacBook Pro, monitor)</span><span className="text-white font-medium">$1,200</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Stationery and office supplies</span><span className="text-white font-medium">$180</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Industry membership (AGDA)</span><span className="text-white font-medium">$285</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Networking events and meetups</span><span className="text-white font-medium">$300</span></div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-4 text-center">
                  <p className="text-gray-400 text-xs mb-1">Total Annual Overhead</p>
                  <p className="text-amber-400 text-2xl font-bold">$10,141</p>
                </div>
                <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-4 text-center">
                  <p className="text-gray-400 text-xs mb-1">Annual Billable Hours</p>
                  <p className="text-white text-2xl font-bold">1,200</p>
                  <p className="text-gray-500 text-xs">25 hrs/wk x 48 wks</p>
                </div>
                <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-4 text-center">
                  <p className="text-gray-400 text-xs mb-1">Overhead Rate Per Hour</p>
                  <p className="text-orange-400 text-2xl font-bold">$8.45</p>
                  <p className="text-gray-500 text-xs">$10,141 / 1,200 hrs</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-amber-500/20">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">What this means:</strong> Every billable hour must cover $8.45 in overhead before Sarah earns a cent of profit. If she wants to take home $60 per hour after overhead, she needs to charge at least $68.45 &mdash; and that is before tax and superannuation.
                </p>
              </div>
            </div>

            {/* Overhead as % of Revenue */}
            <h3 className="text-lg font-semibold text-white mt-8">Overhead as a Percentage of Revenue</h3>
            <p className="text-gray-300 leading-relaxed">
              Another way to measure overhead is as a percentage of your gross revenue. The formula is simple: <strong className="text-white">(Total Annual Overhead / Gross Annual Revenue) x 100</strong>. For Sarah, if she earns $120,000 in gross revenue, her overhead percentage is ($10,141 / $120,000) x 100 = 8.5%. A healthy range for freelancers is 15&ndash;30%, so Sarah is running lean. Here is how different freelancer types typically stack up:
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="py-3 pr-4 text-gray-400 font-medium">Freelancer Type</th>
                    <th className="py-3 pr-4 text-gray-400 font-medium">Typical Overhead %</th>
                    <th className="py-3 text-gray-400 font-medium">Key Overhead Drivers</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Writer / Copywriter</td>
                    <td className="py-3 pr-4"><span className="text-green-400 font-medium">10&ndash;18%</span></td>
                    <td className="py-3 text-gray-400">Minimal software needs. Home office, internet, accounting.</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Web Developer</td>
                    <td className="py-3 pr-4"><span className="text-amber-400 font-medium">15&ndash;22%</span></td>
                    <td className="py-3 text-gray-400">Multiple software licences, hosting, hardware depreciation.</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Graphic Designer</td>
                    <td className="py-3 pr-4"><span className="text-amber-400 font-medium">18&ndash;25%</span></td>
                    <td className="py-3 text-gray-400">Adobe suite, stock assets, high-spec hardware, insurance.</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Consultant / Coach</td>
                    <td className="py-3 pr-4"><span className="text-green-400 font-medium">12&ndash;20%</span></td>
                    <td className="py-3 text-gray-400">Marketing, professional development, travel, insurance.</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Photographer / Videographer</td>
                    <td className="py-3 pr-4"><span className="text-orange-400 font-medium">25&ndash;35%</span></td>
                    <td className="py-3 text-gray-400">Expensive equipment, storage, editing software, insurance, travel.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Virtual Assistant</td>
                    <td className="py-3 pr-4"><span className="text-green-400 font-medium">8&ndash;15%</span></td>
                    <td className="py-3 text-gray-400">Minimal equipment. Software, internet, phone.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: Reducing Overhead Without Sacrificing Quality */}
        <section id="reducing-overhead">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Reducing Overhead Without Sacrificing Quality</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Cutting overhead is not about being cheap &mdash; it is about being <strong className="text-white">strategically lean</strong>. Every dollar saved on overhead is a dollar that goes directly to your profit (or lets you lower your rates to win more work). Here are eight proven strategies for Australian freelancers:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Home Office vs Co-Working</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A co-working membership in Melbourne or Sydney typically costs $250&ndash;$500 per month ($3,000&ndash;$6,000/year). Working from a dedicated <Link href="/glossary/work-from-home-deductions" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">home office</Link> costs a fraction of that and is claimable at 67 cents per hour. At 1,600 hours per year, your home office claim is $1,072 &mdash; saving you $1,928&ndash;$4,928 compared to co-working. Only use co-working if client meetings demand it or you genuinely cannot work productively from home.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Annual vs Monthly Software Billing</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Most SaaS tools offer <strong className="text-gray-200">15&ndash;20% discounts for annual billing</strong>. Adobe Creative Cloud drops from $86.99/month to $77.99/month on annual commitment &mdash; saving $108/year on just one subscription. Across 5&ndash;10 tools, annual billing saves $300&ndash;$800 per year. Only stay on monthly if you are genuinely uncertain about continuing the subscription.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Bundle Your Insurance Policies</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Holding professional indemnity and public liability with the same provider often yields a <strong className="text-gray-200">10&ndash;15% multi-policy discount</strong>. Providers like BizCover, Aon, and Insurance House offer bundled freelancer packages. Review your cover annually &mdash; you may be over-insured for your current risk profile, or you may find better rates by comparing providers.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Open-Source Alternatives</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Not every task requires premium software. LibreOffice replaces Microsoft 365 for basic documents. GIMP handles simple image editing. VS Code is free and more popular than paid IDEs. Blender is industry-grade 3D software at zero cost. Evaluate whether you truly need every premium tool or whether a free alternative covers 90% of what you use it for.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Maximise Tax Deductions</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every deductible overhead cost reduces its effective cost. At a 32.5% marginal tax rate (plus 2% Medicare levy), a $1,000 deductible expense only costs you $655 after the tax benefit. Use the <Link href="/glossary/instant-asset-write-off" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">$20,000 instant asset write-off</Link> for equipment purchases. Claim <Link href="/glossary/work-from-home-deductions" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">home office deductions</Link>. Track the business-use percentage of your phone and internet. Every dollar you claim reduces your <Link href="/glossary/income-tax" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">income tax</Link> bill.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Renegotiate and Audit Subscriptions</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Subscription creep is real. Do a <strong className="text-gray-200">quarterly audit of every recurring charge</strong>. Cancel tools you have not used in the past 30 days. Downgrade plans where you are paying for features you never touch. Contact providers and ask for loyalty discounts or offer to switch to annual billing in exchange for a better rate. Most freelancers find $500&ndash;$1,500 in annual savings from a single subscription audit.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">7</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automate Admin Tasks</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Non-billable admin time is an indirect overhead cost &mdash; it consumes hours you could be billing to clients. Automating invoicing, payment reminders, expense tracking, and bookkeeping reduces the time overhead of running your business. Tools like InvoiceFlow automate invoicing and payment follow-ups, saving 2&ndash;5 hours per week. At $100/hour, that is $10,000&ndash;$25,000 in recovered billable time per year.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">8</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Strategic Equipment Purchases</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Time your major purchases to maximise tax benefits. Buy equipment before 30 June to claim the <Link href="/glossary/instant-asset-write-off" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">instant asset write-off</Link> in the current financial year. Buy quality equipment that lasts &mdash; a $3,500 MacBook Pro that lasts 5 years costs $700/year in depreciation, while a $1,200 laptop that dies in 2 years costs $600/year plus replacement hassle and downtime. Think total cost of ownership, not sticker price.
                </p>
              </div>
            </div>

            {/* Cost Saving Comparison */}
            <div className="overflow-x-auto mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Cost-Saving Comparison</h3>
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="py-3 pr-4 text-gray-400 font-medium">Strategy</th>
                    <th className="py-3 pr-4 text-gray-400 font-medium">Before</th>
                    <th className="py-3 pr-4 text-gray-400 font-medium">After</th>
                    <th className="py-3 text-gray-400 font-medium">Annual Saving</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Home office vs co-working</td>
                    <td className="py-3 pr-4 text-red-400">$4,200/yr</td>
                    <td className="py-3 pr-4 text-green-400">$1,072/yr</td>
                    <td className="py-3 text-amber-400 font-medium">$3,128</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Annual vs monthly software billing</td>
                    <td className="py-3 pr-4 text-red-400">$5,400/yr</td>
                    <td className="py-3 pr-4 text-green-400">$4,590/yr</td>
                    <td className="py-3 text-amber-400 font-medium">$810</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Bundled insurance</td>
                    <td className="py-3 pr-4 text-red-400">$1,400/yr</td>
                    <td className="py-3 pr-4 text-green-400">$1,190/yr</td>
                    <td className="py-3 text-amber-400 font-medium">$210</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Open-source alternatives (2 tools)</td>
                    <td className="py-3 pr-4 text-red-400">$720/yr</td>
                    <td className="py-3 pr-4 text-green-400">$0/yr</td>
                    <td className="py-3 text-amber-400 font-medium">$720</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">Tax deduction benefit (at 34.5%)</td>
                    <td className="py-3 pr-4 text-red-400">$18,600 gross</td>
                    <td className="py-3 pr-4 text-green-400">$12,183 net</td>
                    <td className="py-3 text-amber-400 font-medium">$6,417</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Subscription audit (cancel unused)</td>
                    <td className="py-3 pr-4 text-red-400">$6,000/yr</td>
                    <td className="py-3 pr-4 text-green-400">$4,800/yr</td>
                    <td className="py-3 text-amber-400 font-medium">$1,200</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t border-amber-500/30">
                    <td className="py-3 pr-4 text-white font-semibold" colSpan={3}>Total Potential Annual Savings</td>
                    <td className="py-3 text-amber-400 font-bold text-lg">$12,485</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>

        {/* Section 5: Overhead & Pricing Strategy */}
        <section id="overhead-pricing-strategy">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Overhead &amp; Pricing Strategy</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              This is where overhead knowledge becomes power. The single biggest pricing mistake freelancers make is <strong className="text-white">setting their rate based on desired income alone, without factoring in overhead, tax, super, or non-billable time</strong>. The result is chronic underearning.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The Pricing Formula</h3>
            <p className="text-gray-300 leading-relaxed">
              Your minimum hourly rate must cover four components. Anything less and you are losing money:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6 mt-4">
              <p className="text-amber-400 font-mono text-center text-lg mb-4">
                Minimum Rate = (Desired Salary + Overhead + Tax + Super) / Billable Hours
              </p>
              <div className="grid sm:grid-cols-4 gap-3">
                <div className="text-center p-3 rounded-lg bg-gray-900/50">
                  <p className="text-gray-400 text-xs mb-1">Desired Take-Home</p>
                  <p className="text-white font-bold">Your salary</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-gray-900/50">
                  <p className="text-gray-400 text-xs mb-1">Overhead</p>
                  <p className="text-amber-400 font-bold">Indirect costs</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-gray-900/50">
                  <p className="text-gray-400 text-xs mb-1">Tax + Medicare</p>
                  <p className="text-orange-400 font-bold">ATO obligations</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-gray-900/50">
                  <p className="text-gray-400 text-xs mb-1">Super (11.5%)</p>
                  <p className="text-yellow-400 font-bold">Retirement</p>
                </div>
              </div>
            </div>

            {/* Worked Example */}
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-900/10 to-orange-900/10 p-6 mt-8">
              <h4 className="text-white font-semibold mb-4">Worked Example: $100K Salary Target</h4>
              <p className="text-gray-400 text-sm mb-4">
                Alex is a freelance web developer in Melbourne who wants to take home $100,000 per year after tax. Here is the reality:
              </p>
              <div className="space-y-2 text-sm text-gray-400 mb-6">
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Desired take-home salary</span><span className="text-white font-medium">$100,000</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Income tax + Medicare levy (on ~$155K gross)</span><span className="text-orange-400 font-medium">$40,697</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Superannuation (11.5% of gross)</span><span className="text-yellow-400 font-medium">$17,825</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Annual overhead costs</span><span className="text-amber-400 font-medium">$18,600</span></div>
                <div className="flex justify-between border-b border-amber-500/30 pb-2"><span className="text-white font-semibold">Total gross revenue needed</span><span className="text-white font-bold">$177,122</span></div>
                <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>Annual billable hours (25 hrs/wk x 48 wks)</span><span className="text-white font-medium">1,200 hours</span></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-4">
                  <h5 className="text-red-400 font-medium mb-3">What Most Freelancers Charge</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>They think: &quot;I want $100K, so I will charge $100K / 2,080 hours = <strong className="text-red-400">$48/hr</strong>&quot;</p>
                    <p className="text-gray-500">This assumes 40 billable hours/week, 52 weeks/year. It ignores overhead, tax, super, and holidays.</p>
                    <div className="border-t border-gray-700/50 pt-2">
                      <p className="text-red-400 font-medium">Actual take-home: ~$38,000</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-4">
                  <h5 className="text-green-400 font-medium mb-3">What Alex Should Charge</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>Correct calculation: $177,122 / 1,200 billable hours = <strong className="text-green-400">$148/hr</strong></p>
                    <p className="text-gray-500">This covers take-home salary, tax, super, overhead, and realistic billable hours.</p>
                    <div className="border-t border-gray-700/50 pt-2">
                      <p className="text-green-400 font-medium">Actual take-home: $100,000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-amber-500/20">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">The gap is $100/hr.</strong> A freelancer who ignores overhead, tax, super, and non-billable time charges $48/hr when they need $148/hr. That is a 67% pricing error &mdash; and the primary reason so many freelancers feel like they are working hard and earning nothing.
                </p>
              </div>
            </div>

            {/* Pricing Audit Checklist */}
            <h3 className="text-lg font-semibold text-white mt-8">Pricing Audit Checklist</h3>
            <p className="text-gray-300 leading-relaxed">
              Use this checklist to verify your current rate covers all your costs. If you answer &quot;no&quot; to any question, your rate is too low:
            </p>
            <div className="space-y-2 mt-4">
              {[
                'Does my rate cover my desired take-home salary?',
                'Does my rate account for income tax and Medicare levy at my marginal rate?',
                'Am I setting aside 11.5% for superannuation?',
                'Have I calculated my total annual overhead and built it into my rate?',
                'Am I using realistic billable hours (25–30/week, not 40)?',
                'Have I factored in holidays, sick days, and downtime between projects?',
                'Does my rate include a profit margin above break-even?',
                'Have I reviewed my rate in the past 6 months against rising costs?',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/30">
                  <div className="w-5 h-5 rounded border border-amber-500/30 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">The Minimum Wage Reality Check</p>
              <p className="text-gray-400 text-sm">
                Australia&apos;s national minimum wage is $24.10 per hour (as of July 2025). A freelancer charging $50/hr might think they are earning double the minimum wage. But after tax ($13.40), super ($5.75), and overhead ($15.50), they take home <strong className="text-gray-200">$15.35 per hour</strong> &mdash; well below minimum wage. This is why understanding and pricing around overhead is not optional. It is the difference between running a business and running a charity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-overhead">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built for Australian freelancers who want to <strong className="text-white">understand their true costs and price profitably</strong>. Here is how it helps you manage overhead:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Expense Tracking Dashboard</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track all your <Link href="/glossary/business-expenses" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">business expenses</Link> in one place. Categorise them as overhead or direct costs automatically. See your monthly overhead trend, spot subscription creep, and get alerts when costs are rising faster than revenue. <strong className="text-gray-200">No more guessing what you spend on your business.</strong>
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Overhead Rate Calculator</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Input your expenses and billable hours, and InvoiceFlow <strong className="text-gray-200">calculates your overhead rate per hour in real-time</strong>. See exactly how much each billable hour must contribute to indirect costs. Adjust your rate instantly when costs change. Never price below cost again.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Profitability Reports</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See your <Link href="/glossary/profit-margin" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">profit margin</Link> after overhead on every project and every client. Identify which clients are profitable and which are dragging your business down. <strong className="text-gray-200">Project-level profitability insights</strong> help you make smarter decisions about which work to pursue and which to decline.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Tax-Time Expense Summaries</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When tax time arrives, InvoiceFlow generates a <strong className="text-gray-200">categorised expense summary</strong> ready for your tax agent. Overhead costs are automatically grouped by ATO deduction category &mdash; home office, software, insurance, professional services &mdash; saving you hours of manual sorting and ensuring you claim every deduction you are entitled to.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">From Guessing to Knowing</p>
              <p className="text-gray-400 text-sm">
                Most freelancers have a vague sense of what their overhead costs are. InvoiceFlow replaces guesswork with data. See your <strong className="text-gray-200">exact overhead rate, real profit margins, and true cost per project</strong> in real-time. When you know your numbers, you price with confidence &mdash; and confident pricing is the foundation of a profitable freelance business.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you calculate, track, and reduce your overhead costs.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on pricing, tax, and business finance.</p>
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
            Stop Letting Overhead Eat Your Profit.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow gives Australian freelancers real-time overhead tracking, automatic expense categorisation, and pricing insights &mdash; so every dollar you charge covers every cost of doing business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/rate-calculator">
              <Button variant="secondary">Calculate Your True Rate</Button>
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
