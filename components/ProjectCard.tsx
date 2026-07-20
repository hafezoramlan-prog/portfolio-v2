import { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  const isLive = project.status === "Live";

  return (
    <article className="border border-line bg-paper">
      <div className="flex items-center justify-between border-b border-line px-6 py-3">
        <span className="field-label">{project.number}</span>
        <span
          className={`text-xs font-body px-2 py-1 rounded-full border ${
            isLive ? "text-route border-route" : "text-ink/50 border-line"
          }`}
        >
          {isLive ? "● Live now" : "○ Coming soon"}
        </span>
      </div>

      <div className="px-6 py-8">
        <h3 className="font-display text-4xl sm:text-5xl font-600 tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-base text-ink/70 max-w-xl">{project.oneLiner}</p>

        {project.disclaimer && (
          <p className="mt-3 text-xs italic text-ink/55 border-l-2 border-ink/20 pl-3">
            {project.disclaimer}
          </p>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="field-label">The problem</div>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">
              {project.problem}
            </p>
          </div>
          <div>
            <div className="field-label">What I built</div>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">
              {project.build}
            </p>
          </div>
          <div>
            <div className="field-label">Why it matters</div>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">
              {project.outcome}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-paperdim text-ink/70 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-sm font-600 text-ink underline decoration-safety decoration-2 underline-offset-4 hover:text-safety"
            >
              {project.linkLabel} →
            </a>
          ) : (
            <span className="ml-auto text-sm text-ink/40">
              {project.linkLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
