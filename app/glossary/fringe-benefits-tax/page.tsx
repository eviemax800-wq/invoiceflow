import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Fringe Benefits Tax (FBT): Complete Guide for Australian Employers & Sole Traders — InvoiceFlow',
  description:
    'What is fringe benefits tax? Learn the 47% FBT rate, common fringe benefits (cars, parking, entertainment, loans), how FBT applies to sole traders vs employers, gross-up rates (Type 1: 2.0802, Type 2: 1.8868), exemptions, concessions, and worked examples. Updated for 2025-26.',
  keywords: [
    'fringe benefits tax australia',
    'FBT rate 2025',
    'FBT sole trader',
    'fringe benefits tax examples',
    'FBT gross up rate',
    'FBT car fringe benefit',
    'FBT exemptions',
    'FBT return australia',
    'fringe benefits tax calculator',
    'FBT minor benefits exemption',
    'FBT reportable fringe benefits',
    'employer fringe benefits tax',
  ],
  alternates: { canonical: '/glossary/fringe-benefits-tax' },
  openGraph: {
    title: 'Fringe Benefits Tax (FBT): Complete Guide for Australian Employers & Sole Traders — InvoiceFlow',
    description:
      'Everything Australian employers and sole traders need to know about fringe benefits tax: the 47% FBT rate, common benefit categories, gross-up calculations, exemptions, concessions, and how to stay compliant with the ATO.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/fringe-benefits-tax',
    type: 'article',
  },
};

const BASE_URL = 'https://invoiceflow-teal.vercel.app';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${BASE_URL}/glossary` },
    { '@type': 'ListItem', position: 3, name: 'Fringe Benefits Tax', item: `${BASE_URL}/glossary/fringe-benefits-tax` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do sole traders pay fringe benefits tax in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sole traders without employees generally do not pay fringe benefits tax. FBT only applies when an employer provides non-cash benefits to employees or their associates. If you are a sole trader working alone, benefits you provide to yourself are not fringe benefits — they are either personal expenses or business deductions. However, if you hire employees, engage contractors who are treated as employees for FBT purposes, or operate through a Pty Ltd where you are an employee-director, FBT may apply to benefits you provide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the FBT rate for 2025-26?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The FBT rate for the 2025-26 FBT year (1 April 2025 to 31 March 2026) is 47%. This rate is designed to match the top marginal income tax rate of 45% plus the 2% Medicare levy. The rate ensures that fringe benefits are taxed at the same effective rate as if the employee had received the equivalent amount as salary. The FBT rate has been 47% since the 2017-18 FBT year.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the FBT gross-up rates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two FBT gross-up rates. Type 1 gross-up rate is 2.0802 and applies when the employer is entitled to claim a GST credit on the benefit. Type 2 gross-up rate is 1.8868 and applies when no GST credit can be claimed. The gross-up mechanism converts the taxable value of the benefit to a pre-tax equivalent amount, ensuring FBT is calculated on the gross income the employee would have needed to earn to purchase the benefit themselves after paying income tax.',
      },
    },
    {
      '@type': 'Question',
      name: 'What fringe benefits are exempt from FBT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several categories of fringe benefits are exempt from FBT. Work-related electronic devices are exempt if primarily for work use and limited to one per type per FBT year (e.g., one laptop, one phone, one tablet). Minor benefits valued under $300 that are infrequent and irregular are exempt. Other exemptions include certain emergency assistance, approved remote area benefits, work-related preventative health care, and approved in-house fringe benefits up to the $300 threshold. Some employers, particularly public benevolent institutions and hospitals, also receive FBT exemptions or caps.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does FBT affect an employee payment summary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the total taxable value of fringe benefits provided to an individual employee exceeds $2,000 in an FBT year, the grossed-up amount must be reported on the employee\'s income statement (formerly payment summary) as reportable fringe benefits. While the employee does not pay FBT directly, the reportable amount is used to calculate various income-tested obligations and entitlements including Medicare levy surcharge, Higher Education Loan Program (HELP) repayments, child support obligations, and eligibility for government benefits and tax offsets.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-fbt', label: '1. What Is Fringe Benefits Tax?' },
  { id: 'common-fringe-benefits', label: '2. Common Fringe Benefits' },
  { id: 'fbt-sole-traders-freelancers', label: '3. FBT and Sole Traders / Freelancers' },
  { id: 'calculating-fbt', label: '4. Calculating FBT' },
  { id: 'fbt-exemptions-concessions', label: '5. FBT Exemptions and Concessions' },
  { id: 'fbt-and-invoiceflow', label: '6. FBT and InvoiceFlow' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your total tax bill including income tax, Medicare levy, and FBT obligations.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    href: '/tools/rate-calculator',
    name: 'Rate Calculator',
    description: 'Calculate your ideal hourly rate factoring in tax, super, and employee benefit costs.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST on purchases and understand how GST credits interact with FBT gross-up rates.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/tools/profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Work out your true profit margin after factoring in employee costs including FBT.',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'Complete guide to Australian tax obligations including income tax, GST, FBT, and deductions.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide',
    description: 'End of financial year checklist: FBT returns, tax lodgement deadlines, and last-minute strategies.',
  },
  {
    href: '/guides/superannuation-for-freelancers',
    name: 'Superannuation for Freelancers',
    description: 'How super interacts with salary packaging, FBT exemptions, and total remuneration planning.',
  },
];

export default function FringeBenefitsTaxGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-rose-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Fringe Benefits Tax</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Fringe Benefits Tax:{' '}
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              The Complete Guide for Australian Employers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Fringe benefits tax is a tax paid by employers on certain non-cash benefits provided to employees. At 47%, it&apos;s one of Australia&apos;s highest effective tax rates &mdash; but with the right exemptions, concessions, and structuring, many benefits can be provided tax-free or at significantly reduced cost. This guide covers how FBT works, when it applies to <Link href="/glossary/sole-trader" className="text-rose-400 hover:text-rose-300 underline decoration-rose-500/30 hover:decoration-rose-500 transition-colors">sole traders</Link> and freelancers, and how to calculate and minimise your FBT liability.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Worked Examples Included</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">47%</span>
              <div>
                <p className="text-white font-medium text-sm">FBT Rate</p>
                <p className="text-gray-400 text-sm">Matches the top marginal tax rate (45%) plus the 2% Medicare levy</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">Apr</span>
              <div>
                <p className="text-white font-medium text-sm">FBT Year</p>
                <p className="text-gray-400 text-sm">Runs 1 April to 31 March &mdash; different from the standard financial year</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">$300</span>
              <div>
                <p className="text-white font-medium text-sm">Minor Benefits Exemption</p>
                <p className="text-gray-400 text-sm">Benefits under $300 that are infrequent and irregular are generally FBT-exempt</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-pink-400 text-xs font-bold">Emp</span>
              <div>
                <p className="text-white font-medium text-sm">Employer Pays</p>
                <p className="text-gray-400 text-sm">FBT is paid by the employer, not the employee &mdash; it&apos;s a cost of providing benefits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gray-800/50 border border-gray-700/50 p-8">
          <h2 className="text-lg font-bold text-white mb-4">Table of Contents</h2>
          <nav className="grid sm:grid-cols-2 gap-2">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 text-gray-400 hover:text-rose-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-rose-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

        {/* Section 1: What Is Fringe Benefits Tax? */}
        <section id="what-is-fbt">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Fringe Benefits Tax?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Fringe benefits tax (FBT) is a <strong className="text-white">tax paid by employers on certain non-cash benefits provided to employees</strong> (or their associates, such as family members). Unlike <Link href="/glossary/income-tax" className="text-rose-400 hover:text-rose-300 underline decoration-rose-500/30 hover:decoration-rose-500 transition-colors">income tax</Link>, which is paid by the person receiving the income, FBT is paid by the <strong className="text-white">employer</strong> who provides the benefit. It is a separate tax obligation from PAYG withholding or company tax.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The FBT rate is currently <strong className="text-white">47%</strong>, which is deliberately set to match the top marginal income tax rate (45%) plus the 2% Medicare levy. This design ensures there is no tax advantage in paying employees through benefits instead of salary at the highest tax bracket. Without FBT, employers could simply give employees cars, holidays, and other perks instead of salary, and neither party would pay tax on the value.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">The FBT Year</h3>
            <p className="text-gray-300 leading-relaxed">
              The FBT year runs from <strong className="text-white">1 April to 31 March</strong> &mdash; different from the standard Australian financial year (1 July to 30 June). FBT returns are due on <strong className="text-white">21 May</strong> each year (or 25 June if lodged by a tax agent). This offset exists for administrative reasons, giving employers time to calculate benefits provided during the FBT year before the income tax year ends.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Who Pays FBT?</h3>
            <p className="text-gray-300 leading-relaxed">
              FBT is paid by the <strong className="text-white">employer</strong>, not the employee. The employee receives the benefit without paying tax on it directly. However, the employer can (and often does) factor FBT costs into total remuneration packages. FBT is <strong className="text-white">tax-deductible</strong> for the employer &mdash; meaning the FBT paid can be claimed as a business deduction, which partially offsets the cost. The employer can also claim a deduction for the cost of providing the benefit itself.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-400 font-medium mb-2">What Is a &quot;Benefit&quot;?</h4>
                <p className="text-gray-400 text-sm">Any right, privilege, service, or facility provided to an employee (or their associate) that is not salary or wages. This includes the private use of company cars, expense payments, below-market loans, entertainment, and property provided at a discount.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-400 font-medium mb-2">What Is an &quot;Associate&quot;?</h4>
                <p className="text-gray-400 text-sm">An associate of an employee includes their spouse or de facto partner, children, parents, siblings, and any company or trust the employee (or their relatives) control. If a benefit is provided to an employee&apos;s associate, it is still treated as a fringe benefit of the employee.</p>
              </div>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">FBT Is Separate from Income Tax</p>
              <p className="text-gray-400 text-sm">
                A common misconception is that FBT is part of the income tax system. It is not. FBT is a <strong className="text-gray-200">standalone tax with its own legislation</strong> (the Fringe Benefits Tax Assessment Act 1986), its own return, its own lodgement dates, and its own payment deadlines. Employers who provide fringe benefits must register for FBT with the ATO separately from their income tax and <Link href="/glossary/gst" className="text-rose-400 hover:text-rose-300 underline decoration-rose-500/30 hover:decoration-rose-500 transition-colors">GST</Link> registrations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Common Fringe Benefits */}
        <section id="common-fringe-benefits">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common Fringe Benefits</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The ATO categorises fringe benefits into <strong className="text-white">13 distinct types</strong>. Understanding which category a benefit falls into determines how its taxable value is calculated, which gross-up rate applies, and whether any exemptions are available. Here are the most common categories that employers encounter:
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 overflow-hidden mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Benefit Type</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Example</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Typical Gross-Up</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="py-3 px-4 text-white">Car fringe benefits</td>
                      <td className="py-3 px-4 text-gray-300">Company car available for private use</td>
                      <td className="py-3 px-4"><span className="text-rose-400 text-xs font-medium bg-rose-500/10 px-2 py-0.5 rounded-full">Type 1</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Car parking</td>
                      <td className="py-3 px-4 text-gray-300">Employer-provided car park near work</td>
                      <td className="py-3 px-4"><span className="text-rose-400 text-xs font-medium bg-rose-500/10 px-2 py-0.5 rounded-full">Type 2</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Expense payment</td>
                      <td className="py-3 px-4 text-gray-300">Paying employee&apos;s school fees, health insurance</td>
                      <td className="py-3 px-4"><span className="text-rose-400 text-xs font-medium bg-rose-500/10 px-2 py-0.5 rounded-full">Type 1 or 2</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Loan fringe benefits</td>
                      <td className="py-3 px-4 text-gray-300">Interest-free or low-interest loan to employee</td>
                      <td className="py-3 px-4"><span className="text-pink-400 text-xs font-medium bg-pink-500/10 px-2 py-0.5 rounded-full">Type 2</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Entertainment &amp; meals</td>
                      <td className="py-3 px-4 text-gray-300">Client dinners, Christmas parties, event tickets</td>
                      <td className="py-3 px-4"><span className="text-pink-400 text-xs font-medium bg-pink-500/10 px-2 py-0.5 rounded-full">Type 1 or 2</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Housing</td>
                      <td className="py-3 px-4 text-gray-300">Employer-provided accommodation</td>
                      <td className="py-3 px-4"><span className="text-pink-400 text-xs font-medium bg-pink-500/10 px-2 py-0.5 rounded-full">Type 2</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Living away from home</td>
                      <td className="py-3 px-4 text-gray-300">Allowances for employees working away from home</td>
                      <td className="py-3 px-4"><span className="text-pink-400 text-xs font-medium bg-pink-500/10 px-2 py-0.5 rounded-full">Type 2</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Property (goods)</td>
                      <td className="py-3 px-4 text-gray-300">Products provided free or at a discount</td>
                      <td className="py-3 px-4"><span className="text-rose-400 text-xs font-medium bg-rose-500/10 px-2 py-0.5 rounded-full">Type 1</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Airline transport</td>
                      <td className="py-3 px-4 text-gray-300">Discounted or free flights (airline employees)</td>
                      <td className="py-3 px-4"><span className="text-pink-400 text-xs font-medium bg-pink-500/10 px-2 py-0.5 rounded-full">Type 2</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Board</td>
                      <td className="py-3 px-4 text-gray-300">Meals provided on a regular basis</td>
                      <td className="py-3 px-4"><span className="text-pink-400 text-xs font-medium bg-pink-500/10 px-2 py-0.5 rounded-full">Type 2</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Residual benefits</td>
                      <td className="py-3 px-4 text-gray-300">Any benefit that doesn&apos;t fit other categories</td>
                      <td className="py-3 px-4"><span className="text-pink-400 text-xs font-medium bg-pink-500/10 px-2 py-0.5 rounded-full">Type 1 or 2</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-900/40 border-t border-gray-700/30">
                <p className="text-xs text-gray-500">Type 1 gross-up (2.0802) applies when the employer can claim a GST credit on the benefit. Type 2 gross-up (1.8868) applies when no GST credit is available. The gross-up rate determines the pre-tax equivalent value used to calculate FBT.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Car Fringe Benefits &mdash; The Most Common</h3>
            <p className="text-gray-300 leading-relaxed">
              Car fringe benefits are the <strong className="text-white">most frequently encountered FBT category</strong>. A car fringe benefit arises when an employer makes a car available for the <strong className="text-white">private use of an employee</strong> &mdash; including commuting to and from work, which the ATO considers private use. Even if the car sits in the employee&apos;s driveway unused on weekends, a fringe benefit arises because the car was <em>available</em> for private use.
            </p>
            <p className="text-gray-300 leading-relaxed">
              There are two methods to calculate the taxable value of a car fringe benefit: the <strong className="text-white">statutory formula method</strong> (20% of the car&apos;s base value, regardless of kilometres driven) and the <strong className="text-white">operating cost method</strong> (actual private-use percentage of total running costs, requiring a logbook). The statutory formula is simpler but may result in higher FBT for cars with low private use. The operating cost method is more work but can produce significant savings for employees who primarily use the car for business.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Entertainment &mdash; The Grey Area</h3>
            <p className="text-gray-300 leading-relaxed">
              Entertainment is one of the trickiest FBT categories because the rules around what constitutes &quot;entertainment&quot; versus a working meal are nuanced. Generally, <strong className="text-white">food and drink provided in an entertainment context</strong> (restaurant meals, social functions, sporting events, theatre tickets) is a fringe benefit. However, light refreshments provided during work meetings, sustenance for employees working overtime, or meals provided in an employer-operated canteen at no more than cost may not attract FBT.
            </p>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">The 50/50 Split Method</p>
              <p className="text-gray-400 text-sm">
                For entertainment, employers can choose the <strong className="text-gray-200">50/50 split method</strong> instead of tracking actual entertainment expenses. Under this method, the taxable value of meal entertainment is 50% of the total expenditure, and the employer can claim a 50% income tax deduction and 50% of GST credits. This simplifies record keeping significantly for businesses that provide regular client entertainment. Alternatively, the <strong className="text-gray-200">actual method</strong> uses a 12-week register to determine the entertainment proportion.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: FBT and Sole Traders / Freelancers */}
        <section id="fbt-sole-traders-freelancers">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">FBT and Sole Traders / Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Here is the key question most <Link href="/glossary/sole-trader" className="text-rose-400 hover:text-rose-300 underline decoration-rose-500/30 hover:decoration-rose-500 transition-colors">sole traders</Link> and freelancers have: <strong className="text-white">do I need to worry about FBT?</strong> The short answer is: if you have no employees, generally no. FBT only applies when an <strong className="text-white">employer provides benefits to employees</strong>. As a sole trader, you are not your own employee &mdash; you are the business owner. Benefits you provide to yourself are either personal expenses (non-deductible) or business deductions claimed through your tax return.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">When FBT Does NOT Apply to Sole Traders</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Solo Freelancer &mdash; No Employees</p>
                  <p className="text-gray-400 text-sm">If you operate as a sole trader with no employees, FBT does not apply to you. A car you use for business is claimed through the <Link href="/glossary/depreciation" className="text-rose-400 hover:text-rose-300 underline decoration-rose-500/30 hover:decoration-rose-500 transition-colors">depreciation</Link> and running cost deduction method on your individual tax return. Client entertainment is handled through income tax deduction rules (generally non-deductible for sole traders). There is no FBT return to lodge.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Contractors Treated as Independent</p>
                  <p className="text-gray-400 text-sm">If you engage genuine independent contractors (not employees for tax purposes), benefits you provide to them are generally not fringe benefits. The contractor handles their own tax obligations. However, be careful &mdash; if the ATO determines the contractor is actually an employee, retrospective FBT liabilities can apply.</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">When FBT DOES Apply to Sole Traders and Freelancers</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-rose-500/20">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">You Have Employees</p>
                  <p className="text-gray-400 text-sm">The moment you hire an employee (even part-time or casual), any non-cash benefits you provide to them attract FBT. This includes letting them use your business vehicle for personal errands, paying for their gym membership, providing them with a company phone they can use privately, or paying for their parking near the office.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-rose-500/20">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Employee-Director of a <Link href="/glossary/pty-ltd" className="text-rose-400 hover:text-rose-300 underline decoration-rose-500/30 hover:decoration-rose-500 transition-colors">Pty Ltd</Link></p>
                  <p className="text-gray-400 text-sm">If you operate through a company (Pty Ltd) and you are a director who receives a salary, you are an employee of the company for FBT purposes. Any non-cash benefits the company provides to you &mdash; company car, entertainment, expense reimbursements for personal items &mdash; are fringe benefits. This is a common trap for freelancers who incorporate their business.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-rose-500/20">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Benefits to Associates of Employees</p>
                  <p className="text-gray-400 text-sm">If you provide benefits to an employee&apos;s spouse, children, or other associates, these are treated as fringe benefits provided to the employee. For example, paying for an employee&apos;s partner to attend a conference dinner, or providing a gym membership to an employee&apos;s family member, both trigger FBT.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">The Pty Ltd Trap for Freelancers</p>
              <p className="text-gray-400 text-sm">
                Many freelancers who incorporate (set up a <Link href="/glossary/pty-ltd" className="text-rose-400 hover:text-rose-300 underline decoration-rose-500/30 hover:decoration-rose-500 transition-colors">Pty Ltd</Link>) do not realise they have created an FBT obligation. As a sole trader, your business car is simply a tax deduction. As a director-employee of a Pty Ltd, that same car becomes a <strong className="text-gray-200">car fringe benefit taxed at 47%</strong> if it is available for private use. This is one of the hidden costs of incorporating that many accountants fail to flag upfront. Always model the FBT impact before switching from sole trader to company structure.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Calculating FBT */}
        <section id="calculating-fbt">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Calculating FBT</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              FBT is calculated using a <strong className="text-white">gross-up mechanism</strong> that converts the taxable value of the benefit into a pre-tax equivalent. This gross-up ensures FBT is calculated on the amount of gross salary an employee would have needed to earn to purchase the benefit themselves after paying income tax at the top marginal rate.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">The Two Gross-Up Rates</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-12 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">2.0802</span>
                  <h4 className="text-lg font-semibold text-white">Type 1 Gross-Up</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Applies when the employer <strong className="text-gray-200">can claim a GST credit</strong> on the benefit provided. This is the higher gross-up rate because the employer is receiving a GST credit, so the taxable value needs to be grossed up to include the GST component. Most goods and services purchased from GST-registered businesses attract Type 1 treatment.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-12 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">1.8868</span>
                  <h4 className="text-lg font-semibold text-white">Type 2 Gross-Up</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Applies when the employer <strong className="text-gray-200">cannot claim a GST credit</strong> on the benefit. This includes GST-free supplies (like residential rent, interest on loans, or unregistered suppliers), input-taxed supplies, and benefits where no GST was charged. The lower rate reflects the absence of a GST credit.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">The FBT Calculation Formula</h3>
            <p className="text-gray-300 leading-relaxed">
              The basic FBT calculation follows three steps: determine the <strong className="text-white">taxable value</strong> of the benefit, apply the <strong className="text-white">gross-up rate</strong> to get the grossed-up taxable value, then multiply by the <strong className="text-white">FBT rate (47%)</strong>.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8">Worked Example: Car Fringe Benefit (Statutory Formula)</h3>
            <div className="rounded-xl bg-gray-800/50 border border-rose-500/30 p-6 mt-3">
              <p className="text-gray-300 text-sm mb-4">An employer provides a car (base value $50,000 including GST) to an employee. The car was available for private use for the entire FBT year. Using the statutory formula method:</p>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Car base value (cost price)</span>
                  <span className="text-white font-medium">$50,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Statutory fraction (flat rate)</span>
                  <span className="text-white font-medium">20%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Days available / total days</span>
                  <span className="text-white font-medium">365 / 365</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                  <span className="text-rose-400 font-medium">Taxable value ($50,000 x 20%)</span>
                  <span className="text-rose-400 font-bold">$10,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Gross-up rate (Type 1 &mdash; GST credits claimed)</span>
                  <span className="text-white font-medium">2.0802</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                  <span className="text-rose-400 font-medium">Grossed-up taxable value ($10,000 x 2.0802)</span>
                  <span className="text-rose-400 font-bold">$20,802</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">FBT rate</span>
                  <span className="text-white font-medium">47%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-pink-500/10 border border-pink-500/30">
                  <span className="text-pink-400 font-medium">FBT payable ($20,802 x 47%)</span>
                  <span className="text-pink-400 font-bold text-lg">$9,777</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                The employer pays $9,777 in FBT for providing this car. However, the employer can claim the FBT paid as a tax deduction, and the car&apos;s running costs and depreciation are also deductible. The net after-tax cost is lower than the headline FBT figure.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Worked Example: Expense Payment Benefit</h3>
            <div className="rounded-xl bg-gray-800/50 border border-rose-500/30 p-6 mt-3">
              <p className="text-gray-300 text-sm mb-4">An employer pays $5,000 for an employee&apos;s private health insurance (a GST-free supply, so no GST credit available):</p>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Health insurance paid by employer</span>
                  <span className="text-white font-medium">$5,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Employee contribution</span>
                  <span className="text-white font-medium">$0</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                  <span className="text-rose-400 font-medium">Taxable value</span>
                  <span className="text-rose-400 font-bold">$5,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-900/50">
                  <span className="text-gray-300">Gross-up rate (Type 2 &mdash; no GST credit)</span>
                  <span className="text-white font-medium">1.8868</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                  <span className="text-rose-400 font-medium">Grossed-up taxable value ($5,000 x 1.8868)</span>
                  <span className="text-rose-400 font-bold">$9,434</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-pink-500/10 border border-pink-500/30">
                  <span className="text-pink-400 font-medium">FBT payable ($9,434 x 47%)</span>
                  <span className="text-pink-400 font-bold text-lg">$4,434</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                The employer pays $5,000 for the health insurance plus $4,434 in FBT &mdash; a total cost of $9,434. However, both amounts are tax-deductible for the employer. Compare this to paying the employee an extra $5,000 in salary: the employee would pay up to $2,350 in income tax (at 47%), receiving only $2,650 after tax. FBT-inclusive packaging may or may not be more efficient depending on the employee&apos;s marginal tax rate.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Statutory Formula vs Operating Cost (Cars)</h3>
            <p className="text-gray-300 leading-relaxed">
              For car fringe benefits, the choice between the <strong className="text-white">statutory formula</strong> and <strong className="text-white">operating cost method</strong> can make a significant difference to FBT liability. The statutory formula uses a flat 20% of the car&apos;s base value regardless of how much private use occurs. The operating cost method calculates FBT based on the actual private-use percentage, determined by a 12-week logbook. If the car is used primarily for business (e.g., 80% business use), the operating cost method typically produces a much lower taxable value. For cars with high private use, the statutory formula may be simpler and comparable.
            </p>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">Employee Contributions Reduce FBT</p>
              <p className="text-gray-400 text-sm">
                If an employee makes a contribution towards the cost of a fringe benefit (known as an <strong className="text-gray-200">employee contribution</strong>), the taxable value of the benefit is reduced by that amount. For car fringe benefits, the employee can contribute from their after-tax salary to reduce the taxable value &mdash; sometimes to zero. This is a common salary packaging strategy: the employee pays a portion, which reduces the FBT cost below what additional salary taxation would have been.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FBT Exemptions and Concessions */}
        <section id="fbt-exemptions-concessions">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">FBT Exemptions and Concessions</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Not all fringe benefits attract FBT. The legislation provides several important <strong className="text-white">exemptions</strong> (no FBT at all) and <strong className="text-white">concessions</strong> (reduced FBT). Understanding these is critical for employers who want to provide benefits cost-effectively. Smart use of exempt benefits is one of the most tax-efficient ways to reward employees.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Exempt Benefits</h3>
            <div className="space-y-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-sm font-bold">1</span>
                  <h4 className="text-lg font-semibold text-white">Work-Related Electronic Devices</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  An employer can provide <strong className="text-gray-200">one of each type of work-related portable electronic device</strong> per FBT year without attracting FBT, provided the device is used primarily for work. This covers one laptop or notebook computer, one tablet, one mobile phone, one GPS navigation device, and similar items. The device must be <strong className="text-gray-200">primarily for the employee&apos;s employment duties</strong>. This is one of the most commonly used FBT exemptions &mdash; providing an employee with a laptop and phone for work is entirely FBT-free.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-sm font-bold">2</span>
                  <h4 className="text-lg font-semibold text-white">Minor Benefits Under $300</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A benefit valued at <strong className="text-gray-200">less than $300 that is provided infrequently and irregularly</strong> is exempt from FBT. This covers things like occasional gift vouchers, birthday presents, small Christmas gifts, and one-off meal vouchers. The $300 threshold applies per benefit, not per employee per year &mdash; so you could provide multiple minor benefits to the same employee, provided each individual benefit is under $300 and the provision is not regular or systematic. If benefits become regular (e.g., monthly gift cards), they lose the exemption.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-sm font-bold">3</span>
                  <h4 className="text-lg font-semibold text-white">Emergency Assistance</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Benefits provided to employees in connection with <strong className="text-gray-200">emergency or disaster situations</strong> are generally exempt. This includes temporary accommodation, emergency supplies, counselling services, and financial assistance provided during natural disasters, pandemics, or other emergencies. The exemption was widely used during bushfire and flood events.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-rose-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-sm font-bold">4</span>
                  <h4 className="text-lg font-semibold text-white">Remote Area Benefits</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Certain benefits provided to employees working in <strong className="text-gray-200">remote or isolated areas</strong> are exempt or concessionally taxed. This includes remote area housing, holiday transport (one return trip per year to the nearest capital city), and remote area residential fuel. The definition of &quot;remote&quot; is based on ATO zone classifications, not just distance from a city.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Reportable Fringe Benefits</h3>
            <p className="text-gray-300 leading-relaxed">
              If the total taxable value of fringe benefits provided to an individual employee exceeds <strong className="text-white">$2,000 in an FBT year</strong>, the grossed-up amount must be reported on the employee&apos;s income statement as <strong className="text-white">reportable fringe benefits (RFBs)</strong>. While the employee does not pay <Link href="/glossary/income-tax" className="text-rose-400 hover:text-rose-300 underline decoration-rose-500/30 hover:decoration-rose-500 transition-colors">income tax</Link> on RFBs, the grossed-up amount is used to calculate:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-400 font-medium mb-2">Medicare Levy Surcharge</h4>
                <p className="text-gray-400 text-sm">RFBs are added to taxable income when determining if an employee exceeds the Medicare levy surcharge thresholds ($93,000 single, $186,000 family). This can push employees into paying the surcharge if they don&apos;t have private health insurance.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-400 font-medium mb-2">HELP/HECS Repayments</h4>
                <p className="text-gray-400 text-sm">RFBs are included in repayment income for Higher Education Loan Program (HELP) purposes. This can increase the compulsory repayment rate or push an employee over the repayment threshold.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-400 font-medium mb-2">Child Support</h4>
                <p className="text-gray-400 text-sm">RFBs are included in the adjusted taxable income calculation for child support assessment purposes. Higher RFBs can increase child support obligations.</p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-rose-400 font-medium mb-2">Government Benefits</h4>
                <p className="text-gray-400 text-sm">RFBs affect eligibility for various income-tested government benefits and tax offsets, including the private health insurance rebate tier and family tax benefit calculations.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8">Small Business Concessions</h3>
            <p className="text-gray-300 leading-relaxed">
              Small businesses (aggregated turnover under $10 million) benefit from some FBT concessions. Car parking fringe benefits are <strong className="text-white">exempt for small business employers</strong> &mdash; a significant saving for businesses that provide parking. Small businesses can also use the simplified operating cost method for car fringe benefits without the strict logbook requirements that apply to larger employers. Additionally, the <strong className="text-white">work-related device exemption</strong> is particularly valuable for small businesses that provide tools of trade to employees.
            </p>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">Car Parking Exemption for Small Business</p>
              <p className="text-gray-400 text-sm">
                If your business has an aggregated turnover of <strong className="text-gray-200">less than $10 million</strong>, car parking benefits you provide to employees are exempt from FBT. This is a major concession &mdash; car parking FBT can be substantial in CBD locations where commercial parking rates exceed $10,820 (the 2024-25 threshold). The exemption applies regardless of the value of the parking provided or the number of employees. This is one of the simplest FBT savings available to small businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FBT and InvoiceFlow */}
        <section id="fbt-and-invoiceflow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">FBT and InvoiceFlow</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              For freelancers and small business owners who employ staff, FBT compliance starts with <strong className="text-white">accurate expense tracking and categorisation</strong>. InvoiceFlow helps you maintain the records your accountant needs to prepare your FBT return and identify opportunities to reduce your FBT liability.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Expense Categorisation for FBT</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  InvoiceFlow lets you <strong className="text-gray-200">tag expenses as employee-related benefits</strong>, separating them from standard business deductions. When you pay for something that could be a fringe benefit &mdash; a team dinner, an employee&apos;s professional development course, or a staff gift &mdash; you can categorise it properly. At FBT return time, your accountant can pull a clean report of all potential fringe benefits rather than sifting through every expense line.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21l3.75-3.75" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Separate Business vs Personal Benefits</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  One of the biggest FBT compliance challenges is <strong className="text-gray-200">distinguishing business expenses from personal benefits</strong>. A laptop used 100% for work is FBT-exempt; the same laptop used partly for personal purposes may not be. InvoiceFlow helps you track the business-use proportion of assets and expenses, creating a clear audit trail that demonstrates which items are genuine business tools and which involve a personal benefit component.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">FBT Return Records</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The ATO requires employers to maintain <strong className="text-gray-200">detailed records for each fringe benefit provided</strong>, including the nature of the benefit, who received it, the taxable value, any employee contributions, and whether GST credits were claimed. InvoiceFlow stores receipts, invoices, and expense details in one place, making it straightforward to compile the information needed for your FBT return. Good records also protect you in an ATO audit.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Tax-Time Reporting for Your Accountant</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  At the end of the FBT year (31 March), InvoiceFlow can generate <strong className="text-gray-200">categorised expense reports</strong> that your accountant can use to prepare your FBT return. Rather than sending your accountant a box of receipts and hoping they catch every potential fringe benefit, you provide organised, tagged data that clearly separates employee benefits from business operating costs. This reduces accounting fees and minimises the risk of missed FBT obligations &mdash; or missed exemptions.
                </p>
              </div>

              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Identify Exempt vs Taxable Benefits</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  By properly categorising expenses in InvoiceFlow, you can <strong className="text-gray-200">flag which benefits are likely exempt</strong> (work-related devices, minor benefits under $300, small business car parking) versus which will attract FBT. This gives you visibility into your potential FBT liability throughout the year rather than getting a surprise at return time. It also helps you make informed decisions about how to structure employee benefits for maximum tax efficiency.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5 mt-6">
              <p className="text-rose-400 font-medium mb-2">Track It From Day One</p>
              <p className="text-gray-400 text-sm">
                FBT record-keeping failures are a top trigger for ATO audits. <strong className="text-gray-200">Start categorising employee-related expenses in InvoiceFlow from the moment you hire your first employee.</strong> Do not wait until the FBT return is due. Set up expense categories for entertainment, employee devices, car costs, and other potential fringe benefits. The 5 minutes spent categorising each expense saves hours of reconstruction later &mdash; and could save thousands in overlooked exemptions. Use <Link href="/tools" className="text-rose-400 hover:text-rose-300 underline decoration-rose-500/30 hover:decoration-rose-500 transition-colors">InvoiceFlow&apos;s free tools</Link> to start organising your finances today.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free tools to help you estimate tax, calculate rates, and manage FBT obligations.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-rose-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-rose-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-rose-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Use tool
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Guides</h2>
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, EOFY, and superannuation for freelancers.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-rose-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-rose-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-rose-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read guide
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {(faqSchema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { text: string } }>).map((faq, i) => (
            <details key={i} className="group rounded-xl bg-gray-800/40 border border-gray-700/40">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-rose-400 transition-colors">
                {faq.name}
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <EmailCapture />
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay FBT Compliant. Track Employee Benefits with Confidence.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers and small business owners categorise employee expenses, identify FBT exemptions, and maintain audit-ready records &mdash; so you never miss a concession or an obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/tax-estimator">
              <Button variant="secondary">Estimate Your Tax</Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Free plan includes 5 invoices per month. No credit card required.
          </p>
        </div>
      </section>
    </div>
  );
}
