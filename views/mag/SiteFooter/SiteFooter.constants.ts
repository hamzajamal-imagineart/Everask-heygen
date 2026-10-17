import { EVERASK_BRAND } from "../Lockup/Lockup.constants";

const site = EVERASK_BRAND.site;

export const FOOTER_COLUMNS = [
  {
    title: "Features",
    links: [
      { label: "Website", href: `${site}/features/website` },
      { label: "Image", href: `${site}/features/image` },
      { label: "Image models", href: `${site}/features/image/models` },
      { label: "Video", href: `${site}/features/video` },
      { label: "Video models", href: `${site}/features/video/models` },
      { label: "Slides", href: `${site}/features/slides` },
      { label: "Sheets", href: `${site}/features/sheets` },
      { label: "Docs", href: `${site}/features/docs` },
      { label: "Gmail", href: `${site}/features/connectors/gmail` },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "All features", href: `${site}/features` },
      { label: "Pricing", href: `${site}/pricing` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: `${site}/privacy-policy` },
      { label: "Terms", href: `${site}/terms-and-service` },
    ],
  },
];
