'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const { signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithGoogle();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to sign in.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen page-bg px-4 py-20 text-slate-100">
      <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-slate-950/70 p-8 backdrop-blur">
        <h1 className="heading-font text-3xl font-bold">Sign in to InvoiceFlow</h1>
        <p className="mt-2 text-sm text-slate-400">Use your Google account via Supabase Auth.</p>

        <button
          onClick={onGoogleSignIn}
          disabled={loading}
          className="mt-8 w-full rounded-lg bg-teal-500 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Redirecting...' : 'Continue with Google'}
        </button>

        {error && <p className="mt-4 text-sm text-rose-300">{error}</p>}
      </div>
    </div>
  );
}
