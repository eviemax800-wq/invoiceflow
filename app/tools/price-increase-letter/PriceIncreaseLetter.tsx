'use client';

import { useState, useMemo } from 'react';

/* ---- Helpers ---- */

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatDateAU(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function todayISO(): string {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

function addDaysISO(dateStr: string, days: number): string {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

/* ---- Types ---- */

type RateType = 'hourly' | 'project' | 'retainer';
type NoticePeriod = 30 | 60 | 90;
type Tone = 'warm' | 'formal' | 'casual';

interface ReasonOption {
  key: string;
  label: string;
}

const REASONS: ReasonOption[] = [
  { key: 'cost-of-living', label: 'Annual cost of living' },
  { key: 'expertise', label: 'Increased expertise/experience' },
  { key: 'market-rate', label: 'Market rate adjustment' },
  { key: 'expanded-scope', label: 'Expanded scope of services' },
  { key: 'business-costs', label: 'Business costs increase' },
];

/* ---- Component ---- */

export default function PriceIncreaseLetter() {
  // Your details
  const [senderName, setSenderName] = useState('');
  const [clientName, setClientName] = useState('');

  // Rate details
  const [currentRate, setCurrentRate] = useState<number>(0);
  const [newRate, setNewRate] = useState<number>(0);
  const [rateType, setRateType] = useState<RateType>('hourly');
  const [effectiveDate, setEffectiveDate] = useState(() => addDaysISO(todayISO(), 30));
  const [noticePeriod, setNoticePeriod] = useState<NoticePeriod>(30);

  // Reasons
  const [selectedReasons, setSelectedReasons] = useState<string[]>(['cost-of-living']);

  // Options
  const [includeGST, setIncludeGST] = useState(true);
  const [tone, setTone] = useState<Tone>('warm');
  const [yearsWorking, setYearsWorking] = useState('');
  const [customNote, setCustomNote] = useState('');

  // UI
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  // Toggle a reason checkbox
  const toggleReason = (key: string) => {
    setSelectedReasons((prev) =>
      prev.includes(key) ? prev.filter((r) => r !== key) : [...prev, key]
    );
  };

  // Calculations
  const calculations = useMemo(() => {
    const curr = currentRate || 0;
    const next = newRate || 0;
    const increase = next - curr;
    const percentageIncrease = curr > 0 ? ((increase / curr) * 100) : 0;
    const gstCurrent = includeGST ? curr * 0.1 : 0;
    const gstNew = includeGST ? next * 0.1 : 0;
    const currentIncGst = curr + gstCurrent;
    const newIncGst = next + gstNew;

    return {
      increase,
      percentageIncrease,
      gstCurrent,
      gstNew,
      currentIncGst,
      newIncGst,
    };
  }, [currentRate, newRate, includeGST]);

  // Rate type labels
  const rateTypeLabel = useMemo(() => {
    switch (rateType) {
      case 'hourly': return 'per hour';
      case 'project': return 'per project';
      case 'retainer': return 'per month';
    }
  }, [rateType]);

  const rateTypeNoun = useMemo(() => {
    switch (rateType) {
      case 'hourly': return 'hourly rate';
      case 'project': return 'project rate';
      case 'retainer': return 'monthly retainer';
    }
  }, [rateType]);

  // Build reason sentence(s)
  const reasonText = useMemo(() => {
    const reasonLabels = selectedReasons.map((key) => {
      const found = REASONS.find((r) => r.key === key);
      return found ? found.label.toLowerCase() : key;
    });

    if (reasonLabels.length === 0) return 'ongoing business considerations';
    if (reasonLabels.length === 1) return reasonLabels[0];
    if (reasonLabels.length === 2) return `${reasonLabels[0]} and ${reasonLabels[1]}`;
    const last = reasonLabels.pop();
    return `${reasonLabels.join(', ')}, and ${last}`;
  }, [selectedReasons]);

  // Generate the letter text
  const generatedText = useMemo(() => {
    const sender = senderName || '[Your Name / Business Name]';
    const client = clientName || '[Client Name / Business]';
    const effDate = effectiveDate ? formatDateAU(effectiveDate) : '[Effective Date]';
    const today = formatDateAU(todayISO());
    const years = yearsWorking ? parseInt(yearsWorking) : 0;

    const curr = currentRate || 0;
    const next = newRate || 0;
    const pctStr = calculations.percentageIncrease > 0
      ? ` (${calculations.percentageIncrease.toFixed(1)}% increase)`
      : '';

    let text = '';

    // Date
    text += `${today}\n\n`;

    // Greeting varies by tone
    if (tone === 'casual') {
      text += `Hi ${client},\n\n`;
    } else if (tone === 'formal') {
      text += `Dear ${client},\n\n`;
    } else {
      text += `Dear ${client},\n\n`;
    }

    // Opening — thank the client
    if (tone === 'casual') {
      if (years > 0) {
        text += `I hope this finds you well! It's been a fantastic ${years} year${years > 1 ? 's' : ''} working together, and I genuinely appreciate the trust you've placed in me and the projects we've tackled.\n\n`;
      } else {
        text += `I hope this finds you well! I really appreciate our working relationship and the trust you've placed in me.\n\n`;
      }
    } else if (tone === 'formal') {
      if (years > 0) {
        text += `I am writing to formally advise you of an upcoming change to my ${rateTypeNoun}. Over the past ${years} year${years > 1 ? 's' : ''} of our professional relationship, I have valued the opportunity to contribute to your business.\n\n`;
      } else {
        text += `I am writing to formally advise you of an upcoming change to my ${rateTypeNoun}. I value our professional relationship and the opportunity to contribute to your business.\n\n`;
      }
    } else {
      // warm
      if (years > 0) {
        text += `Thank you for the ${years} year${years > 1 ? 's' : ''} we've worked together — I truly value our partnership and the trust you've placed in me. It's been a privilege to support your business.\n\n`;
      } else {
        text += `Thank you for our continued working relationship — I truly value the trust you've placed in me and the opportunity to support your business.\n\n`;
      }
    }

    // Rate change announcement
    if (tone === 'casual') {
      text += `I wanted to give you plenty of heads-up that I'll be updating my ${rateTypeNoun} effective ${effDate}. Here are the details:\n\n`;
    } else if (tone === 'formal') {
      text += `Please be advised that my ${rateTypeNoun} will be adjusted effective ${effDate}, as outlined below:\n\n`;
    } else {
      text += `I'm writing to let you know that I'll be adjusting my ${rateTypeNoun} effective ${effDate}. I wanted to give you ample notice so you can plan accordingly.\n\n`;
    }

    // Rate details block
    text += `RATE CHANGE DETAILS\n`;
    text += `${'─'.repeat(45)}\n`;
    text += `Current ${rateTypeNoun}:    ${formatCurrency(curr)} ${rateTypeLabel}`;
    if (includeGST) text += ` (ex. GST)`;
    text += `\n`;
    text += `New ${rateTypeNoun}:        ${formatCurrency(next)} ${rateTypeLabel}`;
    if (includeGST) text += ` (ex. GST)`;
    text += `\n`;
    text += `Change:               ${formatCurrency(calculations.increase)} ${rateTypeLabel}${pctStr}\n`;
    text += `Effective date:       ${effDate}\n`;

    if (includeGST) {
      text += `\n`;
      text += `GST-inclusive amounts:\n`;
      text += `Current (inc. GST):   ${formatCurrency(calculations.currentIncGst)} ${rateTypeLabel}\n`;
      text += `New (inc. GST):       ${formatCurrency(calculations.newIncGst)} ${rateTypeLabel}\n`;
    }
    text += `${'─'.repeat(45)}\n\n`;

    // Reason for the increase
    if (tone === 'casual') {
      text += `This adjustment reflects ${reasonText}. I'm committed to continuing to deliver the same high-quality work you've come to expect, and this change allows me to maintain and improve the level of service I provide.\n\n`;
    } else if (tone === 'formal') {
      text += `This adjustment is necessitated by ${reasonText}. The updated rate reflects the current value and quality of the services I provide, and ensures I can continue to deliver work to the highest professional standard.\n\n`;
    } else {
      text += `This update reflects ${reasonText}. I've worked hard to ensure my rates remain competitive while continuing to deliver the quality of work you expect. This adjustment allows me to invest in the tools, training, and resources that directly benefit the work I do for you.\n\n`;
    }

    // Advance notice mention
    text += `I'm providing ${noticePeriod} days' advance notice to ensure you have time to review and plan for this change. `;

    // Grandfather mention for long-term clients
    if (years >= 2) {
      text += `As a valued long-term client, any work currently in progress or already quoted will be honoured at the current rate until completion.\n\n`;
    } else {
      text += `Any work currently in progress or already quoted will be honoured at the current rate until completion.\n\n`;
    }

    // Custom note
    if (customNote.trim()) {
      text += `${customNote.trim()}\n\n`;
    }

    // Closing
    if (tone === 'casual') {
      text += `I'd love to continue working together and I'm happy to chat if you have any questions about this update. Feel free to reach out anytime.\n\n`;
      text += `Thanks so much for your understanding!\n\n`;
      text += `Cheers,\n`;
    } else if (tone === 'formal') {
      text += `Should you wish to discuss this matter or have any questions regarding the updated terms, please do not hesitate to contact me at your earliest convenience.\n\n`;
      text += `I look forward to our continued professional relationship.\n\n`;
      text += `Yours sincerely,\n`;
    } else {
      text += `If you have any questions or would like to discuss this further, I'm happy to jump on a call. I value our partnership and look forward to continuing to deliver great work for you.\n\n`;
      text += `Warm regards,\n`;
    }

    text += `${sender}\n`;

    return text;
  }, [
    senderName, clientName, currentRate, newRate, rateType, rateTypeLabel, rateTypeNoun,
    effectiveDate, noticePeriod, selectedReasons, reasonText, includeGST, tone,
    yearsWorking, customNote, calculations,
  ]);

  const handleGenerate = () => setGenerated(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Your Details & Client Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Your Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Your Name / Business Name</label>
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Sarah Mitchell Design"
            />
          </div>
          <div>
            <label className={labelClass}>Client Name / Business Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Acme Solutions Pty Ltd"
            />
          </div>
          <div>
            <label className={labelClass}>Years Working with Client (optional)</label>
            <input
              type="number"
              value={yearsWorking}
              onChange={(e) => setYearsWorking(e.target.value)}
              className={inputClass}
              placeholder="e.g. 3"
              min="0"
              max="50"
            />
          </div>
        </div>
      </div>

      {/* Rate Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Rate Details</h3>

        {/* Rate Type Selector */}
        <div className="mb-6">
          <label className={labelClass}>Rate Type</label>
          <div className="flex gap-2">
            {([
              { value: 'hourly' as const, label: 'Hourly Rate' },
              { value: 'project' as const, label: 'Project Rate' },
              { value: 'retainer' as const, label: 'Monthly Retainer' },
            ]).map((option) => (
              <button
                key={option.value}
                onClick={() => setRateType(option.value)}
                className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  rateType === option.value
                    ? 'bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-500/40 text-teal-400'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>
              Current {rateType === 'hourly' ? 'Hourly' : rateType === 'project' ? 'Project' : 'Monthly'} Rate (AUD)
            </label>
            <input
              type="number"
              value={currentRate || ''}
              onChange={(e) => setCurrentRate(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="10"
              placeholder={rateType === 'hourly' ? 'e.g. 120' : rateType === 'project' ? 'e.g. 5000' : 'e.g. 3000'}
            />
          </div>
          <div>
            <label className={labelClass}>
              New {rateType === 'hourly' ? 'Hourly' : rateType === 'project' ? 'Project' : 'Monthly'} Rate (AUD)
            </label>
            <input
              type="number"
              value={newRate || ''}
              onChange={(e) => setNewRate(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="10"
              placeholder={rateType === 'hourly' ? 'e.g. 140' : rateType === 'project' ? 'e.g. 6000' : 'e.g. 3500'}
            />
          </div>
          <div>
            <label className={labelClass}>Effective Date</label>
            <input
              type="date"
              value={effectiveDate}
              onChange={(e) => setEffectiveDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Advance Notice Period</label>
            <div className="flex gap-2">
              {([30, 60, 90] as const).map((days) => (
                <button
                  key={days}
                  onClick={() => setNoticePeriod(days)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    noticePeriod === days
                      ? 'bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-500/40 text-teal-400'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {days} days
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* GST Toggle */}
        <div className="mt-6 flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
          <div>
            <span className="text-slate-300 text-sm">Include GST (10%)</span>
            <p className="text-xs text-slate-500 mt-0.5">Show GST-inclusive amounts in the letter</p>
          </div>
          <button
            onClick={() => setIncludeGST(!includeGST)}
            className={`relative w-14 h-7 rounded-full transition-all ${
              includeGST ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                includeGST ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Calculation Preview */}
        {(currentRate > 0 || newRate > 0) && (
          <div className="mt-6 bg-white/5 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Current rate</span>
              <span className="text-white font-mono">
                {formatCurrency(currentRate)} {rateTypeLabel}
                {includeGST && <span className="text-slate-500"> (ex. GST)</span>}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">New rate</span>
              <span className="text-white font-mono">
                {formatCurrency(newRate)} {rateTypeLabel}
                {includeGST && <span className="text-slate-500"> (ex. GST)</span>}
              </span>
            </div>
            <div className="flex justify-between text-sm border-t border-white/10 pt-2">
              <span className="text-white font-semibold">Increase</span>
              <span className={`font-mono font-bold ${calculations.increase >= 0 ? 'text-teal-400' : 'text-rose-400'}`}>
                {calculations.increase >= 0 ? '+' : ''}{formatCurrency(calculations.increase)}
                {calculations.percentageIncrease > 0 && (
                  <span className="text-slate-400 font-normal ml-2">
                    ({calculations.percentageIncrease.toFixed(1)}%)
                  </span>
                )}
              </span>
            </div>
            {includeGST && (
              <>
                <div className="flex justify-between text-sm border-t border-white/10 pt-2">
                  <span className="text-slate-400">Current (inc. GST)</span>
                  <span className="text-white font-mono">{formatCurrency(calculations.currentIncGst)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">New (inc. GST)</span>
                  <span className="text-white font-mono">{formatCurrency(calculations.newIncGst)}</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Reason & Tone */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Reason & Tone</h3>

        {/* Reason Checkboxes */}
        <div className="mb-6">
          <label className={labelClass}>Reason for Increase (select all that apply)</label>
          <div className="space-y-2 mt-2">
            {REASONS.map((reason) => (
              <label
                key={reason.key}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={selectedReasons.includes(reason.key)}
                    onChange={() => toggleReason(reason.key)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 peer-checked:bg-teal-500/30 peer-checked:border-teal-500/50 transition-all flex items-center justify-center">
                    <svg
                      className={`w-3 h-3 text-teal-400 transition-opacity ${
                        selectedReasons.includes(reason.key) ? 'opacity-100' : 'opacity-0'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  {reason.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Tone Selector */}
        <div className="mb-6">
          <label className={labelClass}>Tone</label>
          <div className="flex gap-2">
            {([
              { value: 'warm' as const, label: 'Professional & Warm' },
              { value: 'formal' as const, label: 'Formal & Direct' },
              { value: 'casual' as const, label: 'Casual & Friendly' },
            ]).map((option) => (
              <button
                key={option.value}
                onClick={() => setTone(option.value)}
                className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  tone === option.value
                    ? 'bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-500/40 text-teal-400'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Note */}
        <div>
          <label className={labelClass}>Custom Note (optional)</label>
          <textarea
            value={customNote}
            onChange={(e) => setCustomNote(e.target.value)}
            className={`${inputClass} min-h-[80px] resize-y`}
            placeholder="e.g. I'd also like to discuss expanding our engagement to include social media management..."
          />
          <p className="text-xs text-slate-500 mt-1">
            This will be included in the letter before the closing paragraph.
          </p>
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-400 hover:to-blue-400 transition-all text-lg"
        >
          Generate Price Increase Letter
        </button>
      </div>

      {/* Generated Output */}
      {generated && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">Letter Preview</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 font-medium">
                {calculations.percentageIncrease > 0
                  ? `+${calculations.percentageIncrease.toFixed(1)}% increase`
                  : 'Rate Update'}
              </span>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 font-mono text-sm whitespace-pre-wrap text-slate-300 leading-relaxed">
              {generatedText}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={handleCopy}
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-400 hover:to-blue-400 transition-all"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-teal-500/5 border border-teal-500/20 rounded-2xl p-6">
            <h4 className="text-teal-400 font-semibold mb-2">Sending Tips</h4>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>Send this letter via email with a clear subject line like &ldquo;Rate Update — Effective {effectiveDate ? formatDateAU(effectiveDate) : '[Date]'}.&rdquo;</li>
              <li>If you have a formal contract, check whether it includes a rate review clause before sending.</li>
              <li>For long-term clients, consider following up with a quick phone call to discuss the change personally.</li>
              <li>Keep a copy of this letter and any client acknowledgement for your records.</li>
              <li>Update your invoice templates and quotes to reflect the new rate from the effective date.</li>
            </ul>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/quote-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Quote Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate quotes at your new rates
                </p>
              </a>
              <a
                href="/tools/rate-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Rate Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate your ideal hourly rate
                </p>
              </a>
              <a
                href="/tools/contract-clause-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Contract Clause Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Add rate review clauses to contracts
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool generates price increase letter templates for Australian freelancers and sole traders.
              The generated letter is a template — review and customise it before sending. Rate increases should
              be communicated with adequate notice and in accordance with any existing contractual obligations.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
