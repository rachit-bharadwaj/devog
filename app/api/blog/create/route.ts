import { type NextRequest, NextResponse } from "next/server";

import connectDB from "@/database/connection/mongoose";
import Blog from "@/database/models/Blog.schema";

export const POST = async (request: NextRequest) => {
  try {
    await connectDB();

    const reqBody = await request.json();

    const { title, description, bannerImage, content, author } = reqBody;

    const newBlog = new Blog({
      title: title,
      description: description,
      bannerImage: bannerImage,
      content: content,
      author: author,
    });

    await newBlog.save();

    return NextResponse.json({
      status: 201,
      message: "Blog published!",
      newBlog,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
