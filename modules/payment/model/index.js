const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    amount: Number,
    date: Date,
    paymentMode: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Payment", schema);
