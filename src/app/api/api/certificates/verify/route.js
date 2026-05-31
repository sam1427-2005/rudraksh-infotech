import { NextResponse } from "next/server";

export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({
      success: false,
      status: "Invalid",
      message: "Certificate ID is required",
    });
  }

  return NextResponse.json({
    success: true,
    certificateId: id,
    status: "Valid",
    holder: "Rudraksh Infotech Intern",
    domain: "Web Development",
    issuedBy: "Rudraksh Infotech",
  });
}