import { Inter, Quicksand } from "next/font/google";

export const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  display: "auto",
  variable: "--font-quicksand",
  subsets: ["latin", "latin-ext", "vietnamese"],
  fallback: ["manrope"],
  preload: true,
  adjustFontFallback: true,
});

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  display: "auto",
  variable: "--font-inter",
  subsets: [
    "latin",
    "latin-ext",
    "vietnamese",
    "cyrillic",
    "cyrillic-ext",
    "greek-ext",
    "greek",
  ],
  fallback: ["manrope"],
  preload: true,
  adjustFontFallback: true,
});
