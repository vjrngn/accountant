const { gql } = require('apollo-server-express');
const { GraphQLModule } = require('@graphql-modules/core');
const GraphQLJSON = require('graphql-type-json');

module.exports = new GraphQLModule({
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
