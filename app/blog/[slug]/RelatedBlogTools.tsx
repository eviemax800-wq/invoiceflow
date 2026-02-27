import Link from 'next/link';
import { tools, type ToolCategory } from '../../tools/tools-data';

// Map blog categories to tool categories for cross-linking
const blogToToolCategory: Record<string, ToolCategory[]> = {
  'Invoicing': ['Invoicing & Documents', 'Tax & Compliance'],
  'Tax': ['Tax & Compliance', 'Financial Planning'],
  'Pricing': ['Pricing & Rates', 'Financial Planning'],
  'Business': ['Business Analytics', 'Financial Planning'],
  'Growth': ['Business Analytics', 'Pricing & Rates'],
  'Getting Started': ['Invoicing & Documents', 'Business Analytics'],
  'Profession Guides': ['Invoicing & Documents', 'Pricing & Rates'],
  'Getting Paid': ['Invoicing & Documents', 'Tax & Compliance'],
  'Resources': ['Business Analytics', 'Invoicing & Documents'],
};

export default function RelatedBlogTools({ blogCategory }: { blogCategory: string }) {
  const targetCategories = blogToToolCategory[blogCategory] || ['Invoicing & Documents'];

  // Get tools from primary category first, then secondary
  const primaryTools = tools.filter((t) => t.category === targetCategories[0]);
  const secondaryTools = targetCategories[1]
    ? tools.filter((t) => t.category === targetCategories[1])
    : [];

  // Mix: 3 from primary, 1 from secondary (or 4 from primary if no secondary)
  const selected = [
    ...primaryTools.slice(0, 3),
    ...secondaryTools.slice(0, 1),
  ].slice(0, 4);

  if (selected.length === 0) return null;

  return (
    <div className="mt-12 mb-8">
      <h4 className="text-lg font-bold text-white heading-font mb-2">Free Tools for This Topic</h4>
      <p className="text-sm text-slate-400 mb-4">Try these free calculators and generators — no signup required.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {selected.map((tool) => (
          <Link key={tool.href} href={tool.href} className="block group">
            <div className="glass rounded-xl p-4 border border-white/5 hover:border-teal-400/20 transition-all h-full flex items-start gap-3">
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-white text-lg font-bold shrink-0`}>
                {tool.icon}
              </div>
              <div className="min-w-0">
                <h5 className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors leading-snug">{tool.title}</h5>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{tool.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-3 text-center">
        <Link href="/tools" className="text-sm text-teal-400 hover:text-teal-300">Browse all 100 free tools →</Link>
      </div>
    </div>
  );
}
