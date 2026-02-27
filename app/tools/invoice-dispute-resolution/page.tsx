import type { Metadata } from 'next';
import Link from 'next/link';
import InvoiceDisputeResolution from './InvoiceDisputeResolution';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title =
  'Free Invoice Dispute Resolution Generator Australia — Dispute Response Letter Template | InvoiceFlow';
const description =
  'Generate professional invoice dispute response letters for Australian freelancers. Respond to client disputes with a structured, evidence-backed letter covering amount disputes, scope disagreements, quality issues and more. Free, no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'invoice dispute letter template australia',
    'how to respond to invoice dispute',
    'invoice dispute resolution template freelancer',
    'disputed invoice response letter',
    'freelance invoice dispute resolution',
    'invoice disagreement letter template',
    'freelance payment dispute resolution australia',
    'client disputing invoice what to do',
    'invoice dispute response letter template',
    'freelancer invoice dispute australia',
    'respond to disputed invoice',
    'invoice dispute resolution process',
  ],
  openGraph: {
    title: 'Invoice Dispute Resolution Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional dispute response letters for contested invoices. Structured templates for Australian freelancers. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/invoice-dispute-resolution',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invoice Dispute Resolution Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional dispute response letters for contested invoices. Structured templates for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/invoice-dispute-resolution',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Invoice Dispute Resolution Generator',
  description:
    'Generate professional invoice dispute response letters for Australian freelancers and sole traders. Respond to client disputes with structured, evidence-backed letters covering amount disputes, scope disagreements, quality issues and more.',
  url: 'https://www.invoiceflow.au/tools/invoice-dispute-resolution',
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

export default function InvoiceDisputeResolutionPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span className="text-purple-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Invoice Dispute{' '}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Resolution Generator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Client disputing your invoice? Generate a professional, structured response letter
              that addresses their concerns with evidence, proposes a fair resolution, and
              protects your right to payment.
            </p>
          </div>

          {/* Generator Tool */}
          <InvoiceDisputeResolution />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: How to Handle Invoice Disputes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Handle Invoice Disputes as a Freelancer
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Receiving a dispute on an invoice you&apos;ve sent can be stressful, but how you
                  respond determines whether you get paid or lose the client (and the money). The
                  key is to stay professional, gather your evidence, and respond in writing with a
                  clear, structured letter.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex gap-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Stay Calm and Professional</h4>
                      <p className="text-sm text-slate-400">
                        Do not respond emotionally. A dispute is not a personal attack — it&apos;s a
                        business disagreement. Take at least 24 hours before responding if you feel
                        frustrated. Your response letter will be far more effective when written from
                        a calm, professional standpoint.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex gap-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Review the Original Agreement</h4>
                      <p className="text-sm text-slate-400">
                        Pull up the signed contract, proposal, scope of work document, or email chain
                        that established the engagement. Compare what was agreed to what was delivered.
                        If you used a{' '}
                        <a href="/tools/contract-generator" className="text-purple-400 hover:underline">
                          freelance contract
                        </a>{' '}
                        or{' '}
                        <a href="/tools/scope-of-work-generator" className="text-purple-400 hover:underline">
                          scope of work document
                        </a>
                        , this step becomes much simpler.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex gap-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Gather All Supporting Evidence</h4>
                      <p className="text-sm text-slate-400">
                        Collect every piece of documentation: contracts, emails, chat messages,
                        timesheets, deliverable receipts, sign-off confirmations, and revision
                        histories. The more evidence you can reference in your response, the
                        stronger your position.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex gap-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Respond Professionally in Writing</h4>
                      <p className="text-sm text-slate-400">
                        Never rely on phone calls alone for dispute resolution. A written response
                        creates a paper trail that protects you if the matter escalates to a tribunal
                        or court. Use this tool to generate a properly structured response letter.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex gap-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400 font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Propose a Fair Resolution</h4>
                      <p className="text-sm text-slate-400">
                        Even if you believe you are completely in the right, offering a reasonable
                        resolution path demonstrates good faith. This could be a payment plan,
                        partial credit, or additional work to address concerns. Courts and tribunals
                        look favourably on parties who tried to resolve matters fairly.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex gap-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400 font-bold text-sm">6</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Set a Deadline and Escalation Path</h4>
                      <p className="text-sm text-slate-400">
                        Give the client a specific timeframe to respond (7-21 days is standard). If
                        they don&apos;t respond, your next step is a formal{' '}
                        <a href="/tools/letter-of-demand" className="text-purple-400 hover:underline">
                          letter of demand
                        </a>
                        , followed by tribunal or court proceedings if needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Common Types of Invoice Disputes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common Types of Invoice Disputes and How to Resolve Them
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Understanding the type of dispute you&apos;re dealing with is crucial for crafting
                  an effective response. Each type of dispute requires a different approach and
                  different types of evidence. Here are the most common disputes freelancers face
                  in Australia, along with proven resolution strategies.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 text-slate-400 font-medium">Dispute Type</th>
                        <th className="text-left py-3 text-slate-400 font-medium">What It Means</th>
                        <th className="text-left py-3 text-slate-400 font-medium">Resolution Strategy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 text-white font-medium">Amount Disputed</td>
                        <td className="py-3">Client agrees work was done but disagrees with the total charged.</td>
                        <td className="py-3">Reference original quote or contract. Provide time logs if billing hourly. Offer to walk through the itemised breakdown.</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Scope Disagreement</td>
                        <td className="py-3">Client claims the invoice includes work outside the agreed scope.</td>
                        <td className="py-3">Compare deliverables against the signed scope of work. Show written approval for any additional work. Use change order records.</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Quality Questioned</td>
                        <td className="py-3">Client says the work quality does not meet expectations.</td>
                        <td className="py-3">Reference approval at milestones. Show revision history. Offer a round of revisions if within contract terms. Highlight accepted deliverables.</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Services Not Received</td>
                        <td className="py-3">Client claims they never received the work or deliverables.</td>
                        <td className="py-3">Provide delivery confirmations, file transfer records, email receipts. Show project management tool records with dates and access logs.</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Timing Dispute</td>
                        <td className="py-3">Client says work was delivered late and wants a reduction.</td>
                        <td className="py-3">Show timeline against agreed deadlines. Document any delays caused by the client (slow feedback, late approvals). Reference force majeure clauses.</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-medium">Duplicate Invoice</td>
                        <td className="py-3">Client claims the invoice has already been paid or is a duplicate.</td>
                        <td className="py-3">Cross-reference your records. Provide invoice numbers and dates. Show bank statements if payment was not received.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-purple-400 font-medium mb-2">Key Takeaway</p>
                  <p className="text-sm">
                    Regardless of the dispute type, your response should always reference specific
                    evidence and propose a clear path forward. Vague responses like &ldquo;we
                    disagree&rdquo; weaken your position. Specific responses like &ldquo;as per the
                    signed scope of work dated 15/01/2026, item 3.2 specifies...&rdquo; demonstrate
                    professionalism and strengthen your case.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Preventing Invoice Disputes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Preventing Invoice Disputes Before They Happen
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The best dispute is the one that never happens. By establishing clear processes
                  upfront, you can dramatically reduce the likelihood of a client contesting your
                  invoice. Here are the most effective prevention strategies used by successful
                  Australian freelancers.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Clear Scope Documents</h4>
                    <p className="text-sm text-slate-400">
                      Never start work without a written scope that both parties have agreed to.
                      Include specific deliverables, timelines, revision limits, and what is
                      explicitly out of scope. Use our{' '}
                      <a href="/tools/scope-of-work-generator" className="text-purple-400 hover:underline">
                        Scope of Work Generator
                      </a>{' '}
                      to create one in minutes.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Written Approval at Milestones</h4>
                    <p className="text-sm text-slate-400">
                      Get explicit sign-off at each project milestone before moving to the next
                      phase. A simple email saying &ldquo;Approved — please proceed to phase
                      2&rdquo; is powerful evidence if a dispute arises later.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Detailed Time Tracking</h4>
                    <p className="text-sm text-slate-400">
                      If you bill hourly or need to justify your time, maintain detailed logs of
                      every hour worked with task descriptions. Tools like Toggl, Harvest, or even
                      a simple spreadsheet serve this purpose.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Regular Progress Updates</h4>
                    <p className="text-sm text-slate-400">
                      Send weekly or fortnightly progress updates showing what was completed and
                      what&apos;s coming next. This creates ongoing documentation and gives the
                      client a chance to raise concerns early, before they become disputes.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Transparent Pricing Upfront</h4>
                    <p className="text-sm text-slate-400">
                      Provide detailed quotes or estimates before starting. Break down costs by
                      deliverable or phase. When the invoice arrives, nothing should be a surprise.
                      Use a{' '}
                      <a href="/tools/milestone-payment-calculator" className="text-purple-400 hover:underline">
                        milestone payment structure
                      </a>{' '}
                      for larger projects.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Change Order Process</h4>
                    <p className="text-sm text-slate-400">
                      When a client requests something outside the original scope, document it as a
                      change order with the additional cost and get written approval before doing
                      the work. Use our{' '}
                      <a href="/tools/contract-generator" className="text-purple-400 hover:underline">
                        Contract Generator
                      </a>{' '}
                      to include a change order clause in your agreements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: When to Escalate */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                When to Escalate — Mediation, Tribunals, and Legal Options
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Sometimes, despite your best efforts at professional resolution, a client will
                  refuse to pay or engage in good faith. Knowing when and how to escalate protects
                  your business and ensures you are compensated for your work.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Step 1: Formal Letter of Demand</h4>
                    <p className="text-sm text-slate-400">
                      If your dispute response letter is ignored or rejected without good reason,
                      the next step is a formal{' '}
                      <a href="/tools/letter-of-demand" className="text-purple-400 hover:underline">
                        letter of demand
                      </a>
                      . This is a legal precursor to tribunal proceedings and signals that you are
                      serious about pursuing the debt. Send it via registered post for proof of
                      delivery.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Step 2: Mediation</h4>
                    <p className="text-sm text-slate-400">
                      Many disputes can be resolved through mediation — a neutral third party helps
                      both sides reach an agreement. In Australia, community justice centres offer
                      free or low-cost mediation services. Most tribunals also offer mediation as a
                      first step before a hearing.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Step 3: State Tribunals and Small Claims</h4>
                    <p className="text-sm text-slate-400">
                      If mediation fails, you can file a claim with your state or territory&apos;s
                      civil tribunal. These are designed to be accessible without a lawyer.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 mt-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-xs font-semibold">Victoria — VCAT</p>
                        <p className="text-xs text-slate-500">Up to $15,000. Filing fee from ~$75.50.</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-xs font-semibold">NSW — NCAT / Local Court</p>
                        <p className="text-xs text-slate-500">Up to $20,000. Filing fee from ~$107.</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-xs font-semibold">Queensland — QCAT</p>
                        <p className="text-xs text-slate-500">Up to $25,000. Filing fee from ~$73.05.</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-xs font-semibold">Other States</p>
                        <p className="text-xs text-slate-500">SA: SACAT, WA/TAS/NT: Magistrates Court, ACT: ACAT.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">When to Involve a Lawyer</h4>
                    <p className="text-sm text-slate-400">
                      Consider legal advice when: the amount exceeds your state&apos;s small claims
                      limit, the client has counter-claimed, the dispute involves complex contract
                      interpretation, or the client is a larger company with legal representation.
                      Many lawyers offer a free initial consultation.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-purple-400 font-medium mb-2">Cost vs. Benefit</p>
                  <p className="text-sm">
                    Before escalating, honestly assess whether the amount owed justifies the time,
                    stress, and cost of pursuing it. For smaller amounts (under $500), the time
                    cost of tribunal proceedings may exceed the debt. For larger amounts, the filing
                    fee is usually recoverable if your claim succeeds. In either case, a
                    well-crafted dispute response letter (like the one this tool generates) often
                    resolves the matter before escalation is needed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Stop disputes from <span className="gradient-text">draining your time</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps you prevent disputes with clear invoices, milestone tracking, and
              automated payment reminders. When every invoice has a proper paper trail, disputes
              resolve themselves.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/letter-of-demand"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Letter of Demand
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="invoice-dispute-resolution" category="Invoicing & Documents" />
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
