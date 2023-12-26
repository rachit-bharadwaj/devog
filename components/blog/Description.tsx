"use client";

import { useContext } from "react";
import { BlogContext } from "@/contexts/blog";

const Description = () => {
  const { blogData, setBlogData } = useContext(BlogContext);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target;

    input.style.height = "auto";
    input.style.height = `${input.scrollHeight}px`;

    setBlogData({ ...blogData, description: event.target.value });
  };

  return (
    <div>
      <textarea
        className="w-full text-lg bg-transparent resize-none outline-none text-justify scrollbar-none"
        onChange={handleChange}
      >
        Blog Description
      </textarea>
    </div>
  );
};

export default Description;
