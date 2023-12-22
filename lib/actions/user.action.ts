"use server";

import { getCookieData } from "./auth.action";

// database
import connectDB from "@/database/connection/mongoose";
import User from "@/database/models/User.schema";

let userID: string;

export const getUserData = async () => {
  await connectDB();
  userID = await getCookieData();
  const userData = await User.findById(userID);

  return userData;
};

export const updateProfilePicture = async (profilePicture: string) => {
  await connectDB();
  const user = await User.findById(userID);

  user.profilePicture = profilePicture;
  await user.save();
};
