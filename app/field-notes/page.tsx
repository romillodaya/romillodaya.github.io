import type { Metadata } from 'next';
import Link from 'next/link';
import { PhotoArt } from '../components/photo-art';
import { fieldNotes } from '../content';
export const metadata: Metadata = { title: 'Field notes', description: 'Trips, walks, events, and small observations along the way.' };
export default function FieldNotesIndex() {
  return <main id="main-content" className="page-shell"><header className="page-hero"><p className="section-kicker">Out & about</p><h1>Worth remembering.</h1><p>A notebook for trips, walks, events, and the small moments that stay with me.</p></header><section className="field-archive" aria-label="Field note archive">{fieldNotes.map(note => <Link className="field-index-card" href={`/field-notes/${note.slug}`} key={note.slug}><PhotoArt art={note.art} label={note.title} /><div><span className="entry-meta">Field note / {note.number}</span><h2>{note.title}</h2><p>{note.subtitle}</p><small>{note.date} <span aria-hidden="true">↗</span></small></div></Link>)}</section><p className="demo-note">Sample stories with photographs from Unsplash. Photo credits appear in each entry.</p></main>;
}
