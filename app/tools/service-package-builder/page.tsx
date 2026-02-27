import type { Metadata } from 'next';
import Link from 'next/link';
import ServicePackageBuilder from './ServicePackageBuilder';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title =
  'Service Package Builder | Free Freelance Pricing Tool — InvoiceFlow';
const description =
  'Free service package builder for freelancers. Create professional 3-tier service packages with smart pricing, deliverables, add-ons, and a ready-to-share pricing card layout. Works for web design, copywriting, graphic design, consulting, and more. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance service package builder',
    'how to package freelance services',
    'service tier pricing template freelancer',
    'freelance pricing packages generator',
    'productized service builder',
    'freelance pricing tiers template',
    'good better best pricing freelance',
    'service package pricing strategy',
    'freelance package pricing calculator',
    'tiered pricing template free',
  ],
  openGraph: {
    title:
      'Service Package Builder — Free Freelance Pricing Tool | InvoiceFlow',
    description:
      'Build professional 3-tier service packages with smart pricing suggestions. Free tool for freelancers — no signup required.',
    url: 'https://www.invoiceflow.au/tools/service-package-builder',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Package Builder — Free Freelance Pricing Tool | InvoiceFlow',
    description:
      'Create 3-tier service packages with deliverables, pricing, and add-ons. Free tool for freelancers.',
  },
  alternates: { canonical: 'https://www.invoiceflow.au/tools/service-package-builder' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Service Package Builder for Freelancers',
  description:
    'A 4-step wizard that helps freelancers create and price professional 3-tier service packages. Select a service category, build Starter/Standard/Premium tiers with deliverables and pricing, add optional extras, and generate a beautiful pricing card layout ready to share with clients. Includes smart pricing suggestions based on hourly rate and value-based multipliers. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/service-package-builder',
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

const faqs = [
  {
    question: "Is this tool free to use?",
    answer: "Yes, this tool is completely free with no registration needed. All calculations are performed privately in your browser."
  },
  {
    question: "How accurate are the calculations?",
    answer: "Calculations use current Australian tax rates (2025-26 ATO brackets), industry benchmarks, and standard business formulas. Results are estimates to help you make informed pricing decisions."
  },
  {
    question: "Do I need an ABN to use this tool?",
    answer: "No ABN is required. This tool works for anyone planning freelance pricing — whether you're already registered or exploring freelancing as a career option."
  }
];

export default function ServicePackageBuilderPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-400/10 border border-rose-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full" />
              <span className="text-rose-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Service Package{' '}
              <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                Builder
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Stop selling hours. Build professional 3-tier service packages with smart pricing,
              deliverables, and add-ons — then share a beautiful pricing card layout with your
              clients. Built for freelancers who want to earn more by packaging their expertise.
            </p>
          </div>

          {/* Builder Tool */}
          <ServicePackageBuilder />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: Why Packages, Not Hours */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Why Freelancers Should Sell Packages, Not Hours
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  The biggest pricing mistake freelancers make is selling their time instead of
                  their outcomes. When you charge by the hour, clients focus on the clock — not the
                  value you deliver. Packaging your services transforms you from a hired worker into
                  a solutions provider, and it changes how clients perceive and pay for your work.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent text-sm font-bold">01</span>
                      Predictable Revenue
                    </h4>
                    <p className="text-sm text-slate-400">
                      When clients buy a package, you know exactly what you are delivering and
                      exactly what you will earn. No more guessing how many hours a project will
                      take, no more awkward time-tracking conversations, and no more end-of-month
                      surprises. Packages let you forecast your income with confidence — you can
                      plan your workload, manage your pipeline, and set realistic revenue targets.
                      This predictability is the foundation of a sustainable freelance business,
                      not a side hustle that leaves you anxious about next month.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent text-sm font-bold">02</span>
                      Easier Client Decisions
                    </h4>
                    <p className="text-sm text-slate-400">
                      When you present a single hourly rate, clients have no frame of reference.
                      They do not know what they are getting, how long it will take, or what the
                      total cost will be. Three clear packages with defined deliverables and prices
                      make the decision simple — choose the package that fits your budget and
                      needs. Research in behavioural economics consistently shows that people make
                      faster, more confident purchasing decisions when presented with three options
                      rather than an open-ended estimate. Fewer back-and-forth emails, faster
                      sign-off, and happier clients from day one.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent text-sm font-bold">03</span>
                      Higher Perceived Value
                    </h4>
                    <p className="text-sm text-slate-400">
                      A packaged service feels more valuable than an hourly rate — even if the
                      actual deliverables are the same. When clients see a &quot;Brand Identity
                      Package&quot; at $3,500 with a clear list of what is included, they evaluate
                      it against the outcome they want. When they see &quot;$100/hour,&quot; they
                      evaluate it against other freelancers&apos; rates. Packages shift the
                      conversation from cost comparison to value comparison — and that is where
                      premium freelancers win. You can charge 30-50% more for the same work simply
                      by packaging it with clear deliverables and a professional presentation.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-rose-400/10 to-pink-500/10 border border-rose-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-rose-400 font-medium mb-2">The Numbers Speak</p>
                  <p className="text-sm">
                    Freelancers who switch from hourly billing to packaged services report an
                    average revenue increase of 25-40% within six months. The reason is simple:
                    packages eliminate the ceiling on your earnings. When you sell hours, your
                    income is capped by the number of hours you can work. When you sell packages,
                    your income is driven by the value you deliver — and as you get faster and
                    more experienced, your effective hourly rate increases automatically without
                    raising your prices.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How to Price Service Packages */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Price Your Service Packages
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Pricing packages is not about multiplying hours by a rate. It is about
                  understanding value, positioning, and buyer psychology. The best freelance
                  packages use a combination of value-based pricing and strategic tier design to
                  maximise both client satisfaction and your revenue.
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      Value-Based Pricing
                    </h4>
                    <p className="text-sm text-slate-400">
                      Instead of asking &quot;how many hours will this take?&quot;, ask &quot;what
                      is this worth to the client?&quot; A website that generates $10,000/month in
                      leads is worth far more than the 40 hours it took to build. Price your
                      packages based on the outcome, not the input. Your Starter package should
                      solve the client&apos;s minimum viable problem. Your Standard package should
                      be the sweet spot — the best value for most clients. Your Premium package
                      should be the everything-included option that commands a premium because it
                      eliminates all friction and delivers the maximum outcome.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      Good-Better-Best Strategy
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Starter (Good)</p>
                        <p className="text-xs text-slate-400">
                          The entry point. Priced to be accessible, with limited scope. Its
                          primary purpose is to get clients in the door and demonstrate your
                          quality. Typically priced at 0.85x your base cost — a slight discount
                          that makes the Standard tier look more attractive by comparison. Include
                          fewer deliverables and basic support only.
                        </p>
                      </div>
                      <div className="bg-rose-400/10 border border-rose-400/20 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Standard (Better)</p>
                        <p className="text-xs text-slate-400">
                          The sweet spot. This is the package you want most clients to choose —
                          it delivers the most value relative to price. Priced at 1.15x your base
                          cost, it should feel like a clear upgrade from Starter without the
                          premium price tag. Include the deliverables that solve 80% of
                          client needs. Mark this as &quot;Most Popular&quot; or
                          &quot;Recommended&quot; to anchor buyer attention.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Premium (Best)</p>
                        <p className="text-xs text-slate-400">
                          The aspirational option. Priced at 1.65x your base cost or higher, this
                          package includes everything — unlimited revisions, priority support,
                          faster turnaround, and premium deliverables. Even if most clients do not
                          choose it, its presence makes the Standard tier feel like a reasonable
                          deal by comparison. This is the anchoring effect in action — the Premium
                          price reframes the Standard price as great value.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      The Anchoring Effect of Three Tiers
                    </h4>
                    <p className="text-sm text-slate-400">
                      When buyers see three options, they almost never choose the cheapest. The
                      Premium tier makes the Standard feel affordable. The Starter tier makes the
                      Standard feel comprehensive. Research shows that 60-70% of buyers choose the
                      middle option when presented with three tiers — which is exactly why you
                      should design your Standard package to be your most profitable. Set the
                      prices so the gap between Starter and Standard feels small relative to the
                      value gained, while the gap between Standard and Premium feels larger. This
                      subtle pricing architecture guides most clients toward the package that earns
                      you the best margin.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-rose-400/10 to-pink-500/10 border border-rose-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-rose-400 font-medium mb-2">Quick Pricing Formula</p>
                  <p className="text-sm">
                    Start with your hourly rate multiplied by estimated project hours as a
                    baseline. Then apply multipliers: Starter at 0.85x (slight discount for
                    reduced scope), Standard at 1.15x (best value positioning), and Premium at
                    1.65x (premium positioning with expanded scope). These are starting points —
                    adjust based on your market, experience, and the specific value you deliver.
                    The tool above applies these multipliers automatically and shows your effective
                    hourly rate for each tier so you can ensure every package is profitable.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: How InvoiceFlow Helps */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Helps Manage Packaged Services
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Building the package is step one. Invoicing it professionally, tracking
                  payments, and managing add-ons is where InvoiceFlow takes over. When your
                  packages and invoicing work together, you deliver a seamless client experience
                  from proposal to payment.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Package-Based Invoicing
                    </h4>
                    <p className="text-xs text-slate-400">
                      Create invoices that reflect your package structure — line items for the
                      package tier, individual add-ons, and milestone payments. Clients see
                      exactly what they are paying for, which reduces payment disputes and builds
                      trust. No more confusing time-based line items that clients question.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Add-On Tracking
                    </h4>
                    <p className="text-xs text-slate-400">
                      When clients request add-ons mid-project, InvoiceFlow lets you generate a
                      supplementary invoice instantly. Track which add-ons have been approved,
                      invoiced, and paid — so nothing slips through the cracks. This turns scope
                      creep into revenue instead of unpaid extra work.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Milestone Payments
                    </h4>
                    <p className="text-xs text-slate-400">
                      Structure package payments across milestones — deposit on sign-off,
                      midpoint payment on draft delivery, final payment on completion. InvoiceFlow
                      automates payment reminders at each milestone so you are never chasing
                      payments manually. Your cash flow stays healthy throughout the project.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Revenue Per Package
                    </h4>
                    <p className="text-xs text-slate-400">
                      See which of your service packages generates the most revenue and which
                      tier clients choose most often. Over time, this data helps you refine your
                      packaging strategy — adjust pricing, add or remove deliverables, and
                      optimise your most popular package for maximum profitability.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Professional Presentation
                    </h4>
                    <p className="text-xs text-slate-400">
                      Send branded invoices that match the professional quality of your service
                      packages. Consistent branding from proposal to invoice to receipt signals
                      that you run a premium operation. InvoiceFlow handles formatting, GST
                      calculation, and ATO compliance so your invoices always look polished.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Tax-Ready Records
                    </h4>
                    <p className="text-xs text-slate-400">
                      Every package invoice is automatically compliant with Australian tax
                      requirements — ABN, GST amounts, payment terms, and clear service
                      descriptions. At tax time, your records are already organised by client,
                      package type, and financial year. No scrambling, no missed deductions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Package it. Price it.{' '}
              <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                Invoice it.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps Australian freelancers build service packages, invoice clients
              professionally, and track every payment — so you earn what your expertise is worth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/pricing-comparison"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Pricing Comparison Tool
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="service-package-builder" category="Pricing & Rates" />
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
