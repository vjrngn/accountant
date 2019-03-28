const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  symbol: String,
  name: String,
  symbol_native: String,
  decimal_digits: Number,
  rounding: Number,
  code: String,
  name_plural: String
});

module.exports = mongoose.model("Currency", schema);
