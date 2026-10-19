import { MAG_MEDIA } from "../media.constants";

/* Three steps, in the shape EverAsk's feature pages use (ask, it works, you
   get it back). Copy written for this layout from the page's existing lines
   (direct your best work, upscale to 10K, on-brand at scale); review it. */
export const STEPS = [
  {
    title: "Describe or drop in",
    body: "Type what you need, or drop in a photo, a clip or a brand file. Every Magnific model is one prompt away.",
    icon: MAG_MEDIA.toolImageEditor,
  },
  {
    title: "Direct the result",
    body: "Change the angle, swap the background, cast a character, keep it on brand. Refine until it is right.",
    icon: MAG_MEDIA.toolCameraAngle,
  },
  {
    title: "Export at full scale",
    body: "Upscale to 4K or 10K with real detail, then ship it in every format the campaign needs.",
    icon: MAG_MEDIA.toolImageUpscaler,
  },
];
