import type { Metadata } from 'next';
import Link from 'next/link';
import ABNLookup from './ABNLookup';
import RelatedTools from '../components/RelatedTools';
import FAQSchema from '../components/FAQSchema';

export const metadata: Metadata = {
  title:
    'ABN Lookup & Validator Australia — Verify Business Numbers Instantly | InvoiceFlow',
  description:
    'Free ABN lookup and validator for Australians. Instantly verify any Australian Business Number, check validity, and view entity type. No signup required.',
  keywords: [
    'ABN lookup',
    'ABN validator',
    'ABN check',
    'Australian Business Number lookup',
    'ABN search',
    'verify ABN',
    'ABN lookup free',
    'ABN validation',
    'check ABN number',
    'ABN register search',
    'ABN checker Australia',
    'is my ABN valid',
  ],
  openGraph: {
    title: 'ABN Lookup & Validator Australia | InvoiceFlow',
    description:
      'Instantly verify any Australian Business Number. Check ABN validity and entity type. Free for Australian freelancers and businesses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABN Lookup & Validator Australia | InvoiceFlow',
    description:
      'Instantly verify any Australian Business Number. Check validity and entity type.',
  },
  alternates: {
    canonical: '/tools/abn-lookup',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'InvoiceFlow ABN Lookup & Validator',
  description:
    'Free ABN lookup and validation tool for Australian freelancers, contractors, and businesses',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  creator: {
    '@type': 'Organization',
    name: 'InvoiceFlow',
    url: 'https://invoiceflow.app',
  },
};

const faqs = [
  {
    question: 'What is an ABN and who needs one in Australia?',
    answer:
      'An Australian Business Number (ABN) is a unique 11-digit identifier for businesses operating in Australia. You need an ABN if you are carrying on a business as a sole trader, partnership, company, or trust. It is required for issuing tax invoices, registering for GST, and dealing with government agencies. Applying for an ABN is free at abr.business.gov.au.',
  },
  {
    question: 'How do I check if an ABN is valid?',
    answer:
      'You can verify an ABN using the Australian Business Register (ABR) lookup at abr.business.gov.au, or use a free ABN validator tool like this one. Every ABN contains a built-in mathematical checksum — if the 11 digits pass the ATO validation algorithm (weighted sum divisible by 89), the ABN is structurally valid.',
  },
  {
    question: "What happens if you don't verify a supplier's ABN?",
    answer:
      'If a supplier does not provide a valid ABN, you are legally required to withhold 47% of the payment amount and remit it to the ATO under the no-ABN withholding rules. You also cannot claim GST credits on invoices with invalid ABNs, which may result in denied deductions during an ATO audit.',
  },
  {
    question: 'How long does it take to get an ABN?',
    answer:
      'For sole traders, ABN registration is usually instant when applying online through the Australian Business Register. Companies typically receive their ABN within 1 business day. Trusts and more complex structures can take 1-20 business days. The application is completely free — avoid third-party services that charge fees.',
  },
  {
    question: 'Can you have multiple ABNs?',
    answer:
      'Each business entity receives one ABN. However, if you operate multiple businesses through different legal structures — for example, a sole trader ABN for freelancing and a Pty Ltd company ABN for a separate venture — each entity would have its own ABN. You cannot hold two ABNs under the same entity.',
  },
];

export default function ABNLookupPage() {
  return (
    <div className="min-h-screen page-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQSchema faqs={faqs} />

      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </Link>
          <div className="flex gap-3">
            <Link
              href="/tools"
              className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              Free Tools
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              Pricing
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            100% free — no signup required
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white heading-font mb-4">
            ABN <span className="gradient-text">Lookup & Validator</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Instantly validate any Australian Business Number. Check if an ABN is legitimate
            before paying an invoice or engaging a contractor.
          </p>
        </div>

        <ABNLookup />

        {/* SEO Content */}
        <section className="mt-16 space-y-12">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              What is an ABN?
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                An <strong className="text-white">Australian Business Number (ABN)</strong> is a
                unique 11-digit identifier issued by the Australian Business Register (ABR). Every
                business operating in Australia — whether a sole trader, company, partnership, or
                trust — needs an ABN to interact with the ATO and other government agencies.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-purple-400 font-semibold mb-2">Who needs an ABN?</div>
                  <ul className="space-y-1 text-sm">
                    <li>&#8226; Freelancers and sole traders</li>
                    <li>&#8226; Companies (Pty Ltd, Ltd)</li>
                    <li>&#8226; Partnerships and trusts</li>
                    <li>&#8226; Government entities</li>
                    <li>&#8226; Anyone earning $75K+ (GST registration)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-pink-400 font-semibold mb-2">What an ABN is used for</div>
                  <ul className="space-y-1 text-sm">
                    <li>&#8226; Issuing tax invoices</li>
                    <li>&#8226; Claiming GST credits</li>
                    <li>&#8226; Registering a business name</li>
                    <li>&#8226; Opening a business bank account</li>
                    <li>&#8226; Dealing with government agencies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              How ABN Validation Works
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                Every ABN contains a built-in checksum that makes it mathematically verifiable.
                Our validator uses the{' '}
                <strong className="text-white">official ATO validation algorithm</strong> to
                instantly confirm whether an ABN is structurally valid.
              </p>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white font-semibold mb-3">The validation algorithm:</div>
                <ol className="space-y-2 text-sm">
                  <li>
                    <span className="text-purple-400 font-mono mr-2">1.</span>
                    Subtract 1 from the first digit of the ABN
                  </li>
                  <li>
                    <span className="text-purple-400 font-mono mr-2">2.</span>
                    Multiply each of the 11 digits by its corresponding weighting factor
                  </li>
                  <li>
                    <span className="text-purple-400 font-mono mr-2">3.</span>
                    Sum all 11 weighted values together
                  </li>
                  <li>
                    <span className="text-purple-400 font-mono mr-2">4.</span>
                    If the total is exactly divisible by 89, the ABN is valid
                  </li>
                </ol>
              </div>
              <p className="text-sm text-slate-500">
                The weighting factors are: 10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19. This algorithm
                is defined by the Australian Taxation Office and is the standard method for
                validating ABNs programmatically.
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              Why You Should Always Verify ABNs
            </h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex gap-4">
                <span className="text-purple-400 font-bold text-lg shrink-0">1.</span>
                <div>
                  <strong className="text-white">Avoid invoice fraud.</strong> Fake ABNs on
                  invoices are a common scam. Always verify the ABN before making a payment to a
                  new supplier, contractor, or freelancer.
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-purple-400 font-bold text-lg shrink-0">2.</span>
                <div>
                  <strong className="text-white">Claim GST credits correctly.</strong> You can
                  only claim GST credits on invoices from GST-registered businesses. If a
                  supplier{"'"}s ABN is invalid, your GST credit claim may be denied by the ATO.
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-purple-400 font-bold text-lg shrink-0">3.</span>
                <div>
                  <strong className="text-white">Withholding tax obligations.</strong> If a
                  contractor does not provide a valid ABN, you are{' '}
                  <strong className="text-white">legally required</strong> to withhold 47% from
                  their payment and remit it to the ATO (no-ABN withholding rules).
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-purple-400 font-bold text-lg shrink-0">4.</span>
                <div>
                  <strong className="text-white">Due diligence for partnerships.</strong> Before
                  entering any business arrangement, confirming a valid ABN is basic due diligence
                  that protects both parties.
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-purple-400 font-bold text-lg shrink-0">5.</span>
                <div>
                  <strong className="text-white">BAS reporting accuracy.</strong> Incorrect ABNs
                  on your records can lead to BAS discrepancies, ATO audits, and potential
                  penalties. Verify upfront to save headaches later.
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              ABN vs ACN vs TFN — What is the Difference?
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-white font-semibold">Identifier</th>
                    <th className="text-left py-3 text-white font-semibold">Digits</th>
                    <th className="text-left py-3 text-white font-semibold">Who needs it</th>
                    <th className="text-left py-3 text-white font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-purple-400 font-semibold">ABN</td>
                    <td className="py-3 font-mono">11</td>
                    <td className="py-3">All businesses</td>
                    <td className="py-3">Business identification, GST, invoicing</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-cyan-400 font-semibold">ACN</td>
                    <td className="py-3 font-mono">9</td>
                    <td className="py-3">Companies only</td>
                    <td className="py-3">ASIC registration, company identification</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-amber-400 font-semibold">TFN</td>
                    <td className="py-3 font-mono">8-9</td>
                    <td className="py-3">All individuals</td>
                    <td className="py-3">Personal tax, employment, investments</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              A company ABN is derived from its ACN with a two-digit prefix. Sole traders get a
              unique ABN that is not based on their TFN. Never share your TFN publicly — ABNs are
              public information.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              How to Get an ABN
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                Applying for an ABN is free and takes about 10 minutes through the Australian
                Business Register website. Here is what you need:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-white font-semibold mb-2">What you will need</div>
                  <ul className="space-y-1 text-sm">
                    <li>&#8226; Your Tax File Number (TFN)</li>
                    <li>&#8226; Photo ID details</li>
                    <li>&#8226; Business activity description</li>
                    <li>&#8226; Expected start date</li>
                    <li>&#8226; Business address</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-white font-semibold mb-2">Processing time</div>
                  <ul className="space-y-1 text-sm">
                    <li>&#8226; Sole traders: usually instant</li>
                    <li>&#8226; Companies: within 1 business day</li>
                    <li>&#8226; Trusts: 1-20 business days</li>
                    <li>&#8226; All applications: free</li>
                    <li>&#8226; ABN does not expire</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 mt-4">
                <p className="text-sm text-purple-300">
                  <strong>Warning:</strong> Some websites charge $50-$200 to apply for an ABN on
                  your behalf. This is unnecessary — the application is{' '}
                  <strong>completely free</strong> at{' '}
                  <a
                    href="https://www.abr.business.gov.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-purple-200"
                  >
                    abr.business.gov.au
                  </a>
                  . Do not pay someone else to do it.
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              ABN and GST Registration
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                Having an ABN does <strong className="text-white">not</strong> automatically mean
                you are registered for GST. GST registration is a separate step — and it is{' '}
                <strong className="text-white">mandatory</strong> once your business turnover
                reaches $75,000 per year (or $150,000 for non-profit organisations).
              </p>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white font-semibold mb-3">GST registration thresholds</div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-teal-400 font-semibold">Must register</div>
                    <ul className="space-y-1 mt-1">
                      <li>&#8226; Turnover $75,000+ per year</li>
                      <li>&#8226; Taxi / rideshare drivers (any turnover)</li>
                      <li>&#8226; NFPs with $150,000+ turnover</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-amber-400 font-semibold">Optional</div>
                    <ul className="space-y-1 mt-1">
                      <li>&#8226; Turnover under $75,000</li>
                      <li>&#8226; May benefit from claiming input GST credits</li>
                      <li>&#8226; Can voluntarily register anytime</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-sm">
                Once registered for GST, you must charge 10% GST on your goods and services,
                lodge BAS statements (quarterly or monthly), and can claim GST credits on
                business purchases. Use our{' '}
                <Link href="/tools/gst-calculator" className="text-teal-400 hover:text-teal-300 underline">
                  GST Calculator
                </Link>{' '}
                to quickly work out GST on any amount.
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white heading-font mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6 text-slate-300">
              <div>
                <h4 className="text-white font-semibold mb-1">
                  Is an ABN the same as a business name?
                </h4>
                <p className="text-sm">
                  No. An ABN identifies your business entity for tax purposes. A business name is
                  the trading name you use publicly. You register a business name through ASIC
                  separately (costs $39 for 1 year or $92 for 3 years). Sole traders operating
                  under their own name do not need to register a separate business name.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Can I have more than one ABN?</h4>
                <p className="text-sm">
                  Generally, each business entity gets one ABN. However, if you operate multiple
                  businesses through different structures (e.g., a sole trader ABN and a company
                  ABN), you would have separate ABNs for each entity.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  What happens if I do not have an ABN?
                </h4>
                <p className="text-sm">
                  Without an ABN, other businesses must withhold 47% of any payment they make to
                  you. You also cannot register for GST, issue tax invoices, or claim GST credits.
                  Getting an ABN is free and instant for most sole traders — there is no reason
                  not to have one.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  Do I need to cancel my ABN if I stop freelancing?
                </h4>
                <p className="text-sm">
                  You should cancel your ABN if you are no longer carrying on a business. An
                  active ABN with no income may trigger ATO queries. You can cancel online
                  through the ABR website — it takes about 5 minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <RelatedTools currentSlug="abn-lookup" category="Business Analytics" />

        {/* CTA */}
        <section className="mt-16 text-center glass rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-white heading-font mb-4">
            ABN Verified. <span className="gradient-text">Now Get Paid Faster.</span>
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            Now that you have verified the ABN, create a professional invoice in seconds.
            InvoiceFlow auto-fills your ABN, calculates GST, and lets clients pay via Stripe —
            no more chasing payments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
            <Link
              href="/tools"
              className="px-6 py-3 rounded-lg glass text-white font-medium hover:bg-white/10 transition-colors"
            >
              More Free Tools
            </Link>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            No credit card required. Free tier includes GST-compliant invoices with your ABN.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20 py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne.</p>
          <div className="flex gap-6">
            <Link href="/tools" className="hover:text-white transition-colors">
              Free Tools
            </Link>
            <Link href="/compare" className="hover:text-white transition-colors">
              Compare
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
  );
}
