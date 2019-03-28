const { gql } = require("apollo-server-express");
const { GraphQLModule } = require("@graphql-modules/core");
const { GeoState, Country } = require("../../common/schema");

module.exports = new GraphQLModule({
  imports: [GeoState, Country],
  typeDefs: gql`
    type Client {
      id: ID!
      name: String!
      email: String
      addressLine1: String
      addressLine2: String
      city: String
      state: GeoState
      country: Country
      zipCode: String
    }
  `
});
