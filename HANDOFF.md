# HeyGen landing — HANDOFF (additions from the Mag session, 17 Oct 2026)

Changes made in this folder from Hamza's Mag-landing session; the page's own build session
owns everything else.

- **Avatar images replaced** (Hamza supplied five new renders to avoid copying HeyGen's):
  `public/assets/heygen/avatar-{consistency,lipsync,emotion,angles,behavior}.jpg`.
  `views/heygen/media-files.constants.ts` points at the `.jpg`s. Figma originals are kept
  in commit `c3c3aa4` (`public/assets/heygen/figma-originals/`, removed in the cleanup).
- **Deco blobs**: the Figma glass blobs were restyled, then dropped for the airbrush texture;
  the files were deleted in the cleanup (recoverable from commit `c3c3aa4`).
- **Hero layout** (rebuilt 17 Oct from a reference Hamza shared): centred headline, subhead and CTA
  (CTA moved above the tiles at Hamza's request), then a full-bleed row of seven 3:4 video tiles on a concave arc (each tile turns toward the
  centre by `HERO_ARC_TURN` deg per step and comes forward by `HERO_ARC_DEPTH`·step² px, so the
  edges read taller). Tiles are `clamp(150px,15vw,240px)` wide so the outer two
  bleed off the viewport. Each tile shows a title, subtitle and white play button drawn in code
  (`Hero/HeroCardOverlay`), not baked into the image. The old hover fan (`Hero/HeroFan`) is gone;
  a copy of the pre-arc Hero folder is in the session scratchpad only.
- **Hero tile images**: seven GPT Image 2 renders (3:4, 2K, high) in a calm pale-blue studio look,
  `public/assets/heygen/hero-{home,productivity,interview,stress,therapist,portfolio,counsel}.jpg`.
  Four follow references Hamza supplied (productivity coach, CEO interview, therapist, stress
  tips); three extend the set using the old hero categories (Real Estate, Finance, Legal), regenerated
  once so they match the references (seated presenter, pale-blue studio wall). The
  subtitles "Coaching", "Company", "Wellness" and all three extra titles are placeholders, since
  the references' captions were illegible or absent. The old Figma tiles were deleted in the cleanup (in commit `c3c3aa4`).
- **Deco → texture** (Hamza, later): the petal-shape decos are no longer used. `airbrush-texture.jpg`
  (an azure airbrush bloom with heavy grain, GPT Image 2) is the full-section background of Trust
  (rotated, .4) only. It was removed from the Hero and Tools (Hamza, 17 Oct); both are plain.
- **Hero title** is sized inline, `clamp(36px, 3.2vw, 46px)`, because `.hg-h1` (unlayered CSS)
  overrides Tailwind size utilities. Hamza found the previous 72px too big.
- **Video Agent slides recoloured** (Hamza, 17 Oct): the pink `#F2A6FE` frame and send button
  baked into `agent-slide-1/2.png` were hue-mapped to `#2883fb` with sharp; `agent-slide-3.png` is
  the original portrait card re-composited onto flat `#2883fb`. Originals are in commit `c3c3aa4`.
- **Updates ("What's new") and Stories ("Powering ambitious teams") unmounted** from
  `views/heygen/index.tsx` at Hamza's request; their folders and assets were deleted in the cleanup.
- **Community section** unmounted at Hamza's request, then deleted in the cleanup.
- Dev server for this page runs from the other session on port 3400.

## Cleanup (17 Oct 2026)

After the first push (`c3c3aa4`, which still holds everything removed here), unused files were
deleted on Hamza's request: the Community, Updates and Stories section folders, 29 unreferenced
assets (old hero tiles, deco blobs, event/update/story images and icons) with their
`media-files.constants.ts` entries, `public/assets/heygen/figma-originals/`, and the unused
`assets/fonts/google-sans-flex.woff2`. `.claude/` (the EverAsk creative skill) is git-ignored.

Typography matches everask-landing-pages: Clash Grotesk 500 for h1-h4 (tracking -0.04/-0.03/
-0.02em), DM Sans for body. EverAsk names "Google Sans" first in `--font-sans` but does not load it
on its main pages, so DM Sans is what renders there too. The `computer-creative` skill has no type
rules; it only covers imagery.

Push only when Hamza says so.

## 17 Oct 2026, later

- **Hero background**: a looping cloud-sea video (`hero-sky.mp4`, Kling 2.6 Pro image-to-video from
  the GPT Image 2 still `hero-sky.jpg`, which is also the poster). It is 10 s, 1080p, ~10 MB with a
  silent AAC track; compress it and strip audio with ffmpeg before production (not installed here).
  A white fade covers the bottom 28%. Headline and subhead are white, the CTA is a white pill.
  The hero is pulled up under the sticky header (`-mt-[76px]`); until scrolled, the header has no
  background and white lockup and links, then it becomes the floating white panel (the old
  full-width white strip behind it was removed).
- **Hero tiles**: eight now. The old stress tile (curly-haired woman, navy sofa) is replaced by a captioned
  social-video frame of a different presenter, "Stress less, breathe more" (`hero-breathe.jpg`).
  Replaced images get new filenames so browsers cannot show a cached copy. "Welcome to Loft 12" (`hero-loft.jpg`) is a social-video style frame
  with burned-in captions, so its card sets `captioned: true` and skips the drawn title; it still gets the play button.
  A matching legal tile ("it's not complicated.") failed to generate and could not be retried:
  the ImagineArt (Official) org ran out of credits.
- **Badge icons**: the six section badges use 3D clay icons (blue `#2883fb`, cream, one vermilion
  accent) generated with GPT Image 2: `badge-{avatar,research,agent,studio,translation,tools}.png`,
  160px, cut out locally with sharp (flood-fill of the white, neutral backdrop from the edges),
  because ImagineArt background removal had no credits. Badge icons render at 44px (`-my-2 size-11`). The old SVG
  icons were deleted.
- **Copy**: every visible "HeyGen" now reads "EverAsk" (Research badge, Tools and Trust intros, FAQ).
- **Research heading** sized inline at `clamp(28px, 2.5vw, 36px)`; the `text-[..]` utilities lost to
  `.hg-h2`.
- **Feature-card icons**: the nine text-only cards (Video Agent, Translation, AI Studio) show a
  64px 3D clay icon above the title via `FeatureItem.icon`: pencil, puzzle, camcorder, globe,
  microphone, rocket, checklist, spotlight, gears (`card-*.png`, cut out locally the same way).
- **Trust + Compliance background**: one soft `#2883fb`-tint gradient on a wrapper around both
  sections in `views/heygen/index.tsx`; both sections are transparent. The airbrush texture was deleted.
- **Final CTA** ("Start creating videos with AI"): the hero's cloud still (`hero-sky.jpg`) under a
  light blue tint at the top replaces the old blue gradient (`FinalCta.constants.ts` deleted).
- **Compliance badges**: GDPR, SOC 2 Type II, CCPA, AI Act and DPF are 3D clay versions of the
  original marks (`compliance-*.png`); the old SVGs were deleted.

## /magnific route (17 Oct 2026)

The Mag page (formerly the standalone `mag-landing` folder) now lives in this repo at `/magnific`.
Each page has its own root layout through route groups, so their global CSS never mixes:

- `app/(heygen)/layout.tsx` + `page.tsx` -> `/`, imports `app/globals.css`.
- `app/(magnific)/layout.tsx` + `magnific/page.tsx` -> `/magnific`, imports `app/magnific.css` (Mag's
  old globals) and `views/mag/styles.css`. Fonts come from `lib/fonts.ts` (adds Instrument Serif).
- Mag code is in `views/mag/`, its assets in `public/assets/mag/` (paths in `views/mag/media.constants.ts`),
  its mark in `public/brand/everask-mark.svg`. Mag's own notes: see the "Mag" section history in
  `mag-landing/HANDOFF.md` (that folder is now superseded; edit the page here).
- `/magnific` is noindex like `/`; the old canonical pointed at Magnific's site.
- Moving between `/` and `/magnific` is a full page load (different root layouts), by design.
- `next build` passes with both routes as static pages (checked in a scratch copy so the dev server
  on 3400 kept its `.next`).
- **/magnific hero** (19 Oct, from a Magnific reference Hamza shared): left column with the "Ranked #1"
  badge, left-aligned headline (`clamp(40px,4.4vw,64px)`), subhead and a white "Start creating" in a
  frame of `min-h-[75vh]` (Hamza, 19 Oct; it grows on small phones to fit the copy); right
  column `Hero/HeroTicker`, the seven Figma capability lines cycling upward every 2.2 s as an endless
  strip (lines fade in below, out above; active line full white beside a vermilion arrow). Hidden below
  `lg`; reduced motion freezes it on "Stay on brand". The centred glow and starter chips are gone; a
  left-to-right azure fade keeps the copy legible over the photo. The reference's "Why Magnific?"
  button is left out (EverAsk-only CTAs).
- **/magnific mobile overflow fixed**: the wide Use cases card used `aspect-[1216/405] min-h-[280px]`,
  forcing 840px on phones; it is now `h-[280px] w-full`, with the aspect ratio from `md` up.
- **/magnific Start simple images recreated** (19 Oct): Hamza wanted them "generated in a similar way",
  not a new art direction. `start-{tools,canvas,team}-v2.png` (GPT Image 2.5 Flare, transparent, with
  the Figma originals as composition references) and `start-app-v2.jpg` keep the originals' layouts,
  colours and subjects (marbled art, mask face, boxer, purple audio; red car and cyclist on a node
  canvas with Paolo/Marina cursors; Brand project + Campaign assets folders; dunk with a pink RUN APP
  pill) with new people and photos. The canvas image is anchored to the card's right edge with a left
  fade so its link line emerges from behind the copy; the team image renders at 240px tall. The old
  Figma files were deleted.
- **/magnific copy**: every visible "Magnific" now reads "EverAsk" (final CTA "Be EverAsk", "Made with
  EverAsk", Suite tab label, three testimonials, FAQ, Originals text). The claims themselves
  (Ranked #1, 1M+ subscribers, testimonials, Freepik FAQ) are still Magnific's and need review.
- **/magnific Originals use video** (19 Oct; the original page had videos): each slide plays a muted,
  looping clip (`original-{puma,bone,candela}.mp4`, Kling 2.6 Pro image-to-video from the slide stills,
  compressed to 1280px h264 without audio, about 0.6-0.8 MB each) with the still as poster. Only the
  active slide plays (`Originals/OriginalsVideo.tsx`); the others stay paused and unloaded. The
  "Magnific Originals" SVG marks were replaced by a live-text "EverAsk Originals" label and deleted.
  ffmpeg is not installed system-wide; `ffmpeg-static` was installed in the session scratchpad only.
- **/magnific Use cases images** (19 Oct): Hamza's rule for recreations is "same vibe, different
  products, camera angles and colours". `usecase-*-v2.jpg`: green grand tourer on a wet mountain pass at
  sunset (low front three-quarter), cream/orange headphones floating on plum, a burgundy "EVERASK"
  magazine held over marble with a glitched cover portrait, and a colossal stone head in storm clouds
  (21:9). The old `ea-usecase-*` files were deleted.
- **/magnific Teams testimonials removed** (19 Oct, Hamza): the R/GA, Delivery Hero and Job&Talent quotes,
  their `Testimonial` type and quote logos are deleted.
- **/magnific FAQ answers** (19 Oct, from the original page): `Faq` is an accordion (`use-faq.ts`, all
  rows open by default, plus/minus marker in action blue) with the original answers, brand swapped to
  EverAsk, and a "Meet EverAsk →" link. The answers still make Magnific's claims (Freepik rename,
  250M+ stock assets, 40+ models, upscaler at everask.ai) and need a real EverAsk review. The original's
  "Contact support" button is left out (EverAsk-only CTAs).
- **/magnific Suite tabs** (19 Oct): Desktop and Stock removed; tabs are Creative Suite, MCP & API, Agents, Plugins.

## Positioning: HeyGen and Magnific inside EverAsk (19 Oct 2026)

Hamza: EverAsk offers HeyGen and Magnific inside its platform through their APIs, so each page names
EverAsk together with the partner product. Rule used: a feature, research result or claim is credited to
HeyGen/Magnific; EverAsk is the platform you use it in. No "official partner" wording.

- `/` (HeyGen): hero badge "HeyGen, now inside EverAsk" and subhead "Use HeyGen's AI avatars and video
  tools right inside EverAsk."; "HeyGen Research"; Tools intro and Trust paragraph credit HeyGen; final
  CTA "Start creating HeyGen videos in EverAsk"; FAQ opens with "Can I use HeyGen inside EverAsk?" and
  the rest credit HeyGen in EverAsk; the free-plan question was removed (EverAsk pricing for HeyGen is
  unknown); SEO title "HeyGen inside EverAsk: ...".
- `/magnific`: hero badge "Magnific, now inside EverAsk"; subhead names Magnific inside EverAsk; the
  logo row says "Magnific is trusted by 1M+ subscribers"; Originals back to "Made with Magnific" and
  "Magnific Originals"; final CTA "Be Magnific, inside EverAsk"; FAQ opens with "Can I use Magnific
  inside EverAsk?", the original Magnific answers are credited to Magnific again, and links out to
  magnific.ai/magnific.com were dropped; SEO title "Magnific inside EverAsk: ...".
- `/magnific` Suite section ("One place to create anything") removed at Hamza's request, with its
  folder and 18 now-unreferenced assets.
- **/magnific matched to the EverAsk page system** (19 Oct, from everask.ai/features/website/ai-landing-page-builder
  and two PDF captures): white page (was Magnific cream `#f4f3ef`); a shared `views/mag/SectionHead`
  (24px Clash heading left, 15px `text-black/50` description `max-w-md` right, optional action) on Models,
  Start simple, Tools, Use cases and Originals; sections `py-20` with `border-t #ededed` dividers; `Cta`
  is a pill and its dark variant is action blue; FAQ uses EverAsk's two-column hairline rows (no cards,
  first answer open, ink plus/minus). Kept on purpose: the left-copy hero with the ticker, the dark Teams
  band, the cloud final CTA. Not added: EverAsk's breadcrumb, prompt composer in the hero, "How it works"
  and the iPhone/Mac app block (they would need EverAsk content for Magnific).
- **/magnific hero background** (19 Oct, from a "Mindloop" reference Hamza shared): `hero-dusk-wide.jpg`, a
  21:9 twilight over a cloud sea (periwinkle to peach), a hillside of lavender, blue and pink wildflowers,
  and one small figure sketching on a tablet, centred at the bottom so neither the copy (left) nor the
  ticker (right) covers him. GPT Image 2 for the look, then GPT Image 2.5 Flare with that image as
  reference to recentre the figure in the wider frame. `HERO_TONE` is the sky's top colour `#5b79be`; the
  left legibility tint is lighter (`8c` to `40` over 36%). The image no longer drifts; `ea-hero-bg.jpg` is
  deleted. Note: the hero no longer follows the EverAsk azure palette.
- **/magnific Teams in light mode** (19 Oct): white section with the shared `SectionHead`, `#f6f6f7`
  rounded cards for Business, Enterprise and "Enterprise features built for scale", ink headings at 20px,
  `text-black/50` copy. The two product-screenshot cards ("All the AI tools in a single place",
  "Unlimited users, flexible credits") were removed at Hamza's request, with `TEAM_HIGHLIGHTS` and
  `teams-tools.png` / `teams-credits.png`. The header description "Business and Enterprise plans for teams
  that create together." is new copy written for this layout; review it.
- **/magnific hero ticker removed** (19 Oct, Hamza): `Hero/HeroTicker` and the `HERO_TICKER*`/`HERO_ACCENT` constants are deleted; the hero keeps the left copy over the dusk image.
- **/magnific hero video reverted** (19 Oct, Hamza: "bring back the background image"): the dusk image `hero-dusk-wide.jpg` and its tint are back; the leap video files are removed (still in commit history).

## /magnific rebuilt on EverAsk's page system (19 Oct 2026)

Hamza shared full-page captures of three EverAsk feature pages (AI landing page builder, GPT Image 2, AI
pitch deck generator) and asked for the Magnific page to match that vibe. The page is now built from
EverAsk's component shapes (ported from `everask-landing-pages`), filled with the Magnific content and
assets that already existed. Hamza: **no prompt box in the hero.**

- `app/magnific.css` is now a copy of EverAsk's `app/globals.css` (full design system: tokens, `t-hero`,
  `t-title`, `t-item`, `t-statement`, `btn-primary`, `glass`, `grain`, `container-page`, `app-mock`).
- Page order (`views/mag/index.tsx`): SiteHeader → Hero (with the breadcrumbs inside) → logo row → Models → Steps ("How it
  works") → UseCases (moved above the z-fold, Hamza 19 Oct) → Suite (z-fold) → Features (tiles; moved below the z-fold at Hamza's request, 19 Oct) → StartSimple → Originals → Teams → StartBuilding pill →
  Faq → FinalCta (sky band) → AppTouchpoints → SiteFooter.
- **Header** (`SiteHeader`): ink on white above the breadcrumb and the hero frame, lifting into the floating
  panel on scroll (contained again, Hamza 19 Oct: "contain the hero section instead of full height like we
  had before"; the transparent-over-full-height treatment is in `548c5d0`). **Breadcrumbs**
  (`views/mag/Breadcrumbs/`, ported from EverAsk's `components/landing/Breadcrumbs.tsx`): on white between
  header and hero, rendered from `index.tsx`: Features › Upscaling models › Magnific, links absolute to
  everask.ai (`/features`, `/features/upscaling/models`). Hamza: Magnific sits under Upscaling models. That
  cluster is not on everask.ai yet (checked the live site and the source), so the href follows the
  model-cluster pattern and needs checking when it ships.
- **Hero**: EverAsk's sky-frame shape again: rounded frame (`rounded-[24px] sm:rounded-[36px]`, `px-2 sm:px-3`
  gutters) under the header and breadcrumb, `min-h-[max(640px,calc(100svh-140px))]`, the split image behind
  a neutral dark overlay, everything centred: the headline marks, subhead, white "Start upscaling".
- **Steps** (new, from `Steps.tsx`): three steps on one line, clay icons (editor, camera, upscale) in
  `bg-fill-1` tiles, thin arrows between. Copy is new, written from the page's own lines: "Describe or drop
  in" / "Direct the result" / "Export at full scale". **Review it.**
- **Features** (new, replaces the Tools rail; from `Features.tsx`): six tools as EverAsk gradient tiles
  (azure, sky, paper, royal, paper, navy), two-tone titles, "Learn more" arrow into EverAsk, grain on the
  dark blues. "Change camera angle" dropped (seven tiles don't grid). `views/mag/Tools/` deleted with
  `tool-all-tools.svg` and the chevron icons.
- **UseCases**: back to the original Magnific layout (Hamza, 19 Oct, after trying a z-fold, a blue-card
  bento, a sky-panel bento and a full-width-image bento): three `aspect-[395/526]` cards with the title and
  line in white over a bottom gradient (Advertising, Product shots, Brand campaigns), then the wide
  Filmmaking card (`h-[280px]`, `aspect-[1216/405]` from `md`). Files restored from commit `e9ed4f2`, with `text-white` added to the card
  titles (the EverAsk globals' `h1-h4` ink rule had made them dark over the photos).
  `panel-sky.webp` (Hamza's above-the-clouds photo) was deleted (still in commit `1e84595`).
- **StartBuilding** (new): centred action-blue pill "Start creating" into EverAsk, after Teams.
- **FinalCta**: EverAsk's sky band (rounded, `t-statement` "Be *Magnific.*" (Hamza dropped "inside EverAsk", 19 Oct), hero subhead,
  white "Start creating" + glass "See pricing" → everask.ai/pricing) over the dusk image. `cta-sky.jpg` deleted.
- **AppTouchpoints** (ported, "image-models" copy verbatim, devices from the EverAsk CDN, iPhone "Coming soon
  to the App Store", Mac links to the .dmg) now renders before the footer. **SiteFooter** refreshed to
  EverAsk's current footer (giant wordmark, absolute links).
- Verified: `tsc` clean (the only errors are stale `.next/types` for the HeyGen route group); no console or
  server errors; no horizontal overflow at 1024 or 375; h1 is 45px at 1024 and 38px at 375.
- **Start simple headings fixed** (19 Oct, Hamza: "text is not visible"): EverAsk's globals set `h1-h4 {
  color: var(--color-ink) }`, which turned the headings on the three dark bento cards ink-on-dark. The four
  card `h3`s now carry their card's text colour explicitly. Rule from this: after the stylesheet swap, any
  heading on a dark surface needs its own colour class.
- **Suite z-fold added** (19 Oct, Hamza pasted Magnific's "The full suite. Inside your canvas." markup, then
  asked for its layout): `views/mag/Suite/`, after Features and before Start simple. Centred heading "The
  full Magnific suite. Inside EverAsk." (30/36px Clash), then five equal two-column rows in a centred
  1000px measure (`sm:grid-cols-2`, `gap-12 md:gap-16` between rows): text left + 16:9 clip right on the
  first row, swapping each row, scroll-driven ease-in via `.mag-zfold-row`. Rows: Upscale, Generate,
  Remove background, Reframe, Relight, copy verbatim from Magnific (it still says "your timeline" / "your
  editor", the plugins framing). **The five clips are hotlinked from media.magnific.com
  (`destacado_1-5.webm`)**; copy them into `public/assets/mag` (and compress) before production.
- **Hero background** (19 Oct, Hamza shared magnific.com's own upscaler hero, a before/after split of a
  woman reading a diner menu: "create a hero background image like this", then "move this slider down",
  "make these prominent too", "could you make them draggable too?"): a real comparison slider,
  `views/mag/Hero/HeroCompare.tsx` (client). Two full-frame layers from one GPT Image 2 still (21:9, 2K,
  asset `cbccd10f`: a woman in a cobalt work jacket at a photo-lab light table holding negatives to a tall
  window, azure palette, a red grease pencil as the one warm accent, 1980s grain): `hero-after.jpg` (the
  still, lightly sharpened, 246 KB) and `hero-before.jpg` (a 1/4-scale copy JPEG-encoded at quality 22 and
  scaled back up, blurred 2.4, slightly desaturated, 112 KB), made by `scratchpad/split/layers.js` (session
  scratchpad only; `split.js` there bakes a static split if ever wanted). The before layer is clipped with
  `clip-path: inset(0 <100-pos>% 0 0)`; a 1px white (80%) divider and a 36px round white handle (faint ring, soft shadow, chevrons at 70% ink;
  Hamza: "minimal arrows", then "too harsh, make them minimal and mature") follow `pos` (starts at 50%, handle at 80% of the frame height, under the copy). Drag the handle
  (pointer capture, `touch-none`), or focus it and use the arrow keys (Shift for 10%), Home/End. The hero's
  copy block is `pointer-events-none` (button `pointer-events-auto`) so the handle under it can be grabbed
  (Hamza: "I can't click on it, maybe because of the overlay"). Idle demo
  (Hamza, 19 Oct): `demoDelay` ms after the slider is half in view (1.5 s by default; the Magnific hero passes
  1000, Hamza: "move the slider after 1 second") (IntersectionObserver, with an 800 ms geometry poll as
  fallback) it jumps to 100 (the right edge, all "before"), glides left across the whole frame to 0 (the whole
  enhanced picture) in 1.8 s (Hamza: "from right to left"), holds 0.9 s and glides back to its start in
  1.3 s, once, on
  `setTimeout`s with a 1.3 s CSS transition on the clip, divider and handle (no animation frames: the
  browser pane never ticks them, and throttled tabs would stall); any drag or key press cancels it; off under
  reduced motion; `demo={false}` turns it off. The same component drives every slider on /topaz. Both layers
  are `object-cover object-[60%_50%]`. `HERO_TONE` `#61727a` only fills the frame before the images load.
  The sampled-tone gradient and the overlay-blend grain are gone (Hamza: "why did you add a white overlay";
  they read as a veil); in their place a neutral `bg-black/35` plus a vertical band of a further 22% black
  through the middle, because with no overlay "the text is barely visible". Earlier hero media, all in git
  history: the baked `hero-split.jpg` (`5247567`), Magnific's Upscale clip (`93a7781`), the cloud clips
  (`548c5d0`, `daef238`, `771fa40`, `41c58c8`, `6e28df2`), `hero-dusk-wide.jpg` (`e9ed4f2`).
- **Recreation attempts, not used** (19 Oct): Hamza asked for the clip recreated with a bluer sky, then
  gloomier, then "like these clouds" (EverAsk's above-the-clouds hero). Stills made with GPT Image 2 /
  2.5 Flare and two Kling 2.6 Pro animations exist in the ImagineArt (Official) workspace: still
  `39434a24` (azure sky, lake), gloomy still `241e8d80`, cloud-sea still `5542a03c`, videos `01a1531c`
  (lake) and `01a1531e` (cloud sea, 1920×1080, 5 s, 9.7 MB, has audio). He then chose to keep his own clip
  with a grade instead. Local copies are in the session scratchpad only.
- **Suite rows span the container** (19 Oct, Hamza: "not respecting the page container width"): the
  `max-w-[1000px] mx-auto` on the suite list is gone; rows run the full `mag-container`.
- **Em-dashes removed** (19 Oct, Hamza, both pages): the HeyGen page had none; eleven on the Magnific page
  (FAQ, Features intro, Suite rows, Teams, logo-row line, Start simple) became colons, commas, full stops or
  parentheses. Rule from now on: no em-dashes in copy.
- **Hero headline** (19 Oct, Hamza pasted magnific.com's nav SVG, then asked for the EverAsk logo too,
  then "maybe don't use everask logo in title"; the size went 68 → 48 → 58px max after "reduce the title
  size" and "too small now"): `views/mag/Hero/MagnificWordmark.tsx` (the path in `currentColor`) +
  "inside" (`HERO_HEADLINE`) + "EverAsk" in Instrument Serif italic (1.08em), white on one
  `flex-nowrap whitespace-nowrap` line. The h1 is `clamp(22px, 3.9vw, 58px)` (its own style, not
  `t-hero`, so the line fits a 375px phone). The Magnific SVG is `h-[1.14em]` because its glyphs span 27
  of its 44 viewBox units, which puts their cap height on the line's. The badge pill is gone. The old
  headline moved into the subhead: "The creative platform to direct your best work. Every Magnific model
  for video, image and audio, with intelligent workflows for professional control, right inside EverAsk."
  (new copy; review).
- **Hero legibility** (19 Oct, Hamza: "text is barely visible because of the video", then the radial
  scrim "is not fitting well" and was removed): the top-down tone gradient runs through the whole frame
  (`e6` → `b3` at 35% → `59` at 65% → `1a`) and the text shadows are heavy (`0_2px_24px rgba(0,30,80,0.55)`
  on the h1, `0_1px_16px rgba(0,30,80,0.6)` on the subhead, full white). No other overlay.
- **HeyGen breadcrumbs** (19 Oct, Hamza: "it'll be under Avatar Models"): `views/heygen/Breadcrumbs/`, EverAsk's
  `onFilm` variant (white over the hero video, under the transparent header, `absolute top-[76px]` inside the
  hero `section`, which now has `id="top"`): Features › Avatar models › HeyGen. The "Avatar models" href is
  `/features/avatar/models` by the model-cluster pattern; that cluster is not on everask.ai yet, so check it
  when it ships.
- **Models marquee compacted** (19 Oct, Hamza: "taking too much space"): the 220/280px white tiles (invisible
  on the white page) are now 48px `#f6f6f7` chips (`rounded-pill px-5`, icon + name) in the same marquee,
  with the rail's edges faded by a mask; section `py-14`, rail `mt-8`.

## /magnific is now an upscaling page (19 Oct 2026)

Hamza: "magnific page will only be relevant to Upscale", content and assets to come from
magnific.com/ai/image-upscaler (and, for the video half, /ai/video-upscaler). The site 403s plain fetches;
the copy and media URLs were read through the browser pane. Everything not about upscaling was removed
("remove the remaining things that are not relevant"; he confirmed removing the Start simple bento).

- **Page order** (`views/mag/index.tsx`): SiteHeader → Breadcrumbs → Hero → logo row → UseCases
  (now the "Enhance detail, preserve intent" advantages) → Suite (now the upscalers z-fold) → Features
  (upscaler numbers) → StartBuilding → Faq → FinalCta → AppTouchpoints → SiteFooter.
- **Removed** with their folders and assets: Models marquee (`model-*.svg`), StartSimple (`start-*`),
  Originals (`original-*`, `ea-original-*`), Teams (`clay-chart/headset/key/legal/lock.png`),
  the old use-case photos (`usecase-*`), `suite-panel.jpg`, and the unused clay icons (camera, eraser,
  imagegen, speaker, videogen). All in commit `f32b2d5` if wanted back.
- **Hero**: same Upscale clip; subhead now "Bring out crisp detail and rich texture with Magnific's upscalers:
  images up to 16× clarity, 10K with the Magnific model, and video up to Ultra HD 4K at 60 fps. Right inside
  EverAsk." (written from the two pages' hero lines); button "Start upscaling" (also on the section CTAs,
  the pill and the final CTA).
- **Steps ("How it works") removed** (Hamza, 19 Oct) together with the last clay icons (`clay-editor/toggles/
  upscale.png`); the merged three-step copy is in commit `d0ea2f8`. Just before that he asked for the clay
  icons to become matte white sculpted 3D glyphs (like EverAsk's model marks); three were generated with GPT
  Image 2.5 Flare on transparent backgrounds (upload tray, sliders, enlarge frame) and sit unused in the
  ImagineArt (Official) workspace: `22007841`, `8395e89e`, `269f7913`.
- **UseCases**: a 2×2 grid of whole images (Hamza, 19 Oct: "the images aspect ratio are very important, the
  bento grid is cropping it out"; the earlier three-up + wide overlay layout cropped the 4:3 sources): every
  frame is 4:3 (`aspectRatio: 4/3`, `rounded-[24px]`), the caption in ink (20px Clash) and `text-black/50`
  under it. Cards, copy verbatim: "Sharper results, same image" (`up-sharper.jpg`, the 4K/8K/10K face),
  "Contextual textures and details" (`up-textures.jpg`, the pie), "Bulk upscaling" (`up-bulk.jpg`, the
  stacked eyes), "Upscale videos up to 4K" (`up-video-4k.jpg`, the surfer).
- **Suite** → "Every Magnific upscaler. Inside EverAsk.", five rows, copy verbatim: Magnific AI Upscaler
  (`up-magnific-model.jpg`), Creative control with AI (`up-creative.jpg`), Fast, clean upscaling
  (`up-classic.jpg`), Increase video resolution (`up-video-resolution.webm`, the site's own 3.4 s clip,
  200 KB), Instantly upscale videos to Ultra HD 4K (`up-video-uhd.jpg`). Rows take `image` or `video` and a `ratio`
  (1:1 for the four stills, 4:3 for the clip) so the frame matches the media and nothing is cropped (Hamza's
  aspect-ratio rule, 19 Oct).
  **No more hotlinks to media.magnific.com**; the `destacado_*` suite clips are gone.
- **Features** → "Pick a model, start upscaling": Up to 16× clarity / Up to 10K with Magnific / Creativity
  and Resemblance sliders / Bulk upscaling, up to 20 images / Video up to Ultra HD 4K / Frame rates up to
  60 fps.
- **Faq**: nine items from both pages (ours first: "Can I use Magnific's upscalers inside EverAsk?"), formats
  merged into one answer, video output options + length merged, train/ownership merged across image and
  video. Magnific's plan and credit questions were left out (EverAsk pricing unknown). "16×" was added to
  the "What is Magnific Upscaler?" answer where the source says "up to resolution" (a gap in their copy).
- **SEO** (`config.ts`, Topaz): title "Topaz inside EverAsk: image and video upscaling, fix blur, noise and low
  resolution". (Magnific:) title "Magnific Upscaler inside EverAsk: images to 16×, video to 4K".
- **Assets** (19 Oct, Hamza: "regenerate all images slightly differently, different person, change in color so
  it is not a duplicate of magnific"): the eight section images are now `up2-*.jpg`, GPT Image 2 recreations
  of Magnific's compositions with different people, subjects and a cool EverAsk palette (one vermilion
  accent each): a bearded man's mouth with 2K/4K/8K/10K pills (`up2-sharper`, then dropped: Hamza asked for the old
  "Sharper results, same image" too, so `up-sharper.jpg`, Magnific's 4K/8K/10K face, is back), ramen with a focus bracket
  (`up2-textures`, then dropped: Hamza asked for the old "Contextual textures and details" too, so
  `up-textures.jpg`, Magnific's pie with the focus bracket, is back), fanned cards of an amber eye (`up2-bulk`, then dropped: Hamza asked for "the original bulk upscaling
  image", so `up-bulk.jpg`, Magnific's stacked-eyes photo, is back for that card), a train timetable with the divider and arrows
  (`up2-magnific-model`), matcha cake with stacked variants (`up2-creative`, then dropped: Hamza asked for the previous "Creative
  control with AI" image, so `up-creative.jpg`, Magnific's stacked pie slices, is back), an East Asian man with
  Sharpness/Grain sliders (`up2-classic`), a skateboarder with a detail inset (`up2-video-4k`), a woman in a
  mustard coat with 1080p/4K frames (`up2-video-uhd`). ImagineArt assets `3ae47fb4`, `9f191659`, `6c8eaab7`,
  `752c78a1`, `48b0fb8a`, `ffeb7862`, `6d5a6db5`, `0138b99f`. The other Magnific-sourced `up-*.jpg` are in commit
  `222ff4a`. The `up-video-resolution.webm` clip in the suite is still Magnific's own.

## /topaz: Topaz Photo inside EverAsk (19 Oct 2026)

Hamza: a third page for Topaz (EverAsk will have their API), researched deeply from
topazlabs.com/topaz-photo; first built in EverAsk's own arrangement, then "I want the layout to be like
Topaz page", so the page now follows **Topaz's section order** (minus pricing) in EverAsk's register
(white, ink Clash type, azure action, rounded frames). Route `app/(magnific)/topaz/page.tsx` (same route
group and CSS as /magnific: EverAsk globals + `views/mag/styles.css`), view `views/topaz/`. Reused from
`views/mag`: `SiteHeader`, `AppTouchpoints`, `SiteFooter`, `Lockup.constants` (EVERASK_BRAND),
`Faq/use-faq` + `Faq.types`, and `Hero/HeroCompare` (the draggable before/after). topazlabs.com serves to
curl; the page HTML, text and their before/after pairs are in the session scratchpad for reference only.
The first EverAsk-style version (tool-tab hero, stats, hairline tool list, z-fold, model cards) is commit
`7bc538b`.

- **Section order** (`views/topaz/index.tsx`), each mirroring Topaz's photo page, with the video block added: Breadcrumbs (Features › Upscaling
  models › Topaz) → **Hero** (the Magnific hero's layout, Hamza 19 Oct, after a two-column and then a full-width version:
  the rounded frame `min-h-[max(640px,calc(100svh-140px))]`, Topaz's parrot clarity pair filling it with
  **EnhanceLoupe** (`Hero/EnhanceLoupe.tsx`, client, `fill` mode) live underneath: Topaz's
  "before-after-enhance-box" rebuilt, the soft before covers the frame and a square window (42% of the
  width, max 480px) follows the pointer showing the after at 1.5× (both layers object-cover at the same
  size, so they stay aligned); on touch it shows while pressed, "Tap and hold". The copy is centred over a
  neutral dark overlay: Topaz wordmark + "inside *EverAsk*" on one line, Topaz's "Fix blur, noise and low
  resolution in one click." + our line as the subhead, white "Start enhancing"; the copy block passes
  pointer events through to the loupe except on the button. The image is cropped by the frame here, as on
  /magnific) → **Trusted** ("Over 2 billion images processed." + the video page's "3 million users." on the left, moved here when Hamza removed the review
  cards; their "Trusted by major companies" names as type on the right: Google, Coca-Cola, Target, NVIDIA,
  Tesla, Quora; no marks)
  → **Toolbox** ("Crystal clear. Highly detailed. Super focused." + their intro, then Topaz's own
  video-upscale clip as a muted loop in a full-width 16:9 frame (Hamza; the clip is square, so it crops
  top and bottom) where their app window sits (Hamza:
  "use the video here"; `tz-video-upscale.mp4`, from his `video-upscale-hero-opt.mp4`, 1920×1920, 13 s,
  9.5 MB → 1280², 30 fps, no audio, 3.3 MB, poster `tz-video-upscale-poster.jpg`); the six tool chips with line icons
  that sat above it were removed by Hamza, and `HERO_TOOLS` with them; the Meet grid's Color/Upscale tiles
  read `TOPAZ_MEDIA.hero` directly) →
  **Meet** (light, Hamza: "make the dark section in lightmode"; it was dark `#0d1117` like Topaz's: "Meet Topaz Photo" lockup, "Each tool gets it closer to perfect." + paragraph,
  one big Denoise slider (wren, at its own ratio), then a packed bento like Topaz's (Hamza: the
  earlier ratio-true grid "appears uneven"): a 4-column × 8-half-row grid that is a square overall, every
  tile filling its cell with `object-cover` (so these crop, as Topaz's do): Sharpen 2×4 (square), the Julia
  Cook quote 2×2, Upscale 2×2 on the left; Recover Faces 2×3, Lighting 2×2, Color 1×3 and Remove 1×3 on
  the right; phones stack the tiles at 4:3, then two cards: "Unlimited cloud
  rendering." (their copy + one line of ours) and "A seamless addition to your workflow." (ours; their
  plugin list and "Private local rendering" do not apply to the API)) → **VideoUpscale** (Hamza, 19 Oct: "we are offering both image and video upscales", from
  topazlabs.com/tools/video-upscale, which also serves to curl; its HTML and text are in the scratchpad):
  "Upscale almost any video." + their intro, then their four "Compare" audiences (Low-res or old video,
  Creators & editors, Marketing teams, Families & archivists) on Topaz's own before/after clip pairs as
  **VideoCompare** sliders (`views/topaz/VideoCompare/`, client: two muted loops kept in step, the before
  clipped to the handle, same handle, keys and idle sweep as HeroCompare, the sweep only on the first tile),
  as two rows, each a portrait clip beside a landscape one with the column widths set to the clips'
  ratios (`0.8fr 1.78fr`, mirrored on the second row) so both tiles in a row share one height, nothing
  cropped (Hamza: the 5/7-column bento "looks imbalanced"; phones stack them); then "Why Topaz's video
  upscaler" (their paragraph and three lines) beside their five key features as a hairline list, and a
  "Start upscaling video" button. Clips: `tz-v-{record,drone}-{before,after}.mp4` 1280×1600 and
  `tz-v-{sheep,skater}-*.mp4` 1280×720, all 6 s, 30 fps (from 60), crf 27, no audio, 0.5 to 2 MB each, with
  `tz-v-*-poster.jpg`; sources `downloads.topazlabs.com/web-assets/video-upscale-*-opt.mp4`) → **Years** ("Trusted by pro
  photographers for 20+ years." + paragraph + Charles D quote + CTA on the left; their four audiences as
  a 2×2 on the right with our pictures above each) → **CtaBand** ("12 groundbreaking AI tools. Trained on
  millions of images." on `#f6f6f7`, "Plus, unlimited cloud rendering.") → **Features** ("All features" as a two-column list of native `details` rows, ten tools; the "Latest
  features" image cards (Wonder Model, Healing Brush, Standard MAX) were removed by Hamza, `2c3d9e4` has them) → **Faq** (the Magnific page's layout, Hamza: heading left, hairline rows with ink plus/minus right,
  first answer open; nine items, three of them video (one ours, two verbatim from the video page); the centred rounded-row version Topaz uses is in `5ded266`) → FinalCta (EverAsk sky band, "Topaz Photo, *inside EverAsk.*") → AppTouchpoints → footer.
- **CompareTile** (`views/topaz/CompareTile/`): the bento tile with the draggable before/after (`HeroCompare`)
  inside, the tool's name top-left, Before/After pills at the bottom corners, handle mid-height. It
  replaced the hold-to-enhance tiles (Topaz's press-and-hold interaction, with a big centred press
  indicator) at Hamza's request: "instead of this, add the slider"; that component is in commit `95c143b`.
- **Topaz's own images** (Hamza: "use topaz images too"): `tz-*.jpg`, resized from topazlabs.com's
  demo files, each before/after pair at one size (ratios in `TOPAZ_MEDIA.tz`): the hero parrot clarity pair (1844:1312, `tz-clarity-*`, 2400 wide) under the loupe (the earlier
  3590:2394 parrot pair was dropped with the two-column hero), the mountain pair (`tz-mountain-*`, no longer on the page since the video took that band), and in Meet
  the wren (Denoise), highland cow (Sharpen, 1:1), face (Recover Faces, 1100:1284), lighting (5294:2264)
  and remove (2670:2412) tiles; their Wonder, Healing Brush and Standard MAX shots were on the Latest-features cards until those
  were removed (files pruned with them). Licence: Topaz's marketing images.
- **Our images** (all GPT Image 2, EverAsk palette, one vermilion accent each; `before` layers derived in sharp,
  `scratchpad/topaz/before.js`): a 3:4 kingfisher portrait (`02d16ab6`) was made for the tall hero frame, then Topaz's parrot took
  that spot, so its files were not kept (the asset is in the ImagineArt workspace); six 16:9 scenes at 1920×1080: night soup stall `1f6bce3e` (Denoise: grain
  overlay), heron lifting off `4c0c0671` (Sharpen: blur 5; files removed once the band went), old fisherman `b0634e9d` (Recover Faces: 1/5
  downscale + q40 JPEG + blur), dancer in a studio `176a403a` (Lighting: `linear(0.45,-6)`), whitewashed
  seaside street `c3dfd13d` (Color: warm-magenta tint), 1980s pier snapshot `b128bc89` (Upscale: 1/8
  downscale + q35 JPEG + blur); four 16:9 audience pictures `usecase-*.jpg`: arctic fox under the Milky Way
  `e6367dc8`, basketball jump shot `c67c91c8`, courtyard wedding dance `2bfd49f0`, gloved hands on a light
  table `8a41b4e9`. Our six 16:9 pairs drive the Toolbox tabs; Color and Upscale also sit in the Meet grid.
- **Copy**: Topaz's lines verbatim wherever the section has them (hero h1, intro, reviews, quotes, tool
  descriptions, audiences, models, CTA band). Ours: the eyebrow labels, hero subhead, the "now inside
  EverAsk" pills, the workflow card, the FAQ's first and third answers ("Are my photos uploaded?" says the
  image goes to Topaz's cloud rendering through the API; **review this claim**), the final CTA line. Topaz's
  page says both "11 AI-powered tools" and "12 groundbreaking AI tools"; both appear where they do on
  their page.
- **Left out on purpose**: pricing and plans, seats, system requirements, returns, the plugin host logos,
  "Private local rendering", the TIPA award and Mac/Windows labels, the mailing list, and (Hamza, after seeing them) the four
  Trustpilot review cards and the "Every pixel. Perfect." band (`bd869f5` has it). With the band gone the heron Sharpen pair had no
  place left, so `hero-sharpen-*.jpg` and its constant were removed (asset `4c0c0671` in the workspace).
- Checked in the browser at 1024px and 375px; no HeyGen/Magnific files changed.

## /genspark: Genspark inside EverAsk (19 Oct 2026)

Hamza: "build Genspark page… research in detail and create a page for it". genspark.ai itself is the app
(a composer and app tiles; Cloudflare blocks curl, read through the browser pane). The marketing copy lives
on genspark.ai/business and its product pages (/business/products, /super-agent, /sheets-slides), and the
brand rules on genspark.ai/brand/genspark: black, white and one blue accent `#0F7FFF`; the logo is always the
full lockup (icon + wordmark, never either alone, no effects); backgrounds should be solid colours, simple
gradients or "minimalist images with an ethereal, futuristic atmosphere". Their visuals are coded UI, not
photos or clips. Route `app/(magnific)/genspark/page.tsx` (same route group and CSS as /magnific and /topaz),
view `views/genspark/`. Reused from `views/mag`: `SiteHeader`, `SectionHead`, `AppTouchpoints`, `SiteFooter`,
`Lockup.constants`, `Faq/use-faq` + `Faq.types`.

- **Section order** (genspark.ai/business's, minus pricing and the blog): Breadcrumbs (Features › Agents ›
  Genspark; EverAsk has no Agents cluster page, href by pattern, check later) → **Hero** (the Magnific hero's
  layout: rounded frame, a generated still, the Genspark lockup (`Hero/GensparkLockup.tsx`, their
  dark-background SVG in currentColor, 534×121, `h-[1.1em]`) + "inside *EverAsk*", their hero line + ours,
  white "Start with Genspark") → **Proof** (7,000+ teams / 200+ connections / 70+ models, their figures) →
  **Surfaces** ("One workspace. Every job to be done." six soft cards, Genspark's own line per surface and a
  small coded picture of each in EverAsk tokens, `Surfaces/Mocks.tsx`: Super Agent trace, =ASK() sheet,
  slides storyboard, AI Browser trace, GenMail inbox, GenTeam roles; the numbers in the mocks are the ones on
  Genspark's pages) → **Connections** ("200+ connections…", their paragraph, tool names as chips) →
  **Capabilities** ("Everything a modern team needs…", six rows verbatim, hairline list) → **Teams**
  ("Purpose-built for the work each team owns.", only Finance has public copy, shown with their month-end
  table mock; the other four tabs are inert) → **Trust** ("Enterprise-grade from day one.", four cards
  verbatim, credited to Genspark in the intro) → "Start with Genspark" pill → **Faq** (Magnific layout, six:
  ours first, then Super Agent, Sheets & Slides, cloud sandboxes, training, models and tools, from their
  pages) → FinalCta (sky band, Genspark's "One workspace. *Every job to be done.*") → AppTouchpoints → footer.
- **Assets**: `hero-sphere.jpg`, GPT Image 2 (21:9, 2K, asset `14ec72ee`): a frosted glass sphere low over a
  hazy azure-to-blue gradient, after Genspark's background rule; the final CTA reuses `cta-sky-2.jpg`. Logo
  files and the research pages are in the session scratchpad (`genspark/`).
- **Copy**: Genspark's lines verbatim wherever a section has them (em-dashes replaced per the house rule).
  Ours: the hero's last sentence, the Surfaces intro's last sentence, the Trust intro, the first FAQ answer,
  the final CTA line, the SEO title/description, "Start with Genspark" CTAs. SecondBrain (their hardware
  device) is left out; GenMail and GenTeam are separate Genspark products (genmail.ai, genteam.ai) and are
  shown as surfaces because their Business page does.
- **Review**: whether EverAsk's Genspark integration really reaches all six surfaces (the page says
  "through Genspark's API"); the Agents breadcrumb href.

## /manus: Manus inside EverAsk (19 Oct 2026)

Hamza: "similarly for Manus". manus.im serves to curl; its homepage is the app ("What can I do for you?"
with a composer and Create slides / Build website / Create games / Video / Design chips), so the copy comes
from manus.im/features (the index: Build, Create, Research, Automate, Connectors) and the feature pages
(/features/wide-research, /automations, /cloud-computer, /manus-browser-operator, /connectors, /projects,
/webapp), the Manus 2.0 launch post (28 Sep 2026) and manus.im/brand (black `#34322D`, gray `#F8F8F8`,
white; Libre Baskerville serif + DM Sans; the lockup is the hand glyph with the serif wordmark, never
rotated, flipped, stroked, outlined, filled or recoloured). Their visuals are coded UI and YouTube embeds,
no photos. Route `app/(magnific)/manus/page.tsx` (same route group and CSS as the other pages), view
`views/manus/`. Reused from `views/mag`: `SiteHeader`, `SectionHead`, `AppTouchpoints`, `SiteFooter`,
`Lockup.constants`, `Faq/use-faq` + `Faq.types`.

- **Section order**: Breadcrumbs (Features › Agents › Manus, href by pattern) → **Hero** (the Magnific
  hero's layout, a generated still, `Hero/ManusLockup.tsx` = their glyph SVG (60×60, from the brand page)
  + the serif wordmark paths from manus.im's header (88×38 box, cropped to the letters), `text-[1.12em]`
  on the line + "inside *EverAsk*", their tagline "Less structure, more intelligence." + their features
  line + ours, white "Start with Manus") → **Proof** (8,000+ apps via Zapier; hundreds of parallel
  sub-agents; Cascade's 28.2% less time / 32% less cost "in one tested configuration", all their
  figures) → **Features** (manus.im/features verbatim: five columns, Build / Create / Research /
  Automate / Connectors, each item's name and line) → **Deep** (z-fold of four feature pages, their
  headline and paragraph beside a coded picture in `Deep/Mocks.tsx`: Wide Research fan-out, Automations'
  Updates list, Cloud Computer status, Browser Operator steps; the numbers in the mocks are illustrative
  except the Updates rows, which are the examples on their page) → **Connectors** (their connectors
  page line and intro, catalogue names as chips) → **Studio** ("Introducing Manus 2.0": Cascade, Video
  Editor, Game Dev, verbatim lines from the post) → "Start with Manus" pill → **Faq** (Magnific layout,
  six: ours first, then Wide Research, Automations, Cloud Computer, Browser Operator passwords, which
  apps, from their pages) → FinalCta (sky band, their "Less structure, *more intelligence.*") →
  AppTouchpoints → footer.
- **Assets**: `hero-hand.jpg`, GPT Image 2 (21:9, 2K, asset `51df747e`): a white plaster hand reaching
  into an azure gradient, after their "Hands On AI" line and hand glyph; the final CTA reuses
  `cta-sky-2.jpg`. Brand SVGs and the research pages are in the session scratchpad (`manus/`).
- **Copy**: Manus's lines verbatim wherever a section has them (em-dashes replaced). Ours: the hero's last
  sentence, the Features and Deep intros' EverAsk lines, the Deep section title, the first FAQ answer, the
  final CTA line, the SEO title/description, "Start with Manus" CTAs. Left out: pricing, Cue, SecondBrain-
  style hardware, Remote Control, the comparison tables, tool SEO pages.
- **Review**: whether EverAsk's Manus integration reaches all of this ("through Manus's API"); the Agents
  breadcrumb href.
