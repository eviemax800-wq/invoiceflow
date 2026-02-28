import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'GST-Compliant Invoicing for Australian Freelancers — InvoiceFlow',
  description:
    'ATO-compliant invoicing software that automatically handles GST calculations, includes all 7 tax invoice requirements, and generates BAS-ready reports. Built for Australian freelancers and sole traders.',
  keywords: [
    'GST compliant invoicing software',
    'ATO compliant invoicing',
    'GST invoice software australia',
    'tax invoice requirements australia',
    'GST calculator invoicing',
    'BAS ready invoicing',
    'australian freelancer GST',
  ],
  alternates: { canonical: '/features/gst-compliance' },
  openGraph: {
    title: 'GST-Compliant Invoicing for Australian Freelancers — InvoiceFlow',
    description:
      'Automatic GST calculations, all 7 ATO tax invoice requirements included, and BAS-ready exports. Stop worrying about GST compliance — InvoiceFlow handles it for you.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://invoiceflow-teal.vercel.app/features' },
    { '@type': 'ListItem', position: 3, name: 'GST Compliance', item: 'https://invoiceflow-teal.vercel.app/features/gst-compliance' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When do I need to register for GST in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must register for GST when your business turnover reaches $75,000 per year (or $150,000 for non-profit organisations). You can also voluntarily register below this threshold if you want to claim GST credits on business purchases. Once registered, you must include GST on your invoices and lodge Business Activity Statements (BAS) with the ATO — either monthly, quarterly, or annually.',
      },
    },
    {
      '@type': 'Question',
      name: 'What must a tax invoice include to be ATO compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO requires 7 elements on every tax invoice: (1) the words "Tax Invoice" stated prominently, (2) the seller\'s identity and ABN, (3) the date the invoice was issued, (4) a description of the goods or services supplied, (5) the GST amount (if the total is over $1,000), (6) the total price including GST, and (7) the buyer\'s identity (if the total is over $1,000). Missing any of these can mean your clients cannot claim GST credits.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is GST calculated on invoices in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GST in Australia is calculated at a flat rate of 10%. To add GST to a price, multiply by 1.1. To find the GST included in a GST-inclusive price, divide the total by 11 (the 1/11th method). For example, if your service costs $1,000 excluding GST, the GST is $100 and the total invoice amount is $1,100. If a price is already $1,100 inclusive, the GST component is $1,100 / 11 = $100.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to charge GST on export invoices from Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Exports of goods and services from Australia are generally GST-free under Division 38 of the GST Act. This means if you are an Australian freelancer providing services to overseas clients, you typically do not charge GST on those invoices. However, you can still claim GST credits on your Australian business expenses. You should mark these invoices as "GST-free export" and keep records of the overseas nature of the supply.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the penalty for incorrect GST invoices in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO can impose penalties for incorrect GST reporting ranging from 25% to 75% of the shortfall amount, depending on whether the error was due to a lack of reasonable care (25%), recklessness (50%), or intentional disregard (75%). Additionally, issuing invoices that incorrectly state the GST amount can result in administrative penalties of up to 20 penalty units per false or misleading statement. The ATO may also charge interest on any underpaid GST amounts.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Manual GST calculation errors on every invoice',
    solution: 'Automatic 10% GST calculation — add, remove, or extract GST with zero manual maths.',
  },
  {
    problem: 'Missing ATO-required fields on tax invoices',
    solution: 'All 7 ATO tax invoice requirements auto-included on every invoice you send.',
  },
  {
    problem: 'BAS preparation is a quarterly nightmare',
    solution: 'BAS-ready reporting — export your GST collected and paid in one click.',
  },
  {
    problem: 'Incorrect tax invoice formatting risks penalties',
    solution: 'ATO-compliant templates that meet every requirement, every time.',
  },
];

const atoRequirements = [
  { requirement: '"Tax Invoice" header stated prominently', detail: 'Automatically added to every invoice' },
  { requirement: 'Seller&apos;s ABN displayed', detail: 'Pulled from your business profile' },
  { requirement: 'Date of issue', detail: 'Auto-generated with correct formatting' },
  { requirement: 'Description of goods or services', detail: 'Line-item descriptions with quantities' },
  { requirement: 'GST amount shown (if total exceeds $1,000)', detail: 'Calculated and displayed automatically' },
  { requirement: 'Total amount payable', detail: 'GST-inclusive total always shown' },
  { requirement: 'Buyer&apos;s identity (if total exceeds $1,000)', detail: 'Client details from your contact book' },
];

const keyNumbers = [
  { value: '$75,000', label: 'GST registration threshold', description: 'Annual turnover before GST registration is mandatory' },
  { value: '10%', label: 'GST rate', description: 'Flat rate applied to all taxable goods and services' },
  { value: '$1,000', label: 'Detailed invoice threshold', description: 'Above this, buyer identity and GST amount required' },
  { value: '5 years', label: 'ATO record keeping', description: 'Minimum period you must retain tax invoices' },
];

const personas = [
  { name: 'Sole Traders', href: '/for/sole-traders', desc: 'Simple GST-compliant invoicing without the accounting overhead' },
  { name: 'Contractors', href: '/for/contractors', desc: 'Tax invoices that meet head contractor requirements' },
  { name: 'Tradies', href: '/for/tradies', desc: 'Quote-to-invoice with automatic GST on materials and labour' },
  { name: 'Accountants', href: '/for/accountants', desc: 'BAS-ready data and compliant invoices for your clients' },
  { name: 'Consultants', href: '/for/consultants', desc: 'Professional tax invoices for retainer and project billing' },
  { name: 'Allied Health', href: '/for/allied-health', desc: 'GST-free health services with compliant invoicing' },
];

const relatedTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Add, remove, or extract GST instantly' },
  { name: 'Tax Invoice Compliance Checker', href: '/tools/tax-invoice-compliance-checker', desc: 'Check if your invoice meets ATO requirements' },
  { name: 'BAS Preparation Checklist', href: '/tools/bas-preparation-checklist', desc: 'Step-by-step quarterly BAS prep guide' },
  { name: 'PAYG Calculator', href: '/tools/payg-installment-calculator', desc: 'Calculate your quarterly PAYG instalments' },
  { name: 'Tax Estimator', href: '/tools/tax-estimator', desc: 'Estimate your income tax for the financial year' },
  { name: 'Tax Deduction Finder', href: '/tools/tax-deduction-finder', desc: 'Discover deductions you might be missing' },
];

export default function GSTCompliancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
            <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>
          </div>
          <Link href="/signup">
            <Button size="sm">Start Free</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 mb-8">
          ATO Compliance
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          GST-compliant invoices,{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            every single time
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop second-guessing whether your invoices meet ATO requirements. InvoiceFlow automatically calculates GST,
          includes all 7 mandatory tax invoice fields, and generates BAS-ready reports — so you never get caught out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/gst-calculator">
            <Button variant="secondary" size="lg">Try the GST Calculator</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Free tier: 5 invoices/month, automatic GST, all ATO fields included
        </p>
      </section>

      {/* Pain Points → Solutions */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          GST compliance shouldn&apos;t keep you up at night
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Most freelancers aren&apos;t tax experts — and they shouldn&apos;t have to be. InvoiceFlow handles the compliance so you can focus on your work.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-emerald-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-2 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-emerald-300 font-semibold">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ATO Tax Invoice Requirements */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          ATO tax invoice requirements — all 7, automatically
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          The ATO mandates specific information on every tax invoice. Miss one and your client can&apos;t claim their GST credit. InvoiceFlow includes all seven — no manual checks needed.
        </p>
        <div className="mx-auto max-w-3xl space-y-4">
          {atoRequirements.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 flex items-start gap-4 hover:border-emerald-500/20 transition-colors"
            >
              <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-sm">
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">{item.requirement}</p>
                <div className="flex items-center gap-2 mt-1">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-emerald-400">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools/tax-invoice-compliance-checker" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Check your existing invoices for free &rarr;
          </Link>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Key GST numbers every freelancer should know
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          These are the thresholds and rates that determine your GST obligations in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyNumbers.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center hover:border-emerald-500/20 transition-colors"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="font-semibold text-white text-sm mb-1">{stat.label}</p>
              <p className="text-xs text-slate-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Needs GST-Compliant Invoicing */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Who needs GST-compliant invoicing?
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          If you&apos;re registered for GST (or approaching the $75K threshold), you need invoices that meet ATO requirements. Here&apos;s how InvoiceFlow helps different professionals.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((persona) => (
            <Link
              key={persona.href}
              href={persona.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {persona.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free GST and tax tools
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <div className="mx-auto max-w-6xl px-6">
        <EmailCapture />
      </div>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Start free. Upgrade when your business grows. Every plan includes full GST compliance.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-lg font-bold text-white mb-1">Free</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$0</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Perfect for getting started with GST-compliant invoicing.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                5 invoices per month
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Automatic GST calculation
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                All 7 ATO fields included
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                CSV export
              </li>
            </ul>
            <Link href="/signup">
              <Button variant="secondary" size="md" className="w-full">Start Free</Button>
            </Link>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.05] p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400 to-green-400 px-3 py-0.5 text-xs font-bold text-slate-900">
              Most Popular
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Pro</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$19</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Unlimited invoicing with full GST compliance and BAS exports.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited invoices
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                BAS-ready GST reporting
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                AI invoice extraction
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Payment reminders
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Gmail sync
              </li>
            </ul>
            <Link href="/signup">
              <Button size="md" className="w-full">Start Pro — 14-Day Trial</Button>
            </Link>
          </div>

          {/* Premium */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-lg font-bold text-white mb-1">Premium</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$39</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Multi-business GST management with advanced reporting.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Everything in Pro
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Multiple business profiles
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Per-entity GST tracking
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                QuickBooks &amp; Xero export
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
            </ul>
            <Link href="/signup">
              <Button variant="secondary" size="md" className="w-full">Start Premium</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently asked questions about GST invoicing
        </h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-emerald-400 transition-colors list-none flex justify-between items-center">
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
          Never worry about{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            GST compliance
          </span>{' '}
          again
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join Australian freelancers who trust InvoiceFlow to handle their GST calculations, ATO requirements, and BAS reporting — automatically, on every invoice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — ATO Compliant From Day One</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="secondary" size="lg">View Pricing</Button>
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
