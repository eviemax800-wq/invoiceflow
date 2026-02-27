import type { Metadata } from 'next';
import Link from 'next/link';
import NDAGenerator from './NDAGenerator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title =
  'Freelance NDA Generator Australia | Free Non-Disclosure Agreement Template — InvoiceFlow';
const description =
  'Free NDA generator for Australian freelancers. Generate professional non-disclosure and confidentiality agreements — mutual or one-way, with custom clauses, exclusions, and Australian governing law. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'NDA template freelancer australia',
    'non-disclosure agreement generator free',
    'confidentiality agreement template freelancer',
    'freelance NDA generator australia',
    'mutual NDA template free',
    'one-way NDA template australia',
    'confidentiality agreement generator',
    'NDA template sole trader',
    'freelance confidentiality agreement',
    'australian NDA template free',
  ],
  openGraph: {
    title: 'Freelance NDA Generator — Free Non-Disclosure Agreement Template | InvoiceFlow',
    description:
      'Generate professional non-disclosure agreements for Australian freelancers. Mutual or one-way NDAs with confidentiality definitions, exclusions, duration, and governing law. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/nda-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance NDA Generator — Free Non-Disclosure Agreement Template | InvoiceFlow',
    description:
      'Generate professional non-disclosure agreements for Australian freelancers. Free — no signup required.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/nda-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance NDA Generator',
  description:
    'Generate professional non-disclosure and confidentiality agreements for Australian freelancers and sole traders. Includes mutual and one-way NDA options, custom confidential information definitions, exclusions, duration settings, and Australian governing law clauses.',
  url: 'https://www.invoiceflow.au/tools/nda-generator',
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

export default function NDAGeneratorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-400/10 border border-slate-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-slate-400 rounded-full" />
              <span className="text-slate-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Freelance NDA{' '}
              <span className="bg-gradient-to-r from-slate-400 to-zinc-500 bg-clip-text text-transparent">Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate a professional Non-Disclosure Agreement tailored to your freelance engagement.
              Choose mutual or one-way, define what&apos;s confidential, set the duration, and add
              additional protections — all formatted for Australian law.
            </p>
          </div>

          {/* Generator Tool */}
          <NDAGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Freelancers Need NDAs */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Need NDAs
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  As a freelancer, you regularly handle sensitive client information — business
                  strategies, financial data, unreleased products, customer lists, and proprietary
                  processes. Without a signed NDA, there is no legal framework protecting either party
                  if that information is disclosed, misused, or leaked. Here is why every freelancer
                  should have an NDA ready:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-slate-400 text-sm font-bold">01</span>
                      Protecting Intellectual Property
                    </h4>
                    <p className="text-sm">
                      When clients share product ideas, technical architectures, or creative briefs with
                      you, they need assurance that information will not end up in a competitor&apos;s
                      hands. An NDA creates a legally binding obligation to keep that information private.
                      For freelancers who work across multiple clients in the same industry, this is
                      essential for maintaining trust and avoiding conflicts of interest.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-slate-400 text-sm font-bold">02</span>
                      Building Client Trust
                    </h4>
                    <p className="text-sm">
                      Presenting an NDA before a project begins signals professionalism. It tells the
                      client you understand the value of their information and take confidentiality
                      seriously. For enterprise clients and larger organisations, an NDA is often a
                      prerequisite before any meaningful discussion can take place. Having one ready
                      removes friction and accelerates the engagement.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-slate-400 text-sm font-bold">03</span>
                      Legal Standing in Disputes
                    </h4>
                    <p className="text-sm">
                      Without a signed NDA, proving that information was confidential and that its
                      disclosure caused harm becomes significantly harder. An NDA defines exactly what
                      is confidential, what the receiving party can and cannot do with it, and what
                      remedies are available if the agreement is breached. Australian courts require
                      clear evidence of confidentiality obligations — a signed NDA provides exactly that.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-slate-400 text-sm font-bold">04</span>
                      Protecting Your Own Work
                    </h4>
                    <p className="text-sm">
                      NDAs are not just for clients. A mutual NDA protects your proprietary methods,
                      tools, pricing strategies, and business processes too. If you share your workflow,
                      custom templates, or technical approach during a pitch or discovery phase, a mutual
                      NDA ensures the client cannot share that information with competitors or use it to
                      replicate your work internally without engaging you.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-slate-400/10 to-zinc-500/10 border border-slate-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-slate-400 font-medium mb-2">Bottom Line</p>
                  <p className="text-sm">
                    An NDA should be signed before any confidential information is exchanged — not
                    after. Whether you are pitching a project, starting a collaboration, or onboarding
                    a new client, having a ready-to-sign NDA protects both parties and sets a
                    professional tone from day one. Use this generator to create one in minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Types of NDAs: Mutual vs One-Way */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Types of NDAs: Mutual vs One-Way
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Not all NDAs are the same. The type you need depends on whether one or both parties
                  will be sharing confidential information. Choosing the right structure ensures
                  proportionate protection without unnecessary complexity.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Mutual NDA (Bilateral)</h4>
                    <p className="text-sm text-slate-400 mb-3">
                      Both parties share and receive confidential information. Each party is both a
                      &ldquo;Disclosing Party&rdquo; and a &ldquo;Receiving Party.&rdquo; This is the
                      most common type for freelance engagements where both sides bring proprietary
                      knowledge to the table.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-slate-500 font-medium mb-1">Best for:</p>
                      <ul className="text-xs text-slate-400 space-y-1">
                        <li>Joint ventures and collaborations</li>
                        <li>Consulting engagements where you share methodology</li>
                        <li>Partnerships and co-development projects</li>
                        <li>Pitches where both parties share strategic info</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">One-Way NDA (Unilateral)</h4>
                    <p className="text-sm text-slate-400 mb-3">
                      Only one party discloses confidential information. The other party agrees to
                      keep it secret. This is simpler and more straightforward, but only protects the
                      disclosing party&apos;s information.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-slate-500 font-medium mb-1">Best for:</p>
                      <ul className="text-xs text-slate-400 space-y-1">
                        <li>Client onboarding (client shares data with you)</li>
                        <li>Hiring subcontractors for your projects</li>
                        <li>Pre-sale discussions where only one side shares</li>
                        <li>Situations with a clear information asymmetry</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Feature</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Mutual NDA</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">One-Way NDA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Who shares info</td>
                        <td className="py-3 px-4">Both parties</td>
                        <td className="py-3 px-4">One party only</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Who is protected</td>
                        <td className="py-3 px-4">Both parties equally</td>
                        <td className="py-3 px-4">Only the disclosing party</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Complexity</td>
                        <td className="py-3 px-4">Slightly more complex</td>
                        <td className="py-3 px-4">Simpler and more direct</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Common use case</td>
                        <td className="py-3 px-4">Collaborations, partnerships</td>
                        <td className="py-3 px-4">Client onboarding, subcontractors</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-slate-400/10 to-zinc-500/10 border border-slate-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-slate-400 font-medium mb-2">Pro Tip</p>
                  <p className="text-sm">
                    When in doubt, use a mutual NDA. Even if you think only one party will be sharing
                    confidential information, conversations often evolve and both sides end up disclosing
                    sensitive details. A mutual NDA ensures neither party is left unprotected. It also
                    signals fairness — neither party is asking the other to accept obligations they
                    would not accept themselves.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Key Elements of an Enforceable NDA in Australia */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Key Elements of an Enforceable NDA in Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  An NDA is only useful if it would hold up in court. Australian law does not require
                  NDAs to follow a specific format, but certain elements are essential for
                  enforceability. Without them, a court may find the agreement too vague, too broad,
                  or otherwise unenforceable.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-slate-400 text-sm font-bold">01</span>
                      Clear Definition of Confidential Information
                    </h4>
                    <p className="text-sm">
                      The NDA must define what constitutes &ldquo;Confidential Information&rdquo; with
                      sufficient specificity. A vague definition like &ldquo;all information shared
                      between the parties&rdquo; may be struck down as overly broad. List specific
                      categories — business plans, financial data, technical specifications, customer
                      lists — and include a catch-all for information that is &ldquo;designated as
                      confidential or reasonably should be understood to be confidential.&rdquo;
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-slate-400 text-sm font-bold">02</span>
                      Identified Parties and Signatures
                    </h4>
                    <p className="text-sm">
                      Both parties must be clearly identified by name, ABN (if applicable), and contact
                      details. Both must sign the agreement. Under the Electronic Transactions Act
                      (Cth), digital signatures are legally valid in Australia, so tools like DocuSign
                      or HelloSign are acceptable. Without signatures from both parties, the NDA is
                      merely a proposal, not a binding agreement.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-slate-400 text-sm font-bold">03</span>
                      Reasonable Duration and Scope
                    </h4>
                    <p className="text-sm">
                      Australian courts assess whether an NDA&apos;s restrictions are reasonable in scope,
                      duration, and geographic extent. An NDA that lasts forever and covers all
                      information of any kind is more likely to be challenged. Typical durations range
                      from one to five years, depending on the sensitivity of the information. For
                      trade secrets, indefinite duration may be appropriate. The scope should match
                      the actual engagement.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-slate-400 text-sm font-bold">04</span>
                      Standard Exclusions
                    </h4>
                    <p className="text-sm">
                      An enforceable NDA must include standard exclusions — information that is not
                      considered confidential. These typically include: information already publicly
                      available, information the receiving party already knew, information independently
                      developed, and information required to be disclosed by law. Without these
                      exclusions, the NDA may be deemed unreasonable and unenforceable.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-slate-400 text-sm font-bold">05</span>
                      Governing Law Clause
                    </h4>
                    <p className="text-sm">
                      The NDA should specify which state or territory&apos;s laws govern the agreement.
                      This determines which courts have jurisdiction over disputes. For Australian
                      freelancers, this is typically the state where you operate. Without a governing
                      law clause, jurisdictional disputes can add cost and complexity to enforcement.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-slate-400 text-sm font-bold">06</span>
                      Consideration (Mutual Benefit)
                    </h4>
                    <p className="text-sm">
                      For a contract to be binding under Australian law, there must be
                      &ldquo;consideration&rdquo; — something of value exchanged. In a mutual NDA,
                      the consideration is the mutual exchange of confidential information. In a
                      one-way NDA, the consideration is typically the opportunity to participate in
                      the business relationship or access the disclosed information. Making the
                      purpose clear helps establish this element.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Common NDA Mistakes to Avoid */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common NDA Mistakes to Avoid
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Even well-intentioned NDAs can fail to protect you if they contain common mistakes.
                  These errors can render clauses unenforceable, create loopholes, or give a false
                  sense of security. Here are the mistakes freelancers make most often:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Overly Broad Definitions</h4>
                    <p className="text-sm text-slate-400">
                      Defining &ldquo;Confidential Information&rdquo; as &ldquo;everything shared
                      between the parties&rdquo; or &ldquo;all information in any form&rdquo; is too
                      broad to be enforceable. Courts expect specificity. List the actual categories
                      of information being protected — business plans, code, financial records, client
                      lists. The more specific you are, the stronger the NDA. Generic definitions
                      invite challenges.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Unreasonable Duration</h4>
                    <p className="text-sm text-slate-400">
                      An NDA with a 20-year or permanent duration for non-trade-secret information may
                      be deemed unreasonable by an Australian court. Match the duration to the
                      sensitivity and lifespan of the information. General business information
                      typically warrants one to three years. Trade secrets and highly sensitive IP
                      may justify five years or indefinite protection. Be deliberate about the
                      timeframe — do not default to the longest option without reason.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Missing Standard Exclusions</h4>
                    <p className="text-sm text-slate-400">
                      Omitting standard exclusions (publicly available information, already-known
                      information, independently developed information, legally required disclosures)
                      can make your NDA unenforceable. These exclusions are not optional niceties — they
                      are fundamental to the enforceability of the agreement. Without them, a court may
                      find the NDA imposes unreasonable obligations and void it entirely.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">No Governing Law Clause</h4>
                    <p className="text-sm text-slate-400">
                      If your NDA does not specify which jurisdiction&apos;s laws apply, disputes become
                      significantly more complex and expensive. This is particularly important when
                      working with interstate or international clients. Always include a governing law
                      clause specifying your state or territory. For Australian freelancers, this
                      typically means the state where you operate your business. It costs nothing to
                      include and saves headaches if a dispute arises.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Not Signing Before Sharing</h4>
                    <p className="text-sm text-slate-400">
                      The most common mistake is sharing confidential information before the NDA is
                      signed. Once information is disclosed without a signed NDA in place, you have no
                      legal protection for that disclosure. Always sign first, share second. This
                      applies to discovery calls, pitch meetings, and initial consultations where
                      sensitive business information is often shared informally.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Using a One-Size-Fits-All Template</h4>
                    <p className="text-sm text-slate-400">
                      Downloading a generic NDA template from the internet and using it without
                      customisation is risky. NDAs should be tailored to the specific engagement — the
                      type of information being shared, the purpose of the disclosure, the duration
                      that makes sense for the project, and the governing jurisdiction. A template is a
                      starting point, not a finished document. Review and customise every NDA before
                      sending it.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-slate-400/10 to-zinc-500/10 border border-slate-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-slate-400 font-medium mb-2">Avoid These Traps</p>
                  <p className="text-sm">
                    The NDAs generated by this tool include all standard exclusions, reasonable
                    durations, governing law clauses, and specific definitions by default. Customise
                    the categories of confidential information to match your actual engagement, review
                    the output carefully, and have both parties sign before any confidential information
                    is exchanged.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Protect your information and{' '}
              <span className="bg-gradient-to-r from-slate-400 to-zinc-500 bg-clip-text text-transparent">get paid with confidence</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, GST calculations, and payment tracking — so once
              your NDA and contract are signed, every invoice is professional, compliant, and on time.
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
        
        <RelatedTools currentSlug="nda-generator" category="Invoicing & Documents" />
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
