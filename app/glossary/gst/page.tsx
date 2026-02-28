import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'GST (Goods and Services Tax): Complete Guide for Australian Freelancers — InvoiceFlow',
  description:
    'What is GST in Australia? Learn the 10% Goods and Services Tax rules, $75K registration threshold, BAS reporting, tax invoices, and GST credits. Updated guide for freelancers and sole traders.',
  keywords: [
    'what is GST australia',
    'GST for freelancers',
    'GST registration threshold',
    'goods and services tax australia',
    'GST 10 percent',
    'GST on invoices',
    'BAS reporting GST',
    'GST credits australia',
    'GST free items',
    'freelancer GST obligations',
    'sole trader GST',
    'voluntary GST registration',
  ],
  alternates: { canonical: '/glossary/gst' },
  openGraph: {
    title: 'GST (Goods and Services Tax): Complete Guide for Australian Freelancers — InvoiceFlow',
    description:
      'Everything freelancers need to know about Australia\'s 10% GST: registration threshold, tax invoices, BAS lodgement, credits, and common mistakes to avoid.',
    url: 'https://invoiceflow-teal.vercel.app/glossary/gst',
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
    { '@type': 'ListItem', position: 3, name: 'GST', item: `${BASE_URL}/glossary/gst` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When do I need to register for GST as an Australian freelancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must register for GST within 21 days of your GST turnover reaching $75,000 in the current financial year, or when you reasonably expect it to reach $75,000. If you provide taxi or ride-sharing services, you must register regardless of your turnover. You can also register voluntarily below the threshold to claim GST credits on business purchases.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I charge GST on my freelance invoices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are GST-registered, you add 10% to your price on all taxable sales. For example, a $1,000 service becomes $1,100 including GST. Your invoice must be a valid tax invoice showing the GST amount separately or stating that the total includes GST. For sales of $82.50 or more (including GST), you must provide a tax invoice if the buyer requests one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim GST credits on my business expenses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you are registered for GST you can claim input tax credits on GST included in business purchases such as equipment, software, office supplies, professional development, and business travel. You need a valid tax invoice from the supplier. You cannot claim GST credits on personal expenses, input-taxed supplies, or purchases from non-registered suppliers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the GST registration threshold in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The GST registration threshold is $75,000 per year for businesses and sole traders, and $150,000 per year for non-profit organisations. This is based on your GST turnover, which is your gross business income minus any GST you have already charged. Once you hit the threshold you must register within 21 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I lodge BAS monthly or quarterly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most freelancers and sole traders lodge BAS quarterly. Quarterly BAS is due on the 28th of the month after each quarter ends: Q1 (Jul-Sep) due 28 October, Q2 (Oct-Dec) due 28 February, Q3 (Jan-Mar) due 28 April, Q4 (Apr-Jun) due 28 July. Monthly lodgement is required if your GST turnover exceeds $20 million, but you can opt in to monthly voluntarily if you prefer more frequent refunds.',
      },
    },
  ],
};

const tocSections = [
  { id: 'what-is-gst', title: '1. What Is GST?' },
  { id: 'who-needs-to-register', title: '2. Who Needs to Register?' },
  { id: 'gst-on-invoices', title: '3. How GST Works on Invoices' },
  { id: 'gst-credits', title: '4. GST Credits (Input Tax Credits)' },
  { id: 'bas-reporting', title: '5. BAS Reporting' },
  { id: 'gst-free-items', title: '6. GST-Free Items' },
  { id: 'common-mistakes', title: '7. Common GST Mistakes Freelancers Make' },
];

export default function GSTGlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-white">GST</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Glossary &mdash; Tax &amp; Compliance
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            GST{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              (Goods and Services Tax)
            </span>
          </h1>

          {/* One-line summary */}
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Australia&apos;s 10% broad-based consumption tax on most goods and services. If you&apos;re a freelancer earning over $75,000 per year, you must register, charge GST on your invoices, and lodge quarterly BAS returns with the ATO.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Updated for 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Freelancer-Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* In a Nutshell */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-900/20 to-purple-900/20 p-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </span>
            In a Nutshell
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-sm font-bold">10%</span>
              <div>
                <p className="text-white font-medium text-sm">Tax Rate</p>
                <p className="text-gray-400 text-sm">Applied to most goods and services sold in Australia</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold">$75K</span>
              <div>
                <p className="text-white font-medium text-sm">Registration Threshold</p>
                <p className="text-gray-400 text-sm">Must register once annual turnover exceeds $75,000</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 text-sm font-bold">QTR</span>
              <div>
                <p className="text-white font-medium text-sm">Quarterly BAS</p>
                <p className="text-gray-400 text-sm">Lodge and pay every quarter, due 28th of the following month</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">1/11</span>
              <div>
                <p className="text-white font-medium text-sm">GST Fraction</p>
                <p className="text-gray-400 text-sm">Registered businesses add 1/11th of the GST-inclusive price</p>
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
            {tocSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors text-sm py-1"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <article className="max-w-4xl mx-auto px-4 pb-16">

        {/* Section 1: What Is GST? */}
        <section id="what-is-gst" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 text-violet-400 text-sm font-bold">1</span>
            What Is GST?
          </h2>
          <div className="prose-custom space-y-4 text-gray-300 leading-relaxed">
            <p>
              The Goods and Services Tax (GST) is a <strong className="text-white">10% broad-based consumption tax</strong> applied to most goods, services, and other items sold or consumed in Australia. It was introduced on 1 July 2000 as part of a major overhaul of Australia&apos;s tax system and is administered by the <strong className="text-white">Australian Taxation Office (ATO)</strong>.
            </p>
            <p>
              Unlike income tax, which is paid on what you earn, GST is paid on what you spend. As a freelancer or sole trader, you act as a collection agent for the government: you charge 10% on top of your fees, collect it from your clients, and then remit it to the ATO through your Business Activity Statement (BAS).
            </p>
            <p>
              The key thing to understand is that <strong className="text-white">GST is not your money</strong>. Even though it arrives in your bank account alongside your payment, you are holding it in trust for the ATO. When you lodge your quarterly BAS, you pay the difference between the GST you collected (on sales) and the GST you paid (on business purchases). If you paid more GST than you collected, you receive a refund.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <p className="text-sm text-gray-400">
                <strong className="text-violet-400">Example:</strong> You invoice a client $1,100 (including $100 GST). During the same quarter, you buy a $550 laptop (including $50 GST). You owe the ATO $100 &minus; $50 = <strong className="text-white">$50 net GST</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Who Needs to Register? */}
        <section id="who-needs-to-register" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 text-violet-400 text-sm font-bold">2</span>
            Who Needs to Register?
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              GST registration is <strong className="text-white">mandatory</strong> if any of the following apply to you:
            </p>
            <ul className="space-y-3 ml-1">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Your <strong className="text-white">GST turnover is $75,000 or more</strong> in the current financial year (or you reasonably expect it to be)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>You are a <strong className="text-white">non-profit organisation with turnover of $150,000 or more</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>You provide <strong className="text-white">taxi or ride-sharing services</strong> (mandatory regardless of turnover)</span>
              </li>
            </ul>
            <p>
              Once your turnover hits the threshold, you have <strong className="text-white">21 days to register</strong>. Missing this deadline can result in penalties from the ATO, plus you will owe GST on sales made from the date you should have registered, not from when you actually did.
            </p>
            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h3 className="text-white font-semibold mb-3">Voluntary Registration Below $75K</h3>
              <p className="text-sm text-gray-400 mb-3">
                If your turnover is below $75,000, registration is optional. But there are strategic reasons to register voluntarily:
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 font-bold">+</span>
                  <span>You can <strong className="text-gray-200">claim GST credits</strong> on business purchases (equipment, software, supplies)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 font-bold">+</span>
                  <span>Your invoices look <strong className="text-gray-200">more professional</strong> to larger clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 font-bold">+</span>
                  <span>GST-registered clients <strong className="text-gray-200">prefer registered suppliers</strong> because they can claim the GST back</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&minus;</span>
                  <span>You must charge GST on <strong className="text-gray-200">all taxable sales</strong> and lodge BAS every quarter, even with no income</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&minus;</span>
                  <span>If your clients are <strong className="text-gray-200">consumers (not businesses)</strong>, GST makes your prices 10% higher with no benefit to them</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: How GST Works on Invoices */}
        <section id="gst-on-invoices" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 text-violet-400 text-sm font-bold">3</span>
            How GST Works on Invoices
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              When you are registered for GST, you must issue <strong className="text-white">tax invoices</strong> for all taxable sales. A tax invoice is different from a regular invoice &mdash; it must meet specific ATO requirements so your clients can claim the GST as a credit on their own BAS.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">GST-Inclusive vs GST-Exclusive Pricing</h3>
            <p>
              You can quote your prices either way, but you must be clear about which approach you are using:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-2">GST-Exclusive</h4>
                <p className="text-sm text-gray-400 mb-3">You quote your fee, then add 10% GST on top.</p>
                <div className="text-sm font-mono space-y-1">
                  <p className="text-gray-400">Service fee: <span className="text-white">$1,000.00</span></p>
                  <p className="text-gray-400">GST (10%): <span className="text-violet-400">$100.00</span></p>
                  <p className="text-gray-400 border-t border-gray-700 pt-1">Total: <span className="text-white font-bold">$1,100.00</span></p>
                </div>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-2">GST-Inclusive</h4>
                <p className="text-sm text-gray-400 mb-3">You quote one price that already includes GST.</p>
                <div className="text-sm font-mono space-y-1">
                  <p className="text-gray-400">Total (inc GST): <span className="text-white">$1,100.00</span></p>
                  <p className="text-gray-400">GST component: <span className="text-violet-400">$100.00</span></p>
                  <p className="text-gray-400 border-t border-gray-700 pt-1">Your fee: <span className="text-white font-bold">$1,000.00</span></p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">The 1/11th Rule</h3>
            <p>
              To extract the GST component from a GST-inclusive price, divide by 11. This is because GST is 10% of the base price, which equals 1/11th of the total price. For example, if you charge $1,100 including GST, the GST component is $1,100 &divide; 11 = <strong className="text-white">$100</strong>.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Tax Invoice Requirements</h3>
            <p>
              For sales of <strong className="text-white">$82.50 or more (including GST)</strong>, you must provide a tax invoice if the buyer requests one. A valid tax invoice must include:
            </p>
            <ul className="space-y-2 ml-1 mt-3">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>The words <strong className="text-white">&quot;Tax Invoice&quot;</strong> prominently displayed</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Your <strong className="text-white">name or business name</strong> and <strong className="text-white">ABN</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>The <strong className="text-white">date of issue</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>A <strong className="text-white">description</strong> of the goods or services</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>The <strong className="text-white">GST amount</strong> for each line item, or a statement that the total includes GST</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>The <strong className="text-white">total price</strong> including GST</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              For invoices over $1,000 (including GST), you must also include the buyer&apos;s name, ABN, and address, plus the quantity of each item.
            </p>
          </div>
        </section>

        {/* Section 4: GST Credits */}
        <section id="gst-credits" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 text-violet-400 text-sm font-bold">4</span>
            GST Credits (Input Tax Credits)
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              One of the biggest advantages of being GST-registered is the ability to claim <strong className="text-white">input tax credits</strong> (also called GST credits). These let you recover the GST you pay on business purchases, effectively reducing your costs by up to 10%.
            </p>
            <p>
              When you lodge your BAS, you subtract the GST you paid on business expenses from the GST you collected on sales. If you paid more in GST credits than you collected, you receive a refund from the ATO.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-emerald-500/20 p-5">
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  You CAN Claim GST On
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Computer and office equipment</li>
                  <li>Software subscriptions (Adobe, Figma, etc.)</li>
                  <li>Office supplies and stationery</li>
                  <li>Professional development and courses</li>
                  <li>Business travel and accommodation</li>
                  <li>Accounting and legal fees</li>
                  <li>Internet and phone (business portion)</li>
                  <li>Co-working space or office rent</li>
                  <li>Marketing and advertising costs</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-red-500/20 p-5">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  You CANNOT Claim GST On
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Personal expenses (groceries, clothing)</li>
                  <li>Purchases from non-GST-registered sellers</li>
                  <li>Input-taxed items (residential rent, some financial services)</li>
                  <li>Items not related to your business</li>
                  <li>Motor vehicle purchases over the car limit ($68,108 for 2025-26)</li>
                  <li>Entertainment expenses (meals with clients in some cases)</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-6 mt-6">
              <h4 className="text-white font-semibold mb-2">Record-Keeping Requirements</h4>
              <p className="text-sm text-gray-400">
                To claim GST credits, you must hold a <strong className="text-gray-200">valid tax invoice</strong> from the supplier for purchases over $82.50 (including GST). Keep all tax invoices and receipts for <strong className="text-gray-200">5 years</strong> from the date you lodge your BAS. Digital copies are acceptable as long as they are legible and complete. InvoiceFlow can help you store and organise these records automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: BAS Reporting */}
        <section id="bas-reporting" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 text-violet-400 text-sm font-bold">5</span>
            BAS Reporting
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Once you are registered for GST, you must lodge a <strong className="text-white">Business Activity Statement (BAS)</strong> with the ATO every quarter (or monthly if your turnover exceeds $20 million or you choose to). Your BAS reports how much GST you collected, how much you paid, and the difference you owe or are owed.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-3">What You Report</h3>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-3">
                <span className="text-violet-400 font-bold flex-shrink-0">G1</span>
                <span><strong className="text-white">Total sales</strong> for the period (including GST-free sales)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 font-bold flex-shrink-0">1A</span>
                <span><strong className="text-white">GST collected</strong> on your sales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 font-bold flex-shrink-0">1B</span>
                <span><strong className="text-white">GST paid</strong> on your business purchases (input tax credits)</span>
              </li>
            </ul>
            <p className="mt-4">
              The difference between 1A and 1B is your <strong className="text-white">net GST amount</strong>. If 1A is greater, you owe the ATO. If 1B is greater, you get a refund.
            </p>

            <h3 className="text-lg font-semibold text-white mt-8 mb-4">Quarterly BAS Due Dates</h3>
            <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Quarter</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Period</th>
                    <th className="text-left text-sm font-medium text-gray-300 px-6 py-3">Due Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium">Q1</td>
                    <td className="px-6 py-3 text-gray-400">1 Jul &ndash; 30 Sep</td>
                    <td className="px-6 py-3 text-violet-400 font-medium">28 October</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium">Q2</td>
                    <td className="px-6 py-3 text-gray-400">1 Oct &ndash; 31 Dec</td>
                    <td className="px-6 py-3 text-violet-400 font-medium">28 February</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium">Q3</td>
                    <td className="px-6 py-3 text-gray-400">1 Jan &ndash; 31 Mar</td>
                    <td className="px-6 py-3 text-violet-400 font-medium">28 April</td>
                  </tr>
                  <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-3 text-white font-medium">Q4</td>
                    <td className="px-6 py-3 text-gray-400">1 Apr &ndash; 30 Jun</td>
                    <td className="px-6 py-3 text-violet-400 font-medium">28 July</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-5 mt-6">
              <h4 className="text-red-400 font-semibold mb-2">Late Lodgement Penalties</h4>
              <p className="text-sm text-gray-400">
                If you lodge your BAS late, the ATO can impose a <strong className="text-gray-200">Failure to Lodge (FTL) penalty</strong> of one penalty unit ($313 for 2025-26) for each 28-day period your BAS is overdue, up to a maximum of five penalty units ($1,565). You will also be charged interest (the General Interest Charge) on any unpaid GST amount from the due date. Set a calendar reminder or use InvoiceFlow&apos;s BAS tracking to never miss a deadline.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: GST-Free Items */}
        <section id="gst-free-items" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 text-violet-400 text-sm font-bold">6</span>
            GST-Free Items
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Not everything attracts GST. Certain goods and services are classified as <strong className="text-white">GST-free</strong>, meaning you do not charge GST on them even if you are registered. You still report these sales on your BAS, but no GST is payable.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-3">Exports (Section 38-190)</h4>
                <p className="text-sm text-gray-400">
                  Services and goods exported to overseas clients are GST-free. This is particularly relevant for freelancers who work with international clients. You must be able to demonstrate the supply is connected with an overseas entity.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-3">Health Services</h4>
                <p className="text-sm text-gray-400">
                  Most medical and health services are GST-free, including GP consultations, hospital treatment, ambulance services, and some allied health services. Cosmetic procedures are generally not GST-free.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-3">Education</h4>
                <p className="text-sm text-gray-400">
                  Formal education courses (university, TAFE, school) are GST-free. Some professional development and training courses may also qualify, but short recreational courses generally do not.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-3">Basic Food</h4>
                <p className="text-sm text-gray-400">
                  Most basic food items (bread, milk, fruit, vegetables, meat) are GST-free. However, prepared food, restaurant meals, takeaway, snack foods, confectionery, and soft drinks all attract GST.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              <strong className="text-violet-400">Freelancer tip:</strong> If you provide services to overseas clients, your exports are GST-free under Section 38-190 of the GST Act. You still include these on your BAS at G1 (total sales) but not at 1A (GST on sales). You can still claim GST credits on the business purchases you make to deliver those services.
            </p>
          </div>
        </section>

        {/* Section 7: Common GST Mistakes */}
        <section id="common-mistakes" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 text-violet-400 text-sm font-bold">7</span>
            Common GST Mistakes Freelancers Make
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              GST compliance is straightforward once you understand the rules, but these are the mistakes we see Australian freelancers make most often:
            </p>
            <div className="space-y-4 mt-6">
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <span className="text-red-400">1.</span> Not Registering on Time
                </h4>
                <p className="text-sm text-gray-400">
                  Many freelancers do not track their rolling turnover and miss the $75,000 threshold. You have 21 days to register once you exceed it. If you are late, you may owe backdated GST on all sales from the date you should have registered, plus potential penalties. Track your monthly revenue and set an alert at $60,000 so you have time to prepare.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <span className="text-red-400">2.</span> Mixing Personal and Business Expenses
                </h4>
                <p className="text-sm text-gray-400">
                  Claiming GST credits on personal purchases is one of the fastest ways to attract an ATO audit. Only claim credits on expenses that are genuinely for your business. If an expense is partly personal and partly business (like a phone bill), only claim the business portion. Keep a log or use a percentage split you can justify if audited.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <span className="text-red-400">3.</span> Not Claiming GST Credits
                </h4>
                <p className="text-sm text-gray-400">
                  The flip side: many freelancers forget to claim credits they are entitled to. Every business purchase that includes GST is claimable &mdash; software subscriptions, equipment, professional development, even your accountant&apos;s fees. Failing to claim means you are effectively paying 10% more than you need to. Review your bank statements quarterly before lodging your BAS.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <span className="text-red-400">4.</span> Wrong Invoice Format
                </h4>
                <p className="text-sm text-gray-400">
                  Issuing a regular invoice instead of a tax invoice means your client cannot claim the GST credit. Your invoice must include &quot;Tax Invoice&quot; at the top, your ABN, the date, a description, the GST amount, and the total including GST. For invoices over $1,000, you also need the buyer&apos;s details. Use InvoiceFlow to generate ATO-compliant tax invoices automatically.
                </p>
              </div>
              <div className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-5">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <span className="text-red-400">5.</span> Spending the GST You Collected
                </h4>
                <p className="text-sm text-gray-400">
                  Remember, the GST portion of your invoices is not your income. If you receive $11,000 for a $10,000 project, $1,000 of that belongs to the ATO. Many freelancers spend it and then scramble to find the money when BAS is due. Open a separate bank account and transfer 1/11th of every payment into it immediately.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* Related Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Tools</h2>
        <p className="text-gray-400 text-center mb-8">Free calculators and generators to help you manage GST</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/tools/gst-calculator"
            className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-violet-500/50 hover:bg-gray-800/80 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-1 group-hover:text-violet-400 transition-colors">GST Calculator</h3>
            <p className="text-sm text-gray-400">Add or remove GST from any amount instantly.</p>
          </Link>
          <Link
            href="/tools/bas-preparation-checklist"
            className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800/80 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-1 group-hover:text-purple-400 transition-colors">BAS Preparation Checklist</h3>
            <p className="text-sm text-gray-400">Step-by-step checklist to lodge your BAS on time.</p>
          </Link>
          <Link
            href="/tools/tax-estimator"
            className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-fuchsia-500/50 hover:bg-gray-800/80 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-1 group-hover:text-fuchsia-400 transition-colors">Tax Estimator</h3>
            <p className="text-sm text-gray-400">Estimate your income tax and GST obligations.</p>
          </Link>
          <Link
            href="/tools/invoice-generator"
            className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-violet-500/50 hover:bg-gray-800/80 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-1 group-hover:text-violet-400 transition-colors">Invoice Generator</h3>
            <p className="text-sm text-gray-400">Create ATO-compliant tax invoices with GST in seconds.</p>
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Related Guides</h2>
        <p className="text-gray-400 text-center mb-8">Deep-dive guides on GST, tax, and invoicing for freelancers</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            href="/guides/gst-for-freelancers"
            className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-violet-500/40 transition-all duration-300"
          >
            <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">GST for Freelancers</h3>
            <p className="text-sm text-gray-400">The complete guide to GST registration, BAS, tax invoices, and credits.</p>
            <span className="mt-3 text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Read guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
          <Link
            href="/guides/tax-guide-freelancers"
            className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300"
          >
            <h3 className="text-white font-medium mb-2 group-hover:text-purple-400 transition-colors">Tax Guide for Freelancers</h3>
            <p className="text-sm text-gray-400">Income tax, deductions, PAYG, and everything else you need to know.</p>
            <span className="mt-3 text-purple-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Read guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
          <Link
            href="/guides/invoicing-101"
            className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-fuchsia-500/40 transition-all duration-300"
          >
            <h3 className="text-white font-medium mb-2 group-hover:text-fuchsia-400 transition-colors">Invoicing 101</h3>
            <p className="text-sm text-gray-400">How to create professional invoices, get paid faster, and stay compliant.</p>
            <span className="mt-3 text-fuchsia-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Read guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {(faqSchema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }>).map((faq, i) => (
            <details key={i} className="group rounded-xl bg-gray-800/40 border border-gray-700/40">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-violet-400 transition-colors">
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
        <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-900/20 to-purple-900/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            GST Doesn&apos;t Have to Be Complicated
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            InvoiceFlow handles GST calculations, tax invoice formatting, and BAS-ready reporting automatically. Create your first ATO-compliant invoice in under 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg">Start Free &mdash; No Card Required</Button>
            </Link>
            <Link href="/tools/gst-calculator">
              <Button variant="secondary" size="lg">Try the GST Calculator</Button>
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
