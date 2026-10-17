import { HG_ASSET_FILES } from "./media-files.constants";

export const HG_MEDIA = Object.fromEntries(
  Object.entries(HG_ASSET_FILES).map(([name, file]) => [name, `/assets/heygen/${file}`]),
) as Record<keyof typeof HG_ASSET_FILES, string>;
