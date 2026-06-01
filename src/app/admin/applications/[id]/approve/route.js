import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";
import { sendMail } from "@/lib/sendMail";

export async function POST(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    const application = await Application.findByIdAndUpdate(
      id,
      { $set: { status: "Approved" } },
      { new: true }
    );

    if (application?.email) {
      await sendMail({
        to: application.email,
        subject: "Internship Application Approved - Rudraksh Infotech",
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;">
            <h2 style="color:#0891b2;">Congratulations ${application.name}!</h2>

            <p>Dear <b>${application.name}</b>,</p>

            <p>
              We are pleased to inform you that your internship application for
              <b>${application.domain}</b> has been approved by
              <b>Rudraksh Infotech</b>.
            </p>

            <p>
              Please join the official WhatsApp group for onboarding updates,
              project instructions, internship schedule and announcements.
            </p>

            <p>
              <a href="https://chat.whatsapp.com/F07dXCn0TZlBvWjtLs1ygo?s=cl&p=a&mlu=0"
                 style="display:inline-block;background:#22c55e;color:white;padding:12px 18px;border-radius:8px;text-decoration:none;font-weight:bold;">
                Join WhatsApp Group
              </a>
            </p>

            <p><b>Internship Status:</b> Approved</p>

            <br/>

            <p>
              Regards,<br/>
              <b>Rudraksh Infotech</b><br/>
              Software House & IT Solutions
            </p>
          </div>
        `,
      });
    }

    return NextResponse.redirect(new URL("/admin/applications", req.url));
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}