import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    college: String,
    branch: String,
    domain: String,
    message: String,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Application ||
  mongoose.model("Application", applicationSchema);