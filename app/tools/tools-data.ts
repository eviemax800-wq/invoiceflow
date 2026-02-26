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
    title: 'Client Concentration Risk Analyzer',
    description:
      'Analyze your client portfolio for revenue concentration risk. Calculate HHI score, identify dangerous dependency, and get a diversification plan.',
    href: '/tools/client-risk-analyzer',
    icon: '\u{1F6E1}',
    color: 'from-orange-400 to-rose-500',
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
    badge: '',
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
    badge: '',
    category: 'Tax & Compliance',
  },
  {
    title: 'Depreciation Calculator',
    description:
      'Calculate ATO depreciation on business assets. Instant asset write-off, diminishing value, and prime cost methods with year-by-year schedules.',
    href: '/tools/depreciation-calculator',
    icon: '\u{1F4C9}',
    color: 'from-amber-400 to-orange-500',
    badge: '',
    category: 'Tax & Compliance',
  },
  {
    title: 'Timesheet Calculator',
    description:
      'Track daily hours, calculate weekly and monthly pay, manage overtime, and export formatted timesheets. Quick-fill and apply-to-all for fast entry.',
    href: '/tools/timesheet-calculator',
    icon: '\u{1F552}',
    color: 'from-blue-400 to-cyan-500',
    badge: '',
    category: 'Pricing & Rates',
  },
  {
    title: 'Vehicle Expense Calculator',
    description:
      'Compare ATO cents-per-km (85c/km) vs logbook methods for vehicle deductions. Includes depreciation, fuel, rego, and other travel expenses.',
    href: '/tools/vehicle-expense-calculator',
    icon: '\u{1F697}',
    color: 'from-sky-400 to-indigo-500',
    badge: '',
    category: 'Tax & Compliance',
  },
  {
    title: 'Payment Plan Calculator',
    description:
      'Create structured payment plans for large projects. Split totals into installments with deposit, due dates, GST, and late payment terms.',
    href: '/tools/payment-plan-calculator',
    icon: '\u{1F4C5}',
    color: 'from-teal-400 to-emerald-500',
    badge: '',
    category: 'Financial Planning',
  },
  {
    title: 'Recurring Revenue Calculator',
    description:
      'Calculate MRR, ARR, and project recurring revenue growth. Factor in churn, client acquisition, and revenue concentration for freelance retainers.',
    href: '/tools/recurring-revenue-calculator',
    icon: '\u{1F504}',
    color: 'from-green-400 to-emerald-500',
    badge: '',
    category: 'Financial Planning',
  },
  {
    title: 'Savings Goal Calculator',
    description:
      'Set financial goals and track progress. Priority-based savings allocation, timeline projections, and extra billable hours needed to reach goals faster.',
    href: '/tools/savings-goal-calculator',
    icon: '\u{1F3AF}',
    color: 'from-violet-400 to-purple-500',
    badge: '',
    category: 'Financial Planning',
  },
  {
    title: 'Expense Report Generator',
    description:
      'Generate formatted expense reports for tax time, client billing, or personal records. 12 ATO categories, GST tracking, and tax deduction estimates.',
    href: '/tools/expense-report-generator',
    icon: '\u{1F9FE}',
    color: 'from-lime-400 to-teal-500',
    badge: '',
    category: 'Business Analytics',
  },
  {
    title: 'Project ROI Calculator',
    description:
      'Calculate the real return on investment for freelance projects. Compare profitability across projects with opportunity cost analysis.',
    href: '/tools/project-roi-calculator',
    icon: '\u{1F4C8}',
    color: 'from-cyan-400 to-blue-500',
    badge: '',
    category: 'Business Analytics',
  },
  {
    title: 'Business Structure Calculator',
    description:
      'Compare Sole Trader vs Company vs Trust structures side-by-side. Calculate tax, take-home pay, and compliance costs for each Australian business structure.',
    href: '/tools/business-structure-calculator',
    icon: '\u{1F3DB}',
    color: 'from-indigo-400 to-purple-500',
    badge: '',
    category: 'Tax & Compliance',
  },
  {
    title: 'Insurance Cost Estimator',
    description:
      'Estimate insurance costs for Australian freelancers. Professional indemnity, public liability, cyber, income protection, and more — with tax deduction savings.',
    href: '/tools/insurance-cost-estimator',
    icon: '\u{1F6E1}',
    color: 'from-emerald-400 to-cyan-500',
    badge: '',
    category: 'Business Analytics',
  },
  {
    title: 'Client Onboarding Checklist',
    description:
      'Generate a professional client onboarding checklist customized to your project type. Contract, payment, kickoff, and technical setup tasks included.',
    href: '/tools/client-onboarding-checklist',
    icon: '\u{2705}',
    color: 'from-teal-400 to-emerald-500',
    badge: '',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Scope Change Calculator',
    description:
      'Calculate the cost and timeline impact of scope changes. Generate professional change order documents with scope creep analysis and deadline adjustments.',
    href: '/tools/scope-change-calculator',
    icon: '\u{1F504}',
    color: 'from-amber-400 to-orange-500',
    badge: '',
    category: 'Business Analytics',
  },
  {
    title: 'Startup Cost Calculator',
    description:
      'Calculate the total cost to start freelancing in Australia. One-time setup costs, monthly ongoing expenses, break-even timeline, cash flow projections, and smart recommendations by business type.',
    href: '/tools/startup-cost-calculator',
    icon: '\u{1F680}',
    color: 'from-violet-400 to-blue-500',
    badge: '',
    category: 'Financial Planning',
  },
  {
    title: 'Profit & Loss Statement',
    description:
      'Generate a complete P&L statement for your freelance business. Income sources, ATO-aligned expense categories, tax estimates, profit margins, and financial ratios.',
    href: '/tools/profit-loss-statement',
    icon: '\u{1F4CA}',
    color: 'from-emerald-400 to-blue-500',
    badge: '',
    category: 'Financial Planning',
  },
  {
    title: 'EOFY Tax Checklist',
    description:
      'Generate a personalised End of Financial Year checklist for your freelance business. Tax deductions, BAS reconciliation, super contributions, and record-keeping tasks before June 30.',
    href: '/tools/eofy-checklist',
    icon: '\u{1F4CB}',
    color: 'from-amber-400 to-teal-500',
    badge: '',
    category: 'Tax & Compliance',
  },
  {
    title: 'Overdue Invoice Follow-Up',
    description:
      'Generate professional overdue invoice follow-up emails and letters. Friendly reminders to formal demands — escalating templates for 7, 14, 30, and 60+ day overdue invoices.',
    href: '/tools/overdue-follow-up',
    icon: '\u{1F4E8}',
    color: 'from-rose-400 to-orange-500',
    badge: '',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Credit Note Generator',
    description:
      'Generate professional, GST-compliant credit notes for overcharges, refunds, and invoice adjustments. Automatic GST calculations, ABN formatting, and ATO-aligned templates.',
    href: '/tools/credit-note-generator',
    icon: '\u{1F4DD}',
    color: 'from-indigo-400 to-teal-500',
    badge: '',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Payment Receipt Generator',
    description:
      'Create professional payment receipts confirming funds received. GST breakdown, payment method tracking, invoice references, and ATO-compliant formatting.',
    href: '/tools/receipt-generator',
    icon: '\u{1F9FE}',
    color: 'from-emerald-400 to-blue-500',
    badge: '',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Letter of Demand Generator',
    description:
      'Generate a formal letter of demand for unpaid invoices. The essential legal step before court or tribunal action — with interest calculations, response deadlines, and state-by-state tribunal guidance.',
    href: '/tools/letter-of-demand',
    icon: '\u{2696}',
    color: 'from-rose-400 to-orange-500',
    badge: 'New',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Annual Revenue Report',
    description:
      'Generate a comprehensive annual revenue report for your freelance business. Client breakdown, monthly trends, GST collected, profit margins, and key business insights — ready for your accountant.',
    href: '/tools/annual-revenue-report',
    icon: '\u{1F4CA}',
    color: 'from-teal-400 to-blue-500',
    badge: '',
    category: 'Financial Planning',
  },
  {
    title: 'BAS Preparation Checklist',
    description:
      'Generate a personalised BAS preparation checklist for your freelance business. GST reconciliation, PAYG instalments, income verification, expense review, and lodgement checks — quarterly BAS made simple.',
    href: '/tools/bas-preparation',
    icon: '\u{1F4CB}',
    color: 'from-violet-400 to-teal-500',
    badge: 'New',
    category: 'Tax & Compliance',
  },
  {
    title: 'Milestone Payment Calculator',
    description:
      'Create milestone-based payment schedules for freelance projects. Split totals into deposits and milestones with GST, due dates, and payment terms. Quick presets for common splits.',
    href: '/tools/milestone-payment-calculator',
    icon: '\u{1F3AF}',
    color: 'from-blue-400 to-purple-500',
    badge: '',
    category: 'Financial Planning',
  },
  {
    title: 'Price Increase Letter Generator',
    description:
      'Generate professional rate increase letters for freelance clients. State current and new rates, explain the reasons, set an effective date, and maintain client relationships — with GST-inclusive amounts.',
    href: '/tools/price-increase-letter',
    icon: '\u{1F4C8}',
    color: 'from-amber-400 to-rose-500',
    badge: 'New',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Project Completion Certificate',
    description:
      'Generate a professional project completion certificate with deliverables checklist, financial summary, warranty terms, and sign-off section. Formally close projects and trigger final payment.',
    href: '/tools/project-completion-certificate',
    icon: '\u{1F4DC}',
    color: 'from-teal-400 to-blue-500',
    badge: 'New',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Freelance Contract Generator',
    description:
      'Generate professional freelance contracts and service agreements with scope, payment terms, IP clauses, confidentiality, termination, and GST — customised to your project type and Australian law.',
    href: '/tools/contract-generator',
    icon: '\u{1F4DD}',
    color: 'from-indigo-400 to-teal-500',
    badge: 'New',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Client Feedback Survey',
    description:
      'Create professional post-project feedback surveys to collect testimonials, measure client satisfaction, calculate NPS, and identify improvement areas. Customised to your service type.',
    href: '/tools/client-feedback-survey',
    icon: '\u{2B50}',
    color: 'from-amber-400 to-teal-500',
    badge: '',
    category: 'Business Analytics',
  },
  {
    title: 'International Invoice Calculator',
    description:
      'Calculate currency conversions, compare international payment fees (Wise, PayPal, SWIFT, Stripe), check GST-free export rules, and find the cheapest way to get paid by overseas clients.',
    href: '/tools/international-invoice-calculator',
    icon: '\u{1F30F}',
    color: 'from-cyan-400 to-indigo-500',
    badge: 'New',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Business Registration Checklist',
    description:
      'Generate a personalised checklist to start freelancing in Australia. ABN registration, GST, insurance, super, bank accounts, and business essentials — customised to your industry and structure.',
    href: '/tools/business-registration-checklist',
    icon: '\u{1F4CB}',
    color: 'from-teal-400 to-purple-500',
    badge: 'New',
    category: 'Business Analytics',
  },
  {
    title: 'Emergency Fund Calculator',
    description:
      'Calculate how much emergency savings you need as an Australian freelancer. Personalised targets based on expenses, income variability, dependents, and risk profile — with timeline projections.',
    href: '/tools/emergency-fund-calculator',
    icon: '\u{1F6E1}',
    color: 'from-emerald-400 to-green-500',
    badge: 'New',
    category: 'Financial Planning',
  },
  {
    title: 'Invoice Dispute Resolution',
    description:
      'Generate professional dispute response letters when clients challenge your invoices. Address amount disputes, scope disagreements, quality issues — with evidence references, resolution proposals, and escalation paths.',
    href: '/tools/invoice-dispute-resolution',
    icon: '\u{2696}',
    color: 'from-purple-400 to-indigo-500',
    badge: 'New',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Invoice Email Template Generator',
    description:
      'Generate professional email templates for sending invoices, chasing overdue payments, and confirming receipt. 6 email types with 3 tone options — copy and send in seconds.',
    href: '/tools/invoice-email-template',
    icon: '\u{1F4E7}',
    color: 'from-sky-400 to-blue-500',
    badge: 'New',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Business Valuation Calculator',
    description:
      'Estimate the value of your freelance business using SDE multiple, revenue multiple, and asset-based methods. Personalised factors, value range, and tips to increase your business worth.',
    href: '/tools/business-valuation-calculator',
    icon: '\u{1F4B0}',
    color: 'from-amber-400 to-yellow-500',
    badge: 'New',
    category: 'Business Analytics',
  },
  {
    title: 'Freelance Retirement Calculator',
    description:
      'Plan your retirement as an Australian freelancer. Project your super balance, calculate contribution gaps, see tax savings from salary sacrifice, and get a year-by-year growth timeline.',
    href: '/tools/retirement-calculator',
    icon: '\u{1F3D6}',
    color: 'from-emerald-400 to-teal-500',
    badge: 'New',
    category: 'Financial Planning',
  },
  {
    title: 'Subcontractor Agreement Generator',
    description:
      'Generate professional subcontractor agreements for hiring other freelancers. Independent contractor clauses, IP ownership, confidentiality, payment terms, and GST handling — customised to Australian law.',
    href: '/tools/subcontractor-agreement',
    icon: '\u{1F4DD}',
    color: 'from-cyan-400 to-blue-500',
    badge: 'New',
    category: 'Invoicing & Documents',
  },
  {
    title: 'NDA / Confidentiality Agreement',
    description:
      'Generate professional Non-Disclosure Agreements for freelance projects. Mutual or one-way NDAs with confidential information definitions, exclusions, duration, governing law, and additional clauses — customised to Australian law.',
    href: '/tools/nda-generator',
    icon: '\u{1F512}',
    color: 'from-slate-400 to-zinc-500',
    badge: 'New',
    category: 'Invoicing & Documents',
  },
  {
    title: 'PAYG Installment Calculator',
    description:
      'Calculate your quarterly PAYG installments using the rate or amount method. Compare against estimated actual tax, see shortfall or surplus, and plan your cash flow with BAS due dates and monthly set-aside amounts.',
    href: '/tools/payg-calculator',
    icon: '\u{1F4B3}',
    color: 'from-violet-400 to-purple-500',
    badge: 'New',
    category: 'Tax & Compliance',
  },
  {
    title: 'Tax Deduction Finder',
    description:
      'Find all the tax deductions you can claim as an Australian freelancer. Interactive 4-step tool — select your industry, work arrangements, and income to get a personalised deduction checklist with ATO-accurate 2025-26 rates.',
    href: '/tools/tax-deduction-finder',
    icon: '\u{1F50D}',
    color: 'from-emerald-400 to-green-500',
    badge: 'New',
    category: 'Tax & Compliance',
  },
  {
    title: 'Client Communication Templates',
    description:
      'Professional email templates for common freelance scenarios — project delays, scope changes, rate increases, pausing work, ending relationships, boundary setting, milestone updates, and client welcome emails. 3 tones for each.',
    href: '/tools/client-communication-templates',
    icon: '\u{1F4E7}',
    color: 'from-rose-400 to-pink-500',
    badge: 'New',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Privacy Policy Generator',
    description:
      'Generate a professional, Australian Privacy Act compliant privacy policy for your freelance business or website. Covers data collection, APPs, GDPR, cookies, and third-party sharing — customised to your business.',
    href: '/tools/privacy-policy-generator',
    icon: '\u{1F512}',
    color: 'from-teal-400 to-cyan-500',
    badge: 'New',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Terms of Service Generator',
    description:
      'Generate professional terms of service for Australian freelancers and small businesses. Payment terms, IP ownership, liability, refunds, termination, and Australian Consumer Law compliance — all customised to your services.',
    href: '/tools/terms-of-service-generator',
    icon: '\u{1F4DC}',
    color: 'from-amber-400 to-orange-500',
    badge: 'New',
    category: 'Invoicing & Documents',
  },
  {
    title: 'Pay Yourself Calculator',
    description:
      'Calculate a consistent monthly salary from variable freelance income. Tax set-aside, super contributions, GST reserve, expense buffer, income stability scoring, and cash runway — using 2025-26 ATO rates.',
    href: '/tools/pay-yourself-calculator',
    icon: '\u{1F4B0}',
    color: 'from-lime-400 to-green-500',
    badge: 'New',
    category: 'Financial Planning',
  },
  {
    title: 'Work Capacity Planner',
    description:
      'Calculate how many clients you can realistically handle. Billable hours breakdown, capacity utilisation gauge, revenue projections, burnout risk assessment, time allocation planner, and optimal client mix recommendations.',
    href: '/tools/capacity-planner',
    icon: '\u{1F4CA}',
    color: 'from-indigo-400 to-violet-500',
    badge: 'New',
    category: 'Business Analytics',
  },
  {
    title: 'Marketing Budget Calculator',
    description:
      'Calculate your optimal freelance marketing budget by business stage and growth targets. Per-channel allocation, ROI projections, estimated new clients per month, and time vs money recommendations.',
    href: '/tools/marketing-budget-calculator',
    icon: '\u{1F4E3}',
    color: 'from-amber-400 to-orange-500',
    badge: 'New',
    category: 'Financial Planning',
  },
  {
    title: 'Client Acquisition Cost Calculator',
    description:
      'Calculate your CAC per marketing channel including time costs. CLV:CAC ratio analysis, payback period, channel efficiency comparison, and budget reallocation recommendations.',
    href: '/tools/acquisition-cost-calculator',
    icon: '\u{1F3AF}',
    color: 'from-cyan-400 to-sky-500',
    badge: 'New',
    category: 'Business Analytics',
  },
  {
    title: 'Profit First Calculator',
    description:
      'Implement the Profit First method for your freelance business. Allocate revenue into Owner\'s Pay, Profit, Tax, Super, and OpEx accounts with Australian tax rates. Gap analysis, quarterly distributions, and small-plate recommendations.',
    href: '/tools/profit-first-calculator',
    icon: '\u{1F4B0}',
    color: 'from-green-400 to-emerald-500',
    badge: 'New',
    category: 'Financial Planning',
  },
  {
    title: 'Business Trip Expense Calculator',
    description:
      'Calculate deductible travel expenses for business trips using ATO reasonable travel amounts. Domestic and international rates, meal allowances, accommodation, mixed-purpose trip apportionment, and tax savings estimate.',
    href: '/tools/business-trip-calculator',
    icon: '\u{2708}',
    color: 'from-sky-400 to-blue-500',
    badge: 'New',
    category: 'Tax & Compliance',
  },
];
