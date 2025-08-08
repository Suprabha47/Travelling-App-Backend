const Trip = require("../../db/models/tripModel");

const tripResolvers = {
  Query: {
    trips: async () => {
      try {
        return await Trip.find().lean();
      } catch (error) {
        throw new Error("Error fetching trips: " + error.message);
      }
    },

    trip: async (_, { id }) => {
      try {
        const trip = await Trip.findById(id).lean();
        if (!trip) throw new Error("Trip not found");
        return trip;
      } catch (error) {
        throw new Error("Error fetching trip: " + error.message);
      }
    },
  },

  Mutation: {
    createTrip: async (_, { input }) => {
      try {
        const trip = new Trip(input);
        return await trip.save();
      } catch (error) {
        throw new Error("Error creating trip: " + error.message);
      }
    },

    updateSeats: async (_, { id, input }) => {
      try {
        const updatedTrip = await Trip.findByIdAndUpdate(
          id,
          { $set: input },
          { new: true }
        );
        if (!updatedTrip) throw new Error("Trip not found");
        return updatedTrip;
      } catch (error) {
        throw new Error("Error updating seats: " + error.message);
      }
    },

    cancelTrip: async (_, { id }) => {
      try {
        const deletedTrip = await Trip.findByIdAndDelete(id);
        if (!deletedTrip) throw new Error("Trip not found");
        return "Trip cancelled successfully";
      } catch (error) {
        throw new Error("Error cancelling trip: " + error.message);
      }
    },
  },
};

module.exports = tripResolvers;
