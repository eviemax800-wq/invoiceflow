export type ToolCategory =
  | 'Tax & Compliance'
  | 'Invoicing & Documents'
  | 'Pricing & Rates'
  | 'Financial Planning'
  | 'Business Analytics';

export interface Tool {
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  badge: string;
  category: ToolCategory;
}

export const CATEGORY_META: Record<
  string,
  { title: string; description: string; heading: string; category: ToolCategory }
> = {
  'tax-compliance': {
    title: 'Free Tax & Compliance Calculators for Australian Freelancers',
    description:
      'Free ATO-aligned tax calculators for Australian freelancers and sole traders. GST, income tax, superannuation, depreciation, WFH deductions, BAS deadlines, and more.',
    heading: 'Tax & Compliance',
    category: 'Tax & Compliance',
  },
  'invoicing-documents': {
    title: 'Free Invoicing Tools & Document Generators for Freelancers',
    description:
      'Create professional invoices, quotes, proposals, contracts, and scope of work documents. Free generators for Australian freelancers — no signup required.',
    heading: 'Invoicing & Documents',
    category: 'Invoicing & Documents',
  },
  'pricing-rates': {
    title: 'Free Pricing & Rate Calculators for Freelancers',
    description:
      'Calculate your ideal freelance rate, compare pricing models, track billable hours, and set retainer pricing. Free tools for Australian freelancers.',
    heading: 'Pricing & Rates',
    category: 'Pricing & Rates',
  },
  'financial-planning': {
    title: 'Free Financial Planning Tools for Freelancers',
    description:
      'Plan your freelance finances with break-even analysis, revenue goal planning, cash flow forecasting, budgeting, and payment terms calculators. Built for Australian freelancers.',
    heading: 'Financial Planning',
    category: 'Financial Planning',
  },
  'business-analytics': {
    title: 'Free Business Analytics Tools for Freelancers',
    description:
      'Analyse your freelance business performance. Project profitability, business health scores, client lifetime value, meeting costs, and ABN verification.',
    heading: 'Business Analytics',
    category: 'Business Analytics',
  },
};

export const CATEGORY_SLUGS = Object.keys(CATEGORY_META);

export const tools: Tool[] = [
  {
    title: 'GST Calculator',
    description:
      'Add or remove 10% GST from any amount. Includes batch calculator for multi-line invoices.',
    href: '/tools/gst-calculator',
    icon: '%',
    color: 'from-teal-400 to-emerald-500',
    badge: 'Most popular',
    category: 'Tax & Compliance',
  },
  {
    title: 'Invoice Template Generator',
    description:
      'Create professional, GST-compliant invoices with your ABN. Download as PDF instantly.',
    href: '/tools/invoice-generator',
    icon: '\u{1F4C4}',
    color: 'from-blue-400 to-cyan-500',
    badge: '',
    category: 'Invoicing & Documents',
  },
  {
    title: 'ABN Lookup',
    description:
      'Verify any Australian Business Number instantly. Check validity, entity type, and link to full ABR details.',
    href: '/tools/abn-lookup',
    icon: '\u{1F50D}',
    color: 'from-purple-400 to-pink-500',
    badge: '',
    category: 'Business Analytics',
  },
  {
    title: 'Freelance Rate Calculator',
    description:
      'Calculate your ideal hourly rate based on income goals, expenses, super, tax, and billable hours.',
    href: '/tools/rate-calculator',
    icon: '$',
    color: 'from-amber-400 to-orange-500',
    badge: '',
    category: 'Pricing & Rates',
  },
  {
    title: 'Late Payment Interest Calculator',
    description:
      'Calculate interest on overdue invoices. Simple, monthly, or daily compounding with Australian business rates.',
    href: '/tools/late-payment-calculator',
    icon: '\u{23F0}',
    color: 'from-red-400 to-rose-500',
    badge: '',
    category: 'Financial Planning',
  },
  {
    title: 'Freelance Tax Estimator',
    description:
      'Estimate your income tax, Medicare levy, and super obligations using 2025-26 ATO brackets.',
    href: '/tools/tax-estimator',
    icon: '\u{1F4CA}',
    color: 'from-violet-400 to-indigo-500',
    badge: '',
    category: 'Tax & Compliance',
  },
  {
    title: 'Contractor vs Employee Calculator',
    description:
      'Determine if a worker is an independent contractor or employee using the ATO multi-factor test.',
    href: '/tools/contractor-employee-calculator',
    icon: '\u{1F465}',
    color: 'from-sky-400 to-blue-500',
    badge: '',
    category: 'Tax & Compliance',
  },
  {
    title: 'Profit Margin Calculator',
    description:
      'Calculate your real take-home profit after costs, income tax, Medicare levy, and super.',
    href: '/tools/profit-margin-calculator',
    icon: '\u{1F4B0}',
    color: 'from-lime-400 to-emerald-500',
    badge: '',
    category: 'Pricing & Rates',
  },
  {
    title: 'Superannuation Calculator',
    description:
      'Calculate your recommended super contributions, tax savings, and payment schedule as a sole trader.',
    href: '/tools/super-calculator',
    icon: '\u{1F3E6}',
    color: 'from-cyan-400 to-blue-500',
    badge: '',
    category: 'Tax & Compliance',
  },
  {
    title: 'Billable Hours Calculator',
    description:
      'Find your utilization rate, effective hourly rate, and annual earning capacity. Track non-billable time.',
    href: '/tools/billable-hours-calculator',
    icon: '\u{231B}',
    color: 'from-orange-400 to-red-500',
    badge: '',
    category: 'Pricing & Rates',
  },
  {
    title: 'Quote & Estimate Builder',
    description:
      'Build itemised project quotes with line items, expenses, contingency buffer, and GST. Copy and send to clients.',
    href: '/tools/quote-calculator',
    icon: '\u{1F4DD}',
    color: 'from-indigo-400 to-violet-500',
    badge: '',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Cash Flow Forecast',
    description:
      'Project your cash position over 3-12 months. Factor in payment terms, expenses, tax, and outstanding invoices.',
    href: '/tools/cashflow-forecast',
    icon: '\u{1F4C8}',
    color: 'from-emerald-400 to-teal-500',
    badge: '',
    category: 'Financial Planning',
  },
  {
    title: 'Salary to Hourly Rate Converter',
    description:
      'Convert your annual salary to a freelance hourly rate. Accounts for super, leave, tax, and business overheads.',
    href: '/tools/salary-to-hourly',
    icon: '\u{1F504}',
    color: 'from-pink-400 to-rose-500',
    badge: '',
    category: 'Pricing & Rates',
  },
  {
    title: 'Expense & Deduction Calculator',
    description:
      'Enter your business expenses and see your tax savings instantly. 12 ATO deduction categories with 2025-26 rates.',
    href: '/tools/expense-deduction-calculator',
    icon: '\u{1F9FE}',
    color: 'from-yellow-400 to-amber-500',
    badge: '',
    category: 'Tax & Compliance',
  },
  {
    title: 'Revenue Goal Planner',
    description:
      'Break your annual income target into monthly, weekly, and daily billing targets. Factor in tax, super, expenses, and leave.',
    href: '/tools/revenue-goal-planner',
    icon: '\u{1F3AF}',
    color: 'from-teal-400 to-cyan-500',
    badge: '',
    category: 'Financial Planning',
  },
  {
    title: 'Payment Reminder Generator',
    description:
      'Generate professional payment reminder emails for overdue invoices. 4 tones from friendly to final notice.',
    href: '/tools/payment-reminder-generator',
    icon: '\u{1F4E7}',
    color: 'from-rose-400 to-pink-500',
    badge: '',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Break-Even Calculator',
    description:
      'Find how many billable hours or projects you need to cover fixed costs and start profiting. Includes contribution margin and safety margin.',
    href: '/tools/break-even-calculator',
    icon: '\u{2696}',
    color: 'from-amber-400 to-yellow-500',
    badge: '',
    category: 'Financial Planning',
  },
  {
    title: 'Discount & Markup Calculator',
    description:
      'Calculate discounts, markups, and convert between margin and markup. Batch discounts, GST handling, and industry reference tables.',
    href: '/tools/discount-markup-calculator',
    icon: '\u{1F3F7}',
    color: 'from-fuchsia-400 to-purple-500',
    badge: '',
    category: 'Pricing & Rates',
  },
  {
    title: 'Payment Terms Calculator',
    description:
      'Calculate invoice due dates for Net 7/14/30/60/90 and EOM terms. Includes early payment discounts and milestone payment schedules.',
    href: '/tools/payment-terms-calculator',
    icon: '\u{1F4C5}',
    color: 'from-sky-400 to-indigo-500',
    badge: '',
    category: 'Financial Planning',
  },
  {
    title: 'Client Retainer Calculator',
    description:
      'Price monthly retainers based on hours, discount rate, and billing cycle. Compare tiers and project annual retainer revenue.',
    href: '/tools/retainer-calculator',
    icon: '\u{1F91D}',
    color: 'from-emerald-400 to-cyan-500',
    badge: '',
    category: 'Pricing & Rates',
  },
  {
    title: 'Project Profitability Calculator',
    description:
      'Track revenue, hours, and expenses per project. Compare profit margins, find your most profitable work, and spot unprofitable projects.',
    href: '/tools/project-profitability',
    icon: '\u{1F4CA}',
    color: 'from-violet-400 to-purple-500',
    badge: '',
    category: 'Business Analytics',
  },
  {
    title: 'Business Health Score',
    description:
      'Score your freelance business across 6 key areas: income stability, client diversification, pricing, reserves, cash flow, and growth.',
    href: '/tools/business-health-score',
    icon: '\u{1F3AF}',
    color: 'from-rose-400 to-pink-500',
    badge: '',
    category: 'Business Analytics',
  },
  {
    title: 'Scope of Work Generator',
    description:
      'Generate professional scope of work documents with deliverables, timelines, payment milestones, and revision policies. Copy and send to clients.',
    href: '/tools/scope-of-work-generator',
    icon: '\u{1F4CB}',
    color: 'from-indigo-400 to-blue-500',
    badge: '',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Meeting Cost Calculator',
    description:
      'Calculate the true cost of meetings. See per-minute costs, annual impact, and how much you could save by making meetings more efficient.',
    href: '/tools/meeting-cost-calculator',
    icon: '\u{1F4B8}',
    color: 'from-amber-400 to-rose-500',
    badge: '',
    category: 'Business Analytics',
  },
  {
    title: 'Contract Clause Generator',
    description:
      'Generate professional freelance contract clauses for scope, payment, IP, confidentiality, termination, and more. Copy and send to clients.',
    href: '/tools/contract-clause-generator',
    icon: '\u{1F4DC}',
    color: 'from-cyan-400 to-teal-500',
    badge: '',
    category: 'Invoicing & Documents',
  },
  {
    title: 'ATO Tax Calendar',
    description:
      'Track all your ATO deadlines — BAS quarterly/monthly, PAYG instalments, super, income tax, and more. Never miss a due date.',
    href: '/tools/tax-calendar',
    icon: '\u{1F4C6}',
    color: 'from-purple-400 to-indigo-500',
    badge: '',
    category: 'Tax & Compliance',
  },
  {
    title: 'WFH Deduction Calculator',
    description:
      'Compare the ATO fixed rate (67c/hr) vs actual cost method for working from home deductions. Includes equipment depreciation and 2025-26 tax savings.',
    href: '/tools/wfh-deduction-calculator',
    icon: '\u{1F3E0}',
    color: 'from-teal-400 to-blue-500',
    badge: '',
    category: 'Tax & Compliance',
  },
  {
    title: 'Proposal Template Generator',
    description:
      'Generate professional freelance proposals with deliverables, pricing, timelines, and terms. 7 project type presets with realistic Australian pricing.',
    href: '/tools/proposal-generator',
    icon: '📨',
    color: 'from-violet-400 to-blue-500',
    badge: '',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Hourly vs Project Pricing',
    description:
      'Compare hourly vs fixed project pricing side-by-side. Factor in scope creep, revisions, and admin overhead to find the best pricing model for each project.',
    href: '/tools/pricing-comparison',
    icon: '\u{2696}',
    color: 'from-blue-400 to-indigo-500',
    badge: '',
    category: 'Pricing & Rates',
  },
  {
    title: 'Client Lifetime Value',
    description:
      'Calculate how much each client is worth over time. See lifetime revenue, profit, referral value, CLV:CAC ratio, and payback period.',
    href: '/tools/client-lifetime-value',
    icon: '\u{1F48E}',
    color: 'from-emerald-400 to-teal-500',
    badge: '',
    category: 'Business Analytics',
  },
  {
    title: 'Invoice Aging Report',
    description:
      'Track overdue invoices with aging buckets (current, 30, 60, 90+ days). Prioritize collections and spot payment patterns.',
    href: '/tools/invoice-aging-report',
    icon: '\u{1F4CA}',
    color: 'from-red-400 to-amber-500',
    badge: 'New',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Freelance Budget Planner',
    description:
      'Budget for irregular freelance income. Calculate tax reserves, emergency fund targets, and monthly allocations with Australian tax rates.',
    href: '/tools/budget-planner',
    icon: '\u{1F4B5}',
    color: 'from-teal-400 to-emerald-500',
    badge: '',
    category: 'Financial Planning',
  },
  {
    title: 'Net Income Calculator',
    description:
      'See your real take-home pay after income tax, Medicare, super, HELP debt, and business expenses. Full ATO 2024-25 waterfall breakdown.',
    href: '/tools/net-income-calculator',
    icon: '\u{1F4B6}',
    color: 'from-emerald-400 to-teal-500',
    badge: 'New',
    category: 'Tax & Compliance',
  },
  {
    title: 'Depreciation Calculator',
    description:
      'Calculate ATO depreciation on business assets. Instant asset write-off, diminishing value, and prime cost methods with year-by-year schedules.',
    href: '/tools/depreciation-calculator',
    icon: '\u{1F4C9}',
    color: 'from-amber-400 to-orange-500',
    badge: 'New',
    category: 'Tax & Compliance',
  },
];
