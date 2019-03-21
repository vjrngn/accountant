const { gql } = require("apollo-server-express");
const { GraphQLModule } = require("@graphql-modules/core");
const userResolvers = require('../resolvers/user');

module.exports = new GraphQLModule({
  typeDefs: gql`
    type Query {
      user(id: ID!): User
      users: [User!]!
    }

    type Mutation {
      signUp(
        email: String!
        username: String!
        name: String!
        password: String!
      ): User
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

// module.exports = gql`
//   extend type Query {
//     user(id: ID!): User
//     users: [User!]!
//   }

//   extend type Mutation {
//     signUp(
//       email: String!
//       username: String!
//       name: String!
//       password: String!
//     ): User
//   }

//   type User {
//     id: ID!
//     name: String!
//     email: String!
//     username: String!
//     createdAt: String
//   }
// `;
