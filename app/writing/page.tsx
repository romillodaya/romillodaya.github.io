import type { Metadata } from 'next';
import Link from 'next/link';
import { writing } from '../content';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes about engineering, learning, the web, and productive rabbit holes.',
};

export default function WritingIndex() {
  return (
    <main className="page-shell">
      <header className="page-hero writing-hero">
        <p className="section-kicker"><span>01</span> The notebook</p>
        <h1>Writing for people<br /><em>who like the details.</em></h1>
        <p>Things I learned slowly, explained as clearly as I can. Mostly engineering, occasionally life, always written by a human.</p>
        <div className="topic-strip" aria-label="Writing topics"><span>All notes · 04</span><span>Engineering</span><span>Learning</span><span>Web</span><span>Process</span></div>
      </header>

      <section className="index-section" aria-labelledby="all-writing">
        <div className="index-label"><span id="all-writing">All notes</span><small>Newest first ↓</small></div>
        <div className="writing-list expanded-writing-list">
          {writing.map((post) => (
            <Link className={`writing-row ${post.accent}`} href={`/writing/${post.slug}`} key={post.slug}>
              <span className="writing-number">{post.number}</span>
              <div className="writing-copy"><h2>{post.title}</h2><p>{post.excerpt}</p></div>
              <div className="writing-meta writing-date"><span>{post.published}</span><span>{post.readTime}</span></div>
              <span className="writing-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <aside className="subscribe-note">
        <span aria-hidden="true">✦</span>
        <div><small>LOW-FREQUENCY SIGNAL</small><h2>New notes, whenever they&apos;re ready.</h2><p>No content treadmill. No growth hacks. Just a small email when something worth sharing escapes the drafts folder.</p></div>
        <a href="mailto:hello@example.com?subject=Add%20me%20to%20your%20writing%20list">Keep me posted →</a>
      </aside>
    </main>
  );
}
