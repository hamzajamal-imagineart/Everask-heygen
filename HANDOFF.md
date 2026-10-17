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
