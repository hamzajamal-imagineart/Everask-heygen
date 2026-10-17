import { DM_Sans, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";

export const clash = localFont({
  src: [
    { path: "../app/fonts/ClashGrotesk-300.woff2", weight: "300" },
    { path: "../app/fonts/ClashGrotesk-400.woff2", weight: "400" },
    { path: "../app/fonts/ClashGrotesk-500.woff2", weight: "500" },
  ],
  variable: "--font-clash",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});
