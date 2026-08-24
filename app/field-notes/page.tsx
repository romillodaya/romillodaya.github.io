import type { Metadata } from 'next';
import Link from 'next/link';
import { PhotoArt } from '../components/photo-art';
import { fieldNotes } from '../content';

export const metadata: Metadata = {
  title: 'Field notes',
  description: 'A slower notebook for places, photographs, and small observations away from the keyboard.',
};

export default function FieldNotesIndex() {
  return (
    <main className="page-shell field-index">
      <header className="page-hero field-index-hero">
        <p className="section-kicker"><span>03</span> Away from the keyboard</p>
        <h1>Proof that I<br /><em>occasionally go outside.</em></h1>
        <p>Places, photographs, and fragments worth keeping. No algorithm, no posting schedule, no attempt to be comprehensive.</p>
      </header>

      <section className="field-archive" aria-label="Field note archive">
        {fieldNotes.map((note, index) => (
          <Link className={`field-index-card field-card-${index + 1}`} href={`/field-notes/${note.slug}`} key={note.slug}>
            <PhotoArt art={note.art} label={`Abstract placeholder artwork for ${note.title}`} />
            <div><span>FIELD NOTE · {note.number}</span><h2>{note.title}</h2><p>{note.subtitle}</p><small>{note.capture} · {note.date}</small></div>
          </Link>
        ))}
        <blockquote className="field-index-quote"><span>“</span><p>The world is full of obvious things which nobody by any chance ever observes.</p><small>Keep looking.</small></blockquote>
      </section>
      <p className="field-disclaimer">The current artwork and stories are styled placeholders — a frame ready for your real photographs and places.</p>
    </main>
  );
}
