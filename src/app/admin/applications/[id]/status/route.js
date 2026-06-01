import { redirect } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";

export async function POST(req, { params }) {
  await connectDB();

  const formData = await req.formData();
  const status = formData.get("status");

  await Application.findByIdAndUpdate(params.id, {
    status,
  });

  redirect("/admin/applications");
}