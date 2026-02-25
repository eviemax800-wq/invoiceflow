import type { Metadata } from 'next';
import Link from 'next/link';
import InternationalInvoiceCalculator from './InternationalInvoiceCalculator';

const title =
  'International Invoice Calculator for Australian Freelancers | Free Tool — InvoiceFlow';
const description =
  'Free international invoice calculator for Australian freelancers. Convert foreign currency invoices to AUD, check GST-free export rules, compare international payment fees (Wise, PayPal, Stripe, SWIFT), and calculate net amounts after transfer costs.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'how to invoice international clients australia',
    'international invoice calculator freelancer',
    'currency conversion invoice australia',
    'GST on international services australia',
    'freelance international payment calculator',
    'invoice overseas clients australia',
    'export services GST free australia',
    'international freelance invoice template',
    'ato exchange rate invoicing',
    'cross border invoicing australia',
  ],
  openGraph: {
    title: 'International Invoice Calculator — Free Tool | InvoiceFlow',
    description:
      'Convert foreign currency invoices to AUD, check GST-free export rules, compare international payment fees, and calculate what you actually receive. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/international-invoice-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International Invoice Calculator — Free Tool | InvoiceFlow',
    description:
      'Convert foreign currency invoices to AUD, check GST export rules, and compare international payment fees. Free — no signup required.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/international-invoice-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'International Invoice Calculator',
  description:
    'Free international invoice calculator for Australian freelancers. Convert foreign currency invoices to AUD, check GST-free export rules, compare international payment fees (Wise, PayPal, Stripe, SWIFT), and calculate net amounts after transfer costs.',
  url: 'https://www.invoiceflow.au/tools/international-invoice-calculator',
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

export default function InternationalInvoiceCalculatorPage() {
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
              International Invoice{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Invoice overseas clients with confidence. Convert foreign currencies to AUD, check
              whether GST applies to your export services, compare international payment fees, and
              calculate exactly what you&apos;ll receive after transfer costs.
            </p>
          </div>

          {/* Calculator Tool */}
          <InternationalInvoiceCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Invoicing International Clients from Australia */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Invoicing International Clients from Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Working with overseas clients is increasingly common for Australian freelancers,
                  but it introduces complexities that domestic invoicing doesn&apos;t have. From
                  currency conversion and exchange rate timing to GST export exemptions and
                  international transfer fees, there&apos;s a lot more to get right when invoicing
                  across borders.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      GST-Free Export Services
                    </h4>
                    <p className="text-sm">
                      If you&apos;re registered for GST and your client is overseas, your services
                      are generally GST-free under the export exemption rules. This means you
                      don&apos;t charge the 10% GST on your invoice — but you can still claim GST
                      credits on your business expenses. This is a significant cash flow advantage
                      that many freelancers overlook.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      ABN on Every Invoice
                    </h4>
                    <p className="text-sm">
                      Even when invoicing international clients, you must include your ABN on
                      every invoice. Without an ABN, Australian payers are required to withhold
                      46.5% of the payment. While overseas clients aren&apos;t subject to
                      Australian withholding rules, your ABN is still essential for your own tax
                      reporting and to maintain your professional credibility.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Currency on the Invoice
                    </h4>
                    <p className="text-sm">
                      You can invoice in any currency — USD, GBP, EUR, or any other — but for
                      Australian tax purposes, you&apos;ll need to convert the amount to AUD. The
                      ATO publishes monthly exchange rates that you should use for your BAS and
                      tax return. Always note the currency and exchange rate on your invoice for
                      clear record-keeping.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Payment Terms for International Work
                    </h4>
                    <p className="text-sm">
                      International payments take longer than domestic transfers. SWIFT transfers
                      can take 3-5 business days, and some methods take even longer. Factor this
                      into your payment terms — consider requesting deposits upfront and using
                      milestone billing to maintain cash flow. Specify the payment method and
                      currency clearly on every invoice.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Key Takeaway</p>
                  <p className="text-sm">
                    International invoicing is more profitable than many freelancers realise.
                    The GST-free export exemption means you keep the full invoice amount while
                    still claiming input tax credits. Combined with the right payment method to
                    minimise transfer fees, working with overseas clients can be more financially
                    advantageous than domestic work.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Understanding GST on International Services */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding GST on International Services
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The ATO&apos;s export exemption rules determine whether you charge GST on
                  services provided to overseas clients. The general rule is straightforward, but
                  there are important exceptions that Australian freelancers need to understand.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">When Services Are GST-Free</h4>
                    <p className="text-sm text-slate-400">
                      Your services are GST-free when the recipient (your client) is outside
                      Australia and the service is not &ldquo;connected with Australia.&rdquo; For
                      most freelancers — developers, designers, writers, consultants, marketers —
                      remote work performed from Australia for an overseas client qualifies as a
                      GST-free export. The client must be a non-resident, and the service must not
                      relate to Australian real property or goods located in Australia.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">When GST Still Applies</h4>
                    <p className="text-sm text-slate-400">
                      GST applies even for overseas clients when the service is &ldquo;connected
                      with Australia.&rdquo; This includes services related to Australian real
                      property (architecture, building, surveying), services performed on goods
                      physically located in Australia, and services where the client is physically
                      present in Australia when the service is performed (e.g., in-person training
                      or consulting for a visiting overseas client).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">The &ldquo;Connected with Australia&rdquo; Test</h4>
                    <p className="text-sm text-slate-400">
                      The ATO uses a multi-factor test to determine whether a service is
                      &ldquo;connected with Australia.&rdquo; Key factors include: where the
                      service is physically performed, whether it relates to Australian property
                      or goods, whether the client or their representative is in Australia when
                      the service is provided, and whether the service relates to rights or
                      obligations under Australian law.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Input Tax Credits</h4>
                    <p className="text-sm text-slate-400">
                      Even though you don&apos;t charge GST on export services, you can still
                      claim GST credits on your business expenses related to those services. This
                      includes your computer equipment, software subscriptions, office expenses,
                      and professional development. This makes international work effectively more
                      profitable from a tax perspective compared to domestic work where you collect
                      GST but must remit it to the ATO.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Scenario</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">GST Status</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Example</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Remote service for overseas client</td>
                        <td className="py-3 px-4 text-teal-400">GST-Free</td>
                        <td className="py-3 px-4">Web development for a US startup</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Consulting for overseas client (remote)</td>
                        <td className="py-3 px-4 text-teal-400">GST-Free</td>
                        <td className="py-3 px-4">Marketing strategy for a UK agency</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Service on Australian property</td>
                        <td className="py-3 px-4 text-amber-400">GST Applies</td>
                        <td className="py-3 px-4">Architecture for a building in Sydney</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">In-person service for visiting client</td>
                        <td className="py-3 px-4 text-amber-400">GST Applies</td>
                        <td className="py-3 px-4">On-site training in Melbourne</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 3: Currency Conversion Best Practices */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Currency Conversion Best Practices for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Getting currency conversion right is critical for both accurate invoicing and
                  correct tax reporting. Using the wrong exchange rate — or converting at the wrong
                  time — can cost you hundreds or even thousands of dollars over a year.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      ATO Monthly Exchange Rates
                    </h4>
                    <p className="text-sm">
                      For tax reporting purposes, the ATO publishes monthly average exchange rates
                      on their website. You should use these rates when preparing your BAS and
                      income tax return. The ATO rate for the month the income was earned (or the
                      invoice was issued) is the one to use. Bookmark the ATO exchange rate page —
                      you&apos;ll reference it every quarter.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Invoice Rate vs. Payment Rate
                    </h4>
                    <p className="text-sm">
                      When you issue an invoice in USD, the AUD equivalent depends on the exchange
                      rate at that time. But by the time the payment arrives and converts, the rate
                      may have changed. This creates a foreign exchange gain or loss. For tax
                      purposes, report the ATO monthly rate. For your own records, also note the
                      actual amount received in AUD.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Hedging Your Currency Risk
                    </h4>
                    <p className="text-sm">
                      If you have significant ongoing foreign currency income, consider holding a
                      foreign currency account (available through Wise, Airwallex, or your bank).
                      This lets you receive payments without immediate conversion and choose when
                      to convert to AUD. You can also batch conversions to average out rate
                      fluctuations over time.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Which Rate to Use on Invoices
                    </h4>
                    <p className="text-sm">
                      On the invoice itself, quote the amount in the agreed currency (e.g., USD
                      5,000). You can optionally include an indicative AUD equivalent for your
                      records. For the actual tax reporting, always use the ATO monthly rate for
                      the relevant month. Keep a spreadsheet tracking each invoice&apos;s foreign
                      amount, ATO rate, and AUD equivalent.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Pro Tip</p>
                  <p className="text-sm">
                    If your international income is substantial, consider quoting in AUD instead
                    of the client&apos;s currency. This shifts the exchange rate risk to the client
                    and simplifies your accounting. Some clients prefer this because it gives them
                    a fixed cost. If they insist on their currency, factor a small buffer (2-3%)
                    into your rate to cover exchange rate fluctuations.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: International Payment Methods Compared */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                International Payment Methods Compared
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The payment method you choose for international invoices directly impacts how
                  much you actually receive. Transfer fees, exchange rate markups, and processing
                  times vary dramatically between providers. Here&apos;s how the major options
                  compare for Australian freelancers receiving international payments.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Bank Transfer (SWIFT)</h4>
                    <p className="text-sm text-slate-400">
                      Traditional international wire transfers via the SWIFT network. Your bank
                      charges a receiving fee ($10-25 AUD typically), plus the sender&apos;s bank
                      charges a sending fee, and intermediary banks may deduct additional fees.
                      Exchange rate markup is usually 1-3% above the mid-market rate. Transfers
                      take 2-5 business days. Best for large invoices ($5,000+) where the
                      fixed fees are proportionally small.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Wise (TransferWise)</h4>
                    <p className="text-sm text-slate-400">
                      The gold standard for international freelancer payments. Wise uses the real
                      mid-market exchange rate with a transparent fee of 0.4-0.7% depending on the
                      currency pair. You get a multi-currency account with local bank details in
                      USD, GBP, EUR, and more — so clients pay as if it&apos;s a local transfer.
                      Funds arrive in 1-2 business days. Best overall choice for most freelancers.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">PayPal</h4>
                    <p className="text-sm text-slate-400">
                      Widely accepted but expensive. PayPal charges a 2.6% + $0.30 fee for
                      receiving payments, plus a currency conversion fee of 3-4% above the
                      mid-market rate. Total cost can be 5-6% of the invoice amount. Funds are
                      available instantly in your PayPal balance. Convenient for small amounts
                      and one-off clients, but the fees erode your margin significantly on
                      larger invoices.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Stripe</h4>
                    <p className="text-sm text-slate-400">
                      Excellent for freelancers who want to send payment links or integrate
                      payments into their invoicing workflow. Stripe charges 2.9% + $0.30 per
                      transaction for international cards, with an additional 2% for currency
                      conversion. Payouts to your Australian bank account take 2-3 business days.
                      Best for freelancers who want a professional checkout experience and
                      don&apos;t mind the higher fees.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Payoneer</h4>
                    <p className="text-sm text-slate-400">
                      Popular with freelancers on platforms like Upwork, Fiverr, and 99designs.
                      Payoneer charges up to 2% for currency conversion and a $1.50 fee for
                      withdrawals to your Australian bank. You get receiving accounts in USD,
                      EUR, GBP, and JPY. Transfer time is 2-5 business days. Competitive rates
                      for platform-based work, but Wise is usually cheaper for direct client
                      invoicing.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Choosing the Right Method</h4>
                    <p className="text-sm text-slate-400">
                      For most Australian freelancers, Wise is the best default choice — lowest
                      fees, real exchange rate, and fast transfers. Use SWIFT for very large
                      invoices where the client prefers traditional banking. Use PayPal only if
                      the client insists or for very small amounts. Use Stripe if you want
                      integrated payment links. Factor payment method fees into your rate
                      calculations.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Method</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Total Cost</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Speed</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Wise</td>
                        <td className="py-3 px-4 text-teal-400">0.4-0.7%</td>
                        <td className="py-3 px-4">1-2 days</td>
                        <td className="py-3 px-4">Most freelancers (best value)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Bank (SWIFT)</td>
                        <td className="py-3 px-4">$15-40 + 1-3%</td>
                        <td className="py-3 px-4">2-5 days</td>
                        <td className="py-3 px-4">Large invoices ($5,000+)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Stripe</td>
                        <td className="py-3 px-4">2.9% + $0.30</td>
                        <td className="py-3 px-4">2-3 days</td>
                        <td className="py-3 px-4">Payment links, automation</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Payoneer</td>
                        <td className="py-3 px-4">Up to 2% + $1.50</td>
                        <td className="py-3 px-4">2-5 days</td>
                        <td className="py-3 px-4">Platform freelancers</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">PayPal</td>
                        <td className="py-3 px-4">5-6% total</td>
                        <td className="py-3 px-4">Instant</td>
                        <td className="py-3 px-4">Small amounts, one-off clients</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Invoice international clients{' '}
              <span className="gradient-text">with confidence</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles multi-currency invoicing, GST calculations, and payment
              tracking — so every international invoice is professional, compliant, and
              optimised for your bottom line.
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
