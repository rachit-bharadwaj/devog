"use client";

import BlogProvider from "@/contexts/blog";
import { ReactNode } from "react";

const BlogContextProvider = ({ children }: { children: ReactNode }) => {
  return <BlogProvider>{children}</BlogProvider>;
};

export default BlogContextProvider;
