import { MAG_MEDIA } from "../media.constants";
import type { OriginalSlide } from "./Originals.types";

export const ORIGINALS: OriginalSlide[] = [
  {
    title: "Puma X Manchester city: Third kit",
    description: "Ad by The Berry made using a hybrid workflow mixing 3D and AI.",
    image: MAG_MEDIA.originalPuma,
  },
  {
    title: "Chronicles of Bone",
    description:
      "With millions of views, The Chronicles of Bone is a viral phenomenon. It’s set in a dark fantasy world created by filmmaker Kavan Cardoza, part of Magnific Originals.",
    image: MAG_MEDIA.originalBone,
    logo: MAG_MEDIA.originalBoneLogo,
    logoWidth: 101,
    logoHeight: 12,
  },
  {
    title: "Candela",
    description:
      "Presented at Cannes Lions 2026, Candela is a romantic drama set across two timelines. It's the first in-house Magnific Original.",
    image: MAG_MEDIA.originalCandela,
    logo: MAG_MEDIA.originalCandelaLogo,
    logoWidth: 86,
    logoHeight: 10,
  },
];

export const ORIGINALS_INITIAL_SLIDE = 1;
