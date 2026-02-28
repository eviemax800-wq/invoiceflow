import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Retainer Agreement: Complete Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is a retainer? Learn how retainer agreements work for Australian freelancers — types of retainers, pricing models, contracts, invoicing, and how to build predictable monthly income with retainer clients.',
  keywords: [
    'retainer agreement template',
    'retainer fee meaning',
    'retainer billing freelancer',
    'monthly retainer pricing',
    'retainer vs project billing',
    'freelance retainer contract',
    'retainer invoice template australia',
    'how to set up a retainer',
  ],
  alternates: { canonical: '/glossary/retainer' },
  openGraph: {
    title: 'Retainer Agreement: Complete Guide for Australian Freelancers — InvoiceFlow',
    description:
      'What is a retainer? Learn how retainer agreements work for Australian freelancers — types of retainers, pricing models, contracts, invoicing, and how to build predictable monthly income with retainer clients.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/retainer',
    type: 'article',
  },
};

const BASE_URL = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${BASE_URL}/glossary` },
    { '@type': 'ListItem', position: 3, name: 'Retainer', item: `${BASE_URL}/glossary/retainer` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a retainer agreement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A retainer agreement is a contract where a client pays a recurring fee (typically monthly) to reserve a set amount of your time, expertise, or deliverables on an ongoing basis. Unlike project-based work where you invoice after completion, retainers provide predictable, recurring revenue. The client gets guaranteed access to your services, and you get income stability. Retainers are common among consultants, designers, developers, marketing professionals, and other service providers who work with clients long-term.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I charge for a retainer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retainer pricing depends on your hourly rate, the scope of work, and the value you provide. A common approach is to calculate your hourly rate × estimated hours per month, then apply a 10-15% discount as an incentive for the commitment (e.g., $150/hr × 20 hrs = $3,000, minus 10% = $2,700/mo). However, value-based retainers can be much higher — if your monthly SEO work generates $50,000 in revenue for the client, a $5,000 retainer is reasonable regardless of hours. Most Australian freelancer retainers range from $1,000 to $10,000 per month.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between a retainer and a subscription?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A retainer reserves your personal time and expertise — the client is paying for access to YOU specifically. A subscription provides access to a product or standardised service that anyone can use. Retainers are customised to each client\'s needs and typically involve a relationship. Subscriptions are scalable and impersonal. For freelancers, retainers are the better model because they leverage your unique skills and build deep client relationships that are hard to replace.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle unused retainer hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This depends on your retainer model. With a "use it or lose it" retainer, unused hours expire at the end of the month — this is simpler to manage and prevents hour accumulation. With a "rollover" model, unused hours carry forward (usually capped at 1-2 months). The "use it or lose it" approach is generally recommended for freelancers because rollover hours create a growing obligation that can overwhelm your schedule. Whichever model you choose, state it clearly in the agreement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I offer a discount for retainer clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A small discount (10-15%) is common and justified because retainers reduce your business costs: no time spent on proposals, less client acquisition cost, predictable scheduling, and reduced invoicing overhead. However, never discount more than 15% — the stability benefit has its limits, and deep discounts can make the retainer unprofitable. Some freelancers don\'t discount at all and instead add extra value (priority response times, dedicated Slack channel, monthly strategy calls) to justify the commitment.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-a-retainer', label: '1. What Is a Retainer?' },
  { id: 'types-of-retainer-agreements', label: '2. Types of Retainer Agreements' },
  { id: 'pricing-your-retainer', label: '3. Pricing Your Retainer' },
  { id: 'retainer-agreement-what-to-include', label: '4. The Retainer Agreement: What to Include' },
  { id: 'managing-retainer-clients', label: '5. Managing Retainer Clients' },
  { id: 'retainer-invoicing-invoiceflow', label: '6. Retainer Invoicing with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your hourly rate to set profitable retainer pricing.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional recurring retainer invoices with clear terms.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Ensure your retainer pricing delivers healthy margins after expenses.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: '/tools/work-capacity-planner',
    name: 'Work Capacity Planner',
    description: 'Plan how many retainer clients you can handle alongside project work.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Freelance Rates',
    description: 'Build a rate structure that works for both project and retainer billing.',
  },
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Set up automated retainer billing to ensure on-time payments every month.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'The complete guide to professional invoicing, including retainer billing best practices.',
  },
];

export default function RetainerGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-cyan-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Retainer</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Freelance Business
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Retainer Agreements{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A retainer is the closest thing a freelancer gets to a salary &mdash; predictable monthly revenue, deeper client relationships, and less time selling. This guide covers the types of retainers, how to price them, what to include in your agreement, how to manage retainer clients, and how to automate the invoicing so you get paid on time every month.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>AU Freelancer Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-sky-500/10 border border-cyan-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">40%</span>
              <div>
                <p className="text-white font-medium text-sm">Less Income Anxiety</p>
                <p className="text-gray-400 text-sm">Freelancers with 2+ retainer clients report 40% less income anxiety than project-only freelancers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">$1-10K</span>
              <div>
                <p className="text-white font-medium text-sm">Typical AU Range</p>
                <p className="text-gray-400 text-sm">Most Australian freelancer retainers range from $1,000 to $10,000 per month depending on scope</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">10-15%</span>
              <div>
                <p className="text-white font-medium text-sm">Typical Retainer Discount</p>
                <p className="text-gray-400 text-sm">A small discount off your project rate as an incentive for the ongoing commitment</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">30d</span>
              <div>
                <p className="text-white font-medium text-sm">Standard Notice Period</p>
                <p className="text-gray-400 text-sm">Most retainer agreements include a 30-day notice period for either party to terminate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Table of Contents</h2>
          <nav className="grid sm:grid-cols-2 gap-2">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-cyan-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

        {/* Section 1: What Is a Retainer? */}
        <section id="what-is-a-retainer">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is a Retainer?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A retainer is a <strong className="text-white">recurring agreement where a client pays you a set fee &mdash; typically monthly &mdash; to reserve your time, expertise, or a defined set of deliverables on an ongoing basis</strong>. Think of it as a standing arrangement: the client gets guaranteed access to your services, and you get predictable income. Unlike one-off projects where you scope, quote, deliver, and invoice, a retainer is an ongoing relationship with regular payments and regular work.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The core difference between retainer work and project work is <strong className="text-white">predictability versus variability</strong>. With project billing, your income fluctuates month to month &mdash; one month you might invoice $15,000, the next month $3,000. With retainers, you know exactly what you will earn before the month begins. If you have three clients on $4,000/month retainers, you have $12,000 of guaranteed revenue every month regardless of whether new projects come in or not.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This is why retainers are often called the <strong className="text-white">&quot;holy grail&quot; of freelancing</strong>. They solve the three biggest problems freelancers face: <strong className="text-white">income instability</strong> (you know what you will earn), <strong className="text-white">constant sales effort</strong> (retained clients do not need to be re-sold every month), and <strong className="text-white">shallow relationships</strong> (ongoing work lets you go deeper and deliver better results). Freelancers with two or more retainer clients report 40% less income anxiety compared to those relying solely on project work.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From the <strong className="text-white">client&apos;s perspective</strong>, retainers are equally valuable. They get guaranteed access to your services without competing with your other prospects for attention. They get priority response times. They get someone who deeply understands their business because you work with them month after month. And they get budget predictability &mdash; they know exactly what they are spending on your services, which makes internal budgeting and approvals much simpler.
            </p>
            <p className="text-gray-300 leading-relaxed">
              That said, retainers are not always the right model. <strong className="text-white">Project billing is better when</strong> the work is truly one-off (a website build, a logo design, a one-time audit), when the scope is highly variable month to month, when the client does not have ongoing needs, or when the total value is too small to justify a monthly commitment. The sweet spot for retainers is when a client has <strong className="text-white">consistent, recurring needs</strong> that require your specific expertise &mdash; ongoing marketing, regular design work, continuous development, monthly financial advice, or retained consulting.
            </p>
            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Why This Matters for Freelancers</p>
              <p className="text-gray-400 text-sm">
                The average Australian freelancer spends <strong className="text-gray-200">30-40% of their time on non-billable work</strong> &mdash; prospecting, writing proposals, negotiating scope, chasing invoices. Retainer clients eliminate most of that overhead. Once the retainer is set up, your monthly admin is a single invoice and a brief status report. That means more billable hours, higher effective rates, and less time worrying about where the next job is coming from.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Types of Retainer Agreements */}
        <section id="types-of-retainer-agreements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Types of Retainer Agreements</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not all retainers are structured the same way. The right model depends on your service type, how you prefer to work, and what the client values most. Here are the four main types of retainer agreements, each with distinct characteristics.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">T</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Time-Based Retainer</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The client buys a set number of hours per month at a fixed rate. For example, 20 hours per month at $150/hour = $3,000/month. This is the simplest retainer model and the easiest for both parties to understand. The downside is that it can feel transactional &mdash; the client may focus on counting hours rather than the value you deliver. It also creates a natural ceiling on what you can earn from that client, since your revenue is directly tied to hours worked.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">D</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Deliverable-Based Retainer</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The client pays for a defined set of monthly outputs rather than hours. For example: 4 blog posts, 2 design revisions, 10 hours of technical support, or a monthly SEO report and implementation. This model provides clearer scope boundaries and shifts the conversation from &quot;how long did it take?&quot; to &quot;what did I get?&quot; It works well for services with naturally repeating deliverables, but requires careful scoping upfront to avoid disagreements about what counts as one &quot;deliverable.&quot;
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">A</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Access / Availability Retainer</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The client pays for guaranteed access to you and priority response times. Hours may not be specified &mdash; the client is paying for the <em>availability</em> of your expertise whenever they need it. This is common for consultants, technical advisors, fractional CTOs, and legal counsel. The client might only call you twice a month, or they might need you every day for a week. The fee stays the same either way. This model works best when your value comes from being available rather than from producing specific outputs.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">V</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Value-Based Retainer</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Priced on the value you deliver to the client, not the time you spend or the outputs you produce. If your monthly SEO work generates $50,000 in revenue for the client, a $5,000 retainer is a bargain regardless of whether it takes you 5 hours or 50 hours. This is the highest-margin retainer model but requires you to demonstrate clear, measurable ROI. It works best for marketing, sales, revenue-generating consulting, and any service where you can tie your work to the client&apos;s bottom line.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Type</th>
                      <th className="text-left text-sm font-medium text-cyan-400 px-6 py-4">How It Works</th>
                      <th className="text-left text-sm font-medium text-sky-400 px-6 py-4">Best For</th>
                      <th className="text-left text-sm font-medium text-gray-400 px-6 py-4">Typical Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Time-Based</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">X hours/month at set rate</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Developers, VAs, support</td>
                      <td className="px-6 py-3 text-sm text-cyan-400 font-medium">$1,000-$8,000/mo</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Deliverable</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Defined monthly outputs</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Writers, designers, marketers</td>
                      <td className="px-6 py-3 text-sm text-cyan-400 font-medium">$1,500-$6,000/mo</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Access</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Guaranteed availability</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Consultants, advisors, fractional roles</td>
                      <td className="px-6 py-3 text-sm text-cyan-400 font-medium">$2,000-$10,000/mo</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium whitespace-nowrap">Value-Based</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Priced on client ROI</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">SEO, sales, revenue-tied services</td>
                      <td className="px-6 py-3 text-sm text-cyan-400 font-medium">$3,000-$15,000+/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Which Model Should You Choose?</p>
              <p className="text-gray-400 text-sm">
                If you are just starting with retainers, begin with a <strong className="text-gray-200">time-based or deliverable-based model</strong> &mdash; they are easiest to scope, price, and explain to clients. As you build trust and can demonstrate measurable results, transition to value-based retainers for higher margins. Access retainers work best for senior consultants whose value is their strategic thinking and availability, not their execution output.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Pricing Your Retainer */}
        <section id="pricing-your-retainer">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Pricing Your Retainer</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Retainer pricing is one of the most common sticking points for freelancers. Charge too little and the retainer becomes an unprofitable anchor. Charge too much and the client will not commit. Here is a practical framework for getting the price right.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The Baseline Formula</h3>
            <p className="text-gray-300 leading-relaxed">
              Start with the simplest calculation: <strong className="text-white">your hourly rate multiplied by the estimated monthly hours</strong>. This gives you a baseline that ensures you are not undercharging. For example, if your hourly rate is $150 and the client needs roughly 20 hours per month of your time, the baseline retainer is $3,000/month.
            </p>
            <div className="rounded-lg bg-gray-900/60 p-4 text-sm font-mono text-cyan-300 mt-3">
              Baseline: $150/hr x 20 hrs/month = $3,000/month
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The Retainer Discount</h3>
            <p className="text-gray-300 leading-relaxed">
              It is common to offer a <strong className="text-white">10-15% discount</strong> off your equivalent project rate as an incentive for the ongoing commitment. This is justified because retainers reduce your business costs: no time writing proposals, no client acquisition cost for that revenue, predictable scheduling, and reduced invoicing overhead. A 10% discount on a $3,000 baseline gives you $2,700/month &mdash; a fair deal for both sides.
            </p>
            <div className="rounded-lg bg-gray-900/60 p-4 text-sm font-mono text-cyan-300 mt-3">
              With 10% discount: $3,000 - $300 = $2,700/month
            </div>
            <p className="text-gray-300 leading-relaxed mt-3">
              <strong className="text-white">Never discount more than 15%.</strong> The stability benefit has its limits, and deep discounts can make the retainer unprofitable once you account for scope creep, admin time, and the opportunity cost of reserving those hours for one client.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Value-Based Pricing</h3>
            <p className="text-gray-300 leading-relaxed">
              If your work generates measurable revenue or cost savings for the client, <strong className="text-white">price based on the value, not the time</strong>. If your monthly SEO work drives $50,000 in additional revenue for the client, a $5,000 retainer is a 10x return on their investment. They are getting a bargain, and you are earning well above your hourly rate. The key is being able to demonstrate and track the ROI with clear metrics.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Minimum Retainer Threshold</h3>
            <p className="text-gray-300 leading-relaxed">
              There is a point below which a retainer is not worth the overhead. Monthly check-ins, reporting, scope management, and invoicing take time regardless of the retainer size. Most freelancers find that <strong className="text-white">retainers below $1,000-$1,500/month are not worthwhile</strong> &mdash; the admin eats into the margin. If the client&apos;s needs are that small, project-based billing on an as-needed basis is usually more efficient for both parties.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Australian Freelancer Retainer Ranges</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Service Type</th>
                      <th className="text-left text-sm font-medium text-cyan-400 px-6 py-4">Monthly Range</th>
                      <th className="text-left text-sm font-medium text-sky-400 px-6 py-4">Typical Hours</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Web Developer</td>
                      <td className="px-6 py-3 text-cyan-400 text-sm font-medium">$3,000-$8,000/mo</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">20-40 hrs</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Graphic Designer</td>
                      <td className="px-6 py-3 text-cyan-400 text-sm font-medium">$2,000-$5,000/mo</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">15-30 hrs</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Marketing Consultant</td>
                      <td className="px-6 py-3 text-cyan-400 text-sm font-medium">$2,500-$7,000/mo</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">10-20 hrs strategy + execution</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Copywriter</td>
                      <td className="px-6 py-3 text-cyan-400 text-sm font-medium">$1,500-$4,000/mo</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">8-20 hrs</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Virtual Assistant</td>
                      <td className="px-6 py-3 text-cyan-400 text-sm font-medium">$1,000-$3,000/mo</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">20-40 hrs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">When to Raise Retainer Rates</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-cyan-400 font-medium mb-2">Good Times to Raise</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Annually &mdash; build in a standard annual increase (5-10%)</li>
                  <li>After demonstrating increased value or ROI to the client</li>
                  <li>When scope has gradually expanded beyond the original agreement</li>
                  <li>When your market rate has increased due to demand or new skills</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-sky-400 font-medium mb-2">How to Raise Rates</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Give 30-60 days notice before the new rate takes effect</li>
                  <li>Frame it around the value delivered, not your costs</li>
                  <li>Present a summary of results achieved during the current period</li>
                  <li>Offer to adjust scope if the new price is a concern for the client</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">Pro Tip: Start High, Negotiate Down</p>
              <p className="text-gray-400 text-sm">
                When proposing a retainer, <strong className="text-gray-200">always start at the top of your range</strong>. You can negotiate down if needed, but you can never negotiate up from a low opening price. If a client says your $5,000/month proposal is too high, you can adjust scope or offer a trial period &mdash; but if you open at $3,000 and the client would have happily paid $5,000, you have left $24,000 per year on the table.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: The Retainer Agreement: What to Include */}
        <section id="retainer-agreement-what-to-include">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Retainer Agreement: What to Include</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              A handshake retainer is a recipe for misunderstanding. Every retainer should be backed by a <strong className="text-white">written agreement that clearly defines the scope, terms, and expectations for both parties</strong>. Here are the essential clauses your retainer agreement must include.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Essential Clauses</h3>
            <div className="space-y-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">1</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Scope of Services</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Define exactly what is included in the retainer <strong className="text-gray-200">and what is not</strong>. This is the most important clause because ambiguity here is the number one cause of scope creep. Be specific: &quot;Monthly retainer includes up to 4 blog posts (1,000-1,500 words each), 2 rounds of revisions per post, and 1 monthly strategy call. Social media management, email marketing, and ad copywriting are not included and will be quoted separately.&quot;
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">2</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Monthly Fee and Payment Terms</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  State the retainer fee, when it is due (e.g. &quot;due on the 1st of each month, payable within 7 days&quot;), and the payment method. Most retainers are paid in advance &mdash; the client pays at the start of the month for that month&apos;s services. This is standard practice and protects you from doing work that does not get paid for.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">3</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Hours / Deliverables Included</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Specify the exact allocation &mdash; whether that is hours, deliverables, or a combination. &quot;This retainer includes 20 hours of development work per calendar month&quot; or &quot;4 blog posts, 8 social media graphics, and 1 email newsletter per month.&quot;
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">4</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Unused Hours Policy</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Choose and document your policy: <strong className="text-gray-200">&quot;Use it or lose it&quot;</strong> (unused hours expire at month end) or <strong className="text-gray-200">&quot;Rollover&quot;</strong> (unused hours carry forward, usually capped at 1-2 months). &quot;Use it or lose it&quot; is recommended for most freelancers because rollover creates a growing obligation that can overwhelm your schedule.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">5</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Overage Rates</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Define what happens when the client exceeds their allocated hours or deliverables. A common approach: &quot;Additional hours beyond the monthly allocation will be billed at $175/hour (standard rate, no retainer discount) and invoiced at month end.&quot; Having a clear overage rate prevents awkward conversations when the client asks for &quot;just one more thing.&quot;
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">6</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Termination Notice Period</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Specify how much notice either party must give to end the retainer. <strong className="text-gray-200">30 days is standard; 60 days is common for larger retainers.</strong> This protects you from sudden cancellation and gives the client confidence that they will not be locked in indefinitely. Include a clause about what happens to prepaid fees upon termination.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Additional Clauses Worth Including</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Communication expectations</strong> &mdash; response times, channels (email, Slack, phone), meeting frequency</li>
                  <li><strong className="text-gray-200">IP ownership</strong> &mdash; who owns the work product (usually the client after payment)</li>
                  <li><strong className="text-gray-200">Confidentiality</strong> &mdash; NDA clause protecting both parties</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Review period</strong> &mdash; quarterly or biannual review of scope and pricing</li>
                  <li><strong className="text-gray-200">Force majeure</strong> &mdash; what happens if either party cannot fulfil obligations</li>
                  <li><strong className="text-gray-200">Dispute resolution</strong> &mdash; mediation before legal action</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Sample Retainer Agreement Structure</h3>
            <div className="rounded-xl bg-gray-800/50 border border-cyan-500/30 p-6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">Agreement Template</span>
              </div>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                <p>RETAINER SERVICES AGREEMENT</p>
                <p className="mt-2">Between: [Your Name / Business Name] (ABN: [XXXXXXXX])</p>
                <p>And: [Client Name / Business Name] (ABN: [XXXXXXXX])</p>
                <p className="mt-2">1. SERVICES: [Detailed description of included services]</p>
                <p>2. RETAINER FEE: $[AMOUNT] per month, due on the 1st of each month, payable within 7 days.</p>
                <p>3. ALLOCATION: [X] hours per month / [X] deliverables per month.</p>
                <p>4. UNUSED HOURS: Unused hours expire at end of calendar month (no rollover).</p>
                <p>5. OVERAGE: Additional work billed at $[RATE]/hour, invoiced at month end.</p>
                <p>6. TERM: Ongoing, commencing [DATE]. Either party may terminate with 30 days written notice.</p>
                <p>7. COMMUNICATION: Response within 24 business hours. Monthly check-in call.</p>
                <p>8. IP OWNERSHIP: All work product transfers to Client upon payment.</p>
                <p>9. CONFIDENTIALITY: Both parties agree to maintain confidentiality of proprietary information.</p>
                <p>10. PAYMENT METHOD: Bank transfer to BSB [XXX-XXX], Acc [XXXXXXXX].</p>
                <p className="mt-2">Signed: _________________ Date: _________</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Common Mistakes to Avoid</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Dangerous Omissions</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Vague scope</strong> &mdash; &quot;marketing support&quot; without specifics invites unlimited scope creep</li>
                  <li><strong className="text-gray-200">No overage policy</strong> &mdash; client exceeds hours and expects it covered for free</li>
                  <li><strong className="text-gray-200">No termination clause</strong> &mdash; either party feels trapped or ghosted</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-red-400 font-medium mb-2">Pricing Mistakes</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-gray-200">Discounting more than 15%</strong> &mdash; devalues your work and attracts price-sensitive clients</li>
                  <li><strong className="text-gray-200">No annual rate review</strong> &mdash; your retainer stagnates while costs increase</li>
                  <li><strong className="text-gray-200">Setting the retainer too low</strong> &mdash; better to have fewer well-paid retainers than many cheap ones</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Managing Retainer Clients */}
        <section id="managing-retainer-clients">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Managing Retainer Clients</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Winning a retainer client is only half the battle. The real skill is <strong className="text-white">managing the relationship so the retainer stays healthy, profitable, and long-lasting</strong>. A well-managed retainer can run for years. A poorly managed one will be cancelled within three months.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Monthly Reporting</h3>
            <p className="text-gray-300 leading-relaxed">
              Always show the client what you did and the hours or deliverables consumed. Even if the client never asks, <strong className="text-white">a monthly summary report demonstrates your value and justifies the ongoing spend</strong>. This is especially important because the person who signed the retainer may need to justify it to their manager or finance team. A simple monthly report that shows hours used, deliverables completed, results achieved, and hours remaining gives them the ammunition they need to keep approving your invoice.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Scope Management</h3>
            <p className="text-gray-300 leading-relaxed">
              The &quot;just one more thing&quot; request is the retainer killer. A client asks for something small, you do it to be helpful, and gradually the retainer scope doubles while the fee stays the same. The solution is simple: <strong className="text-white">always reference the agreement</strong>. When a request falls outside scope, respond with: &quot;Happy to help with that. It falls outside the current retainer scope, so I will quote it separately / apply it against your overage rate. Want me to proceed?&quot; This is not being difficult &mdash; it is being professional and protecting both parties.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Tracking Hours Accurately</h3>
            <p className="text-gray-300 leading-relaxed">
              If your retainer is time-based, accurate time tracking is non-negotiable. Use a dedicated time tracking tool and log hours daily &mdash; not at the end of the week from memory. <strong className="text-white">Inaccurate time tracking is the fastest way to make a retainer unprofitable</strong> because you will consistently undercount your hours and over-deliver for free. Keep a daily log and include it in your monthly report so the client can see exactly where their hours went.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">When to Renegotiate</h3>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">1</span>
                <div>
                  <p className="text-white font-medium text-sm">Scope Has Expanded</p>
                  <p className="text-gray-400 text-sm">If you consistently exceed the allocated hours or deliverables, the retainer needs to be resized. Present the data from your monthly reports showing the actual vs. agreed scope.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">2</span>
                <div>
                  <p className="text-white font-medium text-sm">Annual Rate Review</p>
                  <p className="text-gray-400 text-sm">Build an annual review into your agreement. A 5-10% annual increase is standard and accounts for inflation, growing expertise, and increased market rates.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">3</span>
                <div>
                  <p className="text-white font-medium text-sm">Increased Value Delivered</p>
                  <p className="text-gray-400 text-sm">If your work has demonstrably increased the client&apos;s revenue, reduced their costs, or created significant value beyond the original brief, a rate increase is warranted and easy to justify.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Retainer Health Signals</h3>
            <div className="grid sm:grid-cols-3 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-medium mb-2">Healthy</h4>
                <p className="text-gray-400 text-sm">Client consistently uses all or most allocated hours. Regular communication. Timely payments. Asks for additional work (overage). Provides positive feedback.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-yellow-500/20 p-5">
                <h4 className="text-yellow-400 font-medium mb-2">At Risk</h4>
                <p className="text-gray-400 text-sm">Client rarely uses allocated hours. Communication becomes sporadic. Delays in approvals or feedback. Questions about the invoice or value. Signs the budget is under review.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-medium mb-2">Needs Upsell</h4>
                <p className="text-gray-400 text-sm">Client consistently exceeds allocated hours. Requests work outside scope frequently. Growing team or business that needs more support. New projects or initiatives emerging.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Ending a Retainer Gracefully</h3>
            <p className="text-gray-300 leading-relaxed">
              Not all retainers last forever, and ending one professionally is important for your reputation. Give the agreed notice period (or more if you can), provide a <strong className="text-white">transition plan</strong> that documents everything the next person will need (passwords, processes, ongoing tasks, key contacts), issue your final invoice promptly, and offer to be available for questions during the transition. A graceful exit often leads to referrals and sometimes to the client coming back months later when they realise what they lost.
            </p>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">The 80/20 Rule for Retainer Capacity</p>
              <p className="text-gray-400 text-sm">
                Never fill more than <strong className="text-gray-200">80% of your available hours with retainer work</strong>. You need 20% buffer for overages, unexpected client emergencies, your own business admin, professional development, and the occasional project-based opportunity. If you are fully booked on retainers with no breathing room, one extra-heavy month from a single client will cascade into missed deadlines for everyone else.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Retainer Invoicing with InvoiceFlow */}
        <section id="retainer-invoicing-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Retainer Invoicing with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The beauty of retainer billing is its repeatability &mdash; the same client, the same amount, the same payment terms, every month. InvoiceFlow is built to <strong className="text-white">automate the entire retainer invoicing workflow</strong> so you spend less time on admin and more time on the work that matters.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Recurring Invoice Automation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set up a retainer invoice once &mdash; client details, retainer amount, payment terms, bank details, line item descriptions &mdash; and InvoiceFlow generates and sends it automatically on your chosen schedule. Monthly on the 1st, fortnightly on Mondays, or any custom cycle. The invoice is created, numbered, dated, and delivered to the client&apos;s email without you lifting a finger. You get a notification when it is sent and another when it is paid.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Automatic Payment Reminders</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Chasing retainer payments is awkward because you work with these clients every month. InvoiceFlow removes the awkwardness with automated, professional reminders sent at configurable intervals: a gentle nudge before the due date, a reminder on the due date, and escalating follow-ups for overdue invoices. The client sees a professional system, not a nagging freelancer. Automated reminders reduce late retainer payments by up to 30%.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Hour and Deliverable Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track retainer hours and deliverables directly in InvoiceFlow. Log time against each retainer client, see how much of their monthly allocation has been used, and generate end-of-month reports showing exactly what you delivered. This data feeds directly into your monthly report to the client, making it easy to demonstrate value and justify the retainer fee every single month.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Retainer and Project Invoices in One Dashboard</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Most freelancers have a mix of retainer clients and project clients. InvoiceFlow handles both in a single dashboard, with clear labels and filters so you can see your <strong className="text-gray-200">recurring retainer revenue</strong> separately from one-off project invoices. Get a real-time view of your total recurring monthly revenue, track retainer vs. project income ratios, and plan your capacity accordingly.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Client-Specific Payment Terms and Billing Cycles</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Different retainer clients may have different payment terms, billing cycles, and bank details. InvoiceFlow stores client-specific settings so each retainer invoice is generated with the correct terms automatically. Client A pays Net 7 on the 1st of each month. Client B pays Net 14 on the 15th. Client C pays via credit card link. All handled automatically, no manual adjustments required.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Overage Invoice Generation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When a retainer client exceeds their allocated hours, InvoiceFlow makes it easy to generate an overage invoice at the end of the month. The system shows you how many hours exceeded the allocation, calculates the overage at your specified rate, and generates a separate invoice clearly marked as &quot;Additional Services &mdash; [Month] Overage.&quot; This keeps the retainer invoice clean and makes overages transparent and easy for the client to understand.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5 mt-6">
              <p className="text-cyan-400 font-medium mb-2">The Bottom Line</p>
              <p className="text-gray-400 text-sm">
                Retainer invoicing should be <strong className="text-gray-200">the easiest part of your month</strong>, not the most tedious. InvoiceFlow automates the repetitive work &mdash; generating invoices, sending reminders, tracking hours, calculating overages &mdash; so you can focus on delivering great work for your clients. Set it up once, and the system handles the rest.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you set up and manage retainer pricing.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-cyan-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Use tool
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Guides</h2>
        <p className="text-gray-400 text-center mb-8">In-depth guides on pricing, invoicing, and freelancing in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-cyan-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read guide
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {(faqSchema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { text: string } }>).map((faq, i) => (
            <details key={i} className="group rounded-xl bg-gray-800/40 border border-gray-700/40">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-cyan-400 transition-colors">
                {faq.name}
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture />
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-sky-500/10 border border-cyan-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Build Predictable Revenue with Retainer Billing
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop chasing one-off projects. InvoiceFlow automates recurring retainer invoices, sends payment reminders, tracks hours, and handles overages &mdash; so you get paid on time every month without the manual admin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/work-capacity-planner">
              <Button variant="secondary">Plan Your Capacity</Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Free plan includes 5 invoices per month. No credit card required.
          </p>
        </div>
      </section>
    </div>
  );
}
