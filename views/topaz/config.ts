import { EVERASK_BRAND } from "@/views/mag/Lockup/Lockup.constants";

const start = (path: string) => EVERASK_BRAND.start.replace("utm_lp=/mag", `utm_lp=${path}`);

/* Two pages since 20 Oct (Hamza: "separate Topaz image and topaz video upscale"). */
export const topazImageConfig = {
  path: "/topaz-image",
  seo: {
    title: "Topaz Image Upscale inside EverAsk: Gigapixel models, denoise, sharpen and recover faces",
    description:
      "Use Topaz's image models inside EverAsk: Standard V2, High Fidelity V3 and V2, Low Resolution V2, CGI, Text Refine and Face Recovery, plus Topaz Photo's denoise, sharpen, lighting and color tools.",
  },
  links: { start: start("/topaz-image") },
};

export const topazVideoConfig = {
  path: "/topaz-video",
  seo: {
    title: "Topaz Video Upscale inside EverAsk: Proteus, Iris, Dione, Rhea, Theia, Artemis and Gaia",
    description:
      "Use Topaz's precision video models inside EverAsk: upscale, denoise, deinterlace and recover faces in footage to 1080p or 4K with Proteus, Proteus Natural, Iris, Dione, Rhea, Theia, Artemis and Gaia.",
  },
  links: { start: start("/topaz-video") },
};
