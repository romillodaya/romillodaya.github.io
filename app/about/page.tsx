import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'The person behind the tabs: what Romil cares about, is learning, and is doing now.',
};

export default function AboutPage() {
  return (
    <main className="page-shell about-page">
      <header className="about-page-hero">
        <div>
          <p className="section-kicker"><span>04</span> About this particular human</p>
          <h1>Curious by default.<br /><em>Specific when useful.</em></h1>
          <p>I&apos;m Romil — an engineer who likes thoughtful tools, clear explanations, good systems, and side projects with suspiciously specific origin stories.</p>
        </div>
        <div className="portrait-placeholder about-portrait" aria-label="A playful placeholder for Romil's portrait"><span className="face-glow" /><span className="glasses">◉ ◉</span><strong>your face<br />goes here</strong><small>preferably mid-laugh</small></div>
      </header>

      <section className="about-narrative">
        <aside><span>CURRENTLY.LOG</span><strong>Based in India</strong><small>IST · probably online</small></aside>
        <div>
          <h2>I care about the part between <em>“it works”</em> and <em>“it makes sense.”</em></h2>
          <p>I like understanding how things work, especially after I&apos;ve broken them in an interesting new way. Most of my favourite work sits somewhere between engineering, product thinking, and explaining a difficult idea without sanding off the useful nuance.</p>
          <p>This website is the less formal version of a résumé: what I&apos;m learning, what I keep returning to, what I notice away from work, and the projects I make simply because the question became too interesting to ignore.</p>
        </div>
      </section>

      <section className="about-columns">
        <div><span>01 / AT THE DESK</span><h2>Things I keep thinking about</h2><ul><li>Systems that explain themselves</li><li>Tools that respect attention</li><li>Local-first and durable software</li><li>Maps as memory devices</li></ul></div>
        <div><span>02 / AWAY FROM IT</span><h2>Things that reset the brain</h2><ul><li>Long walks with a camera</li><li>Unhurried travel</li><li>Books with aggressive margins</li><li>Overthinking a cup of coffee</li></ul></div>
      </section>

      <aside className="now-card">
        <div><span className="status-dot" /><small>NOW · AUGUST 2026</small></div>
        <h2>Learning how compilers think, making a map of small memories, and trying to close a few browser tabs.</h2>
        <p>This section should change often. It is a snapshot, not a personal brand statement.</p>
      </aside>

      <section className="about-contact">
        <span>GOOD INTERNET STRANGERS ARE STILL GOOD</span>
        <h2>If something here made you curious,<br />say hello.</h2>
        <a href="mailto:hello@example.com">hello@example.com ↗</a>
        <Link href="/writing">Or read a note first →</Link>
      </section>
    </main>
  );
}
