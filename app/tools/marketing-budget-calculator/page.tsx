import type { Metadata } from 'next';
import Link from 'next/link';
import MarketingBudgetCalculator from './MarketingBudgetCalculator';
import RelatedTools from '../components/RelatedTools';

const title =
  'Freelance Marketing Budget Calculator | Free Marketing Planner — InvoiceFlow';
const description =
  'Free marketing budget calculator for Australian freelancers. Calculate how much to spend on marketing, allocate budget across channels, estimate ROI, and plan client acquisition. No signup required.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance marketing budget calculator',
    'how much should freelancers spend on marketing',
    'marketing budget template freelancer',
    'freelance advertising budget australia',
    'small business marketing budget calculator',
    'freelance marketing plan calculator',
    'marketing budget allocation tool',
    'freelance marketing ROI calculator',
    'australian freelancer marketing spend',
    'marketing budget planner self employed',
    'freelance client acquisition cost calculator',
    'marketing channel budget allocator',
  ],
  openGraph: {
    title: 'Freelance Marketing Budget Calculator — Free Marketing Planner | InvoiceFlow',
    description:
      'Calculate your ideal marketing budget, allocate spend across channels, estimate ROI and new client acquisition. Built for Australian freelancers. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/marketing-budget-calculator',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Marketing Budget Calculator — Free Marketing Planner | InvoiceFlow',
    description:
      'Calculate your ideal marketing budget and channel allocation. Free tool for Australian freelancers.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/marketing-budget-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Marketing Budget Calculator',
  description:
    'Calculate how much Australian freelancers should spend on marketing. Includes channel allocation recommendations, expected ROI per channel, estimated new client acquisition rates, time vs money allocation, and stage-based budget strategies. Free — no signup required.',
  url: 'https://www.invoiceflow.au/tools/marketing-budget-calculator',
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

export default function MarketingBudgetCalculatorPage() {
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
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <span className="text-amber-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Marketing Budget{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Calculator</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Calculate how much you should spend on marketing as a freelancer. Get a personalised
              budget plan with channel allocations, expected ROI estimates, and client acquisition
              projections tailored to your business stage and revenue.
            </p>
          </div>

          {/* Marketing Budget Calculator Tool */}
          <MarketingBudgetCalculator />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: How Much Should Freelancers Spend on Marketing? */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How Much Should Freelancers Spend on Marketing?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  One of the most common questions freelancers ask is how much of their revenue should go
                  towards marketing. The answer depends on your business stage, growth ambitions, and how
                  established your referral network is. There is no one-size-fits-all number, but there are
                  proven benchmarks that work for the Australian freelance market.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">01</span>
                      Startup Freelancers (Under $50K Revenue)
                    </h4>
                    <p className="text-sm">
                      If you are just starting out or earning less than $50,000 per year, marketing
                      should be one of your biggest investments — between 15% and 20% of your revenue.
                      This sounds like a lot, but at this stage you are building awareness from scratch.
                      The good news is that most of this investment should be time rather than money.
                      Writing blog posts, networking at industry events, building your LinkedIn presence,
                      and asking for testimonials are all free or low-cost activities that compound over
                      time. A freelancer earning $40,000 should plan for $6,000 to $8,000 in annual
                      marketing spend, with at least 70% of that being time investment.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">02</span>
                      Growth-Stage Freelancers ($50K-$150K Revenue)
                    </h4>
                    <p className="text-sm">
                      At the growth stage, you have proven your services and have a client base. Marketing
                      spend should be 10% to 15% of revenue. This is the stage where you start blending
                      time investment with monetary investment — running targeted Google Ads, investing in
                      professional photography for your portfolio, or hiring a copywriter for your website.
                      A freelancer earning $100,000 should allocate $10,000 to $15,000 annually. Focus on
                      the channels that have already generated clients and scale those first before
                      experimenting with new channels.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">03</span>
                      Established Freelancers ($150K-$300K Revenue)
                    </h4>
                    <p className="text-sm">
                      At this level, you likely have a strong reputation and referral network. Marketing
                      spend can drop to 5% to 10% of revenue because word-of-mouth does much of the heavy
                      lifting. The focus shifts from generating volume to maintaining brand presence and
                      targeting premium clients. A freelancer earning $200,000 should allocate $10,000 to
                      $20,000 annually, with the majority going to brand positioning activities like
                      speaking engagements, thought leadership content, and strategic partnerships rather
                      than paid acquisition.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm font-bold">04</span>
                      Scaling Freelancers ($300K+ Revenue)
                    </h4>
                    <p className="text-sm">
                      When you are scaling beyond solo freelancing — building a team, productising services,
                      or launching courses — marketing investment increases again to 10% to 15% of revenue.
                      At this stage you are investing in systems: marketing automation, content pipelines,
                      paid campaign management, and potentially a part-time marketing hire. A business at
                      $400,000 revenue should allocate $40,000 to $60,000 annually, with 80% being monetary
                      investment in tools, ads, and contractors.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-amber-400 font-medium mb-2">The Australian Context</p>
                  <p className="text-sm">
                    Australian freelancers often underinvest in marketing because the market feels
                    relationship-driven. While referrals are powerful, relying solely on word-of-mouth
                    creates feast-and-famine cycles. The freelancers who grow consistently are those who
                    treat marketing as a non-negotiable business expense — not something they do when
                    work dries up. Use this calculator to set a budget you can commit to regardless of
                    how busy you are.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Best Marketing Channels for Australian Freelancers */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Best Marketing Channels for Australian Freelancers
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Not all marketing channels deliver equal results for freelancers. The best channel
                  for you depends on your niche, your strengths, and where your ideal clients spend
                  their time. Here is how the most effective channels stack up for Australian freelancers,
                  backed by real ROI data.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Email Marketing (ROI: 36-42x)</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Email consistently delivers the highest ROI of any marketing channel. For freelancers,
                        this means building an email list through your website, lead magnets, and content.
                        A monthly newsletter with valuable insights keeps you top-of-mind with past clients
                        and prospects. Cold email outreach, when done well with personalised messages and
                        genuine value, can generate high-quality leads at almost zero cost. The key is
                        consistency — sending value-driven emails at least twice a month builds trust over
                        time. Tools like Mailchimp, ConvertKit, or Brevo offer free tiers that are more
                        than sufficient for most freelancers.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Referral Programs (ROI: 8-15x)</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Referred clients convert faster, pay more, and stay longer than clients from any
                        other source. Australian freelancers who actively ask for referrals report that
                        referred clients are worth 25% more over their lifetime. A simple referral program
                        — even just asking happy clients &ldquo;Do you know anyone who could benefit from
                        similar work?&rdquo; — can generate 2-4 new enquiries per month. Consider offering
                        a discount on future work or a small gift card as a thank-you for successful referrals.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">SEO & Content Marketing (ROI: 5-12x)</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Content marketing is the long game, but it compounds powerfully. A single well-written
                        blog post can generate leads for years. For Australian freelancers, writing content
                        that targets specific local queries — &ldquo;best freelance web developer Melbourne&rdquo;
                        or &ldquo;freelance copywriter Sydney rates&rdquo; — captures high-intent traffic
                        with minimal competition. Pair this with case studies showcasing Australian client
                        work and you build both SEO authority and social proof simultaneously. Allocate 25%
                        of your marketing budget to content creation.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Portfolio & Website (ROI: 4-10x)</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Your website is your 24/7 salesperson. Australian freelancers with a polished,
                        conversion-optimised website close deals faster because prospects can self-qualify
                        before reaching out. Invest in professional design, fast load times, clear service
                        pages, and prominently displayed testimonials. Refresh your portfolio quarterly
                        with your latest and best work. A $2,000-$5,000 investment in your website can
                        easily return $20,000 or more in new business over a year.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-xs font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Networking & Events (ROI: 3-8x)</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        In-person networking remains powerful in Australia, particularly in Melbourne and
                        Sydney where industry events are frequent. Meetups, co-working events, industry
                        conferences, and local business chambers are all venues where freelancers can build
                        genuine relationships that turn into clients. Budget for 1-2 events per month and
                        focus on giving value rather than pitching. The freelancers who consistently show
                        up and contribute become the ones people think of first when a referral opportunity
                        arises.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-xs font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Social Media (ROI: 2-5x) & Paid Ads (ROI: 2-4x)</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Social media and paid advertising have the lowest ROI for freelancers but can be
                        valuable for specific use cases. LinkedIn is the clear winner for B2B freelancers
                        in Australia — posting thought leadership content and engaging with industry
                        discussions generates warm leads. Paid ads work best for retargeting website
                        visitors or promoting a specific lead magnet, not for cold prospecting. Keep paid
                        ad spend under 20% of your total marketing budget unless you have proven, profitable
                        campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Marketing Budget Allocation Strategies */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Marketing Budget Allocation Strategies
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Knowing your total marketing budget is only half the equation. How you allocate that
                  budget across channels, and how you balance time investment against monetary investment,
                  determines your actual results. Here are strategies that work for freelancers at every
                  stage.
                </p>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">The 70/20/10 Rule</h4>
                  <p className="text-sm mb-3">
                    A practical framework for allocating your marketing budget across three categories:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-amber-300">70%</p>
                      <p className="text-xs text-slate-500 mt-1">Proven Channels</p>
                      <p className="text-xs text-slate-400 mt-2">
                        Invest the majority of your budget in channels that have already generated clients.
                        Double down on what works before trying anything new.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-amber-300">20%</p>
                      <p className="text-xs text-slate-500 mt-1">Emerging Channels</p>
                      <p className="text-xs text-slate-400 mt-2">
                        Allocate a smaller portion to channels that show promise but are not yet proven
                        for your business. Test for one quarter before scaling up.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-amber-300">10%</p>
                      <p className="text-xs text-slate-500 mt-1">Experimental</p>
                      <p className="text-xs text-slate-400 mt-2">
                        Reserve a small budget for testing completely new ideas — podcast advertising,
                        sponsoring a local event, or trying a new social platform.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Time vs Money: The Bootstrapper&apos;s Framework</h4>
                  <p className="text-sm mb-3">
                    When you are starting out, time is your biggest marketing asset. As your revenue grows,
                    you should progressively shift from time-heavy to money-heavy marketing. Here is how the
                    balance typically shifts:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-24">Startup</span>
                      <div className="flex-1 h-4 bg-white/5 rounded-full overflow-hidden flex">
                        <div className="h-full bg-amber-400/60 rounded-l-full" style={{ width: '70%' }} />
                        <div className="h-full bg-orange-500/60 rounded-r-full" style={{ width: '30%' }} />
                      </div>
                      <span className="text-xs text-slate-500 w-20 text-right">70/30</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-24">Growth</span>
                      <div className="flex-1 h-4 bg-white/5 rounded-full overflow-hidden flex">
                        <div className="h-full bg-amber-400/60 rounded-l-full" style={{ width: '50%' }} />
                        <div className="h-full bg-orange-500/60 rounded-r-full" style={{ width: '50%' }} />
                      </div>
                      <span className="text-xs text-slate-500 w-20 text-right">50/50</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-24">Established</span>
                      <div className="flex-1 h-4 bg-white/5 rounded-full overflow-hidden flex">
                        <div className="h-full bg-amber-400/60 rounded-l-full" style={{ width: '30%' }} />
                        <div className="h-full bg-orange-500/60 rounded-r-full" style={{ width: '70%' }} />
                      </div>
                      <span className="text-xs text-slate-500 w-20 text-right">30/70</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-24">Scaling</span>
                      <div className="flex-1 h-4 bg-white/5 rounded-full overflow-hidden flex">
                        <div className="h-full bg-amber-400/60 rounded-l-full" style={{ width: '20%' }} />
                        <div className="h-full bg-orange-500/60 rounded-r-full" style={{ width: '80%' }} />
                      </div>
                      <span className="text-xs text-slate-500 w-20 text-right">20/80</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">
                    Amber = time investment | Orange = monetary investment
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Bootstrapping Tips for Cash-Strapped Freelancers</h4>
                  <div className="space-y-2">
                    <p className="text-sm flex items-start gap-2">
                      <span className="text-amber-400 flex-shrink-0">1.</span>
                      Start with a $0 marketing budget. Write one blog post per week, post on LinkedIn
                      daily, and ask every happy client for a testimonial and referral. This alone can
                      generate 2-4 leads per month.
                    </p>
                    <p className="text-sm flex items-start gap-2">
                      <span className="text-amber-400 flex-shrink-0">2.</span>
                      Invest your first marketing dollar in an email tool. Building an email list from day
                      one gives you an owned audience that no algorithm change can take away.
                    </p>
                    <p className="text-sm flex items-start gap-2">
                      <span className="text-amber-400 flex-shrink-0">3.</span>
                      Attend one free networking event per month. In Melbourne alone, there are dozens of
                      free startup meetups, co-working events, and industry gatherings every week.
                    </p>
                    <p className="text-sm flex items-start gap-2">
                      <span className="text-amber-400 flex-shrink-0">4.</span>
                      Create a case study from every completed project. Case studies are the highest-converting
                      content type for freelancers because they demonstrate real results.
                    </p>
                    <p className="text-sm flex items-start gap-2">
                      <span className="text-amber-400 flex-shrink-0">5.</span>
                      Barter services with other freelancers. A web developer can build a copywriter&apos;s
                      website in exchange for website copy. Both get marketing assets at zero cash cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Measuring Marketing ROI as a Freelancer */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Measuring Marketing ROI as a Freelancer
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Marketing without measurement is just guessing with money. As a freelancer, you do not
                  need enterprise-grade analytics — but you do need a simple system for tracking what
                  works and what does not. Here is how to measure marketing ROI effectively without
                  spending hours on spreadsheets.
                </p>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">The Essential KPIs for Freelancers</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-sm font-medium text-white mb-1">Client Acquisition Cost (CAC)</p>
                      <p className="text-xs text-slate-400">
                        Total marketing spend divided by the number of new clients acquired. If you spent
                        $1,500 on marketing last month and gained 3 new clients, your CAC is $500. Track
                        this per channel to identify your most cost-effective lead sources.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-sm font-medium text-white mb-1">Client Lifetime Value (CLV)</p>
                      <p className="text-xs text-slate-400">
                        The total revenue a client generates over their entire relationship with you. If
                        a client pays $3,000 per project and typically hires you for 4 projects, their
                        CLV is $12,000. Your marketing is profitable as long as CLV exceeds CAC by at
                        least 3x.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-sm font-medium text-white mb-1">Lead-to-Client Conversion Rate</p>
                      <p className="text-xs text-slate-400">
                        The percentage of enquiries that become paying clients. A healthy conversion rate
                        for freelancers is 25-40%. If yours is below 20%, the issue is likely in your
                        sales process or positioning, not your marketing volume.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-sm font-medium text-white mb-1">Marketing ROI</p>
                      <p className="text-xs text-slate-400">
                        Revenue generated from marketing divided by marketing spend. An ROI of 5x means
                        every $1 spent on marketing generates $5 in revenue. For freelancers, anything
                        above 3x is healthy, and above 8x is excellent.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-5 mt-4">
                  <h4 className="text-white font-semibold mb-3">Simple Tracking Methods</h4>
                  <div className="space-y-2">
                    <p className="text-sm flex items-start gap-2">
                      <span className="text-amber-400 flex-shrink-0">1.</span>
                      <strong className="text-white">Ask every new client:</strong> &ldquo;How did you hear
                      about me?&rdquo; This single question, tracked in a spreadsheet, gives you more
                      actionable data than any analytics tool. Record every answer.
                    </p>
                    <p className="text-sm flex items-start gap-2">
                      <span className="text-amber-400 flex-shrink-0">2.</span>
                      <strong className="text-white">Use UTM parameters:</strong> Add tracking codes to
                      links in your email newsletters, social posts, and ads. Google Analytics (free) will
                      then show you exactly which channels drive website visitors and enquiries.
                    </p>
                    <p className="text-sm flex items-start gap-2">
                      <span className="text-amber-400 flex-shrink-0">3.</span>
                      <strong className="text-white">Monthly marketing review:</strong> Spend 30 minutes
                      at the end of each month reviewing your numbers. How much did you spend on each
                      channel? How many leads and clients came from each? What was the ROI? Cut channels
                      below 2x ROI after 3 months of underperformance.
                    </p>
                    <p className="text-sm flex items-start gap-2">
                      <span className="text-amber-400 flex-shrink-0">4.</span>
                      <strong className="text-white">Track time investment too:</strong> If you spent 10
                      hours writing blog posts this month, value that time at your hourly rate and include
                      it in your marketing cost calculation. A blog post that took 5 hours at $150/hour
                      cost you $750 — it needs to generate at least $2,250 in revenue to justify the
                      investment at 3x ROI.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-amber-400 font-medium mb-2">The 90-Day Marketing Review</p>
                  <p className="text-sm">
                    Every quarter, conduct a thorough review of your marketing performance. Compare the
                    ROI of each channel, identify trends, and reallocate budget from underperforming
                    channels to your top performers. Most freelancers find that 2-3 channels generate
                    80% of their results. Once you identify your winners, concentrate your budget there
                    and cut the rest. This quarterly review is the single most impactful marketing habit
                    a freelancer can build.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Market your services and{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">get paid on time</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, GST calculations, and payment tracking — so you
              can focus on marketing your freelance business and landing more clients. Professional
              invoices, on time, every time.
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
        
        <RelatedTools currentSlug="marketing-budget-calculator" category="Financial Planning" />
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
