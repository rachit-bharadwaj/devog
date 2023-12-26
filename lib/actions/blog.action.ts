"use server";

import connectDB from "@/database/connection/mongoose";
import Blog from "@/database/models/Blog.schema";

export const fetchBlogs = async () => {
  await connectDB();

  const blogs = await Blog.find({});

  return blogs;
};

export const fetchBlog = async (id: string) => {
  await connectDB();

  const blog = await Blog.findById(id);

  return blog;
};
