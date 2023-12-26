"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";
import { BlogData, UserData } from "@/types";
import { fetchBlog } from "@/lib/actions/blog.action";
import { getUserDataFromID } from "@/lib/actions/user.action";

const BlogPage = ({
  className,
  children,
  blogID,
}: {
  className?: string;
  children: ReactNode;
  blogID: string;
}) => {
  const [blogData, setBlogData] = useState<BlogData>({
    _id: "",
    title: "",
    description: "",
    bannerImage: "",
    createdAt: "",
    author: "",
    content: "",
    updatedAt: "",
  });

  const [authorDetails, setAuthorDetails] = useState<UserData>({
    name: "",
    userName: "",
    profilePicture: "",
  });

  const getBlogData = useCallback(async () => {
    const blog: any = await fetchBlog(blogID);
    setBlogData(blog);
  }, [blogID, setBlogData]);

  useEffect(() => {
    const getAuthorDetails = async () => {
      const authorID = blogData.author;
      if (authorID) {
        const authorData = await getUserDataFromID(authorID);
        setAuthorDetails(authorData);
      }
    };

    getBlogData();
    getAuthorDetails();
  }, [getBlogData, blogData.author]);

  return <div className={className}>{children}</div>;
};

export default BlogPage;
