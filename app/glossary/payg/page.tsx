import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'PAYG (Pay As You Go): Complete Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is PAYG in Australia? Learn about PAYG instalments for freelancers, PAYG withholding explained, the 47% no-ABN rule, and how to manage quarterly tax payments as a sole trader.',
  alternates: { canonical: '/glossary/payg' },
  keywords: [
    'what is PAYG australia',
    'PAYG instalments freelancer',
    'PAYG withholding explained',
    'PAYG instalment rate',
    'PAYG instalment amount',
    'pay as you go tax australia',
    '47 percent no ABN rule',
    'PAYG quarterly payments',
    'PAYG BAS sole trader',
  ],
  openGraph: {
    title: 'PAYG (Pay As You Go): Complete Guide for Australian Freelancers',
    description:
      'Everything freelancers need to know about PAYG withholding, instalments, the 47% no-ABN rule, and managing quarterly tax payments in Australia.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://invoiceflow-teal.vercel.app/glossary' },
    { '@type': 'ListItem', position: 3, name: 'PAYG', item: 'https://invoiceflow-teal.vercel.app/glossary/payg' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's the difference between PAYG withholding and PAYG instalments?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PAYG withholding is when an employer or payer withholds tax from payments they make to employees or contractors (e.g. from wages). PAYG instalments are quarterly pre-payments of your own income tax that self-employed people and sole traders make directly to the ATO based on their business or investment income.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do PAYG instalments start for freelancers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO will automatically enter you into the PAYG instalment system after you lodge a tax return that shows you owe tax on business or investment income. You do not choose to enter — the ATO sends you an instalment notice with your first BAS after your return is processed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the PAYG instalment amount calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two methods. The instalment amount method gives you a fixed dollar amount each quarter based on your last tax return. The instalment rate method gives you a percentage (e.g. 15%) that you multiply by your actual quarterly business income. The rate method is better if your income fluctuates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I vary my PAYG instalments if my income changes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can vary your PAYG instalments on your BAS if you expect your income to be significantly different from the previous year. However, if you vary too low and end up owing more than 85% of your actual tax liability, the ATO can charge a general interest charge (GIC) on the shortfall.',
      },
    },
    {
      '@type': 'Question',
      name: "What is the 47% no-ABN withholding rule?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you provide services and do not quote a valid ABN on your invoice, the payer is legally required to withhold 47% of your payment and send it to the ATO. This is the top marginal tax rate (45%) plus Medicare levy (2%). Always include your ABN on every invoice to avoid this withholding.',
      },
    },
  ],
};

const sections = [
  {
    id: 'what-is-payg',
    title: 'What Is PAYG?',
    content: `PAYG stands for **Pay As You Go** — it is the Australian Taxation Office's system for collecting income tax progressively throughout the year, rather than in one lump sum at tax time.

The idea is straightforward: instead of saving up an entire year's worth of tax and paying it all at once when you lodge your return, you make regular payments throughout the year. This benefits both the government (steady cash flow) and you (no massive tax bill surprise in October).

There are **two distinct parts** to the PAYG system, and understanding the difference is essential for freelancers:

- **PAYG Withholding** — tax withheld from payments by an employer or payer. This is what happens when you work as an employee and your employer deducts tax from your wages before paying you
- **PAYG Instalments** — quarterly pre-payments of your own income tax that you calculate and pay yourself. This is what applies to you as a freelancer, sole trader, or self-employed person

Most freelancers will primarily deal with **PAYG instalments**, since there is no employer withholding tax from your income. However, you may also encounter PAYG withholding if you do not quote your ABN on invoices (the 47% rule, explained below).

The PAYG instalment system is tightly linked to the **Business Activity Statement (BAS)**. If you are GST-registered, your PAYG instalments are reported on the same quarterly BAS that you use for GST — meaning you handle both obligations in a single lodgement.`,
  },
  {
    id: 'withholding-vs-instalments',
    title: 'PAYG Withholding vs Instalments',
    content: `These two PAYG components serve the same purpose — collecting tax throughout the year — but they work very differently.

**PAYG Withholding:**
- Applies to **employers and payers** who must withhold tax from payments they make
- Employers withhold from employee wages based on ATO tax tables
- Businesses withhold 47% from contractors who do not quote an ABN
- The **payer** is responsible for withholding and remitting to the ATO
- Employees see this as "tax taken out of my pay"

**PAYG Instalments:**
- Applies to **individuals and businesses** with business or investment income
- You calculate and pay your own quarterly tax pre-payments
- The ATO sets your instalment amount or rate based on your last tax return
- **You** are responsible for calculating, reporting, and paying
- Freelancers see this as "my quarterly tax payment"

**Why this matters for freelancers:**
When you transition from employment to freelancing, you go from a system where tax is automatically handled (withholding) to one where you manage it yourself (instalments). This is one of the biggest financial adjustments new freelancers face.

As an employee, your tax is sorted every pay cycle. As a freelancer, you need to actively set money aside, track your income, and make quarterly payments. If you do not plan for this, you can end up with a significant tax debt at the end of the financial year.

**Key distinction:** If you are a freelancer who also has part-time employment, you may have both PAYG withholding (from your employer) and PAYG instalments (on your freelance income) happening simultaneously. Both amounts are credited against your final tax bill when you lodge your return.`,
  },
  {
    id: 'instalments-for-freelancers',
    title: 'PAYG Instalments for Freelancers',
    content: `Once the ATO identifies that you have business or investment income, they will enter you into the PAYG instalment system automatically. Here is how it works in practice.

**When instalments begin:**
After you lodge your first (or any) tax return that shows tax owing on business or investment income, the ATO will issue an instalment notice. This typically happens from your second year of freelancing onwards — your first year, you pay the tax bill in full when you lodge your return.

**Quarterly payment schedule (aligned with BAS):**

| Quarter | Period | Due Date |
|---------|--------|----------|
| Q1 | July -- September | 28 October |
| Q2 | October -- December | 28 February |
| Q3 | January -- March | 28 April |
| Q4 | April -- June | 28 July |

**Two calculation methods:**

The ATO offers you a choice of how to calculate your quarterly payment:

- **Instalment rate method** — the ATO gives you a percentage rate (e.g. 12%). Each quarter, you multiply this rate by your actual business income for that quarter to calculate your payment. This means your payments go up and down with your income
- **Instalment amount method** — the ATO gives you a fixed dollar amount to pay each quarter, calculated from your last tax return. You pay the same amount regardless of what you actually earned that quarter

**Which method is better?**
For most freelancers, the **rate method is better** because freelance income tends to fluctuate. If you had a strong year last year but a quiet quarter this year, the amount method would have you overpaying. The rate method automatically adjusts to your actual earnings.

**How instalments are credited:**
Every instalment you pay during the year is credited against your final tax bill. When you lodge your annual return, the ATO calculates your total tax liability, subtracts all the instalments you have already paid, and you either pay the difference or receive a refund.`,
  },
  {
    id: 'no-abn-rule',
    title: 'The 47% No-ABN Rule',
    content: `One of the most important PAYG rules for freelancers to understand is the **no-ABN withholding** requirement. If you provide services or goods and do not quote a valid Australian Business Number on your invoice, the payer is **legally required** to withhold **47%** of your payment and send it to the ATO.

**Why 47%?**
This rate is the top marginal tax rate (45%) plus the Medicare levy (2%). It is deliberately set at the highest possible rate to create a strong incentive for suppliers to quote their ABN.

**How it works in practice:**
- You send an invoice for $5,000 without including your ABN
- The client is legally obligated to withhold 47% = $2,350
- You receive only $2,650
- The client remits $2,350 to the ATO on your behalf
- You can claim the $2,350 as a credit when you lodge your tax return — but you are out of pocket until then

**How to avoid the 47% withholding:**
- **Always include your ABN on every invoice** — this is the simplest and most important step
- If you do not have an ABN yet, apply for one through the Australian Business Register (it is free and usually instant online)
- If a client asks for your ABN before paying, provide it promptly — they are following the law

**Common scenarios where this applies:**
- New freelancers who have not yet obtained an ABN
- Freelancers who forget to include their ABN on invoices
- Casual or one-off jobs where the freelancer does not think to provide business details
- International contractors working with Australian clients (different rules may apply)

**Important:** The withholding is not lost money — it is a tax credit. When you lodge your return, the amount withheld is credited against your tax liability. However, if your actual tax rate is lower than 47% (which it almost certainly is), you have effectively given the ATO an interest-free loan until you get your refund.

**Using InvoiceFlow:** Every invoice you create with InvoiceFlow automatically includes your ABN in the required position, so you never accidentally trigger the 47% withholding rule.`,
  },
  {
    id: 'how-instalments-calculated',
    title: 'How Instalments Are Calculated',
    content: `Understanding how the ATO calculates your PAYG instalments helps you plan your cash flow and decide whether to vary them.

**The Instalment Rate Method:**
The ATO calculates a rate based on your most recent tax return. This rate represents the proportion of your income that went to tax.

**How the rate is calculated:**
- ATO looks at your latest tax assessment
- Divides your tax on business/investment income by your total business/investment income
- This gives a percentage — your instalment rate
- Each quarter, you multiply: **Quarterly business income x Instalment rate = Quarterly payment**

**Example — Rate method:**
- Your ATO instalment rate: 15%
- Q1 business income (July-Sep): $25,000
- Q1 instalment payment: $25,000 x 15% = **$3,750**
- Q2 business income (Oct-Dec): $18,000
- Q2 instalment payment: $18,000 x 15% = **$2,700**

Notice how the payment adjusts automatically with your income — this is the key advantage.

**The Instalment Amount Method:**
The ATO calculates a fixed quarterly amount based on your last return, and you pay that exact amount each quarter regardless of what you actually earn.

**Example — Amount method:**
- ATO calculates your annual instalment: $16,000
- Quarterly instalment: $16,000 / 4 = **$4,000 per quarter**
- You pay $4,000 every quarter, even if you earned $30,000 one quarter and $10,000 the next

**Choosing between the methods:**
- **Rate method is better if:** your income fluctuates significantly, you are in a growth phase, or your income is trending down from last year
- **Amount method is better if:** your income is very stable and predictable, or you prefer the simplicity of a fixed payment
- **You can switch** between methods on your BAS — it is not a permanent choice

**2025-26 individual tax brackets for reference:**

| Taxable Income | Tax Rate |
|----------------|----------|
| $0 -- $18,200 | Nil |
| $18,201 -- $45,000 | 16c for each $1 over $18,200 |
| $45,001 -- $135,000 | $4,288 plus 30c for each $1 over $45,000 |
| $135,001 -- $190,000 | $31,288 plus 37c for each $1 over $135,000 |
| $190,001+ | $51,638 plus 45c for each $1 over $190,000 |

These brackets determine your overall tax liability. Your PAYG instalment rate is effectively an approximation of where you sit in this progressive system.`,
  },
  {
    id: 'varying-instalments',
    title: 'Varying Your Instalments',
    content: `Life as a freelancer is not predictable. Your income can vary dramatically from year to year — and the ATO recognises this by allowing you to **vary** your PAYG instalments.

**When you should consider varying:**
- Your income has dropped significantly compared to last year
- You have taken time off (parental leave, health, travel)
- A major client has ended and you have not replaced them yet
- You are transitioning between industries or service offerings
- Your income has increased substantially and you want to avoid a large tax bill at year end

**How to vary your instalments:**
- On your BAS, you can vary the instalment amount to a figure you believe better reflects your expected tax for the year
- For the rate method, you can vary both the income figure and/or request a different rate
- The variation only applies to the current quarter — you can vary again next quarter if needed
- You indicate the variation on the relevant labels of your BAS form

**The rules around varying:**
The ATO allows variations but has safeguards against people under-reporting to defer tax payments:

- If your varied instalments result in you paying **less than 85%** of your actual tax liability for the year, the ATO can charge the **General Interest Charge (GIC)** on the shortfall
- The GIC is calculated daily and can add up quickly — it is currently around 11-12% per annum
- If you vary to a **lower** amount, make sure your estimate is reasonable and defensible
- Keep documentation of why you varied — evidence of lost clients, reduced hours, or changed circumstances

**Varying upwards:**
You can also vary your instalments **upwards** if your income has increased. This is smart planning — it means you will not face a large tax bill when you lodge your return. Many experienced freelancers deliberately overpay slightly to build a buffer.

**What happens at year end:**
Regardless of how you varied your instalments during the year, the final tax calculation is based on your actual income. All instalments paid (whether varied or not) are credited against your final tax bill. If you overpaid, you get a refund. If you underpaid, you owe the difference plus potential GIC.

**Pro tip:** If you need to vary, do it early in the quarter. Do not wait until the BAS is due to think about whether your instalments are appropriate. Review your income at the start of each quarter and adjust proactively.`,
  },
  {
    id: 'payg-tips',
    title: 'PAYG Tips for Freelancers',
    content: `Managing PAYG instalments well is one of the markers of a financially organised freelancer. Here are practical strategies that experienced sole traders use.

**1. Open a separate tax savings account**
This is the single most important tip. Every time you receive a payment, immediately transfer a percentage (25-30% is a safe starting point) into a dedicated high-interest savings account. This money is for tax and only for tax. When your quarterly BAS is due, the money is already there — no scrambling, no stress.

**2. Review your instalments at the start of each financial year**
The ATO recalculates your instalment rate or amount after processing your tax return. Check the new figures and compare them to your expected income for the coming year. If they do not align, plan to vary from Q1 rather than waiting until you are behind.

**3. Use the rate method if your income fluctuates**
The rate method automatically adjusts your payment to match your actual quarterly income. If you had a $50K quarter followed by a $15K quarter, your tax payment scales accordingly. The amount method would have you paying the same both times, which creates cash flow problems in low-income quarters.

**4. Vary early if income drops significantly**
Do not wait for your instalments to become unaffordable before acting. If you lose a major client or take extended leave, vary your instalments on the very next BAS. The ATO expects income to fluctuate for sole traders — varying is normal and acceptable.

**5. Track everything in real time**
Do not try to reconstruct your income and expenses at BAS time. Use invoicing software like InvoiceFlow to track income as it comes in, and categorise expenses as they occur. When BAS is due, you should be able to pull your figures in minutes, not hours.

**6. Do not forget the Medicare levy**
When estimating your tax, remember to add the 2% Medicare levy on top of your income tax. If you are earning $80,000, that is an extra $1,600. It is easy to forget when doing rough calculations, and it adds up.

**7. Keep a BAS calendar with reminders**
Set reminders for two weeks before each BAS due date (28 October, 28 February, 28 April, 28 July). This gives you time to reconcile your figures, calculate your instalment, and lodge without rushing. Late lodgement and late payment both attract penalties.

**8. Consider voluntary upward variation in good years**
If you are having a bumper year, consider paying more than the ATO requires. This builds a credit balance that reduces or eliminates any year-end tax bill. It is psychologically easier to pay a little extra each quarter than to face a $10,000 bill at tax time.

**9. Combine PAYG planning with GST**
If you are GST-registered, your PAYG instalments and GST are reported on the same BAS. Think of both obligations together — your quarterly tax liability is your PAYG instalment plus any GST owing (minus GST credits). Plan your cash flow for the combined amount.

**10. Get professional advice in your first year**
An accountant who understands freelancing can help you set up your PAYG instalments correctly from day one, choose the right calculation method, and establish good tax habits. Their fee ($150-$500) is tax-deductible and will likely save you more than it costs.`,
  },
];

const relatedTools = [
  { name: 'PAYG Instalment Calculator', href: '/tools/payg-instalment-calculator', desc: 'Calculate your quarterly PAYG instalment payments' },
  { name: 'Tax Estimator', href: '/tools/tax-estimator', desc: 'Estimate your total annual tax bill as a freelancer' },
  { name: 'BAS Preparation Checklist', href: '/tools/bas-preparation-checklist', desc: 'Step-by-step checklist for lodging your BAS' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Calculate GST-inclusive and exclusive amounts' },
];

const relatedGuides = [
  { title: 'The Complete Tax Guide for Australian Freelancers', href: '/guides/tax-guide-freelancers' },
  { title: 'GST for Freelancers: When to Register and How It Works', href: '/guides/gst-for-freelancers' },
  { title: 'EOFY Guide: End of Financial Year Checklist', href: '/guides/eofy-guide' },
];

export default function PAYGGlossaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 pt-6">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/glossary" className="hover:text-gray-300 transition-colors">Glossary</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">PAYG</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden pt-12 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
              Glossary — Tax &amp; Compliance
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              PAYG{' '}
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                (Pay As You Go)
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              The ATO system for collecting income tax throughout the year. For freelancers, this means quarterly
              pre-payments of your expected tax — so you are never hit with one massive bill at tax time.
            </p>
          </div>
        </section>

        {/* In a Nutshell */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-gray-800/50 border border-rose-500/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 text-sm font-bold">!</span>
              In a Nutshell
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                <span><strong className="text-white">Pre-pay your income tax quarterly</strong> — the ATO collects tax throughout the year via PAYG instalments, not in one lump sum</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                <span><strong className="text-white">ATO sets your instalment amount</strong> — based on your last tax return, using either a fixed amount or a percentage rate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                <span><strong className="text-white">47% withheld if you do not quote your ABN</strong> — payers must withhold the top tax rate plus Medicare levy from any invoice without an ABN</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                <span><strong className="text-white">Reported on your BAS</strong> — PAYG instalments are lodged on the same Business Activity Statement as your GST each quarter</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Key Numbers Banner */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '47%', label: 'No-ABN withholding rate' },
              { num: '4x', label: 'Quarterly payments per year' },
              { num: '85%', label: 'Minimum variation threshold' },
              { num: '$18,200', label: 'Tax-free threshold' },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl bg-rose-500/5 border border-rose-500/10">
                <div className="text-xl md:text-2xl font-bold text-rose-400">{s.num}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Table of Contents */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">In This Guide</h2>
            <nav className="grid md:grid-cols-2 gap-2">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="text-gray-400 hover:text-rose-400 transition-colors text-sm py-1">
                  &rarr; {s.title}
                </a>
              ))}
              <a href="#faq" className="text-gray-400 hover:text-rose-400 transition-colors text-sm py-1">&rarr; Frequently Asked Questions</a>
              <a href="#tools" className="text-gray-400 hover:text-rose-400 transition-colors text-sm py-1">&rarr; Related Tools</a>
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
                    .replace(/\n- /g, '</p><p class="pl-4 text-gray-400 my-1 before:content-[\'•\'] before:mr-2 before:text-rose-500">');
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
            <p className="text-gray-400 mb-8">Calculate your PAYG obligations with these free tools — no sign-up required.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="p-4 rounded-xl bg-gray-800/50 border border-gray-800 hover:border-rose-500/30 transition-colors group">
                  <div className="font-semibold text-gray-200 group-hover:text-rose-400 transition-colors">{tool.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="border-t border-gray-800 bg-gray-900/30">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-xl font-bold text-white mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {relatedGuides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="text-gray-400 hover:text-rose-400 transition-colors text-sm py-2 flex items-center gap-2">
                  <span className="text-rose-500">&rarr;</span> {guide.title}
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
                <details key={faq.name} className="group bg-gray-800/50 border border-gray-800 rounded-xl">
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
            <h2 className="text-2xl font-bold text-white mb-4">Never Miss a PAYG Payment Again</h2>
            <p className="text-gray-400 mb-8">
              InvoiceFlow tracks your freelance income, automatically includes your ABN on every invoice,
              and helps you stay on top of your quarterly tax obligations. Start free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">Start Free — No Credit Card</Button>
              </Link>
              <Link href="/tools/payg-instalment-calculator">
                <Button variant="secondary" size="lg">Try PAYG Calculator</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
