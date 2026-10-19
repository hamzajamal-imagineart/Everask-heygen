import { MAG_MEDIA } from "../media.constants";

/* A bento of four: two wide cards and two narrow ones, swapping places per
   row, each the use case's own image on the sky panel. */
export const USE_CASES = [
  {
    title: "Advertising",
    body: "Brief to final asset. No vendor chain, no waiting. Just the work.",
    image: MAG_MEDIA.usecaseAdvertising,
    wide: true,
  },
  {
    title: "Product shots",
    body: "AI-powered photoshoots. No studio. No crew. No scheduling.",
    image: MAG_MEDIA.usecaseProductShots,
    wide: false,
  },
  {
    title: "Brand campaigns",
    body: "On-brand visuals, video, and audio at any scale, any format.",
    image: MAG_MEDIA.usecaseBrandCampaigns,
    wide: false,
  },
  {
    title: "Filmmaking",
    body: "Characters, storyboards, and concepts to explore. Cinematic tools made for the final frame.",
    image: MAG_MEDIA.usecaseFilmmaking,
    wide: true,
  },
];
