'use client';

import { useState, useMemo, useCallback } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type InvoiceStatus = 'unpaid' | 'partial' | 'paid';

interface Invoice {
  id: string;
  clientName: string;
  invoiceNumber: string;
  amount: number;
  amountPaid: number;
  issueDate: string;
  dueDate: string;
  status: InvoiceStatus;
}

interface AgingBucket {
  label: string;
  min: number;
  max: number;
  color: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  barClass: string;
  invoices: Invoice[];
  total: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCurrencyExact(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 10);
}

function daysBetween(a: Date, b: Date): number {
  const msPerDay = 86_400_000;
  return Math.floor((b.getTime() - a.getTime()) / msPerDay);
}

function todayString(): string {
  return new Date().toISOString().split('T')[0];
}

function daysOverdue(dueDate: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate + 'T00:00:00');
  const diff = daysBetween(due, today);
  return diff; // negative means not yet due
}

function outstandingAmount(inv: Invoice): number {
  if (inv.status === 'paid') return 0;
  if (inv.status === 'partial') return Math.max(0, inv.amount - inv.amountPaid);
  return inv.amount;
}

// ---------------------------------------------------------------------------
// Sample Data
// ---------------------------------------------------------------------------

function generateSampleData(): Invoice[] {
  const today = new Date();
  const d = (offset: number): string => {
    const date = new Date(today);
    date.setDate(date.getDate() + offset);
    return date.toISOString().split('T')[0];
  };

  return [
    {
      id: generateId(),
      clientName: 'Greenfield Design Co',
      invoiceNumber: 'INV-2024-001',
      amount: 4500,
      amountPaid: 0,
      issueDate: d(-45),
      dueDate: d(5),
      status: 'unpaid',
    },
    {
      id: generateId(),
      clientName: 'Murray & Associates',
      invoiceNumber: 'INV-2024-002',
      amount: 8200,
      amountPaid: 0,
      issueDate: d(-60),
      dueDate: d(-15),
      status: 'unpaid',
    },
    {
      id: generateId(),
      clientName: 'Coastal Digital Agency',
      invoiceNumber: 'INV-2024-003',
      amount: 3200,
      amountPaid: 1600,
      issueDate: d(-90),
      dueDate: d(-45),
      status: 'partial',
    },
    {
      id: generateId(),
      clientName: 'Nexus Startup Labs',
      invoiceNumber: 'INV-2024-004',
      amount: 12000,
      amountPaid: 0,
      issueDate: d(-120),
      dueDate: d(-75),
      status: 'unpaid',
    },
    {
      id: generateId(),
      clientName: 'Harbour View Properties',
      invoiceNumber: 'INV-2024-005',
      amount: 6500,
      amountPaid: 0,
      issueDate: d(-150),
      dueDate: d(-105),
      status: 'unpaid',
    },
    {
      id: generateId(),
      clientName: 'Bright Spark Creative',
      invoiceNumber: 'INV-2024-006',
      amount: 2800,
      amountPaid: 2800,
      issueDate: d(-30),
      dueDate: d(-5),
      status: 'paid',
    },
    {
      id: generateId(),
      clientName: 'TechNode Solutions',
      invoiceNumber: 'INV-2024-007',
      amount: 5400,
      amountPaid: 0,
      issueDate: d(-35),
      dueDate: d(-5),
      status: 'unpaid',
    },
    {
      id: generateId(),
      clientName: 'Melbournian Media',
      invoiceNumber: 'INV-2024-008',
      amount: 1800,
      amountPaid: 0,
      issueDate: d(-20),
      dueDate: d(10),
      status: 'unpaid',
    },
  ];
}

// ---------------------------------------------------------------------------
// Bucket Definitions
// ---------------------------------------------------------------------------

const BUCKET_DEFS = [
  {
    label: 'Current',
    min: -Infinity,
    max: 0,
    textClass: 'text-emerald-400',
    bgClass: 'bg-emerald-500/10',
    borderClass: 'border-emerald-500/20',
    barClass: 'bg-emerald-500',
    color: '#10b981',
  },
  {
    label: '1-30 days',
    min: 1,
    max: 30,
    textClass: 'text-amber-400',
    bgClass: 'bg-amber-500/10',
    borderClass: 'border-amber-500/20',
    barClass: 'bg-amber-500',
    color: '#f59e0b',
  },
  {
    label: '31-60 days',
    min: 31,
    max: 60,
    textClass: 'text-orange-400',
    bgClass: 'bg-orange-500/10',
    borderClass: 'border-orange-500/20',
    barClass: 'bg-orange-500',
    color: '#f97316',
  },
  {
    label: '61-90 days',
    min: 61,
    max: 90,
    textClass: 'text-red-400',
    bgClass: 'bg-red-500/10',
    borderClass: 'border-red-500/20',
    barClass: 'bg-red-500',
    color: '#ef4444',
  },
  {
    label: '90+ days',
    min: 91,
    max: Infinity,
    textClass: 'text-rose-500',
    bgClass: 'bg-rose-500/10',
    borderClass: 'border-rose-500/20',
    barClass: 'bg-rose-600',
    color: '#e11d48',
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function InvoiceAgingReport() {
  // ------ State ------
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form fields
  const [clientName, setClientName] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [amountPaid, setAmountPaid] = useState('0');
  const [issueDate, setIssueDate] = useState(todayString());
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState<InvoiceStatus>('unpaid');

  const [copied, setCopied] = useState(false);

  // ------ Derived data ------

  const unpaidInvoices = useMemo(
    () => invoices.filter((inv) => inv.status !== 'paid'),
    [invoices],
  );

  const buckets = useMemo<AgingBucket[]>(() => {
    return BUCKET_DEFS.map((def) => {
      const matched = unpaidInvoices.filter((inv) => {
        const days = daysOverdue(inv.dueDate);
        return days >= def.min && days <= def.max;
      });
      const total = matched.reduce((sum, inv) => sum + outstandingAmount(inv), 0);
      return { ...def, invoices: matched, total };
    });
  }, [unpaidInvoices]);

  const totalOutstanding = useMemo(
    () => unpaidInvoices.reduce((sum, inv) => sum + outstandingAmount(inv), 0),
    [unpaidInvoices],
  );

  const totalOverdue = useMemo(
    () =>
      unpaidInvoices
        .filter((inv) => daysOverdue(inv.dueDate) > 0)
        .reduce((sum, inv) => sum + outstandingAmount(inv), 0),
    [unpaidInvoices],
  );

  const avgDaysOverdue = useMemo(() => {
    const overdueInvs = unpaidInvoices.filter((inv) => daysOverdue(inv.dueDate) > 0);
    if (overdueInvs.length === 0) return 0;
    const totalDays = overdueInvs.reduce((sum, inv) => sum + daysOverdue(inv.dueDate), 0);
    return Math.round(totalDays / overdueInvs.length);
  }, [unpaidInvoices]);

  const sortedByOverdue = useMemo(
    () =>
      [...unpaidInvoices].sort(
        (a, b) => daysOverdue(b.dueDate) - daysOverdue(a.dueDate),
      ),
    [unpaidInvoices],
  );

  const priorityRecommendations = useMemo(() => {
    const recs: { invoice: Invoice; priority: string; reason: string; urgencyClass: string }[] = [];

    sortedByOverdue.forEach((inv) => {
      const days = daysOverdue(inv.dueDate);
      const outstanding = outstandingAmount(inv);
      if (days <= 0) return; // Not overdue

      if (days > 90) {
        recs.push({
          invoice: inv,
          priority: 'CRITICAL',
          reason: `${days} days overdue (${formatCurrency(outstanding)}). Send formal demand letter. Consider debt collection agency.`,
          urgencyClass: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
        });
      } else if (days > 60) {
        recs.push({
          invoice: inv,
          priority: 'HIGH',
          reason: `${days} days overdue (${formatCurrency(outstanding)}). Escalate — phone call and written notice. Pause new work for this client.`,
          urgencyClass: 'text-red-400 bg-red-500/10 border-red-500/20',
        });
      } else if (days > 30) {
        recs.push({
          invoice: inv,
          priority: 'MEDIUM',
          reason: `${days} days overdue (${formatCurrency(outstanding)}). Send a firm follow-up email. Request a specific payment date.`,
          urgencyClass: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
        });
      } else {
        recs.push({
          invoice: inv,
          priority: 'LOW',
          reason: `${days} days overdue (${formatCurrency(outstanding)}). Send a friendly payment reminder.`,
          urgencyClass: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
        });
      }
    });

    return recs;
  }, [sortedByOverdue]);

  // ------ Handlers ------

  const resetForm = useCallback(() => {
    setClientName('');
    setInvoiceNumber('');
    setAmount('');
    setAmountPaid('0');
    setIssueDate(todayString());
    setDueDate('');
    setStatus('unpaid');
    setEditingId(null);
  }, []);

  const handleAddInvoice = useCallback(() => {
    if (!clientName.trim() || !amount || !dueDate) return;

    const parsedAmount = parseFloat(amount) || 0;
    const parsedPaid = parseFloat(amountPaid) || 0;

    if (editingId) {
      setInvoices((prev) =>
        prev.map((inv) =>
          inv.id === editingId
            ? {
                ...inv,
                clientName: clientName.trim(),
                invoiceNumber: invoiceNumber.trim(),
                amount: parsedAmount,
                amountPaid: parsedPaid,
                issueDate,
                dueDate,
                status,
              }
            : inv,
        ),
      );
    } else {
      const newInvoice: Invoice = {
        id: generateId(),
        clientName: clientName.trim(),
        invoiceNumber: invoiceNumber.trim() || `INV-${Date.now().toString().slice(-6)}`,
        amount: parsedAmount,
        amountPaid: parsedPaid,
        issueDate,
        dueDate,
        status,
      };
      setInvoices((prev) => [...prev, newInvoice]);
    }

    resetForm();
    setShowForm(false);
  }, [clientName, invoiceNumber, amount, amountPaid, issueDate, dueDate, status, editingId, resetForm]);

  const handleEdit = useCallback((inv: Invoice) => {
    setClientName(inv.clientName);
    setInvoiceNumber(inv.invoiceNumber);
    setAmount(String(inv.amount));
    setAmountPaid(String(inv.amountPaid));
    setIssueDate(inv.issueDate);
    setDueDate(inv.dueDate);
    setStatus(inv.status);
    setEditingId(inv.id);
    setShowForm(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setInvoices((prev) => prev.filter((inv) => inv.id !== id));
  }, []);

  const handleLoadSampleData = useCallback(() => {
    setInvoices(generateSampleData());
  }, []);

  const handleClearAll = useCallback(() => {
    setInvoices([]);
    resetForm();
    setShowForm(false);
  }, [resetForm]);

  const handleCopy = useCallback(() => {
    const lines: string[] = [
      'Invoice Aging Report',
      `Generated: ${new Date().toLocaleDateString('en-AU', { dateStyle: 'long' })}`,
      '='.repeat(50),
      '',
      'SUMMARY',
      `Total Outstanding: ${formatCurrencyExact(totalOutstanding)}`,
      `Total Overdue: ${formatCurrencyExact(totalOverdue)}`,
      `Average Days Overdue: ${avgDaysOverdue} days`,
      `Unpaid Invoices: ${unpaidInvoices.length}`,
      '',
      'AGING BREAKDOWN',
    ];

    buckets.forEach((bucket) => {
      if (bucket.invoices.length > 0) {
        const pct = totalOutstanding > 0 ? ((bucket.total / totalOutstanding) * 100).toFixed(1) : '0.0';
        lines.push(`  ${bucket.label}: ${formatCurrencyExact(bucket.total)} (${pct}%) - ${bucket.invoices.length} invoice(s)`);
      }
    });

    if (priorityRecommendations.length > 0) {
      lines.push('', 'PAYMENT PRIORITY');
      priorityRecommendations.forEach((rec) => {
        lines.push(`  [${rec.priority}] ${rec.invoice.clientName} (${rec.invoice.invoiceNumber}) - ${rec.reason}`);
      });
    }

    lines.push('', 'INVOICE DETAILS');
    sortedByOverdue.forEach((inv) => {
      const days = daysOverdue(inv.dueDate);
      const outstanding = outstandingAmount(inv);
      const overdueLabel = days > 0 ? `${days} days overdue` : `Due in ${Math.abs(days)} days`;
      lines.push(
        `  ${inv.invoiceNumber} | ${inv.clientName} | ${formatCurrencyExact(outstanding)} | ${overdueLabel}`,
      );
    });

    lines.push('', 'Generated by InvoiceFlow — invoiceflow.au');

    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [totalOutstanding, totalOverdue, avgDaysOverdue, unpaidInvoices, buckets, priorityRecommendations, sortedByOverdue]);

  // ------ Render Helpers ------

  const statusBadge = (s: InvoiceStatus) => {
    switch (s) {
      case 'paid':
        return (
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Paid
          </span>
        );
      case 'partial':
        return (
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Partial
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
            Unpaid
          </span>
        );
    }
  };

  const overdueBadge = (inv: Invoice) => {
    const days = daysOverdue(inv.dueDate);
    if (inv.status === 'paid') {
      return <span className="text-xs text-slate-500">Settled</span>;
    }
    if (days <= 0) {
      return <span className="text-xs text-emerald-400">Due in {Math.abs(days)} days</span>;
    }
    const bucket = BUCKET_DEFS.find((b) => days >= b.min && days <= b.max);
    return (
      <span className={`text-xs font-medium ${bucket?.textClass || 'text-rose-400'}`}>
        {days} days overdue
      </span>
    );
  };

  // ------ Render ------

  return (
    <div className="space-y-8">
      {/* Top Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => {
            resetForm();
            setShowForm(!showForm);
          }}
          className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-400 hover:to-blue-400 transition-all"
        >
          {showForm ? 'Cancel' : '+ Add Invoice'}
        </button>
        <button
          onClick={handleLoadSampleData}
          className="px-4 py-2.5 rounded-lg text-xs font-medium bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-transparent hover:border-teal-500/20 transition-all"
        >
          Load Sample Data
        </button>
        {invoices.length > 0 && (
          <button
            onClick={handleClearAll}
            className="px-4 py-2.5 rounded-lg text-xs font-medium bg-white/5 text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 border border-transparent hover:border-rose-500/20 transition-all"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Add / Edit Invoice Form */}
      {showForm && (
        <div className="glass rounded-2xl p-6 border border-teal-500/20">
          <h3 className="text-lg font-bold text-white heading-font mb-4">
            {editingId ? 'Edit Invoice' : 'Add Invoice'}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Client Name *</label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                placeholder="e.g. Greenfield Design Co"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Invoice Number</label>
              <input
                type="text"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                placeholder="e.g. INV-2024-001"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Total Amount (AUD) *</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white placeholder-slate-500 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                  placeholder="5000"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Amount Paid (AUD)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <input
                  type="number"
                  value={amountPaid}
                  onChange={(e) => setAmountPaid(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white placeholder-slate-500 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
                  placeholder="0"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Issue Date</label>
              <input
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Due Date *</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 outline-none transition-colors"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-300 mb-1.5">Status</label>
              <div className="flex gap-2">
                {(['unpaid', 'partial', 'paid'] as InvoiceStatus[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatus(s)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      status === s
                        ? s === 'paid'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : s === 'partial'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleAddInvoice}
              disabled={!clientName.trim() || !amount || !dueDate}
              className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-400 hover:to-blue-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {editingId ? 'Update Invoice' : 'Add Invoice'}
            </button>
            <button
              onClick={() => {
                resetForm();
                setShowForm(false);
              }}
              className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Empty State */}
      {invoices.length === 0 && !showForm && (
        <div className="glass rounded-2xl p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-teal-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white heading-font mb-2">
            No invoices added yet
          </h3>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Add your outstanding invoices to generate an aging report, or load sample data to see how
            the tool works.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
              className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-400 hover:to-blue-400 transition-all"
            >
              + Add Invoice
            </button>
            <button
              onClick={handleLoadSampleData}
              className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10 transition-all"
            >
              Load Sample Data
            </button>
          </div>
        </div>
      )}

      {/* Results — only shown when invoices exist */}
      {invoices.length > 0 && (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Outstanding</p>
              <p className="text-xl sm:text-2xl font-bold text-white">{formatCurrency(totalOutstanding)}</p>
              <p className="text-xs text-slate-500">{unpaidInvoices.length} unpaid</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Overdue</p>
              <p className={`text-xl sm:text-2xl font-bold ${totalOverdue > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {formatCurrency(totalOverdue)}
              </p>
              <p className="text-xs text-slate-500">
                {totalOutstanding > 0 ? ((totalOverdue / totalOutstanding) * 100).toFixed(0) : 0}% of outstanding
              </p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Avg Days Overdue</p>
              <p className={`text-xl sm:text-2xl font-bold ${
                avgDaysOverdue > 60 ? 'text-rose-400' : avgDaysOverdue > 30 ? 'text-amber-400' : 'text-teal-400'
              }`}>
                {avgDaysOverdue}
              </p>
              <p className="text-xs text-slate-500">days</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-slate-400 mb-1">Total Invoices</p>
              <p className="text-xl sm:text-2xl font-bold text-white">{invoices.length}</p>
              <p className="text-xs text-slate-500">
                {invoices.filter((i) => i.status === 'paid').length} paid
              </p>
            </div>
          </div>

          {/* Aging Bucket Breakdown */}
          <div className="glass rounded-2xl p-6 sm:p-8 border border-teal-500/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white heading-font">
                Aging Breakdown
              </h3>
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-colors border border-white/10"
              >
                {copied ? 'Copied!' : 'Copy Report'}
              </button>
            </div>

            {/* Visual Bar Chart */}
            <div className="space-y-4 mb-8">
              {buckets.map((bucket) => {
                const pct = totalOutstanding > 0 ? (bucket.total / totalOutstanding) * 100 : 0;
                return (
                  <div key={bucket.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${bucket.textClass}`}>
                          {bucket.label}
                        </span>
                        <span className="text-xs text-slate-500">
                          ({bucket.invoices.length} invoice{bucket.invoices.length !== 1 ? 's' : ''})
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-white">
                          {formatCurrency(bucket.total)}
                        </span>
                        <span className="text-xs text-slate-500 w-12 text-right">
                          {pct.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${bucket.barClass}`}
                        style={{ width: `${Math.max(pct > 0 ? 2 : 0, pct)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bucket Summary Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 text-slate-400 font-medium">Aging Bucket</th>
                    <th className="text-right py-2 text-slate-400 font-medium">Amount</th>
                    <th className="text-right py-2 text-slate-400 font-medium">% of Total</th>
                    <th className="text-right py-2 text-slate-400 font-medium">Count</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {buckets.map((bucket) => {
                    const pct = totalOutstanding > 0 ? (bucket.total / totalOutstanding) * 100 : 0;
                    return (
                      <tr key={bucket.label}>
                        <td className={`py-2.5 font-medium ${bucket.textClass}`}>{bucket.label}</td>
                        <td className="py-2.5 text-right text-white">{formatCurrency(bucket.total)}</td>
                        <td className="py-2.5 text-right text-slate-300">{pct.toFixed(1)}%</td>
                        <td className="py-2.5 text-right text-slate-300">{bucket.invoices.length}</td>
                      </tr>
                    );
                  })}
                  <tr className="border-t border-teal-500/20">
                    <td className="py-2.5 font-bold text-white">Total Outstanding</td>
                    <td className="py-2.5 text-right font-bold text-white">
                      {formatCurrency(totalOutstanding)}
                    </td>
                    <td className="py-2.5 text-right font-bold text-white">100%</td>
                    <td className="py-2.5 text-right font-bold text-white">{unpaidInvoices.length}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Priority Recommendations */}
          {priorityRecommendations.length > 0 && (
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white heading-font mb-2">
                Payment Priority
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Which invoices to chase first, ranked by urgency.
              </p>
              <div className="space-y-3">
                {priorityRecommendations.map((rec) => (
                  <div
                    key={rec.invoice.id}
                    className={`rounded-xl p-4 border ${rec.urgencyClass}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/10">
                          {rec.priority}
                        </span>
                        <span className="font-medium text-white text-sm">
                          {rec.invoice.clientName}
                        </span>
                        <span className="text-xs text-slate-500">{rec.invoice.invoiceNumber}</span>
                      </div>
                      <span className="text-sm font-bold text-white">
                        {formatCurrency(outstandingAmount(rec.invoice))}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">{rec.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Invoice List */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white heading-font mb-6">
              All Invoices
            </h3>

            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 text-slate-400 font-medium">Client</th>
                    <th className="text-left py-2 text-slate-400 font-medium">Invoice #</th>
                    <th className="text-right py-2 text-slate-400 font-medium">Amount</th>
                    <th className="text-right py-2 text-slate-400 font-medium">Outstanding</th>
                    <th className="text-left py-2 text-slate-400 font-medium">Due Date</th>
                    <th className="text-left py-2 text-slate-400 font-medium">Status</th>
                    <th className="text-left py-2 text-slate-400 font-medium">Aging</th>
                    <th className="text-right py-2 text-slate-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[...invoices]
                    .sort((a, b) => {
                      // Paid invoices last, then sort by days overdue descending
                      if (a.status === 'paid' && b.status !== 'paid') return 1;
                      if (a.status !== 'paid' && b.status === 'paid') return -1;
                      return daysOverdue(b.dueDate) - daysOverdue(a.dueDate);
                    })
                    .map((inv) => (
                      <tr key={inv.id} className={inv.status === 'paid' ? 'opacity-50' : ''}>
                        <td className="py-2.5 text-white font-medium">{inv.clientName}</td>
                        <td className="py-2.5 text-slate-300">{inv.invoiceNumber}</td>
                        <td className="py-2.5 text-right text-slate-300">
                          {formatCurrency(inv.amount)}
                        </td>
                        <td className="py-2.5 text-right text-white font-medium">
                          {formatCurrency(outstandingAmount(inv))}
                        </td>
                        <td className="py-2.5 text-slate-300">
                          {new Date(inv.dueDate + 'T00:00:00').toLocaleDateString('en-AU', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </td>
                        <td className="py-2.5">{statusBadge(inv.status)}</td>
                        <td className="py-2.5">{overdueBadge(inv)}</td>
                        <td className="py-2.5 text-right">
                          <div className="flex justify-end gap-1">
                            <button
                              onClick={() => handleEdit(inv)}
                              className="px-2 py-1 text-xs text-slate-400 hover:text-teal-400 transition-colors"
                              title="Edit"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(inv.id)}
                              className="px-2 py-1 text-xs text-slate-400 hover:text-rose-400 transition-colors"
                              title="Delete"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="sm:hidden space-y-3">
              {[...invoices]
                .sort((a, b) => {
                  if (a.status === 'paid' && b.status !== 'paid') return 1;
                  if (a.status !== 'paid' && b.status === 'paid') return -1;
                  return daysOverdue(b.dueDate) - daysOverdue(a.dueDate);
                })
                .map((inv) => (
                  <div
                    key={inv.id}
                    className={`bg-white/5 rounded-xl p-4 ${inv.status === 'paid' ? 'opacity-50' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-white font-medium text-sm">{inv.clientName}</p>
                        <p className="text-xs text-slate-500">{inv.invoiceNumber}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold text-sm">
                          {formatCurrency(outstandingAmount(inv))}
                        </p>
                        {inv.status === 'partial' && (
                          <p className="text-xs text-slate-500">
                            of {formatCurrency(inv.amount)}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {statusBadge(inv.status)}
                        {overdueBadge(inv)}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(inv)}
                          className="text-xs text-slate-400 hover:text-teal-400 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(inv.id)}
                          className="text-xs text-slate-400 hover:text-rose-400 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
