const { gql } = require("apollo-server-express");
const GraphQLJSON = require("graphql-type-json");
const { GraphQLModule } = require("@graphql-modules/core");

const GeoState = new GraphQLModule({
  typeDefs: gql`
    type GeoState {
      id: ID!
    }
  `
});

const InvoiceItem = new GraphQLModule({
  typeDefs: gql`
    type InvoiceItem {
      id: ID!
    }
  `
});

const Response = new GraphQLModule({
  typeDefs: gql`
    scalar JSON

    type Response {
      code: String!
      success: Boolean!
      message: JSON
    }
  `,
  resolvers: {
    JSON: GraphQLJSON
  }
});

const TaxItem = new GraphQLModule({
  typeDefs: gql`
    type TaxItem {
      id: ID!
    }
  `
});

const Country = new GraphQLModule({
  typeDefs: gql`
    type Country {
      id: ID!
    }
  `
});

module.exports = {
  GeoState,
  InvoiceItem,
  TaxItem,
  Response,
  Country
};
