import { EVERASK_BRAND } from "./Lockup/Lockup.constants";

const CANONICAL_URL = "https://everask.ai/mag";
const TITLE = "Magnific Upscaler inside EverAsk: images to 16×, video to 4K";
const DESCRIPTION =
  "Use Magnific's image and video upscalers inside EverAsk. Up to 16× clarity and 10K for images, Ultra HD 4K at 60 fps for video, with Classic, Magnific, Creative and Topaz models.";

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
