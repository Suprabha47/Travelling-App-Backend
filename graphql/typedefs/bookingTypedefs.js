const { gql } = require("graphql-tag");

const bookingTypedefs = gql`
  type Booking {
    id: ID!
    userId: User!
    tripId: Trip!
    bookingDate: String!
    totalAmount: Float!
    status: String!
  }

  input BookingInput {
    userId: ID!
    tripId: ID!
    totalAmount: Float!
    status: String!
  }

  input UpdateBookingInput {
    totalAmount: Float
    status: String
  }

  type Query {
    bookings: [Booking!]!
    booking(id: ID!): Booking!
  }

  type Mutation {
    createBooking(input: BookingInput!): Booking!
    updateBooking(id: ID!, input: UpdateBookingInput!): Booking
    deleteBooking(id: ID!): String
  }
`;

module.exports = bookingTypedefs;
