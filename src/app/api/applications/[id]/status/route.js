import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";

export async function PATCH(req, { params }) {
  try {
    await connectDB();

    const { status } = await req.json();

    const application = await Application.findByIdAndUpdate(
      params.id,
      { status },
      { new: true }
    );

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