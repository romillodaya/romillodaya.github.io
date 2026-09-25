import Link from 'next/link';
import type { Project } from '../content';
import { ProjectVisual } from './project-visual';

export function ProjectCard({ project, home = false }: { project: Project; home?: boolean }) {
  const Heading = home ? 'h3' : 'h2';
  return (
    <article className={`ml-project-card${home ? ' ml-project-card-home' : ''}`}>
      <Link href={`/projects/${project.slug}`} className="ml-project-link">
        <ProjectVisual project={project}/>
        <div className="ml-project-body">
          <div className="project-card-meta"><span>{project.category}</span><span>{project.status}</span></div>
          <Heading>{project.title}<span aria-hidden="true">↗</span></Heading>
          <p>{project.copy}</p>
          <ul className="project-tech" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <span className="project-card-cta">Explore the project <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}
