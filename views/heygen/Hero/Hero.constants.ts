import { HG_MEDIA } from "../media.constants";
import type { HeroCard } from "./Hero.types";

export const HERO_CARDS: HeroCard[] = [
  { title: "Buying your first home?", subtitle: "Real Estate", image: HG_MEDIA.heroHome, focus: "50% 50%" },
  { title: "How to improve productivity?", subtitle: "Coaching", image: HG_MEDIA.heroProductivity, focus: "50% 40%" },
  { title: "Interview with the CEO", subtitle: "Company", image: HG_MEDIA.heroInterview, focus: "50% 60%" },
  { title: "Top 10 tips to reduce Stress", subtitle: "Dr. Jenni Jacobsen", image: HG_MEDIA.heroStress, focus: "50% 50%" },
  { title: "How to choose a therapist?", subtitle: "Wellness", image: HG_MEDIA.heroTherapist, focus: "50% 50%" },
  { title: "Welcome to Loft 12", subtitle: "Real Estate", image: HG_MEDIA.heroLoft, focus: "50% 50%", captioned: true },
  { title: "Your portfolio, explained", subtitle: "Finance", image: HG_MEDIA.heroPortfolio, focus: "50% 45%" },
  { title: "Know your tenant rights", subtitle: "Legal", image: HG_MEDIA.heroCounsel, focus: "50% 45%" },
];

/** Degrees each tile turns toward the centre per step away from it. */
export const HERO_ARC_TURN = 11;

/** Pixels each tile comes forward, multiplied by the square of its distance from the centre. */
export const HERO_ARC_DEPTH = 9;
