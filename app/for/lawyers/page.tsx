import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Lawyers & Legal Professionals in Australia — InvoiceFlow',
  description:
    'Free invoicing and billing software built for Australian lawyers. Trust account tracking, retainer billing, 6-minute time billing, and disbursement management for solicitors, barristers, and law firms.',
  alternates: { canonical: '/for/lawyers' },
  keywords: [
    'invoicing software lawyers australia',
    'legal billing software',
    'solicitor invoice template',
    'law firm invoicing',
  ],
  openGraph: {
    title: 'InvoiceFlow for Lawyers — Bill Clients, Not Hours on Admin',
    description:
      'Stop losing billable hours to invoicing admin. InvoiceFlow gives lawyers trust account tracking, retainer billing, and 6-minute time billing — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Lawyers', item: 'https://invoiceflow-teal.vercel.app/for/lawyers' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do lawyers need specialised invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Legal billing is fundamentally different from standard invoicing. Lawyers must comply with trust accounting regulations that vary by state, track retainer balances and drawdowns across multiple matters, itemise time in 6-minute units, and separate trust account funds from office account funds. Generic invoicing tools don\'t handle these requirements. InvoiceFlow is built with trust account tracking, retainer management, and detailed time-based billing so you can create compliant invoices in seconds without risking regulatory breaches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle trust account billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports trust account billing with clear separation between trust and office account transactions. You can track funds held in trust, generate invoices that draw from trust balances, and maintain records that align with your state\'s legal trust accounting rules — whether you\'re in NSW, Victoria, Queensland, or any other jurisdiction. Every trust transaction is logged with matter references, dates, and amounts for full audit compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for lawyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including a GST calculator, invoice generator, and ABN lookup. Many sole-practitioner lawyers and barristers just starting out can run on the free tier. Paid plans start at $19/month for unlimited invoices, trust account tracking, retainer management, and time-based billing — a fraction of the $99+ per month charged by dedicated legal billing platforms like LEAP or ActionStep.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow handle retainer billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow includes retainer management with automatic drawdown invoicing and real-time balance tracking. When a client pays a retainer, you log the amount against their matter. As you perform work, InvoiceFlow generates drawdown invoices that deduct from the retainer balance, showing the client exactly what was done, how long it took, and what remains. When the retainer runs low, you can automatically notify the client to top up — keeping cash flow steady and clients informed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bill in 6-minute units?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports time-based billing in 6-minute increments (0.1 of an hour), which is the standard billing unit used across the Australian legal profession. You can log time entries against specific matters, add descriptions for each unit of work, and InvoiceFlow automatically calculates the total based on your hourly rate. This makes it easy to produce detailed, itemised invoices that clients expect from their legal professionals.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Trust accounting compliance with complex state-based regulations',
    solution: 'Built-in trust account tracking with clear separation between trust and office funds, audit-ready records, and state-specific compliance support.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    problem: 'Tracking retainer balances and drawdown across multiple matters',
    solution: 'Retainer management with auto-drawdown invoicing and balance tracking — clients see exactly what was spent and what remains.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Itemised time billing in 6-minute units across multiple matters',
    solution: 'Time-based billing with 6-minute increments, matter codes, and automated calculations — produce detailed invoices clients expect.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: 'Managing client disbursements, filing fees, and third-party costs',
    solution: 'Disbursement tracking with automatic cost recovery invoicing — log every filing fee, search cost, and third-party expense against the right matter.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
];

const professionalTypes = [
  { name: 'Solicitor', icon: '\u2696\uFE0F' },
  { name: 'Barrister', icon: '\uD83D\uDC68\u200D\u2696\uFE0F' },
  { name: 'Family Lawyer', icon: '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67' },
  { name: 'Criminal Lawyer', icon: '\uD83C\uDFDB\uFE0F' },
  { name: 'Property Lawyer', icon: '\uD83C\uDFE0' },
  { name: 'Corporate Lawyer', icon: '\uD83D\uDCBC' },
  { name: 'Immigration Lawyer', icon: '\uD83C\uDF0F' },
  { name: 'IP Lawyer', icon: '\uD83D\uDCA1' },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on legal services and disbursements' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional legal invoices with matter references' },
  { name: 'Rate Calculator', href: '/tools/hourly-rate-calculator', desc: 'Calculate your ideal hourly billing rate' },
  { name: 'Contract Generator', href: '/tools/contract-generator', desc: 'Generate client engagement letters and retainer agreements' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify firm and client ABNs instantly' },
  { name: 'Client Onboarding Checklist', href: '/tools/client-onboarding-checklist', desc: 'Streamline new client intake and conflict checks' },
];

export default function ForLawyersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
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
        <div className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400 mb-8">
          Built for Australian Lawyers &amp; Legal Professionals
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Bill clients.{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Not hours on admin.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop losing billable hours to invoicing admin. InvoiceFlow streamlines trust account billing, retainer management, and 6-minute
          time billing for Australian lawyers — in 30 seconds between client matters.
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
          Free tier: 5 invoices/month, Gmail sync, CSV export, 100+ free tools
        </p>
      </section>

      {/* Professional Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by legal professionals across every practice area</p>
        <div className="flex flex-wrap justify-center gap-3">
          {professionalTypes.map((type) => (
            <span
              key={type.name}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
            >
              {type.icon} {type.name}
            </span>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Legal billing shouldn&apos;t cost you billable hours
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a lawyer, not a bookkeeper. You need to bill clients accurately, stay trust-compliant, and get back to the matters that actually generate revenue.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-indigo-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-indigo-300 font-semibold">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '80K+', label: 'Australian lawyers', detail: 'Practising solicitors & barristers' },
            { number: '$30B', label: 'AU legal services industry', detail: 'And growing every year' },
            { number: '30s', label: 'To create an invoice', detail: 'Between client matters' },
            { number: '$0', label: 'To start', detail: 'Free tier, forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-white font-medium mt-2">{stat.label}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          How InvoiceFlow compares for legal professionals
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need a full practice management suite just to bill your clients. You need fast invoicing, trust compliance, and time-based billing that works.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-indigo-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">LEAP ($99+/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Clio ($49/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-indigo-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">No free tier</td>
                <td className="py-3 px-4 text-slate-500">No free tier</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-indigo-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$99+/mo</td>
                <td className="py-3 px-4">$49/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Trust accounting</td>
                <td className="py-3 px-4 text-indigo-400">Built-in tracking</td>
                <td className="py-3 px-4 text-indigo-400">Full suite</td>
                <td className="py-3 px-4 text-indigo-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Time billing</td>
                <td className="py-3 px-4 text-indigo-400">6-minute increments</td>
                <td className="py-3 px-4 text-indigo-400">Full suite</td>
                <td className="py-3 px-4 text-indigo-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Matter management</td>
                <td className="py-3 px-4 text-indigo-400">Matter-based invoicing</td>
                <td className="py-3 px-4 text-indigo-400">Full suite</td>
                <td className="py-3 px-4 text-indigo-400">Full suite</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-indigo-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$1,188+/yr</td>
                <td className="py-3 px-4 text-red-300">$588/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every legal professional needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for legal professionals</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, tax obligations, and running a legal practice in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'Superannuation Guide for the Self-Employed', href: '/blog/superannuation-guide-self-employed-australia' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
            { title: 'BAS Guide for Sole Traders', href: '/blog/bas-guide-australian-freelancers' },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from legal professionals
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-indigo-400 transition-colors list-none flex justify-between items-center">
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
          Ready to simplify your legal billing?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian lawyers who bill clients, track trust accounts, and manage retainers in seconds. Start free today.
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
