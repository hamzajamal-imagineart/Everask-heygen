import type { FaqEntry } from "../Faq.types";

export type FaqItemProps = FaqEntry & {
  defaultOpen?: boolean;
};
