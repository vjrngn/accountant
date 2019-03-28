const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: String,
    email: String,
    contactNumbers: [Schema.Types.Mixed],
    address1: String,
    address2: String,
    city: String,
    state: String,
    country: String,

    /** relationships */
    business: {
      type: Schema.Types.ObjectId,
      rel: "Business"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Client", schema);
