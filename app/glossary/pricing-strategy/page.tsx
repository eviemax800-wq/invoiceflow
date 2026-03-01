import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Pricing Strategy: How to Price Freelance Services in Australia — InvoiceFlow',
  description:
    'Master freelance pricing strategy in Australia. Compare hourly vs project vs value-based pricing, calculate your ideal rate with super (11.5%) and tax, avoid common pricing mistakes, and learn value-based pricing techniques. Includes rate calculator and Australian market data.',
  keywords: [
    'freelance pricing strategy',
    'value-based pricing freelancer',
    'how to price freelance services australia',
    'hourly rate vs project rate',
    'freelance rate calculator',
    'pricing models freelancer',
    'freelance pricing guide australia',
    'how much to charge freelancing',
  ],
  alternates: { canonical: '/glossary/pricing-strategy' },
  openGraph: {
    title: 'Pricing Strategy: How to Price Freelance Services in Australia — InvoiceFlow',
    description:
      'The complete guide to freelance pricing strategy for Australian freelancers. Four pricing models compared, rate calculation formula with super and tax, value-based pricing techniques, and common mistakes to avoid.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/pricing-strategy',
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
    { '@type': 'ListItem', position: 3, name: 'Pricing Strategy', item: `${BASE_URL}/glossary/pricing-strategy` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I decide between hourly and project-based pricing as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose hourly pricing when the scope is unclear, the project involves ongoing support, or you are working with a new client whose requirements may change. Choose project-based pricing when deliverables are clearly defined, you have done similar work before and can estimate accurately, or the client wants cost certainty upfront. Many experienced freelancers use a hybrid: project rates for defined deliverables with hourly billing for out-of-scope additions. The key is to always track your hours internally regardless of how you bill, so you can calculate your effective hourly rate and price future work accurately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is value-based pricing and should freelancers use it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Value-based pricing means setting your fee based on the value your work delivers to the client rather than the time it takes you. For example, if your marketing strategy generates $500,000 in new revenue for a client, charging $25,000 represents just 5 percent of the value delivered. This approach works best when you can quantify the ROI of your work, when the client has a clear business problem with measurable outcomes, and when you have deep expertise in your field. Value-based pricing rewards efficiency and expertise rather than penalising you for being fast. However, it requires strong discovery skills, the ability to communicate value clearly, and confidence in your expertise.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should a freelancer charge per hour in Australia in 2025-26?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australian freelancer hourly rates vary widely by profession and experience. As a general guide: junior freelancers charge $50 to $80 per hour, mid-level freelancers charge $80 to $150 per hour, and senior specialists charge $150 to $300 or more per hour. The median across all professions sits around $85 per hour. To calculate your specific rate, use the formula: target annual income plus 11.5 percent superannuation plus business expenses, divided by your annual billable hours (typically 1,200 hours for 25 billable hours per week across 48 working weeks). All rates should be quoted ex-GST, with 10 percent GST added on top if you are registered.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I factor in tax and super when setting my freelance rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with your desired take-home income. Add 11.5 percent for superannuation (the 2025-26 SG rate). Then add your estimated income tax using ATO brackets: $0 on the first $18,200, 16 percent on $18,201 to $45,000, 30 percent on $45,001 to $135,000, 37 percent on $135,001 to $190,000, and 45 percent above $190,000. Add 2 percent Medicare Levy on your total taxable income. Then add annual business expenses such as software, insurance, equipment, and professional development. Divide the total by your annual billable hours. For example, to take home $100,000 you need approximately $165,000 in total revenue, which at 1,200 billable hours equals roughly $138 per hour ex-GST.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I raise my freelance rates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Review your rates at least annually. At a minimum, increase by the Consumer Price Index rate (3 to 4 percent in Australia) to maintain purchasing power. Beyond that, raise your rates when you are consistently fully booked and turning down work, when you have not increased rates in more than 12 months, when you have gained significant new skills or certifications, when market rates for your specialisation have increased, or when no client pushes back on your quoted rate. Give existing clients 30 to 60 days written notice. Many freelancers introduce higher rates with new clients first to test market acceptance, then gradually increase existing client rates to the new level.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-pricing-strategy', label: '1. What Is a Pricing Strategy?' },
  { id: 'pricing-models', label: '2. Pricing Models for Freelancers' },
  { id: 'calculate-your-rate', label: '3. How to Calculate Your Rate' },
  { id: 'value-based-pricing', label: '4. Value-Based Pricing in Practice' },
  { id: 'common-pricing-mistakes', label: '5. Common Pricing Mistakes' },
  { id: 'invoiceflow-pricing-tools', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with your pricing tiers and payment terms built in.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Freelance Rate Calculator',
    description: 'Calculate your ideal hourly rate based on income goals, super, expenses, and billable hours.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'See how your pricing translates into actual profit after tax, super, and expenses.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on your pricing instantly. Add or remove 10% GST for any amount.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing Basics',
    description: 'How to create professional invoices that get paid on time.',
  },
  {
    href: '/guides/payment-terms',
    name: 'Payment Terms Guide',
    description: 'Set payment terms that protect your cash flow and reduce late payments.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'Navigate GST registration, collection, and reporting as an Australian freelancer.',
  },
];

export default function PricingStrategyGlossaryPage() {
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
            <span className="text-white">Pricing Strategy</span>
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
            Pricing Strategy:{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              How to Price Freelance Services in Australia
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Your pricing strategy determines how much you earn, who you attract as clients, and how sustainable your freelance business is. This guide covers the four core pricing models, a step-by-step rate calculation formula with Australian tax and super, value-based pricing techniques, and the most common mistakes that cost freelancers thousands every year.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">4</span>
              <div>
                <p className="text-white font-medium text-sm">4 Models</p>
                <p className="text-gray-400 text-sm">Hourly, project-based, value-based, and retainer &mdash; each suits different scenarios</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">50%</span>
              <div>
                <p className="text-white font-medium text-sm">Target Net Profit Margin</p>
                <p className="text-gray-400 text-sm">50&ndash;70% net profit margin target for service-based freelancers in Australia</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">$85</span>
              <div>
                <p className="text-white font-medium text-sm">Median AU Freelancer Rate</p>
                <p className="text-gray-400 text-sm">Median Australian freelancer hourly rate &mdash; but top performers charge $200&ndash;$400+</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">3x</span>
              <div>
                <p className="text-white font-medium text-sm">The 3x Rule</p>
                <p className="text-gray-400 text-sm">Your freelance rate should be approximately 3x what you&apos;d earn as an employee</p>
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

        {/* Section 1: What Is a Pricing Strategy? */}
        <section id="what-is-pricing-strategy">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Pricing Strategy?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A pricing strategy is the <strong className="text-white">deliberate method you use to set the price of your services</strong>. It is not a single number &mdash; it is a framework that accounts for your costs, the value you deliver, your market position, your target clients, and your income goals. Without a pricing strategy, you are guessing. And guessing almost always means undercharging.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For freelancers, pricing is arguably the most important business decision you make. A 20% increase in your rate &mdash; from $100/hr to $120/hr &mdash; across 1,200 annual billable hours adds <strong className="text-white">$24,000 to your annual revenue</strong> without working a single extra hour. Conversely, underpricing by the same amount costs you exactly the same. Every dollar of underpricing is a dollar you never get back.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Why Freelancers Need a Pricing Strategy</h3>
            <p className="text-gray-300 leading-relaxed">
              Unlike employees who negotiate salary once per year, freelancers make pricing decisions <strong className="text-white">every time they quote a project</strong>. Without a consistent strategy, you end up with wildly different rates for different clients, inconsistent profitability, and no clear path to increasing your income. A pricing strategy gives you:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Consistency</strong> &mdash; every client gets a fair, calculated price based on the same methodology</span></li>
              <li className="flex items-start gap-2"><span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Confidence</strong> &mdash; you can justify your rates with data and reasoning, not just &quot;that feels right&quot;</span></li>
              <li className="flex items-start gap-2"><span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Profitability</strong> &mdash; your prices cover all costs including tax, super, and overheads</span></li>
              <li className="flex items-start gap-2"><span className="text-sky-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Growth</strong> &mdash; a clear framework for when and how to increase your rates over time</span></li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">The Four Core Pricing Models</h3>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Model</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">How It Works</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Best For</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Hourly</td>
                      <td className="py-3 px-4 text-gray-300">Charge per hour worked</td>
                      <td className="py-3 px-4 text-gray-300">Variable scope, consulting, ongoing work</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Project-Based</td>
                      <td className="py-3 px-4 text-gray-300">Fixed fee for defined deliverables</td>
                      <td className="py-3 px-4 text-gray-300">Clear scope, repeat work, creative projects</td>
                      <td className="py-3 px-4"><span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full">Medium</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Value-Based</td>
                      <td className="py-3 px-4 text-gray-300">Price tied to client ROI or outcomes</td>
                      <td className="py-3 px-4 text-gray-300">Strategy, marketing, high-impact work</td>
                      <td className="py-3 px-4"><span className="text-sky-400 text-xs font-medium bg-sky-500/10 px-2 py-0.5 rounded-full">Variable</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Retainer</td>
                      <td className="py-3 px-4 text-gray-300">Fixed monthly fee for ongoing access</td>
                      <td className="py-3 px-4 text-gray-300">Long-term clients, recurring work</td>
                      <td className="py-3 px-4"><span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Low</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Most experienced freelancers use a combination of models depending on the client, project type, and relationship maturity.</p>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The Pricing Evolution</p>
              <p className="text-gray-400 text-sm">
                Most freelancers start with hourly pricing because it feels safe &mdash; you get paid for every hour you work. As you gain experience and confidence, the natural progression is <strong className="text-gray-200">hourly &rarr; project-based &rarr; value-based</strong>. Each step up the ladder increases your earning potential without increasing your working hours. The goal is to de-link your income from your time.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Pricing Models for Freelancers */}
        <section id="pricing-models">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Pricing Models for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Each pricing model has distinct advantages and trade-offs. Understanding all four gives you the flexibility to choose the right model for every situation &mdash; and often, to combine them strategically.
            </p>

            <div className="space-y-6 mt-6">
              {/* Hourly */}
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Hourly Pricing ($50&ndash;$300+/hr)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  You charge for every hour (or fraction of an hour) spent on the client&apos;s work. This is the most common starting point for freelancers because it directly links payment to time invested.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                    <p className="text-green-400 text-xs font-medium mb-1">Pros</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>&bull; Low risk &mdash; paid for every hour worked</li>
                      <li>&bull; Easy to adjust for scope changes</li>
                      <li>&bull; Simple for clients to understand</li>
                      <li>&bull; Protected against scope creep</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 text-xs font-medium mb-1">Cons</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>&bull; Income capped by available hours</li>
                      <li>&bull; Penalises efficiency &mdash; faster = less pay</li>
                      <li>&bull; Clients may micromanage your time</li>
                      <li>&bull; No reward for growing expertise</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Project-Based */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Project-Based Pricing ($500&ndash;$50,000+)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  A fixed price for a clearly defined set of deliverables. The client knows exactly what they will pay, and you manage your time to deliver within the budget. Your profit depends on how efficiently you work.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                    <p className="text-green-400 text-xs font-medium mb-1">Pros</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>&bull; Rewards efficiency &mdash; faster = higher effective rate</li>
                      <li>&bull; Client gets cost certainty</li>
                      <li>&bull; Easier to sell outcomes over hours</li>
                      <li>&bull; Higher earning potential per hour</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 text-xs font-medium mb-1">Cons</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>&bull; Scope creep risk if contract is loose</li>
                      <li>&bull; Must estimate time accurately</li>
                      <li>&bull; Loss if project takes longer than planned</li>
                      <li>&bull; Requires clear deliverable definitions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Value-Based */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Value-Based Pricing ($2,000&ndash;$100,000+)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  You price based on the <strong className="text-gray-200">measurable value your work creates for the client</strong>, not the hours it takes you. A website that generates $500K in annual revenue is worth far more than 40 hours of development time. This is the most profitable model for experienced freelancers.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                    <p className="text-green-400 text-xs font-medium mb-1">Pros</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>&bull; Highest earning potential by far</li>
                      <li>&bull; Completely de-links income from time</li>
                      <li>&bull; Aligns your incentives with client outcomes</li>
                      <li>&bull; Rewards expertise and efficiency</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 text-xs font-medium mb-1">Cons</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>&bull; Requires strong discovery and sales skills</li>
                      <li>&bull; Not all projects have measurable ROI</li>
                      <li>&bull; Some clients resist non-hourly pricing</li>
                      <li>&bull; Need confidence to quote high numbers</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Retainer */}
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Retainer Pricing ($1,000&ndash;$10,000+/month)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  The client pays a fixed monthly fee for a guaranteed block of your time or a defined set of recurring deliverables. Retainers provide stable, predictable income &mdash; the holy grail for freelancers who want to escape the feast-or-famine cycle.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                    <p className="text-green-400 text-xs font-medium mb-1">Pros</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>&bull; Predictable, recurring income</li>
                      <li>&bull; Reduces time spent finding new clients</li>
                      <li>&bull; Builds deeper client relationships</li>
                      <li>&bull; Easier cash flow forecasting</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 text-xs font-medium mb-1">Cons</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>&bull; May limit capacity for higher-paying projects</li>
                      <li>&bull; Scope boundaries can become blurry</li>
                      <li>&bull; Client may not use all allocated hours</li>
                      <li>&bull; Can become complacent with guaranteed income</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The Transition Path: Hourly to Value-Based</h3>
            <p className="text-gray-300 leading-relaxed">
              Moving from hourly to value-based pricing does not happen overnight. The typical transition takes 2&ndash;3 years and follows this path:
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                <span className="flex-shrink-0 w-7 h-7 rounded bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">Start with hourly (Year 1)</p>
                  <p className="text-gray-400 text-sm">Learn your market, track your time meticulously, understand how long projects actually take.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                <span className="flex-shrink-0 w-7 h-7 rounded bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">Move to project-based (Year 1&ndash;2)</p>
                  <p className="text-gray-400 text-sm">Use your time tracking data to quote fixed prices on familiar project types. Your effective rate starts exceeding your hourly rate.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                <span className="flex-shrink-0 w-7 h-7 rounded bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">Introduce value-based (Year 2&ndash;3+)</p>
                  <p className="text-gray-400 text-sm">For high-impact projects, start pricing based on client ROI. Requires deeper discovery conversations and confidence in your expertise.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                <span className="flex-shrink-0 w-7 h-7 rounded bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">4</span>
                <div>
                  <p className="text-white font-medium text-sm">Build retainers for stability (Ongoing)</p>
                  <p className="text-gray-400 text-sm">Convert your best long-term clients to monthly retainers for predictable income, while using value-based pricing for new project work.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Australian Market Rate Ranges (2025&ndash;26)</p>
              <p className="text-gray-400 text-sm">
                Hourly rates for Australian freelancers range from <strong className="text-gray-200">$50/hr for junior generalists to $300+/hr for senior specialists</strong>. Project fees range from $500 for small tasks to $50,000+ for complex deliverables. The key insight: your pricing model matters more than the absolute number. A freelancer charging $80/hr on hourly billing may earn less annually than one charging $5,000 per project who completes projects in 25 hours (effective rate: $200/hr).
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: How to Calculate Your Rate */}
        <section id="calculate-your-rate">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Calculate Your Rate</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Your rate is not a number you pull from thin air. It is a <strong className="text-white">calculated figure based on your income goals, business costs, tax obligations, and realistic billable hours</strong>. Here is the complete formula for Australian freelancers:
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The Master Formula</h3>
            <div className="rounded-xl bg-gray-800/50 border border-sky-500/30 p-6 mt-3">
              <p className="text-sky-400 font-mono text-lg text-center mb-4">
                (Annual Income Goal + Business Costs + Tax + Super) &divide; Billable Hours = Rate
              </p>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">1</span>
                  <div>
                    <p className="text-white font-medium">Set Your Take-Home Target</p>
                    <p>What do you want in your bank account after everything? Example: <strong className="text-gray-200">$100,000</strong></p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">2</span>
                  <div>
                    <p className="text-white font-medium">Add Income Tax (ATO 2025&ndash;26 Brackets)</p>
                    <p>Calculate tax on the gross income required. Use the brackets below.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">3</span>
                  <div>
                    <p className="text-white font-medium">Add Superannuation (11.5%)</p>
                    <p>The 2025&ndash;26 SG rate. Voluntary for sole traders but critical for retirement.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">4</span>
                  <div>
                    <p className="text-white font-medium">Add Business Expenses (15&ndash;30% overhead)</p>
                    <p>Software, insurance, equipment, home office, professional development, marketing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <span className="flex-shrink-0 w-7 h-7 rounded bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">5</span>
                  <div>
                    <p className="text-white font-medium">Divide by Annual Billable Hours</p>
                    <p>48 working weeks &times; 25 billable hours/week = <strong className="text-gray-200">1,200 billable hours per year</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">ATO Tax Brackets 2025&ndash;26</h3>
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
                      <td className="py-3 px-4 text-gray-300">$0</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$18,201 &ndash; $45,000</td>
                      <td className="py-3 px-4 text-gray-300">16%</td>
                      <td className="py-3 px-4 text-gray-300">Up to $4,288</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$45,001 &ndash; $135,000</td>
                      <td className="py-3 px-4 text-gray-300">30%</td>
                      <td className="py-3 px-4 text-gray-300">Up to $27,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$135,001 &ndash; $190,000</td>
                      <td className="py-3 px-4 text-gray-300">37%</td>
                      <td className="py-3 px-4 text-gray-300">Up to $20,350</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">$190,001+</td>
                      <td className="py-3 px-4 text-gray-300">45%</td>
                      <td className="py-3 px-4 text-gray-300">On every dollar above $190K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Plus 2% Medicare Levy on total taxable income. HELP/HECS debt repayments may also apply. Rates are for Australian tax residents 2025&ndash;26.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Worked Example 1: Graphic Designer</h3>
            <div className="rounded-xl bg-gray-800/50 border border-sky-500/30 p-6 mt-3">
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Take-home income target</span>
                  <span className="text-white font-medium">$85,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Income tax (approx. on ~$115K gross)</span>
                  <span className="text-white font-medium">$22,700</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Medicare Levy (2%)</span>
                  <span className="text-white font-medium">$2,300</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Super (11.5% of gross income)</span>
                  <span className="text-white font-medium">$13,225</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Business expenses (Adobe, equipment, insurance)</span>
                  <span className="text-white font-medium">$8,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-sky-500/10 border border-sky-500/20">
                  <span className="text-sky-400 font-medium">= Total required revenue</span>
                  <span className="text-sky-400 font-bold">~$131,225</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">&divide; Annual billable hours</span>
                  <span className="text-white font-medium">1,200 hours</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-sky-500/10 border border-sky-500/20">
                  <span className="text-sky-400 font-medium">= Minimum hourly rate (ex-GST)</span>
                  <span className="text-sky-400 font-bold text-lg">~$110/hr</span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Worked Example 2: Web Developer</h3>
            <div className="rounded-xl bg-gray-800/50 border border-sky-500/30 p-6 mt-3">
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Take-home income target</span>
                  <span className="text-white font-medium">$120,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Income tax (approx. on ~$168K gross)</span>
                  <span className="text-white font-medium">$41,530</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Medicare Levy (2%)</span>
                  <span className="text-white font-medium">$3,360</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Super (11.5%)</span>
                  <span className="text-white font-medium">$19,320</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Business expenses (hosting, tools, hardware)</span>
                  <span className="text-white font-medium">$12,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-sky-500/10 border border-sky-500/20">
                  <span className="text-sky-400 font-medium">= Total required revenue</span>
                  <span className="text-sky-400 font-bold">~$196,210</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">&divide; Annual billable hours</span>
                  <span className="text-white font-medium">1,200 hours</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-sky-500/10 border border-sky-500/20">
                  <span className="text-sky-400 font-medium">= Minimum hourly rate (ex-GST)</span>
                  <span className="text-sky-400 font-bold text-lg">~$164/hr</span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Worked Example 3: Management Consultant</h3>
            <div className="rounded-xl bg-gray-800/50 border border-sky-500/30 p-6 mt-3">
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Take-home income target</span>
                  <span className="text-white font-medium">$180,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Income tax (approx. on ~$265K gross)</span>
                  <span className="text-white font-medium">$72,117</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Medicare Levy (2%)</span>
                  <span className="text-white font-medium">$5,300</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Super (11.5%)</span>
                  <span className="text-white font-medium">$30,475</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">+ Business expenses (travel, PI insurance, memberships)</span>
                  <span className="text-white font-medium">$18,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-sky-500/10 border border-sky-500/20">
                  <span className="text-sky-400 font-medium">= Total required revenue</span>
                  <span className="text-sky-400 font-bold">~$305,892</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">&divide; Annual billable hours (1,000 &mdash; senior consultants bill less)</span>
                  <span className="text-white font-medium">1,000 hours</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-sky-500/10 border border-sky-500/20">
                  <span className="text-sky-400 font-medium">= Minimum hourly rate (ex-GST)</span>
                  <span className="text-sky-400 font-bold text-lg">~$306/hr</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The 3x Employee Rule</p>
              <p className="text-gray-400 text-sm">
                A quick sanity check: your freelance rate should be approximately <strong className="text-gray-200">3x what you would earn per hour as a full-time employee</strong> in the same role. An employee earning $120,000/yr (roughly $62/hr based on 1,920 working hours) should freelance at around $180&ndash;$190/hr. The 3x multiplier accounts for the fact that employees get paid super, leave, sick days, equipment, training, and office space &mdash; none of which you get as a freelancer.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Value-Based Pricing in Practice */}
        <section id="value-based-pricing">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Value-Based Pricing in Practice</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Value-based pricing is the most profitable pricing model for experienced freelancers, but it requires a fundamentally different approach. Instead of asking &quot;how long will this take?&quot; you ask <strong className="text-white">&quot;how much is this worth to the client?&quot;</strong> The answer determines your fee.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Discovery Questions That Reveal Value</h3>
            <p className="text-gray-300 leading-relaxed">
              Before you can price on value, you need to understand what the project is worth to the client. Use these questions in your initial discovery call:
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">?</span>
                <div>
                  <p className="text-white font-medium text-sm">&quot;What happens if you do not solve this problem?&quot;</p>
                  <p className="text-gray-400 text-sm">This quantifies the cost of inaction. If not fixing their website costs them $10,000/month in lost leads, your $8,000 redesign is a bargain.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">?</span>
                <div>
                  <p className="text-white font-medium text-sm">&quot;What would a successful outcome be worth to your business over 12 months?&quot;</p>
                  <p className="text-gray-400 text-sm">Gets the client to articulate the ROI in their own words. If they say $200,000, your $20,000 fee is 10% of the value delivered.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">?</span>
                <div>
                  <p className="text-white font-medium text-sm">&quot;What budget have you allocated for this project?&quot;</p>
                  <p className="text-gray-400 text-sm">Anchors the conversation around their budget, not your time. If they say $30,000 and you were going to quote $8,000, you have room to offer more value at a higher price.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">?</span>
                <div>
                  <p className="text-white font-medium text-sm">&quot;How will you measure success for this project?&quot;</p>
                  <p className="text-gray-400 text-sm">This defines the KPIs you can tie your pricing to. If success is measured in leads, revenue, or time saved, you can price as a percentage of that value.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The Anchoring Technique</h3>
            <p className="text-gray-300 leading-relaxed">
              Present <strong className="text-white">three pricing tiers</strong> in your proposal. This anchors the client&apos;s perception of value and makes your preferred option (the middle tier) feel like the natural choice:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-2">Basic</p>
                <p className="text-white font-bold text-lg mb-2">$5,000</p>
                <p className="text-gray-400 text-sm">Core deliverable only. No extras, no strategy, minimal revisions. Gets the job done but leaves money on the table for both parties.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-sky-500/30 p-5 ring-1 ring-sky-500/20">
                <p className="text-sky-400 text-xs font-medium uppercase tracking-wide mb-2">Recommended</p>
                <p className="text-white font-bold text-lg mb-2">$12,000</p>
                <p className="text-gray-400 text-sm">Core deliverable plus strategy, implementation support, 3 rounds of revisions, and 30 days of post-launch optimisation. Best value.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-2">Premium</p>
                <p className="text-white font-bold text-lg mb-2">$25,000</p>
                <p className="text-gray-400 text-sm">Everything in Recommended plus ongoing management, quarterly reviews, priority support, and performance guarantees.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Case Studies: Value-Based Pricing in Action</h3>
            <div className="space-y-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">1</span>
                  <h4 className="text-white font-semibold">E-Commerce Website Redesign</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">Situation:</strong> Online retailer converting at 1.2%. Industry average is 2.5%. Monthly revenue: $80,000. <strong className="text-gray-200">Value calculation:</strong> Increasing conversion to 2.5% would generate an additional $86,667/month ($1,040,000/yr). <strong className="text-gray-200">Fee:</strong> $35,000 (3.4% of first-year value). <strong className="text-gray-200">Effective rate:</strong> $700/hr (50 hours of work). If priced hourly at $150/hr, the fee would have been just $7,500.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">2</span>
                  <h4 className="text-white font-semibold">Brand Strategy for Professional Services Firm</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">Situation:</strong> Accounting firm with 200 clients averaging $5,000/yr revenue each. Struggling to attract premium clients. <strong className="text-gray-200">Value calculation:</strong> Repositioning to attract clients worth $15,000/yr. Converting 20 new premium clients = $300,000 additional annual revenue. <strong className="text-gray-200">Fee:</strong> $18,000 (6% of projected year-one gain). <strong className="text-gray-200">Effective rate:</strong> $450/hr (40 hours of work).
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">3</span>
                  <h4 className="text-white font-semibold">SaaS Application Development</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">Situation:</strong> Startup needs an MVP to validate their SaaS idea. Target: 100 paying users at $49/month within 6 months. <strong className="text-gray-200">Value calculation:</strong> 100 users &times; $49 &times; 12 months = $58,800/yr ARR. Successful launch could attract $500K+ in seed funding. <strong className="text-gray-200">Fee:</strong> $45,000 for MVP with 3 months of iteration. <strong className="text-gray-200">Effective rate:</strong> $225/hr (200 hours of work).
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">4</span>
                  <h4 className="text-white font-semibold">Process Automation for Construction Company</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">Situation:</strong> Construction company spending 20 hours/week on manual data entry across 3 staff members. Average admin salary: $70,000/yr. <strong className="text-gray-200">Value calculation:</strong> Automating 80% of data entry saves 48 hours/week across the team = 1.2 FTE = $84,000/yr savings. <strong className="text-gray-200">Fee:</strong> $28,000 (33% of year-one savings). <strong className="text-gray-200">Effective rate:</strong> $350/hr (80 hours of work).
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The 10% Rule of Thumb</p>
              <p className="text-gray-400 text-sm">
                A common guideline for value-based pricing: <strong className="text-gray-200">charge 5&ndash;15% of the first-year value your work will generate</strong>. This ensures the client gets a significant return on investment while you earn substantially more than you would billing hourly. At 10%, a project that generates $100,000 in value justifies a $10,000 fee &mdash; regardless of whether it takes you 10 hours or 100 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Pricing Mistakes */}
        <section id="common-pricing-mistakes">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Pricing Mistakes</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              These six mistakes collectively cost freelancers <strong className="text-white">$20,000&ndash;$50,000 per year</strong> in lost revenue. Every single one is fixable.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">1</span>
                  <h3 className="text-lg font-semibold text-white">Undercharging Out of Fear</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 text-xs font-medium mb-1">The Problem</p>
                    <p className="text-gray-400 text-sm">Fear of losing the client or being rejected leads you to quote less than your work is worth. You rationalise it as &quot;building the relationship&quot; or &quot;getting my foot in the door.&quot; This becomes a pattern that is extremely hard to break.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                    <p className="text-green-400 text-xs font-medium mb-1">The Fix</p>
                    <p className="text-gray-400 text-sm">Calculate your rate using the formula in Section 3. That number is your floor &mdash; never go below it. If a client cannot afford your calculated rate, they are not your ideal client. Quote your rate with confidence. If nobody pushes back, you are still too cheap.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">2</span>
                  <h3 className="text-lg font-semibold text-white">Not Accounting for Tax and Super</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 text-xs font-medium mb-1">The Problem</p>
                    <p className="text-gray-400 text-sm">You set your rate based on what you want to earn, forgetting that income tax (up to 45%), Medicare Levy (2%), and super (11.5%) will consume 35&ndash;50% of your gross income. A $100/hr rate only puts $50&ndash;$65/hr in your pocket.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                    <p className="text-green-400 text-xs font-medium mb-1">The Fix</p>
                    <p className="text-gray-400 text-sm">Always calculate your rate working backwards from your desired take-home pay. Use the ATO tax brackets and add super on top. Your quoted rate should be 1.5&ndash;2x your desired take-home hourly amount.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">3</span>
                  <h3 className="text-lg font-semibold text-white">Comparing Yourself to Employees</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 text-xs font-medium mb-1">The Problem</p>
                    <p className="text-gray-400 text-sm">You think &quot;a developer earns $130K, so I should charge about $67/hr.&quot; This ignores that employees get super (11.5%), paid leave (4 weeks), sick leave, equipment, training, and office space &mdash; benefits worth 30&ndash;50% of salary that you pay for yourself.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                    <p className="text-green-400 text-xs font-medium mb-1">The Fix</p>
                    <p className="text-gray-400 text-sm">Apply the 3x rule. If the equivalent employee earns $67/hr, your freelance rate should be approximately $200/hr. This accounts for all the benefits, overhead, and non-billable time that employees do not worry about.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">4</span>
                  <h3 className="text-lg font-semibold text-white">Racing to the Bottom</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 text-xs font-medium mb-1">The Problem</p>
                    <p className="text-gray-400 text-sm">Competing on price against offshore freelancers or beginners. You lower your rate to win projects, attract price-sensitive clients who demand more for less, and trap yourself in an unsustainable pricing cycle.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                    <p className="text-green-400 text-xs font-medium mb-1">The Fix</p>
                    <p className="text-gray-400 text-sm">Compete on value, not price. Specialise in a niche where your expertise commands premium rates. Clients who choose the cheapest option were never going to be good long-term clients anyway. Position yourself above the commodity market.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">5</span>
                  <h3 className="text-lg font-semibold text-white">Not Raising Rates Regularly</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 text-xs font-medium mb-1">The Problem</p>
                    <p className="text-gray-400 text-sm">Charging the same rate for 2&ndash;3 years while inflation erodes your purchasing power by 3&ndash;4% annually. A $100/hr rate from 2023 is worth only $88&ndash;$91 in 2026 purchasing power. You are taking an invisible pay cut every year.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                    <p className="text-green-400 text-xs font-medium mb-1">The Fix</p>
                    <p className="text-gray-400 text-sm">Review rates annually (at minimum). Increase by CPI (3&ndash;4%) as a baseline. Increase more if you are fully booked, have new skills, or market rates have risen. Give existing clients 30&ndash;60 days notice. Introduce higher rates with new clients first.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">6</span>
                  <h3 className="text-lg font-semibold text-white">Inconsistent Pricing Across Clients</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 text-xs font-medium mb-1">The Problem</p>
                    <p className="text-gray-400 text-sm">Quoting wildly different rates for similar work based on gut feel, mood, or how much you like the client. This makes it impossible to forecast income, leads to resentment with low-paying clients, and creates awkward situations if clients compare notes.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                    <p className="text-green-400 text-xs font-medium mb-1">The Fix</p>
                    <p className="text-gray-400 text-sm">Use a rate card with clear pricing tiers. Document your rates for different service types and share them openly. Consistent pricing builds trust, simplifies quoting, and ensures every project meets your profitability threshold.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">The Compound Effect of Underpricing</p>
              <p className="text-gray-400 text-sm">
                Underpricing by just $20/hr costs you <strong className="text-gray-200">$24,000 per year</strong> (1,200 billable hours &times; $20). Over a 10-year freelance career, that is $240,000 in lost revenue &mdash; enough for a house deposit in most Australian cities. The cost of underpricing is not theoretical. It is real money you never earn.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="invoiceflow-pricing-tools">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A pricing strategy is only as good as your ability to <strong className="text-white">implement, track, and optimise it</strong>. InvoiceFlow gives Australian freelancers the tools to turn pricing decisions into real revenue:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Rate Tracking Across Clients</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set and manage <strong className="text-gray-200">different rates for each client and project type</strong>. InvoiceFlow stores your rate card so you never need to remember what you quoted. See your average effective rate across all clients at a glance. Compare rates between clients to identify underpriced relationships and opportunities to increase fees. Your rate history is tracked over time so you can see how your pricing has evolved.
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
                  <h3 className="text-lg font-semibold text-white">Profitability Analysis Per Project</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For every project, InvoiceFlow calculates your <strong className="text-gray-200">effective hourly rate, profit margin, and total profitability</strong>. See which projects earn you $200/hr and which are dragging your average down to $60/hr. This data is invaluable for future quoting &mdash; you learn exactly which project types, client sizes, and industries are most profitable for your business. Stop guessing and start pricing based on real data.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automatic Rate Card Management</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Maintain a <strong className="text-gray-200">centralised rate card</strong> with your standard pricing for different service types. When you create a new quote or invoice, your rates are pre-populated automatically. Update your rate card once and it applies everywhere &mdash; no more manually updating rates across multiple clients or projects. Includes support for tiered pricing (basic, standard, premium) to make value-based quoting effortless.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Proposal Generation with Pricing Tiers</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Generate professional proposals with <strong className="text-gray-200">built-in pricing tier templates</strong> (basic, recommended, premium). The three-tier anchoring technique is baked into the proposal builder, making it easy to present value-based pricing options to clients. Each tier includes scope descriptions, deliverables, timelines, and pricing &mdash; ready to send in minutes instead of hours. Proposals convert to invoices with one click once approved.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-sky-500/5 border border-sky-500/20 p-5 mt-6">
              <p className="text-sky-400 font-medium mb-2">Data-Driven Pricing Decisions</p>
              <p className="text-gray-400 text-sm">
                The biggest advantage of using InvoiceFlow for pricing is <strong className="text-gray-200">data</strong>. After 6&ndash;12 months, you have a clear picture of your effective rates, most profitable project types, average project durations, and client profitability rankings. This data transforms pricing from guesswork into a science. Use the <Link href="/tools/rate-calculator" className="text-sky-400 hover:text-sky-300 underline">Rate Calculator</Link> to find your baseline, then let InvoiceFlow track and optimise from there.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Glossary Terms */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Related Glossary Terms</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/glossary/billable-hours', label: 'Billable Hours' },
              { href: '/glossary/hourly-rate', label: 'Hourly Rate' },
              { href: '/glossary/profit-margin', label: 'Profit Margin' },
              { href: '/glossary/retainer', label: 'Retainer' },
              { href: '/glossary/scope-creep', label: 'Scope Creep' },
              { href: '/glossary/break-even-point', label: 'Break-Even Point' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-sky-500/40 hover:text-sky-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-sky-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                {term.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to calculate, compare, and optimise your freelance pricing.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on pricing, invoicing, and getting paid as a freelancer.</p>
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
            Price With Confidence
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow gives Australian freelancers rate tracking, profitability analysis, automatic rate card management, and proposal generation with pricing tiers &mdash; so every project is priced for profit, not guesswork.
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
