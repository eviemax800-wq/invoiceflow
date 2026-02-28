import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Use Cases — How Australian Freelancers Use InvoiceFlow',
  description:
    'Discover how InvoiceFlow handles 12 billing workflows: recurring invoicing, milestone billing, time-based billing, quote-to-invoice, deposit invoicing, international invoicing, expense reimbursement, batch invoicing, retainer billing, overdue management, credit notes, and proforma invoicing. Built for Australian freelancers.',
  alternates: { canonical: '/use-cases' },
  openGraph: {
    title: 'InvoiceFlow Use Cases — Billing Workflows for Every Freelancer',
    description:
      'Recurring invoicing, milestone payments, time billing, quote-to-invoice. See how InvoiceFlow handles every billing scenario Australian freelancers face.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://invoiceflow-teal.vercel.app/use-cases' },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'InvoiceFlow Use Cases',
  description: 'Billing workflows and use cases for Australian freelancers',
  numberOfItems: 12,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Recurring Invoicing',
      url: 'https://invoiceflow-teal.vercel.app/use-cases/recurring-invoicing',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Milestone Billing',
      url: 'https://invoiceflow-teal.vercel.app/use-cases/milestone-billing',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Time-Based Billing',
      url: 'https://invoiceflow-teal.vercel.app/use-cases/time-billing',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Quote to Invoice',
      url: 'https://invoiceflow-teal.vercel.app/use-cases/quote-to-invoice',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Deposit Invoicing',
      url: 'https://invoiceflow-teal.vercel.app/use-cases/deposit-invoicing',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'International Invoicing',
      url: 'https://invoiceflow-teal.vercel.app/use-cases/international-invoicing',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'Expense Invoicing',
      url: 'https://invoiceflow-teal.vercel.app/use-cases/expense-invoicing',
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'Batch Invoicing',
      url: 'https://invoiceflow-teal.vercel.app/use-cases/batch-invoicing',
    },
    {
      '@type': 'ListItem',
      position: 9,
      name: 'Retainer Billing',
      url: 'https://invoiceflow-teal.vercel.app/use-cases/retainer-billing',
    },
    {
      '@type': 'ListItem',
      position: 10,
      name: 'Overdue Invoice Management',
      url: 'https://invoiceflow-teal.vercel.app/use-cases/overdue-management',
    },
    {
      '@type': 'ListItem',
      position: 11,
      name: 'Credit Notes & Adjustments',
      url: 'https://invoiceflow-teal.vercel.app/use-cases/credit-notes',
    },
    {
      '@type': 'ListItem',
      position: 12,
      name: 'Proforma Invoicing',
      url: 'https://invoiceflow-teal.vercel.app/use-cases/proforma-invoicing',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What billing methods does InvoiceFlow support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow supports 8 billing workflows: recurring invoicing (weekly, fortnightly, monthly, quarterly), milestone/progress billing, time-based hourly billing, quote-to-invoice conversion, deposit/upfront invoicing, international invoicing with multi-currency support, expense and reimbursement invoicing, and batch/bulk invoicing. All methods include automatic GST calculation for Australian businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I set up automatic recurring invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow lets you create recurring invoice schedules for retainer clients, subscription services, or regular maintenance agreements. Set your frequency, and invoices are generated automatically with GST calculated correctly each time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does milestone billing work in InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You define project milestones (e.g., 30% deposit, 40% at midpoint, 30% on completion) and InvoiceFlow generates an invoice for each milestone when it\'s reached. Each invoice references the project and milestone, keeping everything linked for your records and your client\'s.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does InvoiceFlow integrate with time tracking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow converts tracked hours into professional invoices. Log your time, set your hourly rate, and generate detailed invoices showing work performed, hours spent, and total with GST. Perfect for consultants, developers, and other time-based professionals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert a quote into an invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Create a professional quote in InvoiceFlow, send it for approval, and convert it to a tax invoice with one click once accepted. All details carry over — line items, quantities, rates, GST — so you never re-enter data.',
      },
    },
  ],
};

const useCases = [
  {
    title: 'Recurring Invoicing',
    description: 'Automate invoices for retainers, subscriptions, and regular clients. Set it once, get paid every cycle without lifting a finger.',
    href: '/use-cases/recurring-invoicing',
    color: 'from-emerald-500 to-teal-400',
    targets: 'Retainer clients, maintenance contracts, monthly services',
    keywords: ['recurring invoicing', 'retainer billing', 'subscription invoicing'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.017 4.982v4.992" />
      </svg>
    ),
  },
  {
    title: 'Milestone Billing',
    description: 'Bill at project milestones — deposit, progress payments, and final delivery. Keep cash flow steady across long projects.',
    href: '/use-cases/milestone-billing',
    color: 'from-purple-500 to-pink-400',
    targets: 'Web developers, designers, agencies, builders',
    keywords: ['milestone billing', 'progress payments', 'project billing'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
  },
  {
    title: 'Time-Based Billing',
    description: 'Track hours, apply your rate, and generate invoices with detailed time breakdowns. Perfect for hourly consultants and contractors.',
    href: '/use-cases/time-billing',
    color: 'from-blue-500 to-cyan-400',
    targets: 'Consultants, IT contractors, lawyers, accountants',
    keywords: ['time billing', 'hourly invoicing', 'time tracking'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Quote to Invoice',
    description: 'Send professional quotes, get approval, and convert to tax invoices in one click. No re-entering data, no missed details.',
    href: '/use-cases/quote-to-invoice',
    color: 'from-amber-500 to-orange-400',
    targets: 'Tradies, service providers, freelancers quoting jobs',
    keywords: ['quote to invoice', 'quoting software', 'estimate to invoice'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Deposit Invoicing',
    description: 'Collect upfront deposits before starting work. Protect your cash flow with structured deposit and progress payment invoices.',
    href: '/use-cases/deposit-invoicing',
    color: 'from-rose-500 to-pink-400',
    targets: 'Web developers, designers, photographers, tradies',
    keywords: ['deposit invoice', 'upfront payment', 'progress payments'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'International Invoicing',
    description: 'Invoice overseas clients with correct GST-free treatment, currency conversion, and ATO-compliant export invoices.',
    href: '/use-cases/international-invoicing',
    color: 'from-sky-500 to-cyan-400',
    targets: 'Remote workers, tech freelancers, consultants with global clients',
    keywords: ['international invoicing', 'overseas clients', 'export invoicing'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Expense Invoicing',
    description: 'Invoice pass-through costs, disbursements, and reimbursable expenses with correct GST treatment and documentation.',
    href: '/use-cases/expense-invoicing',
    color: 'from-lime-500 to-green-400',
    targets: 'Architects, lawyers, event planners, consultants',
    keywords: ['expense invoicing', 'disbursements', 'reimbursable expenses'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Batch Invoicing',
    description: 'Send all your monthly invoices in one go. Batch create, personalise, and send invoices to multiple clients at once.',
    href: '/use-cases/batch-invoicing',
    color: 'from-indigo-500 to-violet-400',
    targets: 'Accountants, cleaners, VAs, personal trainers, tutors',
    keywords: ['batch invoicing', 'bulk invoicing', 'end of month billing'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    title: 'Retainer Billing',
    description: 'Manage retainer clients with balance tracking, overage billing, rollover rules, and professional balance reports.',
    href: '/use-cases/retainer-billing',
    color: 'from-cyan-500 to-sky-400',
    targets: 'Consultants, lawyers, accountants, marketing agencies, IT contractors',
    keywords: ['retainer billing', 'retainer management', 'monthly retainer invoicing'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
  },
  {
    title: 'Overdue Invoice Management',
    description: 'Automate payment reminders, track overdue invoices, calculate late fees, and escalate professionally.',
    href: '/use-cases/overdue-management',
    color: 'from-red-500 to-rose-400',
    targets: 'All freelancers and sole traders dealing with late payments',
    keywords: ['overdue invoices', 'payment reminders', 'late payment management'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Credit Notes & Adjustments',
    description: 'Issue ATO-compliant credit notes for refunds, corrections, and adjustments. Linked to original invoices with GST auto-adjusted.',
    href: '/use-cases/credit-notes',
    color: 'from-violet-500 to-purple-400',
    targets: 'Web developers, designers, consultants, photographers',
    keywords: ['credit notes', 'adjustment notes', 'refund invoicing'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: 'Proforma Invoicing',
    description: 'Create preliminary invoices for client approval before work begins. Convert to tax invoices with one click on acceptance.',
    href: '/use-cases/proforma-invoicing',
    color: 'from-emerald-500 to-teal-400',
    targets: 'Web developers, architects, consultants, tradies, photographers',
    keywords: ['proforma invoice', 'preliminary invoice', 'pre-invoice approval'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
  },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            InvoiceFlow
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/tools" className="hover:text-white transition-colors">Free Tools</Link>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
          </div>
          <Link href="/signup">
            <Button size="sm">Start Free</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-400 mb-8">
          Billing Workflows
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          One invoicing tool,{' '}
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            every billing workflow
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Whether you bill by the hour, by milestone, on subscription, or per-quote — InvoiceFlow handles it all with automatic GST, ATO compliance, and zero data entry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/invoice-generator">
            <Button variant="secondary" size="lg">Try the Invoice Generator</Button>
          </Link>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '12', label: 'Billing workflows' },
            { num: '$0', label: 'To start' },
            { num: '100+', label: 'Free tools' },
            { num: '30s', label: 'To create an invoice' },
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.num}
              </div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Choose your billing workflow</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Every Australian freelancer bills differently. InvoiceFlow adapts to your workflow — not the other way around.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((uc) => (
            <Link
              key={uc.href}
              href={uc.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:border-teal-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <div className={`inline-flex rounded-xl bg-gradient-to-br ${uc.color} p-3 text-white mb-4`}>
                {uc.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors mb-2">
                {uc.title}
              </h3>
              <p className="text-slate-400 mb-4">{uc.description}</p>
              <div className="text-xs text-slate-500">
                <span className="text-slate-600 font-medium">Best for:</span> {uc.targets}
              </div>
              <div className="mt-4 text-teal-400 text-sm font-medium group-hover:text-teal-300 transition-colors">
                Learn more &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How InvoiceFlow works</h2>
        <div className="space-y-8">
          {[
            { step: '1', title: 'Choose your billing method', desc: 'Recurring, milestone, time-based, or quote-to-invoice. Select the workflow that matches how you work.' },
            { step: '2', title: 'Set up your details', desc: 'Add your ABN, business name, bank details, and default payment terms. InvoiceFlow pre-fills these on every invoice.' },
            { step: '3', title: 'Create and send', desc: 'Generate professional ATO-compliant tax invoices in under 30 seconds. GST calculated automatically. Send via email or download as PDF.' },
            { step: '4', title: 'Track and get paid', desc: 'Monitor payment status, send automated reminders, and export to CSV or QuickBooks for BAS time.' },
          ].map((s) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-sm text-slate-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Pages */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Explore by profession or location</h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          We&apos;ve built tailored invoicing pages for 25+ professions and all 9 Australian capital cities.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'For Freelancers', href: '/for/freelancers' },
            { name: 'For Sole Traders', href: '/for/sole-traders' },
            { name: 'For Contractors', href: '/for/contractors' },
            { name: 'For Tradies', href: '/for/tradies' },
            { name: 'For Consultants', href: '/for/consultants' },
            { name: 'For Designers', href: '/for/graphic-designers' },
            { name: 'Melbourne', href: '/in/melbourne' },
            { name: 'Sydney', href: '/in/sydney' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center hover:border-teal-500/20 hover:bg-white/[0.04] transition-all text-sm text-slate-300 hover:text-teal-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="mx-auto max-w-2xl px-6 py-12">
        <EmailCapture />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Billing workflows FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-teal-400 transition-colors list-none flex justify-between items-center">
                {faq.name}
                <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to simplify your billing?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian freelancers who&apos;ve switched from spreadsheets and overpriced accounting software.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — 5 Invoices/Month</Button>
          </Link>
          <Link href="/tools" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
            Or try our 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne, Australia.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
