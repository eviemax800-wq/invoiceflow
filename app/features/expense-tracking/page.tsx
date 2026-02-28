import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Expense Tracking for Australian Freelancers & Sole Traders — InvoiceFlow',
  description:
    'Expense tracking software built for Australian freelancers and sole traders. Snap receipts, auto-categorise ATO deductions, track GST credits, and export everything for tax time. Never miss a deduction again.',
  keywords: [
    'expense tracking software freelancer australia',
    'freelance expense tracker',
    'business expense tracker sole trader',
    'tax deductible expenses tracker',
    'receipt scanner freelancer',
    'ATO expense categories',
    'GST credit tracking',
    'sole trader expense tracking australia',
  ],
  alternates: { canonical: '/features/expense-tracking' },
  openGraph: {
    title: 'Expense Tracking for Australian Freelancers & Sole Traders — InvoiceFlow',
    description:
      'Snap receipts, auto-categorise ATO deductions, track GST credits, and export everything at tax time. Purpose-built expense tracking for Australian freelancers.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://invoiceflow-teal.vercel.app/features' },
    { '@type': 'ListItem', position: 3, name: 'Expense Tracking', item: 'https://invoiceflow-teal.vercel.app/features/expense-tracking' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What expenses can Australian freelancers claim as tax deductions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australian freelancers and sole traders can claim a wide range of business expenses as tax deductions, including: home office costs (electricity, internet, phone, furniture), vehicle and travel expenses for business purposes, equipment and tools (computers, software, cameras), professional development and training, marketing and advertising costs, insurance premiums (professional indemnity, public liability), accounting and legal fees, and bank fees on business accounts. The key requirement is that the expense must be directly related to earning your assessable income. InvoiceFlow includes a full ATO deduction checklist so you never miss an eligible expense.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does InvoiceFlow track GST credits on expenses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you capture a receipt or log an expense, InvoiceFlow automatically extracts the GST component using the 1/11th method (dividing the GST-inclusive total by 11). It categorises each expense as taxable or GST-free and maintains a running tally of your GST input credits. At BAS time, you can export your total GST credits in one click — ready to offset against the GST you\'ve collected on invoices. This means no more manually calculating GST from every receipt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I photograph receipts instead of keeping paper copies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The ATO accepts digital copies of receipts as valid records, provided the digital image is a true and clear reproduction of the original. InvoiceFlow\'s receipt capture feature lets you photograph receipts on your phone, and our AI automatically extracts the vendor name, date, amount, and GST component. The original image is stored securely as your record. The ATO requires you to keep records for 5 years, and InvoiceFlow stores them for the life of your account.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the home office deduction rate for 2025-26?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the 2025-26 financial year, the ATO revised fixed rate method allows you to claim 67 cents per hour worked from home. This rate covers electricity, phone, internet, stationery, and computer consumables. You need to keep a record of the hours you work from home (a timesheet, roster, or diary will do). Alternatively, you can use the actual cost method to claim the exact proportion of your home office expenses — which may result in a higher deduction if you work from home full-time. InvoiceFlow tracks both methods so you can compare and choose the best option at tax time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does InvoiceFlow integrate with my accounting software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow exports your expense data in CSV, PDF, and standard accounting formats that are compatible with Xero, MYOB, QuickBooks, and other popular accounting platforms. You can export all expenses by category, date range, client, or project — making it easy for your accountant to import the data directly. For Pro and Premium users, we also offer direct integration with Xero and MYOB, so your expenses sync automatically without manual exports.',
      },
    },
  ],
};

const painPoints = [
  {
    problem: 'Shoebox of receipts that you scramble to sort at tax time',
    solution: 'Snap receipts on your phone, AI auto-categorises and files them instantly.',
  },
  {
    problem: 'Missing $2,000+ in legitimate tax deductions every year',
    solution: 'ATO deduction checklist prompts you for all eligible expenses you might be missing.',
  },
  {
    problem: 'Manually calculating GST credits from every single receipt',
    solution: 'GST auto-extracted and tallied for your next BAS — zero manual maths.',
  },
  {
    problem: 'No idea how much you actually spend running your business',
    solution: 'Real-time expense dashboard with trends and category breakdowns.',
  },
];

const expenseCapabilities = [
  {
    title: 'Receipt Capture',
    description: 'Photograph receipts and auto-extract vendor, amount, GST, and category. No more lost paper receipts or manual data entry.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
  {
    title: 'ATO-Compliant Categories',
    description: 'Pre-built ATO deduction categories including home office, vehicle, equipment, travel, professional development, and more.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
  {
    title: 'GST Credit Tracking',
    description: 'Automatic GST input credit tracking on every expense. Your running BAS tally updates in real-time as you log purchases.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Recurring Expenses',
    description: 'Track subscriptions, software licences, insurance premiums, and other recurring business costs automatically each month.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: 'Tax Time Export',
    description: 'One-click export of all expenses by category for your accountant or tax return. CSV, PDF, and Xero/MYOB-compatible formats.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    title: 'Expense Reports',
    description: 'Generate professional expense summaries by period, client, or project. Perfect for billing clients or reviewing business health.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
];

const comparisonRows = [
  { feature: 'Receipt scanning', invoiceflow: true, xero: true, myob: false, freshbooks: true },
  { feature: 'ATO expense categories', invoiceflow: true, xero: true, myob: true, freshbooks: false },
  { feature: 'GST credit tracking', invoiceflow: true, xero: true, myob: true, freshbooks: false },
  { feature: 'Free tier available', invoiceflow: true, xero: false, myob: false, freshbooks: false },
  { feature: 'Built for freelancers', invoiceflow: true, xero: false, myob: false, freshbooks: true },
  { feature: 'AI categorisation', invoiceflow: true, xero: false, myob: false, freshbooks: false },
];

const keyNumbers = [
  { value: '$2,000+', label: 'Average missed deductions', description: 'Per year for Australian sole traders who don\'t track expenses' },
  { value: '67c/hr', label: 'ATO home office rate', description: 'Fixed rate method for 2025-26 working from home' },
  { value: '85c/km', label: 'ATO vehicle rate', description: 'Cents per kilometre method for 2025-26 business travel' },
  { value: '$20,000', label: 'Instant asset write-off', description: 'Threshold for immediate deduction on business assets' },
];

const personaPages = [
  { name: 'Sole Traders', href: '/for/sole-traders', desc: 'Track every business expense and maximise deductions' },
  { name: 'Freelancers', href: '/for/freelancers', desc: 'Capture project expenses and bill clients accurately' },
  { name: 'Tradies', href: '/for/tradies', desc: 'Log materials, fuel, and tool purchases on the go' },
  { name: 'Consultants', href: '/for/consultants', desc: 'Track travel, meals, and client entertainment expenses' },
  { name: 'Photographers', href: '/for/photographers', desc: 'Equipment, travel, and studio expense tracking' },
  { name: 'Coaches', href: '/for/coaches', desc: 'Software, marketing, and professional development expenses' },
];

const relatedTools = [
  { name: 'Tax Deduction Finder', href: '/tools/tax-deduction-finder', desc: 'Discover deductions you might be missing' },
  { name: 'Expense Report Generator', href: '/tools/expense-report-generator', desc: 'Create professional expense summaries' },
  { name: 'GST Calculator', href: '/tools/gst-calculator', desc: 'Add, remove, or extract GST instantly' },
  { name: 'BAS Preparation Checklist', href: '/tools/bas-preparation-checklist', desc: 'Step-by-step quarterly BAS prep guide' },
  { name: 'Profit & Loss Statement Generator', href: '/tools/profit-loss-statement-generator', desc: 'Generate P&L statements for your business' },
  { name: 'Business Trip Expense Calculator', href: '/tools/business-trip-expense-calculator', desc: 'Calculate deductible travel expenses' },
];

export default function ExpenseTrackingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            InvoiceFlow
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/tools" className="hover:text-white transition-colors">Free Tools</Link>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
          </div>
          <Link href="/signup">
            <Button size="sm">Start Free</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="inline-block rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-sm font-medium text-rose-400 mb-8">
          Expense Tracking
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Stop losing money on{' '}
          <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
            missed deductions
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          Australian sole traders miss over $2,000 in legitimate deductions every year. InvoiceFlow&apos;s expense tracker
          captures receipts, auto-categorises ATO deductions, tracks GST credits, and exports everything at tax time — so you claim every dollar you&apos;re entitled to.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — No Credit Card</Button>
          </Link>
          <Link href="/tools/tax-deduction-finder">
            <Button variant="secondary" size="lg">Try the Tax Deduction Finder</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Free tier: unlimited receipt capture, ATO categories, GST tracking, 100+ free tools
        </p>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Expense tracking shouldn&apos;t cost you money
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Most freelancers lose thousands in deductions every year because tracking expenses is tedious. InvoiceFlow makes it effortless.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-rose-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-red-300 text-sm font-medium mb-2 line-through decoration-red-500/50">
                    {item.problem}
                  </p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-emerald-300 font-semibold">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Six ways InvoiceFlow tracks your expenses
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          From receipt capture to tax-time export — every feature is designed to maximise your deductions and minimise your admin.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expenseCapabilities.map((cap, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-rose-500/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-rose-400 to-pink-400 p-3 text-white shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{cap.title}</h3>
                  <p className="text-sm text-slate-400">{cap.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Key numbers every sole trader should know
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          These are the rates and thresholds that determine how much you can claim on your tax return.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyNumbers.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center hover:border-rose-500/20 transition-colors"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="font-semibold text-white text-sm mb-1">{stat.label}</p>
              <p className="text-xs text-slate-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Expense tracking that actually fits freelancers
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          Xero and MYOB are built for businesses with bookkeepers. InvoiceFlow is built for freelancers who do it themselves.
        </p>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
                  <th className="p-4 text-center">
                    <span className="text-rose-400 font-bold">InvoiceFlow</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Free / $19</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">Xero</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$35/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">MYOB</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$34/mo</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-300 font-medium">FreshBooks</span>
                    <span className="block text-xs text-slate-500 mt-0.5">$24/mo</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    <td className="p-4 text-slate-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.invoiceflow ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-500/20 text-rose-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.xero ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.myob ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.freshbooks ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-600">&mdash;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Persona Pages */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Who uses InvoiceFlow for expense tracking?
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Freelancers and sole traders across every profession use InvoiceFlow to track expenses, maximise deductions, and simplify tax time.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personaPages.map((persona) => (
            <Link
              key={persona.href}
              href={persona.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-rose-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-rose-400 transition-colors">
                {persona.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{persona.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free expense and tax tools
        </h2>
        <p className="text-center text-slate-400 mb-10">
          No sign-up required. Use them right now, completely free.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-rose-500/20 hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="font-semibold text-white group-hover:text-rose-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools" className="text-rose-400 hover:text-rose-300 text-sm font-medium">
            Browse all 100+ free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <div className="mx-auto max-w-6xl px-6">
        <EmailCapture />
      </div>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Expense tracking at every price point
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Start free. Upgrade when your business grows. Every plan includes full expense tracking and ATO-compliant categories.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-lg font-bold text-white mb-1">Free</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$0</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Perfect for getting started with receipt capture and expense tracking.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited receipt capture
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                ATO deduction categories
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                GST credit tracking
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                CSV export
              </li>
            </ul>
            <Link href="/signup">
              <Button variant="secondary" size="md" className="w-full">Start Free</Button>
            </Link>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/[0.05] p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 px-3 py-0.5 text-xs font-bold text-slate-900">
              Most Popular
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Pro</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$19</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Full expense tracking with AI categorisation and tax-time exports.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited invoices + expenses
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                AI receipt categorisation
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                BAS-ready GST reporting
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Tax-time category exports
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Recurring expense tracking
              </li>
            </ul>
            <Link href="/signup">
              <Button size="md" className="w-full">Start Pro — 14-Day Trial</Button>
            </Link>
          </div>

          {/* Premium */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-lg font-bold text-white mb-1">Premium</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$39</span>
              <span className="text-slate-400 text-sm">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Multi-business expense management with advanced reporting and integrations.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Everything in Pro
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Multiple business profiles
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Xero &amp; MYOB direct sync
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Custom expense reports
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
            </ul>
            <Link href="/signup">
              <Button variant="secondary" size="md" className="w-full">Start Premium</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Expense tracking FAQ
        </h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <summary className="cursor-pointer p-5 font-medium text-white hover:text-rose-400 transition-colors list-none flex justify-between items-center">
                {faq.name}
                <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Claim every deduction you&apos;re{' '}
          <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
            entitled to
          </span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Join Australian freelancers and sole traders who use InvoiceFlow to track expenses, maximise deductions, and make tax time painless. Start free — no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free — Track Every Expense</Button>
          </Link>
          <Link href="/tools" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-rose-400 hover:text-rose-300 transition-colors">
            Or try our free tools first &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne, Australia.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
