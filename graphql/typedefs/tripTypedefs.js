const { gql } = require("graphql-tag");

const tripTypedefs = gql`
  type Trip {
    id: ID!
    title: String!
    description: String
    destination: String!
    startDate: String!
    endDate: String!
    price: Float!
    availableSeats: Int
    totalSeats: Int!
    images: [String]
  }

  input TripInput {
    title: String!
    description: String
    destination: String!
    startDate: String!
    endDate: String!
    price: Float!
    totalSeats: Int!
    images: [String]
  }

  input SeatsInput {
    availableSeats: Int
    totalSeats: Int
  }

  type Query {
    trips: [Trip!]!
    trip(id: ID!): Trip!
  }

  type Mutation {
    createTrip(input: TripInput!): Trip!
    updateSeats(id: ID!, input: SeatsInput!): Trip
    cancelTrip(id: ID!): String
  }
`;
module.exports = tripTypedefs;
