import { EVERASK_BRAND } from "@/views/mag/Lockup/Lockup.constants";

const TITLE = "Topaz Photo inside EverAsk: fix blur, noise and low resolution in one click";
const DESCRIPTION =
  "Use Topaz Photo's AI tools inside EverAsk: denoise, sharpen, recover faces, adjust lighting, balance color and upscale, with the Wonder and Standard MAX models.";

export const topazConfig = {
  seo: { title: TITLE, description: DESCRIPTION },
  links: { start: EVERASK_BRAND.start.replace("utm_lp=/mag", "utm_lp=/topaz") },
};
