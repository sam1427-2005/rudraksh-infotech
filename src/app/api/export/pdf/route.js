import { NextResponse } from "next/server";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";

export async function GET() {
  try {
    await connectDB();

    const applications = await Application.find().sort({ createdAt: -1 }).lean();

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Rudraksh Infotech - Internship Applications", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Name", "Email", "Phone", "Domain", "Status"]],
      body: applications.map((app) => [
        app.name || "",
        app.email || "",
        app.phone || "",
        app.domain || "",
        app.status || "Pending",
      ]),
    });

    const buffer = Buffer.from(doc.output("arraybuffer"));

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=applications.pdf",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}