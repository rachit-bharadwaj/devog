"use client";

import { getUserData, updateProfilePicture } from "@/lib/actions/user.action";
import { UserData } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

// icons
import { TiUser } from "react-icons/ti";

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
    <nav>
      <div className="flex flex-col gap-3">
        {userDetails.profilePicture ? (
          <Image
            src={userDetails.profilePicture}
            alt="profile picture"
            width={500}
            height={500}
            className="rounded-full w-20 h-20"
          />
        ) : (
          <div className="bg-gray-700 p-5 rounded-full w-fit">
            <TiUser className="text-7xl" />
          </div>
        )}

        <div>
          <p className="capitalize">{userDetails.name}</p>
          <p className="text-sm text-gray-400">@{userDetails.userName}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
