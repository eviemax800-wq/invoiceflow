'use client';

import SignUpForm from '@/components/auth/SignUpForm';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-3xl font-bold gradient-text cursor-pointer">
              Product Factory
            </h1>
          </Link>
        </div>

        <Card>
          <SignUpForm />
          
          <div className="mt-6 text-center">
            <Link href="/login" className="text-sm text-gray-400 hover:text-white transition-colors">
              Already have an account?{' '}
              <span className="text-blue-400 font-medium">Login</span>
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
