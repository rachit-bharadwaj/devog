"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { getUserData } from "@/lib/actions/user.action";

import { UserData } from "@/types";

import { MenuItem } from "@/props";

import { logout } from "@/lib/actions/auth.action";

// icons
import { TiUser } from "react-icons/ti";
import { MdArticle, MdManageAccounts } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

const Navbar = () => {
  const [userDetails, setUserDetails] = useState<UserData>({
    name: "",
    userName: "",
    profilePicture: "",
  });

  const getUserDetails = async () => {
    const userData = await getUserData();
    setUserDetails(userData);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <nav className="flex flex-col justify-between h-full">
      {/* ----------- upper section ---------- */}
      <div className="flex flex-col gap-3">
        {userDetails.profilePicture ? (
          <Link href={`/${userDetails.userName}`}>
            <Image
              src={userDetails.profilePicture}
              alt="profile picture"
              width={500}
              height={500}
              className="rounded-full w-20 h-20"
            />
          </Link>
        ) : (
          <div className="bg-gray-700 p-5 rounded-full w-fit">
            <TiUser className="text-7xl" />
          </div>
        )}

        <div>
          <p className="capitalize text-lg font-bold">{userDetails.name}</p>
          <p className="text-sm text-gray-400">@{userDetails.userName}</p>
        </div>
      </div>

      {/* ------------menu------- */}
      <div className="flex flex-col gap-3">
        <MenuItem name="My Feed" path="/" Icon={MdArticle} />
        <MenuItem
          name="Profile"
          path={`/${userDetails.userName}`}
          Icon={TiUser}
        />
        <MenuItem
          name="Account Details"
          path="/account"
          Icon={MdManageAccounts}
        />
      </div>

      {/* --------log out button---------- */}
      <button
        className="flex gap-2 items-center text-red-500 hover:font-bold hover:bg-red-500/10 hover:ring ring-red-500 p-2 rounded-xl w-full"
        onClick={() => logout()}
      >
        <HiOutlineLogout className="text-2xl" />
        <p className="text-lg">Log out</p>
      </button>
    </nav>
  );
};

export default Navbar;
