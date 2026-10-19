import { EVERASK_BRAND } from "@/views/mag/Lockup/Lockup.constants";

const TITLE = "Manus inside EverAsk: build, create, research and automate, one prompt away";
const DESCRIPTION =
  "Use Manus inside EverAsk: build apps and games, create videos, slides and designs, run Wide Research at scale, automate recurring work on a schedule or trigger, and connect the tools you already use, through Manus's API in your EverAsk workspace.";

export const manusConfig = {
  seo: { title: TITLE, description: DESCRIPTION },
  links: { start: EVERASK_BRAND.start.replace("utm_lp=/mag", "utm_lp=/manus") },
};
