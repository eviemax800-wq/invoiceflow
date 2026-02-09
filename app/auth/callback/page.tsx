// @ts-nocheck
'use client';

import { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      if (code) {
        await supabase.auth.exchangeCodeForSession(code);
      }
      router.replace('/dashboard');
    };

    void handleCallback();
  }, [router, searchParams]);

  return (
    <div className="min-h-screen page-bg flex items-center justify-center text-slate-100">
      Completing sign in...
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<div className="min-h-screen page-bg flex items-center justify-center text-slate-100">Loading...</div>}>
      <AuthCallbackContent />
    </Suspense>
  );
}
