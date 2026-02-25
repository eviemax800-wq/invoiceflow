'use client';

import { useState, useMemo } from 'react';

/* ---- Currency Data ---- */

interface CurrencyInfo {
  code: string;
  name: string;
  symbol: string;
  rateToAUD: number; // How many AUD per 1 unit of this currency
}

const CURRENCIES: CurrencyInfo[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', rateToAUD: 1.57 },
  { code: 'GBP', name: 'British Pound', symbol: '\u00a3', rateToAUD: 1.98 },
  { code: 'EUR', name: 'Euro', symbol: '\u20ac', rateToAUD: 1.65 },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: '$', rateToAUD: 0.92 },
  { code: 'SGD', name: 'Singapore Dollar', symbol: '$', rateToAUD: 1.17 },
  { code: 'JPY', name: 'Japanese Yen', symbol: '\u00a5', rateToAUD: 0.0105 },
  { code: 'CAD', name: 'Canadian Dollar', symbol: '$', rateToAUD: 1.10 },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: '$', rateToAUD: 0.20 },
];

/* ---- Payment Method Data ---- */

interface PaymentMethod {
  name: string;
  feePercent: number;
  flatFee: number; // in AUD
  exchangeMarkup: number; // as decimal, e.g. 0.02 = 2%
  transferTime: string;
  pros: string;
}

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    name: 'Wise',
    feePercent: 0,
    flatFee: 0,
    exchangeMarkup: 0.005, // 0.5% average
    transferTime: '1-2 business days',
    pros: 'Mid-market rate, lowest total cost, multi-currency account with local bank details',
  },
  {
    name: 'Bank Transfer (SWIFT)',
    feePercent: 0,
    flatFee: 20,
    exchangeMarkup: 0.02, // 2% markup
    transferTime: '2-5 business days',
    pros: 'Widely accepted, familiar to corporate clients, no account setup required',
  },
  {
    name: 'PayPal',
    feePercent: 0.026,
    flatFee: 0.30,
    exchangeMarkup: 0.035, // 3.5% conversion fee
    transferTime: 'Instant to PayPal balance',
    pros: 'Instant availability, widely recognised, buyer/seller protection',
  },
  {
    name: 'Stripe',
    feePercent: 0.029,
    flatFee: 0.30,
    exchangeMarkup: 0.02, // 2% conversion
    transferTime: '2-3 business days',
    pros: 'Professional payment links, automated invoicing, recurring billing support',
  },
  {
    name: 'Payoneer',
    feePercent: 0,
    flatFee: 1.50,
    exchangeMarkup: 0.02, // up to 2%
    transferTime: '2-5 business days',
    pros: 'Multi-currency receiving accounts, popular on freelance platforms (Upwork, Fiverr)',
  },
];

/* ---- Helpers ---- */

function formatAUD(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatForeign(value: number, currencyCode: string, symbol: string): string {
  if (currencyCode === 'JPY') {
    return `${symbol}${Math.round(value).toLocaleString('en-AU')}`;
  }
  return `${symbol}${value.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/* ---- Component ---- */

export default function InternationalInvoiceCalculator() {
  // Invoice inputs
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [invoiceAmount, setInvoiceAmount] = useState<number>(0);

  // GST inputs
  const [isGSTRegistered, setIsGSTRegistered] = useState(true);
  const [clientOverseas, setClientOverseas] = useState(true);
  const [serviceRemote, setServiceRemote] = useState(true);

  // Current month/year for tax reporting
  const currentMonth = new Date().toLocaleString('en-AU', { month: 'long' });
  const currentYear = new Date().getFullYear();

  // Get selected currency info
  const currency = useMemo(
    () => CURRENCIES.find((c) => c.code === selectedCurrency) || CURRENCIES[0],
    [selectedCurrency]
  );

  // AUD conversion
  const audAmount = useMemo(() => {
    return (invoiceAmount || 0) * currency.rateToAUD;
  }, [invoiceAmount, currency]);

  // GST status
  const gstStatus = useMemo(() => {
    if (!isGSTRegistered) {
      return {
        applies: false,
        message: 'You are not registered for GST, so you do not charge GST on any invoices.',
        detail:
          'If your annual turnover exceeds $75,000, you must register for GST. Below this threshold, GST registration is optional.',
        type: 'info' as const,
      };
    }

    if (!clientOverseas) {
      return {
        applies: true,
        message: 'GST applies — your client is in Australia.',
        detail:
          'Standard GST rules apply for domestic clients. Charge 10% GST on top of your fee and issue a tax invoice with your ABN.',
        type: 'warning' as const,
      };
    }

    if (clientOverseas && serviceRemote) {
      return {
        applies: false,
        message: 'GST-free — this qualifies as an export of services.',
        detail:
          'Under the GST Act, services provided to a non-resident where the service is not "connected with Australia" are GST-free. You do not charge GST, but you can still claim input tax credits on your business expenses. Mark your invoice as "GST-free export" and include your ABN.',
        type: 'success' as const,
      };
    }

    return {
      applies: true,
      message: 'GST may apply — service is connected with Australia.',
      detail:
        'Even though your client is overseas, services performed in Australia (e.g., in-person consulting, work on Australian property) may be "connected with Australia" and subject to GST. Consult the ATO guidelines or your accountant to confirm.',
      type: 'warning' as const,
    };
  }, [isGSTRegistered, clientOverseas, serviceRemote]);

  // GST amount
  const gstAmount = useMemo(() => {
    if (gstStatus.applies) return audAmount * 0.1;
    return 0;
  }, [gstStatus.applies, audAmount]);

  // Net amounts after fees for each payment method
  const feeComparison = useMemo(() => {
    return PAYMENT_METHODS.map((method) => {
      const grossAUD = audAmount;
      const percentageFee = grossAUD * method.feePercent;
      const exchangeFee = grossAUD * method.exchangeMarkup;
      const totalFees = percentageFee + method.flatFee + exchangeFee;
      const netAUD = grossAUD - totalFees;

      return {
        ...method,
        grossAUD,
        percentageFee,
        exchangeFee,
        totalFees,
        netAUD,
        totalFeePercent: grossAUD > 0 ? (totalFees / grossAUD) * 100 : 0,
      };
    });
  }, [audAmount]);

  // Best payment method
  const bestMethod = useMemo(() => {
    if (audAmount <= 0) return null;
    return feeComparison.reduce((best, current) =>
      current.netAUD > best.netAUD ? current : best
    );
  }, [feeComparison, audAmount]);

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';
  const selectClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors appearance-none';

  return (
    <div className="space-y-8">
      {/* Invoice Currency & Amount */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Invoice Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Invoice Currency</label>
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className={selectClass}
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code} className="bg-[#0B1120]">
                  {c.code} — {c.name} ({c.symbol})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>
              Invoice Amount ({currency.symbol} {currency.code})
            </label>
            <input
              type="number"
              value={invoiceAmount || ''}
              onChange={(e) => setInvoiceAmount(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="100"
              placeholder={`e.g. ${currency.code === 'JPY' ? '500000' : '5000'}`}
            />
          </div>
        </div>

        {/* Exchange Rate Info */}
        <div className="mt-5 bg-white/5 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Exchange Rate (approx.)</span>
            <span className="text-sm text-slate-300 font-mono">
              1 {currency.code} = {currency.rateToAUD.toFixed(4)} AUD
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">AUD Equivalent</span>
            <span className="text-lg text-teal-400 font-mono font-bold">{formatAUD(audAmount)}</span>
          </div>
          <p className="text-xs text-slate-500 mt-3 border-t border-white/5 pt-3">
            These are approximate rates for reference only. For your tax return, use the ATO
            monthly exchange rate for {currentMonth} {currentYear}. The ATO publishes official
            rates at ato.gov.au/rates/foreign-exchange-rates.
          </p>
        </div>
      </div>

      {/* GST Status Section */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">GST Status</h3>

        {/* GST Registered Toggle */}
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
            <div>
              <span className="text-slate-300 text-sm">Registered for GST</span>
              <p className="text-xs text-slate-500 mt-0.5">
                Required if annual turnover exceeds $75,000
              </p>
            </div>
            <button
              onClick={() => setIsGSTRegistered(!isGSTRegistered)}
              className={`relative w-14 h-7 rounded-full transition-all ${
                isGSTRegistered
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500'
                  : 'bg-white/10'
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                  isGSTRegistered ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {isGSTRegistered && (
            <>
              <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
                <div>
                  <span className="text-slate-300 text-sm">Client is overseas</span>
                  <p className="text-xs text-slate-500 mt-0.5">
                    The client&apos;s business is located outside Australia
                  </p>
                </div>
                <button
                  onClick={() => setClientOverseas(!clientOverseas)}
                  className={`relative w-14 h-7 rounded-full transition-all ${
                    clientOverseas
                      ? 'bg-gradient-to-r from-teal-500 to-blue-500'
                      : 'bg-white/10'
                  }`}
                >
                  <div
                    className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                      clientOverseas ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {clientOverseas && (
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
                  <div>
                    <span className="text-slate-300 text-sm">Service performed remotely</span>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Work is done remotely, not in-person in Australia
                    </p>
                  </div>
                  <button
                    onClick={() => setServiceRemote(!serviceRemote)}
                    className={`relative w-14 h-7 rounded-full transition-all ${
                      serviceRemote
                        ? 'bg-gradient-to-r from-teal-500 to-blue-500'
                        : 'bg-white/10'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                        serviceRemote ? 'translate-x-7' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* GST Result */}
        <div
          className={`mt-5 rounded-xl p-5 border ${
            gstStatus.type === 'success'
              ? 'bg-teal-500/10 border-teal-500/20'
              : gstStatus.type === 'warning'
                ? 'bg-amber-500/10 border-amber-500/20'
                : 'bg-blue-500/10 border-blue-500/20'
          }`}
        >
          <p
            className={`text-sm font-semibold mb-2 ${
              gstStatus.type === 'success'
                ? 'text-teal-400'
                : gstStatus.type === 'warning'
                  ? 'text-amber-400'
                  : 'text-blue-400'
            }`}
          >
            {gstStatus.message}
          </p>
          <p className="text-sm text-slate-300">{gstStatus.detail}</p>
          {gstStatus.applies && audAmount > 0 && (
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">GST (10%)</span>
                <span className="text-amber-400 font-mono font-semibold">{formatAUD(gstAmount)}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-slate-400">Total inc. GST</span>
                <span className="text-white font-mono font-semibold">
                  {formatAUD(audAmount + gstAmount)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fee Comparison Table */}
      {audAmount > 0 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">
            Payment Method Fee Comparison
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            Compare what you&apos;ll actually receive in AUD after each provider&apos;s fees on a{' '}
            {formatForeign(invoiceAmount, currency.code, currency.symbol)} {currency.code} invoice
          </p>

          {/* Desktop Table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Method</th>
                  <th className="text-right py-3 px-3 text-slate-400 font-semibold">Fee %</th>
                  <th className="text-right py-3 px-3 text-slate-400 font-semibold">Flat Fee</th>
                  <th className="text-right py-3 px-3 text-slate-400 font-semibold">FX Markup</th>
                  <th className="text-right py-3 px-3 text-slate-400 font-semibold">Total Fees</th>
                  <th className="text-right py-3 px-3 text-slate-400 font-semibold">You Receive</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {feeComparison.map((method) => (
                  <tr
                    key={method.name}
                    className={
                      bestMethod && method.name === bestMethod.name
                        ? 'bg-teal-500/5'
                        : ''
                    }
                  >
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">{method.name}</span>
                        {bestMethod && method.name === bestMethod.name && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-400 font-medium uppercase tracking-wide">
                            Best
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-3 text-right text-slate-300 font-mono">
                      {method.feePercent > 0 ? `${(method.feePercent * 100).toFixed(1)}%` : '—'}
                    </td>
                    <td className="py-3 px-3 text-right text-slate-300 font-mono">
                      {method.flatFee > 0 ? formatAUD(method.flatFee) : '—'}
                    </td>
                    <td className="py-3 px-3 text-right text-slate-300 font-mono">
                      {(method.exchangeMarkup * 100).toFixed(1)}%
                    </td>
                    <td className="py-3 px-3 text-right text-amber-400 font-mono font-medium">
                      {formatAUD(method.totalFees)}
                      <span className="text-slate-500 text-xs ml-1">
                        ({method.totalFeePercent.toFixed(1)}%)
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-bold">
                      <span
                        className={
                          bestMethod && method.name === bestMethod.name
                            ? 'text-teal-400'
                            : 'text-white'
                        }
                      >
                        {formatAUD(method.netAUD)}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-400 text-xs">{method.transferTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="sm:hidden space-y-3">
            {feeComparison.map((method) => (
              <div
                key={method.name}
                className={`rounded-xl p-4 border ${
                  bestMethod && method.name === bestMethod.name
                    ? 'bg-teal-500/5 border-teal-500/20'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">{method.name}</span>
                    {bestMethod && method.name === bestMethod.name && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-400 font-medium uppercase tracking-wide">
                        Best
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-500">{method.transferTime}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-slate-500 text-xs">Total Fees</span>
                    <p className="text-amber-400 font-mono">
                      {formatAUD(method.totalFees)}{' '}
                      <span className="text-slate-500 text-xs">
                        ({method.totalFeePercent.toFixed(1)}%)
                      </span>
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 text-xs">You Receive</span>
                    <p
                      className={`font-mono font-bold ${
                        bestMethod && method.name === bestMethod.name
                          ? 'text-teal-400'
                          : 'text-white'
                      }`}
                    >
                      {formatAUD(method.netAUD)}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">{method.pros}</p>
              </div>
            ))}
          </div>

          {/* Savings highlight */}
          {bestMethod && feeComparison.length > 1 && (
            <div className="mt-5 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-4">
              <p className="text-sm text-slate-300">
                Using <span className="text-teal-400 font-semibold">{bestMethod.name}</span> saves
                you{' '}
                <span className="text-teal-400 font-semibold font-mono">
                  {formatAUD(
                    Math.max(...feeComparison.map((m) => m.totalFees)) - bestMethod.totalFees
                  )}
                </span>{' '}
                in fees compared to the most expensive option on this invoice.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Net Amount Calculator */}
      {audAmount > 0 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-6">
            Net Amount Summary
          </h3>
          <div className="space-y-4">
            {feeComparison.map((method) => (
              <div
                key={method.name}
                className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5"
              >
                <div>
                  <span className="text-white text-sm font-medium">{method.name}</span>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fees: {formatAUD(method.totalFees)} ({method.totalFeePercent.toFixed(1)}%)
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className={`font-mono font-bold ${
                      bestMethod && method.name === bestMethod.name
                        ? 'text-teal-400'
                        : 'text-white'
                    }`}
                  >
                    {formatAUD(method.netAUD)}
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">received in AUD</p>
                </div>
              </div>
            ))}
          </div>

          {/* Invoice amount breakdown */}
          <div className="mt-6 bg-white/5 rounded-xl p-5 space-y-3">
            <h4 className="text-sm font-semibold text-white mb-3">Invoice Breakdown</h4>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Invoice Amount</span>
              <span className="text-white font-mono">
                {formatForeign(invoiceAmount, currency.code, currency.symbol)} {currency.code}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">AUD Equivalent (approx.)</span>
              <span className="text-white font-mono">{formatAUD(audAmount)}</span>
            </div>
            {gstStatus.applies && (
              <>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">GST (10%)</span>
                  <span className="text-amber-400 font-mono">{formatAUD(gstAmount)}</span>
                </div>
                <div className="flex justify-between text-sm border-t border-white/10 pt-2">
                  <span className="text-white font-semibold">Total to Invoice (inc. GST)</span>
                  <span className="text-teal-400 font-mono font-bold">
                    {formatAUD(audAmount + gstAmount)}
                  </span>
                </div>
              </>
            )}
            {!gstStatus.applies && isGSTRegistered && clientOverseas && (
              <div className="flex justify-between text-sm border-t border-white/10 pt-2">
                <span className="text-white font-semibold">Total to Invoice (GST-free)</span>
                <span className="text-teal-400 font-mono font-bold">{formatAUD(audAmount)}</span>
              </div>
            )}
            {bestMethod && (
              <div className="flex justify-between text-sm border-t border-white/10 pt-2">
                <span className="text-slate-400">
                  Best net (via {bestMethod.name})
                </span>
                <span className="text-teal-400 font-mono font-bold">
                  {formatAUD(bestMethod.netAUD)}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tax Reporting Helper */}
      {audAmount > 0 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-4">Tax Reporting Helper</h3>
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl p-5">
            <p className="text-sm text-teal-400 font-medium mb-3">For Your Tax Return</p>
            <p className="text-sm text-slate-300">
              Report this invoice as{' '}
              <span className="text-white font-semibold font-mono">{formatAUD(audAmount)}</span>{' '}
              using the ATO monthly exchange rate for{' '}
              <span className="text-white font-semibold">
                {currentMonth} {currentYear}
              </span>
              .
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Foreign amount</span>
                <span className="text-white font-mono">
                  {formatForeign(invoiceAmount, currency.code, currency.symbol)} {currency.code}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Approximate AUD (for reference)</span>
                <span className="text-white font-mono">{formatAUD(audAmount)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Rate used</span>
                <span className="text-white font-mono">
                  1 {currency.code} = {currency.rateToAUD.toFixed(4)} AUD
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">GST status</span>
                <span
                  className={`font-medium ${gstStatus.applies ? 'text-amber-400' : 'text-teal-400'}`}
                >
                  {gstStatus.applies ? 'GST applies (10%)' : 'GST-free export'}
                </span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-slate-500">
                Always use the official ATO monthly exchange rate — not the rate shown here — for
                your BAS and income tax return. These rates are published at{' '}
                <span className="text-slate-400">
                  ato.gov.au/businesses-and-organisations/international-tax-for-business/foreign-exchange-rates
                </span>
                . If the actual AUD amount you received differs from the ATO rate conversion, the
                difference is a foreign exchange gain or loss which should also be reported.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Method Breakdown (Pros) */}
      {audAmount > 0 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-4">
            Payment Method Details
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {feeComparison.map((method) => (
              <div
                key={method.name}
                className={`rounded-xl p-4 border transition-all ${
                  bestMethod && method.name === bestMethod.name
                    ? 'bg-teal-500/5 border-teal-500/20'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-semibold text-sm">{method.name}</h4>
                  {bestMethod && method.name === bestMethod.name && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-400 font-medium uppercase tracking-wide">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mb-3">{method.pros}</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Transaction fee</span>
                    <span className="text-slate-300 font-mono">
                      {method.feePercent > 0
                        ? `${(method.feePercent * 100).toFixed(1)}% + ${formatAUD(method.flatFee)}`
                        : method.flatFee > 0
                          ? formatAUD(method.flatFee)
                          : 'None'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">FX markup</span>
                    <span className="text-slate-300 font-mono">
                      {(method.exchangeMarkup * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Transfer speed</span>
                    <span className="text-slate-300">{method.transferTime}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/5 pt-1 mt-1">
                    <span className="text-slate-500">You receive</span>
                    <span
                      className={`font-mono font-semibold ${
                        bestMethod && method.name === bestMethod.name
                          ? 'text-teal-400'
                          : 'text-white'
                      }`}
                    >
                      {formatAUD(method.netAUD)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="text-center">
        <p className="text-xs text-slate-500 max-w-2xl mx-auto">
          Exchange rates shown are approximate and for reference only. Always use the ATO
          monthly exchange rate for tax reporting purposes. Fee estimates are based on
          publicly available pricing as of February 2026 and may vary. This tool does not
          constitute financial or tax advice — consult a registered tax agent for your
          specific circumstances.
        </p>
      </div>
    </div>
  );
}
