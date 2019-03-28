const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: String,
    address1: String,
    address2: String,
    email: String,
    contactNumbers: [Schema.Types.Mixed],
    city: String,
    state: String,
    country: String,
    zip: String,
    taxRegistrations: [Schema.Types.Mixed],
    logoUrl: String,

    /** meta */
    verifiedAt: Date
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Business", schema);
