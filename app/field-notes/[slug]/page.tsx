import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PhotoArt, photographs } from '../../components/photo-art';
import { fieldNotes, getFieldNote } from '../../content';

export function generateStaticParams() {
  return fieldNotes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = getFieldNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.subtitle,
    openGraph: { title: note.title, description: note.subtitle, images: [] },
    twitter: { card: 'summary', title: note.title, description: note.subtitle, images: [] },
  };
}

export default async function FieldNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getFieldNote(slug);
  if (!note) notFound();
  const currentIndex = fieldNotes.findIndex((item) => item.slug === note.slug);
  const nextNote = fieldNotes[(currentIndex + 1) % fieldNotes.length];

  return (
    <main id="main-content" className="field-detail page-shell">
      <Link className="breadcrumb" href="/field-notes">← Field notebook</Link>
      <header><span>FIELD NOTE / {note.number} · SAMPLE STORY</span><h1>{note.title}</h1><p>{note.subtitle}</p></header>
      <PhotoArt art={note.art} label={note.title} />
      <p className="photo-credit">Sample photograph by <a href={photographs[note.art].source} target="_blank" rel="noreferrer">{photographs[note.art].photographer} / Unsplash ↗</a></p>
      <div className="field-story">
        <aside><span>Field note {note.number}</span><small>{note.date}</small></aside>
        <div>{note.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
      <nav className="next-read" aria-label="Continue reading field notes"><small>Keep wandering</small><Link href={`/field-notes/${nextNote.slug}`}><span>{nextNote.title}</span><i>→</i></Link></nav>
    </main>
  );
}
