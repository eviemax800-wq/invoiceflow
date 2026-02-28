import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'The Complete Tax Guide for Australian Freelancers (2025-26) — InvoiceFlow',
  description:
    'Everything Australian freelancers need to know about income tax, PAYG installments, tax deductions, superannuation, record keeping, and lodging your tax return. Updated for 2025-26.',
  alternates: { canonical: '/guides/tax-guide-freelancers' },
  keywords: [
    'freelance tax guide australia',
    'sole trader tax guide 2026',
    'how much tax do freelancers pay',
    'freelancer tax deductions australia',
    'PAYG installments freelancer',
    'tax return sole trader',
  ],
  openGraph: {
    title: 'The Complete Tax Guide for Australian Freelancers (2025-26)',
    description:
      'Income tax, PAYG installments, deductions, superannuation, record keeping, and lodging — everything Australian freelancers need to know about tax.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://invoiceflow-teal.vercel.app/guides' },
    { '@type': 'ListItem', position: 3, name: 'Tax Guide for Freelancers', item: 'https://invoiceflow-teal.vercel.app/guides/tax-guide-freelancers' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much tax do freelancers pay in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your taxable income. After deductions, you pay individual tax rates from 0% ($0-$18,200) up to 45% ($190,001+) plus 2% Medicare levy. Most freelancers earning $60-100K pay an effective rate of 18-25%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do freelancers need to pay quarterly tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you owe tax on your return, the ATO will issue PAYG installment notices requiring quarterly pre-payments. These are based on your previous year\'s income. You can vary them if your income changes significantly.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the best way to track tax deductions?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use accounting software like InvoiceFlow to track income, then a dedicated app or spreadsheet for expenses. Photograph receipts immediately. Categorise expenses as they occur, not at tax time. The home office fixed rate method (67c/hr) requires only a log of hours worked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an accountant as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not legally required, but recommended for your first year and whenever your situation changes. A good accountant can save you more than their fee in deductions you\'d miss. Their fee ($150-$500) is tax deductible. For ongoing years with simple finances, myTax is free and adequate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim home office expenses as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The simplest method is the fixed rate of 67c per hour worked from home, which covers electricity, internet, phone, stationery, and computer consumables. Alternatively, you can calculate actual costs but need detailed records of every expense and the business-use percentage.',
      },
    },
  ],
};

const sections = [
  {
    id: 'how-tax-works',
    title: 'How Freelancer Tax Works in Australia',
    content: `As a sole trader or freelancer in Australia, you pay income tax differently from employees. There is no employer withholding PAYG tax from your pay — you are entirely responsible for managing and paying your own tax.

Your business income flows through to your **personal tax return** — there is no separate business tax return for sole traders. You are taxed on your **net business income**, which is your total revenue minus allowable business deductions.

Here is how it works in practice:
- **You earn income** — clients pay you for your services throughout the year
- **You claim deductions** — legitimate business expenses reduce your taxable income
- **You lodge one tax return** — your business income and deductions go on your individual return
- **You pay tax on the net amount** — at individual marginal tax rates

Once you have a tax history, the ATO will likely require you to make **quarterly PAYG installments** — pre-payments of your expected income tax throughout the year, so you are not hit with one large bill at tax time.

The key difference from employment: nobody is managing your tax for you. You need to set money aside, track your income and expenses, and meet your lodgement deadlines.`,
  },
  {
    id: 'tax-brackets',
    title: '2025-26 Income Tax Brackets',
    content: `Australia uses a progressive tax system — you only pay the higher rate on income above each threshold, not on your entire income.

**Individual income tax rates for 2025-26:**

| Taxable Income | Tax Rate |
|----------------|----------|
| $0 -- $18,200 | Nil |
| $18,201 -- $45,000 | 16c for each $1 over $18,200 |
| $45,001 -- $135,000 | $4,288 plus 30c for each $1 over $45,000 |
| $135,001 -- $190,000 | $31,288 plus 37c for each $1 over $135,000 |
| $190,001+ | $51,638 plus 45c for each $1 over $190,000 |

On top of income tax, you pay the **Medicare levy** of 2% of your taxable income. If you earn over $93,000 and do not have private hospital cover, you may also pay the **Medicare levy surcharge** (1-1.5%).

**Example calculation — $100K freelance income:**
- Gross freelance income: $100,000
- Business deductions: $20,000
- Taxable income: $80,000
- Income tax: $4,288 + 30% x ($80,000 - $45,000) = **$14,788**
- Medicare levy: 2% x $80,000 = **$1,600**
- Total tax: **$16,388**
- Effective tax rate: **~20.5%**

This is why deductions matter so much — every dollar you can legitimately deduct saves you 30-45 cents in tax depending on your bracket.`,
  },
  {
    id: 'payg-installments',
    title: 'PAYG Installments',
    content: `PAYG (Pay As You Go) installments are quarterly pre-payments of your income tax. They exist so the ATO collects tax throughout the year rather than waiting for your annual return.

**When do PAYG installments start?**
The ATO will issue a PAYG installment notice after you lodge a tax return that shows tax owing on business or investment income. You do not choose to enter the system — the ATO enrolls you automatically.

**Two calculation methods:**
- **Installment amount** — the ATO calculates a fixed dollar amount for each quarter based on your last return
- **Installment rate** — you apply a percentage to your actual income each quarter (better if income fluctuates)

**Quarterly schedule (same as BAS):**
| Quarter | Period | Due Date |
|---------|--------|----------|
| Q1 | July -- September | 28 October |
| Q2 | October -- December | 28 February |
| Q3 | January -- March | 28 April |
| Q4 | April -- June | 28 July |

**Key things to know:**
- **You can vary installments** if your income changes significantly from the previous year — but if you vary too low, interest charges may apply
- **Late payment attracts penalties** — the General Interest Charge (GIC) applies from the due date
- **Combine with BAS** — if you are GST-registered, your PAYG installments are reported on the same BAS form
- **Credit at tax time** — all PAYG installments paid during the year are credited against your final tax bill

**Pro tip:** If your income is irregular, use the installment rate method. It means you pay tax proportional to what you actually earned that quarter, rather than a fixed amount based on last year.`,
  },
  {
    id: 'tax-deductions',
    title: 'Tax Deductions for Freelancers',
    content: `Deductions are your most powerful tool for reducing tax. Every legitimate business expense reduces your taxable income, saving you 30-45 cents per dollar depending on your tax bracket.

**Home office expenses:**
- **Fixed rate method (67c/hour)** — covers electricity, internet, phone, stationery, and computer consumables. You just need a log of hours worked from home
- **Actual cost method** — calculate the exact business-use percentage of each expense. Requires detailed records but can yield a higher deduction

**Vehicle expenses:**
- **Cents per kilometre (85c/km)** — for up to 5,000 business km per year. No logbook needed, but you must be able to show how you calculated km
- **Logbook method** — keep a 12-week logbook to establish your business-use percentage, then apply it to all car expenses for the year

**Equipment and technology:**
- Items under $20,000 qualify for the **instant asset write-off** — deduct the full cost in the year of purchase
- Items over $20,000 are depreciated over their effective life
- Laptops, monitors, phones, printers, desks, chairs — all deductible

**Professional development:**
- Courses, conferences, workshops, and seminars related to your work
- Books, journals, and industry subscriptions
- Professional memberships and accreditations

**Insurance:**
- Professional indemnity insurance
- Public liability insurance
- Income protection insurance (premiums are deductible)

**Marketing and business costs:**
- Website hosting and domain names
- Advertising and social media promotion
- Business cards, brochures, and branding
- SEO tools and marketing software

**Software and subscriptions:**
- Adobe Creative Cloud, accounting software, project management tools
- Cloud storage, communication tools, industry-specific software

**Travel:**
- Business trips including flights, accommodation, and meals (reasonable amounts)
- Travel between work locations (not home to a regular workplace)

**Professional fees:**
- Accountant and tax agent fees
- Legal fees for business matters
- Business coaching and advisory fees

**The golden rule:** A deduction must be **directly related to earning your income**. It cannot be private, domestic, or capital in nature. If an expense is partly private and partly business, you can only claim the business portion. Keep records of how you calculated the split.`,
  },
  {
    id: 'super',
    title: 'Superannuation for the Self-Employed',
    content: `Unlike employees, sole traders and freelancers are **not required** to pay superannuation for themselves. There is no legal obligation — but that does not mean you should skip it.

**Why voluntary super contributions make sense:**
- **Tax deduction** — personal super contributions are tax-deductible up to the concessional cap of **$30,000 per year**
- **Lower tax rate** — super contributions are taxed at **15%** inside the fund, compared to your marginal rate of 30-45%
- **Compound growth** — the earlier you start, the more your retirement savings benefit from compounding

**Example:** You earn $100K and contribute $15,000 to super.
- Your taxable income drops to $85,000 — saving you $4,500 in income tax (at 30%)
- The $15,000 is taxed at 15% inside super = $2,250 tax
- Net tax saving: **$2,250** per year

**The super guarantee rate** for employees is currently **11.5%** (2025-26). While you do not have to match this for yourself, it is a useful benchmark. On $100K income, 11.5% would be $11,500 per year.

**Government co-contribution:**
- If your total income is under **$58,445** and you make a personal (after-tax) contribution of $1,000 or more
- The government contributes up to **$500** into your super fund
- This is free money — take advantage of it if you are eligible

**Choosing a super fund:**
- Compare fees — even small fee differences compound over decades
- Check investment performance over 5-10 years (not just one year)
- Consider an industry fund (typically lower fees) vs retail fund
- Make sure the fund accepts voluntary contributions and provides a tax deduction notice

**Do not neglect retirement because it is optional.** Freelancers who skip super for years often face a significant retirement shortfall. Even small, consistent contributions add up over time.`,
  },
  {
    id: 'record-keeping',
    title: 'Record Keeping Requirements',
    content: `The ATO requires you to keep business records for **5 years** from when you lodge the tax return they relate to. Poor record keeping is one of the most common audit triggers.

**What you must keep:**
- **Income records** — all invoices issued, payment receipts, bank deposits
- **Expense receipts** — every business purchase, no matter how small
- **Bank and credit card statements** — for all accounts used for business
- **Vehicle logbooks** — if using the logbook method for car expenses
- **Home office hours log** — if claiming the fixed rate method
- **Depreciation schedules** — for assets you are writing off over time
- **Contracts and agreements** — client contracts, leases, insurance policies
- **BAS lodgements** — copies of all Business Activity Statements
- **Tax returns** — copies of all lodged returns and notices of assessment

**Digital records are fine** — the ATO accepts photographs of receipts, scanned documents, and electronic records. In fact, digital records stored in the cloud are safer than paper in a shoebox.

**Best practices:**
- **Reconcile monthly, not annually** — catching errors early saves hours at tax time
- **Photograph receipts immediately** — paper receipts fade, get lost, or become unreadable
- **Use accounting software** — or at minimum, a well-structured spreadsheet
- **Separate bank accounts** — keep business and personal finances completely separate
- **Back up everything** — use cloud storage so you do not lose records to hardware failure

**Penalties for poor record keeping:** The ATO can impose penalties of up to **$1,110 per offence** for failure to keep adequate records. More importantly, without records you cannot substantiate deductions — meaning you lose the deduction entirely if audited.`,
  },
  {
    id: 'lodging',
    title: 'Lodging Your Tax Return',
    content: `**Due dates:**
- **Self-lodging (via myTax):** 31 October following the end of the financial year
- **Using a registered tax agent:** If you are registered with them before 31 October, you typically get an extended deadline of March-May the following year

**What you need before lodging:**
- All income records for the financial year
- Business deduction receipts and records
- PAYG payment summary (if you also had employment income)
- Private health insurance statement
- Superannuation contribution statements
- Details of any other income (interest, dividends, rental, capital gains)
- Previous year's tax return (for reference)

**How to lodge:**
- **myTax (free)** — the ATO's online lodgement system through myGov. Pre-fills income from employers, banks, and health funds. Suitable for straightforward returns
- **Registered tax agent** — a professional who lodges on your behalf. Costs $150-$500 depending on complexity (and that fee is tax-deductible the following year)

**First-year freelancers:**
- Consider using a tax agent for your first year — they can help set up your tax affairs correctly, identify deductions you might miss, and advise on PAYG installments and super
- Make sure you have an ABN and have reported all business income
- If you started freelancing mid-year, you may have both employment and business income on the same return

**Tax agent costs by complexity:**
- Simple sole trader return: **$150-$300**
- Moderate complexity (investments, rental): **$300-$500**
- Complex (multiple income sources, CGT events): **$500+**

**After lodging:** The ATO will issue a Notice of Assessment within 2-12 weeks. This shows your tax payable or refund amount. If you owe money, payment is due by the date shown on the notice. If you get a refund, it is typically deposited within 2 weeks of the notice.`,
  },
];

const relatedTools = [
  { name: 'Tax Estimator', href: '/tools/tax-estimator', desc: 'Estimate your annual tax bill' },
  { name: 'PAYG Installment Calculator', href: '/tools/payg-installment-calculator', desc: 'Calculate quarterly PAYG payments' },
  { name: 'Tax Deduction Finder', href: '/tools/tax-deduction-finder', desc: 'Find deductions you might be missing' },
  { name: 'Super Calculator', href: '/tools/super-calculator', desc: 'Calculate voluntary super contributions' },
  { name: 'Profit First Calculator', href: '/tools/profit-first-calculator', desc: 'Allocate income across tax, profit, and pay' },
  { name: 'Home Office Calculator', href: '/tools/workspace-cost-calculator', desc: 'Compare home office vs coworking costs' },
];

const relatedArticles = [
  { title: 'Top Tax Deductions for Australian Freelancers', href: '/blog/top-tax-deductions-freelancers' },
  { title: 'Understanding PAYG for Sole Traders', href: '/blog/understanding-payg-sole-traders' },
  { title: 'Home Office Deductions Guide', href: '/blog/home-office-deductions-guide' },
  { title: 'Freelance Tax Mistakes to Avoid', href: '/blog/common-freelance-tax-mistakes' },
];

export default function TaxGuideFreelancers() {
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
            <span className="text-gray-300">Tax Guide for Freelancers</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden pt-12 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
              Updated for 2025-26 Financial Year
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              The Complete Tax Guide for Australian Freelancers
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              Everything Australian freelancers need to know about income tax, PAYG installments,
              tax deductions, superannuation, record keeping, and lodging your tax return. Updated for 2025-26.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>14 min read</span>
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
                <a key={s.id} href={`#${s.id}`} className="text-gray-400 hover:text-sky-400 transition-colors text-sm py-1">
                  &rarr; {s.title}
                </a>
              ))}
              <a href="#faq" className="text-gray-400 hover:text-sky-400 transition-colors text-sm py-1">&rarr; FAQs</a>
              <a href="#tools" className="text-gray-400 hover:text-sky-400 transition-colors text-sm py-1">&rarr; Related Tools</a>
            </nav>
          </div>
        </section>

        {/* Key Numbers Banner */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '$18,200', label: 'Tax-free threshold' },
              { num: '11.5%', label: 'Super guarantee rate' },
              { num: '47%', label: 'No-ABN withholding' },
              { num: '5 years', label: 'Record keeping' },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl bg-sky-500/5 border border-sky-500/10">
                <div className="text-xl md:text-2xl font-bold text-sky-400">{s.num}</div>
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
                    .replace(/\n- /g, '</p><p class="pl-4 text-gray-400 my-1 before:content-[\'•\'] before:mr-2 before:text-sky-500">');
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
                <Link key={tool.href} href={tool.href} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-sky-500/30 transition-colors group">
                  <div className="font-semibold text-gray-200 group-hover:text-sky-400 transition-colors">{tool.name}</div>
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
                <Link key={article.href} href={article.href} className="text-gray-400 hover:text-sky-400 transition-colors text-sm py-2 flex items-center gap-2">
                  <span className="text-sky-500">&rarr;</span> {article.title}
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
            <h2 className="text-2xl font-bold text-white mb-4">Simplify Your Tax with Better Invoicing</h2>
            <p className="text-gray-400 mb-8">
              InvoiceFlow tracks your income, generates ATO-compliant invoices, and makes tax time painless. Start free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">Start Free — No Credit Card</Button>
              </Link>
              <Link href="/tools/tax-estimator">
                <Button variant="secondary" size="lg">Try Tax Estimator</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
