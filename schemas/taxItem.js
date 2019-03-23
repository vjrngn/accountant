const { gql } = require('apollo-server-express');
const { GraphQLModule } = require('@graphql-modules/core');

module.exports = new GraphQLModule({
  typeDefs: gql`
    type TaxItem {
      id: ID!
    }
  `
});
