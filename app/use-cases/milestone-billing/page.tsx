import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Milestone Billing Software for Australian Freelancers — InvoiceFlow',
  description:
    'Bill at project milestones — deposit, progress payments, and final delivery. Keep cash flow steady across long projects with automatic GST and payment tracking.',
  alternates: { canonical: '/use-cases/milestone-billing' },
  keywords: ['milestone billing software', 'progress billing', 'deposit invoicing', 'project milestone payments', 'milestone invoice template australia'],
  openGraph: {
    title: 'Milestone Billing — Get Paid at Every Project Stage',
    description:
      'Define milestones, generate invoices at each stage, and keep cash flow healthy throughout long projects. GST calculated automatically.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://invoiceflow-teal.vercel.app/use-cases' },
    { '@type': 'ListItem', position: 3, name: 'Milestone Billing', item: 'https://invoiceflow-teal.vercel.app/use-cases/milestone-billing' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is milestone billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Milestone billing (also called progress billing) is a payment structure where invoices are issued at predefined project stages rather than at completion. Common milestones include an upfront deposit (20-50%), mid-project progress payments, and a final delivery payment. It protects both freelancer and client by tying payments to deliverables.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a typical milestone payment structure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common structures are: 50/50 (50% deposit, 50% on completion) for smaller projects under $5,000; 30/40/30 (deposit, midpoint, completion) for medium projects; and 25/25/25/25 (4 equal milestones) for larger projects. For high-value projects over $20,000, monthly progress billing based on percentage complete is common. InvoiceFlow supports all these structures.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle GST on milestone invoices in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each milestone invoice is a separate tax invoice under ATO rules. GST (10%) must be calculated on each milestone payment individually if you\'re GST-registered. InvoiceFlow automatically adds GST to each milestone invoice and links them to the parent project, making BAS preparation straightforward.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should freelancers always require a deposit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Industry best practice for Australian freelancers is to require a 20-50% deposit before starting work. Deposits protect against non-payment, fund project costs, and demonstrate client commitment. InvoiceFlow makes it easy to generate deposit invoices that reference the full project scope and remaining milestones.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a client disputes a milestone payment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clear milestone definitions in your contract are the best protection. InvoiceFlow links each invoice to specific deliverables, creating a paper trail of what was agreed and delivered. If disputes arise, you have documented evidence of the milestone scope. We also offer a free Invoice Dispute Resolution template to help resolve payment conflicts professionally.',
      },
    },
  ],
};

const milestoneExamples = [
  {
    project: 'Website Build ($8,000)',
    milestones: [
      { stage: 'Deposit', pct: '30%', amount: '$2,400', trigger: 'Contract signed' },
      { stage: 'Design Approved', pct: '30%', amount: '$2,400', trigger: 'Mockups approved' },
      { stage: 'Development Done', pct: '25%', amount: '$2,000', trigger: 'Staging review' },
      { stage: 'Launch', pct: '15%', amount: '$1,200', trigger: 'Go-live complete' },
    ],
    color: 'from-purple-500 to-pink-400',
  },
  {
    project: 'Brand Identity ($5,000)',
    milestones: [
      { stage: 'Deposit', pct: '50%', amount: '$2,500', trigger: 'Brief signed' },
      { stage: 'Concepts', pct: '25%', amount: '$1,250', trigger: '3 concepts presented' },
      { stage: 'Final Delivery', pct: '25%', amount: '$1,250', trigger: 'Brand kit delivered' },
    ],
    color: 'from-amber-500 to-orange-400',
  },
];

const whoNeedsIt = [
  { profession: 'Web Developers', reason: 'Multi-phase builds: wireframe, design, development, launch', link: '/for/web-developers' },
  { profession: 'Graphic Designers', reason: 'Concept, revision, and final delivery stages', link: '/for/graphic-designers' },
  { profession: 'Architects', reason: 'Stage-based billing tied to project phases', link: '/for/architects' },
  { profession: 'Photographers', reason: 'Booking deposit + post-shoot delivery payment', link: '/for/photographers' },
  { profession: 'Consultants', reason: 'Discovery, strategy, implementation milestones', link: '/for/consultants' },
  { profession: 'Event Planners', reason: 'Deposit, venue booking, and event day billing', link: '/for/event-planners' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create milestone invoices' },
  { name: 'Milestone Payment Calculator', href: '/tools/milestone-payment-calculator', desc: 'Plan payment stages' },
  { name: 'Project Timeline Calculator', href: '/tools/project-timeline-calculator', desc: 'Estimate delivery dates' },
  { name: 'Contract Generator', href: '/tools/contract-generator', desc: 'Include milestone terms' },
  { name: 'Project Brief Generator', href: '/tools/project-brief-generator', desc: 'Define project scope' },
  { name: 'Dispute Resolution Generator', href: '/tools/invoice-dispute-resolution', desc: 'Handle payment disputes' },
];

export default function MilestoneBillingPage() {
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
        <div className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400 mb-8">
          Milestone Billing
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Get paid at{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            every project stage
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Never wait until project completion to get paid. InvoiceFlow lets you define milestones, generate deposit invoices, and track progress payments — all with automatic GST.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/milestone-payment-calculator">
            <Button variant="secondary" size="lg">Try the Milestone Calculator</Button>
          </Link>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '30-50%', label: 'Recommended deposit' },
            { num: '62%', label: 'Less non-payment risk' },
            { num: '2-4', label: 'Milestones per project' },
            { num: '$0', label: 'To start' },
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.num}
              </div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestone Examples */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Milestone structures that work</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Real-world payment structures used by successful Australian freelancers.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {milestoneExamples.map((ex) => (
            <div key={ex.project} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="font-bold text-white mb-4">{ex.project}</h3>
              <div className="space-y-3">
                {ex.milestones.map((m, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${ex.color} flex items-center justify-center text-white text-xs font-bold`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white">{m.stage}</span>
                        <span className="text-sm text-purple-400 font-medium">{m.amount} ({m.pct})</span>
                      </div>
                      <p className="text-xs text-slate-500">{m.trigger}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Needs It */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who uses milestone billing?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Any freelancer working on multi-phase projects benefits from progress payments.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoNeedsIt.map((item) => (
            <Link
              key={item.profession}
              href={item.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-purple-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors mb-1">
                {item.profession}
              </h3>
              <p className="text-xs text-slate-500">{item.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How milestone billing works in InvoiceFlow</h2>
        <div className="space-y-8">
          {[
            { step: '1', title: 'Define your milestones', desc: 'Set up your project with payment stages — deposit, progress, and final. Choose percentage or fixed amounts for each milestone.' },
            { step: '2', title: 'Send the deposit invoice', desc: 'Generate a professional deposit invoice linked to your project scope. Client pays before work begins.' },
            { step: '3', title: 'Invoice at each milestone', desc: 'When you hit a milestone, generate the next invoice with one click. It references the project and milestone, with GST calculated automatically.' },
            { step: '4', title: 'Track the full project', desc: 'See total project value, amount invoiced, amount paid, and amount remaining — all in one dashboard view.' },
          ].map((s) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
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
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for milestone billing</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-purple-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">{tool.name}</h3>
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

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Milestone billing FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-purple-400 transition-colors list-none flex justify-between items-center">
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Never work a full project without getting paid again</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Set up milestone billing and protect your cash flow from day one. Start with a deposit invoice — it takes 30 seconds.
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
