import { Roboto, Roboto_Slab, Pacifico } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});
