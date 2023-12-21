"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// icons
import { HiMenu } from "react-icons/hi";
import { IoMoon } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";

const Header = () => {
  const { theme, setTheme } = useTheme();

  // for avoiding theme mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <header className="flex justify-between p-5 dark:bg-dark">
      {/* ------------mobile menu------ */}
      <Sheet>
        <SheetTrigger>
          <HiMenu className="text-2xl" />
        </SheetTrigger>
        <SheetContent>nsjvkjjenjnwk</SheetContent>
      </Sheet>

      {/* logo */}
      <Link href="/" className="font-bold text-3xl uppercase">
        Dev.og
      </Link>

      {/* theme switcher */}
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <LuSunMedium className="text-2xl" />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <IoMoon className="text-2xl" />
        </button>
      )}
    </header>
  );
};

export default Header;
