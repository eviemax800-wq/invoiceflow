'use client';

import { useState, useMemo, useCallback } from 'react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

interface OutstandingInvoice {
  id: string;
  description: string;
  amount: string;
  daysUntilDue: string;
}

interface MonthForecast {
  month: string;
  openingBalance: number;
  incomeBilled: number;
  invoicesReceived: number;
  totalIn: number;
  fixedExpenses: number;
  variableExpenses: number;
  taxProvision: number;
  totalOut: number;
  netCashFlow: number;
  closingBalance: number;
}

let nextInvId = 2;

export default function CashFlowForecast() {
  const [currentBalance, setCurrentBalance] = useState('5000');
  const [monthlyIncome, setMonthlyIncome] = useState('8000');
  const [paymentTerms, setPaymentTerms] = useState('30');
  const [collectionRate, setCollectionRate] = useState('90');

  // Expenses
  const [rent, setRent] = useState('0');
  const [software, setSoftware] = useState('200');
  const [insurance, setInsurance] = useState('150');
  const [otherFixed, setOtherFixed] = useState('100');
  const [variablePct, setVariablePct] = useState('10');
  const [taxProvisionPct, setTaxProvisionPct] = useState('25');

  // Outstanding invoices
  const [invoices, setInvoices] = useState<OutstandingInvoice[]>([
    { id: '1', description: 'Pending invoice', amount: '3000', daysUntilDue: '15' },
  ]);

  const [forecastMonths, setForecastMonths] = useState('6');
  const [copied, setCopied] = useState(false);

  const addInvoice = useCallback(() => {
    setInvoices((prev) => [
      ...prev,
      { id: String(nextInvId++), description: '', amount: '', daysUntilDue: '30' },
    ]);
  }, []);

  const removeInvoice = useCallback((id: string) => {
    setInvoices((prev) => prev.filter((inv) => inv.id !== id));
  }, []);

  const updateInvoice = useCallback(
    (id: string, field: keyof OutstandingInvoice, value: string) => {
      setInvoices((prev) =>
        prev.map((inv) => (inv.id === id ? { ...inv, [field]: value } : inv))
      );
    },
    []
  );

  const forecast = useMemo<MonthForecast[]>(() => {
    const months = Math.min(Math.max(parseInt(forecastMonths) || 3, 1), 12);
    const balance = parseFloat(currentBalance) || 0;
    const income = parseFloat(monthlyIncome) || 0;
    const terms = parseInt(paymentTerms) || 30;
    const collection = (parseFloat(collectionRate) || 90) / 100;

    const fixedExpenses =
      (parseFloat(rent) || 0) +
      (parseFloat(software) || 0) +
      (parseFloat(insurance) || 0) +
      (parseFloat(otherFixed) || 0);
    const varPct = (parseFloat(variablePct) || 0) / 100;
    const taxPct = (parseFloat(taxProvisionPct) || 0) / 100;

    // Calculate outstanding invoices that will land in specific months
    const invoicesByMonth: Record<number, number> = {};
    for (const inv of invoices) {
      const amount = parseFloat(inv.amount) || 0;
      const days = parseInt(inv.daysUntilDue) || 0;
      if (amount > 0) {
        const monthIdx = Math.max(0, Math.floor(days / 30));
        invoicesByMonth[monthIdx] = (invoicesByMonth[monthIdx] || 0) + amount;
      }
    }

    const results: MonthForecast[] = [];
    let runningBalance = balance;

    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    const now = new Date();

    for (let i = 0; i < months; i++) {
      const monthDate = new Date(now.getFullYear(), now.getMonth() + i, 1);
      const monthLabel = `${monthNames[monthDate.getMonth()]} ${monthDate.getFullYear()}`;

      const openingBalance = runningBalance;

      // Income based on payment terms delay
      // Month 0: if terms <= 15 days, partial income arrives; otherwise mostly from prior work
      let incomeBilled = income;
      let incomeReceived: number;
      if (i === 0) {
        // First month: prorate based on terms
        const receiptFraction = terms <= 15 ? 0.7 : terms <= 30 ? 0.5 : 0.3;
        incomeReceived = incomeBilled * receiptFraction * collection;
      } else {
        incomeReceived = incomeBilled * collection;
      }

      // Outstanding invoices arriving this month
      const invoicePayments = invoicesByMonth[i] || 0;
      const totalIn = incomeReceived + invoicePayments;

      // Expenses
      const variableExpenses = income * varPct;
      const taxProvision = Math.max(0, (income - fixedExpenses - variableExpenses) * taxPct);
      const totalOut = fixedExpenses + variableExpenses + taxProvision;

      const netCashFlow = totalIn - totalOut;
      const closingBalance = openingBalance + netCashFlow;

      results.push({
        month: monthLabel,
        openingBalance,
        incomeBilled,
        invoicesReceived: invoicePayments,
        totalIn,
        fixedExpenses,
        variableExpenses,
        taxProvision,
        totalOut,
        netCashFlow,
        closingBalance,
      });

      runningBalance = closingBalance;
    }

    return results;
  }, [
    currentBalance, monthlyIncome, paymentTerms, collectionRate,
    rent, software, insurance, otherFixed, variablePct, taxProvisionPct,
    invoices, forecastMonths,
  ]);

  const lowestBalance = useMemo(() => {
    if (forecast.length === 0) return 0;
    return Math.min(...forecast.map((m) => m.closingBalance));
  }, [forecast]);

  const avgNetCashFlow = useMemo(() => {
    if (forecast.length === 0) return 0;
    return forecast.reduce((sum, m) => sum + m.netCashFlow, 0) / forecast.length;
  }, [forecast]);

  const runwayMonths = useMemo(() => {
    const negIdx = forecast.findIndex((m) => m.closingBalance < 0);
    if (negIdx === -1) return forecast.length;
    return negIdx;
  }, [forecast]);

  const handleCopy = useCallback(() => {
    const lines = [
      'CASH FLOW FORECAST',
      '==================',
      '',
      `Starting Balance: ${formatCurrency(parseFloat(currentBalance) || 0)}`,
      `Monthly Income: ${formatCurrency(parseFloat(monthlyIncome) || 0)}`,
      `Payment Terms: Net ${paymentTerms} days`,
      '',
      'MONTHLY FORECAST:',
      ...forecast.map(
        (m) =>
          `  ${m.month}: ${formatCurrency(m.closingBalance)} (${m.netCashFlow >= 0 ? '+' : ''}${formatCurrency(m.netCashFlow)})`
      ),
      '',
      `Lowest Balance: ${formatCurrency(lowestBalance)}`,
      `Avg Monthly Cash Flow: ${formatCurrency(avgNetCashFlow)}`,
      `Cash Runway: ${runwayMonths}+ months`,
      '',
      'Generated by InvoiceFlow — invoiceflow.app',
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [forecast, currentBalance, monthlyIncome, paymentTerms, lowestBalance, avgNetCashFlow, runwayMonths]);

  const maxBalance = useMemo(() => {
    if (forecast.length === 0) return 1;
    return Math.max(...forecast.map((m) => Math.abs(m.closingBalance)), 1);
  }, [forecast]);

  return (
    <div className="space-y-8">
      {/* Income & Terms */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Income & Cash Position</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Current Bank Balance (AUD)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={currentBalance}
                onChange={(e) => setCurrentBalance(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                placeholder="5000"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Average Monthly Income</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                placeholder="8000"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Typical Payment Terms</label>
            <div className="flex gap-2 mb-2">
              {['7', '14', '30', '60'].map((term) => (
                <button
                  key={term}
                  onClick={() => setPaymentTerms(term)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    paymentTerms === term
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  Net {term}
                </button>
              ))}
            </div>
            <input
              type="number"
              value={paymentTerms}
              onChange={(e) => setPaymentTerms(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
              placeholder="30"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Collection Rate (%)</label>
            <input
              type="number"
              value={collectionRate}
              onChange={(e) => setCollectionRate(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
              placeholder="90"
              min="0"
              max="100"
            />
            <p className="text-xs text-slate-500 mt-1">% of invoiced amount actually collected on time. Industry avg: 85-95%.</p>
          </div>
        </div>
      </div>

      {/* Monthly Expenses */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Monthly Expenses</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Rent / Coworking</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                placeholder="0"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Software & Subscriptions</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={software}
                onChange={(e) => setSoftware(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                placeholder="200"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Insurance</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                placeholder="150"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Other Fixed Costs</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <input
                type="number"
                value={otherFixed}
                onChange={(e) => setOtherFixed(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                placeholder="100"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Variable Costs (% of income)</label>
            <input
              type="number"
              value={variablePct}
              onChange={(e) => setVariablePct(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
              placeholder="10"
              min="0"
              max="100"
            />
            <p className="text-xs text-slate-500 mt-1">Materials, subcontractors, travel — costs that scale with income.</p>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1.5">Tax Provision (% of profit)</label>
            <input
              type="number"
              value={taxProvisionPct}
              onChange={(e) => setTaxProvisionPct(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
              placeholder="25"
              min="0"
              max="50"
            />
            <p className="text-xs text-slate-500 mt-1">Set aside for income tax + Medicare. Typically 25-35% for freelancers.</p>
          </div>
        </div>
      </div>

      {/* Outstanding Invoices */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white heading-font">Outstanding Invoices</h3>
            <p className="text-xs text-slate-400 mt-1">Invoices you&apos;ve sent but not yet been paid for.</p>
          </div>
          <button
            onClick={addInvoice}
            className="px-3 py-1.5 text-xs font-medium bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30 transition-colors border border-teal-500/30"
          >
            + Add Invoice
          </button>
        </div>
        {invoices.length === 0 ? (
          <p className="text-sm text-slate-500 italic">No outstanding invoices. Click &quot;+ Add Invoice&quot; to include pending payments.</p>
        ) : (
          <div className="space-y-3">
            {invoices.map((inv, idx) => (
              <div key={inv.id} className="grid grid-cols-12 gap-2 items-end">
                <div className="col-span-12 sm:col-span-5">
                  {idx === 0 && <label className="block text-xs text-slate-400 mb-1">Description</label>}
                  <input
                    type="text"
                    value={inv.description}
                    onChange={(e) => updateInvoice(inv.id, 'description', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="Client invoice"
                  />
                </div>
                <div className="col-span-5 sm:col-span-3">
                  {idx === 0 && <label className="block text-xs text-slate-400 mb-1">Amount</label>}
                  <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                    <input
                      type="number"
                      value={inv.amount}
                      onChange={(e) => updateInvoice(inv.id, 'amount', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-6 py-2.5 text-white text-sm focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="col-span-5 sm:col-span-3">
                  {idx === 0 && <label className="block text-xs text-slate-400 mb-1">Days Until Due</label>}
                  <input
                    type="number"
                    value={inv.daysUntilDue}
                    onChange={(e) => updateInvoice(inv.id, 'daysUntilDue', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                    placeholder="30"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  {idx === 0 && <label className="block text-xs text-transparent mb-1">X</label>}
                  <button
                    onClick={() => removeInvoice(inv.id)}
                    className="w-full py-2.5 text-sm text-slate-500 hover:text-rose-400 transition-colors text-center"
                  >
                    &times;
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Forecast Period */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white heading-font mb-4">Forecast Period</h3>
        <div className="flex gap-2">
          {['3', '6', '12'].map((m) => (
            <button
              key={m}
              onClick={() => setForecastMonths(m)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                forecastMonths === m
                  ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {m} Months
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {forecast.length > 0 && (
        <div className="glass rounded-2xl p-8 border border-teal-500/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white heading-font">Cash Flow Forecast</h3>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-colors border border-white/10"
            >
              {copied ? 'Copied!' : 'Copy Forecast'}
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Cash Runway</p>
              <p className={`text-2xl font-bold ${runwayMonths >= 6 ? 'text-emerald-400' : runwayMonths >= 3 ? 'text-amber-400' : 'text-rose-400'}`}>
                {runwayMonths >= parseInt(forecastMonths) ? `${forecastMonths}+` : runwayMonths} months
              </p>
              <p className="text-xs text-slate-500">
                {runwayMonths >= parseInt(forecastMonths) ? 'Healthy' : runwayMonths >= 3 ? 'Monitor closely' : 'Action needed'}
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Lowest Balance</p>
              <p className={`text-2xl font-bold ${lowestBalance >= 0 ? 'text-teal-400' : 'text-rose-400'}`}>
                {formatCurrency(lowestBalance)}
              </p>
              <p className="text-xs text-slate-500">{lowestBalance < 0 ? 'Shortfall risk' : 'Stays positive'}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Avg Monthly Flow</p>
              <p className={`text-2xl font-bold ${avgNetCashFlow >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {avgNetCashFlow >= 0 ? '+' : ''}{formatCurrency(avgNetCashFlow)}
              </p>
              <p className="text-xs text-slate-500">per month average</p>
            </div>
          </div>

          {/* Visual Cash Flow Chart */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-slate-400 mb-3">Balance Over Time</h4>
            <div className="space-y-2">
              {forecast.map((m) => {
                const barWidth = Math.abs(m.closingBalance) / maxBalance * 100;
                const isNegative = m.closingBalance < 0;
                return (
                  <div key={m.month} className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-16 shrink-0">{m.month}</span>
                    <div className="flex-1 h-7 bg-white/5 rounded-lg overflow-hidden relative">
                      <div
                        className={`h-full rounded-lg flex items-center px-2 text-xs font-medium transition-all ${
                          isNegative ? 'bg-rose-500/40 text-rose-200' : 'bg-teal-500/40 text-teal-200'
                        }`}
                        style={{ width: `${Math.max(barWidth, 8)}%` }}
                      >
                        {formatCurrency(m.closingBalance)}
                      </div>
                    </div>
                    <span className={`text-xs w-16 text-right shrink-0 ${m.netCashFlow >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {m.netCashFlow >= 0 ? '+' : ''}{formatCurrency(m.netCashFlow)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Monthly Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 text-slate-400 font-medium">Month</th>
                  <th className="text-right py-2 text-slate-400 font-medium">Money In</th>
                  <th className="text-right py-2 text-slate-400 font-medium">Money Out</th>
                  <th className="text-right py-2 text-slate-400 font-medium">Net Flow</th>
                  <th className="text-right py-2 text-slate-400 font-medium">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {forecast.map((m) => (
                  <tr key={m.month}>
                    <td className="py-2 text-white">{m.month}</td>
                    <td className="py-2 text-right text-emerald-400">{formatCurrency(m.totalIn)}</td>
                    <td className="py-2 text-right text-rose-400">{formatCurrency(m.totalOut)}</td>
                    <td className={`py-2 text-right font-medium ${m.netCashFlow >= 0 ? 'text-teal-400' : 'text-rose-400'}`}>
                      {m.netCashFlow >= 0 ? '+' : ''}{formatCurrency(m.netCashFlow)}
                    </td>
                    <td className={`py-2 text-right font-medium ${m.closingBalance >= 0 ? 'text-white' : 'text-rose-400'}`}>
                      {formatCurrency(m.closingBalance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Insights */}
          <div className="mt-6 space-y-3">
            {lowestBalance < 0 && (
              <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
                <p className="text-sm text-rose-300">
                  <strong>Warning:</strong> Your cash balance goes negative in your forecast. Consider
                  shortening payment terms, building a cash reserve, or reducing expenses. Late-paying
                  clients can worsen this — use{' '}
                  <a href="/tools/late-payment-calculator" className="underline hover:text-rose-200">
                    our Late Payment Calculator
                  </a>{' '}
                  to model interest on overdue invoices.
                </p>
              </div>
            )}
            {lowestBalance >= 0 && lowestBalance < (parseFloat(monthlyIncome) || 0) && (
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                <p className="text-sm text-amber-300">
                  <strong>Caution:</strong> Your lowest projected balance ({formatCurrency(lowestBalance)}) is
                  less than one month&apos;s income. Aim for a 3-month cash buffer to handle late payments
                  and seasonal dips.
                </p>
              </div>
            )}
            {lowestBalance >= (parseFloat(monthlyIncome) || 0) * 3 && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                <p className="text-sm text-emerald-300">
                  <strong>Healthy:</strong> You maintain a strong cash buffer throughout the forecast.
                  Consider investing surplus cash or accelerating business growth.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
