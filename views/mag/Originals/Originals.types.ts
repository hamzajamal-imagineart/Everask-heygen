export type OriginalSlide = {
  title: string;
  description: string;
  image: string;
  /** Muted looping clip; `image` is its poster. */
  video: string;
  /** Shows the "EverAsk Originals" label above the title. */
  original?: boolean;
};
