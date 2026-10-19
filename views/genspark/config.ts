import { EVERASK_BRAND } from "@/views/mag/Lockup/Lockup.constants";

const TITLE = "Genspark inside EverAsk: the all-in-one AI workspace, one prompt away";
const DESCRIPTION =
  "Use Genspark inside EverAsk: Super Agent, AI Sheets and Slides, AI Docs, AI Browser, GenMail and GenTeam, with 200+ connectors and 70+ models, through Genspark's API in your EverAsk workspace.";

export const gensparkConfig = {
  seo: { title: TITLE, description: DESCRIPTION },
  links: { start: EVERASK_BRAND.start.replace("utm_lp=/mag", "utm_lp=/genspark") },
};
