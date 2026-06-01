import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";

export async function POST(req) {
  try {
    await connectDB();

    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: "ID and status are required" },
        { status: 400 }
      );
    }

    const application = await Application.findByIdAndUpdate(
      id,
      { $set: { status } },
      { new: true }
    );

    if (!application) {
      return NextResponse.json(
        { success: false, error: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      application,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}