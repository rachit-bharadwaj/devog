"use client";

import Image from "next/image";
import Link from "next/link";

import { ReactNode, useEffect, useState } from "react";

import { checkUserName } from "@/lib/actions/user.action";

const Profile = ({
  children,
  profile,
  className,
}: {
  children: ReactNode;
  profile: string;
  className?: string;
}) => {
  const [validProfile, setValidProfile] = useState(true);

  const checkProfile = async () => {
    const res = await checkUserName(profile);
    setValidProfile(res);
  };

  useEffect(() => {
    checkProfile();
  });

  if (!validProfile) {
    return (
      <div className="flex items-center justify-center flex-col p-5">
        <p className="text-4xl font-bold">Page not found</p>
        <Image src="/404.svg" alt="ERROR 404" width={500} height={500} />
        <p>
          Try visiting back to&nbsp;
          <Link className="underline" href="/">
            Homepage
          </Link>
        </p>
      </div>
    );
  } else return <div className={className}>{children}</div>;
};

export default Profile;
