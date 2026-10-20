import type { TopazModel } from "./Models.types";

const M = "/assets/topaz/models";
const pair = (name: string, ratio: number) => ({ kind: "image" as const, before: `${M}/${name}-before.jpg`, after: `${M}/${name}-after.jpg`, ratio });

/* Topaz's Gigapixel family, in the order of their model picker. Media: each model's own
   example from Topaz's docs (downloads.topazlabs.com/web-assets/model-examples), shown as
   a zoomed region at the image's own ratio so the difference reads at page size. */
export const IMAGE_MODELS: TopazModel[] = [
  {
    name: "Standard V2",
    line: "General-purpose model balancing detail, sharpness, and noise reduction",
    overview:
      "Standard 2 is the general-purpose image upscaling model recommended for most photos and graphics. It delivers clean, reliable enlargement across a wide range of image types while maintaining true-to-input detail and structure.",
    caps: ["Trusted, industry-standard image upscaling", "Preserves natural detail and texture", "Balanced model is the ideal default choice for photos, graphics, and print"],
    useCase: "Default. Works for most images",
    variants: [{ label: "Standard V2", media: pair("standard-v2", 1528 / 1014) }],
  },
  {
    name: "High Fidelity V3",
    line: "Improved fidelity upscaling for high-resolution images and professional photos",
    overview:
      "High Fidelity 3 is a precision upscaling model designed to deliver the best results on high-resolution sources. It improves on High Fidelity 2 with enhanced resolution scaling and minimal detail loss or artifacting, preserving original image structure and realism.",
    caps: [
      "Higher quality upscaling with improved detail retention and fewer artifacts compared to High Fidelity 2.",
      "Preserves natural image structure with reduced plasticky appearance and more consistent textures.",
      "Optimized for high-quality images, delivering clean results beyond traditional resizing.",
    ],
    variants: [{ label: "High Fidelity V3", media: pair("high-fidelity-v3", 1600 / 1226) }],
  },
  {
    name: "High Fidelity V2",
    line: "Fidelity upscaling for high-resolution images and professional photos",
    overview:
      "High Fidelity 2 is a precision upscaling model designed for images that are already high resolution and well captured. It focuses on enlarging images while preserving fine detail, natural texture, and structural accuracy, avoiding aggressive reconstruction or over-sharpening.",
    caps: ["High-fidelity upscaling for already high-resolution sources", "Preserves fine detail and original texture during enlargement"],
    useCase: "Maximum source preservation",
    variants: [{ label: "High Fidelity V2", media: pair("high-fidelity-v2", 1200 / 1800) }],
  },
  {
    name: "Low Resolution V2",
    line: "Recovery-focused upscaling for low resolution or heavily compressed sources",
    overview:
      "Low Resolution 2 is optimized for images that start with limited detail, heavy compression, or small dimensions. It focuses on intelligent reconstruction to recover usable detail from challenging sources without modifying the source characteristics.",
    caps: ["Designed for low-resolution and compressed images", "Recovers usable detail from difficult inputs", "Improves clarity while avoiding exaggerated artifacts"],
    useCase: "Very small inputs (thumbnails, web scrapes)",
    variants: [{ label: "Low Resolution V2", media: pair("low-resolution-v2", 1600 / 1060) }],
  },
  {
    name: "CGI",
    line: "Precision upscaling for artwork, drawings, illustrations, and computer graphics",
    overview:
      "Art & CGI is tailored for non-photographic imagery such as illustrations, digital art, renders, and stylized graphics. It preserves clean edges, flat color regions, and intentional line work without introducing photographic texture.",
    caps: ["Optimized for illustrations, digital art, and CGI", "Preserves clean edges and flat color areas", "Avoids unwanted photographic texture or noise"],
    useCase: "Illustrations, renders, game assets, digital art",
    variants: [{ label: "CGI", media: pair("cgi", 1600 / 1066) }],
  },
  {
    name: "Text Refine",
    line: "Clean upscaling for graphics and typography",
    overview:
      "Text & Shapes is designed for images dominated by typography, logos, UI elements, and geometric shapes. It prioritizes edge clarity and shape accuracy during upscaling.",
    caps: ["Preserves sharp edges and geometric structure", "Ideal for logos, UI, and graphic design assets", "Maintains legibility during enlargement"],
    useCase: "Documents, screenshots, text-heavy images",
    variants: [{ label: "Text Refine", media: { kind: "still", src: `${M}/text-refine.jpg`, ratio: 1600 / 1000 } }],
  },
  {
    name: "Faces",
    line: "Improved face restoration for low-resolution images",
    overview:
      "Face Recovery 3 restores recognizable facial detail from low-resolution, damaged, or heavily compressed images. It is typically combined with another enhancement model, and includes Realistic and Creative variants to balance fidelity and recovery strength.",
    caps: [
      "Reconstructs facial detail from extremely low-resolution or damaged images.",
      "Produces more realistic and natural-looking faces with improved facial detail recovery.",
      "Automatically detects and processes multiple faces within a single image.",
      "Enables usable portrait results where traditional upscaling fails.",
    ],
    useCase: "Portraits where facial detail is the priority",
    variants: [{ label: "Face Recovery 3", media: pair("faces", 1200 / 2134) }],
  },
];
