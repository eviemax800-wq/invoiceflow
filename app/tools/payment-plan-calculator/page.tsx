import type { Metadata } from 'next';
import Link from 'next/link';
import PaymentPlanCalculator from './PaymentPlanCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title = 'Payment Plan Calculator Australia | Freelance Installment Calculator — InvoiceFlow';
const description =
  'Free payment plan calculator for Australian freelancers. Split project totals into structured installment schedules with deposits, GST, and late payment interest. Create payment plan templates instantly.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'payment plan calculator',
    'freelance installment calculator',
    'project payment schedule calculator',
    'payment plan template australia',
    'installment payment calculator',
    'deposit calculator freelance',
  ],
  openGraph: {
    title: 'Payment Plan Calculator — Free Tool | InvoiceFlow',
    description:
      'Split project totals into structured installment schedules with deposits, GST, and due dates. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/payment-plan-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payment Plan Calculator — Free Tool | InvoiceFlow',
    description:
      'Create structured payment plans for large projects. Split totals into installments with deposits, GST, and calculated due dates.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/payment-plan-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Payment Plan Calculator Australia',
  description:
    'Create structured payment plans for freelance projects. Split project totals into installments with deposits, GST, late payment interest, and calculated due dates.',
  url: 'https://www.invoiceflow.au/tools/payment-plan-calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'AUD',
  },
  creator: {
    '@type': 'Organization',
    name: 'InvoiceFlow',
    url: 'https://www.invoiceflow.au',
  },
};

export default function PaymentPlanCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="page-bg min-h-screen">
        {/* Header */}
        <header className="border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IF</span>
              </div>
              <span className="text-white font-semibold text-lg heading-font">InvoiceFlow</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link
                href="/tools"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Free Tools
              </Link>
              <Link
                href="/pricing"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-teal-400 hover:to-blue-400 transition-all"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Payment <span className="gradient-text">Plan Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Split large project totals into structured installment schedules with deposits,
              calculated due dates, and optional GST — ready to share with your client.
            </p>
          </div>

          {/* Calculator */}
          <PaymentPlanCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* When to Offer Payment Plans */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                When to Offer Payment Plans
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Not every project needs a payment plan — but for larger engagements, offering
                  structured installments can be the difference between winning and losing the deal.
                  Here are the key scenarios where payment plans make sense:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Projects Over $5,000</h4>
                    <p className="text-sm">
                      Large project values can be a cash flow shock for clients, especially small
                      businesses and startups. Splitting a $15,000 website build into a $4,500
                      deposit plus three monthly installments makes the commitment feel manageable
                      — and you still get paid in full before the project wraps.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">First-Time Clients</h4>
                    <p className="text-sm">
                      When you haven&apos;t built trust yet, a deposit-plus-installments structure
                      protects both parties. The client isn&apos;t paying the full amount upfront to
                      someone they&apos;ve never worked with, and you&apos;re not doing thousands of
                      dollars of work with no guarantee of payment. A 30% deposit is standard.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Long-Timeline Projects</h4>
                    <p className="text-sm">
                      Any project spanning more than 6-8 weeks should have interim payments. Waiting
                      3 months for a single lump sum puts enormous cash flow pressure on you as the
                      freelancer. Monthly installments aligned to deliverables keep money flowing and
                      the client engaged.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Client Budget Constraints</h4>
                    <p className="text-sm">
                      Some clients have the budget but not the upfront cash. Offering a payment plan
                      lets them spread costs across multiple budget cycles. This is especially common
                      with government departments, non-profits, and early-stage startups with monthly
                      burn rates to manage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Structure Payment Plans */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Structure Payment Plans
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A well-structured payment plan protects your cash flow while giving the client
                  flexibility. The key principles are simple: secure a deposit, tie payments to
                  deliverables, and include clear consequences for late payment.
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Always take a deposit.</strong>{' '}
                    A 20-30% deposit before work begins is industry standard for freelancers. It
                    covers your initial costs, demonstrates client commitment, and gives you a
                    financial buffer if the project stalls. For projects under $3,000, you may even
                    request 50% upfront.
                  </li>
                  <li>
                    <strong className="text-white">Tie installments to deliverables, not just dates.</strong>{' '}
                    The strongest payment plans link each installment to a specific milestone or
                    deliverable — wireframes approved, first draft delivered, testing complete. This
                    gives both parties clarity and reduces disputes. Use the{' '}
                    <Link href="/tools/payment-terms-calculator" className="text-teal-400 hover:underline">
                      Payment Terms Calculator
                    </Link>{' '}
                    to model milestone-based schedules.
                  </li>
                  <li>
                    <strong className="text-white">Keep the final payment small.</strong>{' '}
                    Aim for no more than 20-30% as the final installment. The bigger the final
                    payment, the more leverage the client has to delay or negotiate. If 70-80% is
                    already collected by the time you deliver, the project economics are protected
                    regardless of final payment timing.
                  </li>
                  <li>
                    <strong className="text-white">Include late payment terms in your contract.</strong>{' '}
                    State clearly what happens when an installment is missed: interest charges (8-12%
                    p.a. is reasonable), work pauses after 7 days overdue, and the right to
                    terminate after 14 days. Use the{' '}
                    <Link href="/tools/late-payment-calculator" className="text-teal-400 hover:underline">
                      Late Payment Interest Calculator
                    </Link>{' '}
                    to model the cost of delays.
                  </li>
                  <li>
                    <strong className="text-white">Put it in writing.</strong>{' '}
                    A payment plan should be a formal schedule attached to your contract or
                    statement of work — not a verbal agreement. Include dates, amounts, descriptions,
                    and terms. The copy-to-clipboard feature above gives you a ready-made schedule
                    to paste into your proposals.
                  </li>
                </ol>
              </div>
            </div>

            {/* Payment Plan vs Milestone Payments */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Payment Plan vs Milestone Payments
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Both structures split a project into multiple payments, but they work differently.
                  Understanding when to use each approach will help you choose the right model for
                  each client and project.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Aspect</th>
                        <th className="text-left py-3 px-4 text-teal-400 font-semibold">Payment Plan</th>
                        <th className="text-left py-3 px-4 text-blue-400 font-semibold">Milestone Payments</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Trigger</td>
                        <td className="py-3 px-4">Fixed calendar dates (e.g. monthly)</td>
                        <td className="py-3 px-4">Completion of specific deliverables</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Predictability</td>
                        <td className="py-3 px-4">Highly predictable — you know exact dates and amounts in advance</td>
                        <td className="py-3 px-4">Variable — depends on project pace and approval timelines</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Best for</td>
                        <td className="py-3 px-4">Retainers, ongoing services, clients who prefer regular billing</td>
                        <td className="py-3 px-4">Fixed-scope projects with clear phases and deliverables</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Risk</td>
                        <td className="py-3 px-4">Client may delay work but payments continue on schedule</td>
                        <td className="py-3 px-4">Slow client approvals can delay your payments indefinitely</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Admin overhead</td>
                        <td className="py-3 px-4">Low — automate recurring invoices on fixed dates</td>
                        <td className="py-3 px-4">Higher — must track deliverables and trigger invoices manually</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-4">
                  Many freelancers use a hybrid approach: a deposit on signing, milestone payments
                  tied to key deliverables, and a final payment on completion. Use the calculator
                  above to model any combination that works for your project, then generate your
                  invoices automatically with{' '}
                  <Link href="/signup" className="text-teal-400 hover:underline">
                    InvoiceFlow
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to <span className="gradient-text">automate your payment plans?</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow generates installment invoices automatically, sends payment reminders
              before each due date, and tracks every payment so you always know where you stand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/invoice-generator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try the Invoice Template Generator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="payment-plan-calculator" category="Financial Planning" />
      </main>

        <footer className="border-t border-white/10 mt-20 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne.</p>
            <div className="flex gap-6">
              <Link href="/tools" className="hover:text-white transition-colors">
                Free Tools
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
