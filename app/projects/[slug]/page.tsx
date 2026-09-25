import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allProjects, getProject, getWritingPost } from '../../content';
import { ProjectVisual } from '../../components/project-visual';
import { SiteIcon } from '../../components/site-icon';

export function generateStaticParams() { return allProjects.map(project => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.copy, openGraph: { title: project.title, description: project.copy, images: [] }, twitter: { card: 'summary', title: project.title, description: project.copy, images: [] } };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const related = project.relatedPost ? getWritingPost(project.relatedPost) : undefined;
  return (
    <main id="main-content" className="page-shell project-story">
      <Link className="breadcrumb" href="/projects">← All projects</Link>
      <header className="project-story-header">
        <p className="section-kicker">{project.category ?? 'PROJECT NOTES'}</p>
        <h1>{project.title}</h1><p className="project-story-deck">{project.copy}</p>
        <div className="project-story-actions">
          {project.repository && <a className="project-repository" href={project.repository.href} target="_blank" rel="noreferrer"><SiteIcon name="github"/>GitHub{project.repository.placeholder ? ' (placeholder)' : ''}<span aria-hidden="true">↗</span><span className="visually-hidden"> (opens in a new tab)</span></a>}
          <span className="example-badge">{project.example ? 'Example project' : project.status}</span>
        </div>
        {project.repository?.placeholder && <p className="repository-note">The link opens my GitHub profile until a project repository is added.</p>}
      </header>
      {project.thumbnail && <figure className="project-story-cover"><ProjectVisual project={project} priority/><figcaption>{project.thumbnail.caption ?? (project.example ? 'Concept illustration · example project' : project.thumbnail.alt)}</figcaption></figure>}
      <div className="project-story-layout">
        <aside className="project-facts"><dl><div><dt>Focus</dt><dd>{project.role}</dd></div><div><dt>Year</dt><dd>{project.year}</dd></div><div><dt>Stack</dt><dd><ul className="project-tech">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></dd></div></dl></aside>
        <div className="reading-prose project-story-prose">
          <section><h2>The problem</h2><p>{project.challenge}</p></section>
          <section><h2>{project.example ? 'How it would work' : 'How it works'}</h2>{project.approach.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>
          {project.evaluation && <section><h2>{project.example ? 'What to evaluate' : 'Evaluation'}</h2>{project.example && <p>A proposed evaluation plan for this example:</p>}<ul>{project.evaluation.map(item => <li key={item}>{item}</li>)}</ul></section>}
          <aside className="reading-callout"><strong>The main idea</strong><p>{project.takeaway}</p></aside>
          {related && <nav className="reading-related" aria-label="Related article"><span>Related reading</span><Link href={`/writing/${related.slug}`}>{related.title}<span aria-hidden="true">→</span></Link></nav>}
        </div>
      </div>
      <Link className="project-back" href="/projects">← Back to all projects</Link>
    </main>
  );
}
