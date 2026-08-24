import type { Metadata } from 'next';
import Link from 'next/link';
import { ProjectVisual } from '../components/project-visual';
import { projects } from '../content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Useful tools, questionable experiments, and side quests that refused to stay small.',
};

export default function ProjectsIndex() {
  return (
    <main className="page-shell">
      <header className="page-hero projects-hero">
        <p className="section-kicker"><span>02</span> The lab</p>
        <h1>Built from curiosity,<br /><em>shipped with caveats.</em></h1>
        <p>A small archive of tools, experiments, and ideas that escaped the notes app long enough to become real.</p>
        <div className="lab-status"><span><i /> Lab status: operational</span><span>Experiments logged: {projects.length.toString().padStart(2, '0')}</span></div>
      </header>

      <section className="project-archive" aria-label="Project archive">
        {projects.map((project) => (
          <article className="archive-project" key={project.slug}>
            <ProjectVisual visual={project.visual} className="archive-project-visual" />
            <div className="archive-project-copy">
              <div className="project-topline"><span>{project.index} · {project.year}</span><span className="project-status"><i />{project.status}</span></div>
              <h2>{project.title}</h2><p>{project.copy}</p>
              <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <Link href={`/projects/${project.slug}`}>Open the case file <span>↗</span></Link>
            </div>
          </article>
        ))}
      </section>
      <div className="archive-end"><span>EOF</span><p>More experiments are currently making unreasonable demands in the drafts folder.</p></div>
    </main>
  );
}
