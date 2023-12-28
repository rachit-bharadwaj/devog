import { Dispatch, SetStateAction } from "react";
import { BlogData } from "@/types";

export interface BlogContextInterface {
  blogData: BlogData;
  setBlogData: Dispatch<SetStateAction<BlogData>>;
}

