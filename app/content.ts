export type WritingPost = {
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
  sections: Array<{ heading: string; paragraphs: string[]; note?: string }>;
};

export const writing: WritingPost[] = [
  {
    number: '01',
    slug: 'confused-productively',
    title: 'A tiny guide to being confused productively',
    excerpt: 'A field manual for learning hard things without pretending the messy middle does not exist.',
    meta: 'Learning · 7 min',
    category: 'Learning',
    readTime: '7 min read',
    published: 'August 2026',
    accent: 'violet',
    opening: 'Confusion is not a bug in learning. It is the part where your old model has stopped working and a better one has not finished compiling yet.',
    sections: [
      {
        heading: 'Name the fog',
        paragraphs: [
          '“I do not understand this” is too large to be useful. Try shrinking it: which noun feels slippery? Which step surprised you? What did you expect to happen instead?',
          'A precise question turns confusion from a weather system into a small, inspectable object. You may not have the answer yet, but you finally have somewhere to point the flashlight.',
        ],
        note: 'Good confusion produces a better question. Bad confusion just produces twelve more browser tabs.',
      },
      {
        heading: 'Build the embarrassing version',
        paragraphs: [
          'When I am learning a system, I make the smallest version that exposes its moving parts. It is usually ugly, missing edge cases, and extremely good at revealing which parts I was hand-waving.',
          'The point is not to ship it. The point is to create feedback faster than your imagination can create confidence.',
        ],
      },
      {
        heading: 'Leave a trail for tomorrow-you',
        paragraphs: [
          'Write down the wrong assumption, the clue that changed your mind, and the explanation that finally clicked. That trail becomes a map the next time you wander into similar territory.',
          'You do not need a perfect knowledge system. A plain note titled “things that fooled me” is surprisingly powerful.',
        ],
      },
    ],
  },
  {
    number: '02',
    slug: 'side-project-systems-lesson',
    title: 'The side project that became a systems lesson',
    excerpt: 'I wanted a weekend toy. I accidentally got queues, retries, clocks, and several new opinions.',
    meta: 'Engineering · 11 min',
    category: 'Engineering',
    readTime: '11 min read',
    published: 'July 2026',
    accent: 'orange',
    opening: 'The first version had one job: accept a tiny event and show it somewhere else. Then the network did what networks do, and my pleasant weekend project developed a syllabus.',
    sections: [
      {
        heading: 'The happy path was suspiciously happy',
        paragraphs: [
          'Locally, every event arrived once, in order, and immediately. Reality offered duplicates, delays, missing acknowledgements, and clocks that politely disagreed with each other.',
          'The interesting shift was realizing that reliability was not one feature. It was a collection of explicit decisions about what failure means.',
        ],
      },
      {
        heading: 'Retries are a product decision',
        paragraphs: [
          'A retry policy changes how long a user waits, how much load a service absorbs, and how duplicate work is handled. “Just retry it” is architecture wearing a fake moustache.',
          'I ended up with idempotency keys, bounded exponential backoff, and a small dead-letter view that made failure visible instead of mysterious.',
        ],
        note: 'If an operation can be retried, decide what “the same operation” means before production decides for you.',
      },
      {
        heading: 'Small projects are excellent laboratories',
        paragraphs: [
          'A side project has no obligation to become a company. Sometimes its best outcome is giving you a safe place to discover the sharp edges of an idea.',
          'I did eventually ship the toy. More importantly, I left with a much less casual relationship with time, ordering, and the word “exactly”.',
        ],
      },
    ],
  },
  {
    number: '03',
    slug: 'rebuilding-digital-garden',
    title: 'Rebuilding my digital garden (again)',
    excerpt: 'What I kept, what I deleted, and why a personal website should feel a little alive.',
    meta: 'Web · 5 min',
    category: 'Web',
    readTime: '5 min read',
    published: 'June 2026',
    accent: 'mint',
    opening: 'Personal sites become strange when they are designed for an imaginary hiring committee instead of the person who has to keep returning to them.',
    sections: [
      {
        heading: 'A homepage is a promise',
        paragraphs: [
          'It tells visitors what kind of place they have entered and what is worth exploring. Mine needed to promise curiosity, useful writing, unfinished experiments, and a little room for things that do not belong on a résumé.',
          'That meant fewer generic skill bars and more evidence of how I notice, make, and explain things.',
        ],
      },
      {
        heading: 'Structure should disappear',
        paragraphs: [
          'Writing, projects, and field notes now have their own homes. The homepage only curates a few doors into each collection instead of asking one endless page to carry everything.',
          'Good navigation should feel obvious after one glance and almost invisible after the second.',
        ],
        note: 'A digital garden can be playful without making every leaf move when you hover over it.',
      },
      {
        heading: 'Leave some fingerprints',
        paragraphs: [
          'The terminal card, uneven notes, and tiny asides are not features. They are texture. They make the site feel maintained by a particular human instead of generated from a portfolio checklist.',
        ],
      },
    ],
  },
  {
    number: '04',
    slug: 'idea-deserves-a-weekend',
    title: 'Does this idea deserve a weekend?',
    excerpt: 'A deeply unscientific test for choosing which rabbit hole to disappear into next.',
    meta: 'Process · 4 min',
    category: 'Process',
    readTime: '4 min read',
    published: 'May 2026',
    accent: 'yellow',
    opening: 'The list of things I could build grows much faster than the number of Saturdays. So I use three questions to decide which idea gets a tiny piece of my life.',
    sections: [
      {
        heading: 'Will I learn something specific?',
        paragraphs: [
          '“Learn AI” is fog. “Understand how semantic search behaves on my own notes” is a useful destination. A good weekend project has a question hiding inside it.',
        ],
      },
      {
        heading: 'Can the first version be slightly ridiculous?',
        paragraphs: [
          'Ridiculous versions are smaller and more honest. They let you test the interesting mechanism without constructing a startup-shaped building around it.',
          'If the idea is still interesting as a command-line script, a spreadsheet, or a page with one button, it probably has a pulse.',
        ],
        note: 'The ideal scope is small enough to finish and weird enough to remember.',
      },
      {
        heading: 'Would I use it on Monday?',
        paragraphs: [
          'Not every project needs users, but it helps to know who will notice when it works. Often that user is simply next-week me, carrying the same small annoyance.',
        ],
      },
    ],
  },
];

export type Project = {
  index: string;
  slug: string;
  status: string;
  title: string;
  copy: string;
  tags: string[];
  visual: 'papertrail' | 'window-seat' | 'need-this';
  year: string;
  role: string;
  challenge: string;
  approach: string[];
  takeaway: string;
};

export const projects: Project[] = [
  {
    index: 'P—01', slug: 'papertrail', status: 'Ongoing', title: 'Papertrail',
    copy: 'A quiet tool that turns reading highlights into a trail of connected ideas — without becoming another inbox to maintain.',
    tags: ['next.js', 'local-first', 'search'], visual: 'papertrail', year: '2026', role: 'Design & engineering',
    challenge: 'Highlights are easy to collect and hard to encounter again. Most tools optimize capture, then leave reflection as homework.',
    approach: [
      'Papertrail treats every highlight as a small waypoint. Links can be explicit, suggested, or created simply by revisiting two ideas together.',
      'The interface stays intentionally quiet: one reading queue, one trail view, and search that explains why a result appeared.',
    ],
    takeaway: 'The most useful knowledge tool may be the one that asks for less organization, not more.',
  },
  {
    index: 'P—02', slug: 'window-seat', status: 'Tiny & useful', title: 'Window Seat',
    copy: 'A personal photo map for remembering a place by its textures, sounds, wrong turns, and excellent cups of chai.',
    tags: ['maps', 'photography', 'pwa'], visual: 'window-seat', year: '2026', role: 'Concept, photos & code',
    challenge: 'Photo libraries remember timestamps and coordinates. They rarely remember why a corner, sound, or accidental detour mattered.',
    approach: [
      'Each place becomes a compact field note: a few frames, one sentence, an approximate location, and optional scraps like a receipt or sound.',
      'The map reveals slowly. There are no streaks, social metrics, or pressure to document a trip while it is still happening.',
    ],
    takeaway: 'A memory tool should make you want to remember, not make you feel behind.',
  },
  {
    index: 'P—03', slug: 'do-i-need-this', status: 'Mildly ridiculous', title: 'Do I Need This?',
    copy: 'A three-question speed bump between seeing a shiny object and adding it to cart. Annoyingly effective.',
    tags: ['experiment', 'behavior', 'weekend'], visual: 'need-this', year: '2025', role: 'Questionable product decisions',
    challenge: 'Wish lists remove the urgency of checkout, but they still feel like shopping. I wanted a tool designed around changing your mind.',
    approach: [
      'Paste a product link and answer three deliberately inconvenient questions. The tool returns the item after a cooling-off period with your own reasoning attached.',
      'Nothing is gamified. Success is occasionally forgetting the product existed.',
    ],
    takeaway: 'Sometimes the kindest interface is a little bit annoying on purpose.',
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
    number: '001', slug: 'before-breakfast', title: 'Somewhere before breakfast', subtitle: 'Cold air, warm light, no notifications.',
    art: 'mountain-art', capture: '35mm · 06:14', date: 'A quiet morning, 2026',
    body: ['We left before the road had decided to wake up. The first tea stall was still stacking glasses when the light slipped over the ridge.', 'This is a placeholder field note for a real photo essay: a small observation, a few frames, and enough empty space to let the place breathe.'],
  },
  {
    number: '002', slug: 'city-in-three-colours', title: 'A city in three colours', subtitle: 'Blue hour, sodium orange, one stubborn green sign.',
    art: 'street-art', capture: 'digital · after dark', date: 'An evening walk, 2026',
    body: ['Cities become diagrams at night. Windows turn into pixels, traffic draws temporary lines, and familiar buildings lose their edges.', 'Replace this study with a neighbourhood you know by sound, a night walk, or the frames that never quite fit into a social post.'],
  },
  {
    number: '003', slug: 'blue-ten-minutes', title: 'The blue ten minutes', subtitle: 'The brief negotiation between day and night.',
    art: 'coast-art', capture: 'digital · 19:42', date: 'Near the water, 2026',
    body: ['There are ten minutes when the sea and sky borrow the same colour. Cameras exaggerate it; memory exaggerates it more.', 'A field note does not need to be a travel guide. It can simply preserve the quality of a particular patch of time.'],
  },
];

export function getWritingPost(slug: string) { return writing.find((post) => post.slug === slug); }
export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
export function getFieldNote(slug: string) { return fieldNotes.find((note) => note.slug === slug); }
