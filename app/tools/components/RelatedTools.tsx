import Link from 'next/link';
import { tools, type ToolCategory } from '../tools-data';

interface RelatedToolsProps {
  currentSlug: string;
  category: ToolCategory;
  maxItems?: number;
}

export default function RelatedTools({ currentSlug, category, maxItems = 4 }: RelatedToolsProps) {
  const currentHref = `/tools/${currentSlug}`;

  // Same category first, then other categories for variety
  const sameCategory = tools.filter(
    (t) => t.category === category && t.href !== currentHref
  );
  const otherCategory = tools.filter(
    (t) => t.category !== category && t.href !== currentHref
  );

  // Take up to maxItems: prioritize same category, fill with others
  const sameCategoryCount = Math.min(sameCategory.length, maxItems - 1);
  const otherCount = Math.min(otherCategory.length, maxItems - sameCategoryCount);
  const related = [
    ...sameCategory.slice(0, sameCategoryCount),
    ...otherCategory.slice(0, otherCount),
  ].slice(0, maxItems);

  if (related.length === 0) return null;

  return (
    <section className="mt-16">
      {/* Product CTA — positioned before related tools to catch users before they navigate away */}
      <div className="mb-12 rounded-2xl border border-teal-500/20 bg-gradient-to-r from-teal-900/20 to-blue-900/20 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white heading-font mb-1">
              Need more than a calculator?
            </h3>
            <p className="text-slate-400 text-sm">
              InvoiceFlow automates invoicing, GST, and exports — so you can focus on billable work.
            </p>
          </div>
          <Link
            href="/signup"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Try Free &mdash; 5 Invoices/Mo
          </Link>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white heading-font mb-2">
        Related Free Tools
      </h3>
      <p className="text-slate-400 mb-8">
        Explore more tools built for Australian freelancers
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {related.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="glass rounded-xl p-5 hover:bg-white/[0.08] hover:border-teal-500/30 border border-transparent transition-all group"
          >
            <div className="flex items-start gap-4">
              <div
                className={`h-10 w-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-lg shrink-0`}
              >
                {tool.icon}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-white group-hover:text-teal-300 transition-colors text-sm">
                  {tool.title}
                </div>
                <div className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {tool.description}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          href="/tools"
          className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
        >
          Browse all 100 free tools &rarr;
        </Link>
      </div>
    </section>
  );
}
