import { EVERASK } from "../brand.constants";

/* The trail EverAsk's feature pages carry, absolute to everask.ai. HeyGen sits
   under "Avatar models" (Hamza, 19 Oct); that cluster is not on everask.ai yet,
   so its href follows the site's model-cluster pattern (/features/<cluster>/models)
   and needs checking when the cluster ships. */
export const BREADCRUMB_TRAIL = [
  { name: "Features", href: `${EVERASK.site}/features` },
  { name: "Avatar models", href: `${EVERASK.site}/features/avatar/models` },
  { name: "HeyGen", href: "#top" },
];
