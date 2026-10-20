import type { TopazModel } from "./Models.types";

const M = "/assets/topaz/models";
/* `before` defaults to the clip's own name; Theia's and Artemis's variants share one source clip. */
const clip = (name: string, ratio: number, before = name) => ({
  kind: "video" as const,
  before: `${M}/${before}-before.mp4`,
  after: `${M}/${name}-after.mp4`,
  poster: `${M}/${name}-poster.jpg`,
  ratio,
});

/* Topaz's Proteus family (their precision video models), in the order of their model picker.
   Media: each model's own example clips from Topaz's docs, 6 s, 720p, muted. */
export const VIDEO_MODELS: TopazModel[] = [
  {
    name: "Proteus",
    line: "The default choice for video enhancement",
    overview:
      "Proteus delivers high quality results across a wide range of sources and is recommended as the default model for most common video upscaling projects. A versatile, general purpose enhancement model for upscaling, denoising, and sharpening a wide range of low to medium quality video sources.",
    caps: [
      "General purpose and most recommended video enhancement model",
      "Effective on both progressive and interlaced footage, commonly used to upscale legacy low resolution content to 4K",
      "Offers modifiable parameters for fine tuning results, including controls for compression recovery, detail enhancement, sharpening, noise reduction, dehalo, and anti aliasing or deblur",
    ],
    useCase: "Default. Handles most content well",
    variants: [{ label: "Proteus", media: clip("proteus", 16 / 9) }],
  },
  {
    name: "Proteus Natural",
    line: "Next-generation natural enhancement",
    overview:
      "Proteus Natural is an update to the popular Proteus model, designed to eliminate over sharpening and over enhancement that can occasionally occur during upscaling. This next generation refinement delivers a more natural, softer output while preserving texture and source character.",
    caps: [
      "Designed for a more natural, restrained enhancement compared to the original Proteus model.",
      "Reduces halos, aliasing, and facial distortion, especially in small details and background faces.",
      "Avoids over sharpening or texture exaggeration and integrates well into multi-step enhancement workflows",
    ],
    useCase: "Lighter processing, stays closest to the original",
    variants: [{ label: "Proteus Natural", media: clip("proteus-natural", 16 / 9) }],
  },
  {
    name: "Iris",
    line: "Face recovery for degraded footage",
    overview:
      "Iris is a face focused enhancement model designed to recover facial detail in low to medium quality footage. It is optimized for footage where faces are degraded due to noise, compression, or interlacing, and performs best on archival material, broadcast footage, or heavily compressed video.",
    caps: [
      "Specialized face recovery for older or degraded footage",
      "Works with both progressive and interlaced sources",
      "Specifically trained for low quality (LQ) and mid quality (MQ) input videos",
    ],
    useCase: "Legacy content at medium or low quality",
    variants: [{ label: "Iris Low Quality", media: clip("iris", 16 / 9) }],
  },
  {
    name: "Dione",
    line: "Deinterlacing and legacy video conversion",
    overview:
      "Dione is purpose built for interlaced video workflows, with specialized variants tuned for different source types: Dione DV for digital video, Dione TV for analog broadcast sources, and Dione Dehalo for reducing edge artifacts and fringing.",
    caps: ["Purpose built for interlaced video workflows", "Includes specialized variants tuned for different source types"],
    variants: [
      { label: "Dione DV", useCase: "Interlaced camcorder (DV) footage", media: clip("dione-dv", 654 / 484) },
      { label: "Dione TV", useCase: "Interlaced broadcast (TV) footage", media: clip("dione-tv", 654 / 480) },
      { label: "Dione Robust", useCase: "Interlaced content with heavy degradation", media: clip("dione-robust", 4 / 3) },
      { label: "Dione Dehalo", useCase: "Interlaced content with halo artifacts", media: clip("dione-dehalo", 4 / 3) },
      { label: "Dione Robust Dehalo", useCase: "Interlaced content with halo artifacts", media: clip("dione-robust-dehalo", 720 / 480) },
    ],
  },
  {
    name: "Rhea",
    line: "High-fidelity 4× upscaling for fine detail",
    overview:
      "Rhea is a high fidelity enhancement model designed for 4× upscaling of organic textures and fine detail, delivering clean, controlled sharpness while preserving natural structure. It blends the general enhancement strengths of Proteus with the facial recovery capabilities of Iris to recover fine detail and faces from lower resolution sources such as 480p footage.",
    caps: [
      "Optimized for high quality 4× upscaling of organic textures and fine detail",
      "Preserves faces, text, and small structures with natural looking sharpness",
      "Best suited for clean or lower resolution sources where fidelity is prioritized over speed",
    ],
    useCase: "General enhancement with natural texture",
    variants: [{ label: "Rhea", media: clip("rhea", 16 / 9) }],
  },
  {
    name: "Theia",
    line: "Manual clarity and detail control",
    overview:
      "Theia is a clarity focused enhancement model designed to sharpen and enhance detail in video footage while controlling noise. Fine Tune Fidelity prioritizes stable, consistent detail with reduced artifacts, while Fine Tune Detail aggressively enhances detail on a per frame basis.",
    caps: ["Clarity focused sharpening and detail enhancement with noise control", "Granular manual adjustment using three core parameters"],
    variants: [
      { label: "Theia Fine Tune Detail", useCase: "Push detail enhancement, more aggressive", media: clip("theia-detail", 16 / 9, "theia") },
      { label: "Theia Fine Tune Fidelity", useCase: "Preserve original look, lighter touch", media: clip("theia-fidelity", 16 / 9, "theia") },
    ],
  },
  {
    name: "Artemis",
    line: "Balanced denoise and sharpening",
    overview:
      "Artemis is a general enhancement model that balances detail enhancement with noise and artifact reduction. It is designed to handle low, medium, and high quality footage with a range of common issues, including haloing, aliasing, and compression artifacts.",
    caps: ["General purpose denoise and sharpen model", "Offers multiple tuned variants for different footage conditions"],
    useCase: "Match to your source quality. HQ for clean footage, LQ for degraded",
    variants: [
      { label: "Artemis High Quality", media: clip("artemis-hq", 4 / 3, "artemis") },
      { label: "Artemis Medium Quality", media: clip("artemis-mq", 4 / 3, "artemis") },
      { label: "Artemis Low Quality", media: clip("artemis-lq", 4 / 3, "artemis") },
    ],
  },
  {
    name: "Gaia",
    line: "Refinement for high-quality CGI and animation",
    overview:
      "Gaia is designed to upscale and refine high quality CGI and animation sources. It assumes the input footage is already clean and well rendered, focusing on subtle refinement rather than heavy artifact removal, and is best used as a final step to increase resolution while preserving the original source characteristics.",
    caps: ["Optimized for high fidelity CGI and animation content", "Gaia CG is well suited for animation, linework, and stylized imagery"],
    variants: [
      { label: "Gaia CG", useCase: "High-quality or general CG and rendered content", media: clip("gaia-cg", 16 / 9) },
      { label: "Gaia 2 (Animation)", useCase: "Animation and single-frame animation", media: clip("gaia-2", 16 / 9) },
    ],
  },
];
