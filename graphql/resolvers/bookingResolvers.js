const Booking = require("../../db/models/bookingModel");

const bookingResolvers = {
  Query: {
    bookings: async () => {
      try {
        return await Booking.find()
          .populate("userId")
          .populate("tripId")
          .lean();
      } catch (error) {
        throw new Error("Error fetching bookings: " + error.message);
      }
    },
    booking: async (_, { id }) => {
      try {
        const booking = await Booking.findById(id)
          .populate("userId")
          .populate("tripId")
          .lean();
        if (!booking) throw new Error("Booking not found");
        return booking;
      } catch (error) {
        throw new Error("Error fetching booking: " + error.message);
      }
    },
  },

  Mutation: {
    createBooking: async (_, { input }) => {
      try {
        const booking = new Booking(input);
        return await booking.save();
      } catch (error) {
        throw new Error("Error creating booking: " + error.message);
      }
    },

    updateBooking: async (_, { id, input }) => {
      try {
        const booking = await Booking.findByIdAndUpdate(id, input, {
          new: true,
        });
        if (!booking) throw new Error("Booking not found");
        return booking;
      } catch (error) {
        throw new Error("Error updating booking: " + error.message);
      }
    },

    deleteBooking: async (_, { id }) => {
      try {
        const booking = await Booking.findByIdAndDelete(id);
        if (!booking) throw new Error("Booking not found");
        return "Booking deleted successfully";
      } catch (error) {
        throw new Error("Error deleting booking: " + error.message);
      }
    },
  },
};

module.exports = bookingResolvers;
