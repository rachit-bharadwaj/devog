import { ReactNode } from "react";

import type { Metadata } from "next";

// components
import { Header } from "@/components/shared";

export const metadata: Metadata = {
  title: "Devog",
  description:
    "a simplified blogs app sepcified for developers and general public",
};

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
