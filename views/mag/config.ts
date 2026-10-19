import { EVERASK_BRAND } from "./Lockup/Lockup.constants";

const CANONICAL_URL = "https://everask.ai/mag";
const TITLE = "Magnific inside EverAsk: the creative platform to direct your best work";
const DESCRIPTION =
  "Use Magnific inside EverAsk. Every AI model for video, image, and audio. Intelligent workflows for professional control and collaboration. On-brand production at any scale.";

export const magConfig = {
  seo: {
    title: TITLE,
    description: DESCRIPTION,
    canonical: CANONICAL_URL,
  },
  links: {
    start: EVERASK_BRAND.start,
  },
};
