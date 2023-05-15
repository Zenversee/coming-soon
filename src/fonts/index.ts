import { Outfit, Poppins, Syne } from "next/font/google";
import localFont from "next/font/local";

export const trapBold = localFont({
    src: "./Trap-Bold.otf",
    display: "swap",
});

export const syneBold = Syne({
    subsets: ["latin"],
    display: "swap",
    weight: "700",
});

export const outfitMedium = Outfit({
    subsets: ["latin"],
    display: "swap",
    weight: "500",
});

export const outfitRegular = Outfit({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

export const poppinsRegular = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});
