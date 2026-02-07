import Link from 'next/link';
import Button from '@/components/ui/Button';
import PricingCards from '@/components/pricing/PricingCards';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold gradient-text cursor-pointer">
              Product Factory
            </h1>
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
          <h2 className="text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300">
            Choose the plan that works for you
          </p>
        </div>

        <PricingCards />

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            All plans include full access to features, priority support, and regular updates.
          </p>
          <p className="text-sm text-gray-500">
            Secure payment processing by Stripe
          </p>
        </div>
      </main>
    </div>
  );
}
