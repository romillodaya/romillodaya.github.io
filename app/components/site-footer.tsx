import { SocialLinks } from './social-links';
import { assetPath } from './photo-art';
// Full document navigation releases the unmodified Scroll Craft engine, which has no unmount API.
export function SiteFooter() {
  return <footer className="site-footer"><div><a className="wordmark" href={assetPath('/')}>Romil Lodaya<span className="blue">.</span></a><p>A little space to think out loud.</p><SocialLinks /></div><nav aria-label="Footer navigation"><a href={assetPath('/about')}>About</a><a href={assetPath('/writing')}>Writing</a><a href="#top">Back to top ↑</a></nav><span className="footer-colophon">© {new Date().getFullYear()} Romil Lodaya</span></footer>;
}
