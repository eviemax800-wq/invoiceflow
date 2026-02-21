'use client';

import { useState, useCallback } from 'react';

const ABN_WEIGHTS = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

interface ABNResult {
  valid: boolean;
  formatted: string;
  entityType: string;
  entityTypeDescription: string;
}

function validateABN(input: string): ABNResult | null {
  const digits = input.replace(/\s+/g, '').replace(/[^0-9]/g, '');

  if (digits.length !== 11) return null;

  // ABN validation algorithm (ATO standard)
  // Step 1: Subtract 1 from the first digit
  const adjusted = digits.split('').map((d, i) => (i === 0 ? parseInt(d) - 1 : parseInt(d)));

  // Step 2: Multiply each digit by its weighting factor
  const sum = adjusted.reduce((total, digit, i) => total + digit * ABN_WEIGHTS[i], 0);

  // Step 3: If divisible by 89, ABN is valid
  const valid = sum % 89 === 0;

  // Entity type from first two digits
  const typeCode = digits.substring(0, 2);
  const { entityType, entityTypeDescription } = getEntityType(typeCode);

  // Format: XX XXX XXX XXX
  const formatted = `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 11)}`;

  return { valid, formatted, entityType, entityTypeDescription };
}

function getEntityType(code: string): { entityType: string; entityTypeDescription: string } {
  const first = parseInt(code[0]);
  // ABN entity type is determined by the first digit pattern
  // These are general categories based on ATO documentation
  if (first >= 1 && first <= 5) {
    return {
      entityType: 'Company',
      entityTypeDescription:
        'Australian Company (registered with ASIC). This ABN belongs to a company entity.',
    };
  }
  if (first >= 6 && first <= 7) {
    return {
      entityType: 'Sole Trader / Individual',
      entityTypeDescription:
        'Individual or sole trader. This ABN is registered to a person operating as a sole trader or individual.',
    };
  }
  if (first === 8) {
    return {
      entityType: 'Trust',
      entityTypeDescription:
        'Trust entity (family trust, unit trust, or discretionary trust). This ABN belongs to a trust structure.',
    };
  }
  if (first === 9) {
    return {
      entityType: 'Government / Other',
      entityTypeDescription:
        'Government entity or other organisation type. This ABN belongs to a government body or special entity.',
    };
  }
  return {
    entityType: 'Entity',
    entityTypeDescription: 'Entity type could not be determined from the ABN prefix.',
  };
}

// Common example ABNs for quick testing
const EXAMPLE_ABNS = [
  { label: 'Telstra', abn: '33 051 775 556' },
  { label: 'BHP Group', abn: '49 004 028 077' },
  { label: 'Woolworths', abn: '88 000 014 675' },
  { label: 'Commonwealth Bank', abn: '48 123 123 124' },
];

export default function ABNLookup() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ABNResult | null>(null);
  const [checked, setChecked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleValidate = useCallback(() => {
    const r = validateABN(input);
    setResult(r);
    setChecked(true);
  }, [input]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') handleValidate();
    },
    [handleValidate]
  );

  const handleCopy = useCallback(() => {
    if (!result) return;
    const text = `ABN: ${result.formatted}\nStatus: ${result.valid ? 'Valid' : 'Invalid'}\nEntity Type: ${result.entityType}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [result]);

  const handleClear = useCallback(() => {
    setInput('');
    setResult(null);
    setChecked(false);
    setCopied(false);
  }, []);

  return (
    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
      {/* Input */}
      <div className="mb-6">
        <label className="block text-sm text-slate-400 mb-2">
          Enter an Australian Business Number (ABN)
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            inputMode="numeric"
            maxLength={14}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setChecked(false);
            }}
            onKeyDown={handleKeyDown}
            placeholder="XX XXX XXX XXX"
            className="flex-1 bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-2xl text-white font-mono tracking-wider placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
            autoFocus
          />
          <button
            onClick={handleValidate}
            disabled={input.replace(/\s+/g, '').replace(/[^0-9]/g, '').length !== 11}
            className="px-6 py-4 rounded-xl text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
          >
            Validate
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-2">Enter all 11 digits. Spaces are optional.</p>
      </div>

      {/* Result */}
      {checked && result && (
        <div className="space-y-3 mb-6">
          {/* Valid/Invalid Badge */}
          <div
            className={`flex items-center gap-3 py-4 px-5 rounded-xl ${
              result.valid
                ? 'bg-emerald-500/10 border border-emerald-500/20'
                : 'bg-red-500/10 border border-red-500/20'
            }`}
          >
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${
                result.valid ? 'bg-emerald-500/20' : 'bg-red-500/20'
              }`}
            >
              {result.valid ? (
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <div>
              <div className={`font-bold text-lg ${result.valid ? 'text-emerald-400' : 'text-red-400'}`}>
                {result.valid ? 'Valid ABN' : 'Invalid ABN'}
              </div>
              <div className="text-sm text-slate-400">
                {result.valid
                  ? 'This ABN passes the Australian Business Register checksum validation.'
                  : 'This number does not pass ABN checksum validation. Please check the digits and try again.'}
              </div>
            </div>
          </div>

          {/* ABN Details */}
          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
            <span className="text-slate-400">ABN</span>
            <span className="text-white font-mono text-lg tracking-wider">{result.formatted}</span>
          </div>

          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
            <span className="text-slate-400">Entity Type</span>
            <span className="text-white font-semibold">{result.entityType}</span>
          </div>

          {result.valid && (
            <div className="py-3 px-4 rounded-xl bg-white/5">
              <p className="text-sm text-slate-400">{result.entityTypeDescription}</p>
            </div>
          )}

          {/* ABR Link */}
          {result.valid && (
            <a
              href={`https://abr.business.gov.au/ABN/View?abn=${result.formatted.replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 px-4 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/15 transition-colors group"
            >
              <div>
                <span className="text-purple-400 font-semibold text-sm">
                  View full details on ABR
                </span>
                <p className="text-xs text-slate-500 mt-0.5">
                  Business name, GST status, address, and more
                </p>
              </div>
              <svg
                className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="w-full py-3 rounded-xl text-sm font-medium transition-all bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
          >
            {copied ? 'Copied to clipboard!' : 'Copy results'}
          </button>
        </div>
      )}

      {checked && !result && (
        <div className="mb-6 py-4 px-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
          <div className="text-amber-400 font-semibold">Invalid format</div>
          <p className="text-sm text-slate-400 mt-1">
            An ABN must be exactly 11 digits. Please check the number and try again.
          </p>
        </div>
      )}

      {/* Quick Examples */}
      <div>
        <p className="text-xs text-slate-500 mb-2">Try an example:</p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLE_ABNS.map((ex) => (
            <button
              key={ex.abn}
              onClick={() => {
                setInput(ex.abn);
                setResult(validateABN(ex.abn));
                setChecked(true);
              }}
              className="px-3 py-1.5 rounded-lg text-xs text-slate-400 bg-white/5 hover:bg-white/10 hover:text-white transition-all"
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {checked && (
        <button
          onClick={handleClear}
          className="mt-4 text-sm text-slate-500 hover:text-slate-300 transition-colors"
        >
          Clear and start over
        </button>
      )}
    </div>
  );
}
