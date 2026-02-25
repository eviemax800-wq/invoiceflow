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

/* ---- Types ---- */

interface ClientRevenue {
  id: string;
  clientName: string;
  invoiceCount: number;
  totalRevenue: number;
}

interface MonthlyRevenue {
  month: string;
  revenue: number;
}

const MONTHS = [
  'July', 'August', 'September', 'October', 'November', 'December',
  'January', 'February', 'March', 'April', 'May', 'June',
];

const FY_OPTIONS = [
  { value: '2025-26', label: 'FY 2025-26 (Jul 2025 — Jun 2026)' },
  { value: '2024-25', label: 'FY 2024-25 (Jul 2024 — Jun 2025)' },
  { value: '2023-24', label: 'FY 2023-24 (Jul 2023 — Jun 2024)' },
];

/* ---- Component ---- */

export default function AnnualRevenueReport() {
  // Business details
  const [businessName, setBusinessName] = useState('');
  const [abn, setAbn] = useState('');
  const [financialYear, setFinancialYear] = useState('2025-26');
  const [isGSTRegistered, setIsGSTRegistered] = useState(true);

  // Client revenue
  const [clients, setClients] = useState<ClientRevenue[]>([
    { id: '1', clientName: '', invoiceCount: 0, totalRevenue: 0 },
  ]);

  // Monthly revenue
  const [monthlyData, setMonthlyData] = useState<MonthlyRevenue[]>(
    MONTHS.map((month) => ({ month, revenue: 0 }))
  );

  // Expenses
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [superContributions, setSuperContributions] = useState(0);

  // UI
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  // Calculations
  const calculations = useMemo(() => {
    const grossRevenue = clients.reduce((sum, c) => sum + c.totalRevenue, 0);
    const totalInvoices = clients.reduce((sum, c) => sum + c.invoiceCount, 0);
    const gstCollected = isGSTRegistered ? grossRevenue / 11 : 0;
    const revenueExGST = grossRevenue - gstCollected;
    const netProfit = revenueExGST - totalExpenses - superContributions;
    const avgMonthlyRevenue = revenueExGST / 12;
    const avgInvoiceValue = totalInvoices > 0 ? grossRevenue / totalInvoices : 0;
    const profitMargin = revenueExGST > 0 ? (netProfit / revenueExGST) * 100 : 0;

    // Monthly analysis
    const monthlyRevenues = monthlyData.map((m) => m.revenue);
    const bestMonth = monthlyData.reduce((best, m) => (m.revenue > best.revenue ? m : best), monthlyData[0]);
    const worstMonth = monthlyData.reduce((worst, m) => {
      if (worst.revenue === 0 && m.revenue === 0) return worst;
      if (worst.revenue === 0) return worst;
      if (m.revenue === 0) return m;
      return m.revenue < worst.revenue ? m : worst;
    }, monthlyData[0]);
    const monthsWithRevenue = monthlyRevenues.filter((r) => r > 0).length;

    // Client concentration
    const sortedClients = [...clients].sort((a, b) => b.totalRevenue - a.totalRevenue);
    const topClientRevenue = sortedClients[0]?.totalRevenue || 0;
    const topClientPercentage = grossRevenue > 0 ? (topClientRevenue / grossRevenue) * 100 : 0;

    return {
      grossRevenue,
      totalInvoices,
      gstCollected,
      revenueExGST,
      netProfit,
      avgMonthlyRevenue,
      avgInvoiceValue,
      profitMargin,
      bestMonth,
      worstMonth,
      monthsWithRevenue,
      topClientPercentage,
      sortedClients,
    };
  }, [clients, monthlyData, isGSTRegistered, totalExpenses, superContributions]);

  const addClient = () => {
    setClients([
      ...clients,
      { id: String(Date.now()), clientName: '', invoiceCount: 0, totalRevenue: 0 },
    ]);
  };

  const removeClient = (id: string) => {
    if (clients.length <= 1) return;
    setClients(clients.filter((c) => c.id !== id));
  };

  const updateClient = (id: string, field: keyof ClientRevenue, value: string | number) => {
    setClients(clients.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const updateMonthlyRevenue = (index: number, value: number) => {
    const updated = [...monthlyData];
    updated[index] = { ...updated[index], revenue: value };
    setMonthlyData(updated);
  };

  // Generate report text
  const generatedText = useMemo(() => {
    const biz = businessName || '[Your Business Name]';
    const abnStr = abn ? `ABN: ${abn}` : '';
    const fy = FY_OPTIONS.find((o) => o.value === financialYear)?.label || financialYear;

    let text = '';
    text += `ANNUAL REVENUE REPORT\n`;
    text += `${'═'.repeat(55)}\n\n`;
    text += `Business:      ${biz}\n`;
    if (abnStr) text += `               ${abnStr}\n`;
    text += `Financial Year: ${fy}\n`;
    text += `GST Registered: ${isGSTRegistered ? 'Yes' : 'No'}\n`;
    text += `${'─'.repeat(55)}\n\n`;

    text += `REVENUE SUMMARY\n`;
    text += `${'─'.repeat(55)}\n`;
    text += `Gross Revenue:          ${formatCurrency(calculations.grossRevenue)}\n`;
    if (isGSTRegistered) {
      text += `GST Collected:          ${formatCurrency(calculations.gstCollected)}\n`;
      text += `Revenue (ex GST):       ${formatCurrency(calculations.revenueExGST)}\n`;
    }
    text += `Total Invoices Issued:  ${calculations.totalInvoices}\n`;
    text += `Avg Invoice Value:      ${formatCurrency(calculations.avgInvoiceValue)}\n`;
    text += `Avg Monthly Revenue:    ${formatCurrency(calculations.avgMonthlyRevenue)}\n`;
    text += `${'─'.repeat(55)}\n\n`;

    text += `EXPENSES & PROFIT\n`;
    text += `${'─'.repeat(55)}\n`;
    text += `Business Expenses:      ${formatCurrency(totalExpenses)}\n`;
    text += `Super Contributions:    ${formatCurrency(superContributions)}\n`;
    text += `Net Profit:             ${formatCurrency(calculations.netProfit)}\n`;
    text += `Profit Margin:          ${calculations.profitMargin.toFixed(1)}%\n`;
    text += `${'─'.repeat(55)}\n\n`;

    text += `REVENUE BY CLIENT\n`;
    text += `${'─'.repeat(55)}\n`;
    calculations.sortedClients.forEach((c, i) => {
      if (!c.clientName && c.totalRevenue === 0) return;
      const name = c.clientName || `Client ${i + 1}`;
      const pct = calculations.grossRevenue > 0
        ? ((c.totalRevenue / calculations.grossRevenue) * 100).toFixed(1)
        : '0.0';
      text += `${(i + 1).toString().padStart(2, ' ')}. ${name.padEnd(25)} ${formatCurrency(c.totalRevenue).padStart(12)}  (${pct}%)  ${c.invoiceCount} inv.\n`;
    });
    text += `${'─'.repeat(55)}\n\n`;

    text += `MONTHLY BREAKDOWN\n`;
    text += `${'─'.repeat(55)}\n`;
    monthlyData.forEach((m) => {
      const bar = m.revenue > 0 && calculations.grossRevenue > 0
        ? '█'.repeat(Math.max(1, Math.round((m.revenue / calculations.grossRevenue) * 20)))
        : '';
      text += `${m.month.padEnd(12)} ${formatCurrency(m.revenue).padStart(12)}  ${bar}\n`;
    });
    text += `${'─'.repeat(55)}\n\n`;

    text += `KEY INSIGHTS\n`;
    text += `${'─'.repeat(55)}\n`;
    text += `Best Month:             ${calculations.bestMonth.month} (${formatCurrency(calculations.bestMonth.revenue)})\n`;
    if (calculations.worstMonth.revenue > 0) {
      text += `Lowest Month:           ${calculations.worstMonth.month} (${formatCurrency(calculations.worstMonth.revenue)})\n`;
    }
    text += `Active Months:          ${calculations.monthsWithRevenue} of 12\n`;
    if (calculations.topClientPercentage > 0) {
      text += `Largest Client Share:   ${calculations.topClientPercentage.toFixed(1)}%\n`;
      if (calculations.topClientPercentage > 50) {
        text += `⚠ WARNING: Over 50% revenue from one client — high concentration risk\n`;
      }
    }
    text += `${'─'.repeat(55)}\n\n`;

    text += `Report generated by InvoiceFlow (invoiceflow.au)\n`;
    text += `This summary is for informational purposes. Consult your\n`;
    text += `accountant or tax agent for official tax return preparation.\n`;

    return text;
  }, [
    businessName, abn, financialYear, isGSTRegistered,
    calculations, monthlyData, totalExpenses, superContributions,
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
      {/* Business Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Business Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Business Name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Mitchell Web Design"
            />
          </div>
          <div>
            <label className={labelClass}>ABN</label>
            <input
              type="text"
              value={abn}
              onChange={(e) => setAbn(e.target.value)}
              className={inputClass}
              placeholder="e.g. 12 345 678 901"
            />
          </div>
          <div>
            <label className={labelClass}>Financial Year</label>
            <select
              value={financialYear}
              onChange={(e) => setFinancialYear(e.target.value)}
              className={inputClass}
            >
              {FY_OPTIONS.map((fy) => (
                <option key={fy.value} value={fy.value} className="bg-slate-800">
                  {fy.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* GST Toggle */}
        <div className="mt-6 flex items-center justify-between py-3 px-4 rounded-xl bg-white/5">
          <div>
            <span className="text-slate-300 text-sm">GST Registered?</span>
            <p className="text-xs text-slate-500 mt-0.5">
              GST will be separated from revenue for your BAS
            </p>
          </div>
          <button
            onClick={() => setIsGSTRegistered(!isGSTRegistered)}
            className={`relative w-14 h-7 rounded-full transition-all ${
              isGSTRegistered ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                isGSTRegistered ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Revenue by Client */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Revenue by Client</h3>
        <div className="space-y-4">
          {clients.map((client, index) => (
            <div key={client.id} className="bg-white/5 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-400">Client {index + 1}</span>
                {clients.length > 1 && (
                  <button
                    onClick={() => removeClient(client.id)}
                    className="text-xs text-rose-400 hover:text-rose-300 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className={labelClass}>Client Name</label>
                  <input
                    type="text"
                    value={client.clientName}
                    onChange={(e) => updateClient(client.id, 'clientName', e.target.value)}
                    className={inputClass}
                    placeholder="e.g. Acme Corp"
                  />
                </div>
                <div>
                  <label className={labelClass}>Invoices Issued</label>
                  <input
                    type="number"
                    value={client.invoiceCount || ''}
                    onChange={(e) =>
                      updateClient(client.id, 'invoiceCount', Math.max(0, parseInt(e.target.value) || 0))
                    }
                    className={inputClass}
                    min="0"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className={labelClass}>Total Revenue (AUD)</label>
                  <input
                    type="number"
                    value={client.totalRevenue || ''}
                    onChange={(e) =>
                      updateClient(client.id, 'totalRevenue', Math.max(0, parseFloat(e.target.value) || 0))
                    }
                    className={inputClass}
                    min="0"
                    step="100"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addClient}
            className="w-full py-3 border border-dashed border-white/20 rounded-xl text-sm text-slate-400 hover:text-white hover:border-teal-500/30 transition-all"
          >
            + Add Another Client
          </button>
        </div>

        {/* Client Totals */}
        <div className="mt-6 bg-white/5 rounded-xl p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Total Clients</span>
            <span className="text-white font-mono">{clients.filter((c) => c.clientName).length}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Total Invoices</span>
            <span className="text-white font-mono">{calculations.totalInvoices}</span>
          </div>
          <div className="flex justify-between text-sm border-t border-white/10 pt-2">
            <span className="text-white font-semibold">Gross Revenue</span>
            <span className="text-teal-400 font-mono font-bold text-lg">
              {formatCurrency(calculations.grossRevenue)}
            </span>
          </div>
        </div>
      </div>

      {/* Monthly Breakdown */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-2">Monthly Revenue</h3>
        <p className="text-sm text-slate-500 mb-6">
          Enter revenue received each month (Australian financial year: July to June)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {monthlyData.map((m, index) => (
            <div key={m.month}>
              <label className="block text-xs font-medium text-slate-400 mb-1">{m.month}</label>
              <input
                type="number"
                value={m.revenue || ''}
                onChange={(e) => updateMonthlyRevenue(index, Math.max(0, parseFloat(e.target.value) || 0))}
                className={inputClass}
                min="0"
                step="100"
                placeholder="0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Expenses */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Expenses Summary</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Total Business Expenses (AUD)</label>
            <input
              type="number"
              value={totalExpenses || ''}
              onChange={(e) => setTotalExpenses(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="100"
              placeholder="e.g. 15000"
            />
            <p className="text-xs text-slate-500 mt-1">
              Include rent, software, equipment, insurance, travel, etc.
            </p>
          </div>
          <div>
            <label className={labelClass}>Super Contributions (AUD)</label>
            <input
              type="number"
              value={superContributions || ''}
              onChange={(e) => setSuperContributions(Math.max(0, parseFloat(e.target.value) || 0))}
              className={inputClass}
              min="0"
              step="100"
              placeholder="e.g. 5000"
            />
            <p className="text-xs text-slate-500 mt-1">
              Voluntary super contributions made during the year
            </p>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-400 hover:to-blue-400 transition-all text-lg"
        >
          Generate Revenue Report
        </button>
      </div>

      {/* Generated Output */}
      {generated && (
        <>
          {/* Visual Dashboard */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Revenue Dashboard</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-teal-400 font-mono">
                  {formatCurrency(calculations.revenueExGST)}
                </p>
                <p className="text-xs text-slate-500 mt-1">Revenue (ex GST)</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-emerald-400 font-mono">
                  {formatCurrency(calculations.netProfit)}
                </p>
                <p className="text-xs text-slate-500 mt-1">Net Profit</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-blue-400 font-mono">
                  {calculations.profitMargin.toFixed(1)}%
                </p>
                <p className="text-xs text-slate-500 mt-1">Profit Margin</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-amber-400 font-mono">
                  {calculations.totalInvoices}
                </p>
                <p className="text-xs text-slate-500 mt-1">Invoices Issued</p>
              </div>
            </div>

            {isGSTRegistered && (
              <div className="mt-4 bg-white/5 rounded-xl p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">GST Collected (for BAS)</span>
                  <span className="text-amber-400 font-mono font-semibold">
                    {formatCurrency(calculations.gstCollected)}
                  </span>
                </div>
              </div>
            )}

            {calculations.topClientPercentage > 50 && (
              <div className="mt-4 bg-rose-500/5 border border-rose-500/20 rounded-xl p-4">
                <p className="text-sm text-rose-400 font-medium">
                  High Client Concentration Risk — {calculations.topClientPercentage.toFixed(1)}% of
                  revenue from your largest client. Aim for no single client above 30%.
                </p>
              </div>
            )}
          </div>

          {/* Text Report */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">Full Report</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 font-medium">
                {FY_OPTIONS.find((o) => o.value === financialYear)?.value}
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

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/profit-loss-statement"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  P&L Statement
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Detailed profit and loss breakdown
                </p>
              </a>
              <a
                href="/tools/tax-estimator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Tax Estimator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Estimate income tax on your revenue
                </p>
              </a>
              <a
                href="/tools/eofy-checklist"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  EOFY Checklist
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Prepare for end of financial year
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This report is for informational purposes only and does not constitute financial or
              tax advice. Always consult a registered tax agent or accountant for official tax
              return preparation. Revenue figures should be reconciled with your accounting records.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
