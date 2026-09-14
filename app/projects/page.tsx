import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '../content';
export const metadata: Metadata = { title: 'Projects', description: 'Small tools, experiments, and things made out of curiosity.' };
export default function ProjectsIndex() {
  return <main id="main-content" className="page-shell"><header className="page-hero"><p className="section-kicker">On the workbench</p><h1>Made out of curiosity.</h1><p>Small tools and side projects. A place to share what I’m making and what I learn along the way.</p></header><section className="project-archive" aria-label="Project archive">{projects.map(project => <article className="archive-project" key={project.slug}><span className="project-initial" aria-hidden="true">{project.title[0]}</span><div><div className="project-topline"><span>{project.index} · {project.year}</span><span>{project.status}</span></div><h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2><p>{project.copy}</p><ul aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><Link href={`/projects/${project.slug}`}>Read the project notes ↗</Link></div></article>)}</section><p className="demo-note">Sample project concepts from the original demo.</p></main>;
}
