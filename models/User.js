const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

let User;

const userSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    password: String,
    email: {
      type: String,
      validator: {
        validator: async function (email) {
          return await User.where({ email }).countDocuments() === 0;
        },
        message: ({ value }) => "This email is taken."
      }
    }
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

User = mongoose.model("User", userSchema);

module.exports = User;
