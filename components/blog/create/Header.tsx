"use client";

import { useContext, useEffect, useState } from "react";

import { BlogContext } from "@/contexts/blog";

//  Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserData } from "@/lib/actions/user.action";
import { UserData } from "@/types";
import axios from "axios";

const Header = () => {
  const [userDetails, setUserDetails] = useState<UserData>({
    _id: "",
  });

  const getUserDetails = async () => {
    const userData = await getUserData();
    setUserDetails(userData);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const { blogData, setBlogData } = useContext(BlogContext);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target;

    input.style.height = "auto";
    input.style.height = `${input.scrollHeight}px`;

    setBlogData({
      ...blogData,
      title: event.target.value,
      author: userDetails._id,
    });
  };

  const discardChanges = () => {
    // window.location.reload();

    console.log(blogData);
  };

  const handlePublish = async () => {
    try {
      if (!blogData.title) {
        return toast.error("Please enter a title");
      }

      if (!blogData.description) {
        return toast.error("Please add a description");
      }
      if (!blogData.bannerImage) {
        return toast.error("Banner image is required");
      }
      if (!blogData.content) {
        return toast.error("The blog is empty!");
      }

      // publish blog
      const res = await axios.post("/api/blog/create", blogData);

      const data = await res.data;

      if (data.status === 201) {
        toast.success(data.message);
        window.location.reload();
      } else {
        toast.error(data.message);
      }

      console.log(blogData);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <header className="flex gap-10 flex-col">
      <div className="w-full flex justify-end gap-5">
        <button
          onClick={handlePublish}
          className="px-5 py-2 bg-green-600/20 text-gray-100 rounded-lg hover:bg-green-600/50 transition-all duration-300"
        >
          Publish
        </button>

        <button
          onClick={discardChanges}
          className="px-5 py-2 bg-red-600/20 text-gray-100 rounded-lg hover:bg-red-600/50 transition-all duration-300"
        >
          Discard
        </button>
      </div>

      <textarea
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className="w-full bg-transparent text-4xl resize-none outline-none font-bold text-center"
      >
        Blog Title
      </textarea>

      <ToastContainer />
    </header>
  );
};

export default Header;
