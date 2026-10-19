import { MAG_MEDIA } from "../media.constants";
import type { TeamFeature } from "./Teams.types";


export const TEAM_FEATURES: TeamFeature[] = [
  {
    title: "Legal indemnification",
    description: "Full legal protection for AI-generated content used commercially.",
    icon: MAG_MEDIA.featureLegal,
  },
  {
    title: "Security & compliance",
    description: "GDPR, ISO/IEC 27001, and SOC 2. Procurement-ready from day one.",
    icon: MAG_MEDIA.featureSecurity,
  },
  {
    title: "Admin control",
    description: "Users, permissions, credits, and model access—one dashboard, total visibility.",
    icon: MAG_MEDIA.featureAdmin,
  },
  {
    title: "You own everything",
    description: "Every asset belongs to you. We never train on your data.",
    icon: MAG_MEDIA.featureOwn,
  },
  {
    title: "Dedicated support",
    description: "A real team, from onboarding through to day-to-day.",
    icon: MAG_MEDIA.featureSupport,
  },
  {
    title: "Scale without limits",
    description: "Flexible credits, parallel generations, and no seat restrictions.",
    icon: MAG_MEDIA.featureScale,
  },
];

