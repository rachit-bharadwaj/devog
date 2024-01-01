import { NextResponse } from "next/server";

import connectDB from "@/database/connection/mongoose";
import Blog from "@/database/models/Blog.schema";


export const dynamic = 'force-dynamic';

export const GET = async () => {
  try {
    await connectDB();

    const blogs = await Blog.find({});

    return NextResponse.json({
      status: 200,
      blogs,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
