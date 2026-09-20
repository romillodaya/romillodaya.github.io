# Romil’s ML / AI portfolio

A personal portfolio for ML / AI work, writing, browser utilities, and field notes. Built with React and Next.js, with a Vinext preview and GitHub Pages export.

The current changes are documented in `docs/portfolio-redesign/REFRESH.md`, following the initial design in `docs/portfolio-redesign/DESIGN.md`. The editions below describe earlier iterations. The supplied illustrated portrait appears on the About page. The résumé, actual projects, and dated timeline are reserved for the content pass.

- `app/page.tsx`: homepage composition.
- `app/components/idea-network.tsx`: interactive neural signal illustration.
- `app/components/footer-companion.tsx`: original footer mascot.
- `app/components/playground-tools.tsx`: client-only vector and text tools.
- `app/about/page.tsx`: biography and timeline layout.
- `app/globals.css`: shared typography, themes, and responsive layouts.

## Run locally

```bash
npm ci
npm run dev
```

## Add an entry

Content lives in `app/content.ts`. Copy an existing record in the appropriate collection:

- `writing`: blog posts, short notes, or longer essays. Give each entry a unique URL `slug`, title, excerpt, category, publication label, opening, and sections. Put newer entries first. Reading time is calculated from the text.
- `fieldNotes`: trips, events, walks, and photo stories. Add a title, subtitle, date, and paragraphs. Add the entry's photograph to the `photographs` mapping in `app/components/photo-art.tsx` and extend the `FieldNote['art']` type with its key. Keep image filenames lowercase with hyphens.
- `projects`: projects and experiments, with the problem, approach, and takeaway.

The homepage and archive pages update from these collections automatically. Existing URL slugs are preserved. Replace sample entries and remove the corresponding sample labels before publishing personal content. The current sample labels are in the homepage, archive pages, and detail headers/footers.

## Photographs

The demo uses three credited Unsplash photographs, bundled locally. They are sample imagery, not Romil's travel photos. Source links and credits are in `app/components/photo-art.tsx` and appear on each field-note page. Replace them with your own images when ready. Use the `assetPath()` helper for local image paths; it adds the configured GitHub project-site base path automatically.

## Customize

- `app/globals.css`: shared colors, typography, layouts, light/dark themes, mobile styles.
- `app/about/page.tsx`: personal introduction.
- `app/components/site-header.tsx` and `site-footer.tsx`: navigation and footer.
- `app/layout.tsx`: page metadata and initial theme. The saved theme loads before the page is painted.

GitHub and LinkedIn links use the usernames supplied by Romil and live in `app/components/social-links.tsx`. No email address or newsletter signup is configured. The original `public/og.png` social preview is retained.

## Build and check

```bash
npm run build
npm run lint
GITHUB_ACTIONS=true GITHUB_REPOSITORY=romillodaya/romillodaya.github.io npm run build:pages
```

## GitHub Pages

In the repository's **Settings → Pages**, select **GitHub Actions**. The existing workflow exports all pages and publishes after a push to `main`. It supports both a `username.github.io` site and repository subpaths. For a project site, set `NEXT_PUBLIC_SITE_URL` to the full public URL in the workflow.

The `.openai/hosting.json` file retains the existing Sites project for a private preview. GitHub Pages publishing remains separate.

## Scroll Craft edition

The homepage now uses a chaptered editorial composition with a photographic contact strip. Selecting a memory updates the photograph, excerpt, date, credit, and both reading destinations. The selection lives for the current page visit. The light/dark preference remains saved in local storage.

- `app/components/journal-experience.tsx`: semantic homepage markup and the custom bookmark/print behavior.
- `public/vendor/scrollcraft.js` and `app/styles/scrollcraft.css`: unchanged copies of the supplied Scroll Craft engine. Page-specific behavior lives outside the engine.
- `public/photos/`: bundled sample photos and source credits. All paths respect the configured GitHub Pages base path through `assetPath()`.
- Full document navigation into and out of the homepage deliberately releases the engine, which has no unmount API. Other article links retain Next.js navigation.
- The homepage is usable without motion. With JavaScript disabled, the default selected photograph and ordinary reading links remain available; photo selection and the theme button need JavaScript.

For the design brief and browser verification evidence, see `docs/scrollcraft/`. No live publication has been performed.

## Personal color edition

The homepage introduces Romil by name, with a scroll-responsive 3D stack of linked content cards and direct category navigation. Red identifies writing, green identifies stories, yellow accents projects, and blue remains a secondary accent. Reduced motion disables the card transforms. The latest design and verification record is `docs/scrollcraft/COLOR-EDITION.md`.

## Signal palette and switch

Signal replaces the pastel surfaces with neutral white/near-black backgrounds and saturated accents. Palette tokens live in `app/globals.css`. `app/components/theme-switch.tsx` provides a keyboard-accessible day/night slider, a short synthesized click, and a persistent mute option. Google Scholar joins the supplied GitHub and LinkedIn links in `app/components/social-links.tsx`. See `docs/scrollcraft/SIGNAL.md` for the current decisions and checks.
