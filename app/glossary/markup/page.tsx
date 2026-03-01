import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Markup: What It Means, How to Calculate It & Markup vs Margin Explained — InvoiceFlow',
  description:
    'What does markup mean? Learn the markup formula, how markup differs from margin, how to calculate the right markup percentage for freelancers, markup on subcontractors, and Australian GST implications. Includes a markup vs margin comparison table and worked examples in AUD.',
  keywords: [
    'markup meaning',
    'markup vs margin',
    'markup percentage calculator',
    'markup formula',
    'how to calculate markup',
    'markup pricing freelancer',
    'markup on subcontractors',
    'markup rate australia',
  ],
  alternates: { canonical: '/glossary/markup' },
  openGraph: {
    title: 'Markup: What It Means, How to Calculate It & Markup vs Margin Explained — InvoiceFlow',
    description:
      'The complete guide to markup pricing for Australian freelancers. Understand the markup formula, how markup differs from margin, calculate the right markup percentage, and handle GST on marked-up amounts.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/markup',
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
    { '@type': 'ListItem', position: 3, name: 'Markup', item: `${BASE_URL}/glossary/markup` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between markup and margin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Markup and margin both measure the difference between cost and selling price, but they use different bases for the calculation. Markup is expressed as a percentage of the cost price. Margin is expressed as a percentage of the selling price. For example, if something costs $100 and you sell it for $150, the markup is 50% (you added $50 on top of the $100 cost), but the margin is only 33.3% ($50 profit divided by the $150 selling price). This distinction is critical because confusing the two can lead to significant underpricing. A 50% markup only gives you a 33.3% margin. To achieve a 50% margin, you would need a 100% markup (selling a $100 item for $200).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a reasonable markup for freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A reasonable markup for freelancers depends on the type of work and what is being marked up. For subcontractor costs, 15 to 25 percent markup is industry standard in Australia and covers your project management, quality assurance, and liability. For materials and supplies, 20 to 40 percent markup is common. For software and tool costs passed through to clients, 10 to 20 percent is typical. For white-label or resold services, 50 to 100 percent or more is standard, reflecting the value you add through client relationships, branding, and ongoing support. The key is to ensure your markup covers your overhead costs and leaves a genuine profit after accounting for time spent managing the work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I markup subcontractor costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, marking up subcontractor costs is standard practice and entirely appropriate. When you engage a subcontractor on behalf of a client, you are providing project management, quality control, client communication, risk management, and your professional reputation as a guarantee of quality. A 15 to 25 percent markup on subcontractor costs is the industry standard in Australia. Some freelancers charge even more when they are adding significant value through creative direction, strategy, or technical architecture. The markup should reflect the real value you add, not just a random percentage. Be transparent with clients about the fact that you manage subcontractors, but you are not obligated to disclose your exact cost or markup percentage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GST apply to markup in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you are registered for GST, GST applies to the full selling price including your markup, not just the markup component. For example, if you buy a service for $1,000 (plus $100 GST) and sell it to your client for $1,250 (with your $250 markup), you charge GST on the full $1,250 selling price, which is $125 GST. Your net GST liability to the ATO is the difference between the GST you collected ($125) and the GST you paid on the input ($100), which is $25. You can claim an input tax credit for the GST paid on the original cost. If you are not registered for GST (under the $75,000 threshold), you do not charge GST but you also cannot claim input tax credits on the costs you incur.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I disclose markup to clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You are not legally required to disclose the exact percentage or dollar amount of your markup to clients in Australia. Most freelancers and agencies present a single line-item price that includes their markup, rather than showing the cost and markup separately. For example, instead of listing "Subcontractor: $1,000 + 20% markup = $1,200", you would simply list "Development services: $1,200". However, transparency builds trust. If a client asks how you price subcontracted work, you can explain that your rate includes project management and quality assurance. Some clients, particularly government and enterprise, may require cost-plus pricing with disclosed markup rates as part of their procurement process. In those cases, the markup percentage is agreed upon upfront in the contract.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-markup', label: '1. What Is Markup?' },
  { id: 'markup-vs-margin', label: '2. Markup vs Margin' },
  { id: 'when-freelancers-use-markup', label: '3. When Freelancers Use Markup' },
  { id: 'how-to-calculate-right-markup', label: '4. How to Calculate the Right Markup' },
  { id: 'australian-tax-implications', label: '5. Australian Tax Implications' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with line-item pricing, cost tracking, and markup calculations built in.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Set hourly and project rates that account for markup, overhead, tax, super, and business costs.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Convert between markup and margin, calculate selling prices, and model different pricing scenarios.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on marked-up amounts, work out GST-inclusive and exclusive prices for your invoices.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/pricing-strategy',
    name: 'Pricing Strategy for Freelancers',
    description: 'How to set rates that cover your costs, reflect your value, and position you competitively in the Australian market.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'GST for Freelancers',
    description: 'When to register for GST, how to calculate it on marked-up amounts, and how it interacts with your invoices.',
  },
  {
    href: '/guides/subcontractor-management',
    name: 'Managing Subcontractors',
    description: 'How to find, engage, markup, and invoice for subcontractor work &mdash; including TPAR reporting obligations.',
  },
];

export default function MarkupGlossaryPage() {
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
            <span className="text-white">Markup</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Pricing &amp; Billing
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Markup:{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Definition, Formula &amp; How Freelancers Should Price
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Markup is the amount added to your cost price to determine the selling price you charge your client. It sounds simple, but 43% of freelancers undercharge because they confuse markup with margin. This guide explains the markup formula, walks through the critical markup vs margin distinction, shows you when and how to apply markup as an Australian freelancer, and covers the GST and tax implications you need to know.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
              </svg>
              <span>Pricing &amp; Billing</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">43%</span>
              <div>
                <p className="text-white font-medium text-sm">Freelancers Undercharge</p>
                <p className="text-gray-400 text-sm">43% of freelancers undercharge by confusing markup with margin &mdash; a costly mistake</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">15&ndash;25%</span>
              <div>
                <p className="text-white font-medium text-sm">Standard Subcontractor Markup</p>
                <p className="text-gray-400 text-sm">The average freelancer markup on subcontractor work in Australia is 15&ndash;25%</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">100%</span>
              <div>
                <p className="text-white font-medium text-sm">Markup = 50% Margin</p>
                <p className="text-gray-400 text-sm">A 100% markup (doubling the cost) only gives you a 50% profit margin &mdash; not 100%</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">GST</span>
              <div>
                <p className="text-white font-medium text-sm">Full Price Is Taxable</p>
                <p className="text-gray-400 text-sm">GST applies to the full selling price including markup, not just the markup component</p>
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

        {/* Section 1: What Is Markup? */}
        <section id="what-is-markup">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Markup?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Markup is the amount added to the cost price of a product or service to determine its selling price.</strong> It is expressed as a percentage of the cost, and it represents the difference between what something costs you and what you charge the client. Markup is one of the most fundamental concepts in pricing, and getting it right is the difference between running a profitable freelance business and working for less than you think.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The Markup Formula</h3>
            <p className="text-gray-300 leading-relaxed">
              The markup formula is straightforward:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="text-center">
                <p className="text-amber-400 font-mono text-lg mb-2">Markup % = ((Selling Price &minus; Cost) &divide; Cost) &times; 100</p>
                <p className="text-gray-500 text-sm">or equivalently</p>
                <p className="text-amber-400 font-mono text-lg mt-2">Selling Price = Cost &times; (1 + Markup %)</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">A Simple Example</h3>
            <p className="text-gray-300 leading-relaxed">
              You hire a subcontractor to build a website for <strong className="text-white">$2,000</strong>. You want to apply a <strong className="text-white">50% markup</strong>. Your selling price to the client is:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-400">Your cost (subcontractor)</span>
                  <span className="text-white font-medium">$2,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-400">Markup (50%)</span>
                  <span className="text-white font-medium">$1,000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-amber-400 font-medium">Selling price to client</span>
                  <span className="text-amber-400 font-bold">$3,000</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4">
              Your gross profit is $1,000. But here is the critical distinction that trips up 43% of freelancers: your <strong className="text-white">markup is 50%</strong> (profit as a percentage of cost), but your <strong className="text-white">profit margin is only 33.3%</strong> (profit as a percentage of the selling price). If you thought you were making a 50% margin, you were overestimating your profitability by a significant amount.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Markup vs Margin: The Key Difference</h3>
            <p className="text-gray-300 leading-relaxed">
              This is so important it deserves emphasis before we dive deeper in the next section:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5">
                <p className="text-amber-400 font-medium mb-2">Markup</p>
                <p className="text-gray-400 text-sm">Percentage of <strong className="text-gray-200">cost price</strong></p>
                <p className="text-gray-400 text-sm mt-1">How much you add <em>on top of</em> what you paid</p>
                <p className="text-gray-500 text-xs mt-2">$50 profit on $100 cost = 50% markup</p>
              </div>
              <div className="rounded-xl bg-orange-500/5 border border-orange-500/20 p-5">
                <p className="text-orange-400 font-medium mb-2">Margin</p>
                <p className="text-gray-400 text-sm">Percentage of <strong className="text-gray-200">selling price</strong></p>
                <p className="text-gray-400 text-sm mt-1">How much of the sale price is profit</p>
                <p className="text-gray-500 text-xs mt-2">$50 profit on $150 selling price = 33.3% margin</p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Key Takeaway</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Markup is always a higher number than margin for the same dollar profit.</strong> A 50% markup gives you a 33.3% margin. A 100% markup gives you a 50% margin. If you target a specific margin without understanding this relationship, you will consistently underprice your services.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Markup vs Margin */}
        <section id="markup-vs-margin">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Markup vs Margin</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The markup vs margin distinction is the single most important pricing concept for freelancers to understand. Getting it wrong means you earn less than you think on every single project. Let&apos;s break it down with conversion formulas and a comprehensive comparison table.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Conversion Formulas</h3>
            <p className="text-gray-300 leading-relaxed">
              You can convert between markup and margin using these formulas:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <p className="text-amber-400 font-medium mb-3">Markup to Margin</p>
                <p className="text-amber-400 font-mono text-sm">Margin = Markup &divide; (1 + Markup)</p>
                <p className="text-gray-500 text-xs mt-3">Example: 0.50 &divide; (1 + 0.50) = 0.333 = 33.3%</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <p className="text-orange-400 font-medium mb-3">Margin to Markup</p>
                <p className="text-orange-400 font-mono text-sm">Markup = Margin &divide; (1 &minus; Margin)</p>
                <p className="text-gray-500 text-xs mt-3">Example: 0.333 &divide; (1 &minus; 0.333) = 0.50 = 50%</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Markup vs Margin Comparison Table</h3>
            <p className="text-gray-300 leading-relaxed">
              This table shows how markup and margin relate, based on a <strong className="text-white">$100 cost price</strong>. Study this carefully &mdash; it is the most common source of pricing errors for freelancers:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Markup %</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Margin %</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Selling Price (on $100 cost)</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Profit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">20%</td>
                      <td className="py-3 px-4 text-gray-300">16.7%</td>
                      <td className="py-3 px-4 text-gray-300">$120</td>
                      <td className="py-3 px-4 text-gray-300">$20</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">25%</td>
                      <td className="py-3 px-4 text-gray-300">20.0%</td>
                      <td className="py-3 px-4 text-gray-300">$125</td>
                      <td className="py-3 px-4 text-gray-300">$25</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">30%</td>
                      <td className="py-3 px-4 text-gray-300">23.1%</td>
                      <td className="py-3 px-4 text-gray-300">$130</td>
                      <td className="py-3 px-4 text-gray-300">$30</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">33%</td>
                      <td className="py-3 px-4 text-gray-300">24.8%</td>
                      <td className="py-3 px-4 text-gray-300">$133</td>
                      <td className="py-3 px-4 text-gray-300">$33</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">40%</td>
                      <td className="py-3 px-4 text-gray-300">28.6%</td>
                      <td className="py-3 px-4 text-gray-300">$140</td>
                      <td className="py-3 px-4 text-gray-300">$40</td>
                    </tr>
                    <tr className="bg-amber-500/5">
                      <td className="py-3 px-4 text-amber-400 font-medium">50%</td>
                      <td className="py-3 px-4 text-amber-300">33.3%</td>
                      <td className="py-3 px-4 text-amber-300">$150</td>
                      <td className="py-3 px-4 text-amber-300">$50</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">75%</td>
                      <td className="py-3 px-4 text-gray-300">42.9%</td>
                      <td className="py-3 px-4 text-gray-300">$175</td>
                      <td className="py-3 px-4 text-gray-300">$75</td>
                    </tr>
                    <tr className="bg-amber-500/5">
                      <td className="py-3 px-4 text-amber-400 font-medium">100%</td>
                      <td className="py-3 px-4 text-amber-300">50.0%</td>
                      <td className="py-3 px-4 text-amber-300">$200</td>
                      <td className="py-3 px-4 text-amber-300">$100</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">150%</td>
                      <td className="py-3 px-4 text-gray-300">60.0%</td>
                      <td className="py-3 px-4 text-gray-300">$250</td>
                      <td className="py-3 px-4 text-gray-300">$150</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">200%</td>
                      <td className="py-3 px-4 text-gray-300">66.7%</td>
                      <td className="py-3 px-4 text-gray-300">$300</td>
                      <td className="py-3 px-4 text-gray-300">$200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Highlighted rows show common reference points: 50% markup = 33.3% margin, and 100% markup = 50% margin. Notice that markup is always the larger number.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Why This Matters for Freelancers</h3>
            <p className="text-gray-300 leading-relaxed">
              Imagine you want to make a <strong className="text-white">40% profit</strong> on a subcontractor you are paying $5,000. If you apply a 40% markup, you charge $7,000 &mdash; but your actual margin is only 28.6%. To achieve a true 40% margin, you would need a <strong className="text-white">66.7% markup</strong>, charging $8,333. That is a $1,333 difference on a single project. Over a year of projects, confusing markup and margin could cost you tens of thousands of dollars in lost profit.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Pro Tip: Always Think in Margin, Quote in Markup</p>
              <p className="text-gray-400 text-sm">
                Set your profit targets using <strong className="text-gray-200">margin</strong> (because margin tells you what percentage of revenue is profit), then convert to markup when setting your prices. If your target margin is 40%, your markup should be 66.7%. Use the conversion formula: <strong className="text-gray-200">Markup = Margin &divide; (1 &minus; Margin)</strong> = 0.40 &divide; 0.60 = 0.667 = 66.7%.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: When Freelancers Use Markup */}
        <section id="when-freelancers-use-markup">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">When Freelancers Use Markup</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Markup is not just for retailers selling physical goods. Freelancers use markup every day, often without realising it. Here are the six most common scenarios where markup applies to freelance work, along with worked examples in Australian dollars.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Subcontractor Markup (15&ndash;25% standard)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The most common use of markup for freelancers. When you engage a subcontractor to deliver part of a client project, you mark up their cost to cover your project management, quality assurance, client communication, and the risk you carry as the responsible party. <strong className="text-gray-200">15&ndash;25% is the standard range in Australia</strong>, though some freelancers charge more for complex coordination or specialised vetting.
                </p>
                <div className="rounded-lg bg-gray-900/50 border border-gray-700/30 p-4 mt-3">
                  <p className="text-amber-400 text-xs font-medium mb-2">Worked Example</p>
                  <p className="text-gray-400 text-sm">You hire a developer at <strong className="text-gray-200">$4,800</strong> to build a custom WordPress plugin. With a 20% markup: $4,800 &times; 1.20 = <strong className="text-gray-200">$5,760</strong> to the client. Your gross profit: <strong className="text-gray-200">$960</strong>.</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Materials and Supplies</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Photographers, videographers, designers, and tradespeople frequently purchase materials on behalf of clients. Markup covers your time sourcing, purchasing, transporting, and managing these materials, plus the carrying cost of funding the purchase before the client pays.
                </p>
                <div className="rounded-lg bg-gray-900/50 border border-gray-700/30 p-4 mt-3">
                  <p className="text-amber-400 text-xs font-medium mb-2">Worked Example</p>
                  <p className="text-gray-400 text-sm">A photographer purchases <strong className="text-gray-200">$650</strong> in props and backdrop materials for a commercial shoot. With a 30% markup: $650 &times; 1.30 = <strong className="text-gray-200">$845</strong> to the client. Gross profit: <strong className="text-gray-200">$195</strong>.</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Software and Tool Costs</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When you purchase software licences, hosting, or SaaS subscriptions specifically for a client project, a markup of 10&ndash;20% is standard. This covers your time evaluating, setting up, and managing the tools on the client&apos;s behalf.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Outsourced Work</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Similar to subcontractor markup, but for discrete tasks outsourced to specialists &mdash; copywriting, translation, illustration, data entry. The markup here often ranges from 25&ndash;50% because you are adding value through creative direction, brief writing, quality control, and revision management.
                </p>
                <div className="rounded-lg bg-gray-900/50 border border-gray-700/30 p-4 mt-3">
                  <p className="text-amber-400 text-xs font-medium mb-2">Worked Example</p>
                  <p className="text-gray-400 text-sm">You outsource 10 blog articles to a writer at <strong className="text-gray-200">$150 each ($1,500 total)</strong>. With a 40% markup: $1,500 &times; 1.40 = <strong className="text-gray-200">$2,100</strong> to the client. Gross profit: <strong className="text-gray-200">$600</strong>. This covers your time briefing, editing, and managing revisions.</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Agency White-Labeling</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When you white-label services from other providers under your own brand, markups of <strong className="text-gray-200">50&ndash;100% or more</strong> are standard. The client is paying for your brand, relationship, strategic input, and ongoing account management &mdash; not just the underlying deliverable. This is how many freelancers scale beyond trading time for money.
                </p>
                <div className="rounded-lg bg-gray-900/50 border border-gray-700/30 p-4 mt-3">
                  <p className="text-amber-400 text-xs font-medium mb-2">Worked Example</p>
                  <p className="text-gray-400 text-sm">You white-label SEO services from a specialist for <strong className="text-gray-200">$2,000/month</strong>. With a 75% markup: $2,000 &times; 1.75 = <strong className="text-gray-200">$3,500/month</strong> to the client. Gross profit: <strong className="text-gray-200">$1,500/month ($18,000/year)</strong> per client.</p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 text-sm font-bold">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Reselling Services</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Buying services at wholesale or partner rates and reselling them to your clients. Common with hosting, domain registration, email services, and managed IT. Markups vary widely based on the value you add, from 20% for simple reselling to 200%+ for fully managed services with SLAs.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">The Golden Rule of Markup</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Your markup should reflect the value you add, not just a random percentage.</strong> If you are actively managing, directing, and quality-controlling the work, a higher markup is justified. If you are simply passing through a cost with minimal involvement, keep the markup modest or charge a separate project management fee instead.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: How to Calculate the Right Markup */}
        <section id="how-to-calculate-right-markup">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Calculate the Right Markup</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Setting the right markup is not guesswork. It depends on four key factors: your <strong className="text-white">overhead percentage</strong>, your <strong className="text-white">desired profit percentage</strong>, <strong className="text-white">market rates</strong> in your industry, and the <strong className="text-white">client type</strong> you are serving. Here is a systematic approach to calculating your ideal markup.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The Formula Approach</h3>
            <p className="text-gray-300 leading-relaxed">
              If you know your overhead percentage and desired profit percentage, you can calculate the minimum markup needed using this formula:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="text-center">
                <p className="text-amber-400 font-mono text-lg">Markup = (Overhead% + Profit%) &divide; (1 &minus; Overhead% &minus; Profit%)</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4">
              For example, if your overhead is 20% and you want a 15% profit margin:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-400">Overhead %</span>
                  <span className="text-white font-medium">20%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-400">Desired Profit %</span>
                  <span className="text-white font-medium">15%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-400">Calculation</span>
                  <span className="text-white font-medium">(0.20 + 0.15) &divide; (1 &minus; 0.20 &minus; 0.15)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-medium">0.35 &divide; 0.65 = 0.538</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-amber-400 font-medium">Minimum markup needed</span>
                  <span className="text-amber-400 font-bold">53.8%</span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Industry Benchmark Markups</h3>
            <p className="text-gray-300 leading-relaxed">
              These are typical markup ranges by freelance profession in Australia. Use these as starting benchmarks, then adjust based on your specific overhead, experience, and market position:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Profession</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Typical Markup Range</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Equivalent Margin Range</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Design</td>
                      <td className="py-3 px-4 text-gray-300">50&ndash;100%</td>
                      <td className="py-3 px-4 text-gray-300">33&ndash;50%</td>
                      <td className="py-3 px-4 text-gray-400 text-xs">Higher for brand strategy, lower for production design</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Development</td>
                      <td className="py-3 px-4 text-gray-300">40&ndash;80%</td>
                      <td className="py-3 px-4 text-gray-300">29&ndash;44%</td>
                      <td className="py-3 px-4 text-gray-400 text-xs">Higher for architecture, lower for pure implementation</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Writing</td>
                      <td className="py-3 px-4 text-gray-300">30&ndash;60%</td>
                      <td className="py-3 px-4 text-gray-300">23&ndash;38%</td>
                      <td className="py-3 px-4 text-gray-400 text-xs">Higher for strategy and editing, lower for bulk content</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Consulting</td>
                      <td className="py-3 px-4 text-gray-300">100&ndash;200%</td>
                      <td className="py-3 px-4 text-gray-300">50&ndash;67%</td>
                      <td className="py-3 px-4 text-gray-400 text-xs">High markup reflects expertise, liability, and strategic value</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Trades</td>
                      <td className="py-3 px-4 text-gray-300">20&ndash;40%</td>
                      <td className="py-3 px-4 text-gray-300">17&ndash;29%</td>
                      <td className="py-3 px-4 text-gray-400 text-xs">Materials markup; labour billed separately</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white font-medium">Photography</td>
                      <td className="py-3 px-4 text-gray-300">40&ndash;75%</td>
                      <td className="py-3 px-4 text-gray-300">29&ndash;43%</td>
                      <td className="py-3 px-4 text-gray-400 text-xs">Equipment, props, locations, and post-production</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">These ranges reflect markup on subcontracted or outsourced work. Your overall effective markup (including your own labour) will vary based on how you structure your pricing.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Adjusting for Client Type</h3>
            <p className="text-gray-300 leading-relaxed">
              Not every client gets the same markup. Your pricing should reflect the cost of servicing different client types:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Enterprise clients:</strong> Higher markup (add 10&ndash;20%). More meetings, compliance requirements, procurement hoops, and slower payment. Your overhead per project is genuinely higher.</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">SMBs:</strong> Standard markup. Straightforward relationships, faster decisions, reasonable payment terms.</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Startups:</strong> Standard or slightly lower markup, but consider equity or success-fee arrangements for high-growth clients.</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-1 flex-shrink-0">&bull;</span><span><strong className="text-white">Non-profits:</strong> Reduced markup is common (10&ndash;15%), but never work at cost. Your overhead does not disappear because the client is a charity.</span></li>
            </ul>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Key Takeaway</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Your markup must cover overhead first, then deliver profit.</strong> If your overhead is 25% and you are only marking up by 20%, you are losing money on every project before you even account for your own time. Calculate your overhead honestly &mdash; include insurance, software, equipment, professional development, admin time, and unbillable hours.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Australian Tax Implications */}
        <section id="australian-tax-implications">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Australian Tax Implications</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Markup has specific tax implications in Australia that every freelancer needs to understand. Getting the GST treatment wrong on marked-up amounts is a common and potentially expensive mistake.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">GST on Marked-Up Amounts</h3>
            <p className="text-gray-300 leading-relaxed">
              If you are registered for GST (mandatory once your annual turnover exceeds $75,000), <strong className="text-white">GST applies to the full selling price including your markup</strong> &mdash; not just the markup component. Here is how it works:
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <p className="text-amber-400 text-xs font-medium mb-3">GST on Markup: Worked Example</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-400">You pay a subcontractor</span>
                  <span className="text-white font-medium">$1,000 + $100 GST = $1,100 total</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-400">Your markup (25%)</span>
                  <span className="text-white font-medium">$250</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-400">Selling price (ex-GST)</span>
                  <span className="text-white font-medium">$1,250</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-400">GST you charge client (10% of $1,250)</span>
                  <span className="text-white font-medium">$125</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-400">Total invoice to client</span>
                  <span className="text-amber-400 font-bold">$1,375 (inc. GST)</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Your net GST liability to ATO</span>
                  <span className="text-white font-medium">$125 collected &minus; $100 input credit = $25</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4">
              You collect $125 in GST from the client but can claim a $100 input tax credit for the GST you paid to the subcontractor. Your net GST remittance to the ATO is $25 &mdash; which is 10% of your $250 markup. The system works correctly as long as you claim all your input tax credits.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Tax Deductibility of the Cost Component</h3>
            <p className="text-gray-300 leading-relaxed">
              The cost component of your marked-up invoice (the amount you paid to the subcontractor or supplier) is a <strong className="text-white">tax-deductible business expense</strong>. Only the markup portion is treated as revenue for income tax purposes. Make sure you are properly recording both the cost and the selling price so your accountant can calculate your taxable income correctly.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">TPAR Reporting for Subcontractor Payments</h3>
            <p className="text-gray-300 leading-relaxed">
              If you pay subcontractors, you may need to lodge a <strong className="text-white">Taxable Payments Annual Report (TPAR)</strong> with the ATO. This is mandatory for businesses in certain industries (building and construction, cleaning, courier, IT, security, and road freight). The critical point for markup: <strong className="text-white">you must report the gross amount paid to the subcontractor</strong> (before your markup), not the amount you charged the client. Your TPAR reports what <em className="text-gray-200">you paid out</em>, not what you invoiced.
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">!</span>
                <div>
                  <p className="text-white font-medium text-sm">TPAR Due Date</p>
                  <p className="text-gray-400 text-sm">TPAR is due by 28 August each year for payments made in the previous financial year (1 July to 30 June). Late lodgement can result in penalties.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Markup on Reimbursable Expenses</h3>
            <p className="text-gray-300 leading-relaxed">
              Be careful with the distinction between <strong className="text-white">reimbursement</strong> and <strong className="text-white">markup</strong>. If you pass through a cost at exactly the amount you paid (no markup), it may be treated as a reimbursement rather than income. However, the ATO takes a strict view: if you invoice the cost as part of your services (rather than as a separate reimbursement), <strong className="text-white">the full amount is considered your income</strong>, and GST applies to the full amount. The safest approach is to either:
            </p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-1 flex-shrink-0">&bull;</span><span>Have the client pay the supplier directly (no markup issue, no GST issue for you)</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-1 flex-shrink-0">&bull;</span><span>Include the cost in your invoice with an appropriate markup and charge GST on the full amount</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-1 flex-shrink-0">&bull;</span><span>Issue the reimbursement as a separate line item, clearly labelled, with supporting receipts</span></li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-8">ATO View on Mark-Ups</h3>
            <p className="text-gray-300 leading-relaxed">
              The ATO does not have specific rules that limit or regulate markup percentages for freelancers. You are free to set whatever markup your market will bear. However, the ATO does scrutinise <strong className="text-white">transfer pricing</strong> arrangements between related parties (for example, if you are marking up costs between your own entities or to a related company). For standard arm&apos;s-length freelancer-to-client transactions, there are no restrictions on markup levels. Just ensure you are correctly reporting all income and claiming legitimate deductions.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Key Takeaway</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Keep meticulous records of your costs and selling prices.</strong> For every marked-up line item, you should be able to show the original cost, the markup percentage applied, and the final selling price. This makes BAS lodgement, income tax returns, and TPAR reporting straightforward &mdash; and protects you if the ATO ever audits your business.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built for Australian freelancers who need to manage markup, track costs, and invoice accurately &mdash; without the complexity of enterprise accounting software. Here is how it handles the markup workflow end to end.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Line Item Pricing with Cost Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every line item on an InvoiceFlow invoice can have an optional <strong className="text-gray-200">cost field</strong> that only you can see. Enter your cost, set your markup percentage, and InvoiceFlow automatically calculates the selling price. The client sees only the final price &mdash; your cost and markup are kept private. This means you can track your true profitability on every line item, every invoice, and every client without maintaining a separate spreadsheet.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Markup Calculation on Subcontractor Invoices</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When you receive an invoice from a subcontractor, InvoiceFlow lets you <strong className="text-gray-200">create a client invoice directly from the subcontractor cost</strong>. Enter the subcontractor amount, select your standard markup percentage (or set a custom one), and InvoiceFlow generates the client-facing invoice with the marked-up amount. You can set default markup percentages per subcontractor or per client, so the calculation is automatic for recurring work.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">GST Automatic Calculation on Marked-Up Amounts</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow automatically calculates GST on the <strong className="text-gray-200">full selling price (including markup)</strong>, not just the cost or the markup alone. It tracks the GST you pay on inputs (subcontractor invoices, materials) and the GST you charge on outputs (client invoices), giving you a clear view of your net GST position for BAS reporting. No more manual GST calculations on marked-up amounts.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Profit Margin Reporting</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Because InvoiceFlow tracks both your cost and selling price, it can generate <strong className="text-gray-200">profit margin reports</strong> that show your actual margin (not just markup) per line item, per invoice, per client, and across your entire business. See which clients and services are most profitable, identify where your margins are being squeezed, and make data-driven pricing decisions. The dashboard shows both markup percentage and margin percentage side by side, so you never confuse the two.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">From Guesswork to Precision</p>
              <p className="text-gray-400 text-sm">
                Most freelancers set their markup once and never revisit it. InvoiceFlow gives you the data to <strong className="text-gray-200">continuously optimise your pricing</strong>. See your actual margins across every client and service, identify underpriced work, and adjust your markup percentages based on real data &mdash; not gut feel. Use the <Link href="/tools/profit-margin-calculator" className="text-amber-400 hover:text-amber-300 underline">Profit Margin Calculator</Link> to model different markup scenarios before you commit.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture />
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

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to calculate markup, manage pricing, and invoice with confidence.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on pricing, markup, GST, and subcontractor management for freelancers.</p>
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

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Guessing Your Markup
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow gives Australian freelancers built-in cost tracking, markup calculation, GST automation, and profit margin reporting &mdash; so you know exactly how much you are making on every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/invoice-generator">
              <Button variant="secondary">Create Your First Invoice</Button>
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
