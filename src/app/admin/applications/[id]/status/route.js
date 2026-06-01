import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";

export async function POST(req, context) {
  try {
    await connectDB();

    const params = await context.params;
    const id = params.id;

    const formData = await req.formData();
    const status = formData.get("status");

    await Application.updateOne(
      { _id: id },
      { $set: { status: status } }
    );

    return NextResponse.redirect(new URL("/admin/applications", req.url));
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}