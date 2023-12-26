import { ReactNode, createContext, useState } from "react";

import { blogContextDefaultState, blogDefaultValues } from "@/constants";
import { BlogData } from "@/types";

export const BlogContext = createContext(blogContextDefaultState);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [blogData, setBlogData] = useState<BlogData>(blogDefaultValues);

  return (
    <BlogContext.Provider value={{ blogData, setBlogData }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
