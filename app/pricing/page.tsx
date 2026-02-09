import Link from 'next/link';
import Button from '@/components/ui/Button';
import PricingCards from '@/components/pricing/PricingCards';

export const dynamic = 'force-dynamic';
export default function PricingPage() {
  return (
    <div className="min-h-screen page-bg">
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <h1 className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</h1>
          </Link>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 heading-font">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300">
            Start free. Upgrade when you want unlimited invoices.
          </p>
        </div>

        <PricingCards />

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            All plans include Gmail sync, secure OAuth, and CSV export.
          </p>
          <p className="text-sm text-gray-500">
            Secure payment processing by Stripe
          </p>
        </div>
      </main>
    </div>
  );
}
