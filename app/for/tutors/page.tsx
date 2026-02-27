import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Invoicing Software for Tutors & Educators in Australia — InvoiceFlow',
  description:
    'Free invoicing software built for Australian private tutors, NDIS tutors, online educators, and music teachers. Session billing, parent invoicing, time tracking, and NDIS-compliant invoices — all starting free.',
  alternates: { canonical: '/for/tutors' },
  keywords: [
    'invoicing software tutors australia',
    'tutor invoice template',
    'private tutor billing software',
  ],
  openGraph: {
    title: 'InvoiceFlow for Tutors — Track Sessions, Invoice Parents, Get Paid',
    description:
      'Stop chasing parents for payment. InvoiceFlow gives tutors and educators session tracking, automated parent invoicing, and NDIS-compliant billing — starting free.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'For Tutors', item: 'https://invoiceflow-teal.vercel.app/for/tutors' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do tutors need invoicing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Whether you\'re a private maths tutor, music teacher, or NDIS support tutor, professional invoicing is essential for tracking sessions, billing parents accurately, and managing NDIS claims. Spreadsheets and handwritten receipts lead to missed payments, tax headaches, and an unprofessional impression. InvoiceFlow gives you session-based invoicing, automatic payment reminders, and GST-ready records — so you can focus on teaching, not chasing payments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can InvoiceFlow handle hourly session billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow includes built-in time tracking designed for session-based work. You can log each tutoring session with the date, duration, and subject, set different hourly rates for individual vs group sessions, and auto-calculate totals when you generate the invoice. Whether you charge $50/hour for primary school maths or $90/hour for VCE chemistry, InvoiceFlow tracks every session and converts it into a clear, itemised invoice parents can understand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is InvoiceFlow free for tutors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow offers a free forever tier with 5 invoices per month, Gmail sync, CSV export, and access to 100+ free business tools including a GST calculator, invoice generator, and rate calculator. Many tutors just starting out or working with a handful of students can run entirely on the free tier. Paid plans start at $19/month for unlimited invoices, recurring billing, session tracking, and full client management features.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I invoice parents and students separately?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow supports multi-client invoicing, so you can set up separate billing profiles for parents, adult students, or organisations. If you tutor siblings, you can group sessions under one family account and send a single consolidated invoice to the parent. If a student is an adult paying for themselves, they get their own profile. You can manage different rates, schedules, and payment terms for each client without any confusion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does InvoiceFlow work for NDIS-funded tutoring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. InvoiceFlow can generate NDIS-compliant invoices that include participant name, NDIS number, plan manager details, support item references, and line-by-line breakdowns of sessions delivered. Many NDIS plan managers require specific invoice formats to process claims — InvoiceFlow ensures your invoices meet these requirements so you get paid faster. You can also track NDIS vs private sessions separately for cleaner reporting.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Manually tracking hours across 20+ students each week',
    solution: 'Built-in session logging — record each lesson, set per-student rates, and auto-generate itemised invoices.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: 'Chasing parents for payment after every term',
    solution: 'Automatic payment reminders and overdue notifications — get paid without the awkward follow-ups.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    problem: 'Managing different rates for group vs individual sessions',
    solution: 'Flexible rate cards per student or session type — individual, group, online, or in-person rates all in one place.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    problem: 'Generating NDIS-compliant invoices with correct plan details',
    solution: 'NDIS-ready invoice templates with participant details, plan manager info, and support item references built in.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const tutorTypes = [
  { name: 'Maths & Science Tutor', icon: '\uD83D\uDD22' },
  { name: 'English & Literacy Tutor', icon: '\uD83D\uDCDA' },
  { name: 'Music Teacher', icon: '\uD83C\uDFB5' },
  { name: 'Language Tutor', icon: '\uD83C\uDF0F' },
  { name: 'NDIS Support Tutor', icon: '\uD83D\uDC99' },
  { name: 'VCE/HSC Exam Prep', icon: '\uD83C\uDF93' },
  { name: 'Online Tutor', icon: '\uD83D\uDCBB' },
  { name: 'Special Needs Educator', icon: '\u2B50' },
];

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST on tutoring fees' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', desc: 'Create professional tutoring invoices' },
  { name: 'Rate Calculator', href: '/tools/hourly-rate-calculator', desc: 'Calculate your ideal hourly tutoring rate' },
  { name: 'Client Onboarding Checklist', href: '/tools/client-onboarding-checklist', desc: 'Streamline new student intake' },
  { name: 'Service Package Builder', href: '/tools/service-package-builder', desc: 'Create term-based tutoring packages' },
  { name: 'Payment Receipt Generator', href: '/tools/payment-receipt-generator', desc: 'Issue receipts for parent payments' },
];

export default function ForTutorsPage() {
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
        <div className="inline-block rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 mb-8">
          Built for Australian Tutors &amp; Educators
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Track sessions. Invoice parents.{' '}
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Teach without admin stress.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Stop chasing parents for payment. InvoiceFlow streamlines session tracking, parent invoicing, and payment collection
          for Australian tutors and educators — so you can focus on what you do best: teaching.
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

      {/* Tutor Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by tutors and educators across every subject</p>
        <div className="flex flex-wrap justify-center gap-3">
          {tutorTypes.map((type) => (
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
          Tutoring admin shouldn&apos;t take longer than the lesson
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          You&apos;re a tutor, not an accountant. You need to log sessions quickly, invoice parents accurately, and get back to the work that matters — helping students succeed.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-green-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <p className="text-green-300 font-semibold">{item.solution}</p>
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
            { number: '150K+', label: 'Tutors in Australia', detail: 'Private & agency-based' },
            { number: '$7.2B', label: 'AU tutoring industry', detail: 'Growing 8% annually' },
            { number: '30s', label: 'To create an invoice', detail: 'Between sessions' },
            { number: '$0', label: 'To start', detail: 'Free tier, forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
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
          How InvoiceFlow compares for tutors
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          You don&apos;t need expensive tutor management software just to bill parents. You need fast invoicing, session tracking that works, and recurring billing for term payments.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-slate-400 font-medium">Feature</th>
                <th className="py-4 px-4 text-green-400 font-bold">InvoiceFlow ($19/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">TutorCruncher ($49/mo)</th>
                <th className="py-4 px-4 text-slate-400 font-medium">FreshBooks ($24/mo)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Free tier</td>
                <td className="py-3 px-4 text-green-400 font-semibold">5 invoices/mo forever</td>
                <td className="py-3 px-4 text-slate-500">No free tier</td>
                <td className="py-3 px-4 text-slate-500">No free tier</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly price</td>
                <td className="py-3 px-4 text-green-400 font-semibold">$19/mo</td>
                <td className="py-3 px-4">$49/mo</td>
                <td className="py-3 px-4">$24/mo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Session tracking</td>
                <td className="py-3 px-4 text-green-400">Built-in</td>
                <td className="py-3 px-4 text-green-400">Built-in</td>
                <td className="py-3 px-4 text-slate-500">Basic time tracking</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Parent invoicing</td>
                <td className="py-3 px-4 text-green-400">Built-in</td>
                <td className="py-3 px-4 text-green-400">Built-in</td>
                <td className="py-3 px-4 text-green-400">Built-in</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Recurring billing</td>
                <td className="py-3 px-4 text-green-400">One-click setup</td>
                <td className="py-3 px-4 text-green-400">Supported</td>
                <td className="py-3 px-4 text-green-400">Supported</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Annual cost</td>
                <td className="py-3 px-4 text-green-400 font-bold">$0 — $228/yr</td>
                <td className="py-3 px-4 text-red-300">$588/yr</td>
                <td className="py-3 px-4 text-red-300">$288/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-green-400 hover:text-green-300 text-sm font-medium">
            See full competitor comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free tools every tutor needs
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-green-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-green-400 hover:text-green-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Guides for tutors</h2>
        <p className="text-center text-slate-400 mb-10">
          Plain-English articles on invoicing, GST, tax, and running a tutoring business in Australia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'GST Guide for Australian Freelancers', href: '/blog/gst-guide-australian-freelancers' },
            { title: 'How Much Tax Do Freelancers Pay?', href: '/blog/how-much-tax-freelancers-pay-australia' },
            { title: 'How to Start Freelancing in Australia', href: '/blog/how-to-start-freelancing-australia' },
            { title: 'Tax Deductions for Freelancers', href: '/blog/tax-deductions-australian-freelancers' },
            { title: 'Superannuation Guide for the Self-Employed', href: '/blog/superannuation-guide-self-employed-australia' },
            { title: 'Freelance Contract Guide', href: '/blog/freelance-contract-guide-australia' },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-green-500/20 hover:bg-white/[0.04] transition-all"
            >
              <p className="font-medium text-white text-sm">{article.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-green-400 hover:text-green-300 text-sm font-medium">
            Read all 125+ articles &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions from tutors
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-green-400 transition-colors list-none flex justify-between items-center">
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
          Ready to professionalise your tutoring business?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join thousands of Australian tutors and educators who track sessions automatically, invoice parents on time, and never chase a late payment again. Start free today.
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
