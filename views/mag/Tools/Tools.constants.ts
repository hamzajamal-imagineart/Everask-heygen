import { MAG_MEDIA } from "../media.constants";
import type { Tool, ToolFilter } from "./Tools.types";

export const TOOL_FILTERS: ToolFilter[] = [
  { label: "Featured" },
  { label: "Image", category: "image" },
  { label: "Video", category: "video" },
  { label: "Audio", category: "audio" },
  { label: "3D", category: "3d" },
];

export const TOOLS: Tool[] = [
  {
    title: "AI Image Generator",
    description: "Create top-quality images with the best AI models",
    icon: MAG_MEDIA.toolImageGenerator,
    category: "image",
  },
  {
    title: "Video Generator",
    description: "Create videos from text, image, or both",
    icon: MAG_MEDIA.toolVideoGenerator,
    category: "video",
  },
  {
    title: "Image Upscaler",
    description: "Upscale images up to 10K with real detail",
    icon: MAG_MEDIA.toolImageUpscaler,
    category: "image",
  },
  {
    title: "Image Editor",
    description: "Retouch, adjust, and refine photos in seconds",
    icon: MAG_MEDIA.toolImageEditor,
    category: "image",
  },
  {
    title: "Background Remover",
    description: "Remove any background in one click",
    icon: MAG_MEDIA.toolBackgroundRemover,
    category: "image",
  },
  {
    title: "Text to Speech",
    description: "Turn your text into natural speech, in any voice",
    icon: MAG_MEDIA.toolTextToSpeech,
    category: "audio",
  },
  {
    title: "Change camera angle",
    description: "Reframe any shot from a new angle",
    icon: MAG_MEDIA.toolCameraAngle,
    category: "image",
  },
];

export const TOOL_RAIL_STEP = 432;
