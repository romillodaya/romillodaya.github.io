# Projects and technical articles

The homepage and archives use the same content records. All pages export as static HTML for GitHub Pages, and diagrams work without JavaScript.

## Add a project

Copy a record in `app/content/projects.ts`. Give it a unique slug and supply its title, description (`copy`), category, stack (`tags`), problem, approach, and takeaway. `evaluation` is a list of evaluation notes; replace the example plans with actual methods and measured results when available.

Add an image in `public/projects/`, then set:

```ts
thumbnail: {
  src: '/projects/my-project.webp',
  alt: 'Describe what the screenshot or diagram shows.',
},
repository: {
  href: 'https://github.com/romillodaya/my-project',
  placeholder: false,
},
```

Use a 16:9 thumbnail (960 × 540 or larger). The existing SVG illustrations are original concept thumbnails, not screenshots of running projects. The same image appears on the homepage, archive, and project page. The current repository links deliberately open Romil's real profile and are labeled as placeholders, so they do not lead to nonexistent repositories.

The three current projects are examples, with proposed evaluation plans and no invented performance metrics. When adding completed work, set `example: false` and update `status`. Example labels and proposed-evaluation wording then update automatically. An optional `thumbnail.caption` can provide a specific screenshot caption.

## Add an article

Copy a record in `app/content/writing.ts`. Put newest entries first. Set a unique `slug`, title, excerpt, category, publication label, opening, and optional summary. `readTime` and `meta` can start as empty strings: `app/content.ts` calculates them from the article text.

Sections have stable, unique IDs for the table of contents. Keep IDs unchanged after publication so shared anchor links still work. Plain paragraphs can go in `paragraphs`; use `blocks` when mixing text, images, and code. Paragraphs render before blocks, so keep `paragraphs: []` when controlling the complete sequence with blocks.

```ts
sections: [
  {
    id: 'the-main-idea',
    heading: 'The main idea',
    paragraphs: [],
    blocks: [
      { type: 'paragraph', text: 'Start with the explanation.' },
      {
        type: 'image',
        src: '/projects/my-project.webp',
        alt: 'A precise description of the figure.',
        width: 960,
        height: 540,
        caption: 'What the reader should notice, plus any credit.',
      },
      {
        type: 'code',
        language: 'python',
        title: 'A small example',
        code: 'print("hello")',
      },
      { type: 'list', ordered: true, items: ['First step', 'Second step'] },
      { type: 'callout', title: 'Remember', text: 'One useful detail.' },
      {
        type: 'equation',
        expression: 'y = Wx + b',
        explanation: 'Explain each symbol in plain language.',
      },
    ],
  },
],
```

Supported diagram kinds are `attention`, `transformer`, `retrieval`, and `data-split`. For a new custom diagram, add a kind in `app/content/blocks.ts` and its markup in `app/components/article-diagram.tsx`, or use an `image` block with a local SVG, PNG, or WebP. The built-in diagrams reflow on small screens and have text alternatives; every figure includes a caption. Code and equations scroll inside their own containers rather than widening the page.

Use `sources: [{ title, href }]` for primary references, and optionally connect an article to a project with `relatedProject: 'project-slug'`. Projects use `relatedPost: 'article-slug'` for the reverse link. Set `example: false` when replacing a draft with a personal article; this removes its example label automatically.

## Layout

`app/styles/content.css` owns the project and writing layouts. Articles use an 18px reading size, generous line spacing, and a maximum 720px content column. The desktop table of contents becomes a collapsible list below 960px. Shared fonts, themes, navigation, and footer still come from the existing site styles.

Old sample URLs remain available through `allWriting` and `allProjects` in `app/content.ts`, but no longer appear in the new archives. Their section anchors are preserved.
