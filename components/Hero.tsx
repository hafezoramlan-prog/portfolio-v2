import { profile } from "@/lib/content";

export default function Hero() {
  const fields: [string, string][] = [
    ["Role", profile.role],
    ["Status", profile.status],
    ["Based in", profile.based],
    ["Contact", profile.contact],
  ];

  return (
    <header id="top" className="bg-panel text-paper scroll-mt-14">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <h1 className="font-display font-700 text-[13vw] leading-[0.9] sm:text-7xl md:text-8xl tracking-tight uppercase">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-xl font-body text-lg text-paper/80">
          {profile.tagline}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-linelight border border-linelight">
          {fields.map(([label, value]) => (
            <div key={label} className="bg-panel px-4 py-3">
              <div className="font-mono text-[10px] tracking-widest2 uppercase text-paper/45">
                {label}
              </div>
              <div className="mt-1 font-body text-sm text-paper">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
