import { approach } from "@/lib/content";

export default function Approach() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="field-label mb-3">{approach.eyebrow}</div>
        <h2 className="font-display text-3xl sm:text-4xl font-600 tracking-tight mb-4">
          {approach.heading}
        </h2>
        <p className="text-lg leading-relaxed text-ink/85 max-w-2xl">
          {approach.body}
        </p>
      </div>
    </section>
  );
}
