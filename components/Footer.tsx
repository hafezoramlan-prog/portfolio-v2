import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="bg-panel text-paper scroll-mt-14">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="font-display text-2xl uppercase tracking-tight">
            {profile.name}
          </div>
          <a
            href={`mailto:${profile.contact}`}
            className="text-sm text-paper/70 hover:text-safety"
          >
            {profile.contact}
          </a>
        </div>
        <a
          href="#top"
          className="text-sm text-paper/45 hover:text-safety"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
