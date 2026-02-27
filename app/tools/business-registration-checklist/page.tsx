import type { Metadata } from 'next';
import Link from 'next/link';
import BusinessRegistrationChecklist from './BusinessRegistrationChecklist';
import RelatedTools from '../components/RelatedTools';
import EmailCapture from '../components/EmailCapture';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import FAQSchema from '../components/FAQSchema';

const title =
  'Freelance Business Registration Checklist Australia | Free Sole Trader Setup Guide — InvoiceFlow';
const description =
  'Free business registration checklist for Australian freelancers and sole traders. Personalised step-by-step guide covering ABN, TFN, GST, insurance, super, and business setup — customised to your industry, structure, and revenue.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'freelance business setup checklist australia',
    'how to start freelancing australia checklist',
    'abn registration guide sole trader',
    'freelance registration requirements australia',
    'sole trader setup checklist',
    'start freelancing australia step by step',
    'business registration checklist freelancer',
    'what do i need to start freelancing australia',
    'freelance business requirements australia',
    'sole trader registration australia guide',
  ],
  openGraph: {
    title: 'Freelance Business Registration Checklist — Free Tool | InvoiceFlow',
    description:
      'Personalised business registration checklist for Australian freelancers. ABN, GST, insurance, super, and setup — customised to your industry and structure. Free — no signup required.',
    url: 'https://www.invoiceflow.au/tools/business-registration-checklist',
    siteName: 'InvoiceFlow',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Business Registration Checklist — Free Tool | InvoiceFlow',
    description:
      'Personalised business registration checklist for Australian freelancers. Free — no signup required.',
  },
  alternates: {
    canonical: 'https://www.invoiceflow.au/tools/business-registration-checklist',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Freelance Business Registration Checklist',
  description:
    'Personalised business registration checklist for Australian freelancers and sole traders. Covers ABN registration, TFN, GST, insurance, superannuation, business bank accounts, and essential setup — customised by industry, business structure, state, and revenue.',
  url: 'https://www.invoiceflow.au/tools/business-registration-checklist',
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

const faqs = [
  {
    question: "Is this tool free to use?",
    answer: "Yes, this tool is completely free with no account needed. Enter your details and get instant analysis."
  },
  {
    question: "How current is the data used?",
    answer: "This tool uses the latest available Australian business data and ATO 2025-26 rates. Industry benchmarks are based on current market research."
  },
  {
    question: "Can I export or save my results?",
    answer: "You can copy results to your clipboard or print the page directly from your browser. For ongoing tracking and analytics, InvoiceFlow offers a free plan."
  }
];

export default function BusinessRegistrationChecklistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQSchema faqs={faqs} />
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-teal-400 text-sm font-medium">100% Free</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white heading-font mb-4">
              Business Registration{' '}
              <span className="gradient-text">Checklist</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Everything you need to register and set up your freelance business in Australia.
              Select your business type, industry, and state to get a personalised checklist
              covering ABN, GST, insurance, super, and more.
            </p>
          </div>

          {/* Checklist Tool */}
          <BusinessRegistrationChecklist />

          {/* SEO Content Sections */}
          <section className="mt-16 space-y-12">
            {/* Section 1: How to Start Freelancing in Australia */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                How to Start Freelancing in Australia
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Starting a freelance business in Australia is straightforward, but there are
                  specific legal and administrative steps you need to complete before you can
                  legally invoice clients and operate as a business. Most freelancers trade as
                  sole traders — the simplest and cheapest structure — but understanding your
                  options is important because the structure you choose affects your tax
                  obligations, liability exposure, and administrative burden.
                </p>
                <div className="space-y-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">Step 1</span>
                      Choose Your Business Structure
                    </h4>
                    <p className="text-sm">
                      Most freelancers start as a sole trader — it&apos;s free to set up, has
                      minimal compliance requirements, and your income is taxed at individual
                      rates. Partnerships suit two or more people working together. Companies
                      (Pty Ltd) offer liability protection but cost more to establish and maintain.
                      Trusts are complex and typically only worth considering once you&apos;re
                      earning well above $100K and need income distribution strategies.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">Step 2</span>
                      Register Your ABN
                    </h4>
                    <p className="text-sm">
                      An Australian Business Number (ABN) is essential. Without one, clients must
                      withhold 47% of your payment under PAYG withholding rules. ABN registration
                      is free and takes about 10 minutes through the Australian Business Register
                      (abr.gov.au). You&apos;ll need your TFN and details about your business
                      activities.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">Step 3</span>
                      Set Up Your Financial Infrastructure
                    </h4>
                    <p className="text-sm">
                      Open a separate business bank account (even sole traders should do this —
                      it makes tax time dramatically easier), choose an invoicing and accounting
                      tool, and set up a system for tracking income and expenses from day one.
                      The ATO requires you to keep records for five years, so establish good
                      habits early.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">Step 4</span>
                      Get Protected
                    </h4>
                    <p className="text-sm">
                      Depending on your industry, you may need professional indemnity insurance
                      (essential for consultants, developers, and anyone giving advice), public
                      liability insurance (essential for trades and anyone working on-site), and
                      income protection insurance. Don&apos;t skip this step — one client dispute
                      without insurance can wipe out years of earnings.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">Timeline</p>
                  <p className="text-sm">
                    Most freelancers can complete the entire registration process in one to two
                    days. ABN registration is instant online. Business name registration takes
                    one to two business days. Insurance quotes come back within 24 hours. The
                    biggest time investment is choosing your structure and setting up your
                    financial systems — which is why this checklist exists.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: ABN, TFN, and Business Name */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                ABN, TFN, and Business Name — What You Actually Need
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  There&apos;s a lot of confusion about what registrations are mandatory versus
                  optional when starting a freelance business. Here&apos;s the definitive
                  breakdown for Australian freelancers:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">ABN</span>
                      Mandatory for Invoicing
                    </h4>
                    <p className="text-sm">
                      An ABN is not legally required to operate a business, but it&apos;s
                      effectively mandatory. Without one, any business that pays you must
                      withhold 47% of the payment and send it to the ATO under the &ldquo;no
                      ABN withholding&rdquo; rules. Registration is free at abr.gov.au and
                      typically approved instantly. You&apos;ll include your ABN on every
                      invoice, contract, and business document.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">TFN</span>
                      You Already Have One
                    </h4>
                    <p className="text-sm">
                      Your Tax File Number (TFN) is personal, not business-specific. If
                      you&apos;ve ever been employed in Australia, you already have one. You
                      don&apos;t need a new TFN to start freelancing — your existing TFN is
                      used when you register your ABN and when you lodge your individual tax
                      return. Companies get a separate TFN, but sole traders and partnerships
                      use the individual&apos;s TFN.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-blue-400 text-sm font-bold">Name</span>
                      Only If Not Using Your Own
                    </h4>
                    <p className="text-sm">
                      If you trade under your own legal name (e.g., &ldquo;Jane Smith&rdquo;),
                      you do not need to register a business name. If you want to trade under a
                      different name (e.g., &ldquo;Smith Digital Studio&rdquo;), you must
                      register it with ASIC through the Australian Business Register. Business
                      name registration costs $39 for one year or $92 for three years (2024-25
                      rates). The name must be unique and not misleading.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-blue-400 text-sm font-bold">Domain</span>
                      Secure Your Online Presence
                    </h4>
                    <p className="text-sm">
                      While not a legal requirement, registering a domain name that matches
                      your business name is strongly recommended. A .com.au domain requires a
                      valid ABN or ACN and must be closely related to your business name. Secure
                      your domain early — even before you build a website — to prevent someone
                      else from taking it. A professional email (you@yourbusiness.com.au) builds
                      trust with clients.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Registration</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Required?</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Cost</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">ABN</td>
                        <td className="py-3 px-4">Effectively mandatory</td>
                        <td className="py-3 px-4">Free</td>
                        <td className="py-3 px-4">10 minutes (instant approval)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">TFN</td>
                        <td className="py-3 px-4">Already have from employment</td>
                        <td className="py-3 px-4">Free</td>
                        <td className="py-3 px-4">N/A</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Business Name</td>
                        <td className="py-3 px-4">Only if not using own name</td>
                        <td className="py-3 px-4">$39/yr or $92/3yr</td>
                        <td className="py-3 px-4">1-2 business days</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white font-medium">Domain Name</td>
                        <td className="py-3 px-4">Recommended</td>
                        <td className="py-3 px-4">$10-30/yr</td>
                        <td className="py-3 px-4">Instant</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 3: GST Registration */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                GST Registration — When You Need It
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Goods and Services Tax (GST) registration is one of the most misunderstood
                  aspects of freelancing in Australia. Many new freelancers either register too
                  early (creating unnecessary compliance work) or too late (resulting in
                  backdated obligations). Here&apos;s what you need to know:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">$75K</span>
                      The Mandatory Threshold
                    </h4>
                    <p className="text-sm">
                      You must register for GST once your annual turnover (gross income, not
                      profit) reaches or is projected to reach $75,000. &ldquo;Projected&rdquo;
                      means if you&apos;re on track to hit $75K based on your current run rate,
                      you should register now — don&apos;t wait until you actually cross the
                      threshold. The ATO can backdate GST obligations if they determine you
                      should have registered earlier.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">10%</span>
                      What GST Means in Practice
                    </h4>
                    <p className="text-sm">
                      Once registered, you charge 10% GST on top of your fees and collect it on
                      behalf of the ATO. You also claim GST credits on business purchases. The
                      difference between GST collected and GST paid is what you remit to the ATO
                      via your Business Activity Statement (BAS). Most freelancers lodge BAS
                      quarterly, though some choose monthly or annually.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-blue-400 text-sm font-bold">Pro</span>
                      Voluntary Registration Benefits
                    </h4>
                    <p className="text-sm">
                      Even below $75K, you can voluntarily register for GST. Benefits include:
                      claiming GST credits on business expenses (equipment, software, home office),
                      appearing more established to B2B clients (who can claim your GST back
                      anyway), and avoiding the disruption of registering mid-year when you cross
                      the threshold. If most of your clients are GST-registered businesses,
                      voluntary registration often makes sense.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-blue-400 text-sm font-bold">Con</span>
                      Voluntary Registration Drawbacks
                    </h4>
                    <p className="text-sm">
                      The downside of voluntary registration: quarterly BAS lodgement (more
                      admin), your prices effectively increase 10% for non-GST-registered clients
                      (consumers and small businesses who can&apos;t claim GST credits), and
                      you need to maintain accurate records of all GST on income and expenses.
                      If your clients are primarily consumers or small businesses not registered
                      for GST, staying unregistered below $75K is usually better.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">BAS Lodgement</p>
                  <p className="text-sm">
                    Most freelancers lodge BAS quarterly (due 28 days after each quarter ends).
                    Your BAS reports GST collected, GST paid, and PAYG income tax instalments.
                    Using accounting software that tracks GST automatically makes BAS preparation
                    a 15-minute task instead of a weekend ordeal. InvoiceFlow tracks GST on every
                    invoice so your BAS data is always ready.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Essential Setup for Your First Year */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white heading-font mb-4">
                Essential Setup for Your First Year
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Beyond registration, there are several practical steps that separate
                  freelancers who thrive from those who struggle. These are the essentials to
                  have in place before (or shortly after) you land your first client:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">01</span>
                      Professional Indemnity Insurance
                    </h4>
                    <p className="text-sm">
                      If you provide advice, design, code, or any professional service, PI
                      insurance protects you if a client claims your work caused them financial
                      loss. Many enterprise and government clients require it before engaging
                      contractors. Typical cost: $300-$800/year for sole traders, depending on
                      your industry and coverage level.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">02</span>
                      Separate Business Bank Account
                    </h4>
                    <p className="text-sm">
                      Mixing personal and business finances is the number one mistake new
                      freelancers make. A separate account makes tax time dramatically easier,
                      gives you a clear picture of business cash flow, and looks more professional
                      when clients pay via bank transfer. Most Australian banks offer
                      fee-free business accounts for sole traders.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">03</span>
                      Accounting &amp; Invoicing Software
                    </h4>
                    <p className="text-sm">
                      You need software that handles invoicing, expense tracking, GST
                      calculations, and BAS preparation. Spreadsheets work for the first month
                      but become unmanageable quickly. InvoiceFlow is purpose-built for
                      Australian freelancers — professional invoices, automatic GST, payment
                      tracking, and BAS-ready reports from day one.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">04</span>
                      Superannuation Contributions
                    </h4>
                    <p className="text-sm">
                      As a sole trader, super contributions are voluntary — but ignoring them is
                      a mistake. The concessional (before-tax) cap is $30,000 per year, and
                      contributions are tax-deductible. Even setting aside 11.5% of your income
                      (matching the employee SG rate) builds long-term wealth. You can contribute
                      to your existing super fund — no special setup required.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">05</span>
                      Record Keeping (ATO 5-Year Rule)
                    </h4>
                    <p className="text-sm">
                      The ATO requires you to keep business records for five years from the date
                      you lodge the relevant tax return. This includes invoices, receipts, bank
                      statements, contracts, and BAS lodgements. Digital records are acceptable
                      and preferred — use cloud storage and accounting software to keep everything
                      organised and backed up. Failing to maintain records can result in penalties
                      and estimated tax assessments.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-teal-400 text-sm font-bold">06</span>
                      Contracts &amp; Client Processes
                    </h4>
                    <p className="text-sm">
                      Every freelance engagement should start with a signed contract covering
                      scope, payment terms, IP ownership, and termination clauses. Build a
                      repeatable client onboarding process that collects all necessary information
                      upfront. Having templates ready before you land your first client means
                      you can respond to opportunities quickly and professionally.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5 mt-4">
                  <p className="text-sm text-teal-400 font-medium mb-2">First Year Focus</p>
                  <p className="text-sm">
                    Don&apos;t try to optimise everything at once. In your first year, focus on:
                    (1) getting your ABN and financial infrastructure right, (2) landing and
                    delivering great work for your first few clients, and (3) building a system
                    for tracking income, expenses, and tax obligations. Everything else — business
                    name, company structure, fancy website — can come later once you have revenue.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center glass rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white heading-font mb-4">
              Registered and ready?{' '}
              <span className="gradient-text">Start invoicing professionally.</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6">
              InvoiceFlow handles your invoicing, GST calculations, and payment tracking from
              day one — so you look professional from your very first invoice. Built for
              Australian freelancers and sole traders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free — 5 Invoices/Month
              </Link>
              <Link
                href="/tools/invoice-generator"
                className="inline-block px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                Try Invoice Generator
              </Link>
            </div>
          </section>
        
        <RelatedTools currentSlug="business-registration-checklist" category="Business Analytics" />
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
