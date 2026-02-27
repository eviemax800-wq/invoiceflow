import Link from 'next/link';

const popularTools = [
  { name: 'GST Calculator', href: '/tools/gst-calculator', icon: '🧮' },
  { name: 'Invoice Generator', href: '/tools/invoice-generator', icon: '📄' },
  { name: 'Rate Calculator', href: '/tools/rate-calculator', icon: '💰' },
  { name: 'ABN Lookup', href: '/tools/abn-lookup', icon: '🔍' },
  { name: 'Tax Estimator', href: '/tools/tax-estimator', icon: '📊' },
  { name: 'Contract Generator', href: '/tools/contract-generator', icon: '📝' },
];

const popularPages = [
  { name: 'Free Business Tools', href: '/tools', description: '100+ free tools for Australian freelancers' },
  { name: 'Blog & Guides', href: '/blog', description: '125+ articles on invoicing, tax & freelancing' },
  { name: 'Pricing', href: '/pricing', description: 'Free tier, Pro $19/mo, Premium $39/mo' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen page-bg">
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            <span className="text-2xl font-bold gradient-text heading-font">InvoiceFlow</span>
          </Link>
          <div className="flex gap-4">
            <Link href="/tools" className="text-sm text-slate-300 hover:text-white transition-colors">
              Free Tools
            </Link>
            <Link href="/blog" className="text-sm text-slate-300 hover:text-white transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="text-8xl font-bold gradient-text heading-font">404</div>
          <h1 className="text-3xl font-bold text-white heading-font">
            Page not found
          </h1>
          <p className="text-lg text-slate-400">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Try one of our popular tools or browse our guides below.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
            {popularTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-200 hover:bg-white/10 hover:border-teal-500/30 transition-all"
              >
                <span>{tool.icon}</span>
                <span>{tool.name}</span>
              </Link>
            ))}
          </div>

          <div className="space-y-3 mt-8">
            {popularPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="block rounded-xl bg-white/5 border border-white/10 px-6 py-4 text-left hover:bg-white/10 hover:border-teal-500/30 transition-all"
              >
                <div className="text-white font-medium">{page.name}</div>
                <div className="text-sm text-slate-400">{page.description}</div>
              </Link>
            ))}
          </div>

          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium hover:from-teal-400 hover:to-blue-400 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
