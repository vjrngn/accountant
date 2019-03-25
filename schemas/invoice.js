const { gql } = require("apollo-server-express");
const invoiceResolvers = require("../resolvers/invoice");
const { GraphQLModule } = require("@graphql-modules/core");
const userSchema = require("./user");
const businessSchema = require("./business");
const clientSchema = require("./client");
const invoiceItemSchema = require("./invoiceItem");
const taxItemSchema = require("./taxItem");

module.exports = new GraphQLModule({
  imports: [
    userSchema,
    businessSchema,
    clientSchema,
    invoiceItemSchema,
    taxItemSchema
  ],

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
