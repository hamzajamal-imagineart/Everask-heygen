import { HG_MEDIA } from "../media.constants";
import type { FeatureItem } from "../heygen.types";

export const AGENT_SLIDES = [HG_MEDIA.agentSlide1, HG_MEDIA.agentSlide2, HG_MEDIA.agentSlide3, HG_MEDIA.agentSlide2, HG_MEDIA.agentSlide1];

export const AGENT_CARDS: FeatureItem[] = [
  {
    title: "Fully editable",
    icon: HG_MEDIA.cardPencil,
    text: "Every motion element stays fully editable after generation. Adjust text, color, timing, or layout instantly in AI Studio without rendering the video again from scratch.",
  },
  {
    title: "Visuals that connect",
    icon: HG_MEDIA.cardPuzzle,
    text: "Generate motion graphics that work as part of a cohesive narrative. Visual overlays, explanatory animations, and B-roll footage all combine to tell your story.",
  },
  {
    title: "Lifelike A-roll",
    icon: HG_MEDIA.cardCamcorder,
    text: "AI-generated presenter footage anchors every narrative. Talking heads deliver your message with natural performance, serving as the foundation of your video.",
  },
];
