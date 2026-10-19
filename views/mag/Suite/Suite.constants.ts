import { MAG_MEDIA } from "../media.constants";
import type { SuiteMedium, SuiteTab } from "./Suite.types";

export const SUITE_TABS: SuiteTab[] = [
  { label: "Creative Suite" },
  { label: "MCP & API", isNew: true },
  { label: "Agents", isNew: true },
  { label: "Plugins", isNew: true },
];

export const SUITE_MEDIA: SuiteMedium[] = [
  {
    label: "Image",
    icon: MAG_MEDIA.iconSuiteImage,
    description: "Generate, edit, resize, upscale. Keep characters and brand consistent across every shot.",
  },
  { label: "Video", icon: MAG_MEDIA.iconSuiteVideo },
  { label: "Audio", icon: MAG_MEDIA.iconSuiteAudio },
  { label: "3D", icon: MAG_MEDIA.iconSuite3d },
  { label: "Spaces", icon: MAG_MEDIA.iconSuiteSpaces },
];
