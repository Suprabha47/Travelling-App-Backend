const { gql } = require("graphql-tag");

const userTypedefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    phone: String!
    role: String
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
    phone: String!
    role: String
  }

  input loginInput {
    email: String!
    password: String!
  }

  input UpdateInput {
    username: String
    email: String
    phone: String
    role: String
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  type Mutation {
    registerUser(input: UserInput!): User!
    loginUser(input: loginInput!): User!
    updateUser(id: ID!, input: UpdateInput): User
    deleteUser(id: ID!): String
  }
`;

module.exports = userTypedefs;
