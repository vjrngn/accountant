const Joi = require("joi");
const { gql } = require("apollo-server-express");

const signupValidator = Joi.object().keys({
  name: Joi.string()
    .max(254)
    .required()
    .label("Name"),
  username: Joi.string()
    .alphanum()
    .min(4)
    .max(30)
    .required()
    .label("Username"),
  password: Joi.string()
    .required()
    .label("Password"),
  email: Joi.string()
    .email()
    .required()
    .label("Email")
});

module.exports = gql`
  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }

  extend type Mutation {
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
`;

module.exports.signupValidator = signupValidator;
