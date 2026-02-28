import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Use Cases — How Australian Freelancers Use InvoiceFlow',
  description:
    'Discover how InvoiceFlow handles recurring invoicing, milestone billing, time-based billing, and quote-to-invoice workflows. Built for Australian freelancers and sole traders.',
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
  numberOfItems: 4,
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
        text: 'InvoiceFlow supports recurring invoicing (weekly, fortnightly, monthly, quarterly), milestone/progress billing, time-based hourly billing, and quote-to-invoice conversion. All methods include automatic GST calculation for Australian businesses.',
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
            { num: '4', label: 'Billing workflows' },
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
