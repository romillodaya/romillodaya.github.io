import type { Project } from '../content';

export function ProjectVisual({ visual, className = '' }: { visual: Project['visual']; className?: string }) {
  return (
    <div className={`project-visual ${visual} ${className}`} aria-hidden="true">
      {visual === 'papertrail' && (
        <><span className="paper paper-a">why?</span><span className="paper paper-b">because →</span><span className="paper paper-c">aha!</span><i className="thread thread-a" /><i className="thread thread-b" /></>
      )}
      {visual === 'window-seat' && (
        <><div className="mini-map"><i /><i /><i /><span>12.9716° N</span></div><div className="mini-photo">6:14<small>somewhere good</small></div></>
      )}
      {visual === 'need-this' && (
        <div className="decision-box"><span>temptation detected</span><strong>Do you need it?</strong><div><b>hmm…</b><b>absolutely not</b></div></div>
      )}
    </div>
  );
}
