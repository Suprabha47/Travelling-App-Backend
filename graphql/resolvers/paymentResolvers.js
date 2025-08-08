const Payment = require("../../db/models/paymentModel");
const Booking = require("../../db/models/bookingModel");

const paymentResolvers = {
  Query: {
    payments: async () => {
      return await Payment.find();
    },
    payment: async (_, { id }) => {
      return await Payment.findById(id);
    },
  },

  Mutation: {
    payment: async (_, { input }) => {
      const newPayment = new Payment({
        bookingId: input.bookingId,
        amount: input.amount,
        paymentDate: input.paymentDate || new Date(),
        paymentMethod: input.paymentMethod,
        status: input.status || "pending",
      });
      return await newPayment.save();
    },
    paymentStatusUpdate: async (_, { id, input }) => {
      return await Payment.findByIdAndUpdate(
        id,
        { $set: input },
        { new: true }
      );
    },
  },

  // Field resolver for nested booking data
  Payment: {
    booking: async (parent) => {
      return await Booking.findById(parent.bookingId);
    },
  },
};

module.exports = paymentResolvers;
