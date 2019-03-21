const Joi = require('joi')

module.exports.signupValidator = Joi.object().keys({
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