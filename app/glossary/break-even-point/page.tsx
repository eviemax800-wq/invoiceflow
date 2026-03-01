import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Break-Even Point: What It Is, How to Calculate It & Why It Matters for Freelancers — InvoiceFlow',
  description:
    'What is the break-even point? Learn the break-even formula, how to calculate it for your freelance business, and why including tax in your break-even analysis is critical for Australian sole traders.',
  keywords: [
    'break even point meaning',
    'break even analysis freelancer',
    'break even calculator small business',
    'how to calculate break even point',
    'break even formula',
    'break even point sole trader australia',
    'freelance break even revenue',
    'minimum revenue freelancer',
    'fixed costs variable costs freelancer',
    'break even point with tax australia',
    'financial planning freelancer',
    'break even point small business australia',
  ],
  alternates: { canonical: '/glossary/break-even-point' },
  openGraph: {
    title: 'Break-Even Point: What It Is, How to Calculate It & Why It Matters for Freelancers — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about the break-even point: the formula, worked examples, tax-inclusive calculations, and practical applications for pricing and financial planning.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/break-even-point',
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
    { '@type': 'ListItem', position: 3, name: 'Break-Even Point', item: `${BASE_URL}/glossary/break-even-point` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the break-even point for a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The break-even point is the minimum revenue a freelancer must earn to cover all their costs — fixed and variable — with zero profit and zero loss. For a service-based freelancer, the formula is: Break-Even Revenue = Fixed Costs / (1 - Variable Cost Ratio). For example, a freelancer with $1,500 per month in fixed costs and a 15% variable cost ratio must earn at least $1,765 per month to break even. Earning below this amount means the business is operating at a loss. This figure does not include income tax, which must be added separately to find your true financial break-even.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate break-even for my freelance business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To calculate your freelance break-even point: (1) Add up all fixed monthly costs — insurance, software, internet, phone, coworking, professional development, and accounting fees. (2) Calculate your variable cost ratio — what percentage of each dollar earned goes to variable costs like materials, subcontractors, or platform fees. (3) Apply the formula: Break-Even Revenue = Fixed Costs / (1 - Variable Cost Ratio). For example, $1,500 fixed costs with 15% variable costs = $1,500 / 0.85 = $1,765 per month. Remember to add an income tax buffer on top of this figure to find your real break-even, as the standard formula excludes tax.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should income tax be included in break-even analysis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and most break-even calculations dangerously ignore this. The standard formula calculates the revenue needed to cover costs before tax. But as an Australian sole trader, you must also pay income tax (using 2025-26 ATO brackets), a 2% Medicare levy, and potentially 11.5% superannuation on top. A freelancer who earns exactly their standard break-even point will still owe thousands in income tax, resulting in a net loss for the year. Your true financial break-even must include enough revenue to cover costs, income tax, and super contributions. This typically adds 25-45% on top of the before-tax break-even figure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a typical break-even point for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Break-even points vary significantly by freelancer type. A home-based designer with $800/month fixed costs and 10% variable costs breaks even at $889/month ($10,667/year). A coworking-based consultant with $2,000 fixed costs and 5% variable costs breaks even at $2,105/month ($25,263/year). A tradie with a vehicle at $3,000 fixed and 25% variable costs breaks even at $4,000/month ($48,000/year). These figures are before income tax. After adding tax obligations, real break-even points are typically $20,000-$60,000 per year depending on your cost structure. Review your break-even quarterly to account for cost changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the break-even point help with pricing decisions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The break-even point directly informs your minimum hourly or project rate. Divide your annual break-even revenue by your billable hours to find your absolute minimum rate. For example, if your annual break-even (including tax) is $60,000 and you bill 1,200 hours per year, your minimum rate is $50/hour — and you should charge significantly above this to generate actual profit. Use break-even analysis when evaluating new equipment purchases (will this raise my break-even sustainably?), deciding when to leave employment (is my freelance break-even achievable?), and pricing new service offerings (does this service cover its share of fixed costs?).',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-break-even-point', label: '1. What Is the Break-Even Point?' },
  { id: 'break-even-formula-freelancers', label: '2. Break-Even Formula for Freelancers' },
  { id: 'break-even-scenarios', label: '3. Break-Even in Different Scenarios' },
  { id: 'break-even-including-tax', label: '4. Break-Even Including Tax' },
  { id: 'using-break-even-analysis', label: '5. Using Break-Even Analysis' },
  { id: 'tracking-with-invoiceflow', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate the minimum hourly rate you must charge to exceed your break-even point.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'See how much revenue above break-even you are keeping as profit margin.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.25-4.5h.008v.008H10.5v-.008zm0 2.25h.008v.008H10.5v-.008zm0 2.25h.008v.008H10.5v-.008zm2.25-4.5h.008v.008H12.75v-.008zm0 2.25h.008v.008H12.75v-.008zm2.25-4.5h.008v.008H15v-.008zm0 2.25h.008v.008H15v-.008zM6 18.75a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 18.75V6a2.25 2.25 0 00-2.25-2.25h-7.5A2.25 2.25 0 006 6v12.75zM3.75 18.75V6A4.5 4.5 0 018.25 1.5h7.5A4.5 4.5 0 0120.25 6v12.75a4.5 4.5 0 01-4.5 4.5h-7.5a4.5 4.5 0 01-4.5-4.5z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax and Medicare levy to build a tax-inclusive break-even figure.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Send professional invoices and track your progress toward monthly break-even revenue.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'Use your break-even point as the foundation for calculating the minimum rate you can charge.',
  },
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Understand Australian tax obligations and why they must be included in break-even calculations.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Strategies to hit your monthly break-even revenue target sooner with faster payment collection.',
  },
];

export default function BreakEvenPointGlossaryPage() {
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
            <span className="text-white">Break-Even Point</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Financial Planning
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Break-Even Point{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            The break-even point is the minimum revenue your freelance business must generate to cover all costs — leaving you with zero profit and zero loss. Knowing your break-even is the foundation of every pricing, budgeting, and financial planning decision you will ever make as a self-employed Australian.
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
              <span>Worked Examples Included</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">BE</span>
              <div>
                <p className="text-white font-medium text-sm">The Formula</p>
                <p className="text-gray-400 text-sm">Break-Even Revenue = Fixed Costs &divide; (1 &minus; Variable Cost Ratio)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$</span>
              <div>
                <p className="text-white font-medium text-sm">Typical Range</p>
                <p className="text-gray-400 text-sm">Most Australian freelancers break even at $20K&ndash;$50K/yr before tax, higher after tax is included</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs font-bold">TAX</span>
              <div>
                <p className="text-white font-medium text-sm">Include Tax</p>
                <p className="text-gray-400 text-sm">Standard break-even ignores income tax and super — your real break-even is 25&ndash;45% higher</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">Q</span>
              <div>
                <p className="text-white font-medium text-sm">Review Quarterly</p>
                <p className="text-gray-400 text-sm">Costs change — recalculate your break-even every quarter to keep pricing decisions accurate</p>
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

        {/* Section 1: What Is the Break-Even Point? */}
        <section id="what-is-break-even-point">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is the Break-Even Point?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The break-even point is the <strong className="text-white">level of revenue at which your business earns exactly enough to cover all costs</strong> &mdash; generating neither a profit nor a loss. It is the financial floor of your business: the minimum you must earn before you can start keeping any money for yourself.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers and sole traders, this concept is fundamental. Unlike a salaried employee who receives a guaranteed pay cheque each fortnight, your income fluctuates. Some months you will invoice $8,000. Others you will invoice $2,000. Knowing your break-even point tells you <strong className="text-white">exactly how much you must earn in any given month to avoid going backwards</strong> &mdash; before you even begin to build profit.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Why It Matters for Freelancers</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Set Your Minimum Rate</h4>
                <p className="text-gray-400 text-sm">Your break-even divided by billable hours gives you the absolute floor for your <Link href="/glossary/hourly-rate" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">hourly rate</Link>. Charge below this and you are subsidising your clients.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-orange-400 font-medium mb-2">Know When You Are Profitable</h4>
                <p className="text-gray-400 text-sm">Every dollar earned above break-even is profit. Track monthly revenue against your break-even to know instantly whether this month was a win or a loss.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-medium mb-2">Make Investment Decisions</h4>
                <p className="text-gray-400 text-sm">Considering a coworking space, new laptop, or software subscription? Calculate how it changes your break-even before committing. A $500/month cost increase raises your break-even by $500+ per month.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-orange-400 font-medium mb-2">Plan Your Exit from Employment</h4>
                <p className="text-gray-400 text-sm">Considering going full-time freelance? Your break-even &mdash; tax-inclusive &mdash; must be reliably achievable before you hand in your notice.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The Core Formula</h3>
            <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6 mt-3">
              <div className="space-y-4">
                <div>
                  <p className="text-amber-400 font-medium text-sm mb-2">Break-Even Revenue Formula</p>
                  <p className="text-white font-mono text-xl">Break-Even Revenue = Fixed Costs &divide; (1 &minus; Variable Cost Ratio)</p>
                </div>
                <div className="border-t border-gray-700/50 pt-4 grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-1"><strong className="text-gray-200">Fixed Costs</strong></p>
                    <p className="text-gray-500">Costs that stay the same regardless of revenue — insurance, internet, software subscriptions, phone plan, accounting fees.</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1"><strong className="text-gray-200">Variable Cost Ratio</strong></p>
                    <p className="text-gray-500">The percentage of each dollar earned that goes to variable costs (materials, subcontractors, platform fees). Expressed as a decimal: 15% = 0.15.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Simple Visual Explanation</p>
              <p className="text-gray-400 text-sm">
                Imagine a bucket with a hole in it. Water flowing in is your revenue. Water leaking out is your variable costs. The water remaining must fill the bucket to the &ldquo;fixed costs&rdquo; line before you break even. Only water above that line is profit. Your break-even formula calculates exactly how much water needs to flow in to reach that line.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Break-Even Formula for Freelancers */}
        <section id="break-even-formula-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Break-Even Formula for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The break-even formula has two inputs: your <strong className="text-white">fixed costs</strong> and your <strong className="text-white">variable cost ratio</strong>. Getting both figures right is critical for an accurate result.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Your Fixed Costs as a Freelancer</h3>
            <p className="text-gray-300 leading-relaxed">
              Fixed costs are expenses you pay every month regardless of how much (or how little) you earn. For most Australian freelancers, these include:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Fixed Cost Category</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Examples</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Typical Monthly Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white">Professional Insurance</td>
                      <td className="py-3 px-4 text-gray-400">Professional indemnity, public liability</td>
                      <td className="py-3 px-4 text-gray-300 text-right">$100&ndash;$250</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Software Subscriptions</td>
                      <td className="py-3 px-4 text-gray-400">Adobe CC, Figma, GitHub, Notion, InvoiceFlow</td>
                      <td className="py-3 px-4 text-gray-300 text-right">$100&ndash;$400</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Internet</td>
                      <td className="py-3 px-4 text-gray-400">Business portion of home broadband</td>
                      <td className="py-3 px-4 text-gray-300 text-right">$40&ndash;$80</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Coworking Space</td>
                      <td className="py-3 px-4 text-gray-400">Hot desk or dedicated desk membership</td>
                      <td className="py-3 px-4 text-gray-300 text-right">$200&ndash;$600</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Phone</td>
                      <td className="py-3 px-4 text-gray-400">Business portion of mobile plan</td>
                      <td className="py-3 px-4 text-gray-300 text-right">$30&ndash;$80</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Professional Development</td>
                      <td className="py-3 px-4 text-gray-400">Courses, books, conferences (amortised monthly)</td>
                      <td className="py-3 px-4 text-gray-300 text-right">$50&ndash;$200</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Accounting &amp; Admin</td>
                      <td className="py-3 px-4 text-gray-400">Tax agent, bookkeeper (amortised monthly)</td>
                      <td className="py-3 px-4 text-gray-300 text-right">$80&ndash;$200</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Equipment Depreciation</td>
                      <td className="py-3 px-4 text-gray-400">Laptop, monitors, camera (amortised monthly)</td>
                      <td className="py-3 px-4 text-gray-300 text-right">$100&ndash;$300</td>
                    </tr>
                    <tr className="bg-amber-500/5">
                      <td className="py-3 px-4 text-amber-400 font-medium">Typical Total Fixed Costs</td>
                      <td className="py-3 px-4 text-gray-400">Home-based freelancer with moderate tools</td>
                      <td className="py-3 px-4 text-amber-400 text-right font-medium">$800&ndash;$2,000/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Your Variable Costs as a Freelancer</h3>
            <p className="text-gray-300 leading-relaxed">
              Variable costs scale with your revenue. Common freelancer variable costs include:
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mt-3">
              <li><strong className="text-gray-200">Materials and stock</strong> &mdash; photography prints, physical goods, consumables purchased for client projects</li>
              <li><strong className="text-gray-200">Subcontractors</strong> &mdash; designers, developers, or copywriters you bring in for specific projects</li>
              <li><strong className="text-gray-200">Platform fees</strong> &mdash; Upwork, Fiverr, or marketplace commissions (often 10&ndash;20%)</li>
              <li><strong className="text-gray-200">Project-specific travel</strong> &mdash; flights and accommodation for client site visits</li>
              <li><strong className="text-gray-200">Payment processing fees</strong> &mdash; Stripe, PayPal, or bank transaction fees (typically 1.5&ndash;2.9%)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Most pure service freelancers have <strong className="text-white">very low variable costs</strong> &mdash; often 5&ndash;15% of revenue. Tradies, photographers, and agency operators typically have higher variable costs.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Step-by-Step Worked Example</h3>
            <p className="text-gray-300 leading-relaxed">
              Let&apos;s calculate the break-even point for a freelance copywriter based in Melbourne:
            </p>

            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">Calculate total monthly fixed costs</p>
                  <p className="text-gray-400 text-sm mt-1">Insurance $120 + Software $180 + Internet $50 + Phone $40 + Professional development $80 + Accounting $80 + Equipment depreciation $150 + Home office $300 = <strong className="text-gray-200">$1,000/month fixed costs</strong></p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">Determine variable cost ratio</p>
                  <p className="text-gray-400 text-sm mt-1">Occasional stock images ($50) + payment processing (1.5%) = approximately <strong className="text-gray-200">3&ndash;5% variable cost ratio</strong>. Use 5% (0.05) to be conservative.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">Apply the formula</p>
                  <p className="text-gray-400 text-sm mt-1">Break-Even = $1,000 &divide; (1 &minus; 0.05) = $1,000 &divide; 0.95 = <strong className="text-gray-200">$1,053/month or $12,632/year</strong> (before income tax)</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6 mt-6">
              <p className="text-amber-400 font-medium mb-3">Now a more typical example: Freelancer with $1,500/month fixed costs at 15% variable cost ratio</p>
              <div className="font-mono text-sm space-y-2">
                <p className="text-gray-300">Break-Even = $1,500 &divide; (1 &minus; 0.15)</p>
                <p className="text-gray-300">Break-Even = $1,500 &divide; 0.85</p>
                <p className="text-amber-400 font-bold text-base">Break-Even = <strong>$1,765/month or $21,176/year</strong> (before income tax)</p>
              </div>
              <p className="text-gray-500 text-xs mt-3">This freelancer must invoice at least $1,765 every month just to cover their costs. Everything above that figure is <Link href="/glossary/profit-margin" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">profit margin</Link>.</p>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Common Mistakes in Break-Even Calculations</p>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li><strong className="text-gray-200">Forgetting superannuation</strong> &mdash; 11.5% of income is a real cost even for sole traders</li>
                <li><strong className="text-gray-200">Ignoring home office costs</strong> &mdash; ATO allows 67 cents/hour for home office use</li>
                <li><strong className="text-gray-200">Excluding equipment depreciation</strong> &mdash; your $3,000 laptop costs roughly $50&ndash;$80/month amortised</li>
                <li><strong className="text-gray-200">Not including income tax</strong> &mdash; the biggest omission (see Section 4)</li>
                <li><strong className="text-gray-200">Using GST-inclusive revenue</strong> &mdash; always use GST-exclusive figures for break-even calculations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Break-Even in Different Scenarios */}
        <section id="break-even-scenarios">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Break-Even in Different Scenarios</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Break-even points vary dramatically based on your freelance setup. Cost structure, physical workspace, and the nature of your work all have a major impact. Here is how break-even compares across common Australian freelancer types:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Freelancer Type</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Fixed Costs/mo</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Variable %</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Break-Even/mo</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Break-Even/yr</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4">
                        <p className="text-white font-medium">Home-Based Designer</p>
                        <p className="text-gray-500 text-xs mt-0.5">Works from home, light tool set</p>
                      </td>
                      <td className="py-3 px-4 text-gray-300 text-right">$800</td>
                      <td className="py-3 px-4 text-gray-300 text-right">10%</td>
                      <td className="py-3 px-4 text-amber-400 text-right font-medium">$889</td>
                      <td className="py-3 px-4 text-amber-400 text-right font-medium">$10,667</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <p className="text-white font-medium">Coworking Consultant</p>
                        <p className="text-gray-500 text-xs mt-0.5">Uses coworking space, advisory work</p>
                      </td>
                      <td className="py-3 px-4 text-gray-300 text-right">$2,000</td>
                      <td className="py-3 px-4 text-gray-300 text-right">5%</td>
                      <td className="py-3 px-4 text-amber-400 text-right font-medium">$2,105</td>
                      <td className="py-3 px-4 text-amber-400 text-right font-medium">$25,263</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <p className="text-white font-medium">Tradie with Vehicle</p>
                        <p className="text-gray-500 text-xs mt-0.5">Vehicle, equipment, materials</p>
                      </td>
                      <td className="py-3 px-4 text-gray-300 text-right">$3,000</td>
                      <td className="py-3 px-4 text-gray-300 text-right">25%</td>
                      <td className="py-3 px-4 text-orange-400 text-right font-medium">$4,000</td>
                      <td className="py-3 px-4 text-orange-400 text-right font-medium">$48,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <p className="text-white font-medium">Agency Owner</p>
                        <p className="text-gray-500 text-xs mt-0.5">Office, staff contractors, heavy overhead</p>
                      </td>
                      <td className="py-3 px-4 text-gray-300 text-right">$8,000</td>
                      <td className="py-3 px-4 text-gray-300 text-right">40%</td>
                      <td className="py-3 px-4 text-red-400 text-right font-medium">$13,333</td>
                      <td className="py-3 px-4 text-red-400 text-right font-medium">$160,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">All figures are before income tax. Variable % = proportion of each revenue dollar consumed by variable costs. See Section 4 for tax-inclusive break-even calculations.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Key Insight: Fixed vs Variable Trade-Offs</h3>
            <p className="text-gray-300 leading-relaxed">
              Notice how the coworking consultant has higher fixed costs ($2,000) than the home-based designer ($800) but a lower variable ratio (5% vs 10%). This means the consultant has a <strong className="text-white">higher break-even in absolute terms</strong> but keeps more of every dollar earned above that threshold. The tradie&apos;s high variable costs (25%) mean that despite $3,000 in fixed costs, they need $4,000/month to break even &mdash; because 25 cents of every dollar goes to variable expenses before fixed costs are even touched.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Tax Considerations: The Hidden Multiplier</h3>
            <p className="text-gray-300 leading-relaxed">
              Every break-even figure above is <strong className="text-white">before income tax</strong>. As an Australian sole trader, you must also account for:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <p className="text-amber-400 font-medium text-sm mb-1">Income Tax</p>
                <p className="text-gray-400 text-sm">ATO 2025&ndash;26 brackets: 0% on first $18,200, then 16%, 30%, 37%, or 45% depending on income</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <p className="text-amber-400 font-medium text-sm mb-1">Medicare Levy</p>
                <p className="text-gray-400 text-sm">2% of your total taxable income, applied on top of income tax</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
                <p className="text-amber-400 font-medium text-sm mb-1">Superannuation</p>
                <p className="text-gray-400 text-sm">While voluntary for sole traders, 11.5% <Link href="/glossary/superannuation" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">super</Link> contributions are an essential retirement cost that must be factored in</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4">
              The real break-even for a coworking consultant at $25,263/year before tax is actually <strong className="text-white">significantly higher once tax is included</strong>. See Section 4 for the full calculation.
            </p>
          </div>
        </section>

        {/* Section 4: Break-Even Including Tax */}
        <section id="break-even-including-tax">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Break-Even Including Tax</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <div className="rounded-xl bg-orange-500/5 border border-orange-500/30 p-5">
              <p className="text-orange-400 font-semibold mb-2">Critical: Most Break-Even Calculations Ignore Tax</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                The standard break-even formula only covers business costs. But as an Australian sole trader, if you hit your standard break-even exactly, you will still owe income tax at the end of the year &mdash; which means you will actually finish the year in the red. Your <strong className="text-gray-200">real financial break-even must include enough revenue to cover costs, income tax, Medicare levy, and superannuation contributions.</strong>
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">ATO 2025&ndash;26 Tax Brackets (Sole Traders)</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-3">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Taxable Income Range</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Tax Rate</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Tax on This Band</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white">$0 &ndash; $18,200</td>
                      <td className="py-3 px-4 text-green-400 text-right">0%</td>
                      <td className="py-3 px-4 text-green-400 text-right">Nil</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$18,201 &ndash; $45,000</td>
                      <td className="py-3 px-4 text-amber-400 text-right">16%</td>
                      <td className="py-3 px-4 text-amber-400 text-right">Up to $4,288</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$45,001 &ndash; $135,000</td>
                      <td className="py-3 px-4 text-orange-400 text-right">30%</td>
                      <td className="py-3 px-4 text-orange-400 text-right">Up to $27,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$135,001 &ndash; $190,000</td>
                      <td className="py-3 px-4 text-red-400 text-right">37%</td>
                      <td className="py-3 px-4 text-red-400 text-right">Up to $20,350</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Over $190,000</td>
                      <td className="py-3 px-4 text-red-500 text-right">45%</td>
                      <td className="py-3 px-4 text-red-500 text-right">45c per $1 above</td>
                    </tr>
                    <tr className="bg-gray-700/20">
                      <td className="py-3 px-4 text-gray-300 font-medium" colSpan={2}>Medicare Levy (all taxable income)</td>
                      <td className="py-3 px-4 text-gray-300 text-right font-medium">+2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Source: ATO 2025&ndash;26 individual income tax rates. Low income tax offset (LITO) and Low and Middle Income Tax Offset (LMITO) may reduce liability. Consult your tax agent for your specific situation.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Tax-Inclusive Break-Even: Worked Example</h3>
            <p className="text-gray-300 leading-relaxed">
              Let us calculate the real break-even for a freelancer with $18,000/year in fixed <Link href="/glossary/business-expenses" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">business expenses</Link> and a 10% variable cost ratio. Their standard (before-tax) break-even is:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6 mt-4">
              <p className="text-amber-400 font-medium text-sm mb-3">Step 1: Standard Break-Even (Before Tax)</p>
              <div className="font-mono text-sm space-y-1">
                <p className="text-gray-300">Annual fixed costs = $18,000</p>
                <p className="text-gray-300">Variable cost ratio = 10% (0.10)</p>
                <p className="text-gray-300">Break-Even = $18,000 &divide; (1 &minus; 0.10) = $18,000 &divide; 0.90</p>
                <p className="text-amber-400 font-bold">Before-Tax Break-Even = $20,000/year</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4">
              At $20,000 revenue, this freelancer covers their costs perfectly. But they have not paid any <Link href="/glossary/income-tax" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">income tax</Link> yet. Now let us add the real obligations for a freelancer earning $120,000 in revenue (a more realistic scenario where we can see tax impact clearly):
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="px-4 py-3 bg-amber-500/10 border-b border-amber-500/20">
                <p className="text-amber-400 font-medium text-sm">Full Tax-Inclusive Break-Even: $120K Revenue Freelancer</p>
                <p className="text-gray-400 text-xs mt-0.5">Fixed costs: $18,000/yr | Variable: 10% | Taxable income calculated after deductions</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-700/30">
                    <tr className="bg-amber-500/5">
                      <td className="py-3 px-4 text-amber-400 font-medium">Total Revenue (GST-exclusive)</td>
                      <td className="py-3 px-4 text-amber-400 text-right font-medium">$120,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Less: Variable costs (10%)</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$12,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Less: Fixed costs</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$18,000</td>
                    </tr>
                    <tr className="bg-gray-700/20">
                      <td className="py-3 px-4 text-gray-200 font-medium">Net Profit Before Tax (taxable income)</td>
                      <td className="py-3 px-4 text-gray-200 text-right font-medium">$90,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Income tax on $90,000 (ATO 2025&ndash;26)</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$18,067</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Medicare levy (2% of $90,000)</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$1,800</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Superannuation (11.5% of revenue &mdash; recommended)</td>
                      <td className="py-3 px-4 text-red-400 text-right">&minus;$13,800</td>
                    </tr>
                    <tr className="bg-green-500/5">
                      <td className="py-3 px-4 text-green-400 font-medium">True Take-Home After All Obligations</td>
                      <td className="py-3 px-4 text-green-400 text-right font-bold">$56,333</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-400">Effective take-home rate</td>
                      <td className="py-3 px-4 text-gray-300 text-right">47%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4">
              The standard break-even for this freelancer was $20,000. But to cover <em>all</em> obligations &mdash; costs, tax, Medicare, and super &mdash; they actually need to earn enough that their after-obligation take-home covers their personal living expenses. The <strong className="text-white">effective tax + super rate of ~33%</strong> means the real financial break-even is dramatically higher than the simple cost-based formula suggests.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Income Tax Calculation: $90,000 Taxable Income (2025&ndash;26)</p>
              <div className="font-mono text-xs space-y-1 text-gray-400">
                <p>$0 &ndash; $18,200: Nil = $0</p>
                <p>$18,201 &ndash; $45,000: $26,799 &times; 16% = $4,288</p>
                <p>$45,001 &ndash; $90,000: $45,000 &times; 30% = $13,500</p>
                <p className="text-amber-400 font-semibold">Estimated total income tax = $17,788 (before LITO offset)</p>
                <p className="text-gray-500">Note: Low Income Tax Offset (LITO) phases out for incomes above $37,500. Consult a <Link href="/glossary/tax-agent" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">registered tax agent</Link> for your exact position.</p>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5 mt-6">
              <p className="text-white font-medium mb-3">Practical Rule of Thumb</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                For Australian freelancers earning $60,000&ndash;$135,000, set aside <strong className="text-gray-200">30&ndash;35% of every invoice for tax and super</strong>. This covers your 30% income tax rate (in the $45K&ndash;$135K bracket), 2% Medicare levy, and your super contributions. Doing this from every payment means you will never be caught short at BAS or tax return time &mdash; and it reveals your real break-even is significantly higher than the standard formula suggests.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Using Break-Even Analysis */}
        <section id="using-break-even-analysis">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Using Break-Even Analysis</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Break-even analysis is not just a one-time calculation. It is a practical tool you can apply to multiple decisions across your freelance career. Here are the most valuable applications:
            </p>

            <div className="space-y-4 mt-6">

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Minimum Hourly Rate Calculation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Divide your annual break-even (tax-inclusive) by your total billable hours to find your absolute floor rate. If your tax-inclusive break-even is $60,000 and you bill 1,200 hours per year, your minimum rate is $50/hour. <strong className="text-gray-200">You must charge above this to actually profit</strong> &mdash; target at least 1.5&ndash;2x your break-even rate to build a healthy <Link href="/glossary/profit-margin" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">profit margin</Link>. This calculation directly links your break-even to your <Link href="/glossary/hourly-rate" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">hourly rate</Link> decision.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Go/No-Go on New Equipment or Expenses</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Before adding any significant recurring cost, run the break-even numbers. A $400/month coworking membership raises your monthly break-even by approximately $444 (at 10% variable costs). Ask yourself: will this investment generate at least $444 more per month in revenue or savings? If yes, it is justified. If not, it is a cost that works against your financial stability. The same logic applies to software, equipment on finance, or hiring a virtual assistant.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Pricing New Services</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When designing a new service offering, calculate whether it covers its share of your fixed costs plus a profit margin. If you add a new service that takes 10 hours per project and your break-even rate is $50/hour, you need to charge at least $500 just to break even on that project. Aim for 2x to generate meaningful profit. Use this framework to reject low-value projects before they drain your time and reduce your overall <Link href="/glossary/profit-and-loss" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">profit and loss</Link> position.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">When to Quit Your Day Job</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This is one of the most powerful uses of break-even analysis. Calculate your true tax-inclusive break-even, then add your personal living expenses. This gives you the freelance revenue threshold that replaces your salary. Only when your freelance income <strong className="text-gray-200">consistently exceeds this threshold for 3&ndash;6 consecutive months</strong> should you consider going full-time. The break-even point here is your salary replacement threshold &mdash; not just business break-even.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Annual Financial Health Check</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Recalculate your break-even at the start of each financial year. Your costs change &mdash; software subscriptions increase, insurance renews at a higher rate, or you add new tools. If your break-even has crept up by $5,000 without a corresponding rate increase, you are effectively earning less than the previous year. Use the annual health check to justify rate increases to existing clients and calibrate your pipeline targets for the year ahead.
                </p>
              </div>

            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Break-Even Checklist</h3>
            <p className="text-gray-300 leading-relaxed">
              Use this checklist to perform your quarterly break-even review:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6 mt-4">
              <div className="space-y-3">
                {[
                  'List all fixed costs and confirm no new recurring expenses have been added without review',
                  'Estimate variable cost ratio from last quarter\'s actual invoices and expenses',
                  'Calculate before-tax break-even using the formula: Fixed Costs ÷ (1 − Variable Ratio)',
                  'Add income tax estimate (30% at standard freelancer income levels) and 11.5% super to get real break-even',
                  'Compare real break-even to actual monthly revenue — are you comfortably above it?',
                  'Adjust hourly or project rates if break-even has increased without a rate review in the past 12 months',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded border border-amber-500/40 bg-amber-500/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Related Concepts</h3>
            <p className="text-gray-300 leading-relaxed">
              Break-even analysis connects directly to several other key freelance financial concepts. Understanding how they relate will sharpen your financial decision-making:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
              {[
                { href: '/glossary/profit-margin', label: 'Profit Margin', desc: 'Revenue above break-even expressed as a percentage' },
                { href: '/glossary/income-tax', label: 'Income Tax', desc: 'Why it must be included in real break-even calculations' },
                { href: '/glossary/profit-and-loss', label: 'Profit & Loss', desc: 'Monthly P&L shows your progress vs break-even' },
                { href: '/glossary/hourly-rate', label: 'Hourly Rate', desc: 'Break-even ÷ billable hours = minimum rate floor' },
                { href: '/glossary/business-expenses', label: 'Business Expenses', desc: 'Fixed and variable cost categorisation for break-even' },
                { href: '/glossary/depreciation', label: 'Depreciation', desc: 'Equipment depreciation as a monthly fixed cost input' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group p-4 rounded-xl bg-gray-800/40 border border-gray-700/40 hover:border-amber-500/40 transition-all duration-200"
                >
                  <p className="text-amber-400 font-medium text-sm group-hover:text-amber-300 transition-colors">{link.label}</p>
                  <p className="text-gray-500 text-xs mt-1">{link.desc}</p>
                </Link>
              ))}
            </div>
            <div className="mt-3">
              <Link
                href="/glossary/superannuation"
                className="group inline-flex items-center gap-2 p-4 rounded-xl bg-gray-800/40 border border-gray-700/40 hover:border-amber-500/40 transition-all duration-200"
              >
                <div>
                  <p className="text-amber-400 font-medium text-sm group-hover:text-amber-300 transition-colors">Superannuation</p>
                  <p className="text-gray-500 text-xs mt-1">11.5% super as a mandatory component of real break-even</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="tracking-with-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Knowing your break-even point is only valuable if you can track your actual revenue against it in real time. InvoiceFlow gives Australian freelancers the tools to monitor, manage, and exceed their break-even every month.
            </p>

            <div className="space-y-4 mt-6">

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Revenue Tracking vs Break-Even Progress</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set your monthly break-even target in InvoiceFlow and track invoiced revenue against it in real time. Your dashboard shows a <strong className="text-gray-200">progress bar toward your monthly break-even</strong> &mdash; so you know at a glance whether you are on track, ahead, or behind. No more guessing whether this month will be profitable until the bank statement arrives.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Expense Categorisation for Accurate Fixed/Variable Split</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Log every <Link href="/glossary/business-expenses" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">business expense</Link> and tag it as fixed or variable. InvoiceFlow calculates your variable cost ratio automatically from actual spending data &mdash; far more accurate than guessing. When your variable cost ratio drifts (e.g., a subcontractor takes a larger share), InvoiceFlow flags it so you can recalculate your break-even before it becomes a profitability problem.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Dashboard: Monthly Revenue vs Costs</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow&apos;s dashboard presents a <strong className="text-gray-200">clear monthly comparison of revenue versus costs</strong> &mdash; fixed and variable separately. You can see at a glance whether you are above break-even, how far above (your profit buffer), and how the current month compares to previous months. Spot cost creep before it silently erodes your break-even margin.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">BAS-Ready Data</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  All income and expense data is automatically organised for your quarterly BAS lodgement. GST is separated so your break-even calculations always use the correct GST-exclusive revenue figures. Export everything your accountant needs in one click &mdash; no reconciling spreadsheets or hunting for receipts at BAS time.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Profit &amp; Loss Visibility</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Generate a full <Link href="/glossary/profit-and-loss" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">profit and loss statement</Link> for any period with one click. Your P&amp;L shows exactly how far above (or below) break-even you finished each month, quarter, and year. Share with your accountant, use it to justify a rate increase, or present it to a lender when applying for a mortgage or business loan.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.589-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.589-1.202L5.25 5.49z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Know Exactly Where You Stand</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The most financially successful freelancers know their numbers at all times. They do not wait until their accountant files their tax return to discover whether the year was profitable. InvoiceFlow gives you <strong className="text-gray-200">live financial clarity</strong> &mdash; your revenue, your costs, your break-even progress, and your profit position &mdash; so every business decision you make is grounded in real data, not guesswork.
                </p>
              </div>

            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Know Your Break-Even. Build Above It.</p>
              <p className="text-gray-400 text-sm">
                The difference between a freelance business that thrives and one that merely survives often comes down to financial awareness. Knowing your break-even point &mdash; and tracking your monthly revenue against it &mdash; is the foundational habit that separates financially confident freelancers from those who are perpetually anxious about money. <strong className="text-gray-200">InvoiceFlow makes that awareness effortless.</strong>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you calculate and exceed your break-even point.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on freelance financial planning and pricing strategy.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
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
            Know Your Break-Even. Build Above It.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow tracks your monthly revenue against your break-even target, categorises fixed and variable costs automatically, and shows you exactly where your business stands &mdash; in real time, not at tax time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/rate-calculator">
              <Button variant="secondary">Calculate Your Minimum Rate</Button>
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
