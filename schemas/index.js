const { gql } = require("apollo-server-express");
const user = require("./user");
const invoice = require('./invoice');

const root = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  type Subscription {
    _: String
  }
`;

module.exports = [
  root,
  user,
  invoice
];
