import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";

export async function POST(req, { params }) {
  await connectDB();

  await Application.findByIdAndUpdate(params.id, {
    status: "Approved",
  });

  redirect("/admin/applications");
}