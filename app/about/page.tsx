import type { Metadata } from 'next';
import { Portrait } from '../components/design-elements';
import { SocialLinks } from '../components/social-links';
import { SiteIcon } from '../components/site-icon';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Romil Lodaya, ML / AI engineer.',
};

const milestones = [
  { year: 'Education', title: 'Education & early work', text: 'Details to be added.' },
  { year: 'Experience', title: 'Research & engineering', text: 'Details to be added.' },
  { year: 'Current', title: 'Current work', text: 'Details to be added.' },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="page-shell about-page">
      <header className="about-introduction">
        <div>
          <p className="eyebrow">ABOUT</p>
          <h1>Romil Lodaya<span className="yellow">.</span></h1>
          <p className="about-lead">ML / AI engineer.</p>
          <p className="about-summary">I’m interested in machine learning and the engineering that makes it useful. Here I share projects, technical notes, and occasional photographs.</p>
          <SocialLinks />
        </div>
        <Portrait eager />
      </header>
      <section className="timeline-section" aria-labelledby="timeline-heading">
        <div className="section-heading">
          <h2 id="timeline-heading">Background<span className="yellow">.</span></h2>
          <span className="sample-label">Layout preview</span>
        </div>
        <p className="timeline-intro">Education and work history will be added here.</p>
        <ol className="timeline">
          {milestones.map(milestone => (
            <li key={milestone.year}>
              <span className="timeline-date">{milestone.year}</span>
              <div><h3>{milestone.title}</h3><p>{milestone.text}</p></div>
            </li>
          ))}
        </ol>
      </section>
      <section className="resume-section" id="resume">
        <div>
          <h2>Résumé</h2>
          <p>For current experience and education, visit my LinkedIn profile.</p>
        </div>
        <a className="primary-link" href="https://www.linkedin.com/in/romil-lodaya/" target="_blank" rel="noreferrer">
          <SiteIcon name="linkedin" />Visit LinkedIn <span>↗</span>
        </a>
      </section>
    </main>
  );
}
