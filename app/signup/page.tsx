'use client';

import SignUpForm from '@/components/auth/SignUpForm';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export default function SignUpPage() {
  return (
    <div className="min-h-screen page-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-3xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </Link>
        </div>

        <Card>
          <SignUpForm />
          
          <div className="mt-6 text-center">
            <Link href="/login" className="text-sm text-gray-400 hover:text-white transition-colors">
              Already have an account?{' '}
              <span className="text-teal-300 font-medium">Login</span>
            </Link>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
