import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Allied Health Professionals in Australia — InvoiceFlow',
  description:
    'Free invoicing tools built for Australian allied health professionals. NDIS invoicing, Medicare rebate billing, and private client payments for physiotherapists, psychologists, chiropractors, dietitians and more.',
  alternates: { canonical: '/for/allied-health' },
  keywords: [
    'invoicing software allied health australia',
    'physiotherapist invoice template',
    'NDIS invoicing software',
    'psychology practice billing',
  ],
  openGraph: {
    title: 'InvoiceFlow for Allied Health — Treat Patients, Not Paperwork',
    description:
      'Stop spending clinical hours on admin. InvoiceFlow gives allied health professionals NDIS invoicing, Medicare rebate billing, and private client payments — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Allied Health', item: 'https://invoiceflow-teal.vercel.app/for/allied-health' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do allied health professionals need separate invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Allied health professionals deal with multiple payment sources — NDIS claims, Medicare rebates, private billing, and health fund invoicing — each with different requirements. Generic invoicing tools don\'t handle NDIS line item codes, participant numbers, or Medicare provider references. InvoiceFlow is built to handle all of these payment sources in one system, so you can create compliant invoices in seconds without switching between platforms or manually formatting each one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow generate NDIS-compliant invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow lets you create NDIS-compliant invoices with all required fields — participant details, plan manager references, NDIS line item codes, service dates, and provider information. Whether you\'re billing a plan manager, self-managed participant, or NDIA-managed client, InvoiceFlow formats your invoices to meet NDIS requirements so claims are processed without delays or rejections.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for allied health professionals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including a GST calculator, invoice generator, and ABN lookup. Many sole-practitioner allied health professionals just starting their private practice can run on the free tier. Paid plans start at $19/month for unlimited invoices, NDIS templates, Medicare billing fields, and multi-source payment tracking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I create invoices for Medicare rebate claims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports Medicare rebate billing with fields for your provider number, referring GP details, Medicare item numbers, service codes, and patient gap payments. You can clearly show the Medicare rebate amount, the gap payment owed by the patient, and the total fee — making it easy for patients to claim their rebate and for your records to stay clean and audit-ready.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow handle different payment sources?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Allied health professionals often juggle five or more payment sources: private pay, NDIS (plan-managed, self-managed, NDIA-managed), Medicare rebates, private health fund claims, and WorkCover. InvoiceFlow handles all of these in one system. You can tag each invoice by payment source, use templates tailored to each payer type, and track outstanding payments across all sources from a single dashboard — no more spreadsheets or switching between apps.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Managing NDIS invoicing with specific line items, participant numbers, and plan manager requirements',
    solution: 'NDIS-ready invoice templates with built-in fields for participant details, line item codes, plan manager references, and service dates.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    problem: 'Tracking Medicare rebate claims and private gap payments across dozens of patients',
    solution: 'Medicare billing fields for provider numbers, item numbers, rebate amounts, and gap payments — all tracked per patient.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Juggling three payment sources (NDIS, Medicare, private) with different invoicing requirements',
    solution: 'Multi-source payment tracking — tag invoices by payer type, use tailored templates, and manage everything from one dashboard.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
  },
  {
    problem: 'Spending clinical hours on admin instead of patient care',
    solution: 'Create and send professional invoices in 30 seconds between appointments — more time treating, less time billing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const professionalTypes = [
  { name: 'Physiotherapist', icon: '\u{1F9B4}' },
  { name: 'Psychologist', icon: '\u{1F9E0}' },
  { name: 'Occupational Therapist', icon: '\u{1F932}' },
  { name: 'Speech Pathologist', icon: '\u{1F5E3}\u{FE0F}' },
  { name: 'Dietitian', icon: '\u{1F957}' },
  { name: 'Chiropractor', icon: '\u{1F9BE}' },
  { name: 'Exercise Physiologist', icon: '\u{1F3C3}' },
  { name: 'Podiatrist', icon: '\u{1F9B6}' },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on health services (many are GST-free)' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional health practice invoices' },
  { name: 'Rate Calculator', href: '/tools/hourly-rate-calculator', desc: 'Calculate your ideal consultation rate' },
  { name: 'Payment Receipt Generator', href: '/tools/payment-receipt-generator', desc: 'Issue receipts for patient payments' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify provider and practice ABNs' },
  { name: 'Client Onboarding Checklist', href: '/tools/client-onboarding-checklist', desc: 'Streamline new patient intake' },
];

export default function ForAlliedHealthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
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
        <div className="inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-400 mb-8">
          Built for Australian Allied Health Professionals
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Treat patients.{' '}
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Not paperwork.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop spending clinical hours on admin. InvoiceFlow streamlines NDIS invoicing, Medicare rebate billing, and private client
          payments for Australian allied health professionals — in 30 seconds between appointments.
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
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by allied health professionals across every discipline</p>
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
          Practice billing shouldn&apos;t eat into patient time
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a clinician, not a billing clerk. You need to invoice NDIS, Medicare, and private clients quickly and get back to the patients who need you.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-teal-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-teal-300 font-semibold">{item.solution}</p>
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
            { number: '150K+', label: 'Allied health professionals in AU', detail: 'Registered practitioners' },
            { number: '$35B', label: 'AU allied health services', detail: 'NDIS + Medicare + private' },
            { number: '30s', label: 'To create an invoice', detail: 'Between appointments' },
            { number: '$0', label: 'To start', detail: 'Free tier, forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for allied health
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need a full practice management suite just to bill your patients. You need fast invoicing, NDIS compliance, and multi-source payment tracking.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-teal-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Cliniko ($45/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Halaxy ($39/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-teal-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">No free tier</td>
                <td className="py-3 px-4 text-slate-500">No free tier</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-teal-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$45/mo</td>
                <td className="py-3 px-4">$39/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">NDIS invoicing</td>
                <td className="py-3 px-4 text-teal-400">Built-in templates</td>
                <td className="py-3 px-4 text-teal-400">Supported</td>
                <td className="py-3 px-4 text-teal-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Medicare billing</td>
                <td className="py-3 px-4 text-teal-400">Built-in fields</td>
                <td className="py-3 px-4 text-teal-400">Supported</td>
                <td className="py-3 px-4 text-teal-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Appointment tracking</td>
                <td className="py-3 px-4 text-slate-500">Invoicing focused</td>
                <td className="py-3 px-4 text-teal-400">Full suite</td>
                <td className="py-3 px-4 text-teal-400">Full suite</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-teal-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$540/yr</td>
                <td className="py-3 px-4 text-red-300">$468/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every allied health professional needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-teal-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors">
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
        <h2 className="text-3xl font-bold text-center mb-4">Guides for allied health professionals</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, NDIS billing, and running a health practice in Australia.
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
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-teal-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from allied health professionals
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-teal-400 transition-colors list-none flex justify-between items-center">
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
          Ready to simplify your practice billing?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian allied health professionals who invoice NDIS, Medicare, and private clients in seconds. Start free today.
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
