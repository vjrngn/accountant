const { gql } = require("apollo-server-express");
const { GraphQLModule } = require("@graphql-modules/core");
const userResolvers = require("../resolvers/user");
const Response = require('./response');

module.exports = new GraphQLModule({
  imports: [
    Response
  ],
  typeDefs: gql`
    type Query {
      user(id: ID!): User
      users: [User!]!
    }

    extend type Response {
      token: String
      user: User
    }

    type Mutation {
      signUp(
        email: String!
        username: String!
        name: String!
        password: String!
      ): Response
    }

    type User {
      id: ID!
      name: String!
      email: String!
      username: String!
      createdAt: String
    }
  `,
  resolvers: userResolvers
});
