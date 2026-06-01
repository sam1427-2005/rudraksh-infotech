import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";
import { sendMail } from "@/lib/sendMail";

export async function POST(req) {
  try {
    await connectDB();

    const { id, status } = await req.json();

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

    if (status === "Approved" && application.email) {
      await sendMail({
        to: application.email,
        subject: "Internship Application Approved - Rudraksh Infotech",
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.7;color:#111827;">
            <h2 style="color:#0891b2;">Congratulations ${application.name}!</h2>

            <p>Dear <b>${application.name}</b>,</p>

            <p>
              Your internship application for <b>${application.domain}</b>
              has been approved by <b>Rudraksh Infotech</b>.
            </p>

            <p><b>Joining Instructions:</b></p>
            <ul>
              <li>Join the official WhatsApp group using the link below.</li>
              <li>Further onboarding details and tasks will be shared in the group.</li>
              <li>Keep checking your email and WhatsApp for updates.</li>
            </ul>

            <p>
              <a href="https://chat.whatsapp.com/F07dXCn0TZlBvWjtLs1ygo"
                style="display:inline-block;background:#22c55e;color:#ffffff;padding:12px 18px;border-radius:8px;text-decoration:none;font-weight:bold;">
                Join WhatsApp Group
              </a>
            </p>

            <p>
              WhatsApp Group Link:<br/>
              <a href="https://chat.whatsapp.com/F07dXCn0TZlBvWjtLs1ygo">
                https://chat.whatsapp.com/F07dXCn0TZlBvWjtLs1ygo
              </a>
            </p>

            <p><b>Status:</b> Approved</p>

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