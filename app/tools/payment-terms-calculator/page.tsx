import type { Metadata } from 'next';
import Link from 'next/link';
import PaymentTermsCalculator from './PaymentTermsCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title = 'Payment Terms Calculator Australia | Invoice Due Date Calculator — InvoiceFlow';
const description =
  'Free payment terms calculator for Australian freelancers. Calculate invoice due dates for Net 7/14/30/60/90, EOM, and custom terms. Includes early payment discount calculator and milestone payment schedules.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'payment terms calculator',
    'net 30 calculator',
    'invoice due date calculator',
    'payment terms australia',
    'early payment discount calculator',
    'net 60 payment terms',
  ],
  openGraph: {
    title: 'Payment Terms Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate invoice due dates, early payment discounts, and milestone schedules. Free for Australian freelancers.',
    url: 'https://www.invoiceflow.au/tools/payment-terms-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payment Terms Calculator — Free Tool | InvoiceFlow',
    description:
      'When is your invoice actually due? Calculate due dates, early payment discounts, and milestone schedules instantly.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/payment-terms-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Payment Terms Calculator Australia',
  description:
    'Calculate invoice due dates for any payment terms — Net 7/14/30/60/90, EOM, custom days. Includes early payment discount calculator and milestone payment schedules.',
  url: 'https://www.invoiceflow.au/tools/payment-terms-calculator',
  applicationCategory: 'FinanceApplication',
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
    answer: "Yes, this tool is completely free. No account or credit card needed — just enter your details and get instant results."
  },
  {
    question: "How reliable are the projections?",
    answer: "Projections use standard financial formulas and current ATO rates for the 2025-26 financial year. They're designed for planning purposes — consult a financial adviser for complex decisions."
  },
  {
    question: "Is my financial data stored anywhere?",
    answer: "No. All calculations happen locally in your browser. InvoiceFlow never sends, stores, or shares your financial information from free tools."
  }
];

export default function PaymentTermsCalculatorPage() {
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
              Payment <span className="gradient-text">Terms Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Calculate exact due dates for any payment terms, model early payment discounts,
              and build milestone payment schedules — all in one place.
            </p>
          </div>

          {/* Calculator */}
          <PaymentTermsCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Understanding Payment Terms */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding Payment Terms
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Payment terms define when a client must pay your invoice. Getting them right is
                  critical for cash flow — choose terms that are too generous and you&apos;ll be
                  waiting months for money you&apos;ve already earned. Here are the most common
                  payment terms you&apos;ll encounter:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">COD (Cash on Delivery)</h4>
                    <p className="text-sm">
                      Payment is due immediately upon delivery of the work or goods. This is the
                      safest option for freelancers — you get paid the same day. Common for small
                      jobs, first-time clients, or where trust hasn&apos;t been established yet.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Net 7 / Net 14</h4>
                    <p className="text-sm">
                      Payment is due 7 or 14 days after the invoice date. These are short payment
                      windows, ideal for ongoing retainer clients or small to mid-sized invoices.
                      Net 14 is a solid default for Australian freelancers who want to maintain
                      healthy cash flow without seeming aggressive.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Net 30 / Net 60 / Net 90</h4>
                    <p className="text-sm">
                      Payment is due 30, 60, or 90 days after invoicing. Net 30 is the most common
                      standard in business. Net 60 and Net 90 are typically demanded by larger
                      corporations and government clients. The longer the terms, the more working
                      capital you need to cover the gap.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">EOM / EOM+30</h4>
                    <p className="text-sm">
                      EOM (End of Month) means payment is due at the end of the month in which the
                      invoice was issued. EOM+30 means payment is due 30 days after the end of that
                      month. Common in corporate procurement — an invoice issued on March 5 under
                      EOM+30 terms would be due April 30.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How Early Payment Discounts Work */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How Early Payment Discounts Work
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  An early payment discount (also called a prompt payment discount) incentivises
                  your client to pay before the due date by offering a small percentage off the
                  invoice total. The most common format is written as &ldquo;2/10 Net 30&rdquo;
                  — which means: <strong className="text-white">2% discount if paid within 10
                  days, otherwise the full amount is due in 30 days.</strong>
                </p>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-6 my-6">
                  <p className="text-sm text-teal-400 mb-3">Worked Example: 2/10 Net 30 on a $5,000 Invoice</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Invoice amount</span>
                      <span className="text-white font-medium">$5,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Invoice date</span>
                      <span className="text-white font-medium">1 March 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discount window (10 days)</span>
                      <span className="text-teal-400 font-medium">Pay by 11 March 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discount (2% of $5,000)</span>
                      <span className="text-teal-400 font-medium">$100 off</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount if paid early</span>
                      <span className="text-teal-400 font-medium">$4,900</span>
                    </div>
                    <hr className="border-white/10 my-2" />
                    <div className="flex justify-between">
                      <span>Full due date (30 days)</span>
                      <span className="text-amber-400 font-medium">31 March 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount if paid on due date</span>
                      <span className="text-white font-medium">$5,000</span>
                    </div>
                  </div>
                </div>
                <p>
                  From the client&apos;s perspective, paying 20 days early to save 2% is equivalent
                  to earning a <strong className="text-white">36.7% annualised return</strong> on
                  that cash — which is why well-funded clients almost always take the discount. For
                  you as the freelancer, getting paid 20 days sooner is often worth the small haircut,
                  especially if you&apos;re managing tight cash flow.
                </p>
                <p>
                  Common discount structures include 1/10 Net 30, 2/10 Net 30, and 2/10 Net 60.
                  Adjust the percentages and windows in the calculator above to model different
                  scenarios for your business.
                </p>
              </div>
            </div>

            {/* Best Practices for Australian Freelancers */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Best Practices for Australian Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Choosing the right payment terms is a balancing act between maintaining client
                  relationships and protecting your cash flow. Here are practical tips for
                  Australian freelancers:
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Default to Net 14 for most clients.</strong>{' '}
                    Net 30 is the corporate standard, but as a freelancer you&apos;re not a
                    corporate supplier. Net 14 is professional, reasonable, and keeps your cash
                    cycle tight. Most clients won&apos;t push back — they simply need to be told
                    your terms upfront.
                  </li>
                  <li>
                    <strong className="text-white">Use Net 30 only for established, reliable clients.</strong>{' '}
                    If a client has a track record of paying on time and represents significant
                    recurring revenue, Net 30 is a reasonable concession. Never offer Net 60+ unless
                    the project value justifies it and you can afford the cash flow gap.
                  </li>
                  <li>
                    <strong className="text-white">Always request a deposit on large projects.</strong>{' '}
                    For projects over $3,000, request 30-50% upfront before starting work. Use the
                    milestone payment feature above to model deposit + progress + final payment
                    structures. This protects you from non-payment and funds your work in progress.
                  </li>
                  <li>
                    <strong className="text-white">Include late payment terms in your contract.</strong>{' '}
                    Australian law allows you to charge interest on overdue invoices if stated in
                    your contract. A common clause is 1.5% per month (18% p.a.) on outstanding
                    amounts. Use the{' '}
                    <Link href="/tools/late-payment-calculator" className="text-teal-400 hover:underline">
                      Late Payment Calculator
                    </Link>{' '}
                    to model the cost of late payments.
                  </li>
                  <li>
                    <strong className="text-white">Offer early payment discounts strategically.</strong>{' '}
                    If cash flow is more important than maximising every dollar — for example, during
                    a growth phase or seasonal dip — a 2/10 Net 30 discount can accelerate payments
                    significantly. Just make sure the maths works: a 2% discount for 20 days
                    early is a 36.7% annualised cost of capital. Only offer it when the cash flow
                    benefit outweighs the cost.
                  </li>
                </ol>
                <p className="text-sm mt-4">
                  Track all your payment terms and due dates automatically with{' '}
                  <Link href="/signup" className="text-teal-400 hover:underline">
                    InvoiceFlow
                  </Link>
                  . Set up payment reminders, late fees, and milestone invoicing — so you never
                  chase a payment manually again.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to <span className="gradient-text">get paid on time?</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow automates payment terms, sends reminders before due dates, and tracks
              every invoice so you always know who owes you and when.
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
                Try the Late Payment Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="payment-terms-calculator" category="Financial Planning" />
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
