import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer id="contact">
      <div className="footer-inner">
        <p className="footer-kicker">You made it to the footer. Impressive stamina.</p>
        <h2>Have a strange idea?<br /><span>Let&apos;s make it stranger.</span></h2>
        <a className="big-email" href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
        <div className="footer-bottom">
          <Link className="wordmark" href="/"><span className="prompt">~/</span>romil<span className="cursor" /></Link>
          <p>Designed with curiosity. Built with too many browser tabs.</p>
          <div><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a><Link href="/writing">RSS</Link><Link href="/">Back home ↑</Link></div>
        </div>
      </div>
    </footer>
  );
}
