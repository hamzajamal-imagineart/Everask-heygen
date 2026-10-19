/* The upscalers' headline numbers (magnific.com) as EverAsk feature tiles: title split
   in two tones, no body copy. The surfaces run lights and darks interleaved. */
export type FeatureTone = "azure" | "royal" | "navy" | "sky" | "paper";

export const FEATURES: { title: string; split: [string, string] }[] = [
  { title: "Up to 16× clarity", split: ["Up to 16×", "clarity"] },
  { title: "Up to 10K with Magnific", split: ["Up to 10K", "with Magnific"] },
  { title: "Creativity and Resemblance sliders", split: ["Creativity and", "Resemblance sliders"] },
  { title: "Bulk upscaling, up to 20 images", split: ["Bulk upscaling,", "up to 20 images"] },
  { title: "Video up to Ultra HD 4K", split: ["Video up to", "Ultra HD 4K"] },
  { title: "Frame rates up to 60 fps", split: ["Frame rates", "up to 60 fps"] },
];

export const FEATURE_TONES: FeatureTone[] = ["azure", "sky", "paper", "royal", "paper", "navy"];

export const FEATURE_SURFACE: Record<FeatureTone, string> = {
  azure: "bg-[radial-gradient(110%_120%_at_92%_100%,#7cc6ff_0%,#0088ff_55%,#0070e0_100%)]",
  royal: "bg-[radial-gradient(110%_120%_at_92%_100%,#7aa6ff_0%,#2a6cf0_55%,#1a50cc_100%)]",
  navy: "bg-[radial-gradient(110%_120%_at_92%_100%,#3b6fd1_0%,#123a8a_55%,#0b2462_100%)]",
  sky: "bg-[radial-gradient(110%_120%_at_92%_100%,#f2f9ff_0%,#bfe0ff_55%,#a3d1ff_100%)]",
  paper: "bg-[radial-gradient(110%_120%_at_92%_100%,#eaf4ff_0%,#ffffff_55%,#ffffff_100%)] ring-1 ring-inset ring-line-soft",
};

export const FEATURE_LIGHT: FeatureTone[] = ["sky", "paper"];
export const FEATURE_GRAINY: FeatureTone[] = ["azure", "royal", "navy"];
