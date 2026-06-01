import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";

export async function PATCH(req, context) {
  try {
    await connectDB();

    const params = await context.params;
    const id = params.id;

    const body = await req.json();
    const status = body.status;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Application ID missing" },
        { status: 400 }
      );
    }

    if (!["Pending", "Approved", "Rejected"].includes(status)) {
      return NextResponse.json(
        { success: false, error: "Invalid status value" },
        { status: 400 }
      );
    }

    const application = await Application.findByIdAndUpdate(
      id,
      { $set: { status: status } },
      { new: true, runValidators: true }
    );

    if (!application) {
      return NextResponse.json(
        { success: false, error: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Status updated successfully",
      application,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}