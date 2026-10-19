import { EVERASK_BRAND } from "../Lockup/Lockup.constants";

/* The trail EverAsk's feature pages carry: the same labels as its top nav and
   cluster slugs (lib/site.ts), absolute to everask.ai. */
export const BREADCRUMB_TRAIL = [
  { name: "Features", href: `${EVERASK_BRAND.site}/features` },
  { name: "Image models", href: `${EVERASK_BRAND.site}/features/image/models` },
  { name: "Magnific", href: "#top" },
];
