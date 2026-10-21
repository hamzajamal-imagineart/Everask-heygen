import { HG_MEDIA } from "../media.constants";
import type { HeroCard } from "./Hero.types";

export const HERO_CARDS: HeroCard[] = [
  { title: "Buying your first home?", subtitle: "Real Estate", image: HG_MEDIA.heroHome, video: HG_MEDIA.heroHomeVideo, focus: "50% 50%" },
  { title: "How to improve productivity?", subtitle: "Coaching", image: HG_MEDIA.heroProductivity, video: HG_MEDIA.heroProductivityVideo, focus: "50% 40%" },
  { title: "Interview with the CEO", subtitle: "Company", image: HG_MEDIA.heroInterview, video: HG_MEDIA.heroInterviewVideo, focus: "50% 60%" },
  { title: "Stress less, breathe more", subtitle: "Wellness", image: HG_MEDIA.heroBreathe, video: HG_MEDIA.heroBreatheVideo, focus: "50% 50%", captioned: true },
  { title: "How to choose a therapist?", subtitle: "Wellness", image: HG_MEDIA.heroTherapist, video: HG_MEDIA.heroTherapistVideo, focus: "50% 50%" },
  { title: "Welcome to Loft 12", subtitle: "Real Estate", image: HG_MEDIA.heroLoft, video: HG_MEDIA.heroLoftVideo, focus: "50% 50%", captioned: true },
  { title: "Your portfolio, explained", subtitle: "Finance", image: HG_MEDIA.heroPortfolio, video: HG_MEDIA.heroPortfolioVideo, focus: "50% 45%" },
  { title: "Know your tenant rights", subtitle: "Legal", image: HG_MEDIA.heroCounsel, video: HG_MEDIA.heroCounselVideo, focus: "50% 45%" },
];

/** Degrees each tile turns toward the centre per step away from it. */
export const HERO_ARC_TURN = 11;

/** Pixels each tile comes forward, multiplied by the square of its distance from the centre. */
export const HERO_ARC_DEPTH = 9;
