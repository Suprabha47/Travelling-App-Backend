const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const userTypedefs = require("../graphql/typedefs/userTypedefs");
const tripTypedefs = require("../graphql/typedefs/tripTypedefs");
const bookingTypedefs = require("../graphql/typedefs/bookingTypedefs");
const paymentTypedefs = require("../graphql/typedefs/paymentTypedefs");
const userResolvers = require("../graphql/resolvers/userResolvers");
const tripResolvers = require("../graphql/resolvers/tripResolvers");
const bookingResolvers = require("../graphql/resolvers/bookingResolvers");
const paymentResolvers = require("../graphql/resolvers/paymentResolvers");

const typeDefs = mergeTypeDefs([
  userTypedefs,
  tripTypedefs,
  bookingTypedefs,
  paymentTypedefs,
]);

const resolvers = mergeResolvers([
  userResolvers,
  tripResolvers,
  bookingResolvers,
  paymentResolvers,
]);

module.exports = { typeDefs, resolvers };
