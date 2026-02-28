import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Overdue Invoice Management Software for Australian Freelancers — InvoiceFlow',
  description:
    'Chase late payments professionally. Automatic payment reminders, overdue tracking, escalation workflows, and late payment interest calculations. ATO-compliant. Free to start.',
  alternates: { canonical: '/use-cases/overdue-management' },
  keywords: ['overdue invoice management', 'late payment reminder software', 'chase unpaid invoices australia', 'payment reminder template', 'overdue invoice follow up'],
  openGraph: {
    title: 'Overdue Invoice Management — Get Paid What You\'re Owed',
    description:
      'Stop chasing late payments manually. InvoiceFlow automates reminders, tracks overdue invoices, and calculates late fees so you get paid faster.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://invoiceflow-teal.vercel.app/use-cases' },
    { '@type': 'ListItem', position: 3, name: 'Overdue Management', item: 'https://invoiceflow-teal.vercel.app/use-cases/overdue-management' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow handle overdue invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow automatically tracks payment due dates and marks invoices as overdue when unpaid past the due date. You can set up automatic email reminders at intervals you choose (e.g., 1 day, 7 days, 14 days, 30 days overdue). Each reminder is professional, branded, and includes the invoice details and payment link.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I charge late payment interest on overdue invoices in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can charge late payment interest in Australia if it\'s specified in your contract or terms of trade. Common rates are 1.5-2% per month (18-24% per annum). InvoiceFlow calculates interest automatically based on your terms. Note: for small business contracts, the Payment Times Reporting Framework requires large businesses to pay within 30 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best follow-up sequence for overdue invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A proven escalation sequence is: Day 1 (friendly reminder), Day 7 (firmer follow-up), Day 14 (warning of late fees), Day 21 (final notice with consequences), Day 30+ (formal letter of demand). InvoiceFlow lets you automate this entire sequence while keeping the tone professional and preserving client relationships.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do Australian freelancers lose to late payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australian small businesses are owed an estimated $26 billion in late payments at any time, with the average invoice paid 23 days late. For freelancers, this means an average of $5,000-$10,000 outstanding at any time. Automated reminders can reduce late payments by up to 50%, saving hours of manual follow-up each month.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I escalate an overdue invoice to a debt collector?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Consider escalation after 60-90 days of non-payment and failed follow-up. Before involving a collector, send a formal letter of demand (InvoiceFlow can generate one). If the amount is under $25,000, consider your state\'s tribunal (NCAT in NSW, VCAT in Victoria, QCAT in Queensland). InvoiceFlow tracks the full timeline to support any claim.',
      },
    },
  ],
};

const escalationSteps = [
  { day: 'Day 1', title: 'Friendly Reminder', desc: 'Gentle nudge — "Just a reminder that invoice #X is due today"', tone: 'Warm & professional', color: 'text-sky-400' },
  { day: 'Day 7', title: 'Follow-Up', desc: 'Firmer — "Invoice #X is now 7 days overdue. Please arrange payment"', tone: 'Professional & direct', color: 'text-amber-400' },
  { day: 'Day 14', title: 'Late Fee Warning', desc: 'Clear — "Late fees will apply from Day 21 per our terms"', tone: 'Firm but fair', color: 'text-orange-400' },
  { day: 'Day 30+', title: 'Final Notice', desc: 'Formal — "This is a final notice before we pursue formal recovery"', tone: 'Formal & serious', color: 'text-red-400' },
];

const whoNeedsIt = [
  { profession: 'Freelancers', reason: 'Chase late payments without awkward conversations', link: '/for/freelancers' },
  { profession: 'Sole Traders', reason: 'Protect cash flow when clients pay late', link: '/for/sole-traders' },
  { profession: 'Contractors', reason: 'Enforce payment terms on construction and project work', link: '/for/contractors' },
  { profession: 'Tradies', reason: 'Get paid for completed jobs without chasing', link: '/for/tradies' },
  { profession: 'Consultants', reason: 'Maintain professional relationships while collecting debt', link: '/for/consultants' },
  { profession: 'Creatives', reason: 'Stop late-paying clients from disrupting your workflow', link: '/for/creatives' },
];

const relatedTools = [
  { name: 'Late Payment Calculator', href: '/tools/late-payment-calculator', desc: 'Calculate interest on overdue invoices' },
  { name: 'Letter of Demand Generator', href: '/tools/letter-of-demand-generator', desc: 'Create formal demand letters' },
  { name: 'Overdue Follow-Up Generator', href: '/tools/overdue-invoice-follow-up-generator', desc: 'Generate follow-up emails' },
  { name: 'Debt Recovery Calculator', href: '/tools/debt-recovery-cost-calculator', desc: 'Is recovery worth pursuing?' },
  { name: 'Invoice Email Templates', href: '/tools/invoice-email-template-generator', desc: 'Professional reminder emails' },
  { name: 'Contract Generator', href: '/tools/contract-generator', desc: 'Include payment terms upfront' },
];

export default function OverdueManagementPage() {
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
        <div className="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400 mb-8">
          Overdue Invoice Management
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Get paid what{' '}
          <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
            you&apos;re owed
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop chasing late payments manually. InvoiceFlow automates reminders, tracks overdue invoices, calculates interest, and escalates professionally — so you can focus on work, not collections.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/late-payment-calculator">
            <Button variant="secondary" size="lg">Calculate Late Fees Free</Button>
          </Link>
        </div>
      </section>

      {/* Key Stats */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '$26B', label: 'Owed to AU small businesses' },
            { num: '23 days', label: 'Average invoice paid late' },
            { num: '50%', label: 'Reduction with auto-reminders' },
            { num: '30 sec', label: 'To send a reminder' },
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                {stat.num}
              </div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The late payment problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Late-paying clients cost you money, time, and mental energy. InvoiceFlow automates the uncomfortable parts.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { pain: 'Awkward emails asking clients to pay overdue invoices', fix: 'Automated, professional reminder sequences — sent on your behalf' },
            { pain: 'No idea which invoices are overdue or by how much', fix: 'Real-time overdue dashboard showing every unpaid invoice and aging' },
            { pain: 'Calculating interest manually on overdue amounts', fix: 'Automatic late fee calculation based on your terms (1.5-2%/month)' },
            { pain: 'Losing client relationships by being too aggressive or too passive', fix: 'Graduated escalation from friendly reminder to formal notice' },
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
                <span className="text-rose-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-rose-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Escalation Timeline */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The proven follow-up sequence</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          InvoiceFlow automates the entire escalation path — from friendly nudge to formal demand.
        </p>
        <div className="space-y-6">
          {escalationSteps.map((step) => (
            <div key={step.day} className="flex gap-6 items-start rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <div className={`shrink-0 font-bold text-lg ${step.color}`}>{step.day}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-slate-400 mb-2">{step.desc}</p>
                <div className="text-xs text-slate-500">Tone: {step.tone}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Needs It */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who needs overdue invoice management?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Every freelancer who has ever waited too long for payment.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoNeedsIt.map((item) => (
            <Link
              key={item.profession}
              href={item.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-rose-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-rose-400 transition-colors mb-1">
                {item.profession}
              </h3>
              <p className="text-xs text-slate-500">{item.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for managing late payments</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-rose-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-rose-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-rose-400 hover:text-rose-300 text-sm font-medium">
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
        <h2 className="text-3xl font-bold mb-4">Simple pricing for payment management</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free, upgrade for automated reminders and full tracking.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, manual reminders</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-6 ring-1 ring-rose-500/20">
            <div className="text-xs text-rose-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, auto-reminders, late fees</p>
            <Link href="/signup"><Button size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Premium</h3>
            <div className="text-3xl font-bold text-white mb-3">$39<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Multi-business, API access, white-label</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Overdue invoice FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-rose-400 transition-colors list-none flex justify-between items-center">
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stop losing money to late payments</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Automated reminders, interest calculations, and professional escalation. Let InvoiceFlow chase your payments so you don&apos;t have to.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup"><Button size="lg">Start Free — 5 Invoices/Month</Button></Link>
          <Link href="/use-cases" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-rose-400 hover:text-rose-300 transition-colors">
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
