import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Business Tools for Freelancers | InvoiceFlow',
  description:
    'Free tools for Australian freelancers and small businesses. 28 calculators and generators including GST, invoices, rates, tax, super, billable hours, break-even analysis, markup, revenue planning, payment reminders, payment terms, retainer pricing, project profitability, business health score, scope of work generator, meeting cost calculator, contract clause generator, ATO tax calendar, WFH deduction calculator, proposal generator, and more. No signup required.',
  openGraph: {
    title: 'Free Business Tools for Freelancers | InvoiceFlow',
    description:
      'Free tools for Australian freelancers. GST calculator, invoice templates, and more.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools',
  },
};

const tools = [
  {
    title: 'GST Calculator',
    description:
      'Add or remove 10% GST from any amount. Includes batch calculator for multi-line invoices.',
    href: '/tools/gst-calculator',
    icon: '%',
    color: 'from-teal-400 to-emerald-500',
    badge: 'Most popular',
  },
  {
    title: 'Invoice Template Generator',
    description:
      'Create professional, GST-compliant invoices with your ABN. Download as PDF instantly.',
    href: '/tools/invoice-generator',
    icon: '\u{1F4C4}',
    color: 'from-blue-400 to-cyan-500',
    badge: '',
  },
  {
    title: 'ABN Lookup',
    description:
      'Verify any Australian Business Number instantly. Check validity, entity type, and link to full ABR details.',
    href: '/tools/abn-lookup',
    icon: '\u{1F50D}',
    color: 'from-purple-400 to-pink-500',
    badge: '',
  },
  {
    title: 'Freelance Rate Calculator',
    description:
      'Calculate your ideal hourly rate based on income goals, expenses, super, tax, and billable hours.',
    href: '/tools/rate-calculator',
    icon: '$',
    color: 'from-amber-400 to-orange-500',
    badge: '',
  },
  {
    title: 'Late Payment Interest Calculator',
    description:
      'Calculate interest on overdue invoices. Simple, monthly, or daily compounding with Australian business rates.',
    href: '/tools/late-payment-calculator',
    icon: '\u{23F0}',
    color: 'from-red-400 to-rose-500',
    badge: '',
  },
  {
    title: 'Freelance Tax Estimator',
    description:
      'Estimate your income tax, Medicare levy, and super obligations using 2025-26 ATO brackets.',
    href: '/tools/tax-estimator',
    icon: '\u{1F4CA}',
    color: 'from-violet-400 to-indigo-500',
    badge: '',
  },
  {
    title: 'Contractor vs Employee Calculator',
    description:
      'Determine if a worker is an independent contractor or employee using the ATO multi-factor test.',
    href: '/tools/contractor-employee-calculator',
    icon: '\u{1F465}',
    color: 'from-sky-400 to-blue-500',
    badge: '',
  },
  {
    title: 'Profit Margin Calculator',
    description:
      'Calculate your real take-home profit after costs, income tax, Medicare levy, and super.',
    href: '/tools/profit-margin-calculator',
    icon: '\u{1F4B0}',
    color: 'from-lime-400 to-emerald-500',
    badge: '',
  },
  {
    title: 'Superannuation Calculator',
    description:
      'Calculate your recommended super contributions, tax savings, and payment schedule as a sole trader.',
    href: '/tools/super-calculator',
    icon: '\u{1F3E6}',
    color: 'from-cyan-400 to-blue-500',
    badge: '',
  },
  {
    title: 'Billable Hours Calculator',
    description:
      'Find your utilization rate, effective hourly rate, and annual earning capacity. Track non-billable time.',
    href: '/tools/billable-hours-calculator',
    icon: '\u{231B}',
    color: 'from-orange-400 to-red-500',
    badge: '',
  },
  {
    title: 'Quote & Estimate Builder',
    description:
      'Build itemised project quotes with line items, expenses, contingency buffer, and GST. Copy and send to clients.',
    href: '/tools/quote-calculator',
    icon: '\u{1F4DD}',
    color: 'from-indigo-400 to-violet-500',
    badge: '',
  },
  {
    title: 'Cash Flow Forecast',
    description:
      'Project your cash position over 3-12 months. Factor in payment terms, expenses, tax, and outstanding invoices.',
    href: '/tools/cashflow-forecast',
    icon: '\u{1F4C8}',
    color: 'from-emerald-400 to-teal-500',
    badge: '',
  },
  {
    title: 'Salary to Hourly Rate Converter',
    description:
      'Convert your annual salary to a freelance hourly rate. Accounts for super, leave, tax, and business overheads.',
    href: '/tools/salary-to-hourly',
    icon: '\u{1F504}',
    color: 'from-pink-400 to-rose-500',
    badge: '',
  },
  {
    title: 'Expense & Deduction Calculator',
    description:
      'Enter your business expenses and see your tax savings instantly. 12 ATO deduction categories with 2025-26 rates.',
    href: '/tools/expense-deduction-calculator',
    icon: '\u{1F9FE}',
    color: 'from-yellow-400 to-amber-500',
    badge: '',
  },
  {
    title: 'Revenue Goal Planner',
    description:
      'Break your annual income target into monthly, weekly, and daily billing targets. Factor in tax, super, expenses, and leave.',
    href: '/tools/revenue-goal-planner',
    icon: '\u{1F3AF}',
    color: 'from-teal-400 to-cyan-500',
    badge: '',
  },
  {
    title: 'Payment Reminder Generator',
    description:
      'Generate professional payment reminder emails for overdue invoices. 4 tones from friendly to final notice.',
    href: '/tools/payment-reminder-generator',
    icon: '\u{1F4E7}',
    color: 'from-rose-400 to-pink-500',
    badge: '',
  },
  {
    title: 'Break-Even Calculator',
    description:
      'Find how many billable hours or projects you need to cover fixed costs and start profiting. Includes contribution margin and safety margin.',
    href: '/tools/break-even-calculator',
    icon: '\u{2696}',
    color: 'from-amber-400 to-yellow-500',
    badge: '',
  },
  {
    title: 'Discount & Markup Calculator',
    description:
      'Calculate discounts, markups, and convert between margin and markup. Batch discounts, GST handling, and industry reference tables.',
    href: '/tools/discount-markup-calculator',
    icon: '\u{1F3F7}',
    color: 'from-fuchsia-400 to-purple-500',
    badge: '',
  },
  {
    title: 'Payment Terms Calculator',
    description:
      'Calculate invoice due dates for Net 7/14/30/60/90 and EOM terms. Includes early payment discounts and milestone payment schedules.',
    href: '/tools/payment-terms-calculator',
    icon: '\u{1F4C5}',
    color: 'from-sky-400 to-indigo-500',
    badge: '',
  },
  {
    title: 'Client Retainer Calculator',
    description:
      'Price monthly retainers based on hours, discount rate, and billing cycle. Compare tiers and project annual retainer revenue.',
    href: '/tools/retainer-calculator',
    icon: '\u{1F91D}',
    color: 'from-emerald-400 to-cyan-500',
    badge: '',
  },
  {
    title: 'Project Profitability Calculator',
    description:
      'Track revenue, hours, and expenses per project. Compare profit margins, find your most profitable work, and spot unprofitable projects.',
    href: '/tools/project-profitability',
    icon: '\u{1F4CA}',
    color: 'from-violet-400 to-purple-500',
    badge: '',
  },
  {
    title: 'Business Health Score',
    description:
      'Score your freelance business across 6 key areas: income stability, client diversification, pricing, reserves, cash flow, and growth.',
    href: '/tools/business-health-score',
    icon: '\u{1F3AF}',
    color: 'from-rose-400 to-pink-500',
    badge: '',
  },
  {
    title: 'Scope of Work Generator',
    description:
      'Generate professional scope of work documents with deliverables, timelines, payment milestones, and revision policies. Copy and send to clients.',
    href: '/tools/scope-of-work-generator',
    icon: '\u{1F4CB}',
    color: 'from-indigo-400 to-blue-500',
    badge: '',
  },
  {
    title: 'Meeting Cost Calculator',
    description:
      'Calculate the true cost of meetings. See per-minute costs, annual impact, and how much you could save by making meetings more efficient.',
    href: '/tools/meeting-cost-calculator',
    icon: '\u{1F4B8}',
    color: 'from-amber-400 to-rose-500',
    badge: '',
  },
  {
    title: 'Contract Clause Generator',
    description:
      'Generate professional freelance contract clauses for scope, payment, IP, confidentiality, termination, and more. Copy and send to clients.',
    href: '/tools/contract-clause-generator',
    icon: '\u{1F4DC}',
    color: 'from-cyan-400 to-teal-500',
    badge: '',
  },
  {
    title: 'ATO Tax Calendar',
    description:
      'Track all your ATO deadlines — BAS quarterly/monthly, PAYG instalments, super, income tax, and more. Never miss a due date.',
    href: '/tools/tax-calendar',
    icon: '\u{1F4C6}',
    color: 'from-purple-400 to-indigo-500',
    badge: '',
  },
  {
    title: 'WFH Deduction Calculator',
    description:
      'Compare the ATO fixed rate (67c/hr) vs actual cost method for working from home deductions. Includes equipment depreciation and 2025-26 tax savings.',
    href: '/tools/wfh-deduction-calculator',
    icon: '\u{1F3E0}',
    color: 'from-teal-400 to-blue-500',
    badge: '',
  },
  {
    title: 'Proposal Template Generator',
    description:
      'Generate professional freelance proposals with deliverables, pricing, timelines, and terms. 7 project type presets with realistic Australian pricing.',
    href: '/tools/proposal-generator',
    icon: '📨',
    color: 'from-violet-400 to-blue-500',
    badge: 'New',
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen page-bg">
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </Link>
          <div className="flex gap-3">
            <Link
              href="/pricing"
              className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              Pricing
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            100% free — no signup required
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white heading-font mb-4">
            Free <span className="gradient-text">Business Tools</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Essential calculators and generators for Australian freelancers and small businesses.
            No account needed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="block glass rounded-2xl p-6 hover:bg-white/[0.08] hover:border-teal-500/30 border border-transparent transition-all h-full group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white text-xl font-bold shrink-0 group-hover:scale-110 transition-transform`}
                >
                  {tool.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white heading-font">
                      {tool.title}
                    </h3>
                    {tool.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-400">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400 mt-2">{tool.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 text-center glass rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-white heading-font mb-4">
            Ready to <span className="gradient-text">automate</span> your invoicing?
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            These free tools are just the start. InvoiceFlow automates invoice creation, GST
            calculations, payment tracking, and BAS prep — all with AI.
          </p>
          <Link
            href="/signup"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Start Free — 5 Invoices/Month
          </Link>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20 py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} InvoiceFlow. Built in Melbourne.</p>
          <div className="flex gap-6">
            <Link href="/compare" className="hover:text-white transition-colors">
              Compare
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
  );
}
