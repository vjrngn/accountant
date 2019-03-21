const { gql } = require("apollo-server-express");
const { GraphQLModule } = require("@graphql-modules/core");


module.exports = new GraphQLModule({
  typeDefs: gql`
    type GeoState {
      _: String
    }

    type Country {
      _: String
    }

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
})
