import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Web Developers in Australia — InvoiceFlow',
  description:
    'Free invoicing tools built for Australian web developers and designers. Project billing, milestone payments, retainer invoicing, and scope change tracking for freelance developers, UI/UX designers, and app developers.',
  keywords: [
    'invoicing software web developers australia',
    'freelance developer invoice template',
    'invoice app for web designers',
    'web developer invoicing',
    'freelance developer billing',
  ],
  alternates: { canonical: '/for/web-developers' },
  openGraph: {
    title: 'InvoiceFlow for Web Developers — Ship Code, Get Paid Faster',
    description:
      'Stop chasing payments between sprints. InvoiceFlow gives web developers milestone billing, project invoicing, and retainer automation — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Web Developers', item: 'https://invoiceflow-teal.vercel.app/for/web-developers' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I invoice for project-based web development work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow lets you create project-based invoices with detailed line items for each phase of development — discovery, design, development, testing, and deployment. You can break a $10,000 website build into clear milestones (e.g., 30% deposit, 40% on design approval, 30% on launch) and invoice each milestone separately. Every invoice includes your ABN, GST breakdown, and payment terms so clients know exactly what they are paying for and when.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle milestone payments for web projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Milestone billing is built into InvoiceFlow. You define the milestones for your project (e.g., wireframes complete, development complete, QA passed) and InvoiceFlow generates a separate invoice for each milestone at the percentage or fixed amount you set. This protects you from scope creep and cash flow gaps — you get paid as you deliver, not months after launch. Clients receive professional invoices at each stage with a clear description of the work completed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle invoicing when a client changes the project scope?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scope changes are one of the biggest cash flow killers for web developers. InvoiceFlow lets you create change order invoices linked to the original project, so you have a clear paper trail of what was agreed, what changed, and what the additional cost is. You can generate a new invoice for the scope change with line items detailing the extra work — additional pages, new features, design revisions beyond the included rounds. This keeps everything documented and professional, and clients can see exactly why the cost increased.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I set up retainer invoicing for ongoing web maintenance clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many web developers earn recurring revenue from website maintenance, hosting management, and ongoing updates. InvoiceFlow lets you create recurring invoices that automatically send to retainer clients on your chosen schedule — weekly, fortnightly, monthly, or quarterly. Set it once and InvoiceFlow handles the rest, including automatic payment reminders. This is ideal for WordPress maintenance packages, SEO retainers, or ongoing development support where you bill a fixed monthly amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I invoice international clients as an Australian web developer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow supports multi-currency invoicing, so you can bill international clients in USD, GBP, EUR, or any other currency while keeping your books in AUD. For international clients, GST is generally not applied (exports of services are GST-free), and InvoiceFlow handles this automatically when you mark a client as overseas. Your invoices will still include your ABN and comply with Australian tax requirements, but the GST line will show as zero. This makes it easy to work with clients in the US, UK, or anywhere else without manual currency conversion or tax confusion.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Complex project billing with no clear milestone structure',
    solution: 'Milestone-based invoicing — break any project into deposit, progress, and final payments automatically.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    problem: 'Scope creep eating into profits with no paper trail',
    solution: 'Change order invoices linked to original projects — document every scope change and bill accordingly.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    problem: 'Spending hours on invoicing instead of writing code',
    solution: 'One-click recurring invoices for retainer clients — set it once, get paid every month automatically.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: 'Juggling hourly, fixed-price, and retainer billing across clients',
    solution: 'Flexible billing modes — hourly rates, fixed project fees, and monthly retainers all in one place.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const devTypes = [
  { name: 'Web Development', icon: '</>' },
  { name: 'UI/UX Design', icon: '~' },
  { name: 'App Development', icon: '#' },
  { name: 'WordPress', icon: 'W' },
  { name: 'Shopify', icon: 'S' },
  { name: 'Full-Stack', icon: '{}' },
  { name: 'Frontend', icon: '<>' },
  { name: 'Backend', icon: '//' },
];

const popularTools = [
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional development invoices instantly' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', desc: 'Calculate your ideal hourly or project rate' },
  { name: 'Contract Generator', href: '/tools/contract-generator', desc: 'Generate client contracts with scope and payment terms' },
  { name: 'Project Timeline Calculator', href: '/tools/project-timeline-calculator', desc: 'Estimate project timelines and milestone dates' },
  { name: 'Scope Change Calculator', href: '/tools/scope-change-calculator', desc: 'Calculate the cost impact of scope changes' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on project fees and retainers' },
];

export default function ForWebDevelopersPage() {
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
        <div className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-8">
          Built for Australian Web Developers &amp; Designers
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Ship code.{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get paid faster.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop chasing payments between sprints. InvoiceFlow lets freelance web developers, UI/UX designers, and app
          developers invoice clients for projects, milestones, and retainers — in 30 seconds. GST sorted automatically.
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

      {/* Developer Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by developers and designers across every stack</p>
        <div className="flex flex-wrap justify-center gap-3">
          {devTypes.map((dev) => (
            <span
              key={dev.name}
              className="rounded-full border border-blue-500/20 bg-blue-500/[0.05] px-4 py-2 text-sm text-slate-300"
            >
              <span className="text-blue-400 font-mono mr-1.5">{dev.icon}</span> {dev.name}
            </span>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Developer invoicing shouldn&apos;t be this painful
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a developer, not an accountant. You need to bill clients quickly, track milestone payments, and get back to building great products.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-blue-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-blue-300 font-semibold">{item.solution}</p>
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
            { number: '65K+', label: 'AU tech freelancers', detail: 'And growing every year' },
            { number: '$75K', label: 'GST threshold', detail: 'We track it for you' },
            { number: '$19/mo', label: 'Pro plan', detail: 'Unlimited invoices' },
            { number: '100+', label: 'Free tools', detail: 'No sign-up required' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for web developers
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need bloated accounting software. You need project invoices that look professional, milestone billing that works, and retainers that track themselves.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-blue-400 font-bold">InvoiceFlow</th>
                <th className="py-4 px-4 text-slate-400 font-medium">FreshBooks ($24/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">Xero ($35/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-blue-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
                <td className="py-3 px-4 text-slate-500">30-day trial only</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-blue-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$24/mo</td>
                <td className="py-3 px-4">$35/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Milestone billing</td>
                <td className="py-3 px-4 text-blue-400">Native support</td>
                <td className="py-3 px-4 text-slate-500">Manual workaround</td>
                <td className="py-3 px-4 text-slate-500">Not supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Project-based invoicing</td>
                <td className="py-3 px-4 text-blue-400">Built-in</td>
                <td className="py-3 px-4 text-blue-400">Built-in</td>
                <td className="py-3 px-4 text-blue-400">Built-in</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Recurring / retainer billing</td>
                <td className="py-3 px-4 text-blue-400">One-click setup</td>
                <td className="py-3 px-4 text-blue-400">Supported</td>
                <td className="py-3 px-4 text-blue-400">Supported</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Setup time</td>
                <td className="py-3 px-4 text-blue-400">30 seconds</td>
                <td className="py-3 px-4">15-30 minutes</td>
                <td className="py-3 px-4">30-60 minutes</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-blue-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$288/yr</td>
                <td className="py-3 px-4 text-red-300">$420/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every web developer needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for web developers</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, and running a freelance development business in Australia.
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
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from web developers
        </h2>
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to professionalise your development invoices?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian web developers who bill projects automatically, track milestone payments, and never chase a late payer again. Start free today.
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
