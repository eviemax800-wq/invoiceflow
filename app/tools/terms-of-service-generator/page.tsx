import type { Metadata } from 'next';
import Link from 'next/link';
import TermsOfServiceGenerator from './TermsOfServiceGenerator';
import RelatedTools from '../components/RelatedTools';

const title =
  'Terms of Service Generator Australia | Free T&C Template for Freelancers — InvoiceFlow';
const description =
  'Free terms of service generator for Australian freelancers and small businesses. Generate professional, legally-structured terms and conditions — customised to your services, payment terms, and Australian law. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'terms of service generator australia free',
    'terms and conditions template freelancer',
    'terms of service template small business australia',
    'freelance terms and conditions generator',
    'T&C template sole trader',
    'terms of service template australia',
    'freelance contract terms generator',
    'website terms of service australia',
    'service agreement terms generator',
    'australian terms and conditions template',
  ],
  openGraph: {
    title: 'Terms of Service Generator — Free T&C Template for Freelancers | InvoiceFlow',
    description:
      'Generate professional terms of service for Australian freelancers and small businesses. Customised to your services, payment terms, IP ownership, and Australian law. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/terms-of-service-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service Generator — Free T&C Template for Freelancers | InvoiceFlow',
    description:
      'Generate professional terms of service for Australian freelancers and small businesses. Free — no signup required.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/terms-of-service-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Terms of Service Generator',
  description:
    'Generate professional terms of service and terms and conditions for Australian freelancers and small businesses. Includes payment terms, intellectual property clauses, limitation of liability, Australian Consumer Law compliance, dispute resolution, and governing law. Customised for sole traders, companies, partnerships, and trusts.',
  url: 'https://www.invoiceflow.au/tools/terms-of-service-generator',
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

export default function TermsOfServiceGeneratorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-400/10 border border-amber-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <span className="text-amber-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Terms of Service{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate professional terms of service tailored to your Australian freelance business.
              Customise payment terms, IP ownership, liability limits, refund policies, and dispute
              resolution — all structured for Australian law and the Australian Consumer Law.
            </p>
          </div>

          {/* Generator Tool */}
          <TermsOfServiceGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Freelancers Need Terms of Service */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Need Terms of Service
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Terms of service are the legal foundation of every freelance engagement. They define
                  the rules of the relationship between you and your clients — what you will deliver,
                  how you will be paid, who owns the work, and what happens when things go wrong.
                  Without clear terms, you are exposed to payment disputes, scope creep, IP theft, and
                  costly misunderstandings. Here is why every freelancer and small business in Australia
                  should have terms of service:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">01</span>
                      Legal Protection Against Payment Disputes
                    </h4>
                    <p className="text-sm">
                      Late payments and non-payment are the most common problems freelancers face. Clear
                      terms of service that specify payment deadlines, late payment interest, and
                      consequences for non-payment give you a legal basis to recover what you are owed.
                      Without written terms, enforcing payment becomes significantly harder. An Australian
                      court will look for evidence of agreed terms — having them in writing is essential.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">02</span>
                      Preventing Scope Creep
                    </h4>
                    <p className="text-sm">
                      Scope creep is the silent killer of freelance profitability. When a client keeps
                      adding requests beyond the original brief, your time and energy are consumed without
                      additional compensation. Terms of service that clearly define the scope of work,
                      revision limits, and the process for handling out-of-scope requests protect you from
                      working for free. They give you a professional way to say &ldquo;that is outside the
                      agreed scope&rdquo; and quote for additional work.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">03</span>
                      Establishing Professional Credibility
                    </h4>
                    <p className="text-sm">
                      Presenting professional terms of service signals that you are a serious business
                      operator, not a hobbyist. Enterprise clients and larger organisations expect terms
                      before engaging. For sole traders and small businesses, having terms ready removes
                      friction in the sales process and builds trust from the first interaction. It shows
                      you have thought through the engagement and take your obligations — and theirs —
                      seriously.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">04</span>
                      Protecting Your Intellectual Property
                    </h4>
                    <p className="text-sm">
                      Without clear IP clauses, there can be confusion about who owns the work you
                      produce. In Australia, the default copyright position for commissioned work is
                      complex and depends on the type of work and the relationship between the parties.
                      Your terms of service should explicitly state whether IP transfers to the client on
                      payment, is licensed to the client, or is retained by you. This eliminates ambiguity
                      and prevents disputes over ownership down the track.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-amber-400 font-medium mb-2">Bottom Line</p>
                  <p className="text-sm">
                    Terms of service are not just legal formalities — they are business tools that
                    protect your revenue, define your boundaries, and set client expectations from the
                    start. Whether you are a web developer, graphic designer, copywriter, or consultant,
                    having clear terms is essential. Use this generator to create yours in minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Australian Consumer Law */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Australian Consumer Law: What Freelancers Must Know
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The Australian Consumer Law (ACL), found in Schedule 2 of the Competition and Consumer
                  Act 2010 (Cth), applies to most freelance and small business transactions in Australia.
                  It sets out mandatory consumer guarantees and protections that cannot be excluded by
                  contract. Understanding the ACL is essential when drafting your terms of service — getting
                  it wrong can expose you to penalties from the ACCC and undermine the enforceability of
                  your terms.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">01</span>
                      Consumer Guarantees
                    </h4>
                    <p className="text-sm">
                      The ACL provides automatic consumer guarantees for goods and services supplied in
                      trade or commerce. For services, the guarantee is that they will be provided with
                      due care and skill, be fit for any specified purpose, and be supplied within a
                      reasonable time. For goods, guarantees include acceptable quality, fitness for
                      purpose, and matching descriptions. These guarantees apply regardless of what your
                      terms say — you cannot contract out of them when dealing with consumers.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">02</span>
                      Unfair Contract Terms
                    </h4>
                    <p className="text-sm">
                      Since November 2023, unfair contract terms in standard form contracts with consumers
                      and small businesses are not just voidable — they attract penalties. A term may be
                      unfair if it causes a significant imbalance in the parties&apos; rights and obligations,
                      is not reasonably necessary to protect your legitimate interests, and would cause
                      detriment to the other party. Overly one-sided limitation of liability clauses,
                      unilateral termination rights, and penalty clauses are common examples. Your terms
                      must be balanced and reasonable.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">03</span>
                      Statutory Warranties
                    </h4>
                    <p className="text-sm">
                      Where the ACL applies, your terms of service must not purport to exclude statutory
                      warranties and consumer guarantees. Including a clause that says &ldquo;no
                      warranties of any kind are provided&rdquo; when dealing with consumers is not only
                      ineffective — it may be misleading and deceptive. The correct approach is to
                      acknowledge that statutory guarantees apply and limit your liability for breach
                      of those guarantees to the extent permitted by law (such as re-supply of the
                      services or a refund).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">04</span>
                      ACL Compliance in Your Terms
                    </h4>
                    <p className="text-sm">
                      To comply with the ACL, your terms should: acknowledge consumer guarantees where
                      applicable, avoid excluding liability that cannot be excluded by law, include fair
                      and balanced refund policies, avoid misleading representations about services or
                      deliverables, and ensure limitation of liability clauses are reasonable. The terms
                      generated by this tool include appropriate ACL references and carve-outs to help
                      ensure compliance.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-amber-400 font-medium mb-2">Important Note</p>
                  <p className="text-sm">
                    The ACL distinguishes between consumers and business-to-business transactions. Many
                    consumer guarantees do not apply to B2B transactions above certain thresholds. However,
                    the unfair contract terms provisions now apply to small business contracts (where at
                    least one party has fewer than 100 employees or annual turnover under $10 million). As
                    a freelancer, your contracts likely fall within this scope. When in doubt, draft your
                    terms to comply with the ACL — it provides the strongest protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Key Clauses */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Key Clauses Every Freelance T&C Should Include
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A comprehensive set of terms and conditions covers every critical aspect of the
                  freelance relationship. Missing even one key clause can leave you exposed. Here are
                  the clauses that every freelancer&apos;s T&C should include, and why each one matters:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">01</span>
                      Payment Terms
                    </h4>
                    <p className="text-sm">
                      Specify when payment is due (upfront, net 14, net 30, milestone-based), accepted
                      payment methods, currency, and what happens if payment is late. Include an interest
                      rate for overdue invoices (common in Australia is 10% p.a.) and the right to suspend
                      work if invoices are unpaid. Clear payment terms eliminate the most common source of
                      freelance disputes.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">02</span>
                      Intellectual Property Ownership
                    </h4>
                    <p className="text-sm">
                      Define who owns the work product. The three common approaches are: full transfer to
                      the client on payment, a license to the client (you retain ownership), or retained
                      by you. Also address pre-existing IP, third-party materials (stock images, open-source
                      libraries), and whether you can use the work in your portfolio. This clause prevents
                      ownership disputes and protects your creative assets.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">03</span>
                      Limitation of Liability
                    </h4>
                    <p className="text-sm">
                      Cap your total liability to a reasonable amount (typically the project value or 2x
                      the project value) and exclude indirect, consequential, and special damages. This
                      protects you from disproportionate claims. However, ensure the clause is reasonable
                      under the ACL unfair contract terms provisions and does not exclude liability that
                      cannot be excluded by law (such as consumer guarantees).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">04</span>
                      Termination
                    </h4>
                    <p className="text-sm">
                      Both parties should have the right to terminate the engagement with reasonable
                      notice. Specify the notice period (7, 14, or 30 days is standard), what happens
                      to work in progress, whether partially completed work must be paid for, and each
                      party&apos;s obligations on termination (return of materials, final payment). A clear
                      termination clause gives both parties an exit path without burning bridges.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">05</span>
                      Dispute Resolution
                    </h4>
                    <p className="text-sm">
                      Specify how disputes will be handled — mediation first (recommended), direct to
                      court, or arbitration. Mediation is faster, cheaper, and preserves business
                      relationships. Always include the governing law state to establish jurisdiction.
                      For Australian freelancers, this is typically your operating state. A dispute
                      resolution clause prevents costly and uncertain litigation.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">06</span>
                      Governing Law
                    </h4>
                    <p className="text-sm">
                      Every set of terms should specify which state or territory&apos;s laws apply. This
                      determines which courts have jurisdiction over disputes. Without a governing law
                      clause, jurisdictional disputes can add significant cost and complexity. For
                      Australian freelancers, use your operating state. This is especially important
                      if you work with interstate or international clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Common Mistakes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common T&C Mistakes Freelancers Make
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Even experienced freelancers make mistakes with their terms and conditions. These
                  errors can leave you unprotected, expose you to liability, or make your terms
                  unenforceable. Here are the most common mistakes to avoid:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Overly Broad Limitation of Liability</h4>
                    <p className="text-sm text-slate-400">
                      Clauses that attempt to exclude all liability, including liability for negligence,
                      fraud, or breach of consumer guarantees, are likely to be struck down as unfair
                      under the ACL. A court may void the entire clause, leaving you with no limitation
                      at all. The better approach is a reasonable cap (such as the total project value)
                      with appropriate carve-outs for liability that cannot be excluded by law. This is
                      both more enforceable and more fair.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Missing Governing Law Clause</h4>
                    <p className="text-sm text-slate-400">
                      Many freelancers forget to specify which jurisdiction&apos;s laws apply to their terms.
                      Without this clause, a dispute with an interstate or international client could
                      result in litigation in an inconvenient jurisdiction, adding travel costs, legal
                      complexity, and uncertainty. Always include a governing law clause specifying your
                      state — it is a single sentence that can save thousands of dollars in legal fees.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">No Termination Clause</h4>
                    <p className="text-sm text-slate-400">
                      Without a termination clause, neither party has a clear exit path. This can lead
                      to disputes about whether work was abandoned, whether partial payment is owed, and
                      what happens to incomplete deliverables. A termination clause protects both parties
                      by establishing notice periods, payment obligations for completed work, and the
                      process for winding down the engagement. Include both termination for convenience
                      and termination for cause.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Ignoring the Australian Consumer Law</h4>
                    <p className="text-sm text-slate-400">
                      Terms that attempt to exclude consumer guarantees, impose unfair penalty clauses,
                      or include misleading representations about refund rights are not only unenforceable
                      — they can attract penalties under the ACL. Since November 2023, unfair contract
                      terms in standard form small business contracts carry financial penalties. Your
                      terms must acknowledge consumer rights, include reasonable refund provisions, and
                      avoid one-sided clauses that would be deemed unfair by a court.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Using an International Template</h4>
                    <p className="text-sm text-slate-400">
                      Many freelancers download terms from US or UK template sites without realising
                      that Australian law is different. Australian contract law, the ACL, privacy
                      legislation (Privacy Act 1988), and GST requirements are all unique. A template
                      written for US law will reference concepts like &ldquo;UCC warranties&rdquo; and
                      &ldquo;state sales tax&rdquo; that have no relevance in Australia. Always use
                      terms drafted for Australian law and tailored to your specific business.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Not Updating Terms Regularly</h4>
                    <p className="text-sm text-slate-400">
                      Your terms should evolve with your business. If you change your pricing model,
                      add new services, update your refund policy, or the law changes (as it did with
                      the 2023 ACL unfair contract terms amendments), your terms need to be updated.
                      Outdated terms can create gaps in protection, misrepresent your current practices,
                      and erode client trust. Review your terms at least annually and after any
                      significant business change.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-amber-400 font-medium mb-2">Avoid These Traps</p>
                  <p className="text-sm">
                    The terms generated by this tool are structured for Australian law, include
                    appropriate ACL references, use reasonable limitation of liability clauses, and
                    include governing law and termination provisions by default. Customise the output
                    to match your specific business, review it carefully, and have it reviewed by a
                    solicitor if your business involves regulated industries, high-value contracts,
                    or complex service arrangements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Set your terms and{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">get paid with confidence</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, GST calculations, and payment tracking — so once
              your terms are set and your contract is signed, every invoice is professional, compliant,
              and on time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/contract-generator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Contract Generator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="terms-of-service-generator" category="Invoicing & Documents" />
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
