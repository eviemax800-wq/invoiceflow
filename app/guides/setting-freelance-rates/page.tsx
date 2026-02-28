import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'How to Set Your Freelance Rates in Australia (2025-26) — InvoiceFlow',
  description:
    'Calculate your ideal hourly and project rates as an Australian freelancer. Market benchmarks by industry, rate formulas, tax and super considerations, and negotiation strategies.',
  alternates: { canonical: '/guides/setting-freelance-rates' },
  keywords: [
    'freelance rates australia',
    'how to set freelance rates',
    'freelance hourly rate calculator',
    'contractor rates australia 2026',
    'freelance pricing strategy',
    'how much to charge as a freelancer',
  ],
  openGraph: {
    title: 'How to Set Your Freelance Rates in Australia',
    description: 'Calculate your ideal rates with formulas, benchmarks, and tax considerations.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://invoiceflow-teal.vercel.app/guides' },
    { '@type': 'ListItem', position: 3, name: 'Setting Freelance Rates', item: 'https://invoiceflow-teal.vercel.app/guides/setting-freelance-rates' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the average freelance rate in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Average freelance rates in Australia vary significantly by industry. Web developers charge $80-$200/hr, graphic designers $60-$150/hr, copywriters $80-$180/hr, consultants $150-$350/hr, photographers $100-$300/hr, and virtual assistants $35-$65/hr. These are general ranges — your specific rate depends on experience, specialisation, location, and demand.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate my minimum freelance rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The minimum rate formula is: (Annual expenses + desired salary + tax + super) / (billable hours per year). Most freelancers are only billable 60-70% of their working hours (the rest goes to admin, marketing, professional development). For a $100K target salary, with 30% tax, 11.5% super, $20K expenses, and 1,200 billable hours: ($100K + $30K tax + $11.5K super + $20K) / 1,200 = ~$135/hr minimum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I charge hourly or project-based rates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the work. Hourly rates work best for ongoing, variable-scope work (consulting, maintenance, support). Project rates work best for defined deliverables (website builds, design projects, writing). Project rates are generally more profitable because you get paid for value delivered, not time spent. As you get faster and more experienced, project rates reward your efficiency.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I factor in for tax and super as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As a general rule, set aside 30-35% of every payment for tax obligations. This covers: income tax (varies by bracket — 32.5% on income $45K-$120K, 37% on $120K-$180K), Medicare levy (2%), GST (if registered, 10% of sales), and superannuation (11.5% in 2025-26, voluntary for sole traders but recommended). Use our free Tax Estimator to calculate your specific obligations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I raise my freelance rates with existing clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Give at least 30 days notice in writing. Frame it positively: cite increased experience, new certifications, market rates, or rising costs. A typical annual increase is 5-10%. Use language like "effective [date], my rates will be updated to reflect [reason]." Most clients accept reasonable increases — if they don\'t, they may not value your work enough. Our Price Increase Letter Generator can help you draft the communication.',
      },
    },
  ],
};

const sections = [
  {
    id: 'formulas',
    title: 'The Rate Calculation Formula',
    content: `Most freelancers guess their rates. Here's the formula professionals use:

**The Bottom-Up Formula:**

Step 1: Calculate your annual costs
- Desired take-home salary: $___
- Income tax (~30% of salary): $___
- Medicare levy (2%): $___
- Superannuation (11.5%): $___
- Business expenses (software, insurance, equipment): $___
- GST reserve (if registered): $___
- Leave allowance (sick days, holidays — 4 weeks): $___

Step 2: Calculate your billable hours
- Working weeks per year: 48 (52 minus 4 weeks leave)
- Working hours per week: 40
- Billable percentage: 65% (the rest is admin, marketing, learning)
- Billable hours: 48 × 40 × 0.65 = 1,248 hours

Step 3: Divide
- Minimum hourly rate = Total annual costs / Billable hours

**Example:**
- Target salary: $100,000
- Tax (30%): $30,000
- Medicare (2%): $2,000
- Super (11.5%): $11,500
- Expenses: $15,000
- Leave buffer: $8,000
- Total: $166,500

$166,500 / 1,248 hours = **$133/hour minimum**

Use our free <a href="/tools/rate-calculator" class="text-violet-400 hover:text-violet-300">Hourly Rate Calculator</a> to run your own numbers.`,
  },
  {
    id: 'benchmarks',
    title: 'Australian Market Benchmarks',
    content: `Use these ranges as a starting point, then adjust for your experience and specialisation:

**Technology & Development**
- Junior developer: $60-$100/hr
- Mid-level developer: $100-$160/hr
- Senior developer: $160-$250/hr
- IT consultant: $120-$250/hr
- DevOps / Cloud: $150-$300/hr

**Design & Creative**
- Graphic designer: $60-$150/hr
- UX/UI designer: $80-$180/hr
- Brand strategist: $120-$250/hr
- Photographer: $100-$300/hr (or $2,000-$5,000 per project)
- Videographer: $100-$250/hr

**Writing & Marketing**
- Copywriter: $80-$180/hr
- Content writer: $60-$120/hr
- SEO specialist: $100-$200/hr
- Social media manager: $60-$120/hr
- Marketing consultant: $120-$300/hr

**Business & Professional**
- Business consultant: $150-$350/hr
- Accountant/bookkeeper: $60-$150/hr
- Project manager: $100-$200/hr
- Virtual assistant: $35-$65/hr
- Coach/trainer: $100-$300/hr

**Trades & Services**
- Electrician: $80-$130/hr
- Plumber: $80-$150/hr
- Builder/carpenter: $70-$120/hr
- Personal trainer: $60-$150/session

These rates are for direct client work. Agency or platform rates (Upwork, Fiverr) are typically 20-40% lower.`,
  },
  {
    id: 'pricing-models',
    title: 'Pricing Models: Hourly vs Project vs Value',
    content: `There are three main pricing models. Each has its place.

**Hourly Rates**
Best for: Ongoing work, maintenance, consulting, undefined scope
- Pros: Simple, transparent, covers scope creep naturally
- Cons: Caps your earning potential, clients may question hours
- When to use: Retainers, support contracts, advisory work

**Project-Based (Fixed Price)**
Best for: Defined deliverables, creative projects, builds
- Pros: Rewards efficiency, clients know total cost upfront, higher margins
- Cons: Scope creep risk, requires accurate estimation
- When to use: Website builds, design projects, writing assignments
- Formula: Estimated hours × hourly rate × 1.3 (30% buffer for unknowns)

**Value-Based Pricing**
Best for: High-impact work, consulting, strategy
- Pros: Highest margins, aligned with client outcomes
- Cons: Harder to justify, requires understanding client's business
- When to use: Strategy consulting, revenue-generating projects, brand work
- Formula: Percentage of the value you create (typically 10-20%)
- Example: A marketing strategy that generates $500K revenue → charge $50K-$100K

**The transition path:**
Most freelancers start hourly → move to project-based → eventually offer value-based for premium clients. This is a natural progression as you gain experience and confidence.

**Mixing models:**
You can (and should) use different models for different clients:
- Retainer clients: hourly or monthly flat fee
- Project clients: fixed price with defined scope
- Strategic clients: value-based with performance bonuses`,
  },
  {
    id: 'tax-impact',
    title: 'How Tax Affects Your Real Rate',
    content: `Your quoted rate is NOT your take-home rate. Here's what actually happens to $150/hour:

**$150/hour gross breakdown:**

Income tax (~30%): -$45.00
Medicare levy (2%): -$3.00
Super (11.5% voluntary): -$17.25
GST collected (not your money): -$13.64 (1/11th of GST-inclusive price)
Business expenses (~10%): -$15.00

**Net take-home: ~$56/hour** (37% of your gross rate)

This is why so many freelancers undercharge. They think $100/hour sounds like a lot until they realise they're taking home ~$37/hour.

**ATO 2025-26 Tax Brackets:**
- $0 - $18,200: 0%
- $18,201 - $45,000: 16%
- $45,001 - $135,000: 30%
- $135,001 - $190,000: 37%
- $190,001+: 45%
- Plus 2% Medicare levy on all taxable income

**The hidden costs of freelancing that employees don't pay:**
- No employer-paid super (employees get 11.5% on top of salary)
- No paid leave (sick, annual, public holidays = ~7 weeks/year for employees)
- No workers compensation insurance
- No professional development budget
- Own equipment, software, and office costs

**Rule of thumb:** To match an employee salary, your freelance rate needs to be approximately 1.5-2x the equivalent hourly employee rate.

Use our free <a href="/tools/freelance-benefits-cost-calculator" class="text-violet-400 hover:text-violet-300">Benefits Cost Calculator</a> to see the real comparison.`,
  },
  {
    id: 'negotiation',
    title: 'Negotiation Strategies',
    content: `**Rule #1: Never be the first to name a price**
Ask the client: "What budget have you allocated for this project?" or "What range are you working with?" Let them anchor first.

**Rule #2: Quote high, negotiate down**
Always quote 10-20% above your target rate. This gives you room to negotiate without going below your minimum.

**Rule #3: Never negotiate on rate alone**
If a client pushes back on price, negotiate scope instead:
- "I can do it for $X if we reduce the scope to Y"
- "At that budget, I'd recommend we focus on [highest-impact deliverable]"
- "I can offer that rate for a 3-month retainer commitment"

**Rule #4: The walk-away price**
Know your minimum rate before every negotiation. Below that number, it's better to say no. Time spent on underpaying work is time you can't spend finding better-paying clients.

**Rule #5: Raising rates with existing clients**
- Give 30+ days written notice
- Cite specific reasons (market rates, new skills, increased costs)
- Suggest a phased increase if the jump is large
- 5-10% annual increases are standard and expected
- Frame it as an investment in quality, not a cost increase

**What to say when clients say "that's too expensive":**
- "What budget did you have in mind?" (understand their constraint)
- "I understand. Here's what I can deliver within $X" (adjust scope, not rate)
- "My rate reflects [specific value]. Clients typically see [specific outcome]" (justify with value)
- "I'd be happy to recommend someone in that price range" (maintain your floor — politely)

Use our free <a href="/tools/price-increase-letter-generator" class="text-violet-400 hover:text-violet-300">Price Increase Letter Generator</a> to communicate rate changes professionally.`,
  },
  {
    id: 'common-mistakes',
    title: 'Common Pricing Mistakes',
    content: `**1. Undercharging because you're "new"**
Being new doesn't mean your work is worth less. If you deliver professional results, charge professional rates. Start at the lower end of market rates, not below them.

**2. Competing on price**
If you're the cheapest option, you attract price-sensitive clients who will always push for lower rates. Compete on quality, speed, or specialisation instead.

**3. Not accounting for non-billable time**
You will NOT bill 40 hours per week. Admin, marketing, invoicing, client communication, learning — these eat 30-40% of your time. Your rate needs to cover all of it.

**4. Charging the same rate for everything**
Different work has different value. A quick logo tweak is worth less per hour than a full brand strategy. Vary your pricing by project type and client size.

**5. Not raising rates annually**
Inflation, experience, and skills all increase your value. If you don't raise rates, you're effectively taking a pay cut every year.

**6. Discounting without getting something in return**
Never offer a discount without receiving value: longer commitment, reduced scope, testimonial, referrals, or case study rights.

**7. Forgetting about tax**
Your rate needs to cover income tax, Medicare, super, GST, and business expenses. A $100/hr rate is really ~$37/hr take-home. Use the formula in this guide to calculate your true minimum.`,
  },
];

const relatedTools = [
  { name: 'Hourly Rate Calculator', href: '/tools/rate-calculator', desc: 'Calculate your ideal hourly rate' },
  { name: 'Benefits Cost Calculator', href: '/tools/freelance-benefits-cost-calculator', desc: 'Compare freelance vs employee compensation' },
  { name: 'Tax Estimator', href: '/tools/tax-estimator', desc: 'Estimate your tax obligations' },
  { name: 'Service Package Builder', href: '/tools/service-package-builder', desc: 'Create tiered service packages' },
  { name: 'Price Increase Letter Generator', href: '/tools/price-increase-letter-generator', desc: 'Communicate rate changes professionally' },
  { name: 'Profit Margin Calculator', href: '/tools/profit-margin-calculator', desc: 'Ensure your rates are profitable' },
];

export default function SettingFreelanceRates() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-gray-950">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 pt-6">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-gray-300 transition-colors">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Setting Freelance Rates</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden pt-12 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
              Pricing Strategy
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              How to Set Your Freelance Rates in Australia
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              The complete guide to calculating your ideal rate, understanding market benchmarks,
              factoring in tax and super, and negotiating with confidence. Updated for 2025-26.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>11 min read</span>
              <span>&bull;</span>
              <span>Last updated: February 2026</span>
              <span>&bull;</span>
              <span>Includes rate formulas + benchmarks</span>
            </div>
          </div>
        </section>

        {/* Quick Rate Formula */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-violet-500/5 border border-violet-500/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-white mb-4">Quick Rate Formula</h2>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-gray-900/50">
                <div className="text-sm text-gray-400 mb-1">Annual Costs</div>
                <div className="text-lg font-semibold text-white">Salary + Tax + Super + Expenses</div>
              </div>
              <div className="flex items-center justify-center text-2xl text-violet-400 font-bold">&divide;</div>
              <div className="p-4 rounded-xl bg-gray-900/50">
                <div className="text-sm text-gray-400 mb-1">Billable Hours</div>
                <div className="text-lg font-semibold text-white">~1,200-1,400 hrs/year</div>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              A $100K target salary typically requires a minimum rate of <span className="text-violet-400 font-semibold">$130-$150/hr</span> after tax, super, and expenses.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">In This Guide</h2>
            <nav className="grid md:grid-cols-2 gap-2">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="text-gray-400 hover:text-violet-400 transition-colors text-sm py-1">
                  &rarr; {s.title}
                </a>
              ))}
              <a href="#faq" className="text-gray-400 hover:text-violet-400 transition-colors text-sm py-1">&rarr; FAQs</a>
              <a href="#tools" className="text-gray-400 hover:text-violet-400 transition-colors text-sm py-1">&rarr; Related Tools</a>
            </nav>
          </div>
        </section>

        {/* Content Sections */}
        <article className="max-w-4xl mx-auto px-4 pb-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-12 scroll-mt-8">
              <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-gray-800">{section.title}</h2>
              <div className="prose prose-invert prose-gray max-w-none text-gray-300 leading-relaxed">
                {section.content.split('\n\n').map((para, i) => {
                  const formatted = para
                    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                    .replace(/<a /g, '<a ')
                    .replace(/\n- /g, '</p><p class="pl-4 text-gray-400 my-1 before:content-[\'•\'] before:mr-2 before:text-violet-500">');
                  return <div key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: `<p>${formatted}</p>` }} />;
                })}
              </div>
            </section>
          ))}
        </article>

        {/* Related Tools */}
        <section id="tools" className="border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold text-white mb-2">Related Free Tools</h2>
            <p className="text-gray-400 mb-8">Calculate your ideal rates with these free tools.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-violet-500/30 transition-colors group">
                  <div className="font-semibold text-gray-200 group-hover:text-violet-400 transition-colors">{tool.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-gray-800 bg-gray-900/30">
          <div className="max-w-3xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq) => (
                <details key={faq.name} className="group bg-gray-900/50 border border-gray-800 rounded-xl">
                  <summary className="px-6 py-4 cursor-pointer text-gray-200 font-medium hover:text-white transition-colors list-none flex items-center justify-between">
                    {faq.name}
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">{faq.acceptedAnswer.text}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <section className="border-t border-gray-800">
          <div className="max-w-xl mx-auto px-4 py-16 text-center">
            <EmailCapture />
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-800 bg-gray-900/30">
          <div className="max-w-3xl mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Invoice at Your New Rate — Starting Today</h2>
            <p className="text-gray-400 mb-8">
              Create professional invoices that reflect your true value.
              GST-compliant, professionally formatted, sent in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">Start Free — No Credit Card</Button>
              </Link>
              <Link href="/tools/rate-calculator">
                <Button variant="secondary" size="lg">Calculate Your Rate</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
