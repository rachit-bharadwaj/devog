"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

// components
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Navbar } from ".";

import { getCookieData } from "@/lib/actions/auth.action";

// icons
import { HiMenu } from "react-icons/hi";
import { IoMoon } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { PiNotePencilBold } from "react-icons/pi";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const [searchbox, setSearchbox] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLogin = async () => {
    const cookieData = await getCookieData();
    if (cookieData) {
      setIsLoggedIn(true);
    }
  };

  // for avoiding theme mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    checkLogin();
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <header
      id="root-header"
      className="p-5 sticky top-3 z-50 flex bg-blur m-3 mb-0 rounded"
    >
      {/* ------------search box------ */}
      {searchbox && (
        <div className="flex items-center gap-2 w-full ring ring-dark-form rounded-xl py-2 px-5 focus-within:ring-gray-light/50">
          <FiSearch className="text-2xl text-gray-400" />
          <input
            type="text"
            placeholder="Search for posts"
            className="flex-1 outline-none bg-transparent"
          />
          <button
            className="text-2xl text-gray-400"
            onClick={() => setSearchbox(false)}
          >
            X
          </button>
        </div>
      )}

      {!searchbox && (
        <div className="flex justify-between w-full">
          <div className="flex gap-3 items-center">
            {/* ------------mobile menu------ */}
            {isLoggedIn && (
              <Sheet>
                <SheetTrigger>
                  <HiMenu className="text-2xl" />
                </SheetTrigger>
                <SheetContent>
                  <Navbar />
                </SheetContent>
              </Sheet>
            )}
            {/* logo */}
            <Link
              href="/"
              className="font-[900] text-3xl uppercase text-gradient"
            >
              <p className="hidden sm:block">Dev.og</p>
              <p className="px-5 py-1 rounded-full sm:hidden">D</p>
            </Link>
          </div>

          <div className="flex gap-5 items-center">
            {/* search button */}
            <button onClick={() => setSearchbox(true)}>
              <FiSearch className="text-2xl text-gray-400" />
            </button>

            {/* create post button */}
            {isLoggedIn && (
              <Link href="/blogs/create">
                <PiNotePencilBold className="text-2xl text-gray-400" />
              </Link>
            )}

            {/* theme switcher */}
            {theme === "dark" ? (
              <button onClick={() => setTheme("light")}>
                <LuSunMedium className="text-2xl text-gray-400" />
              </button>
            ) : (
              <button onClick={() => setTheme("dark")}>
                <IoMoon className="text-2xl text-gray-400" />
              </button>
            )}

            {/* login button */}
            {!isLoggedIn && (
              <Link
                href="/login"
                className="text-green-500 ring ring-green-700 py-1 px-5 rounded-lg hover:bg-green-900/50 hover:font-bold"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
