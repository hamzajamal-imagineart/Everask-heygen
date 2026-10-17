import { MAG_MEDIA } from "../media.constants";
import type { TeamFeature, Testimonial } from "./Teams.types";

export const TEAM_HIGHLIGHTS = [
  {
    title: "All the AI tools in a single place",
    description: "Access multiple top-performing generative models from a single platform. Choose models via the admin panel.",
    image: MAG_MEDIA.teamsTools,
  },
  {
    title: "Unlimited users, flexible credits",
    description: "Scale freely with no seat limits. Pay based on how many credits you use—not how many people use them.",
    image: MAG_MEDIA.teamsCredits,
  },
];

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

export const TESTIMONIALS: Testimonial[] = [
  {
    logo: MAG_MEDIA.quoteRga,
    logoWidth: 88,
    logoHeight: 20,
    company: "R/GA",
    quote:
      "“Best-in-class models and workflow tools through a single unified interface. Magnific has been a key unlock as we've woven AI into our workflows, end to end.”",
    name: "Nick Coronges",
    role: "CTO at R/GA",
  },
  {
    logo: MAG_MEDIA.quoteDeliveryhero,
    logoWidth: 150,
    logoHeight: 24,
    company: "Delivery Hero",
    quote:
      "“At Delivery Hero, we are highly satisfied with Magnific. It consistently delivers high-quality, reliable results while streamlining workflows and enhancing efficiency.”",
    name: "Javier Romero",
    role: "Global Head of Content, Marketing at Delivery Hero",
  },
  {
    logo: MAG_MEDIA.quoteJobtalent,
    logoWidth: 134,
    logoHeight: 24,
    company: "Job&Talent",
    quote:
      "“Magnific is a key part of our marketing stack. It helps us create high-quality content at scale as we expand our AI-native workforce platform powering our global staffing marketplace.”",
    name: "Juan Urdiales",
    role: "Co-Founder and Co-CEO, Job&Talent",
  },
];
