import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Expense & Reimbursement Invoicing for Australian Freelancers — InvoiceFlow',
  description:
    'Invoice pass-through costs, disbursements, and reimbursable expenses with correct GST treatment. Attach receipts, itemise expenses, and get reimbursed faster. Free to start.',
  alternates: { canonical: '/use-cases/expense-invoicing' },
  keywords: ['expense reimbursement invoice template', 'pass-through costs invoice australia', 'disbursement invoice freelancer', 'how to invoice expenses to clients'],
  openGraph: {
    title: 'Expense Invoicing — Invoice Expenses Without Losing a Cent',
    description:
      'Properly invoice pass-through costs, disbursements, and reimbursable expenses with correct GST treatment. Attach receipts and get reimbursed faster. Free tier available.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Use Cases', item: 'https://invoiceflow-teal.vercel.app/use-cases' },
    { '@type': 'ListItem', position: 3, name: 'Expense Invoicing', item: 'https://invoiceflow-teal.vercel.app/use-cases/expense-invoicing' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's the difference between a disbursement and a reimbursable expense?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A disbursement is a cost you pay as an agent on behalf of your client (e.g., a lawyer paying court filing fees). You're not providing the service — you're passing through the exact cost. These are typically GST-free on your invoice. A reimbursable expense is your own cost that the client has agreed to cover (e.g., travel to their office). These are part of your supply and GST applies if you're registered. The distinction matters for your BAS reporting and how you present the charges on your invoice.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I charge GST on expenses I pass through to clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends. Disbursements (agent payments) are GST-free on your invoice — the GST was already included in the original receipt. Reimbursable expenses where you add a markup or they're part of your service delivery should include GST. When in doubt, consult your accountant. InvoiceFlow lets you set the GST treatment per line item so you can handle both types on a single invoice.",
      },
    },
    {
      '@type': 'Question',
      name: 'Should I add a markup to client expenses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Common practice is a 10-15% handling fee on pass-through costs. This covers your time sourcing, purchasing, and managing the expense. Always agree the markup in your contract upfront. Some freelancers include expense management in their project fee instead of marking up individual items. InvoiceFlow supports both approaches — add a percentage markup to individual line items or include a flat expense management fee.",
      },
    },
    {
      '@type': 'Question',
      name: 'What documentation do I need for expense invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Keep the original receipt/tax invoice for every expense. Your invoice should itemise each expense with date, description, amount, and GST component. Best practice: attach scanned receipts to the invoice or provide them as a supporting document. The ATO requires you to keep records for 5 years. InvoiceFlow lets you attach receipt images directly to expense line items for complete transparency.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim input tax credits on expenses I invoice to clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, if you're GST-registered and the expense is for a creditable purpose. You claim the GST credit on your BAS, then charge the full amount (including your GST) to the client. This means you're not out of pocket for the GST component — it flows through correctly. InvoiceFlow tracks the GST on both sides so your BAS reporting is straightforward.",
      },
    },
  ],
};

const expenseTypes = [
  { name: 'Disbursements', desc: 'Costs you pay on behalf of client (printing, postage, filing fees). GST-free if you\'re acting as agent', example: '$450 court filing fee — passed through at cost' },
  { name: 'Reimbursable Expenses', desc: 'Your costs the client agreed to cover (software, subscriptions, materials). GST applies on your invoice', example: '$89/month Figma licence — billed to client' },
  { name: 'Travel & Accommodation', desc: 'Business travel for client projects. ATO reasonable amounts apply ($283/night capital city)', example: '$1,200 Sydney trip — flights, hotel, meals' },
  { name: 'Materials & Supplies', desc: 'Physical materials purchased for a project (photography props, building materials). GST on your markup', example: '$2,500 materials — 15% handling fee applied' },
];

const whoNeedsIt = [
  { profession: 'Architects', reason: 'Client-funded materials, printing, council filing fees', link: '/for/architects' },
  { profession: 'Lawyers', reason: 'Court filing fees, barrister fees, expert reports as disbursements', link: '/for/lawyers' },
  { profession: 'Event Planners', reason: 'Venue deposits, catering, AV hire passed through to clients', link: '/for/event-planners' },
  { profession: 'Photographers', reason: 'Travel costs, location fees, prop purchases for shoots', link: '/for/photographers' },
  { profession: 'Consultants', reason: 'Travel, accommodation, and software subscriptions for client work', link: '/for/consultants' },
  { profession: 'IT Consultants', reason: 'Cloud hosting, software licenses, hardware purchased for client projects', link: '/for/it-consultants' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create expense invoices' },
  { name: 'Business Trip Expense Calculator', href: '/tools/business-trip-expense-calculator', desc: 'Calculate ATO travel rates' },
  { name: 'Expense Report Generator', href: '/tools/expense-report-generator', desc: 'Generate detailed expense reports' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on expenses' },
  { name: 'Tax Deduction Finder', href: '/tools/tax-deduction-finder', desc: 'Find deductible expenses' },
  { name: 'Profit & Loss Generator', href: '/tools/profit-loss-generator', desc: 'Track expenses vs revenue' },
];

export default function ExpenseInvoicingPage() {
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
        <div className="inline-block rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-1.5 text-sm font-medium text-lime-400 mb-8">
          Expense & Reimbursement Invoicing
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Invoice expenses{' '}
          <span className="bg-gradient-to-r from-lime-500 to-green-400 bg-clip-text text-transparent">
            without losing a cent
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Properly invoice pass-through costs, disbursements, and reimbursable expenses with correct GST treatment. Attach receipts, itemise every charge, and never absorb a client expense again.
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
        <h2 className="text-3xl font-bold text-center mb-4">The expense invoicing problem</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          If you&apos;re paying for things on behalf of clients, you need to get the invoicing right — or you&apos;re leaving money on the table.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { pain: 'Absorbing client expenses out of your own pocket', fix: 'Invoice expenses separately with full documentation' },
            { pain: 'Getting GST wrong on pass-through costs', fix: 'Correct GST treatment for reimbursements vs disbursements' },
            { pain: 'No paper trail for expense claims', fix: 'Attach receipts and documentation to every expense line item' },
            { pain: 'Clients questioning expense charges', fix: 'Transparent itemised breakdown with supporting evidence' },
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
                <span className="text-lime-400 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-lime-300 font-medium">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expense Types */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Common expense invoicing scenarios</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Different expense types have different GST rules. InvoiceFlow handles them all.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expenseTypes.map((type) => (
            <div key={type.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-lime-500/20 transition-colors">
              <h3 className="font-bold text-white mb-2">{type.name}</h3>
              <p className="text-xs text-slate-400 mb-3">{type.desc}</p>
              <div className="text-xs text-lime-400/80 font-medium">{type.example}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Needs It */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Who needs expense invoicing?</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Any freelancer who pays for things on behalf of clients needs a proper expense invoicing workflow.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoNeedsIt.map((item) => (
            <Link
              key={item.profession}
              href={item.link}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-lime-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-lime-400 transition-colors mb-1">
                {item.profession}
              </h3>
              <p className="text-xs text-slate-500">{item.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Free tools for expense invoicing</h2>
        <p className="text-center text-slate-400 mb-10">No sign-up required. Use them right now.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-lime-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-lime-400 transition-colors">{tool.name}</h3>
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
        <h2 className="text-3xl font-bold mb-4">Simple pricing for expense invoicing</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start free, upgrade when your expense tracking needs grow.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, basic expense tracking</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-lime-500/30 bg-lime-500/5 p-6 ring-1 ring-lime-500/20">
            <div className="text-xs text-lime-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, receipt attachments, expense reports</p>
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
        <h2 className="text-3xl font-bold text-center mb-10">Expense invoicing FAQ</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-lime-400 transition-colors list-none flex justify-between items-center">
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stop absorbing expenses that clients should pay</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Invoice every pass-through cost, disbursement, and reimbursable expense with correct GST treatment and full documentation. Never lose a cent again.
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
