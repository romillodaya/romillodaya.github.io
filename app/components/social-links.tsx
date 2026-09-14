import { SiteIcon } from './site-icon';
export function SocialLinks() {
  return <div className="social-links" aria-label="Find Romil online"><a href="https://github.com/romillodaya" target="_blank" rel="noreferrer"><SiteIcon name="github" />GitHub<span className="visually-hidden"> (opens in a new tab)</span></a><a href="https://www.linkedin.com/in/romil-lodaya/" target="_blank" rel="noreferrer"><SiteIcon name="linkedin" />LinkedIn<span className="visually-hidden"> (opens in a new tab)</span></a></div>;
}
