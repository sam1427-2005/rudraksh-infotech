import { redirect } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";
import { sendMail } from "@/lib/sendMail";

export async function POST(req, { params }) {
  await connectDB();

  const application = await Application.findByIdAndUpdate(
    params.id,
    { status: "Approved" },
    { new: true }
  );

  if (application?.email) {
    await sendMail({
      to: application.email,
      subject: "Internship Application Approved - Rudraksh Infotech",
      html: `
        <h2>Congratulations ${application.name}!</h2>
        <p>Your internship application for <b>${application.domain}</b> has been approved.</p>
        <p>Our team will contact you soon with further instructions.</p>
        <br/>
        <p>Regards,<br/>Rudraksh Infotech</p>
      `,
    });
  }

  redirect("/admin/applications");
}