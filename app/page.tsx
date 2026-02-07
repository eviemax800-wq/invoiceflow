import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">Product Factory</h1>
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

      {/* Hero */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-6xl font-bold text-white leading-tight">
            Build Products
            <br />
            <span className="gradient-text">2.5x Faster</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Production-ready Next.js template with authentication, payments, 
            admin dashboard, and beautiful UI components. Start building in minutes, 
            not weeks.
          </p>

          <div className="flex gap-4 justify-center pt-8">
            <Link href="/signup">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary" size="lg">View Pricing</Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-32 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-32">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2024 Product Factory. Built with Next.js, Supabase & Stripe.</p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: '🔐',
    title: 'Authentication',
    description: 'Google OAuth, email/password, and magic links. Session management included.',
  },
  {
    icon: '💳',
    title: 'Payments',
    description: 'Stripe integration with subscriptions, webhooks, and customer portal.',
  },
  {
    icon: '📊',
    title: 'Admin Dashboard',
    description: 'User management, analytics, and revenue tracking out of the box.',
  },
  {
    icon: '🎨',
    title: 'UI Components',
    description: 'Beautiful glassmorphism design with dark mode and responsive layouts.',
  },
  {
    icon: '⚡',
    title: 'TypeScript',
    description: 'Fully typed with strict mode. Catch errors before production.',
  },
  {
    icon: '🚀',
    title: 'Deploy Ready',
    description: 'Vercel config, CI/CD, and environment management all set up.',
  },
];
