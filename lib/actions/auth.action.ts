"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import jwt from "jsonwebtoken";

export const logout = async () => {
  cookies().delete("token");
  redirect("/welcome");
};

export const getCookieData = async () => {
  const token = cookies().get("token")?.value || "";
  if (!token) return null;
  const tokenData: any = jwt.verify(token, process.env.JWT_SECRET!);
  return tokenData.id;
};
