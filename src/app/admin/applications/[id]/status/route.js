import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";

export async function POST(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;
    const body = await req.json();

    const application = await Application.findByIdAndUpdate(
      id,
      {
        $set: {
          status: body.status,
        },
      },
      {
        new: true,
      }
    );

    return NextResponse.json({
      success: true,
      application,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}