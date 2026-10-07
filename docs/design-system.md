# Design system: "Fine Sticker"

The visual rules of the app. Nothing here is code yet: a token or component enters `src/` in the commit that first uses it (`CLAUDE.md` rule 4). This file stays the reference.

Each rule is either:

- **Decided**: the user chose it, or kept it in a mockup they approved. Build it as written.
- **Open**: never decided. The default given is provisional (accepted on 2026-10-06, not yet seen by the user).

Source: the design thread's archive, kept locally in `handoff.local/from-design/` (not in git). It holds the spec, mockups that open offline in a browser, 47 PNG screenshots and the French copy table. Check a mockup before building a component.

## Principles

1. **Sticker, drawn finely.** Every element has a 1.5px ink outline. Anything pressable also has a 2px hard shadow (no blur). Fills are soft bright colours; text on a fill is always ink.
2. **Tactile, not noisy.** Pressing drops the element onto its shadow. Everything else is calm.
3. **Delicate motion.** Nothing moves more than 2px on interaction, nothing loops, only the score badge overshoots. No shake, confetti or sound. Supporting motion (buttons, answers, screens) stays short. One exception: the score celebration at 80% and above may be slower and staggered (see Motion).
4. **Colour is never the only signal.** Correct and incorrect also use an icon and words.
5. **One reading unit per question.** The question text and its code share one card. The code box is dark, has line numbers and syntax colours, and wraps long lines by default.
6. **Mobile first.** 360px baseline, desktop layout from 64rem (Tailwind `lg:`). Tablet (640–1023px) uses the mobile layout in a centred column of at most 640px (open).
7. **Light theme only.** No dark mode.
8. **Small, regular scales** (decided 2026-10-07). Text sizes, radii and spacing come from Tailwind's default scales (4px spacing unit; text 12, 14, 16, 18, 20, 24, 30, 36). The mockups' off-scale values are snapped to the nearest step.

## Colour

| Token       | Hex       | Used for                                          |
| ----------- | --------- | ------------------------------------------------- |
| `ink`       | `#1b1726` | text, every outline, hard shadows, the ink button |
| `paper`     | `#fff8ec` | page background                                   |
| `card`      | `#ffffff` | cards, answer options, explanation                |
| `muted`     | `#5a5468` | secondary text                                    |
| `js`        | `#ffd54f` | JavaScript topic, brand yellow (logo, highlight)  |
| `react`     | `#7dd3fc` | React topic                                       |
| `action`    | `#ff8fb1` | primary action ("Réessayer")                      |
| `correct`   | `#6ee7b7` | correct answer, "Correct !" header                |
| `incorrect` | `#ff9a8b` | wrong answer, "Pas tout à fait." header           |
| `chip`      | `#ddd3ff` | neutral chip                                      |

Code box: background `#1b1726`, header `#2a2438`, text `#fff8ec`, muted (line numbers, comments, "N lignes") `#a39cb8`, keyword `#ff9dbb`, number `#ffd54f`, function `#7dd3fc`, string `#a8e6a1`, JSX tag `#ffb38a`. Inline `backtick` chip background: `rgb(27 23 38 / 0.09)`.

- **Topic accent** (open, default: on). The screen root carries `data-topic` (the topic id) and `--accent` is yellow for JavaScript, blue for React. It drives the progress fill, topic chip, section number badges, code language pill, score ring arc and tier badge. Logo and highlighted phrase stay yellow.
- **Palette reset** (open, default: yes). Remove Tailwind's default palette (`--color-*: initial`) so off-palette colours cannot be used by accident.
- **Contrast.** The design checked 23 pairs: text 5.7:1 to 17.5:1, outlines 16.6:1. The smallest text pair is muted code text on the code header (5.69:1). Re-check if a colour changes. Never lighten the outline colour.

## Typography

- Display: **Bricolage Grotesque** 800 only, letter-spacing −0.02em. Body: **DM Sans** 400/500/700. Code: **JetBrains Mono** 500 only, ligatures off.
- Delivery (decided 2026-10-07): self-hosted with Fontsource, sized for a small first load. Bricolage 800 and JetBrains Mono 500 are static single-weight files; DM Sans is one variable file. Packages to confirm at install: `@fontsource/bricolage-grotesque` (weight 800), `@fontsource-variable/dm-sans` (wght), `@fontsource/jetbrains-mono` (weight 500). A CDN would send visitors' IPs to Google while Home promises "Sans compte".
- Measured payload (Chromium, Latin subset, the only one our French text needs): Home 58.8 KB (display + body); 80.6 KB once a code box appears, because JetBrains Mono loads only then. The all-variable setup measured 113.8 and 154.2 KB.
- Trade-off: static Bricolage has no optical sizing, so it renders about 2% wider than the designed variable font at 29px, 0.8% at 20px and 5.5% at 56px (the desktop hero).
- `→`, `≠` and `✅` (28 lines of content) are in no subset and render in the system font.

Text sizes (decided 2026-10-07): Tailwind's default steps, no custom size tokens. The mockup's sizes snap to the nearest step.

| Role              | Size             | Font         | Used for                                       | Mockup |
| ----------------- | ---------------- | ------------ | ---------------------------------------------- | ------ |
| hero              | 30 (`text-3xl`)  | display      | Home headline                                  | 29     |
| title             | 24 (`text-2xl`)  | display      | Sections title                                 | 25     |
| card title        | 24 (`text-2xl`)  | display      | topic card title                               | 24     |
| result            | 30 (`text-3xl`)  | display      | verdict ("Excellent !")                        | 27     |
| score             | 36 (`text-4xl`)  | display      | number in the ring                             | 42     |
| question          | 20 (`text-xl`)   | display      | question text when there is code               | 20     |
| question, no code | 24 (`text-2xl`)  | display      | question text without code                     | 23     |
| section           | 18 (`text-lg`)   | display      | "Choisis ton sujet"                            | 18     |
| row               | 18 (`text-lg`)   | display      | section label, review question                 | 17     |
| button            | 16 (`text-base`) | sans 700     | buttons                                        | 16, 15 |
| body              | 14 (`text-sm`)   | sans 400–500 | paragraphs, answers, descriptions, explanation | 14, 13 |
| caption           | 12 (`text-xs`)   | sans 700     | chips, counters, code header, stat chips       | 12, 11 |
| code              | 12 (`text-xs`)   | mono 500     | code box                                       | 12.5   |

Display roles are Bricolage 800. The score at 100% needed 34px in the mockup to clear the ring: check that "100 %" fits at 36, otherwise use 30. Re-measure how code wraps at 12px.

Line-heights (proposal, the mockup had 9 values from 1.0 to 1.65): 1.1 for display text and buttons, 1.4 for running text and captions, 1.65 for code.

Desktop sizes (open, never reviewed), on the same scale: hero 60 (`text-6xl`), title 36, card title 30, question 24, body and explanation 16, code 14.

## Shape and spacing

- Outline (decided): 1.5px solid ink everywhere (code language pill: 1px).
- Shadows (decided): rest `2px 2px 0 ink`, hover `3px 3px 0 ink`, pressed none.
- Radii (decided 2026-10-07, snapped to Tailwind): 4 (`rounded-sm`) progress segments; 8 (`rounded-lg`) letter badge, logo, code box; 12 (`rounded-xl`) buttons, answer options, topic cards, section rows, question card, explanation card; pill full. The mockup used 5, 7, 9, 10, 12 and 14.
- Spacing (decided 2026-10-07): every dimension is a multiple of 4, Tailwind's spacing unit. Exceptions: the 1.5px outline, the 2px and 3px shadows, and motion distances. Page padding 16 on mobile (the mockup had 18) and 40 on desktop (open). Gaps 8 and 12 (the mockup also had 10). Badges 24 (the mockup had 22 and 26), progress segments 8 high (9). Minimum tap target 44.
- Snapped values are to confirm when each screen is built.

## Motion (decided)

| Interaction                         | What moves                                  | Time / easing                                  |
| ----------------------------------- | ------------------------------------------- | ---------------------------------------------- |
| Screen enters                       | fade, rises 8px                             | 200ms ease-out                                 |
| Button hover (pointer devices only) | −1px, −1px, shadow 3px                      | 100ms ease-out                                 |
| Button pressed                      | +2px, +2px, shadow 0                        | 70ms                                           |
| Answer chosen                       | fill fades to mint or coral, others flatten | 180ms                                          |
| Check or cross icon                 | fade, scale .85 to 1                        | 160ms ease-out                                 |
| Wrong answer                        | 2px two-beat nudge                          | 180ms ease-out                                 |
| Explanation                         | fade, rises 6px                             | 200ms ease-out                                 |
| Pinned bar                          | fade, rises 8px                             | 180ms ease-out                                 |
| Progress segment                    | fills left to right                         | 220ms ease-out                                 |
| Score ring                          | arc draws                                   | 900ms, delay 100ms, `cubic-bezier(.2,.8,.2,1)` |
| Score number                        | counts up in script                         | 800ms, ease-out cubic                          |
| Tier badge                          | scale .8 to 1.06 to 1 (the only overshoot)  | 320ms, delay 700ms                             |
| Sparkles (80%+ only)                | scale .3 to 1 to .7, fade, drift up 8px     | 800ms, delays 900, 1000, 1100ms                |

**Score celebration (decided 2026-10-07):** the ring, count-up, badge and sparkles are an exception to the short-animation rules. They may use longer timings and a staggered sequence. The values above are starting points, to tune by eye in the browser.

**Reduced motion:** `prefers-reduced-motion: reduce` turns off every animation and transition, hides the sparkles, shows the final score at once and scrolls to the explanation instantly. Each `@keyframes` defines only its start, so with the animation off the element is already in its end state.

## Components

- **Button** (decided). Variants: default (white), action (pink), ink (dark), large, icon, text link. Min height 44px. Hover (pointer only) lifts 1px; pressed drops 2px. No separate disabled look: after an answer, options use their answered states. An icon-only button is 36px visible with a 44×44 hit area (pseudo-element `inset: -6px`, measured from the padding box). An `overflow: hidden` ancestor would clip that extension.
- **Chip, logo, highlight** (decided). Chip: pill, outline, 12px bold, neutral lavender or topic accent. Logo: yellow sticker rotated −2° with shadow. Highlight: yellow behind "une question à la fois." with `box-decoration-break: clone`.
- **Topic card** (decided). The whole card is the button, topic-coloured. A row with the title and a 32px round arrow badge, then the description, then two stat chips with real counts. Hover lifts the card and nudges the arrow 2px right. There is no separate start button.
- **Section row** (open). A button row, min height 48: number badge (24px, accent fill), label, "10 questions" (muted), chevron.
- **Progress** (decided). 10 segments, 8px high, 4px gaps, outlined. Done = accent fill, current = ink, upcoming = empty. Mono counter "4/10". `role="progressbar"` with `aria-valuenow` and `aria-label="Question 4 sur 10"`. Derive the segment count from the data; beyond about 12 a continuous bar is needed (not designed). No percentage.
- **Question card** (decided). One white card (padding 12, outline, radius 12, shadow): topic chip, question text, code box.
- **Code box** (decided). Header strip: language pill (`JavaScript` or `JSX`, derived from the topic, accent fill), "N lignes", wrap toggle. Body: line numbers, mono 12px. Wrapping is the default, with continuation lines indented 2ch more than the line they continue. The toggle switches that box to sideways scroll (fade on the cut edge); the choice is per box and not saved (open). `role="region"`, `tabindex="0"`, `aria-label="Exemple de code JavaScript, 2 lignes"`, `aria-pressed` on the toggle. Do not use `overflow: hidden`; round the header and body corners individually.
- **Answer option** (decided). A button row, min 44px, padding 12: letter badge A–D (24px, keeps its paper fill), text, status icon on the right. States: idle, hover, pressed, focus, answered-flat (every option neither chosen nor correct loses its shadow and drops 2px), correct (mint + check), incorrect (coral + cross + nudge). After the first answer all options stop reacting (`disabled` or `aria-disabled`). Long answers wrap with the badge top-aligned (the longest is 164 characters).
- **Explanation card** (decided). Appears after the first answer: a header strip (mint "Correct !" or coral "Pas tout à fait.", with icon), then the text at body size.
- **Pinned bar, mobile** (decided). Full width at the bottom, 1.5px ink top border, paper background, one full-width ink button: "Question suivante", or "Voir les résultats" on question 10. `visibility: hidden` until the first answer, so it is also out of the tab order.
- **Score** (ring, count-up, trophy and sparkles decided; tiers and icons open). Ring 164px: SVG viewBox 120, r=50, an ink outline stroke (13), a paper track (10), the accent arc (10, round cap), rotated −90°. Arc offset = 314.16 × (1 − pct/100). Number inside (36px, see Typography for the 100% case), "8 / 10" beneath. Tier badge: 44px circle, accent fill, outline, icon. Three 16px four-point sparkles (pink, blue, yellow) at 80% and above.
- **Review** (open). "Revoir mes erreurs (n)" toggles a list (`aria-expanded`, label becomes "Masquer mes erreurs"); no routing. One mistake card per missed question: the question, the code box if any, rows "Ta réponse :" (coral, cross) and "Bonne réponse :" (mint, check), then the explanation in muted text.

Score tiers (thresholds from the prototype: 100, ≥80, ≥40, else):

| Score    | Title            | Text                                                        | Icon (open) | Sparkles |
| -------- | ---------------- | ----------------------------------------------------------- | ----------- | -------- |
| 100%     | Sans faute !     | Tu maîtrises cette section.                                 | trophy      | yes      |
| 80–99%   | Excellent !      | Encore un petit effort pour le sans-faute.                  | trophy      | yes      |
| 40–79%   | Bien joué !      | Les bases sont là, revois tes erreurs pour progresser.      | thumb-up    | no       |
| below 40 | C'est un début ! | Chaque erreur est une occasion d'apprendre. On y retourne ? | plant-2     | no       |

Score buttons: "Réessayer" (pink, restarts the same section), "Revoir mes erreurs (n)" (white, hidden when n = 0), "Retour aux sujets" (text link, goes to Sections).

## Screen behaviour

- **Question, mobile layout** (decided): a full-height column. A fixed header (back icon button, progress, counter, with a 1.5px hairline once the content has scrolled), a scroll area (padding 8/16/16, bottom padding of the pinned bar's height plus a margin after answering, 92px in the mockup, with the same `scroll-padding-bottom`), then the pinned bar.
- **After the first answer** (decided): mark the chosen option (incorrect) and the right one (correct), flatten the rest, show the explanation, then scroll it into view above the bar. If its bottom is below the scroll area's bottom minus 98px, scroll down just enough; if it is taller than the viewport, align its top.
- **Live region**: one persistent `role="status"` element. Inject "Correct ! <explanation>" or "Pas tout à fait. <explanation>" as text. Never toggle `hidden` on a live region.
- **Desktop** (open, never reviewed): Home in two columns with an optional frozen question-card decoration; Sections as a 3-column grid (`minmax(0, 1fr)`); Question in a 960px column, two columns when there is code (question and code on the left at 460px, sticky; answers, explanation and the next button on the right), one centred 720px column otherwise; Score with a 208px ring and buttons in a row.

## Accessibility (decided unless noted)

- Every tappable element is at least 44px.
- `:focus-visible` shows a 2px ink ring 3px away from the element (cream on the dark code header). Never `outline: none`.
- Hover styles apply only under `@media (hover: hover)`.
- Decorative icons are `aria-hidden`. Icon-only buttons, the progress bar and the code region have an `aria-label`. `<html lang="fr">`.
- Not tested by the design: a real screen reader, real devices, Safari and Firefox, Windows high-contrast mode, 200% zoom.

## Content rules

- **French punctuation.** Use a narrow no-break space (U+202F) before `?` `!` `:` `;` in questions, answers, explanations and UI strings, never inside `` `backticks` ``. The data uses a plain space, so apply it when rendering. Use `&nbsp;` inside "une question à la fois." and between a number and `%`.
- **Backticks.** `` `text` `` renders as a code chip (present in 58 answers, 72 explanations and 39 questions).
- **Answer font** (open, default): the body font for every answer, relying on backtick chips. A monospace guess misclassifies some answers.
- **Syntax colours** (open mechanism, default): a small hand-written line tokenizer (about 0.5 KB gzip), checked by the design on all 81 snippets. It assumes the data has no block comments, multi-line template strings, regex literals or apostrophes in JSX text. If that changes, switch to a library (sugar-high is the smallest measured, 10.5 KB gzip).
- **Icons.** Tabler outline set (MIT), 2px stroke, 24px grid, inline SVG in `currentColor`, no package. Ten icons: `arrow-left`, `arrow-right`, `check`, `x`, `chevron-right`, `trophy`, `thumb-up`, `plant-2`, `text-wrap`, `arrows-horizontal`.
- **UI strings** are French; the table is in the archive.

## Gaps in the design's token file

Found by rendering the tokens in a browser. Apply them when the token is added.

- The code size tokens set no font weight. JetBrains Mono ships only at 500, so put `font-medium` on code to make that explicit.
- Nothing disables code ligatures: set `--font-mono--font-feature-settings: "liga" 0, "calt" 0`.
- Chips, captions and buttons are bold (700): set `font-bold` explicitly, because Tailwind's default sizes carry no weight.
- Without a class-merging helper, two conflicting utilities on one element resolve by stylesheet order, not by order in the class string. Keep any shared class group free of properties a component overrides.

## Open items

- **Never reviewed by the user:** Sections screen, desktop layouts, review list, React blue variant, tier icons, desktop Home decoration, tablet layout.
- **Snapped from the mockup, to confirm by eye when built:** result 30 (was 27), score 36 (was 42), code 12 (was 12.5), page padding 16 (was 18), desktop hero 60 (was 56), radii 4, 8 and 12. Line-heights collapsed to 1.1, 1.4 and 1.65 (proposal).
- **Defaults taken:** topic accent on, palette reset, inline SVG icons, hand-written tokenizer, body font for answers, wrap choice not saved, no ligatures, no keyboard shortcuts, static logo, Home without "Comment ça marche", nav, CTA band or footer.
- **Proposal from the build, not in the design:** after a screen change, move focus to the new screen's heading and hide the focus ring on that heading only. To decide when the first screen change exists.

## Not in this design

Dark mode, sound, looping animation, confetti, timer, streaks or XP, accounts, new data fields, extra routes, an animation library.

## Appendix (proposal, to confirm): motion principles

Paraphrased from Emil Kowalski's articles [7 Practical Animation Tips](https://emilkowal.ski/ui/7-practical-animation-tips), [You Don't Need Animations](https://emilkowal.ski/ui/you-dont-need-animations) and [Building a Toast Component](https://emilkowal.ski/ui/building-a-toast-component). His paid course was not read.

Principles:

1. **Purpose first.** Before animating, name the purpose: explain, give feedback, or delight. No purpose, no animation.
2. **Frequency decides.** Anything seen tens or hundreds of times a day gets little or no animation.
3. **Fast.** UI animation stays under 300ms (180ms feels more responsive than 400ms). He exempts marketing sites only.
4. **Ease-out for entering and exiting.** It starts fast, so it feels responsive. Avoid ease-in. A custom ease-out has more impact than the built-in curves.
5. **Press feedback.** A small scale-down on press (0.97) makes a control feel alive.
6. **Never animate from `scale(0)`.** Start from a higher scale (0.9 or more) so nothing appears from nowhere.
7. **Interruptible.** A CSS transition can be interrupted and retargeted mid-motion; a keyframe animation cannot. Transitions for states the user can change, keyframes for one-shot entrances.

Not applicable here: popovers that scale from their trigger, tooltip delays, and blur as a last resort for cross-fades. The app has no popovers or tooltips.

How the motion above compares:

- **Aligned.** Interaction motion is 220ms or less and uses ease-out (the ring uses a custom ease-out). Press feedback exists: dropping onto the shadow serves the same purpose as a scale-down, so we keep ours. Hover, press and answer states are transitions; keyframes are only for one-shot entrances.
- **Next question must not replay the screen-enter.** In the mockup, "Question suivante" re-renders the question inside the same screen and the 200ms entrance does not replay (checked in `mobile.html`). Keep that: do not remount the whole screen for each question.
- **The score celebration is the exception (decided 2026-10-07).** Ring 900ms, count-up 800ms, badge 320ms after a 700ms delay, sparkles 800ms. It appears once per section and its purpose is delight, so it may be longer and staggered, and it is not bound by the 300ms rule or the 0.9 start-scale guideline (sparkles from .3, badge from .8). Nowhere else.

Purpose of each motion (our classification): _feedback_ is press, hover, answer fill, check or cross icon, nudge; _orientation_ is screen enter, explanation rise, pinned bar, progress fill; _delight_ is ring, count-up, badge, sparkles (score only).

Review before adding any animation: What is its purpose? How often is it seen? Is it under 300ms? Is it ease-out? Transition or keyframes? With reduced motion, is the end state reached and no information lost? His habit for judging: compare two variants side by side in the browser and say which is better and why ([Train Your Judgement](https://emilkowal.ski/ui/train-your-judgement)).
