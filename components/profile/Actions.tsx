"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { authourizedUser } from "@/lib/actions/user.action";
import { UserData } from "@/types";

const Actions = ({ userName }: UserData) => {
  const [authUser, setAuthUser] = useState(false);

  const checkAuthUser = async () => {
    const res = await authourizedUser(userName);
    setAuthUser(res);
  };

  useEffect(() => {
    checkAuthUser();
  }),
    [];

  if (authUser)
    return (
      <section className="my-10 flex gap-5">
        <Link
          href={`${userName}/edit`}
          className="bg-gray-700 px-10 py-3 rounded-xl flex-1"
        >
          Edit Profile
        </Link>
        <button className="bg-gray-700 px-10 py-3 rounded-xl flex-1">
          Share Profile
        </button>
      </section>
    );
};

export default Actions;
