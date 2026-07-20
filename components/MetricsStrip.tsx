import { metrics } from "@/lib/content";

export default function MetricsStrip() {
  return (
    <section className="border-b border-line bg-paperdim">
      <div className="mx-auto max-w-5xl px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="font-display text-4xl sm:text-5xl font-600 text-ink">
              {m.value}
            </div>
            <div className="mt-1 text-sm text-ink/60 leading-snug">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
