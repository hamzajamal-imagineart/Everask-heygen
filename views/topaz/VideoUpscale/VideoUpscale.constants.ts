import { TOPAZ_MEDIA } from "../media.constants";

/* Topaz's video-upscale page (topazlabs.com/tools/video-upscale): its four
   "Compare" audiences, each on one of Topaz's own before/after clip pairs,
   and its key features, copy verbatim. */
export const VIDEO_PAIRS = [
  { label: "Low-res or old video", line: "Bring clarity to past footage", pair: TOPAZ_MEDIA.tzVideo.record },
  { label: "Creators & editors", line: "Publish sharper, cleaner content", pair: TOPAZ_MEDIA.tzVideo.skater },
  { label: "Marketing teams", line: "Improve ad and promo video quality", pair: TOPAZ_MEDIA.tzVideo.drone },
  { label: "Families & archivists", line: "Restore precious memories in HD or 4K", pair: TOPAZ_MEDIA.tzVideo.sheep },
];

export const VIDEO_FEATURES = [
  { name: "Relative sharpening", body: "Recover crisp detail without overdoing it." },
  { name: "Optional frame boost", body: "Smooth out choppiness with our advanced frame interpolation." },
  { name: "Preview", body: "See how your video will look before processing." },
  { name: "Resolution options", body: "Select 1080p or 4K output." },
  { name: "AI presets", body: "Tailor your upscale with modes like Film & TV, Sports, Gaming, Old Video, Art & CG, or Standard." },
];
