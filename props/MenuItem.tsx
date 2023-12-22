"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import { MenuItem } from "@/types";
import { usePathname } from "next/navigation";

const MenuItem = ({ name, path, Icon }: MenuItem) => {
  const [activePath, setActivePath] = useState("/");

  const currentPath = usePathname();

  useEffect(() => {
    setActivePath(currentPath);
  }, [currentPath]);

  return (
    <Link
      href={path}
      className={`flex gap-2 text-gray-300 hover:text-gray-100 hover:bg-[#2d323b]/75 p-2 rounded-xl ${
        activePath === path ? "bg-[#2d323b]" : ""
      }`}
    >
      <Icon className="text-2xl" />
      <p className="text-lg">{name}</p>
    </Link>
  );
};

export default MenuItem;
