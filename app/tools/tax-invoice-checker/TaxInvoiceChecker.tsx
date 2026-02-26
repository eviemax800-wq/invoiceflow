'use client';

import { useState, useRef } from 'react';

/* ---- Types ---- */

type Step = 1 | 2;

interface InvoiceDetails {
  hasTaxInvoiceLabel: boolean | null;
  hasABN: boolean | null;
  hasDate: boolean | null;
  hasClientName: boolean | null;
  hasDescription: boolean | null;
  hasTotalAmount: boolean | null;
  hasGSTSeparate: boolean | null;
  hasGSTIndicator: boolean | null;
  isGSTRegistered: boolean | null;
  isOverThousand: boolean | null;
  hasClientABN: boolean | null;
  hasLineItemPricing: boolean | null;
  invoiceAmount: string;
}

interface ComplianceResult {
  id: string;
  name: string;
  passed: boolean;
  applicable: boolean;
  atoReference: string;
  description: string;
  fixAdvice: string;
  group: 'all' | 'over1000';
}

/* ---- Constants ---- */

const GST_THRESHOLD = 82.5;
const HIGH_VALUE_THRESHOLD = 1000;

const INITIAL_DETAILS: InvoiceDetails = {
  hasTaxInvoiceLabel: null,
  hasABN: null,
  hasDate: null,
  hasClientName: null,
  hasDescription: null,
  hasTotalAmount: null,
  hasGSTSeparate: null,
  hasGSTIndicator: null,
  isGSTRegistered: null,
  isOverThousand: null,
  hasClientABN: null,
  hasLineItemPricing: null,
  invoiceAmount: '',
};

/* ---- Step Indicator ---- */

function StepIndicator({ step }: { step: Step }) {
  const steps = [
    { num: 1, label: 'Details' },
    { num: 2, label: 'Results' },
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step > s.num
                  ? 'bg-emerald-500 text-white'
                  : step === s.num
                  ? 'bg-gradient-to-br from-emerald-400 to-teal-500 text-white ring-4 ring-emerald-400/20'
                  : 'bg-white/10 text-slate-500'
              }`}
            >
              {step > s.num ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s.num
              )}
            </div>
            <span
              className={`text-xs mt-1.5 font-medium whitespace-nowrap ${
                step === s.num ? 'text-emerald-400' : step > s.num ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-16 sm:w-24 h-0.5 mb-5 mx-2 transition-all ${
                step > s.num ? 'bg-emerald-500' : 'bg-white/10'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ---- Toggle Component ---- */

function ToggleField({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: boolean | null;
  onChange: (v: boolean) => void;
  hint?: string;
}) {
  return (
    <div className="bg-white/[0.03] rounded-xl border border-white/10 p-4 hover:border-white/20 transition-all">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-white font-medium">{label}</p>
          {hint && <p className="text-xs text-slate-500 mt-0.5">{hint}</p>}
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={() => onChange(true)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              value === true
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => onChange(false)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              value === false
                ? 'bg-red-500/20 border-red-500/50 text-red-400'
                : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
            }`}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---- Compliance Gauge SVG ---- */

function ComplianceGauge({ score, total }: { score: number; total: number }) {
  const percentage = total > 0 ? (score / total) * 100 : 0;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const color =
    percentage >= 90
      ? { start: '#34d399', end: '#10b981', text: 'text-emerald-400', label: 'Compliant' }
      : percentage >= 70
      ? { start: '#fbbf24', end: '#f59e0b', text: 'text-amber-400', label: 'Mostly Compliant' }
      : { start: '#f87171', end: '#ef4444', text: 'text-red-400', label: 'Not Compliant' };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-44 h-44">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          {/* Background track */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="10"
          />
          {/* Score arc */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={`url(#gaugeGradient)`}
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={color.start} />
              <stop offset="100%" stopColor={color.end} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-3xl font-bold ${color.text}`}>
            {score}/{total}
          </span>
          <span className="text-xs text-slate-400 mt-0.5">requirements met</span>
        </div>
      </div>
      <div className={`mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
        percentage >= 90
          ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20'
          : percentage >= 70
          ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
          : 'bg-red-400/10 text-red-400 border border-red-400/20'
      }`}>
        {color.label}
      </div>
    </div>
  );
}

/* ---- Result Card ---- */

function ResultCard({ result }: { result: ComplianceResult }) {
  if (!result.applicable) return null;

  return (
    <div className={`rounded-xl border p-5 transition-all ${
      result.passed
        ? 'bg-emerald-500/5 border-emerald-500/20'
        : 'bg-red-500/5 border-red-500/20'
    }`}>
      <div className="flex items-start gap-3">
        {/* Pass/Fail Icon */}
        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
          result.passed
            ? 'bg-emerald-500/20'
            : 'bg-red-500/20'
        }`}>
          {result.passed ? (
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-white font-semibold text-sm">{result.name}</h4>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
              result.passed
                ? 'bg-emerald-400/10 text-emerald-400'
                : 'bg-red-400/10 text-red-400'
            }`}>
              {result.passed ? 'Pass' : 'Fail'}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">{result.atoReference}</p>
          <p className="text-sm text-slate-400 mt-2">{result.description}</p>
          {!result.passed && (
            <div className="mt-3 bg-red-500/5 border border-red-500/10 rounded-lg p-3">
              <p className="text-xs text-red-400 font-semibold mb-1">How to fix this:</p>
              <p className="text-xs text-slate-400">{result.fixAdvice}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---- Main Component ---- */

export default function TaxInvoiceChecker() {
  const [step, setStep] = useState<Step>(1);
  const [details, setDetails] = useState<InvoiceDetails>(INITIAL_DETAILS);
  const [copySuccess, setCopySuccess] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  /* ---- Derived values ---- */

  const invoiceAmount = parseFloat(details.invoiceAmount) || 0;
  const isOverGSTThreshold = invoiceAmount >= GST_THRESHOLD;
  const isOverThousand = details.isOverThousand === true;

  /* ---- Build compliance results ---- */

  function getComplianceResults(): ComplianceResult[] {
    const results: ComplianceResult[] = [];

    // 1. Tax Invoice label
    results.push({
      id: 'tax-invoice-label',
      name: '"Tax Invoice" Label',
      passed: details.hasTaxInvoiceLabel === true,
      applicable: true,
      atoReference: 'ATO requirement under GST Act s29-70(1)(a)',
      description:
        'The document must be labelled "Tax Invoice" prominently at the top. This distinguishes it from a regular invoice and is required for the recipient to claim a GST credit.',
      fixAdvice:
        'Add the words "Tax Invoice" at the top of your invoice document. Simply changing "Invoice" to "Tax Invoice" in your template header is sufficient. This must be visible on the first page.',
      group: 'all',
    });

    // 2. ABN shown
    results.push({
      id: 'abn-shown',
      name: 'Your ABN Is Shown',
      passed: details.hasABN === true,
      applicable: true,
      atoReference: 'ATO requirement under GST Act s29-70(1)(b)',
      description:
        'Your Australian Business Number must appear on every tax invoice. Without it, the recipient is required to withhold 47% of the payment under PAYG withholding rules.',
      fixAdvice:
        'Add your 11-digit ABN to your invoice template — typically in the header or your business details section. You can verify your ABN at abr.business.gov.au. If you do not have an ABN, you need to register before issuing tax invoices.',
      group: 'all',
    });

    // 3. Invoice date
    results.push({
      id: 'invoice-date',
      name: 'Invoice Date Included',
      passed: details.hasDate === true,
      applicable: true,
      atoReference: 'ATO requirement under GST Act s29-70(1)(c)',
      description:
        'The date the invoice was issued determines the tax period for BAS reporting. It also establishes when payment terms begin. Use the Australian format DD/MM/YYYY.',
      fixAdvice:
        'Add the date of issue to your invoice. Use the Australian date format (DD/MM/YYYY) to avoid confusion. The date should be when the invoice is issued, not when the work was completed.',
      group: 'all',
    });

    // 4. Client name/business name
    results.push({
      id: 'client-name',
      name: "Client's Name or Business Name",
      passed: details.hasClientName === true,
      applicable: true,
      atoReference: 'ATO requirement under GST Act s29-70(1)(d)',
      description:
        "The buyer's identity (their name or business name) must be shown on the tax invoice. This is the entity you are billing for the goods or services supplied.",
      fixAdvice:
        "Add your client's full legal name or registered business name to the invoice. Include it in a clear 'Bill To' or 'Client' section. For companies, use their registered entity name, not an informal trading name.",
      group: 'all',
    });

    // 5. Description of goods/services
    results.push({
      id: 'description',
      name: 'Description of Goods or Services',
      passed: details.hasDescription === true,
      applicable: true,
      atoReference: 'ATO requirement under GST Act s29-70(1)(e)',
      description:
        'A sufficient description of the items or services supplied is required. Vague descriptions like "services rendered" may not satisfy ATO requirements during an audit.',
      fixAdvice:
        'Add a clear, specific description of what you supplied. Include the type of service, date range, and specific deliverables. For example: "Website development — homepage redesign, 12-18 Feb 2026" is better than "web work".',
      group: 'all',
    });

    // 6. Total amount shown
    results.push({
      id: 'total-amount',
      name: 'Total Amount Shown',
      passed: details.hasTotalAmount === true,
      applicable: true,
      atoReference: 'ATO requirement under GST Act s29-70(1)(f)',
      description:
        'The total price of the supply must be clearly stated on the invoice. It must be clear whether the total is GST-inclusive or GST-exclusive.',
      fixAdvice:
        'Ensure the total amount is clearly visible on the invoice with a clear label indicating whether it includes or excludes GST. A "Total (inc. GST)" or "Total (ex. GST)" label is recommended.',
      group: 'all',
    });

    // 7. GST amount shown separately (for invoices $82.50+)
    results.push({
      id: 'gst-separate',
      name: 'GST Amount Shown Separately',
      passed: details.hasGSTSeparate === true,
      applicable: isOverGSTThreshold && details.isGSTRegistered === true,
      atoReference: 'ATO requirement under GST Act s29-70(1)(g) — applies to invoices $82.50+ (inc. GST)',
      description:
        'For taxable supplies of $82.50 or more (GST-inclusive), the GST amount must be shown as a separate line item. Without this, the recipient cannot claim the GST credit.',
      fixAdvice:
        'Add a separate GST line to your invoice showing the exact GST amount. For example, if your total is $1,100 inc. GST, show: Subtotal $1,000 + GST $100 = Total $1,100. The GST must be visually distinct from the subtotal.',
      group: 'all',
    });

    // 8. GST-inclusive/exclusive indicator
    results.push({
      id: 'gst-indicator',
      name: 'GST-Inclusive or GST-Exclusive Indicated',
      passed: details.hasGSTIndicator === true,
      applicable: isOverGSTThreshold && details.isGSTRegistered === true,
      atoReference: 'ATO requirement under GST Act s29-70(1)(g) — clarity on GST treatment',
      description:
        'The invoice must clearly state whether the total price is GST-inclusive or GST-exclusive. This prevents ambiguity for the recipient when processing the payment and claiming GST credits.',
      fixAdvice:
        'Add "(inc. GST)" or "(ex. GST)" after your total amount. For example: "Total: $1,100.00 (inc. GST)" or show both amounts: "Subtotal (ex. GST): $1,000.00 / Total (inc. GST): $1,100.00".',
      group: 'all',
    });

    // 9. Client ABN or address (for invoices over $1,000)
    results.push({
      id: 'client-abn',
      name: "Client's ABN or Address",
      passed: details.hasClientABN === true,
      applicable: isOverThousand,
      atoReference: 'ATO requirement under GST Act s29-70(2)(a) — applies to invoices over $1,000 (inc. GST)',
      description:
        "For tax invoices over $1,000 (GST-inclusive), the buyer's ABN or street address must be included. This is an additional requirement beyond the standard tax invoice fields.",
      fixAdvice:
        "Add your client's ABN (preferred) or their street address to the invoice. The ABN is best practice as it uniquely identifies the entity. You can look up a client's ABN at abr.business.gov.au.",
      group: 'over1000',
    });

    // 10. Line items individually priced (for invoices over $1,000)
    results.push({
      id: 'line-item-pricing',
      name: 'Each Line Item Individually Priced',
      passed: details.hasLineItemPricing === true,
      applicable: isOverThousand,
      atoReference: 'ATO requirement under GST Act s29-70(2)(b) — applies to invoices over $1,000 (inc. GST)',
      description:
        'For invoices over $1,000 (GST-inclusive), each item or service must be individually priced. A single line like "Consulting services — $2,200" is not sufficient.',
      fixAdvice:
        'Break your invoice into separate line items, each with its own description and price. For example, instead of "Consulting — $2,200", list "Strategy session (2hrs) — $600", "Implementation (4hrs) — $1,200", "Documentation — $400".',
      group: 'over1000',
    });

    return results;
  }

  const complianceResults = getComplianceResults();
  const applicableResults = complianceResults.filter((r) => r.applicable);
  const passedResults = applicableResults.filter((r) => r.passed);
  const failedResults = applicableResults.filter((r) => !r.passed);
  const allGroupResults = applicableResults.filter((r) => r.group === 'all');
  const over1000GroupResults = applicableResults.filter((r) => r.group === 'over1000');
  const scorePercent = applicableResults.length > 0 ? (passedResults.length / applicableResults.length) * 100 : 0;

  /* ---- Validation ---- */

  const coreFieldsAnswered =
    details.hasTaxInvoiceLabel !== null &&
    details.hasABN !== null &&
    details.hasDate !== null &&
    details.hasClientName !== null &&
    details.hasDescription !== null &&
    details.hasTotalAmount !== null &&
    details.isGSTRegistered !== null &&
    details.isOverThousand !== null;

  const gstFieldsAnswered =
    details.isGSTRegistered === false ||
    !isOverGSTThreshold ||
    (details.hasGSTSeparate !== null && details.hasGSTIndicator !== null);

  const over1000FieldsAnswered =
    !isOverThousand ||
    (details.hasClientABN !== null && details.hasLineItemPricing !== null);

  const formValid = coreFieldsAnswered && gstFieldsAnswered && over1000FieldsAnswered;

  /* ---- Copy results to clipboard ---- */

  async function copyResults() {
    try {
      let text = '';
      text += 'TAX INVOICE COMPLIANCE REPORT\n';
      text += `${'='.repeat(50)}\n\n`;
      text += `Score: ${passedResults.length}/${applicableResults.length} requirements met\n`;
      text += `Status: ${
        scorePercent >= 90
          ? 'COMPLIANT'
          : scorePercent >= 70
          ? 'MOSTLY COMPLIANT'
          : 'NOT COMPLIANT'
      }\n`;
      text += `Invoice Amount: $${invoiceAmount.toLocaleString('en-AU', { minimumFractionDigits: 2 })}\n\n`;

      text += `${'─'.repeat(50)}\n`;
      text += 'REQUIRED FOR ALL TAX INVOICES\n';
      text += `${'─'.repeat(50)}\n\n`;

      allGroupResults.forEach((r) => {
        text += `[${r.passed ? 'PASS' : 'FAIL'}] ${r.name}\n`;
        text += `  ${r.atoReference}\n`;
        if (!r.passed) {
          text += `  FIX: ${r.fixAdvice}\n`;
        }
        text += '\n';
      });

      if (over1000GroupResults.length > 0) {
        text += `${'─'.repeat(50)}\n`;
        text += 'REQUIRED FOR INVOICES OVER $1,000\n';
        text += `${'─'.repeat(50)}\n\n`;

        over1000GroupResults.forEach((r) => {
          text += `[${r.passed ? 'PASS' : 'FAIL'}] ${r.name}\n`;
          text += `  ${r.atoReference}\n`;
          if (!r.passed) {
            text += `  FIX: ${r.fixAdvice}\n`;
          }
          text += '\n';
        });
      }

      text += `${'─'.repeat(50)}\n`;
      text += 'Generated by InvoiceFlow Tax Invoice Compliance Checker\n';
      text += 'https://www.invoiceflow.au/tools/tax-invoice-checker\n';

      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    } catch {
      // Fallback: select all text in the results div
      if (resultsRef.current) {
        const range = document.createRange();
        range.selectNodeContents(resultsRef.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
  }

  /* ---- Reset form ---- */

  function resetForm() {
    setDetails(INITIAL_DETAILS);
    setStep(1);
  }

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <StepIndicator step={step} />

      {/* ---- STEP 1: Invoice Details ---- */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Enter Your Invoice Details</h2>
            <p className="text-sm text-slate-400">
              Answer each question about your invoice. This tool checks your invoice against the ATO
              requirements for a valid tax invoice under GST Act s29-70.
            </p>
          </div>

          {/* Core Requirements */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
              Core Tax Invoice Requirements
            </h3>

            <ToggleField
              label='Does your invoice say "Tax Invoice" at the top?'
              value={details.hasTaxInvoiceLabel}
              onChange={(v) => setDetails((p) => ({ ...p, hasTaxInvoiceLabel: v }))}
              hint='The exact words "Tax Invoice" must appear — not just "Invoice"'
            />

            <ToggleField
              label="Is your ABN shown on the invoice?"
              value={details.hasABN}
              onChange={(v) => setDetails((p) => ({ ...p, hasABN: v }))}
              hint="Your 11-digit Australian Business Number"
            />

            <ToggleField
              label="Is the invoice date included?"
              value={details.hasDate}
              onChange={(v) => setDetails((p) => ({ ...p, hasDate: v }))}
              hint="The date the invoice was issued (DD/MM/YYYY)"
            />

            <ToggleField
              label="Is the client's name or business name shown?"
              value={details.hasClientName}
              onChange={(v) => setDetails((p) => ({ ...p, hasClientName: v }))}
              hint="The legal name or registered business name of the buyer"
            />

            <ToggleField
              label="Does it include a description of goods/services?"
              value={details.hasDescription}
              onChange={(v) => setDetails((p) => ({ ...p, hasDescription: v }))}
              hint="Specific enough to identify the nature of the supply"
            />

            <ToggleField
              label="Is the total amount shown?"
              value={details.hasTotalAmount}
              onChange={(v) => setDetails((p) => ({ ...p, hasTotalAmount: v }))}
              hint="The total price of the supply"
            />
          </div>

          {/* Invoice Amount */}
          <div>
            <label className="block text-sm text-slate-300 font-medium mb-1.5">
              Invoice amount (AUD, GST-inclusive)
            </label>
            <div className="relative max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
              <input
                type="number"
                value={details.invoiceAmount}
                onChange={(e) => setDetails((p) => ({ ...p, invoiceAmount: e.target.value }))}
                placeholder="0.00"
                min="0"
                step="0.01"
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-7 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Used to determine which GST and $1,000+ requirements apply
            </p>
          </div>

          {/* GST Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
              GST Details
            </h3>

            <ToggleField
              label="Are you registered for GST?"
              value={details.isGSTRegistered}
              onChange={(v) => setDetails((p) => ({ ...p, isGSTRegistered: v }))}
              hint="You must be GST-registered to issue tax invoices that include GST"
            />

            {details.isGSTRegistered === true && isOverGSTThreshold && (
              <>
                <div className="bg-emerald-400/5 border border-emerald-400/20 rounded-xl p-3">
                  <p className="text-xs text-emerald-400">
                    Your invoice is ${invoiceAmount.toFixed(2)} (over the $82.50 GST threshold) — the
                    following GST display requirements apply.
                  </p>
                </div>

                <ToggleField
                  label="Is the GST amount shown separately?"
                  value={details.hasGSTSeparate}
                  onChange={(v) => setDetails((p) => ({ ...p, hasGSTSeparate: v }))}
                  hint="GST must be a separate line item for invoices $82.50+"
                />

                <ToggleField
                  label="Is the total marked as GST-inclusive or GST-exclusive?"
                  value={details.hasGSTIndicator}
                  onChange={(v) => setDetails((p) => ({ ...p, hasGSTIndicator: v }))}
                  hint='e.g. "Total (inc. GST)" or "Total (ex. GST)"'
                />
              </>
            )}
          </div>

          {/* Over $1,000 Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
              High-Value Invoice Requirements
            </h3>

            <ToggleField
              label="Is this invoice over $1,000 (GST-inclusive)?"
              value={details.isOverThousand}
              onChange={(v) => setDetails((p) => ({ ...p, isOverThousand: v }))}
              hint="Additional ATO requirements apply for invoices above $1,000"
            />

            {isOverThousand && (
              <>
                <div className="bg-emerald-400/5 border border-emerald-400/20 rounded-xl p-3">
                  <p className="text-xs text-emerald-400">
                    Invoices over $1,000 (GST-inclusive) require additional information under GST Act
                    s29-70(2).
                  </p>
                </div>

                <ToggleField
                  label="Is the client's ABN or street address shown?"
                  value={details.hasClientABN}
                  onChange={(v) => setDetails((p) => ({ ...p, hasClientABN: v }))}
                  hint="Required for invoices over $1,000 — ABN is preferred"
                />

                <ToggleField
                  label="Is each line item individually priced?"
                  value={details.hasLineItemPricing}
                  onChange={(v) => setDetails((p) => ({ ...p, hasLineItemPricing: v }))}
                  hint="Each good or service must have its own price listed"
                />
              </>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <button
              onClick={() => setStep(2)}
              disabled={!formValid}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-400 to-teal-500 text-white text-sm font-semibold rounded-lg hover:from-emerald-300 hover:to-teal-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Check Compliance
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 2: Compliance Results ---- */}
      {step === 2 && (
        <div className="space-y-8" ref={resultsRef}>
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">Compliance Report</h2>
            <p className="text-sm text-slate-400">
              Results for your ${invoiceAmount.toLocaleString('en-AU', { minimumFractionDigits: 2 })} invoice
              {details.isGSTRegistered === true ? ' (GST-registered)' : ' (not GST-registered)'}
            </p>
          </div>

          {/* Score Gauge */}
          <div className="flex justify-center">
            <ComplianceGauge score={passedResults.length} total={applicableResults.length} />
          </div>

          {/* Summary Banner */}
          <div className={`rounded-xl border p-5 text-center ${
            scorePercent >= 90
              ? 'bg-emerald-500/5 border-emerald-500/20'
              : scorePercent >= 70
              ? 'bg-amber-400/5 border-amber-400/20'
              : 'bg-red-500/5 border-red-500/20'
          }`}>
            <p className={`text-sm font-semibold ${
              scorePercent >= 90
                ? 'text-emerald-400'
                : scorePercent >= 70
                ? 'text-amber-400'
                : 'text-red-400'
            }`}>
              {scorePercent >= 90
                ? `Your invoice is compliant with ATO tax invoice requirements. ${failedResults.length === 0 ? 'All requirements are met.' : `${failedResults.length} minor issue${failedResults.length > 1 ? 's' : ''} found — see below.`}`
                : scorePercent >= 70
                ? `Your invoice is mostly compliant, but ${failedResults.length} requirement${failedResults.length > 1 ? 's are' : ' is'} not met. Fix the issues below to ensure your client can claim the GST credit.`
                : `Your invoice is not compliant with ATO tax invoice requirements. ${failedResults.length} requirement${failedResults.length > 1 ? 's are' : ' is'} not met. Your client may not be able to claim GST credits until these are fixed.`}
            </p>
          </div>

          {/* Required for ALL Tax Invoices */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Required for All Tax Invoices
            </h3>
            <div className="space-y-3">
              {allGroupResults.map((result) => (
                <ResultCard key={result.id} result={result} />
              ))}
            </div>
          </div>

          {/* Required for Invoices Over $1,000 */}
          {over1000GroupResults.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Required for Invoices Over $1,000
              </h3>
              <div className="space-y-3">
                {over1000GroupResults.map((result) => (
                  <ResultCard key={result.id} result={result} />
                ))}
              </div>
            </div>
          )}

          {/* Not GST Registered Warning */}
          {details.isGSTRegistered === false && (
            <div className="bg-amber-400/5 border border-amber-400/20 rounded-xl p-5">
              <p className="text-sm text-amber-400 font-semibold mb-2">Important: You Are Not GST-Registered</p>
              <p className="text-sm text-slate-400">
                Since you are not registered for GST, you should issue a regular invoice — not a tax
                invoice. You must not charge GST on your invoices. Issuing a document labelled
                &quot;Tax Invoice&quot; when you are not GST-registered is misleading and may attract
                ATO penalties. Remove the &quot;Tax Invoice&quot; label and ensure you do not show any
                GST amount on your invoices. If your annual turnover exceeds $75,000 (or $150,000 for
                non-profit organisations), you are required to register for GST.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={resetForm}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Check Another Invoice
            </button>
            <a
              href="/tools/invoice-generator"
              className="flex-1 py-2.5 bg-gradient-to-r from-emerald-400 to-teal-500 text-white text-sm font-semibold rounded-lg hover:from-emerald-300 hover:to-teal-400 transition-all text-center"
            >
              Create a Compliant Invoice
            </a>
            <button
              onClick={copyResults}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all border ${
                copySuccess
                  ? 'bg-emerald-400/20 border-emerald-400/50 text-emerald-400'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
              }`}
            >
              {copySuccess ? 'Copied!' : 'Copy Results'}
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Print Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
