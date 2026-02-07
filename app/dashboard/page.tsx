'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, AreaChart, Area, CartesianGrid } from 'recharts';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import { formatCurrency } from '@/lib/utils';

type Client = {
  id: string;
  name: string;
  email: string | null;
  company: string | null;
};

type Invoice = {
  id: string;
  client_id: string;
  invoice_number: string;
  issue_date: string;
  due_date: string;
  amount_cents: number;
  currency: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  paid_at: string | null;
  clients?: { name: string; email: string | null };
};

type Payment = {
  id: string;
  invoice_id: string;
  amount_cents: number;
  status: 'succeeded' | 'failed' | 'refunded';
  created_at: string;
};

const statusColors: Record<Invoice['status'], string> = {
  draft: '#94a3b8',
  sent: '#38bdf8',
  paid: '#34d399',
  overdue: '#fb7185',
};

export default function DashboardPage() {
  const { user, loading: authLoading, signOut } = useAuth();
  const router = useRouter();

  const [clients, setClients] = useState<Client[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [clientForm, setClientForm] = useState({
    name: '',
    email: '',
    company: '',
  });

  const [invoiceForm, setInvoiceForm] = useState({
    client_id: '',
    invoice_number: `INV-${new Date().getTime().toString().slice(-6)}`,
    issue_date: new Date().toISOString().split('T')[0],
    due_date: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
    amount: '0',
    notes: '',
  });

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace('/login');
    }
  }, [authLoading, router, user]);

  useEffect(() => {
    if (user) {
      void loadData();
    }
  }, [user]);

  const loadData = async () => {
    setError(null);
    const [clientsRes, invoicesRes, paymentsRes] = await Promise.all([
      supabase.from('clients').select('id,name,email,company').order('created_at', { ascending: false }),
      supabase
        .from('invoices')
        .select('id,client_id,invoice_number,issue_date,due_date,amount_cents,currency,status,paid_at,clients(name,email)')
        .order('issue_date', { ascending: false }),
      supabase
        .from('invoice_payments')
        .select('id,invoice_id,amount_cents,status,created_at')
        .order('created_at', { ascending: false }),
    ]);

    if (clientsRes.error || invoicesRes.error || paymentsRes.error) {
      setError(clientsRes.error?.message || invoicesRes.error?.message || paymentsRes.error?.message || 'Failed to load dashboard');
      return;
    }

    setClients((clientsRes.data as Client[]) ?? []);
    setInvoices((invoicesRes.data as Invoice[]) ?? []);
    setPayments((paymentsRes.data as Payment[]) ?? []);
  };

  const onCreateClient = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user || !clientForm.name.trim()) return;

    setBusy(true);
    setError(null);

    const { error: insertError } = await supabase.from('clients').insert({
      user_id: user.id,
      name: clientForm.name.trim(),
      email: clientForm.email.trim() || null,
      company: clientForm.company.trim() || null,
    });

    setBusy(false);

    if (insertError) {
      setError(insertError.message);
      return;
    }

    setClientForm({ name: '', email: '', company: '' });
    await loadData();
  };

  const onCreateInvoice = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user || !invoiceForm.client_id) return;

    const amountFloat = Number(invoiceForm.amount);
    if (Number.isNaN(amountFloat) || amountFloat <= 0) {
      setError('Invoice amount must be greater than 0.');
      return;
    }

    setBusy(true);
    setError(null);

    const { error: insertError } = await supabase.from('invoices').insert({
      user_id: user.id,
      client_id: invoiceForm.client_id,
      invoice_number: invoiceForm.invoice_number.trim(),
      issue_date: invoiceForm.issue_date,
      due_date: invoiceForm.due_date,
      amount_cents: Math.round(amountFloat * 100),
      currency: 'usd',
      status: 'draft',
      notes: invoiceForm.notes.trim() || null,
    });

    setBusy(false);

    if (insertError) {
      setError(insertError.message);
      return;
    }

    setInvoiceForm({
      client_id: clients[0]?.id ?? '',
      invoice_number: `INV-${new Date().getTime().toString().slice(-6)}`,
      issue_date: new Date().toISOString().split('T')[0],
      due_date: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      amount: '0',
      notes: '',
    });
    await loadData();
  };

  const updateInvoiceStatus = async (invoiceId: string, status: Invoice['status']) => {
    const patch: { status: Invoice['status']; paid_at?: string | null } = { status };
    if (status === 'paid') {
      patch.paid_at = new Date().toISOString();
    }

    const { error: updateError } = await supabase.from('invoices').update(patch).eq('id', invoiceId);
    if (updateError) {
      setError(updateError.message);
      return;
    }

    await loadData();
  };

  const removeInvoice = async (invoiceId: string) => {
    const { error: deleteError } = await supabase.from('invoices').delete().eq('id', invoiceId);
    if (deleteError) {
      setError(deleteError.message);
      return;
    }
    await loadData();
  };

  const sendInvoiceEmail = async (invoiceId: string) => {
    setBusy(true);
    setError(null);

    const response = await fetch(`/api/invoices/${invoiceId}/email`, { method: 'POST' });
    setBusy(false);

    if (!response.ok) {
      const body = (await response.json()) as { error?: string };
      setError(body.error ?? 'Email send failed');
      return;
    }

    await loadData();
  };

  const startStripeCheckout = async (invoiceId: string) => {
    setBusy(true);
    setError(null);

    const response = await fetch(`/api/invoices/${invoiceId}/checkout`, { method: 'POST' });
    const body = (await response.json()) as { url?: string; error?: string };

    if (!response.ok || !body.url) {
      setBusy(false);
      setError(body.error ?? 'Checkout session failed');
      return;
    }

    window.location.href = body.url;
  };

  const monthlyRevenueData = useMemo(() => {
    const totals = new Map<string, number>();
    invoices.filter((invoice) => invoice.status === 'paid').forEach((invoice) => {
      const month = new Date(invoice.issue_date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
      totals.set(month, (totals.get(month) ?? 0) + invoice.amount_cents);
    });

    return Array.from(totals.entries()).map(([month, amount]) => ({ month, amount: amount / 100 }));
  }, [invoices]);

  const statusBreakdown = useMemo(() => {
    const counts: Record<Invoice['status'], number> = {
      draft: 0,
      sent: 0,
      paid: 0,
      overdue: 0,
    };

    invoices.forEach((invoice) => {
      counts[invoice.status] += 1;
    });

    return (Object.keys(counts) as Invoice['status'][]).map((status) => ({
      name: status,
      value: counts[status],
      color: statusColors[status],
    }));
  }, [invoices]);

  const totals = useMemo(() => {
    const totalIssued = invoices.reduce((sum, item) => sum + item.amount_cents, 0);
    const totalPaid = invoices.filter((item) => item.status === 'paid').reduce((sum, item) => sum + item.amount_cents, 0);
    const pending = totalIssued - totalPaid;

    return { totalIssued, totalPaid, pending };
  }, [invoices]);

  if (authLoading || !user) {
    return <div className="min-h-screen page-bg flex items-center justify-center text-slate-200">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen page-bg px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="heading-font text-4xl font-black">InvoiceFlow Dashboard</h1>
            <p className="text-sm text-slate-300">{user.email}</p>
          </div>
          <button
            onClick={async () => {
              await signOut();
              router.replace('/');
            }}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
          >
            Sign out
          </button>
        </header>

        {error && (
          <div className="rounded-lg border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">{error}</div>
        )}

        <section className="grid gap-4 md:grid-cols-3">
          <Metric title="Issued" value={formatCurrency(totals.totalIssued)} />
          <Metric title="Paid" value={formatCurrency(totals.totalPaid)} />
          <Metric title="Outstanding" value={formatCurrency(totals.pending)} />
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <h2 className="mb-4 text-lg font-semibold">Revenue Trend</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
                  <Area type="monotone" dataKey="amount" stroke="#14b8a6" fill="#14b8a633" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <h2 className="mb-4 text-lg font-semibold">Invoice Status</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={statusBreakdown} dataKey="value" nameKey="name" outerRadius={90} label>
                    {statusBreakdown.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <form onSubmit={onCreateClient} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <h2 className="mb-4 text-lg font-semibold">Add Client</h2>
            <div className="space-y-3">
              <input
                required
                value={clientForm.name}
                onChange={(e) => setClientForm((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Client name"
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm"
              />
              <input
                value={clientForm.email}
                onChange={(e) => setClientForm((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="Client email"
                type="email"
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm"
              />
              <input
                value={clientForm.company}
                onChange={(e) => setClientForm((prev) => ({ ...prev, company: e.target.value }))}
                placeholder="Company"
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm"
              />
              <button
                disabled={busy}
                className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-teal-400 disabled:opacity-60"
              >
                Create client
              </button>
            </div>
          </form>

          <form onSubmit={onCreateInvoice} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <h2 className="mb-4 text-lg font-semibold">Create Invoice</h2>
            <div className="space-y-3">
              <select
                required
                value={invoiceForm.client_id}
                onChange={(e) => setInvoiceForm((prev) => ({ ...prev, client_id: e.target.value }))}
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm"
              >
                <option value="">Select client</option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>
              <input
                required
                value={invoiceForm.invoice_number}
                onChange={(e) => setInvoiceForm((prev) => ({ ...prev, invoice_number: e.target.value }))}
                placeholder="Invoice #"
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  value={invoiceForm.issue_date}
                  onChange={(e) => setInvoiceForm((prev) => ({ ...prev, issue_date: e.target.value }))}
                  type="date"
                  className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm"
                />
                <input
                  required
                  value={invoiceForm.due_date}
                  onChange={(e) => setInvoiceForm((prev) => ({ ...prev, due_date: e.target.value }))}
                  type="date"
                  className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm"
                />
              </div>
              <input
                required
                value={invoiceForm.amount}
                onChange={(e) => setInvoiceForm((prev) => ({ ...prev, amount: e.target.value }))}
                type="number"
                min="0"
                step="0.01"
                placeholder="Amount in USD"
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm"
              />
              <textarea
                value={invoiceForm.notes}
                onChange={(e) => setInvoiceForm((prev) => ({ ...prev, notes: e.target.value }))}
                placeholder="Notes"
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm"
                rows={2}
              />
              <button
                disabled={busy}
                className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-teal-400 disabled:opacity-60"
              >
                Create invoice
              </button>
            </div>
          </form>
        </section>

        <section className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
          <h2 className="mb-4 text-lg font-semibold">Clients</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="text-slate-400">
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Email</th>
                  <th className="pb-2">Company</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id} className="border-t border-white/10">
                    <td className="py-2">{client.name}</td>
                    <td className="py-2">{client.email ?? '-'}</td>
                    <td className="py-2">{client.company ?? '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
          <h2 className="mb-4 text-lg font-semibold">Invoices</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] text-left text-sm">
              <thead>
                <tr className="text-slate-400">
                  <th className="pb-2">Invoice</th>
                  <th className="pb-2">Client</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Issue</th>
                  <th className="pb-2">Due</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-t border-white/10">
                    <td className="py-3">{invoice.invoice_number}</td>
                    <td className="py-3">{invoice.clients?.name ?? 'Unknown client'}</td>
                    <td className="py-3">{formatCurrency(invoice.amount_cents)}</td>
                    <td className="py-3">{invoice.issue_date}</td>
                    <td className="py-3">{invoice.due_date}</td>
                    <td className="py-3">
                      <span
                        className="rounded-full px-2 py-1 text-xs font-semibold capitalize"
                        style={{ backgroundColor: `${statusColors[invoice.status]}22`, color: statusColors[invoice.status] }}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={`/api/invoices/${invoice.id}/pdf`}
                          target="_blank"
                          className="rounded bg-slate-800 px-2 py-1 text-xs hover:bg-slate-700"
                          rel="noreferrer"
                        >
                          PDF
                        </a>
                        <button
                          onClick={() => sendInvoiceEmail(invoice.id)}
                          className="rounded bg-slate-800 px-2 py-1 text-xs hover:bg-slate-700"
                        >
                          Email
                        </button>
                        {invoice.status !== 'paid' && (
                          <button
                            onClick={() => startStripeCheckout(invoice.id)}
                            className="rounded bg-teal-600 px-2 py-1 text-xs font-semibold text-slate-900 hover:bg-teal-500"
                          >
                            Collect
                          </button>
                        )}
                        <select
                          value={invoice.status}
                          onChange={(e) => updateInvoiceStatus(invoice.id, e.target.value as Invoice['status'])}
                          className="rounded bg-slate-800 px-2 py-1 text-xs"
                        >
                          <option value="draft">draft</option>
                          <option value="sent">sent</option>
                          <option value="paid">paid</option>
                          <option value="overdue">overdue</option>
                        </select>
                        <button
                          onClick={() => removeInvoice(invoice.id)}
                          className="rounded bg-rose-700 px-2 py-1 text-xs hover:bg-rose-600"
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
        </section>

        <section className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
          <h2 className="mb-4 text-lg font-semibold">Recent Payments</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead>
                <tr className="text-slate-400">
                  <th className="pb-2">When</th>
                  <th className="pb-2">Invoice</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-t border-white/10">
                    <td className="py-2">{new Date(payment.created_at).toLocaleString()}</td>
                    <td className="py-2">{payment.invoice_id}</td>
                    <td className="py-2">{formatCurrency(payment.amount_cents)}</td>
                    <td className="py-2 capitalize">{payment.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}
