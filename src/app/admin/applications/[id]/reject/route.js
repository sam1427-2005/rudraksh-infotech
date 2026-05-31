import { redirect } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";

export async function POST(req, { params }) {
  await connectDB();

  await Application.findByIdAndUpdate(params.id, {
    status: "Rejected",
  });

  redirect("/admin/applications");
}