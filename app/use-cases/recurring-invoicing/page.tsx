import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Recurring Invoicing Software for Australian Freelancers — InvoiceFlow',
  description:
    'Automate recurring invoices for retainer clients, subscriptions, and regular services. Set frequency, add GST automatically, and get paid on schedule. Free to start.',
  alternates: { canonical: '/use-cases/recurring-invoicing' },
  keywords: ['recurring invoicing software', 'retainer billing', 'subscription invoicing australia', 'automatic invoice generator', 'recurring invoice template'],
  openGraph: {
    title: 'Recurring Invoicing — Set It Once, Get Paid Every Cycle',
    description:
      'Automate your invoicing for retainer clients. InvoiceFlow generates and sends recurring invoices with GST calculated automatically. Free tier available.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://invoiceflow-teal.vercel.app/use-cases' },
    { '@type': 'ListItem', position: 3, name: 'Recurring Invoicing', item: 'https://invoiceflow-teal.vercel.app/use-cases/recurring-invoicing' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is recurring invoicing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recurring invoicing automatically generates and sends invoices at regular intervals — weekly, fortnightly, monthly, or quarterly. It\'s ideal for freelancers with retainer clients, maintenance contracts, or subscription-based services. InvoiceFlow handles the creation, GST calculation, and sending so you never miss a billing cycle.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I set up recurring invoices in InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Create your first invoice as normal, then toggle "Make Recurring" and set the frequency (weekly, fortnightly, monthly, quarterly, or annually). InvoiceFlow generates each new invoice automatically, updates the date and invoice number, calculates GST, and can send it directly to your client via email.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Australian businesses benefit most from recurring invoicing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recurring invoicing is essential for consultants on retainers ($2K-$10K/month), marketing agencies managing monthly clients, IT support providers with maintenance contracts, virtual assistants billing weekly or monthly, bookkeepers with regular clients, and any freelancer providing ongoing services. It eliminates the admin of re-creating invoices each period.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GST apply to recurring invoices in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you\'re GST-registered (required once your annual turnover exceeds $75,000), GST must be included on every recurring invoice. InvoiceFlow automatically calculates and adds the 10% GST to each recurring invoice, ensuring ATO compliance without manual calculation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change a recurring invoice schedule after setting it up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. You can adjust the amount, frequency, line items, or even pause a recurring invoice at any time. Changes apply to future invoices — previously sent invoices remain unchanged for your records. This flexibility is crucial for freelancers whose retainer scope evolves over time.',
      },
    },
  ],
};

const frequencies = [
  { name: 'Weekly', desc: 'Regular maintenance, tutoring sessions, cleaning services', example: '$150/week cleaning contract' },
  { name: 'Fortnightly', desc: 'Part-time retainers, bi-weekly check-ins, ongoing tasks', example: '$800/fortnight VA services' },
  { name: 'Monthly', desc: 'Retainer clients, SaaS subscriptions, marketing management', example: '$3,500/month marketing retainer' },
  { name: 'Quarterly', desc: 'BAS preparation, strategic reviews, seasonal services', example: '$2,000/quarter BAS prep' },
];

const whoNeedsIt = [
  { profession: 'Consultants', reason: 'Monthly retainer agreements for ongoing advisory work', link: '/for/consultants' },
  { profession: 'Virtual Assistants', reason: 'Weekly or monthly billing for regular admin support', link: '/for/virtual-assistants' },
  { profession: 'Accountants', reason: 'Quarterly BAS lodgement and monthly bookkeeping fees', link: '/for/accountants' },
  { profession: 'IT Contractors', reason: 'Ongoing support contracts and maintenance agreements', link: '/for/it-consultants' },
  { profession: 'Cleaners', reason: 'Regular cleaning schedules billed weekly or fortnightly', link: '/for/cleaners' },
  { profession: 'Marketing Pros', reason: 'Monthly social media management and campaign retainers', link: '/for/marketing-professionals' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create your first invoice' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Price your retainer right' },
  { name: 'Service Package Builder', href: '/tools/service-package-builder', desc: 'Structure retainer packages' },
  { name: 'Contract Generator', href: '/tools/contract-generator', desc: 'Create retainer agreements' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-calculator', desc: 'Calculate overdue interest' },
  { name: 'Cash Flow Forecast', href: '/tools/emergency-fund-calculator', desc: 'Plan your recurring income' },
];

export default function RecurringInvoicingPage() {
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
        <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 mb-8">
          Recurring Invoicing
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Set it once,{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            get paid every cycle
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop re-creating the same invoice every month. InvoiceFlow automates recurring invoices for retainer clients, subscriptions, and regular services — with GST calculated automatically.
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

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The recurring invoicing problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          If you&apos;re billing the same clients regularly, you&apos;re probably wasting hours on admin you shouldn&apos;t be doing.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { pain: 'Re-creating the same invoice every month', fix: 'Set up once, InvoiceFlow generates it automatically' },
            { pain: 'Forgetting to send invoices on time', fix: 'Scheduled sending — invoices go out on the exact date you choose' },
            { pain: 'Manually calculating GST each period', fix: 'Automatic 10% GST calculation on every recurring invoice' },
            { pain: 'Losing track of which clients have been billed', fix: 'Dashboard shows all active recurring schedules and payment status' },
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
                <span className="text-emerald-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-emerald-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequencies */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Choose your billing frequency</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          InvoiceFlow supports every common billing cycle. Set it and forget it.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {frequencies.map((freq) => (
            <div key={freq.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-emerald-500/20 transition-colors">
              <h3 className="font-bold text-white mb-2">{freq.name}</h3>
              <p className="text-xs text-slate-400 mb-3">{freq.desc}</p>
              <div className="text-xs text-emerald-400/80 font-medium">{freq.example}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Needs It */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who benefits from recurring invoicing?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Any freelancer with regular clients saves hours every month by automating their invoicing.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoNeedsIt.map((item) => (
            <Link
              key={item.profession}
              href={item.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
                {item.profession}
              </h3>
              <p className="text-xs text-slate-500">{item.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for recurring billing</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
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
        <h2 className="text-3xl font-bold mb-4">Simple pricing for recurring billing</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free, upgrade when your recurring client base grows.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, 1 recurring schedule</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 ring-1 ring-emerald-500/20">
            <div className="text-xs text-emerald-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices and recurring schedules</p>
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
        <h2 className="text-3xl font-bold text-center mb-10">Recurring invoicing FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stop re-creating the same invoice every month</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Set up your recurring schedules once. InvoiceFlow handles the rest — creating, calculating GST, and sending on time, every time.
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
