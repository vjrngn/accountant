const Joi = require("joi");
const User = require("../model");
const { signupValidator } = require("../../../validators/user");

module.exports = {
  signUp: async ({ name, email, username, password }) => {
    await Joi.validate({ name, email, username, password }, signupValidator, {
      abortEarly: false
    });

    return User.signUp({
      username,
      email,
      name,
      password
    });
  }
};
