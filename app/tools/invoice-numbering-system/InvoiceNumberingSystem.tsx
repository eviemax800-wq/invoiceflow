'use client';

import { useState, useRef } from 'react';

/* ---- Types ---- */

type Step = 1 | 2 | 3 | 4;

type FiscalYearStart =
  | 'january'
  | 'february'
  | 'march'
  | 'april'
  | 'may'
  | 'june'
  | 'july'
  | 'august'
  | 'september'
  | 'october'
  | 'november'
  | 'december';

type InvoiceVolume = 'low' | 'medium' | 'high' | 'very_high';

type DateCode = 'YYYY' | 'YY' | 'MM' | 'YYMM' | 'MMYY' | 'YYYYMM' | 'none';

type Separator = 'dash' | 'slash' | 'dot' | 'none';

type DigitCount = 3 | 4 | 5 | 6;

type ResetPeriod = 'never' | 'yearly' | 'monthly';

interface BusinessDetails {
  businessName: string;
  prefix: string;
  fiscalYearStart: FiscalYearStart;
  invoiceVolume: InvoiceVolume;
}

interface FormatConfig {
  usePrefix: boolean;
  dateCode: DateCode;
  separator: Separator;
  digitCount: DigitCount;
  useClientCode: boolean;
  sampleClientCode: string;
}

interface AdvancedConfig {
  resetPeriod: ResetPeriod;
  startingNumber: number;
  reserveQuoteRange: boolean;
  quoteRangeEnd: number;
  creditNotePrefix: string;
  useCreditNotePrefix: boolean;
}

/* ---- Constants ---- */

const MONTH_NAMES: { value: FiscalYearStart; label: string; num: string }[] = [
  { value: 'january', label: 'January', num: '01' },
  { value: 'february', label: 'February', num: '02' },
  { value: 'march', label: 'March', num: '03' },
  { value: 'april', label: 'April', num: '04' },
  { value: 'may', label: 'May', num: '05' },
  { value: 'june', label: 'June', num: '06' },
  { value: 'july', label: 'July (Australian FY)', num: '07' },
  { value: 'august', label: 'August', num: '08' },
  { value: 'september', label: 'September', num: '09' },
  { value: 'october', label: 'October', num: '10' },
  { value: 'november', label: 'November', num: '11' },
  { value: 'december', label: 'December', num: '12' },
];

const VOLUME_OPTIONS: { value: InvoiceVolume; label: string; desc: string }[] = [
  { value: 'low', label: '1-5 per month', desc: 'A few clients, project-based billing' },
  { value: 'medium', label: '5-20 per month', desc: 'Regular client base, weekly invoicing' },
  { value: 'high', label: '20-50 per month', desc: 'High volume, multiple active projects' },
  { value: 'very_high', label: '50+ per month', desc: 'Agency-level, many concurrent clients' },
];

const DATE_CODE_OPTIONS: { value: DateCode; label: string; example: string }[] = [
  { value: 'YYYY', label: 'Full Year (YYYY)', example: '2026' },
  { value: 'YY', label: 'Short Year (YY)', example: '26' },
  { value: 'MM', label: 'Month Only (MM)', example: '02' },
  { value: 'YYMM', label: 'Year-Month (YYMM)', example: '2602' },
  { value: 'MMYY', label: 'Month-Year (MMYY)', example: '0226' },
  { value: 'YYYYMM', label: 'Full Year-Month (YYYYMM)', example: '202602' },
  { value: 'none', label: 'No Date Code', example: '' },
];

const SEPARATOR_OPTIONS: { value: Separator; label: string; char: string }[] = [
  { value: 'dash', label: 'Dash', char: '-' },
  { value: 'slash', label: 'Slash', char: '/' },
  { value: 'dot', label: 'Dot', char: '.' },
  { value: 'none', label: 'None', char: '' },
];

/* ---- Helpers ---- */

function getMonthNum(month: FiscalYearStart): string {
  return MONTH_NAMES.find((m) => m.value === month)?.num ?? '07';
}

function getSeparatorChar(sep: Separator): string {
  return SEPARATOR_OPTIONS.find((s) => s.value === sep)?.char ?? '-';
}

function padNumber(n: number, digits: DigitCount): string {
  return String(n).padStart(digits, '0');
}

function getDateCodeValue(
  dateCode: DateCode,
  year: number,
  month: number
): string {
  const yy = String(year).slice(-2);
  const yyyy = String(year);
  const mm = String(month).padStart(2, '0');
  switch (dateCode) {
    case 'YYYY':
      return yyyy;
    case 'YY':
      return yy;
    case 'MM':
      return mm;
    case 'YYMM':
      return yy + mm;
    case 'MMYY':
      return mm + yy;
    case 'YYYYMM':
      return yyyy + mm;
    case 'none':
      return '';
  }
}

function buildInvoiceNumber(
  business: BusinessDetails,
  format: FormatConfig,
  advanced: AdvancedConfig,
  sequenceNum: number,
  year: number,
  month: number,
  clientCode?: string,
  isCreditNote?: boolean
): string {
  const sep = getSeparatorChar(format.separator);
  const parts: string[] = [];

  // Prefix
  if (format.usePrefix && business.prefix) {
    if (isCreditNote && advanced.useCreditNotePrefix) {
      parts.push(advanced.creditNotePrefix || 'CN');
    } else {
      parts.push(business.prefix.toUpperCase());
    }
  } else if (isCreditNote && advanced.useCreditNotePrefix) {
    parts.push(advanced.creditNotePrefix || 'CN');
  }

  // Client code (optional)
  if (format.useClientCode && clientCode) {
    parts.push(clientCode.toUpperCase());
  }

  // Date code
  const dateVal = getDateCodeValue(format.dateCode, year, month);
  if (dateVal) {
    parts.push(dateVal);
  }

  // Sequential number
  parts.push(padNumber(sequenceNum, format.digitCount));

  return parts.join(sep);
}

function getRecommendedDigits(volume: InvoiceVolume): DigitCount {
  switch (volume) {
    case 'low':
      return 3;
    case 'medium':
      return 3;
    case 'high':
      return 4;
    case 'very_high':
      return 5;
  }
}

function getFormatExplanation(
  business: BusinessDetails,
  format: FormatConfig,
  advanced: AdvancedConfig
): string[] {
  const explanations: string[] = [];
  const sep = getSeparatorChar(format.separator);
  const sepName =
    format.separator === 'dash'
      ? 'dash'
      : format.separator === 'slash'
      ? 'slash'
      : format.separator === 'dot'
      ? 'dot'
      : 'no separator';

  if (format.usePrefix && business.prefix) {
    explanations.push(
      `"${business.prefix.toUpperCase()}" is your business identifier prefix, derived from ${business.businessName || 'your business name'}.`
    );
  }

  if (format.useClientCode) {
    explanations.push(
      `The client code segment identifies which client the invoice belongs to (e.g., "${format.sampleClientCode.toUpperCase() || 'ACME'}").`
    );
  }

  if (format.dateCode !== 'none') {
    const codeLabel = DATE_CODE_OPTIONS.find((d) => d.value === format.dateCode)?.label ?? '';
    explanations.push(
      `The ${codeLabel.toLowerCase()} code tells you when the invoice was issued at a glance.`
    );
  }

  explanations.push(
    `The ${format.digitCount}-digit sequence number increments with each new invoice${
      advanced.resetPeriod === 'yearly'
        ? ', resetting to ' + padNumber(advanced.startingNumber, format.digitCount) + ' at the start of each financial year'
        : advanced.resetPeriod === 'monthly'
        ? ', resetting to ' + padNumber(advanced.startingNumber, format.digitCount) + ' at the start of each month'
        : ' and never resets'
    }.`
  );

  if (format.separator !== 'none') {
    explanations.push(
      `Components are separated by a ${sepName} ("${sep}") for readability.`
    );
  }

  if (advanced.reserveQuoteRange) {
    explanations.push(
      `Numbers ${padNumber(1, format.digitCount)} through ${padNumber(advanced.quoteRangeEnd, format.digitCount)} are reserved for quotes. Invoices start at ${padNumber(advanced.quoteRangeEnd + 1, format.digitCount)}.`
    );
  }

  if (advanced.useCreditNotePrefix) {
    explanations.push(
      `Credit notes use the prefix "${advanced.creditNotePrefix || 'CN'}" instead of "${business.prefix.toUpperCase() || 'INV'}" to distinguish them from standard invoices.`
    );
  }

  return explanations;
}

function getBestPracticeTips(
  business: BusinessDetails,
  format: FormatConfig,
  advanced: AdvancedConfig
): string[] {
  const tips: string[] = [];

  tips.push(
    'Never reuse or recycle invoice numbers, even for cancelled invoices. Mark cancelled invoices as void and keep the number in your register.'
  );

  tips.push(
    'If you issue a credit note, always reference the original invoice number on the credit note (e.g., "Credit for ' +
      buildInvoiceNumber(business, format, advanced, advanced.startingNumber, 2026, 2) +
      '").'
  );

  if (advanced.resetPeriod === 'yearly') {
    const monthName = MONTH_NAMES.find((m) => m.value === business.fiscalYearStart)?.label ?? 'July';
    tips.push(
      `Your sequence resets on 1 ${monthName} each year. Keep a log of the last number used each period to verify the reset happened correctly.`
    );
  }

  if (advanced.resetPeriod === 'monthly') {
    tips.push(
      'Monthly resets mean lower sequence numbers each month, but ensure your date code is included to prevent duplicate numbers across months.'
    );
  }

  if (format.dateCode === 'none' && advanced.resetPeriod !== 'never') {
    tips.push(
      'Warning: You have a periodic reset but no date code in your format. This can cause duplicate numbers. Consider adding a date component to ensure uniqueness.'
    );
  }

  tips.push(
    'Store your numbering system documentation where your accountant or bookkeeper can access it. This makes BAS preparation and end-of-year reconciliation significantly faster.'
  );

  tips.push(
    'If a client requests a pro forma or draft invoice, use a separate prefix (e.g., "DRAFT" or "PF") rather than consuming a number from your regular sequence.'
  );

  if (business.fiscalYearStart === 'july') {
    tips.push(
      'Your numbering aligns with the Australian financial year (1 Jul - 30 Jun). This is ideal for BAS quarters: Q1 Jul-Sep, Q2 Oct-Dec, Q3 Jan-Mar, Q4 Apr-Jun.'
    );
  }

  return tips;
}

/* ---- Step Indicator ---- */

function StepIndicator({ step }: { step: Step }) {
  const steps = [
    { num: 1, label: 'Business' },
    { num: 2, label: 'Format' },
    { num: 3, label: 'Advanced' },
    { num: 4, label: 'System' },
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step > s.num
                  ? 'bg-cyan-500 text-white'
                  : step === s.num
                  ? 'bg-gradient-to-br from-cyan-400 to-teal-500 text-white ring-4 ring-cyan-400/20'
                  : 'bg-white/10 text-slate-500'
              }`}
            >
              {step > s.num ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s.num
              )}
            </div>
            <span
              className={`text-xs mt-1.5 font-medium ${
                step >= s.num ? 'text-cyan-400' : 'text-slate-600'
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-12 sm:w-20 h-0.5 mx-1 mb-5 rounded-full transition-all ${
                step > s.num ? 'bg-cyan-500' : 'bg-white/10'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ---- Live Preview ---- */

function LivePreview({
  business,
  format,
  advanced,
}: {
  business: BusinessDetails;
  format: FormatConfig;
  advanced: AdvancedConfig;
}) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const startNum = advanced.reserveQuoteRange
    ? advanced.quoteRangeEnd + 1
    : advanced.startingNumber;

  const example = buildInvoiceNumber(
    business,
    format,
    advanced,
    startNum,
    year,
    month,
    format.sampleClientCode || 'ACME'
  );

  return (
    <div className="bg-gradient-to-r from-cyan-400/5 to-teal-500/5 border border-cyan-400/20 rounded-xl p-5 mt-6">
      <p className="text-xs text-cyan-400 font-medium mb-2 uppercase tracking-wider">Live Preview</p>
      <p className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-wider">
        {example || 'INV-001'}
      </p>
      <p className="text-xs text-slate-500 mt-2">
        Your first invoice number based on current settings
      </p>
    </div>
  );
}

/* ---- Main Component ---- */

export default function InvoiceNumberingSystem() {
  const [step, setStep] = useState<Step>(1);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // State for each step
  const [business, setBusiness] = useState<BusinessDetails>({
    businessName: '',
    prefix: '',
    fiscalYearStart: 'july',
    invoiceVolume: 'medium',
  });

  const [format, setFormat] = useState<FormatConfig>({
    usePrefix: true,
    dateCode: 'YYMM',
    separator: 'dash',
    digitCount: 3,
    useClientCode: false,
    sampleClientCode: 'ACME',
  });

  const [advanced, setAdvanced] = useState<AdvancedConfig>({
    resetPeriod: 'yearly',
    startingNumber: 1,
    reserveQuoteRange: false,
    quoteRangeEnd: 99,
    creditNotePrefix: 'CN',
    useCreditNotePrefix: true,
  });

  // Auto-generate prefix from business name
  const handleBusinessNameChange = (name: string) => {
    setBusiness((prev) => {
      const words = name.trim().split(/\s+/);
      let autoPrefix = '';
      if (words.length >= 2) {
        autoPrefix = words
          .map((w) => w[0])
          .join('')
          .toUpperCase()
          .slice(0, 4);
      } else if (name.length > 0) {
        autoPrefix = name.slice(0, 3).toUpperCase();
      }
      return { ...prev, businessName: name, prefix: autoPrefix || prev.prefix };
    });
  };

  // Recommend digits based on volume
  const handleVolumeChange = (volume: InvoiceVolume) => {
    setBusiness((prev) => ({ ...prev, invoiceVolume: volume }));
    setFormat((prev) => ({ ...prev, digitCount: getRecommendedDigits(volume) }));
  };

  // Navigation
  const canAdvance = (): boolean => {
    switch (step) {
      case 1:
        return business.prefix.length > 0;
      case 2:
        return true;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const next = () => {
    if (step < 4) setStep((step + 1) as Step);
  };

  const back = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  // Generate examples
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const fyStartMonth = parseInt(getMonthNum(business.fiscalYearStart));

  const effectiveStart = advanced.reserveQuoteRange
    ? advanced.quoteRangeEnd + 1
    : advanced.startingNumber;

  const firstInvoice = buildInvoiceNumber(
    business,
    format,
    advanced,
    effectiveStart,
    currentYear,
    currentMonth,
    format.sampleClientCode || 'ACME'
  );

  const fiftiethInvoice = buildInvoiceNumber(
    business,
    format,
    advanced,
    effectiveStart + 49,
    currentYear,
    currentMonth,
    format.sampleClientCode || 'ACME'
  );

  // Next year's first invoice
  const nextFYYear =
    currentMonth >= fyStartMonth ? currentYear + 1 : currentYear;
  const nextYearFirst = buildInvoiceNumber(
    business,
    format,
    advanced,
    advanced.resetPeriod !== 'never' ? advanced.startingNumber : effectiveStart + 200,
    nextFYYear,
    fyStartMonth,
    format.sampleClientCode || 'ACME'
  );

  // Credit note example
  const creditNoteExample = buildInvoiceNumber(
    business,
    format,
    advanced,
    effectiveStart,
    currentYear,
    currentMonth,
    format.sampleClientCode || 'ACME',
    true
  );

  // Format explanation and tips
  const explanations = getFormatExplanation(business, format, advanced);
  const tips = getBestPracticeTips(business, format, advanced);

  // Copy full system to clipboard
  const copySystem = async () => {
    const lines = [
      '=== INVOICE NUMBERING SYSTEM ===',
      '',
      `Business: ${business.businessName || 'Your Business'}`,
      `Prefix: ${business.prefix.toUpperCase()}`,
      `Fiscal Year Start: ${MONTH_NAMES.find((m) => m.value === business.fiscalYearStart)?.label}`,
      '',
      '--- FORMAT ---',
      `Pattern: ${format.usePrefix ? business.prefix.toUpperCase() : ''}${format.useClientCode ? getSeparatorChar(format.separator) + '[CLIENT]' : ''}${format.dateCode !== 'none' ? getSeparatorChar(format.separator) + '[' + format.dateCode + ']' : ''}${getSeparatorChar(format.separator)}[${'#'.repeat(format.digitCount)}]`,
      `Separator: ${getSeparatorChar(format.separator) || '(none)'}`,
      `Sequential Digits: ${format.digitCount}`,
      `Date Code: ${DATE_CODE_OPTIONS.find((d) => d.value === format.dateCode)?.label}`,
      `Client Code: ${format.useClientCode ? 'Yes' : 'No'}`,
      '',
      '--- SETTINGS ---',
      `Reset Period: ${advanced.resetPeriod === 'never' ? 'Never' : advanced.resetPeriod === 'yearly' ? 'Yearly (on ' + MONTH_NAMES.find((m) => m.value === business.fiscalYearStart)?.label + ' 1)' : 'Monthly'}`,
      `Starting Number: ${advanced.startingNumber}`,
      `Reserved Quote Range: ${advanced.reserveQuoteRange ? padNumber(1, format.digitCount) + ' - ' + padNumber(advanced.quoteRangeEnd, format.digitCount) : 'None'}`,
      `Credit Note Prefix: ${advanced.useCreditNotePrefix ? advanced.creditNotePrefix : 'None'}`,
      '',
      '--- EXAMPLES ---',
      `First Invoice: ${firstInvoice}`,
      `50th Invoice: ${fiftiethInvoice}`,
      `Next FY First: ${nextYearFirst}`,
      `Credit Note: ${creditNoteExample}`,
      '',
      '--- FORMAT EXPLANATION ---',
      ...explanations.map((e) => `- ${e}`),
      '',
      '--- BEST PRACTICE TIPS ---',
      ...tips.map((t) => `- ${t}`),
      '',
      'Generated by InvoiceFlow — https://www.invoiceflow.au/tools/invoice-numbering-system',
    ];

    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = lines.join('\n');
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Print reference card
  const printReferenceCard = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Invoice Numbering System — ${business.businessName || 'Reference Card'}</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 40px; color: #1e293b; max-width: 800px; margin: 0 auto; }
          h1 { font-size: 22px; margin-bottom: 4px; }
          h2 { font-size: 16px; margin-top: 28px; margin-bottom: 12px; color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 4px; }
          .subtitle { color: #64748b; font-size: 13px; margin-bottom: 24px; }
          .example-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 8px; }
          .example-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; }
          .example-label { font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
          .example-number { font-size: 18px; font-weight: 700; font-family: 'SF Mono', 'Fira Code', monospace; color: #0891b2; }
          .format-box { background: #f0fdfa; border: 2px solid #99f6e4; border-radius: 8px; padding: 16px; margin: 16px 0; text-align: center; }
          .format-pattern { font-size: 24px; font-weight: 700; font-family: 'SF Mono', 'Fira Code', monospace; color: #0f766e; }
          ul { padding-left: 20px; }
          li { font-size: 13px; line-height: 1.7; color: #334155; }
          .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center; }
          .settings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
          .setting-item { font-size: 13px; padding: 6px 0; }
          .setting-label { color: #64748b; }
          .setting-value { font-weight: 600; color: #1e293b; }
          @media print { body { padding: 20px; } }
        </style>
      </head>
      <body>
        <h1>Invoice Numbering System</h1>
        <p class="subtitle">${business.businessName || 'Your Business'} — Reference Card</p>

        <div class="format-box">
          <div class="example-label">Your Invoice Number Format</div>
          <div class="format-pattern">${firstInvoice}</div>
        </div>

        <h2>Examples</h2>
        <div class="example-grid">
          <div class="example-box">
            <div class="example-label">First Invoice</div>
            <div class="example-number">${firstInvoice}</div>
          </div>
          <div class="example-box">
            <div class="example-label">50th Invoice</div>
            <div class="example-number">${fiftiethInvoice}</div>
          </div>
          <div class="example-box">
            <div class="example-label">Next FY First Invoice</div>
            <div class="example-number">${nextYearFirst}</div>
          </div>
          <div class="example-box">
            <div class="example-label">Credit Note</div>
            <div class="example-number">${creditNoteExample}</div>
          </div>
        </div>

        <h2>Settings</h2>
        <div class="settings-grid">
          <div class="setting-item"><span class="setting-label">Prefix: </span><span class="setting-value">${business.prefix.toUpperCase() || '(none)'}</span></div>
          <div class="setting-item"><span class="setting-label">Date Code: </span><span class="setting-value">${DATE_CODE_OPTIONS.find((d) => d.value === format.dateCode)?.label || 'None'}</span></div>
          <div class="setting-item"><span class="setting-label">Separator: </span><span class="setting-value">${format.separator === 'none' ? 'None' : getSeparatorChar(format.separator)}</span></div>
          <div class="setting-item"><span class="setting-label">Digits: </span><span class="setting-value">${format.digitCount}</span></div>
          <div class="setting-item"><span class="setting-label">Reset: </span><span class="setting-value">${advanced.resetPeriod === 'never' ? 'Never' : advanced.resetPeriod === 'yearly' ? 'Yearly' : 'Monthly'}</span></div>
          <div class="setting-item"><span class="setting-label">Start #: </span><span class="setting-value">${advanced.startingNumber}</span></div>
          <div class="setting-item"><span class="setting-label">Client Code: </span><span class="setting-value">${format.useClientCode ? 'Yes' : 'No'}</span></div>
          <div class="setting-item"><span class="setting-label">Credit Note: </span><span class="setting-value">${advanced.useCreditNotePrefix ? advanced.creditNotePrefix : 'N/A'}</span></div>
        </div>

        <h2>Format Explanation</h2>
        <ul>
          ${explanations.map((e) => `<li>${e}</li>`).join('')}
        </ul>

        <h2>Best Practice Tips</h2>
        <ul>
          ${tips.map((t) => `<li>${t}</li>`).join('')}
        </ul>

        <div class="footer">
          Generated by InvoiceFlow — invoiceflow.au/tools/invoice-numbering-system — ${new Date().toLocaleDateString('en-AU')}
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  /* ---- Input Styling ---- */
  const inputCls =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all text-sm';
  const selectCls =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all text-sm appearance-none';
  const labelCls = 'block text-sm font-medium text-slate-300 mb-1.5';

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <StepIndicator step={step} />

      {/* ---- Step 1: Business Details ---- */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Business Details</h2>
            <p className="text-sm text-slate-400">
              Tell us about your business so we can suggest the best numbering format.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className={labelCls}>Business Name</label>
              <input
                type="text"
                className={inputCls}
                placeholder="e.g., Smith Design Studio"
                value={business.businessName}
                onChange={(e) => handleBusinessNameChange(e.target.value)}
              />
              <p className="text-xs text-slate-500 mt-1">
                Used to auto-generate your invoice prefix
              </p>
            </div>

            <div>
              <label className={labelCls}>Invoice Prefix</label>
              <input
                type="text"
                className={inputCls}
                placeholder="e.g., SDS, INV, WD"
                value={business.prefix}
                onChange={(e) =>
                  setBusiness((prev) => ({
                    ...prev,
                    prefix: e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 5),
                  }))
                }
                maxLength={5}
              />
              <p className="text-xs text-slate-500 mt-1">
                2-5 characters. Auto-generated from your business name, or type your own.
              </p>
            </div>

            <div>
              <label className={labelCls}>Fiscal Year Start Month</label>
              <select
                className={selectCls}
                value={business.fiscalYearStart}
                onChange={(e) =>
                  setBusiness((prev) => ({
                    ...prev,
                    fiscalYearStart: e.target.value as FiscalYearStart,
                  }))
                }
              >
                {MONTH_NAMES.map((m) => (
                  <option key={m.value} value={m.value} className="bg-slate-800">
                    {m.label}
                  </option>
                ))}
              </select>
              <p className="text-xs text-slate-500 mt-1">
                In Australia, the financial year starts 1 July. This affects reset timing.
              </p>
            </div>

            <div>
              <label className={labelCls}>Typical Invoice Volume</label>
              <div className="grid grid-cols-2 gap-3 mt-1">
                {VOLUME_OPTIONS.map((v) => (
                  <button
                    key={v.value}
                    onClick={() => handleVolumeChange(v.value)}
                    className={`text-left p-3.5 rounded-lg border transition-all ${
                      business.invoiceVolume === v.value
                        ? 'border-cyan-400/50 bg-cyan-400/10 ring-1 ring-cyan-400/30'
                        : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <p
                      className={`text-sm font-medium ${
                        business.invoiceVolume === v.value ? 'text-cyan-400' : 'text-white'
                      }`}
                    >
                      {v.label}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{v.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <LivePreview business={business} format={format} advanced={advanced} />

          <div className="flex justify-end pt-2">
            <button
              onClick={next}
              disabled={!canAdvance()}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed text-sm"
            >
              Next: Format Builder
            </button>
          </div>
        </div>
      )}

      {/* ---- Step 2: Format Builder ---- */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Format Builder</h2>
            <p className="text-sm text-slate-400">
              Choose the components of your invoice number. Watch the live preview update as you
              make changes.
            </p>
          </div>

          <div className="space-y-5">
            {/* Use Prefix Toggle */}
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
              <div>
                <p className="text-sm font-medium text-white">Include Business Prefix</p>
                <p className="text-xs text-slate-500">
                  Add &quot;{business.prefix.toUpperCase() || 'INV'}&quot; at the start of every invoice number
                </p>
              </div>
              <button
                onClick={() => setFormat((prev) => ({ ...prev, usePrefix: !prev.usePrefix }))}
                className={`w-12 h-6 rounded-full transition-all relative ${
                  format.usePrefix ? 'bg-cyan-500' : 'bg-white/20'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all ${
                    format.usePrefix ? 'left-6' : 'left-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Date Code */}
            <div>
              <label className={labelCls}>Date Code</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                {DATE_CODE_OPTIONS.map((d) => (
                  <button
                    key={d.value}
                    onClick={() => setFormat((prev) => ({ ...prev, dateCode: d.value }))}
                    className={`text-left p-3 rounded-lg border transition-all ${
                      format.dateCode === d.value
                        ? 'border-cyan-400/50 bg-cyan-400/10 ring-1 ring-cyan-400/30'
                        : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <p
                      className={`text-sm font-medium ${
                        format.dateCode === d.value ? 'text-cyan-400' : 'text-white'
                      }`}
                    >
                      {d.label}
                    </p>
                    {d.example && (
                      <p className="text-xs text-slate-500 font-mono mt-0.5">{d.example}</p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Separator */}
            <div>
              <label className={labelCls}>Separator</label>
              <div className="grid grid-cols-4 gap-2 mt-1">
                {SEPARATOR_OPTIONS.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setFormat((prev) => ({ ...prev, separator: s.value }))}
                    className={`text-center p-3 rounded-lg border transition-all ${
                      format.separator === s.value
                        ? 'border-cyan-400/50 bg-cyan-400/10 ring-1 ring-cyan-400/30'
                        : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <p
                      className={`text-lg font-mono font-bold ${
                        format.separator === s.value ? 'text-cyan-400' : 'text-white'
                      }`}
                    >
                      {s.char || '""'}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Sequential Digits */}
            <div>
              <label className={labelCls}>Sequential Digits</label>
              <div className="grid grid-cols-4 gap-2 mt-1">
                {([3, 4, 5, 6] as DigitCount[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setFormat((prev) => ({ ...prev, digitCount: d }))}
                    className={`text-center p-3 rounded-lg border transition-all ${
                      format.digitCount === d
                        ? 'border-cyan-400/50 bg-cyan-400/10 ring-1 ring-cyan-400/30'
                        : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <p
                      className={`text-sm font-mono font-bold ${
                        format.digitCount === d ? 'text-cyan-400' : 'text-white'
                      }`}
                    >
                      {'0'.repeat(d - 1)}1
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{d} digits</p>
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-1.5">
                {format.digitCount === 3
                  ? 'Supports up to 999 invoices per period'
                  : format.digitCount === 4
                  ? 'Supports up to 9,999 invoices per period'
                  : format.digitCount === 5
                  ? 'Supports up to 99,999 invoices per period'
                  : 'Supports up to 999,999 invoices per period'}
              </p>
            </div>

            {/* Client Code Toggle */}
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
              <div>
                <p className="text-sm font-medium text-white">Include Client Code</p>
                <p className="text-xs text-slate-500">
                  Add a client identifier to each invoice number
                </p>
              </div>
              <button
                onClick={() =>
                  setFormat((prev) => ({ ...prev, useClientCode: !prev.useClientCode }))
                }
                className={`w-12 h-6 rounded-full transition-all relative ${
                  format.useClientCode ? 'bg-cyan-500' : 'bg-white/20'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all ${
                    format.useClientCode ? 'left-6' : 'left-0.5'
                  }`}
                />
              </button>
            </div>

            {format.useClientCode && (
              <div>
                <label className={labelCls}>Sample Client Code</label>
                <input
                  type="text"
                  className={inputCls}
                  placeholder="e.g., ACME, SMITH, ABC"
                  value={format.sampleClientCode}
                  onChange={(e) =>
                    setFormat((prev) => ({
                      ...prev,
                      sampleClientCode: e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6),
                    }))
                  }
                  maxLength={6}
                />
                <p className="text-xs text-slate-500 mt-1">
                  Use a short code for each client (2-6 characters)
                </p>
              </div>
            )}
          </div>

          <LivePreview business={business} format={format} advanced={advanced} />

          <div className="flex justify-between pt-2">
            <button
              onClick={back}
              className="px-6 py-2.5 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all text-sm"
            >
              Back
            </button>
            <button
              onClick={next}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-all text-sm"
            >
              Next: Advanced Options
            </button>
          </div>
        </div>
      )}

      {/* ---- Step 3: Advanced Options ---- */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Advanced Options</h2>
            <p className="text-sm text-slate-400">
              Fine-tune your numbering system with reset periods, starting numbers, and credit note
              settings.
            </p>
          </div>

          <div className="space-y-5">
            {/* Reset Period */}
            <div>
              <label className={labelCls}>Reset Period</label>
              <p className="text-xs text-slate-500 mb-2">
                When should the sequential number reset back to the starting number?
              </p>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    {
                      value: 'never' as ResetPeriod,
                      label: 'Never',
                      desc: 'Numbers increment forever',
                    },
                    {
                      value: 'yearly' as ResetPeriod,
                      label: 'Yearly',
                      desc: `Resets every ${MONTH_NAMES.find((m) => m.value === business.fiscalYearStart)?.label || 'July'}`,
                    },
                    {
                      value: 'monthly' as ResetPeriod,
                      label: 'Monthly',
                      desc: 'Resets the 1st of each month',
                    },
                  ]
                ).map((r) => (
                  <button
                    key={r.value}
                    onClick={() =>
                      setAdvanced((prev) => ({ ...prev, resetPeriod: r.value }))
                    }
                    className={`text-left p-3.5 rounded-lg border transition-all ${
                      advanced.resetPeriod === r.value
                        ? 'border-cyan-400/50 bg-cyan-400/10 ring-1 ring-cyan-400/30'
                        : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <p
                      className={`text-sm font-medium ${
                        advanced.resetPeriod === r.value ? 'text-cyan-400' : 'text-white'
                      }`}
                    >
                      {r.label}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{r.desc}</p>
                  </button>
                ))}
              </div>
              {advanced.resetPeriod !== 'never' && format.dateCode === 'none' && (
                <div className="mt-2 p-3 bg-amber-400/10 border border-amber-400/20 rounded-lg">
                  <p className="text-xs text-amber-400 font-medium">
                    Warning: You have a periodic reset but no date code in your format. This could
                    create duplicate invoice numbers. Consider adding a date code in the Format
                    Builder step.
                  </p>
                </div>
              )}
            </div>

            {/* Starting Number */}
            <div>
              <label className={labelCls}>Starting Number</label>
              <input
                type="number"
                className={inputCls}
                min={1}
                max={9999}
                value={advanced.startingNumber}
                onChange={(e) =>
                  setAdvanced((prev) => ({
                    ...prev,
                    startingNumber: Math.max(1, parseInt(e.target.value) || 1),
                  }))
                }
              />
              <p className="text-xs text-slate-500 mt-1">
                Some freelancers start at 100 or 1000 to appear more established. This is a common
                and acceptable practice.
              </p>
            </div>

            {/* Reserve Quote Range */}
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
              <div>
                <p className="text-sm font-medium text-white">Reserve Range for Quotes</p>
                <p className="text-xs text-slate-500">
                  Set aside a number range for quotes/estimates that won&apos;t overlap with invoices
                </p>
              </div>
              <button
                onClick={() =>
                  setAdvanced((prev) => ({
                    ...prev,
                    reserveQuoteRange: !prev.reserveQuoteRange,
                  }))
                }
                className={`w-12 h-6 rounded-full transition-all relative ${
                  advanced.reserveQuoteRange ? 'bg-cyan-500' : 'bg-white/20'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all ${
                    advanced.reserveQuoteRange ? 'left-6' : 'left-0.5'
                  }`}
                />
              </button>
            </div>

            {advanced.reserveQuoteRange && (
              <div>
                <label className={labelCls}>
                  Reserve numbers {padNumber(1, format.digitCount)} through:
                </label>
                <input
                  type="number"
                  className={inputCls}
                  min={10}
                  max={999}
                  value={advanced.quoteRangeEnd}
                  onChange={(e) =>
                    setAdvanced((prev) => ({
                      ...prev,
                      quoteRangeEnd: Math.max(10, parseInt(e.target.value) || 99),
                    }))
                  }
                />
                <p className="text-xs text-slate-500 mt-1">
                  Invoices will start at{' '}
                  <span className="text-white font-mono">
                    {padNumber(advanced.quoteRangeEnd + 1, format.digitCount)}
                  </span>{' '}
                  instead of{' '}
                  <span className="text-white font-mono">
                    {padNumber(advanced.startingNumber, format.digitCount)}
                  </span>
                </p>
              </div>
            )}

            {/* Credit Note Prefix */}
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
              <div>
                <p className="text-sm font-medium text-white">Credit Note Prefix</p>
                <p className="text-xs text-slate-500">
                  Use a different prefix for credit notes and refunds
                </p>
              </div>
              <button
                onClick={() =>
                  setAdvanced((prev) => ({
                    ...prev,
                    useCreditNotePrefix: !prev.useCreditNotePrefix,
                  }))
                }
                className={`w-12 h-6 rounded-full transition-all relative ${
                  advanced.useCreditNotePrefix ? 'bg-cyan-500' : 'bg-white/20'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all ${
                    advanced.useCreditNotePrefix ? 'left-6' : 'left-0.5'
                  }`}
                />
              </button>
            </div>

            {advanced.useCreditNotePrefix && (
              <div>
                <label className={labelCls}>Credit Note Prefix</label>
                <input
                  type="text"
                  className={inputCls}
                  placeholder="e.g., CN, CR, REF"
                  value={advanced.creditNotePrefix}
                  onChange={(e) =>
                    setAdvanced((prev) => ({
                      ...prev,
                      creditNotePrefix: e.target.value
                        .replace(/[^a-zA-Z0-9]/g, '')
                        .toUpperCase()
                        .slice(0, 4),
                    }))
                  }
                  maxLength={4}
                />
                <p className="text-xs text-slate-500 mt-1">
                  Credit notes will use &quot;{advanced.creditNotePrefix || 'CN'}&quot; instead of
                  &quot;{business.prefix.toUpperCase() || 'INV'}&quot;
                </p>
              </div>
            )}
          </div>

          <LivePreview business={business} format={format} advanced={advanced} />

          <div className="flex justify-between pt-2">
            <button
              onClick={back}
              className="px-6 py-2.5 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all text-sm"
            >
              Back
            </button>
            <button
              onClick={next}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-all text-sm"
            >
              Generate System
            </button>
          </div>
        </div>
      )}

      {/* ---- Step 4: Generated System ---- */}
      {step === 4 && (
        <div className="space-y-6" ref={resultRef}>
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Your Numbering System</h2>
            <p className="text-sm text-slate-400">
              Here is your complete invoice numbering system with examples, explanation, and best
              practices.
            </p>
          </div>

          {/* Primary Format Display */}
          <div className="bg-gradient-to-r from-cyan-400/10 to-teal-500/10 border border-cyan-400/30 rounded-xl p-6 text-center">
            <p className="text-xs text-cyan-400 font-medium mb-3 uppercase tracking-wider">
              Your Invoice Number Format
            </p>
            <p className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-wider mb-2">
              {firstInvoice}
            </p>
            <p className="text-sm text-slate-400">
              {business.businessName ? `${business.businessName} — ` : ''}First invoice number
            </p>
          </div>

          {/* Examples Grid */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
              Invoice Number Examples
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-slate-500 mb-1">First Invoice</p>
                <p className="text-lg font-mono font-bold text-cyan-400">{firstInvoice}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-slate-500 mb-1">50th Invoice</p>
                <p className="text-lg font-mono font-bold text-cyan-400">{fiftiethInvoice}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-slate-500 mb-1">
                  Next FY First Invoice ({MONTH_NAMES.find((m) => m.value === business.fiscalYearStart)?.label}{' '}
                  {nextFYYear})
                </p>
                <p className="text-lg font-mono font-bold text-cyan-400">{nextYearFirst}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-slate-500 mb-1">Credit Note Example</p>
                <p className="text-lg font-mono font-bold text-cyan-400">{creditNoteExample}</p>
              </div>
            </div>
          </div>

          {/* Format Explanation */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
              Format Explanation
            </h3>
            <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-3">
              {explanations.map((exp, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-[10px] font-bold">{i + 1}</span>
                  </div>
                  <p className="text-sm text-slate-300">{exp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Configuration Summary */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
              Configuration Summary
            </h3>
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-slate-500">Prefix</p>
                  <p className="text-sm font-medium text-white font-mono">
                    {format.usePrefix ? business.prefix.toUpperCase() : '(none)'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Date Code</p>
                  <p className="text-sm font-medium text-white">
                    {DATE_CODE_OPTIONS.find((d) => d.value === format.dateCode)?.label || 'None'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Separator</p>
                  <p className="text-sm font-medium text-white font-mono">
                    {format.separator === 'none'
                      ? '(none)'
                      : `"${getSeparatorChar(format.separator)}"`}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Digits</p>
                  <p className="text-sm font-medium text-white">{format.digitCount}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Reset</p>
                  <p className="text-sm font-medium text-white capitalize">
                    {advanced.resetPeriod}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Start #</p>
                  <p className="text-sm font-medium text-white font-mono">
                    {padNumber(advanced.startingNumber, format.digitCount)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Client Code</p>
                  <p className="text-sm font-medium text-white">
                    {format.useClientCode ? 'Yes' : 'No'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Credit Note</p>
                  <p className="text-sm font-medium text-white font-mono">
                    {advanced.useCreditNotePrefix ? advanced.creditNotePrefix : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practice Tips */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
              Best Practice Tips
            </h3>
            <div className="space-y-2">
              {tips.map((tip, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 rounded-lg p-3 border border-white/5"
                >
                  <svg
                    className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm text-slate-300">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={copySystem}
              className={`flex-1 px-5 py-3 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                copied
                  ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                  : 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-400 hover:to-teal-400'
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Copied to Clipboard
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy Full System
                </>
              )}
            </button>
            <button
              onClick={printReferenceCard}
              className="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print Reference Card
            </button>
          </div>

          {/* Back / Start Over */}
          <div className="flex justify-between pt-2 border-t border-white/10">
            <button
              onClick={back}
              className="px-6 py-2.5 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all text-sm"
            >
              Back
            </button>
            <button
              onClick={() => setStep(1)}
              className="px-6 py-2.5 text-slate-400 hover:text-white transition-colors text-sm"
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
