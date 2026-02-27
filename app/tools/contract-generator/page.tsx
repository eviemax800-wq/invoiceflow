import type { Metadata } from 'next';
import Link from 'next/link';
import ContractGenerator from './ContractGenerator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import FAQSchema from '../components/FAQSchema';

const title =
  'Freelance Contract & Service Agreement Generator Australia | Free Template — InvoiceFlow';
const description =
  'Free freelance contract and service agreement generator for Australian freelancers. Generate professional contracts with scope, payment terms, IP clauses, confidentiality, termination, and GST — customised to your project type.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance contract template australia',
    'service agreement generator freelancer',
    'independent contractor agreement template',
    'freelance service agreement australia',
    'free contract template sole trader',
    'contractor agreement generator',
    'freelance project contract template',
    'terms of engagement freelancer',
    'client service agreement template',
    'australian freelance contract',
  ],
  openGraph: {
    title: 'Freelance Contract & Service Agreement Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional freelance contracts and service agreements for Australian freelancers. Scope, payment terms, IP, confidentiality, termination, and GST clauses included. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/contract-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Contract & Service Agreement Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional freelance contracts and service agreements for Australian freelancers. Free — no signup required.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/contract-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Contract & Service Agreement Generator',
  description:
    'Generate professional freelance contracts and service agreements for Australian freelancers and sole traders. Includes scope of work, payment terms, IP assignment, confidentiality, termination clauses, and GST calculations.',
  url: 'https://www.invoiceflow.au/tools/contract-generator',
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
    question: 'Do freelancers need a written contract in Australia?',
    answer:
      'While verbal agreements can be legally binding in Australia, they are extremely difficult to enforce. A written contract is strongly recommended for every freelance engagement. It defines the scope of work, payment terms, intellectual property ownership, and termination conditions. Australian courts and tribunals heavily favour written agreements when resolving disputes between contractors and clients.',
  },
  {
    question: 'What should a freelance contract include?',
    answer:
      'A comprehensive freelance contract should include: scope of work with specific deliverables, payment terms (amount, schedule, late payment penalties), intellectual property assignment clause, confidentiality/NDA provisions, revision limits, termination conditions with notice period, limitation of liability, GST treatment (whether amounts are GST-inclusive or exclusive), and governing jurisdiction (which Australian state\'s laws apply).',
  },
  {
    question: 'Is a freelance contract legally binding in Australia?',
    answer:
      'Yes, a freelance contract is legally binding in Australia once both parties agree to the terms, provided there is an offer, acceptance, consideration (payment for services), and intention to create legal relations. Written contracts do not need to be witnessed or notarised to be enforceable. However, terms that are unconscionable or unfair under the Australian Consumer Law may be voided by a court.',
  },
  {
    question: 'Who owns the intellectual property in a freelance contract?',
    answer:
      'Under Australian copyright law, the creator of original work owns the intellectual property by default, even if the client paid for it. This means without an IP assignment clause, you technically retain ownership of the work you deliver. A properly drafted contract should include an IP assignment clause that transfers ownership to the client upon full payment, protecting both parties.',
  },
  {
    question: 'How do you handle contract disputes as a freelancer?',
    answer:
      'In Australia, contract disputes can be resolved through direct negotiation, mediation, or through your state\'s civil and administrative tribunal (e.g., VCAT in Victoria, NCAT in NSW) for claims typically under $25,000. Your contract should specify the governing jurisdiction and dispute resolution process. Having a well-drafted written contract significantly strengthens your position in any dispute.',
  },
];

export default function ContractGeneratorPage() {
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
              Freelance Contract{' '}
              <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate a professional service agreement customised to your project. Set your scope,
              payment terms, IP clauses, confidentiality, and termination conditions — with GST
              calculations and Australian legal formatting built in.
            </p>
          </div>

          {/* Generator Tool */}
          <ContractGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Every Australian Freelancer Needs a Written Contract */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Every Australian Freelancer Needs a Written Contract
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A handshake and an email thread are not enough to protect your freelance business.
                  Whether you&apos;re a sole trader, an ABN holder billing project work, or a
                  contractor on retainer, a written service agreement is the single most important
                  document in your client relationship. Here&apos;s why:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Legal Protection
                    </h4>
                    <p className="text-sm">
                      A contract defines the legal relationship between you and your client. Without
                      one, disputes over payment, scope, or ownership devolve into a &ldquo;he said,
                      she said&rdquo; situation. Australian courts and tribunals heavily favour
                      written agreements when adjudicating disputes between contractors and clients.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Payment Security
                    </h4>
                    <p className="text-sm">
                      A contract specifies when you get paid, how much, and what happens if the
                      client doesn&apos;t pay. Including late payment interest, deposit requirements,
                      and milestone-based billing protects your cash flow and gives you legal
                      recourse if a client ghosts an invoice.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Scope Clarity
                    </h4>
                    <p className="text-sm">
                      Scope creep is the silent killer of freelance profitability. A contract with a
                      clearly defined scope of work — and an explicit &ldquo;out of scope&rdquo;
                      section — gives you the foundation to push back on additional requests that
                      weren&apos;t part of the original agreement. No more free work disguised as
                      &ldquo;small tweaks.&rdquo;
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Professional Image
                    </h4>
                    <p className="text-sm">
                      Clients who work with agencies and established businesses expect contracts.
                      Presenting a professional service agreement signals that you take your business
                      seriously, which builds trust and justifies premium rates. It separates you
                      from hobbyists and positions you as a professional service provider.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Bottom Line</p>
                  <p className="text-sm">
                    Every freelance engagement — no matter how small or how well you know the
                    client — should start with a signed agreement. It protects both parties, sets
                    expectations, and provides a reference point if anything goes sideways. Use this
                    generator to create one in minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Key Clauses in a Freelance Service Agreement */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Key Clauses in a Freelance Service Agreement
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A strong freelance contract covers more than just &ldquo;what&rdquo; and &ldquo;how
                  much.&rdquo; Each clause serves a specific protective function. Here are the
                  essential clauses every Australian freelancer should include:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Scope of Work</h4>
                    <p className="text-sm text-slate-400">
                      The most important clause. Define exactly what you&apos;re delivering, including
                      deliverables, formats, quantities, and timelines. Pair it with an &ldquo;out
                      of scope&rdquo; section to explicitly exclude work the client might assume is
                      included. The more specific, the better — vague scope leads to unpaid extra
                      work.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Intellectual Property Assignment</h4>
                    <p className="text-sm text-slate-400">
                      Under Australian copyright law, the creator of original work owns the IP by
                      default — even if the client paid for it. An IP assignment clause transfers
                      ownership to the client upon full payment. Without this clause, the client
                      may not legally own the work you delivered, which creates risk for both parties.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Confidentiality / NDA</h4>
                    <p className="text-sm text-slate-400">
                      Protects both parties&apos; sensitive information — your business processes and
                      the client&apos;s proprietary data. Particularly important in consulting,
                      marketing, and tech projects where you&apos;ll handle trade secrets, customer
                      data, or strategic plans. Define what&apos;s confidential and how long the
                      obligation lasts.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Payment Terms</h4>
                    <p className="text-sm text-slate-400">
                      Spell out the total amount, payment schedule (upfront deposit, milestones, on
                      completion), due dates, accepted payment methods, and late payment penalties.
                      For Australian freelancers, include whether amounts are GST-exclusive or
                      GST-inclusive and provide your ABN on all invoices.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Termination</h4>
                    <p className="text-sm text-slate-400">
                      Both parties should have the right to end the agreement with reasonable notice.
                      Define the notice period (typically 7-30 days), what happens to work in
                      progress, and how final payment is calculated. Include provisions for
                      termination due to breach — e.g., non-payment or failure to provide required
                      materials.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Limitation of Liability</h4>
                    <p className="text-sm text-slate-400">
                      Caps your financial exposure if something goes wrong. Typically limits your
                      liability to the total fees paid under the agreement. Without this clause,
                      you could theoretically be liable for consequential damages far exceeding the
                      project value — a devastating risk for a sole trader or small business.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Pro Tip</p>
                  <p className="text-sm">
                    Always include a &ldquo;Revisions & Changes&rdquo; clause that caps the number
                    of revision rounds included in the project fee. Unlimited revisions sound
                    client-friendly but can destroy your effective hourly rate. Two to three rounds
                    is standard for most creative and technical projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Freelance Contracts and Australian Law */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Freelance Contracts and Australian Law
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Australian freelancers operate in a specific legal context that affects how
                  contracts are structured and enforced. Understanding these rules ensures your
                  agreements are valid and protective.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">ABN</span>
                      Contractor vs Employee
                    </h4>
                    <p className="text-sm">
                      The ATO draws a clear line between independent contractors and employees. Your
                      contract should reinforce contractor status: you control how and when work is
                      done, you use your own tools, and you can subcontract. If the arrangement
                      looks like employment (set hours, client-provided equipment, ongoing
                      exclusivity), the ATO may reclassify you — triggering superannuation,
                      workers&apos; comp, and PAYG obligations for the client.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">GST</span>
                      GST Obligations
                    </h4>
                    <p className="text-sm">
                      If your annual turnover exceeds $75,000, you must register for GST and charge
                      10% on top of your fees. Your contract should state whether amounts are
                      GST-exclusive or GST-inclusive, and your invoices must include your ABN and
                      be classified as &ldquo;tax invoices.&rdquo; Below the threshold, you
                      don&apos;t charge GST but should still include your ABN.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">State</span>
                      Governing Jurisdiction
                    </h4>
                    <p className="text-sm">
                      Contract disputes are resolved under state or territory law. Your contract
                      should specify which state&apos;s laws govern the agreement — typically your
                      own state. This determines which courts or tribunals have jurisdiction. For
                      small claims (under $25,000 in most states), matters go to the relevant Civil
                      and Administrative Tribunal (e.g., VCAT in Victoria, NCAT in NSW).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">ACCC</span>
                      Unconscionable Conduct
                    </h4>
                    <p className="text-sm">
                      Under the Australian Consumer Law, contract terms that are &ldquo;unfair&rdquo;
                      or &ldquo;unconscionable&rdquo; can be voided. This protects freelancers from
                      one-sided client contracts — but it also means your own contracts must be
                      reasonable. Terms that are excessively punitive, one-sided, or hidden in fine
                      print may not hold up. Keep clauses balanced and transparent.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Requirement</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Threshold</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Action Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">ABN</td>
                        <td className="py-3 px-4">All freelancers</td>
                        <td className="py-3 px-4">Include ABN on all contracts and invoices</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">GST Registration</td>
                        <td className="py-3 px-4">$75,000+ annual turnover</td>
                        <td className="py-3 px-4">Register, charge 10% GST, issue tax invoices</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Written Agreement</td>
                        <td className="py-3 px-4">All engagements (recommended)</td>
                        <td className="py-3 px-4">Define scope, payment, IP, termination</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Record Keeping</td>
                        <td className="py-3 px-4">ATO requirement (5 years)</td>
                        <td className="py-3 px-4">Retain all contracts and invoices for 5 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 4: Common Contract Mistakes Freelancers Make */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common Contract Mistakes Freelancers Make
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Even freelancers who use contracts often include gaps that leave them vulnerable.
                  These are the most common mistakes — and how to avoid them:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Vague Scope of Work</h4>
                    <p className="text-sm text-slate-400">
                      &ldquo;Build a website&rdquo; is not a scope of work. &ldquo;Design and develop
                      a 5-page responsive website (Home, About, Services, Portfolio, Contact) using
                      WordPress with a custom theme, delivered as a staging site for review&rdquo; is.
                      The more specific your scope, the less room for misunderstanding. Always list
                      deliverables, formats, and what constitutes &ldquo;completion.&rdquo;
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">No Revision Limits</h4>
                    <p className="text-sm text-slate-400">
                      Without a cap on revisions, clients can request endless changes. This is
                      particularly dangerous for creative work — design, copy, video — where
                      subjective feedback can spiral. Include a specific number of revision rounds
                      (two to three is standard) and state that additional revisions will be billed
                      at your hourly rate.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">No Late Payment Terms</h4>
                    <p className="text-sm text-slate-400">
                      If your contract doesn&apos;t specify consequences for late payment, there are
                      none. Include a clear late payment clause: interest charges (typically 2-10%
                      per annum on overdue amounts), the right to pause work until payment is
                      received, and the right to recover collection costs. This motivates timely
                      payment and gives you leverage.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Relying on Verbal Agreements</h4>
                    <p className="text-sm text-slate-400">
                      &ldquo;We discussed it on the call&rdquo; holds zero weight in a dispute.
                      Every agreement, amendment, and scope change should be in writing. Even a
                      simple email confirmation is better than nothing — but a properly structured
                      contract is best. This is especially true for ongoing relationships where
                      terms evolve over time.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Not Specifying IP Ownership</h4>
                    <p className="text-sm text-slate-400">
                      In Australia, the creator of original work owns the copyright by default. If
                      your contract doesn&apos;t include an IP assignment clause, you technically
                      still own the logo, website, copy, or design you created — even though the
                      client paid for it. This creates legal uncertainty. Always include a clear IP
                      assignment clause tied to full payment.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">No Termination Clause</h4>
                    <p className="text-sm text-slate-400">
                      Without a termination clause, ending a project becomes messy. What if the
                      client wants to cancel halfway through? What if you need to walk away from a
                      toxic engagement? A termination clause defines the exit process: notice period,
                      payment for work completed, return of materials, and IP ownership status at
                      the point of termination.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Avoid These Traps</p>
                  <p className="text-sm">
                    The contracts generated by this tool include all of these protections by default.
                    Customise the clauses to your specific engagement, review the output carefully,
                    and have both parties sign before work begins. A few minutes spent on a proper
                    contract can save weeks of disputes and thousands in lost income.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <EmailCapture />
          <RelatedTools currentSlug="contract-generator" category="Invoicing & Documents" />

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Lock in your terms and{' '}
              <span className="gradient-text">get paid with confidence</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, GST calculations, and payment tracking — so once
              your contract is signed, every invoice is professional, compliant, and on time.
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
                Try Invoice Generator
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
