const mongoose = require("mongoose");
const { User } = require("../models");
const { UserInputError } = require("apollo-server-express");

module.exports = {
  Query: {
    users: (root, args, context, info) => {
      // TODO: auth, pagination, projection

      return User.find({});
    },

    user: (root, args, context, info) => {
      // TODO: auth, sanitization, projection

      if (!mongoose.Types.ObjectId.isValid(args.id)) {
        throw new UserInputError("No user found");
      }

      return User.findById(args.id);
    }
  },

  Mutation: {
    signUp: (root, args, context, info) => {
      // TODO: validation

      return User.create(args);
    }
  }
};
