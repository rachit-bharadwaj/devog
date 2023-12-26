import { ReactNode, createContext, useState } from "react";

import {
  blogDataContextDefaultState,
  blogDataDefaultValues,
} from "@/constants";
import { BlogDataWithAuthor } from "@/types";

export const BlogDataContext = createContext(blogDataContextDefaultState);

export const BlogDataProvider = ({ children }: { children: ReactNode }) => {
  const [blogDataWithAuthor, setBlogDataWithAuthor] =
    useState<BlogDataWithAuthor>(blogDataDefaultValues);

  return (
    <BlogDataContext.Provider
      value={{ blogDataWithAuthor, setBlogDataWithAuthor }}
    >
      {children}
    </BlogDataContext.Provider>
  );
};

export default BlogDataProvider;
