const { gql } = require("apollo-server-express");
const { GraphQLModule } = require("@graphql-modules/core");
const userResolvers = require("../resolvers/user");

module.exports = new GraphQLModule({
  typeDefs: gql`
    type Query {
      user(id: ID!): User
      users: [User!]!
    }

    type UserSignUpMutationResponse {
      code: String!
      success: Boolean!
      message: String
      token: String
      user: User
    }

    type Mutation {
      signUp(
        email: String!
        username: String!
        name: String!
        password: String!
      ): UserSignUpMutationResponse
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
