import { nav } from "@/lib/content";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-panel/95 backdrop-blur border-b border-linelight">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-display text-sm font-600 uppercase tracking-wide text-paper">
          Hafez Ramlan
        </a>
        <div className="flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm text-paper/75 hover:text-safety transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
