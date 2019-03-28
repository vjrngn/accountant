const { gql } = require("apollo-server-express");
const invoiceResolvers = require("../resolvers");
const { GraphQLModule } = require("@graphql-modules/core");

const { InvoiceItem, TaxItem } = require("../../common/schema");
const User = require("../../user/schema");
const Client = require("../../client/schema");

module.exports = new GraphQLModule({
  imports: [User, Client, InvoiceItem, TaxItem],

  typeDefs: gql`
    type Query {
      invoices: [Invoice!]!
      invoice(id: ID!): Invoice
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
