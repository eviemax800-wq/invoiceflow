import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Late Payment Interest: Complete Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is late payment interest? Learn your legal rights to charge interest on overdue invoices in Australia, how to calculate it, what rates are reasonable, and best practices for freelancers. Includes ATO GIC rate benchmarks, worked examples, and contract clause wording.',
  keywords: [
    'late payment interest rate australia',
    'overdue invoice interest',
    'late payment penalty freelancer',
    'interest on overdue invoices',
    'late payment interest calculator',
    'ato general interest charge',
    'late payment interest clause',
    'overdue invoice interest rate australia',
    'charging interest on late invoices',
    'freelancer late payment rights australia',
  ],
  alternates: { canonical: '/glossary/late-payment-interest' },
  openGraph: {
    title: 'Late Payment Interest: Complete Guide for Australian Freelancers — InvoiceFlow',
    description:
      'Everything you need to know about charging interest on overdue invoices in Australia: legal rights, ATO GIC benchmarks, calculation formulas, reasonable rates, contract wording, and best practices for freelancers.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/late-payment-interest',
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
    { '@type': 'ListItem', position: 3, name: 'Late Payment Interest', item: `${BASE_URL}/glossary/late-payment-interest` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can freelancers legally charge interest on overdue invoices in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, freelancers can legally charge interest on overdue invoices in Australia, but only if the right to charge interest is explicitly stated in a contract, engagement letter, or terms of trade that the client has agreed to before the work begins. There is no automatic statutory right to charge interest on commercial invoices in Australia (unlike some European countries). Your contract or invoice must clearly specify the interest rate, when it starts accruing (typically from the due date), and how it is calculated. Without this prior agreement, you cannot retroactively impose interest charges. For this reason, every freelancer should include a late payment interest clause in their standard terms and reference it on every invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a reasonable interest rate for overdue invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A reasonable interest rate for overdue invoices in Australia is generally between 8% and 12% per annum. A widely accepted benchmark is the ATO General Interest Charge (GIC) rate, which is approximately 11.36% per annum for 2025-26 (calculated as the 90-day bank bill rate plus 7%). Most freelancers set their late payment interest at 10-12% per annum, which is close to the GIC rate and is generally considered fair and enforceable by Australian courts. Rates significantly above 15-20% per annum risk being considered excessive or unconscionable, which could make them unenforceable. The key is that the rate should represent genuine compensation for being deprived of the money, not a punitive penalty.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to warn clients before charging late payment interest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, best practice is to notify clients before interest begins accruing. While technically interest can start accruing from the due date if your contract specifies this, sending a reminder before or on the due date is both professionally courteous and practically effective. Most freelancers send a payment reminder 3-5 days before the invoice is due, a follow-up on the due date, and then an overdue notice that explicitly states interest is now accruing (with the daily or monthly amount). This approach preserves client relationships, gives the client a chance to resolve any payment issues, and creates a clear paper trail showing you acted reasonably — which strengthens your position if you ever need to pursue the debt formally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I charge interest if I didn\u0027t include it in my contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally, no. In Australia, there is no automatic right to charge interest on a commercial debt unless it was agreed upon in advance. If your contract, terms of engagement, or invoice payment terms do not include a late payment interest clause, you cannot retrospectively apply interest charges. The client must have agreed to the interest terms before the debt arose. However, if you take the matter to a court or tribunal, the court itself may award interest on the unpaid amount under its own powers (for example, under the Civil Procedure Act in NSW or equivalent legislation in other states). The court-awarded rate is typically lower than what you might charge commercially. This is why it is critical to include an interest clause in every contract and on every invoice from the very start of your business.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate interest on an overdue invoice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard formula for calculating simple interest on an overdue invoice is: Interest = Principal Amount x (Annual Interest Rate / 365) x Number of Days Overdue. For example, if a $5,000 invoice is 45 days overdue at an interest rate of 10% per annum, the calculation is: $5,000 x (0.10 / 365) x 45 = $61.64. Interest accrues from the day after the invoice due date (not the invoice date) and continues until the full amount is paid. Simple interest is the standard for commercial invoices in Australia — compound interest (interest on interest) is uncommon and harder to enforce unless specifically agreed to. Always state on your invoice that interest is calculated as simple interest per annum to avoid any ambiguity.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-late-payment-interest', label: '1. What Is Late Payment Interest?' },
  { id: 'legal-right-to-charge', label: '2. Your Legal Right to Charge Interest' },
  { id: 'how-to-calculate', label: '3. How to Calculate Late Payment Interest' },
  { id: 'setting-the-right-rate', label: '4. Setting the Right Interest Rate' },
  { id: 'best-practices', label: '5. Best Practices for Charging Interest' },
  { id: 'invoiceflow-interest', label: '6. Charging Interest with InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/late-payment-calculator',
    name: 'Late Payment Calculator',
    description: 'Calculate interest on overdue invoices instantly using ATO GIC rates or your own custom rate.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/invoice-generator',
    name: 'Invoice Generator',
    description: 'Create professional invoices with built-in late payment interest clauses and clear payment terms.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '/tools/overdue-invoice-follow-up',
    name: 'Overdue Invoice Follow-Up Generator',
    description: 'Generate professional follow-up emails for overdue invoices with interest calculations included.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    href: '/tools/letter-of-demand',
    name: 'Letter of Demand Generator',
    description: 'Create a formal letter of demand with accrued interest totals and legal escalation language.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/getting-paid-faster',
    name: 'Getting Paid Faster',
    description: 'Proven strategies to reduce payment delays, chase overdue invoices, and keep cash flowing into your business.',
  },
  {
    href: '/guides/invoicing-101',
    name: 'Invoicing 101',
    description: 'Everything you need to know about creating compliant invoices that get paid on time in Australia.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Your Freelance Rates',
    description: 'How to calculate profitable rates that cover tax, super, business costs, and account for payment delays.',
  },
];

export default function LatePaymentInterestGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Late Payment Interest</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Cash Flow &amp; Payments
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Late Payment Interest{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Explained for Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Late payment interest is the additional charge applied to overdue invoices as compensation for delayed payment. This guide covers your legal rights in Australia, how to calculate interest, what rates are reasonable, and exactly how to implement interest clauses so you get paid faster &mdash; without damaging client relationships.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">~11%</span>
              <div>
                <p className="text-white font-medium text-sm">ATO GIC Rate</p>
                <p className="text-gray-400 text-sm">The ATO General Interest Charge rate is ~11.36% pa for 2025-26 &mdash; the benchmark for late payment interest</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">23d</span>
              <div>
                <p className="text-white font-medium text-sm">Average Late Payment in AU</p>
                <p className="text-gray-400 text-sm">Australian invoices are paid an average of 23 days past the agreed due date</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">$26B</span>
              <div>
                <p className="text-white font-medium text-sm">Total Late Payments AU</p>
                <p className="text-gray-400 text-sm">Over $26 billion in overdue invoices outstanding across Australian small businesses at any time</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">15-20%</span>
              <div>
                <p className="text-white font-medium text-sm">Payment Improvement</p>
                <p className="text-gray-400 text-sm">Clients pay 15-20% faster when a late payment interest clause is stated &mdash; even when not enforced</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-amber-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Late Payment Interest? */}
        <section id="what-is-late-payment-interest">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Late Payment Interest?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Late payment interest is an <strong className="text-white">additional charge applied to overdue invoices as compensation for the delayed payment of money owed</strong>. It is not a fine or a punishment &mdash; it is compensation for being deprived of the use of your money for a period of time. When a client pays late, you lose the ability to use that money for business expenses, investments, or simply earning interest in your own bank account. Late payment interest compensates you for that loss.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This distinction between <strong className="text-white">compensation and penalty</strong> is critical under Australian law. Courts will generally uphold an interest charge that represents a genuine pre-estimate of the loss you suffer from late payment. However, a charge designed primarily to punish the debtor &mdash; rather than compensate you &mdash; may be struck down as an unenforceable penalty. This is why the rate you set and the language you use in your contracts matters enormously.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Late payment interest is common in commercial transactions across Australia. The ATO itself charges the <strong className="text-white">General Interest Charge (GIC)</strong> on overdue tax debts at approximately 11.36% per annum (for the 2025-26 financial year). The GIC rate is calculated each quarter as the 90-day bank accepted bill rate plus 7 percentage points, and serves as a widely accepted benchmark for commercial interest on overdue amounts.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-2">Interest (Compensation)</h4>
                <p className="text-gray-400 text-sm">A reasonable charge that compensates you for the time value of money &mdash; the lost opportunity to use or invest those funds. Generally enforceable if agreed in advance and set at a reasonable rate.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-2">Penalty (Punishment)</h4>
                <p className="text-gray-400 text-sm">An excessive charge designed to punish the debtor rather than compensate the creditor. May be unenforceable under Australian common law and the Australian Consumer Law if deemed unconscionable.</p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Why This Matters for Freelancers</p>
              <p className="text-gray-400 text-sm">
                Australian freelancers are owed an estimated share of the <strong className="text-gray-200">$26 billion in outstanding late payments</strong> to small businesses. Every day a client delays payment is a day you are effectively providing an interest-free loan. Late payment interest clauses serve two purposes: they <strong className="text-gray-200">compensate you when clients do pay late</strong>, and more importantly, they <strong className="text-gray-200">motivate clients to pay on time</strong> in the first place. Research shows that simply stating an interest clause on invoices reduces average payment times by 15-20%, even when the interest is never actually charged.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Your Legal Right to Charge Interest in Australia */}
        <section id="legal-right-to-charge">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Your Legal Right to Charge Interest in Australia</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Unlike some European countries (such as the UK, which has statutory interest under the Late Payment of Commercial Debts Act), Australia has <strong className="text-white">no automatic statutory right to charge interest on a commercial invoice</strong>. Your right to charge interest must be established through a contractual agreement between you and your client.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This means the interest clause must appear in a <strong className="text-white">contract, terms of engagement, or terms of trade that the client has accepted</strong> before the debt arises. Simply adding an interest clause to an invoice after the fact is weaker &mdash; the client could argue they never agreed to it. Best practice is to include the clause in your initial contract or engagement letter, and then reference it on every invoice as a reminder.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">How to Include Interest in Your Contracts</h3>
            <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-6 mt-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">Sample Contract Clause</span>
              </div>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm text-gray-300 leading-relaxed font-mono">
                <p>LATE PAYMENT</p>
                <p className="mt-2">All invoices are due within [14/30] days of the invoice date. If payment is not received by the due date, interest will accrue on the outstanding amount at a rate of [10/12]% per annum, calculated daily from the due date until the date of payment in full.</p>
                <p className="mt-2">The Client agrees that this interest charge represents a genuine pre-estimate of the loss suffered by [Your Name / Business Name] as a result of late payment, and is not a penalty.</p>
                <p className="mt-2">[Your Name / Business Name] reserves the right to suspend further work until all outstanding amounts, including accrued interest, are paid in full.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Key Legal Considerations</h3>
            <div className="space-y-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">B2B</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Business-to-Business (B2B)</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  In B2B transactions (which covers most freelance work), you have broad freedom to set interest terms as long as they are agreed in advance and the rate is reasonable. The <strong className="text-gray-200">Australian Consumer Law (ACL) unfair contract terms provisions</strong> apply to standard form contracts with small businesses (fewer than 100 employees or under $10M turnover), so your interest clause must not be unfair or unconscionable. A rate close to the ATO GIC (~11.36% pa) is generally safe.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">B2C</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Business-to-Consumer (B2C)</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you are invoicing individual consumers (not businesses), additional protections apply under the <strong className="text-gray-200">National Consumer Credit Protection Act 2009</strong> and state-level consumer credit laws. Charging interest to consumers triggers credit licensing obligations in some circumstances. Most freelancers work B2B, but if you serve individuals directly, get legal advice on your interest terms.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">PPSA</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">PPSA Considerations</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The <strong className="text-gray-200">Personal Property Securities Act 2009 (PPSA)</strong> is relevant if you retain ownership of work product or IP until payment is received. Registering your interest on the PPSR can strengthen your position in recovering debts, especially if the client becomes insolvent. While primarily used for goods and equipment, freelancers who license IP can also benefit from PPSR registration for high-value engagements.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The Payment Times Reporting Act 2020</h3>
            <p className="text-gray-300 leading-relaxed">
              Under the <strong className="text-white">Payment Times Reporting Act 2020</strong>, large businesses and government enterprises (with annual income over $100 million) are required to publicly report their payment times to small business suppliers. This transparency measure was designed to pressure large companies into paying small businesses faster. If your client is a large corporate, their payment times are publicly available on the <strong className="text-white">Payment Times Reporting Register</strong> &mdash; you can check how long they typically take to pay before agreeing to work with them.
            </p>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">When You CAN&apos;T Charge Interest</p>
              <p className="text-gray-400 text-sm">
                You cannot charge late payment interest if: (1) there is no prior agreement or contract clause authorising it, (2) the rate is so high that a court would consider it an unenforceable penalty, (3) the client is a consumer and you do not hold the appropriate credit licence, or (4) the invoice itself is disputed and the dispute is genuine. Always ensure your <strong className="text-gray-200">contract is signed before work begins</strong> and that your interest clause is clear, reasonable, and not buried in fine print.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: How to Calculate Late Payment Interest */}
        <section id="how-to-calculate">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">How to Calculate Late Payment Interest</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The standard formula for calculating simple interest on an overdue invoice is straightforward. Interest begins accruing from the <strong className="text-white">day after the invoice due date</strong> (not the invoice date), and continues until the full amount is paid.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-amber-500/30 p-6 mt-6">
              <h4 className="text-lg font-semibold text-white mb-3">The Formula</h4>
              <div className="rounded-lg bg-gray-900/60 p-4 text-sm font-mono text-amber-300 text-center">
                Interest = Principal &times; (Annual Rate / 365) &times; Days Overdue
              </div>
              <p className="text-gray-400 text-sm mt-3">
                Where <strong className="text-gray-200">Principal</strong> is the unpaid invoice amount, <strong className="text-gray-200">Annual Rate</strong> is the agreed interest rate as a decimal (e.g. 10% = 0.10), and <strong className="text-gray-200">Days Overdue</strong> is the number of calendar days past the due date.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Worked Examples</h3>
            <p className="text-gray-300 leading-relaxed">
              Let&apos;s calculate interest on a <strong className="text-white">$5,000 invoice</strong> at three common rates:
            </p>

            <div className="space-y-3 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">At 8% pa</span>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-3 text-sm font-mono text-gray-300">
                  30 days: $5,000 &times; (0.08 / 365) &times; 30 = <span className="text-amber-400">$32.88</span>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">At 10% pa</span>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-3 text-sm font-mono text-gray-300">
                  30 days: $5,000 &times; (0.10 / 365) &times; 30 = <span className="text-amber-400">$41.10</span>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">At 11.36% pa (ATO GIC)</span>
                </div>
                <div className="rounded-lg bg-gray-900/60 p-3 text-sm font-mono text-gray-300">
                  30 days: $5,000 &times; (0.1136 / 365) &times; 30 = <span className="text-amber-400">$46.68</span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Interest Accrued on a $5,000 Invoice Over Time</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Days Overdue</th>
                      <th className="text-right text-sm font-medium text-amber-400 px-6 py-4">8% pa</th>
                      <th className="text-right text-sm font-medium text-amber-400 px-6 py-4">10% pa</th>
                      <th className="text-right text-sm font-medium text-orange-400 px-6 py-4">11.36% pa (GIC)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">30 days</td>
                      <td className="px-6 py-3 text-gray-400 text-sm text-right">$32.88</td>
                      <td className="px-6 py-3 text-gray-400 text-sm text-right">$41.10</td>
                      <td className="px-6 py-3 text-amber-400 text-sm text-right font-medium">$46.68</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">60 days</td>
                      <td className="px-6 py-3 text-gray-400 text-sm text-right">$65.75</td>
                      <td className="px-6 py-3 text-gray-400 text-sm text-right">$82.19</td>
                      <td className="px-6 py-3 text-amber-400 text-sm text-right font-medium">$93.37</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">90 days</td>
                      <td className="px-6 py-3 text-gray-400 text-sm text-right">$98.63</td>
                      <td className="px-6 py-3 text-gray-400 text-sm text-right">$123.29</td>
                      <td className="px-6 py-3 text-amber-400 text-sm text-right font-medium">$140.05</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">120 days</td>
                      <td className="px-6 py-3 text-gray-400 text-sm text-right">$131.51</td>
                      <td className="px-6 py-3 text-gray-400 text-sm text-right">$164.38</td>
                      <td className="px-6 py-3 text-amber-400 text-sm text-right font-medium">$186.74</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">180 days</td>
                      <td className="px-6 py-3 text-gray-400 text-sm text-right">$197.26</td>
                      <td className="px-6 py-3 text-gray-400 text-sm text-right">$246.58</td>
                      <td className="px-6 py-3 text-amber-400 text-sm text-right font-medium">$280.11</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Simple vs Compound Interest</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <h4 className="text-amber-400 font-semibold mb-2">Simple Interest (Standard)</h4>
                <p className="text-gray-400 text-sm">Interest is calculated only on the original principal amount. This is the <strong className="text-gray-200">standard for commercial invoices</strong> in Australia and what most courts will expect. The formula above calculates simple interest.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-gray-300 font-semibold mb-2">Compound Interest (Rare)</h4>
                <p className="text-gray-400 text-sm">Interest is calculated on the principal plus any previously accrued interest. Compound interest is uncommon in commercial invoice terms and harder to enforce. The ATO GIC uses daily compounding, but this is unusual for private contracts. Stick with simple interest unless you have specific legal advice.</p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">When Does Interest Start?</p>
              <p className="text-gray-400 text-sm">
                Interest starts accruing from the <strong className="text-gray-200">day after the invoice due date</strong>, not from the invoice date itself. If your invoice is dated 1 March with Net 14 terms, the due date is 15 March, and interest begins accruing from 16 March. This is an important distinction &mdash; your contract or invoice should clearly state &quot;interest accrues from the due date&quot; to avoid any ambiguity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Setting the Right Interest Rate */}
        <section id="setting-the-right-rate">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Setting the Right Interest Rate</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Choosing the right interest rate is a balancing act. Too low, and it provides no incentive for clients to pay on time. Too high, and it may be deemed an unenforceable penalty by a court &mdash; or simply scare off potential clients. The goal is a rate that is <strong className="text-white">reasonable, enforceable, and high enough to motivate timely payment</strong>.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Interest Rate Comparison</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800/80">
                      <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Rate Benchmark</th>
                      <th className="text-left text-sm font-medium text-amber-400 px-6 py-4">Rate (pa)</th>
                      <th className="text-left text-sm font-medium text-gray-400 px-6 py-4">Context</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">RBA Cash Rate</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">4.35%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">The baseline rate for the Australian economy &mdash; too low for invoice interest</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Common Contract (Low)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">8%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Conservative rate, common in professional services contracts</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-white text-sm font-medium">Recommended for Freelancers</td>
                      <td className="px-6 py-3 text-amber-400 text-sm font-medium">10-12%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Close to the GIC rate, widely considered fair and enforceable</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">ATO GIC Rate (2025-26)</td>
                      <td className="px-6 py-3 text-amber-400 text-sm font-medium">~11.36%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">The rate the ATO charges on overdue tax &mdash; the gold standard benchmark</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Common Contract (High)</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">15%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Upper end of enforceable range &mdash; may need justification</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Credit Card Rate</td>
                      <td className="px-6 py-3 text-red-400 text-sm">~20%</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">For reference only &mdash; do not use as a commercial invoice rate</td>
                    </tr>
                    <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-3 text-gray-300 text-sm font-medium">Potentially Unconscionable</td>
                      <td className="px-6 py-3 text-red-400 text-sm">20%+</td>
                      <td className="px-6 py-3 text-gray-400 text-sm">Courts may consider these rates a penalty &mdash; risk of being unenforceable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">What Courts Consider &quot;Unconscionable&quot;</h3>
            <p className="text-gray-300 leading-relaxed">
              Australian courts apply the <strong className="text-white">penalty doctrine</strong> to assess whether a contractual interest rate is enforceable. A charge will be upheld if it is a genuine pre-estimate of the loss suffered by the creditor. It may be struck down if it is <strong className="text-white">extravagant, exorbitant, or unconscionable</strong> in relation to the greatest conceivable loss.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In practice, rates up to about <strong className="text-white">15% per annum</strong> are generally safe for B2B commercial transactions. Rates above 20% per annum are increasingly risky. Rates expressed as monthly percentages that translate to very high annual rates (e.g. &quot;5% per month&quot; = 60% pa) are highly likely to be challenged. Always express your rate as a <strong className="text-white">per annum figure</strong> &mdash; it is more transparent and what courts expect.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Industry Standards by Profession</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-amber-400 font-medium mb-3">Creative &amp; Digital Freelancers</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Web designers &amp; developers: 10-12% pa</li>
                  <li>Graphic designers: 8-10% pa</li>
                  <li>Copywriters &amp; content creators: 10% pa</li>
                  <li>Photographers &amp; videographers: 10-12% pa</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-orange-400 font-medium mb-3">Professional &amp; Consulting</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Management consultants: 10-15% pa</li>
                  <li>IT consultants &amp; contractors: 10-12% pa</li>
                  <li>Marketing consultants: 10% pa</li>
                  <li>Legal &amp; accounting (reference): GIC rate</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">Our Recommendation</p>
              <p className="text-gray-400 text-sm">
                For most Australian freelancers, <strong className="text-gray-200">10-12% per annum</strong> is the sweet spot. It is close enough to the ATO GIC rate to be clearly defensible as a genuine pre-estimate of loss, high enough to motivate clients to pay on time, and professional enough that it will not raise eyebrows in a contract negotiation. If you want to keep it simple, state &quot;interest at the prevailing ATO General Interest Charge rate&quot; &mdash; this automatically adjusts each quarter and carries the authority of the ATO benchmark.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Best Practices for Charging Late Payment Interest */}
        <section id="best-practices">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Best Practices for Charging Late Payment Interest</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Having the legal right to charge interest is one thing &mdash; implementing it effectively without damaging client relationships is another. Here are eight strategies that Australian freelancers use to make late payment interest work in practice:
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Always State It in Your Contract First</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The interest clause must be in your <strong className="text-gray-200">contract, terms of engagement, or terms of trade</strong> that the client signs or accepts before work begins. This is the foundation of your legal right to charge interest. Without it, everything else falls apart. Make it a standard clause in every engagement &mdash; not something you add only for &quot;difficult&quot; clients.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Include It on Every Invoice</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Add a clear statement to every invoice, such as: <strong className="text-gray-200">&quot;Interest of 10% pa applies to amounts outstanding beyond the due date.&quot;</strong> This serves as a constant reminder of the terms the client agreed to and reinforces the expectation of timely payment. Even if you never actually charge interest, the visible clause acts as a powerful motivator.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Send a Payment Reminder Before the Due Date</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Send a friendly reminder <strong className="text-gray-200">3-5 days before the due date</strong>. This gives the client time to process the payment and avoids the situation where they simply forgot. A pre-due-date reminder is not about chasing &mdash; it is about providing good service and removing friction. Many late payments are caused by administrative delays, not deliberate avoidance.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Start Interest from Day 1 Overdue</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your contract should specify that interest accrues from the <strong className="text-gray-200">day after the due date</strong>. Do not give grace periods in your terms (even if you choose not to enforce immediately). Having the right to charge from day 1 gives you maximum flexibility &mdash; you can always choose to waive interest as a goodwill gesture, but you cannot retroactively add a right that does not exist.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Send an Interest Notice with the Calculation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When an invoice becomes significantly overdue (typically 14-30 days past due), send a formal notice that <strong className="text-gray-200">shows the interest calculation</strong>: the original amount, the interest rate, the number of days overdue, and the total now owing. Seeing the actual dollar amount of interest accruing creates urgency. Be factual and professional &mdash; not emotional or threatening.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Be Willing to Waive for Good Clients</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A good client who is 5 days late once in two years does not need to be hit with an interest charge. <strong className="text-gray-200">Waiving interest for valued, reliable clients</strong> who have a rare late payment is good business sense. The interest clause is there for chronic late payers and as a deterrent &mdash; not to penalise every minor delay. Use it as a tool, not a weapon.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">7</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Use It as Motivation, Not Punishment</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Frame the interest clause as <strong className="text-gray-200">standard business practice, not a threat</strong>. In your contract, present it matter-of-factly alongside other terms. When you do need to charge interest, present it as an automatic consequence of the agreed terms, not a personal decision to punish. &quot;As per our agreement, interest of $X has accrued on the outstanding balance&quot; is professional. &quot;I&apos;m charging you extra for paying late&quot; is not.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">8</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Document Everything</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Keep records of every invoice sent, every reminder, every communication about payment, and every interest notice. If you ever need to pursue the debt through a tribunal or court, this <strong className="text-gray-200">paper trail demonstrates you acted reasonably</strong> and gave the client every opportunity to pay. Courts look favourably on creditors who followed a clear, documented process.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">The Psychological Impact</p>
              <p className="text-gray-400 text-sm">
                Research into payment behaviour consistently shows that <strong className="text-gray-200">invoices with a stated interest clause are paid 15-20% faster</strong> than those without &mdash; even when the interest is never actually enforced. The mere presence of the clause signals professionalism and sets a clear expectation. Many freelancers report that after adding interest clauses to their contracts and invoices, chronic late payers suddenly started paying on time. The clause acts as a psychological anchor that reframes late payment from &quot;no big deal&quot; to &quot;this has consequences.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Charging Interest with InvoiceFlow */}
        <section id="invoiceflow-interest">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Charging Interest with InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Manually calculating interest, sending notices, and tracking overdue invoices is tedious and error-prone. InvoiceFlow automates the entire late payment interest workflow &mdash; from <strong className="text-white">including the clause on your invoices to calculating and communicating interest charges</strong> when invoices become overdue.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM6 3v.75M17.25 3v.75M3 16.5V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v10.5m-18 0h18" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Auto-Calculate Interest</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Set your interest rate once (or use the ATO GIC rate), and InvoiceFlow automatically calculates accrued interest on every overdue invoice, updated daily. No spreadsheets, no manual maths &mdash; the system tracks days overdue and applies the formula automatically.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Interest Notices</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When an invoice passes the overdue threshold you set, InvoiceFlow generates a professional interest notice showing the original amount, interest rate, days overdue, calculated interest, and total now owing. Send it with one click or let the system send it automatically.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Payment Reminders with Interest</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automated payment reminders include the accrued interest amount, showing clients exactly how much extra they owe for each day of delay. This creates natural urgency without requiring confrontational manual follow-ups from you.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Late Fee Settings</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Configure your interest rate, grace period (if any), notification thresholds, and whether interest is applied automatically or manually. Set different rates for different clients or use a global default. Full control over when and how interest is communicated and charged.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Invoice Templates with Interest Clause</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every InvoiceFlow invoice template includes a customisable late payment interest clause in the payment terms section. The clause is pre-written with your chosen rate and automatically appears on every invoice you send &mdash; ensuring you never forget to include it.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-amber-500/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Interest Reporting</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track total interest accrued across all overdue invoices, see which clients owe the most in interest charges, and generate reports for your records or accountant. This data also helps you identify chronic late payers so you can adjust your terms or require deposits for future work.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mt-6">
              <p className="text-amber-400 font-medium mb-2">The Bottom Line</p>
              <p className="text-gray-400 text-sm">
                Late payment interest should be <strong className="text-gray-200">systematic, not confrontational</strong>. InvoiceFlow removes the awkwardness by making interest charges an automated part of your invoicing process. The system handles the calculations, the notifications, and the record-keeping &mdash; you just set your rate and let the software enforce your terms professionally and consistently.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you manage late payments and protect your cash flow.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-amber-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-amber-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on getting paid, invoicing, and pricing for Australian freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-amber-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-amber-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Losing Money on Late Payments
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers automate late payment interest, send professional reminders, and get paid faster. Set your rate once &mdash; the system handles the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/late-payment-calculator">
              <Button variant="secondary">Try the Late Payment Calculator</Button>
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
