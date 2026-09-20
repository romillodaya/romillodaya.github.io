# A curious engineer’s notebook

The first design pass for Romil Lodaya’s ML / AI portfolio. Built for someone assessing his work, reading an explanation, or looking for a reason to connect. Projects and writing lead; tools, photos, and personal details add depth.

## Visual direction

- Soft near-black canvas, warm light theme, clean self-hosted DM Sans typography.
- Lavender for interactive elements, mint for secondary details, yellow for emphasis.
- Kalam handwriting used sparingly for margin notes. Original dotted waves, drawn underlines, and an interactive neural network bring a little personality.
- A small original clay robot greets visitors at the footer. The animation runs on entry and on interaction, with reduced-motion support.

| Token | Dark | Light |
| --- | --- | --- |
| Canvas | `#101113` | `#faf9f6` |
| Surface | `#191a1e` | `#f0efeb` |
| Text | `#eae9ef` | `#28282d` |
| Secondary text | `#a6a5b0` | `#656570` |
| Lavender | `#bcabeb` | `#7960b5` |
| Mint | `#9cd4bd` | `#347565` |
| Yellow | `#e9c66e` | `#88610b` |

## Structure

Home: introduction → selected projects → writing → playground → personal introduction → photos → contact.

Primary navigation: Projects / Writing / Playground / About. Field notes remain reachable from the homepage, About, and footer. Existing article, project, and story URLs are preserved.

About includes a timeline layout and résumé destination. The Playground includes working cosine-similarity and text-cleanup tools. User input stays in browser memory. Theme preference is saved locally; the first visit starts in dark mode.

## Content pass

The existing essays, project concepts, and credited Unsplash photos remain explicitly labeled samples. They are not claims about Romil’s work. Timeline entries are explicitly a layout preview. The résumé section links to the verified LinkedIn profile until a PDF is supplied. The homepage and About page use Romil’s supplied illustrated portrait. Its original transparency and full composition are preserved, with responsive sizing in both themes.

Next content needs:

1. Actual ML / AI projects, problem statements, contributions, outcomes, repository/demo links, and relevant research.
2. Short professional biography, current focus, and collaboration or hiring interests.
3. Résumé PDF and dated education/work/research milestones.
4. Published writing and personal photographs.

## Sources and implementation

Reference direction: https://www.joshwcomeau.com/, https://www.joyofreact.com/, https://whimsy.joshwcomeau.com/, https://css-for-js.dev/, and the supplied Tania timeline screenshot. Layout, illustration, and interface work are original, with no copied brand assets.

The fonts are bundled with their OFL licenses in `public/fonts/`. The mascot is an original ImageGen asset in `public/images/companion.png`. Existing photograph credits remain in each field note.

The new homepage does not load the previous Scroll Craft engine. Shared styles apply to all archives and detail pages. The established Next.js export and Vinext preview flows are retained. No production publishing or Git push was performed for this design review.

## Verification

Vinext production build and the GitHub Pages static export pass, including TypeScript. Browser checks cover desktop, 768px, and 390px layouts; both themes; saved theme preference; reduced motion; all local homepage destinations; the footer greeting; loaded photographs; vector edge cases; and text cleanup. No browser runtime errors, broken homepage destinations, or horizontal overflow were found in the checked views.
