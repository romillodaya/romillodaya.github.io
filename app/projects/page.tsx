import type { Metadata } from 'next';
import { projects } from '../content';
import { ProjectCard } from '../components/project-card';

export const metadata: Metadata = { title: 'Projects', description: 'Machine learning projects, experiments, and implementation notes.' };

export default function ProjectsIndex() {
  return (
    <main id="main-content" className="page-shell ml-projects-page">
      <header className="page-hero"><p className="section-kicker">MACHINE LEARNING & ENGINEERING</p><h1>Projects.</h1><p>From the first question to the implementation details.</p></header>
      <div className="archive-context"><span>{projects.length.toString().padStart(2, '0')} projects</span>{projects.some(project => project.example) && <p>Example projects for now. Real work and repositories will replace these.</p>}</div>
      <section className="ml-project-list" aria-label="Project archive">{projects.map(project => <ProjectCard key={project.slug} project={project}/>)}</section>
    </main>
  );
}
