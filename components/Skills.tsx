import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 scroll-mt-14">
      <h2 className="font-display text-2xl sm:text-3xl font-600 tracking-tight mb-6">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div key={group.group} className="border-l-2 border-safety pl-4">
            <div className="font-display text-xl font-600 tracking-tight">
              {group.group}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2 py-1 bg-paperdim text-ink/75 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
