const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { UserInputError } = require("apollo-server-express");

let User;

const userSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    password: String,
    email: String
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

/**
 * Check if a user account exists
 *
 * @param {Object} input
 * @param {String} input.username
 * @param {String} input.email
 *
 * @return {Boolean}
 */
userSchema.statics.exists = async function exists({ username, email }) {
  const user = await User.findOne({
    $or: [{ username }, { email }]
  });

  const userExists = !!user;

  return userExists;
};

/**
 * Sign up a new user
 *
 * @param {Object} input
 * @param {String} input.username
 * @param {String} input.email
 * @param {String} input.name
 * @param {String} input.password
 *
 * @return {User}
 */
userSchema.statics.signUp = async function signUp({
  username,
  email,
  name,
  password
}) {
  const exists = await User.exists({ username, email });

  if (exists === true) {
    throw new UserInputError(
      "That email / username is unavailable. Please try again"
    );
  }

  return User.create({
    username,
    email,
    name,
    password
  });
};

User = mongoose.model("User", userSchema);

module.exports = User;
