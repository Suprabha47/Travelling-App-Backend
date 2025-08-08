const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TripSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    destination: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    price: { type: Number, required: true },
    availableSeats: { type: Number, required: true },
    totalSeats: { type: Number, required: true },
    images: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = model("Trip", TripSchema);
