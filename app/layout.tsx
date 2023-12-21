import { ReactNode } from "react";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

import { Theme } from "@/containers";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Devog",
  description:
    "a simplified blogs app sepcified for developers and general public",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning={true}>
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
