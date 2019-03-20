const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    invoices: [Invoice!]!
  }

  type Invoice {
    id: ID!
    number: String!
    date: String!
  }
`
