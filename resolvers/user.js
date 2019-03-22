const mongoose = require("mongoose");
const { User } = require("../models");
const Joi = require("joi");
const { signUpValidtor } = require("../validators/user");
const { UserInputError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

module.exports = {
  Query: {
    users: (root, args, context, info) => {
      // TODO: auth, pagination, projection

      return User.find({});
    },

    user: (root, args, context, info) => {
      // TODO: auth, sanitization, projection

      return User.findById(args.id);
    }
  },

  Mutation: {
    signUp: async (root, args, context, info) => {
      // TODO: validation

      const { username, email, name, password } = args;

      try {
        const user = await User.signUp({
          username,
          email,
          name,
          password
        });

        const token = jwt.sign({ sub: user.id }, JWT_SECRET);

        return {
          code: 201,
          success: true,
          message: "User signed up successfully",
          user,
          token
        };
      } catch (error) {
        return {
          code: error.code || "",
          success: false,
          message: error.message
        };
      }
    }
  }
};
