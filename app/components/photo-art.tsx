import type { FieldNote } from '../content';
export const photographs = {
  'mountain-art': { src: '/photos/mountain-morning.jpg', alt: 'Snow-covered mountain peak above evergreen forest in morning light', photographer: 'Daniil Silantev', source: 'https://unsplash.com/photos/a-majestic-snow-capped-mountain-peak-at-sunrise-fJC5WnXhenA' },
  'street-art': { src: '/photos/city-blue-hour.jpg', alt: 'Illuminated city towers beneath a deep blue evening sky', photographer: 'Dominik kielbasa', source: 'https://unsplash.com/photos/city-skyline-under-blue-sky-during-night-time-jJ_r3Kan4Yw' },
  'coast-art': { src: '/photos/coast-evening.jpg', alt: 'Rocky coastal cliff beside calm water at dusk', photographer: 'kamran norollahi', source: 'https://unsplash.com/photos/a-long-exposure-photo-of-the-ocean-at-night-s2v8SqaKsFg' },
};
export function assetPath(path: string) { return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`; }

export function PhotoArt({ art, label }: { art: FieldNote['art']; label: string }) {
  const photo = photographs[art];
  // Plain images keep the same checked files on Next.js export and Sites.
  /* eslint-disable @next/next/no-img-element */
  return (
    <figure className={`photo-art ${art}`} aria-label={label}>
      <img src={assetPath(photo.src)} alt={photo.alt} width="1600" height={art === 'street-art' ? 1067 : 2400} loading="lazy" decoding="async" />
    </figure>
  );
}
