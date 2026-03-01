import type { Metadata } from 'next';
import Link from 'next/link';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Milestone Payment: Complete Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is a milestone payment? Learn how to structure milestone billing, set payment percentages, create milestone schedules, and protect your freelance income with deliverable-based payments.',
  keywords: [
    'milestone payment meaning',
    'milestone billing freelancer',
    'milestone payment schedule template',
    'project milestone payments',
    'milestone invoicing',
    'deliverable based payment',
    'freelance project billing',
    'milestone payment structure',
    'milestone payment percentage',
    'progress billing freelancer',
    'milestone payment australia',
    'project payment schedule',
  ],
  alternates: { canonical: '/glossary/milestone-payment' },
  openGraph: {
    title: 'Milestone Payment: Complete Guide for Australian Freelancers — InvoiceFlow',
    description:
      'Everything freelancers need to know about milestone payments: structures, percentages, schedules, best practices, and how to protect your income with deliverable-based billing.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/milestone-payment',
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
    { '@type': 'ListItem', position: 3, name: 'Milestone Payment', item: `${BASE_URL}/glossary/milestone-payment` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a milestone payment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A milestone payment is a payment structure where the total project fee is divided into smaller amounts tied to specific deliverables or phases. Instead of paying everything upfront or at the end, the client pays at agreed checkpoints throughout the project. For example, a $10,000 website project might be split into five milestones: 20% at project kickoff, 20% after design approval, 30% after development, 15% after testing, and 15% at launch. Each payment is triggered when the freelancer completes and the client approves the corresponding deliverable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I structure milestone payments for freelance projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To structure milestone payments, first break your project into distinct phases with clear deliverables. Then assign a percentage or dollar amount to each phase based on the effort involved. A common structure is: 25-50% deposit upfront, then payments at each major deliverable (design concepts, first draft, development complete, testing/revisions), with a final 10-15% on project completion. Always define what "complete" means for each milestone in writing, and include the milestone schedule in your contract or proposal before work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What percentage should each milestone be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no single correct split, but best practice is to front-load your milestones so you are never too far ahead of payments received. A safe starting point is 30-50% as an upfront deposit, then divide the remainder across 2-4 deliverable milestones. Avoid back-loading too much into the final milestone — if 40%+ of your fee depends on the client approving the final deliverable, you carry significant risk. Most experienced Australian freelancers keep each milestone between 15-30% of the total, with the deposit being the largest single payment.',
      },
    },
    {
      '@type': 'Question',
      name: "What if a client won't agree to milestone payments?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "If a client resists milestone payments, explain the mutual benefits: they get to review and approve work before committing further payments, and you maintain cash flow to dedicate full attention to their project. Frame it as risk reduction for both parties. If they insist on paying only on completion, consider requesting a larger upfront deposit (50%) to offset the risk. For new clients with no track record, milestone payments are non-negotiable for most experienced freelancers — it's a standard industry practice that protects both sides.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do milestone payments protect freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Milestone payments protect freelancers in several ways. First, they ensure you receive partial payment throughout the project, so if the client cancels or disappears mid-project, you have been compensated for work completed. Second, they create natural review points where scope changes can be identified and priced before proceeding. Third, they improve cash flow by providing regular income rather than one lump sum months later. Fourth, they limit your financial exposure — at any point, your maximum unpaid work is only one milestone worth of effort, not the entire project.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-milestone-payment', label: '1. What Is a Milestone Payment?' },
  { id: 'milestone-structures', label: '2. Milestone Payment Structures' },
  { id: 'setting-up-milestones', label: '3. Setting Up Milestone Payments' },
  { id: 'best-practices', label: '4. Best Practices' },
  { id: 'common-problems', label: '5. Common Problems & Solutions' },
  { id: 'how-invoiceflow-helps', label: '6. How InvoiceFlow Helps' },
];

const relatedTools = [
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional milestone invoices with clear deliverable descriptions and payment schedules.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/payment-calculator',
    name: 'Payment Calculator',
    description: 'Calculate milestone splits, GST amounts, and total project fees in seconds.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/late-fee-calculator',
    name: 'Late Fee Calculator',
    description: 'Calculate late fees when milestone payments are overdue under Australian regulations.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/abn-lookup',
    name: 'ABN Lookup',
    description: 'Verify your client&apos;s ABN before signing a milestone-based contract.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays and improve cash flow for Australian freelancers.',
  },
  {
    href: '/guides/payment-terms',
    name: 'Payment Terms Guide',
    description: 'How to set payment terms that protect your cash flow and keep clients happy.',
  },
  {
    href: '/guides/gst-for-freelancers',
    name: 'Freelancer Tax Guide',
    description: 'When to register for GST, how to charge it on milestone invoices, and BAS lodgement tips.',
  },
];

export default function MilestonePaymentGlossaryPage() {
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
            <span className="text-white">Milestone Payment</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Project Billing
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Milestone Payment{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Complete Guide
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A milestone payment splits a project fee into smaller amounts tied to specific deliverables. It protects freelancers from non-payment, gives clients control over quality, and keeps cash flow steady throughout the engagement. Here&apos;s how to structure, negotiate, and manage milestone billing for your freelance projects.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>AU-Focused 2025-26</span>
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
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">DEF</span>
              <div>
                <p className="text-white font-medium text-sm">Pay Per Deliverable</p>
                <p className="text-gray-400 text-sm">Project fee split into payments triggered by completing specific phases or deliverables</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">TIP</span>
              <div>
                <p className="text-white font-medium text-sm">Always Get a Deposit</p>
                <p className="text-gray-400 text-sm">30&ndash;50% upfront before any work begins &mdash; this is non-negotiable for experienced freelancers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">WIN</span>
              <div>
                <p className="text-white font-medium text-sm">Mutual Risk Reduction</p>
                <p className="text-gray-400 text-sm">Client only pays for approved work; freelancer never works too far ahead of payment</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">GST</span>
              <div>
                <p className="text-white font-medium text-sm">Invoice Each Milestone</p>
                <p className="text-gray-400 text-sm">Issue a separate tax invoice for each milestone &mdash; required for GST reporting in Australia</p>
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

        {/* Section 1: What Is a Milestone Payment? */}
        <section id="what-is-milestone-payment">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Milestone Payment?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A <strong className="text-white">milestone payment</strong> (also called <strong className="text-white">progress billing</strong>, <strong className="text-white">phase-based payment</strong>, or <strong className="text-white">deliverable-based payment</strong>) is a payment structure where the total project fee is divided into smaller amounts, each tied to a specific deliverable or phase of work. The client pays at agreed checkpoints throughout the project rather than in a single lump sum at the start or end.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For example, a <strong className="text-white">$10,000 website project</strong> might be split into five milestones: $2,000 at project kickoff (deposit), $2,000 after design approval, $3,000 after development, $1,500 after testing, and $1,500 at launch. Each payment is triggered when the freelancer completes and the client approves the corresponding deliverable.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Milestone payments differ from other billing models in important ways. With <strong className="text-white">hourly billing</strong>, you charge for time regardless of output. With <strong className="text-white">fixed-price</strong> (lump sum), the client pays one amount at the end. With <strong className="text-white">retainers</strong>, the client pays a recurring fee for ongoing availability. Milestone billing sits between hourly and fixed-price &mdash; the total is agreed upfront like fixed-price, but payments are staggered like a series of smaller invoices.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A typical milestone structure for a freelance project follows the natural project lifecycle: <strong className="text-white">discovery</strong> (scoping, research, strategy) &rarr; <strong className="text-white">design</strong> (concepts, wireframes, visual design) &rarr; <strong className="text-white">development</strong> (build, implementation) &rarr; <strong className="text-white">testing</strong> (QA, revisions, client review) &rarr; <strong className="text-white">launch</strong> (deployment, handover, documentation). Each phase becomes a milestone with its own deliverable, approval gate, and payment.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Key Point</p>
              <p className="text-gray-400 text-sm">
                Milestone payments are <strong className="text-gray-200">the gold standard for project-based freelance work</strong> in Australia. They protect both parties: the client only pays for approved work, and the freelancer never works too far ahead of payment. For any project over $2,000&ndash;$3,000 AUD, milestone billing should be your default structure.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Milestone Payment Structures */}
        <section id="milestone-structures">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Milestone Payment Structures</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              There is no single &ldquo;correct&rdquo; way to split milestones. The right structure depends on your project type, risk tolerance, and client relationship. Here are the five most common structures Australian freelancers use:
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 whitespace-nowrap">Structure</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 whitespace-nowrap">Split Example</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 whitespace-nowrap">Best For</th>
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4 whitespace-nowrap">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-amber-400 text-sm font-medium whitespace-nowrap">Equal Splits</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">25% / 25% / 25% / 25%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Simple projects with even effort</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Low</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-orange-400 text-sm font-medium whitespace-nowrap">Front-Loaded</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">50% / 25% / 15% / 10%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">New clients, high-risk projects</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Lowest</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-amber-400 text-sm font-medium whitespace-nowrap">Deliverable-Based</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">20% / 20% / 30% / 15% / 15%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Web/app dev with clear phases</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Medium</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-orange-400 text-sm font-medium whitespace-nowrap">Time-Based</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Monthly: 33% / 33% / 34%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Long-running projects (3+ months)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Medium</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-amber-400 text-sm font-medium whitespace-nowrap">Hybrid</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">40% deposit + monthly billings</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Complex projects with evolving scope</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Low&ndash;Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Australian Freelancer Tip</p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-200">Front-loaded structures are safest for new client relationships.</strong> If you have never worked with a client before, request 40&ndash;50% upfront. Once you have completed 2&ndash;3 projects together and trust is established, you can move to equal splits or deliverable-based structures. Never back-load more than 15&ndash;20% of the fee into the final milestone &mdash; that is where most payment disputes occur.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Setting Up Milestone Payments */}
        <section id="setting-up-milestones">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Setting Up Milestone Payments</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Follow this 7-step checklist to set up milestone payments for any freelance project. Each step should be completed and agreed with the client <strong className="text-white">before work begins</strong>.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">7-Step Setup Checklist</h3>
              <div className="space-y-3">
                {[
                  { step: 'Define the full scope', detail: 'Document every deliverable, feature, and outcome the project must achieve. Be specific — "website" is too vague; "5-page Next.js website with contact form, blog, and Stripe checkout" is clear.' },
                  { step: 'Break scope into milestones', detail: 'Group related deliverables into 3-6 distinct phases. Each milestone should represent a meaningful, reviewable chunk of work — not arbitrary calendar dates.' },
                  { step: 'Assign percentages to each milestone', detail: 'Allocate a percentage of the total fee to each milestone based on effort, not time. The discovery/design phase often takes less time but more strategic effort than development.' },
                  { step: 'Define deliverables per milestone', detail: 'For each milestone, list exactly what the client will receive. "Design complete" is vague; "3 homepage concepts as Figma files + mobile wireframes for all pages" is actionable.' },
                  { step: 'Set timeline expectations', detail: 'Estimate duration for each milestone. Include buffer for client review and feedback. A 2-week development milestone should include 3-5 business days for client approval.' },
                  { step: 'Agree on payment terms', detail: 'Define when payment is due for each milestone (e.g., within 7 days of deliverable approval). Specify what happens if the client delays approval — a 14-day auto-approval clause is common.' },
                  { step: 'Put it in a written agreement', detail: 'Include the full milestone schedule in your contract or proposal. Both parties sign before any work begins. In Australia, this does not need to be a formal legal contract — a signed proposal or detailed email agreement is enforceable.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-white font-medium text-sm">{item.step}</span>
                      <p className="text-gray-400 text-sm mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Milestone Schedule */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 my-6">
              <h3 className="text-lg font-semibold text-white mb-4">Sample Milestone Schedule &mdash; $10,000 Website Project</h3>
              <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800/80">
                        <th className="text-left text-sm font-medium text-gray-300 px-5 py-3">Milestone</th>
                        <th className="text-left text-sm font-medium text-gray-300 px-5 py-3">Deliverable</th>
                        <th className="text-right text-sm font-medium text-gray-300 px-5 py-3">Amount (ex GST)</th>
                        <th className="text-right text-sm font-medium text-gray-300 px-5 py-3">Due</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700/50">
                      <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                        <td className="px-5 py-3 text-amber-400 text-sm font-medium">1. Deposit</td>
                        <td className="px-5 py-3 text-gray-400 text-sm">Signed proposal &amp; project kickoff</td>
                        <td className="px-5 py-3 text-gray-300 text-sm text-right">$3,000</td>
                        <td className="px-5 py-3 text-gray-400 text-sm text-right">Before work begins</td>
                      </tr>
                      <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                        <td className="px-5 py-3 text-amber-400 text-sm font-medium">2. Design</td>
                        <td className="px-5 py-3 text-gray-400 text-sm">Approved wireframes + 2 design concepts</td>
                        <td className="px-5 py-3 text-gray-300 text-sm text-right">$2,000</td>
                        <td className="px-5 py-3 text-gray-400 text-sm text-right">Week 2</td>
                      </tr>
                      <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                        <td className="px-5 py-3 text-amber-400 text-sm font-medium">3. Development</td>
                        <td className="px-5 py-3 text-gray-400 text-sm">Functional site on staging environment</td>
                        <td className="px-5 py-3 text-gray-300 text-sm text-right">$2,500</td>
                        <td className="px-5 py-3 text-gray-400 text-sm text-right">Week 5</td>
                      </tr>
                      <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                        <td className="px-5 py-3 text-amber-400 text-sm font-medium">4. Testing</td>
                        <td className="px-5 py-3 text-gray-400 text-sm">Bug fixes complete, client sign-off on staging</td>
                        <td className="px-5 py-3 text-gray-300 text-sm text-right">$1,500</td>
                        <td className="px-5 py-3 text-gray-400 text-sm text-right">Week 7</td>
                      </tr>
                      <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                        <td className="px-5 py-3 text-amber-400 text-sm font-medium">5. Launch</td>
                        <td className="px-5 py-3 text-gray-400 text-sm">Live deployment + handover documentation</td>
                        <td className="px-5 py-3 text-gray-300 text-sm text-right">$1,000</td>
                        <td className="px-5 py-3 text-gray-400 text-sm text-right">Week 8</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="bg-gray-800/60">
                        <td className="px-5 py-3 text-white text-sm font-bold" colSpan={2}>Total (ex GST)</td>
                        <td className="px-5 py-3 text-amber-400 text-sm font-bold text-right">$10,000</td>
                        <td className="px-5 py-3 text-gray-400 text-sm text-right">8 weeks</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-3">GST of 10% ($1,000) added to each milestone invoice if ABN-registered and earning over $75,000/year. Total project cost to client: $11,000 incl. GST.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Best Practices */}
        <section id="best-practices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Milestone Payment Best Practices</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              These eight best practices are drawn from how experienced Australian freelancers structure their milestone billing. Follow them to reduce disputes, protect your cash flow, and maintain professional client relationships.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Always Get a Deposit (30-50%)', desc: 'Never start work without an upfront deposit. This filters out non-serious clients, covers your initial time investment, and ensures the client has budget committed. For projects under $5,000, aim for 50%. For larger projects, 30% is standard.' },
                { title: 'Define Clear Deliverables', desc: 'Each milestone must have a specific, tangible deliverable the client can review. "Design phase complete" is vague. "Homepage mockup + 3 inner page wireframes delivered as Figma links" is reviewable and unambiguous.' },
                { title: 'Build in Review Periods', desc: 'Allow 3-5 business days for client review after each milestone delivery. This prevents bottlenecks and gives clients time to provide meaningful feedback. Specify review periods in your contract.' },
                { title: 'Include a Kill Fee Clause', desc: 'If the client cancels mid-project, you keep all milestone payments received plus a percentage (typically 20-25%) of the remaining project value. This compensates for lost opportunity and wind-down costs.' },
                { title: 'Use Written Agreements', desc: 'Always document the milestone schedule in writing — a signed proposal, contract, or even a detailed email chain. Verbal agreements are legally valid in Australia but nearly impossible to enforce.' },
                { title: 'Invoice at Completion, Not Calendar', desc: 'Tie invoices to deliverable completion, not calendar dates. If a milestone takes longer than expected, you still invoice when the work is done and approved — not on an arbitrary date.' },
                { title: 'Keep Milestones Balanced', desc: 'Avoid having any single milestone represent more than 35% of the total (except the deposit). If one milestone is too large, the client has too much leverage; if too small, the admin overhead is not worth it.' },
                { title: 'Track Time Per Milestone', desc: 'Even with fixed-price milestones, track your hours per phase. This data helps you price future projects more accurately and identify milestones where you are consistently under- or over-estimating effort.' },
              ].map((practice, i) => (
                <div key={i} className="rounded-xl bg-gray-800/40 border border-gray-700/40 p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">{practice.title}</h4>
                      <p className="text-sm text-gray-400">{practice.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Common Problems & Solutions */}
        <section id="common-problems">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Problems &amp; Solutions</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Even well-structured milestone agreements run into issues. Here are the six most common problems and how to resolve each one.
            </p>

            <div className="space-y-6 mt-6">
              {[
                {
                  title: 'Scope Creep Mid-Milestone',
                  problem: 'The client requests additional features or changes that were not part of the original milestone scope. You are halfway through development and the client asks for "just one more page" or "a small tweak to the design."',
                  resolution: 'Stop work on the new request. Document the change, estimate the additional effort, and present it as a formal change order with its own cost. Either add it to the current milestone (with an adjusted fee) or create a new milestone. Never absorb scope creep into an existing milestone — it trains clients to expect free additions.',
                },
                {
                  title: 'Delayed Client Approvals',
                  problem: 'You deliver a milestone but the client takes weeks to review and approve, stalling the project and delaying your next payment. This is especially painful when you have blocked out time for the next phase.',
                  resolution: 'Include an auto-approval clause in your contract: "If no feedback is provided within 10 business days of milestone delivery, the milestone is deemed approved and the corresponding invoice becomes payable." Also consider charging a project pause/restart fee if delays exceed 30 days.',
                },
                {
                  title: 'Client Disappears Mid-Project',
                  problem: 'After paying the deposit and approving the first milestone, the client stops responding. You have completed work that has not been paid for, and you cannot finish the project.',
                  resolution: 'Your kill fee clause covers this scenario. Send a formal notice: "I have not received a response to my milestone delivery sent on [date]. Per our agreement, if I do not hear from you within 14 days, I will close the project and invoice the kill fee of [amount]." Keep all milestone payments already received.',
                },
                {
                  title: 'Milestone Too Large',
                  problem: 'You scoped a milestone at 30% of the total but it ends up taking much more effort than expected. You are three weeks into what you estimated at one week, and the next payment is still a milestone away.',
                  resolution: 'For future projects, break large milestones into sub-milestones. For the current project, talk to the client — explain the situation honestly and propose splitting the remaining work into two milestones with adjusted payments. Most reasonable clients will agree when you explain the effort involved.',
                },
                {
                  title: 'Unclear Deliverables',
                  problem: 'You deliver what you believe is the milestone deliverable, but the client expected something different. "Website design" meant a Figma mockup to you but a fully coded frontend to the client.',
                  resolution: 'Always define deliverables as specific, tangible outputs in your contract: file formats, number of concepts/revisions, what "complete" looks like. For design milestones, specify "delivered as [Figma/PSD/PNG] files." For development milestones, specify "functional on [staging URL] with [listed features] working."',
                },
                {
                  title: 'Payment Disputes at Final Milestone',
                  problem: 'The client withholds the final payment, claiming the work does not meet expectations or finding new issues after you have delivered everything.',
                  resolution: 'This is why you keep the final milestone small (10-15%). Include a "punch list" process in your contract: the client provides a finite list of issues within 5 business days of final delivery, you fix those specific items, and payment becomes due. New feature requests or scope changes are not part of the punch list and are billed separately.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xs font-bold text-amber-400">{i + 1}</span>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{item.problem}</p>
                  <div className="rounded-lg bg-amber-500/5 border border-amber-500/20 p-3">
                    <p className="text-sm text-amber-300"><strong>Resolution:</strong> {item.resolution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: How InvoiceFlow Helps */}
        <section id="how-invoiceflow-helps">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How InvoiceFlow Helps</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              InvoiceFlow is built for milestone-based billing. From creating milestone schedules to tracking payments across phases, here is how it streamlines the entire process.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  title: 'Milestone Schedule Builder',
                  desc: 'Create a full milestone schedule with deliverables, percentages, and due dates. InvoiceFlow calculates GST per milestone and generates a professional schedule you can attach to your proposal.',
                  icon: (
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  ),
                },
                {
                  title: 'Auto-Generate Milestone Invoices',
                  desc: 'When a milestone is complete, generate a tax invoice in one click. The invoice pre-fills with the milestone deliverable, amount, GST, and your ABN — ready to send to the client.',
                  icon: (
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  ),
                },
                {
                  title: 'Project Progress Dashboard',
                  desc: 'See every project at a glance: which milestones are complete, which payments are received, and what is still outstanding. Track multiple milestone projects simultaneously without spreadsheets.',
                  icon: (
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                  ),
                },
                {
                  title: 'Automated Payment Reminders',
                  desc: 'Set up automatic payment reminders for overdue milestones. InvoiceFlow sends polite follow-ups at intervals you choose — so you never have to write awkward chaser emails yourself.',
                  icon: (
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  ),
                },
                {
                  title: 'Change Order Management',
                  desc: 'When scope changes arise, create a formal change order linked to the project. Track additional costs separately from the original milestone schedule so both you and the client have full visibility.',
                  icon: (
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  ),
                },
                {
                  title: 'Client Portal with Approval Flow',
                  desc: 'Share a client-facing portal where clients can view milestone deliverables, approve completed work, and trigger payments. Digital approval timestamps create an audit trail for dispute resolution.',
                  icon: (
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((feature, i) => (
                <div key={i} className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    {feature.icon}
                    <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Why It Matters</p>
              <p className="text-gray-400 text-sm">
                Managing milestones in spreadsheets or email threads leads to missed payments, unclear deliverables, and disputes. InvoiceFlow gives you a <strong className="text-gray-200">single source of truth for every project</strong> &mdash; from the initial milestone schedule through to the final payment. Every approval, invoice, and payment is tracked automatically so you can focus on the work, not the admin.
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
              { href: '/glossary/invoice', label: 'Invoice' },
              { href: '/glossary/payment-terms', label: 'Payment Terms' },
              { href: '/glossary/deposit', label: 'Deposit' },
              { href: '/glossary/scope-of-work', label: 'Scope of Work' },
              { href: '/glossary/progress-billing', label: 'Progress Billing' },
              { href: '/glossary/retainer', label: 'Retainer' },
            ].map((term) => (
              <Link
                key={term.href}
                href={term.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-300 text-sm hover:border-amber-500/40 hover:text-amber-400 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-amber-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <p className="text-gray-400 text-center mb-8">Free tools to create milestone invoices, calculate payments, and manage your freelance billing.</p>
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on payments, billing structures, and freelance finances in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-orange-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-orange-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
            Manage Milestone Payments Effortlessly
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow lets you create milestone schedules, generate invoices per phase, track approvals, and send automatic payment reminders &mdash; so you get paid on time, every time. Start free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium hover:from-amber-400 hover:to-orange-400 transition-all"
            >
              Start Free &mdash; No Card Required
            </Link>
            <Link
              href="/tools/invoice-generator"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 font-medium hover:border-amber-500/50 hover:text-white transition-all"
            >
              Try the Invoice Generator
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
