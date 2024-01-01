"use client";

import { useEffect, useState } from "react";
import { MiniBlog } from "@/props";
import { BlogData } from "@/types";

const MiniBlogs = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([
    {
      _id: "",
      title: "",
      description: "",
      bannerImage: "",
      createdAt: "",
    },
  ]);

  const getBlogs = async () => {
    try {
      const res = await fetch("/api/blog");
      const blogs = await res.json();
      setBlogs(blogs.blogs);
      console.log(blogs);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="flex flex-wrap gap-10 p-5 justify-center">
      {blogs
        ? blogs.map((blog: BlogData) => (
            <MiniBlog
              key={blog._id}
              _id={blog._id}
              title={blog.title}
              description={blog.description}
              bannerImage={blog.bannerImage}
              createdAt={blog.createdAt}
            />
          ))
        : "Loading your feed..."}
    </div>
  );
};

export default MiniBlogs;
