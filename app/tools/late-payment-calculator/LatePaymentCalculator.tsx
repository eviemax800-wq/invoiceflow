'use client';

import { useState, useCallback } from 'react';

type CompoundMethod = 'simple' | 'monthly' | 'daily';
type PaymentTerms = 'custom' | '7' | '14' | '30' | '60' | '90';

interface CalculationResult {
  daysOverdue: number;
  interestAmount: number;
  totalOwed: number;
  dailyRate: number;
  dailyInterestAmount: number;
  principalAmount: number;
  annualRate: number;
  compoundMethod: CompoundMethod;
}

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const getTodayString = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const quickAmounts = [500, 1000, 2500, 5000, 10000, 25000];
const commonRates = [2, 5, 10, 12, 15];

export default function LatePaymentCalculator() {
  const [invoiceAmount, setInvoiceAmount] = useState<string>('1000');
  const [invoiceDate, setInvoiceDate] = useState<string>('');
  const [paymentTerms, setPaymentTerms] = useState<PaymentTerms>('30');
  const [customDueDate, setCustomDueDate] = useState<string>('');
  const [paymentDate, setPaymentDate] = useState<string>(getTodayString());
  const [stillUnpaid, setStillUnpaid] = useState<boolean>(true);
  const [interestRate, setInterestRate] = useState<string>('10');
  const [compoundMethod, setCompoundMethod] = useState<CompoundMethod>('simple');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [copied, setCopied] = useState(false);

  const calculateDueDate = useCallback((): Date | null => {
    if (paymentTerms === 'custom') {
      if (!customDueDate) return null;
      return new Date(customDueDate + 'T00:00:00');
    }
    if (!invoiceDate) return null;
    const date = new Date(invoiceDate + 'T00:00:00');
    date.setDate(date.getDate() + parseInt(paymentTerms));
    return date;
  }, [paymentTerms, customDueDate, invoiceDate]);

  const calculate = useCallback(() => {
    const principal = parseFloat(invoiceAmount);
    if (isNaN(principal) || principal <= 0) return;

    const dueDate = calculateDueDate();
    if (!dueDate) return;

    const endDate = stillUnpaid ? new Date() : new Date(paymentDate + 'T00:00:00');

    const diffTime = endDate.getTime() - dueDate.getTime();
    const daysOverdue = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    if (daysOverdue === 0) {
      setResult({
        daysOverdue: 0,
        interestAmount: 0,
        totalOwed: principal,
        dailyRate: parseFloat(interestRate) / 365,
        dailyInterestAmount: 0,
        principalAmount: principal,
        annualRate: parseFloat(interestRate),
        compoundMethod,
      });
      return;
    }

    const rate = parseFloat(interestRate) / 100;
    let interestAmount = 0;

    switch (compoundMethod) {
      case 'simple':
        interestAmount = principal * rate * (daysOverdue / 365);
        break;
      case 'monthly': {
        const months = daysOverdue / 30.4375;
        interestAmount = principal * Math.pow(1 + rate / 12, months) - principal;
        break;
      }
      case 'daily':
        interestAmount = principal * Math.pow(1 + rate / 365, daysOverdue) - principal;
        break;
    }

    const dailyRate = rate / 365;
    const dailyInterestAmount = principal * dailyRate;

    setResult({
      daysOverdue,
      interestAmount,
      totalOwed: principal + interestAmount,
      dailyRate: dailyRate * 100,
      dailyInterestAmount,
      principalAmount: principal,
      annualRate: parseFloat(interestRate),
      compoundMethod,
    });
  }, [invoiceAmount, calculateDueDate, stillUnpaid, paymentDate, interestRate, compoundMethod]);

  const copyResults = useCallback(() => {
    if (!result) return;
    const text = [
      `Late Payment Interest Calculation`,
      `-----------------------------------`,
      `Principal Amount: ${formatCurrency(result.principalAmount)}`,
      `Days Overdue: ${result.daysOverdue}`,
      `Annual Interest Rate: ${result.annualRate}%`,
      `Compounding: ${result.compoundMethod === 'simple' ? 'Simple Interest' : result.compoundMethod === 'monthly' ? 'Monthly Compound' : 'Daily Compound'}`,
      `Daily Rate: ${result.dailyRate.toFixed(4)}%`,
      `Daily Interest: ${formatCurrency(result.dailyInterestAmount)}`,
      `-----------------------------------`,
      `Interest Accrued: ${formatCurrency(result.interestAmount)}`,
      `Total Amount Owed: ${formatCurrency(result.totalOwed)}`,
      `-----------------------------------`,
      `Calculated by InvoiceFlow — invoiceflow.au`,
    ].join('\n');

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [result]);

  return (
    <div className="space-y-8">
      {/* Calculator Card */}
      <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10">
        <h2 className="text-xl font-semibold text-white heading-font mb-6">
          Calculate Late Payment Interest
        </h2>

        <div className="space-y-6">
          {/* Invoice Amount */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Invoice Amount (AUD)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-lg">
                $
              </span>
              <input
                type="number"
                value={invoiceAmount}
                onChange={(e) => setInvoiceAmount(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-mono text-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all"
              />
            </div>
            {/* Quick Amount Buttons */}
            <div className="flex flex-wrap gap-2 mt-3">
              {quickAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setInvoiceAmount(amount.toString())}
                  className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all ${
                    invoiceAmount === amount.toString()
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                      : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-slate-300'
                  }`}
                >
                  ${amount.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Dates Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Invoice Date */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Invoice Date
              </label>
              <input
                type="date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-mono focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all [color-scheme:dark]"
              />
            </div>

            {/* Payment Terms / Due Date */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Payment Terms
              </label>
              <select
                value={paymentTerms}
                onChange={(e) => setPaymentTerms(e.target.value as PaymentTerms)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-mono focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all appearance-none cursor-pointer [color-scheme:dark]"
              >
                <option value="7" className="bg-slate-800">Net 7 (7 days)</option>
                <option value="14" className="bg-slate-800">Net 14 (14 days)</option>
                <option value="30" className="bg-slate-800">Net 30 (30 days)</option>
                <option value="60" className="bg-slate-800">Net 60 (60 days)</option>
                <option value="90" className="bg-slate-800">Net 90 (90 days)</option>
                <option value="custom" className="bg-slate-800">Custom due date</option>
              </select>
            </div>
          </div>

          {/* Custom Due Date (conditional) */}
          {paymentTerms === 'custom' && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Custom Due Date
              </label>
              <input
                type="date"
                value={customDueDate}
                onChange={(e) => setCustomDueDate(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-mono focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all [color-scheme:dark]"
              />
            </div>
          )}

          {/* Payment Date */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Payment Received Date
            </label>
            <div className="flex items-center gap-3 mb-3">
              <button
                onClick={() => setStillUnpaid(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  stillUnpaid
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
                }`}
              >
                Still Unpaid (Today)
              </button>
              <button
                onClick={() => setStillUnpaid(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  !stillUnpaid
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
                }`}
              >
                Paid on Date
              </button>
            </div>
            {!stillUnpaid && (
              <input
                type="date"
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-mono focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all [color-scheme:dark]"
              />
            )}
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Annual Interest Rate (% p.a.)
            </label>
            <div className="relative">
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="10"
                min="0"
                max="100"
                step="0.1"
                className="w-full pr-10 pl-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-mono text-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono">
                %
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {commonRates.map((rate) => (
                <button
                  key={rate}
                  onClick={() => setInterestRate(rate.toString())}
                  className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all ${
                    interestRate === rate.toString()
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                      : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-slate-300'
                  }`}
                >
                  {rate}%
                </button>
              ))}
            </div>
          </div>

          {/* Compound Method */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Compounding Method
            </label>
            <div className="grid grid-cols-3 gap-2">
              {([
                { value: 'simple', label: 'Simple', desc: 'No compounding' },
                { value: 'monthly', label: 'Monthly', desc: 'Compounds monthly' },
                { value: 'daily', label: 'Daily', desc: 'Compounds daily' },
              ] as const).map((method) => (
                <button
                  key={method.value}
                  onClick={() => setCompoundMethod(method.value)}
                  className={`px-3 py-3 rounded-xl text-sm font-medium transition-all text-center ${
                    compoundMethod === method.value
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                      : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-slate-300'
                  }`}
                >
                  <div className="font-semibold">{method.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{method.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculate}
            className="w-full py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl hover:from-teal-400 hover:to-blue-400 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-teal-500/20"
          >
            Calculate Interest
          </button>
        </div>
      </div>

      {/* Results Panel */}
      {result !== null && (
        <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white heading-font">
              Calculation Results
            </h3>
            <button
              onClick={copyResults}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-all"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Results</span>
                </>
              )}
            </button>
          </div>

          {result.daysOverdue === 0 ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 text-center">
              <div className="text-emerald-400 text-lg font-semibold mb-1">Not Overdue</div>
              <div className="text-slate-400 text-sm">This invoice is not yet past due. No interest has accrued.</div>
            </div>
          ) : (
            <>
              {/* Main Result */}
              <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-6 text-center">
                <div className="text-sm text-slate-400 mb-1">Total Amount Owed</div>
                <div className="text-4xl sm:text-5xl font-bold font-mono gradient-text mb-2">
                  {formatCurrency(result.totalOwed)}
                </div>
                <div className="text-sm text-slate-400">
                  {formatCurrency(result.principalAmount)} principal + {formatCurrency(result.interestAmount)} interest
                </div>
              </div>

              {/* Detail Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Days Overdue</div>
                  <div className="text-2xl font-bold font-mono text-red-400">{result.daysOverdue}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Interest Accrued</div>
                  <div className="text-2xl font-bold font-mono text-teal-400">{formatCurrency(result.interestAmount)}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Daily Rate</div>
                  <div className="text-2xl font-bold font-mono text-blue-400">{result.dailyRate.toFixed(4)}%</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Daily Interest</div>
                  <div className="text-2xl font-bold font-mono text-slate-300">{formatCurrency(result.dailyInterestAmount)}</div>
                </div>
              </div>

              {/* Calculation Breakdown */}
              <div className="bg-white/5 rounded-xl p-5 space-y-3">
                <div className="text-sm font-medium text-slate-300 mb-3">Calculation Breakdown</div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Principal Amount</span>
                  <span className="text-white font-mono">{formatCurrency(result.principalAmount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Annual Rate</span>
                  <span className="text-white font-mono">{result.annualRate}% p.a.</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Compounding</span>
                  <span className="text-white font-mono capitalize">{result.compoundMethod === 'simple' ? 'Simple Interest' : `${result.compoundMethod} Compound`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Days Overdue</span>
                  <span className="text-white font-mono">{result.daysOverdue} days</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between text-sm">
                  <span className="text-slate-400">Formula Used</span>
                  <span className="text-teal-400 font-mono text-xs">
                    {result.compoundMethod === 'simple' && 'I = P x r x (d / 365)'}
                    {result.compoundMethod === 'monthly' && 'A = P x (1 + r/12)^m - P'}
                    {result.compoundMethod === 'daily' && 'A = P x (1 + r/365)^d - P'}
                  </span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between font-semibold">
                  <span className="text-slate-300">Interest Accrued</span>
                  <span className="text-teal-400 font-mono">{formatCurrency(result.interestAmount)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-white">Total Owed</span>
                  <span className="gradient-text font-mono">{formatCurrency(result.totalOwed)}</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-xs text-slate-500 leading-relaxed">
                <strong className="text-slate-400">Disclaimer:</strong> This calculator provides estimates only and should not be considered legal or financial advice.
                Interest calculations may vary based on your specific contract terms. In Australia, the right to charge late payment interest
                must typically be established in your contract or terms of trade. Consult a legal professional for specific advice regarding
                debt recovery and late payment penalties.
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
