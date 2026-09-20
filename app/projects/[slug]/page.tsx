import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '../../content';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.copy,
    openGraph: { title: project.title, description: project.copy, images: [] },
    twitter: { card: 'summary', title: project.title, description: project.copy, images: [] },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main id="main-content" className="project-detail page-shell">
      <Link className="breadcrumb" href="/projects">← Project archive</Link>
      <header className="project-detail-header">
        <div>
          <p className="section-kicker"><span>{project.index.replace('P-', '')}</span> Sample project</p>
          <h1>{project.title}</h1><p>{project.copy}</p>
        </div>
        <dl>
          <div><dt>Year</dt><dd>{project.year}</dd></div>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Status</dt><dd><span className="project-status"><i />{project.status}</span></dd></div>
        </dl>
      </header>


      <div className="case-study">
        <aside><span>Built with</span><ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></aside>
        <div>
          <section><span className="prose-number">01</span><h2>The problem</h2><p>{project.challenge}</p></section>
          <section><span className="prose-number">02</span><h2>The approach</h2>{project.approach.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
          <blockquote><span>TAKEAWAY</span>{project.takeaway}</blockquote>
        </div>
      </div>

      <p className="demo-note">This is a sample project concept from the original demo.</p>
    </main>
  );
}
