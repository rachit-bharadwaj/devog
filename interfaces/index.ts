import { BlogData } from "@/types";
import { Dispatch, SetStateAction } from "react";

export interface BlogContextInterface {
  blogData: BlogData;
  setBlogData: Dispatch<SetStateAction<BlogData>>;
}
