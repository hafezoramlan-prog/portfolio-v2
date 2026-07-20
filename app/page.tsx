import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import MetricsStrip from "@/components/MetricsStrip";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { projects } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Approach />
      <MetricsStrip />

      <section id="projects" className="mx-auto max-w-5xl px-6 py-16 scroll-mt-14">
        <h2 className="font-display text-2xl sm:text-3xl font-600 tracking-tight mb-6">
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      <Skills />
      <Footer />
    </main>
  );
}
