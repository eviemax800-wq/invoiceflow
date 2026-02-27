import type { Metadata } from 'next';
import Link from 'next/link';
import ContractClauseGenerator from './ContractClauseGenerator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title = 'Freelance Contract Clause Generator Australia | Contractor Agreement Template — InvoiceFlow';
const description =
  'Generate professional freelance contract clauses for Australian contractors. Covers payment terms, IP ownership, confidentiality, termination, and more. Free template generator.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance contract template australia',
    'contractor agreement generator',
    'freelance contract clauses',
    'independent contractor agreement australia',
    'freelance service agreement template',
  ],
  openGraph: {
    title: 'Freelance Contract Clause Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional contract clauses for freelancers and independent contractors in Australia. Free template generator.',
    url: 'https://www.invoiceflow.au/tools/contract-clause-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Contract Clause Generator — Free Tool | InvoiceFlow',
    description:
      'Build a professional freelance contract in minutes. Free clause generator for Australian contractors.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/contract-clause-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Contract Clause Generator Australia',
  description:
    'Generate professional freelance contract clauses covering payment terms, IP ownership, confidentiality, termination, and dispute resolution for Australian contractors.',
  url: 'https://www.invoiceflow.au/tools/contract-clause-generator',
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

const faqs = [
  {
    question: "Is this tool free to use?",
    answer: "Yes, this tool is completely free with no signup required. Generate unlimited documents directly in your browser."
  },
  {
    question: "Are the generated documents legally compliant in Australia?",
    answer: "Templates follow Australian business standards and ATO invoicing requirements. For legally binding contracts or agreements, we recommend having a solicitor review important documents."
  },
  {
    question: "Can I customise the output?",
    answer: "Yes, all fields are fully customisable. You can modify the content, copy the output to your clipboard, or print it directly from your browser."
  }
];

export default function ContractClauseGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQSchema faqs={faqs} />
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
              Freelance <span className="gradient-text">Contract</span> Clause Generator
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Build a professional freelance contract in minutes. Select the clauses you need,
              customise the details, and copy a ready-to-use agreement tailored to Australian
              freelancers and independent contractors.
            </p>
          </div>

          {/* Generator */}
          <ContractClauseGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Why Every Freelancer Needs a Contract */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Every Freelancer Needs a Contract
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Working without a contract is one of the most common — and costly — mistakes
                  freelancers make. A handshake agreement or casual email thread might feel
                  sufficient when a project starts, but the moment a dispute arises over scope,
                  payment, or intellectual property, you&apos;ll wish you had something in writing.
                </p>
                <p>
                  In Australia, a written contractor agreement isn&apos;t just good practice — it&apos;s
                  essential for clarifying your status as an independent contractor with the ATO,
                  protecting your right to payment, and establishing clear boundaries around
                  deliverables, timelines, and ownership.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-teal-400 mb-1">60%</p>
                    <p className="text-sm">of freelancers experience scope creep on projects</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400 mb-1">$6,000</p>
                    <p className="text-sm">average annual loss to non-payment or late payment</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400 mb-1">80%</p>
                    <p className="text-sm">of disputes stem from unclear terms and expectations</p>
                  </div>
                </div>
                <p className="text-sm mt-2">
                  A well-structured contract doesn&apos;t need to be 30 pages of legalese. It just
                  needs to clearly state what you&apos;re delivering, when you&apos;ll be paid, who
                  owns the work, and what happens if things go sideways. Use the generator above to
                  build one in minutes.
                </p>
              </div>
            </div>

            {/* Essential Clauses Every Freelance Contract Should Include */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Essential Clauses Every Freelance Contract Should Include
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Not all contracts are created equal. A solid freelance agreement covers eight
                  critical areas that protect both you and your client. Here&apos;s what each clause
                  does and why it matters:
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">1. Scope of Work</h4>
                    <p className="text-sm">
                      The most important clause in any freelance contract. It defines exactly what
                      you&apos;re delivering, in what format, and to what standard. A vague scope
                      invites scope creep — be specific about deliverables, milestones, and what
                      is explicitly excluded from the project.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">2. Payment Terms</h4>
                    <p className="text-sm">
                      Spell out how much, when, and how you get paid. Include your rate or project
                      fee, payment schedule (upfront deposits, milestone payments, or net terms),
                      accepted payment methods, and what happens when a payment is late. In
                      Australia, you can charge interest on overdue invoices if the contract
                      specifies it.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">3. Intellectual Property Ownership</h4>
                    <p className="text-sm">
                      Who owns the work product? In Australia, copyright generally stays with the
                      creator unless explicitly assigned. Most clients expect IP to transfer on full
                      payment — but you need to state this clearly. Some freelancers retain the
                      right to use work in portfolios or grant a licence rather than a full transfer.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">4. Confidentiality</h4>
                    <p className="text-sm">
                      Clients share sensitive information — business plans, customer data, trade
                      secrets. A confidentiality clause (or NDA) protects both parties. Define what
                      counts as confidential, how long the obligation lasts, and what exceptions
                      apply (e.g., information that becomes public).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">5. Termination</h4>
                    <p className="text-sm">
                      Projects end — sometimes earlier than planned. A termination clause defines
                      how either party can exit the agreement: the required notice period, what
                      happens to work completed so far, and whether a kill fee applies for early
                      termination. Without this, you risk doing work you never get paid for.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">6. Limitation of Liability</h4>
                    <p className="text-sm">
                      This clause caps your financial exposure if something goes wrong. Without it,
                      a client could theoretically claim damages far exceeding your project fee.
                      Most freelancers cap liability at the total project value or a fixed amount.
                      It&apos;s standard practice and clients generally accept it.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">7. Revisions and Change Requests</h4>
                    <p className="text-sm">
                      Revision rounds are where scope creep lives. Define how many revision rounds
                      are included in the project fee, what constitutes a revision versus a new
                      request, and what additional revisions cost. This protects your time and sets
                      clear expectations with the client upfront.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-2">8. Dispute Resolution</h4>
                    <p className="text-sm">
                      If a disagreement escalates, you want an agreed process for resolving it.
                      Most freelance contracts specify mediation first, then arbitration or court
                      proceedings. Choosing a jurisdiction (e.g., Victoria, Australia) avoids
                      confusion about which laws apply — especially important for interstate or
                      international clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contract vs Agreement vs Proposal */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Contract vs Agreement vs Proposal — What&apos;s the Difference?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Freelancers often use these terms interchangeably, but they serve different
                  purposes. Understanding the distinction helps you use the right document at the
                  right stage of a client relationship:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Document</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Purpose</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Legally Binding?</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">When to Use</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Contract</td>
                        <td className="py-3 px-4">Formal agreement with enforceable terms, obligations, and remedies for breach</td>
                        <td className="py-3 px-4 text-teal-400">Yes</td>
                        <td className="py-3 px-4">Before starting work — the definitive agreement</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Agreement</td>
                        <td className="py-3 px-4">Mutual understanding of terms, often less formal than a contract</td>
                        <td className="py-3 px-4 text-amber-400">Usually yes</td>
                        <td className="py-3 px-4">Simpler engagements, ongoing relationships</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Proposal</td>
                        <td className="py-3 px-4">Outlines your approach, timeline, and pricing to win a project</td>
                        <td className="py-3 px-4 text-rose-400">No</td>
                        <td className="py-3 px-4">Before the client commits — a sales document</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Quote</td>
                        <td className="py-3 px-4">Fixed price estimate for specific deliverables</td>
                        <td className="py-3 px-4 text-amber-400">Can be, if accepted</td>
                        <td className="py-3 px-4">When the client wants a firm number before proceeding</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Scope of Work</td>
                        <td className="py-3 px-4">Detailed breakdown of deliverables, milestones, and exclusions</td>
                        <td className="py-3 px-4 text-amber-400">When part of a contract</td>
                        <td className="py-3 px-4">As an attachment or section within the main contract</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Best Practice for Freelancers</p>
                  <p className="text-sm">
                    Send a proposal to win the work, follow up with a scope of work for alignment,
                    then formalise everything in a contract before starting. The contract should
                    reference (or include) the scope of work. This three-step process takes an extra
                    30 minutes but saves you from 90% of disputes and payment issues down the track.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to <span className="gradient-text">protect your work?</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps freelancers manage contracts, automate invoicing, and get paid
              faster — so you spend less time chasing payments and more time doing great work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/scope-of-work-generator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Scope of Work Generator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="contract-clause-generator" category="Invoicing & Documents" />
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
