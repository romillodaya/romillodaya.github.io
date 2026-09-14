# Personal color edition

This is a user-directed revision of the existing Romil notebook, not a new independently fingerprinted site. The original brief, score and verification remain as historical evidence. This document supersedes their opening design and palette descriptions.

## Brief and design

User feedback: the opening felt pale and did not introduce Romil clearly; content categories took too long to understand. The user requested restrained red, blue, green and yellow inspired by macOS details and Monokai Pro, a scroll-based 3D item, clearer sections inspired by [Tania Rascia](https://www.taniarascia.com/), and selective icons. GitHub `romillodaya` and LinkedIn `romil-lodaya` were supplied. No professional biography or technology stack was supplied; the introduction stays general and editable.

Tania's page was read directly. Its explicit Latest / All Posts, Shelves, Series and Projects organization informed the use of plain section headings and direct archive links. Its copy, professional history, shelves and series were not copied.

Keep the chaptered editorial grammar and standard navigation. The sequence now opens with “Hey, I’m Romil Lodaya.”, a plain description of the website, social links and three useful content links. A short section menu identifies Writing & notes, Travel & stories and Projects before the reader reaches them. Latest writing, Travel & stories and Projects repeat those names with brief descriptions and meaningful icons.

The palette uses warm neutral reading surfaces, muted red and green section grounds, yellow project details, and blue secondary accents. Dark mode uses a Monokai-inspired charcoal ground with brighter accents. Decorative dots use brighter colors; small readable labels use darker colors in light mode. Color accompanies labels and icons, never replacing them.

## Depth, journey and score

The introduction's real content cards occupy separate planes using CSS perspective, translateZ and rotations. Normal scrolling changes their angle and separation. Each card is a real link into existing content. Keyboard focus raises its stacking order; reduced motion resolves the stack without transforms. The reused photograph is decorative inside a labelled story link. No WebGL, new dependency, generated art, video, or scroll pinning was introduced.

| Beat | Intent | Device | Evidence to read |
| --- | --- | --- | --- |
| Meet Romil | Recognition and welcome | Flow, custom 3D content stack | Hero light/dark and scrolled screenshots |
| Latest writing | Interest and clarity | Ruled reveal, stable text | Desktop and phone contact sheets |
| Travel & stories | Discovery | Existing photo reveal, parallax, selection bookmark | Three selected states and reduced phone |
| Projects | Curiosity | Entry reveal, two distinct project cards | Contact sheets |
| One more page | Invitation | Kinetic heading, selected story destination | Closing screenshot |

The card stack is the new opening signature requested by the user. The large photo chapter remains the main media moment. On phones the extended introduction is naturally taller than the photographic chapter; the original “photo chapter is always the largest” plan no longer describes this revision. No empty scrolling was added to meet a quota.

Visual assessment, not human user testing: the opening now reads as a person's website and gives recognizable destinations immediately. The sequence reads welcome → interest → discovery → curiosity → invitation. Compared with the previous revision, project blocks now communicate that each item is a separate thing to explore. Text retains its own space outside photos.

## Verification

Final export tested at http://localhost:4500/. Lint, Next.js static export and Vinext production build passed. The unchanged Scroll Craft engine remains separate from all bespoke behavior.

Evidence is in `evidence/color-edition/`: desktop, phone (390×844), compact phone (360×640), reduced-motion desktop, and interaction screenshots/reports. The functional report records route, keyboard, social destination, photo selection, theme, motion, no-JavaScript fallback and contrast results. Numerical colored-label checks cover both themes against their actual solid card backgrounds.

During review, screen-reader-only new-tab labels were unexpectedly visible. A dedicated visually-hidden rule corrected that; final screenshots were retaken. The redundant subtitle partly hidden by the stacked writing card was removed. The cards' titles and destinations remain visible. Framework navigation cancellations and deliberately disabled scripts are reported separately from real loading failures.

Physical phones, Safari, Firefox and the ownership/content of the supplied external social profiles were not verified. Links use the supplied usernames. Existing entries and travel imagery remain labelled samples. No publication, commit or push was performed.

## Editing

- `app/components/journal-experience.tsx`: introduction, card links, section navigation and descriptions.
- `app/components/social-links.tsx`: supplied profile destinations.
- `app/components/site-icon.tsx`: small accessible decorative UI icons; visible link labels carry meaning.
- `app/globals.css`: palette tokens, light/dark surfaces, responsive compositions and reduced-motion rules.

Technology logos can accompany real project technologies when those are supplied; Python and PyTorch were examples in the request, not evidence of the current demo's stack.

Final sampled frames: desktop: 22, mobile: 25, compact: 26, reduced: 22. Total: 95. All runs reported no console errors, no failed resources, no detected dead scroll, and animated-cue contrast above 4.5:1. The interaction check traversed 45 keyboard targets and 15 content routes.
