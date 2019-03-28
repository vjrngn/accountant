const { gql } = require("apollo-server-express");
const { GraphQLModule } = require("@graphql-modules/core");

module.exports = new GraphQLModule({
  typeDefs: gql`
    type Query {
      business(id: ID!): Business
    }

    type Business {
      id: ID!
      name: String!
      addressLine1: String
      addressLine2: String
      city: String
      state: String
      country: String
    }
  `
})