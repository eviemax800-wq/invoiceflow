import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Personal Trainers Australia — InvoiceFlow',
  description:
    'Free invoicing tools built for Australian personal trainers and fitness professionals. Session tracking, package billing, health insurance tax invoices, and AI-powered invoice management for PTs, yoga teachers, CrossFit coaches and more.',
  alternates: { canonical: '/for/personal-trainers' },
  openGraph: {
    title: 'InvoiceFlow for Personal Trainers — Train Clients, Not Spreadsheets',
    description:
      'Stop tracking sessions in notebooks. InvoiceFlow gives PTs and fitness professionals automatic session billing, package invoicing, and instant tax invoices — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Personal Trainers', item: 'https://invoiceflow-teal.vercel.app/for/personal-trainers' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do personal trainers need invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The ATO requires all personal trainers — whether sole traders, contractors, or running a fitness business — to keep records of income and expenses for at least 5 years. Professional invoicing software ensures you issue compliant tax invoices, track GST correctly, and have clean records for BAS lodgement. Many PT clients also need tax invoices to claim sessions on their health insurance, making proper invoicing essential for client retention.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle PT packages and multi-session billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports package-based invoicing, so you can bill clients upfront for 10-session packs, 4-week programs, or monthly unlimited training. You can also invoice per session for casual clients. Automatic payment reminders ensure clients pay for their packages on time, and you can track remaining sessions against each invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for personal trainers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including an invoice generator, GST calculator, and ABN lookup. Most PTs training a handful of regular clients can start free. Paid plans start at $19/month for unlimited invoices — far less than gym management platforms like Mindbody ($139/month).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do PTs issue tax invoices for client health insurance claims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many health insurance providers in Australia allow members to claim personal training sessions under extras cover. Your clients will need a proper tax invoice with your ABN, the date of service, a description of the service (e.g. "1x 60-minute personal training session"), and the amount paid including GST. InvoiceFlow generates compliant tax invoices automatically — just fill in the session details and send. Your clients can then submit the invoice to their health fund.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does InvoiceFlow handle both in-person and online coaching billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Whether you train clients face-to-face at a gym, outdoors, or in their home, or you run online coaching programs with video calls and programming, InvoiceFlow handles all billing scenarios. You can create recurring invoices for ongoing coaching clients, one-off invoices for casual sessions, and package invoices for multi-session bundles. All invoices are sent digitally, so it works seamlessly for both in-person and remote fitness professionals.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Manually tracking client sessions and payments in notebooks',
    solution: 'Automatic session tracking with per-client billing — every session accounted for.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    problem: 'Clients forgetting to pay for their PT package',
    solution: 'Upfront package invoicing with automatic payment reminders — no awkward conversations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    problem: 'No professional invoice when clients ask for tax receipts',
    solution: 'Instant tax invoices that clients can claim on health insurance — sent in seconds.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    problem: 'Paying for gym management software when you just need invoicing',
    solution: 'InvoiceFlow starts free. No gym management bloat — just clean, fast invoicing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const fitnessTypes = [
  { name: 'Personal Trainer', icon: '💪' },
  { name: 'Group Fitness Instructor', icon: '🏋️' },
  { name: 'Yoga Teacher', icon: '🧘' },
  { name: 'Pilates Instructor', icon: '🤸' },
  { name: 'CrossFit Coach', icon: '🏅' },
  { name: 'Strength & Conditioning Coach', icon: '🏆' },
  { name: 'Sports Nutritionist', icon: '🥗' },
  { name: 'Online Fitness Coach', icon: '💻' },
];

const popularTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional PT invoices instantly' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on session rates and packages' },
  { name: 'Quote Generator', href: '/tools/invoice-generator', desc: 'Professional quotes for training packages' },
  { name: 'Late Payment Calculator', href: '/tools/late-payment-interest-calculator', desc: 'Interest on overdue client payments' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', desc: 'Verify your ABN for tax invoices' },
  { name: 'Milestone Payment Calculator', href: '/tools/milestone-payment-calculator', desc: 'Split package payments into milestones' },
];

export default function ForPersonalTrainersPage() {
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
        <div className="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400 mb-8">
          Built for Australian PTs &amp; Fitness Professionals
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Train clients.{' '}
          <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
            Not spreadsheets.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          You became a PT to transform lives, not chase payments. InvoiceFlow lets personal trainers and fitness
          professionals create professional invoices, bill for packages, and send tax receipts — in 30 seconds flat.
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

      {/* Fitness Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by fitness professionals across every discipline</p>
        <div className="flex flex-wrap justify-center gap-3">
          {fitnessTypes.map((type) => (
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
          PT invoicing shouldn&apos;t be this painful
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a fitness professional, not a bookkeeper. You need to bill clients quickly, track sessions, and get back to coaching.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-red-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-rose-300 font-semibold">{item.solution}</p>
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
            { number: '35K+', label: 'AU fitness professionals', detail: 'PTs, coaches, instructors' },
            { number: '$80–150', label: 'Avg PT session rate', detail: 'Invoice every dollar' },
            { number: '30s', label: 'To create an invoice', detail: 'Between sessions, on your phone' },
            { number: '$0', label: 'To start', detail: 'Free tier, forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for fitness professionals
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need class scheduling, membership management, or a full gym platform. You need invoices that look professional and payments that arrive on time.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-red-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Mindbody ($139/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">FreshBooks ($24/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-red-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">No free tier</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-red-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$139/mo</td>
                <td className="py-3 px-4">$24/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Session tracking</td>
                <td className="py-3 px-4 text-red-400">Per-client billing</td>
                <td className="py-3 px-4 text-emerald-400">Full scheduling suite</td>
                <td className="py-3 px-4 text-slate-500">Not fitness-specific</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Package billing</td>
                <td className="py-3 px-4 text-red-400">Multi-session packs</td>
                <td className="py-3 px-4 text-emerald-400">Built-in</td>
                <td className="py-3 px-4 text-slate-500">Manual workaround</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Client management</td>
                <td className="py-3 px-4 text-red-400">Invoice-focused CRM</td>
                <td className="py-3 px-4 text-emerald-400">Full CRM + app</td>
                <td className="py-3 px-4 text-emerald-400">Basic CRM</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Setup time</td>
                <td className="py-3 px-4 text-red-400">30 seconds</td>
                <td className="py-3 px-4">1-2 hours</td>
                <td className="py-3 px-4">15-30 minutes</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-red-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$1,668/yr</td>
                <td className="py-3 px-4 text-red-300">$288/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-red-400 hover:text-red-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every fitness professional needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-red-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-red-400 hover:text-red-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for fitness professionals</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, and running a fitness business in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'BAS Guide for Sole Traders', href: '/blog/bas-guide-australian-freelancers' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'Late Payment Interest Guide', href: '/blog/late-payment-interest-australia' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-red-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-red-400 hover:text-red-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from personal trainers
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-red-400 transition-colors list-none flex justify-between items-center">
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
          Ready to stop chasing client payments?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian fitness professionals who invoice between sessions, bill for packages automatically, and never chase a late payer again. Start free today.
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
