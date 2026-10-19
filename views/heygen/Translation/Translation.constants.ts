import { HG_MEDIA } from "../media.constants";
import type { FeatureItem } from "../heygen.types";

export const TRANSLATION_LANGUAGES = [
  { label: "English", flag: HG_MEDIA.flagEn },
  { label: "German", flag: HG_MEDIA.flagDe },
  { label: "Korean", flag: HG_MEDIA.flagKr },
  { label: "Spanish", flag: HG_MEDIA.flagEs },
];

export const TRANSLATION_CARDS: FeatureItem[] = [
  {
    title: "Effortless translation",
    icon: "globe",
    text: "Upload a file or paste a YouTube link to translate videos with one click. No reshoots, no manual dubbing. Just fast, affordable localization for any creators or business.",
  },
  {
    title: "Perfect lip-sync",
    icon: "mic",
    text: "Voice cloning preserves your unique tone and delivery in 175+ languages and dialects, while precise lip-sync aligns translated speech with facial movements.",
  },
  {
    title: "Built for global scale",
    icon: "rocket",
    text: "Translate existing footage or generate multilingual avatar videos from a single script. Brand glossary and a multi-lingual player give you full control across markets.",
  },
];
