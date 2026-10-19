import type { LineIconName } from "./LineIcon/LineIcon.types";
export type FeatureItem = {
  title: string;
  text: string;
  image?: string;
  /** Line icon shown above the title on text-only cards. */
  icon?: LineIconName;
};
