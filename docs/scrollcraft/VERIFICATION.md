# Scroll Craft verification

Historical first edition. See [the personal color edition](COLOR-EDITION.md) for the current design and final checks.

Verified 5 September 2026 against the final Next.js static export at http://localhost:4500/. Source: `app/components/journal-experience.tsx`, themed with `app/globals.css`. The supplied JavaScript and CSS engine files remain unchanged.

## Design outcome

The brief was self-authored under the user's explicit creative delegation, not an interview. [BRIEF.md](BRIEF.md) records the supplied words, assumptions, five-part journey, intended feeling curve and photographic peak. [DESIGN.md](DESIGN.md) contains the grammar choice, seven alternatives ruled out, layer contract, score table and observed references.

The chaptered editorial page moves from introduction to writing, a photographic notebook, short project notes, and a closing reading invitation. The custom blue bookmark travels to the selected photograph. That selection updates the print, caption and story link, and carries the same reading destination into the close. The print opens gently as it enters the viewport. Ordinary document scrolling stays in charge.

The fingerprint registry had zero previous build rows when planned. The gate passed with no previous comparisons and no rewritten history. This build claims the contact-strip bookmark and selected-story closing pattern.

## Visual review and feeling curve

This is an agent's visual assessment, not a human usability study. The intended curve was welcome → interest → delight → curiosity → invitation. The final visual read was calm → interest → delight → quiet → invitation. The workbench remains deliberately short and quiet; this is a residual difference from the planned curiosity beat, retained to fit the user's minimal reading site. The large photo spread is the clearest change in visual scale and the largest chapter. There are no deliberate empty holds. The closing heading and reading destination remain visible at the bottom.

Read all four final contact sheets, including intermediate states, plus individual selected-photo, dark-theme and reduced-motion phone screenshots. Phone layouts stack the thumbnail strip, print and caption; the mountain remains recognisable in its tighter crop. Copy sits on solid grounds, outside photographs. The desktop margin folio disappears on small screens. Unused black cells at the ends of contact sheets are montage padding, not blank website sections.

## Final screenshot runs

| Run | Samples | Document / viewport height | Console errors | Failed requests |
| --- | ---: | --- | ---: | ---: |
| desktop | 19 | 2817px / 900px viewport | 0 | 0 |
| mobile | 22 | 3300px / 844px viewport | 0 | 0 |
| compact | 24 | 3389px / 640px viewport | 0 | 0 |
| reduced | 19 | 2817px / 900px viewport | 0 | 0 |

84 screenshot samples total. The supplied harness reported no dead-scroll warnings in the final runs. The animated closing cue reached full opacity and passed the composited contrast threshold. This harness check does not measure every ordinary text element; separate interaction checks measure eight representative body and metadata styles against their actual solid backgrounds.

Evidence: `evidence/final-desktop/`, `evidence/final-mobile/`, `evidence/final-compact/`, `evidence/final-reduced/`. Each contains a contact sheet and the unabridged JSON report. All original single frames and earlier runs remain in the local Scroll Craft build folder under `lab/`.

## Functional and build checks

`npm run lint`, `npm run build` (Vinext), and `GITHUB_ACTIONS=true GITHUB_REPOSITORY=romillodaya/romillodaya.github.io npm run build:pages` passed. Builds ran sequentially because both tools write Next.js type output.

The browser interaction report is `evidence/interactions/report.json`. It checks all three photographic selections and their destinations, theme persistence, keyboard focus visibility, all 15 content routes, main/heading structure, image loading, horizontal overflow, representative text contrast, reduced-motion phone behavior, and the default reading link with JavaScript disabled. Native pointer lock and pointer capture were disabled in every automated browser context.

## Findings and corrections

- The closing kinetic heading initially joined words. Using one semantic text string and natural line wrapping fixed the closing composition.
- Keyboard traversal exposed offscreen focus while smooth scrolling or entrance transitions were active. Focus now reveals the containing entrance group and brings the target into view immediately. The skip link uses fixed positioning.
- The browser requested a missing default favicon. Explicit metadata now points to the existing favicon asset.
- Initial harness instrumentation incorrectly marked a natural-flow print as a custom fixed stage. Its real visual-state attribute now uses `data-print-state`, avoiding a misleading fixed-stage comparison across unrelated chapters. The engine and harness were not altered.
- Route enumeration initially included the framework's standard 404 document as a content page. Content assertions now exclude the two generated error routes.
- Chromium reports intentionally disabled scripts as CSP failures in the JavaScript-disabled context. Those expected script-only events are recorded separately; failures in normal contexts and all failed images remain failures. Canceled navigation/prefetch requests are also reported separately.

## Assets and limits

Three credited sample Unsplash photographs were bundled locally and visually inspected. No images or video were generated, and no paid generation service was used. The sample labels remain visible; these are not presented as Romil's actual travels or published writing.

Tested in headless desktop Chrome at 1440×900, phone-sized Chrome at 390×844, compact 360×640, desktop reduced motion, and a reduced-motion phone interaction case. Light and dark appearance were visually checked; the numerical body-text contrast checks cover the light theme. Physical iPhone/Android hardware, touch feel, Safari and Firefox were not tested. A repository-subpath deployment is handled by the existing base-path configuration but was not independently browser-tested. No forms or external account integrations exist. Nothing was published or pushed.

## Reproduce and continue

Run the project build commands above. Serve the resulting `out/` folder with the skill's `scripts/serve.mjs --root <out> --port 4500`. The full local build folder contains `lab/run-scroll-qa.mjs` and `lab/interactions.mjs`; the former invokes the unchanged `scripts/shoot.mjs` for all four viewport/motion configurations. Browser automation requires Playwright, Chrome and the skill's FFmpeg dependency. Reports contain the sampled positions and computed evidence.

The complete static package is saved in the local build folder as `site/`. Repository documentation includes the brief, design decisions, this report and compact evidence without tool binaries or node_modules.
