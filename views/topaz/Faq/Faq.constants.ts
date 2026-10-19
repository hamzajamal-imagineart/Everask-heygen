import type { FaqItem } from "@/views/mag/Faq/Faq.types";

/* Answers from topazlabs.com/topaz-photo and /tools/video-upscale, credited to Topaz; the first, third
   and the "video as well as images" one are ours.
   Pricing, seats, system requirements and returns are Topaz-desktop questions and are left out. */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Can I use Topaz Photo inside EverAsk?",
    answer: "Yes. EverAsk connects to Topaz Labs through its API, so you can run Topaz Photo's enhancement tools from your EverAsk workspace, alongside the other models you use there.",
  },
  {
    question: "What is Topaz Photo?",
    answer: "Topaz Photo is an AI-powered application that is used to enhance image and photo quality through noise reduction, image sharpening, enhancing faces, and image upscaling.",
  },
  {
    question: "Are my photos uploaded?",
    answer: "Inside EverAsk, your image is sent to Topaz's cloud rendering through the API and the result comes back to your workspace. Topaz's own desktop app can also render locally; that option is not part of the API.",
  },
  {
    question: "Which tools are included?",
    answer: "Denoise, Sharpen, Super Focus, Recover Faces, Upscale, Adjust Lighting, Balance Color, Remove, Dust and Scratch, Healing Brush and Preserve Text, plus the Wonder and Standard MAX upscaling models.",
  },
  {
    question: "What does the Wonder model do?",
    answer: "It upscales, sharpens and denoises in one click, with no settings to tune, and recovers previously unrecoverable images. It is made for photos with extremely low resolution.",
  },
  {
    question: "Can I upscale video as well as images?",
    answer: "Yes. Topaz's video upscaler enhances footage to 1080p or 4K, recreating fine detail and sharpening motion rather than stretching the frame, with AI presets for Film & TV, Sports, Gaming, Old Video, Art & CG and Standard, and optional frame interpolation.",
  },
  {
    question: "Can I upscale videos without losing quality?",
    answer: "Yes. Topaz's AI is designed to eliminate typical upscaling issues like blurriness, pixelation, and jitter. It creates natural, sharp visuals even when upscaling to 4K.",
  },
  {
    question: "What types of videos work best for upscaling?",
    answer: "AI upscaling works great on most video formats, especially footage that needs to be converted to HD or 4K. Videos with heavy compression or extremely low resolution may not recover every detail but will still see noticeable improvements.",
  },
  {
    question: "What does Standard MAX do?",
    answer: "Precise, true-to-input image restoration: higher quality, more natural and more detailed results, 100x faster than first-generation diffusion models.",
  },
];
