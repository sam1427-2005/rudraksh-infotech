import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const application = await Application.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      college: body.college,
      branch: body.branch,
      domain: body.domain,
      message: body.message,
      status: "Pending",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Application saved successfully",
        application,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Application not saved",
        error: error.message,
      },
      { status: 500 }
    );
  }
}