import type { Metadata } from 'next';
import Link from 'next/link';
import BreakEvenCalculator from './BreakEvenCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title = 'Freelance Break-Even Calculator Australia | Free Tool — InvoiceFlow';
const description =
  'Free break-even calculator for Australian freelancers. Find how many billable hours or projects you need to cover fixed costs and start profiting. Contribution margin, safety margin, and monthly targets included.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'break even calculator',
    'freelance break even point',
    'break even analysis freelancer',
    'how many hours to break even',
    'freelance profitability calculator',
    'business break even calculator australia',
    'sole trader break even',
    'freelance fixed costs calculator',
    'contribution margin calculator',
    'freelance business viability',
    'break even revenue calculator',
    'project break even analysis',
  ],
  openGraph: {
    title: 'Freelance Break-Even Calculator — Free Tool | InvoiceFlow',
    description:
      'Find your break-even point — how many billable hours or projects you need to cover costs and start profiting.',
    url: 'https://www.invoiceflow.au/tools/break-even-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Break-Even Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your break-even point as a freelancer. Free Australian calculator.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/break-even-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Break-Even Calculator',
  description:
    'Calculate your break-even point as an Australian freelancer. Find how many billable hours or projects cover your fixed costs.',
  url: 'https://www.invoiceflow.au/tools/break-even-calculator',
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

export default function BreakEvenCalculatorPage() {
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
              Break-Even{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Find out exactly how many billable hours or projects you need to cover your fixed costs
              and start making a profit. Essential for freelancers, contractors, and sole traders
              planning their year.
            </p>
          </div>

          {/* Calculator */}
          <BreakEvenCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Is a Break-Even Point?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Your <strong className="text-white">break-even point</strong> is the exact number of
                  billable hours or projects where your total revenue equals your total costs. Below
                  this point, you&apos;re operating at a loss. Above it, every additional unit of work
                  generates pure profit.
                </p>
                <p>
                  For freelancers, understanding your break-even point is critical because it tells you
                  the <strong className="text-white">minimum viable workload</strong> — how much work
                  you need just to keep the lights on before you start earning.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">The Formula</h4>
                  <p className="text-sm font-mono text-teal-400">
                    Break-Even Point = Fixed Costs / (Revenue per Unit - Variable Cost per Unit)
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    The denominator (revenue minus variable cost) is called your{' '}
                    <strong className="text-white">contribution margin</strong> — the amount each
                    billable hour or project contributes toward covering fixed costs and then profit.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Common Fixed Costs for Australian Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Fixed costs are expenses you pay regardless of how much work you do. As a sole
                  trader, these typically include:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Essential</h4>
                    <ul className="text-sm space-y-1">
                      <li>Professional insurance ($500-$2,000/yr)</li>
                      <li>Software subscriptions ($1,200-$5,000/yr)</li>
                      <li>Internet & phone ($1,800-$3,000/yr)</li>
                      <li>Accounting fees ($500-$3,000/yr)</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Growth</h4>
                    <ul className="text-sm space-y-1">
                      <li>Coworking or office ($3,000-$12,000/yr)</li>
                      <li>Marketing & advertising ($1,200-$6,000/yr)</li>
                      <li>Professional development ($500-$3,000/yr)</li>
                      <li>Equipment depreciation ($500-$2,000/yr)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Lower Your Break-Even Point
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Reduce fixed costs.</strong> Audit subscriptions,
                    negotiate insurance, use free tiers where possible. Every $1,000 saved lowers your
                    break-even by 10+ billable hours at $100/hr.
                  </li>
                  <li>
                    <strong className="text-white">Increase your rate.</strong> A higher hourly or
                    project rate means a bigger contribution margin. Raising your rate from $100/hr to
                    $120/hr can drop your break-even by 15-20%.
                  </li>
                  <li>
                    <strong className="text-white">Minimise variable costs.</strong> Switch to more
                    efficient tools, reduce per-project expenses, and negotiate better rates with
                    subcontractors.
                  </li>
                  <li>
                    <strong className="text-white">Productise your services.</strong> Fixed-price
                    packages let you deliver faster over time, effectively increasing your contribution
                    margin per project without raising prices.
                  </li>
                  <li>
                    <strong className="text-white">Build recurring revenue.</strong> Retainer clients
                    provide predictable monthly income that covers fixed costs, making break-even
                    automatic for that portion of your business.
                  </li>
                </ol>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding Safety Margin
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Your <strong className="text-white">safety margin</strong> (also called margin of
                  safety) measures how far above your break-even point you&apos;re operating. It
                  represents the buffer between your actual output and the minimum needed to avoid a
                  loss.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-400">30%+</p>
                    <p className="text-sm text-slate-400 mt-1">Comfortable buffer</p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400">10-30%</p>
                    <p className="text-sm text-slate-400 mt-1">Adequate but tight</p>
                  </div>
                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400">&lt;10%</p>
                    <p className="text-sm text-slate-400 mt-1">At risk — reduce costs or raise rates</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Track your <span className="gradient-text">profitability</span> automatically
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              Stop guessing if you&apos;re profitable. InvoiceFlow tracks every invoice, payment, and
              expense so you always know exactly where you stand. Real-time dashboards, GST
              calculations, and BAS prep included.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="break-even-calculator" category="Financial Planning" />
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
