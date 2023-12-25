"use server";

import { getCookieData } from "./auth.action";

// database
import connectDB from "@/database/connection/mongoose";
import User from "@/database/models/User.schema";
import { UserData } from "@/types";

let userID: string;

export const getUserData = async () => {
  await connectDB();
  userID = await getCookieData();
  const userData = await User.findById(userID);

  return userData;
};

export const getUserDataFromUserName = async (userName: string | undefined) => {
  await connectDB();

  const userData = await User.findOne({ userName });

  return userData;
};

export const updateProfilePicture = async (profilePicture: string) => {
  await connectDB();
  const user = await User.findById(userID);

  user.profilePicture = profilePicture;
  await user.save();
};

export const removeProfilePicture = async () => {
  await connectDB();

  const user = await User.findById(userID);
  user.profilePicture = "";
  await user.save();
};

export const checkUserName = async (userName: string) => {
  await connectDB();

  const user = await User.findOne({ userName });
  if (user) {
    return true;
  } else {
    return false;
  }
};

export const authourizedUser = async (profile: string | undefined) => {
  await connectDB();

  const user = await getUserData();
  if (!user) return false;
  if (user.userName === profile) return true;
  else return false;
};

export const updateProfile = async ({ name, userName, bio }: UserData) => {
  await connectDB();

  const user = await User.findById(userID);

  user.name = name;
  user.userName = userName;
  user.bio = bio;

  await user.save();
};
