import { assetPath } from './photo-art';

export function Scribble({ className = '' }: { className?: string }) {
  return <svg className={`scribble ${className}`} viewBox="0 0 270 17" preserveAspectRatio="none" aria-hidden="true"><path d="M3 12C62 0 162 1 267 9M10 15C87 6 170 8 243 13"/></svg>;
}
export function WaveDivider() {
  return <div className="wave-divider" aria-hidden="true"><svg viewBox="0 0 1100 80" preserveAspectRatio="none"><path d="M0 49C140 49 135 12 260 23S421 80 563 47 699 12 825 32 1001 67 1100 23"/><path d="M0 59C140 59 135 22 260 33S421 90 563 57 699 22 825 42 1001 77 1100 33"/></svg><span>✳</span></div>;
}
export function Portrait({ eager = false }: { eager?: boolean }) {
  return (
    <div className="portrait-illustration">
      {/* A plain image preserves the transparent artwork on both static export and preview. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetPath('/images/romil-portrait.png')}
        alt="Illustrated portrait of Romil Lodaya with books, a laptop, and a coffee mug"
        width={1254}
        height={1254}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  );
}
