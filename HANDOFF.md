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
