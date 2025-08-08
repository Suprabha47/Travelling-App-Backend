const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BookingSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  tripId: { type: Schema.Types.ObjectId, ref: "Trip", required: true },
  bookingDate: { type: Date, required: true, default: Date.now },
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    required: true,
  },
});

module.exports = model("Booking", BookingSchema);
