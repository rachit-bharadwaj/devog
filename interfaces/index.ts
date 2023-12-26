import { Dispatch, SetStateAction } from "react";
import { BlogData, BlogDataWithAuthor } from "@/types";

export interface BlogContextInterface {
  blogData: BlogData;
  setBlogData: Dispatch<SetStateAction<BlogData>>;
}

export interface BlogDataContextInterface {
  blogDataWithAuthor: BlogDataWithAuthor;
  setBlogDataWithAuthor: Dispatch<SetStateAction<BlogDataWithAuthor>>;
}
