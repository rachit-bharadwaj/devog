"use client";

import { authourizedUser } from "@/lib/actions/user.action";
import { ReactNode, useEffect, useState } from "react";

const EditProfile = ({
  children,
  profile,
  className,
}: {
  children: ReactNode;
  profile: string;
  className?: string;
}) => {
  const [authUser, setAuthUser] = useState(false);

  const checkAuthUser = async () => {
    const res = await authourizedUser(profile);
    setAuthUser(res);
  };

  useEffect(() => {
    checkAuthUser();
  }),
    [];

  if (authUser) return <div className={className}>{children}</div>;
  else return <div>Not Authorized</div>;
};

export default EditProfile;
