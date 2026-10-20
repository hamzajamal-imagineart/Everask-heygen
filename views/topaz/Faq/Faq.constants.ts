import type { FaqItem } from "@/views/mag/Faq/Faq.types";

/* Answers from topazlabs.com/topaz-photo, /tools/video-upscale and Topaz's API docs (model pages and
   the Model Selection guide), credited to Topaz. The first answer on each page is ours, and so is
   "Are my photos uploaded?". Pricing, seats, system requirements and returns are Topaz-desktop
   questions and are left out. */
export const IMAGE_FAQ: FaqItem[] = [
  {
    question: "Can I use Topaz's image models inside EverAsk?",
    answer:
      "Yes. EverAsk connects to Topaz Labs through its API, so you can run Topaz's Gigapixel upscaling models and Topaz Photo's enhancement tools from your EverAsk workspace, alongside the other models you use there.",
  },
  {
    question: "Which upscaling model should I pick?",
    answer:
      "Start with Standard V2, the default that works for most images. Pick High Fidelity for maximum source preservation on photos that are already high resolution, Low Resolution V2 for very small inputs such as thumbnails and web scrapes, CGI for illustrations, renders, game assets and digital art, Text Refine for documents, screenshots and text-heavy images, and Faces for portraits where facial detail is the priority.",
  },
  {
    question: "What is Topaz Photo?",
    answer: "Topaz Photo is an AI-powered application that is used to enhance image and photo quality through noise reduction, image sharpening, enhancing faces, and image upscaling.",
  },
  {
    question: "Are my photos uploaded?",
    answer:
      "Inside EverAsk, your image is sent to Topaz's cloud rendering through the API and the result comes back to your workspace. Topaz's own desktop app can also render locally; that option is not part of the API.",
  },
  {
    question: "Which tools are included?",
    answer:
      "Denoise, Sharpen, Super Focus, Recover Faces, Upscale, Adjust Lighting, Balance Color, Remove, Dust and Scratch, Healing Brush and Preserve Text, plus the Wonder and Standard MAX upscaling models.",
  },
  {
    question: "What does the Wonder model do?",
    answer:
      "It upscales, sharpens and denoises in one click, with no settings to tune, and recovers previously unrecoverable images. It is made for photos with extremely low resolution.",
  },
  {
    question: "What does Standard MAX do?",
    answer: "Precise, true-to-input image restoration: higher quality, more natural and more detailed results, 100x faster than first-generation diffusion models.",
  },
];

export const VIDEO_FAQ: FaqItem[] = [
  {
    question: "Can I use Topaz's video models inside EverAsk?",
    answer:
      "Yes. EverAsk connects to Topaz Labs through its API, so you can upscale and enhance footage with Topaz's video models from your EverAsk workspace, alongside the other models you use there.",
  },
  {
    question: "Which video model should I pick?",
    answer:
      "Don't know where to start? Use Proteus. Then narrow down if your source has specific characteristics: Proteus Natural for lighter processing that stays closest to the original, Iris for faces in legacy footage at medium or low quality, Dione for interlaced broadcast (TV) or camcorder (DV) footage, Rhea for general enhancement with natural texture, Theia to push or hold back detail, Artemis matched to your source quality, and Gaia for CG, rendered content and animation.",
  },
  {
    question: "Does it work on interlaced footage?",
    answer:
      "Yes. Proteus and Iris work with both progressive and interlaced sources, and Dione is purpose built for interlaced video workflows, with variants for digital video (DV), analog broadcast (TV), heavily degraded sources and halo artifacts.",
  },
  {
    question: "What can Topaz's video upscaler do?",
    answer:
      "It enhances footage to 1080p or 4K, recreating fine detail and sharpening motion rather than stretching the frame, with AI presets for Film & TV, Sports, Gaming, Old Video, Art & CG and Standard, and optional frame interpolation.",
  },
  {
    question: "Can I upscale videos without losing quality?",
    answer: "Yes. Topaz's AI is designed to eliminate typical upscaling issues like blurriness, pixelation, and jitter. It creates natural, sharp visuals even when upscaling to 4K.",
  },
  {
    question: "What types of videos work best for upscaling?",
    answer:
      "AI upscaling works great on most video formats, especially footage that needs to be converted to HD or 4K. Videos with heavy compression or extremely low resolution may not recover every detail but will still see noticeable improvements.",
  },
];
