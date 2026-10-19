import { EVERASK_BRAND } from "@/views/mag/Lockup/Lockup.constants";

const TITLE = "Topaz inside EverAsk: image and video upscaling, fix blur, noise and low resolution";
const DESCRIPTION =
  "Use Topaz's AI tools inside EverAsk: denoise, sharpen, recover faces, adjust lighting, balance color and upscale images with the Wonder and Standard MAX models, and upscale video to 1080p or 4K.";

export const topazConfig = {
  seo: { title: TITLE, description: DESCRIPTION },
  links: { start: EVERASK_BRAND.start.replace("utm_lp=/mag", "utm_lp=/topaz") },
};
