import type { FaqEntry } from "./Faq.types";

export const FAQ_ITEMS: FaqEntry[] = [
  {
    q: "Can I use HeyGen inside EverAsk?",
    a: [
      "Yes. EverAsk connects to HeyGen through its API, so you can create HeyGen avatar videos, translations and edits from your EverAsk workspace, alongside the other models you use there.",
    ],
  },
  {
    q: "How to create an AI video of yourself?",
    a: [
      "Upload a short clip or reference image, then type your script in HeyGen inside EverAsk. HeyGen will generate a video with realistic AI motion and voice. You can animate, adjust format, and make explainer videos or social clips with AI-powered editing tools.",
    ],
  },
  {
    q: "What types of input can I use to create videos with HeyGen in EverAsk?",
    a: [
      "You can generate AI videos using text and images, stock images, or audio. HeyGen can transform text into explainer videos with templates that make it easy to create and publish impactful content in multiple formats and styles.",
    ],
  },
  {
    q: "Can I convert audio to video with HeyGen in EverAsk?",
    a: [
      "Yes, you can convert audio to video with HeyGen inside EverAsk.",
      "Upload your audio and HeyGen's AI-powered system will generate videos automatically. It syncs speech and visuals to create realistic AI avatars and video clips, ideal for podcasts, explainer videos, and educational content that need visual context.",
    ],
  },
  {
    q: "Can I use text to video for business presentations with HeyGen in EverAsk?",
    a: [
      "Yes. With HeyGen's text-to-video feature, you can create engaging explainer videos and slides from any text prompt. The AI image generator and video templates help you instantly create and publish videos in your preferred format for marketing, training, or product demos.",
    ],
  },
  {
    q: "Can AI videos replace traditional video production?",
    a: [
      "Yes. AI videos made with HeyGen can absolutely replace traditional production for most business, marketing, and training needs.",
      "You can animate scenes, add motion, and generate a video that looks polished. It helps creators publish videos faster, keeping all edits within one video workflow, simple, scalable, and cost-effective.",
    ],
  },
  {
    q: "How to make AI videos with HeyGen in EverAsk?",
    a: [
      "To make an AI video with HeyGen in EverAsk, pick an avatar, paste in what you want it to say (or upload a deck), and choose a voice and language. Then tweak the visuals and branding to match your style, hit generate, and export the finished video.",
    ],
  },
  {
    q: "Can I create AI videos using a reference image with HeyGen in EverAsk?",
    a: [
      "Yes. Upload a reference image to HeyGen in EverAsk and generate AI videos that look natural. You can use the AI to animate avatars or adjust expressions, creating personalized explainer videos or branded clips with realistic AI motion and audio sync.",
    ],
  },
  {
    q: "What types of videos can I create with HeyGen in EverAsk?",
    a: [
      "HeyGen's AI Video Generator lets you create explainer videos, marketing and sales promos, product demos, training and onboarding content, personalized outreach videos, and social media clips, using realistic AI avatars, natural AI voices, and multilingual translation to produce videos quickly at scale.",
    ],
  },
  {
    q: "How long does it take to generate an AI video?",
    a: [
      "HeyGen is really fast, and many videos generate within a minute. If your video is longer, uses more scenes, or has heavier effects, it may take a little longer but still typically finishes in just a few minutes.",
    ],
  },
  {
    q: "Is HeyGen secure and ethical?",
    a: [
      "Yes. HeyGen keeps your data safe and creates avatars responsibly. You own your AI-generated videos and visuals, allowing you to publish content for marketing or training with confidence, knowing your materials are produced ethically and securely.",
    ],
  },
];

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a.join(" ") },
  })),
};
