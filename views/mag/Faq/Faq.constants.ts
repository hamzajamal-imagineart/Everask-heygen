import type { FaqItem } from "./Faq.types";

/* Answers from magnific.com/ai/image-upscaler and /ai/video-upscaler, credited to
   Magnific; the first is ours. Plan and credit questions are left out (EverAsk
   pricing for Magnific is unknown). */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Can I use Magnific's upscalers inside EverAsk?",
    answer:
      "Yes. EverAsk connects to Magnific through its API, so you can run Magnific's image and video upscalers from your EverAsk workspace, alongside the other models you use there.",
  },
  {
    question: "What is Magnific Upscaler?",
    answer:
      "Magnific Upscaler is an AI-powered tool designed to enhance the quality of images up to 16× resolution. It refines details, sharpness, and overall fidelity to produce high-resolution images. Its versatility makes it ideal for any type of project.",
  },
  {
    question: "What is Magnific AI Video Upscaler?",
    answer:
      "Magnific AI Video Upscaler is an AI-powered tool that perfects video quality by increasing resolution and adjusting frame rates. It transforms low-resolution videos up to Ultra HD 4K and 60 fps while preserving textures, colors, and depth for professional-quality results.",
  },
  {
    question: "What image and video formats are accepted?",
    answer: "Images: JPG, JPEG, WEBP and PNG. Video: MP4, MOV, AVI, WebM and MKV, up to 8 seconds long.",
  },
  {
    question: "Can I upscale multiple images at once? How many?",
    answer:
      "Yes, Magnific Upscaler allows bulk upscaling. You can upload and enhance up to 20 images simultaneously, saving time and ensuring consistency across multiple images.",
  },
  {
    question: "What video output options are available?",
    answer:
      "Resolution: choose from 360p, 480p, HD (720p), Full HD (1080p), 2K (1440p), or Ultra HD 4K (2160p). Frame rate: adjust fps from 24 to 60 for ultra-smooth playback. The upscaler does not alter the original video length.",
  },
  {
    question: "What types of image improvement can I apply?",
    answer:
      "Magnific Upscaler offers various customization options through different levels of the imagination filter and styles, such as Portrait, 3D, or Digital art. These options allow you to achieve specific visual enhancements and adapt the upscaled images to your needs.",
  },
  {
    question: "Does Magnific use my images or videos to train its AI?",
    answer: "No. The files you upload and everything you upscale are never used to train or fine-tune Magnific's models. Your visuals stay yours.",
  },
  {
    question: "Who owns the upscaled results?",
    answer: "You do. You keep the rights to what you upload and the high-resolution results, with commercial use included on paid plans.",
  },
];
