'use client';

// Full document navigation releases the unmodified Scroll Craft engine, which has no unmount API.


import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import { fieldNotes, projects, writing } from '../content';
import { assetPath, photographs } from './photo-art';
import { SiteIcon } from './site-icon';
import { SocialLinks } from './social-links';

type ScrollCraftWindow = Window & {
  ScrollCraft?: { mount: (root: HTMLElement) => { layout: () => void } };
};

const chapters = [
  { id: 'hello', label: 'About Romil' },
  { id: 'notebook', label: 'Latest writing' },
  { id: 'outside', label: 'Travel & stories' },
  { id: 'workbench', label: 'Projects' },
  { id: 'colophon', label: 'One more page' },
];

export function JournalExperience() {
  const rootRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const bookmarkRef = useRef<HTMLSpanElement>(null);
  const [selected, setSelected] = useState(0);
  const [activeChapter, setActiveChapter] = useState('hello');
  const note = fieldNotes[selected];
  const photo = photographs[note.art];

  function mountEngine() {
    const root = rootRef.current;
    const engine = (window as ScrollCraftWindow).ScrollCraft;
    if (root && engine && !root.dataset.scMounted) {
      root.dataset.scMounted = 'true';
      engine.mount(root);
    }
  }

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll<HTMLElement>('[data-chapter]'));
    const hero = root.querySelector<HTMLElement>('.personal-intro');
    const print = root.querySelector<HTMLElement>('.memory-print');
    const spread = root.querySelector<HTMLElement>('#outside');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;

    // The printed frame unfolds across its visible life, without pinned travel.
    // No React renders on scroll. Only the current folio changes component state.
    function readPage() {
      raf = 0;
      let current = 'hello';
      for (const section of sections) {
        if (section.getBoundingClientRect().top < innerHeight * 0.45) current = section.id;
      }
      setActiveChapter(previous => previous === current ? previous : current);
      if (hero) {
        const progress = motion.matches ? 0 : Math.max(0, Math.min(1, -hero.getBoundingClientRect().top / (innerHeight * .65)));
        hero.style.setProperty('--desk-progress', progress.toFixed(3));
      }
      if (!print || !spread) return;
      const rect = print.getBoundingClientRect();
      const phone = innerWidth <= 700;
      const opening = motion.matches ? 1 : Math.max(0, Math.min(1, (innerHeight * 0.94 - rect.top) / (innerHeight * 0.63)));
      const inset = (1 - opening) * (phone ? 4 : 13);
      const scale = 1.035 - opening * 0.035;
      spread.style.setProperty('--print-inset', `${inset.toFixed(2)}%`);
      spread.style.setProperty('--print-scale', scale.toFixed(4));
      print.dataset.printState = `inset:${inset.toFixed(1)};scale:${scale.toFixed(3)}`;
    }
    function schedule() { if (!raf) raf = requestAnimationFrame(readPage); }
    function keepFocusVisible(event: FocusEvent) {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      // Keyboard focus must not wait for smooth scrolling or entry transitions.
      target.closest('[data-sc-in]')?.classList.add('sc-in');
      const rect = target.getBoundingClientRect();
      if (rect.top < 12 || rect.bottom > innerHeight - 12) {
        target.scrollIntoView({ block: 'center', behavior: 'instant' });
      }
    }
    document.addEventListener('focusin', keepFocusVisible);
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    motion.addEventListener('change', schedule);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('focusin', keepFocusVisible);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      motion.removeEventListener('change', schedule);
    };
  }, []);

  useEffect(() => {
    function placeBookmark() {
      const button = stripRef.current?.querySelectorAll<HTMLButtonElement>('button')[selected];
      const bookmark = bookmarkRef.current;
      if (!button || !bookmark) return;
      bookmark.style.transform = `translate(${button.offsetLeft + button.offsetWidth - 21}px, ${button.offsetTop - 7}px)`;
      bookmark.style.opacity = '1';
    }
    placeBookmark();
    window.addEventListener('resize', placeBookmark);
    return () => window.removeEventListener('resize', placeBookmark);
  }, [selected]);

  function chooseMemory(index: number) {
    setSelected(index);
  }

  return (
    <main id="main-content" ref={rootRef} className="journal-home">
      <Script src={assetPath('/vendor/scrollcraft.js')} strategy="afterInteractive" onReady={mountEngine} />
      <nav className="margin-folio" aria-label="On this page">
        {chapters.map(chapter => (
          <a key={chapter.id} href={`#${chapter.id}`} aria-current={activeChapter === chapter.id ? 'location' : undefined}>
            <span className="folio-line" aria-hidden="true" />{chapter.label}
          </a>
        ))}
      </nav>

      <section id="hello" className="personal-intro journal-wrap" data-sc-act="flow" data-chapter>
        <div className="intro-copy">
          <p className="intro-hello"><span className="color-signature" aria-hidden="true"><i /><i /><i /><i /></span>A personal corner of the internet</p>
          <h1>Hey, I’m<br /><span>Romil Lodaya.</span></h1>
          <p className="intro-lede">Making things. Learning out loud.<br />Taking the scenic route.</p>
          <p className="intro-detail">Welcome to my digital home. I share what I’m building, notes on what I’m learning, and stories from life away from the screen.</p>
          <div className="intro-actions"><a className="primary-link" href="#notebook">Explore the writing <SiteIcon name="arrow" /></a><a className="inline-link" href={assetPath('/about')}>More about me <span aria-hidden="true">↗</span></a></div>
          <SocialLinks />
        </div>
        <div className="desk-scene" role="group" aria-label="A few things you will find here">
          <div className="desk-grid" aria-hidden="true" />
          <div className="desk-stack">
            <a className="desk-card desk-writing" href={assetPath(`/writing/${writing[0].slug}`)}>
              <span className="desk-card-label"><SiteIcon name="write" /> From the notebook <span aria-hidden="true">↗</span></span>
              <strong>{writing[0].title}</strong>
            </a>
            <a className="desk-card desk-project" href={assetPath(`/projects/${projects[0].slug}`)}>
              <span className="desk-card-label"><SiteIcon name="code" /> On the workbench <span aria-hidden="true">↗</span></span>
              <strong>{projects[0].title}</strong><span className="desk-card-foot">Small ideas, made into things.</span>
            </a>
            <a className="desk-card desk-travel" href={assetPath('/field-notes')}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assetPath(photographs['mountain-art'].src)} width="76" height="90" alt="" />
              <span><span className="desk-card-label"><SiteIcon name="compass" /> A change of scene</span><strong>Beyond the screen.</strong><span className="desk-card-foot">Trips, moments & stories ↗</span></span>
            </a>
          </div>
          <p className="desk-caption">A few open tabs from my life.</p>
        </div>
        <nav className="explore-grid" aria-label="Explore this website">
          <a href="#notebook" className="explore-item tone-red"><span className="section-icon"><SiteIcon name="write" /></span><span><strong>Writing & notes</strong><small>Ideas, essays, and things learned.</small></span><SiteIcon name="arrow" /></a>
          <a href="#outside" className="explore-item tone-green"><span className="section-icon"><SiteIcon name="compass" /></span><span><strong>Travel & stories</strong><small>Places, people, and little detours.</small></span><SiteIcon name="arrow" /></a>
          <a href="#workbench" className="explore-item tone-yellow"><span className="section-icon"><SiteIcon name="code" /></span><span><strong>Projects</strong><small>Experiments and things I’m making.</small></span><SiteIcon name="arrow" /></a>
        </nav>
      </section>

      <section id="notebook" className="notebook-chapter journal-wrap tone-red" data-sc-act="flow" data-chapter>
        <div className="chapter-rule" aria-hidden="true"><i data-sc-reveal="left" data-sc-reveal-at="0.08 0.3" /></div>
        <div className="chapter-heading"><h2><span className="section-icon"><SiteIcon name="write" /></span>Latest writing</h2><a className="inline-link" href={assetPath('/writing')}>All posts <span aria-hidden="true">↗</span></a></div>
        <p className="section-explainer">Essays, short notes, and ideas I’m still figuring out.</p>
        <div className="notebook-spread">
          <article className="lead-essay">
            <span className="entry-meta">{writing[0].category} · {writing[0].published}</span>
            <h3><a href={assetPath(`/writing/${writing[0].slug}`)}>{writing[0].title}</a></h3>
            <p>{writing[0].excerpt}</p>
            <a className="inline-link" href={assetPath(`/writing/${writing[0].slug}`)}>Read the essay <span aria-hidden="true">↗</span></a>
            <span className="reading-time">{writing[0].readTime}</span>
          </article>
          <div className="notebook-entries">
            {writing.slice(1, 4).map(post => (
              <a className="notebook-entry" href={assetPath(`/writing/${post.slug}`)} key={post.slug}>
                <span className="entry-meta">{post.category} · {post.published}</span>
                <h3>{post.title}<span aria-hidden="true">↗</span></h3>
                <p>{post.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="outside" className="field-chapter tone-green" data-sc-act="flow" data-chapter>
        <div className="journal-wrap">
          <div className="chapter-heading"><h2><span className="section-icon"><SiteIcon name="compass" /></span>Travel & stories</h2><a className="inline-link" href={assetPath('/field-notes')}>All stories <span aria-hidden="true">↗</span></a></div>
          <p className="chapter-intro">Trips, events, everyday moments, and the things I almost walked past.</p>
          <div className="memory-layout">
            <div className="contact-column">
              <div ref={stripRef} className="contact-strip" role="group" aria-label="Choose a field note" data-sc-parallax="-0.5">
                {fieldNotes.map((item, index) => (
                  <button type="button" className="contact-photo" key={item.slug} aria-pressed={selected === index} aria-label={`Preview ${item.title}`} onClick={() => chooseMemory(index)}>
                    {/* These sample images are bundled for static hosting. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={assetPath(photographs[item.art].src)} width="160" height="120" alt="" loading="lazy" />
                    <span>{['Morning', 'After dark', 'By the water'][index] ?? item.title}</span>
                  </button>
                ))}
                <span ref={bookmarkRef} className="moving-bookmark" aria-hidden="true" />
              </div>
              <p className="contact-instruction">A few moments<br />worth keeping.</p>
            </div>
            <div className="memory-print" data-selected-memory={note.slug}>
              <div className="print-mat">
                <div className="print-window">
                  {fieldNotes.map((item, index) => (
                    // All three stay loaded so choosing a memory never reveals an empty frame.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={item.slug} className={`memory-image memory-image-${index}`} src={assetPath(photographs[item.art].src)} width="1600" height={index === 1 ? 1067 : 2400} alt={selected === index ? photographs[item.art].alt : ''} aria-hidden={selected !== index} data-selected={selected === index} loading="lazy" />
                  ))}
                </div>
                <span className="print-label">{note.title}</span>
              </div>
            </div>
            <div className="memory-caption" aria-live="polite" aria-atomic="true">
              <span className="entry-meta">{note.date}</span>
              <h3>{note.title}</h3>
              <p>{note.body[0]}</p>
              <a className="inline-link memory-read-link" href={assetPath(`/field-notes/${note.slug}`)}>Read the story <span aria-hidden="true">↗</span></a>
              <p className="memory-credit">Sample story · Photograph by <a href={photo.source} target="_blank" rel="noreferrer">{photo.photographer} / Unsplash</a></p>
            </div>
          </div>
        </div>
      </section>

      <section id="workbench" className="workbench-chapter journal-wrap tone-yellow" data-sc-act="flow" data-chapter>
        <div className="chapter-heading"><h2><span className="section-icon"><SiteIcon name="code" /></span>Projects</h2><a className="inline-link" href={assetPath('/projects')}>All projects <span aria-hidden="true">↗</span></a></div>
        <p className="section-explainer">Small tools and side projects, with notes from behind the scenes.</p>
        <div className="workbench-list" data-sc-in data-sc-stagger="50">
          {projects.slice(0, 2).map(project => (
            <a href={assetPath(`/projects/${project.slug}`)} className="workbench-entry" key={project.slug}>
              <div><h3>{project.title}</h3><span className="entry-meta">{project.status}</span></div>
              <p>{project.copy}</p><span className="workbench-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section id="colophon" className="journal-colophon journal-wrap" data-sc-act="flow" data-chapter>
        <div className="colophon-rule" />
        <div className="colophon-grid">
          <h2 data-sc-cue="0.05" data-sc-kinetic="lines">Stay for one more page.</h2>
          <div className="closing-bookmark">
            <span className="entry-meta">Your place in the notebook</span>
            <a className="closing-story" href={assetPath(`/field-notes/${note.slug}`)}><span>{note.title}</span><span aria-hidden="true">↗</span></a>
            <p>A work in progress. The writing, project stories, and photographs here are samples for now.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
