import { HG_MEDIA } from "../media.constants";

export const TOOL_ITEMS = [
  {
    title: "Text to Video",
    text: "Create complete videos from a script using Text to Video. Our generator handles end-to-end editing and produces videos with voiceovers, visuals, and avatars.",
    image: HG_MEDIA.toolTextToVideo,
    tint: "#0088ff",
  },
  {
    title: "Image to Video",
    text: "Transform any image into a dynamic AI video in seconds. Add a script for realistic lip-sync, natural speech timing, and expressive voices.",
    image: HG_MEDIA.toolImageToVideo,
    tint: "#0f6aee",
  },
  {
    title: "Audio to Video",
    text: "Turn podcasts, voiceovers, or any audio file into engaging video with AI avatars, subtitles, and animations. No editing required.",
    image: HG_MEDIA.toolAudioToVideo,
    tint: "#0046e7",
  },
  {
    title: "AI Video Generator",
    text: "Type your idea and click generate to get a finished video in minutes. No camera, editing software, or production skills needed. Download, edit, or share it.",
    image: HG_MEDIA.toolVideoGenerator,
    tint: "#0088ff",
  },
  {
    title: "AI Avatars",
    text: "Create business presenters, talking avatars, or custom characters with studio-quality results. Type, upload, and generate to design, edit, and animate avatars.",
    image: HG_MEDIA.toolAvatars,
    tint: "#0f6aee",
  },
  {
    title: "PPT/PDF to Video",
    text: "Import your PPT or PDF and turn each slide into a scene with lifelike AI avatars and natural voiceovers. Transform static decks into engaging videos for any audience.",
    image: HG_MEDIA.toolPptToVideo,
    tint: "#0046e7",
  },
];
