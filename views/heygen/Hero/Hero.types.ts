export type HeroCard = {
  title: string;
  subtitle: string;
  image: string;
  /** Muted clip of the same frame, loaded and played only while the tile is hovered (or tapped). */
  video: string;
  focus: string;
  /** The image already carries its own burned-in captions, so no title or play button is drawn. */
  captioned?: boolean;
};
