import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";

export async function GET() {
  try {
    await connectDB();

    const applications = await Application.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      applications,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch applications",
        error: error.message,
      },
      { status: 500 }
    );
  }
}