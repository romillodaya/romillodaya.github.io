import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allWriting, getProject, getWritingPost, writing } from '../../content';
import { ArticleBlock } from '../../components/article-block';

export function generateStaticParams() { return allWriting.map(post => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getWritingPost((await params).slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, type: 'article', images: [] }, twitter: { card: 'summary', title: post.title, description: post.excerpt, images: [] } };
}

export default async function WritingPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getWritingPost((await params).slug);
  if (!post) notFound();
  const nextPost = writing[(writing.findIndex(item => item.slug === post.slug) + 1) % writing.length];
  const related = post.relatedProject ? getProject(post.relatedProject) : undefined;
  const sections = post.sections.map(section => ({ ...section, id: section.id ?? section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-') }));
  const contents = <ol>{sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>)}{post.sources && <li><a href="#references">Sources & further reading</a></li>}</ol>;
  return (
    <main id="main-content" className="page-shell reading-page">
      <article>
        <header className="reading-header">
          <Link className="breadcrumb" href="/writing">← All writing</Link>
          <div className="reading-meta"><span>{post.category}</span><span>{post.published}</span><span>{post.readTime}</span></div>
          <h1>{post.title}</h1><p className="reading-deck">{post.opening}</p>
          <span className="reading-byline">Romil Lodaya{post.example && <><span aria-hidden="true">/</span> Example article</>}</span>
        </header>
        <div className="reading-layout">
          <aside className="reading-sidebar"><nav aria-label="Table of contents"><span>On this page</span>{contents}</nav></aside>
          <div className="reading-prose">
            <details className="mobile-contents"><summary>On this page</summary><nav aria-label="Mobile table of contents">{contents}</nav></details>
            {post.summary && <aside className="reading-overview"><strong>In this article</strong><ul>{post.summary.map(item => <li key={item}>{item}</li>)}</ul></aside>}
            {sections.map(section => <section id={section.id} key={section.id}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.blocks?.map((block, index) => <ArticleBlock key={`${section.id}-${index}`} block={block}/>)}{section.note && <aside className="reading-callout"><strong>A note</strong><p>{section.note}</p></aside>}</section>)}
            {post.sources && <section className="reading-sources" id="references"><h2>Sources & further reading</h2><p>Primary references for the concepts and APIs in this article.</p><ol>{post.sources.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.title}<span className="visually-hidden"> (opens in a new tab)</span></a></li>)}</ol></section>}
            {related && <nav className="reading-related" aria-label="Related project"><span>Explore the project concept</span><Link href={`/projects/${related.slug}`}>{related.title}<span aria-hidden="true">→</span></Link></nav>}
            {nextPost && <nav className="reading-related reading-next" aria-label="Continue reading"><span>Next article</span><Link href={`/writing/${nextPost.slug}`}>{nextPost.title}<span aria-hidden="true">→</span></Link></nav>}
          </div>
        </div>
      </article>
    </main>
  );
}
