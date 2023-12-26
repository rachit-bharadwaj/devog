"use client";

import { useEffect, useState } from "react";
import { MiniBlog } from "@/props";
import { BlogData } from "@/types";
import { fetchBlogs } from "@/lib/actions/blog.action";

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
    const blogs: any = await fetchBlogs();
    setBlogs(blogs);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="flex flex-wrap gap-10 p-5 justify-center">
      {blogs.map((blog: BlogData) => (
        <MiniBlog
          key={blog._id}
          _id={blog._id}
          title={blog.title}
          description={blog.description}
          bannerImage={blog.bannerImage}
          createdAt={blog.createdAt}
        />
      ))}
    </div>
  );
};

export default MiniBlogs;
