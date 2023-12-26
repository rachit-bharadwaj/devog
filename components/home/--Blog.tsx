"use client";

import { useState, useEffect } from "react";

import dynamic from "next/dynamic";

// constants
import { blogModules, formats } from "@/constants";

//  react quill
import "react-quill/dist/quill.snow.css";
const DynamicReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "",
      description: "",
      content: "",
    },
  ]);

  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch("/api/blog");
      const data = await res.json();
      setBlogs(data.blogs);
      console.log(data.blogs);
    };

    getBlogs();
  }, []);

  return (
    <div>
      <DynamicReactQuill
        theme="snow"
        formats={formats}
        modules={blogModules}
        value={blogs[1]?.content}
        readOnly={true}
        id="quill-read-only"
      />
    </div>
  );
};

export default Blog;
