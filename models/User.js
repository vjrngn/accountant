const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

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
    try {
      this.password = await bcrypt.hash(this.password, 10);
    } catch (e) {
      next(e);
    }
  }

  next();
});

module.exports = mongoose.model("User", userSchema);
