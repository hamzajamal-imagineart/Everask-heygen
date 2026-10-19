import { EVERASK } from "./brand.constants";

const CANONICAL_URL = "http://localhost:3400/";
const TITLE = "HeyGen inside EverAsk: AI videos starring you, made in minutes";
const DESCRIPTION =
  "Use HeyGen inside EverAsk to create lifelike AI avatar videos from a prompt. Consistent avatars, script-driven control, one-click translation into 175+ languages, and a full studio in one environment.";

export const heygenConfig = {
  seo: {
    title: TITLE,
    description: DESCRIPTION,
    canonical: CANONICAL_URL,
  },
  links: {
    start: EVERASK.startHref,
  },
};
