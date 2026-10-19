import type { FaqItem } from "@/views/mag/Faq/Faq.types";

/* Answers from topazlabs.com/topaz-photo, credited to Topaz; the first and third are ours.
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
    question: "What does Standard MAX do?",
    answer: "Precise, true-to-input image restoration: higher quality, more natural and more detailed results, 100x faster than first-generation diffusion models.",
  },
];
