import connectDB from "@/database/connection/mongoose";
import Blog from "@/database/models/Blog.schema";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (request: NextRequest) => {

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