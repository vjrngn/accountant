const { User } = require("../models");
const Joi = require("joi");
const { signupValidator } = require("../validators/user");
const jwt = require("jsonwebtoken");
const { successResponse } = require("../utils");
const convertToForm = require("joi-errors-for-forms").form();

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
    signUp: async (_, args) => {
      const { username, email, name, password } = args;

      try {
        await Joi.validate(
          { username, email, name, password },
          signupValidator,
          { abortEarly: false }
        );

        const user = await User.signUp({
          username,
          email,
          name,
          password
        });

        const token = jwt.sign({ sub: user.id }, JWT_SECRET);

        return successResponse({
          message: "User signed up successfully",
          user,
          token
        });
      } catch (error) {
        return {
          code: error.code || "",
          success: false,
          message: error.isJoi ? convertToForm(error) : error.message
        };
      }
    }
  }
};
