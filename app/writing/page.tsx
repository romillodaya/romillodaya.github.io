import type { Metadata } from 'next';
import Link from 'next/link';
import { writing } from '../content';
export const metadata: Metadata = { title: 'Writing', description: 'Essays, notes, and ideas to come back to.' };
export default function WritingIndex() {
  return <main id="main-content" className="page-shell"><header className="page-hero"><p className="section-kicker">ARTICLES & NOTES</p><h1>Writing.</h1><p>Notes on engineering, learning, and building software.</p></header><section className="index-section" aria-labelledby="all-writing"><div className="index-label"><span id="all-writing">All writing / {writing.length.toString().padStart(2, '0')}</span><small>Newest first ↓</small></div><div className="writing-list">{writing.map(post => <Link className="writing-row" href={`/writing/${post.slug}`} key={post.slug}><span className="writing-number">{post.number}</span><div className="writing-copy"><h2>{post.title}</h2><p>{post.excerpt}</p></div><div className="writing-meta"><span>{post.published}</span><span>{post.category} · {post.readTime}</span></div><span className="writing-arrow" aria-hidden="true">↗</span></Link>)}</div></section><p className="demo-note">These are sample essays from the original demo.</p></main>;
}
