import type { Metadata } from 'next';
import Link from 'next/link';
import RateCardGenerator from './RateCardGenerator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const title = 'Rate Card Generator | Free Freelance Pricing Tool — InvoiceFlow';
const description =
  'Free rate card generator for Australian freelancers. Create a professional rate card with hourly, project, and retainer pricing across your services. Copy or print — no signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance rate card template',
    'rate card generator free',
    'professional rate card template',
    'freelance pricing sheet template',
    'rate card template australia',
    'service rate card generator',
    'freelance rate sheet template',
    'how to create a rate card freelancer',
    'consulting rate card template',
    'pricing menu template freelancer',
  ],
  openGraph: {
    title: 'Rate Card Generator — Free Freelance Pricing Tool | InvoiceFlow',
    description:
      'Create a professional rate card with hourly, project, and retainer pricing. Free tool for freelancers — no signup required.',
    url: 'https://www.invoiceflow.au/tools/rate-card-generator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rate Card Generator — Free Freelance Pricing Tool | InvoiceFlow',
    description:
      'Create a professional rate card with service pricing, terms, and availability. Free tool for freelancers.',
  },
  alternates: { canonical: 'https://www.invoiceflow.au/tools/rate-card-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Rate Card Generator for Freelancers',
  description:
    'A 4-step wizard that helps freelancers create professional rate cards with service listings, hourly/project/retainer pricing, availability, terms, and a polished layout ready to share with clients. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/rate-card-generator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  creator: {
    '@type': 'Organization',
    name: 'InvoiceFlow',
    url: 'https://www.invoiceflow.au',
  },
};

export default function RateCardGeneratorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-400/10 border border-amber-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full" />
              <span className="text-amber-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Rate Card{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Create a professional rate card with your services, pricing, payment terms, and
              availability — all in one polished document. Pre-populated suggestions for your industry,
              ready to customise and share with clients. Built for Australian freelancers.
            </p>
          </div>

          {/* Rate Card Tool */}
          <RateCardGenerator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: What Is a Rate Card */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Is a Rate Card and Why Every Freelancer Needs One
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  A rate card is a single document that lists your services alongside their prices,
                  payment terms, and conditions. Think of it as your professional pricing menu — a
                  concise, shareable reference that tells prospective clients exactly what you offer and
                  what it costs. Unlike a proposal, which is tailored to a specific project, a rate card
                  is a general-purpose document you can send to anyone who asks about your rates.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent text-sm font-bold">01</span>
                      Save Hours on Custom Quotes
                    </h4>
                    <p className="text-sm text-slate-400">
                      Without a rate card, every pricing enquiry means starting from scratch — opening a
                      new document, calculating costs, formatting a quote, and sending it off. That
                      process can take 30 minutes to an hour per lead, and most freelancers field
                      multiple enquiries per week. A rate card eliminates the repetitive work entirely.
                      When someone asks &quot;what do you charge?&quot; you send your rate card in under
                      a minute. The client gets instant clarity, and you get your time back. Over the
                      course of a year, a freelancer handling three pricing enquiries per week saves
                      roughly 75-150 hours — that is nearly a full month of billable work recovered
                      simply by having a standard pricing document ready to go.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent text-sm font-bold">02</span>
                      Signal Professionalism
                    </h4>
                    <p className="text-sm text-slate-400">
                      Sending a well-designed rate card immediately positions you as a professional who
                      takes their business seriously. It communicates confidence in your pricing and
                      signals that you have an established, organised operation — not a side hustle that
                      makes up prices on the spot. Clients, especially corporate and agency clients,
                      expect to see structured pricing. A rate card meets that expectation and builds
                      trust before the first conversation. It also helps you stand out from competitors
                      who send vague, unformatted emails with rough estimates. The freelancer who sends
                      a polished rate card wins the perception game every time — and perception directly
                      influences whether a client chooses to work with you and how much they are willing
                      to pay.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent text-sm font-bold">03</span>
                      Pre-Qualify Leads Automatically
                    </h4>
                    <p className="text-sm text-slate-400">
                      One of the most powerful benefits of a rate card is its ability to filter leads
                      before they reach your inbox. By sharing your rate card publicly — on your website,
                      in your email signature, or on freelance platforms — prospective clients can see
                      your pricing before they contact you. Clients whose budget does not align with your
                      rates self-select out, which means the enquiries you do receive come from people
                      who already know your price range and are comfortable with it. This eliminates
                      wasted discovery calls with tyre-kickers and dramatically improves your
                      close rate. Freelancers who share rate cards upfront report close rates 20-35%
                      higher than those who only reveal pricing after an initial call — because the
                      pricing conversation has already happened before the call begins.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-400/10 to-yellow-500/10 border border-amber-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-amber-400 font-medium mb-2">When to Use a Rate Card vs a Proposal</p>
                  <p className="text-sm">
                    Use a rate card for initial enquiries, networking follow-ups, and general pricing
                    conversations — any time a client asks &quot;what do you charge?&quot; before
                    discussing a specific project. Use a formal proposal when a client has described a
                    specific project with defined scope and you need to present a tailored quote with
                    deliverables, timeline, and terms. The rate card starts the conversation; the
                    proposal closes the deal. Many freelancers use both: the rate card to qualify and
                    attract leads, and the proposal to convert qualified leads into signed contracts.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How to Set Your Freelance Rates in Australia */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Set Your Freelance Rates in Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Setting the right rates is one of the hardest decisions a freelancer faces — charge
                  too little and you burn out doing premium work for discount prices; charge too much
                  and you lose opportunities to competitors who offer comparable value. The key is to
                  approach pricing strategically, using a combination of market research, cost analysis,
                  and value-based thinking.
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      Hourly vs Project vs Retainer vs Day Rate
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Hourly Rate</p>
                        <p className="text-xs text-slate-400">
                          Best for consulting, advisory, and ad-hoc work where scope is hard to define
                          upfront. Simple to calculate: your desired annual income divided by billable
                          hours per year (typically 1,000-1,200 hours after accounting for admin,
                          marketing, leave, and non-billable time). The downside is that hourly billing
                          penalises efficiency — the faster you get, the less you earn. Use hourly
                          rates for ongoing advisory relationships and work with genuinely variable scope.
                        </p>
                      </div>
                      <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Per Project</p>
                        <p className="text-xs text-slate-400">
                          Best for defined deliverables like website builds, design projects, and
                          copywriting packages. Price based on the outcome value to the client, not
                          the hours it takes you. As you become more experienced and efficient, your
                          effective hourly rate increases automatically. Project pricing also gives
                          clients budget certainty, which reduces friction during the sales process.
                          This is the most profitable pricing model for experienced freelancers.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Monthly Retainer</p>
                        <p className="text-xs text-slate-400">
                          Best for ongoing services like social media management, SEO, or
                          maintenance contracts. Retainers provide predictable recurring revenue —
                          the holy grail for freelancer cash flow. Price your retainer at a slight
                          discount to equivalent hourly billing (typically 10-15% less) in exchange
                          for the commitment and predictability. Clients benefit from priority access
                          and guaranteed availability; you benefit from steady income.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-white text-sm font-medium mb-1">Day Rate</p>
                        <p className="text-xs text-slate-400">
                          Best for workshops, on-site consulting, and intensive working sessions.
                          Calculate as 8 times your hourly rate, though many freelancers apply a
                          premium of 10-20% for dedicated full-day availability. Day rates signal
                          premium positioning and work well for B2B clients who budget in daily
                          increments. Always define what a &quot;day&quot; means (typically 8 hours
                          including a break) to avoid scope creep.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      Market Research and Value-Based Pricing
                    </h4>
                    <p className="text-sm text-slate-400">
                      Start by researching what other freelancers in your industry and location charge.
                      Australian freelancer rates vary significantly by specialty: web designers
                      typically charge $100-200/hour, developers $120-250/hour, copywriters $80-180/hour,
                      and consultants $150-400/hour. Use platforms like Upwork, LinkedIn, and freelance
                      communities to benchmark, but treat market rates as a floor, not a ceiling. The
                      most important factor is the value your work creates for clients. A website that
                      generates $50,000 in annual revenue for a client is worth far more than the 60
                      hours it took to build — price accordingly. Value-based pricing means asking
                      &quot;what is this outcome worth to the client?&quot; rather than &quot;how many
                      hours will this take me?&quot; Clients pay for results, not effort.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3">
                      When to Raise Your Rates
                    </h4>
                    <p className="text-sm text-slate-400">
                      Raise your rates when you are consistently at capacity (booking out 2-4 weeks in
                      advance), when you have not raised rates in 12 months, when you gain a significant
                      new skill or certification, or when your close rate exceeds 70% — which means your
                      prices are too low and clients are snapping up your services too easily. A good
                      target close rate is 30-50%, which indicates your pricing is in the right zone.
                      When raising rates, apply the new rates to new clients immediately and give
                      existing clients 30-60 days notice. Most existing clients will accept a 10-15%
                      increase without pushback, especially if you can demonstrate the value you have
                      delivered.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-400/10 to-yellow-500/10 border border-amber-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-amber-400 font-medium mb-2">ATO Considerations for Service Rates</p>
                  <p className="text-sm">
                    If your annual revenue exceeds $75,000, you must register for GST with the ATO.
                    Once registered, you need to decide whether your rate card prices are GST-inclusive
                    or GST-exclusive — and clearly state this on your rate card. GST-inclusive pricing
                    is simpler for B2C clients; GST-exclusive is standard for B2B clients who claim
                    GST credits. Either approach is valid, but consistency is essential. The tool above
                    lets you specify your GST status and adds the appropriate note to your rate card
                    automatically. Remember to lodge your BAS quarterly and keep records of all invoices
                    — InvoiceFlow handles this automatically when you generate invoices from your rate card.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: How InvoiceFlow Works With Your Rate Card */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How InvoiceFlow Works With Your Rate Card
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Your rate card defines what you charge. InvoiceFlow turns those rates into
                  professional invoices in seconds. When your pricing document and invoicing tool work
                  together, you create a seamless client experience — from the first enquiry to final
                  payment — that looks polished, consistent, and completely professional.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Consistent Pricing
                    </h4>
                    <p className="text-xs text-slate-400">
                      When your rate card and invoices show the same prices, clients trust you. There
                      is nothing more damaging to a professional relationship than quoting one rate on
                      your rate card and invoicing a different amount. InvoiceFlow lets you set up
                      service line items that match your rate card exactly, so every invoice reflects
                      the prices your client already agreed to. No surprises, no disputes — just
                      smooth, predictable billing that builds long-term client relationships.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Quick Invoice Generation
                    </h4>
                    <p className="text-xs text-slate-400">
                      Once a client agrees to your rate card, generating an invoice should take less
                      than two minutes. InvoiceFlow lets you select services from pre-saved line items,
                      auto-fills your business details and ABN, calculates GST automatically, and
                      produces a professionally formatted invoice that is ready to send. No more
                      wrestling with Word templates or manually calculating totals. The time you save
                      on invoicing goes back into billable work — which means more revenue from the
                      same number of working hours.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Automated Payment Tracking
                    </h4>
                    <p className="text-xs text-slate-400">
                      Sending the invoice is only half the job — tracking payment is where most
                      freelancers drop the ball. InvoiceFlow tracks every invoice status automatically:
                      sent, viewed, overdue, and paid. It sends payment reminders at your configured
                      intervals so you never have to write an awkward follow-up email asking where
                      your money is. This automated follow-up recovers an average of 15-20% of
                      overdue invoices that would otherwise go uncollected.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      GST and BAS Compliance
                    </h4>
                    <p className="text-xs text-slate-400">
                      If your rate card includes GST-inclusive or GST-exclusive pricing, InvoiceFlow
                      handles the calculation automatically on every invoice. It tracks your GST
                      collected and paid across the quarter, making BAS preparation straightforward.
                      Every invoice includes your ABN, GST amount, and meets ATO requirements for
                      tax invoices — so you are always compliant without thinking about it.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Revenue Reporting by Service
                    </h4>
                    <p className="text-xs text-slate-400">
                      Over time, InvoiceFlow shows you which services from your rate card generate the
                      most revenue, which have the highest margins, and which you should consider
                      dropping or repricing. This data-driven insight helps you refine your rate card
                      every quarter — raise prices on high-demand services, adjust underperforming
                      ones, and double down on the services that deliver the best return on your time.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Professional Client Experience
                    </h4>
                    <p className="text-xs text-slate-400">
                      From rate card to invoice to receipt, your client sees a consistent, branded
                      experience. InvoiceFlow matches the professionalism of your rate card with
                      equally polished invoices — your business name, logo, and colour scheme carried
                      through every financial document. This consistency signals that you run a real
                      business, not a hobby, and it justifies the premium rates on your rate card.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Set your rates. Share your card.{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Invoice with confidence.
              </span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow helps Australian freelancers go from rate card to invoice to paid — with
              professional formatting, automated GST, and payment tracking built in.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/service-package-builder"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Service Package Builder
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="rate-card-generator" category="Pricing & Rates" />
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
