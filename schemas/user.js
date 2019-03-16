const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }

  extend type Mutation {
    signUp(email: String!, username: String!, name: String, password: String!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    username: String!
    createdAt: String
  }
`;
