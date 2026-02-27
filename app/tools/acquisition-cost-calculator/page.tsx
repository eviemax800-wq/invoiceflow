import type { Metadata } from 'next';
import Link from 'next/link';
import AcquisitionCostCalculator from './AcquisitionCostCalculator';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';

const title =
  'Client Acquisition Cost Calculator | Free CAC Calculator for Freelancers — InvoiceFlow';
const description =
  'Free client acquisition cost (CAC) calculator for Australian freelancers. Calculate cost per client by marketing channel, CLV:CAC ratios, payback periods, and get budget reallocation recommendations. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'client acquisition cost calculator freelancer',
    'customer acquisition cost freelancer',
    'CAC calculator freelance',
    'cost per client calculator',
    'freelance marketing ROI calculator',
    'client acquisition cost formula',
    'freelance CAC calculator australia',
    'marketing cost per client freelancer',
    'CLV CAC ratio calculator',
    'customer acquisition cost calculator australia',
    'freelance marketing spend calculator',
    'client acquisition cost by channel',
  ],
  openGraph: {
    title: 'Client Acquisition Cost Calculator — Free CAC Calculator for Freelancers | InvoiceFlow',
    description:
      'Calculate your client acquisition cost by marketing channel, compare CLV:CAC ratios, find your most efficient channel, and get budget reallocation recommendations. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/acquisition-cost-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Acquisition Cost Calculator — Free CAC Calculator for Freelancers | InvoiceFlow',
    description:
      'Calculate your freelance CAC by channel, CLV:CAC ratios, and payback periods. Free tool for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/acquisition-cost-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Client Acquisition Cost Calculator for Freelancers',
  description:
    'Calculate your client acquisition cost (CAC) by marketing channel for your freelance business. Includes CLV:CAC ratio analysis, payback period calculations, channel efficiency comparison, budget reallocation recommendations, and copy-to-clipboard reporting. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/acquisition-cost-calculator',
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

export default function AcquisitionCostCalculatorPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span className="text-cyan-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Client Acquisition Cost{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Find out exactly how much it costs to win each new client across every marketing channel.
              Compare CLV:CAC ratios, identify your most efficient channels, and get data-driven
              recommendations for reallocating your marketing budget.
            </p>
          </div>

          {/* Calculator Tool */}
          <AcquisitionCostCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: What Is CAC */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                What Is Client Acquisition Cost (CAC) for Freelancers?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Client Acquisition Cost, commonly abbreviated to CAC, is the total cost of winning a new
                  client. For freelancers, this includes both the direct money you spend on marketing and
                  the opportunity cost of the time you invest in business development activities. It is one
                  of the most important metrics for any freelance business because it directly determines
                  whether your marketing efforts are profitable.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-cyan-400 text-sm font-bold">01</span>
                      Direct Costs (Money Spent)
                    </h4>
                    <p className="text-sm">
                      These are the out-of-pocket expenses you incur to attract clients. For freelancers,
                      this typically includes advertising spend on Google Ads or Meta, subscriptions to
                      freelance platforms like Upwork or Fiverr, networking event tickets, professional
                      association memberships, content marketing tools, and SEO software. Many Australian
                      freelancers underestimate these costs because they accumulate across many small
                      monthly subscriptions. Even a portfolio website hosting fee is a client acquisition
                      cost.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-cyan-400 text-sm font-bold">02</span>
                      Time Costs (Opportunity Cost)
                    </h4>
                    <p className="text-sm">
                      Every hour you spend on marketing, networking, proposals, and sales calls is an hour
                      you could have spent on billable client work. This is your opportunity cost, and it
                      is often the larger component of a freelancer&apos;s CAC. If your hourly rate is $150
                      and you spend 10 hours per month on marketing, your time cost alone is $1,500 per
                      month. This calculator accounts for both money and time costs to give you a true
                      picture of what each client really costs to acquire.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Why CAC Matters for Freelancers</h4>
                  <p className="text-sm">
                    Unlike SaaS companies or e-commerce businesses, freelancers often acquire clients through
                    a mix of paid and organic channels — referrals, content marketing, cold outreach, and
                    platforms. Each channel has a different cost profile. Without measuring CAC per channel,
                    you cannot know which marketing activities are actually generating profitable clients and
                    which are draining your time and budget. The freelancers who grow fastest are the ones
                    who ruthlessly track their numbers and double down on what works.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-cyan-400/10 to-sky-500/10 border border-cyan-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-cyan-400 font-medium mb-2">The Australian Context</p>
                  <p className="text-sm">
                    The Australian freelance market has grown significantly, with over 2 million independent
                    workers nationally. Competition for clients is real, particularly in saturated fields
                    like graphic design, web development, and copywriting. Understanding your CAC gives you
                    a competitive edge. If you know it costs you $300 to acquire a client who generates
                    $8,000 in lifetime value, you can confidently invest in marketing knowing every dollar
                    spent returns more than $26 in revenue. That is the power of knowing your numbers.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How to Calculate */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Calculate Your Freelance Client Acquisition Cost
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Calculating CAC is straightforward once you have the right data. The challenge for most
                  freelancers is tracking the inputs consistently. Here is a step-by-step guide with
                  examples relevant to Australian freelancers.
                </p>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">The Core Formula</h4>
                  <div className="bg-white/5 rounded-lg p-4 font-mono text-sm text-center text-cyan-300 mb-4">
                    CAC = (Money Spent + (Hours Spent x Hourly Rate)) / New Clients Acquired
                  </div>
                  <p className="text-sm">
                    This formula captures both the direct financial outlay and the opportunity cost of your
                    time. Apply it per channel for granular insight, or across all channels for your blended
                    CAC.
                  </p>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Choose Your Time Period</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Select a meaningful analysis window. A single month may be too noisy — one large
                        project landing skews everything. A quarter (3 months) is the sweet spot for most
                        freelancers. If you are just starting out, use whatever data you have, but aim for
                        at least 3 months of tracking before making major budget decisions.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Track Money Spent Per Channel</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Go through your bank statements and subscriptions. Add up every dollar spent on
                        marketing for each channel. Include Google Ads spend, Upwork connects, networking
                        event tickets, SEO tools, email marketing software, business card printing, and
                        any other costs directly related to finding clients. Do not include general business
                        costs like accounting software or internet — only marketing and acquisition costs.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Track Hours Spent Per Channel</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        This is where most freelancers lose visibility. Track how many hours you spend on
                        marketing activities per channel. Writing blog posts, creating social media content,
                        attending networking events, writing proposals, doing discovery calls — all of this
                        counts. Use a time tracker or even a simple spreadsheet. Multiply these hours by
                        your hourly rate to get the time cost.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Count New Clients Per Channel</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Attribute each new client to the channel that sourced them. Ask every new client
                        how they found you — make it part of your onboarding process. If a client came from
                        multiple touchpoints (saw your blog, then found you on LinkedIn, then was referred
                        by a contact), attribute to the channel that initiated the relationship or use
                        first-touch attribution consistently.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Worked Example</h4>
                  <p className="text-sm mb-3">
                    Sarah is a Melbourne-based UX designer charging $140/hour. Over the last quarter:
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 text-sm space-y-1 font-mono">
                    <p className="text-cyan-300">Referrals: $0 money + 3hrs time = $420 cost | 2 clients | CAC = $210</p>
                    <p className="text-amber-300">LinkedIn: $200 money + 15hrs time = $2,300 cost | 1 client | CAC = $2,300</p>
                    <p className="text-emerald-300">SEO/Blog: $50 money + 20hrs time = $2,850 cost | 3 clients | CAC = $950</p>
                  </div>
                  <p className="text-sm mt-3">
                    Sarah&apos;s blended CAC is $929 across 6 clients. But the channel-level data reveals
                    that referrals are 4.5x more efficient than SEO and 11x more efficient than LinkedIn.
                    This tells Sarah to invest more time nurturing referral relationships and less time on
                    LinkedIn content that is not converting.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Understanding CLV:CAC */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Understanding the CLV:CAC Ratio for Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Knowing your CAC alone is not enough. A $500 acquisition cost might be excellent or
                  terrible depending on how much revenue that client generates. This is why the CLV:CAC
                  ratio is the gold standard metric for evaluating marketing efficiency. It tells you how
                  many dollars of lifetime value you generate for every dollar spent on acquisition.
                </p>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">The Formula</h4>
                  <div className="bg-white/5 rounded-lg p-4 font-mono text-sm text-center text-cyan-300 mb-4">
                    CLV:CAC Ratio = Client Lifetime Value / Client Acquisition Cost
                  </div>
                  <p className="text-sm">
                    Client Lifetime Value (CLV) is the total revenue you earn from a client across your
                    entire relationship. If a client books three projects worth $3,000 each over 18 months,
                    their CLV is $9,000. If it cost you $1,500 to acquire them, your CLV:CAC ratio is 6:1.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Benchmark Ranges</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-400 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium text-sm">Below 1:1 — Losing Money</span>
                        <p className="text-xs text-slate-500 mt-0.5">
                          You are spending more to acquire clients than they generate in revenue. This is
                          unsustainable. Either your marketing is inefficient, your pricing is too low, or
                          your client retention is poor. Immediate action is needed — pause unprofitable
                          channels and focus on improving client value or reducing costs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-amber-400 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium text-sm">1:1 to 3:1 — Needs Improvement</span>
                        <p className="text-xs text-slate-500 mt-0.5">
                          You are profitable but margins are thin. After accounting for delivery costs,
                          taxes, and overheads, there may not be much left. Focus on either increasing
                          CLV (through upselling, retainers, or better retention) or reducing CAC (by
                          shifting to more efficient channels). Most freelancers starting out fall in this
                          range.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-400 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium text-sm">3:1 to 5:1 — Healthy</span>
                        <p className="text-xs text-slate-500 mt-0.5">
                          This is the target zone for established freelancers. Your marketing is generating
                          strong returns, and you have healthy margins to absorb fluctuations. Continue
                          optimising but do not over-rotate — maintain the balance between acquisition
                          efficiency and growth velocity.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium text-sm">5:1 and Above — Excellent (But Check)</span>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Outstanding efficiency. However, a very high ratio can also indicate
                          underinvestment in marketing. If your ratio is 10:1 or above, you might be
                          leaving growth on the table. Consider increasing spend on your best channels to
                          acquire more clients — you have proven the unit economics work.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-400/10 to-sky-500/10 border border-cyan-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-cyan-400 font-medium mb-2">Australian Freelancer Benchmarks</p>
                  <p className="text-sm">
                    Based on data from Australian freelance communities, the average CAC for solo
                    freelancers ranges from $200 to $2,000 depending on the service and channel.
                    Referral-based acquisition typically runs $100-$500, while paid advertising and
                    platform-based acquisition can run $500-$3,000. The median CLV for Australian
                    freelancers is $4,000-$12,000 depending on the service type, with retainer-based
                    services at the higher end. A healthy target for most Australian freelancers is a
                    CLV:CAC ratio of at least 3:1. If you are consistently above 5:1, you are in
                    excellent shape.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Reducing Your CAC */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Reducing Your Client Acquisition Cost: Practical Strategies
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Lowering your CAC is one of the highest-leverage activities in a freelance business.
                  Every dollar you save on acquisition drops straight to your bottom line. Here are proven
                  strategies that Australian freelancers use to reduce their cost per client.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Build a Referral Engine</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Referrals are almost always the lowest-CAC channel for freelancers. The client
                        already trusts you through the referrer, so conversion rates are higher and sales
                        cycles are shorter. Create a formal referral program: ask every satisfied client
                        for referrals, offer a small incentive (a discount on their next project, a gift
                        card, or a reciprocal referral), and make it easy for them to introduce you. A
                        simple email template they can forward works wonders. Australian businesses are
                        particularly referral-driven — word of mouth is king in local B2B markets.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Invest in Content and SEO</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Content marketing has a high upfront time cost but compounds over time. A blog
                        post you write today can generate leads for years. Focus on content that answers
                        the questions your ideal clients are searching for. If you are a Melbourne-based
                        web developer, write about &ldquo;how much does a website cost in Australia&rdquo;
                        or &ldquo;Next.js vs WordPress for small business.&rdquo; Over 6-12 months, your
                        content CAC drops dramatically as organic traffic compounds while your per-article
                        cost stays flat.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Increase Conversion Rates</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        If you get 10 enquiries per month and close 2, your conversion rate is 20%.
                        Improving that to 30% reduces your effective CAC by a third without spending a
                        cent more on marketing. Improve your proposal templates, respond faster to
                        enquiries (within 2 hours is ideal), add testimonials and case studies to your
                        portfolio, and create a smooth onboarding process. Every percentage point of
                        conversion improvement directly reduces your CAC.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Specialise and Niche Down</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Generalist freelancers compete on price. Specialists compete on value and attract
                        clients who are specifically looking for their expertise. A &ldquo;Shopify
                        developer for Australian fashion brands&rdquo; has a much lower CAC than a
                        &ldquo;web developer&rdquo; because the marketing message resonates more strongly
                        with a specific audience. Specialisation also increases CLV because clients stay
                        longer with domain experts.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-xs font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Reallocate From High-CAC to Low-CAC Channels</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Use this calculator to identify which channels are delivering clients at the lowest
                        cost. Then shift your budget and time from the expensive channels to the efficient
                        ones. If referrals cost you $200 per client and paid ads cost $1,500, the path is
                        clear — invest more in referral cultivation and less in paid advertising. This is
                        not about abandoning channels entirely but about weighted allocation based on real
                        performance data.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-xs font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Improve Client Retention (Increase CLV)</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        The other side of the CLV:CAC equation is lifetime value. Keeping a client for 12
                        months instead of 6 doubles their CLV without any additional acquisition cost.
                        Offer retainer packages, check in regularly, exceed expectations on delivery, and
                        proactively suggest improvements. It costs 5-7x more to acquire a new client than
                        to retain an existing one. Maximising retention is the single most effective way to
                        improve your CLV:CAC ratio.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-400/10 to-sky-500/10 border border-cyan-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-cyan-400 font-medium mb-2">Quarterly Review Habit</p>
                  <p className="text-sm">
                    Track your CAC per channel every quarter. Keep a simple spreadsheet or use this
                    calculator at the end of each quarter to compare trends. Over time, you will build a
                    clear picture of which channels are improving, which are getting more expensive, and
                    where to invest your next marketing dollar. The freelancers who track their CAC
                    consistently grow their revenue 2-3x faster than those who guess.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Know your CAC and{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">get paid on time</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, GST calculations, and payment tracking — so you
              can focus on acquiring and serving clients. Professional invoices, automated
              reminders, and real-time payment status.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/client-lifetime-value"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Client Lifetime Value Calculator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="acquisition-cost-calculator" category="Business Analytics" />
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
