import type { Metadata } from 'next';
import Link from 'next/link';
import LetterOfDemand from './LetterOfDemand';

const title =
  'Free Letter of Demand Generator Australia — Formal Payment Demand Template | InvoiceFlow';
const description =
  'Generate a professional letter of demand for unpaid invoices. Australian freelancers — create formal payment demand letters with interest calculations, response deadlines, and legal next steps. Free, no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'letter of demand template australia',
    'letter of demand freelancer',
    'formal demand for payment template',
    'letter of demand sole trader',
    'unpaid invoice demand letter',
    'debt recovery letter template australia',
    'letter of demand before court',
    'payment demand letter free',
    'freelance debt collection letter',
    'letter of demand VCAT',
    'small claims demand letter australia',
    'formal payment notice template',
  ],
  openGraph: {
    title: 'Letter of Demand Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional letters of demand for unpaid invoices. Formal payment demand templates for Australian freelancers. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/letter-of-demand',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letter of Demand Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional letters of demand for unpaid invoices. Formal payment demand templates for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/letter-of-demand',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Letter of Demand Generator',
  description:
    'Generate professional letters of demand for unpaid invoices. Formal payment demand templates for Australian freelancers and sole traders with interest calculations and response deadlines.',
  url: 'https://www.invoiceflow.au/tools/letter-of-demand',
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

export default function LetterOfDemandPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-rose-400 rounded-full" />
              <span className="text-rose-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Letter of{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Demand Generator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Create a formal letter of demand for unpaid invoices. The essential step before
              commencing legal proceedings — with automatic interest calculations and proper
              Australian legal formatting.
            </p>
          </div>

          {/* Generator Tool */}
          <LetterOfDemand />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Is a Letter of Demand and When Should You Send One?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A <strong className="text-white">letter of demand</strong> is a formal written
                  notice requiring payment of an outstanding debt. In Australia, it is the standard
                  legal precursor to commencing proceedings in a court or tribunal such as VCAT
                  (Victoria), NCAT (NSW), or QCAT (Queensland).
                </p>
                <p>
                  While not strictly required by law, most courts and tribunals expect you to have
                  sent a letter of demand before filing a claim. Judges and tribunal members look
                  favourably on parties who have made reasonable attempts to resolve the matter
                  before resorting to legal action. A well-crafted letter of demand also demonstrates
                  that you take the matter seriously, which often prompts payment without needing
                  to go further.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">When to Send a Letter of Demand</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>Invoice is 30+ days overdue</li>
                      <li>Friendly reminders and follow-ups have been ignored</li>
                      <li>Client has not responded to any communication</li>
                      <li>You are prepared to take legal action if not paid</li>
                      <li>You need a formal paper trail for court</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">What Makes It Effective</h4>
                    <ul className="text-sm space-y-1.5 text-slate-400">
                      <li>Clear statement of the amount owed and why</li>
                      <li>Specific deadline for payment (typically 14-21 days)</li>
                      <li>Reference to previous invoices and reminders</li>
                      <li>Explicit consequences of non-payment</li>
                      <li>Sent via registered post (proof of delivery)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Letter of Demand vs Payment Reminder — Key Differences
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A payment reminder and a letter of demand serve very different purposes. While
                  reminders assume the client may have simply forgotten, a letter of demand signals
                  that you are prepared to escalate to legal action. Understanding when to switch
                  from one to the other is crucial.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Feature</th>
                        <th className="text-left py-2 text-slate-400 font-medium">Payment Reminder</th>
                        <th className="text-left py-2 text-slate-400 font-medium">Letter of Demand</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 text-white font-medium">Tone</td>
                        <td className="py-3">Friendly to firm</td>
                        <td className="py-3">Formal and legal</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Purpose</td>
                        <td className="py-3">Remind about overdue payment</td>
                        <td className="py-3">Final notice before legal action</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Legal weight</td>
                        <td className="py-3">Informal</td>
                        <td className="py-3">Formal — expected by courts</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Delivery</td>
                        <td className="py-3">Email is fine</td>
                        <td className="py-3">Registered post recommended</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Consequences stated</td>
                        <td className="py-3">Vague or none</td>
                        <td className="py-3">Specific (tribunal, debt agency, credit report)</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Typical timing</td>
                        <td className="py-3">Day 1-30 overdue</td>
                        <td className="py-3">Day 30-60+ overdue</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-rose-500/10 to-orange-500/10 border border-rose-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-rose-400 font-medium mb-2">Escalation Path</p>
                  <p className="text-sm">
                    The ideal escalation path is: <strong className="text-white">Invoice</strong> (day 0)
                    → <strong className="text-white">Friendly reminder</strong> (day 1-7) →{' '}
                    <strong className="text-white">Firm follow-up</strong> (day 14) →{' '}
                    <strong className="text-white">Final notice</strong> (day 30) →{' '}
                    <strong className="text-white">Letter of demand</strong> (day 45-60) →{' '}
                    <strong className="text-white">Legal proceedings</strong> (if ignored). Use our{' '}
                    <a href="/tools/overdue-follow-up" className="text-teal-400 hover:underline">
                      Overdue Follow-Up Generator
                    </a>{' '}
                    for the reminder stages, then switch to this tool for the formal demand.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Small Claims Tribunals in Australia — State by State
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If your letter of demand is ignored, the next step is filing a claim with your
                  state or territory&apos;s civil tribunal or small claims court. Here&apos;s what
                  you need to know for each jurisdiction:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Victoria (VCAT)</h4>
                    <p className="text-sm text-slate-400">
                      Civil claims up to $15,000. Filing fee from ~$75.50. No lawyers needed.
                      Hearing typically within 8-12 weeks. Apply online at vcat.vic.gov.au.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">NSW (NCAT / Local Court)</h4>
                    <p className="text-sm text-slate-400">
                      Small claims up to $20,000 in Local Court. Filing fee from ~$107. NCAT for
                      specific disputes. Apply at onlineregistry.lawlink.nsw.gov.au.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Queensland (QCAT)</h4>
                    <p className="text-sm text-slate-400">
                      Minor civil disputes up to $25,000. Filing fee from ~$73.05. Apply online
                      at qcat.qld.gov.au. Mediation is often the first step.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Other States</h4>
                    <p className="text-sm text-slate-400">
                      SA: SACAT / Magistrates Court (up to $12,000). WA: Magistrates Court (up to
                      $75,000). TAS: Magistrates Court. ACT: ACAT. NT: Local Court.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-amber-400">Key tip:</strong> You can usually claim the
                    tribunal filing fee back from the debtor if your claim is successful. Keep all
                    documentation — original contract, invoice, payment reminders, this letter of
                    demand, and delivery confirmation — as evidence for your claim.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Protecting Yourself from Future Unpaid Invoices
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If you&apos;ve reached the point of sending a letter of demand, it&apos;s worth
                  reviewing your invoicing and contract practices to reduce the risk of it happening
                  again. Prevention is always cheaper than collection.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Strong Contracts</h4>
                    <p className="text-xs text-slate-400">
                      Include explicit payment terms, late payment interest clauses, and dispute
                      resolution procedures. Use our{' '}
                      <a href="/tools/contract-clause-generator" className="text-teal-400 hover:underline">
                        Contract Clause Generator
                      </a>{' '}
                      to build these.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Upfront Deposits</h4>
                    <p className="text-xs text-slate-400">
                      Always collect 30-50% before starting work. Use milestone payments for
                      larger projects. Never be more than one milestone ahead of payment.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Automated Reminders</h4>
                    <p className="text-xs text-slate-400">
                      Set up automated payment reminders 3 days before, on, and 3 days after the
                      due date. InvoiceFlow handles this automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Never chase payments <span className="gradient-text">manually again</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow automates your entire payment collection workflow — from professional
              invoices to automated reminders to overdue tracking. Stop writing demand letters
              and start getting paid on time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/overdue-follow-up"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Overdue Follow-Up
              </Link>
            </div>
          </section>
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
