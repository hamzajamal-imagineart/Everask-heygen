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
- **Badge icons** (19 Oct 2026, Hamza: "replace these 3d icons with simple 2d filled icons", then "don't use
  filled icons, let's use line icons, also the pill background is too bluish"): the six section badges now
  draw inline line glyphs (`views/heygen/Badge/BadgeIcon.tsx`, 24-unit grid, 1.6 stroke, round caps, 20px,
  currentColor): person, magnifier, robot, clapperboard, speech bubbles, toolbox. `Badge` follows EverAsk's
  `chip` (tint `#edf3ff` panel, action-blue label) everywhere; the per-section tints (mist `#bfd5ff` on AI
  Studio, cream on Video Agent) are gone, only Tools keeps a white pill on its tint band. `Badge` and
  `SectionHead` take `icon` as a `BadgeIconName`. The clay `badge-*.png` set (GPT Image 2, blue/cream/
  vermilion, 44px) is in commit `72823c9`. The nine feature-card icons (Hamza: "you didn't change these icons") are line glyphs too: pencil, puzzle,
  camcorder, globe, mic, rocket, checklist, spotlight, cog, drawn at 24px on a 48px tint disc. All glyphs live
  in `views/heygen/LineIcon/` (`LineIconName`); `FeatureItem.icon` is a name. The clay `card-*.png` set is in
  commit `75c772a`. The compliance badges are still clay.
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

## /genspark and /manus refined: no coded mocks, no stat rows (19 Oct 2026)

Hamza: "both of these pages look AI generated. Think as if you are a Senior designer at Higgsfield… refine
the page using everask branding". What read as generated: the coded UI mocks (fake traces, sheets, inboxes),
the big-number proof rows, chip clouds, six-card grids of equal weight, and inert tabs. The refinement
replaces all of that with the patterns the other EverAsk pages already use: photo z-folds, EverAsk gradient
tiles, hairline lists, one quiet proof line. Copy is unchanged (still Genspark's and Manus's lines verbatim);
only the containers changed. The sections above for /genspark and /manus describe the first build; this
section is current.

- **Genspark order**: Breadcrumbs → Hero (same frame, `hero-sphere.jpg`; subhead now "The all-in-one AI
  workspace, now inside EverAsk. Autonomous agents, AI-native docs, sheets and slides, and a browser that
  runs errands.") → one muted proof line ("Genspark is trusted by 7,000+ world-class teams", their figure)
  → **Surfaces** (photo z-fold, `.mag-zfold-row`, four rows: Super Agent / AI Sheets & Slides / AI Browser /
  GenMail, their line per surface beside an editorial still) → **Capabilities** (six EverAsk gradient tiles,
  `FEATURE_*` from `views/mag/Features/Features.constants`, two-tone titles, their six lines) →
  **Connections** (quiet row: 24px line + muted tool names, no chips) → **Trust** (hairline list, four
  items verbatim) → Faq → FinalCta → AppTouchpoints → footer. Removed: Proof stats, Teams tabs,
  `Surfaces/Mocks.tsx`, GenTeam surface.
- **Manus order**: Breadcrumbs → Hero (`hero-hand.jpg`; subhead "Less structure, more intelligence. Build
  apps and games, create video and slides, research at scale and automate the work that keeps coming
  back. Now inside EverAsk.") → **Deep** (photo z-fold, four rows: Wide Research / Automations / Cloud
  Computer / Browser Operator, their headline and paragraph beside a still) → **Features** (the five-column
  hairline index, unchanged) → **Studio** (three gradient tiles azure / sky / navy: Cascade, Video Editor,
  Game Dev, "Try it in EverAsk") → **Connectors** (quiet row, no chips) → Faq → FinalCta → AppTouchpoints →
  footer. Removed: Proof stats, `Deep/Mocks.tsx`.
- **Stills** (GPT Image 2, 16:9, installed as 1184×672 jpeg q84; the house look: 1975–85 film grain, azure
  and ink, one subject, one vermilion accent, no screens with readable UI):
  `genspark/row-agent.jpg` (desk with a row of index cards and a pen, asset `bca0fcb8`),
  `genspark/row-sheets.jpg` (boardroom table with a fanned deck, `de56063f`),
  `genspark/row-browser.jpg` (hands at a laptop by a night window, red note, `4182d2f6`),
  `genspark/row-mail.jpg` (stack of envelopes, wax seal, letter opener, `7dafc668`);
  `manus/row-research.jpg` (wall of index cards, one red pin, `d9ed1885`),
  `manus/row-automations.jpg` (alarm clock by a window, `d17657bb`),
  `manus/row-cloud.jpg` (white computer box on a ridge above clouds, `5e1a5c88`),
  `manus/row-browser.jpg` (hands on a trackpad, `ad1be63a`).
  Note for anyone regenerating: both pages have a `row-browser` still; download each to its own scratchpad
  name, the first install overwrote one with the other.
- **Verified** at 1024 and 375 on both pages: section order, all stills loaded, no horizontal overflow, no
  em-dashes, `tsc` clean. Committed locally, not pushed (Hamza pushes on "push").
- **Review**: same open items as before (Agents breadcrumb href, "through … API" claims in the FAQs).

## HeyGen hero headline is the partner lockup (19 Oct 2026)

Hamza: "use the same HeyGen inside EverAsk, remove the pill… I wanted to replace this heading: AI videos
starring you, made in minutes". The HeyGen hero's h1 is now the same line the other partner pages use:
HeyGen's full logo (`views/heygen/Hero/HeyGenLockup.tsx`, the all-white SVG from heygen.com/brand-kit,
294×67, drawn in currentColor, `h-[1.3em]`) then "inside *EverAsk*", white, one line,
`clamp(20px, 3vw, 44px)` (Hamza: the first size "is too big"). The "HeyGen, now inside EverAsk" pill and the "AI videos starring you, made
in minutes" headline are gone; the subhead and CTA are unchanged. The SEO title still carries the old
line (config.ts), left as is.

Parked (Hamza: "hold the manus and genspark for now"): swapping the generated stills on /genspark and
/manus for the partners' own visuals. Collected so far in the session scratchpad (`sitemedia/`):
Manus's feature-page media (wide-research hero, automations cover + intro mp4, cloud-computer hero,
browser-operator hero, the features-index illustrations) and Genspark's coded product mocks frozen to
HTML (super-agent trace, sheets, browser, genmail; genspark.ai has no image files at all). Nothing from
this is wired into the pages yet.

## Topaz hero: loupe hides off the photo (20 Oct 2026)

Hamza: "I can't click on the CTA button because of the square hover box". The button was always the
top element (hit-test confirmed), but moving onto it fired `pointerleave` on the photo frame, and the
loupe then snapped back to the frame's centre, which is right behind the CTA, so the "After" box framed
the button. `EnhanceLoupe` now has an `away` state: leaving the photo (including onto the copy or the
button) hides the loupe until the pointer moves over the photo again. Before the first move it still
rests in the centre as a hint. Checked in the pane: loupe on over the photo, gone over the button, back
over the photo.
- Centre mark (Hamza, 20 Oct: "there should be an indication in the center of the box, a circle maybe"):
  the loupe now carries a 28px white ring (1.5px, faint dark halo) with a 4px dot at its centre, standing
  in for the hidden cursor. Checked: the ring centres on the pointer.
- Meet pill (Hamza, 20 Oct: "something is wrong here"): the 32px ink circle in the "Topaz Photo" pill held
  the whole "Topaz Labs" wordmark, clipped to "opaz L". It now holds only Topaz's stepped-squares mark
  (`views/topaz/Hero/TopazMark.tsx`, the wordmark's own three squares), 14px, centred.

## HeyGen Research: "Original Footage" brightened (20 Oct 2026)

Hamza: "this image is too dark". The file itself was dark (mean RGB about 66,56,46 against about 163 on the
"Avatar V Generated" tile beside it), no overlay on the page. It was lifted in sharp (gamma 1.6 on the
midtones, linear 1.18 + 6, saturation 1.02) to a mean of about 131,118,104, keeping the warm room tone,
and saved as `research-original-lit.jpg` (1920×1080, q86, 82 KB, down from a 940 KB PNG). The old
`research-original.png` is removed; it is in commit `9d679f1`.

## Video Agent slide 1 repaired (20 Oct 2026)

Hamza: "the blue in prompt box is getting bluish distorted". The 17 Oct pink-to-blue hue map had turned
every pinkish pixel blue: specks along the prompt box edge, around the send button and in the warm lamp
glows. No pre-recolour original exists (`c3c3aa4` already holds the recoloured file), so slide 1 was
repaired in sharp (`scratchpad/fix-slide1.js`): bluish pixels in warm, neutral or white patches replaced
from a median-9 copy (text cursor excluded), a clean white rounded box (rx 33) under the original box
interior, a redrawn `#2883fb` send button with a white arrow, and the blue frame redrawn with an
anti-aliased 88px rounded hole. Saved as `agent-slide-1-clean.jpg` (181 KB, was a 2 MB PNG).
Slides 2 and 3 are unchanged.

## Video Translation: four speaking clips on the language tabs (20 Oct 2026)

Hamza: "these are 4 videos of a person speaking in different languages, you can change it to someone else,
change the person in this image and create 4 videos for 5 seconds each. When I click on the tab, that
video will be played". The static `translation-video.png` (HeyGen's presenter) is gone.

- **Presenter**: GPT Image 2, 16:9 2K (asset `5445c048`): a man in his 40s, salt-and-pepper beard, camel
  coat over a black turtleneck, waist-up in a bright white gallery with a bronze sculpture behind,
  mid-sentence with open hands. Installed as the poster, `translation-poster.jpg` (1920×1080).
- **Clips**: Veo 3.1 Fast image-to-video from that still, 720p with native lip-synced speech, one line per
  language: "Welcome to the gallery. Let me show you around." / "Willkommen in der Galerie. Ich zeige
  Ihnen alles." / "갤러리에 오신 것을 환영합니다. 제가 안내해 드릴게요." / "Bienvenidos a la galería. Les
  muestro todo." (assets `01a157e2-bebf…`, `-c965…`, `-d4e3…`, `-de44…`). Veo's nearest length is 6 s, so
  German, Korean and Spanish were cut to 5 s (speech ends by about 4.75 s; 0.2 s audio fade). English speaks
  to nearly 6 s, so picture and sound were both sped 1.2× to 5 s, which keeps the lips in sync.
  Files `translation-{en,de,ko,es}.mp4`, h264 crf 23 + AAC 96k, faststart, 550 to 660 KB each.
- **Behaviour** (`Translation/use-translation.ts`): one `<video>` keyed by clip; a tab click swaps the clip
  and plays it from the start, looping. It starts muted (autoplay rules); the top-right speaker button is
  now real (`Turn sound on/off`, line speaker icon with waves or a cross) and sound stays on across tabs.
  `icon-unmute.svg` was removed. Checked in the pane: each tab loads its clip, plays from 0, sound state
  carries over.

## Topaz split into /topaz-image and /topaz-video, with Topaz's model pickers (20 Oct 2026)

Hamza: "separate Topaz image and topaz video upscale... For image page, I want to highlight the list 1 and
for video I want to highlight list 2" (screenshots of Topaz's model dropdowns), "Do their original pages
mention these things? ... use the images and video assets from their pages".

- **Research**: the two dropdowns are Topaz's API model families. List 1 = **Gigapixel**
  (developer.topazlabs.com/image-models/gigapixel/*: API values "Standard V2", "Upscale High Fidelity V3",
  "High Fidelity V2", "Low Resolution V2", "CGI", "Text Refine", "Face Recovery V3"). List 2 = **Proteus**
  family (/video-models/proteus/*: prob-4, pnat-1, iris-3/iris-2, Dione ddv-3/dtv-4/dtd-4/dtvs-2/dtds-2,
  rhea-1, Theia thd-3/thf-4, Artemis ahq-12/alqs-2/alq-13…, Gaia gcg-5/ghq-5, Gaia 2). Each model page has
  an overview, key capabilities and before/after examples on downloads.topazlabs.com/web-assets/model-examples;
  the "Best for" lines come from their Model Selection guide (/getting-started/model-selection). Every page is
  available as Markdown (append `.md`; index at /llms.txt). topazlabs.com/topaz-video lists the same models in
  one line each. Copy is theirs verbatim (em-dashes replaced; Topaz's names from the dropdown, their doc
  titles in the overviews, e.g. "Standard 2", "Art & CGI", "Text & Shapes").
- **Routes**: `/topaz-image` (`views/topaz/index.tsx`) and `/topaz-video` (`views/topaz/video.tsx`); `/topaz`
  now redirects to `/topaz-image`. Configs `topazImageConfig` / `topazVideoConfig` (utm_lp per page).
  Breadcrumbs end "Topaz Image" / "Topaz Video".
- **Image page**: Breadcrumbs → Hero (parrot loupe, unchanged) → Trusted → **Models** (Gigapixel picker,
  replaces the Toolbox band, which is deleted) → Meet → Years → CtaBand → Features → Faq (image) → FinalCta
  ("Topaz Image, inside EverAsk.").
- **Video page**: Breadcrumbs → Hero (`kind="video"`: Topaz's `tz-video-upscale.mp4` fills the frame, same
  lockup, Topaz Video's line as the subhead) → Trusted ("3 million users. / Trusted by pros everywhere.") →
  **Models** (Proteus picker) → VideoUpscale (the four audiences + why/features, moved from the old page) →
  Faq (video) → FinalCta ("Topaz Video, inside EverAsk.").
- **Models** (`views/topaz/Models/`): Topaz's dropdown as a panel on the left (name + their one-liner, check
  on the picked row; models with variants list them under the row: Dione ×5, Theia ×2, Artemis HQ/MQ/LQ,
  Gaia CG / Gaia 2), the picked example on the right in a fixed-height stage at its own ratio (nothing
  crops, the layout doesn't jump), then name, "Best for" pill, overview, CTA and capabilities. Phones: the
  names become a scrolling row and variants become chips under the stage. Image models use `HeroCompare`,
  video models `VideoCompare`, Text Refine (no separate files in their docs) shows Topaz's own side-by-side
  still.
- **Media** (`public/assets/topaz/models/`, 25 MB, 58 files): image pairs are Topaz's examples cropped to a
  zoomed region at the image's own ratio (at full frame the difference is invisible, which is also why
  their compare viewer opens zoomed), before upsized to the after's size, 1200–1600 px, jpeg q84. Video
  pairs are their example clips, first 6 s, muted, crf 25 at 720p (Dione at its native 480p, crf 27;
  Artemis crf 28), with posters; Theia's and Artemis's variants share one before clip. Left out: Iris MQ
  (before 40 s vs after 9 s, can't sync), Gaia HQ (no example), Proteus's astronaut example (before and
  after differ in ratio). Scripts: `scratchpad/enc.sh`, `enc2.sh`.
- **FAQ**: `IMAGE_FAQ` / `VIDEO_FAQ`; ours first on each, then "Which … model should I pick?" from Topaz's
  Model Selection guide, then Topaz's answers. `useFaq(count)` now takes the item count (it used to size
  itself from Magnific's list, which only worked because both had nine).
- Checked in the pane at 1280 and 375: all 7 image and 16 video examples load and switch, both heroes
  play, no horizontal overflow, no em-dashes. The dev server had to be restarted once (stale Turbopack
  chunk after a git stash).
- **Review**: the image page's Meet/Years/Features still describe Topaz Photo's tools (denoise, sharpen,
  lighting…), not only upscaling; say if those should go. The "through Topaz's API" claims as before.

## Topaz Video hero: the loupe on Topaz Video's own clips (20 Oct 2026)

Hamza pasted Topaz Video's hero markup (`before-after-enhance-box`, `--scale: 1.5`, `face.mp4` under the
frame, `face-rhea1.mp4` inside the box, "Tap and hold"). The /topaz-video hero now runs the same
`EnhanceLoupe` as the image page, in a new `video` mode: the before clip loops under the frame, the after
clip plays inside the loupe and follows the before's playhead (re-synced on `timeupdate` past 0.1 s), and the
loupe hides with `visibility` instead of unmounting so the after clip isn't reloaded (the image loupe uses
the same hide now). Clips: `tz-video-face-before.mp4` (their 426×240 source at 852×480, 300 KB) and
`tz-video-face-after.mp4` (the Rhea 4K result at 1920×1080, 1.2 MB), 6.16 s, 25 fps, no audio, poster
`tz-video-face-poster.jpg`. The square `tz-video-upscale.mp4` and its poster were no longer used anywhere
and were removed (in `df15712`). Checked at 1280: both clips play, drift about 0.04 s, loupe shows; the
image page's loupe still works.

## Topaz Video models: zoomed crops, trimmed edges, no grey frame (20 Oct 2026)

Hamza: "in some videos, I see no difference in before and after", "a black line on left and right of a
video", then "re-encode the upscaling model clips as zoomed crops like the image ones, keep Dione and Artemis
full frame, and trim the black edges from all clips", and "a lot of grey space at top and bottom, make the
video cover full height".

- **Why**: the page plays each clip about 760 px wide, so 1080p→4K gains vanished (fine-detail ratio after/before
  at page size was about 1 for Rhea, Gaia CG and only ~2 for the rest); the black lines were 1–2 px pillarbox
  columns baked into Topaz's own files (Gaia CG, Proteus Natural; Rhea had a 1 px top row).
- **Upscaling models** (`scratchpad/zoom.py`): before and after cropped to the same proportional region, at the
  clip's own ratio, around the subject: Proteus (cuttlefish head, 25% of the width, 1080p source), Proteus
  Natural (face, 40%), Iris (face, 45%), Theia ×2 (chameleon eye, 25%), Gaia CG (figure, 50%), Gaia 2 (clock
  and figures, 50%). Rhea's own docs example (the interview) barely differs even at 1:1 in Topaz's files, so the
  Rhea row now uses Topaz Video's hero pair, which is also Rhea (`face.mp4` → `face-rhea1.mp4`), zoomed on the
  face (50%). Fine-detail gain at page size is now ×1.3 (Gaia CG) to ×4 (Theia, Proteus).
- **Dione and Artemis** (`scratchpad/trim.sh`): full frame, 2% trimmed from every edge and scaled back to the
  same size (shape unchanged). No clip has a dark border now (measured).
- **Frame**: video examples no longer sit in the fixed-height grey stage; the frame is the clip itself, full
  column width at the clip's ratio (16:9 models 789×444 at 1280, Dione/Artemis about 4:3), so no grey and no
  crop. Image examples keep the fixed-height stage.
- Checked at 1280: all 16 clips load and play, every frame matches its clip's ratio.

## Topaz model pickers: detail block in EverAsk's register (20 Oct 2026)

Hamza: "this text and design looks so AI generated, it should feel like a good design, are you using Everask
skill" (with `~/Downloads/everask-creative-skill.zip`). That skill (computer-creative: SKILL.md, TEAM-README,
14 references) is the brand **artwork** contract (1975–85 analog grain, `#0088FF` anchor, one subject, one
vermilion accent, three modes); it has no rules for page layout or copy. Its field note that model-output
stills use the lighter finish applies to generated example art, not to Topaz's own examples used here.

The block under each model's example was a tinted "Best for" pill, the full grey overview paragraph, a
button under it and a dotted bullet list. It now follows everask-landing-pages' `ShowcaseSpecs`: a two-tone
line (variant or model name in ink, Topaz's one-liner in `text-black/40`), the first sentence of Topaz's
overview, "Try <model>" beside it (left-aligned on phones), then the facts as plain type in a hairline
`dl` grid, two columns: "Best for" (label above) and Topaz's capabilities, trimmed to an even count so
the grid closes. No pills, no bullets. Same component on /topaz-image and /topaz-video.

## Topaz model pickers: list redesigned, images fill their frame (20 Oct 2026)

- **List** (Hamza: "could you make this panel good in design too?"): no boxed panel, no grey row fill, no
  check marks. In the manner of EverAsk's own pickers (everask-landing-pages `CinemaEdit`): from lg a hairline
  index where every model's name is muted (`text-black/40`, 18px Clash), the picked one goes ink with a 2px
  azure rule on its left and Topaz's one-liner under it; variants sit under that as a quiet row of text
  toggles with an ink underline on the picked one, the family name dropped ("DV · TV · Robust · Dehalo ·
  Robust Dehalo"; kept whole when the rest starts with a number, "Gaia 2 (Animation)"). Phones: names are a
  scrolling row of text tabs with an azure underline; variant toggles under the example, same style.
- **Images fill their frame** (Hamza: "similarly the image should take the full height and width"): the fixed-
  height grey stage is gone for images too; every example is a frame cut to its own ratio, full column
  width. The two portrait examples were re-cut from Topaz's sources as 4:3 landscape regions around the face
  (High Fidelity V2: 368×276 of the 400×600 source; Faces: 460×345 of 500×889; both 1600×1200) so no frame
  runs taller than the page. Checked: all seven frames match their image's ratio at 1280; phone fits.
- **List reverted and refined** (Hamza: "the left panel doesn't look good, the previous one was better, just
  make adjustment to it"): back to the boxed panel (border, name + one-liner rows, grey fill on the picked
  row). Adjustments: the picked row is one soft grey block that also holds its variants as a segmented row
  of white pills (family name dropped, as before); the black check box is now an 18px azure circle with a
  white check; unpicked names sit at `text-black/75` and their lines at `text-black/40` until hovered; lines
  clamp to two. Phones: the previous pill row (ink pill for the picked model) and bordered variant chips.
- **Type on the site's scale only** (Hamza: "are you using the right colors and font-sizes from the skill
  file?", then "switch the Topaz picker's font sizes to the site's type-scale tokens"). The creative skill
  defines colours for artwork (`#0088FF` = `--color-action`, vermilion, cream) and no type sizes; the type
  scale lives in `app/magnific.css` (copied from everask-landing-pages). The picker now uses: `t-item`
  (16/1.5, 500) for model names and fact text, body (15/1.7) for one-liners and the lead, `t-section`
  (24–32) for the detail heading, `kicker` (11, caps) for "Best for" and the Before/After labels (also in
  `VideoCompare`), and the DS segmented control (`seg`, `seg-item`, `seg-item-on`, 14) for variants on
  desktop and phones. No raw px sizes remain in `views/topaz/Models/index.tsx`. Name colours are restated
  with `!` because `t-item` sets ink. Pane note: the browser pane freezes CSS transitions at t=0 when
  backgrounded, so a just-picked pill can read as grey in a check; `el.getAnimations().forEach(a => a.finish())`
  shows the settled state.

## Trust bars and testimonials removed from every page (20 Oct 2026)

Hamza: "remove trust bars ... or any other testimonial type of things", after the copyright review: these
were partners' customers, ratings and quotes shown uncredited on EverAsk-branded pages, which reads as
EverAsk's own social proof.

- **HeyGen**: `TrustBar` deleted (G2 4.8/5 from 1,000+ reviews, G2 #1 Most realistic avatars, Forbes AI 50,
  "Trusted by over 1,000,000 developers…" and 13 customer logos: Google, Spring Health, Workday, trivago,
  Miro, J.P. Morgan, Bosch, HubSpot, HP, Intel, DHL, Autodesk, Coursera). `ProofRow` (in Avatar,
  Translation, Video Agent, AI Studio) lost its G2 badge and "1,000+ reviews. Trusted by 85% of the Fortune
  100"; it is now just the centred "Get started for free" button.
- **Magnific**: the "Magnific is trusted by 1M+ subscribers…" line and its customer-logo row (Coca-Cola,
  Ogilvy, R/GA, Wonder, Guess, Delivery Hero) under the hero; `HERO_LOGOS` removed.
- **Topaz** (both pages): the `Trusted` strip ("Over 2 billion images processed." / "3 million users." /
  "Trusted by pros everywhere." + Google, Coca-Cola, Target, NVIDIA, Tesla, Quora) deleted. Years: the
  Charles D Trustpilot quote removed and the heading "Trusted by pro photographers for 20+ years." replaced
  by "Two decades of photo enhancement." (from their own paragraph). Meet: Julia Cook's quote tile removed;
  Upscale now spans rows 5–8 so the 4×8 bento still closes.
- **Genspark**: "Genspark is trusted by 7,000+ world-class teams" removed. **Manus**: nothing to remove.
- Assets pruned: `public/assets/heygen/logo-01…13.png`, `icon-g2.svg`, `icon-star.svg`, `icon-forbes.svg`,
  `badge-g2.png`; `public/assets/mag/logo-{coca-cola,deliveryhero,guess,ogilvy,rga,wonder}.svg`. All in
  commit `5668642` if wanted back. All six pages render; their HTML has none of these lines.
- **Still on the HeyGen page, not a testimonial but worth a look**: the Trust/compliance section shows
  GDPR, SOC 2 Type II, CCPA, AI Act and DPF badges with its intro reading "EverAsk", i.e. HeyGen's
  certifications presented as EverAsk's.
- **Model section headings on two lines** (Hamza, 20 Oct): "Precision video upscale / and enhancement" and, to
  match, "Precision upscaling / for images", via an explicit `<br />`. `SectionHead`'s `title` (views/mag) and
  `Models`' `title` now take a `ReactNode`; every other caller still passes a string.
- **Variant control aligned** (Hamza, 20 Oct: "this looks misaligned"): the desktop `seg` wrapped Dione's five
  variants into a ragged second line. It is now a two-column grid inside the same track, every item full
  cell width (160 px at 1280), the last item spanning both columns when the count is odd (Dione "Robust
  Dehalo", Artemis "Low Quality"). Theia and Gaia sit on one row. No label clips. Phones keep the scrolling
  segmented row.

## HeyGen AI Studio: EverAsk workspace mock from Figma (20 Oct 2026)

Hamza shared Figma frame "superagent" (file H-Drafts `2XejdX88EUrQyXNPF5E1ad`, node `866:14016`, 1920×1024:
EverAsk's agent chat on the left, the Images generation canvas on the right) to replace the AI Studio
section's image (`studio-app.png`, 2816×1754, HeyGen's own app screenshot), with text tweaks and resized to
fit. Built as code, not an export, so the copy is editable and it stays sharp:
`views/heygen/AiStudio/StudioApp.tsx` (client) lays the frame out on a fixed 1760×1100 canvas (the slot's
1.6 ratio; the Figma is 1.875) and scales it to the card's width with a ResizeObserver (0.65 at 1280 wide).
The Figma design-to-code guidance couldn't be loaded here, so it was built from the frame's render and
layer metadata; its SVGs came out as fragments, so the UI icons are drawn as 1.6-stroke line paths.

- **Copy changed to a HeyGen job** (all ours): chat title "Product launch video"; user "Make a 60-second
  launch video with my avatar"; reply "On it. I'll write the script and render it with your HeyGen avatar,
  then line up a Spanish version."; steps "Write a 60-second launch script" / "Render the video with HeyGen
  Avatar V" / "Translate to Spanish with lip-sync"; "Your launch video and its Spanish cut are in the canvas.
  Want captions or a vertical version for social next?"; model chip "HeyGen Avatar V"; footer "EverAsk can
  make mistakes…" (the Figma said Starty). Canvas tab "Videos"; settings popover "Video settings": Model
  HeyGen, Aspect ratio 16:9, Avatar "Avatar V", Voice "Warm"; first tile actions Edit / Captions /
  Translate; duration chips on every tile.
- **Tiles**: only clean presenter stills (the hero renders with baked captions were left out): six new GPT
  Image 2 stills in the hero tiles' pale-blue studio look, `studio-tile-1…6.jpg` (720 px, ~30 KB; assets
  `854239ed`, `405afaa2`, `b30941ca`, `7c42b0a4`, `b52b453b`, `c0b630e3`), plus hero-portfolio, -counsel,
  -productivity, -interview, -home, -therapist and translation-poster; the partly hidden bottom row repeats
  three. None of the Figma's stock generations are used.
- `studio-app.png` removed (in commit `0a5b7e3`). Checked at 1280 (all images load, no overflow) and 375
  (scales to a 279×174 miniature, as the old image did).
