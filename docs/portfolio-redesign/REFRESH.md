# September 2026 refresh

The portfolio uses lavender and mint as its main accents, with small touches of warm gold and coral on neutral surfaces. This replaces the initial yellow-heavy revision while retaining the typography fix and direct copy. The homepage has one introduction. The repeated personal section is removed, with the illustrated portrait retained on About.

## Typography fix

`--sans` and `--hand` are declared on `:root` and depend on the variables produced by `next/font/local`. The font classes previously lived on `<body>`. Next.js scopes those variables to that element, so the root tokens were invalid in the GitHub Pages export. The browser fell back to Times. Vinext's local font behavior masked the issue.

Both font variable classes now live on `<html>`, alongside the shared tokens. Explicit Arial/cursive variable fallbacks prevent invalid font declarations if a font variable is unavailable. The existing self-hosted DM Sans and Kalam files and Next.js font loading remain in use.

Chrome's rendered-font inspection confirmed:

| Version | Actual heading font |
| --- | --- |
| Existing GitHub Pages publication | Times Bold |
| Updated Vinext preview | DM Sans Bold, custom font |
| Updated GitHub Pages static export | DM Sans Bold, custom font |

## Visual and content changes

| Accent | Dark theme | Light theme | Use |
| --- | --- | --- | --- |
| Lavender | `#b8a4ec` | `#7358ad` | Main action, links, writing, first project |
| Mint | `#8ecdb4` | `#327663` | Second project, tools, photographs, neural nodes |
| Warm gold | `#f3cc65` | `#85610d` text | Name underline, small sparks, a few highlights |
| Coral | `#ee8291` | `#b84b61` | Occasional metadata, one neural node, small heading/divider details |

- Main backgrounds and cards stay neutral. The footer has a faint violet tint; the playground returns to an unfilled section with dashed separators.
- A small dot pattern fades behind the homepage introduction, with subtle lavender/mint light behind the neural sketch.
- The original open 3–5–5–3 neural sketch is restored, including its dotted orbit, curved connections, hover motion, and tap/keyboard activation. Three gradient traces animate on activation. Reduced-motion preferences disable animation and retain the drawing. The boxed panel and numbered input controls are removed.
- The header and footer wordmarks read **Romil Lodaya**, and page title templates include the full name. Domain/DNS settings are unchanged.
- Social labels remain 16px on desktop and 15px on mobile, with 22px icons and a minimum 44px link height.
- The repeated homepage biography stays removed, and the shorter descriptions and sample disclosures are retained throughout the site. Existing route slugs are unchanged.

## Verification

- GitHub Pages export succeeds, including TypeScript and all 18 generated pages. The Vinext production build also succeeds.
- ESLint reports no errors; two pre-existing image/directive warnings remain in `footer-companion.tsx`.
- The revised homepage was checked in light/dark themes and at phone/tablet widths, including 320px and 768px. The full-name wordmark and navigation fit without horizontal overflow.
- Tap and keyboard activation of the open network work. The prior font-variable scope fix is retained; the local browser continues to use DM Sans.
- Earlier verification of the typography fix covered the exported static site and local preview, all major routes, theme persistence, and reduced motion.

Changes are local. No Git push or production deployment was performed.
