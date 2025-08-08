const { gql } = require("graphql-tag");

const paymentTypedefs = gql`
  type Payment {
    id: ID!
    booking: Booking!
    amount: Float!
    paymentDate: String
    paymentMethod: payMethod!
    status: payStatus!
  }

  input PaymentInput {
    amount: Float!
    paymentDate: String
    paymentMethod: payMethod!
    status: payStatus
  }

  input PaymentStatusInput {
    status: payStatus!
  }

  enum payMethod {
    credit_card
    upi
    paypal
    net_banking
    cash
  }
  enum payStatus {
    success
    failed
    pending
  }

  type Query {
    payments: [Payment!]!
    payment(id: ID!): Payment
  }

  type Mutation {
    payment(input: PaymentInput): Payment
    paymentStatusUpdate(id: ID!, input: PaymentStatusInput): Payment
  }
`;

module.exports = paymentTypedefs;
