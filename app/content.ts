import { mlWriting } from './content/writing';
import { mlProjects } from './content/projects';
import type { ContentBlock } from './content/blocks';

export type WritingPost = {
  example?: boolean;
  number: string;
  slug: string;
  title: string;
  excerpt: string;
  meta: string;
  category: string;
  readTime: string;
  published: string;
  accent: 'violet' | 'orange' | 'mint' | 'yellow';
  opening: string;
  sections: Array<{ id?: string; heading: string; paragraphs: string[]; note?: string; blocks?: ContentBlock[] }>;
  summary?: string[];
  sources?: Array<{ title: string; href: string }>;
  relatedProject?: string;
};

const legacyWriting: WritingPost[] = [
  {
    number: '01',
    slug: 'confused-productively',
    title: 'Learning difficult concepts',
    excerpt: 'How specific questions and small experiments help clarify unfamiliar ideas.',
    meta: 'Learning · 7 min',
    category: 'Learning',
    readTime: '7 min read',
    published: 'August 2026',
    accent: 'violet',
    opening: 'When a concept is unclear, identifying the gap in your understanding is a useful first step.',
    sections: [
      {
        heading: 'Identify the question',
        paragraphs: [
          '“I do not understand this” is too large to be useful. Try shrinking it: which noun feels slippery? Which step surprised you? What did you expect to happen instead?',
          'A precise question gives you something concrete to investigate, even before you know the answer.',
        ],
        note: 'Write down what you expected and what happened instead.',
      },
      {
        heading: 'Build a small example',
        paragraphs: [
          'When I am learning a system, I build the smallest example that shows how its main parts work together. It often reveals assumptions I had not checked.',
          'A small example lets you test your understanding before investing in a larger implementation.',
        ],
      },
      {
        heading: 'Keep useful notes',
        paragraphs: [
          'Record the assumption that was wrong and the explanation that resolved it. These notes are useful when a similar problem comes up later.',
          'A short note with the question, an example, and the explanation is enough.',
        ],
      },
    ],
  },
  {
    number: '02',
    slug: 'side-project-systems-lesson',
    title: 'Reliability in a small event system',
    excerpt: 'Handling retries, duplicate events, and timing in a small distributed system.',
    meta: 'Engineering · 11 min',
    category: 'Engineering',
    readTime: '11 min read',
    published: 'July 2026',
    accent: 'orange',
    opening: 'The first version accepted an event and displayed it in another service. Handling network failures required more explicit decisions about delivery and ordering.',
    sections: [
      {
        heading: 'Test failure cases',
        paragraphs: [
          'Local tests delivered events once and in order. Network failures introduced duplicates, delays, missing acknowledgements, and differences between system clocks.',
          'The interesting shift was realizing that reliability was not one feature. It was a collection of explicit decisions about what failure means.',
        ],
      },
      {
        heading: 'Retries are a product decision',
        paragraphs: [
          'A retry policy affects latency, service load, and duplicate processing. It needs explicit limits and a way to identify repeated operations.',
          'I ended up with idempotency keys, bounded exponential backoff, and a small dead-letter view that made failure visible instead of mysterious.',
        ],
        note: 'If an operation can be retried, decide what “the same operation” means before production decides for you.',
      },
      {
        heading: 'Keep the scope manageable',
        paragraphs: [
          'A small project provides a manageable way to study reliability and test how a system behaves under failure.',
          'The result was a working prototype and a clearer understanding of event ordering and delivery guarantees.',
        ],
      },
    ],
  },
  {
    number: '03',
    slug: 'rebuilding-digital-garden',
    title: 'Rebuilding a personal website',
    excerpt: 'Organizing projects, writing, and photographs into a simpler personal site.',
    meta: 'Web · 5 min',
    category: 'Web',
    readTime: '5 min read',
    published: 'June 2026',
    accent: 'mint',
    opening: 'A personal website should make work easy to find and remain straightforward to update.',
    sections: [
      {
        heading: 'Start with the content',
        paragraphs: [
          'The homepage introduces the work and provides routes into projects, writing, tools, and photographs.',
          'Project notes and technical explanations provide more context than a list of skills.',
        ],
      },
      {
        heading: 'Keep navigation simple',
        paragraphs: [
          'Writing, projects, and field notes have separate archive pages. The homepage includes a selection from each.',
          'Clear labels help readers find what they need.',
        ],
        note: 'Use animation where it helps explain an interaction.',
      },
      {
        heading: 'Include personal details',
        paragraphs: [
          'Specific project notes, photographs, and observations give readers a better sense of the person behind the work.',
        ],
      },
    ],
  },
  {
    number: '04',
    slug: 'idea-deserves-a-weekend',
    title: 'Choosing a weekend project',
    excerpt: 'Three questions for choosing a useful, manageable project.',
    meta: 'Process · 4 min',
    category: 'Process',
    readTime: '4 min read',
    published: 'May 2026',
    accent: 'yellow',
    opening: 'When time is limited, a few questions can help narrow down which project to start.',
    sections: [
      {
        heading: 'Will I learn something specific?',
        paragraphs: [
          '“Learn AI” is too broad for a weekend. Testing semantic search on a small collection of notes gives the project a specific question.',
        ],
      },
      {
        heading: 'Can I finish a first version?',
        paragraphs: [
          'A small first version lets you test the central idea before adding supporting features.',
          'Start with a command-line script, a spreadsheet, or a simple page if that is enough to test the idea.',
        ],
        note: 'Choose one question and one way to test it.',
      },
      {
        heading: 'Would I use it on Monday?',
        paragraphs: [
          'It helps to identify who would use the result and what problem it would solve, even if you are the only user.',
        ],
      },
    ],
  },
];

export type Project = {
  example?: boolean;
  index: string;
  slug: string;
  status: string;
  title: string;
  copy: string;
  tags: string[];
  visual?: 'papertrail' | 'window-seat' | 'need-this';
  thumbnail?: { src: string; alt: string; caption?: string };
  category?: string;
  repository?: { href: string; placeholder: boolean };
  evaluation?: string[];
  relatedPost?: string;
  year: string;
  role: string;
  challenge: string;
  approach: string[];
  takeaway: string;
};

const legacyProjects: Project[] = [
  {
    index: 'P-01', slug: 'papertrail', status: 'Ongoing', title: 'Papertrail',
    copy: 'A tool for collecting reading highlights, connecting related notes, and finding them again.',
    tags: ['next.js', 'local-first', 'search'], visual: 'papertrail', year: '2026', role: 'Design & engineering',
    challenge: 'Reading highlights often become difficult to find as a collection grows. This concept focuses on retrieval and connections between notes.',
    approach: [
      'Each highlight can link to related notes. Connections can be added directly or suggested from reading history.',
      'The interface stays intentionally quiet: one reading queue, one trail view, and search that explains why a result appeared.',
    ],
    takeaway: 'The most useful knowledge tool may be the one that asks for less organization, not more.',
  },
  {
    index: 'P-02', slug: 'window-seat', status: 'Prototype', title: 'Window Seat',
    copy: 'A personal photo map that groups photographs and short notes by location.',
    tags: ['maps', 'photography', 'pwa'], visual: 'window-seat', year: '2026', role: 'Concept, photos & code',
    challenge: 'Photo libraries remember timestamps and coordinates. They rarely remember why a corner, sound, or accidental detour mattered.',
    approach: [
      'Each place becomes a compact field note: a few frames, one sentence, an approximate location, and optional scraps like a receipt or sound.',
      'The map reveals slowly. There are no streaks, social metrics, or pressure to document a trip while it is still happening.',
    ],
    takeaway: 'A memory tool should make you want to remember, not make you feel behind.',
  },
  {
    index: 'P-03', slug: 'do-i-need-this', status: 'Experiment', title: 'Do I Need This?',
    copy: 'A tool that uses three questions and a waiting period to help review a purchase.',
    tags: ['experiment', 'behavior', 'weekend'], visual: 'need-this', year: '2025', role: 'Design & engineering',
    challenge: 'Wish lists remove the urgency of checkout, but they still feel like shopping. I wanted a tool designed around changing your mind.',
    approach: [
      'Save a product link and answer three questions about the purchase. Review the item and your answers after a waiting period.',
      'The goal is to help people make a more considered purchase decision.',
    ],
    takeaway: 'A short pause can help people reconsider an unnecessary purchase.',
  },
];

export type FieldNote = {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  art: 'mountain-art' | 'street-art' | 'coast-art';
  capture: string;
  date: string;
  body: string[];
};

export const fieldNotes: FieldNote[] = [
  {
    number: '001', slug: 'before-breakfast', title: 'Morning in the mountains', subtitle: 'Early light over the mountain ridges.',
    art: 'mountain-art', capture: '35mm · 06:14', date: 'A quiet morning, 2026',
    body: ['We left early and stopped for tea as the sun came over the ridge.', 'We stayed for a second glass. There was nowhere we needed to be, and for once that felt like enough.'],
  },
  {
    number: '002', slug: 'city-in-three-colours', title: 'A city in three colours', subtitle: 'Blue hour, sodium orange, one stubborn green sign.',
    art: 'street-art', capture: 'digital · after dark', date: 'An evening walk, 2026',
    body: ['At night, window lights and passing traffic change how familiar buildings look.', 'I put the camera away for the last stretch and followed the sounds instead. A closing shutter, a passing train, someone laughing on a balcony.'],
  },
  {
    number: '003', slug: 'blue-ten-minutes', title: 'The blue ten minutes', subtitle: 'The coast just after sunset.',
    art: 'coast-art', capture: 'digital · 19:42', date: 'Near the water, 2026',
    body: ['For a few minutes after sunset, the sea and sky looked almost the same shade of blue.', 'This photograph records that brief change in the light.'],
  },
];

export const writing: WritingPost[] = mlWriting;
export const projects: Project[] = mlProjects;
// Keep previously shared URLs working without listing the old demos in the archives.
export const allWriting = [...writing, ...legacyWriting.map(post => ({ ...post, example: true }))];
export const allProjects = [...projects, ...legacyProjects.map(project => ({ ...project, example: true }))];

export function getWritingPost(slug: string) { return allWriting.find((post) => post.slug === slug); }
export function getProject(slug: string) { return allProjects.find((project) => project.slug === slug); }
export function getFieldNote(slug: string) { return fieldNotes.find((note) => note.slug === slug); }

for (const post of allWriting) {
  const words = [post.opening, ...post.sections.flatMap(section => [section.heading, ...section.paragraphs, section.note ?? '', ...(section.blocks ?? []).map(block => {
    if (block.type === 'paragraph' || block.type === 'callout') return block.text;
    if (block.type === 'list') return block.items.join(' ');
    if (block.type === 'code') return block.code;
    if (block.type === 'equation') return block.expression + ' ' + block.explanation;
    return block.caption;
  })])].join(' ').trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  post.readTime = `${minutes} min read`;
  post.meta = `${post.category} · ${minutes} min`;
}
