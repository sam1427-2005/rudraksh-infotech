export async function DELETE(req, { params }) {
  try {
    await connectDB();

    await Application.findByIdAndDelete(params.id);

    return NextResponse.json({
      success: true,
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