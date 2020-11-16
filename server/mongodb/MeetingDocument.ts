import mongoose, { Schema, Types } from "mongoose";

const MeetingSchema = new Schema(
  {
    availability: {
      type: Types.ObjectId,
      ref: "Availability",
      required: true,
    },
    nonprofit: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    application: {
      type: Types.ObjectId,
      ref: "Application",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Meeting ||
  mongoose.model("Meeting", MeetingSchema);
