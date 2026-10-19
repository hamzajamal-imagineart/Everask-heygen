import { MAG_MEDIA } from "../media.constants";

/* Four rows of a z-fold; each image keeps its own shape within 1:1 to 21:9. */
export const USE_CASES = [
  {
    title: "Advertising",
    body: "Brief to final asset. No vendor chain, no waiting. Just the work.",
    image: MAG_MEDIA.usecaseAdvertising,
    ratio: 16 / 10,
  },
  {
    title: "Product shots",
    body: "AI-powered photoshoots. No studio. No crew. No scheduling.",
    image: MAG_MEDIA.usecaseProductShots,
    ratio: 16 / 10,
  },
  {
    title: "Brand campaigns",
    body: "On-brand visuals, video, and audio at any scale, any format.",
    image: MAG_MEDIA.usecaseBrandCampaigns,
    ratio: 16 / 10,
  },
  {
    title: "Filmmaking",
    body: "Characters, storyboards, and concepts to explore. Cinematic tools made for the final frame.",
    image: MAG_MEDIA.usecaseFilmmaking,
    ratio: 21 / 9,
  },
];
