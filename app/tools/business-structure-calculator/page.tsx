import type { Metadata } from 'next';
import Link from 'next/link';
import BusinessStructureCalculator from './BusinessStructureCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title = 'Sole Trader vs Company vs Trust Calculator Australia | Free Business Structure Tool — InvoiceFlow';
const description =
  'Compare sole trader, company (Pty Ltd), and trust structures side-by-side. Calculate total tax, effective tax rate, and take-home income for each Australian business structure. Free business structure calculator with 2024-25 ATO tax rates.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'sole trader vs company calculator australia',
    'sole trader vs pty ltd',
    'business structure calculator australia',
    'should i incorporate my business',
    'sole trader vs company tax',
    'pty ltd vs sole trader calculator',
    'trust vs company australia',
    'business structure comparison',
    'sole trader tax calculator',
    'company tax rate australia',
    'trust income splitting calculator',
    'ABN vs company',
  ],
  openGraph: {
    title: 'Sole Trader vs Company vs Trust Calculator — Free Tool | InvoiceFlow',
    description:
      'Compare sole trader, company (Pty Ltd), and trust structures side-by-side. Find the most tax-efficient structure for your Australian business.',
    url: 'https://www.invoiceflow.au/tools/business-structure-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sole Trader vs Company vs Trust Calculator — Free Tool | InvoiceFlow',
    description:
      'Compare Australian business structures side-by-side. Calculate tax, take-home income, and find when it pays to incorporate.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/business-structure-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Business Structure Calculator — Sole Trader vs Company vs Trust',
  description:
    'Compare sole trader, company (Pty Ltd), and trust structures side-by-side. Calculate total tax, effective tax rate, and take-home income for each Australian business structure.',
  url: 'https://www.invoiceflow.au/tools/business-structure-calculator',
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

export default function BusinessStructureCalculatorPage() {
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

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Sole Trader vs Company vs Trust{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Should you stay as a sole trader, set up a company, or use a trust? Enter your numbers
              to compare all three Australian business structures side-by-side and find the most
              tax-efficient option for your situation.
            </p>
          </div>

          {/* Calculator */}
          <BusinessStructureCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Understanding Australian Business Structures */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding Australian Business Structures
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Choosing the right business structure is one of the
                  most important financial decisions a freelancer or small business owner can make in
                  Australia.</strong> The structure you choose affects how much tax you pay, your personal
                  liability, how you can distribute income, and the administrative burden you carry
                  each year.
                </p>
                <p>
                  There are three primary structures used by Australian freelancers and small business
                  owners: sole trader, company (Pty Ltd), and trust (typically a discretionary or family
                  trust). Each has distinct advantages and drawbacks depending on your income level,
                  family situation, and growth plans.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Sole Trader</h4>
                    <p className="text-sm">
                      The simplest structure. You operate under your own name (or a registered business
                      name) with an ABN. All business income is your personal income, taxed at
                      individual rates. Ideal for freelancers earning under $120K with low liability risk.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Company (Pty Ltd)</h4>
                    <p className="text-sm">
                      A separate legal entity that pays a flat 25% tax rate on profits (base rate
                      entity). You pay yourself a salary and can retain profits in the company. Best
                      for businesses earning over $150K that want asset protection and tax planning
                      flexibility.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Trust</h4>
                    <p className="text-sm">
                      A legal arrangement where a trustee holds assets for beneficiaries. Income can be
                      split across family members, each using their own tax-free threshold. Powerful
                      for families where one partner earns significantly more than the other.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Tax Rate Comparison Table */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Tax Rate Comparison Table (2024-25)
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The fundamental difference between structures comes down to <strong className="text-white">how
                  income is taxed</strong>. Sole traders and trust beneficiaries pay individual marginal
                  rates. Companies pay a flat rate. Here&apos;s how the rates stack up:
                </p>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white py-3 pr-4 font-semibold">Taxable Income</th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">Individual Rate (Sole Trader / Trust)</th>
                        <th className="text-left text-white py-3 font-semibold">Company Rate</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">$0 - $18,200</td>
                        <td className="py-3 pr-4 text-emerald-400">Nil</td>
                        <td className="py-3 text-amber-400" rowSpan={5}>Flat 25%</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">$18,201 - $45,000</td>
                        <td className="py-3 pr-4">16c per $1 over $18,200</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">$45,001 - $135,000</td>
                        <td className="py-3 pr-4">$4,288 + 30c per $1 over $45,000</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">$135,001 - $190,000</td>
                        <td className="py-3 pr-4">$31,288 + 37c per $1 over $135,000</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">$190,001+</td>
                        <td className="py-3 pr-4">$51,638 + 45c per $1 over $190,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-slate-400 mt-2">
                  All individuals also pay a 2% Medicare Levy on taxable income. For company structures,
                  when profits are distributed as dividends, shareholders receive franking credits for
                  the 25% company tax already paid — avoiding double taxation.
                </p>
              </div>
            </div>

            {/* Section 3: Setup & Compliance Cost Comparison */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Setup &amp; Compliance Cost Comparison
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Tax savings don&apos;t tell the full story. Each structure has different setup costs,
                  ongoing compliance obligations, and accounting fees. A company structure that saves
                  $3,000 in tax but costs $4,000 more in accounting fees isn&apos;t worth it.
                </p>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white py-3 pr-4 font-semibold">Cost Item</th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">Sole Trader</th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">Company (Pty Ltd)</th>
                        <th className="text-left text-white py-3 font-semibold">Trust</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">ABN Registration</td>
                        <td className="py-3 pr-4 text-emerald-400">Free</td>
                        <td className="py-3 pr-4 text-emerald-400">Free</td>
                        <td className="py-3 text-emerald-400">Free</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Entity Setup</td>
                        <td className="py-3 pr-4 text-emerald-400">$0</td>
                        <td className="py-3 pr-4 text-amber-400">$576 (ASIC registration)</td>
                        <td className="py-3 text-amber-400">$500 - $2,000 (trust deed)</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Annual ASIC Fee</td>
                        <td className="py-3 pr-4 text-emerald-400">N/A</td>
                        <td className="py-3 pr-4 text-amber-400">$310/year</td>
                        <td className="py-3 text-emerald-400">N/A</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Annual Tax Return</td>
                        <td className="py-3 pr-4">$200 - $500</td>
                        <td className="py-3 pr-4">$1,000 - $2,500</td>
                        <td className="py-3">$1,000 - $2,500</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">Bookkeeping &amp; Accounting</td>
                        <td className="py-3 pr-4">$500 - $1,500/yr</td>
                        <td className="py-3 pr-4">$2,000 - $5,000/yr</td>
                        <td className="py-3">$1,500 - $4,000/yr</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 font-medium text-white">BAS Lodgement</td>
                        <td className="py-3 pr-4">$100 - $250/qtr</td>
                        <td className="py-3 pr-4">$200 - $500/qtr</td>
                        <td className="py-3">$200 - $500/qtr</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-semibold text-white">Total Annual Cost (est.)</td>
                        <td className="py-3 pr-4 text-emerald-400 font-semibold">$1,100 - $2,500</td>
                        <td className="py-3 pr-4 text-amber-400 font-semibold">$4,100 - $8,800</td>
                        <td className="py-3 text-amber-400 font-semibold">$3,500 - $8,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-slate-400 mt-2">
                  The compliance cost difference between a sole trader and a company is typically
                  $3,000-$6,000 per year. This means a company structure needs to save at least that
                  much in tax before it makes financial sense to incorporate.
                </p>
              </div>
            </div>

            {/* Section 4: 5 Signs It's Time to Restructure */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Signs It&apos;s Time to Restructure Your Business
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Most freelancers start as sole traders — and for good reason. It&apos;s free, simple,
                  and has minimal paperwork. But as your income grows, staying as a sole trader can
                  cost you thousands in unnecessary tax. Here are the key indicators that it&apos;s
                  time to consider a different structure:
                </p>

                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Your taxable income consistently exceeds $120,000-$150,000.</strong>{' '}
                    At this level, your marginal tax rate is 37-45%. A company structure taxed at 25%
                    starts saving meaningful money — even after accounting for higher compliance costs.
                    Use the calculator above to find your exact break-even point.
                  </li>
                  <li>
                    <strong className="text-white">You have a spouse or family members with lower incomes.</strong>{' '}
                    A trust structure allows you to distribute income to beneficiaries in lower tax
                    brackets, effectively spreading the tax burden. If your partner earns under $18,200,
                    you could distribute up to that amount tax-free through a trust.
                  </li>
                  <li>
                    <strong className="text-white">You&apos;re concerned about personal liability.</strong>{' '}
                    As a sole trader, your personal assets (home, car, savings) are at risk if your
                    business is sued or can&apos;t pay debts. A company creates a legal separation
                    between your business and personal assets. For freelancers doing high-value or
                    high-risk work, this protection alone can justify the switch.
                  </li>
                  <li>
                    <strong className="text-white">You want to retain profits in the business.</strong>{' '}
                    Sole traders pay tax on all business profits immediately. A company can retain
                    profits at the 25% company tax rate and reinvest them — only paying the remaining
                    personal tax when dividends are eventually distributed. This is powerful if you&apos;re
                    building business assets or saving for a large investment.
                  </li>
                  <li>
                    <strong className="text-white">You&apos;re planning to sell or bring on partners.</strong>{' '}
                    A sole trader business can&apos;t be sold as easily as a company. If you&apos;re building
                    something you might sell one day, or want to bring on co-founders or investors,
                    a company structure makes this significantly simpler. Company shares can be
                    transferred, valued, and sold — a sole trader&apos;s ABN can&apos;t.
                  </li>
                </ol>

                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">Rule of Thumb</h4>
                  <p className="text-sm">
                    If your taxable income is <strong className="text-white">under $120,000</strong>,
                    a sole trader structure is usually the most cost-effective option. Between
                    <strong className="text-white"> $120,000 and $180,000</strong>, run the numbers —
                    it depends on your specific situation, compliance costs, and family structure.
                    Above <strong className="text-white">$180,000</strong>, a company or trust almost
                    always saves money, even after accounting for higher accounting fees.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Invoicing that works for <span className="gradient-text">any structure</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              Whether you&apos;re a sole trader, company, or trust — InvoiceFlow handles your
              invoicing, expense tracking, and tax reporting. Professional invoices that match
              your business structure, with built-in GST and tax insights.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="business-structure-calculator" category="Tax & Compliance" />
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
