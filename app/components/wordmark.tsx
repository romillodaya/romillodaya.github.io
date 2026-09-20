import { assetPath } from './photo-art';

export function Wordmark() {
  return (
    <a className="wordmark" href={assetPath('/')} aria-label="Romil Lodaya, home">
      <span className="wordmark-given">Romil</span>{' '}
      <span className="wordmark-family">
        Lodaya
        <svg className="wordmark-flourish" viewBox="0 0 100 12" aria-hidden="true">
          <path pathLength="1" d="M3 8C25 2 61 2 96 5M24 10C43 6 65 6 81 7" />
        </svg>
      </span>
    </a>
  );
}
