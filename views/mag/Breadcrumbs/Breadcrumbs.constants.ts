import { EVERASK_BRAND } from "../Lockup/Lockup.constants";

/* The trail EverAsk's feature pages carry, absolute to everask.ai. Magnific sits
   under "Upscaling models" (Hamza, 19 Oct); that cluster is not on everask.ai yet,
   so its href follows the site's model-cluster pattern (/features/<cluster>/models)
   and needs checking when the cluster ships. */
export const BREADCRUMB_TRAIL = [
  { name: "Features", href: `${EVERASK_BRAND.site}/features` },
  { name: "Upscaling models", href: `${EVERASK_BRAND.site}/features/upscaling/models` },
  { name: "Magnific", href: "#top" },
];
