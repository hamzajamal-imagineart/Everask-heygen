import { HG_MEDIA } from "../media.constants";
import type { FeatureItem } from "../heygen.types";

export const AVATAR_TOP_CARDS: FeatureItem[] = [
  {
    title: "Character consistency",
    text: "Avatar V maintains a single, coherent identity across every video you create. The same face, the same micro-expressions, the same presence across a 30-second clip or a 10-minute course module. No drift. No artifacts. No uncanny valley.",
    image: HG_MEDIA.avatarConsistency,
  },
  {
    title: "Trained on your behavior",
    text: "Avatar V learns how you talk, gesture, and move, then generates video that's convincingly you. The same micro-expressions, the same presence, all from a single prompt.",
    image: HG_MEDIA.avatarBehavior,
  },
];

export const AVATAR_BOTTOM_CARDS: FeatureItem[] = [
  {
    title: "Multiple angles",
    text: "Wide shots, medium frames, and close-ups, all consistent, all from one recording. The angles that make a single avatar work across every format.",
    image: HG_MEDIA.avatarAngles,
  },
  {
    title: "Accurate lip-sync",
    text: "Phoneme-level accuracy across every supported language. What you hear and what you see are in perfect agreement at any speed, in 175+ languages and dialects.",
    image: HG_MEDIA.avatarLipsync,
  },
  {
    title: "Voice-synced emotion",
    text: "Fluid upper-body motion, responsive gestures, and consistent movement across scene changes. The difference between an avatar that presents and one that performs.",
    image: HG_MEDIA.avatarEmotion,
  },
];
