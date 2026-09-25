import type { Metadata } from 'next';
import Link from 'next/link';
import { writing, getProject } from '../content';
import { ProjectVisual } from '../components/project-visual';

export const metadata: Metadata = { title: 'Writing', description: 'Readable guides to transformers, retrieval, and practical machine learning.' };

export default function WritingIndex() {
  const [featured, ...more] = writing;
  const project = featured?.relatedProject ? getProject(featured.relatedProject) : undefined;
  return (
    <main id="main-content" className="page-shell writing-index">
      <header className="page-hero"><p className="section-kicker">EXPLANATIONS & EXPERIMENTS</p><h1>Writing.</h1><p>Machine learning, explained one idea at a time.</p></header>
      {featured && <section aria-labelledby="featured-writing-title"><Link className="featured-article" href={`/writing/${featured.slug}`}><div><span className="handwritten article-feature-label">Start here</span><div className="reading-meta"><span>{featured.category}</span><span>{featured.readTime}</span></div><h2 id="featured-writing-title">{featured.title}</h2><p>{featured.excerpt}</p><span className="project-card-cta">Read the article <span aria-hidden="true">→</span></span></div>{project && <ProjectVisual project={project} priority/>}</Link></section>}
      <section className="reading-archive" aria-labelledby="more-writing"><div className="archive-context"><h2 id="more-writing">More articles</h2><span>{writing.length.toString().padStart(2, '0')} in the notebook</span></div>{more.map(post => <article className="reading-entry" key={post.slug}><Link href={`/writing/${post.slug}`}><div className="reading-meta"><span>{post.category}</span><span>{post.readTime}</span><span>{post.published}</span></div><h2>{post.title}<span aria-hidden="true">↗</span></h2><p>{post.excerpt}</p></Link></article>)}</section>
      {writing.some(post => post.example) && <p className="writing-example-note">Example articles for the portfolio, with original diagrams and links to the source material.</p>}
    </main>
  );
}
