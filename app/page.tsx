import Link from 'next/link';
import { PhotoArt } from './components/photo-art';
import { ProjectVisual } from './components/project-visual';
import { fieldNotes, projects, writing } from './content';

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for interesting problems</p>
          <h1>I make useful things,<br /><span>then write down what broke.</span></h1>
          <p className="intro">Hey, I’m Romil — an engineer, compulsive tinkerer, and collector of side quests. This is my small corner of the internet for code, photographs, field notes, and experiments that got delightfully out of hand.</p>
          <div className="hero-actions">
            <Link className="primary-button" href="/projects">Explore the lab <span aria-hidden="true">↘</span></Link>
            <Link className="text-link" href="/writing">Read the notes <span aria-hidden="true">→</span></Link>
          </div>
          <ul className="quick-links" aria-label="Social links">
            <li><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a></li>
            <li><a href="mailto:hello@example.com">Email ↗</a></li>
            <li><Link href="/about">Now / 2026</Link></li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="A tiny developer desk scene made from interface cards">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="terminal-card">
            <div className="terminal-bar"><span /><span /><span /><small>side-quest.log</small></div>
            <div className="terminal-body">
              <p><span className="term-dim">$</span> whoami</p>
              <p className="term-answer">romil — human, probably</p>
              <p><span className="term-dim">$</span> ls interests/</p>
              <div className="tag-row"><span>systems</span><span>photos</span><span>odd ideas</span></div>
              <p><span className="term-dim">$</span> status</p>
              <p className="term-green">● making something unnecessary</p>
              <p className="command-line"><span className="term-dim">$</span><span className="terminal-caret" /></p>
            </div>
          </div>
          <div className="floating-note note-one"><span>currently</span><strong>wandering through<br />a new rabbit hole</strong><small>↳ progress: █████░░ 68%</small></div>
          <div className="floating-note note-two" aria-hidden="true">⌘ + curiosity</div>
          <span className="spark spark-one" aria-hidden="true">✦</span>
          <span className="spark spark-two" aria-hidden="true">✧</span>
        </div>
      </section>

      <aside className="now-strip" aria-label="Current interests">
        <span className="now-label">NOW.EXE</span>
        <div className="now-item"><small>Reading</small><strong>The Making of a Manager</strong></div>
        <div className="now-item"><small>Learning</small><strong>How compilers think</strong></div>
        <div className="now-item"><small>Making</small><strong>A map of small memories</strong></div>
        <div className="now-item"><small>Based in</small><strong>India · IST</strong></div>
        <span className="now-updated">updated sporadically</span>
      </aside>

      <section className="section-shell writing-section">
        <div className="section-heading">
          <div><p className="section-kicker"><span>01</span> Notes from the rabbit hole</p><h2>Recent writing<span className="dot">.</span></h2></div>
          <p>Explanations I wish I had, lessons paid for with bugs, and occasional dispatches from outside the terminal.</p>
        </div>
        <div className="writing-list">
          {writing.map((post) => (
            <Link className={`writing-row ${post.accent}`} href={`/writing/${post.slug}`} key={post.number} aria-label={`${post.title}, ${post.meta}`}>
              <span className="writing-number">{post.number}</span>
              <div className="writing-copy"><h3>{post.title}</h3><p>{post.excerpt}</p></div>
              <span className="writing-meta">{post.meta}</span><span className="writing-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
        <Link className="section-link" href="/writing">Browse the whole notebook <span>→</span></Link>
      </section>

      <section className="section-shell projects-section">
        <div className="section-heading">
          <div><p className="section-kicker"><span>02</span> The side-quest department</p><h2>Things I&apos;m making<span className="dot orange-dot">.</span></h2></div>
          <p>Some useful, some questionable. All made because the thought “surely this should exist” refused to go away.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <ProjectVisual visual={project.visual} />
              <div className="project-topline"><span>{project.index}</span><span className="project-status"><i />{project.status}</span></div>
              <h3>{project.title}</h3><p>{project.copy}</p>
              <div className="project-bottom">
                <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <Link href={`/projects/${project.slug}`} aria-label={`Read about ${project.title}`}>↗</Link>
              </div>
            </article>
          ))}
        </div>
        <Link className="section-link" href="/projects">Enter the project archive <span>→</span></Link>
        <p className="project-caveat"><span>※</span> These are starter stories for the template — swap in the real delightful mess when you&apos;re ready.</p>
      </section>

      <section className="field-section">
        <div className="section-shell">
          <div className="section-heading field-heading">
            <div><p className="section-kicker"><span>03</span> Away from the keyboard</p><h2>Field notes<span className="dot mint-dot">.</span></h2></div>
            <p>Places, frames, and tiny things worth remembering. A slower feed with no algorithm and no urge to perform.</p>
          </div>
          <div className="photo-grid">
            {fieldNotes.slice(0, 2).map((note, index) => (
              <Link className={`photo-card ${index === 0 ? 'tall-photo' : 'photo-two'}`} href={`/field-notes/${note.slug}`} key={note.slug}>
                <PhotoArt art={note.art} label={`Abstract placeholder artwork for ${note.title}`} />
                <div><span>{note.title}</span><small>FIELD NOTE · {note.number}</small></div>
              </Link>
            ))}
            <blockquote className="field-quote"><span aria-hidden="true">“</span><p>Take the long way.<br />It usually has better light.</p><small>— note to self, repeatedly</small></blockquote>
            <Link className="photo-card wide-photo" href={`/field-notes/${fieldNotes[2].slug}`}>
              <PhotoArt art={fieldNotes[2].art} label={`Abstract placeholder artwork for ${fieldNotes[2].title}`} />
              <div><span>{fieldNotes[2].title}</span><small>FIELD NOTE · {fieldNotes[2].number}</small></div>
            </Link>
          </div>
          <Link className="section-link field-link" href="/field-notes">Open the field notebook <span>→</span></Link>
        </div>
      </section>

      <section className="section-shell about-section">
        <div className="about-aside">
          <p className="section-kicker"><span>04</span> The human behind the tabs</p>
          <div className="portrait-placeholder" aria-label="A playful placeholder for Romil's portrait"><span className="face-glow" /><span className="glasses">◉ ◉</span><strong>your face<br />goes here</strong><small>preferably mid-laugh</small></div>
        </div>
        <div className="about-copy">
          <h2>A little more <em>human</em>,<br />a little less résumé.</h2>
          <p className="about-lead">I like understanding how things work, especially after I&apos;ve broken them in an interesting new way. I care about thoughtful software, clear explanations, and leaving systems a little kinder than I found them.</p>
          <p>When I&apos;m not moving pixels or debugging a stubborn idea, I&apos;m probably walking somewhere with a camera, overthinking a cup of coffee, or opening a browser tab I absolutely will read later.</p>
          <div className="about-facts">
            <div><span>Currently curious about</span><strong>systems · tools for thought · maps</strong></div>
            <div><span>Default operating mode</span><strong>curious, caffeinated, optimistic</strong></div>
            <div><span>Open to</span><strong>good problems & unexpected conversations</strong></div>
          </div>
          <Link className="primary-button about-button" href="/about">More about me <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}
