# Romil’s ML / AI portfolio

A personal portfolio for ML / AI work, writing, browser utilities, and field notes. Built with React and Next.js, with a Vinext preview and GitHub Pages export.

The current changes are documented in `docs/portfolio-redesign/REFRESH.md`, following the initial design in `docs/portfolio-redesign/DESIGN.md`. The editions below describe earlier iterations. The supplied illustrated portrait appears on the About page. The résumé, actual projects, and dated timeline are reserved for the content pass.

- `app/page.tsx`: homepage composition.
- `app/components/idea-network.tsx`: interactive neural signal illustration.
- `app/components/footer-companion.tsx`: original footer mascot.
- `app/components/playground-tools.tsx`: client-only vector and text tools.
- `app/about/page.tsx`: biography and timeline layout.
- `app/globals.css`: shared typography, themes, and responsive layouts.
- `app/styles/content.css`: project thumbnails and spacious technical article layouts.

## Run locally

```bash
npm ci
npm run dev
```

## Add an entry

Projects live in `app/content/projects.ts`; technical articles live in `app/content/writing.ts`. The shared collections in `app/content.ts` also contain the field notes and retain older sample URLs.

- Projects support a thumbnail, repository link, stack, problem, approach, evaluation notes, and a related article.
- Articles support paragraphs, diagrams, images with captions, equations, code, lists, callouts, and primary references. Reading time and the table of contents update automatically.
- Field notes retain their photograph mapping in `app/components/photo-art.tsx`.

See [the content authoring guide](docs/content/AUTHORING.md) for copyable examples and image guidance. The current ML projects and technical articles are examples. Project GitHub links are explicitly labeled placeholders and open Romil's profile.

## Photographs

The demo uses three credited Unsplash photographs, bundled locally. They are sample imagery, not Romil's travel photos. Source links and credits are in `app/components/photo-art.tsx` and appear on each field-note page. Replace them with your own images when ready. Use the `assetPath()` helper for local image paths; it adds the configured GitHub project-site base path automatically.

## Customize

- `app/globals.css`: shared colors, typography, layouts, light/dark themes, mobile styles.
- `app/about/page.tsx`: personal introduction.
- `app/components/site-header.tsx` and `site-footer.tsx`: navigation and footer.
- `app/layout.tsx`: page metadata and initial theme. The saved theme loads before the page is painted.

Social profile links live in `app/components/social-links.tsx`. The shared footer links to `hello@romillodaya.com` in `app/components/site-footer.tsx`. No newsletter signup is configured. The original `public/og.png` social preview is retained.

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
