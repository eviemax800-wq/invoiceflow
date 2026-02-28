import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Time-Based Billing & Invoicing Software — InvoiceFlow',
  description:
    'Track hours, apply your rate, and generate professional invoices with detailed time breakdowns. Built for Australian consultants, contractors, and hourly freelancers.',
  alternates: { canonical: '/use-cases/time-billing' },
  keywords: ['time billing software', 'hourly invoicing', 'time tracking invoice', 'billable hours tracker australia', 'consultant time billing'],
  openGraph: {
    title: 'Time-Based Billing — Track Hours, Invoice Automatically',
    description:
      'Log billable hours, set your rate, and generate detailed time-based invoices with GST. Perfect for consultants, lawyers, and IT contractors.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://invoiceflow-teal.vercel.app/use-cases' },
    { '@type': 'ListItem', position: 3, name: 'Time-Based Billing', item: 'https://invoiceflow-teal.vercel.app/use-cases/time-billing' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is time-based billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Time-based billing (also called hourly billing) charges clients based on the actual hours worked. You track your time, apply your hourly rate, and generate an invoice showing the detailed time breakdown. InvoiceFlow automates this process — log time entries, and it creates professional invoices with GST calculated on the total.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average hourly rate for Australian freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australian freelancer hourly rates vary by profession: IT consultants $100-$200/hr, lawyers $250-$500/hr, accountants $80-$150/hr, designers $80-$150/hr, marketing consultants $100-$180/hr, and virtual assistants $35-$70/hr. InvoiceFlow\'s free Rate Calculator helps you determine the right rate based on your expenses, desired salary, and billable hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I track billable hours as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Track start and end times for each task or client session. Record what you worked on (task description) and which client it\'s for. InvoiceFlow lets you log time entries with client, project, task description, and duration. When it\'s time to invoice, select the unbilled entries and generate an invoice showing every line item.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I bill in 6-minute increments like lawyers do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Six-minute increments (0.1 hour) are standard for lawyers and some accountants, but most freelancers use 15-minute or 30-minute increments. The key is to agree on the increment with your client upfront and document it in your contract. InvoiceFlow supports all billing increments and can round time entries to your chosen unit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is time-based billing or project-based billing better for freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the work. Time billing is better for ongoing work with variable scope (consulting, support, research) where you can\'t predict hours upfront. Project billing is better for well-defined deliverables (website build, logo design). Many freelancers use both — time billing for retainer work and project billing for defined projects. InvoiceFlow supports both workflows.',
      },
    },
  ],
};

const rateComparison = [
  { profession: 'IT Consultant', range: '$100-$200/hr', typical: '$150/hr' },
  { profession: 'Lawyer', range: '$250-$500/hr', typical: '$350/hr' },
  { profession: 'Accountant', range: '$80-$150/hr', typical: '$120/hr' },
  { profession: 'Designer', range: '$80-$150/hr', typical: '$110/hr' },
  { profession: 'Marketing', range: '$100-$180/hr', typical: '$130/hr' },
  { profession: 'Virtual Assistant', range: '$35-$70/hr', typical: '$50/hr' },
];

const whoNeedsIt = [
  { profession: 'IT Contractors', reason: 'Hourly or daily rate billing with detailed task breakdowns', link: '/for/it-consultants' },
  { profession: 'Lawyers', reason: '6-minute increments, multiple matters, trust account billing', link: '/for/lawyers' },
  { profession: 'Accountants', reason: 'Billable hours across multiple clients and engagements', link: '/for/accountants' },
  { profession: 'Consultants', reason: 'Advisory sessions, strategy work, ongoing retainer hours', link: '/for/consultants' },
  { profession: 'Tutors', reason: 'Session-by-session billing with parent invoicing', link: '/for/tutors' },
  { profession: 'Personal Trainers', reason: 'Session tracking with package hour deductions', link: '/for/personal-trainers' },
];

const relatedTools = [
  { name: 'Hourly Rate Calculator', href: '/tools/rate-calculator', desc: 'Calculate your ideal rate' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create time-based invoices' },
  { name: 'Work Capacity Planner', href: '/tools/work-capacity-planner', desc: 'Optimise billable hours' },
  { name: 'Pay Yourself Calculator', href: '/tools/freelance-pay-yourself-calculator', desc: 'Income from hourly work' },
  { name: 'Profit Margin Calculator', href: '/tools/profit-margin-calculator', desc: 'Track hourly profitability' },
  { name: 'Tax Estimator', href: '/tools/tax-estimator', desc: 'Estimate tax on hourly income' },
];

export default function TimeBillingPage() {
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
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
          </div>
          <Link href="/signup">
            <Button size="sm">Start Free</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-8">
          Time-Based Billing
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Track hours,{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            invoice automatically
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Log your billable hours, apply your rate, and generate detailed time-based invoices in seconds. GST calculated automatically. Built for Australian consultants and contractors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/rate-calculator">
            <Button variant="secondary" size="lg">Calculate Your Rate</Button>
          </Link>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '$35-$500', label: 'Hourly rate range (AU)' },
            { num: '1,560', label: 'Billable hrs/year (avg)' },
            { num: '15-30', label: 'Min billing increment' },
            { num: '$0', label: 'To start' },
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.num}
              </div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Australian Rates */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Australian freelance hourly rates (2026)</h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Not sure what to charge? Here are typical rates by profession. Use our free Rate Calculator for a personalised recommendation.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 font-medium text-slate-400">Profession</th>
                <th className="text-left py-3 px-4 font-medium text-slate-400">Rate Range</th>
                <th className="text-left py-3 px-4 font-medium text-slate-400">Typical Rate</th>
              </tr>
            </thead>
            <tbody>
              {rateComparison.map((row) => (
                <tr key={row.profession} className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-medium">{row.profession}</td>
                  <td className="py-3 px-4 text-slate-400">{row.range}</td>
                  <td className="py-3 px-4 text-blue-400 font-medium">{row.typical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/tools/rate-calculator" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
            Calculate your ideal rate &rarr;
          </Link>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The time billing problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          If you&apos;re billing hourly, you know the pain of turning time into invoices.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { pain: 'Forgetting to log hours and losing billable time', fix: 'Simple time entry — log as you go or at end of day' },
            { pain: 'Manually building invoices from time spreadsheets', fix: 'Select entries, click "Generate Invoice" — done in seconds' },
            { pain: 'Clients questioning time without itemised breakdowns', fix: 'Detailed invoices show every task, duration, and subtotal' },
            { pain: 'Losing track of unbilled hours across clients', fix: 'Dashboard shows unbilled hours per client at a glance' },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-red-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <p className="text-sm text-slate-400">{item.pain}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-blue-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Needs It */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who uses time-based billing?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Any freelancer who charges by the hour needs a system to track and invoice accurately.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoNeedsIt.map((item) => (
            <Link
              key={item.profession}
              href={item.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-1">
                {item.profession}
              </h3>
              <p className="text-xs text-slate-500">{item.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How time billing works in InvoiceFlow</h2>
        <div className="space-y-8">
          {[
            { step: '1', title: 'Log your time', desc: 'Record time entries with client, project, task description, and duration. Use the timer or enter hours manually.' },
            { step: '2', title: 'Review unbilled hours', desc: 'See all unbilled time entries per client. Filter by date range, project, or client.' },
            { step: '3', title: 'Generate your invoice', desc: 'Select time entries and generate a detailed invoice. Every entry becomes a line item with description, hours, rate, and subtotal.' },
            { step: '4', title: 'Send and track', desc: 'Send the invoice via email or download as PDF. Track payment status and send reminders for overdue invoices.' },
          ].map((s) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
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

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for time-based billing</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{tool.name}</h3>
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

      {/* Email Capture */}
      <section className="mx-auto max-w-2xl px-6 py-12">
        <EmailCapture />
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple pricing for time billing</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free, upgrade as your client base grows.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, basic time tracking</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6 ring-1 ring-blue-500/20">
            <div className="text-xs text-blue-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, detailed time reports</p>
            <Link href="/signup"><Button size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Premium</h3>
            <div className="text-3xl font-bold text-white mb-3">$39<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Multi-business, API, white-label invoices</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Time billing FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-blue-400 transition-colors list-none flex justify-between items-center">
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stop losing billable hours to bad tracking</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Every hour you don&apos;t track is money left on the table. InvoiceFlow makes time billing effortless.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup"><Button size="lg">Start Free — 5 Invoices/Month</Button></Link>
          <Link href="/use-cases" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
            View all use cases &rarr;
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
