import type { TopazModel } from "@/views/topaz/Models/Models.types";

const M = "/assets/mag/modes";
/* Each example is one generated image (GPT Image 2, 16:9, in Magnific's own candid, saturated photo
   style; Hamza, 20 Oct: "generate images like these, without the UI of magnific") with its "before"
   derived in sharp by degrading it (downscale, blur, JPEG; noise for the denoiser), so the pair lines
   up exactly. Illustrations of each preset, not Magnific renders. */
const pair = (name: string) => ({ kind: "image" as const, before: `${M}/${name}-before.jpg`, after: `${M}/${name}-after.jpg`, ratio: 16 / 9 });

/* Magnific's two upscalers and their options, copy from Magnific's API docs
   (docs.magnific.com/api-reference/image-upscaler-creative and -precision): the Creative presets
   ("optimized_for") and the Precision V2 flavors, each with the docs' matching use-case line. */
export const MAG_MODES: TopazModel[] = [
  {
    name: "Creative",
    line: "AI upscaling with detail enhancement",
    overview:
      "Creative mode adds or infers new detail guided by your prompt, enabling stylized, higher-impact upscales. Pick the preset that matches your image, then balance creativity, HDR, resemblance and fractality.",
    caps: [
      "Prompt-guided enhancement that can introduce or infer new detail",
      "Stylization options to match aesthetics or art directions",
      "Controls to balance fidelity vs creativity",
      "Resolution growth (2x/4x/8x/16x) with quality improvement",
    ],
    variants: [
      { label: "Standard", useCase: "Concept art, marketing creatives, and visual ideation", media: pair("standard") },
      { label: "Soft portraits", useCase: "Enhance facial details and skin textures", media: pair("soft-portraits") },
      { label: "Hard portraits", useCase: "Enhance facial details and skin textures", media: pair("hard-portraits") },
      { label: "Art & illustration", useCase: "Sharpen lines and improve color vibrancy", media: pair("art-illustration") },
      { label: "Video game assets", useCase: "Upscale textures and character models", media: pair("game-assets") },
      { label: "Nature & landscapes", useCase: "Bring out intricate details in nature scenes", media: pair("nature-landscapes") },
      { label: "Films & photography", useCase: "Increase resolution for better visual quality", media: pair("films-photography") },
      { label: "3D renders", useCase: "Enhance building details and textures", media: pair("3d-renders") },
      { label: "Science fiction & horror", useCase: "Enhance futuristic and space-themed visuals", media: pair("scifi-horror") },
    ],
  },
  {
    name: "Precision",
    line: "Faithful upscaling, no hallucinations",
    overview:
      "Upscaler Precision focuses on faithful, high-fidelity upscaling. It increases resolution while preserving the original content, texture, and structure of the image, without inventing new elements.",
    caps: [
      "Preserves edges and fine details while minimizing halos",
      "Reduces noise and compression artifacts",
      "Maintains color consistency and natural look",
      "Enhances readability for small text and UI elements",
    ],
    variants: [
      { label: "Photo", useCase: "Photographic images, preserving natural colors and realistic details", media: pair("precision-photo") },
      { label: "Sublime", useCase: "Artistic and illustrated images with smooth gradients and vibrant colors", media: pair("precision-sublime") },
      { label: "Photo denoiser", useCase: "Low-light or grainy photographs", media: pair("precision-denoiser") },
    ],
  },
];
