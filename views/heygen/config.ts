import { EVERASK } from "./brand.constants";

const CANONICAL_URL = "http://localhost:3400/";
const TITLE = "AI Videos Starring You, Made In Minutes";
const DESCRIPTION =
  "Create lifelike AI avatar videos from a prompt. Consistent avatars, script-driven control, one-click translation into 175+ languages, and a full studio in one environment.";

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
