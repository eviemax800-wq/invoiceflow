import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'End of Financial Year Guide for Australian Freelancers (2025-26) — InvoiceFlow',
  description:
    'The complete EOFY checklist for freelancers: income reconciliation, deduction maximisation, super contributions, BAS preparation, and tax return lodging. Get organised before June 30.',
  alternates: { canonical: '/guides/eofy-guide' },
  keywords: [
    'EOFY freelancer australia',
    'end of financial year checklist freelancer',
    'freelance tax preparation 2026',
    'EOFY tax tips sole trader',
    'financial year end checklist',
    'freelancer EOFY guide',
  ],
  openGraph: {
    title: 'End of Financial Year Guide for Australian Freelancers (2025-26)',
    description:
      'The complete EOFY checklist for freelancers: income reconciliation, deduction maximisation, super contributions, BAS preparation, and tax return lodging. Get organised before June 30.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://invoiceflow-teal.vercel.app/guides' },
    { '@type': 'ListItem', position: 3, name: 'EOFY Guide', item: 'https://invoiceflow-teal.vercel.app/guides/eofy-guide' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is the end of the financial year in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Australian financial year runs from 1 July to 30 June. For the 2025-26 financial year, this means 1 July 2025 to 30 June 2026. Tax returns for this period are due by 31 October 2026 if self-lodging, or later if you use a registered tax agent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What deductions can I claim before June 30?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common pre-EOFY deductions include: equipment purchases up to $20,000 (instant asset write-off), professional development courses, software subscriptions, super contributions (up to $30,000), and prepaid business expenses. Only bring forward purchases you genuinely need — a deduction isn\'t free money, it just reduces the tax on the purchase.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use a tax agent or lodge myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For your first year freelancing or if you have complex affairs, a tax agent is worth the $150-$500 fee (which is tax-deductible). For subsequent years with straightforward finances, myTax (free through myGov) is adequate. Using an agent gives you an extended deadline and professional advice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I miss the October 31 deadline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Late lodgement can attract a Failure to Lodge penalty of $313 for each 28-day period your return is overdue, up to a maximum of $1,565. If you owe tax, interest also accrues from the original due date. If you can\'t lodge on time, either register with a tax agent before October 31 (for an extension) or contact the ATO to arrange a deferral.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I reconcile my BAS with my tax return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your total GST reported across four BAS statements should match your tax return. Total income on BAS (excluding GST) should equal business income on your return. Total GST credits claimed should be consistent with your deductions. If there\'s a mismatch, check for timing differences (cash vs accrual) and adjustments. Fix any BAS errors with an amendment before lodging your return.',
      },
    },
  ],
};

const sections = [
  {
    id: 'eofy-timeline',
    title: 'EOFY Timeline for Freelancers',
    content: `The Australian financial year runs from 1 July to 30 June. Key dates:

| Date | Action |
|------|--------|
| April | Start reviewing income and expenses for the year |
| May | Identify deduction opportunities before June 30 |
| 1-30 June | Last chance for tax-deductible purchases, super contributions |
| 30 June | Financial year ends — all transactions must be dated by this day |
| 1-28 July | Lodge Q4 BAS (April-June quarter) |
| 1 July -- 31 October | Lodge your tax return (self-lodging deadline: 31 Oct) |
| November -- May | Extended deadline if using a registered tax agent |

Starting early is key. Do not wait until July to scramble. Begin your EOFY review in April and use May-June to take action on deductions and super.`,
  },
  {
    id: 'income-reconciliation',
    title: 'Income Reconciliation',
    content: `Before you can prepare your tax return, you need an accurate picture of all income earned during the financial year.

**Step 1: Reconcile all invoices**
- Match every invoice to a payment received
- Identify any outstanding invoices (income is counted when RECEIVED if on cash basis, or when INVOICED if on accrual)
- Note any bad debts that can be written off

**Step 2: Check all income sources**
- Primary freelance income
- Any employment income (your employer will provide a payment summary via myGov)
- Interest earned on business bank accounts
- Government payments (JobSeeker, COVID grants, etc.)
- Asset sales (equipment, vehicles)
- Any other business income

**Step 3: Verify against bank statements**
- Download 12 months of bank statements (July 1 to June 30)
- Check for any income not captured in your invoicing system
- Look for cash payments, PayPal, Stripe, or other payment platform income

**Pro tip:** If you use InvoiceFlow, export your full year's invoice report. Cross-reference with bank deposits. The discrepancy is usually small amounts (PayPal direct transfers, Venmo, etc.) that bypassed your invoicing system.`,
  },
  {
    id: 'maximise-deductions',
    title: 'Maximising Deductions Before June 30',
    content: `June is your last chance to make tax-deductible purchases for the 2025-26 financial year. Smart pre-EOFY spending:

**Equipment (instant asset write-off up to $20,000):**
- New laptop, monitor, printer, or phone
- Office furniture (desk, chair, storage)
- Camera equipment, tools of trade
- Software licenses (annual plans paid before June 30)

**Professional development:**
- Courses, certifications, workshops
- Industry conferences (including travel)
- Books, online subscriptions

**Super contributions:**
- Make concessional contributions up to $30,000 cap
- Use carry-forward if you have unused caps from previous years
- Remember: lodge "Notice of intent to claim" with your fund BEFORE your tax return

**Prepaid expenses:**
- Some expenses can be prepaid up to 12 months in advance and claimed this year
- Insurance premiums, rent, subscriptions
- Must be under $1,000 or satisfy the "12-month rule"

**Warning:** Do not buy things just for the deduction. A $1,000 purchase at a 30% marginal rate saves you $300 in tax — you are still $700 out of pocket. Only bring forward purchases you would make anyway.`,
  },
  {
    id: 'bas-final-quarter',
    title: 'BAS and PAYG Final Quarter',
    content: `The April-June quarter BAS is due 28 July. This is also your last BAS for the financial year.

**What to reconcile:**
- Q4 GST collected vs Q4 GST paid on purchases
- PAYG installment for Q4
- Any adjustments from earlier quarters

**Common EOFY BAS issues:**
- **Timing differences:** An invoice dated June 30 but paid July 5 — which quarter does the GST fall in? Cash basis: Q1 next year. Accrual basis: Q4 this year.
- **Annual GST reconciliation:** Your total GST for the year should roughly equal 10% of your total sales minus 10% of your business purchases. Big discrepancies need investigation.
- **PAYG variation:** If your income was significantly different from the ATO's estimate, vary your Q4 PAYG installment to avoid overpaying or underpaying.

**Pro tip:** Lodge your Q4 BAS before starting your tax return. The figures should align — if they do not, fix the BAS first.`,
  },
  {
    id: 'record-review',
    title: 'Record Review & Organisation',
    content: `Tax time goes smoothly when your records are organised. Use this checklist:

**Income records:**
- All invoices issued during the year
- Bank statements showing all deposits
- Payment platform reports (Stripe, PayPal, Square)
- Any grant or government payment documentation

**Expense records:**
- Receipts for all business purchases
- Credit card statements
- Subscription confirmations
- Vehicle logbook (if using logbook method)
- Home office hours log (if using fixed rate method)

**ATO documents:**
- Previous year's tax return
- PAYG installment activity statements
- BAS lodgement confirmations
- Any ATO correspondence

**Other:**
- Private health insurance statement (for Medicare levy surcharge)
- Super fund statements
- Income protection insurance premiums
- Professional membership receipts

**Digital filing system:**
Create folders: FY2025-26/Income, FY2025-26/Expenses, FY2025-26/BAS, FY2025-26/Super, FY2025-26/Tax-Return. Scan all paper receipts. The ATO accepts digital copies.`,
  },
  {
    id: 'lodging',
    title: 'Lodging Your Tax Return',
    content: `**Self-lodging via myTax:**
- Free through your myGov account
- Most information is pre-filled by the ATO (bank interest, health insurance, employment income)
- Due 31 October
- Best for simple situations with one income source

**Using a tax agent:**
- Costs $150-$500 (tax-deductible NEXT year)
- Extended deadline (typically March-May next year)
- Must be registered with the ATO before 31 October to get the extension
- Recommended if: first year freelancing, multiple income sources, complex deductions, GST-registered

**What to report on your tax return:**
- Total business income (Item 15: Net business income)
- All business expenses/deductions
- Super contributions claimed
- Any other income (employment, interest, dividends)
- Private health insurance details
- PAYG installments already paid during the year (credited against your tax)

**Common mistakes at tax time:**
- Forgetting to claim PAYG installments already paid (these reduce your final tax bill)
- Double-counting deductions already claimed on BAS
- Missing the 31 October deadline (penalties apply)
- Not declaring ALL income (the ATO data-matches with banks, clients, and platforms)`,
  },
  {
    id: 'checklist',
    title: 'EOFY Checklist',
    content: `Your complete EOFY action list:

**Before June 30:**
- Reconcile all invoices and income
- Make any tax-deductible purchases needed
- Contribute to super (up to $30,000 concessional cap)
- Lodge "Notice of intent to claim" for super with your fund
- Prepay up to 12 months of business expenses
- Update your home office hours log
- Complete vehicle logbook (if applicable)
- Chase any outstanding invoices
- Write off confirmed bad debts

**July:**
- Lodge Q4 BAS (due 28 July)
- Gather all EOFY documents
- Organise records into digital folders
- Request PAYG summary from any employers

**August -- October:**
- Review pre-filled data in myTax
- Lodge your tax return by 31 October (or register with an agent before then)
- Pay any tax owing (or receive your refund!)

**After lodging:**
- Set up PAYG installments for the new year (if not already)
- Review your business structure and insurance
- Set financial goals for the new financial year
- Start tracking expenses from Day 1`,
  },
];

const relatedTools = [
  { name: 'EOFY Tax Checklist', href: '/tools/eofy-tax-checklist', desc: 'Generate a personalised EOFY checklist' },
  { name: 'Tax Estimator', href: '/tools/tax-estimator', desc: 'Estimate your annual tax bill' },
  { name: 'Tax Deduction Finder', href: '/tools/tax-deduction-finder', desc: 'Find deductions you might be missing' },
  { name: 'BAS Preparation Checklist', href: '/tools/bas-preparation-checklist', desc: 'Prepare your quarterly BAS' },
  { name: 'Super Calculator', href: '/tools/super-calculator', desc: 'Calculate super contribution tax savings' },
  { name: 'Financial Year Planner', href: '/tools/financial-year-planner', desc: 'Plan your FY2025-26 finances' },
];

const relatedArticles = [
  { title: 'EOFY Tax Tips for Australian Freelancers', href: '/blog/eofy-tax-tips-freelancers' },
  { title: 'Top Tax Deductions for Sole Traders', href: '/blog/top-tax-deductions-freelancers' },
  { title: 'Understanding PAYG for Freelancers', href: '/blog/understanding-payg-sole-traders' },
  { title: 'BAS Lodgement Guide', href: '/blog/bas-lodgement-guide' },
];

export default function EOFYGuide() {
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
            <span className="text-gray-300">EOFY Guide</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden pt-12 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
              Updated for 2025-26 Financial Year
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              End of Financial Year Guide for Australian Freelancers (2025-26)
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              The complete EOFY checklist for freelancers: income reconciliation, deduction maximisation,
              super contributions, BAS preparation, and tax return lodging. Get organised before June 30.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>12 min read</span>
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
                <a key={s.id} href={`#${s.id}`} className="text-gray-400 hover:text-amber-400 transition-colors text-sm py-1">
                  &rarr; {s.title}
                </a>
              ))}
              <a href="#faq" className="text-gray-400 hover:text-amber-400 transition-colors text-sm py-1">&rarr; FAQs</a>
              <a href="#tools" className="text-gray-400 hover:text-amber-400 transition-colors text-sm py-1">&rarr; Related Tools</a>
            </nav>
          </div>
        </section>

        {/* Key Numbers Banner */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: 'June 30', label: 'Financial year ends' },
              { num: 'Oct 31', label: 'Self-lodge due date' },
              { num: '$20,000', label: 'Instant asset write-off' },
              { num: '$30,000', label: 'Max deductible super' },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
                <div className="text-xl md:text-2xl font-bold text-amber-400">{s.num}</div>
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
                    .replace(/\n- /g, '</p><p class="pl-4 text-gray-400 my-1 before:content-[\'•\'] before:mr-2 before:text-amber-500">');
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
                <Link key={tool.href} href={tool.href} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-amber-500/30 transition-colors group">
                  <div className="font-semibold text-gray-200 group-hover:text-amber-400 transition-colors">{tool.name}</div>
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
                <Link key={article.href} href={article.href} className="text-gray-400 hover:text-amber-400 transition-colors text-sm py-2 flex items-center gap-2">
                  <span className="text-amber-500">&rarr;</span> {article.title}
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
            <h2 className="text-2xl font-bold text-white mb-4">Make Next Tax Time Effortless</h2>
            <p className="text-gray-400 mb-8">
              InvoiceFlow tracks your income all year, so EOFY is a breeze. Export reports, reconcile invoices, and get organised. Start free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">Start Free — No Credit Card</Button>
              </Link>
              <Link href="/tools/eofy-tax-checklist">
                <Button variant="secondary" size="lg">Try EOFY Checklist</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
