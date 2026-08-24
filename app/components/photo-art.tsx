import type { FieldNote } from '../content';

export function PhotoArt({ art, label }: { art: FieldNote['art']; label: string }) {
  return (
    <div className={`photo-art ${art}`} role="img" aria-label={label}>
      {art === 'mountain-art' && <><span className="sun" /><span className="ridge ridge-back" /><span className="ridge ridge-front" /></>}
      {art === 'street-art' && <><span className="building one" /><span className="building two" /><span className="building three" /></>}
      {art === 'coast-art' && <><span className="horizon" /><span className="moon" /></>}
      <i>{art === 'mountain-art' ? '35mm' : art === 'street-art' ? 'after dark' : '19:42'}</i>
    </div>
  );
}
