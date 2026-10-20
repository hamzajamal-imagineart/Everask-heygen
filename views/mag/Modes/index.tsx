import { Models } from "@/views/topaz/Models";
import { magConfig } from "../config";
import { MAG_MODES } from "./modes";

/* Magnific's two upscalers, Creative and Precision, as the Topaz-style picker (Hamza, 20 Oct): the
   modes on the left with Creative's presets and Precision's flavors as variants, the example pair on
   the right, Magnific's own copy under it. The description is the docs' own "which one" answer. */
export function Modes() {
  return (
    <Models
      id="modes"
      title={<>Creative or Precision<br />upscaling</>}
      description="Use Upscaler Precision for faithful super-resolution without hallucinations, best for logos, UI, text, and product photos. Choose Creative when you want to add or infer detail and stylize results via prompts."
      models={MAG_MODES}
      cta={{ href: magConfig.links.start, label: "Start upscaling" }}
      variantLayout="list"
    />
  );
}
