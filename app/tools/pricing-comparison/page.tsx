import type { Metadata } from 'next';
import Link from 'next/link';
import PricingComparison from './PricingComparison';

const title = 'Hourly vs Project Pricing Calculator Australia | Free Tool — InvoiceFlow';
const description =
  'Compare hourly vs fixed project pricing for freelance work. See earnings across best, realistic, and worst-case scenarios. Factor in scope creep, revisions, and admin overhead. Free Australian calculator.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'hourly vs project pricing calculator',
    'hourly vs fixed price freelance',
    'freelance pricing comparison',
    'should I charge hourly or fixed rate',
    'project pricing vs hourly rate',
    'freelance pricing strategy calculator',
    'fixed vs hourly pricing australia',
    'scope creep calculator',
    'effective hourly rate calculator',
    'freelance pricing model comparison',
  ],
  openGraph: {
    title: 'Hourly vs Project Pricing Calculator — Free Tool | InvoiceFlow',
    description:
      'Compare hourly vs fixed pricing for freelance projects. See which model earns more across different scenarios.',
    url: 'https://www.invoiceflow.au/tools/pricing-comparison',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hourly vs Project Pricing Calculator — Free Tool | InvoiceFlow',
    description:
      'Should you charge hourly or fixed? Compare earnings across scenarios with this free calculator.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/pricing-comparison',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Hourly vs Project Pricing Calculator',
  description:
    'Compare hourly vs fixed project pricing for freelance work. Factor in scope creep, revisions, and admin overhead to find the best pricing model.',
  url: 'https://www.invoiceflow.au/tools/pricing-comparison',
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

export default function PricingComparisonPage() {
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
              Hourly vs Project{' '}
              <span className="gradient-text">Pricing Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Should you charge hourly or quote a fixed price? Compare both pricing models
              side-by-side with scope creep risk, revision estimates, and realistic scenario
              modelling. Make the right pricing decision for every project.
            </p>
          </div>

          {/* Calculator */}
          <PricingComparison />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Hourly vs Fixed Pricing: The Great Freelancer Debate
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Every freelancer faces this question on nearly every project: should I charge by the
                  hour or quote a fixed price? The answer depends on your specific situation — your
                  experience, the project scope, the client relationship, and your risk tolerance.
                </p>
                <p>
                  <strong className="text-white">Hourly pricing</strong> protects you from scope creep
                  and uncertain requirements. You&apos;re compensated for every hour worked, so if a
                  project takes twice as long as expected, you still earn your rate. But clients may
                  feel anxious about open-ended costs.
                </p>
                <p>
                  <strong className="text-white">Fixed pricing</strong> gives clients budget certainty
                  and lets you earn more per hour if you deliver efficiently. But if you underestimate,
                  your effective rate drops — sometimes below minimum wage on badly scoped projects.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                The Scope Creep Factor
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Scope creep is the single biggest risk in fixed-price projects. Research shows that
                  <strong className="text-white"> 52% of projects experience scope creep</strong>, and
                  the average project overruns its original estimate by 27%.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-400">0-15%</p>
                    <p className="text-sm text-slate-400 mt-1">Low risk</p>
                    <p className="text-xs text-slate-500">Clear scope, repeat project</p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400">15-35%</p>
                    <p className="text-sm text-slate-400 mt-1">Moderate risk</p>
                    <p className="text-xs text-slate-500">Typical freelance project</p>
                  </div>
                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-rose-400">35%+</p>
                    <p className="text-sm text-slate-400 mt-1">High risk</p>
                    <p className="text-xs text-slate-500">New client, vague brief</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                5 Tips to Price Fixed-Rate Projects Safely
              </h2>
              <div className="space-y-4 text-slate-300">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Add a contingency buffer.</strong> Build 15-25%
                    into your fixed price to absorb scope creep. This is standard practice, not
                    overcharging. Use our{' '}
                    <a href="/tools/quote-calculator" className="text-teal-400 hover:underline">
                      Quote & Estimate Builder
                    </a>{' '}
                    to add contingency automatically.
                  </li>
                  <li>
                    <strong className="text-white">Define scope in writing.</strong> A detailed{' '}
                    <a href="/tools/scope-of-work-generator" className="text-teal-400 hover:underline">
                      scope of work
                    </a>{' '}
                    with deliverables, revision limits, and exclusions protects both parties.
                  </li>
                  <li>
                    <strong className="text-white">Cap revisions.</strong> Include 2-3 revision rounds
                    in your price, with additional rounds billed at your hourly rate.
                  </li>
                  <li>
                    <strong className="text-white">Use milestone payments.</strong> Structure payment
                    around deliverables (e.g., 50% upfront, 25% at draft, 25% on completion) so
                    you&apos;re not financing the entire project.
                  </li>
                  <li>
                    <strong className="text-white">Track your actual hours.</strong> Even on fixed
                    projects, track time to build a database of how long things really take. This makes
                    future estimates more accurate.
                  </li>
                </ol>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Hybrid Pricing Models
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Many experienced freelancers use <strong className="text-white">hybrid models</strong>{' '}
                  that combine the best of both approaches:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-white py-3 pr-4 font-semibold">Model</th>
                        <th className="text-left text-white py-3 pr-4 font-semibold">How it works</th>
                        <th className="text-left text-white py-3 font-semibold">Best for</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 text-teal-400 font-medium">Fixed + hourly overage</td>
                        <td className="py-3 pr-4">Fixed price covers defined scope; extras billed hourly</td>
                        <td className="py-3">Most projects</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 text-teal-400 font-medium">Capped hourly</td>
                        <td className="py-3 pr-4">Bill hourly up to a maximum cap</td>
                        <td className="py-3">Uncertain scope</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 text-teal-400 font-medium">Retainer + project</td>
                        <td className="py-3 pr-4">Monthly retainer for ongoing work; one-off projects quoted separately</td>
                        <td className="py-3">Long-term clients</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-teal-400 font-medium">Value-based</td>
                        <td className="py-3 pr-4">Price based on business impact, not hours</td>
                        <td className="py-3">High-value consulting</td>
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
              Invoice with <span className="gradient-text">confidence</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              Whether you bill hourly or fixed, InvoiceFlow makes invoicing simple. Create
              professional invoices, track payments, and manage your cash flow — all with AI-powered
              automation.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free — 5 Invoices/Month
            </Link>
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
