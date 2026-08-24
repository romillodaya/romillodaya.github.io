import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getWritingPost, writing } from '../../content';

export function generateStaticParams() {
  return writing.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article', images: [] },
    twitter: { card: 'summary', title: post.title, description: post.excerpt, images: [] },
  };
}

export default async function WritingPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getWritingPost(slug);
  if (!post) notFound();
  const currentIndex = writing.findIndex((item) => item.slug === post.slug);
  const nextPost = writing[(currentIndex + 1) % writing.length];

  return (
    <main className={`article-page ${post.accent}`}>
      <article>
        <header className="article-header">
          <Link className="breadcrumb" href="/writing">← All writing</Link>
          <div className="article-meta"><span>{post.category}</span><span>{post.published}</span><span>{post.readTime}</span></div>
          <h1>{post.title}</h1>
          <p>{post.opening}</p>
          <div className="article-rule"><span>{post.number}</span><i /></div>
        </header>

        <div className="article-layout">
          <aside className="article-aside">
            <span>In this note</span>
            <ol>{post.sections.map((section) => <li key={section.heading}>{section.heading}</li>)}</ol>
            <small>Last tended<br />{post.published}</small>
          </aside>
          <div className="prose">
            {post.sections.map((section, index) => (
              <section key={section.heading}>
                <span className="prose-number">0{index + 1}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.note && <blockquote><span>NOTE TO SELF</span>{section.note}</blockquote>}
              </section>
            ))}
          </div>
        </div>
      </article>

      <nav className="next-read" aria-label="Continue reading">
        <small>Next rabbit hole</small>
        <Link href={`/writing/${nextPost.slug}`}><span>{nextPost.title}</span><i>→</i></Link>
      </nav>
    </main>
  );
}
