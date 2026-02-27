import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing for Contractors & Subcontractors Australia — InvoiceFlow',
  description:
    'Free invoicing tools for Australian contractors and subcontractors. Milestone payments, progress claims, subcontractor agreements, PAYG withholding calculator, and GST compliance.',
  alternates: { canonical: '/for/contractors' },
  openGraph: {
    title: 'InvoiceFlow for Contractors — Milestone Payments, PAYG, GST',
    description:
      'Invoicing built for Australian contractors. Progress claims, milestone payments, ABN withholding checks, and PAYG compliance. Free tools included.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Contractors', item: 'https://invoiceflow-teal.vercel.app/for/contractors' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens if a contractor doesn\'t provide an ABN on their invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If a contractor doesn\'t quote their ABN on an invoice, the payer must withhold 47% of the payment and send it to the ATO. This is called "no ABN withholding" under Division 12 of Schedule 1 of the Taxation Administration Act 1953. InvoiceFlow flags invoices missing ABNs so you never accidentally lose 47% of a payment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do contractors handle milestone payments and progress claims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contractors typically invoice at project milestones (e.g., 30% deposit, 30% at halfway, 40% on completion) or submit monthly progress claims based on work completed. InvoiceFlow supports milestone-based invoicing — set up your payment schedule at project start and generate invoices at each stage with the correct amounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do subcontractors need to charge GST in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Subcontractors must register for and charge GST once their annual turnover reaches $75,000. Below this threshold, GST registration is optional. If you\'re registered, you must include GST on all tax invoices and lodge BAS returns. InvoiceFlow automatically calculates GST and tracks your threshold progress.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between a contractor and an employee for tax purposes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO uses several tests: contractors control how and when they work, use their own tools, can subcontract, take commercial risk, and invoice for completed work. Employees work set hours under direction, use employer tools, and receive regular wages. Getting this wrong has serious tax consequences — contractors handle their own super, tax, and insurance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What records must Australian contractors keep for tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO requires contractors to keep records of all income and expenses for 5 years. This includes: all invoices issued and received, bank statements, receipts for business expenses, vehicle logbooks (if claiming car expenses), contracts and agreements, and BAS lodgement records. InvoiceFlow stores all your invoices digitally and exports BAS-ready reports.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Missing ABN → 47% withheld by client',
    solution: 'ABN validation on every invoice. Never lose 47% to withholding again.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    problem: 'Tracking milestone payments across multiple projects',
    solution: 'Milestone-based invoicing. Set the schedule, generate invoices at each stage.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    problem: 'Figuring out PAYG withholding and quarterly BAS',
    solution: 'PAYG calculator + BAS-ready exports. Quarterly prep takes minutes, not hours.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    problem: 'Subcontractor agreements and compliance paperwork',
    solution: 'Free subcontractor agreement generator. Professional, legally-informed, ready to sign.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const popularTools = [
  { name: 'PAYG Calculator', href: '/tools/payg-installment-calculator', desc: 'Quarterly PAYG amounts' },
  { name: 'Subcontractor Agreement', href: '/tools/subcontractor-agreement-generator', desc: 'Generate agreements' },
  { name: 'Milestone Payment Calculator', href: '/tools/milestone-payment-calculator', desc: 'Plan payment stages' },
  { name: 'Contractor vs Employee', href: '/tools/contractor-employee-calculator', desc: 'Know the difference' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify ABNs instantly' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-calculator', desc: 'Calculate interest owed' },
];

const professionGuides = [
  { title: 'Invoicing for Electricians & Tradespeople', href: '/blog/invoicing-electricians-tradespeople-australia' },
  { title: 'Invoicing for Carpenters & Builders', href: '/blog/invoicing-carpenters-builders-australia' },
  { title: 'Invoicing for Plumbers & Gas Fitters', href: '/blog/invoicing-plumbers-gas-fitters-australia' },
  { title: 'Invoicing for Landscapers & Gardeners', href: '/blog/invoicing-landscapers-gardeners-australia' },
  { title: 'Invoicing for IT Consultants', href: '/blog/invoicing-it-consultants-cybersecurity-australia' },
  { title: 'Contractor vs Employee Guide', href: '/blog/contractor-vs-employee-australia' },
];

export default function ForContractorsPage() {
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
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
          <Link href="/signup">
            <Button size="sm">Start Free</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400 mb-8">
          Built for Australian Contractors
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Invoicing that handles{' '}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            milestone payments, PAYG, and ABN compliance
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Contractors deal with progress claims, subcontractor agreements, and 47% withholding risks.
          InvoiceFlow handles the compliance so you can focus on the job.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/payg-installment-calculator">
            <Button variant="secondary" size="lg">Try the PAYG Calculator</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Free tier: 5 invoices/month, Gmail sync, CSV export, 100+ free tools
        </p>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Contractor invoicing problems, solved
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Generic invoicing tools don&apos;t understand progress claims, ABN withholding, or subcontractor compliance. InvoiceFlow does.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-amber-500/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-amber-300 font-semibold">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-amber-500/10 bg-gradient-to-br from-amber-900/10 to-orange-900/10 p-10">
          <h2 className="text-2xl font-bold text-center mb-8">Numbers every contractor should know</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-400">47%</div>
              <p className="text-sm text-slate-400 mt-1">Withheld if no ABN on invoice</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">$75K</div>
              <p className="text-sm text-slate-400 mt-1">GST registration threshold</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">11.5%</div>
              <p className="text-sm text-slate-400 mt-1">Super guarantee rate 2025-26</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">5 years</div>
              <p className="text-sm text-slate-400 mt-1">ATO record-keeping requirement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools for contractors
        </h2>
        <p className="text-center text-slate-400 mb-10">
          Built specifically for contractor workflows. No sign-up required.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Contractor invoicing guides</h2>
        <p className="text-center text-slate-400 mb-10">
          Industry-specific guides for Australian contractors.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {professionGuides.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-teal-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog/profession-guides" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
            View all profession guides &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Contractor invoicing FAQ
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-amber-400 transition-colors list-none flex justify-between items-center">
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
          Invoicing that understands contracting
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Progress claims, milestone payments, ABN compliance, PAYG tracking — all handled. Start free, upgrade when your business grows.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — 5 Invoices/Month</Button>
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
