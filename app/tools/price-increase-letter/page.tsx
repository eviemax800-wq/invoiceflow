import type { Metadata } from 'next';
import Link from 'next/link';
import PriceIncreaseLetter from './PriceIncreaseLetter';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title =
  'Free Price Increase Letter Generator for Freelancers — Rate Increase Template | InvoiceFlow';
const description =
  'Generate a professional price increase letter for your freelance clients. Notify clients of rate changes with proper notice, GST calculations, and Australian business formatting. Free rate increase notification template — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'price increase letter template freelancer',
    'how to raise rates freelancer australia',
    'rate increase notification template',
    'freelance price increase email',
    'freelancer rate increase letter',
    'raise prices freelance business',
    'price increase notice template australia',
    'freelance rate change notification',
    'how to tell clients about price increase',
    'sole trader rate increase letter',
    'freelancer pricing update template',
    'rate adjustment letter australia',
  ],
  openGraph: {
    title: 'Price Increase Letter Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional price increase letters for freelance clients. Rate increase notification templates for Australian freelancers. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/price-increase-letter',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Price Increase Letter Generator — Free Tool | InvoiceFlow',
    description:
      'Generate professional price increase letters for freelance clients. Rate increase notification templates for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/price-increase-letter',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Price Increase Letter Generator',
  description:
    'Generate professional price increase letters for freelance clients. Create rate increase notifications with proper advance notice, GST calculations, and Australian business formatting for freelancers and sole traders.',
  url: 'https://www.invoiceflow.au/tools/price-increase-letter',
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

export default function PriceIncreaseLetterPage() {
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
              Price Increase Letter{' '}
              <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generate a professional rate increase letter to notify your clients. Set your new
              rates, choose your tone, and get a polished letter with proper advance notice,
              percentage calculations, and GST-inclusive amounts — ready to send.
            </p>
          </div>

          {/* Generator Tool */}
          <PriceIncreaseLetter />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: When Should Freelancers Raise Their Rates? */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                When Should Freelancers Raise Their Rates?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Raising your rates is one of the most important — and most avoided — business
                  decisions a freelancer can make. If you haven&apos;t reviewed your pricing in
                  the last 12 months, you&apos;re almost certainly leaving money on the table. Here
                  are the key signs it&apos;s time for a rate increase:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Annual Cost of Living Increases
                    </h4>
                    <p className="text-sm">
                      The Australian CPI has risen steadily year on year. If your rates haven&apos;t
                      kept pace with inflation, your real income is declining. A 3-5% annual
                      adjustment simply maintains your purchasing power — it&apos;s not a raise,
                      it&apos;s a correction.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Your Skills Have Grown
                    </h4>
                    <p className="text-sm">
                      If you&apos;ve completed new certifications, learned new technologies, or
                      simply become faster and more efficient at delivering work, your rates should
                      reflect that added value. Clients benefit from your experience — they should
                      pay for it.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Market Rates Have Moved
                    </h4>
                    <p className="text-sm">
                      Research what other freelancers in your niche and location are charging. If
                      the market rate for your services has increased by 10-20% and you haven&apos;t
                      adjusted, you&apos;re undervaluing yourself. Platforms like Upwork, industry
                      surveys, and freelancer communities provide benchmarks.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      You&apos;re Consistently Overbooked
                    </h4>
                    <p className="text-sm">
                      If you&apos;re turning away clients or working longer hours than you want,
                      your rates are too low. Raising your prices is the healthiest way to manage
                      demand — it filters for clients who value quality and gives you better
                      work-life balance.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Rule of Thumb</p>
                  <p className="text-sm">
                    At a minimum, review your rates annually — ideally at the start of a new
                    financial year (July in Australia) or calendar year. Even a modest 5-10%
                    increase compounded annually makes a significant difference to your income
                    over 3-5 years.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How to Communicate a Price Increase */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Communicate a Price Increase
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The way you communicate a rate increase matters just as much as the increase
                  itself. A well-crafted notification maintains trust, reinforces your value, and
                  sets clear expectations. Here are the best practices:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Give Advance Notice</h4>
                    <p className="text-sm text-slate-400">
                      Always give at least 30 days&apos; notice before new rates take effect. For
                      long-term clients or significant increases (15%+), 60-90 days is more
                      respectful. This gives clients time to budget and plan. Springing a rate
                      increase with immediate effect damages trust and relationships.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Justify with Value, Not Apology</h4>
                    <p className="text-sm text-slate-400">
                      Frame the increase around the value you deliver, not your costs. Instead of
                      &ldquo;I need to charge more because my rent went up,&rdquo; say &ldquo;My
                      rates are being updated to reflect the quality and expertise I bring to every
                      project.&rdquo; Never apologise for raising your rates.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Be Specific About Numbers</h4>
                    <p className="text-sm text-slate-400">
                      State the current rate, the new rate, and when it takes effect. Ambiguity
                      creates confusion and opens the door to negotiation. Clear numbers demonstrate
                      confidence and professionalism. Include GST-inclusive amounts if you&apos;re
                      GST-registered.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Grandfather Existing Clients</h4>
                    <p className="text-sm text-slate-400">
                      Consider offering loyal, long-term clients a grace period at the old rate — for
                      example, honouring current rates for an additional 30-60 days beyond the
                      effective date, or applying the new rate only to new projects. This rewards
                      loyalty and softens the transition.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 sm:col-span-2">
                    <h4 className="text-white font-semibold mb-2">Choose the Right Timing</h4>
                    <p className="text-sm text-slate-400">
                      The best times to announce a rate increase are: at the start of a new financial
                      or calendar year (a natural reset point), after completing a successful project
                      (when your value is fresh in the client&apos;s mind), or when renewing a
                      retainer agreement. Avoid raising rates mid-project or during a client crisis.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">What If a Client Pushes Back?</p>
                  <p className="text-sm">
                    Some pushback is normal — especially from budget-conscious clients. Be prepared
                    to explain the value, but don&apos;t negotiate against yourself. If a client
                    truly can&apos;t afford your new rates, you can offer a reduced scope of work at
                    the new rate rather than discounting. Clients who leave over a reasonable rate
                    increase were often undervaluing your work to begin with.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Australian Freelancer Considerations */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Price Increase Letter Best Practices for Australian Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If you&apos;re an Australian freelancer or sole trader, there are specific
                  considerations around GST, contracts, and tax obligations when changing your rates.
                  Getting these right avoids complications with clients and the ATO.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">GST</span>
                      GST Implications of Rate Changes
                    </h4>
                    <p className="text-sm">
                      If you&apos;re GST-registered (turnover $75,000+), your rate increase also
                      changes the GST component of your invoices. A rate increase from $100/hr to
                      $120/hr means the GST goes from $10 to $12 per hour. Always communicate
                      both the ex-GST and inc-GST amounts so clients understand the full impact.
                      If your rate increase pushes you over the $75,000 GST threshold for the
                      first time, you&apos;ll need to register for GST and factor that into your
                      new pricing.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">Contracts</span>
                      Contract Update Requirements
                    </h4>
                    <p className="text-sm">
                      If you have an existing contract or service agreement with the client, check
                      whether it includes a fixed rate for a specified period. You may need to wait
                      until the contract term expires or negotiate an amendment. Most freelance
                      contracts include a clause allowing rate reviews — use our{' '}
                      <a href="/tools/contract-clause-generator" className="text-teal-400 hover:underline">
                        Contract Clause Generator
                      </a>{' '}
                      to add one to future agreements. Always put the new rate in writing and get
                      acknowledgement from the client.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">ATO</span>
                      ATO Considerations
                    </h4>
                    <p className="text-sm">
                      A rate increase means higher income, which may push you into a higher tax
                      bracket. Review your estimated tax obligations and consider adjusting your
                      quarterly PAYG instalments. If your annual turnover crosses the $75,000
                      threshold, you must register for GST within 21 days. Use the ATO&apos;s
                      online services to update your details and adjust instalment amounts.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">Records</span>
                      Keep Documentation
                    </h4>
                    <p className="text-sm">
                      Retain a copy of every price increase notification you send. This creates
                      a clear paper trail for when the new rate took effect — important for resolving
                      disputes and for your own financial records. Store the letter alongside the
                      client&apos;s acknowledgement (if received) in your project files.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Increase Size</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Recommended Notice</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Best Timing</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">3-5% (CPI adjustment)</td>
                        <td className="py-3 px-4">30 days</td>
                        <td className="py-3 px-4">Start of financial year (July)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">5-15% (standard increase)</td>
                        <td className="py-3 px-4">30-60 days</td>
                        <td className="py-3 px-4">New year or after project completion</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">15-25% (significant jump)</td>
                        <td className="py-3 px-4">60-90 days</td>
                        <td className="py-3 px-4">Contract renewal or retainer review</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">25%+ (major repositioning)</td>
                        <td className="py-3 px-4">90 days</td>
                        <td className="py-3 px-4">New client engagements only (grandfather existing)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 4: CTA */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Helps Manage Rate Changes
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Raising your rates is just the first step — you also need to update your invoicing,
                  generate new quotes at the updated pricing, and ensure every invoice going forward
                  reflects the correct amounts. InvoiceFlow makes this seamless:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Update Rates Instantly</h4>
                    <p className="text-xs text-slate-400">
                      Change your default hourly, project, or retainer rate in InvoiceFlow and every
                      new invoice automatically uses the updated pricing. No need to manually adjust
                      each invoice — set it once and it flows through to all future billing.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Generate New Quotes</h4>
                    <p className="text-xs text-slate-400">
                      Send updated quotes to clients at your new rates. InvoiceFlow&apos;s quote
                      templates automatically calculate GST, apply your updated pricing, and present
                      a professional document the client can approve with one click.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Track Revenue Impact</h4>
                    <p className="text-xs text-slate-400">
                      See exactly how your rate increase affects your bottom line. InvoiceFlow&apos;s
                      reporting dashboard shows revenue trends over time, so you can measure the
                      real impact of your pricing decisions on monthly and annual income.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Automated GST Compliance</h4>
                    <p className="text-xs text-slate-400">
                      Every invoice automatically calculates the correct GST at your new rate. At
                      BAS time, export your invoices and know exactly how much GST to report — no
                      manual recalculations needed after a rate change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Raise your rates and{' '}
              <span className="gradient-text">get paid what you&apos;re worth</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, GST calculations, and payment tracking — so after
              you raise your rates, every invoice reflects your new pricing automatically.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/quote-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Quote Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="price-increase-letter" category="Invoicing & Documents" />
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
