"use server";

import connectDB from "@/database/connection/mongoose";
import Blog from "@/database/models/Blog.schema";

export const fetchBlogs = async () => {
  try {
    await connectDB();

    const blogs = await Blog.find({});

    return blogs;
  } catch (error:any) {
    console.error("Error fetching blogs:", error.message);
    throw error;
  }
};

export const fetchBlog = async (id: string) => {
  await connectDB();

  const blog = await Blog.findById(id);

  return blog;
};
