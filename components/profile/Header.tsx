"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { UserData } from "@/types";

import { getUserDataFromUserName } from "@/lib/actions/user.action";

// icons
import { TiUser } from "react-icons/ti";

const Header = ({ userName }: UserData) => {
  const scrollToPosts = () => {
    // scroll to posts
    const posts = document.getElementById("posts");
    // scroll to post but leave some space for header
    const header = document.getElementById("root-header");
    const headerHeight = header?.clientHeight;
    const postsTop = posts?.offsetTop;
    const scrollTo = postsTop! - headerHeight!;
    window.scrollTo(0, scrollTo);
  };

  const [userDetails, setUserDetails] = useState<UserData>({
    name: "",
    userName: "",
    profilePicture: "",
    blogs: [],
  });

  const getUserDetails = async () => {
    const userData = await getUserDataFromUserName(userName);
    setUserDetails(userData);
  };

  useEffect(() => {
    getUserDetails();
  });

  return (
    <section>
      <div className="flex items-center justify-between">
        {userDetails?.profilePicture ? (
          <Link href="/profile">
            <Image
              src={userDetails?.profilePicture}
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

        <button
          onClick={() => scrollToPosts()}
          className="font-bold text-center"
        >
          <p className="text-2xl text-gray-300">{userDetails?.blogs?.length}</p>
          <p className="text-gray-400">Blogs</p>
        </button>
      </div>

      <div>
        <p className="text-2xl font-bold">{userDetails?.name}</p>
        <p className="text-gray-400">@{userDetails?.userName}</p>
        <p className="text-sm max-w-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          delectus quod saepe sapiente
        </p>
      </div>
    </section>
  );
};

export default Header;
