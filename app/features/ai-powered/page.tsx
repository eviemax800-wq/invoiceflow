import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'AI-Powered Invoicing — Smarter Than Your Spreadsheet — InvoiceFlow',
  description:
    'AI-powered invoicing software for Australian freelancers. Smart line items, automatic GST detection, client intelligence, payment predictions, and error detection. Built on ATO 2025-26 rates.',
  keywords: [
    'AI invoicing software',
    'smart invoicing',
    'AI-powered invoice generator',
    'AI invoicing Australia',
    'smart invoice generator',
    'automated invoicing',
    'intelligent invoicing software',
    'freelancer AI tools',
  ],
  alternates: { canonical: '/features/ai-powered' },
  openGraph: {
    title: 'AI-Powered Invoicing — Smarter Than Your Spreadsheet — InvoiceFlow',
    description:
      'Invoicing that thinks for you. AI-powered line items, automatic GST, client intelligence, and payment predictions. Purpose-built for Australian freelancers.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://invoiceflow-teal.vercel.app/features' },
    { '@type': 'ListItem', position: 3, name: 'AI-Powered', item: 'https://invoiceflow-teal.vercel.app/features/ai-powered' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What AI features does InvoiceFlow offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow uses AI across the entire invoicing workflow: smart line item suggestions based on your history, automatic GST detection that knows when to add 10% and when items are GST-free, client intelligence that remembers preferences and payment patterns, payment predictions that estimate when you\'ll get paid, smart reminders timed for maximum response, and error detection that catches missing ABNs, incorrect totals, and formatting issues.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI invoicing accurate for Australian tax compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow\'s AI is built on ATO 2025-26 tax rates and GST rules. It automatically applies the correct 10% GST rate, identifies GST-free items (like basic food, health services, and education), and ensures every invoice meets ATO tax invoice requirements. The system is updated each financial year to reflect any rate changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does AI invoicing replace my accountant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — and it\'s not trying to. InvoiceFlow handles the invoicing side so you can focus on your craft. It creates compliant invoices, tracks payments, calculates GST, and exports BAS-ready data. Your accountant still handles tax returns, financial planning, and complex compliance. Think of it as your invoicing assistant, not your accountant replacement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is InvoiceFlow different from Xero or MYOB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xero ($35/mo) and MYOB ($34/mo) are full accounting platforms with payroll, inventory, multi-entity management, and dozens of features freelancers never use. InvoiceFlow is purpose-built for freelancers and sole traders — AI-first, invoicing-focused, no accounting bloat. It starts free with 5 invoices per month, includes 100+ free business tools, and the Pro plan is just $19/mo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data safe with AI-powered invoicing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. InvoiceFlow is built with Australian data sovereignty — your data stays in Australia. All data is encrypted in transit and at rest using AES-256 encryption. We\'re GDPR-ready and follow Australian Privacy Principles (APPs). Your invoice data is never shared with third parties or used to train external AI models.',
      },
    },
  ],
};

const aiCapabilities = [
  {
    title: 'Smart Line Items',
    description: 'AI suggests line items based on your invoicing history. Start typing and InvoiceFlow auto-completes descriptions, quantities, and rates from past invoices.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: 'Automatic GST Detection',
    description: 'Knows when to add 10% GST and when items are GST-free. Handles mixed invoices with taxable and exempt items automatically.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Client Intelligence',
    description: 'Remembers client preferences, payment terms, and billing patterns. Pre-fills client details and suggests the right payment terms for each relationship.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Payment Predictions',
    description: 'AI estimates when you&apos;ll get paid based on each client&apos;s payment history. Plan your cash flow with confidence instead of guesswork.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Smart Reminders',
    description: 'AI times your payment follow-ups for maximum response. No more awkward Tuesday-morning chasers — it picks the right moment based on client behaviour.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    title: 'Error Detection',
    description: 'Catches missing ABNs, incorrect totals, formatting issues, and compliance gaps before you hit send. Never send an embarrassing invoice again.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
];

const comparisonRows = [
  { feature: 'AI line item suggestions', invoiceflow: true, xero: false, myob: false, freshbooks: false },
  { feature: 'Smart GST detection', invoiceflow: true, xero: false, myob: false, freshbooks: false },
  { feature: 'Payment predictions', invoiceflow: true, xero: false, myob: false, freshbooks: false },
  { feature: 'Free tier available', invoiceflow: true, xero: false, myob: false, freshbooks: false },
  { feature: 'Built for freelancers', invoiceflow: true, xero: false, myob: false, freshbooks: true },
  { feature: 'Australian compliance', invoiceflow: true, xero: true, myob: true, freshbooks: false },
];

const personaPages = [
  { name: 'Freelancers', href: '/for/freelancers', desc: 'General freelance invoicing with AI' },
  { name: 'Web Developers', href: '/for/web-developers', desc: 'Milestone billing and project tracking' },
  { name: 'IT Consultants', href: '/for/it-consultants', desc: 'Retainer and hourly rate invoicing' },
  { name: 'Consultants', href: '/for/consultants', desc: 'Professional services and advisory billing' },
  { name: 'Marketing Professionals', href: '/for/marketing-professionals', desc: 'Campaign-based and retainer invoicing' },
  { name: 'Graphic Designers', href: '/for/graphic-designers', desc: 'Creative project and revision billing' },
];

const relatedTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional invoices instantly' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST in one click' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Find your ideal hourly rate' },
  { name: 'Business Scorecard', href: '/tools/freelance-business-scorecard', desc: 'Score your freelance business health' },
  { name: 'Client Red Flag Checker', href: '/tools/client-red-flag-checker', desc: 'Spot problem clients early' },
  { name: 'Work Capacity Planner', href: '/tools/work-capacity-planner', desc: 'Plan your workload and availability' },
];

export default function AIpoweredPage() {
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
        <div className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400 mb-8">
          AI-Powered
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Invoicing that{' '}
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            thinks for you
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop filling in the same details over and over. InvoiceFlow&apos;s AI learns your clients, remembers your line items,
          detects GST automatically, and predicts when you&apos;ll get paid. It&apos;s the invoicing assistant you&apos;ve always wanted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/invoice-generator">
            <Button variant="secondary" size="lg">Try the Invoice Generator</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Free tier: 5 invoices/month, AI line items, GST detection, 100+ free tools
        </p>
      </section>

      {/* AI Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Six ways AI makes invoicing effortless
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Every feature is designed to save you time and eliminate mistakes. The more you use InvoiceFlow, the smarter it gets.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((cap, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-violet-500/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-violet-400 to-purple-400 p-3 text-white shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{cap.title}</h3>
                  <p className="text-sm text-slate-400">{cap.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Not like other invoicing tools
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Most invoicing software treats AI as an afterthought. InvoiceFlow was built AI-first from day one.
        </p>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
                  <th className="p-4 text-center">
                    <span className="text-violet-400 font-bold">InvoiceFlow</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Free / $19</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">Xero</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$35/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">MYOB</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$34/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">FreshBooks</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$24/mo</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    <td className="p-4 text-slate-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.invoiceflow ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 text-violet-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.xero ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.myob ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.freshbooks ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { stat: '30sec', label: 'To create an invoice with AI' },
            { stat: '100+', label: 'Free business tools included' },
            { stat: '0', label: 'Accounting bloat — just invoicing' },
            { stat: '$19/mo', label: 'Pro plan — unlimited invoices' },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {item.stat}
              </div>
              <p className="text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Uses AI-Powered Invoicing */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Who uses AI-powered invoicing?
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Freelancers and sole traders across every profession are using InvoiceFlow&apos;s AI to get paid faster and spend less time on admin.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaPages.map((persona) => (
            <Link
              key={persona.href}
              href={persona.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-violet-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors mb-1">
                {persona.name}
              </h3>
              <p className="text-xs text-slate-500">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free AI-powered tools
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-violet-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-violet-400 hover:text-violet-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <div className="mx-auto max-w-6xl px-6">
        <EmailCapture />
      </div>

      {/* Pricing */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">AI invoicing at every price point</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          Start free. Upgrade when your freelancing takes off. No hidden fees, no lock-in contracts.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Free</h3>
            <div className="text-3xl font-bold text-white mb-3">$0</div>
            <p className="text-sm text-slate-400 mb-4">5 invoices/mo, AI line items, GST detection, 100+ tools</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Get Started</Button></Link>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-6 ring-1 ring-violet-500/20">
            <div className="text-xs text-violet-400 font-medium mb-2">MOST POPULAR</div>
            <h3 className="font-bold text-white mb-1">Pro</h3>
            <div className="text-3xl font-bold text-white mb-3">$19<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Unlimited invoices, priority AI, payment predictions, exports</p>
            <Link href="/signup"><Button size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="font-bold text-white mb-1">Premium</h3>
            <div className="text-3xl font-bold text-white mb-3">$39<span className="text-base font-normal text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-400 mb-4">Everything in Pro + multi-business, API access, white-label</p>
            <Link href="/signup"><Button variant="secondary" size="sm" className="w-full">Start Free Trial</Button></Link>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/pricing" className="text-violet-400 hover:text-violet-300 text-sm font-medium">
            Compare plans in detail &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          AI invoicing FAQ
        </h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-violet-400 transition-colors list-none flex justify-between items-center">
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
          Experience invoicing that actually helps
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Your spreadsheet doesn&apos;t learn. Your accounting software doesn&apos;t predict. InvoiceFlow does both — and it starts free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — 5 AI Invoices/Month</Button>
          </Link>
          <Link href="/tools" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors">
            Or try our free tools first &rarr;
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
