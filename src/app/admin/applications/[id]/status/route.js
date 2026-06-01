import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";

async function updateApplicationStatus(req, context) {
  try {
    await connectDB();

    const params = await context.params;
    const id = params.id;

    let status = "Pending";

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const body = await req.json();
      status = body.status;
    } else {
      const formData = await req.formData();
      status = formData.get("status");
    }

    if (!["Pending", "Approved", "Rejected"].includes(status)) {
      return NextResponse.json(
        { success: false, error: "Invalid status" },
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

export async function PATCH(req, context) {
  return updateApplicationStatus(req, context);
}

export async function POST(req, context) {
  return updateApplicationStatus(req, context);
}