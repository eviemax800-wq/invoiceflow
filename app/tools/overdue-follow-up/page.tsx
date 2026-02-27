import type { Metadata } from 'next';
import Link from 'next/link';
import OverdueFollowUp from './OverdueFollowUp';
import RelatedTools from '../components/RelatedTools';

const title =
  'Free Overdue Invoice Follow-Up Generator Australia — Payment Reminder Templates | InvoiceFlow';
const description =
  'Generate professional overdue invoice follow-up emails and letters for Australian freelancers. Friendly reminders to formal demands — escalating templates for 7, 14, 30, and 60+ day overdue invoices. Includes late payment interest calculations.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'overdue invoice email template australia',
    'payment reminder template freelancer',
    'overdue invoice follow up letter',
    'late payment reminder email',
    'freelance debt collection letter',
    'invoice overdue template australia',
    'payment chasing email template',
    'freelance payment reminder',
    'overdue invoice wording',
    'unpaid invoice follow up',
    'late payment letter template',
    'accounts receivable email template',
  ],
  openGraph: {
    title: 'Overdue Invoice Follow-Up Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional overdue invoice follow-up emails and letters. Escalating templates from friendly reminders to formal demands. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/overdue-follow-up',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overdue Invoice Follow-Up Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional overdue invoice follow-up emails and letters. Escalating templates from friendly reminders to formal demands.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/overdue-follow-up',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Overdue Invoice Follow-Up Generator',
  description:
    'Generate professional overdue invoice follow-up emails and letters for Australian freelancers. Escalating templates from friendly reminders to formal demands with late payment interest calculations.',
  url: 'https://www.invoiceflow.au/tools/overdue-follow-up',
  applicationCategory: 'BusinessApplication',
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

export default function OverdueFollowUpPage() {
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

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Overdue Invoice{' '}
              <span className="gradient-text">Follow-Up Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate professional payment reminder emails and letters at every escalation
              stage. From friendly nudges to formal demands — get paid without burning bridges.
            </p>
          </div>

          {/* Generator Component */}
          <OverdueFollowUp />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: How to Chase Late Payments Without Burning Bridges */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Chase Late Payments Without Burning Bridges
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Tone matters more than you think when
                  chasing overdue invoices.</strong> Most late payments aren&apos;t malicious
                  — they&apos;re caused by cashflow issues, admin errors, or invoices simply
                  getting lost in a busy inbox. Jumping straight to aggressive language can
                  damage a relationship that might otherwise result in repeat business and
                  referrals.
                </p>
                <p>
                  The key is an escalation ladder: start soft, get progressively firmer, and
                  only bring out the heavy language when earlier attempts have been ignored.
                  Each step should be professional, specific, and give the client a clear
                  path to resolve the situation. This approach works because it treats the
                  client with respect while still protecting your right to be paid.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400 mb-1">54%</p>
                    <p className="text-sm">of Australian freelancers have experienced late payment at least once in the past year</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400 mb-1">2-3 weeks</p>
                    <p className="text-sm">average overdue period for freelance invoices — most clients pay within 21 days of a reminder</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400 mb-1">$1.1T</p>
                    <p className="text-sm">locked in overdue invoices globally — late payment is a systemic issue, not a personal one</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Why Escalation Works</p>
                  <p className="text-sm">
                    A friendly reminder sent on day 1 resolves around 60% of overdue invoices
                    — most clients genuinely forgot. A firmer follow-up at 7-14 days catches
                    another 25%. By the time you reach formal notice stage, you&apos;re dealing
                    with only 10-15% of cases. The escalation approach means you only use strong
                    language when it&apos;s truly needed, preserving relationships in the majority
                    of cases.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: The 4-Stage Escalation Framework */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                The 4-Stage Escalation Framework
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Professional debt collection follows a proven escalation model. Each stage
                  increases in formality and urgency while remaining professional. Here&apos;s
                  how the framework maps to your overdue timeline:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white font-semibold">Stage</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Timeline</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Tone</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Action</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Success Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-teal-400 font-medium">Friendly Reminder</td>
                        <td className="py-3 px-4">Day 1</td>
                        <td className="py-3 px-4">Casual, warm</td>
                        <td className="py-3 px-4">Assume oversight, offer to resend invoice</td>
                        <td className="py-3 px-4 text-emerald-400 font-semibold">~60%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-amber-400 font-medium">Firm Follow-Up</td>
                        <td className="py-3 px-4">Day 7-14</td>
                        <td className="py-3 px-4">Professional, direct</td>
                        <td className="py-3 px-4">Reference payment terms, request prompt payment</td>
                        <td className="py-3 px-4 text-emerald-400 font-semibold">~25%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-orange-400 font-medium">Formal Notice</td>
                        <td className="py-3 px-4">Day 30</td>
                        <td className="py-3 px-4">Formal, serious</td>
                        <td className="py-3 px-4">Mention late payment interest, 7-day deadline</td>
                        <td className="py-3 px-4 text-emerald-400 font-semibold">~10%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-rose-400 font-medium">Final Demand</td>
                        <td className="py-3 px-4">Day 60+</td>
                        <td className="py-3 px-4">Legal, urgent</td>
                        <td className="py-3 px-4">Mention debt collection or legal action</td>
                        <td className="py-3 px-4 text-emerald-400 font-semibold">~5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Day 1 — Friendly Reminder
                    </h4>
                    <p className="text-sm">
                      Assume it&apos;s an oversight. Keep the tone light and helpful — &ldquo;just
                      a quick reminder&rdquo; works perfectly. Offer to resend the invoice in case
                      it got lost. No mention of consequences or interest at this stage.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">02</span>
                      Day 7-14 — Firm Follow-Up
                    </h4>
                    <p className="text-sm">
                      Drop the casual tone and be direct. Reference the original payment terms
                      you agreed on. Ask for payment &ldquo;at your earliest convenience&rdquo;
                      and offer to discuss if there&apos;s an issue with the invoice or payment
                      arrangement.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-orange-400 text-sm font-bold">03</span>
                      Day 30 — Formal Notice
                    </h4>
                    <p className="text-sm">
                      Switch to formal language. Mention late payment interest if it&apos;s in
                      your contract. Set a firm 7 business day deadline. Offer a payment plan
                      as an alternative. Mention that further action may be taken if unresolved.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-rose-400 text-sm font-bold">04</span>
                      Day 60+ — Final Demand
                    </h4>
                    <p className="text-sm">
                      This is your last attempt before external action. Use &ldquo;FINAL
                      DEMAND&rdquo; in the subject line. State the total amount with interest.
                      Explicitly mention debt collection or tribunal action. Give 7 days to
                      respond.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Late Payment Interest and Penalties in Australia */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Late Payment Interest and Penalties in Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">You can charge interest on overdue invoices
                  in Australia — but only if it&apos;s agreed upfront.</strong> Unlike some
                  countries, Australia doesn&apos;t have a statutory right to charge late
                  payment interest on business-to-business invoices. The interest must be
                  specified in your original contract, terms of trade, or engagement letter
                  before work begins.
                </p>
                <p>
                  The Personal Property Securities Act (PPSA) and general contract law govern
                  payment terms between businesses. For freelancers, this means your right to
                  charge interest depends entirely on what you agreed with your client at the
                  start of the engagement.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Typical Interest Rates</h4>
                    <p className="text-sm">
                      Most freelancer contracts specify a rate of 1.5% to 2% per month on
                      overdue amounts, or alternatively 2% above the RBA cash rate. For
                      example, if the RBA cash rate is 4.35%, the late payment rate would be
                      6.35% per annum (approximately 0.53% per month). The rate must be
                      reasonable — courts may not enforce excessive rates.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">How to Calculate Interest</h4>
                    <p className="text-sm">
                      The standard formula is: Invoice Amount x Interest Rate x Days Overdue /
                      365. For example, a $5,000 invoice at 2% per month (24% p.a.) that is 30
                      days overdue: $5,000 x 0.24 x 30 / 365 = $98.63 in interest. Use
                      our{' '}
                      <Link href="/tools/late-payment-calculator" className="text-teal-400 hover:underline">
                        Late Payment Calculator
                      </Link>
                      {' '}for precise calculations.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">What You Need in Your Contract</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>The specific interest rate (percentage per month or per annum)</li>
                    <li>When interest starts accruing (e.g., &ldquo;from the due date&rdquo;)</li>
                    <li>How interest is calculated (simple interest, not compound)</li>
                    <li>Payment terms (e.g., &ldquo;Net 14&rdquo; or &ldquo;due within 30 days&rdquo;)</li>
                    <li>Any additional collection costs the client agrees to cover</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Maximum Enforceable Rates</p>
                  <p className="text-sm">
                    While there&apos;s no legislated cap for B2B contracts, Australian courts
                    consider rates above 4% per month (48% p.a.) as potentially unconscionable
                    under the Australian Consumer Law. Stick to 1.5-2% per month to stay safe.
                    If you don&apos;t currently include late payment terms in your contracts,
                    use our{' '}
                    <Link href="/tools/contract-clause-generator" className="text-teal-400 hover:underline">
                      Contract Clause Generator
                    </Link>
                    {' '}to add one.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Preventing Late Payments — Proactive Strategies */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Preventing Late Payments: Proactive Strategies
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The best overdue invoice is the one you never have to send. While you
                  can&apos;t eliminate late payments entirely, these proactive strategies
                  dramatically reduce the chances of chasing money after the work is done.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Clear Payment Terms Upfront
                    </h4>
                    <p className="text-sm">
                      State your payment terms before starting work — not just on the invoice.
                      Include them in your proposal, contract, and initial email. When clients
                      know the expectation from day one, they&apos;re far more likely to pay on
                      time. Use our{' '}
                      <Link href="/tools/payment-terms-calculator" className="text-teal-400 hover:underline">
                        Payment Terms Calculator
                      </Link>
                      {' '}to find the right terms for your business.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Deposits and Milestone Payments
                    </h4>
                    <p className="text-sm">
                      Never start a project without a deposit. A 30-50% upfront payment reduces
                      your risk and signals the client is serious. For longer projects, tie
                      payments to milestones so you&apos;re never more than one milestone ahead
                      of what you&apos;ve been paid for.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Automated Reminders
                    </h4>
                    <p className="text-sm">
                      Set up automated payment reminders 3 days before the due date, on the
                      due date, and 3 days after. Most invoicing software (including InvoiceFlow)
                      can handle this automatically. The reminder before the due date is the
                      most effective — it catches invoices before they become overdue.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Multiple Payment Methods
                    </h4>
                    <p className="text-sm">
                      Make it as easy as possible to pay you. Accept bank transfer, credit
                      card, and PayID at minimum. Every additional step or friction point
                      between the client reading the invoice and paying it increases the chance
                      of delay. Include a direct &ldquo;Pay Now&rdquo; link on every invoice.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">05</span>
                      Credit Checks for Large Projects
                    </h4>
                    <p className="text-sm">
                      For projects over $5,000, consider running a basic credit check on the
                      client&apos;s business through ASIC or a credit reporting agency. A
                      company with multiple defaults or a history of late payments is a red
                      flag. It&apos;s better to ask for full payment upfront than to chase it
                      later.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">06</span>
                      Early Payment Discounts
                    </h4>
                    <p className="text-sm">
                      Offer a small discount (2-5%) for early payment. &ldquo;Pay within 7
                      days and receive 3% off&rdquo; is a proven strategy that costs you less
                      than chasing late payments. Use our{' '}
                      <Link href="/tools/invoice-generator" className="text-teal-400 hover:underline">
                        Invoice Generator
                      </Link>
                      {' '}to create invoices with early payment discount terms built in.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Prevention is Cheaper Than Collection</p>
                  <p className="text-sm">
                    The average cost of collecting a late payment (including your time writing
                    follow-ups, making calls, and the stress) is estimated at $150-300 per
                    invoice. Compare that to the $0 cost of preventing the late payment in the
                    first place with clear terms, automated reminders, and proper client vetting.
                    Invest in your payment process upfront and you&apos;ll spend far less time
                    chasing money.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Stop chasing payments <span className="gradient-text">manually</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow automates your payment reminders, tracks overdue invoices in
              real-time, and calculates late payment interest automatically. Spend your time
              on billable work, not writing follow-up emails.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/late-payment-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Late Payment Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="overdue-follow-up" category="Invoicing & Documents" />
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
