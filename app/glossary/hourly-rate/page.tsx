import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Freelance Hourly Rate: How to Calculate, Set & Increase Your Rate in Australia — InvoiceFlow',
  description:
    'Learn how to calculate your freelance hourly rate in Australia. Step-by-step formula including super (11.5%), expenses, and billable hours. Average rates by profession ($50-$300+/hr), hourly vs project pricing comparison, and 8 strategies to increase your rate.',
  keywords: [
    'freelance hourly rate australia',
    'how to calculate hourly rate freelancer',
    'freelance rate calculator australia',
    'average freelancer hourly rate',
    'hourly rate vs project rate',
    'freelancer pricing australia',
    'how much to charge per hour freelancer',
    'contractor hourly rate australia',
    'freelance rate increase',
    'hourly billing freelancer',
    'hourly rate formula',
    'freelance pricing strategy australia',
  ],
  alternates: { canonical: '/glossary/hourly-rate' },
  openGraph: {
    title: 'Freelance Hourly Rate: How to Calculate, Set & Increase Your Rate in Australia — InvoiceFlow',
    description:
      'Step-by-step hourly rate formula for Australian freelancers. Includes super, expenses, realistic billable hours, average rates by profession, hourly vs project comparison, and proven strategies to raise your rate.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/hourly-rate',
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
    { '@type': 'ListItem', position: 3, name: 'Hourly Rate', item: `${BASE_URL}/glossary/hourly-rate` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a good hourly rate for a freelancer in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your profession and experience level. Most established Australian freelancers charge between $80 and $200 per hour excluding GST. Junior freelancers may start around $50 per hour, while highly specialised consultants (legal, management, IT architecture) can charge $250 to $500 per hour. To find your ideal rate, use the formula: target annual income plus 11.5 percent superannuation plus business expenses, divided by your annual billable hours (typically 1,200 hours for a full-time freelancer working 25 billable hours per week for 48 weeks).',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I charge hourly or per project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hourly billing works best for variable or ongoing work where the scope may change, such as consulting, maintenance, or retainer-style arrangements. Project-based pricing works best when deliverables are clearly defined and the scope is fixed, such as a website build or logo design. Many freelancers use a hybrid approach: project rates for defined deliverables with hourly billing for out-of-scope additions. Regardless of how you bill the client, always track your hours internally so you can calculate your effective hourly rate and price future projects more accurately.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate my freelance hourly rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with your target annual income (what you want to take home). Add 11.5 percent for superannuation (2025-26 SG rate). Add your annual business expenses (software, insurance, equipment, professional development). Divide the total by your annual billable hours. A realistic estimate is 25 billable hours per week for 48 working weeks, giving you 1,200 billable hours per year. For example, a $120,000 income target becomes approximately $141,800 in required revenue, divided by 1,200 hours equals roughly $118 per hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I increase my hourly rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should review and increase your rate at least annually, with a minimum increase matching the Consumer Price Index (3 to 4 percent in Australia). Beyond annual reviews, raise your rate when you are consistently fully booked and turning down work, when you have not raised rates in more than 12 months, when you have gained significant new skills or certifications, or when market rates for your specialisation have increased. Give existing clients 30 to 60 days written notice before a rate increase takes effect. Many freelancers find it easiest to introduce higher rates with new clients first.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I charge GST on top of my hourly rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you are registered for GST (mandatory once your annual turnover exceeds $75,000). Your quoted hourly rate should be ex-GST, and you add 10 percent GST on top. So your $100 per hour rate becomes $110 per hour on the invoice. The $10 GST component belongs to the ATO and must be remitted through your Business Activity Statement (BAS). Do not include GST in your income calculations as it is not your money. When comparing rates with other freelancers, always clarify whether the rate quoted is ex-GST or GST-inclusive to make an accurate comparison.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-hourly-rate', label: '1. What Is an Hourly Rate?' },
  { id: 'hourly-rate-formula', label: '2. The Hourly Rate Formula' },
  { id: 'rates-by-profession', label: '3. Rates by Profession (2025-26)' },
  { id: 'hourly-vs-project-vs-retainer', label: '4. Hourly vs Project vs Retainer' },
  { id: 'how-to-increase-rate', label: '5. How to Increase Your Rate' },
  { id: 'hourly-billing-invoiceflow', label: '6. Hourly Billing with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly rate based on income goals, super, expenses, and billable hours.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'See how your hourly rate translates into actual profit after tax, super, and expenses.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    href: '/tools/work-capacity-planner',
    name: 'Work Capacity Planner',
    description: 'Plan your weekly billable hours, optimise utilisation, and maximise your effective rate.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-business-scorecard',
    name: 'Business Scorecard',
    description: 'Assess your overall freelance business health including rate competitiveness and utilisation.',
    icon: (
      <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'The complete guide to pricing your freelance services with confidence and profitability.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays and improve your freelance cash flow.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'How to create professional invoices with time-based billing and hourly breakdowns.',
  },
];

export default function HourlyRateGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-green-500/10 to-lime-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Hourly Rate</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Pricing &amp; Billing
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Freelance Hourly Rate:{' '}
            <span className="bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">
              How to Calculate, Set &amp; Increase Your Rate
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Your hourly rate is the foundation of your freelance income. This guide walks you through the exact formula Australian freelancers use to calculate their rate, average rates by profession, when to use hourly vs project pricing, and proven strategies to increase your rate without losing clients.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Rate Formula Included</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-lime-500/10 to-green-500/10 border border-lime-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-lime-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">$118</span>
              <div>
                <p className="text-white font-medium text-sm">Calculated Rate Example</p>
                <p className="text-gray-400 text-sm">Target $120K income needs $118/hr at 25 billable hrs/week after super &amp; expenses</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">25h</span>
              <div>
                <p className="text-white font-medium text-sm">Realistic Billable Hours</p>
                <p className="text-gray-400 text-sm">Per week &mdash; not 40. Expect 60&ndash;70% utilisation as a solo freelancer</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">11.5%</span>
              <div>
                <p className="text-white font-medium text-sm">Super Factor</p>
                <p className="text-gray-400 text-sm">2025&ndash;26 SG rate &mdash; must be included in your rate calculation as a business cost</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-green-400 text-xs font-bold">3-4%</span>
              <div>
                <p className="text-white font-medium text-sm">Annual Increase</p>
                <p className="text-gray-400 text-sm">Minimum annual rate increase to match Australian CPI &mdash; more if your skills have grown</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-lime-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is an Hourly Rate? */}
        <section id="what-is-hourly-rate">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is an Hourly Rate?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              An hourly rate is <strong className="text-white">the amount you charge per hour of work</strong>. It is the most common pricing model for freelancers and independent contractors worldwide, and for good reason: it is transparent, easy for clients to understand, and scales naturally with the amount of work delivered. When a client hires you at $120/hr and you work 10 hours, they pay $1,200. Simple.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For Australian freelancers, hourly billing is particularly popular in professions where the scope of work is difficult to define upfront or where the work is ongoing: consulting, IT support, legal services, bookkeeping, design retainers, and development maintenance. It works well because <strong className="text-white">both parties share the risk</strong> &mdash; you get paid for every hour you work, and the client only pays for the time actually spent.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">How Hourly Rates Compare to Other Pricing Models</h3>
            <p className="text-gray-300 leading-relaxed">
              Hourly billing is not the only way to price your services. Understanding where it fits helps you choose the right model for each client and project:
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">$/hr</span>
                <div>
                  <p className="text-white font-medium text-sm">Hourly Rate</p>
                  <p className="text-gray-400 text-sm">You charge for each hour worked. Best for ongoing work, variable scope, consulting, and maintenance. Most transparent model for the client.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-600/20 flex items-center justify-center text-gray-400 text-xs font-bold">Fix</span>
                <div>
                  <p className="text-white font-medium text-sm">Project Rate (Fixed Price)</p>
                  <p className="text-gray-400 text-sm">A flat fee for a defined deliverable. Best when scope is clear and unlikely to change. You absorb the risk if it takes longer than estimated.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-600/20 flex items-center justify-center text-gray-400 text-xs font-bold">Ret</span>
                <div>
                  <p className="text-white font-medium text-sm">Retainer</p>
                  <p className="text-gray-400 text-sm">A fixed monthly fee for an agreed number of hours or scope. Best for ongoing relationships with predictable, recurring work.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-600/20 flex items-center justify-center text-gray-400 text-xs font-bold">Val</span>
                <div>
                  <p className="text-white font-medium text-sm">Value-Based Pricing</p>
                  <p className="text-gray-400 text-sm">Priced on the value delivered to the client, not time spent. Best for high-impact strategic work where outcomes are measurable (e.g. conversion optimisation).</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Australian Hourly Rate Ranges</h3>
            <p className="text-gray-300 leading-relaxed">
              In Australia, freelance hourly rates typically fall into three broad tiers. These are <strong className="text-white">ex-GST rates</strong> &mdash; if you are GST-registered (mandatory over $75K turnover), you add 10% on top:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5 text-center">
                <p className="text-2xl font-bold text-lime-400 mb-1">$50&ndash;$80</p>
                <p className="text-white font-medium text-sm mb-2">Junior / Entry-Level</p>
                <p className="text-gray-400 text-xs">0&ndash;2 years experience. Generalist skills. Building portfolio. Often competing on price.</p>
              </div>
              <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 text-center">
                <p className="text-2xl font-bold text-lime-400 mb-1">$80&ndash;$200</p>
                <p className="text-white font-medium text-sm mb-2">Mid&ndash;Senior / Established</p>
                <p className="text-gray-400 text-xs">2&ndash;10+ years experience. Specialised skills. Strong portfolio. Referral network established.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5 text-center">
                <p className="text-2xl font-bold text-green-400 mb-1">$200&ndash;$500+</p>
                <p className="text-white font-medium text-sm mb-2">Specialist / Expert</p>
                <p className="text-gray-400 text-xs">10+ years. Deep specialisation. Industry authority. Strategic advisory. Niche demand.</p>
              </div>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">The Critical Pricing Mistake</p>
              <p className="text-gray-400 text-sm">
                The most common mistake freelancers make is <strong className="text-gray-200">dividing their income target by 40 hours per week</strong> instead of their realistic billable hours (typically 25 hours per week). This single error means you underprice yourself by 37% from day one. A freelancer targeting $120K who calculates based on 40 billable hours per week sets their rate at $62.50/hr. The same freelancer using a realistic 25 billable hours per week (before super and expenses) would calculate $100/hr &mdash; and still not have accounted for super or business costs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Hourly Rate Formula */}
        <section id="hourly-rate-formula">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Hourly Rate Formula for Australian Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Your hourly rate should not be a guess or a &quot;feeling&quot; &mdash; it should be a <strong className="text-white">calculated figure based on your income goals, obligations, and realistic capacity</strong>. Here is the step-by-step formula every Australian freelancer should use:
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The Formula</h3>
            <div className="rounded-xl bg-gray-800/50 border border-lime-500/30 p-6 mt-3">
              <p className="text-lime-400 font-mono text-lg text-center mb-4">
                (Income Target + Super + Expenses + Profit Margin) &divide; Annual Billable Hours = Hourly Rate
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Step-by-Step Calculation</h3>
            <div className="rounded-xl bg-gray-800/50 border border-lime-500/30 p-6 mt-3">
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">1</span>
                  <div>
                    <p className="text-white font-medium">Set Your Income Target</p>
                    <p>What you want to take home before personal income tax. Example: <strong className="text-gray-200">$120,000</strong></p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">2</span>
                  <div>
                    <p className="text-white font-medium">Add Superannuation (11.5%)</p>
                    <p>You are not legally required to pay super as a sole trader, but you absolutely should. $120,000 &times; 11.5% = <strong className="text-gray-200">$13,800</strong></p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">3</span>
                  <div>
                    <p className="text-white font-medium">Add Business Expenses</p>
                    <p>Software, insurance, equipment, co-working, professional development, accounting fees. Example: <strong className="text-gray-200">$8,000/year</strong></p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">4</span>
                  <div>
                    <p className="text-white font-medium">Calculate Total Required Revenue</p>
                    <p>$120,000 + $13,800 + $8,000 = <strong className="text-gray-200">$141,800</strong></p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">5</span>
                  <div>
                    <p className="text-white font-medium">Determine Annual Billable Hours</p>
                    <p>48 working weeks (52 minus 4 weeks leave) &times; 25 billable hours/week = <strong className="text-gray-200">1,200 hours/year</strong></p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-lime-500/10 border border-lime-500/20">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-lime-500/20 flex items-center justify-center text-lime-400 text-xs font-bold">6</span>
                  <div>
                    <p className="text-lime-400 font-medium">Your Hourly Rate</p>
                    <p>$141,800 &divide; 1,200 = <strong className="text-lime-300 text-lg">~$118/hr (ex-GST)</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Why 25 Billable Hours, Not 40?</h3>
            <p className="text-gray-300 leading-relaxed">
              This is the most critical part of the calculation and the mistake that costs freelancers the most money. <strong className="text-white">You will not bill 40 hours per week.</strong> As a solo freelancer, you are also the admin assistant, bookkeeper, marketing department, salesperson, and IT support. Those tasks take time &mdash; typically 10&ndash;15 hours per week. The industry benchmark is 60&ndash;70% billable utilisation, which means:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5 text-center">
                <p className="text-2xl font-bold text-red-400 mb-1">$62.50/hr</p>
                <p className="text-gray-400 text-xs">Calculated at 40 hrs/week (1,920 hrs). <strong className="text-red-400">Wrong.</strong> You will earn $75K, not $120K.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5 text-center">
                <p className="text-2xl font-bold text-yellow-400 mb-1">$100/hr</p>
                <p className="text-gray-400 text-xs">Calculated at 25 hrs/week (1,200 hrs). Covers income only &mdash; no super or expenses.</p>
              </div>
              <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 text-center">
                <p className="text-2xl font-bold text-lime-400 mb-1">$118/hr</p>
                <p className="text-gray-400 text-xs">Calculated at 25 hrs/week with super + expenses. <strong className="text-lime-400">Correct.</strong></p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Tax Implications (2025&ndash;26 Brackets)</h3>
            <p className="text-gray-300 leading-relaxed">
              Remember that your income target is <strong className="text-white">before personal income tax</strong>. As a sole trader, your business income flows through to your personal tax return. For the 2025&ndash;26 financial year, the key Australian tax brackets are:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Taxable Income</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Tax Rate</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Tax on This Bracket</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white">$0 &ndash; $18,200</td>
                      <td className="py-3 px-4 text-gray-300">0%</td>
                      <td className="py-3 px-4 text-gray-300">Nil</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$18,201 &ndash; $45,000</td>
                      <td className="py-3 px-4 text-gray-300">16%</td>
                      <td className="py-3 px-4 text-gray-300">$4,288</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$45,001 &ndash; $135,000</td>
                      <td className="py-3 px-4 text-gray-300">30%</td>
                      <td className="py-3 px-4 text-gray-300">$27,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$135,001 &ndash; $190,000</td>
                      <td className="py-3 px-4 text-gray-300">37%</td>
                      <td className="py-3 px-4 text-gray-300">$20,350</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$190,001+</td>
                      <td className="py-3 px-4 text-gray-300">45%</td>
                      <td className="py-3 px-4 text-gray-300">Varies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">2025&ndash;26 Australian individual income tax rates. Medicare levy of 2% applies on top. Stage 3 tax cuts are reflected. Consult a tax professional for your specific situation.</p>
              </div>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">Want a Higher Take-Home? Increase Your Rate, Not Your Hours</p>
              <p className="text-gray-400 text-sm">
                If $118/hr after tax and super leaves you short of your lifestyle goals, the answer is not to work more hours &mdash; that path leads to burnout. Instead, <strong className="text-gray-200">increase your rate</strong>. A $20/hr increase from $118 to $138 adds $24,000 to your annual revenue at the same 1,200 billable hours. That is the power of rate-based thinking over volume-based thinking.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Rates by Profession */}
        <section id="rates-by-profession">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Australian Freelancer Hourly Rates by Profession (2025&ndash;26)</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              What you can charge depends heavily on your profession, experience, specialisation, and location. Here is a comprehensive breakdown of <strong className="text-white">typical hourly rates across Australian freelance professions</strong> for the 2025&ndash;26 financial year. All rates are ex-GST.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Profession</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Typical Range (ex-GST)</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Tier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white">Web Developer</td>
                      <td className="py-3 px-4 text-gray-300">$100&ndash;$200/hr</td>
                      <td className="py-3 px-4"><span className="text-lime-400 text-xs font-medium bg-lime-500/10 px-2 py-0.5 rounded-full">Mid&ndash;Senior</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Graphic Designer</td>
                      <td className="py-3 px-4 text-gray-300">$80&ndash;$150/hr</td>
                      <td className="py-3 px-4"><span className="text-lime-400 text-xs font-medium bg-lime-500/10 px-2 py-0.5 rounded-full">Mid&ndash;Senior</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Copywriter</td>
                      <td className="py-3 px-4 text-gray-300">$80&ndash;$140/hr</td>
                      <td className="py-3 px-4"><span className="text-lime-400 text-xs font-medium bg-lime-500/10 px-2 py-0.5 rounded-full">Mid&ndash;Senior</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Management Consultant</td>
                      <td className="py-3 px-4 text-gray-300">$150&ndash;$300/hr</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Senior&ndash;Expert</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Photographer</td>
                      <td className="py-3 px-4 text-gray-300">$80&ndash;$200/hr</td>
                      <td className="py-3 px-4"><span className="text-lime-400 text-xs font-medium bg-lime-500/10 px-2 py-0.5 rounded-full">Mid&ndash;Senior</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Bookkeeper</td>
                      <td className="py-3 px-4 text-gray-300">$60&ndash;$100/hr</td>
                      <td className="py-3 px-4"><span className="text-gray-400 text-xs font-medium bg-gray-500/10 px-2 py-0.5 rounded-full">Entry&ndash;Mid</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Lawyer</td>
                      <td className="py-3 px-4 text-gray-300">$200&ndash;$500/hr</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Senior&ndash;Expert</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">IT Consultant</td>
                      <td className="py-3 px-4 text-gray-300">$120&ndash;$250/hr</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Senior&ndash;Expert</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Marketing Specialist</td>
                      <td className="py-3 px-4 text-gray-300">$90&ndash;$180/hr</td>
                      <td className="py-3 px-4"><span className="text-lime-400 text-xs font-medium bg-lime-500/10 px-2 py-0.5 rounded-full">Mid&ndash;Senior</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Architect</td>
                      <td className="py-3 px-4 text-gray-300">$120&ndash;$250/hr</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Senior&ndash;Expert</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Personal Trainer</td>
                      <td className="py-3 px-4 text-gray-300">$60&ndash;$120/hr</td>
                      <td className="py-3 px-4"><span className="text-gray-400 text-xs font-medium bg-gray-500/10 px-2 py-0.5 rounded-full">Entry&ndash;Mid</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Virtual Assistant</td>
                      <td className="py-3 px-4 text-gray-300">$40&ndash;$80/hr</td>
                      <td className="py-3 px-4"><span className="text-gray-400 text-xs font-medium bg-gray-500/10 px-2 py-0.5 rounded-full">Entry&ndash;Mid</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">All rates are ex-GST. Actual rates vary by experience, specialisation, location, client type, and demand. Based on Australian market data for 2025&ndash;26.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Factors That Affect Your Rate</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-lime-400 font-medium mb-2">Experience &amp; Track Record</h4>
                <p className="text-gray-400 text-sm">More years of proven results justify higher rates. A portfolio of successful projects is your strongest pricing lever. Clients pay more for certainty.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-lime-400 font-medium mb-2">Specialisation</h4>
                <p className="text-gray-400 text-sm">Generalists earn less than specialists. A &quot;web developer&quot; charges less than a &quot;Shopify Plus migration specialist.&quot; The narrower your niche, the higher your rate.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-lime-400 font-medium mb-2">Location &amp; Market</h4>
                <p className="text-gray-400 text-sm">Rates in Sydney and Melbourne tend to be 10&ndash;20% higher than regional areas. Remote work has narrowed the gap, but local market rates still influence pricing.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-lime-400 font-medium mb-2">Demand &amp; Availability</h4>
                <p className="text-gray-400 text-sm">When you are fully booked, your rate should increase. High demand and limited availability are the strongest signals that your rate is too low.</p>
              </div>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">Do Not Race to the Bottom</p>
              <p className="text-gray-400 text-sm">
                If you are competing on price, you are competing with everyone. The freelancers who charge $200+/hr are not better at their craft by a factor of four than those charging $50/hr &mdash; <strong className="text-gray-200">they are better at positioning, specialisation, and communicating value</strong>. Focus on becoming the obvious choice for a specific type of client, and your rate becomes a secondary consideration.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Hourly vs Project vs Retainer */}
        <section id="hourly-vs-project-vs-retainer">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Hourly Rate vs Project Rate vs Retainer</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Choosing the right pricing model is as important as choosing the right rate. Each model has distinct advantages and risks. <strong className="text-white">The best freelancers use different models for different situations</strong> &mdash; and many use a hybrid approach combining two or more.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Factor</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Hourly Rate</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Project Rate</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Retainer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Best for</td>
                      <td className="py-3 px-4 text-gray-300">Variable scope, ongoing work, consulting</td>
                      <td className="py-3 px-4 text-gray-300">Clear deliverables, fixed scope</td>
                      <td className="py-3 px-4 text-gray-300">Ongoing relationship, predictable work</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Risk bearer</td>
                      <td className="py-3 px-4 text-gray-300">Client (pays for all time)</td>
                      <td className="py-3 px-4 text-gray-300">Freelancer (absorbs overruns)</td>
                      <td className="py-3 px-4 text-gray-300">Shared (agreed hours/scope)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Income predictability</td>
                      <td className="py-3 px-4 text-gray-300">Low (varies week to week)</td>
                      <td className="py-3 px-4 text-gray-300">Medium (known per project)</td>
                      <td className="py-3 px-4 text-gray-300">High (fixed monthly income)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Scope creep risk</td>
                      <td className="py-3 px-4 text-gray-300">Low (you bill for extra)</td>
                      <td className="py-3 px-4 text-gray-300">High (scope changes eat profit)</td>
                      <td className="py-3 px-4 text-gray-300">Medium (hours cap protects you)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Client trust needed</td>
                      <td className="py-3 px-4 text-gray-300">High (they trust your time)</td>
                      <td className="py-3 px-4 text-gray-300">Low (they know the total cost)</td>
                      <td className="py-3 px-4 text-gray-300">Medium (ongoing commitment)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Earning potential</td>
                      <td className="py-3 px-4 text-gray-300">Capped by hours available</td>
                      <td className="py-3 px-4 text-gray-300">Higher if you work fast</td>
                      <td className="py-3 px-4 text-gray-300">Stable baseline income</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">When to Use Each Model</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-lime-500/20">
                <div className="w-10 h-10 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Use Hourly When...</p>
                  <p className="text-gray-400 text-sm">The scope is unclear or likely to change. The client wants ongoing support. You are doing consulting or advisory work. The project involves research or discovery. You are working with a new client and want to reduce your risk of underquoting.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-gray-600/10 border border-gray-600/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Use Project Rate When...</p>
                  <p className="text-gray-400 text-sm">Deliverables are clearly defined (a logo, a website, a brand guide). You have done similar work before and can estimate accurately. You work efficiently and want to benefit from your speed. The client wants cost certainty upfront.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-gray-600/10 border border-gray-600/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Use Retainer When...</p>
                  <p className="text-gray-400 text-sm">The client needs you regularly (weekly or monthly). The work is predictable and recurring. You want stable, guaranteed income. The relationship is established and trusted. Examples: monthly social media management, ongoing development support, regular bookkeeping.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The Hybrid Approach</h3>
            <p className="text-gray-300 leading-relaxed">
              Many experienced freelancers use a <strong className="text-white">hybrid approach</strong>: project-based pricing for the core deliverables with hourly billing for any out-of-scope additions. This gives the client cost certainty for the agreed work while protecting you from scope creep. For example: &quot;Website design and development: $8,000 fixed. Any additional pages, features, or revisions beyond the agreed scope: $130/hr.&quot;
            </p>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">Always Track Your Effective Hourly Rate</p>
              <p className="text-gray-400 text-sm">
                Regardless of how you bill clients, <strong className="text-gray-200">always track your hours internally</strong>. Your effective hourly rate is what you actually earn per hour of work after everything is accounted for. A $5,000 project that takes 30 hours gives you an effective rate of $167/hr. The same project with scope creep that takes 60 hours drops to $83/hr. Without tracking, you are flying blind on profitability.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: How to Increase Your Rate */}
        <section id="how-to-increase-rate">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Increase Your Hourly Rate</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Raising your rate is the single most powerful lever for increasing your freelance income. A $20/hr increase across 1,200 annual billable hours adds <strong className="text-white">$24,000 to your revenue</strong> without working a single extra hour. Here are eight proven strategies:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-sm font-bold">1</span>
                  <h3 className="text-lg font-semibold text-white">Annual Review (Minimum CPI Increase)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  At a minimum, increase your rate annually by the Consumer Price Index &mdash; currently <strong className="text-gray-200">3&ndash;4% in Australia</strong>. If you charged $120/hr last year, you should charge at least $124&ndash;$125/hr this year just to maintain the same purchasing power. This is not a raise &mdash; it is keeping pace with inflation. Treat it as automatic and non-negotiable. Many freelancers simply round up to the nearest $5 increment each year.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-sm font-bold">2</span>
                  <h3 className="text-lg font-semibold text-white">Specialise (Generalists Earn Less)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A &quot;freelance web developer&quot; competes with thousands of others. A &quot;Shopify Plus migration specialist for Australian e-commerce brands&quot; competes with a handful. <strong className="text-gray-200">Specialisation reduces competition and increases perceived value.</strong> The narrower your niche, the more you can charge &mdash; because clients are paying for specific expertise they cannot easily find elsewhere. Pick a niche where demand exists, you have proven experience, and you enjoy the work.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-sm font-bold">3</span>
                  <h3 className="text-lg font-semibold text-white">Raise for New Clients First</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The easiest place to implement a higher rate is with <strong className="text-gray-200">new clients who have never seen your old rate</strong>. There is no comparison point, no negotiation, no awkward conversation. Simply quote your new, higher rate from day one. This is how many freelancers test higher rates with zero risk &mdash; if new clients accept the rate without pushback, you know the market supports it.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-sm font-bold">4</span>
                  <h3 className="text-lg font-semibold text-white">Give Existing Clients 30&ndash;60 Days Notice</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For current clients, provide <strong className="text-gray-200">written notice 30&ndash;60 days before the new rate takes effect</strong>. Be straightforward and professional. Frame it as a standard business adjustment, not a negotiation. Most clients expect annual rate increases &mdash; it is standard practice in every professional services industry. The clients who refuse any rate increase are often the least profitable ones to begin with.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-sm font-bold">5</span>
                  <h3 className="text-lg font-semibold text-white">Add Value (Do Not Just Raise Price)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A rate increase is easier to justify when you have <strong className="text-gray-200">demonstrably added more value</strong>. Have you gained new certifications? Completed notable projects? Developed faster processes? Expanded your service offering? Communicate what has changed since you last set your rate. Clients are far more receptive to paying more when they understand what they are getting in return.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-sm font-bold">6</span>
                  <h3 className="text-lg font-semibold text-white">Reference Market Rates</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If your current rate is below market average for your profession and experience level, say so. <strong className="text-gray-200">&quot;The current market rate for senior web developers in Melbourne is $150&ndash;$180/hr. I am adjusting my rate from $120 to $140/hr, which remains competitive.&quot;</strong> This reframes the increase as a market correction rather than an arbitrary price hike. Clients respect data-driven pricing.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-sm font-bold">7</span>
                  <h3 className="text-lg font-semibold text-white">Walk Away from Low-Rate Clients</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Some clients will never pay your worth. <strong className="text-gray-200">Replacing a $60/hr client with a $120/hr client doubles your income for the same hours.</strong> If a client refuses a reasonable rate increase and you are in demand, it may be time to part ways professionally. The hours freed up are almost always filled by higher-paying clients. This is uncomfortable the first time, but it is one of the most profitable decisions a freelancer can make.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-400 text-sm font-bold">8</span>
                  <h3 className="text-lg font-semibold text-white">Package Services to Shift from Hourly to Value</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Instead of selling hours, <strong className="text-gray-200">package your services into outcomes</strong>. &quot;Website redesign: $8,000&quot; is more palatable than &quot;62 hours at $130/hr.&quot; The client focuses on the deliverable and its value to their business, not the hours. If you deliver in 40 hours instead of 62, your effective rate jumps from $130 to $200/hr. Packaging rewards efficiency and de-links your income from time spent.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">When to Raise Your Rate</h3>
            <p className="text-gray-300 leading-relaxed">
              Beyond the annual CPI increase, here are the clearest signals that your rate needs to go up:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5">
                <p className="text-lime-400 font-medium mb-2">You are fully booked</p>
                <p className="text-gray-400 text-sm">If you have no capacity for new work, your rate is too low. Supply and demand &mdash; raise your price until some demand falls away and you have breathing room.</p>
              </div>
              <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5">
                <p className="text-lime-400 font-medium mb-2">You are turning down work</p>
                <p className="text-gray-400 text-sm">If you are regularly declining projects because you are too busy, you are leaving money on the table. A higher rate means you earn more from fewer clients.</p>
              </div>
              <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5">
                <p className="text-lime-400 font-medium mb-2">You have not raised in 12+ months</p>
                <p className="text-gray-400 text-sm">If more than a year has passed without a rate increase, you have effectively taken a 3&ndash;4% pay cut due to inflation. This is non-negotiable.</p>
              </div>
              <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5">
                <p className="text-lime-400 font-medium mb-2">No client pushes back on your rate</p>
                <p className="text-gray-400 text-sm">If every client accepts your rate immediately without negotiation, you are probably charging too little. Some pushback is healthy &mdash; it means you are at market rate.</p>
              </div>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">Rate Increase Email Template Tips</p>
              <p className="text-gray-400 text-sm">
                Keep it brief, professional, and direct. Lead with gratitude for the working relationship. State the new rate and effective date clearly. Do not over-explain or apologise &mdash; you are running a business and adjusting your pricing is normal. <strong className="text-gray-200">Example: &quot;From 1 July 2026, my hourly rate will increase from $120 to $130/hr, reflecting updated market rates and my continued investment in [relevant skills/tools]. I value our working relationship and look forward to continuing to deliver excellent results.&quot;</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Hourly Billing with InvoiceFlow */}
        <section id="hourly-billing-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Hourly Billing with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is purpose-built for Australian freelancers who bill by the hour. From tracking time to generating invoices to comparing rates across clients, <strong className="text-white">everything is designed to maximise your effective hourly rate and minimise unbilled time</strong>.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Built-In Timer</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Start and stop a timer with one click, directly inside InvoiceFlow. <strong className="text-gray-200">No need for a separate time tracking app.</strong> The timer runs in the background while you work, automatically recording the duration and associating it with the correct client and project. Switch between clients instantly. Pause and resume as needed. Every second is captured accurately &mdash; no more end-of-day guessing.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Hourly Rate Per Client</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set a <strong className="text-gray-200">different hourly rate for each client</strong>. Not all clients pay the same rate &mdash; and they should not. A long-term retainer client might get a slightly lower rate for volume, while a new client with urgent work pays a premium. InvoiceFlow stores each client&apos;s agreed rate and applies it automatically when generating invoices, so you never accidentally charge the wrong amount.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automatic Calculation on Invoices</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Select a client and date range, and InvoiceFlow <strong className="text-gray-200">automatically generates an invoice from your tracked hours</strong>. Each time entry becomes a line item with a clear description, hours worked, hourly rate, and calculated amount. No manual math, no spreadsheet exports, no copy-pasting. The invoice totals, subtotals, and line items are all calculated for you in seconds.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Rate Comparison Reports</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Compare your <strong className="text-gray-200">effective hourly rate across all clients and projects</strong>. See which clients are most profitable on a per-hour basis and which are dragging your average down. This data is invaluable when deciding which client relationships to grow, which to renegotiate, and which to phase out. Rate comparison reports turn gut feelings into hard numbers.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">GST Auto-Calculation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow <strong className="text-gray-200">automatically adds 10% GST</strong> to your invoices if you are GST-registered. Your $118/hr becomes $129.80/hr on the invoice with the GST component clearly separated. This ensures your invoices are ATO-compliant, your clients can claim their input tax credits, and you never accidentally include GST in your income calculations. Toggle GST on or off per client for non-GST-registered freelancers.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Professional Time-Detailed Invoices</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Generate invoices that show <strong className="text-gray-200">exactly what you did and how long it took</strong>. Each line item includes a task description, date, hours, rate, and amount. This level of detail builds client trust, reduces billing disputes, and demonstrates the value you deliver. Clients who see a clear breakdown of your time rarely question the total &mdash; they can see exactly where their money went.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-lime-500/5 border border-lime-500/20 p-5 mt-6">
              <p className="text-lime-400 font-medium mb-2">Your Rate Is Only as Good as Your Billing Process</p>
              <p className="text-gray-400 text-sm">
                Knowing your rate is step one. <strong className="text-gray-200">Actually billing for every hour at that rate is step two.</strong> InvoiceFlow closes the gap between tracking time and getting paid. Built-in timer, automatic invoice generation, GST calculation, and rate-per-client settings mean you never leave money on the table due to admin friction. Try the <Link href="/tools/rate-calculator" className="text-lime-400 hover:text-lime-300 underline">Rate Calculator</Link> to find your number, then let InvoiceFlow handle the rest.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to calculate, compare, and optimise your freelance hourly rate.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-lime-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-lime-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-lime-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on pricing, invoicing, and getting paid as a freelancer.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-lime-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-lime-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-lime-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-lime-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-lime-500/10 to-green-500/10 border border-lime-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Know Your Rate. Bill Every Hour. Get Paid Faster.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow gives Australian freelancers a built-in time tracker, per-client hourly rates, automatic invoice generation from tracked hours, and GST auto-calculation &mdash; so you never leave money on the table.
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
