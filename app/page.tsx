import Link from 'next/link';
import { projects, writing, fieldNotes } from './content';
import { SocialLinks } from './components/social-links';
import { SiteIcon } from './components/site-icon';
import { IdeaNetwork } from './components/idea-network';
import { Scribble, WaveDivider } from './components/design-elements';
import { PhotoArt } from './components/photo-art';
export default function Home() {
 return <main id="main-content" className="home-page">
  <div className="page-shell">
   <section className="portfolio-hero" aria-labelledby="hello">
    <div className="hero-copy"><p className="eyebrow">ML / AI ENGINEER</p><h1 id="hello">Hi, I’m <span>Romil.<Scribble/></span></h1><p className="hero-lead">Machine learning.<br/>From ideas to working systems.</p><p className="hero-description">Projects, experiments, and notes on what I’m learning and building.</p><div className="hero-actions"><Link className="primary-link" href="/projects">View projects <SiteIcon name="arrow"/></Link><Link className="quiet-link" href="/about">About me <span>↗</span></Link></div><SocialLinks/></div>
    <IdeaNetwork/>
   </section>
   <section className="work-section" aria-labelledby="selected-work"><div className="section-heading"><div><p className="eyebrow">PROJECTS</p><h2 id="selected-work">Selected work<span className="yellow">.</span></h2></div><Link className="quiet-link" href="/projects">All projects <span>↗</span></Link></div><div className="work-grid">{projects.slice(0,2).map((project,i) => <Link className={`work-card work-${i}`} href={`/projects/${project.slug}`} key={project.slug}><div className="work-card-top"><span className="project-mark"><SiteIcon name={i===0?'code':'compass'}/></span><span className="sample-label">Sample project</span><span className="card-arrow">↗</span></div><h3>{project.title}</h3><p>{project.copy}</p><div className="tag-list">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></Link>)}</div><p className="content-note">Sample projects. Portfolio updates coming soon.</p></section>
   <WaveDivider/>
   <section className="home-writing" aria-labelledby="latest-writing"><div className="section-heading"><div><p className="eyebrow">WRITING</p><h2 id="latest-writing">Notes & articles<span className="red">.</span></h2></div><Link className="quiet-link" href="/writing">All writing <span>↗</span></Link></div><div className="writing-spread"><div>{writing.slice(0,3).map(post=><article className="home-post" key={post.slug}><div className="post-meta">{post.category}<span>·</span>{post.readTime}<span className="sample-label">Sample essay</span></div><h3><Link href={`/writing/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="read-link" href={`/writing/${post.slug}`}>Read article <span>→</span></Link></article>)}</div><aside className="notebook-aside"><div className="aside-rule"/><h3>Explore</h3><ul className="arrow-list"><li><Link href="/projects">Projects & experiments</Link></li><li><Link href="/writing">Writing</Link></li><li><Link href="/playground">Browser tools</Link></li><li><Link href="/field-notes">Photos & field notes</Link></li></ul><span className="aside-spark" aria-hidden="true">✳</span></aside></div></section>
   <section className="playground-callout"><div className="playground-icon" aria-hidden="true">↗<span>✳</span></div><div><p className="eyebrow">PLAYGROUND</p><h2>Tools & experiments</h2><p>Interactive tools that run in your browser.</p></div><Link className="quiet-link" href="/playground">Open playground <span>→</span></Link></section>
   <section className="home-photos" aria-labelledby="offscreen-title"><div className="section-heading"><div><p className="eyebrow">FIELD NOTES</p><h2 id="offscreen-title">Photos & places<span className="mint">.</span></h2></div><Link className="quiet-link" href="/field-notes">Field notes <span>↗</span></Link></div><div className="photo-grid">{fieldNotes.map(note=><Link className="photo-card" href={`/field-notes/${note.slug}`} key={note.slug}><PhotoArt art={note.art} label={note.title}/><h3>{note.title}<span>↗</span></h3></Link>)}</div><p className="content-note">Sample photographs from Unsplash. Credits in each entry.</p></section>
  </div>
 </main>;
}
