'use client';

import { useState } from 'react';

/* ---- Types ---- */

type Step = 1 | 2 | 3 | 4;

type Industry =
  | 'Web Development'
  | 'Graphic Design'
  | 'Writing/Copywriting'
  | 'Marketing/SEO'
  | 'Photography/Video'
  | 'Consulting'
  | 'Accounting/Bookkeeping'
  | 'Architecture/Engineering'
  | 'Legal Services'
  | 'Other';

type BusinessDuration =
  | 'Less than 1 year'
  | '1-2 years'
  | '2-5 years'
  | '5-10 years'
  | '10+ years';

type IncomeTrend =
  | 'Growing'
  | 'Stable'
  | 'Variable but consistent average'
  | 'Declining';

type Purpose =
  | 'Rental application'
  | 'Home loan/mortgage'
  | 'Car finance'
  | 'Personal loan'
  | 'Credit card application'
  | 'Government benefit application'
  | 'Other';

interface PersonalDetails {
  fullName: string;
  businessName: string;
  abn: string;
  businessAddress: string;
  industry: Industry | '';
  duration: BusinessDuration | '';
}

interface IncomeDetails {
  annualGross: string;
  annualNet: string;
  freelancePercentage: string;
  averageMonthly: string;
  incomeTrend: IncomeTrend | '';
  hasLodgedReturns: boolean;
  yearsLodged: string;
}

interface RecipientDetails {
  purpose: Purpose | '';
  recipientName: string;
  recipientAddress: string;
}

/* ---- Constants ---- */

const INDUSTRIES: Industry[] = [
  'Web Development',
  'Graphic Design',
  'Writing/Copywriting',
  'Marketing/SEO',
  'Photography/Video',
  'Consulting',
  'Accounting/Bookkeeping',
  'Architecture/Engineering',
  'Legal Services',
  'Other',
];

const DURATIONS: BusinessDuration[] = [
  'Less than 1 year',
  '1-2 years',
  '2-5 years',
  '5-10 years',
  '10+ years',
];

const INCOME_TRENDS: IncomeTrend[] = [
  'Growing',
  'Stable',
  'Variable but consistent average',
  'Declining',
];

const PURPOSES: Purpose[] = [
  'Rental application',
  'Home loan/mortgage',
  'Car finance',
  'Personal loan',
  'Credit card application',
  'Government benefit application',
  'Other',
];

/* ---- Helpers ---- */

function fmt(value: string): string {
  const num = parseFloat(value);
  if (isNaN(num)) return '$0';
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

function formatABN(abn: string): string {
  const digits = abn.replace(/\D/g, '');
  if (digits.length <= 2) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 2)} ${digits.slice(2)}`;
  if (digits.length <= 8) return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
  return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 11)}`;
}

function getTodayFormatted(): string {
  return new Intl.DateTimeFormat('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}

function getDurationStatement(duration: BusinessDuration): string {
  switch (duration) {
    case 'Less than 1 year':
      return 'less than one year';
    case '1-2 years':
      return 'between one and two years';
    case '2-5 years':
      return 'between two and five years';
    case '5-10 years':
      return 'between five and ten years';
    case '10+ years':
      return 'over ten years';
  }
}

function getTrendStatement(trend: IncomeTrend): string {
  switch (trend) {
    case 'Growing':
      return 'My income has been on a growing trajectory';
    case 'Stable':
      return 'My income has been stable and consistent';
    case 'Variable but consistent average':
      return 'While my income varies month to month as is typical for freelance work, the average has been consistent';
    case 'Declining':
      return 'My income has experienced some decline in recent periods';
  }
}

function getPurposeTips(purpose: Purpose): { title: string; tips: string[] } {
  switch (purpose) {
    case 'Rental application':
      return {
        title: 'Tips for Rental Applications',
        tips: [
          'Offer to pay 3-6 months rent in advance if you have the cash reserves — this significantly reduces the landlord\'s perceived risk.',
          'Provide a rental ledger or reference from your current/previous landlord showing consistent on-time payments.',
          'Include your accountant\'s letter alongside this declaration — agents weigh third-party verification heavily.',
          'If your income is variable, highlight your average monthly income and show bank statements with consistent balances.',
          'Some agents accept a larger bond (e.g. 6 weeks instead of 4) as additional security for self-employed tenants.',
          'Apply through agents rather than private landlords — they have more experience with self-employed applicants.',
        ],
      };
    case 'Home loan/mortgage':
      return {
        title: 'Tips for Home Loan Applications',
        tips: [
          'Most lenders require 2 full years of tax returns for self-employed borrowers — ensure yours are lodged and up to date.',
          'Your net income (not gross) is what lenders use to calculate your borrowing capacity. Maximising deductions can hurt your borrowing power.',
          'Consider specialist self-employed lenders (e.g. Pepper Money, Liberty, La Trobe) if the big 4 banks knock you back.',
          'A low-doc or alt-doc loan may be available if you have strong BAS statements but incomplete tax returns.',
          'Having a deposit of 20%+ significantly improves your chances and avoids LMI (Lenders Mortgage Insurance).',
          'Get a pre-approval before house hunting — it strengthens your offer and confirms your borrowing capacity.',
          'Use a mortgage broker who specialises in self-employed clients — they know which lenders are most flexible.',
        ],
      };
    case 'Car finance':
      return {
        title: 'Tips for Car Finance Applications',
        tips: [
          'A chattel mortgage may be more tax-effective than a car loan if the vehicle is used for business purposes.',
          'Provide BAS statements showing consistent business revenue — car finance lenders often accept these as income proof.',
          'A larger deposit (20%+ of the vehicle value) can offset concerns about variable self-employed income.',
          'If the vehicle is primarily for business use, include this in your application — it can improve approval odds.',
          'Consider novated leases if you have a mix of employed and freelance income.',
          'Shop around — dealer finance is rarely the best rate for self-employed borrowers.',
        ],
      };
    case 'Personal loan':
      return {
        title: 'Tips for Personal Loan Applications',
        tips: [
          'Personal loans for self-employed borrowers often require BAS statements and bank statements as supplementary evidence.',
          'A secured personal loan (against a term deposit or asset) will have a lower interest rate and higher approval rate.',
          'Keep your application amount conservative relative to your income — lenders scrutinise self-employed applicants more closely.',
          'If possible, demonstrate a consistent savings pattern in your bank statements alongside your income.',
          'Online lenders and peer-to-peer platforms may be more flexible than traditional banks for self-employed borrowers.',
        ],
      };
    case 'Credit card application':
      return {
        title: 'Tips for Credit Card Applications',
        tips: [
          'Use your net income (after expenses, before tax) on the application — this is what most card issuers require.',
          'Apply for a card with a limit that is modest relative to your income — over-reaching triggers closer scrutiny.',
          'Having an existing relationship with the bank (business account, savings) improves your approval odds.',
          'A business credit card may be easier to obtain than a personal card for self-employed applicants.',
          'Avoid applying for multiple cards in a short period — each application appears on your credit report.',
        ],
      };
    case 'Government benefit application':
      return {
        title: 'Tips for Government Benefit Applications',
        tips: [
          'Centrelink and Services Australia require very specific income documentation — check the exact requirements before submitting.',
          'Your Business Income and Expenses form (SU580) will need to align with the figures in this declaration.',
          'Report your net business income (income minus expenses) as this is what Centrelink uses for assessment.',
          'Keep records of all business expenses as Centrelink may request verification of your deductions.',
          'If your income fluctuates significantly, you may need to report income fortnightly during variable periods.',
          'Consider speaking with a financial counsellor (free through National Debt Helpline) about your specific situation.',
        ],
      };
    case 'Other':
      return {
        title: 'General Tips for Income Verification',
        tips: [
          'Always provide more documentation than requested — it demonstrates transparency and builds confidence.',
          'Ensure the figures in this letter match your tax returns and BAS statements exactly.',
          'An accountant\'s letter verifying your income carries significant weight with most institutions.',
          'Keep your ABN registration active and your business details up to date on the ABR.',
          'If you have a registered business name, include the ASIC registration details for additional credibility.',
        ],
      };
  }
}

/* ---- Component ---- */

export default function IncomeProofGenerator() {
  const [step, setStep] = useState<Step>(1);
  const [copied, setCopied] = useState(false);

  const [personal, setPersonal] = useState<PersonalDetails>({
    fullName: '',
    businessName: '',
    abn: '',
    businessAddress: '',
    industry: '',
    duration: '',
  });

  const [income, setIncome] = useState<IncomeDetails>({
    annualGross: '',
    annualNet: '',
    freelancePercentage: '100',
    averageMonthly: '',
    incomeTrend: '',
    hasLodgedReturns: false,
    yearsLodged: '',
  });

  const [recipient, setRecipient] = useState<RecipientDetails>({
    purpose: '',
    recipientName: '',
    recipientAddress: '',
  });

  /* ---- Validation ---- */

  const abnDigits = personal.abn.replace(/\D/g, '');
  const step1Complete =
    personal.fullName.trim() !== '' &&
    abnDigits.length === 11 &&
    personal.businessAddress.trim() !== '' &&
    personal.industry !== '' &&
    personal.duration !== '';

  const step2Complete =
    parseFloat(income.annualGross) > 0 &&
    parseFloat(income.annualNet) > 0 &&
    parseFloat(income.averageMonthly) > 0 &&
    income.incomeTrend !== '';

  const step3Complete =
    recipient.purpose !== '' &&
    recipient.recipientName.trim() !== '';

  /* ---- Letter generation ---- */

  function generateLetter(): string {
    const today = getTodayFormatted();
    const durationText = personal.duration ? getDurationStatement(personal.duration) : '';
    const trendText = income.incomeTrend ? getTrendStatement(income.incomeTrend) : '';
    const freelancePct = parseInt(income.freelancePercentage) || 100;
    const otherPct = 100 - freelancePct;

    const lines: string[] = [];
    lines.push(today);
    lines.push('');

    if (recipient.recipientName.trim()) {
      lines.push(recipient.recipientName);
      if (recipient.recipientAddress.trim()) {
        lines.push(recipient.recipientAddress);
      }
      lines.push('');
    }

    lines.push('To Whom It May Concern,');
    lines.push('');
    lines.push('RE: INCOME DECLARATION — SELF-EMPLOYED / SOLE TRADER');
    lines.push('');

    // Introduction
    lines.push(
      `I, ${personal.fullName}, am writing to declare my income as a self-employed professional for the purpose of ${(recipient.purpose || 'financial application').toLowerCase()}. I provide this declaration voluntarily and in good faith.`
    );
    lines.push('');

    // Business details
    lines.push('BUSINESS DETAILS');
    lines.push('---');
    lines.push(`Full Name:           ${personal.fullName}`);
    if (personal.businessName.trim()) {
      lines.push(`Business/Trading As: ${personal.businessName}`);
    }
    lines.push(`ABN:                 ${formatABN(personal.abn)}`);
    lines.push(`Business Address:    ${personal.businessAddress}`);
    lines.push(`Industry:            ${personal.industry}`);
    lines.push(`Years in Business:   ${personal.duration}`);
    lines.push('');

    // Self-employment statement
    lines.push(
      `I have been continuously self-employed as a ${personal.industry !== 'Other' ? personal.industry?.toLowerCase() + ' professional' : 'professional'} for ${durationText}, operating under ABN ${formatABN(personal.abn)}${personal.businessName.trim() ? ` trading as ${personal.businessName}` : ''}.`
    );
    lines.push('');

    // Income declaration
    lines.push('INCOME DECLARATION');
    lines.push('---');
    lines.push(`Annual Gross Income (before expenses):  ${fmt(income.annualGross)}`);
    lines.push(`Annual Net Income (after expenses):     ${fmt(income.annualNet)}`);
    lines.push(`Average Monthly Income:                 ${fmt(income.averageMonthly)}`);
    lines.push('');

    // Income source
    if (freelancePct < 100) {
      lines.push(
        `Of my total income, approximately ${freelancePct}% is derived from freelance/self-employed work, with the remaining ${otherPct}% from other sources.`
      );
    } else {
      lines.push(
        'My income is derived entirely from my freelance/self-employed work.'
      );
    }
    lines.push('');

    // Trend
    lines.push(`${trendText} over the period relevant to this declaration.`);
    lines.push('');

    // Tax returns
    if (income.hasLodgedReturns && income.yearsLodged.trim()) {
      lines.push(
        `I confirm that I have lodged tax returns with the Australian Taxation Office (ATO) for the following financial years: ${income.yearsLodged}. Copies of these returns or Notices of Assessment are available upon request.`
      );
    } else if (income.hasLodgedReturns) {
      lines.push(
        'I confirm that my tax returns have been lodged with the Australian Taxation Office (ATO). Copies of these returns or Notices of Assessment are available upon request.'
      );
    } else {
      lines.push(
        'I am in the process of lodging my tax returns with the Australian Taxation Office (ATO). Business Activity Statements (BAS) and bank statements can be provided as supplementary evidence of income.'
      );
    }
    lines.push('');

    // Declaration
    lines.push('DECLARATION');
    lines.push('---');
    lines.push(
      'I declare that the information provided in this letter is true and correct to the best of my knowledge. I understand that providing false or misleading information may have legal consequences. I am willing to provide additional documentation to support this declaration upon request.'
    );
    lines.push('');

    // Supporting documents available
    lines.push('The following supporting documents are available upon request:');
    lines.push('  - Tax Returns and/or Notices of Assessment');
    lines.push('  - Business Activity Statements (BAS) for the last 4 quarters');
    lines.push('  - Business bank statements for the last 3-6 months');
    lines.push('  - Client contracts and invoices');
    lines.push('  - Accountant\'s verification letter (if applicable)');
    lines.push('');

    // Signature block
    lines.push('Yours faithfully,');
    lines.push('');
    lines.push('');
    lines.push('____________________________');
    lines.push(personal.fullName);
    if (personal.businessName.trim()) {
      lines.push(personal.businessName);
    }
    lines.push(`ABN: ${formatABN(personal.abn)}`);
    lines.push(`Date: ${today}`);
    lines.push('');
    lines.push('---');
    lines.push('Generated by InvoiceFlow Income Proof Generator');
    lines.push('https://www.invoiceflow.au/tools/income-proof-generator');

    return lines.join('\n');
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generateLetter()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  /* ---- Supporting documents checklist ---- */

  const supportingDocs = [
    {
      name: 'Tax Returns / Notice of Assessment',
      description: 'Your most recent individual tax return and the ATO Notice of Assessment confirming lodgement and assessed income.',
      priority: 'Essential',
    },
    {
      name: 'Business Activity Statements (BAS)',
      description: 'Last 4 quarterly BAS lodgements showing GST collected and business revenue.',
      priority: 'Essential',
    },
    {
      name: 'Bank Statements (3-6 months)',
      description: 'Business bank account statements showing regular income deposits from clients.',
      priority: 'Essential',
    },
    {
      name: 'Client Contracts / Invoices',
      description: 'Active contracts or recent invoices demonstrating ongoing client relationships and income sources.',
      priority: 'Recommended',
    },
    {
      name: 'Accountant\'s Letter',
      description: 'A letter from your accountant or tax agent verifying your income. Carries significant weight with lenders and agents.',
      priority: 'Highly Recommended',
    },
    {
      name: 'ABN Registration Confirmation',
      description: 'Printout from the Australian Business Register confirming your active ABN and GST registration status.',
      priority: 'Optional',
    },
  ];

  /* ---- Render ---- */

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-4 flex-wrap">
        {([1, 2, 3, 4] as const).map((s) => (
          <button
            key={s}
            onClick={() => {
              if (s === 1) setStep(1);
              else if (s === 2 && step1Complete) setStep(2);
              else if (s === 3 && step1Complete && step2Complete) setStep(3);
              else if (s === 4 && step1Complete && step2Complete && step3Complete) setStep(4);
            }}
            className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              step === s
                ? 'bg-gradient-to-r from-purple-400/20 to-violet-500/20 border border-purple-400/40 text-purple-300'
                : s < step
                  ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                  : 'bg-white/[0.02] border border-white/[0.05] text-slate-600 cursor-default'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                step === s
                  ? 'bg-purple-400/30 text-purple-300'
                  : s < step
                    ? 'bg-white/10 text-slate-400'
                    : 'bg-white/5 text-slate-600'
              }`}
            >
              {s < step ? '\u2713' : s}
            </div>
            <span className="hidden sm:inline">
              {s === 1
                ? 'Personal Details'
                : s === 2
                  ? 'Income Details'
                  : s === 3
                    ? 'Purpose & Recipient'
                    : 'Generated Letter'}
            </span>
          </button>
        ))}
      </div>

      {/* Step 1: Personal & Business Details */}
      {step === 1 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">
            Personal &amp; Business Details
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            Enter your personal and business details. These will appear on your income declaration
            letter.
          </p>

          <div className="space-y-5">
            {/* Full Name */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Full Legal Name <span className="text-purple-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Jane Smith"
                value={personal.fullName}
                onChange={(e) =>
                  setPersonal((prev) => ({ ...prev, fullName: e.target.value }))
                }
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-purple-400/40 focus:ring-1 focus:ring-purple-400/20 transition-all"
              />
            </div>

            {/* Business Name */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Business / Trading Name
                <span className="text-slate-500 text-xs ml-2">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Smith Design Studio"
                value={personal.businessName}
                onChange={(e) =>
                  setPersonal((prev) => ({ ...prev, businessName: e.target.value }))
                }
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-purple-400/40 focus:ring-1 focus:ring-purple-400/20 transition-all"
              />
            </div>

            {/* ABN */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                ABN (Australian Business Number) <span className="text-purple-400">*</span>
              </label>
              <input
                type="text"
                placeholder="XX XXX XXX XXX"
                value={formatABN(personal.abn)}
                onChange={(e) => {
                  const digits = e.target.value.replace(/\D/g, '').slice(0, 11);
                  setPersonal((prev) => ({ ...prev, abn: digits }));
                }}
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-purple-400/40 focus:ring-1 focus:ring-purple-400/20 transition-all"
              />
              <p className="text-xs text-slate-500 mt-2">
                {abnDigits.length}/11 digits
                {abnDigits.length === 11 && (
                  <span className="text-green-400 ml-2">Valid length</span>
                )}
              </p>
            </div>

            {/* Business Address */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Business Address <span className="text-purple-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 123 Collins Street, Melbourne VIC 3000"
                value={personal.businessAddress}
                onChange={(e) =>
                  setPersonal((prev) => ({
                    ...prev,
                    businessAddress: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-purple-400/40 focus:ring-1 focus:ring-purple-400/20 transition-all"
              />
            </div>

            {/* Industry */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Industry / Profession <span className="text-purple-400">*</span>
              </label>
              <select
                value={personal.industry}
                onChange={(e) =>
                  setPersonal((prev) => ({
                    ...prev,
                    industry: e.target.value as Industry | '',
                  }))
                }
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-purple-400/40 focus:ring-1 focus:ring-purple-400/20 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-slate-900">
                  Select your industry...
                </option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind} className="bg-slate-900">
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                How Long in Business? <span className="text-purple-400">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {DURATIONS.map((dur) => (
                  <button
                    key={dur}
                    onClick={() =>
                      setPersonal((prev) => ({ ...prev, duration: dur }))
                    }
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      personal.duration === dur
                        ? 'border-purple-400/40 bg-purple-400/10 text-purple-300'
                        : 'bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:bg-white/[0.06] hover:text-white hover:border-white/15'
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => step1Complete && setStep(2)}
              disabled={!step1Complete}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                step1Complete
                  ? 'bg-gradient-to-r from-purple-400 to-violet-500 text-white hover:from-purple-300 hover:to-violet-400'
                  : 'bg-white/5 text-slate-600 cursor-not-allowed'
              }`}
            >
              Next: Income Details
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Income Details */}
      {step === 2 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">
            Income Details
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            Enter your income details. These figures should align with your tax returns and BAS
            statements for credibility.
          </p>

          <div className="space-y-5">
            {/* Annual Gross Income */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Annual Gross Income (before expenses) <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  placeholder="120,000"
                  value={income.annualGross}
                  onChange={(e) =>
                    setIncome((prev) => ({ ...prev, annualGross: e.target.value }))
                  }
                  className="w-full pl-8 pr-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-purple-400/40 focus:ring-1 focus:ring-purple-400/20 transition-all"
                />
              </div>
              {income.annualGross && (
                <p className="text-xs text-slate-500 mt-2">
                  {fmt(income.annualGross)} per year
                </p>
              )}
            </div>

            {/* Annual Net Income */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Annual Net Income (after expenses, before tax){' '}
                <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  placeholder="85,000"
                  value={income.annualNet}
                  onChange={(e) =>
                    setIncome((prev) => ({ ...prev, annualNet: e.target.value }))
                  }
                  className="w-full pl-8 pr-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-purple-400/40 focus:ring-1 focus:ring-purple-400/20 transition-all"
                />
              </div>
              {income.annualNet && income.annualGross && parseFloat(income.annualGross) > 0 && (
                <p className="text-xs text-slate-500 mt-2">
                  {fmt(income.annualNet)} net ({Math.round((parseFloat(income.annualNet) / parseFloat(income.annualGross)) * 100)}% of gross after expenses)
                </p>
              )}
            </div>

            {/* Freelance Percentage */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Income from Freelancing (%)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={income.freelancePercentage}
                  onChange={(e) =>
                    setIncome((prev) => ({
                      ...prev,
                      freelancePercentage: e.target.value,
                    }))
                  }
                  className="flex-1 accent-purple-400"
                />
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2 min-w-[60px] text-center">
                  <span className="text-white text-sm font-medium">
                    {income.freelancePercentage}%
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                {parseInt(income.freelancePercentage) === 100
                  ? 'All income from freelancing'
                  : `${income.freelancePercentage}% freelancing, ${100 - parseInt(income.freelancePercentage)}% other sources`}
              </p>
            </div>

            {/* Average Monthly Income */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Average Monthly Income <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="100"
                  placeholder="7,000"
                  value={income.averageMonthly}
                  onChange={(e) =>
                    setIncome((prev) => ({
                      ...prev,
                      averageMonthly: e.target.value,
                    }))
                  }
                  className="w-full pl-8 pr-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-purple-400/40 focus:ring-1 focus:ring-purple-400/20 transition-all"
                />
              </div>
              {income.averageMonthly && (
                <p className="text-xs text-slate-500 mt-2">
                  {fmt(income.averageMonthly)} per month
                </p>
              )}
            </div>

            {/* Income Trend */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Income Trend <span className="text-purple-400">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {INCOME_TRENDS.map((trend) => (
                  <button
                    key={trend}
                    onClick={() =>
                      setIncome((prev) => ({ ...prev, incomeTrend: trend }))
                    }
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                      income.incomeTrend === trend
                        ? 'border-purple-400/40 bg-purple-400/10 text-purple-300'
                        : 'bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:bg-white/[0.06] hover:text-white hover:border-white/15'
                    }`}
                  >
                    {trend}
                  </button>
                ))}
              </div>
            </div>

            {/* Tax Returns */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-3">
                Tax Return Lodgement
              </label>
              <div className="flex items-center gap-3 mb-3">
                <button
                  onClick={() =>
                    setIncome((prev) => ({
                      ...prev,
                      hasLodgedReturns: !prev.hasLodgedReturns,
                    }))
                  }
                  className={`w-11 h-6 rounded-full transition-all relative ${
                    income.hasLodgedReturns
                      ? 'bg-purple-400'
                      : 'bg-white/10'
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
                      income.hasLodgedReturns ? 'left-[22px]' : 'left-0.5'
                    }`}
                  />
                </button>
                <span className="text-sm text-slate-300">
                  I have lodged tax returns with the ATO
                </span>
              </div>
              {income.hasLodgedReturns && (
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2">
                    Financial years lodged (e.g. 2023-24, 2024-25)
                  </label>
                  <input
                    type="text"
                    placeholder="2023-24, 2024-25"
                    value={income.yearsLodged}
                    onChange={(e) =>
                      setIncome((prev) => ({
                        ...prev,
                        yearsLodged: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-purple-400/40 focus:ring-1 focus:ring-purple-400/20 transition-all"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-3 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => step2Complete && setStep(3)}
              disabled={!step2Complete}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                step2Complete
                  ? 'bg-gradient-to-r from-purple-400 to-violet-500 text-white hover:from-purple-300 hover:to-violet-400'
                  : 'bg-white/5 text-slate-600 cursor-not-allowed'
              }`}
            >
              Next: Purpose &amp; Recipient
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Purpose & Recipient */}
      {step === 3 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">
            Purpose &amp; Recipient
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            Specify who the letter is addressed to and the purpose of your income declaration.
          </p>

          <div className="space-y-5">
            {/* Purpose */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Purpose of Declaration <span className="text-purple-400">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PURPOSES.map((p) => (
                  <button
                    key={p}
                    onClick={() =>
                      setRecipient((prev) => ({ ...prev, purpose: p }))
                    }
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                      recipient.purpose === p
                        ? 'border-purple-400/40 bg-purple-400/10 text-purple-300'
                        : 'bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:bg-white/[0.06] hover:text-white hover:border-white/15'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Recipient Name */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Recipient Name <span className="text-purple-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Ray White Real Estate, Commonwealth Bank"
                value={recipient.recipientName}
                onChange={(e) =>
                  setRecipient((prev) => ({
                    ...prev,
                    recipientName: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-purple-400/40 focus:ring-1 focus:ring-purple-400/20 transition-all"
              />
            </div>

            {/* Recipient Address */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5">
              <label className="block text-sm font-medium text-white mb-2">
                Recipient Address
                <span className="text-slate-500 text-xs ml-2">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 456 Bourke Street, Melbourne VIC 3000"
                value={recipient.recipientAddress}
                onChange={(e) =>
                  setRecipient((prev) => ({
                    ...prev,
                    recipientAddress: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-purple-400/40 focus:ring-1 focus:ring-purple-400/20 transition-all"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => step3Complete && setStep(4)}
              disabled={!step3Complete}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                step3Complete
                  ? 'bg-gradient-to-r from-purple-400 to-violet-500 text-white hover:from-purple-300 hover:to-violet-400'
                  : 'bg-white/5 text-slate-600 cursor-not-allowed'
              }`}
            >
              Generate Letter
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Generated Letter */}
      {step === 4 && (
        <div className="space-y-6">
          {/* Generated Letter */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white heading-font">
                Your Income Declaration Letter
              </h3>
              <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  copied
                    ? 'bg-green-400/20 border border-green-400/40 text-green-300'
                    : 'bg-gradient-to-r from-purple-400/20 to-violet-500/20 border border-purple-400/40 text-purple-300 hover:from-purple-400/30 hover:to-violet-500/30'
                }`}
              >
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </button>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 overflow-auto">
              <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
                {generateLetter()}
              </pre>
            </div>
          </div>

          {/* Supporting Documents Checklist */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-2">
              Supporting Documents Checklist
            </h3>
            <p className="text-sm text-slate-400 mb-5">
              Attach these documents alongside your income declaration letter to strengthen your
              application. The more evidence you provide, the stronger your case.
            </p>
            <div className="space-y-3">
              {supportingDocs.map((doc) => (
                <div
                  key={doc.name}
                  className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 flex items-start gap-3"
                >
                  <div
                    className={`flex-shrink-0 mt-0.5 px-2 py-0.5 rounded-md text-xs font-bold ${
                      doc.priority === 'Essential'
                        ? 'bg-purple-400/20 text-purple-300 border border-purple-400/30'
                        : doc.priority === 'Highly Recommended'
                          ? 'bg-violet-400/20 text-violet-300 border border-violet-400/30'
                          : doc.priority === 'Recommended'
                            ? 'bg-blue-400/20 text-blue-300 border border-blue-400/30'
                            : 'bg-white/10 text-slate-400 border border-white/20'
                    }`}
                  >
                    {doc.priority}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{doc.name}</h4>
                    <p className="text-xs text-slate-400 mt-1">{doc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Purpose-Specific Tips */}
          {recipient.purpose && (
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white heading-font mb-2">
                {getPurposeTips(recipient.purpose).title}
              </h3>
              <p className="text-sm text-slate-400 mb-5">
                Tailored advice to help strengthen your {recipient.purpose.toLowerCase()}.
              </p>
              <div className="space-y-3">
                {getPurposeTips(recipient.purpose).tips.map((tip, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 flex items-start gap-3"
                  >
                    <span className="text-purple-400 text-sm font-bold flex-shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm text-slate-300">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="flex justify-between">
            <button
              onClick={() => setStep(3)}
              className="px-6 py-3 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              Back to Edit
            </button>
            <button
              onClick={handleCopy}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                copied
                  ? 'bg-green-400/20 border border-green-400/40 text-green-300'
                  : 'bg-gradient-to-r from-purple-400 to-violet-500 text-white hover:from-purple-300 hover:to-violet-400'
              }`}
            >
              {copied ? 'Copied!' : 'Copy Letter to Clipboard'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
