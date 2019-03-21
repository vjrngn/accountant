const { gql } = require("apollo-server-express");
const invoiceResolvers = require("../resolvers/invoice");
const { GraphQLModule } = require("@graphql-modules/core");

module.exports = new GraphQLModule({
  typeDefs: gql`
    type Query {
      invoices: [Invoice!]!
    }

    type Business {
      _: String
    }

    type User {
      _: String
    }

    type Client {
      _: String
    }

    type InvoiceItem {
      id: ID!
    }

    type TaxItem {
      id: ID!
    }

    type Invoice {
      id: ID!
      number: String!
      date: String!
      user: User!
      items: [InvoiceItem]!
      taxes: [TaxItem]!
      totalBeforeTax: Float!
      total: Float!
      client: Client!
      createdAt: String!
    }
  `,
  resolvers: invoiceResolvers
});
