export type HeroCard = {
  title: string;
  subtitle: string;
  image: string;
  focus: string;
  /** The image already carries its own burned-in captions, so no title or play button is drawn. */
  captioned?: boolean;
};
