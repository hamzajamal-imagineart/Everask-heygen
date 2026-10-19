export type FaqItem = {
  question: string;
  /** Plain-text answer; an optional trailing link renders after it. */
  answer: string;
  link?: { label: string; href: string };
};
