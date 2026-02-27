import type { Metadata } from 'next';
import Link from 'next/link';
import SalaryToHourly from './SalaryToHourly';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title = 'Salary to Hourly Rate Calculator Australia | Free Freelance Tool — InvoiceFlow';
const description =
  'Free salary to hourly rate converter for Australians considering freelancing. See what you need to charge per hour to match your salary — accounting for super, leave, tax, and business costs.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'salary to hourly rate calculator',
    'salary to hourly rate calculator australia',
    'convert salary to hourly rate',
    'annual salary to hourly rate',
    'salary to freelance rate converter',
    'freelance hourly rate calculator australia',
    'what hourly rate for salary equivalent',
    'employee to freelancer calculator',
    'contractor rate calculator australia',
    'salary vs freelance comparison',
    'freelance rate from salary',
    'how much to charge as freelancer australia',
  ],
  openGraph: {
    title: 'Salary to Hourly Rate Calculator — Free Tool | InvoiceFlow',
    description:
      'Convert your annual salary to a freelance hourly rate. Accounts for super, leave, tax, and business overheads. Free for Australians.',
    url: 'https://www.invoiceflow.au/tools/salary-to-hourly',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salary to Hourly Rate Calculator — Free Tool | InvoiceFlow',
    description:
      'What hourly rate do you need as a freelancer to match your salary? Free Australian calculator.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/salary-to-hourly',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Salary to Hourly Rate Calculator Australia',
  description:
    'Convert your annual salary to a freelance hourly rate. Accounts for superannuation, leave, tax, and business overheads.',
  url: 'https://www.invoiceflow.au/tools/salary-to-hourly',
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

export default function SalaryToHourlyPage() {
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
              Salary to{' '}
              <span className="gradient-text">Hourly Rate</span> Calculator
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Thinking about going freelance? Find out exactly what hourly rate you need to charge to
              match your current salary — after accounting for super, leave, tax, and all the hidden
              costs of self-employment.
            </p>
          </div>

          {/* Calculator */}
          <SalaryToHourly />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Why Freelancers Charge More */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Need to Charge More Than Employees
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If you earn $85,000 as an employee, your gross hourly rate is about $43/hr. But if
                  you charge $43/hr as a freelancer, you&apos;ll take home{' '}
                  <strong className="text-white">significantly less</strong> than your old salary.
                  Here&apos;s why:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">No Paid Leave</h4>
                    <p className="text-sm">
                      Employees get ~38 days of paid leave (annual + sick + public holidays). As a
                      freelancer, every day off is unpaid. That&apos;s 7+ weeks of income you need to
                      cover.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Self-Funded Super</h4>
                    <p className="text-sm">
                      Your employer pays 11.5% super on top of your salary. As a freelancer, that
                      comes from your own pocket — or you skip retirement savings entirely.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Business Overheads</h4>
                    <p className="text-sm">
                      Software subscriptions, professional insurance, accounting fees, equipment — your
                      employer used to cover these. Now they&apos;re your cost.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Non-Billable Time</h4>
                    <p className="text-sm">
                      Quoting, invoicing, marketing, admin — typically 20-30% of your week isn&apos;t
                      billable. You need to earn enough in billable hours to cover the rest.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rate Benchmarks */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Australian Freelance Rate Benchmarks (2025-26)
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Here&apos;s what Australian freelancers typically charge across common industries.
                  Rates vary by experience, specialisation, and location.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-slate-400 font-medium">Industry</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Junior</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Mid</th>
                        <th className="text-right py-2 text-slate-400 font-medium">Senior</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-2 text-white">Web Development</td>
                        <td className="py-2 text-right text-slate-300">$60-$80/hr</td>
                        <td className="py-2 text-right text-slate-300">$100-$150/hr</td>
                        <td className="py-2 text-right text-teal-400">$150-$250/hr</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Graphic Design</td>
                        <td className="py-2 text-right text-slate-300">$50-$70/hr</td>
                        <td className="py-2 text-right text-slate-300">$80-$120/hr</td>
                        <td className="py-2 text-right text-teal-400">$120-$180/hr</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Copywriting</td>
                        <td className="py-2 text-right text-slate-300">$50-$70/hr</td>
                        <td className="py-2 text-right text-slate-300">$80-$130/hr</td>
                        <td className="py-2 text-right text-teal-400">$130-$200/hr</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Marketing / SEO</td>
                        <td className="py-2 text-right text-slate-300">$60-$80/hr</td>
                        <td className="py-2 text-right text-slate-300">$100-$150/hr</td>
                        <td className="py-2 text-right text-teal-400">$150-$220/hr</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Photography</td>
                        <td className="py-2 text-right text-slate-300">$60-$100/hr</td>
                        <td className="py-2 text-right text-slate-300">$120-$200/hr</td>
                        <td className="py-2 text-right text-teal-400">$200-$350/hr</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-white">Consulting</td>
                        <td className="py-2 text-right text-slate-300">$80-$120/hr</td>
                        <td className="py-2 text-right text-slate-300">$150-$250/hr</td>
                        <td className="py-2 text-right text-teal-400">$250-$500/hr</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-2">
                  <strong className="text-white">Remember:</strong> These are billing rates, not
                  take-home pay. After tax, super, overheads, and non-billable time, your effective
                  hourly income will be 40-50% of your billing rate.
                </p>
              </div>
            </div>

            {/* The 2.5x Rule */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                The 2.5x Rule: A Quick Freelance Rate Formula
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Don&apos;t want to run detailed calculations? Use this rule of thumb:
                </p>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-6 text-center my-6">
                  <p className="text-sm text-teal-400 mb-2">Quick Formula</p>
                  <p className="text-2xl font-bold text-white">
                    Freelance Rate = Employee Hourly Rate x 2.0 - 2.5
                  </p>
                </div>
                <p>
                  An employee earning $85,000/year ($43/hr) should charge{' '}
                  <strong className="text-white">$86-$108/hr</strong> as a freelancer. This accounts
                  for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Self-funded superannuation (11.5%)</li>
                  <li>No paid leave (~15% of working days)</li>
                  <li>Business overheads (10-20%)</li>
                  <li>Non-billable time (20-30%)</li>
                  <li>Small profit margin for savings/growth (10%)</li>
                </ul>
                <p className="text-sm mt-2">
                  The exact multiplier depends on your industry and situation. Use the calculator
                  above for a precise figure tailored to your circumstances.
                </p>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Pricing Mistakes New Freelancers Make
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Dividing salary by 2,080 hours.</strong> This
                    gives you the employee hourly rate, not the freelance rate. You can&apos;t bill
                    40 hours every week — you&apos;ll have admin, marketing, sick days, and holidays.
                  </li>
                  <li>
                    <strong className="text-white">Forgetting about super.</strong> If you skip super
                    contributions, you&apos;re effectively giving yourself a 11.5% pay cut that
                    compounds over decades. Factor it into your rate from day one.
                  </li>
                  <li>
                    <strong className="text-white">Underpricing to win clients.</strong> Racing to the
                    bottom attracts price-sensitive clients who are the hardest to work with. Price for
                    value, not volume. It&apos;s easier to fill 20 billable hours at $120/hr than 40
                    hours at $60/hr.
                  </li>
                  <li>
                    <strong className="text-white">Not accounting for gaps.</strong> You won&apos;t
                    have back-to-back clients every week. Budget for 2-4 weeks per year with no
                    billable work during client transitions.
                  </li>
                  <li>
                    <strong className="text-white">Charging hourly when you should charge per
                    project.</strong> As you get faster, hourly billing penalises your efficiency.
                    Move to project-based pricing where your rate reflects the{' '}
                    <em>value delivered</em>, not time spent.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Ready to <span className="gradient-text">invoice at your new rate?</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow makes it easy to create professional invoices, track payments, and manage
              your freelance cash flow — all with Australian tax compliance built in.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/rate-calculator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try the Rate Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="salary-to-hourly" category="Pricing & Rates" />
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
