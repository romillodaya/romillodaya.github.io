import { FooterCompanion } from './footer-companion';
import { SocialLinks } from './social-links';
import { SiteIcon } from './site-icon';
import { assetPath } from './photo-art';
import { Wordmark } from './wordmark';
export function SiteFooter() {
 return <footer className="footer-landscape"><svg className="footer-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 55C190 92 210 10 460 38S750 110 980 48 1260 17 1440 42V90H0Z"/></svg><div className="site-footer"><FooterCompanion/><div><Wordmark/><h2>Get in touch.</h2><p>Find me on GitHub, LinkedIn, or Google Scholar.</p><a className="footer-contact" href="mailto:hello@romillodaya.com"><SiteIcon name="mail" width="22" height="22"/><span>hello@romillodaya.com</span></a></div><div className="footer-right"><SocialLinks/><nav aria-label="Footer navigation"><a href={assetPath('/about#resume')}>Résumé</a><a href={assetPath('/field-notes')}>Field notes</a><a href="https://github.com/romillodaya/romillodaya.github.io" target="_blank" rel="noreferrer">Source ↗</a></nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Romil Lodaya</span><a href="#top">Back to top ↑</a></div></div></footer>;
}
