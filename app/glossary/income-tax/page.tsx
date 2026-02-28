import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Income Tax for Freelancers: Complete Australian Guide — InvoiceFlow',
  description:
    'How much income tax does a freelancer pay in Australia? Learn 2025-26 tax brackets, Medicare levy, PAYG instalments, deductions for sole traders, and tax planning tips. ATO-accurate guide for self-employed Australians.',
  keywords: [
    'income tax freelancer australia',
    'how much tax does a freelancer pay',
    'sole trader tax rates australia',
    'income tax rates 2025-26',
    'freelancer tax obligations australia',
    'self employed tax australia',
    'how to calculate income tax sole trader',
    'tax brackets australia freelancer',
  ],
  alternates: { canonical: '/glossary/income-tax' },
  openGraph: {
    title: 'Income Tax for Freelancers: Complete Australian Guide — InvoiceFlow',
    description:
      'Everything Australian freelancers need to know about income tax: 2025-26 tax brackets, Medicare levy, PAYG instalments, deductions, and tax planning strategies for sole traders.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/income-tax',
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
    { '@type': 'ListItem', position: 3, name: 'Income Tax', item: `${BASE_URL}/glossary/income-tax` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much tax does a freelancer pay in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australian freelancers pay income tax at the same individual tax rates as everyone else. The first $18,200 is tax-free. Income from $18,201 to $45,000 is taxed at 16 cents per dollar. From $45,001 to $135,000, it is taxed at 30 cents per dollar. From $135,001 to $190,000, it is taxed at 37 cents per dollar. Income above $190,000 is taxed at 45 cents per dollar. On top of this, you pay a 2% Medicare levy on your total taxable income. Your taxable income is your total business income minus allowable deductions. For example, a freelancer earning $95,000 with $10,000 in deductions would have a taxable income of $85,000 and pay approximately $14,288 in income tax plus $1,700 in Medicare levy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do freelancers pay more tax than employees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freelancers pay the same tax rates as employees, but the mechanics are different. Employees have tax withheld from each payslip by their employer (PAYG withholding), so they rarely face a large tax bill. Freelancers receive their full income without any tax withheld, meaning they must set aside money for tax themselves and may need to make quarterly PAYG instalment payments. However, freelancers can often claim more deductions than employees — home office costs, equipment, vehicle expenses, insurance, software, and professional development. With good deduction management, freelancers can actually end up with a lower effective tax rate than employees on the same gross income.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tax deductions can freelancers claim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freelancers can claim a wide range of tax deductions including: home office expenses (67 cents per hour fixed rate or actual costs), vehicle and travel costs (85 cents per kilometre or logbook method), equipment depreciation and the $20,000 instant asset write-off, professional development and training, business insurance premiums, phone and internet costs (business percentage), software subscriptions, accounting and legal fees, marketing and advertising costs, and professional memberships. The key rule is the expense must be directly related to earning your freelance income. You must keep receipts and records for at least five years.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do freelancers need to pay tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freelancers lodge their individual tax return annually, due by 31 October if self-lodging or up to 15 May the following year if using a registered tax agent. However, if your income tax plus Medicare levy is expected to exceed $1,000 for the year, the ATO will generally enter you into the PAYG instalment system, requiring quarterly payments. The quarterly deadlines are: Q1 (July-September) due 28 October, Q2 (October-December) due 28 February, Q3 (January-March) due 28 April, and Q4 (April-June) due 28 July. If you are registered for GST, you also lodge a Business Activity Statement (BAS) on the same quarterly schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an accountant as a freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You are not legally required to use an accountant, but it is highly recommended once your freelance income exceeds $50,000-$60,000 per year. A good accountant will typically save you more in tax than their fee costs, identify deductions you might miss, ensure your BAS and tax return are accurate, advise on business structure (sole trader vs company), help with PAYG instalment management, and keep you compliant with ATO requirements. Their fee is also tax-deductible. If you are just starting out with lower income, you can use the ATO\'s free myTax tool to lodge your own return and consider engaging an accountant as your income grows.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-income-tax', label: '1. What Is Income Tax for Freelancers?' },
  { id: 'tax-brackets-2025-26', label: '2. Australian Tax Brackets 2025-26' },
  { id: 'medicare-levy', label: '3. Medicare Levy and Surcharge' },
  { id: 'tax-deductions', label: '4. Tax Deductions for Freelancers' },
  { id: 'payg-instalments-bas', label: '5. PAYG Instalments and BAS' },
  { id: 'tax-planning-tips', label: '6. Tax Planning Tips for Freelancers' },
];

const relatedTools = [
  {
    href: '/tools/tax-estimator',
    name: 'Tax Estimator',
    description: 'Estimate your income tax, Medicare levy, and take-home pay as an Australian sole trader.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18v-.008zm-12 0h.008v.008H6v-.008z" />
      </svg>
    ),
  },
  {
    href: '/tools/freelance-tax-estimator',
    name: 'Freelance Tax Estimator',
    description: 'Purpose-built tax calculator for freelancers — includes deductions, super, and Medicare levy.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    href: '/tools/tax-deduction-finder',
    name: 'Tax Deduction Finder',
    description: 'Discover every tax deduction you can claim as an Australian freelancer or sole trader.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: '/tools/payg-calculator',
    name: 'PAYG Calculator',
    description: 'Calculate your quarterly PAYG instalment amounts and stay ahead of ATO deadlines.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

const relatedGuides = [
  {
    href: '/guides/tax-guide-freelancers',
    name: 'Tax Guide for Freelancers',
    description: 'The complete guide to income tax, deductions, BAS, and everything else for Australian sole traders.',
  },
  {
    href: '/guides/eofy-guide',
    name: 'EOFY Guide for Freelancers',
    description: 'End of financial year checklist, lodgement deadlines, and last-minute tax planning tips.',
  },
  {
    href: '/guides/setting-freelance-rates',
    name: 'Setting Your Freelance Rates',
    description: 'How to calculate profitable rates that cover tax, super, and all your business costs.',
  },
];

export default function IncomeTaxGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">Income Tax</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Income Tax{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
              for Australian Freelancers
            </span>
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            As a freelancer or sole trader, income tax is your single largest expense &mdash; and no one withholds it for you. This guide covers the 2025-26 tax brackets, Medicare levy, deductions, PAYG instalments, and practical tax planning strategies so you can keep more of what you earn.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">In a Nutshell</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">$18.2K</span>
              <div>
                <p className="text-white font-medium text-sm">Tax-Free Threshold</p>
                <p className="text-gray-400 text-sm">First $18,200 of income is completely tax-free for Australian residents</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">30%</span>
              <div>
                <p className="text-white font-medium text-sm">Marginal Rate $45K&ndash;$135K</p>
                <p className="text-gray-400 text-sm">The bracket most freelancers fall into &mdash; 30 cents per dollar over $45,000</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">2%</span>
              <div>
                <p className="text-white font-medium text-sm">Medicare Levy</p>
                <p className="text-gray-400 text-sm">Flat 2% on your total taxable income, on top of income tax</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">67c/hr</span>
              <div>
                <p className="text-white font-medium text-sm">Home Office Deduction</p>
                <p className="text-gray-400 text-sm">Fixed rate method for claiming home office running expenses</p>
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
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 text-emerald-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

        {/* Section 1: What Is Income Tax for Freelancers? */}
        <section id="what-is-income-tax">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Is Income Tax for Freelancers?</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Income tax is a <strong className="text-white">tax levied by the Australian Government on your taxable income</strong> &mdash; the money you earn from all sources minus any allowable deductions. Every Australian who earns above the tax-free threshold of $18,200 per year is required to pay income tax, and freelancers and sole traders are no exception.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The fundamental difference between freelancers and employees when it comes to income tax is <strong className="text-white">who is responsible for managing and paying it</strong>. When you work as an employee, your employer withholds tax from every payslip through the PAYG withholding system and sends it directly to the ATO. By the time you receive your pay, the tax has already been handled. You lodge a tax return at the end of the year, and usually receive a small refund or owe a small amount.
            </p>
            <p className="text-gray-300 leading-relaxed">
              As a freelancer, <strong className="text-white">no one withholds tax for you</strong>. Your clients pay your invoices in full, and it is entirely your responsibility to set aside money for tax, calculate your liability, and pay the ATO. If you fail to do this, you can face penalties, interest charges, and a devastating tax bill at the end of the financial year.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Your <strong className="text-white">assessable income</strong> as a freelancer is the total of all business income you receive during the financial year (1 July to 30 June). This includes all invoiced amounts, cash payments, contra or barter arrangements, and any other income connected to your freelance activities. Your <strong className="text-white">taxable income</strong> is your assessable income minus your allowable deductions &mdash; things like home office costs, equipment, software subscriptions, travel, and insurance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  Employee
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Tax withheld from each payslip automatically</li>
                  <li>Employer handles PAYG withholding</li>
                  <li>Limited deductions (mostly work-related expenses)</li>
                  <li>Small refund or balance at tax time</li>
                  <li>Super paid by employer at 12% SG rate</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-5">
                <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  Freelancer / Sole Trader
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>No tax withheld &mdash; you receive gross income</li>
                  <li>You must set aside tax yourself</li>
                  <li>Wide range of business deductions available</li>
                  <li>Potentially large tax bill if not planned for</li>
                  <li>Super is voluntary (but highly recommended)</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The Golden Rule</p>
              <p className="text-gray-400 text-sm">
                As a freelancer, set aside at least <strong className="text-gray-200">25-30% of every payment you receive</strong> into a separate &quot;tax savings&quot; account. Do not touch this money. It belongs to the ATO. The exact amount depends on your income level and deductions, but 25-30% is a safe starting point for most freelancers earning between $60,000 and $150,000.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Australian Tax Brackets 2025-26 */}
        <section id="tax-brackets-2025-26">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Australian Tax Brackets 2025-26</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Australia uses a <strong className="text-white">progressive tax system</strong>, meaning you do not pay a flat rate on all your income. Instead, different portions of your income are taxed at different rates. The more you earn, the higher the rate on the additional income &mdash; but the lower brackets still apply to the first portion. These are the rates for Australian residents for tax purposes (non-residents have different rates and no tax-free threshold).
            </p>

            {/* Tax Brackets Table */}
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Taxable Income</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Tax on This Income</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$0 &ndash; $18,200</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">Nil</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$18,201 &ndash; $45,000</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">16c for each $1 over $18,200</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$45,001 &ndash; $135,000</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">$4,288 plus 30c for each $1 over $45,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$135,001 &ndash; $190,000</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">$31,288 plus 37c for each $1 over $135,000</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">$190,001+</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">$51,638 plus 45c for each $1 over $190,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed mt-6">
              These rates <strong className="text-white">do not include the Medicare levy</strong> (an additional 2% on your total taxable income). They also do not include the Medicare levy surcharge (1-1.5% if you do not have private health insurance and earn above certain thresholds). See Section 3 for full details on Medicare.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Understanding Progressive Tax</h3>
            <p className="text-gray-300 leading-relaxed">
              A common misconception is that earning more pushes <em>all</em> your income into a higher bracket. This is not how it works. Only the income <strong className="text-white">within each bracket</strong> is taxed at that bracket&apos;s rate. If you earn $95,000, you do not pay 30% on the entire $95,000. You pay 0% on the first $18,200, 16% on the next $26,800, and 30% on the remaining $50,000.
            </p>

            {/* Worked Example */}
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/10 to-green-900/10 p-6 mt-6">
              <h4 className="text-white font-semibold mb-4">Worked Example: Freelancer Earning $95,000</h4>
              <p className="text-gray-400 text-sm mb-4">
                Let&apos;s calculate the income tax for a freelancer with a <strong className="text-gray-200">taxable income of $95,000</strong> (after deductions) for the 2025-26 financial year:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-emerald-400 font-bold text-xs">1</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">$0 &ndash; $18,200:</span> Nil &mdash; <span className="text-emerald-400 font-medium">$0</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-emerald-400 font-bold text-xs">2</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">$18,201 &ndash; $45,000:</span> ($45,000 &minus; $18,200) x 16% = $26,800 x 0.16 = <span className="text-emerald-400 font-medium">$4,288</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center text-emerald-400 font-bold text-xs">3</span>
                  <div className="text-gray-400">
                    <span className="text-gray-300">$45,001 &ndash; $95,000:</span> ($95,000 &minus; $45,000) x 30% = $50,000 x 0.30 = <span className="text-emerald-400 font-medium">$15,000</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-500/20">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Income Tax</p>
                    <p className="text-white font-bold text-lg">$19,288</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">+ Medicare Levy (2%)</p>
                    <p className="text-white font-bold text-lg">$1,900</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Total Tax</p>
                    <p className="text-emerald-400 font-bold text-lg">$21,188</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  <strong className="text-white">Effective tax rate: 22.3%</strong> &mdash; even though the marginal rate on the last dollar earned is 30%. This leaves $73,812 after tax (before super contributions). If you were not planning for this, that $21,188 bill at tax time could be a serious shock.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Marginal Rate vs Effective Rate</p>
              <p className="text-gray-400 text-sm">
                Your <strong className="text-gray-200">marginal tax rate</strong> is the rate on your last dollar of income &mdash; the highest bracket you fall into. Your <strong className="text-gray-200">effective tax rate</strong> is your total tax divided by your total income. Your effective rate is always lower than your marginal rate because of the progressive bracket system. For $95,000 taxable income, your marginal rate is 30% but your effective rate is only 22.3%.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Medicare Levy and Surcharge */}
        <section id="medicare-levy">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Medicare Levy and Surcharge</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              In addition to income tax, most Australian taxpayers pay the <strong className="text-white">Medicare levy</strong> &mdash; a flat 2% charge on your total taxable income that funds Australia&apos;s public healthcare system. This is not optional and applies regardless of whether you use the public health system. For freelancers, the Medicare levy is calculated on your taxable income (after deductions) and is included in your tax assessment.
            </p>

            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Medicare Levy: 2%</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The Medicare levy is calculated as a flat <strong className="text-gray-200">2% of your taxable income</strong>. For a freelancer with $85,000 taxable income, this adds <strong className="text-gray-200">$1,700</strong> to your tax bill. It is assessed on your entire taxable income, not just the income above a threshold.
              </p>
              <div className="rounded-lg bg-gray-900/50 p-4 border border-gray-700/30">
                <p className="text-emerald-400 font-medium mb-2">Low-Income Thresholds (2025-26)</p>
                <p className="text-gray-400 text-sm">
                  You may qualify for a <strong className="text-gray-200">Medicare levy reduction</strong> if your taxable income is below certain thresholds. For singles, the levy is reduced if your taxable income is below <strong className="text-gray-200">$26,000</strong>, and you pay no Medicare levy at all if your income is <strong className="text-gray-200">$24,276 or less</strong>. For families, the threshold is $43,846 plus $4,027 for each dependent child or student.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">ADDITIONAL COST</span>
                <h3 className="text-lg font-semibold text-white">Medicare Levy Surcharge (MLS)</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  The Medicare levy surcharge is a <strong className="text-gray-200">separate, additional charge</strong> that applies if you do <strong className="text-gray-200">not have private hospital cover</strong> and your income exceeds certain thresholds. This is the government&apos;s way of encouraging higher earners to take out private health insurance and reduce pressure on the public system.
                </p>
                <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800/80">
                        <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Income (Singles)</th>
                        <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Income (Families)</th>
                        <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">MLS Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700/50">
                      <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-3 text-gray-300 text-sm">$93,000 or less</td>
                        <td className="px-6 py-3 text-gray-300 text-sm">$186,000 or less</td>
                        <td className="px-6 py-3 text-emerald-400 font-medium text-sm">0.0%</td>
                      </tr>
                      <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-3 text-gray-300 text-sm">$93,001 &ndash; $108,000</td>
                        <td className="px-6 py-3 text-gray-300 text-sm">$186,001 &ndash; $216,000</td>
                        <td className="px-6 py-3 text-red-400 font-medium text-sm">1.0%</td>
                      </tr>
                      <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-3 text-gray-300 text-sm">$108,001 &ndash; $144,000</td>
                        <td className="px-6 py-3 text-gray-300 text-sm">$216,001 &ndash; $288,000</td>
                        <td className="px-6 py-3 text-red-400 font-medium text-sm">1.25%</td>
                      </tr>
                      <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-3 text-gray-300 text-sm">$144,001+</td>
                        <td className="px-6 py-3 text-gray-300 text-sm">$288,001+</td>
                        <td className="px-6 py-3 text-red-400 font-medium text-sm">1.5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3">
                  For a freelancer earning $120,000 without private hospital cover, the MLS would be <strong className="text-gray-200">$1,500 per year</strong> (1.25% x $120,000). At that point, a basic hospital policy often costs less than the surcharge &mdash; so it makes financial sense to get private cover once your income exceeds $93,000 as a single.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Income for MLS Purposes</p>
              <p className="text-gray-400 text-sm">
                The income used for the Medicare levy surcharge test is <strong className="text-gray-200">not the same as your taxable income</strong>. It includes your taxable income <em>plus</em> reportable fringe benefits, total net investment losses (negative gearing), and reportable super contributions. For most freelancers without complex investment structures, your taxable income will be close to your MLS income.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Tax Deductions for Freelancers */}
        <section id="tax-deductions">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">4</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Deductions for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Tax deductions are your most powerful tool for reducing your tax bill. A deduction <strong className="text-white">reduces your taxable income</strong>, which means you pay less tax. If you are in the 30% marginal tax bracket, every $1,000 in deductions saves you $300 in tax (plus $20 in Medicare levy). The key rule is that the expense must be <strong className="text-white">directly related to earning your freelance income</strong>.
            </p>

            {/* Home Office */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">HOME OFFICE</span>
                <h3 className="text-lg font-semibold text-white">Home Office Expenses</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  Most freelancers work from home at least part of the time. There are two methods for claiming home office expenses:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div className="rounded-lg bg-gray-900/50 p-4 border border-emerald-500/20">
                    <p className="text-emerald-400 font-medium mb-2">Fixed Rate Method: 67c per hour</p>
                    <p className="text-gray-400 text-sm">
                      Claim <strong className="text-gray-200">67 cents per hour</strong> you work from home. This covers electricity, gas, phone, internet, stationery, and computer consumables. You must keep a record of your hours worked from home (a timesheet, diary, or roster). You can still claim separate deductions for items <strong className="text-gray-200">not</strong> covered by this rate, such as depreciation on office furniture and equipment.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-4 border border-green-500/20">
                    <p className="text-green-400 font-medium mb-2">Actual Cost Method</p>
                    <p className="text-gray-400 text-sm">
                      Calculate and claim the <strong className="text-gray-200">actual costs</strong> you incur. This requires more record-keeping &mdash; you need bills, receipts, and a reasonable method for apportioning costs between business and personal use. This method can yield higher deductions if you have a dedicated home office and high running costs, but requires more documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">VEHICLE</span>
                <h3 className="text-lg font-semibold text-white">Vehicle and Travel Expenses</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  If you use your car for business purposes (visiting clients, attending meetings, picking up supplies), you can claim vehicle expenses using one of two methods:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div className="rounded-lg bg-gray-900/50 p-4 border border-gray-700/30">
                    <p className="text-emerald-400 font-medium mb-2">Cents per Kilometre: 85c/km</p>
                    <p className="text-gray-400 text-sm">
                      Claim <strong className="text-gray-200">85 cents per business kilometre</strong>, capped at 5,000 km per year (maximum $4,250 deduction). Simple record-keeping &mdash; just keep a log of your business trips. This method covers all vehicle costs including fuel, depreciation, registration, and insurance.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-4 border border-gray-700/30">
                    <p className="text-green-400 font-medium mb-2">Logbook Method</p>
                    <p className="text-gray-400 text-sm">
                      Maintain a <strong className="text-gray-200">logbook for 12 consecutive weeks</strong> to establish your business-use percentage, then claim that percentage of all actual vehicle costs (fuel, insurance, rego, depreciation, repairs, finance interest). No 5,000 km cap. Must keep a valid logbook for each 5-year period.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Equipment & Depreciation */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">EQUIPMENT</span>
                <h3 className="text-lg font-semibold text-white">Equipment and Depreciation</h3>
              </div>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  Business equipment &mdash; laptops, monitors, cameras, desks, chairs &mdash; can be claimed as a tax deduction. The <strong className="text-gray-200">$20,000 instant asset write-off</strong> for the 2025-26 financial year means most freelancer equipment can be deducted in full in the year of purchase. Items costing less than $300 that are used predominantly for business can be deducted immediately without any depreciation paperwork. Items costing $20,000 or more must be depreciated over their effective life using either the diminishing value or prime cost method.
                </p>
              </div>
            </div>

            {/* Other Deductions Grid */}
            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Other Common Deductions</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-3">Professional Development</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Courses, workshops, and conferences</li>
                  <li>Books, journals, and online subscriptions</li>
                  <li>Industry certifications and qualifications</li>
                  <li>Must be related to your current work</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-3">Insurance</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Professional indemnity insurance</li>
                  <li>Public liability insurance</li>
                  <li>Income protection insurance (premiums)</li>
                  <li>Business contents and equipment insurance</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-3">Phone, Internet &amp; Software</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Business percentage of phone and internet bills</li>
                  <li>Software subscriptions (Adobe, Figma, Slack, etc.)</li>
                  <li>Cloud storage and hosting costs</li>
                  <li>Domain name registrations</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-emerald-400 font-medium mb-3">Professional Fees</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>Accountant and tax agent fees</li>
                  <li>Legal fees (related to your business)</li>
                  <li>Industry memberships and registrations</li>
                  <li>Marketing and advertising costs</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <p className="text-red-400 font-medium mb-2">Substantiation Rules</p>
              <p className="text-gray-400 text-sm">
                The ATO requires you to <strong className="text-gray-200">substantiate (prove) every deduction you claim</strong>. This means keeping receipts, invoices, bank statements, and diary entries for a minimum of <strong className="text-gray-200">five years</strong> from the date you lodge your tax return. Digital copies are acceptable &mdash; photograph your receipts and store them in a cloud folder or accounting software. Without substantiation, the ATO can disallow your deductions in an audit and apply penalties.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: PAYG Instalments and BAS */}
        <section id="payg-instalments-bas">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">5</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">PAYG Instalments and BAS</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Once you have lodged your first tax return as a freelancer and owe more than $1,000 in tax, the ATO will generally enter you into the <strong className="text-white">PAYG instalment system</strong>. This is the government&apos;s way of collecting tax throughout the year rather than waiting for a single annual payment. Think of it as the freelancer equivalent of employer withholding &mdash; you pay tax in quarterly chunks instead of one lump sum.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">What Are PAYG Instalments?</h3>
            <p className="text-gray-300 leading-relaxed">
              PAYG (Pay As You Go) instalments are <strong className="text-white">quarterly prepayments of your expected income tax</strong>. The ATO calculates an instalment amount or rate based on your most recent tax return, and you pay this each quarter. At the end of the financial year, your total PAYG instalments are credited against your final tax liability. If you have overpaid, you get a refund. If you have underpaid, you owe the difference.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Two Calculation Methods</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3">Rate Method</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The ATO gives you a <strong className="text-gray-200">percentage rate</strong> (e.g., 12%). Each quarter, you multiply your actual business income for that quarter by the rate to calculate your instalment. This method adjusts naturally to your income &mdash; if you have a quiet quarter, you pay less. If you have a strong quarter, you pay more.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-green-500/20 p-5">
                <h4 className="text-green-400 font-semibold mb-3">Amount Method</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The ATO calculates a <strong className="text-gray-200">fixed dollar amount</strong> for each quarter based on your most recent tax return. You pay the same amount each quarter regardless of your actual income that quarter. Simpler, but can lead to overpaying if your income drops or underpaying if it increases significantly.
                </p>
              </div>
            </div>

            {/* Quarterly Schedule */}
            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Quarterly Schedule</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Quarter</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Period</th>
                    <th className="text-left text-sm font-medium text-emerald-400 px-6 py-4">Due Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Q1</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">1 July &ndash; 30 September</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">28 October</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Q2</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">1 October &ndash; 31 December</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">28 February</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Q3</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">1 January &ndash; 31 March</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">28 April</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Q4</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">1 April &ndash; 30 June</td>
                    <td className="px-6 py-4 text-emerald-400 font-medium">28 July</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">BAS Obligations for GST-Registered Freelancers</h3>
            <p className="text-gray-300 leading-relaxed">
              If you are registered for GST (required once your annual turnover reaches $75,000, voluntary below that), you must lodge a <strong className="text-white">Business Activity Statement (BAS)</strong> each quarter on the same schedule as your PAYG instalments. Your BAS reports your GST collected on sales, GST paid on business purchases, and your PAYG instalment amount. This is a single form that covers both obligations. You can lodge your BAS through myGov, your accounting software (Xero, MYOB, etc.), or your registered BAS agent.
            </p>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">Varying Your PAYG Instalments</p>
              <p className="text-gray-400 text-sm">
                If your income has changed significantly from the year the ATO used to calculate your instalment, you can <strong className="text-gray-200">vary your PAYG instalment</strong> on your BAS. This is common for freelancers whose income fluctuates. You can increase or decrease the amount &mdash; but be careful about reducing it too much. If your actual tax liability at year-end is more than 15% higher than your total varied instalments, the ATO may charge the <strong className="text-gray-200">General Interest Charge (GIC)</strong> on the shortfall.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Tax Planning Tips for Freelancers */}
        <section id="tax-planning-tips">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm font-bold">6</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tax Planning Tips for Freelancers</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Smart tax planning is not about aggressive schemes or bending rules &mdash; it is about <strong className="text-white">structuring your finances to legally minimise your tax bill</strong> while staying fully compliant. These strategies are used by accountants every day and are entirely legitimate for Australian freelancers.
            </p>

            {/* Tip 1: Income Smoothing */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-sm">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Income Smoothing</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Because of progressive tax rates, earning $200,000 in one year and $60,000 the next costs more in total tax than earning $130,000 in each year. If you have control over when you invoice, consider <strong className="text-gray-200">timing large invoices to spread income more evenly across financial years</strong>. If you are approaching 30 June and have already had a high-income year, consider delaying an invoice to early July. Conversely, if it has been a lean year, bring income forward.
              </p>
            </div>

            {/* Tip 2: Timing Deductions */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-sm">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Timing Your Deductions</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The flip side of income timing is <strong className="text-gray-200">accelerating deductions into a high-income year</strong>. If you know you will need a new laptop, buy it before 30 June rather than waiting until July &mdash; the instant asset write-off gives you the full deduction in the current year. The same applies to insurance premiums, professional memberships, and course fees. Bringing forward deductions reduces your taxable income in the year where you are in a higher bracket.
              </p>
            </div>

            {/* Tip 3: Voluntary Super Contributions */}
            <div className="rounded-xl bg-gray-800/50 border border-emerald-500/30 p-6 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-sm">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Voluntary Super Contributions</h3>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Powerful</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Making concessional (before-tax) super contributions is one of the <strong className="text-gray-200">most effective tax reduction strategies</strong> available. You can contribute up to <strong className="text-gray-200">$30,000 per year</strong> and claim a full tax deduction. The contribution is then taxed at just 15% inside your super fund instead of your marginal rate. For a freelancer in the 30% bracket, a $20,000 super contribution saves $3,000 in tax immediately (plus the contribution grows in a lower-tax environment). If your super balance is under $500,000, you can also carry forward unused caps from the previous five years for an even larger deduction.
              </p>
              <div className="mt-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-3">
                <p className="text-emerald-400 text-xs font-medium">
                  Remember: you must lodge a &quot;Notice of intent to claim a tax deduction&quot; form with your super fund before lodging your tax return. Without this, you cannot claim the deduction.
                </p>
              </div>
            </div>

            {/* Tip 4: Prepaying Expenses Before EOFY */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-sm">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Prepaying Expenses Before EOFY</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Small businesses (aggregated turnover under $10 million) can claim a <strong className="text-gray-200">deduction for expenses prepaid up to 12 months in advance</strong>, provided the service period ends before the end of the next financial year. This means you can prepay your annual insurance premium, software subscriptions, or professional membership before 30 June and claim the entire amount as a deduction in the current financial year. This is particularly useful in a high-income year when you want to maximise deductions.
              </p>
            </div>

            {/* Tip 5: Keep Meticulous Records */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-sm">5</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Keep Meticulous Records</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The number one reason freelancers miss out on deductions is <strong className="text-gray-200">poor record-keeping</strong>. Lost receipts, forgotten expenses, and disorganised files mean money left on the table. Use accounting software (Xero, QuickBooks, MYOB) to track income and expenses in real time. Photograph every receipt the day you get it. Separate your business and personal bank accounts. Reconcile your accounts monthly, not just at tax time. Good records also protect you in the event of an ATO audit.
              </p>
            </div>

            {/* Tip 6: When to Get an Accountant */}
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-sm">6</span>
                </div>
                <h3 className="text-lg font-semibold text-white">When to Get an Accountant</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                If your freelance income exceeds <strong className="text-gray-200">$50,000-$60,000 per year</strong>, a good accountant will almost certainly save you more than their fee. They can identify deductions you are missing, advise on business structure (whether moving from sole trader to a company makes sense), manage your PAYG and BAS lodgements, help with cash flow planning, and represent you in the event of an ATO audit. Their fee is also fully tax-deductible as a business expense. Look for an accountant who specialises in small businesses or freelancers &mdash; they will understand your specific situation better than a generalist.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-6">
              <p className="text-emerald-400 font-medium mb-2">The 30% Rule of Thumb</p>
              <p className="text-gray-400 text-sm">
                A good rule of thumb: set aside <strong className="text-gray-200">30% of every payment you receive</strong> into a dedicated tax savings account. This covers income tax, Medicare levy, and leaves a small buffer. Adjust up or down based on your actual tax rate &mdash; if your effective rate is consistently lower, you can reduce it to 25%. If you are a high earner, you may need 35%. The important thing is to <strong className="text-gray-200">do it on every payment</strong>, not just at the end of the quarter.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free calculators to help you estimate and manage your income tax.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4 text-emerald-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
        <p className="text-gray-400 text-center mb-8">In-depth guides on tax, deductions, and freelancing in Australia.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">{guide.name}</h3>
              <p className="text-sm text-gray-400">{guide.description}</p>
              <div className="mt-4 text-emerald-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-emerald-400 transition-colors">
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
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Guessing. Start Planning.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow helps Australian freelancers track income, estimate tax in real time, and find every deduction they are entitled to. Set your rates with confidence and never be surprised by a tax bill again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button>Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/tax-estimator">
              <Button variant="secondary">Try the Tax Estimator</Button>
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
