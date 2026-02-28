import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Retainer Billing Software for Australian Freelancers — InvoiceFlow',
  description:
    'Manage retainer clients with ease. Track monthly retainer balances, bill against hours or deliverables, handle top-ups and rollovers. GST calculated automatically. Free to start.',
  alternates: { canonical: '/use-cases/retainer-billing' },
  keywords: ['retainer billing software', 'retainer invoice template australia', 'monthly retainer invoicing', 'retainer agreement billing', 'retainer management software freelancer'],
  openGraph: {
    title: 'Retainer Billing — Manage Ongoing Client Relationships',
    description:
      'Track retainer balances, bill against hours or deliverables, handle top-ups. InvoiceFlow makes retainer billing effortless for Australian freelancers.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://invoiceflow-teal.vercel.app/use-cases' },
    { '@type': 'ListItem', position: 3, name: 'Retainer Billing', item: 'https://invoiceflow-teal.vercel.app/use-cases/retainer-billing' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is retainer billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retainer billing is when a client pays a fixed monthly fee for ongoing access to your services. Unlike recurring invoicing which auto-sends the same amount, retainer billing involves tracking hours or deliverables against the retainer balance, handling rollovers or top-ups, and providing detailed usage reports. It\'s common among consultants, agencies, lawyers, and accountants.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is retainer billing different from recurring invoicing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recurring invoicing sends the same invoice automatically each period. Retainer billing is more nuanced — you track work against a pre-paid balance, manage rollover of unused hours, handle top-up requests, and provide clients with balance statements. InvoiceFlow supports both models so you can choose what suits your client relationships.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to charge GST on retainer invoices in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you\'re GST-registered (required when annual turnover exceeds $75,000), GST applies to retainer invoices. InvoiceFlow automatically adds 10% GST to your retainer invoices. For BAS purposes, GST is reportable when the invoice is issued, not when the work is performed — this is important for retainer arrangements where work may span multiple BAS periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to unused retainer hours at the end of a period?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This depends on your retainer agreement. Common approaches include: rollover (unused hours carry forward), use-it-or-lose-it (unused hours expire), or credit (unused hours reduce the next invoice). InvoiceFlow lets you track and manage all three models, with clear balance reports for both you and your client.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle retainer overages in InvoiceFlow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a client exceeds their retainer allocation, InvoiceFlow tracks the overage separately. You can bill overages at your standard rate, a premium rate, or request a retainer top-up. The system generates a clear overage invoice showing retainer hours used, additional hours, and the total with GST calculated automatically.',
      },
    },
  ],
};

const retainerModels = [
  { name: 'Fixed Monthly', desc: 'Client pays a set fee for agreed deliverables each month', example: '$3,000/mo for 20 hours of consulting', best: 'Predictable scope' },
  { name: 'Hourly Retainer', desc: 'Pre-paid hours billed as used, with balance tracking', example: '$5,000/mo for 40 hours at $125/hr', best: 'Variable workload' },
  { name: 'Tiered Retainer', desc: 'Multiple service levels at different price points', example: 'Basic $1.5K / Standard $3K / Premium $5K', best: 'Scaling clients' },
  { name: 'Rolling Retainer', desc: 'Unused hours roll forward to next period automatically', example: '$2,000/mo with 3-month rollover cap', best: 'Seasonal work' },
];

const whoNeedsIt = [
  { profession: 'Consultants', reason: 'Monthly advisory retainers with ongoing strategic support', link: '/for/consultants' },
  { profession: 'Lawyers', reason: 'Legal retainers with hourly billing against trust accounts', link: '/for/lawyers' },
  { profession: 'Marketing Pros', reason: 'Social media management, SEO, and campaign retainers', link: '/for/marketing-professionals' },
  { profession: 'Accountants', reason: 'Monthly bookkeeping and quarterly BAS retainers', link: '/for/accountants' },
  { profession: 'IT Consultants', reason: 'Ongoing technical support and maintenance contracts', link: '/for/it-consultants' },
  { profession: 'Virtual Assistants', reason: 'Regular admin support with flexible hour allocation', link: '/for/virtual-assistants' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create retainer invoices' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Set your retainer rate' },
  { name: 'Service Package Builder', href: '/tools/service-package-builder', desc: 'Structure retainer tiers' },
  { name: 'Contract Generator', href: '/tools/contract-generator', desc: 'Create retainer agreements' },
  { name: 'Cash Flow Forecast', href: '/tools/emergency-fund-calculator', desc: 'Plan retainer income' },
  { name: 'Client Onboarding', href: '/tools/client-onboarding-checklist', desc: 'Onboard retainer clients' },
];

export default function RetainerBillingPage() {
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
        <div className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400 mb-8">
          Retainer Billing
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Manage retainers,{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
            not spreadsheets
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Track retainer balances, bill against hours or deliverables, handle top-ups and rollovers — all with automatic GST and professional invoices your clients will love.
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
        <h2 className="text-3xl font-bold text-center mb-4">The retainer billing problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Retainer clients are your most valuable relationships. But managing them shouldn&apos;t eat into the hours you&apos;re supposed to be billing.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { pain: 'Tracking hours against retainer balance in spreadsheets', fix: 'Automatic balance tracking — log work, see remaining hours instantly' },
            { pain: 'Clients asking "how many hours do I have left?"', fix: 'Client balance reports generated automatically at any time' },
            { pain: 'Forgetting to bill for overage work beyond the retainer', fix: 'Overage alerts and automatic additional invoicing when hours are exceeded' },
            { pain: 'Manually calculating unused hours and rollovers each month', fix: 'Configurable rollover rules — auto-carry, expire, or credit unused hours' },
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
                <span className="text-cyan-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-cyan-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Retainer Models */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Choose your retainer model</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          InvoiceFlow supports every retainer structure. Pick the model that works for your client relationship.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {retainerModels.map((model) => (
            <div key={model.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-cyan-500/20 transition-colors">
              <h3 className="font-bold text-white mb-2">{model.name}</h3>
              <p className="text-xs text-slate-400 mb-3">{model.desc}</p>
              <div className="text-xs text-cyan-400/80 font-medium mb-2">{model.example}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Best for: {model.best}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '$3-5K', label: 'Average monthly retainer' },
            { num: '73%', label: 'Freelancers want retainer clients' },
            { num: '40%', label: 'Higher lifetime client value' },
            { num: '2.5x', label: 'More predictable income' },
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                {stat.num}
              </div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Needs It */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who uses retainer billing?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Any freelancer with ongoing client relationships benefits from structured retainer management.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoNeedsIt.map((item) => (
            <Link
              key={item.profession}
              href={item.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1">
                {item.profession}
              </h3>
              <p className="text-xs text-slate-500">{item.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for retainer management</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
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
        <h2 className="text-3xl font-bold mb-4">Simple pricing for retainer billing</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free, upgrade when your retainer client base grows.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, 1 retainer client</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6 ring-1 ring-cyan-500/20">
            <div className="text-xs text-cyan-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, retainer tracking, balance reports</p>
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
        <h2 className="text-3xl font-bold text-center mb-10">Retainer billing FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-cyan-400 transition-colors list-none flex justify-between items-center">
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stop managing retainers in spreadsheets</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Track balances, generate invoices, handle overages — all in one place. Your retainer clients deserve professional billing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup"><Button size="lg">Start Free — 5 Invoices/Month</Button></Link>
          <Link href="/use-cases" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
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
