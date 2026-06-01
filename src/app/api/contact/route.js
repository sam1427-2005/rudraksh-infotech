import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const enquiry = await Contact.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      domain: body.domain,
      message: body.message,
    });

    return NextResponse.json({
      success: true,
      enquiry,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const enquiries = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      enquiries,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}