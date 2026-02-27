import type { Metadata } from 'next';
import Link from 'next/link';
import TimesheetCalculator from './TimesheetCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title = 'Freelance Timesheet Calculator Australia | Free Tool — InvoiceFlow';
const description = 'Free timesheet calculator for Australian freelancers. Track daily hours, calculate weekly and monthly pay, manage overtime, and export formatted timesheets. Built for sole traders and contractors.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance timesheet calculator',
    'timesheet calculator australia',
    'hourly pay calculator',
    'weekly hours calculator freelancer',
    'freelance time tracking calculator',
    'contractor timesheet tool',
    'billable hours timesheet',
    'sole trader time tracker',
    'freelance weekly pay calculator',
    'timesheet template calculator',
  ],
  openGraph: {
    title: 'Freelance Timesheet Calculator — Free Tool | InvoiceFlow',
    description: 'Track daily hours and calculate your freelance pay. Weekly and monthly summaries with overtime.',
    url: 'https://www.invoiceflow.au/tools/timesheet-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Timesheet Calculator — Free Tool | InvoiceFlow',
    description: 'Calculate your freelance pay from timesheet entries. Free tool.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/timesheet-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Timesheet Calculator',
  description: 'Track daily hours and calculate weekly/monthly freelance pay with overtime support. Built for Australian freelancers.',
  url: 'https://www.invoiceflow.au/tools/timesheet-calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  creator: { '@type': 'Organization', name: 'InvoiceFlow', url: 'https://www.invoiceflow.au' },
};

export default function TimesheetCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#0a0a0f] text-white">
        {/* Header */}
        <header className="border-b border-white/10 bg-white/[0.02] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                IF
              </div>
              <span className="text-lg font-semibold text-white heading-font">InvoiceFlow</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/pricing" className="text-sm text-white/60 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link
                href="/signup"
                className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-16 pb-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              100% Free
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-font mb-6 leading-tight">
              Freelance{' '}
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Timesheet Calculator
              </span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Enter your daily hours, calculate weekly and monthly pay, track overtime, and export
              formatted timesheets. Built for Australian freelancers and contractors.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <TimesheetCalculator />
          </div>
        </section>

        {/* SEO Content Sections */}
        <section className="pb-16 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Section 1 */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold heading-font mb-4">Why Freelancers Need Timesheet Tracking</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Accurate time tracking is the foundation of a profitable freelance business. According to
                  industry research, freelancers who track their time earn up to 40% more than those who
                  estimate hours from memory. Without a structured timesheet process, billable hours slip
                  through the cracks, leading to under-billing and revenue loss.
                </p>
                <p>
                  For Australian sole traders and contractors, timesheets also serve as critical
                  documentation for ATO compliance. The Australian Taxation Office requires that you
                  maintain accurate records of work performed, especially when claiming deductions for
                  home office hours or when substantiating invoices to clients. A clear timesheet creates
                  an audit trail that protects your business.
                </p>
                <p>
                  Beyond compliance, timesheets help you understand your true effective hourly rate. When
                  you factor in admin tasks, client communication, and project management, your actual
                  billable ratio may be lower than you think. Tracking every hour gives you the data to
                  optimise your schedule and increase profitability.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold heading-font mb-4">How to Track Time Effectively as a Freelancer</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  The most effective time tracking method for freelancers is real-time logging: record
                  your start and end times as you work, rather than trying to reconstruct your day later.
                  Studies show that time recalled from memory is inaccurate by an average of 35%, which
                  directly impacts how much you bill.
                </p>
                <p>
                  <strong className="text-white/90">Start and end times with breaks:</strong> Rather than
                  logging total hours, record when you started, when you finished, and how long your
                  breaks were. This gives you a verifiable record and makes it easy to spot patterns
                  in your productivity throughout the day.
                </p>
                <p>
                  <strong className="text-white/90">Weekly reviews:</strong> Set aside 10 minutes every
                  Friday to review your timesheet. Check for missing entries, verify hours against
                  project deliverables, and calculate your effective rate for the week. This habit alone
                  can recover 2-5 billable hours per month that would otherwise go unrecorded.
                </p>
                <p>
                  <strong className="text-white/90">Separate billable from non-billable:</strong> Track
                  all your working hours, but clearly distinguish between client-billable work and
                  internal tasks like marketing, admin, or professional development. This gives you a
                  realistic picture of your billable ratio and helps you price future projects accurately.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold heading-font mb-4">Understanding Overtime and Penalty Rates in Australia</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  While freelancers and independent contractors are not covered by the National Employment
                  Standards for overtime, many client contracts include overtime provisions. Understanding
                  how overtime works helps you negotiate better rates and structure your contracts to
                  maximise earnings during high-demand periods.
                </p>
                <p>
                  The standard approach for contractor overtime in Australia is to apply a multiplier to
                  your base hourly rate. Common multipliers include 1.5x for the first 2-3 overtime hours,
                  and 2x for hours beyond that or for weekend work. Some enterprise clients, particularly
                  in government and finance, have structured overtime schedules written into their
                  contractor agreements.
                </p>
                <p>
                  For sole traders billing hourly, it is essential to define what constitutes a
                  &ldquo;standard day&rdquo; in your service agreement. In Australia, this is typically
                  7.5 or 8 hours. Any hours worked beyond this threshold can be legitimately billed at
                  a higher rate, provided the terms are agreed upon with your client before work begins.
                </p>
                <p>
                  This calculator helps you model both scenarios: standard billing where all hours are
                  charged at the same rate, and overtime billing where excess hours attract a premium.
                  Use it to see the difference in your weekly and monthly income.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold heading-font mb-4">Timesheet Best Practices for Client Billing</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  <strong className="text-white/90">Be specific in your records:</strong> When billing
                  clients, attach a detailed timesheet to every invoice. Include the date, start/end
                  times, break duration, total hours, and a brief description of work performed. This
                  reduces payment disputes and builds trust with your clients.
                </p>
                <p>
                  <strong className="text-white/90">Round consistently:</strong> Decide on a rounding
                  policy (e.g., round to the nearest 15 minutes) and apply it uniformly. Most Australian
                  freelancers round to the nearest quarter-hour, which is fair to both parties and
                  simplifies calculations.
                </p>
                <p>
                  <strong className="text-white/90">Keep records for 5 years:</strong> The ATO requires
                  business records to be kept for at least 5 years from the date you lodge your tax
                  return. This includes timesheets, invoices, and any supporting documentation. Digital
                  records are acceptable, but ensure they are backed up and easily retrievable.
                </p>
                <p>
                  <strong className="text-white/90">Use timesheets to scope future projects:</strong>{' '}
                  Your historical timesheet data is invaluable for quoting new projects. If you know a
                  similar project took 45 hours last time, you can provide accurate fixed-price quotes
                  that protect your margins. Over time, this data becomes one of your most valuable
                  business assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass rounded-2xl p-10">
              <h2 className="text-3xl font-bold heading-font mb-4">
                Ready to Automate Your Invoicing?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Go beyond timesheets. InvoiceFlow generates professional invoices, tracks payments,
                and sends automatic reminders — so you get paid faster.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free Trial
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <RelatedTools currentSlug="timesheet-calculator" category="Invoicing & Documents" />

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} InvoiceFlow. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/tools" className="hover:text-white/70 transition-colors">
                Free Tools
              </Link>
              <Link href="/compare" className="hover:text-white/70 transition-colors">
                Compare
              </Link>
              <Link href="/privacy" className="hover:text-white/70 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white/70 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
