import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Superannuation Guide for Australian Freelancers (2025-26) — InvoiceFlow',
  description:
    'Everything self-employed Australians need to know about super: voluntary contributions, tax deductions, government co-contribution, choosing a fund, and building retirement savings as a freelancer.',
  alternates: { canonical: '/guides/superannuation-for-freelancers' },
  keywords: [
    'super for freelancers australia',
    'do freelancers pay super',
    'self-employed superannuation australia',
    'voluntary super contributions tax deduction',
    'freelancer retirement australia',
    'super guarantee rate 2026',
  ],
  openGraph: {
    title: 'Superannuation Guide for Australian Freelancers (2025-26)',
    description:
      'Everything self-employed Australians need to know about super: voluntary contributions, tax deductions, government co-contribution, choosing a fund, and building retirement savings as a freelancer.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://invoiceflow-teal.vercel.app/guides' },
    { '@type': 'ListItem', position: 3, name: 'Superannuation Guide', item: 'https://invoiceflow-teal.vercel.app/guides/superannuation-for-freelancers' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do freelancers have to pay super in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, sole traders and self-employed individuals are not legally required to contribute to super. However, voluntary contributions are strongly recommended as they\'re tax-deductible, grow in a low-tax environment, and ensure you have adequate retirement savings. The super guarantee (11.5%) only applies to employers paying employees and certain deemed employees.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much super should a freelancer contribute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At minimum, match the super guarantee rate of 11.5% of your income. Ideally, contribute 15-20% to catch up for any years without contributions. Use the concessional cap of $30,000/year for maximum tax benefits. The carry-forward rule lets you contribute more in good years using unused caps from previous years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are super contributions tax-deductible for sole traders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Concessional contributions up to $30,000/year are tax-deductible. You must lodge a "Notice of intent to claim a deduction" with your super fund before lodging your tax return. The contributions are taxed at 15% inside super, which is much lower than most freelancers\' marginal tax rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to my super from previous jobs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It stays in whatever fund(s) it was contributed to. You can consolidate multiple accounts into one fund through myGov, which reduces fees and makes management easier. Use the ATO\'s lost super search to find any forgotten accounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I access my super early as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally, no. Super is preserved until you reach preservation age (60 for most people) and retire. Early access is only available in limited circumstances: severe financial hardship, terminal illness, permanent disability, or compassionate grounds. Being self-employed does not qualify for early access.',
      },
    },
  ],
};

const sections = [
  {
    id: 'super-basics',
    title: 'Super Basics for the Self-Employed',
    content: `Superannuation is Australia's retirement savings system. Employees get super paid by their employer at 11.5% (2025-26), but as a sole trader or freelancer, nobody pays super for you. It's entirely optional — but ignoring it means you could retire with significantly less than your employed peers.

The super guarantee rate for 2025-26 is **11.5%**, increasing to **12%** from July 2026. Even though you don't legally have to contribute, treating it as a business expense and paying yourself super is one of the smartest financial moves a freelancer can make. The tax benefits alone often justify it.`,
  },
  {
    id: 'contractor-vs-employee',
    title: 'Contractor vs Employee: Who Pays Super?',
    content: `This is a critical distinction. If you're a contractor, your clients generally **DON'T** pay your super — you're responsible for your own. But there's an exception: if you're deemed an "employee for super purposes" under the Superannuation Guarantee (Administration) Act, your client **MUST** pay super.

**You may be an employee for super purposes if:**
- You work primarily for one client
- You work under their direction and control
- You use their equipment
- You are paid for your time rather than for a result

The ATO's "multi-factor" test looks at the totality of the arrangement. If in doubt, both you and your client can request a ruling from the ATO. Getting this wrong can result in back-payments and penalties for the client, and unexpected super payments for you.`,
  },
  {
    id: 'voluntary-contributions',
    title: 'Voluntary Contributions & Tax Benefits',
    content: `As a sole trader, you can make two types of contributions:

**Concessional (before-tax) contributions** — capped at $30,000/year (2025-26):
- You contribute from your business income and claim a tax deduction
- Contributions are taxed at 15% inside super (much lower than most marginal rates)
- Must lodge a "Notice of intent to claim" with your super fund BEFORE lodging your tax return
- Example: Earning $100K, contribute $20K to super → taxable income drops to $80K, saving you ~$6,000 in tax, while building $17,000 in super (after 15% contributions tax)

**Non-concessional (after-tax) contributions** — capped at $120,000/year:
- No tax deduction, but earnings inside super are taxed at 15% (vs your marginal rate outside)
- Can bring forward 3 years of contributions ($360,000 total) if under 75 and balance under $1.9M
- Useful if you've maxed out concessional contributions

**The carry-forward rule:** If your total super balance is under $500,000, you can use unused concessional cap from the previous 5 years. Ideal for freelancers with variable income.`,
  },
  {
    id: 'co-contribution',
    title: 'Government Co-Contribution',
    content: `If your total income is under **$58,445** (2025-26), the government will match your after-tax super contributions:
- Contribute $1,000 → receive up to **$500** from the government
- Phases out between $43,445 and $58,445
- You don't need to apply — the ATO automatically calculates and pays it

This is literally free money. Requirements: lodge a tax return, have income below the threshold, make at least one after-tax (non-concessional) contribution, have less than 10% of income from employment. For lower-earning freelancers, this is a no-brainer.

**Spouse contributions:** If your spouse earns under $40,000, you can contribute to their super and receive a tax offset of up to $540. A useful strategy for freelancer couples.`,
  },
  {
    id: 'choosing-fund',
    title: 'Choosing a Super Fund',
    content: `As a self-employed person, you have total freedom to choose your super fund. Key factors:
- **Fees:** Compare total fees (admin + investment). Industry funds typically charge 0.5-1.5%, retail funds 1-2.5%. Even 0.5% difference compounds dramatically over 30+ years
- **Investment options:** Choose a mix matching your age and risk tolerance. Younger = more growth assets, older = more defensive
- **Insurance:** Most funds include life and TPD insurance. As a freelancer, this may be your only income protection
- **Performance:** Past performance doesn't guarantee future returns, but consistent long-term performance matters. Check 10-year returns
- **Ethical options:** Many funds offer ethical/sustainable investment options

Popular options for freelancers: Australian Super, REST, Hostplus, UniSuper, QSuper. Use the ATO's YourSuper comparison tool at ato.gov.au/yoursuper.

**Consolidate:** If you have multiple super accounts from old jobs, consolidate them into one fund. Multiple accounts mean multiple fees eroding your balance. Use myGov to find and merge lost super.`,
  },
  {
    id: 'how-much',
    title: 'How Much Should You Contribute?',
    content: `A practical framework:

**Minimum recommended:** 11.5% of your income (matching the super guarantee rate employees receive). On $100K income, that's $11,500/year or ~$960/month.

**Optimal:** 15-20% of income if you can afford it. This accounts for years of self-employment where you may have had no super contributions.

**Catching up:** If you're over 30 and have less super than your age × $10,000 (e.g., age 35 should aim for $350K), consider maximising contributions using the carry-forward rule.

The compound effect is powerful:
| Monthly Contribution | Balance at 60 (starting at 30) |
|---|---|
| $500 | ~$470,000 |
| $1,000 | ~$940,000 |
| $1,500 | ~$1,410,000 |
| $2,000 | ~$1,880,000 |

(Assumes 7% p.a. average return, net of fees and tax)

**Cash flow tip:** Set up automatic monthly transfers to your super fund. Treat it like a bill, not optional savings.`,
  },
  {
    id: 'tax-strategies',
    title: 'Tax-Effective Strategies for Freelancers',
    content: `**Strategy 1: Salary sacrifice to yourself**
Contribute to super from your business income and claim the deduction. At a marginal rate of 30-37%, every $1,000 contributed saves $150-$220 in tax while building $850 in super.

**Strategy 2: End-of-year top-up**
Had a profitable year? Make a lump sum super contribution before June 30 to reduce your tax bill. Just remember to lodge the notice of intent with your fund BEFORE your tax return.

**Strategy 3: Use the carry-forward rule in good years**
Variable income is common for freelancers. In a high-earning year, contribute up to 5 years of unused caps. Could be up to $150,000 concessional in one year.

**Strategy 4: Split contributions with your spouse**
If your spouse earns less, splitting super contributions can optimise both your tax positions and qualifying for the government co-contribution.

**Strategy 5: Consider a Self-Managed Super Fund (SMSF)**
For balances over $500K, an SMSF gives you direct control. You can invest in property, shares, and other assets. But they cost $2,000-$5,000/year to run and require significant administration. Not recommended under $500K.`,
  },
];

const relatedTools = [
  { name: 'Super Calculator', href: '/tools/super-calculator', desc: 'Calculate voluntary super contributions and tax savings' },
  { name: 'Retirement Calculator', href: '/tools/freelance-retirement-calculator', desc: 'Project your super balance at retirement' },
  { name: 'Tax Estimator', href: '/tools/tax-estimator', desc: 'See how super contributions reduce your tax' },
  { name: 'Pay Yourself Calculator', href: '/tools/freelance-pay-yourself-calculator', desc: 'Balance salary, super, and tax allocations' },
  { name: 'Profit First Calculator', href: '/tools/profit-first-calculator', desc: 'Allocate income across pay, profit, tax, and super' },
  { name: 'Benefits Cost Calculator', href: '/tools/freelance-benefits-cost-calculator', desc: 'Compare freelance vs employee total compensation' },
];

const relatedArticles = [
  { title: 'Superannuation for Sole Traders Explained', href: '/blog/super-for-sole-traders' },
  { title: 'How to Pay Yourself as a Freelancer', href: '/blog/how-to-pay-yourself-freelancer' },
  { title: 'Tax Deductions Every Freelancer Should Know', href: '/blog/top-tax-deductions-freelancers' },
  { title: 'Freelancer vs Employee: True Cost Comparison', href: '/blog/freelancer-vs-employee-comparison' },
];

export default function SuperannuationGuide() {
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
            <span className="text-gray-300">Superannuation Guide</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden pt-12 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
              Updated for 2025-26 Financial Year
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Superannuation Guide for Australian Freelancers (2025-26)
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              Everything self-employed Australians need to know about super: voluntary contributions,
              tax deductions, government co-contribution, choosing a fund, and building retirement
              savings as a freelancer.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>11 min read</span>
              <span>&bull;</span>
              <span>Last updated: February 2026</span>
              <span>&bull;</span>
              <span>ATO-accurate</span>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">In This Guide</h2>
            <nav className="grid md:grid-cols-2 gap-2">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="text-gray-400 hover:text-teal-400 transition-colors text-sm py-1">
                  &rarr; {s.title}
                </a>
              ))}
              <a href="#faq" className="text-gray-400 hover:text-teal-400 transition-colors text-sm py-1">&rarr; FAQs</a>
              <a href="#tools" className="text-gray-400 hover:text-teal-400 transition-colors text-sm py-1">&rarr; Related Tools</a>
            </nav>
          </div>
        </section>

        {/* Key Numbers Banner */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '11.5%', label: 'Super guarantee rate 2025-26' },
              { num: '$30,000', label: 'Concessional contributions cap' },
              { num: '$120,000', label: 'Non-concessional cap' },
              { num: '$500', label: 'Max government co-contribution' },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl bg-teal-500/5 border border-teal-500/10">
                <div className="text-xl md:text-2xl font-bold text-teal-400">{s.num}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Sections */}
        <article className="max-w-4xl mx-auto px-4 pb-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-12 scroll-mt-8">
              <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-gray-800">{section.title}</h2>
              <div className="prose prose-invert prose-gray max-w-none text-gray-300 leading-relaxed">
                {section.content.split('\n\n').map((para, i) => {
                  if (para.startsWith('|')) {
                    const rows = para.split('\n').filter(r => r.trim() && !r.includes('---'));
                    const header = rows[0].split('|').filter(c => c.trim()).map(c => c.trim());
                    const body = rows.slice(1).map(r => r.split('|').filter(c => c.trim()).map(c => c.trim()));
                    return (
                      <div key={i} className="overflow-x-auto my-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr>{header.map((h, j) => <th key={j} className="text-left py-2 px-3 text-gray-300 font-semibold border-b border-gray-700">{h}</th>)}</tr>
                          </thead>
                          <tbody>
                            {body.map((row, ri) => (
                              <tr key={ri} className="border-b border-gray-800/50">
                                {row.map((cell, ci) => <td key={ci} className="py-2 px-3 text-gray-400">{cell}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  const formatted = para
                    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                    .replace(/\n- /g, '</p><p class="pl-4 text-gray-400 my-1 before:content-[\'•\'] before:mr-2 before:text-teal-500">');
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
            <p className="text-gray-400 mb-8">Use these tools alongside this guide — all free, no sign-up required.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-teal-500/30 transition-colors group">
                  <div className="font-semibold text-gray-200 group-hover:text-teal-400 transition-colors">{tool.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-gray-800 bg-gray-900/30">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {relatedArticles.map((article) => (
                <Link key={article.href} href={article.href} className="text-gray-400 hover:text-teal-400 transition-colors text-sm py-2 flex items-center gap-2">
                  <span className="text-teal-500">&rarr;</span> {article.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-gray-800">
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
        <section className="border-t border-gray-800 bg-gray-900/30">
          <div className="max-w-xl mx-auto px-4 py-16 text-center">
            <EmailCapture />
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-800">
          <div className="max-w-3xl mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Track Income, Plan for Retirement</h2>
            <p className="text-gray-400 mb-8">
              InvoiceFlow helps you track every dollar earned so you can plan accurate super contributions
              and maximise tax deductions. Start free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">Start Free — No Credit Card</Button>
              </Link>
              <Link href="/tools/super-calculator">
                <Button variant="secondary" size="lg">Try Super Calculator</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
