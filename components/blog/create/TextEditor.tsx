"use client";

import dynamic from "next/dynamic";
import { useContext, useState } from "react";

// constants
import { formats, modules } from "@/constants";

//  react quill
import "react-quill/dist/quill.snow.css";
import { BlogContext } from "@/contexts/blog";

const DynamicReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = () => {
  const [value, setValue] = useState<string>("");

  const { blogData, setBlogData } = useContext(BlogContext);

  const handleChange = (event: any) => {
    setValue(event);
    setBlogData({ ...blogData, content: event });
  };

  return (
    <div className="bg-blur bg-gray-900">
      <DynamicReactQuill
        theme="snow"
        formats={formats}
        modules={modules}
        value={value}
        onChange={handleChange}
        placeholder="Start your blog here..."
      />
    </div>
  );
};

export default TextEditor;
