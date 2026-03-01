import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import EmailCapture from '@/app/tools/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Invoicing & Business Glossary for Australian Freelancers — InvoiceFlow',
  description:
    'Plain-English definitions of ABN, GST, BAS, PAYG, tax invoices, superannuation, and every business term Australian freelancers need to know. Free glossary with ATO-accurate information.',
  keywords: [
    'invoicing glossary australia',
    'business terms freelancer',
    'what is GST australia',
    'what is BAS australia',
    'what is ABN',
    'PAYG meaning',
    'tax invoice definition',
    'freelancer business terms',
    'australian business glossary',
  ],
  alternates: { canonical: '/glossary' },
  openGraph: {
    title: 'Invoicing & Business Glossary for Australian Freelancers — InvoiceFlow',
    description:
      'Plain-English definitions of every business term Australian freelancers need to know. ABN, GST, BAS, PAYG, super, and more.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invoiceflow-teal.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://invoiceflow-teal.vercel.app/glossary' },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Australian Business & Invoicing Glossary',
  description: 'Essential business terms for Australian freelancers, sole traders, and contractors.',
  numberOfItems: 64,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ABN (Australian Business Number)', url: 'https://invoiceflow-teal.vercel.app/glossary/abn' },
    { '@type': 'ListItem', position: 2, name: 'GST (Goods and Services Tax)', url: 'https://invoiceflow-teal.vercel.app/glossary/gst' },
    { '@type': 'ListItem', position: 3, name: 'BAS (Business Activity Statement)', url: 'https://invoiceflow-teal.vercel.app/glossary/bas' },
    { '@type': 'ListItem', position: 4, name: 'PAYG (Pay As You Go)', url: 'https://invoiceflow-teal.vercel.app/glossary/payg' },
    { '@type': 'ListItem', position: 5, name: 'Tax Invoice', url: 'https://invoiceflow-teal.vercel.app/glossary/tax-invoice' },
    { '@type': 'ListItem', position: 6, name: 'Sole Trader', url: 'https://invoiceflow-teal.vercel.app/glossary/sole-trader' },
    { '@type': 'ListItem', position: 7, name: 'Credit Note', url: 'https://invoiceflow-teal.vercel.app/glossary/credit-note' },
    { '@type': 'ListItem', position: 8, name: 'Superannuation', url: 'https://invoiceflow-teal.vercel.app/glossary/superannuation' },
    { '@type': 'ListItem', position: 9, name: 'Invoice', url: 'https://invoiceflow-teal.vercel.app/glossary/invoice' },
    { '@type': 'ListItem', position: 10, name: 'Tax File Number (TFN)', url: 'https://invoiceflow-teal.vercel.app/glossary/tfn' },
    { '@type': 'ListItem', position: 11, name: 'Professional Indemnity Insurance', url: 'https://invoiceflow-teal.vercel.app/glossary/professional-indemnity' },
    { '@type': 'ListItem', position: 12, name: 'ACN (Australian Company Number)', url: 'https://invoiceflow-teal.vercel.app/glossary/acn' },
    { '@type': 'ListItem', position: 13, name: 'Accounts Receivable', url: 'https://invoiceflow-teal.vercel.app/glossary/accounts-receivable' },
    { '@type': 'ListItem', position: 14, name: 'Cash Flow', url: 'https://invoiceflow-teal.vercel.app/glossary/cash-flow' },
    { '@type': 'ListItem', position: 15, name: 'Pty Ltd (Proprietary Limited)', url: 'https://invoiceflow-teal.vercel.app/glossary/pty-ltd' },
    { '@type': 'ListItem', position: 16, name: 'Depreciation', url: 'https://invoiceflow-teal.vercel.app/glossary/depreciation' },
    { '@type': 'ListItem', position: 17, name: 'Payment Terms', url: 'https://invoiceflow-teal.vercel.app/glossary/payment-terms' },
    { '@type': 'ListItem', position: 18, name: 'Contractor vs Employee', url: 'https://invoiceflow-teal.vercel.app/glossary/contractor-vs-employee' },
    { '@type': 'ListItem', position: 19, name: 'Income Tax', url: 'https://invoiceflow-teal.vercel.app/glossary/income-tax' },
    { '@type': 'ListItem', position: 20, name: 'Purchase Order', url: 'https://invoiceflow-teal.vercel.app/glossary/purchase-order' },
    { '@type': 'ListItem', position: 21, name: 'Profit and Loss Statement', url: 'https://invoiceflow-teal.vercel.app/glossary/profit-and-loss' },
    { '@type': 'ListItem', position: 22, name: 'Retainer Agreement', url: 'https://invoiceflow-teal.vercel.app/glossary/retainer' },
    { '@type': 'ListItem', position: 23, name: 'Quote (Quotation)', url: 'https://invoiceflow-teal.vercel.app/glossary/quote' },
    { '@type': 'ListItem', position: 24, name: 'Scope Creep', url: 'https://invoiceflow-teal.vercel.app/glossary/scope-creep' },
    { '@type': 'ListItem', position: 25, name: 'Public Liability Insurance', url: 'https://invoiceflow-teal.vercel.app/glossary/public-liability' },
    { '@type': 'ListItem', position: 26, name: 'Invoice Factoring', url: 'https://invoiceflow-teal.vercel.app/glossary/invoice-factoring' },
    { '@type': 'ListItem', position: 27, name: 'Bookkeeping', url: 'https://invoiceflow-teal.vercel.app/glossary/bookkeeping' },
    { '@type': 'ListItem', position: 28, name: 'Input Tax Credits (GST Credits)', url: 'https://invoiceflow-teal.vercel.app/glossary/input-tax-credits' },
    { '@type': 'ListItem', position: 29, name: 'Billable Hours', url: 'https://invoiceflow-teal.vercel.app/glossary/billable-hours' },
    { '@type': 'ListItem', position: 30, name: 'Profit Margin', url: 'https://invoiceflow-teal.vercel.app/glossary/profit-margin' },
    { '@type': 'ListItem', position: 31, name: 'Workers Compensation', url: 'https://invoiceflow-teal.vercel.app/glossary/workers-compensation' },
    { '@type': 'ListItem', position: 32, name: 'Business Structure', url: 'https://invoiceflow-teal.vercel.app/glossary/business-structure' },
    { '@type': 'ListItem', position: 33, name: 'Capital Gains Tax (CGT)', url: 'https://invoiceflow-teal.vercel.app/glossary/capital-gains-tax' },
    { '@type': 'ListItem', position: 34, name: 'Statement of Account', url: 'https://invoiceflow-teal.vercel.app/glossary/statement-of-account' },
    { '@type': 'ListItem', position: 35, name: 'Hourly Rate', url: 'https://invoiceflow-teal.vercel.app/glossary/hourly-rate' },
    { '@type': 'ListItem', position: 36, name: 'Bad Debt', url: 'https://invoiceflow-teal.vercel.app/glossary/bad-debt' },
    { '@type': 'ListItem', position: 37, name: 'Accounts Payable', url: 'https://invoiceflow-teal.vercel.app/glossary/accounts-payable' },
    { '@type': 'ListItem', position: 38, name: 'Dividend', url: 'https://invoiceflow-teal.vercel.app/glossary/dividend' },
    { '@type': 'ListItem', position: 39, name: 'Late Payment Interest', url: 'https://invoiceflow-teal.vercel.app/glossary/late-payment-interest' },
    { '@type': 'ListItem', position: 40, name: 'Tax Return', url: 'https://invoiceflow-teal.vercel.app/glossary/tax-return' },
    { '@type': 'ListItem', position: 41, name: 'Withholding Tax', url: 'https://invoiceflow-teal.vercel.app/glossary/withholding-tax' },
    { '@type': 'ListItem', position: 42, name: 'Tax Deduction', url: 'https://invoiceflow-teal.vercel.app/glossary/tax-deduction' },
    { '@type': 'ListItem', position: 43, name: 'Gig Economy', url: 'https://invoiceflow-teal.vercel.app/glossary/gig-economy' },
    { '@type': 'ListItem', position: 44, name: 'Fringe Benefits Tax (FBT)', url: 'https://invoiceflow-teal.vercel.app/glossary/fringe-benefits-tax' },
    { '@type': 'ListItem', position: 45, name: 'Invoice Template', url: 'https://invoiceflow-teal.vercel.app/glossary/invoice-template' },
    { '@type': 'ListItem', position: 46, name: 'Overdue Invoice', url: 'https://invoiceflow-teal.vercel.app/glossary/overdue-invoice' },
    { '@type': 'ListItem', position: 47, name: 'Business Expenses', url: 'https://invoiceflow-teal.vercel.app/glossary/business-expenses' },
    { '@type': 'ListItem', position: 48, name: 'Cash Basis Accounting', url: 'https://invoiceflow-teal.vercel.app/glossary/cash-basis-accounting' },
    { '@type': 'ListItem', position: 49, name: 'Record Keeping', url: 'https://invoiceflow-teal.vercel.app/glossary/record-keeping' },
    { '@type': 'ListItem', position: 50, name: 'Tax Agent', url: 'https://invoiceflow-teal.vercel.app/glossary/tax-agent' },
    { '@type': 'ListItem', position: 51, name: 'Break-Even Point', url: 'https://invoiceflow-teal.vercel.app/glossary/break-even-point' },
    { '@type': 'ListItem', position: 52, name: 'Working Capital', url: 'https://invoiceflow-teal.vercel.app/glossary/working-capital' },
    { '@type': 'ListItem', position: 53, name: 'Registered Business Name', url: 'https://invoiceflow-teal.vercel.app/glossary/registered-business-name' },
    { '@type': 'ListItem', position: 54, name: 'Net Income', url: 'https://invoiceflow-teal.vercel.app/glossary/net-income' },
    { '@type': 'ListItem', position: 55, name: 'Tax Offset', url: 'https://invoiceflow-teal.vercel.app/glossary/tax-offset' },
    { '@type': 'ListItem', position: 56, name: 'Invoice Aging', url: 'https://invoiceflow-teal.vercel.app/glossary/invoice-aging' },
    { '@type': 'ListItem', position: 57, name: 'Financial Year', url: 'https://invoiceflow-teal.vercel.app/glossary/financial-year' },
    { '@type': 'ListItem', position: 58, name: 'Tax Planning', url: 'https://invoiceflow-teal.vercel.app/glossary/tax-planning' },
    { '@type': 'ListItem', position: 59, name: 'Billing Cycle', url: 'https://invoiceflow-teal.vercel.app/glossary/billing-cycle' },
    { '@type': 'ListItem', position: 60, name: 'Expense Report', url: 'https://invoiceflow-teal.vercel.app/glossary/expense-report' },
    { '@type': 'ListItem', position: 61, name: 'Medicare Levy', url: 'https://invoiceflow-teal.vercel.app/glossary/medicare-levy' },
    { '@type': 'ListItem', position: 62, name: 'Business Insurance', url: 'https://invoiceflow-teal.vercel.app/glossary/business-insurance' },
    { '@type': 'ListItem', position: 63, name: 'Tax Residency', url: 'https://invoiceflow-teal.vercel.app/glossary/tax-residency' },
    { '@type': 'ListItem', position: 64, name: 'Subcontractor', url: 'https://invoiceflow-teal.vercel.app/glossary/subcontractor' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What business terms do Australian freelancers need to know?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most important terms are ABN (Australian Business Number), GST (Goods and Services Tax), BAS (Business Activity Statement), PAYG (Pay As You Go instalments), superannuation, tax invoices, and credit notes. Understanding these is essential for legal compliance and getting paid correctly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I find plain-English explanations of ATO terminology?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our glossary provides plain-English definitions of every business term Australian freelancers encounter. Each entry includes practical examples, ATO references, and links to relevant tools and guides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to understand all these terms before starting freelancing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should understand the basics: ABN (you need one to invoice), GST (you must register once you earn $75K+), and tax invoices (required for GST-registered businesses). Other terms become relevant as your business grows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these definitions specific to Australian tax law?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All definitions reference current Australian tax law, ATO rates, and thresholds for the 2025-26 financial year. Some terms like GST and BAS are uniquely Australian.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I use InvoiceFlow to handle these requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InvoiceFlow handles ABN display, GST calculations, tax invoice formatting, and BAS-ready reporting automatically. Start for free with up to 5 invoices per month — no accounting knowledge required.',
      },
    },
  ],
};

const categories = [
  {
    name: 'Tax & Compliance',
    color: 'from-emerald-500 to-teal-500',
    terms: [
      { name: 'ABN', full: 'Australian Business Number', slug: 'abn', description: 'Your unique 11-digit business identifier required for invoicing and tax.' },
      { name: 'GST', full: 'Goods and Services Tax', slug: 'gst', description: 'The 10% tax on most goods and services in Australia. Registration required at $75K.' },
      { name: 'BAS', full: 'Business Activity Statement', slug: 'bas', description: 'Your quarterly report to the ATO for GST, PAYG, and other tax obligations.' },
      { name: 'PAYG', full: 'Pay As You Go', slug: 'payg', description: 'Pre-paying your income tax in quarterly instalments to the ATO.' },
      { name: 'Super', full: 'Superannuation', slug: 'superannuation', description: 'Australia\'s mandatory retirement savings system. 11.5% guarantee rate for 2025-26.' },
      { name: 'TFN', full: 'Tax File Number (TFN)', slug: 'tfn', description: 'Your unique 9-digit tax identifier issued by the ATO. Required for tax returns and bank accounts.' },
      { name: 'Depreciation', full: 'Depreciation', slug: 'depreciation', description: 'Spreading the cost of business assets over their useful life for tax deductions. $20K instant write-off.' },
      { name: 'Income Tax', full: 'Income Tax', slug: 'income-tax', description: 'Tax on your freelance earnings. $18,200 tax-free threshold, then progressive rates up to 45%.' },
      { name: 'ITC', full: 'Input Tax Credits (GST Credits)', slug: 'input-tax-credits', description: 'The GST included in business purchases you can claim back from the ATO on your BAS.' },
      { name: 'CGT', full: 'Capital Gains Tax (CGT)', slug: 'capital-gains-tax', description: 'Tax on profit from selling assets like property, shares, business, or crypto. 50% discount for 12+ months.' },
      { name: 'Tax Return', full: 'Tax Return', slug: 'tax-return', description: 'Your annual income tax return lodged with the ATO. Due 31 October (or later via tax agent).' },
      { name: 'Withholding', full: 'Withholding Tax', slug: 'withholding-tax', description: 'Tax withheld from payments before you receive them. 47% without ABN, voluntary PAYG for freelancers.' },
      { name: 'Deduction', full: 'Tax Deduction', slug: 'tax-deduction', description: 'Expenses you can claim to reduce taxable income. Home office 67c/hr, vehicle 85c/km, $20K write-off.' },
      { name: 'FBT', full: 'Fringe Benefits Tax (FBT)', slug: 'fringe-benefits-tax', description: 'Tax on non-cash benefits provided to employees. 47% rate, separate from income tax.' },
      { name: 'Expenses', full: 'Business Expenses', slug: 'business-expenses', description: 'Costs incurred running your business that are tax-deductible. Home office 67c/hr, vehicle 85c/km.' },
      { name: 'Records', full: 'Record Keeping', slug: 'record-keeping', description: 'Systematic retention of business documents. ATO requires 5 years of records from sole traders.' },
      { name: 'Tax Agent', full: 'Tax Agent', slug: 'tax-agent', description: 'TPB-registered professional who can lodge tax returns and BAS on your behalf. Fees $200-$600.' },
      { name: 'FY', full: 'Financial Year', slug: 'financial-year', description: 'The 12-month accounting period (1 July to 30 June in Australia) used for tax and financial reporting.' },
      { name: 'Tax Plan', full: 'Tax Planning', slug: 'tax-planning', description: 'Legal strategies to minimise your tax liability — timing income, maximising deductions, super contributions.' },
      { name: 'Medicare', full: 'Medicare Levy', slug: 'medicare-levy', description: '2% levy on taxable income to fund public healthcare. Plus Medicare Levy Surcharge (1-1.5%) for high earners without PHI.' },
      { name: 'Tax Res', full: 'Tax Residency', slug: 'tax-residency', description: 'Your residency status determines how Australia taxes your income — worldwide (resident) or AU-source only (non-resident).' },
    ],
  },
  {
    name: 'Invoicing & Documents',
    color: 'from-blue-500 to-indigo-500',
    terms: [
      { name: 'Invoice', full: 'Invoice', slug: 'invoice', description: 'A commercial document requesting payment for goods or services. The foundation of getting paid.' },
      { name: 'Tax Invoice', full: 'Tax Invoice', slug: 'tax-invoice', description: 'The GST document your clients need to claim input tax credits from the ATO.' },
      { name: 'Credit Note', full: 'Credit Note', slug: 'credit-note', description: 'A document that reduces or cancels the amount on a previously issued invoice.' },
      { name: 'PO', full: 'Purchase Order', slug: 'purchase-order', description: 'A buyer\'s document authorising a purchase. Required by corporates and government agencies.' },
      { name: 'Quote', full: 'Quote (Quotation)', slug: 'quote', description: 'A formal document stating a fixed price for a specific scope of work. Becomes binding on acceptance.' },
      { name: 'SOA', full: 'Statement of Account', slug: 'statement-of-account', description: 'A summary document showing all transactions, invoices, payments, and outstanding balance with a client.' },
      { name: 'Template', full: 'Invoice Template', slug: 'invoice-template', description: 'A pre-formatted document layout for creating professional invoices quickly and consistently.' },
    ],
  },
  {
    name: 'Pricing & Billing',
    color: 'from-sky-500 to-blue-500',
    terms: [
      { name: 'Billable Hrs', full: 'Billable Hours', slug: 'billable-hours', description: 'Time spent directly on client work that can be invoiced. Freelancers typically bill 60-70% of working hours.' },
      { name: 'Profit Margin', full: 'Profit Margin', slug: 'profit-margin', description: 'Percentage of revenue remaining as profit after expenses. Target 50-70% net margin for service businesses.' },
      { name: 'Hourly Rate', full: 'Hourly Rate', slug: 'hourly-rate', description: 'The amount you charge per hour of work. Most common freelancer pricing model. AU range: $50-$300+/hr.' },
      { name: 'Billing Cycle', full: 'Billing Cycle', slug: 'billing-cycle', description: 'The recurring interval between invoices — weekly, monthly, or milestone-based. Affects cash flow timing.' },
    ],
  },
  {
    name: 'Cash Flow & Payments',
    color: 'from-cyan-500 to-blue-500',
    terms: [
      { name: 'Cash Flow', full: 'Cash Flow', slug: 'cash-flow', description: 'The movement of money in and out of your business. Positive cash flow = survival.' },
      { name: 'AR', full: 'Accounts Receivable', slug: 'accounts-receivable', description: 'Money owed to you by clients for work completed. Your outstanding invoices.' },
      { name: 'Terms', full: 'Payment Terms', slug: 'payment-terms', description: 'Conditions for when and how invoices must be paid. Net 30, Due on Receipt, EOM, and more.' },
      { name: 'Retainer', full: 'Retainer Agreement', slug: 'retainer', description: 'A recurring fee arrangement where a client reserves your time, expertise, or deliverables on an ongoing basis.' },
      { name: 'Factoring', full: 'Invoice Factoring', slug: 'invoice-factoring', description: 'Selling unpaid invoices to a third party at a discount for immediate cash flow.' },
      { name: 'Bad Debt', full: 'Bad Debt', slug: 'bad-debt', description: 'An amount owed that will never be collected. Tax-deductible write-off with GST adjustment available.' },
      { name: 'AP', full: 'Accounts Payable', slug: 'accounts-payable', description: 'Money you owe to suppliers and subcontractors. The opposite of accounts receivable.' },
      { name: 'Interest', full: 'Late Payment Interest', slug: 'late-payment-interest', description: 'Interest you can charge on overdue invoices. ATO GIC rate ~11% p.a. as a benchmark.' },
      { name: 'Overdue', full: 'Overdue Invoice', slug: 'overdue-invoice', description: 'An invoice that has passed its payment due date without being paid. Recovery steps and legal rights.' },
    ],
  },
  {
    name: 'Business Structure',
    color: 'from-lime-500 to-green-500',
    terms: [
      { name: 'Sole Trader', full: 'Sole Trader', slug: 'sole-trader', description: 'The simplest business structure — an individual trading on their own.' },
      { name: 'ACN', full: 'Australian Company Number (ACN)', slug: 'acn', description: 'A 9-digit identifier for registered companies. Needed if you incorporate as a Pty Ltd.' },
      { name: 'Pty Ltd', full: 'Proprietary Limited Company (Pty Ltd)', slug: 'pty-ltd', description: 'The most common company structure in Australia. Separate legal entity with limited liability.' },
      { name: 'C vs E', full: 'Contractor vs Employee', slug: 'contractor-vs-employee', description: 'The critical distinction that determines tax, super, leave, and legal obligations. Get it wrong = penalties.' },
      { name: 'Structure', full: 'Business Structure', slug: 'business-structure', description: 'The legal framework for your business: sole trader, Pty Ltd, partnership, or trust. Affects tax, liability, and compliance.' },
      { name: 'Subcontractor', full: 'Subcontractor', slug: 'subcontractor', description: 'A person or business hired by a contractor to perform part of a project. Must have ABN, manage own tax and super.' },
    ],
  },
  {
    name: 'Financial Reporting',
    color: 'from-lime-500 to-green-500',
    terms: [
      { name: 'P&L', full: 'Profit and Loss Statement', slug: 'profit-and-loss', description: 'A summary of your income and expenses over a period, showing whether your business made a profit or loss.' },
      { name: 'Bookkeeping', full: 'Bookkeeping', slug: 'bookkeeping', description: 'Systematic recording of all financial transactions. ATO requires records kept for 5 years.' },
      { name: 'Dividend', full: 'Dividend', slug: 'dividend', description: 'Payment from a company to its shareholders from profits. Relevant when you incorporate as Pty Ltd.' },
      { name: 'Cash Basis', full: 'Cash Basis Accounting', slug: 'cash-basis-accounting', description: 'Recording income when received and expenses when paid. The default method for most AU sole traders.' },
      { name: 'Expenses', full: 'Expense Report', slug: 'expense-report', description: 'A document summarising business expenses for tax deductions, BAS claims, and financial analysis.' },
    ],
  },
  {
    name: 'Financial Planning',
    color: 'from-amber-500 to-orange-500',
    terms: [
      { name: 'Break-Even', full: 'Break-Even Point', slug: 'break-even-point', description: 'The revenue level where total income equals total costs — neither profit nor loss. Essential for pricing.' },
      { name: 'Working Capital', full: 'Working Capital', slug: 'working-capital', description: 'Current assets minus current liabilities — your financial buffer between invoicing and getting paid.' },
    ],
  },
  {
    name: 'Business Protection',
    color: 'from-emerald-500 to-green-500',
    terms: [
      { name: 'PI Insurance', full: 'Professional Indemnity Insurance', slug: 'professional-indemnity', description: 'Insurance protecting against claims of negligence, errors, or bad advice. Essential for service providers.' },
      { name: 'PLI', full: 'Public Liability Insurance', slug: 'public-liability', description: 'Insurance covering third-party injury and property damage. Essential for on-site work.' },
      { name: 'WorkCover', full: 'Workers Compensation', slug: 'workers-compensation', description: 'Compulsory insurance covering workplace injuries for employees. Mandatory once you hire anyone.' },
      { name: 'Insurance', full: 'Business Insurance', slug: 'business-insurance', description: 'Protection against financial losses — PI, PL, cyber, income protection, and more. Some types legally required.' },
    ],
  },
  {
    name: 'Project Management',
    color: 'from-red-500 to-rose-500',
    terms: [
      { name: 'Scope Creep', full: 'Scope Creep', slug: 'scope-creep', description: 'The gradual, uncontrolled expansion of project requirements beyond the original scope — the #1 profitability killer.' },
      { name: 'Gig Economy', full: 'Gig Economy', slug: 'gig-economy', description: 'The labour market of short-term, flexible, freelance work. 1.1M+ AU gig workers with unique tax obligations.' },
    ],
  },
];

const popularTerms = [
  { name: 'GST', slug: 'gst', searches: '22,200/mo', description: 'Goods and Services Tax — 10% tax on most Australian goods and services' },
  { name: 'Tax Invoice', slug: 'tax-invoice', searches: '18,100/mo', description: 'The document that proves GST was charged on a sale' },
  { name: 'ABN', slug: 'abn', searches: '14,800/mo', description: 'Australian Business Number — your 11-digit business identifier' },
  { name: 'Sole Trader', slug: 'sole-trader', searches: '14,800/mo', description: 'The simplest business structure for Australian freelancers' },
  { name: 'BAS', slug: 'bas', searches: '12,100/mo', description: 'Business Activity Statement — your quarterly ATO report' },
  { name: 'Super', slug: 'superannuation', searches: '12,100/mo', description: 'Superannuation — Australia\'s retirement savings system' },
  { name: 'PAYG', slug: 'payg', searches: '9,900/mo', description: 'Pay As You Go — pre-paying income tax in quarterly instalments' },
  { name: 'Credit Note', slug: 'credit-note', searches: '8,100/mo', description: 'A document that adjusts or cancels a previously issued invoice' },
  { name: 'Invoice', slug: 'invoice', searches: '40,500/mo', description: 'A commercial document requesting payment for goods or services provided' },
  { name: 'TFN', slug: 'tfn', searches: '12,100/mo', description: 'Tax File Number — your unique 9-digit ATO tax identifier' },
  { name: 'PI Insurance', slug: 'professional-indemnity', searches: '6,600/mo', description: 'Professional Indemnity — insurance against negligence and errors claims' },
  { name: 'ACN', slug: 'acn', searches: '5,400/mo', description: 'Australian Company Number — 9-digit ASIC identifier for registered companies' },
  { name: 'Cash Flow', slug: 'cash-flow', searches: '33,100/mo', description: 'The movement of money in and out of your business — critical for survival' },
  { name: 'Pty Ltd', slug: 'pty-ltd', searches: '22,200/mo', description: 'Proprietary Limited Company — the most common company structure in Australia' },
  { name: 'Depreciation', slug: 'depreciation', searches: '18,100/mo', description: 'Spreading asset costs over time for tax deductions. $20K instant write-off in 2025-26' },
  { name: 'Accounts Receivable', slug: 'accounts-receivable', searches: '14,800/mo', description: 'Money owed to you by clients for completed work — your outstanding invoices' },
  { name: 'Payment Terms', slug: 'payment-terms', searches: '12,100/mo', description: 'Net 30, Due on Receipt, EOM — conditions for when and how invoices must be paid' },
  { name: 'Contractor vs Employee', slug: 'contractor-vs-employee', searches: '22,200/mo', description: 'The ATO\'s multi-factor test that determines tax, super, and legal obligations' },
  { name: 'Income Tax', slug: 'income-tax', searches: '33,100/mo', description: 'How much tax freelancers pay — 2025-26 brackets, deductions, PAYG instalments' },
  { name: 'Purchase Order', slug: 'purchase-order', searches: '18,100/mo', description: 'A buyer\'s document authorising a purchase — required by corporates and government' },
  { name: 'P&L Statement', slug: 'profit-and-loss', searches: '14,800/mo', description: 'Profit and Loss Statement — your income minus expenses, showing business health' },
  { name: 'Retainer', slug: 'retainer', searches: '9,900/mo', description: 'Recurring fee arrangement for ongoing client work — the "holy grail" of freelance billing' },
  { name: 'Quote', slug: 'quote', searches: '22,200/mo', description: 'A formal fixed-price document sent before work begins — becomes binding on acceptance' },
  { name: 'Scope Creep', slug: 'scope-creep', searches: '8,100/mo', description: 'Uncontrolled expansion of project requirements — the #1 profitability killer for freelancers' },
  { name: 'Public Liability', slug: 'public-liability', searches: '18,100/mo', description: 'Insurance covering third-party injury and property damage — essential for on-site work' },
  { name: 'Invoice Factoring', slug: 'invoice-factoring', searches: '6,600/mo', description: 'Selling unpaid invoices for immediate cash flow — an alternative to waiting 30+ days' },
  { name: 'Bookkeeping', slug: 'bookkeeping', searches: '27,100/mo', description: 'Recording all financial transactions — ATO requires 5 years of records from sole traders' },
  { name: 'Input Tax Credits', slug: 'input-tax-credits', searches: '9,900/mo', description: 'GST paid on business expenses you can claim back from the ATO on your BAS' },
  { name: 'Billable Hours', slug: 'billable-hours', searches: '12,100/mo', description: 'Time spent directly on client work that can be invoiced — freelancers typically bill 60-70% of working hours' },
  { name: 'Profit Margin', slug: 'profit-margin', searches: '22,200/mo', description: 'Percentage of revenue remaining as profit — target 50-70% net margin for service-based freelancers' },
  { name: 'Workers Comp', slug: 'workers-compensation', searches: '14,800/mo', description: 'Workers compensation (WorkCover) — compulsory insurance for employees. Not required for solo traders.' },
  { name: 'Business Structure', slug: 'business-structure', searches: '18,100/mo', description: 'Sole trader vs Pty Ltd vs partnership vs trust — the legal framework that defines your tax and liability' },
  { name: 'CGT', slug: 'capital-gains-tax', searches: '27,100/mo', description: 'Capital Gains Tax — tax on profit from selling assets. 50% discount for assets held 12+ months' },
  { name: 'Statement of Account', slug: 'statement-of-account', searches: '8,100/mo', description: 'A summary of all invoices, payments, and balances between you and a client over a period' },
  { name: 'Hourly Rate', slug: 'hourly-rate', searches: '22,200/mo', description: 'How much to charge per hour as a freelancer — the most common pricing model in Australia' },
  { name: 'Bad Debt', slug: 'bad-debt', searches: '14,800/mo', description: 'Unpaid invoices you can write off as a tax deduction — with GST adjustment via BAS' },
  { name: 'Accounts Payable', slug: 'accounts-payable', searches: '12,100/mo', description: 'Money you owe to suppliers and subcontractors — your business expenses awaiting payment' },
  { name: 'Dividend', slug: 'dividend', searches: '22,200/mo', description: 'Payments from company profits to shareholders — relevant when freelancers incorporate as Pty Ltd' },
  { name: 'Late Payment Interest', slug: 'late-payment-interest', searches: '9,900/mo', description: 'Interest charged on overdue invoices — AU GIC rate ~11% p.a. as benchmark for freelancers' },
  { name: 'Tax Return', slug: 'tax-return', searches: '40,500/mo', description: 'Your annual income tax return lodged with the ATO — due 31 October or later via registered agent' },
  { name: 'Withholding Tax', slug: 'withholding-tax', searches: '14,800/mo', description: 'Tax deducted from payments before you receive them — 47% without ABN, PAYG withholding for workers' },
  { name: 'Tax Deduction', slug: 'tax-deduction', searches: '33,100/mo', description: 'Business expenses you can claim to reduce taxable income — home office, vehicle, equipment, and more' },
  { name: 'Gig Economy', slug: 'gig-economy', searches: '18,100/mo', description: 'The world of flexible, on-demand freelance work — 1.1M+ Australian gig workers and growing' },
  { name: 'FBT', slug: 'fringe-benefits-tax', searches: '12,100/mo', description: 'Fringe Benefits Tax — 47% tax on non-cash benefits like cars, parking, entertainment for employees' },
  { name: 'Invoice Template', slug: 'invoice-template', searches: '40,500/mo', description: 'Pre-formatted invoice layouts — professional templates for Australian freelancers and sole traders' },
  { name: 'Overdue Invoice', slug: 'overdue-invoice', searches: '14,800/mo', description: 'Invoices past their due date — recovery steps, reminder templates, and legal rights in Australia' },
  { name: 'Business Expenses', slug: 'business-expenses', searches: '22,200/mo', description: 'Tax-deductible costs of running your business — home office, vehicle, equipment, and more' },
  { name: 'Cash Basis Accounting', slug: 'cash-basis-accounting', searches: '12,100/mo', description: 'Recording income when received and expenses when paid — the default method for AU sole traders' },
  { name: 'Record Keeping', slug: 'record-keeping', searches: '14,800/mo', description: 'ATO record-keeping requirements — 5-year retention, digital records, $313 FTL penalty for non-compliance' },
  { name: 'Tax Agent', slug: 'tax-agent', searches: '18,100/mo', description: 'TPB-registered professionals who lodge tax returns and BAS — fees $200-$600, Oct 31 deadline via agent' },
  { name: 'Break-Even Point', slug: 'break-even-point', searches: '14,800/mo', description: 'The revenue level where income equals costs — critical for pricing, rate-setting, and financial planning' },
  { name: 'Working Capital', slug: 'working-capital', searches: '22,200/mo', description: 'Current assets minus liabilities — your financial buffer. Healthy ratio: 1.2-2.0 for freelancers' },
  { name: 'Business Name', slug: 'registered-business-name', searches: '14,800/mo', description: 'ASIC-registered trading name — $39/yr to register, required if not using your personal name' },
  { name: 'Net Income', slug: 'net-income', searches: '33,100/mo', description: 'Your actual take-home pay after expenses, tax, Medicare, and super — typically 55-65% of gross' },
  { name: 'Tax Offset', slug: 'tax-offset', searches: '18,100/mo', description: 'Dollar-for-dollar tax reduction — LITO up to $700, small business offset up to $1,000' },
  { name: 'Invoice Aging', slug: 'invoice-aging', searches: '9,900/mo', description: 'Tracking how long invoices have been unpaid — current, 30, 60, 90+ day buckets for collections' },
  { name: 'Financial Year', slug: 'financial-year', searches: '40,500/mo', description: '1 July to 30 June in Australia — the 12-month period that determines your tax obligations and deadlines' },
  { name: 'Tax Planning', slug: 'tax-planning', searches: '22,200/mo', description: 'Legal strategies to minimise tax — timing income, maximising deductions, super contributions' },
  { name: 'Billing Cycle', slug: 'billing-cycle', searches: '14,800/mo', description: 'The recurring interval between invoices — weekly, fortnightly, monthly, or milestone-based' },
  { name: 'Expense Report', slug: 'expense-report', searches: '18,100/mo', description: 'Business expense summary for tax deductions, BAS claims, and financial analysis — ATO requirements' },
  { name: 'Medicare Levy', slug: 'medicare-levy', searches: '40,500/mo', description: '2% levy on taxable income to fund public healthcare — plus MLS surcharge for high earners without PHI' },
  { name: 'Business Insurance', slug: 'business-insurance', searches: '14,800/mo', description: 'PI, PL, cyber, income protection — comprehensive guide to insurance for Australian freelancers' },
  { name: 'Tax Residency', slug: 'tax-residency', searches: '8,100/mo', description: 'ATO residency tests, 183-day rule, digital nomad tax — resident vs non-resident tax implications' },
  { name: 'Subcontractor', slug: 'subcontractor', searches: '22,200/mo', description: 'Subcontractor vs contractor, ABN requirements, TPAR reporting, tax obligations — Australian rules' },
];

export default function GlossaryHub() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative px-4 pt-20 pb-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-teal-500/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Glossary</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Business & Invoicing Glossary
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Every Business Term
            <span className="block bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Australian Freelancers Need to Know
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Plain-English definitions of ABN, GST, BAS, PAYG, tax invoices, credit notes, superannuation, and every other term the ATO throws at you. Written for humans, not accountants.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ATO-Accurate</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>2025-26 Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free Forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Terms */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Most Searched Terms</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularTerms.map((term) => (
            <Link
              key={term.slug}
              href={`/glossary/${term.slug}`}
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-sky-500/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  {term.name}
                </span>
                <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded-full">
                  {term.searches}
                </span>
              </div>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {term.description}
              </p>
              <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read definition
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Terms by Category */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Browse by Category</h2>
        {categories.map((category) => (
          <div key={category.name} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              <span className="text-sm text-gray-500">({category.terms.length} terms)</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {category.terms.map((term) => (
                <Link
                  key={term.slug}
                  href={`/glossary/${term.slug}`}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-gray-800/40 border border-gray-700/40 hover:border-emerald-500/40 hover:bg-gray-800/60 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-emerald-400">{term.name}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                      {term.full}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">{term.description}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-emerald-400 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Quick Reference Table */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Quick Reference: Key Numbers for 2025-26</h2>
        <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800/80">
                <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Term</th>
                <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">Key Number</th>
                <th className="text-left text-sm font-medium text-gray-300 px-6 py-4">What It Means</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/gst" className="text-sky-400 hover:text-sky-300 font-medium">GST Threshold</Link></td>
                <td className="px-6 py-4 text-white font-medium">$75,000/yr</td>
                <td className="px-6 py-4 text-sm text-gray-400">Must register for GST once turnover exceeds this</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/payg" className="text-sky-400 hover:text-sky-300 font-medium">PAYG Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">47% (no ABN)</td>
                <td className="px-6 py-4 text-sm text-gray-400">Tax withheld if you don&apos;t quote your ABN</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/bas" className="text-sky-400 hover:text-sky-300 font-medium">BAS Frequency</Link></td>
                <td className="px-6 py-4 text-white font-medium">Quarterly</td>
                <td className="px-6 py-4 text-sm text-gray-400">Due 28 days after each quarter ends</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><span className="text-sky-400 font-medium">Super Rate</span></td>
                <td className="px-6 py-4 text-white font-medium">11.5%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Superannuation guarantee rate for 2025-26</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><span className="text-sky-400 font-medium">Tax-Free Threshold</span></td>
                <td className="px-6 py-4 text-white font-medium">$18,200</td>
                <td className="px-6 py-4 text-sm text-gray-400">No tax on the first $18,200 of income</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><span className="text-sky-400 font-medium">Instant Asset Write-Off</span></td>
                <td className="px-6 py-4 text-white font-medium">$20,000</td>
                <td className="px-6 py-4 text-sm text-gray-400">Immediately deduct assets costing less than this</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/superannuation" className="text-sky-400 hover:text-sky-300 font-medium">Super Guarantee</Link></td>
                <td className="px-6 py-4 text-white font-medium">11.5%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Superannuation guarantee rate for 2025-26 (12% from July 2025)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/tax-invoice" className="text-sky-400 hover:text-sky-300 font-medium">Tax Invoice Threshold</Link></td>
                <td className="px-6 py-4 text-white font-medium">$82.50</td>
                <td className="px-6 py-4 text-sm text-gray-400">Tax invoice required for GST-registered sales above this amount</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/sole-trader" className="text-sky-400 hover:text-sky-300 font-medium">Sole Traders in AU</Link></td>
                <td className="px-6 py-4 text-white font-medium">2.47 million</td>
                <td className="px-6 py-4 text-sm text-gray-400">Active sole traders in Australia (ABS)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/tfn" className="text-sky-400 hover:text-sky-300 font-medium">TFN Withholding</Link></td>
                <td className="px-6 py-4 text-white font-medium">47%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Highest marginal rate withheld if you don&apos;t quote your TFN</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/acn" className="text-sky-400 hover:text-sky-300 font-medium">ACN Registration</Link></td>
                <td className="px-6 py-4 text-white font-medium">$576</td>
                <td className="px-6 py-4 text-sm text-gray-400">Cost to register a Pty Ltd company with ASIC</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/professional-indemnity" className="text-sky-400 hover:text-sky-300 font-medium">PI Insurance</Link></td>
                <td className="px-6 py-4 text-white font-medium">$300-$700/yr</td>
                <td className="px-6 py-4 text-sm text-gray-400">Typical PI insurance cost for Australian freelancers</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/cash-flow" className="text-sky-400 hover:text-sky-300 font-medium">Late Payments (AU)</Link></td>
                <td className="px-6 py-4 text-white font-medium">$26 billion</td>
                <td className="px-6 py-4 text-sm text-gray-400">Late payments owed to Australian small businesses</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/accounts-receivable" className="text-sky-400 hover:text-sky-300 font-medium">Avg Payment Time</Link></td>
                <td className="px-6 py-4 text-white font-medium">33 days</td>
                <td className="px-6 py-4 text-sm text-gray-400">Average time Australian invoices take to get paid</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/depreciation" className="text-sky-400 hover:text-sky-300 font-medium">Instant Write-Off</Link></td>
                <td className="px-6 py-4 text-white font-medium">$20,000</td>
                <td className="px-6 py-4 text-sm text-gray-400">Instant asset write-off threshold for 2025-26</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/pty-ltd" className="text-sky-400 hover:text-sky-300 font-medium">Company Tax Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">25%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Base rate entity company tax rate (turnover under $50M)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/payment-terms" className="text-sky-400 hover:text-sky-300 font-medium">Standard Payment Terms</Link></td>
                <td className="px-6 py-4 text-white font-medium">Net 30</td>
                <td className="px-6 py-4 text-sm text-gray-400">Most common payment terms for Australian freelancers (34-day AU average)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/contractor-vs-employee" className="text-sky-400 hover:text-sky-300 font-medium">Sham Contracting Penalty</Link></td>
                <td className="px-6 py-4 text-white font-medium">$469,500</td>
                <td className="px-6 py-4 text-sm text-gray-400">Maximum penalty per contravention for sham contracting (company)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/income-tax" className="text-sky-400 hover:text-sky-300 font-medium">Top Marginal Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">45% + 2% ML</td>
                <td className="px-6 py-4 text-sm text-gray-400">Income over $190,000 taxed at 45% plus 2% Medicare levy</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/purchase-order" className="text-sky-400 hover:text-sky-300 font-medium">PO 3-Way Match</Link></td>
                <td className="px-6 py-4 text-white font-medium">PO + Invoice + Delivery</td>
                <td className="px-6 py-4 text-sm text-gray-400">Standard corporate matching process before releasing payment</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/profit-and-loss" className="text-sky-400 hover:text-sky-300 font-medium">Healthy Net Margin</Link></td>
                <td className="px-6 py-4 text-white font-medium">50-70%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Target net profit margin for freelance service businesses</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/retainer" className="text-sky-400 hover:text-sky-300 font-medium">Retainer Discount</Link></td>
                <td className="px-6 py-4 text-white font-medium">10-15%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Standard discount off project rate for retainer commitment</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/quote" className="text-sky-400 hover:text-sky-300 font-medium">Quote Validity</Link></td>
                <td className="px-6 py-4 text-white font-medium">14-30 days</td>
                <td className="px-6 py-4 text-sm text-gray-400">Standard validity period for freelance quotes in Australia</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/scope-creep" className="text-sky-400 hover:text-sky-300 font-medium">Projects Affected</Link></td>
                <td className="px-6 py-4 text-white font-medium">52%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Percentage of projects that experience scope creep (PMI)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/public-liability" className="text-sky-400 hover:text-sky-300 font-medium">Standard PLI Cover</Link></td>
                <td className="px-6 py-4 text-white font-medium">$10M-$20M</td>
                <td className="px-6 py-4 text-sm text-gray-400">Standard public liability cover amount required by most commercial clients</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/invoice-factoring" className="text-sky-400 hover:text-sky-300 font-medium">Factoring Fee</Link></td>
                <td className="px-6 py-4 text-white font-medium">1-5%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Typical invoice factoring fee per 30 days in Australia</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/bookkeeping" className="text-sky-400 hover:text-sky-300 font-medium">Record Retention</Link></td>
                <td className="px-6 py-4 text-white font-medium">5 years</td>
                <td className="px-6 py-4 text-sm text-gray-400">ATO requires financial records kept for 5 years from lodgement date</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/input-tax-credits" className="text-sky-400 hover:text-sky-300 font-medium">ITC Claim Window</Link></td>
                <td className="px-6 py-4 text-white font-medium">4 years</td>
                <td className="px-6 py-4 text-sm text-gray-400">Maximum time to claim input tax credits from the date of purchase</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/billable-hours" className="text-sky-400 hover:text-sky-300 font-medium">Billable Utilisation</Link></td>
                <td className="px-6 py-4 text-white font-medium">60-70%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Typical percentage of working hours that are billable for freelancers</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/profit-margin" className="text-sky-400 hover:text-sky-300 font-medium">Healthy Net Margin</Link></td>
                <td className="px-6 py-4 text-white font-medium">50-70%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Target net profit margin for service-based freelancers (before income tax)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/workers-compensation" className="text-sky-400 hover:text-sky-300 font-medium">WorkCover Penalty</Link></td>
                <td className="px-6 py-4 text-white font-medium">$100K+</td>
                <td className="px-6 py-4 text-sm text-gray-400">Fines for operating with employees and without workers compensation</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/business-structure" className="text-sky-400 hover:text-sky-300 font-medium">Pty Ltd Threshold</Link></td>
                <td className="px-6 py-4 text-white font-medium">$120K-$150K</td>
                <td className="px-6 py-4 text-sm text-gray-400">Income level where incorporating as Pty Ltd may save tax vs sole trader</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/capital-gains-tax" className="text-sky-400 hover:text-sky-300 font-medium">CGT Discount</Link></td>
                <td className="px-6 py-4 text-white font-medium">50%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Individuals get 50% discount on capital gains for assets held 12+ months</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/capital-gains-tax" className="text-sky-400 hover:text-sky-300 font-medium">Small Biz CGT Threshold</Link></td>
                <td className="px-6 py-4 text-white font-medium">$2M / $6M</td>
                <td className="px-6 py-4 text-sm text-gray-400">Aggregated turnover or net CGT assets test for small business concessions</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/hourly-rate" className="text-sky-400 hover:text-sky-300 font-medium">Avg Freelancer Rate (AU)</Link></td>
                <td className="px-6 py-4 text-white font-medium">$80-$200/hr</td>
                <td className="px-6 py-4 text-sm text-gray-400">Typical hourly rate range for established Australian freelancers (ex-GST)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/bad-debt" className="text-sky-400 hover:text-sky-300 font-medium">Bad Debt Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">3-5%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Average percentage of freelancer revenue lost to uncollectable bad debts</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/bad-debt" className="text-sky-400 hover:text-sky-300 font-medium">Bad Debt GST Window</Link></td>
                <td className="px-6 py-4 text-white font-medium">12 months</td>
                <td className="px-6 py-4 text-sm text-gray-400">GST adjustment on bad debts must be claimed within 12 months of overdue</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/accounts-payable" className="text-sky-400 hover:text-sky-300 font-medium">AP Payment Window</Link></td>
                <td className="px-6 py-4 text-white font-medium">7-30 days</td>
                <td className="px-6 py-4 text-sm text-gray-400">Typical payment window for accounts payable to suppliers and subcontractors</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/late-payment-interest" className="text-sky-400 hover:text-sky-300 font-medium">GIC Rate (ATO)</Link></td>
                <td className="px-6 py-4 text-white font-medium">~11% p.a.</td>
                <td className="px-6 py-4 text-sm text-gray-400">ATO General Interest Charge rate — benchmark for late payment interest</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/tax-return" className="text-sky-400 hover:text-sky-300 font-medium">Tax Return Due Date</Link></td>
                <td className="px-6 py-4 text-white font-medium">31 October</td>
                <td className="px-6 py-4 text-sm text-gray-400">Self-lodging deadline. Tax agent clients get extensions up to 15 May</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/dividend" className="text-sky-400 hover:text-sky-300 font-medium">Franking Credit Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">25%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Base rate entity company tax already paid — attached as franking credits to dividends</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/withholding-tax" className="text-sky-400 hover:text-sky-300 font-medium">No-ABN Withholding</Link></td>
                <td className="px-6 py-4 text-white font-medium">47%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Payers must withhold 47% from payments where ABN is not quoted</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/tax-deduction" className="text-sky-400 hover:text-sky-300 font-medium">Home Office Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">67c/hour</td>
                <td className="px-6 py-4 text-sm text-gray-400">ATO fixed-rate method for home office expenses (2025-26)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/gig-economy" className="text-sky-400 hover:text-sky-300 font-medium">AU Gig Workers</Link></td>
                <td className="px-6 py-4 text-white font-medium">1.1M+</td>
                <td className="px-6 py-4 text-sm text-gray-400">Estimated gig economy workers in Australia (ABS/HILDA surveys)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/fringe-benefits-tax" className="text-sky-400 hover:text-sky-300 font-medium">FBT Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">47%</td>
                <td className="px-6 py-4 text-sm text-gray-400">FBT rate matches the top marginal tax rate — paid by the employer</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/invoice-template" className="text-sky-400 hover:text-sky-300 font-medium">Invoice Elements</Link></td>
                <td className="px-6 py-4 text-white font-medium">7 required</td>
                <td className="px-6 py-4 text-sm text-gray-400">ABN, date, description, amount, GST, total, and payment terms on every tax invoice</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/overdue-invoice" className="text-sky-400 hover:text-sky-300 font-medium">Overdue Rate (AU)</Link></td>
                <td className="px-6 py-4 text-white font-medium">54%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Percentage of Australian small business invoices paid late</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/business-expenses" className="text-sky-400 hover:text-sky-300 font-medium">Home Office Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">67c/hour</td>
                <td className="px-6 py-4 text-sm text-gray-400">ATO fixed-rate method for claiming home office running expenses</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/cash-basis-accounting" className="text-sky-400 hover:text-sky-300 font-medium">Cash vs Accrual</Link></td>
                <td className="px-6 py-4 text-white font-medium">$10M threshold</td>
                <td className="px-6 py-4 text-sm text-gray-400">Businesses under $10M aggregated turnover can use simpler cash basis for GST</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/record-keeping" className="text-sky-400 hover:text-sky-300 font-medium">FTL Penalty</Link></td>
                <td className="px-6 py-4 text-white font-medium">$313/statement</td>
                <td className="px-6 py-4 text-sm text-gray-400">ATO Failure to Lodge penalty for each 28-day period a statement is overdue</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/tax-agent" className="text-sky-400 hover:text-sky-300 font-medium">Tax Agent Fee</Link></td>
                <td className="px-6 py-4 text-white font-medium">$200-$600</td>
                <td className="px-6 py-4 text-sm text-gray-400">Typical sole trader tax return preparation fee (tax-deductible)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/break-even-point" className="text-sky-400 hover:text-sky-300 font-medium">Freelancer Break-Even</Link></td>
                <td className="px-6 py-4 text-white font-medium">$20K-$50K/yr</td>
                <td className="px-6 py-4 text-sm text-gray-400">Typical break-even revenue range for Australian freelancers (before tax)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/working-capital" className="text-sky-400 hover:text-sky-300 font-medium">Healthy WC Ratio</Link></td>
                <td className="px-6 py-4 text-white font-medium">1.2-2.0</td>
                <td className="px-6 py-4 text-sm text-gray-400">Healthy working capital ratio range for freelancers and small businesses</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/registered-business-name" className="text-sky-400 hover:text-sky-300 font-medium">Business Name Fee</Link></td>
                <td className="px-6 py-4 text-white font-medium">$39/yr</td>
                <td className="px-6 py-4 text-sm text-gray-400">ASIC registration fee for a business name ($92 for 3 years)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/net-income" className="text-sky-400 hover:text-sky-300 font-medium">Net Income</Link></td>
                <td className="px-6 py-4 text-white font-medium">Revenue − All Costs</td>
                <td className="px-6 py-4 text-sm text-gray-400">Total revenue minus expenses, super, and tax — your actual take-home</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/tax-offset" className="text-sky-400 hover:text-sky-300 font-medium">LITO Max</Link></td>
                <td className="px-6 py-4 text-white font-medium">$700</td>
                <td className="px-6 py-4 text-sm text-gray-400">Maximum Low Income Tax Offset for taxable income up to $37,500</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/invoice-aging" className="text-sky-400 hover:text-sky-300 font-medium">Late Payment Risk</Link></td>
                <td className="px-6 py-4 text-white font-medium">90+ days = 30%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Invoices over 90 days overdue have only ~30% collection probability</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/financial-year" className="text-sky-400 hover:text-sky-300 font-medium">Financial Year (AU)</Link></td>
                <td className="px-6 py-4 text-white font-medium">1 Jul – 30 Jun</td>
                <td className="px-6 py-4 text-sm text-gray-400">Australian financial year runs July to June — all tax obligations based on this period</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/tax-planning" className="text-sky-400 hover:text-sky-300 font-medium">Tax Reserve</Link></td>
                <td className="px-6 py-4 text-white font-medium">30-35%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Recommended percentage of income to set aside for tax as a freelancer</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/billing-cycle" className="text-sky-400 hover:text-sky-300 font-medium">Most Common Cycle</Link></td>
                <td className="px-6 py-4 text-white font-medium">Monthly</td>
                <td className="px-6 py-4 text-sm text-gray-400">Monthly billing is the most common cycle for Australian freelancers and retainer clients</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/expense-report" className="text-sky-400 hover:text-sky-300 font-medium">Vehicle Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">85c/km</td>
                <td className="px-6 py-4 text-sm text-gray-400">ATO cents-per-kilometre rate for vehicle expenses in 2025-26 (max 5,000 km)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/medicare-levy" className="text-sky-400 hover:text-sky-300 font-medium">Medicare Levy Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">2%</td>
                <td className="px-6 py-4 text-sm text-gray-400">Standard Medicare Levy on taxable income — plus 1-1.5% MLS surcharge above $93K without PHI</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/business-insurance" className="text-sky-400 hover:text-sky-300 font-medium">Insurance Cost (Typical)</Link></td>
                <td className="px-6 py-4 text-white font-medium">$800-$2,000/yr</td>
                <td className="px-6 py-4 text-sm text-gray-400">Total annual cost for PI + PL + income protection for freelancers (100% tax-deductible)</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/tax-residency" className="text-sky-400 hover:text-sky-300 font-medium">Non-Resident Tax Rate</Link></td>
                <td className="px-6 py-4 text-white font-medium">32.5% from $1</td>
                <td className="px-6 py-4 text-sm text-gray-400">Non-residents pay 32.5% from dollar one — no $18,200 tax-free threshold, no LITO</td>
              </tr>
              <tr className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4"><Link href="/glossary/subcontractor" className="text-sky-400 hover:text-sky-300 font-medium">TPAR Deadline</Link></td>
                <td className="px-6 py-4 text-white font-medium">28 August</td>
                <td className="px-6 py-4 text-sm text-gray-400">Taxable Payments Annual Report due date for businesses paying subcontractors in covered industries</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Related Resources */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Related Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/guides"
            className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-violet-500/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-2 group-hover:text-violet-400 transition-colors">8 Free Guides</h3>
            <p className="text-sm text-gray-400">Comprehensive guides on GST, tax, ABN, superannuation, invoicing, and more.</p>
          </Link>
          <Link
            href="/tools"
            className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-emerald-500/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.386 3.024A1 1 0 015 17.24V5.76a1 1 0 011.034-.954l5.386 3.024a1 1 0 01.546.874v5.55a1 1 0 01-.546.876z" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">100+ Free Tools</h3>
            <p className="text-sm text-gray-400">GST calculator, invoice generator, rate calculator, ABN lookup, and 96 more.</p>
          </Link>
          <Link
            href="/blog"
            className="group p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-amber-500/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors">125+ Articles</h3>
            <p className="text-sm text-gray-400">In-depth articles on invoicing, tax, business strategy, and getting paid.</p>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {(faqSchema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { text: string } }>).map((faq, i) => (
            <details key={i} className="group rounded-xl bg-gray-800/40 border border-gray-700/40">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:text-sky-400 transition-colors">
                {faq.name}
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stop Googling. Start Invoicing.
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          InvoiceFlow handles ABN display, GST calculations, and ATO-compliant invoices automatically. No accounting degree required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button>Start Free — No Card Required</Button>
          </Link>
          <Link href="/tools">
            <Button variant="secondary">Browse 100+ Free Tools</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
