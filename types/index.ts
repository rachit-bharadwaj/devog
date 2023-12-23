import { ElementType } from "react";

export type UserData = {
  _id?: string;
  name?: string;
  userName?: string;
  email?: string;
  profilePicture?: string;
  blogs?: string[];
  bio?: string;
};

export type MenuItem = {
  name: string;
  path: string;
  Icon: ElementType;
};
