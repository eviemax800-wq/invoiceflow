import type { Metadata } from 'next';
import Link from 'next/link';
import BillableHoursCalculator from './BillableHoursCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title = 'Billable Hours & Utilization Calculator | Free Tool — InvoiceFlow';
const description =
  'Free billable hours calculator for freelancers. Track your utilization rate, calculate effective hourly rate vs billed rate, and find your required rate to hit income targets. Customizable non-billable time categories.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'billable hours calculator',
    'freelance utilization rate calculator',
    'effective hourly rate calculator',
    'freelancer time tracking calculator',
    'billable vs non-billable hours',
    'freelance income calculator australia',
    'consultant utilization rate',
    'hourly rate calculator freelance',
    'freelance capacity planning',
    'billable hours per year calculator',
    'freelancer rate calculator australia',
    'time tracking freelancer',
  ],
  openGraph: {
    title: 'Billable Hours & Utilization Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your real utilization rate and effective hourly rate. See what non-billable time actually costs you.',
    url: 'https://www.invoiceflow.au/tools/billable-hours-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Billable Hours & Utilization Calculator — Free Tool | InvoiceFlow',
    description:
      'Calculate your billable hours, utilization rate, and effective hourly rate. Free freelancer tool.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/billable-hours-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Billable Hours & Utilization Calculator',
  description:
    'Calculate billable hours, utilization rate, and effective hourly rate for freelancers and consultants. Customizable non-billable time categories with what-if scenarios.',
  url: 'https://www.invoiceflow.au/tools/billable-hours-calculator',
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

export default function BillableHoursCalculatorPage() {
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
              Billable Hours{' '}
              <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Find your real utilization rate, effective hourly rate, and annual earning capacity.
              Customise your non-billable time breakdown to see exactly where your hours go — and
              what it costs you.
            </p>
          </div>

          {/* Calculator */}
          <BillableHoursCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* What is utilization rate */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Is Utilization Rate and Why Does It Matter?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Utilization rate</strong> is the percentage of your
                  total working hours that are directly billable to clients. It&apos;s the single most
                  important metric for freelancer profitability — because your hourly rate only applies
                  to billable hours.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-4">
                  <p className="text-sm font-mono text-teal-400">
                    Utilization Rate = Billable Hours / Total Working Hours x 100
                  </p>
                </div>
                <p>
                  If you work 40 hours a week but only bill 26, your utilization rate is 65%. That
                  means <strong className="text-white">35% of your working time generates zero
                  revenue</strong>. A freelancer billing at $120/hr with 65% utilization earns an
                  effective rate of just $78/hr when you factor in all hours worked.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-red-400">Below 50%</p>
                    <p className="text-sm mt-1">Warning zone — review your time allocation</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400">50-70%</p>
                    <p className="text-sm mt-1">Average for solo freelancers</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-400">70%+</p>
                    <p className="text-sm mt-1">Excellent — well-optimised practice</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Where non-billable time goes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Where Does Non-Billable Time Go?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Most freelancers dramatically underestimate their non-billable hours. Here&apos;s what
                  a typical week looks like for an Australian freelancer:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Activity</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Hours/week</th>
                        <th className="text-left py-2 text-slate-400 font-medium pl-4">Can you reduce it?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-2 text-white">Email & communications</td>
                        <td className="py-2 text-right">3-5h</td>
                        <td className="py-2 pl-4 text-emerald-400">Yes — batch processing, templates</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Invoicing & bookkeeping</td>
                        <td className="py-2 text-right">2-4h</td>
                        <td className="py-2 pl-4 text-emerald-400">Yes — automate with InvoiceFlow</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Marketing & lead generation</td>
                        <td className="py-2 text-right">2-5h</td>
                        <td className="py-2 pl-4 text-amber-400">Partially — systems help, but needed</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Client meetings (unpaid)</td>
                        <td className="py-2 text-right">2-3h</td>
                        <td className="py-2 pl-4 text-amber-400">Partially — set meeting limits</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Learning & upskilling</td>
                        <td className="py-2 text-right">1-3h</td>
                        <td className="py-2 pl-4 text-red-400">No — essential investment</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Proposals & scoping</td>
                        <td className="py-2 text-right">1-3h</td>
                        <td className="py-2 pl-4 text-emerald-400">Yes — templates, qualify better</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* How to increase utilization */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                6 Ways to Increase Your Billable Hours
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Automate invoicing and payments.</strong> Manual
                    invoicing takes 2-4 hours per week. With InvoiceFlow, create and send invoices in
                    under a minute. Automated payment reminders eliminate chase-up time entirely.
                  </li>
                  <li>
                    <strong className="text-white">Batch your admin time.</strong> Instead of
                    checking email every 30 minutes, batch it into 2-3 daily windows. Same with
                    bookkeeping — do it weekly, not daily.
                  </li>
                  <li>
                    <strong className="text-white">Create proposal templates.</strong> If you&apos;re
                    writing proposals from scratch each time, you&apos;re wasting hours. Build reusable
                    templates and customise 20% for each client.
                  </li>
                  <li>
                    <strong className="text-white">Qualify leads faster.</strong> Not every enquiry
                    deserves a custom proposal. Use a brief questionnaire or discovery call to filter
                    out poor-fit clients before investing time.
                  </li>
                  <li>
                    <strong className="text-white">Set meeting boundaries.</strong> Limit
                    non-billable meetings to specific days. Use async communication (Loom videos, voice
                    messages) to reduce meeting frequency.
                  </li>
                  <li>
                    <strong className="text-white">Track your time honestly.</strong> You can&apos;t
                    improve what you don&apos;t measure. Track every working hour for 2 weeks to get a
                    realistic picture of your utilization rate.
                  </li>
                </ol>
              </div>
            </div>

            {/* Effective rate vs billed rate */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Effective Hourly Rate vs Billed Rate
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Your <strong className="text-white">billed rate</strong> is what clients pay per
                  hour. Your <strong className="text-white">effective rate</strong> is what you
                  actually earn per hour of work (including non-billable time). The gap between
                  these two numbers reveals the true cost of running your freelance business.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Billed Rate</th>
                        <th className="text-right py-2 text-slate-400 font-medium">At 50% util.</th>
                        <th className="text-right py-2 text-slate-400 font-medium">At 65% util.</th>
                        <th className="text-right py-2 text-slate-400 font-medium">At 75% util.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[80, 100, 120, 150, 200].map((r) => (
                        <tr key={r}>
                          <td className="py-2 text-white">${r}/hr</td>
                          <td className="py-2 text-right text-red-400">${(r * 0.5).toFixed(0)}/hr</td>
                          <td className="py-2 text-right text-amber-400">${(r * 0.65).toFixed(0)}/hr</td>
                          <td className="py-2 text-right text-emerald-400">${(r * 0.75).toFixed(0)}/hr</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-4">
                  A freelancer billing at $150/hr with 50% utilization has the same effective rate as
                  someone billing $100/hr with 75% utilization. Improving your utilization is often
                  easier (and more sustainable) than raising your rates.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Win back your{' '}
              <span className="gradient-text">non-billable hours</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow automates invoicing, payment reminders, and BAS prep — saving you 2-4
              hours per week of non-billable admin. That&apos;s up to 200 extra billable hours per year.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
          </section>
        
        <RelatedTools currentSlug="billable-hours-calculator" category="Pricing & Rates" />
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
